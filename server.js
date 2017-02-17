const Express = require('express');
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const NODE_ENV = require('./env').NODE_ENV;
const isProd = process.env.NODE_ENV === NODE_ENV.PRODUCTION;

const webpackConfig = isProd ? require('./webpack.config.prod') : require('./webpack.config.dev');
const pathCfg = require('./path.cfg');

// Initialize the Express App
const app = new Express();

const compiler = webpack(webpackConfig);

if (isProd) {
  compiler.run(function(err, stats) {
    if(err) throw new Error("webpack", err);
    const jsonStats = stats.toJson();
    let log = stats.toString();
    console.log(log);
  });
} else {
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true, 
    // colors: true,
    publicPath: pathCfg.public
  }));
  app.use(webpackHotMiddleware(compiler));
}

app.use(pathCfg.public, Express.static(pathCfg.output));

function getLocalIpAddress() {
  const os = require('os');
  const ifaces = os.networkInterfaces();
  const ips = [];
  Object.keys(ifaces).forEach(ifname => {

    ifaces[ifname].forEach(iface => {
      if (iface.family !== 'IPv4' || iface.internal !== false) {
        // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
        return;
      }
      ips.push(iface.address);
    });
  });
  return ips;
}

const getAvaliableAdress = host => {
  // const address = [host];
  if (!['0.0.0.0', 'localhost', '127.0.0.1'].indexOf(host)) {
    return ['0.0.0.0', 'localhost'].concat(getLocalIpAddress());
  }
};

const port = process.env.PORT || 8080;

app.listen(port, '0.0.0.0', (error) => {
  if (error) {
    throw error;
  }
  console.log('app is running on:');
  getAvaliableAdress('0.0.0.0').forEach(host => {
    console.log(`  http://${host}:${port}`);
  });
  console.log('Hit CTRL-C to stop the server');
});

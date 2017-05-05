const express = require('express');
const next = require('next');
const url = require('url');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production'
const appConfig = require('./app.cfg');

const port = 10008;
const viewPath = path.join(appConfig.PROJECT_PATH, './views');
const staticPath = path.join(appConfig.PROJECT_PATH, './assets');
const nextDir = path.join(appConfig.PROJECT_PATH, './nextApp');

const mail = require('./src/controller/mail');

function getLocalIpAddress() {
  const os = require('os');
  const ifaces = os.networkInterfaces();
  const ips = [];
  Object.keys(ifaces).forEach(function (ifname) {

    ifaces[ifname].forEach(function (iface) {
      if ('IPv4' !== iface.family || iface.internal !== false) {
        // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
        return;
      }
      ips.push(iface.address);
    });
  });
  return ips;
}

const getAvaliableAdress = () => {
  return ['localhost'].concat(getLocalIpAddress());
};

const bodyParser = require('body-parser');

const nextApp = next({ dev, dir: nextDir });
const nextHandle = nextApp.getRequestHandler();

nextApp.prepare()
  .then(() => {
    // Initialize the express App
    const app = new express();
    app.set('view engine', 'pug');
    app.set('views', viewPath);

    app.use(bodyParser.json()); // for parsing application/json
    app.use(bodyParser.urlencoded({ extended: true })); 

    // app.use('/static', express.static(staticPath));

    app.use('/service/mail', mail);

    app.use((req, res) => {
      const parsedUrl = url.parse(req.url, true);
      nextHandle(req, res, parsedUrl);
    });


    // app.use('/', (req, res, next) => {
    //   res.render('index');
    // });

    const error = (err, req, res, next) => {
      const softTab = '&#32;&#32;&#32;&#32;';
      let errTrace = '';
      if (process.env.NODE_ENV === 'development') {
        errTrace = `:<br><br><pre style="color:red">${softTab}${err.stack.replace(/\n/g, `<br>${softTab}`)}</pre>`;
        console.log(err);
      }
      res.status(500).send(`Server Error${errTrace}`);
    };

    app.use(error);

    // const router = new express.Router();
    // router.route('/weekly-report')
    //   .get(weeklyReport);


    app.listen(port, '0.0.0.0', (error) => {
      if (error) {
        throw error;
      }

      console.log('app is running on:');
      getAvaliableAdress().forEach(host => {
        console.log(`  http://${host}:${port}`);
      });
      console.log('Hit CTRL-C to stop the server');
    });
  });




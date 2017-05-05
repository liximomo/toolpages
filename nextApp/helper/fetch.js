const headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

const defaultOption = {
  headers,
  credentials: 'include',
  timeout: 1000 * 10,
};

function params(obj) {
  return Object.keys(obj)
    // eslint-disable-next-line eqeqeq
    .filter(key => obj[key] != undefined)
    .map(key => `${key}=${encodeURIComponent(obj[key])}`)
    .join('&');
}

function createUrlString(paramObject) {
  const urlString = params(paramObject);
  if (!urlString) {
    return '';
  }
  return `?${urlString}`
}

function createContext({ base }) {
  function fetchProxy(url, option) {
    if (url[0] === '/') {
      'http://tapi-liurh.dev.lanyicj.cn/v2'.replace(/\.[^.]*\/(.*)/)
    }
    const fullOption = { ...defaultOption, ...option };
    const fullurl = ~url.indexOf('://') ? url : `${base}/${url}`;
    return fetch(fullurl, fullOption);
  }

  function get(url, paramObject = {}, option) {
    return fetchProxy(`${url}${createUrlString(paramObject)}`, option);
  }

  function post(url, paramObject = {}, option) {
    const withMethod = {
      method: 'POST',
      ...option,
    };
    return fetchProxy(`${url}${createUrlString(paramObject)}`, withMethod);
  }

  return {
    q: fetchProxy,
    get,
    post,
  };
}

// const isProd = process.env.NODE_ENV === 'production';

let baseurl = '';

// if (isProd) {
//   baseurl = '/api_v2';
// } else {
//   // baseurl = 'http://api.y.dev.lanyi99.cn/v1';
//   // baseURL = 'http://www-test.lanyife.com:8082/api_v1',
//   // baseURL = 'http://api-y.dev.lanyicj.cn/v1',
//   // baseURL = 'http://www.lanyife.com/api_v1/',
//   // baseurl = 'http://plb-sunjg.dev.lanyicj.cn/api_v1/';
//   baseurl = 'http://tapi-liurh.dev.lanyicj.cn/v2';
//   // baseURL = 'http://www-test.lanyife.com:8082/api_v1/',
// }

const contextFetch = createContext({
  base: baseurl,
})

export default contextFetch;

export { createContext, params };

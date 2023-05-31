import https from 'https';

export default ({ app, route: { path }, $axios }) => {
  try {
    $axios.defaults.timeout = 100000;
    $axios.onRequest((config) => {
      const tokenKey = 'want-token';
      const options = { path: '/' };
      const token = app.$cookies.get(tokenKey, options);
      if (token) config.headers.Authorization = `Bearer ${token}`;
      config.httpsAgent = new https.Agent({
        rejectUnauthorized: false,
      });
      return config;
    });
  } catch (e) {
    console.error(e);
  }
};

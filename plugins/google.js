import VueScript2 from 'vue-script2';

export default () => {
  VueScript2.load('//apis.google.com/js/api.js').then(() => {
    const connect = () => {
      window.gapi.client.init({
        apiKey: 'AIzaSyBGDj1MZvahsOvBf5Bb4EtBobRmiZhfXq8',
        clientId: '897963239464-a3jbg2qm3i2tao1bri7bmb47jjbtrk1v.apps.googleusercontent.com',
        scope: 'profile',
        plugin_name: 'want',
      });
    };
    window.gapi.load('client', () => {
      connect();
    });
  });
};

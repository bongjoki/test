export default () => {
  const redirectURI = 'https://localhost:3000/login';
  window.AppleID.auth.init({
    clientId: 'L339KK5TGG',
    scope: 'name',
    redirectURI,
    state: 'signin',
    usePopup: true,
  });
};

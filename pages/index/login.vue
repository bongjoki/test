<style lang="less" scoped>
.login-page {
  .login-form {
    max-width: 440px;
    margin: 100px auto 0 auto;
    padding: 60px;
    background: rgba(30, 32, 36, 0.9);
    border-radius: 20px;
    .title {
      .body-p20;
      .b;
      color: #ffffff;
      text-align: center;
    }
    .buttons {
      margin-top: 60px;
    }
    button {
      width: 100%;
      .body-p14;
      .m;
      color: #25282d;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 14px;
      gap: 10px;
      background: #fee500;
      border-radius: 4px;
      &.white {
        background: #ffffff;
      }
      &.black {
        background: #000000;
        color: #ffffff;
      }
    }
  }
}
</style>
<template lang="pug">
  .login-page
    .login-form
      .title 반가워요!#[br]계정을 선택해주세요.
      .buttons
        button(@click="loginWithKakao")
          native-icon(src="kakao")
          .text 카카오로 시작하기
        button.white.m-t-10(@click="loginWithGoogle")
          native-icon(src="google")
          .text 구글로 시작하기
        button.black.m-t-10
          native-icon(src="apple")
          .text Apple로 시작하기
</template>

<script>
export default {
  methods: {
    loginWithKakao() {
      const that = this;
      window.Kakao.Auth.login({
        async success(success) {
          const { access_token } = success;
          const { data } = await that.$axios.post('/user/login', {
            loginToken: access_token,
            loginType: 'kakao',
          });
          const { token } = data;
          that.$setCookie('want-token', token);
          const { data: user } = await that.$store.dispatch('auth/userLogin');
          if (!user?.nickname) that.$router.push('/onboarding/1');
        },
        fail(e) {
          that.$error(e);
        },
      });
    },
    async loginWithGoogle() {
      const { gapi } = window;
      const { auth2 } = gapi;
      const gauth = await auth2.getAuthInstance();
      gauth.signIn().then(
        async (response) => {
          try {
            const authResponse = response.getAuthResponse();
            const { id_token } = authResponse;
            console.log(id_token);
          } catch (e) {
            console.log(e);
          }
        },
        (e) => {
          console.log(e);
        },
      );
    },
    async loginWithApple() {
      const data = await window.AppleID.auth.signIn();
      const {
        data: { token },
      } = await this.$axios.post('/user/login', {
        loginType: 'apple',
        loginToken: data.authorization.id_token,
      });
      this.$setCookie('token', token);
      await this.$store.dispatch('auth/userLogin');
    },
  },
};
</script>

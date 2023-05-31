export default async ({ app, store, redirect }) => {
  const tokenKey = 'want-token';
  try {
    const token = app.$cookies.get(tokenKey);
    if (token) {
      const { data: user } = await store.dispatch('auth/userLogin');
      if (!user?.nickname) redirect('/onboarding/1');
      return;
    }
  } catch (e) {
    console.error(e);
    app.$cookies.remove(tokenKey);
  }
};

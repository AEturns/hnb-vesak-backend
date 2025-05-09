import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    translations:{
      en:{
        "app.components.LeftMenu.navbrand.title": "Vesak CMS Dashboard",
        "Auth.form.welcome.title": "Welcome to HNB Vesak Admin!",
      }
    },
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};

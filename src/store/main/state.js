export default function () {
  return {
    assemblies: {
      data: [],
      links: {},
      meta: {
        current_page: 1,
        last_page: 1,
        per_page: 10,
        sort_by: 'created_at',
        sort_in: 'desc',
      },
    },
    assembly: {products: []},
    client: {},
    mainActions: [
      // {
      //   class: "home-link_mobile",
      //   icon: 'mdi-home-outline',
      //   id: 1,
      //   to: '/',
      //   class: "homepage-header__home"
      // },
      {
        icon: 'mdi-magnify',
        id: 1,
        name: 'search',
      },
      // {
      //   icon: 'mdi-web',
      //   id: 3,
      //   name: '',
      //   languages: [
      //     {
      //       name: '(He) Israel',
      //       id: 1,
      //       locale: 'he',
      //     },
      //     {
      //       name: '(En) English',
      //       id: 2,
      //       locale: 'en',
      //     },
      //     {
      //       name: '(Ru) Russian',
      //       id: 3,
      //       locale: 'ru',
      //     },
      //   ],
      // },
      {
        class: "personel-link_pc",
        icon: 'mdi-account-outline',
        id: 2,
        name: '',
        to: '/personal-area'
      },
      {
        class: "card-link_pc",
        badge: 3,
        icon: 'mdi-cart-outline',
        id: 5,
        name: '',
        cart: true,
      },
      {
        class: "card-link_mobile",
        badge: 4,
        icon: 'mdi-cart-outline',
        id: 3,
        to: '/cart',
      },
      {
        class: "personel-link_mobile",
        icon: 'mdi-account-outline',
        id: 5,
        name: '',
        to: '/personal-area'
      },
    ],
    mainRoutes: [
      {
        icon: '',
        id: 1,
        name: 'about',
        to: '/about',
      },
      {
        icon: '',
        id: 2,
        name: 'brands',
        to: '/brands',
      },
      {
        icon: '',
        id: 3,
        name: 'contacts',
        to: '/contacts',
      },
      {
        icon: '',
        id: 4,
        name: 'cookies',
        to: '/cookies',
      },
      {
        icon: '',
        id: 5,
        name: 'privacyPolicy',
        to: '/privacy-policy',
      },
      {
        icon: '',
        id: 6,
        name: 'termsOfUse',
        to: '/terms-of-use',
      },
    ],
    sections: [
      {
        id: 1,
        title: 'Photo',
        name: 'photo',
        size: '44px',
        width: '123px',
      },
      {
        id: 2,
        title: 'Video',
        name: 'video',
        size: '56px',
        width: '156px',
      },
      {
        id: 3,
        title: 'Music',
        name: 'music',
        size: '44px',
        width: '123px',
      },
      {
        id: 4,
        title: 'Home',
        name: 'home',
        size: '50px',
        width: '138px',
      },
      {
        id: 5,
        title: '3D',
        name: '3d',
        size: '44px',
        width: '123px',
      },
      {
        id: 6,
        title: 'Game',
        name: 'game',
        size: '47px',
        width: '131px',
      },
    ],
    settings: {
      displayMode: 'list',
    },
    showConfirmDelete: false,
  }
}

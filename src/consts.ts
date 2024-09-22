// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

/**
 * title {string} website title
 * favicon {string} website favicon url
 * description {string} website description
 * author {string} author
 * avatar {string} Avatar used in the profile
 * motto {string} used in the profile
 * url {string} Website link
 * recentBlogSize {number} Number of recent articles displayed in the sidebar
 * archivePageSize {number} Number of articles on archive pages
 * postPageSize {number} Number of articles on blog pages
 * feedPageSize {number} Number of articles on feed pages
 */
export const site = {
  title: 'Paxá Blog', // required
  favicon: '/images/favicon.svg', // required
  description: 'Meu blog pessoal',
  author: 'Paxá', // required
  avatar: '/images/logo.png', // required
  motto: 'Ações falam mais alto que palavras.',
  url: 'https://blog.paxa.dev', // required
  recentBlogSize: 5,
  archivePageSize: 25,
  postPageSize: 10,
  feedPageSize: 20,
}

/**
 * busuanzi {boolean} link: https://busuanzi.ibruce.info/
 * lang {string} Default website language
 * codeFoldingStartLines {number}
 * ga {string|false}
 */
export const config = {
  busuanzi: false,
  lang: 'pt-br', // en | pt-br | zh-cn | cs
  codeFoldingStartLines: 16, // Need to re-run the project to take effect
  ga: 'G-7800ZN2S4V' // If you want to integrate with Google Analytics, just enter your GA-ID here.
}

/**
 * Navigator
 * name {string}
 * iconClass {string} icon style
 * href {string}  link url
 * target {string} optional "_self|_blank" open in current window / open in new window
 */
export const categories = [
  {
    name: "Início",
    iconClass: "ri-draft-line",
    href: "/",
  },
  {
    name: "Arquivo",
    iconClass: "ri-archive-line",
    href: "/arquivo",
  },
  {
    name: "Pesquisar",
    iconClass: "ri-search-line",
    href: "/busca",
  },
  {
    name: "Mais",
    iconClass: "ri-more-fill",
    href: "javascript:void(0);",
    children: [
      {
        name: 'Favoritos',
        iconClass: 'ri-bookmark-3-fill',
        href: '/favoritos',
      },
      {
        name: 'Snippets',
        iconClass: 'ri-code-fill',
        href: '/snippets',
      },
    ]
  }
]

/**
 * Personal link address
 */
export const infoLinks = [
  {
    icon: 'ri-telegram-fill',
    name: 'telegram',
    outlink: 'https://t.me/sistematico',
  },
  {
    icon: 'ri-twitter-x-fill',
    name: 'x',
    outlink: 'https://x.com/sistematico',
  },
  {
    icon: 'ri-github-fill',
    name: 'github',
    outlink: 'https://github.com/sistematico',
  },
  {
    icon: 'ri-rss-fill',
    name: 'rss',
    outlink: 'https://blog.paxa.dev/feed/1',
  }
]

/**
 * donate
 * enable {boolean}
 * tip {string}
 * wechatQRCode: Image addresses should be placed in the public directory.
 * alipayQRCode: Image addresses should be placed in the public directory.
 * paypalUrl {string}
 */
export const donate = {
  enable: true,
  tip: 'Obrigado! ☕',
  wechatQRCode: '/WeChatQR.png',
  alipayQRCode: '/AliPayQR.png',
  paypalQRCode: '/images/donate/PayPalQR.png',
  paypalUrl: 'https://www.paypal.com/donate/?business=F6FYBQ38G6QY2&no_recurring=0&currency_code=BRL',
  githubUrl: 'https://github.com/sponsors/sistematico'
}

/**
 * Friendship Links Page
 * name {string}
 * url {string}
 * avatar {string}
 * description {string}
 */
export const friendshipLinks =
  [
    // {
    //   name: "Cirry's Blog",
    //   url: 'https://cirry.cn',
    //   avatar: "https://cirry.cn/avatar.png",
    //   description: '前端开发的日常'
    // },
  ]

/**
 * Comment Feature
 * enable {boolean}
 * type {string} required giscus
 */
export const comment = {
  enable: true,
  type: 'giscus', // waline | giscus,
  giscusConfig: {
    'data-repo': "sistematico/blog.paxa.dev",
    'data-repo-id': "R_kgDOMstncg",
    'data-category': "General",
    'data-category-id': "DIC_kwDOMstncs4CiMio",
    'data-mapping': "pathname",
    'data-strict': "0",
    'data-reactions-enabled': "1",
    'data-emit-metadata': "0",
    'data-input-position': "bottom",
    'data-theme': "preferred_color_scheme",
    'data-lang': "pt",
    'crossorigin': "anonymous",
  }
}
module.exports = {
  title: 'djwj233\'s blog',
  description: 'This is a blog built by djwj233, using vuepress',
   // OR shortcut: @vuepress/blog
  themeConfig: {
    navTitle: 'djwj233',
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: '博文',
        link: '/',
      },
      {
        text: '标签',
        link: '/tag/',
      },
      {
        text: '关于我',
        link: '/1970/01/01/about-me/',
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: 'mail',
          link: 'mailto:2494822564@qq.com',
        },
        {
          type: 'github',
          link: 'https://github.com/djwj233',
        },
      ],
      copyright: [
        {
          text: 'MIT Licensed | Copyright © 2024-present djwj233',
          link: '',
        },
      ],
    },
    globalPagination: {
      lengthPerPage:'5'
    },
    feed: {
      canonical_base:'https://djwj233.github.io'
    }
  },
  markdown: {
    lineNumbers: true,
    plugins: [
      ['markdown-it-texmath', {
        engine: require('katex'),
        delimiters: 'dollars'
      }]
    ]
  }
}

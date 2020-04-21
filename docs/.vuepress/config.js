module.exports = {
    base: '/',
    title: '博客与人生', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: '我的博客，我的学习，我的人生', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/favicon.png' }],  //浏览器的标签栏的网页图标
    ],
    markdown: {
        lineNumbers: true
    },
    serviceWorker: true,
    themeConfig: {    
        logo: '/pixijs-v5-logo-1.png',
        lastUpdated: 'lastUpdate', // string | boolean
        nav: [
            { text: '首页', link: '/' },
            { text: '学习', link: '/study'},
            { text: 'Github', link: 'https://github.com/fxf111/blog-and-life' },
        ],
        sidebar: {

            '/study/': [
                {
                    title: '记录',
                    children: [
                        ['1.md', '学习计划']
                    ]
                }
            ],
        }
    }
}
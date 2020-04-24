module.exports = {
  "title": "fxf111的博客与人生",
  "description": "fxf111的博客,人生,程序生活",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",

  plugins: [
    [
      '@vuepress-reco/comments', 
      {
        solution: 'valine',
        options: {
          appId: 'LudJ1hmEmtv1eGmHMmh1EzI7-gzGzoHsz',// your appId
          appKey: '32QHEdxkHzX2jn741CpXvELl', // your appKey
        }
      }
    ],
    '@vuepress-reco/extract-code'
  ],
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "Timeline",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/fxf111",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "最后更新",
    "author": "fxf111",
    "authorAvatar": "/avatar.png",
    "record": "冀ICP备xxxx",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  }
}
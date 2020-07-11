module.exports= {
    title: 'Webpack 插件中文文档集',
    description: "做一个webpack插件中文文档集",
    base: "/webpack-plugins-docs-cn/",
    markdown: {
        lineNumbers: true,
        anchor: {
            permalink: false
        }
    },
    themeConfig: {
        activeHeaderLinks: true,
        displayAllHeaders: false,
        nav: [
            // {
            //     text: "主站",
            //     link: "https://febeacon.com"
            // },
            {
                text: "文档首页",
                link: "/"
            }
        ],
        sidebar: [
            {
                title: '目录',
                path: '/routes/',
                sidebarDepth: 2
            },
            {
                title: 'webpack-build-notifier',
                path: '/routes/webpack-build-notifier.html',
                sidebarDepth: 2
            },
            {
                title: "friendly-errors-webpack-plugin",
                path: '/routes/friendly-errors-webpack-plugin.html',
                sidebarDepth: 2
            },
            {
                title: "webpack-jarvis",
                path: '/routes/webpack-jarvis.html',
                sidebarDepth: 2
            },
            {
                title: "copy-webpack-plugin",
                path: '/routes/copy-webpack-plugin.html',
                sidebarDepth: 3
            },
            {
                title: "write-file-webpack-plugin",
                path: '/routes/write-file-webpack-plugin.html',
                sidebarDepth: 2
            },
            {
                title: "prepack-webpack-plugin",
                path: '/routes/prepack-webpack-plugin.html',
                sidebarDepth: 2
            }
        ]
    },
    head: [
        ["link", {
            rel: "icon", href: "/images/favicon.ico"
        }]
    ]
}
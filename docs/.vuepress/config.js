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
            },
            {
                title: "offline-plugin",
                path: '/routes/offline-plugin.html',
                sidebarDepth: 3
            },
            {
                title: "clean-webpack-plugin",
                path: 'routes/clean-webpack-plugin.html',
                sidebarDepth: 2
            },
            {
                title: "webpack-hook-plugin",
                path: "routes/webpack-hook-plugin.html",
                sidebarDepth: 2
            },
            {
                title: "build-hash-webpack-plugin",
                path: "routes/build-hash-webpack-plugin",
                sidebarDepth: 2
            },
            {
                title: "webpack-file-manager-plugin",
                path: "routes/webpack-file-manager-plugin",
                sidebarDepth: 2
            },
            {
                title: "duplicate-package-checker-webpack-plugin",
                path: "routes/duplicate-package-checker-webpack-plugin",
                sidebarDepth: 2
            },
            {
                title: "webpack-inject-plugin",
                path: "routes/webpack-inject-plugin",
                sidebarDepth: 2
            },
            {
                title: "imagemin-webpack-plugin",
                path: "routes/imagemin-webpack-plugin",
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
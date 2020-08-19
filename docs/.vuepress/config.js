module.exports= {
    title: 'Webpack Plugins',
    description: "Webpack 除官网外的插件中文文档集，这里或许有你需要的。",
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
            //     link: "http://www.febeacon.com"
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
            },
            {
                title: "svg-sprite-webpack-plugin",
                path: "routes/svg-sprite-webpack-plugin",
                sidebarDepth: 2
            },
            {
                title: "static-site-generator-webpack-plugin",
                path: "routes/static-site-generator-webpack-plugin",
                sidebarDepth: 2
            },
            {
                title: "dynamic-cdn-webpack-plugin",
                path: "routes/dynamic-cdn-webpack-plugin",
                sidebarDepth: 2
            },
            {
                title: "circular-dependency-plugin",
                path: "routes/circular-dependency-plugin",
                sidebarDepth: 2
            },
            {
                title: "webpack-require-from",
                path: "routes/webpack-require-from",
                sidebarDepth: 2
            },
            {
                title: "dynamic-vendor-webpack-plugin",
                path: "routes/dynamic-vendor-webpack-plugin",
                sidebarDepth: 2
            },
            {
                title: "define-variable-webpack-plugin",
                path: "routes/define-variable-webpack-plugin",
                sidebarDepth: 2
            },
            {
                title: "hook-shell-script-webpack-plugin",
                path: "routes/hook-shell-script-webpack-plugin",
                sidebarDepth: 2
            },
            {
                title: "stylelint-webpack-plugin",
                path: "routes/stylelint-webpack-plugin",
                sidebarDepth: 2
            },
            {
                title: "eslint-webpack-plugin",
                path: "routes/eslint-webpack-plugin",
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
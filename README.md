<!--
 * @Author: Bin
 * @Date: 2022-02-15
 * @FilePath: /react-admin/README.md
-->
# beego-react-admin
> 🧊 基于 Beego + React 搭建的一套 beego-react-admin 后台管理程序模版

![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/PBK-B/beego-react-admin/react)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/PBK-B/beego-react-admin/react-router)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/PBK-B/beego-react-admin/mobx)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/PBK-B/beego-react-admin/axios-hooks)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/PBK-B/beego-react-admin/axios)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/PBK-B/beego-react-admin/antd)
![GitHub Repo stars](https://img.shields.io/github/stars/PBK-B/beego-react-admin?style=social)

![docs/beego-react-admin-poster.jpg](docs/beego-react-admin-poster.jpg)
### 相关博客
如何使 Beego 加载 React 框架以及初步搭建前端项目结构：<https://bin.zmide.com/?p=1017>
### 前端目录结构
```
.
├── components                  // 网站通用组件
│   └── index.ts
├── config.ts                   // 网站通用配置项 
├── index.ts
├── pages                       // 网站页面对应
│   ├── index                   // index 页面
│   │   ├── index.tsx           // index 入口文件
│   │   └── scss                // index 页面 scss 样式目录
│   │       └── index.scss
│   └── login                   // login 页面
└── utils                       // 网站通用工具函数
    └── index.ts
```
import { defineUserConfig, defaultTheme } from 'vuepress'
export default defineUserConfig({
    base: '/',
    lang: 'zh-CN',
    title: 'vue3学习博客',
    description: 'vue3和ts学习记录',
    head: [['link', { rel: 'icon', href: '/images/logo.webp' }]],
    //新增导航条的配置
    theme: defaultTheme({
        // tab栏的图标; 图片 / 会自动去public文件夹里找图片
        logo: '/images/logo.webp',
        // 顶部导航条   
        navbar: [
            {
                text: '介绍',
                link: '/pages/introduce.md',
            },
            // NavbarGroup
            {
                text: '教程',
                children: [
                    {
                        text: 'TypeScript',
                        link: '/pages/study/typeScript.md',
                        // 该元素将一直处于激活状态
                        activeMatch: '/pages/study/typeScript.md',
                    },
                    {
                        text: 'Vue3',
                        link: '/pages/study/vue3.md',
                        activeMatch: '/pages/study/vue3.md',
                    },
                ],
            },
        ],
        repo: 'https://github.com/dongyuanwai/learnjts',
    }),
})
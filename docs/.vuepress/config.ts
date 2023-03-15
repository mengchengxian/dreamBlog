import { defineUserConfig, defaultTheme } from 'vuepress'
export default defineUserConfig({
    base: '/dreamBlog/',
    lang: 'zh-CN',
    title: 'vue3学习博客',
    description: 'vue3和ts学习记录',
    head: [['link', { rel: 'icon', href: '/dreamBlog/images/logo.webp' }]],
    //新增导航条的配置
    theme: defaultTheme({
        // tab栏的图标; 图片 / 会自动去public文件夹里找图片
        logo: '/images/logo.webp',
        // 顶部导航条   
        navbar: [],
        sidebar: [
            // SidebarItem
            {
                text: '开始学习',
                children: [
                    {
                        text: 'TypeScript',
                        children: [
                            {
                                text: '一.初识 TypeScript',
                                collapsible: true,
                                children: [
                                    // 下级列表
                                    '/pages/typescript/01_初识TS.md',
                                    '/pages/typescript/02_安装TS.md',
                                    '/pages/typescript/03_HelloWorld.md',
                                    '/pages/typescript/04_webpack打包.md'
                                ],
                            },
                            {
                                text: '二.TypeScript 常用语法',
                                collapsible: true,
                                children: ['typescript/1_type', 'typescript/2_interface', 'typescript/3_class', 'typescript/4_function', 'typescript/5_generic', 'typescript/6_other']
                            }
                        ]
                    },
                    {
                        text: 'Vue3',
                        children: [
                            {
                                text: '一.Vue3快速上手',
                                collapsible: true,
                                children: ['/pages/vue3/01_认识Vue3.md', '02_创建vue3项目']
                            },
                            {
                                text: '二.Composition API',
                                collapsible: true,
                                children: [
                                    'chapter4/01_Composition API_常用部分',
                                    'chapter4/02_Composition API_其它部分',
                                    'chapter4/03_手写组合API',
                                    'chapter4/04_Composition VS Option'
                                ]
                            },
                            {
                                text: '三.其它新组合和API',
                                collapsible: true,
                                children: ['chapter5/01_新组件', 'chapter5/02_其他新API']
                            },

                        ]
                    }
                ],
            },
        ],
        repo: 'https://github.com/mengchengxian/dreamBlog',
    }),
})
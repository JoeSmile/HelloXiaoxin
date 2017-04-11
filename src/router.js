import App from './app';

export default [
    {
        path: '/',
        component: App,
        children: [
            {
                path:'/default',
                component:resolve=>require(['./homePage/index'],resolve),
            },
            {
                path: '*',
                component: resolve => require(['./default'],resolve),
                redirect:'/default'
            }
        ]
    }
];
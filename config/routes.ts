interface RouteType {
  name?: string;
  exact?: boolean;
  path?: string;
  icon?: string;
  hideInMenu?: boolean;
  component?: string;
  wrappers?: string[];
  routes?: RouteType[];
}

const Route: RouteType[] = [
  // 登录
  {
    path: '/',
    name: 'welcome',
    component: '@/pages/index',
  },
  {
    path: '/home',
    name: 'home',
    component: '@/pages/home',
  },
  {
    path: '/sku',
    name: 'sku',
    component: '@/pages/sku',
    // routes: [
    //   {
    //     path: '/home',
    //     name: 'home',
    //     component: '@/pages/home',
    //   },
    // ],
  },
  // {
  //   exact: true,
  //   path: '/',
  //   hideInMenu: true,
  //   component: './Login/Login',
  //   // wrappers: ['@/wrappers/isLoggedIn'],
  // },
  // {
  //   exact: true,
  //   path: '/login',
  //   hideInMenu: true,
  //   component: './Login/Login',
  // },
  // // 算法管理
  // {
  //   path: '/algorithm',
  //   name: 'algorithm_sub',
  //   icon: 'icon_algorithm',
  //   component: '@/layouts/index',
  //   // wrappers: ['@/wrappers/isLogin'],
  //   routes: [
  //     // 算法管理
  //     {
  //       exact: true,
  //       path: '/algorithm/algorithmDetail',
  //       component: './AlgorithmManage/AlgorithmManage/AlgorithmDetail',
  //     },
  //     {
  //       exact: true,
  //       name: 'algorithm',
  //       path: '/algorithm',
  //       component: './AlgorithmManage/AlgorithmManage/AlgorithmManage',
  //     },
  //     // 缺省值管理
  //     {
  //       name: 'defaultValueCatalogs',
  //       path: '/algorithm/defaultValueCatalogs',
  //       routes: [
  //         {
  //           exact: true,
  //           path: '/algorithm/defaultValueCatalogs',
  //           component:
  //             './AlgorithmManage/DefaultValueCatalogs/DefaultValueCatalogs',
  //         },
  //         {
  //           exact: true,
  //           path: '/algorithm/defaultValueCatalogs/defaultValue',
  //           component: './AlgorithmManage/DefaultValue/DefaultValue',
  //         },
  //       ],
  //     },
  //     // 指标管理
  //     {
  //       exact: true,
  //       name: 'metric',
  //       path: '/algorithm/metric',
  //       component: './AlgorithmManage/MetricManage/MetricManage',
  //     },
  //     // 行业管理
  //     {
  //       exact: true,
  //       name: 'industries',
  //       path: '/algorithm/industries',
  //       component: './AlgorithmManage/Industries/Industries',
  //     },
  //   ],
  // },

  // //*设置界面,默认进入管理员界面
  // {
  //   name: 'settings',
  //   path: '/settings',
  //   icon: 'icon_settings',
  //   component: '@/layouts/index',
  //   // wrappers: [
  //   //   '@/wrappers/isLogin',
  //   //   '@/wrappers/isAdmin',
  //   //   '@/wrappers/locationStore',
  //   // ],
  //   routes: [
  //     {
  //       exact: true,
  //       name: 'admin',
  //       path: '/settings/admin',
  //       component: './AdminManage/AdminManage',
  //     },
  //     // 默认管理员管理
  //     {
  //       exact: true,
  //       path: '/settings',
  //       component: './AdminManage/AdminManage',
  //     },
  //   ],
  // },

  // {
  //   hideInMenu: true,
  //   component: '@/pages/404/Index',
  // },
];

export default Route;

// import { defineConfig } from 'umi';

// export default defineConfig({
//   nodeModulesTransform: {
//     type: 'none',
//   },
//   layout: {},
//   routes: [
//     {
//       path: '/',
//       component: '@/pages/index',
//     },
//   ],
//   fastRefresh: {},
// });

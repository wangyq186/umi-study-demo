import { defineConfig } from 'umi';
import routes from './routes';

// defineConfig 的作用是在写配置项的时候携带提示。
export default defineConfig({
  title: 'CarbonLens租户管理系统',
  layout: {},
  links: [
    {
      rel: 'icon',
      href: 'https://static.miotech.com/images/icons/favicon-light.ico',
    },
  ],
  esbuild: {},
  webpack5: {},
  locale: {
    default: 'zh-CN',
    antd: true,
    title: false,
    baseNavigator: true,
    baseSeparator: '-',
  },

  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
  dynamicImport: {},
  history: {
    type: 'hash',
  },
  dva: {
    hmr: true,
  },

  define: {
    // API_HOST: 'http://carbon-lens-admin-gateway-dev.miotech.com',
    // API_HOST: 'https://carbon-fehorizon-admin-dev.miotech.com/api',
    API_HOST: '/api',
    // API_HOST: 'http://localhost:8080',
    // DEFAULT_API_PREFIX: '/api',
  },
  // devtool: 'eval',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://carbon-fehorizon-admin-dev.miotech.com',
        changeOrigin: true,
        // pathRewrite: { '^/api': '' },
      },
    },
  },
});

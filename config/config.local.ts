import { defineConfig } from 'umi';

export default defineConfig({
  define: {
    // API_HOST: 'https://carbon-lens-admin-gateway-dev.miotech.com',
    // API_HOST: 'https://carbon-fehorizon-admin-dev.miotech.com/api',
    API_HOST: '/api',
    DEFAULT_API_PREFIX: '/api',
  },
  devtool: 'source-map',
});

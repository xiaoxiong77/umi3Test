import { defineConfig } from 'umi';
const { ModuleFederationPlugin } = require('webpack').container;

const packageJson = require('./package.json');

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [{ path: '/', component: '@/pages/index' }],
  routes: [
    {
      path: '/',
      // component: '@/pages/index',
      component: '@/pages/microapp',
    },
    {
      name: '首页',
      path: '/home',
      component: '@/pages/Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: '@/pages/Access',
    },
  ],
  fastRefresh: {},
  webpack5: {},
  qiankun: {
    master: {}
  },
  mfsu: false,
  chainWebpack: (config: any) => {

    config.output.publicPath('auto'); // 路径处理，保证导入项目路径正确

    // config.merge({
    //   optimization: {
    //     splitChunks: false,
    //   }
    // });

    config.plugin('mf').use(ModuleFederationPlugin, [
      {
        name: 'app1',
        filename: 'remoteEntry.js',
        library: { type: 'window', name: 'app1' },
        exposes: {
          './TestCom': '@/pages/components/TestButton/index.tsx',
        },
        shared: {
          react: { singleton: true, eager: true },
          'react-dom': { singleton: true, eager: true },
        },
      },
    ]);
    return config;
  },
});

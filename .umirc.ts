/*
 * @Description: 
 * @Author: tangq(tangq@geoscene.com.cn)
 * @Date: 2021-08-03 15:37:39
 * @LastEdited: tangq(tangq@geoscene.com.cn)
 */
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  mfsu: {
    //   // development: { output: '.mfsu-development' },
    //   // production: { output: '.mfsu-production' }
  }, // 启用缓存，提高启动效率
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});

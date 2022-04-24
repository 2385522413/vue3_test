const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pages: {
    index: {
      //入口
      entry: '17_src_customRef/main.js',
    },
  },
  lintOnSave:false,
  transpileDependencies: true
})

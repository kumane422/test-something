module.exports = {
  // ビルド先の指定
  outputDir: "docs",

  publicPath: "./",

  pages: {
    // エントリーポイントの指定
    index: {
      entry: 'src/main.ts',
      title: 'テストページ',
    },
  },

  transpileDependencies: [
    'vuetify'
  ]
}

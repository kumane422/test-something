module.exports = {
  outputDir: "docs",  // ビルド先の指定
  publicPath: "./",
  pages: {
    // エントリーポイントの指定
    index: {
      entry: 'src/main.ts',
      title: 'テストページ',
    },
  }
}
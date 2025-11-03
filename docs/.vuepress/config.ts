/*
 * @Author: WeiJianYe
 * @Date: 2025-10-28 16:45:36
 * @LastEditors: git config Wcacciatori
 * @LastEditTime: 2025-11-01 14:50:18
 * @FilePath: \blog\docs\.vuepress\config.ts
 * @Description: 
 * 
 * Copyright (c) 2025 by Wcacciatori, All Rights Reserved. 
 */
import head from "./config/head"
import themeConfig from "./config/themeConfig"
import plugins from "./config/plugins"  
module.exports = {
  title: 'Heja',
  theme: 'vdoing',
  base: '/',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  head,
  themeConfig,
  plugins,
  markdown: {
    lineNumbers: true,
    extractHeaders: ["h2", "h3", "h4"]
  }
}

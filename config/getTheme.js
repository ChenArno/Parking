const path = require('path')
const fs = require('fs')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
/**
 * 根据antd主题获取配置文件
 * **/
module.exports = () => {
  const pkgPath = path.join(__dirname, '..', 'package.json')
  const pkg = fs.existsSync(pkgPath) ? require(pkgPath) : {}
  let cfgPath = pkg.theme
  if (cfgPath.charAt(0) === '.') {
    cfgPath = resolve(cfgPath)
  }
  const getThemeConfig = require(cfgPath)
  const theme = getThemeConfig()
  return theme
}

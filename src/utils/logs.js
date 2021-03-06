const fs = require('fs')
const path = require('path')

// 写日记
function writeLog(writeStream, log) {
  writeStream.write(log + '\n')
}

 // 生成write Stream
function createWriteStream(fileName) {
  const fullName = path.join(__dirname, '../', '../', 'logs/', fileName)
  const writeStream = fs.createWriteStream(fullName, {
    flags: 'a'
  })
  return writeStream
}

// 访问日志
const accessWriteStream = createWriteStream('access.log')

function access(log) {
  writeLog(accessWriteStream, log)
}

module.exports = {
  access
}
// 生成guid
const newGuid = function() {
  let guid = ''
  let n = ''
  for (let i = 1; i <= 32; i++) {
    n = Math.floor(Math.random() * 16.0).toString(16)
    guid += n
  }
  return guid
}

export default {
  newGuid
}

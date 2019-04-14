import common from './common.js'

//
let fils = [common]

export default {
  init(vue) {
    fils.forEach(item => {
      for (let k in item) {
        vue.filter(k, item[k])
      }
    })
  }
}

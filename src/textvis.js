var m = require("mithril")

function TextVis(initialVnode) {
  var title = 'textvis'
  var url = 'https://textvis.lnu.se/'
  var data = require('./').textvis

  return {
    oninit: function(vnode){
      r =  data[Math.floor(Math.random() * data.length)]
    },
    view: function(vnode) {
      return m("div", [
        title + ":" ,
        m("a", {href: r.url}, r.title)])
    }

  }
}
module.exports = TextVis

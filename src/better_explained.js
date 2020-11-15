var m = require("mithril")

function BetterExplained(initialVnode) {
  var data = require('./better_explained_data').better_explained_data

  return {
    oninit: function(vnode){
      r =  data[Math.floor(Math.random() * data.length)]
    },
    view: function(vnode) {
      return m("div", [
        "BetterExplained: ",
        m("a", {href: r.href}, r.text)])
    }

  }
}
module.exports = BetterExplained

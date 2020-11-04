// import m from "mithril";
var m = require("mithril")
var links = require("./farnam_links")

function Farnam(initialVnode)  {
  var r = 0
  var data = links

  return {
    oninit: function(vnode) {
      r = data[Math.floor(Math.random() * data.length)]
    },
    view: function(vnode) {
      return m("div", [
        m("a", {href: r.href}, r.text)])
    }
  }
}

module.exports = Farnam

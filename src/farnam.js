// import m from "mithril";
var m = require("mithril")
var links = require("./farnam_links")

var Farnam = {
  data: links ,
  view: function(vnode) {
    const r = Farnam.data[Math.floor(Math.random() * Farnam.data.length)];

    return m("div", [
      m("a", {href: r.href}, r.text)])
  }
}

module.exports = Farnam

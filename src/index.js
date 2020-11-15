import m from "mithril";
// import Untool from "./untool";
var Untool = require("./untool")
var Farnam = require("./farnam")
var PG = require("./postgres")
var BetterExplained = require("./better_explained")

var root = document.body
var r = Math.floor(Math.random() * 1000) + 1;
var Quote = {
  current: "...loading amazing quote....",
  fetch: function() {
    m.request({
      method: "GET",
      url: "https://cors-anywhere.herokuapp.com/quotebot.raimonster.workers.dev/",
    }).then(function(r){ return Quote.current = r.message })
  }
}


function get_cont(msg) {
  return m(".container", [
    m("h1", "F5 Crusher"),
    m(".row", [
      m(".column", [
        m("img", {
          src: "https://im-possible.info/images/library/grey/g"+ r +".gif"})
      ]),
      m(".column", [
        m("p", msg)
      ]),
    ]),

    m(".row", [
      m(Untool)
    ]),
    m(".row", [
      m(Farnam)]),

    m(".row", [
      m(PG)]),

    m(".row", [
      m(BetterExplained)]),

  ])
}

var All = {
  oninit: Quote.fetch,
  view: function(vnode) {
    return get_cont(Quote.current)
  }
}

m.route(root, "/", {"/": All})

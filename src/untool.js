// import m from "mithril";
var m = require("mithril")

function Untool(initialVnode) {
  var r
  var data = [
    ["Am I only thinking of ideal solutions?","https://untools.co/inversion", "Inversion"],
    ["Can I break this problem down?", "https://untools.co/issue-trees", "Issue trees"],
    ["Do I need an original solution to a complex problem?","https://untools.co/first-principles", "First principles"],
    ["Am I solving the right problem?","https://untools.co/abstraction-laddering","Abstraction laddering"],
    ["What kind of a decision am I making?","https://untools.co/hard-choice-model","Hard choice model"],
    ["Which option from these is the best one?","https://untools.co/decision-matrix","Decision matrix"],
    ["What would be the long-term consequences of this decision?","https://untools.co/second-order-thinking","Second-order thinking"],
    ["Am I jumping to conclusions?","https://untools.co/ladder-of-inference","Ladder of inference"],
    ["How should I respond to this situation?","https://untools.co/cynefin-framework","Cynefin framework"],
    ["What should I be working on right now?","https://untools.co/eisenhower-matrix","Eisenhower matrix"],
    ["How does this system work?","https://untools.co/connection-circles","Connection circles"],
    ["Why is X happening?", "https://untools.co/iceberg-model", "Iceberg model"]
  ]

  return {
    oninit: function(vnode) {
      r = data[Math.floor(Math.random() * data.length)]
    },
    view: function(vnode) {
      return m("div", [
        m("a", {href: r[1]}, r[0])])
    }
  }
}

module.exports = Untool

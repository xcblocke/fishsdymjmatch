enum n {
  Net = 1,
  Model = 2,
  Business = 4,
  View = 8,
  Config = 16,
  Normal = 32,
}
class i {
  table(e) {
    console.table(e);
  }
  customColor(e, t, o) {
    this.logCall(e, "color:" + t + ";", n.Normal, o);
  }
  log(e, t) {
    this.logCall(e, "color:#000000;", n.Normal, t);
  }
  logNet(e, t) {
    this.logCall(e, "color:#ee7700;", n.Net, t);
  }
  logModel(e, t) {
    this.logCall(e, "color:Violet;", n.Model, t);
  }
  logBusiness(e, t) {
    this.logCall(e, "color:#3a5fcd;", n.Business, t);
  }
  logView(e, t) {
    this.logCall(e, "color:green;", n.View, t);
  }
  logConfig(e, t) {
    this.logCall(e, "color:gray;", n.Config, t);
  }
  logError(e, t) {
    this.logCall(e, "color:red;", n.Normal, t);
  }
  logCall() {
    this.getTimestamp(), this.getStackTrace(4);
  }
  getTimestamp() {
    var e = new Date();
    return "[" + e.getHours().toString().padStart(2, "0") + ":" + e.getMinutes().toString().padStart(2, "0") + ":" + e.getSeconds().toString().padStart(2, "0") + ":" + e.getMilliseconds().toString().padStart(3, "0") + "]";
  }
  getStackTrace(e) {
    var t,
      o = (null === (t = new Error().stack) || void 0 === t ? void 0 : t.split("\n")) || [],
      n = [];
    o.forEach(function (e) {
      var o = e.substring(7).split(" ");
      var _t = {};
      _t[o[0]] = o[1];
      if (o.length < 2) {
        n.push(o[0]);
      } else {
        n.push(_t);
      }
    });
    if (n[e] && "object" == typeof n[e]) {
      var i = n[e];
      return "[" + Object.keys(i)[0] + "]";
    }
    return "";
  }
}
export var logManager = new i();
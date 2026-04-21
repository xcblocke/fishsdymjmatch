export var weightedRandomSelect = function (e) {
  for (var t = e.reduce(function (e, t) {
      return e + t;
    }, 0), o = Math.random() * t, n = 0; n < e.length; n++) if ((o -= e[n]) <= 0) return n;
  return e.length - 1;
};
export class DefaultGenerateStrategy {
  run(e, t, o, n) {
    for (var i = 0; i < t.length; i++) {
      var r = t[i];
      o.includes(r) && n.get(r)(e);
    }
  }
}
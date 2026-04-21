export class RandomGenerator {
  _initialSeed = null;
  _seed = this._initialSeed;
  constructor(e) {
    this._initialSeed = void 0 !== e ? e : Date.now();
  }
  getSeed() {
    return this._seed;
  }
  random() {
    this._seed = (1103515245 * this._seed + 12345) % 2147483648;
    return this._seed / 2147483648;
  }
  randomInt(e, t) {
    if (e >= t) return e;
    e = Math.ceil(e);
    t = Math.floor(t);
    return Math.floor(this.random() * (t - e)) + e;
  }
  randomIntInclusive(e, t) {
    if (e > t) return e;
    e = Math.ceil(e);
    t = Math.floor(t);
    return Math.floor(this.random() * (t - e + 1)) + e;
  }
  randomFloat(e, t) {
    return e >= t ? e : this.random() * (t - e) + e;
  }
  randomBool(e = 0.5) {
    return this.random() < e;
  }
  randomElement(e) {
    if (0 !== e.length) return e[this.randomInt(0, e.length)];
  }
  randomElements(e, t) {
    if (!e || 0 === e.length) return [];
    if (t <= 0) return [];
    if (t >= e.length) return [...e];
    for (var o = [...e], n = [], r = 0; r < t; r++) {
      var a = this.randomInt(0, o.length);
      n.push(o[a]);
      o.splice(a, 1);
    }
    return n;
  }
  shuffle(e) {
    for (var t, o = e.length - 1; o > 0; o--) {
      var i = this.randomInt(0, o + 1);
      t = __read([e[i], e[o]], 2), e[o] = t[0], e[i] = t[1];
    }
    return e;
  }
  shuffleNew(e) {
    return this.shuffle([...e]);
  }
  randomWeighted(e, t) {
    if (0 !== e.length && e.length === t.length) {
      var o = t.reduce(function (e, t) {
        return e + t;
      }, 0);
      if (!(o <= 0)) {
        for (var n = this.random() * o, i = 0; i < e.length; i++) if ((n -= t[i]) < 0) return e[i];
        return e[e.length - 1];
      }
    }
  }
  randomId(e = 8) {
    for (var t = "", o = 0; o < e; o++) t += this.randomInt(0, 10).toString();
    return t;
  }
  randomString(e, t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789") {
    for (var o = "", n = 0; n < e; n++) o += t[this.randomInt(0, t.length)];
    return o;
  }
  randomColor() {
    return "#" + this.randomInt(0, 256).toString(16).padStart(2, "0") + this.randomInt(0, 256).toString(16).padStart(2, "0") + this.randomInt(0, 256).toString(16).padStart(2, "0");
  }
  randomPop(e) {
    if (0 !== e.length) {
      var t = this.randomInt(0, e.length);
      return e.splice(t, 1)[0];
    }
  }
  randomGaussian(e = 0, t = 1) {
    var o = this.random(),
      n = this.random();
    return Math.sqrt(-2 * Math.log(o)) * Math.cos(2 * Math.PI * n) * t + e;
  }
  randomUUID() {
    var e = this;
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
      var o = e.randomInt(0, 16);
      return ("x" === t ? o : 3 & o | 8).toString(16);
    });
  }
}
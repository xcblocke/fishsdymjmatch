"use strict";
cc._RF.push(module, 'bc339UIEhNCEZxCly8aX1h7', 'RandomGenerator');
// Scripts/core/simulator/structures/RandomGenerator.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomGenerator = void 0;
var RandomGenerator = /** @class */ (function () {
    function RandomGenerator(e) {
        this._initialSeed = null;
        this._seed = this._initialSeed;
        this._initialSeed = void 0 !== e ? e : Date.now();
    }
    RandomGenerator.prototype.getSeed = function () {
        return this._seed;
    };
    RandomGenerator.prototype.random = function () {
        this._seed = (1103515245 * this._seed + 12345) % 2147483648;
        return this._seed / 2147483648;
    };
    RandomGenerator.prototype.randomInt = function (e, t) {
        if (e >= t)
            return e;
        e = Math.ceil(e);
        t = Math.floor(t);
        return Math.floor(this.random() * (t - e)) + e;
    };
    RandomGenerator.prototype.randomIntInclusive = function (e, t) {
        if (e > t)
            return e;
        e = Math.ceil(e);
        t = Math.floor(t);
        return Math.floor(this.random() * (t - e + 1)) + e;
    };
    RandomGenerator.prototype.randomFloat = function (e, t) {
        return e >= t ? e : this.random() * (t - e) + e;
    };
    RandomGenerator.prototype.randomBool = function (e) {
        if (e === void 0) { e = 0.5; }
        return this.random() < e;
    };
    RandomGenerator.prototype.randomElement = function (e) {
        if (0 !== e.length)
            return e[this.randomInt(0, e.length)];
    };
    RandomGenerator.prototype.randomElements = function (e, t) {
        if (!e || 0 === e.length)
            return [];
        if (t <= 0)
            return [];
        if (t >= e.length)
            return __spreadArrays(e);
        for (var o = __spreadArrays(e), n = [], r = 0; r < t; r++) {
            var a = this.randomInt(0, o.length);
            n.push(o[a]);
            o.splice(a, 1);
        }
        return n;
    };
    RandomGenerator.prototype.shuffle = function (e) {
        for (var t, o = e.length - 1; o > 0; o--) {
            var i = this.randomInt(0, o + 1);
            t = __read([e[i], e[o]], 2), e[o] = t[0], e[i] = t[1];
        }
        return e;
    };
    RandomGenerator.prototype.shuffleNew = function (e) {
        return this.shuffle(__spreadArrays(e));
    };
    RandomGenerator.prototype.randomWeighted = function (e, t) {
        if (0 !== e.length && e.length === t.length) {
            var o = t.reduce(function (e, t) {
                return e + t;
            }, 0);
            if (!(o <= 0)) {
                for (var n = this.random() * o, i = 0; i < e.length; i++)
                    if ((n -= t[i]) < 0)
                        return e[i];
                return e[e.length - 1];
            }
        }
    };
    RandomGenerator.prototype.randomId = function (e) {
        if (e === void 0) { e = 8; }
        for (var t = "", o = 0; o < e; o++)
            t += this.randomInt(0, 10).toString();
        return t;
    };
    RandomGenerator.prototype.randomString = function (e, t) {
        if (t === void 0) { t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; }
        for (var o = "", n = 0; n < e; n++)
            o += t[this.randomInt(0, t.length)];
        return o;
    };
    RandomGenerator.prototype.randomColor = function () {
        return "#" + this.randomInt(0, 256).toString(16).padStart(2, "0") + this.randomInt(0, 256).toString(16).padStart(2, "0") + this.randomInt(0, 256).toString(16).padStart(2, "0");
    };
    RandomGenerator.prototype.randomPop = function (e) {
        if (0 !== e.length) {
            var t = this.randomInt(0, e.length);
            return e.splice(t, 1)[0];
        }
    };
    RandomGenerator.prototype.randomGaussian = function (e, t) {
        if (e === void 0) { e = 0; }
        if (t === void 0) { t = 1; }
        var o = this.random(), n = this.random();
        return Math.sqrt(-2 * Math.log(o)) * Math.cos(2 * Math.PI * n) * t + e;
    };
    RandomGenerator.prototype.randomUUID = function () {
        var e = this;
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
            var o = e.randomInt(0, 16);
            return ("x" === t ? o : 3 & o | 8).toString(16);
        });
    };
    return RandomGenerator;
}());
exports.RandomGenerator = RandomGenerator;

cc._RF.pop();
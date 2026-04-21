
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/simulator/structures/RandomGenerator.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL3N0cnVjdHVyZXMvUmFuZG9tR2VuZXJhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFHRSx5QkFBWSxDQUFDO1FBRmIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsVUFBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFFeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3BELENBQUM7SUFDRCxpQ0FBTyxHQUFQO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxnQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLFVBQVUsQ0FBQztRQUM1RCxPQUFPLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO0lBQ2pDLENBQUM7SUFDRCxtQ0FBUyxHQUFULFVBQVUsQ0FBQyxFQUFFLENBQUM7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDckIsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakIsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0QsNENBQWtCLEdBQWxCLFVBQW1CLENBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUM7WUFB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Q0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBQ0Qsb0NBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLE9BQU8sc0NBQXNDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7WUFDeEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDM0IsT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQS9GQSxBQStGQyxJQUFBO0FBL0ZZLDBDQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFJhbmRvbUdlbmVyYXRvciB7XG4gIF9pbml0aWFsU2VlZCA9IG51bGw7XG4gIF9zZWVkID0gdGhpcy5faW5pdGlhbFNlZWQ7XG4gIGNvbnN0cnVjdG9yKGUpIHtcbiAgICB0aGlzLl9pbml0aWFsU2VlZCA9IHZvaWQgMCAhPT0gZSA/IGUgOiBEYXRlLm5vdygpO1xuICB9XG4gIGdldFNlZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlZWQ7XG4gIH1cbiAgcmFuZG9tKCkge1xuICAgIHRoaXMuX3NlZWQgPSAoMTEwMzUxNTI0NSAqIHRoaXMuX3NlZWQgKyAxMjM0NSkgJSAyMTQ3NDgzNjQ4O1xuICAgIHJldHVybiB0aGlzLl9zZWVkIC8gMjE0NzQ4MzY0ODtcbiAgfVxuICByYW5kb21JbnQoZSwgdCkge1xuICAgIGlmIChlID49IHQpIHJldHVybiBlO1xuICAgIGUgPSBNYXRoLmNlaWwoZSk7XG4gICAgdCA9IE1hdGguZmxvb3IodCk7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5yYW5kb20oKSAqICh0IC0gZSkpICsgZTtcbiAgfVxuICByYW5kb21JbnRJbmNsdXNpdmUoZSwgdCkge1xuICAgIGlmIChlID4gdCkgcmV0dXJuIGU7XG4gICAgZSA9IE1hdGguY2VpbChlKTtcbiAgICB0ID0gTWF0aC5mbG9vcih0KTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLnJhbmRvbSgpICogKHQgLSBlICsgMSkpICsgZTtcbiAgfVxuICByYW5kb21GbG9hdChlLCB0KSB7XG4gICAgcmV0dXJuIGUgPj0gdCA/IGUgOiB0aGlzLnJhbmRvbSgpICogKHQgLSBlKSArIGU7XG4gIH1cbiAgcmFuZG9tQm9vbChlID0gMC41KSB7XG4gICAgcmV0dXJuIHRoaXMucmFuZG9tKCkgPCBlO1xuICB9XG4gIHJhbmRvbUVsZW1lbnQoZSkge1xuICAgIGlmICgwICE9PSBlLmxlbmd0aCkgcmV0dXJuIGVbdGhpcy5yYW5kb21JbnQoMCwgZS5sZW5ndGgpXTtcbiAgfVxuICByYW5kb21FbGVtZW50cyhlLCB0KSB7XG4gICAgaWYgKCFlIHx8IDAgPT09IGUubGVuZ3RoKSByZXR1cm4gW107XG4gICAgaWYgKHQgPD0gMCkgcmV0dXJuIFtdO1xuICAgIGlmICh0ID49IGUubGVuZ3RoKSByZXR1cm4gWy4uLmVdO1xuICAgIGZvciAodmFyIG8gPSBbLi4uZV0sIG4gPSBbXSwgciA9IDA7IHIgPCB0OyByKyspIHtcbiAgICAgIHZhciBhID0gdGhpcy5yYW5kb21JbnQoMCwgby5sZW5ndGgpO1xuICAgICAgbi5wdXNoKG9bYV0pO1xuICAgICAgby5zcGxpY2UoYSwgMSk7XG4gICAgfVxuICAgIHJldHVybiBuO1xuICB9XG4gIHNodWZmbGUoZSkge1xuICAgIGZvciAodmFyIHQsIG8gPSBlLmxlbmd0aCAtIDE7IG8gPiAwOyBvLS0pIHtcbiAgICAgIHZhciBpID0gdGhpcy5yYW5kb21JbnQoMCwgbyArIDEpO1xuICAgICAgdCA9IF9fcmVhZChbZVtpXSwgZVtvXV0sIDIpLCBlW29dID0gdFswXSwgZVtpXSA9IHRbMV07XG4gICAgfVxuICAgIHJldHVybiBlO1xuICB9XG4gIHNodWZmbGVOZXcoZSkge1xuICAgIHJldHVybiB0aGlzLnNodWZmbGUoWy4uLmVdKTtcbiAgfVxuICByYW5kb21XZWlnaHRlZChlLCB0KSB7XG4gICAgaWYgKDAgIT09IGUubGVuZ3RoICYmIGUubGVuZ3RoID09PSB0Lmxlbmd0aCkge1xuICAgICAgdmFyIG8gPSB0LnJlZHVjZShmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICByZXR1cm4gZSArIHQ7XG4gICAgICB9LCAwKTtcbiAgICAgIGlmICghKG8gPD0gMCkpIHtcbiAgICAgICAgZm9yICh2YXIgbiA9IHRoaXMucmFuZG9tKCkgKiBvLCBpID0gMDsgaSA8IGUubGVuZ3RoOyBpKyspIGlmICgobiAtPSB0W2ldKSA8IDApIHJldHVybiBlW2ldO1xuICAgICAgICByZXR1cm4gZVtlLmxlbmd0aCAtIDFdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByYW5kb21JZChlID0gOCkge1xuICAgIGZvciAodmFyIHQgPSBcIlwiLCBvID0gMDsgbyA8IGU7IG8rKykgdCArPSB0aGlzLnJhbmRvbUludCgwLCAxMCkudG9TdHJpbmcoKTtcbiAgICByZXR1cm4gdDtcbiAgfVxuICByYW5kb21TdHJpbmcoZSwgdCA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODlcIikge1xuICAgIGZvciAodmFyIG8gPSBcIlwiLCBuID0gMDsgbiA8IGU7IG4rKykgbyArPSB0W3RoaXMucmFuZG9tSW50KDAsIHQubGVuZ3RoKV07XG4gICAgcmV0dXJuIG87XG4gIH1cbiAgcmFuZG9tQ29sb3IoKSB7XG4gICAgcmV0dXJuIFwiI1wiICsgdGhpcy5yYW5kb21JbnQoMCwgMjU2KS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgXCIwXCIpICsgdGhpcy5yYW5kb21JbnQoMCwgMjU2KS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgXCIwXCIpICsgdGhpcy5yYW5kb21JbnQoMCwgMjU2KS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgXCIwXCIpO1xuICB9XG4gIHJhbmRvbVBvcChlKSB7XG4gICAgaWYgKDAgIT09IGUubGVuZ3RoKSB7XG4gICAgICB2YXIgdCA9IHRoaXMucmFuZG9tSW50KDAsIGUubGVuZ3RoKTtcbiAgICAgIHJldHVybiBlLnNwbGljZSh0LCAxKVswXTtcbiAgICB9XG4gIH1cbiAgcmFuZG9tR2F1c3NpYW4oZSA9IDAsIHQgPSAxKSB7XG4gICAgdmFyIG8gPSB0aGlzLnJhbmRvbSgpLFxuICAgICAgbiA9IHRoaXMucmFuZG9tKCk7XG4gICAgcmV0dXJuIE1hdGguc3FydCgtMiAqIE1hdGgubG9nKG8pKSAqIE1hdGguY29zKDIgKiBNYXRoLlBJICogbikgKiB0ICsgZTtcbiAgfVxuICByYW5kb21VVUlEKCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICByZXR1cm4gXCJ4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHhcIi5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uICh0KSB7XG4gICAgICB2YXIgbyA9IGUucmFuZG9tSW50KDAsIDE2KTtcbiAgICAgIHJldHVybiAoXCJ4XCIgPT09IHQgPyBvIDogMyAmIG8gfCA4KS50b1N0cmluZygxNik7XG4gICAgfSk7XG4gIH1cbn0iXX0=
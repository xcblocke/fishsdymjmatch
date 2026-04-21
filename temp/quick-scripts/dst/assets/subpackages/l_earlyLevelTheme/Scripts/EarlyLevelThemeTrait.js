
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_earlyLevelTheme/Scripts/EarlyLevelThemeTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '47b0eyyn7xJj4SP7kiv77SE', 'EarlyLevelThemeTrait');
// subpackages/l_earlyLevelTheme/Scripts/EarlyLevelThemeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var p = [25, 66, 28, 73, 11, 24, 7, 34, 65, 31];
var EarlyLevelThemeTrait = /** @class */ (function (_super) {
    __extends(EarlyLevelThemeTrait, _super);
    function EarlyLevelThemeTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EarlyLevelThemeTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.localData.shuffledThemeIds && 0 !== this.localData.shuffledThemeIds.length || (this.localData.shuffledThemeIds = this.shuffleArray(__spreadArrays(p)));
        this.localData.levelThemeMap || (this.localData.levelThemeMap = {});
    };
    EarlyLevelThemeTrait.prototype.shuffleArray = function (e) {
        for (var t, r = e.length - 1; r > 0; r--) {
            var n = Math.floor(Math.random() * (r + 1));
            t = __read([e[n], e[r]], 2), e[r] = t[0], e[n] = t[1];
        }
        return e;
    };
    EarlyLevelThemeTrait.prototype.isMainLineMode = function () {
        var e = UserModel_1.default.getInstance().getCurrentGameType();
        return e === GameTypeEnums_1.MjGameType.Normal || e === GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    EarlyLevelThemeTrait.prototype.getMainLevelId = function () {
        var e;
        return (null === (e = UserModel_1.default.getInstance().getMainGameData()) || void 0 === e ? void 0 : e.getLevelId()) || 0;
    };
    EarlyLevelThemeTrait.prototype.onFlowerCS_getThemePeriod = function (e, t) {
        t({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: 2,
            isBreak: true
        });
    };
    EarlyLevelThemeTrait.prototype.onFlowerCS_sortQueue = function (e, t) {
        var r, n, a, o, i = e.ins, s = i._remoteDownloadQueue;
        if (s && 0 !== s.length) {
            var f = i.getFlowerSeries(), c = new Set(), d = function d(e) {
                var t = f.find(function (t) {
                    return t.id === e;
                });
                t && !t.isLocal && c.add(t.bundle);
            };
            try {
                for (var h = __values(p), y = h.next(); !y.done; y = h.next())
                    d(y.value);
            }
            catch (e) {
                r = {
                    error: e
                };
            }
            finally {
                try {
                    y && !y.done && (n = h.return) && n.call(h);
                }
                finally {
                    if (r)
                        throw r.error;
                }
            }
            var v = [], m = [];
            try {
                for (var T = __values(s), _ = T.next(); !_.done; _ = T.next()) {
                    var g = _.value;
                    if (c.has(g)) {
                        v.push(g);
                    }
                    else {
                        m.push(g);
                    }
                }
            }
            catch (e) {
                a = {
                    error: e
                };
            }
            finally {
                try {
                    _ && !_.done && (o = T.return) && o.call(T);
                }
                finally {
                    if (a)
                        throw a.error;
                }
            }
            s.length = 0;
            s.push.apply(s, __spreadArrays(v, m));
            t();
        }
        else
            t();
    };
    EarlyLevelThemeTrait.prototype.isBundleReady = function (e, t) {
        return !!t.isLocal || !!e.isBundleReady && e.isBundleReady(t.bundle);
    };
    EarlyLevelThemeTrait.prototype.findReadySeries = function (e, t, r, n, a) {
        if (n >= 0 && n < r.length && !a.has(r[n])) {
            var o = t.find(function (e) {
                return e.id === r[n];
            });
            if (o && this.isBundleReady(e, o))
                return o;
        }
        for (var i = function i(o) {
            if (o === n)
                return "continue";
            if (a.has(r[o]))
                return "continue";
            var i = t.find(function (e) {
                return e.id === r[o];
            });
            return i && l.isBundleReady(e, i) ? {
                value: i
            } : void 0;
        }, l = this, u = 0; u < r.length; u++) {
            var s = i(u);
            if ("object" == typeof s)
                return s.value;
        }
        return null;
    };
    EarlyLevelThemeTrait.prototype.onFlowerCS_drawFlower = function (e, t) {
        if (this.isMainLineMode()) {
            var r = this.getMainLevelId(), n = e.ins, a = n.getFlowerSeries(), o = this.localData.levelThemeMap, i = Object.keys(o).length;
            if (void 0 === o[r]) {
                if (i >= 10)
                    t();
                else {
                    var l = new Set();
                    for (var u in o)
                        l.add(o[u]);
                    var s = this.localData.shuffledThemeIds, c = i, d = this.findReadySeries(n, a, s, c, l);
                    if (d) {
                        o[r] = d.id;
                        this.localData.levelThemeMap = o;
                        n.saveModeData({
                            currentSeries: d
                        });
                        n.setLastSeriesId(d.id);
                        t({
                            returnType: TraitManager_1.TraitCallbackReturnType.return,
                            isBreak: true,
                            returnVal: d
                        });
                    }
                    else
                        t();
                }
            }
            else {
                var p = a.find(function (e) {
                    return e.id === o[r];
                });
                if (p && this.isBundleReady(n, p)) {
                    n.saveModeData({
                        currentSeries: p
                    });
                    n.setLastSeriesId(p.id);
                    t({
                        returnType: TraitManager_1.TraitCallbackReturnType.return,
                        isBreak: true,
                        returnVal: p
                    });
                    return;
                }
                t();
            }
        }
        else
            t();
    };
    EarlyLevelThemeTrait.traitKey = "EarlyLevelTheme";
    EarlyLevelThemeTrait = __decorate([
        mj.trait,
        mj.class("EarlyLevelThemeTrait")
    ], EarlyLevelThemeTrait);
    return EarlyLevelThemeTrait;
}(Trait_1.default));
exports.default = EarlyLevelThemeTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2Vhcmx5TGV2ZWxUaGVtZS9TY3JpcHRzL0Vhcmx5TGV2ZWxUaGVtZVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLHNFQUFpRTtBQUNqRSx3RkFBb0Y7QUFDcEYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUdoRDtJQUFrRCx3Q0FBSztJQUF2RDs7SUE4SkEsQ0FBQztJQTVKQyxxQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFlBQVksZ0JBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqSixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFDRCwyQ0FBWSxHQUFaLFVBQWEsQ0FBQztRQUNaLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENB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LENBQUM7YUFDTDtTQUNGOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQTVKTSw2QkFBUSxHQUFHLGlCQUFpQixDQUFDO0lBRGpCLG9CQUFvQjtRQUZ4QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7T0FDWixvQkFBb0IsQ0E4SnhDO0lBQUQsMkJBQUM7Q0E5SkQsQUE4SkMsQ0E5SmlELGVBQUssR0E4SnREO2tCQTlKb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbnZhciBwID0gWzI1LCA2NiwgMjgsIDczLCAxMSwgMjQsIDcsIDM0LCA2NSwgMzFdO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJFYXJseUxldmVsVGhlbWVUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWFybHlMZXZlbFRoZW1lVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiRWFybHlMZXZlbFRoZW1lXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmxvY2FsRGF0YS5zaHVmZmxlZFRoZW1lSWRzICYmIDAgIT09IHRoaXMubG9jYWxEYXRhLnNodWZmbGVkVGhlbWVJZHMubGVuZ3RoIHx8ICh0aGlzLmxvY2FsRGF0YS5zaHVmZmxlZFRoZW1lSWRzID0gdGhpcy5zaHVmZmxlQXJyYXkoWy4uLnBdKSk7XG4gICAgdGhpcy5sb2NhbERhdGEubGV2ZWxUaGVtZU1hcCB8fCAodGhpcy5sb2NhbERhdGEubGV2ZWxUaGVtZU1hcCA9IHt9KTtcbiAgfVxuICBzaHVmZmxlQXJyYXkoZSkge1xuICAgIGZvciAodmFyIHQsIHIgPSBlLmxlbmd0aCAtIDE7IHIgPiAwOyByLS0pIHtcbiAgICAgIHZhciBuID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHIgKyAxKSk7XG4gICAgICB0ID0gX19yZWFkKFtlW25dLCBlW3JdXSwgMiksIGVbcl0gPSB0WzBdLCBlW25dID0gdFsxXTtcbiAgICB9XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgaXNNYWluTGluZU1vZGUoKSB7XG4gICAgdmFyIGUgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKTtcbiAgICByZXR1cm4gZSA9PT0gTWpHYW1lVHlwZS5Ob3JtYWwgfHwgZSA9PT0gTWpHYW1lVHlwZS5UaWxlMk5vcm1hbDtcbiAgfVxuICBnZXRNYWluTGV2ZWxJZCgpIHtcbiAgICB2YXIgZTtcbiAgICByZXR1cm4gKG51bGwgPT09IChlID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0TWFpbkdhbWVEYXRhKCkpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuZ2V0TGV2ZWxJZCgpKSB8fCAwO1xuICB9XG4gIG9uRmxvd2VyQ1NfZ2V0VGhlbWVQZXJpb2QoZSwgdCkge1xuICAgIHQoe1xuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgcmV0dXJuVmFsOiAyLFxuICAgICAgaXNCcmVhazogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIG9uRmxvd2VyQ1Nfc29ydFF1ZXVlKGUsIHQpIHtcbiAgICB2YXIgcixcbiAgICAgIG4sXG4gICAgICBhLFxuICAgICAgbyxcbiAgICAgIGkgPSBlLmlucyxcbiAgICAgIHMgPSBpLl9yZW1vdGVEb3dubG9hZFF1ZXVlO1xuICAgIGlmIChzICYmIDAgIT09IHMubGVuZ3RoKSB7XG4gICAgICB2YXIgZiA9IGkuZ2V0Rmxvd2VyU2VyaWVzKCksXG4gICAgICAgIGMgPSBuZXcgU2V0KCksXG4gICAgICAgIGQgPSBmdW5jdGlvbiBkKGUpIHtcbiAgICAgICAgICB2YXIgdCA9IGYuZmluZChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgcmV0dXJuIHQuaWQgPT09IGU7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdCAmJiAhdC5pc0xvY2FsICYmIGMuYWRkKHQuYnVuZGxlKTtcbiAgICAgICAgfTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIGggPSBfX3ZhbHVlcyhwKSwgeSA9IGgubmV4dCgpOyAheS5kb25lOyB5ID0gaC5uZXh0KCkpIGQoeS52YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHIgPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgeSAmJiAheS5kb25lICYmIChuID0gaC5yZXR1cm4pICYmIG4uY2FsbChoKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAocikgdGhyb3cgci5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIHYgPSBbXSxcbiAgICAgICAgbSA9IFtdO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgVCA9IF9fdmFsdWVzKHMpLCBfID0gVC5uZXh0KCk7ICFfLmRvbmU7IF8gPSBULm5leHQoKSkge1xuICAgICAgICAgIHZhciBnID0gXy52YWx1ZTtcbiAgICAgICAgICBpZiAoYy5oYXMoZykpIHtcbiAgICAgICAgICAgIHYucHVzaChnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbS5wdXNoKGcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBhID0ge1xuICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF8gJiYgIV8uZG9uZSAmJiAobyA9IFQucmV0dXJuKSAmJiBvLmNhbGwoVCk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKGEpIHRocm93IGEuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHMubGVuZ3RoID0gMDtcbiAgICAgIHMucHVzaC5hcHBseShzLCBbLi4udiwgLi4ubV0pO1xuICAgICAgdCgpO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgaXNCdW5kbGVSZWFkeShlLCB0KSB7XG4gICAgcmV0dXJuICEhdC5pc0xvY2FsIHx8ICEhZS5pc0J1bmRsZVJlYWR5ICYmIGUuaXNCdW5kbGVSZWFkeSh0LmJ1bmRsZSk7XG4gIH1cbiAgZmluZFJlYWR5U2VyaWVzKGUsIHQsIHIsIG4sIGEpIHtcbiAgICBpZiAobiA+PSAwICYmIG4gPCByLmxlbmd0aCAmJiAhYS5oYXMocltuXSkpIHtcbiAgICAgIHZhciBvID0gdC5maW5kKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlLmlkID09PSByW25dO1xuICAgICAgfSk7XG4gICAgICBpZiAobyAmJiB0aGlzLmlzQnVuZGxlUmVhZHkoZSwgbykpIHJldHVybiBvO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gZnVuY3Rpb24gaShvKSB7XG4gICAgICAgIGlmIChvID09PSBuKSByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICBpZiAoYS5oYXMocltvXSkpIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgIHZhciBpID0gdC5maW5kKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGUuaWQgPT09IHJbb107XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaSAmJiBsLmlzQnVuZGxlUmVhZHkoZSwgaSkgPyB7XG4gICAgICAgICAgdmFsdWU6IGlcbiAgICAgICAgfSA6IHZvaWQgMDtcbiAgICAgIH0sIGwgPSB0aGlzLCB1ID0gMDsgdSA8IHIubGVuZ3RoOyB1KyspIHtcbiAgICAgIHZhciBzID0gaSh1KTtcbiAgICAgIGlmIChcIm9iamVjdFwiID09IHR5cGVvZiBzKSByZXR1cm4gcy52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgb25GbG93ZXJDU19kcmF3Rmxvd2VyKGUsIHQpIHtcbiAgICBpZiAodGhpcy5pc01haW5MaW5lTW9kZSgpKSB7XG4gICAgICB2YXIgciA9IHRoaXMuZ2V0TWFpbkxldmVsSWQoKSxcbiAgICAgICAgbiA9IGUuaW5zLFxuICAgICAgICBhID0gbi5nZXRGbG93ZXJTZXJpZXMoKSxcbiAgICAgICAgbyA9IHRoaXMubG9jYWxEYXRhLmxldmVsVGhlbWVNYXAsXG4gICAgICAgIGkgPSBPYmplY3Qua2V5cyhvKS5sZW5ndGg7XG4gICAgICBpZiAodm9pZCAwID09PSBvW3JdKSB7XG4gICAgICAgIGlmIChpID49IDEwKSB0KCk7ZWxzZSB7XG4gICAgICAgICAgdmFyIGwgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgZm9yICh2YXIgdSBpbiBvKSBsLmFkZChvW3VdKTtcbiAgICAgICAgICB2YXIgcyA9IHRoaXMubG9jYWxEYXRhLnNodWZmbGVkVGhlbWVJZHMsXG4gICAgICAgICAgICBjID0gaSxcbiAgICAgICAgICAgIGQgPSB0aGlzLmZpbmRSZWFkeVNlcmllcyhuLCBhLCBzLCBjLCBsKTtcbiAgICAgICAgICBpZiAoZCkge1xuICAgICAgICAgICAgb1tyXSA9IGQuaWQ7XG4gICAgICAgICAgICB0aGlzLmxvY2FsRGF0YS5sZXZlbFRoZW1lTWFwID0gbztcbiAgICAgICAgICAgIG4uc2F2ZU1vZGVEYXRhKHtcbiAgICAgICAgICAgICAgY3VycmVudFNlcmllczogZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBuLnNldExhc3RTZXJpZXNJZChkLmlkKTtcbiAgICAgICAgICAgIHQoe1xuICAgICAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgICAgIHJldHVyblZhbDogZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHAgPSBhLmZpbmQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gZS5pZCA9PT0gb1tyXTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChwICYmIHRoaXMuaXNCdW5kbGVSZWFkeShuLCBwKSkge1xuICAgICAgICAgIG4uc2F2ZU1vZGVEYXRhKHtcbiAgICAgICAgICAgIGN1cnJlbnRTZXJpZXM6IHBcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBuLnNldExhc3RTZXJpZXNJZChwLmlkKTtcbiAgICAgICAgICB0KHtcbiAgICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgICByZXR1cm5WYWw6IHBcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB0KCk7XG4gIH1cbn0iXX0=
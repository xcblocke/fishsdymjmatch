
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/extractClassic/ClassicLevelRepository.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f498esgC7VM9Jw+U8DFR3Z5', 'ClassicLevelRepository');
// Scripts/core/extractClassic/ClassicLevelRepository.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassicLevelRepository = void 0;
var ResManager_1 = require("../../framework/manager/ResManager");
var ClassicLevelRepository = /** @class */ (function () {
    function ClassicLevelRepository() {
        this._initialLevels = [];
        this._loopLevels = [];
        this._loopLevelsByLayer = new Map();
        this._initialized = false;
        this._initPromise = null;
        this._lastInitialIndex = null;
    }
    ClassicLevelRepository_1 = ClassicLevelRepository;
    ClassicLevelRepository.getInstance = function () {
        ClassicLevelRepository_1._instance || (ClassicLevelRepository_1._instance = new ClassicLevelRepository_1());
        return ClassicLevelRepository_1._instance;
    };
    ClassicLevelRepository.prototype.init = function () {
        var e = this;
        if (this._initialized)
            return Promise.resolve();
        if (this._initPromise)
            return this._initPromise;
        this._initPromise = this._loadAllLevels();
        return this._initPromise.then(function () {
            e._initPromise = null;
        });
    };
    ClassicLevelRepository.prototype.getLoopPath = function () {
        return "config/boards/endless_classic/loop";
    };
    ClassicLevelRepository.prototype.getInitialPath = function () {
        return "config/boards/endless_classic/initial";
    };
    ClassicLevelRepository.prototype.getLibName = function (e) {
        var t;
        return (null === (t = e.split("/").pop()) || void 0 === t ? void 0 : t.split(".")[0]) || "";
    };
    ClassicLevelRepository.prototype._loadAllLevels = function () {
        var e = this;
        Date.now();
        return Promise.all([this._loadLevels(this.getInitialPath(), "initial"), this._loadLevels(this.getLoopPath(), "loop")]).then(function (t) {
            var o = __read(t, 2), n = o[0], r = o[1];
            e._initialLevels = n;
            e._loopLevels = r;
            e._buildLayerCache();
            e._initialized = true;
            Date.now();
        }).catch(function (e) {
            console.error("【无尽关卡-仓库】加载关卡数据失败:", e);
            throw e;
        });
    };
    ClassicLevelRepository.prototype._buildLayerCache = function () {
        var e, t, o;
        this._loopLevelsByLayer.clear();
        try {
            for (var n = __values(this._loopLevels), i = n.next(); !i.done; i = n.next()) {
                var a = i.value, l = null !== (o = a.Layer) && void 0 !== o ? o : 0;
                this._loopLevelsByLayer.has(l) || this._loopLevelsByLayer.set(l, []);
                this._loopLevelsByLayer.get(l).push(a);
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                i && !i.done && (t = n.return) && t.call(n);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
    };
    ClassicLevelRepository.prototype._getLayerDistributionStr = function () {
        var e, t, o = [], n = Array.from(this._loopLevelsByLayer.keys()).sort(function (e, t) {
            return e - t;
        });
        try {
            for (var i = __values(n), a = i.next(); !a.done; a = i.next()) {
                var l = a.value;
                o.push("Layer" + l + "=" + this._loopLevelsByLayer.get(l).length);
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                a && !a.done && (t = i.return) && t.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return o.join(", ");
    };
    ClassicLevelRepository.prototype._loadLevels = function (e) {
        return ResManager_1.resManager.loadRes(e, cc.JsonAsset, "mainRes").then(function (e) {
            return (Array.isArray(e) ? e[0] : e).json;
        });
    };
    ClassicLevelRepository.prototype.getAllInitialLevels = function () {
        return this._initialLevels;
    };
    ClassicLevelRepository.prototype.getInitialLevelCount = function () {
        return this._initialLevels.length;
    };
    ClassicLevelRepository.prototype.getRandomInitialLevel = function () {
        if (0 === this._initialLevels.length)
            return null;
        if (1 === this._initialLevels.length)
            return this._initialLevels[0];
        var e, t = 0;
        do {
            var o = Math.floor(Math.random() * this._initialLevels.length);
            e = this._initialLevels[o];
            t++;
        } while (e.Index === this._lastInitialIndex && t < 10);
        this._lastInitialIndex = e.Index;
        return e;
    };
    ClassicLevelRepository.prototype.getAllLoopLevels = function () {
        return this._loopLevels;
    };
    ClassicLevelRepository.prototype.getRandomLoopLevel = function () {
        if (0 === this._loopLevels.length)
            return null;
        var e = Math.floor(Math.random() * this._loopLevels.length);
        return this._loopLevels[e];
    };
    ClassicLevelRepository.prototype.getRandomLoopLevelByLayers = function (e) {
        var t, o;
        if (0 === e.length)
            return this.getRandomLoopLevel();
        var n = [];
        try {
            for (var i = __values(e), l = i.next(); !l.done; l = i.next()) {
                var s = l.value, c = this._loopLevelsByLayer.get(s);
                c && n.push.apply(n, __spreadArrays(c));
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                l && !l.done && (o = i.return) && o.call(i);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return 0 === n.length ? this.getRandomLoopLevel() : n[Math.floor(Math.random() * n.length)];
    };
    var ClassicLevelRepository_1;
    ClassicLevelRepository = ClassicLevelRepository_1 = __decorate([
        mj.class("ClassicLevelRepository")
    ], ClassicLevelRepository);
    return ClassicLevelRepository;
}());
exports.ClassicLevelRepository = ClassicLevelRepository;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvZXh0cmFjdENsYXNzaWMvQ2xhc3NpY0xldmVsUmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFnRTtBQUVoRTtJQUFBO1FBQ0UsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDcEIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsdUJBQWtCLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUMvQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixzQkFBaUIsR0FBRyxJQUFJLENBQUM7SUErSTNCLENBQUM7K0JBckpZLHNCQUFzQjtJQU8xQixrQ0FBVyxHQUFsQjtRQUNFLHdCQUFzQixDQUFDLFNBQVMsSUFBSSxDQUFDLHdCQUFzQixDQUFDLFNBQVMsR0FBRyxJQUFJLHdCQUFzQixFQUFFLENBQUMsQ0FBQztRQUN0RyxPQUFPLHdCQUFzQixDQUFDLFNBQVMsQ0FBQztJQUMxQyxDQUFDO0lBQ0QscUNBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksSUFBSSxDQUFDLFlBQVk7WUFBRSxPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNoRCxJQUFJLElBQUksQ0FBQyxZQUFZO1lBQUUsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ2hELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzFDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDNUIsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsNENBQVcsR0FBWDtRQUNFLE9BQU8sb0NBQW9DLENBQUM7SUFDOUMsQ0FBQztJQUNELCtDQUFjLEdBQWQ7UUFDRSxPQUFPLHVDQUF1QyxDQUFD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Q0FBQyxpQkFBTSxDQUFDLEVBQUUsQ0FBQzthQUM5QjtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO1FBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM5RixDQUFDOztJQXBKVSxzQkFBc0I7UUFEbEMsRUFBRSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQztPQUN0QixzQkFBc0IsQ0FxSmxDO0lBQUQsNkJBQUM7Q0FySkQsQUFxSkMsSUFBQTtBQXJKWSx3REFBc0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXNNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvUmVzTWFuYWdlcic7XG5AbWouY2xhc3MoXCJDbGFzc2ljTGV2ZWxSZXBvc2l0b3J5XCIpXG5leHBvcnQgY2xhc3MgQ2xhc3NpY0xldmVsUmVwb3NpdG9yeSB7XG4gIF9pbml0aWFsTGV2ZWxzID0gW107XG4gIF9sb29wTGV2ZWxzID0gW107XG4gIF9sb29wTGV2ZWxzQnlMYXllciA9IG5ldyBNYXAoKTtcbiAgX2luaXRpYWxpemVkID0gZmFsc2U7XG4gIF9pbml0UHJvbWlzZSA9IG51bGw7XG4gIF9sYXN0SW5pdGlhbEluZGV4ID0gbnVsbDtcbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgIENsYXNzaWNMZXZlbFJlcG9zaXRvcnkuX2luc3RhbmNlIHx8IChDbGFzc2ljTGV2ZWxSZXBvc2l0b3J5Ll9pbnN0YW5jZSA9IG5ldyBDbGFzc2ljTGV2ZWxSZXBvc2l0b3J5KCkpO1xuICAgIHJldHVybiBDbGFzc2ljTGV2ZWxSZXBvc2l0b3J5Ll9pbnN0YW5jZTtcbiAgfVxuICBpbml0KCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICBpZiAodGhpcy5faW5pdGlhbGl6ZWQpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBpZiAodGhpcy5faW5pdFByb21pc2UpIHJldHVybiB0aGlzLl9pbml0UHJvbWlzZTtcbiAgICB0aGlzLl9pbml0UHJvbWlzZSA9IHRoaXMuX2xvYWRBbGxMZXZlbHMoKTtcbiAgICByZXR1cm4gdGhpcy5faW5pdFByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBlLl9pbml0UHJvbWlzZSA9IG51bGw7XG4gICAgfSk7XG4gIH1cbiAgZ2V0TG9vcFBhdGgoKSB7XG4gICAgcmV0dXJuIFwiY29uZmlnL2JvYXJkcy9lbmRsZXNzX2NsYXNzaWMvbG9vcFwiO1xuICB9XG4gIGdldEluaXRpYWxQYXRoKCkge1xuICAgIHJldHVybiBcImNvbmZpZy9ib2FyZHMvZW5kbGVzc19jbGFzc2ljL2luaXRpYWxcIjtcbiAgfVxuICBnZXRMaWJOYW1lKGUpIHtcbiAgICB2YXIgdDtcbiAgICByZXR1cm4gKG51bGwgPT09ICh0ID0gZS5zcGxpdChcIi9cIikucG9wKCkpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuc3BsaXQoXCIuXCIpWzBdKSB8fCBcIlwiO1xuICB9XG4gIF9sb2FkQWxsTGV2ZWxzKCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICBEYXRlLm5vdygpO1xuICAgIHJldHVybiBQcm9taXNlLmFsbChbdGhpcy5fbG9hZExldmVscyh0aGlzLmdldEluaXRpYWxQYXRoKCksIFwiaW5pdGlhbFwiKSwgdGhpcy5fbG9hZExldmVscyh0aGlzLmdldExvb3BQYXRoKCksIFwibG9vcFwiKV0pLnRoZW4oZnVuY3Rpb24gKHQpIHtcbiAgICAgIHZhciBvID0gX19yZWFkKHQsIDIpLFxuICAgICAgICBuID0gb1swXSxcbiAgICAgICAgciA9IG9bMV07XG4gICAgICBlLl9pbml0aWFsTGV2ZWxzID0gbjtcbiAgICAgIGUuX2xvb3BMZXZlbHMgPSByO1xuICAgICAgZS5fYnVpbGRMYXllckNhY2hlKCk7XG4gICAgICBlLl9pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICBEYXRlLm5vdygpO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwi44CQ5peg5bC95YWz5Y2hLeS7k+W6k+OAkeWKoOi9veWFs+WNoeaVsOaNruWksei0pTpcIiwgZSk7XG4gICAgICB0aHJvdyBlO1xuICAgIH0pO1xuICB9XG4gIF9idWlsZExheWVyQ2FjaGUoKSB7XG4gICAgdmFyIGUsIHQsIG87XG4gICAgdGhpcy5fbG9vcExldmVsc0J5TGF5ZXIuY2xlYXIoKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbiA9IF9fdmFsdWVzKHRoaXMuX2xvb3BMZXZlbHMpLCBpID0gbi5uZXh0KCk7ICFpLmRvbmU7IGkgPSBuLm5leHQoKSkge1xuICAgICAgICB2YXIgYSA9IGkudmFsdWUsXG4gICAgICAgICAgbCA9IG51bGwgIT09IChvID0gYS5MYXllcikgJiYgdm9pZCAwICE9PSBvID8gbyA6IDA7XG4gICAgICAgIHRoaXMuX2xvb3BMZXZlbHNCeUxheWVyLmhhcyhsKSB8fCB0aGlzLl9sb29wTGV2ZWxzQnlMYXllci5zZXQobCwgW10pO1xuICAgICAgICB0aGlzLl9sb29wTGV2ZWxzQnlMYXllci5nZXQobCkucHVzaChhKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaSAmJiAhaS5kb25lICYmICh0ID0gbi5yZXR1cm4pICYmIHQuY2FsbChuKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBfZ2V0TGF5ZXJEaXN0cmlidXRpb25TdHIoKSB7XG4gICAgdmFyIGUsXG4gICAgICB0LFxuICAgICAgbyA9IFtdLFxuICAgICAgbiA9IEFycmF5LmZyb20odGhpcy5fbG9vcExldmVsc0J5TGF5ZXIua2V5cygpKS5zb3J0KGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIHJldHVybiBlIC0gdDtcbiAgICAgIH0pO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBpID0gX192YWx1ZXMobiksIGEgPSBpLm5leHQoKTsgIWEuZG9uZTsgYSA9IGkubmV4dCgpKSB7XG4gICAgICAgIHZhciBsID0gYS52YWx1ZTtcbiAgICAgICAgby5wdXNoKFwiTGF5ZXJcIiArIGwgKyBcIj1cIiArIHRoaXMuX2xvb3BMZXZlbHNCeUxheWVyLmdldChsKS5sZW5ndGgpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGUgPSB7XG4gICAgICAgIGVycm9yOiB0XG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBhICYmICFhLmRvbmUgJiYgKHQgPSBpLnJldHVybikgJiYgdC5jYWxsKGkpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvLmpvaW4oXCIsIFwiKTtcbiAgfVxuICBfbG9hZExldmVscyhlKSB7XG4gICAgcmV0dXJuIHJlc01hbmFnZXIubG9hZFJlcyhlLCBjYy5Kc29uQXNzZXQsIFwibWFpblJlc1wiKS50aGVuKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gKEFycmF5LmlzQXJyYXkoZSkgPyBlWzBdIDogZSkuanNvbjtcbiAgICB9KTtcbiAgfVxuICBnZXRBbGxJbml0aWFsTGV2ZWxzKCkge1xuICAgIHJldHVybiB0aGlzLl9pbml0aWFsTGV2ZWxzO1xuICB9XG4gIGdldEluaXRpYWxMZXZlbENvdW50KCkge1xuICAgIHJldHVybiB0aGlzLl9pbml0aWFsTGV2ZWxzLmxlbmd0aDtcbiAgfVxuICBnZXRSYW5kb21Jbml0aWFsTGV2ZWwoKSB7XG4gICAgaWYgKDAgPT09IHRoaXMuX2luaXRpYWxMZXZlbHMubGVuZ3RoKSByZXR1cm4gbnVsbDtcbiAgICBpZiAoMSA9PT0gdGhpcy5faW5pdGlhbExldmVscy5sZW5ndGgpIHJldHVybiB0aGlzLl9pbml0aWFsTGV2ZWxzWzBdO1xuICAgIHZhciBlLFxuICAgICAgdCA9IDA7XG4gICAgZG8ge1xuICAgICAgdmFyIG8gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLl9pbml0aWFsTGV2ZWxzLmxlbmd0aCk7XG4gICAgICBlID0gdGhpcy5faW5pdGlhbExldmVsc1tvXTtcbiAgICAgIHQrKztcbiAgICB9IHdoaWxlIChlLkluZGV4ID09PSB0aGlzLl9sYXN0SW5pdGlhbEluZGV4ICYmIHQgPCAxMCk7XG4gICAgdGhpcy5fbGFzdEluaXRpYWxJbmRleCA9IGUuSW5kZXg7XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgZ2V0QWxsTG9vcExldmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9vcExldmVscztcbiAgfVxuICBnZXRSYW5kb21Mb29wTGV2ZWwoKSB7XG4gICAgaWYgKDAgPT09IHRoaXMuX2xvb3BMZXZlbHMubGVuZ3RoKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuX2xvb3BMZXZlbHMubGVuZ3RoKTtcbiAgICByZXR1cm4gdGhpcy5fbG9vcExldmVsc1tlXTtcbiAgfVxuICBnZXRSYW5kb21Mb29wTGV2ZWxCeUxheWVycyhlKSB7XG4gICAgdmFyIHQsIG87XG4gICAgaWYgKDAgPT09IGUubGVuZ3RoKSByZXR1cm4gdGhpcy5nZXRSYW5kb21Mb29wTGV2ZWwoKTtcbiAgICB2YXIgbiA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBpID0gX192YWx1ZXMoZSksIGwgPSBpLm5leHQoKTsgIWwuZG9uZTsgbCA9IGkubmV4dCgpKSB7XG4gICAgICAgIHZhciBzID0gbC52YWx1ZSxcbiAgICAgICAgICBjID0gdGhpcy5fbG9vcExldmVsc0J5TGF5ZXIuZ2V0KHMpO1xuICAgICAgICBjICYmIG4ucHVzaC5hcHBseShuLCBbLi4uY10pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBsICYmICFsLmRvbmUgJiYgKG8gPSBpLnJldHVybikgJiYgby5jYWxsKGkpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAwID09PSBuLmxlbmd0aCA/IHRoaXMuZ2V0UmFuZG9tTG9vcExldmVsKCkgOiBuW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG4ubGVuZ3RoKV07XG4gIH1cbn0iXX0=
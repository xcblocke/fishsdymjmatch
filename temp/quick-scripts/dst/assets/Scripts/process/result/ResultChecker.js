
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/result/ResultChecker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3b745VPmKBI7Yq+Gq4ZCga7', 'ResultChecker');
// Scripts/process/result/ResultChecker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultChecker = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var GameStateListener_1 = require("../game/GameStateListener");
var ResultChecker = /** @class */ (function (_super) {
    __extends(ResultChecker, _super);
    function ResultChecker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResultChecker.prototype.checkIsEndOrDead = function (e) {
        if (e === void 0) { e = []; }
        var t, o, n, i;
        if (this.context.getTileMapObject().checkIsDead(e))
            return true;
        if (this.context.endStrategy.checkIsEnd())
            return true;
        var a = this.context.getTileMapObject().mapLayers();
        try {
            for (var l = __values(a), s = l.next(); !s.done; s = l.next()) {
                var c = s.value.allCards;
                try {
                    for (var u = (n = void 0, __values(c)), p = u.next(); !p.done; p = u.next())
                        if (p.value.isValid)
                            return false;
                }
                catch (e) {
                    n = {
                        error: e
                    };
                }
                finally {
                    try {
                        p && !p.done && (i = u.return) && i.call(u);
                    }
                    finally {
                        if (n)
                            throw n.error;
                    }
                }
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                s && !s.done && (o = l.return) && o.call(l);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return true;
    };
    ResultChecker.prototype.checkResult = function () {
        var e, t, o, n;
        if (this.context.endStrategy.checkIsEnd()) {
            GameStateListener_1.default.onGameEnd(this.context.gameType);
            return true;
        }
        var i = this.context.getTileMapObject().mapLayers();
        try {
            for (var a = __values(i), s = a.next(); !s.done; s = a.next()) {
                var c = s.value.allCards;
                try {
                    for (var u = (o = void 0, __values(c)), p = u.next(); !p.done; p = u.next())
                        if (p.value.isValid)
                            return false;
                }
                catch (e) {
                    o = {
                        error: e
                    };
                }
                finally {
                    try {
                        p && !p.done && (n = u.return) && n.call(u);
                    }
                    finally {
                        if (o)
                            throw o.error;
                    }
                }
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                s && !s.done && (t = a.return) && t.call(a);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        GameStateListener_1.default.onGameEnd(this.context.gameType);
        return true;
    };
    return ResultChecker;
}(BaseCoreObject_1.BaseCoreObject));
exports.ResultChecker = ResultChecker;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvcmVzdWx0L1Jlc3VsdENoZWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBc0Q7QUFDdEQsK0RBQTBEO0FBQzFEO0lBQW1DLGlDQUFjO0lBQWpEOztJQTBFQSxDQUFDO0lBekVDLHdDQUFnQixHQUFoQixVQUFpQixDQUFNO1FBQU4sa0JBQUEsRUFBQSxNQUFNO1FBQ3JCLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ2hFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDdkQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3BELElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztnQkFDekIsSUFBSTtvQkFDRixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxF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QUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QztvQkFBUztnQkFDUixJQUFJLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCwyQkFBaUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDSCxvQkFBQztBQUFELENBMUVBLEFBMEVDLENBMUVrQywrQkFBYyxHQTBFaEQ7QUExRVksc0NBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlQ29yZU9iamVjdCB9IGZyb20gJy4uLy4uL0Jhc2VDb3JlT2JqZWN0JztcbmltcG9ydCBHYW1lU3RhdGVMaXN0ZW5lciBmcm9tICcuLi9nYW1lL0dhbWVTdGF0ZUxpc3RlbmVyJztcbmV4cG9ydCBjbGFzcyBSZXN1bHRDaGVja2VyIGV4dGVuZHMgQmFzZUNvcmVPYmplY3Qge1xuICBjaGVja0lzRW5kT3JEZWFkKGUgPSBbXSkge1xuICAgIHZhciB0LCBvLCBuLCBpO1xuICAgIGlmICh0aGlzLmNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmNoZWNrSXNEZWFkKGUpKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAodGhpcy5jb250ZXh0LmVuZFN0cmF0ZWd5LmNoZWNrSXNFbmQoKSkgcmV0dXJuIHRydWU7XG4gICAgdmFyIGEgPSB0aGlzLmNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLm1hcExheWVycygpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBsID0gX192YWx1ZXMoYSksIHMgPSBsLm5leHQoKTsgIXMuZG9uZTsgcyA9IGwubmV4dCgpKSB7XG4gICAgICAgIHZhciBjID0gcy52YWx1ZS5hbGxDYXJkcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciB1ID0gKG4gPSB2b2lkIDAsIF9fdmFsdWVzKGMpKSwgcCA9IHUubmV4dCgpOyAhcC5kb25lOyBwID0gdS5uZXh0KCkpIGlmIChwLnZhbHVlLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIG4gPSB7XG4gICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHAgJiYgIXAuZG9uZSAmJiAoaSA9IHUucmV0dXJuKSAmJiBpLmNhbGwodSk7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChuKSB0aHJvdyBuLmVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBzICYmICFzLmRvbmUgJiYgKG8gPSBsLnJldHVybikgJiYgby5jYWxsKGwpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGNoZWNrUmVzdWx0KCkge1xuICAgIHZhciBlLCB0LCBvLCBuO1xuICAgIGlmICh0aGlzLmNvbnRleHQuZW5kU3RyYXRlZ3kuY2hlY2tJc0VuZCgpKSB7XG4gICAgICBHYW1lU3RhdGVMaXN0ZW5lci5vbkdhbWVFbmQodGhpcy5jb250ZXh0LmdhbWVUeXBlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB2YXIgaSA9IHRoaXMuY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkubWFwTGF5ZXJzKCk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGEgPSBfX3ZhbHVlcyhpKSwgcyA9IGEubmV4dCgpOyAhcy5kb25lOyBzID0gYS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGMgPSBzLnZhbHVlLmFsbENhcmRzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIHUgPSAobyA9IHZvaWQgMCwgX192YWx1ZXMoYykpLCBwID0gdS5uZXh0KCk7ICFwLmRvbmU7IHAgPSB1Lm5leHQoKSkgaWYgKHAudmFsdWUuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgbyA9IHtcbiAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcCAmJiAhcC5kb25lICYmIChuID0gdS5yZXR1cm4pICYmIG4uY2FsbCh1KTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgZSA9IHtcbiAgICAgICAgZXJyb3I6IHRcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHMgJiYgIXMuZG9uZSAmJiAodCA9IGEucmV0dXJuKSAmJiB0LmNhbGwoYSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgR2FtZVN0YXRlTGlzdGVuZXIub25HYW1lRW5kKHRoaXMuY29udGV4dC5nYW1lVHlwZSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0iXX0=
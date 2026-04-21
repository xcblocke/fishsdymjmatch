
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/cheer/Tile2CheerChecker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '88affN7ns9BQ7hFcosbXgAL', 'Tile2CheerChecker');
// Scripts/process/cheer/Tile2CheerChecker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2CheerChecker = void 0;
var UserModel_1 = require("../../gamePlay/user/UserModel");
var BaseCoreObject_1 = require("../../BaseCoreObject");
var Tile2CheerChecker = /** @class */ (function (_super) {
    __extends(Tile2CheerChecker, _super);
    function Tile2CheerChecker(t) {
        return _super.call(this, t) || this;
    }
    Tile2CheerChecker.prototype.getThresholds = function () {
        return [[5, 0], [10, 1], [15, 2], [20, 3], [30, 4], [40, 4], [50, 4]];
    };
    Tile2CheerChecker.prototype.canShowCheer = function (e) {
        var t, o;
        if (!UserModel_1.default.getInstance().isGuideFinished())
            return {
                isShow: false,
                index: 0
            };
        var n = this.getThresholds();
        try {
            for (var i = __values(n), r = i.next(); !r.done; r = i.next()) {
                var c = __read(r.value, 2), u = c[0], p = c[1];
                if (e === u)
                    return {
                        isShow: true,
                        index: p
                    };
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                r && !r.done && (o = i.return) && o.call(i);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return {
            isShow: false,
            index: 0
        };
    };
    Tile2CheerChecker.prototype.getStepThresholds = function () {
        return [[5, 4], [4, 3], [3, 2], [2, 1], [1, 0]];
    };
    Tile2CheerChecker.prototype.canShowCheerByStep = function (e) {
        var t, o;
        if (!UserModel_1.default.getInstance().isGuideFinished())
            return {
                isShow: false,
                index: 0
            };
        var n = this.getStepThresholds();
        try {
            for (var i = __values(n), r = i.next(); !r.done; r = i.next()) {
                var c = __read(r.value, 2), u = c[0], p = c[1];
                if (e >= u)
                    return {
                        isShow: true,
                        index: p
                    };
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                r && !r.done && (o = i.return) && o.call(i);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return {
            isShow: false,
            index: 0
        };
    };
    __decorate([
        mj.traitEvent("T2CheerChk_thresholds")
    ], Tile2CheerChecker.prototype, "getThresholds", null);
    __decorate([
        mj.traitEvent("T2CheerChk_canShow")
    ], Tile2CheerChecker.prototype, "canShowCheer", null);
    __decorate([
        mj.traitEvent("T2CheerChk_stepThresholds")
    ], Tile2CheerChecker.prototype, "getStepThresholds", null);
    __decorate([
        mj.traitEvent("T2CheerChk_canShowByStep")
    ], Tile2CheerChecker.prototype, "canShowCheerByStep", null);
    return Tile2CheerChecker;
}(BaseCoreObject_1.BaseCoreObject));
exports.Tile2CheerChecker = Tile2CheerChecker;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvY2hlZXIvVGlsZTJDaGVlckNoZWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBc0Q7QUFDdEQsdURBQXNEO0FBQ3REO0lBQXVDLHFDQUFjO0lBQ25ELDJCQUFZLENBQUM7ZUFDWCxrQkFBTSxDQUFDLENBQUM7SUFDVixDQUFDO0lBRUQseUNBQWEsR0FBYjtRQUNFLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCx3Q0FBWSxHQUFaLFVBQWEsQ0FBQztRQUNaLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULElBQUksQ0FBQyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGVBQWUsRUFBRTtZQUFFLE9BQU87Z0JBQ3JELE1BQU0sRUFBRSxLQUFLO2dCQUNiLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQztRQUNGLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUM3QixJQUFJO1lBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDN0QsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVB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LENBQUMsMkJBQTJCLENBQUM7OERBRzFDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDOytEQWlDekM7SUFDSCx3QkFBQztDQWhGRCxBQWdGQyxDQWhGc0MsK0JBQWMsR0FnRnBEO0FBaEZZLDhDQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IHsgQmFzZUNvcmVPYmplY3QgfSBmcm9tICcuLi8uLi9CYXNlQ29yZU9iamVjdCc7XG5leHBvcnQgY2xhc3MgVGlsZTJDaGVlckNoZWNrZXIgZXh0ZW5kcyBCYXNlQ29yZU9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHQpIHtcbiAgICBzdXBlcih0KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlQyQ2hlZXJDaGtfdGhyZXNob2xkc1wiKVxuICBnZXRUaHJlc2hvbGRzKCkge1xuICAgIHJldHVybiBbWzUsIDBdLCBbMTAsIDFdLCBbMTUsIDJdLCBbMjAsIDNdLCBbMzAsIDRdLCBbNDAsIDRdLCBbNTAsIDRdXTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlQyQ2hlZXJDaGtfY2FuU2hvd1wiKVxuICBjYW5TaG93Q2hlZXIoZSkge1xuICAgIHZhciB0LCBvO1xuICAgIGlmICghVXNlck1vZGVsLmdldEluc3RhbmNlKCkuaXNHdWlkZUZpbmlzaGVkKCkpIHJldHVybiB7XG4gICAgICBpc1Nob3c6IGZhbHNlLFxuICAgICAgaW5kZXg6IDBcbiAgICB9O1xuICAgIHZhciBuID0gdGhpcy5nZXRUaHJlc2hvbGRzKCk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGkgPSBfX3ZhbHVlcyhuKSwgciA9IGkubmV4dCgpOyAhci5kb25lOyByID0gaS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGMgPSBfX3JlYWQoci52YWx1ZSwgMiksXG4gICAgICAgICAgdSA9IGNbMF0sXG4gICAgICAgICAgcCA9IGNbMV07XG4gICAgICAgIGlmIChlID09PSB1KSByZXR1cm4ge1xuICAgICAgICAgIGlzU2hvdzogdHJ1ZSxcbiAgICAgICAgICBpbmRleDogcFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICByICYmICFyLmRvbmUgJiYgKG8gPSBpLnJldHVybikgJiYgby5jYWxsKGkpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBpc1Nob3c6IGZhbHNlLFxuICAgICAgaW5kZXg6IDBcbiAgICB9O1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVDJDaGVlckNoa19zdGVwVGhyZXNob2xkc1wiKVxuICBnZXRTdGVwVGhyZXNob2xkcygpIHtcbiAgICByZXR1cm4gW1s1LCA0XSwgWzQsIDNdLCBbMywgMl0sIFsyLCAxXSwgWzEsIDBdXTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlQyQ2hlZXJDaGtfY2FuU2hvd0J5U3RlcFwiKVxuICBjYW5TaG93Q2hlZXJCeVN0ZXAoZSkge1xuICAgIHZhciB0LCBvO1xuICAgIGlmICghVXNlck1vZGVsLmdldEluc3RhbmNlKCkuaXNHdWlkZUZpbmlzaGVkKCkpIHJldHVybiB7XG4gICAgICBpc1Nob3c6IGZhbHNlLFxuICAgICAgaW5kZXg6IDBcbiAgICB9O1xuICAgIHZhciBuID0gdGhpcy5nZXRTdGVwVGhyZXNob2xkcygpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBpID0gX192YWx1ZXMobiksIHIgPSBpLm5leHQoKTsgIXIuZG9uZTsgciA9IGkubmV4dCgpKSB7XG4gICAgICAgIHZhciBjID0gX19yZWFkKHIudmFsdWUsIDIpLFxuICAgICAgICAgIHUgPSBjWzBdLFxuICAgICAgICAgIHAgPSBjWzFdO1xuICAgICAgICBpZiAoZSA+PSB1KSByZXR1cm4ge1xuICAgICAgICAgIGlzU2hvdzogdHJ1ZSxcbiAgICAgICAgICBpbmRleDogcFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICByICYmICFyLmRvbmUgJiYgKG8gPSBpLnJldHVybikgJiYgby5jYWxsKGkpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBpc1Nob3c6IGZhbHNlLFxuICAgICAgaW5kZXg6IDBcbiAgICB9O1xuICB9XG59Il19
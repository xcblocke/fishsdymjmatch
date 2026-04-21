
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_card6AutoClear/Scripts/Card6AutoClearTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '20cabOJG9NNyq/2njyDMbOi', 'Card6AutoClearTrait');
// subpackages/l_card6AutoClear/Scripts/Card6AutoClearTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var Card6AutoClearTrait = /** @class */ (function (_super) {
    __extends(Card6AutoClearTrait, _super);
    function Card6AutoClearTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Card6AutoClearTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._config = this._traitData.config || {};
        null == this._config.initRate && (this._config.initRate = 100);
        null == this._config.decreaseRate && (this._config.decreaseRate = 40);
        null == this._config.increaseRate && (this._config.increaseRate = 50);
        null == this._config.minTiles && (this._config.minTiles = 6);
        null == this._config.maxTiles && (this._config.maxTiles = 6);
        null == this._config.openLevel && (this._config.openLevel = 10);
        GameUtils_1.default.isEmpty(this.localData.curRate) && (this.localData.curRate = this._config.initRate);
    };
    Card6AutoClearTrait.prototype.onAllClearTt_minTiles = function (t, e) {
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: this._config.minTiles
        });
    };
    Card6AutoClearTrait.prototype.onAllClrChk_canTrig = function (t, e) {
        var i, r, a, n, l = function l(t) {
            return e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: t
            });
        };
        if (this._isGuideActive())
            l(false);
        else {
            if (UserModel_1.default.getInstance().getMainGameData().getLevelId() < this._config.openLevel)
                l(false);
            else {
                var u = null === (i = t.ins) || void 0 === i ? void 0 : i.context;
                if (u) {
                    var f = null === (r = u.getTileMapObject) || void 0 === r ? void 0 : r.call(u);
                    if (f) {
                        var p = null !== (n = null === (a = f.getCurTilesCnt) || void 0 === a ? void 0 : a.call(f)) && void 0 !== n ? n : 0;
                        if (p < this._config.minTiles || p > this._config.maxTiles)
                            l(false);
                        else {
                            var _ = this.localData.curRate / 100, d = Math.random() < _, h = d ? -this._config.decreaseRate : this._config.increaseRate;
                            this.localData.curRate = GameUtils_1.default.clamp(this.localData.curRate + h, 0, 100);
                            l(d);
                        }
                    }
                    else
                        l(false);
                }
                else
                    l(false);
            }
        }
    };
    Card6AutoClearTrait.prototype._isGuideActive = function () {
        var t = UserModel_1.default.getInstance().getMainGameData().getLevelId();
        return !UserModel_1.default.getInstance().isGuideFinished() || 1 === t;
    };
    Card6AutoClearTrait.traitKey = "Card6AutoClear";
    Card6AutoClearTrait = __decorate([
        mj.trait,
        mj.class("Card6AutoClearTrait")
    ], Card6AutoClearTrait);
    return Card6AutoClearTrait;
}(Trait_1.default));
exports.default = Card6AutoClearTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NhcmQ2QXV0b0NsZWFyL1NjcmlwdHMvQ2FyZDZBdXRvQ2xlYXJUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNEVBQXVFO0FBQ3ZFLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYsc0VBQWlFO0FBR2pFO0lBQWlELHVDQUFLO0lBQXREOztJQXVEQSxDQUFDO0lBckRDLG9DQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQzVDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQy9ELElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3RFLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3RFLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ2hFLG1CQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7SUFDRCxtREFBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDO1lBQ0EsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07WUFDMUMsT0FBTyxFQUFFLElBQUk7WUFDYixTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRO1NBQ2pDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxpREFBbUIsR0FBbkIsVUFBb0IsQ0FBQyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDZCxPQUFPLENBQUMsQ0FBQztnQkFDUCxVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtnQkFDMUMsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsU0FBUyxFQUFFLENBQUM7YUFDYixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7UUFDSixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7YUFBSztZQUN2QyxJQUFJLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTO2dCQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFBSztnQkFDakcsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO2dCQUNsRSxJQUFJLENBQUMsRUFBRTtvQkFDTCxJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDL0UsSUFBSSxDQUFDLEVBQUU7d0JBQ0wsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3BILElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVE7NEJBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDOzZCQUFLOzRCQUN4RSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQ2xDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUNyQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQzs0QkFDakUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsbUJBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQzs0QkFDN0UsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUNOO3FCQUNGOzt3QkFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2pCOztvQkFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDakI7U0FDRjtJQUNILENBQUM7SUFDRCw0Q0FBYyxHQUFkO1FBQ0UsSUFBSSxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMvRCxPQUFPLENBQUMsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFyRE0sNEJBQVEsR0FBRyxnQkFBZ0IsQ0FBQztJQURoQixtQkFBbUI7UUFGdkMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDO09BQ1gsbUJBQW1CLENBdUR2QztJQUFELDBCQUFDO0NBdkRELEFBdURDLENBdkRnRCxlQUFLLEdBdURyRDtrQkF2RG9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lVXRpbHMgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci91dGlsL0dhbWVVdGlscyc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQ2FyZDZBdXRvQ2xlYXJUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZDZBdXRvQ2xlYXJUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJDYXJkNkF1dG9DbGVhclwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fdHJhaXREYXRhLmNvbmZpZyB8fCB7fTtcbiAgICBudWxsID09IHRoaXMuX2NvbmZpZy5pbml0UmF0ZSAmJiAodGhpcy5fY29uZmlnLmluaXRSYXRlID0gMTAwKTtcbiAgICBudWxsID09IHRoaXMuX2NvbmZpZy5kZWNyZWFzZVJhdGUgJiYgKHRoaXMuX2NvbmZpZy5kZWNyZWFzZVJhdGUgPSA0MCk7XG4gICAgbnVsbCA9PSB0aGlzLl9jb25maWcuaW5jcmVhc2VSYXRlICYmICh0aGlzLl9jb25maWcuaW5jcmVhc2VSYXRlID0gNTApO1xuICAgIG51bGwgPT0gdGhpcy5fY29uZmlnLm1pblRpbGVzICYmICh0aGlzLl9jb25maWcubWluVGlsZXMgPSA2KTtcbiAgICBudWxsID09IHRoaXMuX2NvbmZpZy5tYXhUaWxlcyAmJiAodGhpcy5fY29uZmlnLm1heFRpbGVzID0gNik7XG4gICAgbnVsbCA9PSB0aGlzLl9jb25maWcub3BlbkxldmVsICYmICh0aGlzLl9jb25maWcub3BlbkxldmVsID0gMTApO1xuICAgIEdhbWVVdGlscy5pc0VtcHR5KHRoaXMubG9jYWxEYXRhLmN1clJhdGUpICYmICh0aGlzLmxvY2FsRGF0YS5jdXJSYXRlID0gdGhpcy5fY29uZmlnLmluaXRSYXRlKTtcbiAgfVxuICBvbkFsbENsZWFyVHRfbWluVGlsZXModCwgZSkge1xuICAgIGUoe1xuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblZhbDogdGhpcy5fY29uZmlnLm1pblRpbGVzXG4gICAgfSk7XG4gIH1cbiAgb25BbGxDbHJDaGtfY2FuVHJpZyh0LCBlKSB7XG4gICAgdmFyIGksXG4gICAgICByLFxuICAgICAgYSxcbiAgICAgIG4sXG4gICAgICBsID0gZnVuY3Rpb24gbCh0KSB7XG4gICAgICAgIHJldHVybiBlKHtcbiAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICByZXR1cm5WYWw6IHRcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIGlmICh0aGlzLl9pc0d1aWRlQWN0aXZlKCkpIGwoZmFsc2UpO2Vsc2Uge1xuICAgICAgaWYgKFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldE1haW5HYW1lRGF0YSgpLmdldExldmVsSWQoKSA8IHRoaXMuX2NvbmZpZy5vcGVuTGV2ZWwpIGwoZmFsc2UpO2Vsc2Uge1xuICAgICAgICB2YXIgdSA9IG51bGwgPT09IChpID0gdC5pbnMpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuY29udGV4dDtcbiAgICAgICAgaWYgKHUpIHtcbiAgICAgICAgICB2YXIgZiA9IG51bGwgPT09IChyID0gdS5nZXRUaWxlTWFwT2JqZWN0KSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLmNhbGwodSk7XG4gICAgICAgICAgaWYgKGYpIHtcbiAgICAgICAgICAgIHZhciBwID0gbnVsbCAhPT0gKG4gPSBudWxsID09PSAoYSA9IGYuZ2V0Q3VyVGlsZXNDbnQpIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGEuY2FsbChmKSkgJiYgdm9pZCAwICE9PSBuID8gbiA6IDA7XG4gICAgICAgICAgICBpZiAocCA8IHRoaXMuX2NvbmZpZy5taW5UaWxlcyB8fCBwID4gdGhpcy5fY29uZmlnLm1heFRpbGVzKSBsKGZhbHNlKTtlbHNlIHtcbiAgICAgICAgICAgICAgdmFyIF8gPSB0aGlzLmxvY2FsRGF0YS5jdXJSYXRlIC8gMTAwLFxuICAgICAgICAgICAgICAgIGQgPSBNYXRoLnJhbmRvbSgpIDwgXyxcbiAgICAgICAgICAgICAgICBoID0gZCA/IC10aGlzLl9jb25maWcuZGVjcmVhc2VSYXRlIDogdGhpcy5fY29uZmlnLmluY3JlYXNlUmF0ZTtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbERhdGEuY3VyUmF0ZSA9IEdhbWVVdGlscy5jbGFtcCh0aGlzLmxvY2FsRGF0YS5jdXJSYXRlICsgaCwgMCwgMTAwKTtcbiAgICAgICAgICAgICAgbChkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgbChmYWxzZSk7XG4gICAgICAgIH0gZWxzZSBsKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgX2lzR3VpZGVBY3RpdmUoKSB7XG4gICAgdmFyIHQgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRNYWluR2FtZURhdGEoKS5nZXRMZXZlbElkKCk7XG4gICAgcmV0dXJuICFVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5pc0d1aWRlRmluaXNoZWQoKSB8fCAxID09PSB0O1xuICB9XG59Il19
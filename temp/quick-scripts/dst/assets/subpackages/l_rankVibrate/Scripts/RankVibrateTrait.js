
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rankVibrate/Scripts/RankVibrateTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '31846T1+PFIOaJzFwOwj25j', 'RankVibrateTrait');
// subpackages/l_rankVibrate/Scripts/RankVibrateTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var VibrateManager_1 = require("../../../Scripts/gamePlay/base/vibrate/VibrateManager");
var RankVibrateTrait = /** @class */ (function (_super) {
    __extends(RankVibrateTrait, _super);
    function RankVibrateTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._rantUpVibrateTween = null;
        return _this;
    }
    RankVibrateTrait.prototype.onLoad = function () {
        var r, e, n, i, a;
        _super.prototype.onLoad.call(this);
        this._config = {
            rateUp: (null === (r = this._traitData) || void 0 === r ? void 0 : r.rateUp) || VibrateManager_1.EVibrateStrength.Medium,
            cardCollect: (null === (e = this._traitData) || void 0 === e ? void 0 : e.cardCollect) || VibrateManager_1.EVibrateStrength.Light,
            rankUp: (null === (n = this._traitData) || void 0 === n ? void 0 : n.rankUp) || VibrateManager_1.EVibrateStrength.Light,
            rankSettle: (null === (i = this._traitData) || void 0 === i ? void 0 : i.rankSettle) || VibrateManager_1.EVibrateStrength.Medium,
            rankUpInterval: (null === (a = this._traitData) || void 0 === a ? void 0 : a.rankUpInterval) || 0.1
        };
    };
    RankVibrateTrait.prototype.triggerVibrate = function (t) {
        VibrateManager_1.default.executeVibrate(t);
    };
    RankVibrateTrait.prototype.onRkBnsWinRate_playRtLvAni = function (t, r) {
        this._config.rateUp >= 0 && this.triggerVibrate(this._config.rateUp, 15);
        r();
    };
    RankVibrateTrait.prototype.onRankColEff_playLightEff = function (t, r) {
        this._config.cardCollect >= 0 && this.triggerVibrate(this._config.cardCollect, 16);
        r();
    };
    RankVibrateTrait.prototype.onRankColCard_onCardArrived = function (t, r) {
        r();
    };
    RankVibrateTrait.prototype.onRankBonusVw_rankUpStart = function (t, r) {
        var e = this, n = t.ins;
        if (this._config.rankUp >= 0) {
            this.triggerVibrate(this._config.rankUp, 17);
            var i = this._config.rankUpInterval;
            if (this._rantUpVibrateTween) {
                this._rantUpVibrateTween.stop();
                this._rantUpVibrateTween = null;
            }
            this._rantUpVibrateTween = cc.tween(n.node).delay(i).call(function () {
                var t;
                if (n && cc.isValid(n.node) && n.isUpRankPlaying && e._rantUpVibrateTween)
                    e.triggerVibrate(e._config.rankUp, 17);
                else {
                    null === (t = e._rantUpVibrateTween) || void 0 === t || t.stop();
                    e._rantUpVibrateTween = null;
                }
            }).union().repeatForever().start();
        }
        r();
    };
    RankVibrateTrait.prototype.onRankBonusVw_rankUpEnd = function (t, r) {
        if (this._rantUpVibrateTween) {
            this._rantUpVibrateTween.stop();
            this._rantUpVibrateTween = null;
        }
        r();
    };
    RankVibrateTrait.prototype.onRkBnsListVw_rankUpStart = function (t, r) {
        var e = this, n = t.ins, i = this._config.rankUpInterval, a = Math.floor((t.args[1] || 0) / i) - 1;
        if (this._config.rankUp >= 0 && a > 0) {
            this.triggerVibrate(this._config.rankUp, 17);
            a > 1 && cc.tween(n.node).delay(i).call(function () {
                n && cc.isValid(n.node) && e.triggerVibrate(e._config.rankUp, 17);
            }).union().repeat(a - 1).start();
        }
        r();
    };
    RankVibrateTrait.prototype.onRankBonusItem_rankOutEff = function (t, r) {
        this._config.rankSettle >= 0 && this.triggerVibrate(this._config.rankSettle, 18);
        r();
    };
    RankVibrateTrait.traitKey = "RankVibrate";
    RankVibrateTrait = __decorate([
        mj.trait,
        mj.class("RankVibrateTrait")
    ], RankVibrateTrait);
    return RankVibrateTrait;
}(Trait_1.default));
exports.default = RankVibrateTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmtWaWJyYXRlL1NjcmlwdHMvUmFua1ZpYnJhdGVUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELHdGQUF5RztBQUd6RztJQUE4QyxvQ0FBSztJQUFuRDtRQUFBLHFFQXdFQztRQXZFQyx5QkFBbUIsR0FBRyxJQUFJLENBQUM7O0lBdUU3QixDQUFDO0lBckVDLGlDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEIsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsTUFBTSxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksaUNBQWdCLENBQUMsTUFBTTtZQUN2RyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxpQ0FBZ0IsQ0FBQyxLQUFLO1lBQ2hILE1BQU0sRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLGlDQUFnQixDQUFDLEtBQUs7WUFDdEcsVUFBVSxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksaUNBQWdCLENBQUMsTUFBTTtZQUMvRyxjQUFjLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxHQUFHO1NBQ3BHLENBQUM7SUFDSixDQUFDO0lBQ0QseUNBQWMsR0FBZCxVQUFlLENBQUM7UUFDZCx3QkFBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0QscURBQTBCLEdBQTFCLFVBQTJCLENBQUMsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pFLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELG9EQUF5QixHQUF6QixVQUEwQixDQUFDLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNuRixDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxzREFBMkIsR0FBM0IsVUFBNEIsQ0FBQyxFQUFFLENBQUM7UUFDOUIsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0Qsb0RBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxHQUFHLElBQUksRUFDVixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNaLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQzVCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7WUFDcEMsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQzthQUNqQztZQUNELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUN4RCxJQUFJLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsZUFBZSxJQUFJLENBQUMsQ0FBQyxtQkFBbUI7b0JBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztxQkFBSztvQkFDckgsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ2pFLENBQUMsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7aUJBQzlCO1lBQ0gsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDcEM7UUFDRCxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxrREFBdUIsR0FBdkIsVUFBd0IsQ0FBQyxFQUFFLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDNUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7U0FDakM7UUFDRCxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxvREFBeUIsR0FBekIsVUFBMEIsQ0FBQyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUNWLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUNULENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFDL0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDN0MsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUN0QyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNwRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2xDO1FBQ0QsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QscURBQTBCLEdBQTFCLFVBQTJCLENBQUMsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pGLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQXJFTSx5QkFBUSxHQUFHLGFBQWEsQ0FBQztJQUZiLGdCQUFnQjtRQUZwQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUM7T0FDUixnQkFBZ0IsQ0F3RXBDO0lBQUQsdUJBQUM7Q0F4RUQsQUF3RUMsQ0F4RTZDLGVBQUssR0F3RWxEO2tCQXhFb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBWaWJyYXRlTWFuYWdlciwgeyBFVmlicmF0ZVN0cmVuZ3RoIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3ZpYnJhdGUvVmlicmF0ZU1hbmFnZXInO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJSYW5rVmlicmF0ZVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5rVmlicmF0ZVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfcmFudFVwVmlicmF0ZVR3ZWVuID0gbnVsbDtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJSYW5rVmlicmF0ZVwiO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIHIsIGUsIG4sIGksIGE7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fY29uZmlnID0ge1xuICAgICAgcmF0ZVVwOiAobnVsbCA9PT0gKHIgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIucmF0ZVVwKSB8fCBFVmlicmF0ZVN0cmVuZ3RoLk1lZGl1bSxcbiAgICAgIGNhcmRDb2xsZWN0OiAobnVsbCA9PT0gKGUgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuY2FyZENvbGxlY3QpIHx8IEVWaWJyYXRlU3RyZW5ndGguTGlnaHQsXG4gICAgICByYW5rVXA6IChudWxsID09PSAobiA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBuID8gdm9pZCAwIDogbi5yYW5rVXApIHx8IEVWaWJyYXRlU3RyZW5ndGguTGlnaHQsXG4gICAgICByYW5rU2V0dGxlOiAobnVsbCA9PT0gKGkgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkucmFua1NldHRsZSkgfHwgRVZpYnJhdGVTdHJlbmd0aC5NZWRpdW0sXG4gICAgICByYW5rVXBJbnRlcnZhbDogKG51bGwgPT09IChhID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhLnJhbmtVcEludGVydmFsKSB8fCAwLjFcbiAgICB9O1xuICB9XG4gIHRyaWdnZXJWaWJyYXRlKHQpIHtcbiAgICBWaWJyYXRlTWFuYWdlci5leGVjdXRlVmlicmF0ZSh0KTtcbiAgfVxuICBvblJrQm5zV2luUmF0ZV9wbGF5UnRMdkFuaSh0LCByKSB7XG4gICAgdGhpcy5fY29uZmlnLnJhdGVVcCA+PSAwICYmIHRoaXMudHJpZ2dlclZpYnJhdGUodGhpcy5fY29uZmlnLnJhdGVVcCwgMTUpO1xuICAgIHIoKTtcbiAgfVxuICBvblJhbmtDb2xFZmZfcGxheUxpZ2h0RWZmKHQsIHIpIHtcbiAgICB0aGlzLl9jb25maWcuY2FyZENvbGxlY3QgPj0gMCAmJiB0aGlzLnRyaWdnZXJWaWJyYXRlKHRoaXMuX2NvbmZpZy5jYXJkQ29sbGVjdCwgMTYpO1xuICAgIHIoKTtcbiAgfVxuICBvblJhbmtDb2xDYXJkX29uQ2FyZEFycml2ZWQodCwgcikge1xuICAgIHIoKTtcbiAgfVxuICBvblJhbmtCb251c1Z3X3JhbmtVcFN0YXJ0KHQsIHIpIHtcbiAgICB2YXIgZSA9IHRoaXMsXG4gICAgICBuID0gdC5pbnM7XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5yYW5rVXAgPj0gMCkge1xuICAgICAgdGhpcy50cmlnZ2VyVmlicmF0ZSh0aGlzLl9jb25maWcucmFua1VwLCAxNyk7XG4gICAgICB2YXIgaSA9IHRoaXMuX2NvbmZpZy5yYW5rVXBJbnRlcnZhbDtcbiAgICAgIGlmICh0aGlzLl9yYW50VXBWaWJyYXRlVHdlZW4pIHtcbiAgICAgICAgdGhpcy5fcmFudFVwVmlicmF0ZVR3ZWVuLnN0b3AoKTtcbiAgICAgICAgdGhpcy5fcmFudFVwVmlicmF0ZVR3ZWVuID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3JhbnRVcFZpYnJhdGVUd2VlbiA9IGNjLnR3ZWVuKG4ubm9kZSkuZGVsYXkoaSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0O1xuICAgICAgICBpZiAobiAmJiBjYy5pc1ZhbGlkKG4ubm9kZSkgJiYgbi5pc1VwUmFua1BsYXlpbmcgJiYgZS5fcmFudFVwVmlicmF0ZVR3ZWVuKSBlLnRyaWdnZXJWaWJyYXRlKGUuX2NvbmZpZy5yYW5rVXAsIDE3KTtlbHNlIHtcbiAgICAgICAgICBudWxsID09PSAodCA9IGUuX3JhbnRVcFZpYnJhdGVUd2VlbikgfHwgdm9pZCAwID09PSB0IHx8IHQuc3RvcCgpO1xuICAgICAgICAgIGUuX3JhbnRVcFZpYnJhdGVUd2VlbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0pLnVuaW9uKCkucmVwZWF0Rm9yZXZlcigpLnN0YXJ0KCk7XG4gICAgfVxuICAgIHIoKTtcbiAgfVxuICBvblJhbmtCb251c1Z3X3JhbmtVcEVuZCh0LCByKSB7XG4gICAgaWYgKHRoaXMuX3JhbnRVcFZpYnJhdGVUd2Vlbikge1xuICAgICAgdGhpcy5fcmFudFVwVmlicmF0ZVR3ZWVuLnN0b3AoKTtcbiAgICAgIHRoaXMuX3JhbnRVcFZpYnJhdGVUd2VlbiA9IG51bGw7XG4gICAgfVxuICAgIHIoKTtcbiAgfVxuICBvblJrQm5zTGlzdFZ3X3JhbmtVcFN0YXJ0KHQsIHIpIHtcbiAgICB2YXIgZSA9IHRoaXMsXG4gICAgICBuID0gdC5pbnMsXG4gICAgICBpID0gdGhpcy5fY29uZmlnLnJhbmtVcEludGVydmFsLFxuICAgICAgYSA9IE1hdGguZmxvb3IoKHQuYXJnc1sxXSB8fCAwKSAvIGkpIC0gMTtcbiAgICBpZiAodGhpcy5fY29uZmlnLnJhbmtVcCA+PSAwICYmIGEgPiAwKSB7XG4gICAgICB0aGlzLnRyaWdnZXJWaWJyYXRlKHRoaXMuX2NvbmZpZy5yYW5rVXAsIDE3KTtcbiAgICAgIGEgPiAxICYmIGNjLnR3ZWVuKG4ubm9kZSkuZGVsYXkoaSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG4gJiYgY2MuaXNWYWxpZChuLm5vZGUpICYmIGUudHJpZ2dlclZpYnJhdGUoZS5fY29uZmlnLnJhbmtVcCwgMTcpO1xuICAgICAgfSkudW5pb24oKS5yZXBlYXQoYSAtIDEpLnN0YXJ0KCk7XG4gICAgfVxuICAgIHIoKTtcbiAgfVxuICBvblJhbmtCb251c0l0ZW1fcmFua091dEVmZih0LCByKSB7XG4gICAgdGhpcy5fY29uZmlnLnJhbmtTZXR0bGUgPj0gMCAmJiB0aGlzLnRyaWdnZXJWaWJyYXRlKHRoaXMuX2NvbmZpZy5yYW5rU2V0dGxlLCAxOCk7XG4gICAgcigpO1xuICB9XG59Il19
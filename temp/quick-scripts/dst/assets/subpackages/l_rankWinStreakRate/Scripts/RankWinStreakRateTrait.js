
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rankWinStreakRate/Scripts/RankWinStreakRateTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ecfdfedUS5GP78FwG0UzV+X', 'RankWinStreakRateTrait');
// subpackages/l_rankWinStreakRate/Scripts/RankWinStreakRateTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var RankWinStreakRateTrait = /** @class */ (function (_super) {
    __extends(RankWinStreakRateTrait, _super);
    function RankWinStreakRateTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(RankWinStreakRateTrait.prototype, "winStreakRate", {
        get: function () {
            return null != this._traitData.winStreakRate ? this._traitData.winStreakRate : [1, 2, 3];
        },
        enumerable: false,
        configurable: true
    });
    RankWinStreakRateTrait.prototype.onRankRbtLgc_loadConfig = function (t, r) {
        t.ins._winStreakStrategies = __spreadArrays(this.winStreakRate);
        r();
    };
    RankWinStreakRateTrait.prototype.onRankRobotCfg_winRates = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: __spreadArrays(this.winStreakRate)
        });
    };
    RankWinStreakRateTrait.prototype.onRkBnsWinRate_show = function (t, r) {
        for (var e = t.ins._barLabelNodes, n = Math.min(e.length, this.winStreakRate.length), a = 0; a < n; a++) {
            var i = e[a];
            i[0].getComponent(cc.Label).string = "x" + this.winStreakRate[a];
            i[1].getComponent(cc.Label).string = "x" + this.winStreakRate[a];
        }
        r();
    };
    RankWinStreakRateTrait.traitKey = "RankWinStreakRate";
    RankWinStreakRateTrait = __decorate([
        mj.trait,
        mj.class("RankWinStreakRateTrait")
    ], RankWinStreakRateTrait);
    return RankWinStreakRateTrait;
}(Trait_1.default));
exports.default = RankWinStreakRateTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmtXaW5TdHJlYWtSYXRlL1NjcmlwdHMvUmFua1dpblN0cmVha1JhdGVUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUd4RjtJQUFvRCwwQ0FBSztJQUF6RDs7SUF3QkEsQ0FBQztJQXRCQyxzQkFBSSxpREFBYTthQUFqQjtZQUNFLE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNGLENBQUM7OztPQUFBO0lBQ0Qsd0RBQXVCLEdBQXZCLFVBQXdCLENBQUMsRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLGtCQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyRCxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCx3REFBdUIsR0FBdkIsVUFBd0IsQ0FBQyxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDO1lBQ0EsT0FBTyxFQUFFLElBQUk7WUFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtZQUMxQyxTQUFTLGlCQUFNLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDbkMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELG9EQUFtQixHQUFuQixVQUFvQixDQUFDLEVBQUUsQ0FBQztRQUN0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsRTtRQUNELENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQXRCTSwrQkFBUSxHQUFHLG1CQUFtQixDQUFDO0lBRG5CLHNCQUFzQjtRQUYxQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUM7T0FDZCxzQkFBc0IsQ0F3QjFDO0lBQUQsNkJBQUM7Q0F4QkQsQUF3QkMsQ0F4Qm1ELGVBQUssR0F3QnhEO2tCQXhCb0Isc0JBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiUmFua1dpblN0cmVha1JhdGVUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFua1dpblN0cmVha1JhdGVUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJSYW5rV2luU3RyZWFrUmF0ZVwiO1xuICBnZXQgd2luU3RyZWFrUmF0ZSgpIHtcbiAgICByZXR1cm4gbnVsbCAhPSB0aGlzLl90cmFpdERhdGEud2luU3RyZWFrUmF0ZSA/IHRoaXMuX3RyYWl0RGF0YS53aW5TdHJlYWtSYXRlIDogWzEsIDIsIDNdO1xuICB9XG4gIG9uUmFua1JidExnY19sb2FkQ29uZmlnKHQsIHIpIHtcbiAgICB0Lmlucy5fd2luU3RyZWFrU3RyYXRlZ2llcyA9IFsuLi50aGlzLndpblN0cmVha1JhdGVdO1xuICAgIHIoKTtcbiAgfVxuICBvblJhbmtSb2JvdENmZ193aW5SYXRlcyh0LCByKSB7XG4gICAgcih7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgcmV0dXJuVmFsOiBbLi4udGhpcy53aW5TdHJlYWtSYXRlXVxuICAgIH0pO1xuICB9XG4gIG9uUmtCbnNXaW5SYXRlX3Nob3codCwgcikge1xuICAgIGZvciAodmFyIGUgPSB0Lmlucy5fYmFyTGFiZWxOb2RlcywgbiA9IE1hdGgubWluKGUubGVuZ3RoLCB0aGlzLndpblN0cmVha1JhdGUubGVuZ3RoKSwgYSA9IDA7IGEgPCBuOyBhKyspIHtcbiAgICAgIHZhciBpID0gZVthXTtcbiAgICAgIGlbMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcInhcIiArIHRoaXMud2luU3RyZWFrUmF0ZVthXTtcbiAgICAgIGlbMV0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcInhcIiArIHRoaXMud2luU3RyZWFrUmF0ZVthXTtcbiAgICB9XG4gICAgcigpO1xuICB9XG59Il19
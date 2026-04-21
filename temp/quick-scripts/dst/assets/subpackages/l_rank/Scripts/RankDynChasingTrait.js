
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rank/Scripts/RankDynChasingTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ead2aXBZxpC1IzeAaCYnK7y', 'RankDynChasingTrait');
// subpackages/l_rank/Scripts/RankDynChasingTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var RankDynChasingTrait = /** @class */ (function (_super) {
    __extends(RankDynChasingTrait, _super);
    function RankDynChasingTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._chaseLogEnable = false;
        _this.config = null;
        return _this;
    }
    RankDynChasingTrait_1 = RankDynChasingTrait;
    RankDynChasingTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        try {
            this.config = {
                botsChasingInterval: (null === (e = this._traitData.config) || void 0 === e ? void 0 : e.botsChasingInterval) || 4
            };
            this.initChasingData();
        }
        catch (t) {
            console.error("[" + RankDynChasingTrait_1.traitKey + "] 加载失败: " + (t.message || t));
        }
    };
    RankDynChasingTrait.prototype.initChasingData = function () {
        this.localData && this.localData.chasingData || (this.localData.chasingData = {
            activityStartTime: 0,
            currentRound: 0,
            needChasingCount: 0,
            chasedCount: 0,
            chasingStartTime: 0,
            chasingStartLevel: 0,
            lastUpdateTime: Date.now()
        });
    };
    RankDynChasingTrait.prototype.onRankRbtLgc_othPassScore = function (t, e) {
        try {
            var n = t.args[0], a = t.args[1], i = t.args[2], r = t.args[3], s = t.args[4], l = t.args[5];
            if (!n || !n.rankRobotCfg) {
                e();
                return;
            }
            var c = n.rankRobotCfg, d = n.joinActInfo.passCount, p = c.baseLevelConst, u = c.botsChasingLevel, h = this.config.botsChasingInterval;
            this.checkAndResetIfNeeded(n);
            var f = Math.floor((d - p) / (u + h)), m = f >= 0 && d < (u + h) * f + p + u;
            this.updateChasingData(n, f, m, u);
            var _ = 0, y = 0, g = i;
            y = a > n.joinActInfo.rank && m ? (0 === s ? n.joinActInfo.score : s) - r + l : Math.abs(n.joinActInfo.rank - a) / (n.joinActInfo.passCount + 50 / c.minPoint);
            g += Math.random() * y;
            if (3 === (_ = Math.floor(g)) || _ < 2) {
                var v = [2, 4, 5, 6, 7, 8];
                g = (_ = v[Math.floor(Math.random() * v.length)]) + Math.random();
            }
            var k = {
                score: _,
                covert: g
            };
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: k
            });
        }
        catch (t) {
            console.error("[" + RankDynChasingTrait_1.traitKey + "] 动态追赶判断失败: " + (t.message || t));
            e();
        }
    };
    RankDynChasingTrait.prototype.checkAndResetIfNeeded = function () {
        var t, e = mj.getClassByName("RankModel"), o = e ? e.getInstance() : null, n = (null === (t = null == o ? void 0 : o.localData) || void 0 === t ? void 0 : t.curActStartTime) || 0, a = this.localData.chasingData;
        if (a.activityStartTime !== n) {
            a.activityStartTime = n;
            a.currentRound = 0;
            a.needChasingCount = 0;
            a.chasedCount = 0;
            a.chasingStartTime = 0;
            a.chasingStartLevel = 0;
            a.lastUpdateTime = Date.now();
        }
        this.localData.chasingData = a;
    };
    RankDynChasingTrait.prototype.updateChasingData = function (t, e, o, n) {
        var a = this.localData.chasingData, i = Date.now(), r = t.joinActInfo.passCount;
        if (a.currentRound !== e) {
            a.currentRound = e;
            a.needChasingCount = n;
            if (o) {
                a.chasingStartTime = i;
                a.chasingStartLevel = r;
                a.chasedCount = 1;
                a.chasedCount;
            }
            else
                a.chasedCount = 0;
        }
        else {
            var s = r - a.chasingStartLevel + 1;
            if (o && a.chasedCount < s) {
                a.chasedCount++;
                a.chasedCount, a.needChasingCount;
            }
        }
        a.lastUpdateTime = i;
    };
    var RankDynChasingTrait_1;
    RankDynChasingTrait.traitKey = "RankDynChasing";
    RankDynChasingTrait = RankDynChasingTrait_1 = __decorate([
        mj.trait,
        mj.class("RankDynChasingTrait")
    ], RankDynChasingTrait);
    return RankDynChasingTrait;
}(Trait_1.default));
exports.default = RankDynChasingTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmsvU2NyaXB0cy9SYW5rRHluQ2hhc2luZ1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFHM0Q7SUFBaUQsdUNBQUs7SUFBdEQ7UUFBQSxxRUE4R0M7UUE3R0MscUJBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsWUFBTSxHQUFHLElBQUksQ0FBQzs7SUE0R2hCLENBQUM7NEJBOUdvQixtQkFBbUI7SUFJdEMsb0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxDQUFDO1FBQ04saUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJO1lBQ0YsSUFBSSxDQUFDLE1BQU0sR0FBRztnQkFDWixtQkFBbUIsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7YUFDbkgsQ0FBQztZQUNGLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN4QjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcscUJBQW1CLENBQUMsUUFBUSxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNuRjtJQUNILENBQUM7SUFDRCw2Q0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHO1lBQzVFLGlCQUFpQixFQUFFLENBQUM7WUFDcEIsWUFBWSxFQUFFLENBQUM7WUFDZixnQkFBZ0IsRUFBRSxDQUFDO1lBQ25CLFdBQVcsRUFBRSxDQUFDO1lBQ2QsZ0JBQWdCLEVBQUUsQ0FBQztZQUNuQixpQkFBaUIsRUFBRSxDQUFDO1lBQ3BCLGNBQWMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO1NBQzNCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCx1REFBeUIsR0FBekIsVUFBMEIsQ0FBQyxFQUFFLENBQUM7UUFDNUIsSUFBSTtZQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ2YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUU7Z0JBQ3pCLENBQUMsRUFBRSxDQUFDO2dCQUNKLE9BQU87YUFDUjtZQUNELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLEVBQ3BCLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFDM0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLEVBQ3BCLENBQUMsR0FBRyxDQUFDLENBQUMsZ0JBQWdCLEVBQ3RCLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDO1lBQ3RDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQ25DLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUNQLENBQUMsR0FBRyxDQUFDLEVBQ0wsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNSLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvSixDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ25FO1lBQ0QsSUFBSSxDQUFDLEdBQUc7Z0JBQ04sS0FBSyxFQUFFLENBQUM7Z0JBQ1IsTUFBTSxFQUFFLENBQUM7YUFDVixDQUFDO1lBQ0YsQ0FBQyxDQUFDO2dCQUNBLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMxQyxTQUFTLEVBQUUsQ0FBQzthQUNiLENBQUMsQ0FBQztTQUNKO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxxQkFBbUIsQ0FBQyxRQUFRLEdBQUcsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RGLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBQ0QsbURBQXFCLEdBQXJCO1FBQ0UsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEVBQ2xDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUM5QixDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUN2RyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7UUFDakMsSUFBSSxDQUFDLENBQUMsaUJBQWlCLEtBQUssQ0FBQyxFQUFFO1lBQzdCLENBQUMsQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7WUFDbkIsQ0FBQyxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztZQUN2QixDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztZQUNsQixDQUFDLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDL0I7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNELCtDQUFpQixHQUFqQixVQUFrQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUNoQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUNkLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQztRQUM5QixJQUFJLENBQUMsQ0FBQyxZQUFZLEtBQUssQ0FBQyxFQUFFO1lBQ3hCLENBQUMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLENBQUMsQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLEVBQUU7Z0JBQ0wsQ0FBQyxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztnQkFDdkIsQ0FBQyxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQztnQkFDeEIsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7Z0JBQ2xCLENBQUMsQ0FBQyxXQUFXLENBQUM7YUFDZjs7Z0JBQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7U0FDMUI7YUFBTTtZQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFO2dCQUMxQixDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ2hCLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO2FBQ25DO1NBQ0Y7UUFDRCxDQUFDLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztJQUN2QixDQUFDOztJQTFHTSw0QkFBUSxHQUFHLGdCQUFnQixDQUFDO0lBSGhCLG1CQUFtQjtRQUZ2QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUM7T0FDWCxtQkFBbUIsQ0E4R3ZDO0lBQUQsMEJBQUM7Q0E5R0QsQUE4R0MsQ0E5R2dELGVBQUssR0E4R3JEO2tCQTlHb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiUmFua0R5bkNoYXNpbmdUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFua0R5bkNoYXNpbmdUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2NoYXNlTG9nRW5hYmxlID0gZmFsc2U7XG4gIGNvbmZpZyA9IG51bGw7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiUmFua0R5bkNoYXNpbmdcIjtcbiAgb25Mb2FkKCkge1xuICAgIHZhciBlO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgICAgYm90c0NoYXNpbmdJbnRlcnZhbDogKG51bGwgPT09IChlID0gdGhpcy5fdHJhaXREYXRhLmNvbmZpZykgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5ib3RzQ2hhc2luZ0ludGVydmFsKSB8fCA0XG4gICAgICB9O1xuICAgICAgdGhpcy5pbml0Q2hhc2luZ0RhdGEoKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgUmFua0R5bkNoYXNpbmdUcmFpdC50cmFpdEtleSArIFwiXSDliqDovb3lpLHotKU6IFwiICsgKHQubWVzc2FnZSB8fCB0KSk7XG4gICAgfVxuICB9XG4gIGluaXRDaGFzaW5nRGF0YSgpIHtcbiAgICB0aGlzLmxvY2FsRGF0YSAmJiB0aGlzLmxvY2FsRGF0YS5jaGFzaW5nRGF0YSB8fCAodGhpcy5sb2NhbERhdGEuY2hhc2luZ0RhdGEgPSB7XG4gICAgICBhY3Rpdml0eVN0YXJ0VGltZTogMCxcbiAgICAgIGN1cnJlbnRSb3VuZDogMCxcbiAgICAgIG5lZWRDaGFzaW5nQ291bnQ6IDAsXG4gICAgICBjaGFzZWRDb3VudDogMCxcbiAgICAgIGNoYXNpbmdTdGFydFRpbWU6IDAsXG4gICAgICBjaGFzaW5nU3RhcnRMZXZlbDogMCxcbiAgICAgIGxhc3RVcGRhdGVUaW1lOiBEYXRlLm5vdygpXG4gICAgfSk7XG4gIH1cbiAgb25SYW5rUmJ0TGdjX290aFBhc3NTY29yZSh0LCBlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBuID0gdC5hcmdzWzBdLFxuICAgICAgICBhID0gdC5hcmdzWzFdLFxuICAgICAgICBpID0gdC5hcmdzWzJdLFxuICAgICAgICByID0gdC5hcmdzWzNdLFxuICAgICAgICBzID0gdC5hcmdzWzRdLFxuICAgICAgICBsID0gdC5hcmdzWzVdO1xuICAgICAgaWYgKCFuIHx8ICFuLnJhbmtSb2JvdENmZykge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBjID0gbi5yYW5rUm9ib3RDZmcsXG4gICAgICAgIGQgPSBuLmpvaW5BY3RJbmZvLnBhc3NDb3VudCxcbiAgICAgICAgcCA9IGMuYmFzZUxldmVsQ29uc3QsXG4gICAgICAgIHUgPSBjLmJvdHNDaGFzaW5nTGV2ZWwsXG4gICAgICAgIGggPSB0aGlzLmNvbmZpZy5ib3RzQ2hhc2luZ0ludGVydmFsO1xuICAgICAgdGhpcy5jaGVja0FuZFJlc2V0SWZOZWVkZWQobik7XG4gICAgICB2YXIgZiA9IE1hdGguZmxvb3IoKGQgLSBwKSAvICh1ICsgaCkpLFxuICAgICAgICBtID0gZiA+PSAwICYmIGQgPCAodSArIGgpICogZiArIHAgKyB1O1xuICAgICAgdGhpcy51cGRhdGVDaGFzaW5nRGF0YShuLCBmLCBtLCB1KTtcbiAgICAgIHZhciBfID0gMCxcbiAgICAgICAgeSA9IDAsXG4gICAgICAgIGcgPSBpO1xuICAgICAgeSA9IGEgPiBuLmpvaW5BY3RJbmZvLnJhbmsgJiYgbSA/ICgwID09PSBzID8gbi5qb2luQWN0SW5mby5zY29yZSA6IHMpIC0gciArIGwgOiBNYXRoLmFicyhuLmpvaW5BY3RJbmZvLnJhbmsgLSBhKSAvIChuLmpvaW5BY3RJbmZvLnBhc3NDb3VudCArIDUwIC8gYy5taW5Qb2ludCk7XG4gICAgICBnICs9IE1hdGgucmFuZG9tKCkgKiB5O1xuICAgICAgaWYgKDMgPT09IChfID0gTWF0aC5mbG9vcihnKSkgfHwgXyA8IDIpIHtcbiAgICAgICAgdmFyIHYgPSBbMiwgNCwgNSwgNiwgNywgOF07XG4gICAgICAgIGcgPSAoXyA9IHZbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdi5sZW5ndGgpXSkgKyBNYXRoLnJhbmRvbSgpO1xuICAgICAgfVxuICAgICAgdmFyIGsgPSB7XG4gICAgICAgIHNjb3JlOiBfLFxuICAgICAgICBjb3ZlcnQ6IGdcbiAgICAgIH07XG4gICAgICBlKHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICByZXR1cm5WYWw6IGtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBSYW5rRHluQ2hhc2luZ1RyYWl0LnRyYWl0S2V5ICsgXCJdIOWKqOaAgei/vei1tuWIpOaWreWksei0pTogXCIgKyAodC5tZXNzYWdlIHx8IHQpKTtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbiAgY2hlY2tBbmRSZXNldElmTmVlZGVkKCkge1xuICAgIHZhciB0LFxuICAgICAgZSA9IG1qLmdldENsYXNzQnlOYW1lKFwiUmFua01vZGVsXCIpLFxuICAgICAgbyA9IGUgPyBlLmdldEluc3RhbmNlKCkgOiBudWxsLFxuICAgICAgbiA9IChudWxsID09PSAodCA9IG51bGwgPT0gbyA/IHZvaWQgMCA6IG8ubG9jYWxEYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmN1ckFjdFN0YXJ0VGltZSkgfHwgMCxcbiAgICAgIGEgPSB0aGlzLmxvY2FsRGF0YS5jaGFzaW5nRGF0YTtcbiAgICBpZiAoYS5hY3Rpdml0eVN0YXJ0VGltZSAhPT0gbikge1xuICAgICAgYS5hY3Rpdml0eVN0YXJ0VGltZSA9IG47XG4gICAgICBhLmN1cnJlbnRSb3VuZCA9IDA7XG4gICAgICBhLm5lZWRDaGFzaW5nQ291bnQgPSAwO1xuICAgICAgYS5jaGFzZWRDb3VudCA9IDA7XG4gICAgICBhLmNoYXNpbmdTdGFydFRpbWUgPSAwO1xuICAgICAgYS5jaGFzaW5nU3RhcnRMZXZlbCA9IDA7XG4gICAgICBhLmxhc3RVcGRhdGVUaW1lID0gRGF0ZS5ub3coKTtcbiAgICB9XG4gICAgdGhpcy5sb2NhbERhdGEuY2hhc2luZ0RhdGEgPSBhO1xuICB9XG4gIHVwZGF0ZUNoYXNpbmdEYXRhKHQsIGUsIG8sIG4pIHtcbiAgICB2YXIgYSA9IHRoaXMubG9jYWxEYXRhLmNoYXNpbmdEYXRhLFxuICAgICAgaSA9IERhdGUubm93KCksXG4gICAgICByID0gdC5qb2luQWN0SW5mby5wYXNzQ291bnQ7XG4gICAgaWYgKGEuY3VycmVudFJvdW5kICE9PSBlKSB7XG4gICAgICBhLmN1cnJlbnRSb3VuZCA9IGU7XG4gICAgICBhLm5lZWRDaGFzaW5nQ291bnQgPSBuO1xuICAgICAgaWYgKG8pIHtcbiAgICAgICAgYS5jaGFzaW5nU3RhcnRUaW1lID0gaTtcbiAgICAgICAgYS5jaGFzaW5nU3RhcnRMZXZlbCA9IHI7XG4gICAgICAgIGEuY2hhc2VkQ291bnQgPSAxO1xuICAgICAgICBhLmNoYXNlZENvdW50O1xuICAgICAgfSBlbHNlIGEuY2hhc2VkQ291bnQgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcyA9IHIgLSBhLmNoYXNpbmdTdGFydExldmVsICsgMTtcbiAgICAgIGlmIChvICYmIGEuY2hhc2VkQ291bnQgPCBzKSB7XG4gICAgICAgIGEuY2hhc2VkQ291bnQrKztcbiAgICAgICAgYS5jaGFzZWRDb3VudCwgYS5uZWVkQ2hhc2luZ0NvdW50O1xuICAgICAgfVxuICAgIH1cbiAgICBhLmxhc3RVcGRhdGVUaW1lID0gaTtcbiAgfVxufSJdfQ==
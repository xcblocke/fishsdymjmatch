
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_boxReward/Scripts/ChangeBoxRewardsTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b3a6eFrdoBF5K6XpeWdtS5R', 'ChangeBoxRewardsTrait');
// subpackages/l_boxReward/Scripts/ChangeBoxRewardsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var GameInteraction_1 = require("../../../Scripts/GameInteraction/GameInteraction");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var IUserData_1 = require("../../../Scripts/user/IUserData");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var BoxRewardTypes_1 = require("./BoxRewardTypes");
var n;
(n = {})[IUserData_1.EItemType.Shuffle] = ["texture/boxReward/reward_icon_refresh", "texture/boxReward/result_icon_refresh"];
n[IUserData_1.EItemType.Hint] = ["texture/boxReward/reward_icon_hint", "texture/boxReward/result_icon_hint"];
n[IUserData_1.EItemType.Undo] = ["texture/common/ad_icon_revert", "texture/boxReward/result_icon_return"];
var m = n;
var ChangeBoxRewardsTrait = /** @class */ (function (_super) {
    __extends(ChangeBoxRewardsTrait, _super);
    function ChangeBoxRewardsTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.config = null;
        return _this;
    }
    ChangeBoxRewardsTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.config = {
            rewardLevel: this.traitData.rewardLevel,
            reward1: this.traitData.reward1,
            reward2: this.traitData.reward2
        };
    };
    ChangeBoxRewardsTrait.prototype.onNorBox_tryGiveBoxReward = function (t, e) {
        var i = t.ins, o = t.args[0];
        if (i.canGainBoxReward(o)) {
            var n = this.getReward(o);
            this.gainBoxReward(n, true);
            e({
                returnType: TraitCallbackReturnType.jump
            });
        }
        else
            e();
    };
    ChangeBoxRewardsTrait.prototype.getReward = function (t) {
        return Math.floor(t / this.config.rewardLevel) % 2 == 0 ? this.config.reward2 : this.config.reward1;
    };
    ChangeBoxRewardsTrait.prototype.onNorBox_canGainBoxReward = function (t, e) {
        var i = t.args[0], o = i > 0 && i % this.config.rewardLevel == 0;
        e({
            returnType: TraitCallbackReturnType.return,
            returnVal: o
        });
    };
    ChangeBoxRewardsTrait.prototype.gainBoxReward = function (t, e) {
        for (var i = UserModel_1.default.getInstance().getMainGameData(), o = i.getLevelId() - 1, n = e ? 1 : t.adScale - 1, a = e ? GameTypeEnums_1.EGetItemReasonId.LevelBox : GameTypeEnums_1.EGetItemReasonId.LevelBoxAd, r = e ? "主关卡宝箱奖励_到达第" + o + "关" : "主关卡宝箱奖励_看广告翻倍_到达第" + o + "关", d = GameUtils_1.default.getInputAddPropType(i.gameType), p = 0; p < t.items.length; p++) {
            var f = t.items[p], m = {
                inputType: d,
                propType: IUserData_1.ItemTypeKey[f.item],
                num: f.count * n,
                reasonId: a,
                reasonInfo: r
            };
            GameInteraction_1.GameInteraction.input(m);
        }
    };
    ChangeBoxRewardsTrait.prototype.onNorBox_getRemainProgress = function (t, e) {
        var i = (UserModel_1.default.getInstance().getMainGameData().getLevelId() - 1) % this.config.rewardLevel, o = this.config.rewardLevel - i;
        e({
            returnType: TraitCallbackReturnType.return,
            returnVal: o
        });
    };
    ChangeBoxRewardsTrait.prototype.onNorBox_getBoxTagProgress = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.return,
            returnVal: this.config.rewardLevel
        });
    };
    ChangeBoxRewardsTrait.prototype.getCurRewardLevel = function (t) {
        return (Math.floor((t - 1) / this.config.rewardLevel) + 1) * this.config.rewardLevel;
    };
    ChangeBoxRewardsTrait.prototype.onBoxRwdUI_showBoxRewardUI = function (t, e) {
        var i = t.args[0] - 1, o = this.getCurRewardLevel(i), n = this.getReward(o), a = BoxRewardTypes_1.convertToBoxRewardsConfig(this.config, n);
        t.args[1] = a;
        e();
    };
    ChangeBoxRewardsTrait.prototype.updateRewardNodes = function (t, e, i) {
        for (var o, n = null !== (o = e.rewards) && void 0 !== o ? o : [], a = i ? 1 : 0, r = 0; r < t.length; r++) {
            var s = t[r], c = s.icon, l = s.value, d = n[r];
            if (d) {
                BaseSprite_1.default.refreshWithNode(c, m[d.item][a]);
                l.getComponent(cc.Label).string = d.count.toString();
            }
        }
    };
    ChangeBoxRewardsTrait.prototype.onBoxRwdUI_updateRwdCount = function (t, e) {
        var i = t.ins, o = i.config, n = i.getRewardNodes();
        this.updateRewardNodes(n, o, true);
        e({
            returnType: TraitCallbackReturnType.jump
        });
    };
    ChangeBoxRewardsTrait.prototype.onBoxOpenUI_updateRwdCount = function (t, e) {
        var i = t.ins, o = i.config, n = i.getRewardNodes();
        this.updateRewardNodes(n, o, false);
        e({
            returnType: TraitCallbackReturnType.jump
        });
    };
    ChangeBoxRewardsTrait.prototype.onBoxOpenUI_deliverTools = function (t, e) {
        var i = t.ins.config;
        if (i.rewards) {
            var o = {
                adScale: i.adScale,
                items: i.rewards
            };
            this.gainBoxReward(o, false);
            e({
                returnType: TraitCallbackReturnType.jump
            });
        }
        else
            e();
    };
    ChangeBoxRewardsTrait.prototype.onBoxOpenUI_getRwdEndCount = function (t, e) {
        for (var i, o = t.ins.config, n = null !== (i = null == o ? void 0 : o.rewards) && void 0 !== i ? i : [], a = [0, 0], r = 0; r < 2; r++)
            if (r < n.length) {
                var s = n[r];
                a[r] = s.count * o.adScale;
            }
        e({
            returnType: TraitCallbackReturnType.jump,
            returnVal: [a[0], a[1]]
        });
    };
    ChangeBoxRewardsTrait.traitKey = "ChangeBoxRewards";
    ChangeBoxRewardsTrait = __decorate([
        mj.trait,
        mj.class("ChangeBoxRewardsTrait")
    ], ChangeBoxRewardsTrait);
    return ChangeBoxRewardsTrait;
}(Trait_1.default));
exports.default = ChangeBoxRewardsTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2JveFJld2FyZC9TY3JpcHRzL0NoYW5nZUJveFJld2FyZHNUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0ZBQTBGO0FBQzFGLDRFQUF1RTtBQUN2RSxvRkFBbUY7QUFDbkYsZ0VBQTJEO0FBQzNELDJFQUFzRTtBQUN0RSw2REFBeUU7QUFDekUsc0VBQWlFO0FBQ2pFLG1EQUE2RDtBQUM3RCxJQUFJLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLHFCQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsRUFBRSx1Q0FBdUMsQ0FBQyxDQUFDO0FBQ2pILENBQUMsQ0FBQyxxQkFBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsb0NBQW9DLEVBQUUsb0NBQW9DLENBQUMsQ0FBQztBQUNqRyxDQUFDLENBQUMscUJBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLCtCQUErQixFQUFFLHNDQUFzQyxDQUFDLENBQUM7QUFDOUYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBR1Y7SUFBbUQseUNBQUs7SUFBeEQ7UUFBQSxxRUE0SEM7UUEzSEMsWUFBTSxHQUFHLElBQUksQ0FBQzs7SUEySGhCLENBQUM7SUF6SEMsc0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNaLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVc7WUFDdkMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTztZQUMvQixPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPO1NBQ2hDLENBQUM7SUFDSixDQUFDO0lBQ0QseURBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxHQUFHLENB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QUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRTtnQkFDekosSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNiLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7YUFDNUI7UUFDRCxDQUFDLENBQUM7WUFDQSxVQUFVLEVBQUUsdUJBQXVCLENBQUMsSUFBSTtZQUN4QyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hCLENBQUMsQ0FBQztJQUNMLENBQUM7SUF6SE0sOEJBQVEsR0FBRyxrQkFBa0IsQ0FBQztJQUZsQixxQkFBcUI7UUFGekMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDO09BQ2IscUJBQXFCLENBNEh6QztJQUFELDRCQUFDO0NBNUhELEFBNEhDLENBNUhrRCxlQUFLLEdBNEh2RDtrQkE1SG9CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVHZXRJdGVtUmVhc29uSWQgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IEdhbWVVdGlscyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL3V0aWwvR2FtZVV0aWxzJztcbmltcG9ydCB7IEdhbWVJbnRlcmFjdGlvbiB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvR2FtZUludGVyYWN0aW9uL0dhbWVJbnRlcmFjdGlvbic7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IEJhc2VTcHJpdGUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcHJpdGUnO1xuaW1wb3J0IHsgRUl0ZW1UeXBlLCBJdGVtVHlwZUtleSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvdXNlci9JVXNlckRhdGEnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCB7IGNvbnZlcnRUb0JveFJld2FyZHNDb25maWcgfSBmcm9tICcuL0JveFJld2FyZFR5cGVzJztcbnZhciBuO1xuKG4gPSB7fSlbRUl0ZW1UeXBlLlNodWZmbGVdID0gW1widGV4dHVyZS9ib3hSZXdhcmQvcmV3YXJkX2ljb25fcmVmcmVzaFwiLCBcInRleHR1cmUvYm94UmV3YXJkL3Jlc3VsdF9pY29uX3JlZnJlc2hcIl07XG5uW0VJdGVtVHlwZS5IaW50XSA9IFtcInRleHR1cmUvYm94UmV3YXJkL3Jld2FyZF9pY29uX2hpbnRcIiwgXCJ0ZXh0dXJlL2JveFJld2FyZC9yZXN1bHRfaWNvbl9oaW50XCJdO1xubltFSXRlbVR5cGUuVW5kb10gPSBbXCJ0ZXh0dXJlL2NvbW1vbi9hZF9pY29uX3JldmVydFwiLCBcInRleHR1cmUvYm94UmV3YXJkL3Jlc3VsdF9pY29uX3JldHVyblwiXTtcbnZhciBtID0gbjtcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQ2hhbmdlQm94UmV3YXJkc1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFuZ2VCb3hSZXdhcmRzVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIGNvbmZpZyA9IG51bGw7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQ2hhbmdlQm94UmV3YXJkc1wiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5jb25maWcgPSB7XG4gICAgICByZXdhcmRMZXZlbDogdGhpcy50cmFpdERhdGEucmV3YXJkTGV2ZWwsXG4gICAgICByZXdhcmQxOiB0aGlzLnRyYWl0RGF0YS5yZXdhcmQxLFxuICAgICAgcmV3YXJkMjogdGhpcy50cmFpdERhdGEucmV3YXJkMlxuICAgIH07XG4gIH1cbiAgb25Ob3JCb3hfdHJ5R2l2ZUJveFJld2FyZCh0LCBlKSB7XG4gICAgdmFyIGkgPSB0LmlucyxcbiAgICAgIG8gPSB0LmFyZ3NbMF07XG4gICAgaWYgKGkuY2FuR2FpbkJveFJld2FyZChvKSkge1xuICAgICAgdmFyIG4gPSB0aGlzLmdldFJld2FyZChvKTtcbiAgICAgIHRoaXMuZ2FpbkJveFJld2FyZChuLCB0cnVlKTtcbiAgICAgIGUoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wXG4gICAgICB9KTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIGdldFJld2FyZCh0KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IodCAvIHRoaXMuY29uZmlnLnJld2FyZExldmVsKSAlIDIgPT0gMCA/IHRoaXMuY29uZmlnLnJld2FyZDIgOiB0aGlzLmNvbmZpZy5yZXdhcmQxO1xuICB9XG4gIG9uTm9yQm94X2NhbkdhaW5Cb3hSZXdhcmQodCwgZSkge1xuICAgIHZhciBpID0gdC5hcmdzWzBdLFxuICAgICAgbyA9IGkgPiAwICYmIGkgJSB0aGlzLmNvbmZpZy5yZXdhcmRMZXZlbCA9PSAwO1xuICAgIGUoe1xuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgcmV0dXJuVmFsOiBvXG4gICAgfSk7XG4gIH1cbiAgZ2FpbkJveFJld2FyZCh0LCBlKSB7XG4gICAgZm9yICh2YXIgaSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldE1haW5HYW1lRGF0YSgpLCBvID0gaS5nZXRMZXZlbElkKCkgLSAxLCBuID0gZSA/IDEgOiB0LmFkU2NhbGUgLSAxLCBhID0gZSA/IEVHZXRJdGVtUmVhc29uSWQuTGV2ZWxCb3ggOiBFR2V0SXRlbVJlYXNvbklkLkxldmVsQm94QWQsIHIgPSBlID8gXCLkuLvlhbPljaHlrp3nrrHlpZblirFf5Yiw6L6+56ysXCIgKyBvICsgXCLlhbNcIiA6IFwi5Li75YWz5Y2h5a6d566x5aWW5YqxX+eci+W5v+WRiue/u+WAjV/liLDovr7nrKxcIiArIG8gKyBcIuWFs1wiLCBkID0gR2FtZVV0aWxzLmdldElucHV0QWRkUHJvcFR5cGUoaS5nYW1lVHlwZSksIHAgPSAwOyBwIDwgdC5pdGVtcy5sZW5ndGg7IHArKykge1xuICAgICAgdmFyIGYgPSB0Lml0ZW1zW3BdLFxuICAgICAgICBtID0ge1xuICAgICAgICAgIGlucHV0VHlwZTogZCxcbiAgICAgICAgICBwcm9wVHlwZTogSXRlbVR5cGVLZXlbZi5pdGVtXSxcbiAgICAgICAgICBudW06IGYuY291bnQgKiBuLFxuICAgICAgICAgIHJlYXNvbklkOiBhLFxuICAgICAgICAgIHJlYXNvbkluZm86IHJcbiAgICAgICAgfTtcbiAgICAgIEdhbWVJbnRlcmFjdGlvbi5pbnB1dChtKTtcbiAgICB9XG4gIH1cbiAgb25Ob3JCb3hfZ2V0UmVtYWluUHJvZ3Jlc3ModCwgZSkge1xuICAgIHZhciBpID0gKFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldE1haW5HYW1lRGF0YSgpLmdldExldmVsSWQoKSAtIDEpICUgdGhpcy5jb25maWcucmV3YXJkTGV2ZWwsXG4gICAgICBvID0gdGhpcy5jb25maWcucmV3YXJkTGV2ZWwgLSBpO1xuICAgIGUoe1xuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgcmV0dXJuVmFsOiBvXG4gICAgfSk7XG4gIH1cbiAgb25Ob3JCb3hfZ2V0Qm94VGFnUHJvZ3Jlc3ModCwgZSkge1xuICAgIGUoe1xuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgcmV0dXJuVmFsOiB0aGlzLmNvbmZpZy5yZXdhcmRMZXZlbFxuICAgIH0pO1xuICB9XG4gIGdldEN1clJld2FyZExldmVsKHQpIHtcbiAgICByZXR1cm4gKE1hdGguZmxvb3IoKHQgLSAxKSAvIHRoaXMuY29uZmlnLnJld2FyZExldmVsKSArIDEpICogdGhpcy5jb25maWcucmV3YXJkTGV2ZWw7XG4gIH1cbiAgb25Cb3hSd2RVSV9zaG93Qm94UmV3YXJkVUkodCwgZSkge1xuICAgIHZhciBpID0gdC5hcmdzWzBdIC0gMSxcbiAgICAgIG8gPSB0aGlzLmdldEN1clJld2FyZExldmVsKGkpLFxuICAgICAgbiA9IHRoaXMuZ2V0UmV3YXJkKG8pLFxuICAgICAgYSA9IGNvbnZlcnRUb0JveFJld2FyZHNDb25maWcodGhpcy5jb25maWcsIG4pO1xuICAgIHQuYXJnc1sxXSA9IGE7XG4gICAgZSgpO1xuICB9XG4gIHVwZGF0ZVJld2FyZE5vZGVzKHQsIGUsIGkpIHtcbiAgICBmb3IgKHZhciBvLCBuID0gbnVsbCAhPT0gKG8gPSBlLnJld2FyZHMpICYmIHZvaWQgMCAhPT0gbyA/IG8gOiBbXSwgYSA9IGkgPyAxIDogMCwgciA9IDA7IHIgPCB0Lmxlbmd0aDsgcisrKSB7XG4gICAgICB2YXIgcyA9IHRbcl0sXG4gICAgICAgIGMgPSBzLmljb24sXG4gICAgICAgIGwgPSBzLnZhbHVlLFxuICAgICAgICBkID0gbltyXTtcbiAgICAgIGlmIChkKSB7XG4gICAgICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKGMsIG1bZC5pdGVtXVthXSk7XG4gICAgICAgIGwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBkLmNvdW50LnRvU3RyaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uQm94UndkVUlfdXBkYXRlUndkQ291bnQodCwgZSkge1xuICAgIHZhciBpID0gdC5pbnMsXG4gICAgICBvID0gaS5jb25maWcsXG4gICAgICBuID0gaS5nZXRSZXdhcmROb2RlcygpO1xuICAgIHRoaXMudXBkYXRlUmV3YXJkTm9kZXMobiwgbywgdHJ1ZSk7XG4gICAgZSh7XG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wXG4gICAgfSk7XG4gIH1cbiAgb25Cb3hPcGVuVUlfdXBkYXRlUndkQ291bnQodCwgZSkge1xuICAgIHZhciBpID0gdC5pbnMsXG4gICAgICBvID0gaS5jb25maWcsXG4gICAgICBuID0gaS5nZXRSZXdhcmROb2RlcygpO1xuICAgIHRoaXMudXBkYXRlUmV3YXJkTm9kZXMobiwgbywgZmFsc2UpO1xuICAgIGUoe1xuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUuanVtcFxuICAgIH0pO1xuICB9XG4gIG9uQm94T3BlblVJX2RlbGl2ZXJUb29scyh0LCBlKSB7XG4gICAgdmFyIGkgPSB0Lmlucy5jb25maWc7XG4gICAgaWYgKGkucmV3YXJkcykge1xuICAgICAgdmFyIG8gPSB7XG4gICAgICAgIGFkU2NhbGU6IGkuYWRTY2FsZSxcbiAgICAgICAgaXRlbXM6IGkucmV3YXJkc1xuICAgICAgfTtcbiAgICAgIHRoaXMuZ2FpbkJveFJld2FyZChvLCBmYWxzZSk7XG4gICAgICBlKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUuanVtcFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBvbkJveE9wZW5VSV9nZXRSd2RFbmRDb3VudCh0LCBlKSB7XG4gICAgZm9yICh2YXIgaSwgbyA9IHQuaW5zLmNvbmZpZywgbiA9IG51bGwgIT09IChpID0gbnVsbCA9PSBvID8gdm9pZCAwIDogby5yZXdhcmRzKSAmJiB2b2lkIDAgIT09IGkgPyBpIDogW10sIGEgPSBbMCwgMF0sIHIgPSAwOyByIDwgMjsgcisrKSBpZiAociA8IG4ubGVuZ3RoKSB7XG4gICAgICB2YXIgcyA9IG5bcl07XG4gICAgICBhW3JdID0gcy5jb3VudCAqIG8uYWRTY2FsZTtcbiAgICB9XG4gICAgZSh7XG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wLFxuICAgICAgcmV0dXJuVmFsOiBbYVswXSwgYVsxXV1cbiAgICB9KTtcbiAgfVxufSJdfQ==
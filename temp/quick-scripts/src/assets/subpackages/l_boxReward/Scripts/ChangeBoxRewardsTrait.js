"use strict";
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
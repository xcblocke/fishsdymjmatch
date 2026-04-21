"use strict";
cc._RF.push(module, '03808cyfkdHuJb+cBMQCiZL', 'NormalBoxTrait');
// subpackages/l_boxReward/Scripts/NormalBoxTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var NormalGameData_1 = require("../../../Scripts/core/simulator/data/NormalGameData");
var Tile2NormalGameData_1 = require("../../../Scripts/core/simulator/data/Tile2NormalGameData");
var GameInteraction_1 = require("../../../Scripts/GameInteraction/GameInteraction");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BoxRewardUI_1 = require("./BoxRewardUI");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var NormalBoxTrait = /** @class */ (function (_super) {
    __extends(NormalBoxTrait, _super);
    function NormalBoxTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.requireRes = ["prefabs/boxReward/RewardUI", "prefabs/boxReward/OpenAnim", "prefabs/boxReward/BoxBarItem"];
        return _this;
    }
    NormalBoxTrait_1 = NormalBoxTrait;
    NormalBoxTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    NormalBoxTrait.prototype.onWinCtrl_initRes = function (t, e) {
        var i = t.ins;
        null == i || i.addPreloadRes("Prefab", this.requireRes);
        e();
    };
    NormalBoxTrait.prototype.onTile2WinCtrl_initRes = function (t, e) {
        var i = t.ins;
        null == i || i.addPreloadRes("Prefab", this.requireRes);
        e();
    };
    NormalBoxTrait.prototype.onBeforeWinBhv_doOthLgc = function (t, e) {
        var i = NormalGameData_1.default.getInstance().getLevelId() - 1;
        this.tryGiveBoxReward(i, "主关卡");
        e();
    };
    NormalBoxTrait.prototype.onTile2BfWinBhv_doOthLgc = function (t, e) {
        var i = Tile2NormalGameData_1.default.getInstance().getLevelId() - 1;
        this.tryGiveBoxReward(i, "Tile2关卡");
        e();
    };
    NormalBoxTrait.prototype.onWinVw_popNextView = function (t, e) {
        var o, n = t.ins;
        t.args[0] = t.args[0] || {};
        if (cc.isValid(n)) {
            var a = n.delegate, r = ((null === (o = null == a ? void 0 : a.args) || void 0 === o ? void 0 : o.data) || {}).curLv, s = void 0 === r ? 1 : r, c = n.getContentNode();
            if (cc.isValid(c)) {
                var l = c.getChildByName("RewardUI");
                if (cc.isValid(l))
                    try {
                        l.getComponent(BoxRewardUI_1.default).showBoxRewardUI(s, this._traitData.config, function (i) {
                            i && (t.args[0].hasBoxReward = true);
                            e();
                        });
                    }
                    catch (t) {
                        console.error("[" + NormalBoxTrait_1.traitKey + "] 显示宝箱奖励UI失败: " + (null == t ? void 0 : t.message));
                        e();
                    }
                else
                    e();
            }
            else
                e();
        }
        else
            e();
    };
    NormalBoxTrait.prototype.onTile2WinVw_popNextView = function (t, e) {
        var o, n = t.ins;
        t.args[0] = t.args[0] || {};
        if (cc.isValid(n)) {
            var a = n.delegate, r = ((null === (o = null == a ? void 0 : a.args) || void 0 === o ? void 0 : o.data) || {}).curLv, s = void 0 === r ? 1 : r, c = n.getContentNode();
            if (cc.isValid(c)) {
                var l = c.getChildByName("RewardUI");
                if (cc.isValid(l))
                    try {
                        l.getComponent(BoxRewardUI_1.default).showBoxRewardUI(s, this._traitData.config, function (i) {
                            i && (t.args[0].hasBoxReward = true);
                            e();
                        });
                    }
                    catch (t) {
                        console.error("[" + NormalBoxTrait_1.traitKey + "] 显示宝箱奖励UI失败: " + (null == t ? void 0 : t.message));
                        e();
                    }
                else
                    e();
            }
            else
                e();
        }
        else
            e();
    };
    NormalBoxTrait.prototype.onWinCtrl_viewShow = function (t, e) {
        var i = t.ins, o = null == i ? void 0 : i.rootView;
        if (cc.isValid(o)) {
            var n = i._viewComponent;
            if (cc.isValid(n)) {
                var a = n.getContentNode();
                if (cc.isValid(a)) {
                    var r = a.getChildByName("RewardUI");
                    if (!cc.isValid(r)) {
                        r = n.createUISync(BoxRewardUI_1.default);
                        if (cc.isValid(r)) {
                            a.addChild(r);
                            r.opacity = 0;
                        }
                    }
                }
            }
        }
        e();
    };
    NormalBoxTrait.prototype.onTile2WinCtrl_viewShow = function (t, e) {
        var i = t.ins, o = null == i ? void 0 : i.rootView;
        if (cc.isValid(o)) {
            var n = i._viewComponent;
            if (cc.isValid(n)) {
                var a = n.getContentNode();
                if (cc.isValid(a)) {
                    var r = a.getChildByName("RewardUI");
                    if (!cc.isValid(r)) {
                        r = n.createUISync(BoxRewardUI_1.default);
                        if (cc.isValid(r)) {
                            a.addChild(r);
                            r.opacity = 0;
                        }
                    }
                }
            }
        }
        e();
    };
    NormalBoxTrait.prototype.tryGiveBoxReward = function (t, e) {
        if (this.canGainBoxReward(t)) {
            var i = UserModel_1.default.getInstance().getCurrentGameType(), o = GameUtils_1.default.getInputAddPropType(i), n = {
                inputType: o,
                propType: "shuffle",
                num: this.traitData.config.refresh,
                reasonId: GameTypeEnums_1.EGetItemReasonId.LevelBox,
                reasonInfo: e + "宝箱奖励_到达第" + t + "关"
            }, a = {
                inputType: o,
                propType: "hitTips",
                num: this.traitData.config.hint,
                reasonId: GameTypeEnums_1.EGetItemReasonId.LevelBox,
                reasonInfo: e + "宝箱奖励_到达第" + t + "关"
            };
            GameInteraction_1.GameInteraction.input(n);
            GameInteraction_1.GameInteraction.input(a);
        }
    };
    NormalBoxTrait.prototype.canGainBoxReward = function (t) {
        var e = this._traitData.config, i = e.rewardLevels, o = (t - 1) % e.level;
        return i.includes(o + 1);
    };
    NormalBoxTrait.prototype.getRemainingProgress = function () {
        var t = UserModel_1.default.getInstance().getMainGameData().getLevelId() - 1, e = this._traitData.config, i = e.rewardLevels, o = t % e.level;
        return i.find(function (t) {
            return t > o;
        }) - o;
    };
    NormalBoxTrait.prototype.getBoxTargetProgress = function () {
        var t = UserModel_1.default.getInstance().getMainGameData().getLevelId() - 1, e = this._traitData.config, i = e.rewardLevels, o = t % e.level, n = i.find(function (t) {
            return t > o;
        });
        return void 0 !== n ? n : -1;
    };
    var NormalBoxTrait_1;
    NormalBoxTrait.traitKey = "NormalBox";
    NormalBoxTrait.nextTimeOut = -1;
    __decorate([
        mj.traitEvent("NorBox_tryGiveBoxReward")
    ], NormalBoxTrait.prototype, "tryGiveBoxReward", null);
    __decorate([
        mj.traitEvent("NorBox_canGainBoxReward")
    ], NormalBoxTrait.prototype, "canGainBoxReward", null);
    __decorate([
        mj.traitEvent("NorBox_getRemainProgress")
    ], NormalBoxTrait.prototype, "getRemainingProgress", null);
    __decorate([
        mj.traitEvent("NorBox_getBoxTagProgress")
    ], NormalBoxTrait.prototype, "getBoxTargetProgress", null);
    NormalBoxTrait = NormalBoxTrait_1 = __decorate([
        mj.trait,
        mj.class("NormalBoxTrait")
    ], NormalBoxTrait);
    return NormalBoxTrait;
}(Trait_1.default));
exports.default = NormalBoxTrait;

cc._RF.pop();
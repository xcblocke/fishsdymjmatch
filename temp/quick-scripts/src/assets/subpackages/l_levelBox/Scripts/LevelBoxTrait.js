"use strict";
cc._RF.push(module, '614b8lF0YlG6L1LzpxaL552', 'LevelBoxTrait');
// subpackages/l_levelBox/Scripts/LevelBoxTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var GameInteraction_1 = require("../../../Scripts/GameInteraction/GameInteraction");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var IUserData_1 = require("../../../Scripts/user/IUserData");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var LevelBoxModel_1 = require("./LevelBoxModel");
var LevelBoxProgress_1 = require("./LevelBoxProgress");
var LevelBoxTypes_1 = require("./LevelBoxTypes");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var LevelBoxTrait = /** @class */ (function (_super) {
    __extends(LevelBoxTrait, _super);
    function LevelBoxTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.requireRes = ["prefabs/levelBox/BoxProgress", "prefabs/levelBox/BarItem"];
        _this.levelBox = null;
        return _this;
    }
    LevelBoxTrait_1 = LevelBoxTrait;
    LevelBoxTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var e = LevelBoxModel_1.default.getInstance();
        if (e.getCurBox() === LevelBoxTypes_1.ELevelBoxCondType.None) {
            e.setNewBox(LevelBoxTypes_1.ELevelBoxCondType.Level);
            this.initProgress();
        }
        this.registerEvent([{
                event: "Tile2WinCtrl_initRes"
            }, {
                event: "Tile2WinVw_popNextView",
                priority: 110
            }, {
                event: "Tile2BfWinBhv_doOthLgc",
                priority: 20
            }, {
                event: "Tile2WinCtrl_viewShow"
            }]);
    };
    LevelBoxTrait.prototype.initProgress = function () {
        var t = LevelBoxModel_1.default.getInstance(), e = (UserModel_1.default.getInstance().getMainGameData().getLevelId() - 1) % this.getBoxLimit(t, LevelBoxTypes_1.ELevelBoxCondType.Level);
        t.setProgress(e);
    };
    LevelBoxTrait.prototype.getBoxLimit = function (t, e) {
        var i, o = t.getCurBoxLimits(null === (i = this.traitData.boxes[e]) || void 0 === i ? void 0 : i.limits);
        return e === LevelBoxTypes_1.ELevelBoxCondType.Level ? o[0] : e === LevelBoxTypes_1.ELevelBoxCondType.Combo ? o[1] : 999999999;
    };
    LevelBoxTrait.prototype.onWinCtrl_initRes = function (t, e) {
        var i = t.ins;
        null == i || i.addPreloadRes("Prefab", this.requireRes);
        e();
    };
    LevelBoxTrait.prototype.onTile2WinCtrl_initRes = function (t, e) {
        var i = t.ins;
        null == i || i.addPreloadRes("Prefab", this.requireRes);
        e();
    };
    LevelBoxTrait.prototype.checkBoxCanUpdateProgress = function (t, e, i) {
        var o, n = e.getCurBoxLimits(null === (o = this.traitData.boxes[t]) || void 0 === o ? void 0 : o.limits);
        return t === LevelBoxTypes_1.ELevelBoxCondType.Level || t === LevelBoxTypes_1.ELevelBoxCondType.Combo && i.getCurMaxCombo() > n[0];
    };
    LevelBoxTrait.prototype.gainBoxReward = function (t, e) {
        for (var i = UserModel_1.default.getInstance().getMainGameData(), o = i.getLevelId() - 1, n = e ? 1 : t.adScale - 1, r = e ? GameTypeEnums_1.EGetItemReasonId.LevelBox : GameTypeEnums_1.EGetItemReasonId.LevelBoxAd, l = e ? "主关卡宝箱奖励_到达第" + o + "关" : "主关卡宝箱奖励_看广告翻倍_到达第" + o + "关", d = GameUtils_1.default.getInputAddPropType(i.gameType), h = 0; h < t.items.length; h++) {
            var u = t.items[h], f = {
                inputType: d,
                propType: IUserData_1.ItemTypeKey[u.item],
                num: u.count * n,
                reasonId: r,
                reasonInfo: l
            };
            GameInteraction_1.GameInteraction.input(f);
        }
    };
    LevelBoxTrait.prototype.getLevelDescParam = function (t) {
        var e, i = UserModel_1.default.getInstance().getMainGameData().getLevelId() - 1, o = t.getCurBox(), n = t.getProgress(), r = t.getCurBoxLimits(null === (e = this.traitData.boxes[o]) || void 0 === e ? void 0 : e.limits);
        if (o === LevelBoxTypes_1.ELevelBoxCondType.Level)
            return [i - n + (a = r[0])];
        if (o === LevelBoxTypes_1.ELevelBoxCondType.Combo) {
            var a = r[1];
            return [r[0], n, a];
        }
        return [];
    };
    LevelBoxTrait.prototype.generateLevelBox = function (t) {
        var e = t.getCurBox(), i = this.getBoxLimit(t, e);
        return {
            level: UserModel_1.default.getInstance().getMainGameData().getLevelId() - 1,
            progress: {
                current: t.getProgress(),
                total: i,
                condType: e,
                condValue: [],
                isGain: false,
                change: false
            },
            rewards: {
                adScale: this.traitData.boxes[e].adScale,
                items: this.traitData.boxes[e].items
            }
        };
    };
    LevelBoxTrait.prototype.getNextBoxType = function (t) {
        var e = this.traitData.boxes.types.length, i = t.getRewardCount() % e;
        return this.traitData.boxes.types[i];
    };
    LevelBoxTrait.prototype.initNextBox = function (t, e) {
        var i = this.traitData.boxes[e];
        if (e === LevelBoxTypes_1.ELevelBoxCondType.Combo && i.randomCombo) {
            var o = i.limits[1], n = i.minCombo, r = i.maxCombo, a = GameUtils_1.default.randomInt(n, r);
            t.setCurBoxLimits([a, o]);
        }
        else
            t.setCurBoxLimits(i.limits);
    };
    LevelBoxTrait.prototype.onBeforeWinBhv_doOthLgc = function (t, e) {
        this.updateBoxProgress();
        e();
    };
    LevelBoxTrait.prototype.onTile2BfWinBhv_doOthLgc = function (t, e) {
        this.updateBoxProgress();
        e();
    };
    LevelBoxTrait.prototype.updateBoxProgress = function () {
        var t = UserModel_1.default.getInstance().getMainGameData(), e = LevelBoxModel_1.default.getInstance(), i = e.getCurBox(), o = this.getBoxLimit(e, i);
        this.levelBox = this.generateLevelBox(e);
        if (this.checkBoxCanUpdateProgress(i, e, t)) {
            e.addProgress();
            this.levelBox.progress.current = e.getProgress();
            this.levelBox.progress.change = true;
        }
        this.levelBox.progress.condValue = this.getLevelDescParam(e);
        if (e.getProgress() >= o) {
            this.gainBoxReward(this.levelBox.rewards, true);
            this.levelBox.progress.isGain = true;
            var n = this.getNextBoxType(e);
            e.setNewBox(n);
            this.initNextBox(e, n);
            this.levelBox.nextBox = this.generateLevelBox(e);
            this.levelBox.nextBox.progress.condValue = this.getLevelDescParam(e);
        }
    };
    LevelBoxTrait.prototype.onWinVw_popNextView = function (t, e) {
        try {
            this.playProgressAction(t, e);
        }
        catch (t) {
            e();
            console.error("[" + LevelBoxTrait_1.traitKey + "] 显示宝箱进度UI失败: " + (null == t ? void 0 : t.message));
        }
    };
    LevelBoxTrait.prototype.onTile2WinVw_popNextView = function (t, e) {
        try {
            this.playProgressAction(t, e);
        }
        catch (t) {
            e();
            console.error("[" + LevelBoxTrait_1.traitKey + "] 显示宝箱进度UI失败: " + (null == t ? void 0 : t.message));
        }
    };
    LevelBoxTrait.prototype.playProgressAction = function (t, e) {
        var i = this, o = t.ins, n = false;
        if (cc.isValid(o)) {
            var r = o.getContentNode();
            if (cc.isValid(r)) {
                var a = r.getChildByName("BoxProgress");
                if (cc.isValid(a)) {
                    n = true;
                    a.getComponent(LevelBoxProgress_1.default).showBoxRewardUI(this.levelBox, function () {
                        i.popRewardView(t, e);
                    });
                }
            }
        }
        n || e();
    };
    LevelBoxTrait.prototype.onWinCtrl_viewShow = function (t, e) {
        var i = t.ins, o = null == i ? void 0 : i.rootView;
        if (cc.isValid(o)) {
            var n = i._viewComponent;
            if (cc.isValid(n)) {
                var r = n.getContentNode();
                if (cc.isValid(r)) {
                    var a = r.getChildByName("BoxProgress");
                    if (!cc.isValid(a)) {
                        a = n.createUISync(LevelBoxProgress_1.default);
                        if (cc.isValid(a)) {
                            r.addChild(a);
                            a.opacity = 0;
                        }
                    }
                }
            }
        }
        e();
    };
    LevelBoxTrait.prototype.onTile2WinCtrl_viewShow = function (t, e) {
        var i = t.ins, o = null == i ? void 0 : i.rootView;
        if (cc.isValid(o)) {
            var n = i._viewComponent;
            if (cc.isValid(n)) {
                var r = n.getContentNode();
                if (cc.isValid(r)) {
                    var a = r.getChildByName("BoxProgress");
                    if (!cc.isValid(a)) {
                        a = n.createUISync(LevelBoxProgress_1.default);
                        if (cc.isValid(a)) {
                            r.addChild(a);
                            a.opacity = 0;
                        }
                    }
                }
            }
        }
        e();
    };
    LevelBoxTrait.prototype.popRewardView = function (t, e) {
        t.args[0] = t.args[0] || {};
        if (this.levelBox && this.levelBox.progress.isGain) {
            ControllerManager_1.default.getInstance().pushViewByController("LevelBoxController", {
                rewards: this.levelBox.rewards,
                level: this.levelBox.level,
                from: "win"
            }, function (i) {
                if (cc.isValid(i)) {
                    var o = i.onUIDestroy.bind(i);
                    i.onUIDestroy = function () {
                        o(i);
                        t.args[0].hasBoxReward = true;
                        e();
                    };
                }
                else {
                    t.args[0].hasBoxReward = true;
                    e();
                }
            });
        }
        else {
            e();
        }
    };
    LevelBoxTrait.prototype.getRemainingProgress = function () {
        var t = LevelBoxModel_1.default.getInstance(), e = t.getCurBox();
        return this.getBoxLimit(t, e) - t.getProgress();
    };
    LevelBoxTrait.prototype.getBoxTargetProgress = function () {
        var t = LevelBoxModel_1.default.getInstance(), e = t.getCurBox();
        return this.getBoxLimit(t, e);
    };
    var LevelBoxTrait_1;
    LevelBoxTrait.traitKey = "LevelBox";
    LevelBoxTrait.nextTimeOut = -1;
    __decorate([
        mj.traitEvent("LevelBox_initNextBox")
    ], LevelBoxTrait.prototype, "initNextBox", null);
    LevelBoxTrait = LevelBoxTrait_1 = __decorate([
        mj.trait,
        mj.class("LevelBoxTrait")
    ], LevelBoxTrait);
    return LevelBoxTrait;
}(Trait_1.default));
exports.default = LevelBoxTrait;

cc._RF.pop();
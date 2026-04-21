"use strict";
cc._RF.push(module, '715924An2tCoYo0p3YEedBT', 'DaxiaoAnimTrait');
// subpackages/r_daxiaoAnim/Scripts/DaxiaoAnimTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var RandomGenerator_1 = require("../../../Scripts/core/simulator/structures/RandomGenerator");
var DaxiaoClearEffectBehavior_1 = require("../../../Scripts/base/DaxiaoClearEffectBehavior");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var LowPriorityBundleLoader_1 = require("../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader");
var CaiDaiAnimPlayer_1 = require("./CaiDaiAnimPlayer");
var GardenAnimPlayer_1 = require("./GardenAnimPlayer");
var GuofengAnimPlayer_1 = require("./GuofengAnimPlayer");
var HudieAnimPlayer_1 = require("./HudieAnimPlayer");
var MaxituanAnimPlayer_1 = require("./MaxituanAnimPlayer");
var c = {
    CaiDai: "CaiDai",
    Maxituan: "Maxituan",
    Garden: "Garden",
    Guofeng: "Guofeng",
    Hudie: "Hudie"
};
var DaxiaoAnimTrait = /** @class */ (function (_super) {
    __extends(DaxiaoAnimTrait, _super);
    function DaxiaoAnimTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._animConfig = [];
        _this._curTypeConfig = null;
        return _this;
    }
    DaxiaoAnimTrait.prototype.onLoad = function () {
        var t, i;
        _super.prototype.onLoad.call(this);
        this._animConfig = [{
                type: c.CaiDai,
                playAnimType: DaxiaoClearEffectBehavior_1.EDaxiaoPlayAnimType.CaiDai,
                bundle: "r_daxiaocaidai",
                ignoreShowTipEffect: true,
                nums: [4, 10]
            }, {
                type: c.Maxituan,
                playAnimType: DaxiaoClearEffectBehavior_1.EDaxiaoPlayAnimType.Maxituan,
                bundle: "r_daxiaomaxituan",
                flowLight: {
                    path: "spine/maxituan/gameplay_flowingLight_mx",
                    bundle: "r_daxiaomaxituan",
                    anim: "gameplay_flowingLight_mx_idle"
                },
                ignoreShowTipEffect: false,
                nums: [7, 7]
            }, {
                type: c.Garden,
                playAnimType: DaxiaoClearEffectBehavior_1.EDaxiaoPlayAnimType.Garden,
                bundle: "r_daxiaogarden",
                ignoreShowTipEffect: false,
                nums: [6, 9],
                flowLight: {
                    path: "spine/garden/gameplay_flowingLight",
                    bundle: "r_daxiaogarden",
                    anim: "idle"
                }
            }];
        this.extendAnims();
        try {
            for (var n = __values(this._animConfig), o = n.next(); !o.done; o = n.next()) {
                var a = o.value;
                LowPriorityBundleLoader_1.default.getInstance().addTask(a.bundle, LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultDaXiao);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                o && !o.done && (i = n.return) && i.call(n);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
    };
    DaxiaoAnimTrait.prototype.getType = function (e) {
        var t, i, n = [];
        try {
            for (var o = __values(this._animConfig), a = o.next(); !a.done; a = o.next()) {
                var c = a.value;
                LowPriorityBundleLoader_1.default.getInstance().isBundlePreLoaded(c.bundle) && e.length >= c.nums[0] && e.length <= c.nums[1] && (c.ignoreNums && c.ignoreNums.includes(e.length) || n.push(c));
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                a && !a.done && (i = o.return) && i.call(o);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        var l = new RandomGenerator_1.RandomGenerator(), d = l.random() < 0.5;
        return n.length > 0 && d ? n[l.randomInt(0, n.length)] : null;
    };
    DaxiaoAnimTrait.prototype.onDaxiaoTipBhr_showTip = function (e, t) {
        this._curTypeConfig = null;
        var i = e.args[0];
        this._curTypeConfig = this.getType(i);
        if (this._curTypeConfig && this._curTypeConfig.flowLight) {
            e.args[1] = this._curTypeConfig.flowLight.path;
            e.args[2] = this._curTypeConfig.flowLight.bundle;
        }
        if (this._curTypeConfig && this._curTypeConfig.ignoreShowTipEffect) {
            t({
                returnType: TraitCallbackReturnType.return,
                isBreak: true
            });
        }
        else {
            if (this._curTypeConfig) {
                t({
                    isBreak: true
                });
            }
            else {
                t();
            }
        }
    };
    DaxiaoAnimTrait.prototype.onDaxiaoBhr_playAni = function (e, t) {
        if (this._curTypeConfig) {
            e.ins.setAnimType(this._curTypeConfig.playAnimType);
            if (this._curTypeConfig.type !== c.CaiDai) {
                if (this._curTypeConfig.type !== c.Maxituan) {
                    if (this._curTypeConfig.type !== c.Garden) {
                        if (this.extendPlay(e.ins, e.args[1])) {
                            t({
                                returnType: TraitCallbackReturnType.return,
                                isBreak: true
                            });
                        }
                        else {
                            t();
                        }
                    }
                    else {
                        GardenAnimPlayer_1.GardenAnimPlayer.playFullAnimation(e.ins, e.args[1]);
                        t({
                            returnType: TraitCallbackReturnType.return,
                            isBreak: true
                        });
                    }
                }
                else {
                    MaxituanAnimPlayer_1.MaxituanAnimPlayer.playFullAnimation(e.ins, e.args[1]);
                    t({
                        returnType: TraitCallbackReturnType.return,
                        isBreak: true
                    });
                }
            }
            else {
                CaiDaiAnimPlayer_1.CaiDaiAnimPlayer.playCaiDaiAnim(e.ins, e.args[1]);
                t({
                    returnType: TraitCallbackReturnType.return,
                    isBreak: true
                });
            }
        }
        else
            t();
    };
    DaxiaoAnimTrait.prototype.isOpenExtendAnims = function () {
        return false;
    };
    DaxiaoAnimTrait.prototype.extendAnims = function () {
        this.isOpenExtendAnims() && this._animConfig.push({
            type: c.Guofeng,
            playAnimType: DaxiaoClearEffectBehavior_1.EDaxiaoPlayAnimType.Guofeng,
            bundle: "r_daxiaoguofeng",
            ignoreShowTipEffect: false,
            nums: [2, 10],
            flowLight: {
                path: "spine/idle/gameplay_flowingLight_gf",
                bundle: "r_daxiaoguofeng",
                anim: "idle"
            }
        }, {
            type: c.Hudie,
            playAnimType: DaxiaoClearEffectBehavior_1.EDaxiaoPlayAnimType.Hudie,
            bundle: "r_daxiaohudie",
            ignoreShowTipEffect: true,
            nums: [4, 9]
        });
    };
    DaxiaoAnimTrait.prototype.extendPlay = function (e, t) {
        if (this.isOpenExtendAnims()) {
            if (this._curTypeConfig.type === c.Guofeng) {
                GuofengAnimPlayer_1.GuofengAnimPlayer.playFullAnimation(e, t);
                return true;
            }
            if (this._curTypeConfig.type === c.Hudie) {
                HudieAnimPlayer_1.HudieAnimPlayer.playFullAnimation(e, t);
                return true;
            }
        }
    };
    DaxiaoAnimTrait.traitKey = "DaxiaoAnim";
    __decorate([
        mj.traitEvent("DaxiaoAni_extendAnim")
    ], DaxiaoAnimTrait.prototype, "isOpenExtendAnims", null);
    DaxiaoAnimTrait = __decorate([
        mj.trait,
        mj.class("DaxiaoAnimTrait")
    ], DaxiaoAnimTrait);
    return DaxiaoAnimTrait;
}(Trait_1.default));
exports.default = DaxiaoAnimTrait;

cc._RF.pop();
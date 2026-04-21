"use strict";
cc._RF.push(module, '81159eZnKpEw7oQS7CxHq73', 'DaxiaoNewAnimTrait');
// subpackages/l_daxiaonewanim/Scripts/DaxiaoNewAnimTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var RandomGenerator_1 = require("../../../Scripts/core/simulator/structures/RandomGenerator");
var DaxiaoClearEffectBehavior_1 = require("../../../Scripts/base/DaxiaoClearEffectBehavior");
var HaiyangAnimPlayer_1 = require("./HaiyangAnimPlayer");
var ShipinAnimPlayer_1 = require("./ShipinAnimPlayer");
var YinxiangAnimPlayer_1 = require("./YinxiangAnimPlayer");
var ZheshanAnimPlayer_1 = require("./ZheshanAnimPlayer");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var s = {
    Yinxiang: "Yinxiang",
    Shipin: "Shipin",
    Zheshan: "Zheshan",
    Haiyang: "Haiyang"
};
var DaxiaoNewAnimTrait = /** @class */ (function (_super) {
    __extends(DaxiaoNewAnimTrait, _super);
    function DaxiaoNewAnimTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._animConfig = [];
        _this._curTypeConfig = null;
        return _this;
    }
    DaxiaoNewAnimTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._animConfig.push({
            type: s.Yinxiang,
            playAnimType: DaxiaoClearEffectBehavior_1.EDaxiaoPlayAnimType.Yinxiang,
            bundle: "l_daxiaoyinxiang",
            ignoreShowTipEffect: true,
            nums: [5, 5]
        }, {
            type: s.Shipin,
            playAnimType: DaxiaoClearEffectBehavior_1.EDaxiaoPlayAnimType.Shipin,
            bundle: "l_daxiaoshipin",
            ignoreShowTipEffect: false,
            nums: [4, 4],
            flowLight: {
                path: "spine/idle/gameplay_flowingLight",
                bundle: "l_daxiaoshipin",
                anim: "idle"
            }
        }, {
            type: s.Zheshan,
            playAnimType: DaxiaoClearEffectBehavior_1.EDaxiaoPlayAnimType.Zheshan,
            bundle: "l_daxiaozheshan",
            ignoreShowTipEffect: false,
            nums: [3, 3],
            flowLight: {
                path: "spine/idle/gameplay_flowingLight",
                bundle: "l_daxiaozheshan",
                anim: "idle"
            }
        }, {
            type: s.Haiyang,
            playAnimType: DaxiaoClearEffectBehavior_1.EDaxiaoPlayAnimType.Haiyang,
            bundle: "l_daxiaohaiyang",
            ignoreShowTipEffect: false,
            nums: [3, 5],
            ignoreNums: [4],
            flowLight: {
                path: "spine/idle/gameplay_flowingLight",
                bundle: "l_daxiaohaiyang",
                anim: "idle"
            }
        });
    };
    DaxiaoNewAnimTrait.prototype.onDaxiaoAni_extendAnim = function (t, e) {
        e({
            returnVal: true,
            returnType: TraitCallbackReturnType.jump,
            isBreak: true
        });
    };
    DaxiaoNewAnimTrait.prototype.getType = function (t) {
        var e, i, a = [];
        try {
            for (var o = __values(this._animConfig), n = o.next(); !n.done; n = o.next()) {
                var s = n.value;
                t.length >= s.nums[0] && t.length <= s.nums[1] && (s.ignoreNums && s.ignoreNums.includes(t.length) || a.push(s));
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                n && !n.done && (i = o.return) && i.call(o);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        var l = new RandomGenerator_1.RandomGenerator(), h = l.random() < 0.5;
        return a.length > 0 && h ? a[l.randomInt(0, a.length)] : null;
    };
    DaxiaoNewAnimTrait.prototype.onDaxiaoTipBhr_showTip = function (t, e) {
        this._curTypeConfig = null;
        var i = t.args[0];
        this._curTypeConfig = this.getType(i);
        if (this._curTypeConfig && this._curTypeConfig.flowLight) {
            t.args[1] = this._curTypeConfig.flowLight.path;
            t.args[2] = this._curTypeConfig.flowLight.bundle;
        }
        if (this._curTypeConfig && this._curTypeConfig.ignoreShowTipEffect) {
            e({
                returnType: TraitCallbackReturnType.return,
                isBreak: true
            });
        }
        else {
            if (this._curTypeConfig) {
                e({
                    isBreak: true
                });
            }
            else {
                e();
            }
        }
    };
    DaxiaoNewAnimTrait.prototype.onDaxiaoBhr_playAni = function (t, e) {
        if (this._curTypeConfig) {
            t.ins.setAnimType(this._curTypeConfig.playAnimType);
            if (this.extendPlay(t.ins, t.args[1])) {
                e({
                    returnType: TraitCallbackReturnType.return,
                    isBreak: true
                });
            }
            else {
                e();
            }
        }
        else
            e();
    };
    DaxiaoNewAnimTrait.prototype.extendPlay = function (t, e) {
        if (this._curTypeConfig.type === s.Yinxiang) {
            YinxiangAnimPlayer_1.YinxiangAnimPlayer.playFullAnimation(t, e);
            return true;
        }
        if (this._curTypeConfig.type === s.Shipin) {
            ShipinAnimPlayer_1.ShipinAnimPlayer.playFullAnimation(t, e);
            return true;
        }
        if (this._curTypeConfig.type === s.Zheshan) {
            ZheshanAnimPlayer_1.ZheshanAnimPlayer.playFullAnimation(t, e);
            return true;
        }
        if (this._curTypeConfig.type === s.Haiyang) {
            HaiyangAnimPlayer_1.HaiyangAnimPlayer.playFullAnimation(t, e);
            return true;
        }
    };
    DaxiaoNewAnimTrait.traitKey = "DaxiaoNewAnim";
    DaxiaoNewAnimTrait = __decorate([
        mj.trait,
        mj.class("DaxiaoNewAnimTrait")
    ], DaxiaoNewAnimTrait);
    return DaxiaoNewAnimTrait;
}(Trait_1.default));
exports.default = DaxiaoNewAnimTrait;

cc._RF.pop();
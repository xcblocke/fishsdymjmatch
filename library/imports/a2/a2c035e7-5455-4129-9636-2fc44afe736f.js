"use strict";
cc._RF.push(module, 'a2c03XnVFVBKZY2L8RK/nNv', 'ChangeClearEffect5Trait');
// subpackages/r_changeClearEffect/Scripts/ChangeClearEffect5Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ChangeClearEffect5Trait = /** @class */ (function (_super) {
    __extends(ChangeClearEffect5Trait, _super);
    function ChangeClearEffect5Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currSkData = null;
        _this._selectedType = 1;
        _this._isGameOpen = false;
        return _this;
    }
    ChangeClearEffect5Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._selectedType = this.getRandomEffect();
        this.registerEvent([{
                event: "ChangeCEffTrait_bundle"
            }, {
                event: "ChangeCEffTrait_getType"
            }, {
                event: "ChangeCEffTrait_getSKDt"
            }]);
    };
    ChangeClearEffect5Trait.prototype.getBundleName = function () {
        var t = this._selectedType;
        return 5 === t ? "mainRes" : "clear_effect" + t;
    };
    ChangeClearEffect5Trait.prototype.setType = function (t) {
        this._selectedType = t;
    };
    ChangeClearEffect5Trait.prototype.onChangeCEffTrait_bundle = function (t, e) {
        var r = this.getBundleName();
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            returnVal: r
        });
    };
    ChangeClearEffect5Trait.prototype.onChangeCEffTrait_getType = function (t, e) {
        var r = this._selectedType;
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            returnVal: r
        });
    };
    ChangeClearEffect5Trait.prototype.onChangeCEffTrait_getSKDt = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            returnVal: this._currSkData
        });
    };
    ChangeClearEffect5Trait.prototype.onChangeCEffTrait_loadSpine = function (t, e) {
        var r = this;
        this._isGameOpen = t.ins.isGameTypeOpen(t.ins._gameType);
        var a = t.args[0], n = t.args[1];
        0 == this._traitData.type && (a = this.getRandomEffect());
        this.setType(a);
        this._selectedType = a;
        var i = this.getBundleName(), o = "spine/gameplay_elimination_a";
        "mainRes" === i && (o = "spine/clear/gameplay_elimination_a");
        var s = n;
        if (s && "function" == typeof s.loadRes) {
            this._currSkData = null;
            s.loadRes(o, sp.SkeletonData, i).then(function (t) {
                var e = Array.isArray(t) ? t[0] : t;
                r._currSkData = e || null;
            }).catch(function () {
                r._currSkData = null;
            });
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.jump
            });
        }
        else
            e();
    };
    ChangeClearEffect5Trait.prototype.getRandomEffect = function () {
        var t = Math.random() > 0.5 ? 5 : 0;
        0 == t && (t = Math.floor(4 * Math.random()) + 1);
        return t;
    };
    ChangeClearEffect5Trait.prototype.onClearEffBhv_changeSkd = function (t, e) {
        if (0 == this._traitData.type) {
            var r = t.args[0], a = this._currSkData;
            a && cc.isValid(a) && r && r.skeletonData !== a && this._isGameOpen && (r.skeletonData = a);
            e();
        }
        else
            e();
    };
    ChangeClearEffect5Trait.prototype.onClearEffBhv_getAnimName = function (t, e) {
        if (0 == this._traitData.type) {
            var r = t.args[0], a = t.args[1], n = "in";
            if (this._isGameOpen && this._currSkData && cc.isValid(this._currSkData)) {
                if (1 == this._selectedType) {
                    n = Math.random() < 0.5 ? "in_1" : "in_2";
                }
                else {
                    4 == this._selectedType && (n = a.x < -75 ? "in_left" : a.x > 75 ? "in_right3" : "in_middle");
                }
            }
            else {
                n = r ? "in_1" : "in";
            }
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.jump,
                returnVal: n
            });
        }
        else
            e();
    };
    ChangeClearEffect5Trait.traitKey = "ChangeClearEffect5";
    __decorate([
        mj.traitEvent("ChangeCEff5Trait_bundle")
    ], ChangeClearEffect5Trait.prototype, "getBundleName", null);
    __decorate([
        mj.traitEvent("ChangeCEff5Trait_setType")
    ], ChangeClearEffect5Trait.prototype, "setType", null);
    ChangeClearEffect5Trait = __decorate([
        mj.trait,
        mj.class("ChangeClearEffect5Trait")
    ], ChangeClearEffect5Trait);
    return ChangeClearEffect5Trait;
}(Trait_1.default));
exports.default = ChangeClearEffect5Trait;

cc._RF.pop();
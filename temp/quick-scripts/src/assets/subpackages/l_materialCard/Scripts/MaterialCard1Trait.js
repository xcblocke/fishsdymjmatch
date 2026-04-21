"use strict";
cc._RF.push(module, 'e0495DVLWxO9rOGXlqbSgK8', 'MaterialCard1Trait');
// subpackages/l_materialCard/Scripts/MaterialCard1Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var MaterialCardBaseTrait_1 = require("./MaterialCardBaseTrait");
var MaterialCard1Trait = /** @class */ (function (_super) {
    __extends(MaterialCard1Trait, _super);
    function MaterialCard1Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MaterialCard1Trait_1 = MaterialCard1Trait;
    MaterialCard1Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    MaterialCard1Trait.prototype._getModeData = function (t) {
        var e;
        if (!this.localData[t]) {
            this.localData[t] = {
                hadInterAdLastRound: false
            };
            this.localData[t] = this.localData[t];
        }
        return null !== (e = this.localData[t]) && void 0 !== e ? e : {
            hadInterAdLastRound: false
        };
    };
    MaterialCard1Trait.prototype.onAdMgr_interAdClose = function (t, e) {
        try {
            var a = this.getCurrentGameType();
            this._getModeData(a).hadInterAdLastRound = true;
            this.localData[a] = this.localData[a];
        }
        catch (t) {
            console.error("[" + MaterialCard1Trait_1.traitKey + "] 插屏广告关闭处理失败: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    MaterialCard1Trait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            var a = this.getCurrentGameType();
            if (!this.isNormalMode() && !this.isTravelMode() && !this.isDailyMode()) {
                e();
                return;
            }
            var i = this._getModeData(a);
            if (i.hadInterAdLastRound) {
                this.switchToNextMaterialCard();
                i.hadInterAdLastRound = false;
                this.localData[a] = this.localData[a];
            }
        }
        catch (t) {
            console.error("[" + MaterialCard1Trait_1.traitKey + "] 关卡切换处理失败: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    var MaterialCard1Trait_1;
    MaterialCard1Trait.traitKey = "MaterialCard1";
    MaterialCard1Trait = MaterialCard1Trait_1 = __decorate([
        mj.trait,
        mj.class("MaterialCard1Trait")
    ], MaterialCard1Trait);
    return MaterialCard1Trait;
}(MaterialCardBaseTrait_1.default));
exports.default = MaterialCard1Trait;

cc._RF.pop();
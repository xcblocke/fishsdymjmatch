"use strict";
cc._RF.push(module, 'a5668no01BFrI9aP5iGF10E', 'MaterialCard3Trait');
// subpackages/l_materialCard/Scripts/MaterialCard3Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var MaterialCardBaseTrait_1 = require("./MaterialCardBaseTrait");
var MaterialCard3Trait = /** @class */ (function (_super) {
    __extends(MaterialCard3Trait, _super);
    function MaterialCard3Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._startLevel = 6;
        _this._interval = 5;
        return _this;
    }
    MaterialCard3Trait_1 = MaterialCard3Trait;
    MaterialCard3Trait.prototype.onLoad = function () {
        var e, r, a, i;
        _super.prototype.onLoad.call(this);
        this._startLevel = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.startLevel) && void 0 !== r ? r : 6;
        this._interval = null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.interval) && void 0 !== i ? i : 5;
    };
    MaterialCard3Trait.prototype._shouldEnableForLevel = function (t) {
        return !(t < this._startLevel) && (t - this._startLevel) % this._interval == 0;
    };
    MaterialCard3Trait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            if (!this.isNormalMode()) {
                e();
                return;
            }
            var a = this.getCurrentLevel();
            if (!this._shouldEnableForLevel(a)) {
                e();
                return;
            }
            this.switchToNextMaterialCard();
            e();
        }
        catch (t) {
            console.error("[" + MaterialCard3Trait_1.traitKey + "] 处理新游戏事件失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    var MaterialCard3Trait_1;
    MaterialCard3Trait.traitKey = "MaterialCard3";
    MaterialCard3Trait = MaterialCard3Trait_1 = __decorate([
        mj.trait,
        mj.class("MaterialCard3Trait")
    ], MaterialCard3Trait);
    return MaterialCard3Trait;
}(MaterialCardBaseTrait_1.default));
exports.default = MaterialCard3Trait;

cc._RF.pop();
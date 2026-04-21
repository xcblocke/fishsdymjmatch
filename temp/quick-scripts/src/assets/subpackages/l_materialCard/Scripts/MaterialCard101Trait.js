"use strict";
cc._RF.push(module, '87f3b9h85FL2Yy+gi/4jX/r', 'MaterialCard101Trait');
// subpackages/l_materialCard/Scripts/MaterialCard101Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ClassicMaterialCardBaseTrait_1 = require("./ClassicMaterialCardBaseTrait");
var MaterialCard101Trait = /** @class */ (function (_super) {
    __extends(MaterialCard101Trait, _super);
    function MaterialCard101Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._interval = 1;
        return _this;
    }
    MaterialCard101Trait_1 = MaterialCard101Trait;
    MaterialCard101Trait.prototype.onLoad = function () {
        var e, r;
        _super.prototype.onLoad.call(this);
        this._interval = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.interval) && void 0 !== r ? r : 1;
    };
    MaterialCard101Trait.prototype.onChgBatchAnimBhv_start = function (t, e) {
        var a, i, o;
        try {
            if (!this.isClassicMode()) {
                e();
                return;
            }
            var l = null === (a = t.args) || void 0 === a ? void 0 : a[0], n = null !== (o = null === (i = null == l ? void 0 : l.data) || void 0 === i ? void 0 : i.batchId) && void 0 !== o ? o : 0;
            if (0 === n) {
                e();
                return;
            }
            if (n % this._interval == 0) {
                this.switchToNextMaterialCard();
                this.getCurMaterialCard();
                var s = t.ins;
                this.refreshExistingCards(null == s ? void 0 : s.context);
            }
            e();
        }
        catch (t) {
            console.error("[" + MaterialCard101Trait_1.traitKey + "] 波次切换处理失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    var MaterialCard101Trait_1;
    MaterialCard101Trait.traitKey = "MaterialCard101";
    MaterialCard101Trait = MaterialCard101Trait_1 = __decorate([
        mj.trait,
        mj.class("MaterialCard101Trait")
    ], MaterialCard101Trait);
    return MaterialCard101Trait;
}(ClassicMaterialCardBaseTrait_1.default));
exports.default = MaterialCard101Trait;

cc._RF.pop();
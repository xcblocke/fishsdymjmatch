"use strict";
cc._RF.push(module, 'aaa9fkK2LpEkqaWNqbj35MX', 'DianZanItem');
// subpackages/l_dianzan/Scripts/DianZanItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var DianZanItem = /** @class */ (function (_super) {
    __extends(DianZanItem, _super);
    function DianZanItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._spineAnim = null;
        return _this;
    }
    DianZanItem.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._initComponents();
    };
    DianZanItem.prototype._initComponents = function () {
        this._spineAnim = this.node.getComponentInChildren(sp.Skeleton);
        this._spineAnim;
    };
    DianZanItem.prototype.startPlayAni = function (t, e) {
        if (t === void 0) { t = "in"; }
        var n = this;
        GameUtils_1.default.playSpine(this._spineAnim, t, false, function () {
            null == e || e();
            n.node.destroy();
        });
    };
    DianZanItem.prototype.setScale = function (t) {
        this._spineAnim.node.scale = t;
    };
    DianZanItem.prefabUrl = "prefabs/effects/EffectDianZhan";
    __decorate([
        mj.traitEvent("DianZanItem_initComp")
    ], DianZanItem.prototype, "_initComponents", null);
    DianZanItem = __decorate([
        mj.class
    ], DianZanItem);
    return DianZanItem;
}(BaseUI_1.default));
exports.default = DianZanItem;

cc._RF.pop();
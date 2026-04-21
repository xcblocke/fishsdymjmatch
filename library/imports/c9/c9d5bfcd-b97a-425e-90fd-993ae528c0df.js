"use strict";
cc._RF.push(module, 'c9d5b/NuXpCXpD9mTrlKMDf', 'RewardComboItem');
// Scripts/items/RewardComboItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../framework/ui/BaseUI");
var GameUtils_1 = require("../core/simulator/util/GameUtils");
var RewardComboItem = /** @class */ (function (_super) {
    __extends(RewardComboItem, _super);
    function RewardComboItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._spineAnim = null;
        return _this;
    }
    RewardComboItem.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._initComponents();
    };
    RewardComboItem.prototype._initComponents = function () {
        this._spineAnim = this.node.getComponentInChildren(sp.Skeleton);
        this._spineAnim;
    };
    RewardComboItem.prototype.startPlayAni = function (e, t) {
        var o = this;
        GameUtils_1.default.playSpine(this._spineAnim, e, false, function () {
            null == t || t();
            o.node.destroy();
        });
    };
    RewardComboItem.prefabUrl = "prefabs/effects/EffectRewardCombo";
    __decorate([
        mj.traitEvent("RwdComboItem_initComp")
    ], RewardComboItem.prototype, "_initComponents", null);
    __decorate([
        mj.traitEvent("RwdComboItem_startPlayAni")
    ], RewardComboItem.prototype, "startPlayAni", null);
    RewardComboItem = __decorate([
        mj.class
    ], RewardComboItem);
    return RewardComboItem;
}(BaseUI_1.default));
exports.default = RewardComboItem;

cc._RF.pop();
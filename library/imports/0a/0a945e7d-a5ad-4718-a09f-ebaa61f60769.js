"use strict";
cc._RF.push(module, '0a94559pa1HGKCf66ph9gdp', 'FullComboItem');
// Scripts/items/FullComboItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../framework/ui/BaseUI");
var CommonUtils_1 = require("../framework/utils/CommonUtils");
var GameUtils_1 = require("../core/simulator/util/GameUtils");
var FullComboItem = /** @class */ (function (_super) {
    __extends(FullComboItem, _super);
    function FullComboItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._spineAnim = null;
        _this._maskNode = null;
        return _this;
    }
    FullComboItem.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._initComponents();
    };
    FullComboItem.prototype._initComponents = function () {
        this.initSpine();
        this._maskNode = this.node.getChildByName("mask");
        this._maskNode;
    };
    FullComboItem.prototype.startPlayAni = function (e, t, o) {
        var n = this;
        if (this._maskNode) {
            var i = this._maskNode.getComponent(cc.Sprite);
            i && (i.spriteFrame = CommonUtils_1.createSingleColorSpriteFrame(new cc.Color(0, 0, 0, 0)));
            cc.tween(this._maskNode).to(this.fadeInTime(), {
                opacity: 204
            }).start();
        }
        this.playAnimation(e, this._spineAnim);
        cc.tween(this.node).delay(this.animDlyTime()).call(function () {
            null == t || t();
            n._maskNode && cc.tween(n._maskNode).to(n.fadeOutTime(), {
                opacity: 0
            }).call(function () {
                null == o || o();
                n.node.destroy();
            }).start();
        }).start();
    };
    FullComboItem.prototype.fadeInTime = function () {
        return 0.33;
    };
    FullComboItem.prototype.animDlyTime = function () {
        return 1.66;
    };
    FullComboItem.prototype.fadeOutTime = function () {
        return 0.33;
    };
    FullComboItem.prototype.playAnimation = function () {
        GameUtils_1.default.playSpine(this._spineAnim, "in", false, function () { });
    };
    FullComboItem.prototype.initSpine = function () {
        this._spineAnim = this.node.getComponentInChildren(sp.Skeleton);
        this._spineAnim;
    };
    FullComboItem.prefabUrl = "prefabs/effects/EffectFullCombo";
    __decorate([
        mj.traitEvent("FullComboItem_fadeInTime")
    ], FullComboItem.prototype, "fadeInTime", null);
    __decorate([
        mj.traitEvent("FullComboItem_animDlyTime")
    ], FullComboItem.prototype, "animDlyTime", null);
    __decorate([
        mj.traitEvent("FullComboItem_fadeOutTime")
    ], FullComboItem.prototype, "fadeOutTime", null);
    __decorate([
        mj.traitEvent("FullComboItem_playAni")
    ], FullComboItem.prototype, "playAnimation", null);
    __decorate([
        mj.traitEvent("FullComboItem_initSpine")
    ], FullComboItem.prototype, "initSpine", null);
    FullComboItem = __decorate([
        mj.class
    ], FullComboItem);
    return FullComboItem;
}(BaseUI_1.default));
exports.default = FullComboItem;

cc._RF.pop();
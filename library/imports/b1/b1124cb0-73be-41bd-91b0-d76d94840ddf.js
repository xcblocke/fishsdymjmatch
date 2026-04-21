"use strict";
cc._RF.push(module, 'b1124ywc75BvZGw122UhA3f', 'Tile4GuideMask');
// subpackages/l_tile4Guide/Scripts/Tile4GuideMask.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TILE4_SLOT_FULL_WARN_NODE = void 0;
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
exports.TILE4_SLOT_FULL_WARN_NODE = "tile4SlotFullWarn";
var Tile4GuideMask = /** @class */ (function (_super) {
    __extends(Tile4GuideMask, _super);
    function Tile4GuideMask() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._slotZIndex = -1;
        _this._slotSiblingIndex = -1;
        _this._richNode = null;
        _this._delayTime = 0.5;
        _this._canClose = false;
        return _this;
    }
    Tile4GuideMask.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.OnButtonClick(this.node.getChildByName("mask"), this.onClickClose.bind(this));
        this._richNode = this.node.getChildByName("nodeTip").getChildByName("labelDesc");
        this._richNode.on(cc.Node.EventType.SIZE_CHANGED, this._updateFontSize, this);
        this._updateFontSize();
        this._delayClose();
    };
    Tile4GuideMask.prototype._delayClose = function () {
        var e = this;
        cc.tween(this.node).delay(this._delayTime).call(function () {
            e._canClose = true;
        }).start();
    };
    Tile4GuideMask.prototype._updateFontSize = function () {
        if (this._richNode.getContentSize().height > 100) {
            this._richNode.getComponent(cc.RichText).fontSize = 48;
        }
        else {
            this._richNode.getComponent(cc.RichText).fontSize = 62;
        }
    };
    Tile4GuideMask.prototype.setCloseCallback = function (e, t, i) {
        this._slotZIndex = e;
        this._slotSiblingIndex = t;
        this._onClose = i;
    };
    Tile4GuideMask.prototype.onClickClose = function () {
        if (this._canClose) {
            this.node.destroy();
            this._onClose && this._onClose(this._slotZIndex, this._slotSiblingIndex);
        }
    };
    Tile4GuideMask.prototype.onDestroy = function () {
        _super.prototype.onDestroy && _super.prototype.onDestroy.call(this);
        this._onClose = null;
    };
    Tile4GuideMask.prefabUrl = "prefabs/Tile4GuideMask";
    Tile4GuideMask.bundleName = "l_tile4Guide";
    Tile4GuideMask = __decorate([
        mj.class
    ], Tile4GuideMask);
    return Tile4GuideMask;
}(BaseUI_1.default));
exports.default = Tile4GuideMask;

cc._RF.pop();
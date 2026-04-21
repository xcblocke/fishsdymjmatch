"use strict";
cc._RF.push(module, '560f6VG13FMo7OZkh9mPiQh', 'Tile2TipsView');
// Scripts/view/Tile2TipsView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIView_1 = require("../framework/ui/UIView");
var Tile2TipsView = /** @class */ (function (_super) {
    __extends(Tile2TipsView, _super);
    function Tile2TipsView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._contentNode = null;
        _this._lbNode = null;
        return _this;
    }
    Tile2TipsView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._contentNode = this.node.getChildByName("content");
        this._lbNode = this._contentNode.getChildByName("string");
        this._lbNode.on(cc.Node.EventType.SIZE_CHANGED, this.updateBgSize, this);
        this.updateBgSize();
    };
    Tile2TipsView.prototype.stopAndHide = function () {
        this.stopAnimation();
        this._contentNode.active = false;
    };
    Tile2TipsView.prototype.playAnimation = function () {
        var e = this;
        this._contentNode.active = true;
        this._contentNode.scale = 0.5;
        this._contentNode.opacity = 0;
        cc.tween(this._contentNode).to(0.06, {
            scale: 1,
            opacity: 255
        }).delay(1.106).to(0.494, {
            scale: 0.5,
            opacity: 0
        }).call(function () {
            e.stopAndHide();
        }).start();
    };
    Tile2TipsView.prototype.showTile2Tips = function (e) {
        null != e && (this._lbNode.getComponent(cc.Label).string = e);
        this.stopAnimation();
        this.playAnimation();
    };
    Tile2TipsView.prototype.stopAnimation = function () {
        this._contentNode.stopAllActions();
    };
    Tile2TipsView.prototype.updateBgSize = function () {
        if (cc.isValid(this._lbNode) && cc.isValid(this._contentNode)) {
            var e = this._lbNode.getContentSize();
            this._contentNode.setContentSize(e.width + 20, e.height + 20);
        }
    };
    Tile2TipsView.prefabUrl = "prefabs/ui/tile2/Tile2TipsView";
    Tile2TipsView = __decorate([
        mj.class
    ], Tile2TipsView);
    return Tile2TipsView;
}(UIView_1.default));
exports.default = Tile2TipsView;

cc._RF.pop();
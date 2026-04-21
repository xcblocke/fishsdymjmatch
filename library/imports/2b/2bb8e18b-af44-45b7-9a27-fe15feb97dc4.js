"use strict";
cc._RF.push(module, '2bb8eGLr0RFt5on/hX+uX3E', 'Tile2ClearFromBoardToSlotBarAni');
// Scripts/fsm/ani/Tile2ClearFromBoardToSlotBarAni.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ClearFromBoardToSlotBarAni = void 0;
var Tile2AniActionBase_1 = require("../../base/Tile2AniActionBase");
var TweenEasing_1 = require("../../base/TweenEasing");
var Tile2ClearFromBoardToSlotBarAni = /** @class */ (function (_super) {
    __extends(Tile2ClearFromBoardToSlotBarAni, _super);
    function Tile2ClearFromBoardToSlotBarAni(t, o) {
        var _this = _super.call(this) || this;
        _this._node = null;
        _this._baseTileNode = null;
        _this._node = t;
        _this._baseTileNode = o;
        return _this;
    }
    Tile2ClearFromBoardToSlotBarAni.prototype.onPlay = function (e) {
        var t = this;
        if (cc.isValid(this._node)) {
            var o = this._baseTileNode.context.gameView.nodeDragCardRoot, n = this._getTargetWorldPos(e.clearPosIndex), i = o.convertToNodeSpaceAR(n), r = this._baseTileNode.tileObject.getScaleInSlotBar();
            this._reparent(this._node, o);
            this._node.zIndex = 10000;
            this._node.position.z;
            this._currentTween = cc.tween(this._node).to(0.23, {
                position: i,
                scale: r
            }, {
                easing: TweenEasing_1.easeCard2
            }).call(function () {
                return t.finish();
            }).start();
        }
        else
            this.finish();
    };
    Tile2ClearFromBoardToSlotBarAni.prototype.onCancel = function () {
        this._stopTween();
    };
    Tile2ClearFromBoardToSlotBarAni.prototype.onInterrupt = function () {
        this._stopTween();
    };
    Tile2ClearFromBoardToSlotBarAni.prototype._stopTween = function () {
        var e;
        null === (e = this._currentTween) || void 0 === e || e.stop();
        this._currentTween = void 0;
    };
    Tile2ClearFromBoardToSlotBarAni.prototype._getTargetWorldPos = function (e) {
        var t = this._baseTileNode.tileObject, o = this._baseTileNode.context.gameView.slotBarView;
        if (!o)
            return null;
        var n = null != e ? e : t.getIndexInSlotBar();
        return o.getWorldPosition(this._baseTileNode, n);
    };
    return Tile2ClearFromBoardToSlotBarAni;
}(Tile2AniActionBase_1.Tile2AniActionBase));
exports.Tile2ClearFromBoardToSlotBarAni = Tile2ClearFromBoardToSlotBarAni;

cc._RF.pop();
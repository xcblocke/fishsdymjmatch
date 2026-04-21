"use strict";
cc._RF.push(module, 'a15bcJizc1E6LqUMZu4O1/k', 'Tile2ClearWaitOnSlotBarAni');
// Scripts/fsm/ani/Tile2ClearWaitOnSlotBarAni.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ClearWaitOnSlotBarAni = void 0;
var Tile2AniActionBase_1 = require("../../base/Tile2AniActionBase");
var Tile2ClearWaitOnSlotBarAni = /** @class */ (function (_super) {
    __extends(Tile2ClearWaitOnSlotBarAni, _super);
    function Tile2ClearWaitOnSlotBarAni(t, o) {
        var _this = _super.call(this) || this;
        _this._cancelled = false;
        _this._node = null;
        _this._baseTileNode = null;
        _this._node = t;
        _this._baseTileNode = o;
        return _this;
    }
    Tile2ClearWaitOnSlotBarAni.prototype.onPlay = function () {
        var e = this;
        this._cancelled = false;
        if (cc.isValid(this._node)) {
            this._node.position.z;
            var t = this._baseTileNode.context.gameView.nodeDragCardRoot;
            this._reparent(this._node, t);
            var o = this._baseTileNode.tileObject.getScaleInSlotBar();
            this._tweenMove = cc.tween(this._node).to(0.1, {
                scale: o,
                opacity: 255
            }, {
                easing: "quadOut"
            }).call(function () {
                e.finish();
            }).start();
        }
        else
            this.finish();
    };
    Tile2ClearWaitOnSlotBarAni.prototype.onCancel = function () {
        this._cancelled = true;
        this._stopTweens();
    };
    Tile2ClearWaitOnSlotBarAni.prototype.onInterrupt = function () {
        this._cancelled = true;
        this._stopTweens();
    };
    Tile2ClearWaitOnSlotBarAni.prototype._stopTweens = function () {
        var e;
        null === (e = this._tweenMove) || void 0 === e || e.stop();
        this._tweenMove = void 0;
    };
    Tile2ClearWaitOnSlotBarAni.prototype._getTargetWorldPos = function () {
        var e = this._baseTileNode.tileObject, t = this._baseTileNode.context.gameView.slotBarView;
        if (!t)
            return null;
        var o = e.getIndexInSlotBar();
        return t.getWorldPosition(this._baseTileNode, o);
    };
    return Tile2ClearWaitOnSlotBarAni;
}(Tile2AniActionBase_1.Tile2AniActionBase));
exports.Tile2ClearWaitOnSlotBarAni = Tile2ClearWaitOnSlotBarAni;

cc._RF.pop();
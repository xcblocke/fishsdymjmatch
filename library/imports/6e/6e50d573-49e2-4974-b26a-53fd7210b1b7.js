"use strict";
cc._RF.push(module, '6e50dVzSeJJdLJqU/1yELG3', 'Tile2NoClearAddToSlotBarAni');
// Scripts/fsm/ani/Tile2NoClearAddToSlotBarAni.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2NoClearAddToSlotBarAni = void 0;
var Tile2AniActionBase_1 = require("../../base/Tile2AniActionBase");
var TweenEasing_1 = require("../../base/TweenEasing");
var Tile2NoClearAddToSlotBarAni = /** @class */ (function (_super) {
    __extends(Tile2NoClearAddToSlotBarAni, _super);
    function Tile2NoClearAddToSlotBarAni(t, o) {
        var _this = _super.call(this) || this;
        _this._node = null;
        _this._baseTileNode = null;
        _this._node = t;
        _this._baseTileNode = o;
        return _this;
    }
    Tile2NoClearAddToSlotBarAni.prototype.onPlay = function (e) {
        var t = this;
        if (cc.isValid(this._node)) {
            var o = this._node.position.z, n = this._baseTileNode.context.gameView.slotBarView.getNodeLayer(), i = this._baseTileNode.context.gameView.nodeDragCardRoot, r = this._getTargetWorldPos(), l = i.convertToNodeSpaceAR(r), s = n.convertToNodeSpaceAR(r);
            l = cc.v3(l.x - 10, l.y + 18, o);
            var c = this._baseTileNode.tileObject.getScaleInSlotBar();
            this._reparent(this._node, i);
            var u = (null == e ? void 0 : e.isShadow) ? 0 : 255;
            this._currentTween = cc.tween(this._node).to(0.23, {
                position: l,
                scale: c
            }, {
                easing: TweenEasing_1.easeCard2
            }).call(function () {
                t._reparent(t._node, n);
            }).delay(0.02).to(0.1, {
                position: cc.v3(s.x, s.y, 0),
                scale: c,
                opacity: u
            }, {
                easing: TweenEasing_1.easeCard3
            }).call(function () {
                return t.finish();
            }).start();
        }
        else
            this.finish();
    };
    Tile2NoClearAddToSlotBarAni.prototype.onCancel = function () {
        this._stopTween();
    };
    Tile2NoClearAddToSlotBarAni.prototype.onInterrupt = function () {
        this._stopTween();
    };
    Tile2NoClearAddToSlotBarAni.prototype.reset = function () {
        var e = this._baseTileNode.context.gameView.slotBarView.getNodeLayer(), t = this._getTargetWorldPos(), o = e.convertToNodeSpaceAR(t);
        this._node.parent = e;
        this._node.position = o;
        this._node.scale = this._baseTileNode.tileObject.getScaleInSlotBar();
    };
    Tile2NoClearAddToSlotBarAni.prototype._stopTween = function () {
        var e;
        null === (e = this._currentTween) || void 0 === e || e.stop();
        this._currentTween = void 0;
    };
    Tile2NoClearAddToSlotBarAni.prototype._getTargetWorldPos = function () {
        var e = this._baseTileNode.tileObject, t = this._baseTileNode.context.gameView.slotBarView;
        if (!t)
            return null;
        var o = e.getIndexInSlotBar();
        return t.getWorldPosition(this._baseTileNode, o);
    };
    return Tile2NoClearAddToSlotBarAni;
}(Tile2AniActionBase_1.Tile2AniActionBase));
exports.Tile2NoClearAddToSlotBarAni = Tile2NoClearAddToSlotBarAni;

cc._RF.pop();
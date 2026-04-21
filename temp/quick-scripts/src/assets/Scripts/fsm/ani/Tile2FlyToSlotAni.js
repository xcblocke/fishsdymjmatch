"use strict";
cc._RF.push(module, 'ef5ffueuLZMz6IDWqpwdh/V', 'Tile2FlyToSlotAni');
// Scripts/fsm/ani/Tile2FlyToSlotAni.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2FlyToSlotAni = void 0;
var Tile2AniActionBase_1 = require("../../base/Tile2AniActionBase");
var TweenEasing_1 = require("../../base/TweenEasing");
var Tile2FlyToSlotAni = /** @class */ (function (_super) {
    __extends(Tile2FlyToSlotAni, _super);
    function Tile2FlyToSlotAni(t, o, n, i) {
        if (n === void 0) { n = 0.287; }
        if (i === void 0) { i = "quadInOut"; }
        var _this = _super.call(this) || this;
        _this._node = null;
        _this._baseTileNode = null;
        _this._defaultDuration = null;
        _this._defaultEasing = null;
        _this._node = t;
        _this._baseTileNode = o;
        _this._defaultDuration = n;
        _this._defaultEasing = i;
        return _this;
    }
    Tile2FlyToSlotAni.prototype.onPlay = function () {
        var e = this;
        if (cc.isValid(this._node)) {
            var t = this._baseTileNode.tileObject.getScaleInSlotBar(), o = (this._baseTileNode.context.gameView.slotBarView.getNodeLayer(), this._baseTileNode.context.gameView.nodeDragCardRoot), n = this._getTargetWorldPos(), i = o.convertToNodeSpaceAR(n);
            this._reparent(this._node, o);
            var r = t - 0.03;
            this._currentTween = cc.tween(this._node).parallel(cc.tween().to(0.287, {
                position: i
            }, {
                easing: TweenEasing_1.easeCard4
            }), cc.tween().delay(0.148).to(0.139, {
                scale: r
            }, {
                easing: TweenEasing_1.easeCard5
            }).to(0.096, {
                scale: t
            }, {
                easing: TweenEasing_1.easeCard5
            })).call(function () {
                e.reset();
                e.finish();
            }).start();
        }
        else
            this.finish();
    };
    Tile2FlyToSlotAni.prototype.onCancel = function () {
        this._stopTween();
    };
    Tile2FlyToSlotAni.prototype.reset = function () {
        var e = this._baseTileNode.tileObject.getScaleInSlotBar(), t = this._baseTileNode.context.gameView.slotBarView.getNodeLayer(), o = (this._baseTileNode.context.gameView.nodeDragCardRoot, this._getTargetWorldPos()), n = t.convertToNodeSpaceAR(o);
        this._node.parent = t;
        this._node.scale = e;
        this._node.position = n;
    };
    Tile2FlyToSlotAni.prototype.onInterrupt = function () {
        this._stopTween();
        cc.isValid(this._node) && this.reset();
    };
    Tile2FlyToSlotAni.prototype._stopTween = function () {
        var e;
        null === (e = this._currentTween) || void 0 === e || e.stop();
        this._currentTween = void 0;
    };
    Tile2FlyToSlotAni.prototype._getTargetWorldPos = function () {
        var e = this._baseTileNode.tileObject, t = this._baseTileNode.context.gameView.slotBarView;
        if (!t)
            return null;
        var o = e.getIndexInSlotBar();
        return t.getWorldPosition(this._baseTileNode, o);
    };
    return Tile2FlyToSlotAni;
}(Tile2AniActionBase_1.Tile2AniActionBase));
exports.Tile2FlyToSlotAni = Tile2FlyToSlotAni;

cc._RF.pop();
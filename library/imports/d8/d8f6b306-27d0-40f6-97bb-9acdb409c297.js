"use strict";
cc._RF.push(module, 'd8f6bMGJ9BA9pe7ms20CcKX', 'Tile2MoveInSlotAni');
// Scripts/fsm/ani/Tile2MoveInSlotAni.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2MoveInSlotAni = void 0;
var Tile2AniActionBase_1 = require("../../base/Tile2AniActionBase");
var Tile2MoveInSlotAni = /** @class */ (function (_super) {
    __extends(Tile2MoveInSlotAni, _super);
    function Tile2MoveInSlotAni(t, o, n, i, r) {
        if (n === void 0) { n = 0; }
        if (i === void 0) { i = 0.2; }
        if (r === void 0) { r = "cubicIn"; }
        var _this = _super.call(this) || this;
        _this._node = null;
        _this._baseTileNode = null;
        _this._defaultDelay = null;
        _this._defaultDuration = null;
        _this._defaultEasing = null;
        _this._node = t;
        _this._baseTileNode = o;
        _this._defaultDelay = n;
        _this._defaultDuration = i;
        _this._defaultEasing = r;
        return _this;
    }
    Tile2MoveInSlotAni.prototype.onPlay = function (e) {
        var t, o, n, i = this;
        if (cc.isValid(this._node) && null != e) {
            var r = null !== (t = e.delay) && void 0 !== t ? t : this._defaultDelay, a = null !== (o = e.duration) && void 0 !== o ? o : this._defaultDuration, l = null !== (n = e.easing) && void 0 !== n ? n : this._defaultEasing, s = this._baseTileNode.context.gameView.slotBarView.getNodeLayer(), c = this._getTargetPos(e.index);
            this._reparent(this._node, s);
            var u = cc.tween(this._node);
            r > 0 && u.delay(r);
            u.to(a, {
                position: c
            }, l ? {
                easing: l
            } : void 0).call(function () {
                i.finish();
            }).start();
            this._currentTween = u;
        }
        else
            this.finish();
    };
    Tile2MoveInSlotAni.prototype.reset = function () {
        var e = this._baseTileNode.context.gameView.slotBarView.getNodeLayer(), t = this._baseTileNode.tileObject.getIndexInSlotBar();
        if (t >= 0) {
            var o = this._getTargetPos(t);
            this._node.parent = e;
            this._node.position = o;
            this._node.scale = this._baseTileNode.tileObject.getScaleInSlotBar();
        }
    };
    Tile2MoveInSlotAni.prototype.finish = function () {
        _super.prototype.finish.call(this);
    };
    Tile2MoveInSlotAni.prototype.onCancel = function () {
        this._stopTween();
    };
    Tile2MoveInSlotAni.prototype.onInterrupt = function () {
        this._stopTween();
    };
    Tile2MoveInSlotAni.prototype._stopTween = function () {
        var e;
        null === (e = this._currentTween) || void 0 === e || e.stop();
        this._currentTween = void 0;
    };
    Tile2MoveInSlotAni.prototype._getTargetPos = function (e) {
        var t = this._baseTileNode.context.gameView.slotBarView;
        return t ? t.getPosition(this._baseTileNode, e) : null;
    };
    return Tile2MoveInSlotAni;
}(Tile2AniActionBase_1.Tile2AniActionBase));
exports.Tile2MoveInSlotAni = Tile2MoveInSlotAni;

cc._RF.pop();
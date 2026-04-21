"use strict";
cc._RF.push(module, '1677dZpXfFIybobRbeAM5GT', 'Tile2MoveBackAni');
// Scripts/fsm/ani/Tile2MoveBackAni.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2MoveBackAni = void 0;
var Tile2AniActionBase_1 = require("../../base/Tile2AniActionBase");
var Tile2MoveBackAni = /** @class */ (function (_super) {
    __extends(Tile2MoveBackAni, _super);
    function Tile2MoveBackAni(t, o, n, i) {
        if (n === void 0) { n = 0.3; }
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
    Tile2MoveBackAni.prototype.onPlay = function (e) {
        var t, o, n = this;
        if (cc.isValid(this._node)) {
            var i = this._getTargetPos();
            if (i) {
                var r = null !== (t = null == e ? void 0 : e.duration) && void 0 !== t ? t : this._defaultDuration, a = null !== (o = null == e ? void 0 : e.easing) && void 0 !== o ? o : this._defaultEasing;
                this._node.zIndex = this._baseTileNode.tileObject.gridZIndex;
                this._currentTween = cc.tween(this._node).to(r, {
                    position: i,
                    scale: 1,
                    opacity: 255
                }, a ? {
                    easing: a
                } : void 0).call(function () {
                    return n.finish();
                }).start();
            }
            else
                this.finish();
        }
        else
            this.finish();
    };
    Tile2MoveBackAni.prototype.onCancel = function () {
        this._stopTween();
    };
    Tile2MoveBackAni.prototype.onInterrupt = function () {
        this._stopTween();
        if (cc.isValid(this._node)) {
            var e = this._getTargetPos();
            e && (this._node.position = e);
            this._node.scale = 1;
        }
    };
    Tile2MoveBackAni.prototype._stopTween = function () {
        var e;
        null === (e = this._currentTween) || void 0 === e || e.stop();
        this._currentTween = void 0;
    };
    Tile2MoveBackAni.prototype._getTargetPos = function () {
        var e = this._baseTileNode.tileObject, t = this._baseTileNode.layerNode;
        if (!cc.isValid(t) || !cc.isValid(this._node.parent))
            return null;
        var o = e.getPosition(), n = t.convertToWorldSpaceAR(o);
        return this._node.parent.convertToNodeSpaceAR(n);
    };
    return Tile2MoveBackAni;
}(Tile2AniActionBase_1.Tile2AniActionBase));
exports.Tile2MoveBackAni = Tile2MoveBackAni;

cc._RF.pop();
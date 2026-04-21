"use strict";
cc._RF.push(module, '5ccdf9CtVNK4oYxOjRkVsZn', 'Tile2ClearFromSlotBarToPosAni');
// Scripts/fsm/ani/Tile2ClearFromSlotBarToPosAni.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ClearFromSlotBarToPosAni = void 0;
var Tile2AniActionBase_1 = require("../../base/Tile2AniActionBase");
var TweenEasing_1 = require("../../base/TweenEasing");
var Tile2ClearFromSlotBarToPosAni = /** @class */ (function (_super) {
    __extends(Tile2ClearFromSlotBarToPosAni, _super);
    function Tile2ClearFromSlotBarToPosAni(t, o) {
        var _this = _super.call(this) || this;
        _this._cancelled = false;
        _this._node = null;
        _this._baseTileNode = null;
        _this._node = t;
        _this._baseTileNode = o;
        return _this;
    }
    Tile2ClearFromSlotBarToPosAni.prototype.onPlay = function (e) {
        var t = this;
        this._cancelled = false;
        if (cc.isValid(this._node)) {
            var o = this._node.position, n = (cc.v3(o.x, o.y, o.z), this._baseTileNode.context.gameView.nodeDragCardRoot);
            this._currentTween = cc.tween(this._node).call(function () {
                t._reparent(t._node, n);
            }).to(0.05, {
                scale: 1,
                opacity: 255
            }, {
                easing: "quadOut"
            }).to(0.18, {
                position: cc.v3(e.targetLocalPos.x, e.targetLocalPos.y, 0)
            }, {
                easing: TweenEasing_1.easeCard
            }).call(function () {
                return t.finish();
            }).start();
        }
        else
            this.finish();
    };
    Tile2ClearFromSlotBarToPosAni.prototype.onCancel = function () {
        this._cancelled = true;
        this._stopTween();
    };
    Tile2ClearFromSlotBarToPosAni.prototype.onInterrupt = function () {
        this._cancelled = true;
        this._stopTween();
    };
    Tile2ClearFromSlotBarToPosAni.prototype._stopTween = function () {
        var e;
        null === (e = this._currentTween) || void 0 === e || e.stop();
        this._currentTween = void 0;
    };
    return Tile2ClearFromSlotBarToPosAni;
}(Tile2AniActionBase_1.Tile2AniActionBase));
exports.Tile2ClearFromSlotBarToPosAni = Tile2ClearFromSlotBarToPosAni;

cc._RF.pop();
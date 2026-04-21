"use strict";
cc._RF.push(module, '7f4c66/jCpKeYPQYkKa60bw', 'Tile2ClearFromBoardToPosAni');
// Scripts/fsm/ani/Tile2ClearFromBoardToPosAni.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ClearFromBoardToPosAni = void 0;
var Tile2AniActionBase_1 = require("../../base/Tile2AniActionBase");
var TweenEasing_1 = require("../../base/TweenEasing");
var Tile2ClearFromBoardToPosAni = /** @class */ (function (_super) {
    __extends(Tile2ClearFromBoardToPosAni, _super);
    function Tile2ClearFromBoardToPosAni(t, o) {
        var _this = _super.call(this) || this;
        _this._cancelled = false;
        _this._node = null;
        _this._baseTileNode = null;
        _this._node = t;
        _this._baseTileNode = o;
        return _this;
    }
    Tile2ClearFromBoardToPosAni.prototype.onPlay = function (e) {
        var t = this;
        this._cancelled = false;
        if (cc.isValid(this._node)) {
            var o = this._baseTileNode.context.gameView.nodeDragCardRoot;
            this._reparent(this._node, o);
            var n = this._node.position, i = e.isRight ? 24 : -24, r = cc.v3(n.x + i, n.y + 24, n.z);
            this._currentTween = cc.tween(this._node).to(0.05, {
                position: r
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
    Tile2ClearFromBoardToPosAni.prototype.onCancel = function () {
        this._cancelled = true;
        this._stopTween();
    };
    Tile2ClearFromBoardToPosAni.prototype.onInterrupt = function () {
        this._cancelled = true;
        this._stopTween();
    };
    Tile2ClearFromBoardToPosAni.prototype._stopTween = function () {
        var e;
        null === (e = this._currentTween) || void 0 === e || e.stop();
        this._currentTween = void 0;
    };
    return Tile2ClearFromBoardToPosAni;
}(Tile2AniActionBase_1.Tile2AniActionBase));
exports.Tile2ClearFromBoardToPosAni = Tile2ClearFromBoardToPosAni;

cc._RF.pop();
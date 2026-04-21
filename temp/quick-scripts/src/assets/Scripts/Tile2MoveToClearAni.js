"use strict";
cc._RF.push(module, 'eb4f9PPHDVL+7ToYoogOMms', 'Tile2MoveToClearAni');
// Scripts/Tile2MoveToClearAni.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2MoveToClearAni = void 0;
var Tile2AniActionBase_1 = require("./base/Tile2AniActionBase");
var Tile2MoveToClearAni = /** @class */ (function (_super) {
    __extends(Tile2MoveToClearAni, _super);
    function Tile2MoveToClearAni(t, o, n) {
        if (o === void 0) { o = 0.25; }
        if (n === void 0) { n = "quadIn"; }
        var _this = _super.call(this) || this;
        _this._node = null;
        _this._defaultDuration = null;
        _this._defaultEasing = null;
        _this._node = t;
        _this._defaultDuration = o;
        _this._defaultEasing = n;
        return _this;
    }
    Tile2MoveToClearAni.prototype.onPlay = function (e) {
        var t, o, n = this;
        if (cc.isValid(this._node) && e) {
            var i = this._toNodeSpace(e.worldPos);
            if (i) {
                var r = null !== (t = e.duration) && void 0 !== t ? t : this._defaultDuration, a = null !== (o = e.easing) && void 0 !== o ? o : this._defaultEasing;
                this._currentTween = cc.tween(this._node).to(r, {
                    position: i
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
    Tile2MoveToClearAni.prototype.onCancel = function () {
        this._stopTween();
    };
    Tile2MoveToClearAni.prototype.onInterrupt = function () {
        this._stopTween();
    };
    Tile2MoveToClearAni.prototype._stopTween = function () {
        var e;
        null === (e = this._currentTween) || void 0 === e || e.stop();
        this._currentTween = void 0;
    };
    Tile2MoveToClearAni.prototype._toNodeSpace = function (e) {
        if (!cc.isValid(this._node.parent))
            return null;
        var t = this._node.parent.convertToNodeSpaceAR(e);
        return cc.v3(t.x, t.y, this._node.position.z);
    };
    return Tile2MoveToClearAni;
}(Tile2AniActionBase_1.Tile2AniActionBase));
exports.Tile2MoveToClearAni = Tile2MoveToClearAni;

cc._RF.pop();
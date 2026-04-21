"use strict";
cc._RF.push(module, '6e17ddT8GhHX61IBUV6ub1U', 'DropNodeStateAni');
// Scripts/ani/DropNodeStateAni.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DropNodeStateAni = void 0;
var NodeStateAniBase_1 = require("../base/NodeStateAniBase");
var DropNodeStateAni = /** @class */ (function (_super) {
    __extends(DropNodeStateAni, _super);
    function DropNodeStateAni(t, o) {
        var _this = _super.call(this, t, "drop") || this;
        _this._baseTileNode = null;
        _this._baseTileNode = o;
        return _this;
    }
    DropNodeStateAni.prototype.onEnterStart = function (t) {
        var o = this;
        _super.prototype.onEnterStart.call(this, t);
        if (cc.isValid(this._node)) {
            this._currentTween && this._currentTween.stop();
            var n = this._baseTileNode.tileObject.getPosition();
            this._currentTween = cc.tween(this._node).to(0.56, {
                position: n
            }, {
                easing: "backOut"
            }).call(function () {
                o.onEnterEnd(t);
                o._currentTween = void 0;
            }).start();
        }
        else
            this.onEnterEnd(t);
    };
    DropNodeStateAni.prototype.onExitStart = function (t) {
        _super.prototype.onExitStart.call(this, t);
        this._currentTween && this._currentTween.stop();
        this.onExitEnd(t);
    };
    DropNodeStateAni.prototype.onEnter = function (t) {
        _super.prototype.onEnter.call(this, t);
        if (this._currentTween) {
            this._currentTween.stop();
            this._currentTween = void 0;
        }
        var o = this._baseTileNode.tileObject.getPosition();
        this._node.position = o;
    };
    DropNodeStateAni.prototype.onExit = function (t) {
        _super.prototype.onExit.call(this, t);
        if (this._currentTween) {
            this._currentTween.stop();
            this._currentTween = void 0;
        }
        var o = this._baseTileNode.tileObject.getPosition();
        this._node.position = o;
    };
    DropNodeStateAni.prototype.applyImmediate = function () {
        if (cc.isValid(this._node) && this._currentTween) {
            if (this._currentTween) {
                this._currentTween.stop();
                this._currentTween = void 0;
            }
            var e = this._baseTileNode.tileObject.getPosition();
            this._node.position = e;
            this.onExitEnd();
            this._onEnteredCallBack = null;
        }
    };
    return DropNodeStateAni;
}(NodeStateAniBase_1.NodeStateAniBase));
exports.DropNodeStateAni = DropNodeStateAni;

cc._RF.pop();
"use strict";
cc._RF.push(module, '22833QiFndN6ZGttVYu3RdX', 'FadeNodeStateAni');
// Scripts/tilenodes/fsm/ani/FadeNodeStateAni.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.FadeNodeStateAni = void 0;
var NodeStateAniBase_1 = require("../../../base/NodeStateAniBase");
var FadeNodeStateAni = /** @class */ (function (_super) {
    __extends(FadeNodeStateAni, _super);
    function FadeNodeStateAni(t, o) {
        var _this = _super.call(this, t, "fade") || this;
        _this._duration = 0.2;
        _this._easing = "";
        _this._baseTileNode = null;
        _this._baseTileNode = o;
        return _this;
    }
    FadeNodeStateAni.prototype.onEnterStart = function (t) {
        var o = this;
        _super.prototype.onEnterStart.call(this, t);
        if (cc.isValid(this._node)) {
            this._currentTween && this._currentTween.stop();
            this._currentTween = cc.tween(this._node).to(this._duration, {
                opacity: 255
            }).call(function () {
                o.onEnterEnd(t);
            }).start();
        }
        else
            this.onEnterEnd(t);
    };
    FadeNodeStateAni.prototype.onExitStart = function (t) {
        var o = this;
        _super.prototype.onExitStart.call(this, t);
        this._currentTween && this._currentTween.stop();
        this._currentTween = cc.tween(this._node).to(this._duration, {
            opacity: 0
        }).call(function () {
            o.onExitEnd(t);
        }).start();
    };
    FadeNodeStateAni.prototype.onEnter = function (t) {
        _super.prototype.onEnter.call(this, t);
        cc.isValid(this._node) && (this.node.opacity = 255);
    };
    FadeNodeStateAni.prototype.onExit = function (t) {
        _super.prototype.onExit.call(this, t);
        if (this._currentTween) {
            this._currentTween.stop();
            this._currentTween = void 0;
        }
        this.node.opacity = 0;
    };
    FadeNodeStateAni.prototype.applyImmediate = function () {
        if (cc.isValid(this._node) && this._currentTween) {
            this._currentTween.stop();
            this._currentTween = void 0;
        }
    };
    FadeNodeStateAni.prototype.reset = function () {
        if (this._currentTween) {
            this._currentTween.stop();
            this._currentTween = void 0;
        }
        this.node.opacity = 255;
        if (this._onEnteredCallBack) {
            this._onEnteredCallBack();
            this._onEnteredCallBack = void 0;
        }
    };
    return FadeNodeStateAni;
}(NodeStateAniBase_1.NodeStateAniBase));
exports.FadeNodeStateAni = FadeNodeStateAni;

cc._RF.pop();
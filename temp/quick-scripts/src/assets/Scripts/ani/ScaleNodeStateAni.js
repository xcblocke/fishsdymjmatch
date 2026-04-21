"use strict";
cc._RF.push(module, '7f5d1Y0GH9CnbYCf6J0eOqK', 'ScaleNodeStateAni');
// Scripts/ani/ScaleNodeStateAni.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ScaleNodeStateAni = void 0;
var NodeStateAniBase_1 = require("../base/NodeStateAniBase");
var ScaleNodeStateAni = /** @class */ (function (_super) {
    __extends(ScaleNodeStateAni, _super);
    function ScaleNodeStateAni(t, o) {
        var _this = _super.call(this, t, "scale") || this;
        _this._duration = 0.1;
        _this._easing = "";
        _this._baseTileNode = null;
        _this._baseTileNode = o;
        return _this;
    }
    ScaleNodeStateAni.prototype.getDuration = function () {
        return this._duration;
    };
    ScaleNodeStateAni.prototype.onEnterStart = function (t) {
        var o = this;
        _super.prototype.onEnterStart.call(this, t);
        if (cc.isValid(this._node)) {
            this._currentTween && this._currentTween.stop();
            var n = this._baseTileNode.getSelectedScale(), i = {
                scale: n
            };
            this._currentTween = cc.tween(this._node).to(this.getDuration(), i, this._easing ? {
                easing: this._easing
            } : {}).call(function () {
                o.onEnterEnd(n);
            }).start();
        }
    };
    ScaleNodeStateAni.prototype.onExitStart = function (t) {
        var o = this;
        _super.prototype.onExitStart.call(this, t);
        this._currentTween && this._currentTween.stop();
        this._currentTween = cc.tween(this._node).to(this.getDuration(), {
            scale: 1
        }, this._easing ? {
            easing: this._easing
        } : {}).call(function () {
            o.onExitEnd(t);
        }).start();
    };
    ScaleNodeStateAni.prototype.onEnter = function (t) {
        _super.prototype.onEnter.call(this, t);
        cc.isValid(this._node) && (this._node.scale = this._baseTileNode.getSelectedScale());
    };
    ScaleNodeStateAni.prototype.onExit = function (t) {
        _super.prototype.onExit.call(this, t);
        if (this._currentTween) {
            this._currentTween.stop();
            this._currentTween = void 0;
        }
        this.node.scale = 1;
    };
    ScaleNodeStateAni.prototype.applyImmediate = function (e) {
        cc.isValid(this._node) && (this._node.scale = e);
    };
    __decorate([
        mj.traitEvent("ScaleStateAni_duration")
    ], ScaleNodeStateAni.prototype, "getDuration", null);
    return ScaleNodeStateAni;
}(NodeStateAniBase_1.NodeStateAniBase));
exports.ScaleNodeStateAni = ScaleNodeStateAni;

cc._RF.pop();
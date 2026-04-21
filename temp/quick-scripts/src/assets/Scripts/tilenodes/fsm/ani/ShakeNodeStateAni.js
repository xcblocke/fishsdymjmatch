"use strict";
cc._RF.push(module, '2250dUwDq1AMZOjQvU3PA4l', 'ShakeNodeStateAni');
// Scripts/tilenodes/fsm/ani/ShakeNodeStateAni.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ShakeNodeStateAni = void 0;
var NodeStateAniBase_1 = require("../../../base/NodeStateAniBase");
var ShakeNodeStateAni = /** @class */ (function (_super) {
    __extends(ShakeNodeStateAni, _super);
    function ShakeNodeStateAni(t, o) {
        var _this = _super.call(this, t, "shake") || this;
        _this._duration = 0.05;
        _this._easing = "";
        _this._baseTileNode = null;
        _this._baseTileNode = o;
        return _this;
    }
    ShakeNodeStateAni.prototype.onEnterStart = function (t) {
        var o = this;
        _super.prototype.onEnterStart.call(this, t);
        if (cc.isValid(this._node)) {
            this._currentTween && this._currentTween.stop();
            var n = this.node.position.clone();
            this._currentTween = cc.tween(this._node).to(this._duration, {
                position: cc.v3(n.x + 5, n.y, n.z)
            }).to(this._duration, {
                position: cc.v3(n.x - 5, n.y, n.z)
            }).to(this._duration, {
                position: cc.v3(n.x + 5, n.y, n.z)
            }).to(this._duration, {
                position: cc.v3(n.x - 5, n.y, n.z)
            }).to(this._duration, {
                position: cc.v3(n.x, n.y, n.z)
            }).call(function () {
                o.onEnterEnd(t);
            }).start();
        }
        else
            this.onEnterEnd(t);
    };
    ShakeNodeStateAni.prototype.onExitStart = function (t) {
        _super.prototype.onExitStart.call(this, t);
        this._currentTween && this._currentTween.stop();
        this.node.position = cc.v3(0, 0, 0);
    };
    ShakeNodeStateAni.prototype.onEnter = function (t) {
        _super.prototype.onEnter.call(this, t);
        cc.isValid(this._node) && (this.node.position = cc.v3(0, 0, 0));
    };
    ShakeNodeStateAni.prototype.onExit = function (t) {
        _super.prototype.onExit.call(this, t);
        if (this._currentTween) {
            this._currentTween.stop();
            this._currentTween = void 0;
        }
        this.node.position = cc.v3(0, 0, 0);
    };
    ShakeNodeStateAni.prototype.applyImmediate = function () {
        if (cc.isValid(this._node) && this._currentTween) {
            this._currentTween.stop();
            this._currentTween = void 0;
        }
    };
    ShakeNodeStateAni.prototype.reset = function () {
        if (this._currentTween) {
            this._currentTween.stop();
            this._currentTween = void 0;
        }
        this.node.position = cc.v3(0, 0, 0);
        if (this._onEnteredCallBack) {
            this._onEnteredCallBack();
            this._onEnteredCallBack = void 0;
        }
    };
    return ShakeNodeStateAni;
}(NodeStateAniBase_1.NodeStateAniBase));
exports.ShakeNodeStateAni = ShakeNodeStateAni;

cc._RF.pop();
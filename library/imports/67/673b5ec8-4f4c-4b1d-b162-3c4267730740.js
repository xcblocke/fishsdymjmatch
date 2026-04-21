"use strict";
cc._RF.push(module, '673b57IT0xLHbFiPEJncwdA', 'FailMaskNodeStateAni');
// Scripts/tilenodes/fsm/ani/FailMaskNodeStateAni.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.FailMaskNodeStateAni = void 0;
var NodeStateAniBase_1 = require("../../../base/NodeStateAniBase");
var FailMaskNodeStateAni = /** @class */ (function (_super) {
    __extends(FailMaskNodeStateAni, _super);
    function FailMaskNodeStateAni(t, o, n) {
        if (n === void 0) { n = 0.7; }
        var _this = _super.call(this, t, "failmask") || this;
        _this._duration = 0.5;
        _this._delay = 0;
        _this._imgMask = null;
        _this._imgName = "imgFailMaskFadeOut";
        _this._baseTileNode = null;
        _this._baseTileNode = o;
        return _this;
    }
    FailMaskNodeStateAni.prototype.onEnterStart = function (t) {
        var o = this;
        _super.prototype.onEnterStart.call(this, t);
        if (cc.isValid(this._node)) {
            this._imgMask = this.createLockBg(this._baseTileNode);
            if (this._imgMask && cc.isValid(this._imgMask)) {
                if (this._currentTween) {
                    this._currentTween.stop();
                    this.removeImg();
                }
                this._imgMask.active = true;
                this._imgMask.opacity = 0;
                this._currentTween = cc.tween(this._imgMask).delay(this._delay).to(this._duration, {
                    opacity: 255
                }).call(function () {
                    o.onEnterEnd(t);
                }).start();
            }
            else
                this.onEnterEnd(t);
        }
        else
            this.onEnterEnd(t);
    };
    FailMaskNodeStateAni.prototype.createLockBg = function (e) {
        var t = null;
        if (cc.isValid(e.tileNode)) {
            var o = e.tileNode.getChildByName(this._imgName);
            o && (t = o);
        }
        t || (t = cc.instantiate(e.imgLockBg));
        t.setParent(e.tileNode);
        t.zIndex = e.imgLockBg.zIndex;
        var n = e.imgLockBg.parent.convertToWorldSpaceAR(e.imgLockBg.getPosition()), i = t.parent.convertToNodeSpaceAR(n);
        t.setPosition(i);
        t.name = this._imgName;
        return t;
    };
    FailMaskNodeStateAni.prototype.onExitStart = function (t) {
        _super.prototype.onExitStart.call(this, t);
        if (this._currentTween) {
            this._currentTween.stop();
            this._currentTween = void 0;
        }
        this.removeImg();
        this.onExitEnd(t);
    };
    FailMaskNodeStateAni.prototype.onEnter = function (t) {
        _super.prototype.onEnter.call(this, t);
        if (cc.isValid(this._node)) {
            var o = this._imgMask;
            if (o && cc.isValid(o)) {
                o.active = true;
                o.opacity = 255;
            }
        }
    };
    FailMaskNodeStateAni.prototype.onExit = function (t) {
        _super.prototype.onExit.call(this, t);
        if (this._currentTween) {
            this._currentTween.stop();
            this._currentTween = void 0;
        }
        this.removeImg();
    };
    FailMaskNodeStateAni.prototype.applyImmediate = function () {
        if (this._currentTween) {
            this._currentTween.stop();
            this._currentTween = void 0;
        }
        this.removeImg();
    };
    FailMaskNodeStateAni.prototype.reset = function () {
        if (this._currentTween) {
            this._currentTween.stop();
            this._currentTween = void 0;
        }
        this.removeImg();
        if (this._onEnteredCallBack) {
            this._onEnteredCallBack();
            this._onEnteredCallBack = void 0;
        }
    };
    FailMaskNodeStateAni.prototype.removeImg = function () {
        if (this._imgMask && cc.isValid(this._imgMask)) {
            cc.Tween.stopAllByTarget(this._imgMask);
            this._imgMask.destroy();
            this._imgMask = null;
        }
    };
    FailMaskNodeStateAni.prototype.forceHide = function () {
        if (this._imgMask && cc.isValid(this._imgMask)) {
            cc.Tween.stopAllByTarget(this._imgMask);
            this._imgMask.opacity = 0;
            this._imgMask.active = false;
        }
    };
    FailMaskNodeStateAni.prototype.forceShow = function () {
        if (this._imgMask && cc.isValid(this._imgMask)) {
            cc.Tween.stopAllByTarget(this._imgMask);
            this._imgMask.active = true;
            this._imgMask.opacity = 255;
        }
    };
    return FailMaskNodeStateAni;
}(NodeStateAniBase_1.NodeStateAniBase));
exports.FailMaskNodeStateAni = FailMaskNodeStateAni;

cc._RF.pop();
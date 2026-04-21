"use strict";
cc._RF.push(module, 'eb99eusK1tG648iOUSbfQ5Y', 'LockMaskNodeStateAni');
// Scripts/tilenodes/fsm/ani/LockMaskNodeStateAni.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.LockMaskNodeStateAni = void 0;
var NodeStateAniBase_1 = require("../../../base/NodeStateAniBase");
var LockMaskNodeStateAni = /** @class */ (function (_super) {
    __extends(LockMaskNodeStateAni, _super);
    function LockMaskNodeStateAni(t, o, n) {
        if (n === void 0) { n = 0.7; }
        var _this = _super.call(this, t, "lockMask") || this;
        _this._duration = 0.3;
        _this._delay = 0.7;
        _this._imgMask = null;
        _this._imgName = "imgMaskFadeOut";
        _this._baseTileNode = null;
        _this._baseTileNode = o;
        _this._delay = "number" == typeof n ? n : 0.7;
        return _this;
    }
    LockMaskNodeStateAni.prototype.onEnterStart = function (t) {
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
                this._imgMask.opacity = 255;
                cc.Tween.stopAllByTarget(this._imgMask);
                if (this._delay < 0) {
                    this.onEnterEnd(t);
                }
                else {
                    this._currentTween = cc.tween(this._imgMask).delay(this._delay).to(this._duration, {
                        opacity: 0
                    }).call(function () {
                        o.removeImg();
                        o.onEnterEnd(t);
                    }).start();
                }
            }
            else
                this.onEnterEnd(t);
        }
        else
            this.onEnterEnd(t);
    };
    LockMaskNodeStateAni.prototype.createLockBg = function (e) {
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
    LockMaskNodeStateAni.prototype.onExitStart = function (t) {
        _super.prototype.onExitStart.call(this, t);
        if (this._currentTween) {
            this._currentTween.stop();
            this._currentTween = void 0;
        }
        this.removeImg();
        this.onExitEnd(t);
    };
    LockMaskNodeStateAni.prototype.onEnter = function (t) {
        _super.prototype.onEnter.call(this, t);
        if (cc.isValid(this._node)) {
            var o = this._imgMask;
            if (o && cc.isValid(o)) {
                o.active = true;
                o.opacity = 255;
            }
        }
    };
    LockMaskNodeStateAni.prototype.onExit = function (t) {
        _super.prototype.onExit.call(this, t);
        if (this._currentTween) {
            this._currentTween.stop();
            this._currentTween = void 0;
        }
        this.removeImg();
    };
    LockMaskNodeStateAni.prototype.applyImmediate = function () {
        if (this._currentTween) {
            this._currentTween.stop();
            this._currentTween = void 0;
        }
        this.removeImg();
    };
    LockMaskNodeStateAni.prototype.reset = function () {
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
    LockMaskNodeStateAni.prototype.removeImg = function () {
        if (this._imgMask && cc.isValid(this._imgMask)) {
            cc.Tween.stopAllByTarget(this._imgMask);
            this._imgMask.destroy();
            this._imgMask = null;
        }
    };
    LockMaskNodeStateAni.prototype.forceHide = function () {
        if (this._imgMask && cc.isValid(this._imgMask)) {
            cc.Tween.stopAllByTarget(this._imgMask);
            this._imgMask.opacity = 0;
            this._imgMask.active = false;
        }
    };
    LockMaskNodeStateAni.prototype.forceShow = function () {
        if (this._imgMask && cc.isValid(this._imgMask)) {
            cc.Tween.stopAllByTarget(this._imgMask);
            this._imgMask.active = true;
            this._imgMask.opacity = 255;
        }
    };
    return LockMaskNodeStateAni;
}(NodeStateAniBase_1.NodeStateAniBase));
exports.LockMaskNodeStateAni = LockMaskNodeStateAni;

cc._RF.pop();
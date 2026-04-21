"use strict";
cc._RF.push(module, 'e547ek1xQtJFJWgPGG3ydTQ', 'SelectLoopNodeStateAni');
// Scripts/ani/SelectLoopNodeStateAni.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectLoopNodeStateAni = void 0;
var NodeStateAniBase_1 = require("../base/NodeStateAniBase");
var SelectLoopNodeStateAni = /** @class */ (function (_super) {
    __extends(SelectLoopNodeStateAni, _super);
    function SelectLoopNodeStateAni(t, o) {
        var _this = _super.call(this, t, "selectLoop") || this;
        _this._isLooping = false;
        _this._originalY = 0;
        _this._moveUpOffset = 8;
        _this._upDuration = 0.66;
        _this._downDuration = 0.66;
        _this._baseTileNode = null;
        _this._baseTileNode = o;
        return _this;
    }
    SelectLoopNodeStateAni.prototype.configure = function (e) {
        if (e) {
            void 0 !== e.moveUpOffset && (this._moveUpOffset = e.moveUpOffset);
            void 0 !== e.upDuration && (this._upDuration = e.upDuration);
            void 0 !== e.downDuration && (this._downDuration = e.downDuration);
        }
    };
    SelectLoopNodeStateAni.prototype.onEnterStart = function (t) {
        _super.prototype.onEnterStart.call(this, t);
        if (cc.isValid(this._node)) {
            this._currentTween && this._currentTween.stop();
            this._originalY = this._node.y;
            this._isLooping = true;
            t && "object" == typeof t && this.configure(t);
            this.playLoopAnimation();
            this.onEnterEnd(t);
        }
        else
            this.onEnterEnd(t);
    };
    SelectLoopNodeStateAni.prototype.playLoopAnimation = function () {
        var e = this;
        if (cc.isValid(this._node) && this._isLooping) {
            var t = this._originalY + this._moveUpOffset;
            this._currentTween = cc.tween(this._node).to(this._upDuration, {
                y: t
            }, {
                easing: "sineInOut"
            }).to(this._downDuration, {
                y: this._originalY
            }, {
                easing: "sineInOut"
            }).call(function () {
                e._isLooping && e.playLoopAnimation();
            }).start();
        }
    };
    SelectLoopNodeStateAni.prototype.onExitStart = function (t) {
        _super.prototype.onExitStart.call(this, t);
        this._isLooping = false;
        if (this._currentTween) {
            this._currentTween.stop();
            this._currentTween = void 0;
        }
        if (cc.isValid(this._node)) {
            this._node.y = this._originalY;
            this.onExitEnd(t);
        }
        else
            this.onExitEnd(t);
    };
    SelectLoopNodeStateAni.prototype.onEnter = function (t) {
        _super.prototype.onEnter.call(this, t);
        if (cc.isValid(this._node)) {
            this._originalY = this._node.y;
            this._isLooping = true;
            this.playLoopAnimation();
        }
    };
    SelectLoopNodeStateAni.prototype.onExit = function (t) {
        _super.prototype.onExit.call(this, t);
        this._isLooping = false;
        if (this._currentTween) {
            this._currentTween.stop();
            this._currentTween = null;
        }
        cc.isValid(this._node) && (this._node.y = this._originalY);
    };
    SelectLoopNodeStateAni.prototype.applyImmediate = function () {
        if (cc.isValid(this._node)) {
            this._isLooping = false;
            if (this._currentTween) {
                this._currentTween.stop();
                this._currentTween = void 0;
            }
            this._node.y = this._originalY;
        }
    };
    SelectLoopNodeStateAni.prototype.isLooping = function () {
        return this._isLooping;
    };
    return SelectLoopNodeStateAni;
}(NodeStateAniBase_1.NodeStateAniBase));
exports.SelectLoopNodeStateAni = SelectLoopNodeStateAni;

cc._RF.pop();
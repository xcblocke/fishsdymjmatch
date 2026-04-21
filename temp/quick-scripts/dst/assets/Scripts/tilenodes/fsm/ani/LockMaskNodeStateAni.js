
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/tilenodes/fsm/ani/LockMaskNodeStateAni.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3RpbGVub2Rlcy9mc20vYW5pL0xvY2tNYXNrTm9kZVN0YXRlQW5pLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUVBQWtFO0FBQ2xFO0lBQTBDLHdDQUFnQjtJQU14RCw4QkFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQU87UUFBUCxrQkFBQSxFQUFBLE9BQU87UUFBekIsWUFDRSxrQkFBTSxDQUFDLEVBQUUsVUFBVSxDQUFDLFNBR3JCO1FBVEQsZUFBUyxHQUFHLEdBQUcsQ0FBQztRQUNoQixZQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2IsY0FBUSxHQUFHLElBQUksQ0FBQztRQUNoQixjQUFRLEdBQUcsZ0JBQWdCLENBQUM7UUFDNUIsbUJBQWEsR0FBRyxJQUFJLENBQUM7UUFHbkIsS0FBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDdkIsS0FBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDOztJQUMvQyxDQUFDO0lBQ0QsMkNBQVksR0FBWixVQUFhLENBQUM7UUFDWixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixpQkFBTSxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdEQsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUM5QyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7b0JBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMs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ZW50IjpbImltcG9ydCB7IE5vZGVTdGF0ZUFuaUJhc2UgfSBmcm9tICcuLi8uLi8uLi9iYXNlL05vZGVTdGF0ZUFuaUJhc2UnO1xuZXhwb3J0IGNsYXNzIExvY2tNYXNrTm9kZVN0YXRlQW5pIGV4dGVuZHMgTm9kZVN0YXRlQW5pQmFzZSB7XG4gIF9kdXJhdGlvbiA9IDAuMztcbiAgX2RlbGF5ID0gMC43O1xuICBfaW1nTWFzayA9IG51bGw7XG4gIF9pbWdOYW1lID0gXCJpbWdNYXNrRmFkZU91dFwiO1xuICBfYmFzZVRpbGVOb2RlID0gbnVsbDtcbiAgY29uc3RydWN0b3IodCwgbywgbiA9IDAuNykge1xuICAgIHN1cGVyKHQsIFwibG9ja01hc2tcIik7XG4gICAgdGhpcy5fYmFzZVRpbGVOb2RlID0gbztcbiAgICB0aGlzLl9kZWxheSA9IFwibnVtYmVyXCIgPT0gdHlwZW9mIG4gPyBuIDogMC43O1xuICB9XG4gIG9uRW50ZXJTdGFydCh0KSB7XG4gICAgdmFyIG8gPSB0aGlzO1xuICAgIHN1cGVyLm9uRW50ZXJTdGFydC5jYWxsKHRoaXMsIHQpO1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuX25vZGUpKSB7XG4gICAgICB0aGlzLl9pbWdNYXNrID0gdGhpcy5jcmVhdGVMb2NrQmcodGhpcy5fYmFzZVRpbGVOb2RlKTtcbiAgICAgIGlmICh0aGlzLl9pbWdNYXNrICYmIGNjLmlzVmFsaWQodGhpcy5faW1nTWFzaykpIHtcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRUd2Vlbikge1xuICAgICAgICAgIHRoaXMuX2N1cnJlbnRUd2Vlbi5zdG9wKCk7XG4gICAgICAgICAgdGhpcy5yZW1vdmVJbWcoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pbWdNYXNrLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuX2ltZ01hc2sub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuX2ltZ01hc2spO1xuICAgICAgICBpZiAodGhpcy5fZGVsYXkgPCAwKSB7XG4gICAgICAgICAgdGhpcy5vbkVudGVyRW5kKHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2N1cnJlbnRUd2VlbiA9IGNjLnR3ZWVuKHRoaXMuX2ltZ01hc2spLmRlbGF5KHRoaXMuX2RlbGF5KS50byh0aGlzLl9kdXJhdGlvbiwge1xuICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgby5yZW1vdmVJbWcoKTtcbiAgICAgICAgICAgIG8ub25FbnRlckVuZCh0KTtcbiAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgdGhpcy5vbkVudGVyRW5kKHQpO1xuICAgIH0gZWxzZSB0aGlzLm9uRW50ZXJFbmQodCk7XG4gIH1cbiAgY3JlYXRlTG9ja0JnKGUpIHtcbiAgICB2YXIgdCA9IG51bGw7XG4gICAgaWYgKGNjLmlzVmFsaWQoZS50aWxlTm9kZSkpIHtcbiAgICAgIHZhciBvID0gZS50aWxlTm9kZS5nZXRDaGlsZEJ5TmFtZSh0aGlzLl9pbWdOYW1lKTtcbiAgICAgIG8gJiYgKHQgPSBvKTtcbiAgICB9XG4gICAgdCB8fCAodCA9IGNjLmluc3RhbnRpYXRlKGUuaW1nTG9ja0JnKSk7XG4gICAgdC5zZXRQYXJlbnQoZS50aWxlTm9kZSk7XG4gICAgdC56SW5kZXggPSBlLmltZ0xvY2tCZy56SW5kZXg7XG4gICAgdmFyIG4gPSBlLmltZ0xvY2tCZy5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGUuaW1nTG9ja0JnLmdldFBvc2l0aW9uKCkpLFxuICAgICAgaSA9IHQucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKG4pO1xuICAgIHQuc2V0UG9zaXRpb24oaSk7XG4gICAgdC5uYW1lID0gdGhpcy5faW1nTmFtZTtcbiAgICByZXR1cm4gdDtcbiAgfVxuICBvbkV4aXRTdGFydCh0KSB7XG4gICAgc3VwZXIub25FeGl0U3RhcnQuY2FsbCh0aGlzLCB0KTtcbiAgICBpZiAodGhpcy5fY3VycmVudFR3ZWVuKSB7XG4gICAgICB0aGlzLl9jdXJyZW50VHdlZW4uc3RvcCgpO1xuICAgICAgdGhpcy5fY3VycmVudFR3ZWVuID0gdm9pZCAwO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZUltZygpO1xuICAgIHRoaXMub25FeGl0RW5kKHQpO1xuICB9XG4gIG9uRW50ZXIodCkge1xuICAgIHN1cGVyLm9uRW50ZXIuY2FsbCh0aGlzLCB0KTtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLl9ub2RlKSkge1xuICAgICAgdmFyIG8gPSB0aGlzLl9pbWdNYXNrO1xuICAgICAgaWYgKG8gJiYgY2MuaXNWYWxpZChvKSkge1xuICAgICAgICBvLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIG8ub3BhY2l0eSA9IDI1NTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25FeGl0KHQpIHtcbiAgICBzdXBlci5vbkV4aXQuY2FsbCh0aGlzLCB0KTtcbiAgICBpZiAodGhpcy5fY3VycmVudFR3ZWVuKSB7XG4gICAgICB0aGlzLl9jdXJyZW50VHdlZW4uc3RvcCgpO1xuICAgICAgdGhpcy5fY3VycmVudFR3ZWVuID0gdm9pZCAwO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZUltZygpO1xuICB9XG4gIGFwcGx5SW1tZWRpYXRlKCkge1xuICAgIGlmICh0aGlzLl9jdXJyZW50VHdlZW4pIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRUd2Vlbi5zdG9wKCk7XG4gICAgICB0aGlzLl9jdXJyZW50VHdlZW4gPSB2b2lkIDA7XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlSW1nKCk7XG4gIH1cbiAgcmVzZXQoKSB7XG4gICAgaWYgKHRoaXMuX2N1cnJlbnRUd2Vlbikge1xuICAgICAgdGhpcy5fY3VycmVudFR3ZWVuLnN0b3AoKTtcbiAgICAgIHRoaXMuX2N1cnJlbnRUd2VlbiA9IHZvaWQgMDtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVJbWcoKTtcbiAgICBpZiAodGhpcy5fb25FbnRlcmVkQ2FsbEJhY2spIHtcbiAgICAgIHRoaXMuX29uRW50ZXJlZENhbGxCYWNrKCk7XG4gICAgICB0aGlzLl9vbkVudGVyZWRDYWxsQmFjayA9IHZvaWQgMDtcbiAgICB9XG4gIH1cbiAgcmVtb3ZlSW1nKCkge1xuICAgIGlmICh0aGlzLl9pbWdNYXNrICYmIGNjLmlzVmFsaWQodGhpcy5faW1nTWFzaykpIHtcbiAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLl9pbWdNYXNrKTtcbiAgICAgIHRoaXMuX2ltZ01hc2suZGVzdHJveSgpO1xuICAgICAgdGhpcy5faW1nTWFzayA9IG51bGw7XG4gICAgfVxuICB9XG4gIGZvcmNlSGlkZSgpIHtcbiAgICBpZiAodGhpcy5faW1nTWFzayAmJiBjYy5pc1ZhbGlkKHRoaXMuX2ltZ01hc2spKSB7XG4gICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5faW1nTWFzayk7XG4gICAgICB0aGlzLl9pbWdNYXNrLm9wYWNpdHkgPSAwO1xuICAgICAgdGhpcy5faW1nTWFzay5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yY2VTaG93KCkge1xuICAgIGlmICh0aGlzLl9pbWdNYXNrICYmIGNjLmlzVmFsaWQodGhpcy5faW1nTWFzaykpIHtcbiAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLl9pbWdNYXNrKTtcbiAgICAgIHRoaXMuX2ltZ01hc2suYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2ltZ01hc2sub3BhY2l0eSA9IDI1NTtcbiAgICB9XG4gIH1cbn0iXX0=
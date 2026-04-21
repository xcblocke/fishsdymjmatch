
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/tilenodes/fsm/ani/FailMaskNodeStateAni.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3RpbGVub2Rlcy9mc20vYW5pL0ZhaWxNYXNrTm9kZVN0YXRlQW5pLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUVBQWtFO0FBQ2xFO0lBQTBDLHdDQUFnQjtJQU14RCw4QkFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQU87UUFBUCxrQkFBQSxFQUFBLE9BQU87UUFBekIsWUFDRSxrQkFBTSxDQUFDLEVBQUUsVUFBVSxDQUFDLFNBRXJCO1FBUkQsZUFBUyxHQUFHLEdBQUcsQ0FBQztRQUNoQixZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsY0FBUSxHQUFHLElBQUksQ0FBQztRQUNoQixjQUFRLEdBQUcsb0JBQW9CLENBQUM7UUFDaEMsbUJBQWEsR0FBRyxJQUFJLENBQUM7UUFHbkIsS0FBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7O0lBQ3pCLENBQUM7SUFDRCwyQ0FBWSxHQUFaLFVBQWEsQ0FBQztRQUNaLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLGlCQUFNLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN0RCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzlDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtvQkFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDMUIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2lCQUNsQjtnQkFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJ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QVMsR0FBVDtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUM5QyxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUM5QjtJQUNILENBQUM7SUFDRCx3Q0FBUyxHQUFUO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzlDLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0EvR0EsQUErR0MsQ0EvR3lDLG1DQUFnQixHQStHekQ7QUEvR1ksb0RBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTm9kZVN0YXRlQW5pQmFzZSB9IGZyb20gJy4uLy4uLy4uL2Jhc2UvTm9kZVN0YXRlQW5pQmFzZSc7XG5leHBvcnQgY2xhc3MgRmFpbE1hc2tOb2RlU3RhdGVBbmkgZXh0ZW5kcyBOb2RlU3RhdGVBbmlCYXNlIHtcbiAgX2R1cmF0aW9uID0gMC41O1xuICBfZGVsYXkgPSAwO1xuICBfaW1nTWFzayA9IG51bGw7XG4gIF9pbWdOYW1lID0gXCJpbWdGYWlsTWFza0ZhZGVPdXRcIjtcbiAgX2Jhc2VUaWxlTm9kZSA9IG51bGw7XG4gIGNvbnN0cnVjdG9yKHQsIG8sIG4gPSAwLjcpIHtcbiAgICBzdXBlcih0LCBcImZhaWxtYXNrXCIpO1xuICAgIHRoaXMuX2Jhc2VUaWxlTm9kZSA9IG87XG4gIH1cbiAgb25FbnRlclN0YXJ0KHQpIHtcbiAgICB2YXIgbyA9IHRoaXM7XG4gICAgc3VwZXIub25FbnRlclN0YXJ0LmNhbGwodGhpcywgdCk7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5fbm9kZSkpIHtcbiAgICAgIHRoaXMuX2ltZ01hc2sgPSB0aGlzLmNyZWF0ZUxvY2tCZyh0aGlzLl9iYXNlVGlsZU5vZGUpO1xuICAgICAgaWYgKHRoaXMuX2ltZ01hc2sgJiYgY2MuaXNWYWxpZCh0aGlzLl9pbWdNYXNrKSkge1xuICAgICAgICBpZiAodGhpcy5fY3VycmVudFR3ZWVuKSB7XG4gICAgICAgICAgdGhpcy5fY3VycmVudFR3ZWVuLnN0b3AoKTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUltZygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2ltZ01hc2suYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5faW1nTWFzay5vcGFjaXR5ID0gMDtcbiAgICAgICAgdGhpcy5fY3VycmVudFR3ZWVuID0gY2MudHdlZW4odGhpcy5faW1nTWFzaykuZGVsYXkodGhpcy5fZGVsYXkpLnRvKHRoaXMuX2R1cmF0aW9uLCB7XG4gICAgICAgICAgb3BhY2l0eTogMjU1XG4gICAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIG8ub25FbnRlckVuZCh0KTtcbiAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgIH0gZWxzZSB0aGlzLm9uRW50ZXJFbmQodCk7XG4gICAgfSBlbHNlIHRoaXMub25FbnRlckVuZCh0KTtcbiAgfVxuICBjcmVhdGVMb2NrQmcoZSkge1xuICAgIHZhciB0ID0gbnVsbDtcbiAgICBpZiAoY2MuaXNWYWxpZChlLnRpbGVOb2RlKSkge1xuICAgICAgdmFyIG8gPSBlLnRpbGVOb2RlLmdldENoaWxkQnlOYW1lKHRoaXMuX2ltZ05hbWUpO1xuICAgICAgbyAmJiAodCA9IG8pO1xuICAgIH1cbiAgICB0IHx8ICh0ID0gY2MuaW5zdGFudGlhdGUoZS5pbWdMb2NrQmcpKTtcbiAgICB0LnNldFBhcmVudChlLnRpbGVOb2RlKTtcbiAgICB0LnpJbmRleCA9IGUuaW1nTG9ja0JnLnpJbmRleDtcbiAgICB2YXIgbiA9IGUuaW1nTG9ja0JnLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoZS5pbWdMb2NrQmcuZ2V0UG9zaXRpb24oKSksXG4gICAgICBpID0gdC5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIobik7XG4gICAgdC5zZXRQb3NpdGlvbihpKTtcbiAgICB0Lm5hbWUgPSB0aGlzLl9pbWdOYW1lO1xuICAgIHJldHVybiB0O1xuICB9XG4gIG9uRXhpdFN0YXJ0KHQpIHtcbiAgICBzdXBlci5vbkV4aXRTdGFydC5jYWxsKHRoaXMsIHQpO1xuICAgIGlmICh0aGlzLl9jdXJyZW50VHdlZW4pIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRUd2Vlbi5zdG9wKCk7XG4gICAgICB0aGlzLl9jdXJyZW50VHdlZW4gPSB2b2lkIDA7XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlSW1nKCk7XG4gICAgdGhpcy5vbkV4aXRFbmQodCk7XG4gIH1cbiAgb25FbnRlcih0KSB7XG4gICAgc3VwZXIub25FbnRlci5jYWxsKHRoaXMsIHQpO1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuX25vZGUpKSB7XG4gICAgICB2YXIgbyA9IHRoaXMuX2ltZ01hc2s7XG4gICAgICBpZiAobyAmJiBjYy5pc1ZhbGlkKG8pKSB7XG4gICAgICAgIG8uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgby5vcGFjaXR5ID0gMjU1O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbkV4aXQodCkge1xuICAgIHN1cGVyLm9uRXhpdC5jYWxsKHRoaXMsIHQpO1xuICAgIGlmICh0aGlzLl9jdXJyZW50VHdlZW4pIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRUd2Vlbi5zdG9wKCk7XG4gICAgICB0aGlzLl9jdXJyZW50VHdlZW4gPSB2b2lkIDA7XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlSW1nKCk7XG4gIH1cbiAgYXBwbHlJbW1lZGlhdGUoKSB7XG4gICAgaWYgKHRoaXMuX2N1cnJlbnRUd2Vlbikge1xuICAgICAgdGhpcy5fY3VycmVudFR3ZWVuLnN0b3AoKTtcbiAgICAgIHRoaXMuX2N1cnJlbnRUd2VlbiA9IHZvaWQgMDtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVJbWcoKTtcbiAgfVxuICByZXNldCgpIHtcbiAgICBpZiAodGhpcy5fY3VycmVudFR3ZWVuKSB7XG4gICAgICB0aGlzLl9jdXJyZW50VHdlZW4uc3RvcCgpO1xuICAgICAgdGhpcy5fY3VycmVudFR3ZWVuID0gdm9pZCAwO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZUltZygpO1xuICAgIGlmICh0aGlzLl9vbkVudGVyZWRDYWxsQmFjaykge1xuICAgICAgdGhpcy5fb25FbnRlcmVkQ2FsbEJhY2soKTtcbiAgICAgIHRoaXMuX29uRW50ZXJlZENhbGxCYWNrID0gdm9pZCAwO1xuICAgIH1cbiAgfVxuICByZW1vdmVJbWcoKSB7XG4gICAgaWYgKHRoaXMuX2ltZ01hc2sgJiYgY2MuaXNWYWxpZCh0aGlzLl9pbWdNYXNrKSkge1xuICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuX2ltZ01hc2spO1xuICAgICAgdGhpcy5faW1nTWFzay5kZXN0cm95KCk7XG4gICAgICB0aGlzLl9pbWdNYXNrID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgZm9yY2VIaWRlKCkge1xuICAgIGlmICh0aGlzLl9pbWdNYXNrICYmIGNjLmlzVmFsaWQodGhpcy5faW1nTWFzaykpIHtcbiAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLl9pbWdNYXNrKTtcbiAgICAgIHRoaXMuX2ltZ01hc2sub3BhY2l0eSA9IDA7XG4gICAgICB0aGlzLl9pbWdNYXNrLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3JjZVNob3coKSB7XG4gICAgaWYgKHRoaXMuX2ltZ01hc2sgJiYgY2MuaXNWYWxpZCh0aGlzLl9pbWdNYXNrKSkge1xuICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuX2ltZ01hc2spO1xuICAgICAgdGhpcy5faW1nTWFzay5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5faW1nTWFzay5vcGFjaXR5ID0gMjU1O1xuICAgIH1cbiAgfVxufSJdfQ==
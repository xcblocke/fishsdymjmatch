
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_dianZanStep/Scripts/DianZanClearTimeTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e4a471UZtlEQqEJaT5Q/tQj', 'DianZanClearTimeTrait');
// subpackages/l_dianZanStep/Scripts/DianZanClearTimeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DianZanClearTimeTrait = /** @class */ (function (_super) {
    __extends(DianZanClearTimeTrait, _super);
    function DianZanClearTimeTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._lastClearTimestamp = 0;
        _this._currSkData = null;
        _this._triggerDianZan = false;
        _this._currentLevel = 1;
        _this._lastTriggered = false;
        _this._isPlayDianZan = false;
        return _this;
    }
    Object.defineProperty(DianZanClearTimeTrait.prototype, "bundleName", {
        get: function () {
            var t;
            return (null === (t = this.traitData) || void 0 === t ? void 0 : t.spineBundle) || "l_dianZanStep";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DianZanClearTimeTrait.prototype, "matchNum", {
        get: function () {
            var t, e;
            return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.matchNum) && void 0 !== e ? e : 2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DianZanClearTimeTrait.prototype, "clearTime", {
        get: function () {
            var t, e;
            return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.clearTime) && void 0 !== e ? e : 6;
        },
        enumerable: false,
        configurable: true
    });
    DianZanClearTimeTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DianZanClearTimeTrait.prototype.getMessageListeners = function () {
        var _t = {};
        _t[GameEvent_1.EGameEvent.Effect_InitView] = this.onEffectInitViewCB.bind(this);
        return _t;
    };
    DianZanClearTimeTrait.prototype.onEffectInitViewCB = function () {
        this._lastClearTimestamp = Date.now();
        this._currentLevel = 1;
        this._lastTriggered = false;
        this._triggerDianZan = false;
        this._isPlayDianZan = false;
    };
    DianZanClearTimeTrait.prototype.onIptRestart_excute = function (t, e) {
        this._currentLevel = 1;
        this._lastTriggered = false;
        e();
    };
    DianZanClearTimeTrait.prototype.onFailBhv_start = function (t, e) {
        this._currentLevel = 1;
        this._lastTriggered = false;
        e();
    };
    DianZanClearTimeTrait.prototype.onWinVw_showWinVw = function (t, e) {
        this._currentLevel = 1;
        this._lastTriggered = false;
        e();
    };
    DianZanClearTimeTrait.prototype.onDCWinVw_showWinVw = function (t, e) {
        this._currentLevel = 1;
        this._lastTriggered = false;
        e();
    };
    DianZanClearTimeTrait.prototype.onTLWinVw_showTLWinVw = function (t, e) {
        this._currentLevel = 1;
        this._lastTriggered = false;
        e();
    };
    DianZanClearTimeTrait.prototype.onInitViewBhv_crtTls = function (t, e) {
        var r, i;
        this.loadSpine(null === (i = null === (r = t.ins) || void 0 === r ? void 0 : r.context) || void 0 === i ? void 0 : i.gameCtr);
        e();
    };
    DianZanClearTimeTrait.prototype.loadSpine = function (t) {
        var e, r = this;
        if (t && "function" == typeof t.loadRes) {
            var i = (null === (e = this.traitData) || void 0 === e ? void 0 : e.spinePath) || "spine/gamplay_doubleLikes";
            this._currSkData = null;
            t.loadRes(i, sp.SkeletonData, this.bundleName).then(function (t) {
                var e = Array.isArray(t) ? t[0] : t;
                r._currSkData = e || null;
            }).catch(function () {
                r._currSkData = null;
            });
        }
    };
    DianZanClearTimeTrait.prototype.checkBeforeMatchNum = function (t) {
        return t <= this.matchNum;
    };
    DianZanClearTimeTrait.prototype.checkInterval = function () {
        return (Date.now() - this._lastClearTimestamp) / 1000 <= this.clearTime;
    };
    DianZanClearTimeTrait.prototype.onDianZanTt_checkDZ = function (t, e) {
        var r, i = null !== (r = t.ins._beforeClearMatchNum) && void 0 !== r ? r : 0, n = this.checkBeforeMatchNum(i), a = this.checkInterval(), o = n && a;
        this._lastClearTimestamp = Date.now();
        if (o) {
            if (this._isPlayDianZan) {
                this._currentLevel = Math.min(3, this._currentLevel + 1);
            }
            else {
                this._currentLevel = 1;
            }
            this._lastTriggered = true;
            this._triggerDianZan = true;
        }
        else {
            this._lastTriggered;
            this._currentLevel = 1;
            this._lastTriggered = false;
            this._triggerDianZan = false;
        }
        this._isPlayDianZan = false;
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            returnVal: o
        });
    };
    DianZanClearTimeTrait.prototype.onDianZanItem_initComp = function (t, e) {
        var r;
        if (this._triggerDianZan) {
            var i = null === (r = t.ins) || void 0 === r ? void 0 : r._spineAnim, n = this._currSkData;
            if (n && i && i.skeletonData !== n) {
                i.clearTracks();
                i.setToSetupPose();
                i.skeletonData = n;
            }
            e();
        }
        else
            e();
    };
    DianZanClearTimeTrait.prototype.onDianZanBhv_getAniName = function (t, e) {
        if (this._triggerDianZan) {
            if (this._currSkData) {
                this._isPlayDianZan = true;
                var r = "in_" + (this._currentLevel || 1);
                e({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.jump,
                    returnVal: r
                });
            }
            else
                e();
        }
        else
            e();
    };
    DianZanClearTimeTrait.prototype.onDianZanTt_checkDZSpecial = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: true
        });
    };
    DianZanClearTimeTrait.traitKey = "DianZanClearTime";
    DianZanClearTimeTrait = __decorate([
        mj.trait,
        mj.class("DianZanClearTimeTrait")
    ], DianZanClearTimeTrait);
    return DianZanClearTimeTrait;
}(Trait_1.default));
exports.default = DianZanClearTimeTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RpYW5aYW5TdGVwL1NjcmlwdHMvRGlhblphbkNsZWFyVGltZVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyRUFBMkU7QUFDM0UsOEVBQXdGO0FBQ3hGLGdFQUEyRDtBQUczRDtJQUFtRCx5Q0FBSztJQUF4RDtRQUFBLHFFQWtKQztRQWpKQyx5QkFBbUIsR0FBRyxDQUFDLENBQUM7UUFDeEIsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIscUJBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsbUJBQWEsR0FBRyxDQUFDLENBQUM7UUFDbEIsb0JBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsb0JBQWMsR0FBRyxLQUFLLENBQUM7O0lBNEl6QixDQUFDO0lBMUlDLHNCQUFJLDZDQUFVO2FBQWQ7WUFDRSxJQUFJLENBQUMsQ0FBQztZQUNOLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxlQUFlLENBQUM7UUFDckcsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSwyQ0FBUTthQUFaO1lBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ1QsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwSCxDQUFD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O2FBQ0o7O2dCQUFNLENBQUMsRUFBRSxDQUFDO1NBQ1o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0QsMERBQTBCLEdBQTFCLFVBQTJCLENBQUMsRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQztZQUNBLE9BQU8sRUFBRSxJQUFJO1lBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07WUFDMUMsU0FBUyxFQUFFLElBQUk7U0FDaEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQTFJTSw4QkFBUSxHQUFHLGtCQUFrQixDQUFDO0lBUGxCLHFCQUFxQjtRQUZ6QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUM7T0FDYixxQkFBcUIsQ0FrSnpDO0lBQUQsNEJBQUM7Q0FsSkQsQUFrSkMsQ0FsSmtELGVBQUssR0FrSnZEO2tCQWxKb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUdhbWVFdmVudCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVFdmVudCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJEaWFuWmFuQ2xlYXJUaW1lVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpYW5aYW5DbGVhclRpbWVUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2xhc3RDbGVhclRpbWVzdGFtcCA9IDA7XG4gIF9jdXJyU2tEYXRhID0gbnVsbDtcbiAgX3RyaWdnZXJEaWFuWmFuID0gZmFsc2U7XG4gIF9jdXJyZW50TGV2ZWwgPSAxO1xuICBfbGFzdFRyaWdnZXJlZCA9IGZhbHNlO1xuICBfaXNQbGF5RGlhblphbiA9IGZhbHNlO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkRpYW5aYW5DbGVhclRpbWVcIjtcbiAgZ2V0IGJ1bmRsZU5hbWUoKSB7XG4gICAgdmFyIHQ7XG4gICAgcmV0dXJuIChudWxsID09PSAodCA9IHRoaXMudHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LnNwaW5lQnVuZGxlKSB8fCBcImxfZGlhblphblN0ZXBcIjtcbiAgfVxuICBnZXQgbWF0Y2hOdW0oKSB7XG4gICAgdmFyIHQsIGU7XG4gICAgcmV0dXJuIG51bGwgIT09IChlID0gbnVsbCA9PT0gKHQgPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5tYXRjaE51bSkgJiYgdm9pZCAwICE9PSBlID8gZSA6IDI7XG4gIH1cbiAgZ2V0IGNsZWFyVGltZSgpIHtcbiAgICB2YXIgdCwgZTtcbiAgICByZXR1cm4gbnVsbCAhPT0gKGUgPSBudWxsID09PSAodCA9IHRoaXMudHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmNsZWFyVGltZSkgJiYgdm9pZCAwICE9PSBlID8gZSA6IDY7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIGdldE1lc3NhZ2VMaXN0ZW5lcnMoKSB7XG4gICAgdmFyIF90ID0ge307XG4gICAgX3RbRUdhbWVFdmVudC5FZmZlY3RfSW5pdFZpZXddID0gdGhpcy5vbkVmZmVjdEluaXRWaWV3Q0IuYmluZCh0aGlzKTtcbiAgICByZXR1cm4gX3Q7XG4gIH1cbiAgb25FZmZlY3RJbml0Vmlld0NCKCkge1xuICAgIHRoaXMuX2xhc3RDbGVhclRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gICAgdGhpcy5fY3VycmVudExldmVsID0gMTtcbiAgICB0aGlzLl9sYXN0VHJpZ2dlcmVkID0gZmFsc2U7XG4gICAgdGhpcy5fdHJpZ2dlckRpYW5aYW4gPSBmYWxzZTtcbiAgICB0aGlzLl9pc1BsYXlEaWFuWmFuID0gZmFsc2U7XG4gIH1cbiAgb25JcHRSZXN0YXJ0X2V4Y3V0ZSh0LCBlKSB7XG4gICAgdGhpcy5fY3VycmVudExldmVsID0gMTtcbiAgICB0aGlzLl9sYXN0VHJpZ2dlcmVkID0gZmFsc2U7XG4gICAgZSgpO1xuICB9XG4gIG9uRmFpbEJodl9zdGFydCh0LCBlKSB7XG4gICAgdGhpcy5fY3VycmVudExldmVsID0gMTtcbiAgICB0aGlzLl9sYXN0VHJpZ2dlcmVkID0gZmFsc2U7XG4gICAgZSgpO1xuICB9XG4gIG9uV2luVndfc2hvd1dpblZ3KHQsIGUpIHtcbiAgICB0aGlzLl9jdXJyZW50TGV2ZWwgPSAxO1xuICAgIHRoaXMuX2xhc3RUcmlnZ2VyZWQgPSBmYWxzZTtcbiAgICBlKCk7XG4gIH1cbiAgb25EQ1dpblZ3X3Nob3dXaW5Wdyh0LCBlKSB7XG4gICAgdGhpcy5fY3VycmVudExldmVsID0gMTtcbiAgICB0aGlzLl9sYXN0VHJpZ2dlcmVkID0gZmFsc2U7XG4gICAgZSgpO1xuICB9XG4gIG9uVExXaW5Wd19zaG93VExXaW5Wdyh0LCBlKSB7XG4gICAgdGhpcy5fY3VycmVudExldmVsID0gMTtcbiAgICB0aGlzLl9sYXN0VHJpZ2dlcmVkID0gZmFsc2U7XG4gICAgZSgpO1xuICB9XG4gIG9uSW5pdFZpZXdCaHZfY3J0VGxzKHQsIGUpIHtcbiAgICB2YXIgciwgaTtcbiAgICB0aGlzLmxvYWRTcGluZShudWxsID09PSAoaSA9IG51bGwgPT09IChyID0gdC5pbnMpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIuY29udGV4dCkgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5nYW1lQ3RyKTtcbiAgICBlKCk7XG4gIH1cbiAgbG9hZFNwaW5lKHQpIHtcbiAgICB2YXIgZSxcbiAgICAgIHIgPSB0aGlzO1xuICAgIGlmICh0ICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdC5sb2FkUmVzKSB7XG4gICAgICB2YXIgaSA9IChudWxsID09PSAoZSA9IHRoaXMudHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLnNwaW5lUGF0aCkgfHwgXCJzcGluZS9nYW1wbGF5X2RvdWJsZUxpa2VzXCI7XG4gICAgICB0aGlzLl9jdXJyU2tEYXRhID0gbnVsbDtcbiAgICAgIHQubG9hZFJlcyhpLCBzcC5Ta2VsZXRvbkRhdGEsIHRoaXMuYnVuZGxlTmFtZSkudGhlbihmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IEFycmF5LmlzQXJyYXkodCkgPyB0WzBdIDogdDtcbiAgICAgICAgci5fY3VyclNrRGF0YSA9IGUgfHwgbnVsbDtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgci5fY3VyclNrRGF0YSA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgY2hlY2tCZWZvcmVNYXRjaE51bSh0KSB7XG4gICAgcmV0dXJuIHQgPD0gdGhpcy5tYXRjaE51bTtcbiAgfVxuICBjaGVja0ludGVydmFsKCkge1xuICAgIHJldHVybiAoRGF0ZS5ub3coKSAtIHRoaXMuX2xhc3RDbGVhclRpbWVzdGFtcCkgLyAxMDAwIDw9IHRoaXMuY2xlYXJUaW1lO1xuICB9XG4gIG9uRGlhblphblR0X2NoZWNrRFoodCwgZSkge1xuICAgIHZhciByLFxuICAgICAgaSA9IG51bGwgIT09IChyID0gdC5pbnMuX2JlZm9yZUNsZWFyTWF0Y2hOdW0pICYmIHZvaWQgMCAhPT0gciA/IHIgOiAwLFxuICAgICAgbiA9IHRoaXMuY2hlY2tCZWZvcmVNYXRjaE51bShpKSxcbiAgICAgIGEgPSB0aGlzLmNoZWNrSW50ZXJ2YWwoKSxcbiAgICAgIG8gPSBuICYmIGE7XG4gICAgdGhpcy5fbGFzdENsZWFyVGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICBpZiAobykge1xuICAgICAgaWYgKHRoaXMuX2lzUGxheURpYW5aYW4pIHtcbiAgICAgICAgdGhpcy5fY3VycmVudExldmVsID0gTWF0aC5taW4oMywgdGhpcy5fY3VycmVudExldmVsICsgMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9jdXJyZW50TGV2ZWwgPSAxO1xuICAgICAgfVxuICAgICAgdGhpcy5fbGFzdFRyaWdnZXJlZCA9IHRydWU7XG4gICAgICB0aGlzLl90cmlnZ2VyRGlhblphbiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2xhc3RUcmlnZ2VyZWQ7XG4gICAgICB0aGlzLl9jdXJyZW50TGV2ZWwgPSAxO1xuICAgICAgdGhpcy5fbGFzdFRyaWdnZXJlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fdHJpZ2dlckRpYW5aYW4gPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5faXNQbGF5RGlhblphbiA9IGZhbHNlO1xuICAgIGUoe1xuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXAsXG4gICAgICByZXR1cm5WYWw6IG9cbiAgICB9KTtcbiAgfVxuICBvbkRpYW5aYW5JdGVtX2luaXRDb21wKHQsIGUpIHtcbiAgICB2YXIgcjtcbiAgICBpZiAodGhpcy5fdHJpZ2dlckRpYW5aYW4pIHtcbiAgICAgIHZhciBpID0gbnVsbCA9PT0gKHIgPSB0LmlucykgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5fc3BpbmVBbmltLFxuICAgICAgICBuID0gdGhpcy5fY3VyclNrRGF0YTtcbiAgICAgIGlmIChuICYmIGkgJiYgaS5za2VsZXRvbkRhdGEgIT09IG4pIHtcbiAgICAgICAgaS5jbGVhclRyYWNrcygpO1xuICAgICAgICBpLnNldFRvU2V0dXBQb3NlKCk7XG4gICAgICAgIGkuc2tlbGV0b25EYXRhID0gbjtcbiAgICAgIH1cbiAgICAgIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIG9uRGlhblphbkJodl9nZXRBbmlOYW1lKHQsIGUpIHtcbiAgICBpZiAodGhpcy5fdHJpZ2dlckRpYW5aYW4pIHtcbiAgICAgIGlmICh0aGlzLl9jdXJyU2tEYXRhKSB7XG4gICAgICAgIHRoaXMuX2lzUGxheURpYW5aYW4gPSB0cnVlO1xuICAgICAgICB2YXIgciA9IFwiaW5fXCIgKyAodGhpcy5fY3VycmVudExldmVsIHx8IDEpO1xuICAgICAgICBlKHtcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXAsXG4gICAgICAgICAgcmV0dXJuVmFsOiByXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIG9uRGlhblphblR0X2NoZWNrRFpTcGVjaWFsKHQsIGUpIHtcbiAgICBlKHtcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICByZXR1cm5WYWw6IHRydWVcbiAgICB9KTtcbiAgfVxufSJdfQ==
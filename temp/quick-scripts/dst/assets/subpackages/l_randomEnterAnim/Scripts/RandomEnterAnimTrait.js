
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_randomEnterAnim/Scripts/RandomEnterAnimTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4e9fdcuXgdOdIG1lhVM8aFa', 'RandomEnterAnimTrait');
// subpackages/l_randomEnterAnim/Scripts/RandomEnterAnimTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var EnterAnimationManager_1 = require("../../../Scripts/animation/manager/EnterAnimationManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var RandomEnterAnimTrait = /** @class */ (function (_super) {
    __extends(RandomEnterAnimTrait, _super);
    function RandomEnterAnimTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RandomEnterAnimTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.localData.strategies = this.localData.strategies || {};
        this.registerEvent([{
                event: "IptT2SetLv_selEnterAnim"
            }]);
    };
    RandomEnterAnimTrait.prototype.getCurrentGameType = function () {
        return UserModel_1.default.getInstance().getCurrentGameType();
    };
    RandomEnterAnimTrait.prototype.getStrategy = function () {
        var t = this.getCurrentGameType();
        return this.localData.strategies[t] || "";
    };
    RandomEnterAnimTrait.prototype.saveStrategy = function (t) {
        var e = this.getCurrentGameType();
        this.localData.strategies[e] = t;
        this.localData.strategies = this.localData.strategies;
    };
    RandomEnterAnimTrait.prototype.selectRandomStrategy = function (t) {
        return t[Math.floor(Math.random() * t.length)];
    };
    RandomEnterAnimTrait.prototype.onIptSetLv_selEnterAnim = function (t, e) {
        this.handleSelectEnterAnim(t, e);
    };
    RandomEnterAnimTrait.prototype.onIptT2SetLv_selEnterAnim = function (t, e) {
        this.handleSelectEnterAnim(t, e);
    };
    RandomEnterAnimTrait.prototype.handleSelectEnterAnim = function (t, e) {
        var r, n;
        try {
            var a = EnterAnimationManager_1.EnterAnimationManager.getInstance(), i = a.getAvailableStrategies();
            if (0 === i.length)
                return;
            var s = null !== (r = this._traitData.randomOnReplay) && void 0 !== r && r;
            null !== (n = this._traitData.enableTopMaskEnter) && void 0 !== n && n || (i = i.filter(function (t) {
                return "TopMaskEnter" !== t;
            }));
            if (0 === i.length)
                return;
            var c = t.args[0], l = t.args[1], p = void 0;
            if (c && !l || l && s) {
                p = this.selectRandomStrategy(i);
                this.saveStrategy(p);
            }
            else
                p = this.getStrategy();
            p && a.setStrategy(p);
        }
        catch (t) { }
        finally {
            e();
        }
    };
    RandomEnterAnimTrait.prototype.onEnterAniBhv_startPlay = function (t, e) {
        try {
            t.ins.playEnterAnimation();
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.jump
            });
        }
        catch (t) {
            e();
        }
    };
    RandomEnterAnimTrait.traitKey = "RandomEnterAnim";
    RandomEnterAnimTrait = __decorate([
        mj.trait,
        mj.class("RandomEnterAnimTrait")
    ], RandomEnterAnimTrait);
    return RandomEnterAnimTrait;
}(Trait_1.default));
exports.default = RandomEnterAnimTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmRvbUVudGVyQW5pbS9TY3JpcHRzL1JhbmRvbUVudGVyQW5pbVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrR0FBaUc7QUFDakcsc0VBQWlFO0FBQ2pFLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFHeEY7SUFBa0Qsd0NBQUs7SUFBdkQ7O0lBK0RBLENBQUM7SUE3REMscUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO1FBQzVELElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDbEIsS0FBSyxFQUFFLHlCQUF5QjthQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDRCxpREFBa0IsR0FBbEI7UUFDRSxPQUFPLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0lBQ0QsMENBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFDRCwyQ0FBWSxHQUFaLFVBQWEsQ0FBQztRQUNaLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztJQUN4RCxDQUFDO0lBQ0QsbURBQW9CLEdBQXBCLFVB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RW50ZXJBbmltYXRpb25NYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9hbmltYXRpb24vbWFuYWdlci9FbnRlckFuaW1hdGlvbk1hbmFnZXInO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlJhbmRvbUVudGVyQW5pbVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5kb21FbnRlckFuaW1UcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJSYW5kb21FbnRlckFuaW1cIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMubG9jYWxEYXRhLnN0cmF0ZWdpZXMgPSB0aGlzLmxvY2FsRGF0YS5zdHJhdGVnaWVzIHx8IHt9O1xuICAgIHRoaXMucmVnaXN0ZXJFdmVudChbe1xuICAgICAgZXZlbnQ6IFwiSXB0VDJTZXRMdl9zZWxFbnRlckFuaW1cIlxuICAgIH1dKTtcbiAgfVxuICBnZXRDdXJyZW50R2FtZVR5cGUoKSB7XG4gICAgcmV0dXJuIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpO1xuICB9XG4gIGdldFN0cmF0ZWd5KCkge1xuICAgIHZhciB0ID0gdGhpcy5nZXRDdXJyZW50R2FtZVR5cGUoKTtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuc3RyYXRlZ2llc1t0XSB8fCBcIlwiO1xuICB9XG4gIHNhdmVTdHJhdGVneSh0KSB7XG4gICAgdmFyIGUgPSB0aGlzLmdldEN1cnJlbnRHYW1lVHlwZSgpO1xuICAgIHRoaXMubG9jYWxEYXRhLnN0cmF0ZWdpZXNbZV0gPSB0O1xuICAgIHRoaXMubG9jYWxEYXRhLnN0cmF0ZWdpZXMgPSB0aGlzLmxvY2FsRGF0YS5zdHJhdGVnaWVzO1xuICB9XG4gIHNlbGVjdFJhbmRvbVN0cmF0ZWd5KHQpIHtcbiAgICByZXR1cm4gdFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0Lmxlbmd0aCldO1xuICB9XG4gIG9uSXB0U2V0THZfc2VsRW50ZXJBbmltKHQsIGUpIHtcbiAgICB0aGlzLmhhbmRsZVNlbGVjdEVudGVyQW5pbSh0LCBlKTtcbiAgfVxuICBvbklwdFQyU2V0THZfc2VsRW50ZXJBbmltKHQsIGUpIHtcbiAgICB0aGlzLmhhbmRsZVNlbGVjdEVudGVyQW5pbSh0LCBlKTtcbiAgfVxuICBoYW5kbGVTZWxlY3RFbnRlckFuaW0odCwgZSkge1xuICAgIHZhciByLCBuO1xuICAgIHRyeSB7XG4gICAgICB2YXIgYSA9IEVudGVyQW5pbWF0aW9uTWFuYWdlci5nZXRJbnN0YW5jZSgpLFxuICAgICAgICBpID0gYS5nZXRBdmFpbGFibGVTdHJhdGVnaWVzKCk7XG4gICAgICBpZiAoMCA9PT0gaS5sZW5ndGgpIHJldHVybjtcbiAgICAgIHZhciBzID0gbnVsbCAhPT0gKHIgPSB0aGlzLl90cmFpdERhdGEucmFuZG9tT25SZXBsYXkpICYmIHZvaWQgMCAhPT0gciAmJiByO1xuICAgICAgbnVsbCAhPT0gKG4gPSB0aGlzLl90cmFpdERhdGEuZW5hYmxlVG9wTWFza0VudGVyKSAmJiB2b2lkIDAgIT09IG4gJiYgbiB8fCAoaSA9IGkuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBcIlRvcE1hc2tFbnRlclwiICE9PSB0O1xuICAgICAgfSkpO1xuICAgICAgaWYgKDAgPT09IGkubGVuZ3RoKSByZXR1cm47XG4gICAgICB2YXIgYyA9IHQuYXJnc1swXSxcbiAgICAgICAgbCA9IHQuYXJnc1sxXSxcbiAgICAgICAgcCA9IHZvaWQgMDtcbiAgICAgIGlmIChjICYmICFsIHx8IGwgJiYgcykge1xuICAgICAgICBwID0gdGhpcy5zZWxlY3RSYW5kb21TdHJhdGVneShpKTtcbiAgICAgICAgdGhpcy5zYXZlU3RyYXRlZ3kocCk7XG4gICAgICB9IGVsc2UgcCA9IHRoaXMuZ2V0U3RyYXRlZ3koKTtcbiAgICAgIHAgJiYgYS5zZXRTdHJhdGVneShwKTtcbiAgICB9IGNhdGNoICh0KSB7fSBmaW5hbGx5IHtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbiAgb25FbnRlckFuaUJodl9zdGFydFBsYXkodCwgZSkge1xuICAgIHRyeSB7XG4gICAgICB0Lmlucy5wbGF5RW50ZXJBbmltYXRpb24oKTtcbiAgICAgIGUoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wXG4gICAgICB9KTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG59Il19
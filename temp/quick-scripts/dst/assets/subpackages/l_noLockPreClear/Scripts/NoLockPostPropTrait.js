
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_noLockPreClear/Scripts/NoLockPostPropTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5a79dC02z1A5Z2jI8tn70U+', 'NoLockPostPropTrait');
// subpackages/l_noLockPreClear/Scripts/NoLockPostPropTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var NoLockPostPropTrait = /** @class */ (function (_super) {
    __extends(NoLockPostPropTrait, _super);
    function NoLockPostPropTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isPostPropUsage = false;
        return _this;
    }
    NoLockPostPropTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    NoLockPostPropTrait.prototype.onGameData_chgShuffle = function (t, r) {
        var e;
        (null === (e = t.args) || void 0 === e ? void 0 : e[0]) < 0 && (this._isPostPropUsage = true);
        r();
    };
    NoLockPostPropTrait.prototype.onGameData_chgHitTips = function (t, r) {
        var e;
        (null === (e = t.args) || void 0 === e ? void 0 : e[0]) < 0 && (this._isPostPropUsage = true);
        r();
    };
    NoLockPostPropTrait.prototype.onClearBhv_collision = function (t, r) {
        this._isPostPropUsage && (this._isPostPropUsage = false);
        r();
    };
    NoLockPostPropTrait.prototype.onMainGameCtrl_vwLoad = function (t, r) {
        this._isPostPropUsage = false;
        r();
    };
    NoLockPostPropTrait.prototype.onGsListener_onReplayGame = function (t, r) {
        this._isPostPropUsage = false;
        r();
    };
    NoLockPostPropTrait.prototype.onNoLockPreClr_isEnabled = function (t, r) {
        if (this._isPostPropUsage) {
            r({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: true
            });
        }
        else {
            r();
        }
    };
    NoLockPostPropTrait.traitKey = "NoLockPostProp";
    NoLockPostPropTrait = __decorate([
        mj.trait,
        mj.class("NoLockPostPropTrait")
    ], NoLockPostPropTrait);
    return NoLockPostPropTrait;
}(Trait_1.default));
exports.default = NoLockPostPropTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX25vTG9ja1ByZUNsZWFyL1NjcmlwdHMvTm9Mb2NrUG9zdFByb3BUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUd4RjtJQUFpRCx1Q0FBSztJQUF0RDtRQUFBLHFFQXVDQztRQXRDQyxzQkFBZ0IsR0FBRyxLQUFLLENBQUM7O0lBc0MzQixDQUFDO0lBcENDLG9DQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxtREFBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLENBQUM7UUFDTixDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxDQUFDO1FBQzlGLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELG1EQUFxQixHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsQ0FBQztRQUNOLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDOUYsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0Qsa0RBQW9CLEdBQXBCLFVBQXFCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUN6RCxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxtREFBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCx1REFBeUIsR0FBekIsVUFBMEIsQ0FBQyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxzREFBd0IsR0FBeEIsVUFBeUIsQ0FBQyxFQUFFLENBQUM7UUFDM0IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsQ0FBQyxDQUFDO2dCQUNBLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO2dCQUMxQyxTQUFTLEVBQUUsSUFBSTthQUNoQixDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsQ0FBQyxFQUFFLENBQUM7U0FDTDtJQUNILENBQUM7SUFwQ00sNEJBQVEsR0FBRyxnQkFBZ0IsQ0FBQztJQUZoQixtQkFBbUI7UUFGdkMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDO09BQ1gsbUJBQW1CLENBdUN2QztJQUFELDBCQUFDO0NBdkNELEFBdUNDLENBdkNnRCxlQUFLLEdBdUNyRDtrQkF2Q29CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIk5vTG9ja1Bvc3RQcm9wVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vTG9ja1Bvc3RQcm9wVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9pc1Bvc3RQcm9wVXNhZ2UgPSBmYWxzZTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJOb0xvY2tQb3N0UHJvcFwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25HYW1lRGF0YV9jaGdTaHVmZmxlKHQsIHIpIHtcbiAgICB2YXIgZTtcbiAgICAobnVsbCA9PT0gKGUgPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGVbMF0pIDwgMCAmJiAodGhpcy5faXNQb3N0UHJvcFVzYWdlID0gdHJ1ZSk7XG4gICAgcigpO1xuICB9XG4gIG9uR2FtZURhdGFfY2hnSGl0VGlwcyh0LCByKSB7XG4gICAgdmFyIGU7XG4gICAgKG51bGwgPT09IChlID0gdC5hcmdzKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlWzBdKSA8IDAgJiYgKHRoaXMuX2lzUG9zdFByb3BVc2FnZSA9IHRydWUpO1xuICAgIHIoKTtcbiAgfVxuICBvbkNsZWFyQmh2X2NvbGxpc2lvbih0LCByKSB7XG4gICAgdGhpcy5faXNQb3N0UHJvcFVzYWdlICYmICh0aGlzLl9pc1Bvc3RQcm9wVXNhZ2UgPSBmYWxzZSk7XG4gICAgcigpO1xuICB9XG4gIG9uTWFpbkdhbWVDdHJsX3Z3TG9hZCh0LCByKSB7XG4gICAgdGhpcy5faXNQb3N0UHJvcFVzYWdlID0gZmFsc2U7XG4gICAgcigpO1xuICB9XG4gIG9uR3NMaXN0ZW5lcl9vblJlcGxheUdhbWUodCwgcikge1xuICAgIHRoaXMuX2lzUG9zdFByb3BVc2FnZSA9IGZhbHNlO1xuICAgIHIoKTtcbiAgfVxuICBvbk5vTG9ja1ByZUNscl9pc0VuYWJsZWQodCwgcikge1xuICAgIGlmICh0aGlzLl9pc1Bvc3RQcm9wVXNhZ2UpIHtcbiAgICAgIHIoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIHJldHVyblZhbDogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHIoKTtcbiAgICB9XG4gIH1cbn0iXX0=
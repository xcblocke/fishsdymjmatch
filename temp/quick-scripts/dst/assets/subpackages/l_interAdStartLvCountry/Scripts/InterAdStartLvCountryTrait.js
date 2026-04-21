
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_interAdStartLvCountry/Scripts/InterAdStartLvCountryTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '195a8PguoFH1ZxrL4O494k2', 'InterAdStartLvCountryTrait');
// subpackages/l_interAdStartLvCountry/Scripts/InterAdStartLvCountryTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var LoginModel_1 = require("../../../Scripts/gamePlay/login/model/LoginModel");
var InterAdStartLvCountryTrait = /** @class */ (function (_super) {
    __extends(InterAdStartLvCountryTrait, _super);
    function InterAdStartLvCountryTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._startLevel = -1;
        return _this;
    }
    Object.defineProperty(InterAdStartLvCountryTrait.prototype, "country", {
        get: function () {
            return LoginModel_1.default.getInstance().country || "";
        },
        enumerable: false,
        configurable: true
    });
    InterAdStartLvCountryTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._startLevel = this._resolveStartLevel();
    };
    InterAdStartLvCountryTrait.prototype._resolveStartLevel = function () {
        var t, r = null === (t = this._traitData) || void 0 === t ? void 0 : t.countryLevels;
        if (!r || "object" != typeof r)
            return -1;
        var e = this.country.toUpperCase();
        return void 0 !== r[e] ? r[e] : void 0 !== r.default ? r.default : -1;
    };
    InterAdStartLvCountryTrait.prototype.onInterAdStart_getStartLv = function (t, r) {
        if (this._startLevel <= 0) {
            r();
        }
        else {
            r({
                returnVal: this._startLevel,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
    };
    InterAdStartLvCountryTrait.traitKey = "InterAdStartLvCountry";
    InterAdStartLvCountryTrait = __decorate([
        mj.trait,
        mj.class("InterAdStartLvCountryTrait")
    ], InterAdStartLvCountryTrait);
    return InterAdStartLvCountryTrait;
}(Trait_1.default));
exports.default = InterAdStartLvCountryTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2ludGVyQWRTdGFydEx2Q291bnRyeS9TY3JpcHRzL0ludGVyQWRTdGFydEx2Q291bnRyeVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLCtFQUEwRTtBQUcxRTtJQUF3RCw4Q0FBSztJQUE3RDtRQUFBLHFFQTJCQztRQTFCQyxpQkFBVyxHQUFHLENBQUMsQ0FBQyxDQUFDOztJQTBCbkIsQ0FBQztJQXhCQyxzQkFBSSwrQ0FBTzthQUFYO1lBQ0UsT0FBTyxvQkFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDaEQsQ0FBQzs7O09BQUE7SUFDRCwyQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFDRCx1REFBa0IsR0FBbEI7UUFDRSxJQUFJLENBQUMsRUFDSCxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO1FBQ2hGLElBQUksQ0FBQyxDQUFDLElBQUksUUFBUSxJQUFJLE9BQU8sQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQyxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBQ0QsOERBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLEVBQUU7WUFDekIsQ0FBQyxFQUFFLENBQUM7U0FDTDthQUFNO1lBQ0wsQ0FBQyxDQUFDO2dCQUNBLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVztnQkFDM0IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07YUFDM0MsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBeEJNLG1DQUFRLEdBQUcsdUJBQXVCLENBQUM7SUFGdkIsMEJBQTBCO1FBRjlDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQztPQUNsQiwwQkFBMEIsQ0EyQjlDO0lBQUQsaUNBQUM7Q0EzQkQsQUEyQkMsQ0EzQnVELGVBQUssR0EyQjVEO2tCQTNCb0IsMEJBQTBCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBMb2dpbk1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvbG9naW4vbW9kZWwvTG9naW5Nb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkludGVyQWRTdGFydEx2Q291bnRyeVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlckFkU3RhcnRMdkNvdW50cnlUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX3N0YXJ0TGV2ZWwgPSAtMTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJJbnRlckFkU3RhcnRMdkNvdW50cnlcIjtcbiAgZ2V0IGNvdW50cnkoKSB7XG4gICAgcmV0dXJuIExvZ2luTW9kZWwuZ2V0SW5zdGFuY2UoKS5jb3VudHJ5IHx8IFwiXCI7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3N0YXJ0TGV2ZWwgPSB0aGlzLl9yZXNvbHZlU3RhcnRMZXZlbCgpO1xuICB9XG4gIF9yZXNvbHZlU3RhcnRMZXZlbCgpIHtcbiAgICB2YXIgdCxcbiAgICAgIHIgPSBudWxsID09PSAodCA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5jb3VudHJ5TGV2ZWxzO1xuICAgIGlmICghciB8fCBcIm9iamVjdFwiICE9IHR5cGVvZiByKSByZXR1cm4gLTE7XG4gICAgdmFyIGUgPSB0aGlzLmNvdW50cnkudG9VcHBlckNhc2UoKTtcbiAgICByZXR1cm4gdm9pZCAwICE9PSByW2VdID8gcltlXSA6IHZvaWQgMCAhPT0gci5kZWZhdWx0ID8gci5kZWZhdWx0IDogLTE7XG4gIH1cbiAgb25JbnRlckFkU3RhcnRfZ2V0U3RhcnRMdih0LCByKSB7XG4gICAgaWYgKHRoaXMuX3N0YXJ0TGV2ZWwgPD0gMCkge1xuICAgICAgcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICByKHtcbiAgICAgICAgcmV0dXJuVmFsOiB0aGlzLl9zdGFydExldmVsLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSJdfQ==
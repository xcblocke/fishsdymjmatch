
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_dynamicCurve/Scripts/DynamicCurveTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7ca20ntdu5JaphzgqN5YPAq', 'DynamicCurveTrait');
// subpackages/l_dynamicCurve/Scripts/DynamicCurveTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DynamicCurve_1 = require("../../../Scripts/types/DynamicCurve");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var DynamicCurveTrait = /** @class */ (function (_super) {
    __extends(DynamicCurveTrait, _super);
    function DynamicCurveTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DynamicCurveTrait.prototype, "isOpen", {
        get: function () {
            var e, t;
            return null === (t = null === (e = this.traitData) || void 0 === e ? void 0 : e.isOpen) || void 0 === t || t;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicCurveTrait.prototype, "isPreLoad", {
        get: function () {
            var e, t;
            return null !== (t = null === (e = this.traitData) || void 0 === e ? void 0 : e.preLoad) && void 0 !== t && t;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicCurveTrait.prototype, "forceLoaded", {
        get: function () {
            var e, t;
            return null !== (t = null === (e = this.traitData) || void 0 === e ? void 0 : e.forceLoaded) && void 0 !== t && t;
        },
        enumerable: false,
        configurable: true
    });
    DynamicCurveTrait.prototype.onDCMgr_isEnabled = function (e, t) {
        t({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: this.isOpen
        });
    };
    DynamicCurveTrait.prototype.onLoginM_enterGame = function (e, t) {
        if (this.isOpen) {
            DynamicCurve_1.default.instance.init();
            if (this.isPreLoad) {
                if (this.forceLoaded)
                    DynamicCurve_1.default.instance.preLoadLevelLibrary().then(function () {
                        t();
                    }).catch(function () {
                        t();
                    });
                else {
                    DynamicCurve_1.default.instance.preLoadLevelLibrary();
                    t();
                }
            }
            else
                t();
        }
        else
            t();
    };
    DynamicCurveTrait.traitKey = "DynamicCurve";
    DynamicCurveTrait = __decorate([
        mj.trait,
        mj.class("DynamicCurveTrait")
    ], DynamicCurveTrait);
    return DynamicCurveTrait;
}(Trait_1.default));
exports.default = DynamicCurveTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2R5bmFtaWNDdXJ2ZS9TY3JpcHRzL0R5bmFtaWNDdXJ2ZVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvRUFBK0Q7QUFDL0QsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUd4RjtJQUErQyxxQ0FBSztJQUFwRDs7SUFvQ0EsQ0FBQztJQWxDQyxzQkFBSSxxQ0FBTTthQUFWO1lBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ1QsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvRyxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLHdDQUFTO2FBQWI7WUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDVCxPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hILENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksMENBQVc7YUFBZjtZQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNULE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEgsQ0FBQzs7O09BQUE7SUFDRCw2Q0FBaUIsR0FBakIsVUFBa0IsQ0FBQyxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDO1lBQ0EsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07WUFDMUMsT0FBTyxFQUFFLElBQUk7WUFDYixTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDdkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELDhDQUFrQixHQUFsQixVQUFtQixDQUFDLEVBQUUsQ0FBQztRQUNyQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixzQkFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM3QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xCLElBQUksSUFBSSxDQUFDLFdBQVc7b0JBQUUsc0JBQVksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0JBQ3JFLENBQUMsRUFBRSxDQUFDO29CQUNOLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzt3QkFDUCxDQUFDLEVBQUUsQ0FBQztvQkFDTixDQUFDLENBQUMsQ0FBQztxQkFBSztvQkFDTixzQkFBWSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO29CQUM1QyxDQUFDLEVBQUUsQ0FBQztpQkFDTDthQUNGOztnQkFBTSxDQUFDLEVBQUUsQ0FBQztTQUNaOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQWxDTSwwQkFBUSxHQUFHLGNBQWMsQ0FBQztJQURkLGlCQUFpQjtRQUZyQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUM7T0FDVCxpQkFBaUIsQ0FvQ3JDO0lBQUQsd0JBQUM7Q0FwQ0QsQUFvQ0MsQ0FwQzhDLGVBQUssR0FvQ25EO2tCQXBDb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IER5bmFtaWNDdXJ2ZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL3R5cGVzL0R5bmFtaWNDdXJ2ZSc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJEeW5hbWljQ3VydmVUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHluYW1pY0N1cnZlVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiRHluYW1pY0N1cnZlXCI7XG4gIGdldCBpc09wZW4oKSB7XG4gICAgdmFyIGUsIHQ7XG4gICAgcmV0dXJuIG51bGwgPT09ICh0ID0gbnVsbCA9PT0gKGUgPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5pc09wZW4pIHx8IHZvaWQgMCA9PT0gdCB8fCB0O1xuICB9XG4gIGdldCBpc1ByZUxvYWQoKSB7XG4gICAgdmFyIGUsIHQ7XG4gICAgcmV0dXJuIG51bGwgIT09ICh0ID0gbnVsbCA9PT0gKGUgPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5wcmVMb2FkKSAmJiB2b2lkIDAgIT09IHQgJiYgdDtcbiAgfVxuICBnZXQgZm9yY2VMb2FkZWQoKSB7XG4gICAgdmFyIGUsIHQ7XG4gICAgcmV0dXJuIG51bGwgIT09ICh0ID0gbnVsbCA9PT0gKGUgPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5mb3JjZUxvYWRlZCkgJiYgdm9pZCAwICE9PSB0ICYmIHQ7XG4gIH1cbiAgb25EQ01ncl9pc0VuYWJsZWQoZSwgdCkge1xuICAgIHQoe1xuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblZhbDogdGhpcy5pc09wZW5cbiAgICB9KTtcbiAgfVxuICBvbkxvZ2luTV9lbnRlckdhbWUoZSwgdCkge1xuICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgRHluYW1pY0N1cnZlLmluc3RhbmNlLmluaXQoKTtcbiAgICAgIGlmICh0aGlzLmlzUHJlTG9hZCkge1xuICAgICAgICBpZiAodGhpcy5mb3JjZUxvYWRlZCkgRHluYW1pY0N1cnZlLmluc3RhbmNlLnByZUxvYWRMZXZlbExpYnJhcnkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0KCk7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0KCk7XG4gICAgICAgIH0pO2Vsc2Uge1xuICAgICAgICAgIER5bmFtaWNDdXJ2ZS5pbnN0YW5jZS5wcmVMb2FkTGV2ZWxMaWJyYXJ5KCk7XG4gICAgICAgICAgdCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgdCgpO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbn0iXX0=
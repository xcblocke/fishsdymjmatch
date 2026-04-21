
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_journey/Scripts/PassedLevelTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6f88bFgRbFJNrJCNCsyhr0s', 'PassedLevelTrait');
// subpackages/l_journey/Scripts/PassedLevelTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TravelGameModel_1 = require("../../../Scripts/gamePlay/travel/model/TravelGameModel");
var PassedLevelTrait = /** @class */ (function (_super) {
    __extends(PassedLevelTrait, _super);
    function PassedLevelTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PassedLevelTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    PassedLevelTrait.prototype.onJourney_IsSessionEnd = function (t, e) {
        var r = TravelGameModel_1.default.getInstance(), o = !r.isSessionActive(), n = r.isComplete(r.getCurJourney()), i = o || n;
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: i
        });
    };
    PassedLevelTrait.traitKey = "PassedLevel";
    PassedLevelTrait = __decorate([
        mj.trait,
        mj.class("PassedLevelTrait")
    ], PassedLevelTrait);
    return PassedLevelTrait;
}(Trait_1.default));
exports.default = PassedLevelTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2pvdXJuZXkvU2NyaXB0cy9QYXNzZWRMZXZlbFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLDBGQUFxRjtBQUdyRjtJQUE4QyxvQ0FBSztJQUFuRDs7SUFnQkEsQ0FBQztJQWRDLGlDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxpREFBc0IsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLEdBQUcseUJBQWUsQ0FBQyxXQUFXLEVBQUUsRUFDbkMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxFQUN4QixDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMsRUFDbkMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDYixDQUFDLENBQUM7WUFDQSxPQUFPLEVBQUUsSUFBSTtZQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO1lBQzFDLFNBQVMsRUFBRSxDQUFDO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQWRNLHlCQUFRLEdBQUcsYUFBYSxDQUFDO0lBRGIsZ0JBQWdCO1FBRnBDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztPQUNSLGdCQUFnQixDQWdCcEM7SUFBRCx1QkFBQztDQWhCRCxBQWdCQyxDQWhCNkMsZUFBSyxHQWdCbEQ7a0JBaEJvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IFRyYXZlbEdhbWVNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3RyYXZlbC9tb2RlbC9UcmF2ZWxHYW1lTW9kZWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJQYXNzZWRMZXZlbFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXNzZWRMZXZlbFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlBhc3NlZExldmVsXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbkpvdXJuZXlfSXNTZXNzaW9uRW5kKHQsIGUpIHtcbiAgICB2YXIgciA9IFRyYXZlbEdhbWVNb2RlbC5nZXRJbnN0YW5jZSgpLFxuICAgICAgbyA9ICFyLmlzU2Vzc2lvbkFjdGl2ZSgpLFxuICAgICAgbiA9IHIuaXNDb21wbGV0ZShyLmdldEN1ckpvdXJuZXkoKSksXG4gICAgICBpID0gbyB8fCBuO1xuICAgIGUoe1xuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIHJldHVyblZhbDogaVxuICAgIH0pO1xuICB9XG59Il19
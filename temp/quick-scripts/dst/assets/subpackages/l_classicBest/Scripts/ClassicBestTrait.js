
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_classicBest/Scripts/ClassicBestTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '54d96TCtLRPMISk3CtEvYTX', 'ClassicBestTrait');
// subpackages/l_classicBest/Scripts/ClassicBestTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BehaviorFactory_1 = require("../../../Scripts/BehaviorFactory");
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var BreakBestScoreBehavior_1 = require("./BreakBestScoreBehavior");
var BreakBestScoreEffect_1 = require("./BreakBestScoreEffect");
var ClassicBestTypes_1 = require("./ClassicBestTypes");
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var ClassicBestTrait = /** @class */ (function (_super) {
    __extends(ClassicBestTrait, _super);
    function ClassicBestTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassicBestTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        BehaviorFactory_1.BehaviorFactory.registerBehavior(BehaviorsMapping_1.BehaviorsMapping.BreakBestScore, BreakBestScoreBehavior_1.default);
    };
    ClassicBestTrait.prototype.onClrClsHlp_pushBreakBest = function (e, t) {
        var i = e.ins._options.breakBestState;
        if (i && 0 !== i.length) {
            var s = __read(i, 3), r = s[0], o = s[1], a = s[2];
            if (-1 !== i.findIndex(function (e) {
                return true === e;
            })) {
                var c = ClassicBestTypes_1.EClassicBreakType.None;
                if (r) {
                    c = ClassicBestTypes_1.EClassicBreakType.Best;
                }
                else {
                    if (o) {
                        c = ClassicBestTypes_1.EClassicBreakType.Week;
                    }
                    else {
                        a && (c = ClassicBestTypes_1.EClassicBreakType.Today);
                    }
                }
                if (c !== ClassicBestTypes_1.EClassicBreakType.None) {
                    var p = new BreakBestScoreEffect_1.BreakBestScoreEffect({
                        breakType: c
                    });
                    t({
                        returnVal: e.ins._baseInput.pushEffect(p, BehaviorsEnum_1.EInsertType.Parallel)
                    });
                }
                else
                    t();
            }
            else
                t();
        }
        else
            t();
    };
    ClassicBestTrait.traitKey = "ClassicBest";
    ClassicBestTrait = __decorate([
        mj.trait,
        mj.class("ClassicBestTrait")
    ], ClassicBestTrait);
    return ClassicBestTrait;
}(Trait_1.default));
exports.default = ClassicBestTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NsYXNzaWNCZXN0L1NjcmlwdHMvQ2xhc3NpY0Jlc3RUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELG9FQUFtRTtBQUNuRSw4RUFBNkU7QUFDN0UsbUVBQThEO0FBQzlELCtEQUE4RDtBQUM5RCx1REFBdUQ7QUFDdkQseUVBQXNFO0FBR3RFO0lBQThDLG9DQUFLO0lBQW5EOztJQXFDQSxDQUFDO0lBbkNDLGlDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLGlDQUFlLENBQUMsZ0JBQWdCLENBQUMsbUNBQWdCLENBQUMsY0FBYyxFQUFFLGdDQUFzQixDQUFDLENBQUM7SUFDNUYsQ0FBQztJQUNELG9EQUF5QixHQUF6QixVQUEwQixDQUFDLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDdkIsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDbEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDUixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNSLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWCxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO2dCQUNoQyxPQUFPLElBQUksS0FBSyxDQUFDLENBQUM7WUFDcEIsQ0FBQyxDQUFDLEVBQUU7Z0JBQ0YsSUFBSSxDQUFDLEdBQUcsb0NBQWlCLENBQUMsSUFBSSxDQUFDO2dCQUMvQixJQUFJLENBQUMsRUFBRTtvQkFDTCxDQUFDLEdBQUcsb0NBQWlCLENBQUMsSUFBSSxDQUFDO2lCQUM1QjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsRUFBRTt3QkFDTCxDQUFDLEdBQUcsb0NBQWlCLENBQUMsSUFBSSxDQUFDO3FCQUM1Qjt5QkFBTTt3QkFDTCxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsb0NBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ3BDO2lCQUNGO2dCQUNELElBQUksQ0FBQyxLQUFLLG9DQUFpQixDQUFDLElBQUksRUFBRTtvQkFDaEMsSUFBSSxDQUFDLEdBQUcsSUFBSSwyQ0FBb0IsQ0FBQzt3QkFDL0IsU0FBUyxFQUFFLENBQUM7cUJBQ2IsQ0FBQyxDQUFDO29CQUNILENBQUMsQ0FBQzt3QkFDQSxTQUFTLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSwyQkFBVyxDQUFDLFFBQVEsQ0FBQztxQkFDaEUsQ0FBQyxDQUFDO2lCQUNKOztvQkFBTSxDQUFDLEVBQUUsQ0FBQzthQUNaOztnQkFBTSxDQUFDLEVBQUUsQ0FBQztTQUNaOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQW5DTSx5QkFBUSxHQUFHLGFBQWEsQ0FBQztJQURiLGdCQUFnQjtRQUZwQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUM7T0FDUixnQkFBZ0IsQ0FxQ3BDO0lBQUQsdUJBQUM7Q0FyQ0QsQUFxQ0MsQ0FyQzZDLGVBQUssR0FxQ2xEO2tCQXJDb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IEJlaGF2aW9yRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvQmVoYXZpb3JGYWN0b3J5JztcbmltcG9ydCB7IEJlaGF2aW9yc01hcHBpbmcgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL21hcHBpbmcvQmVoYXZpb3JzTWFwcGluZyc7XG5pbXBvcnQgQnJlYWtCZXN0U2NvcmVCZWhhdmlvciBmcm9tICcuL0JyZWFrQmVzdFNjb3JlQmVoYXZpb3InO1xuaW1wb3J0IHsgQnJlYWtCZXN0U2NvcmVFZmZlY3QgfSBmcm9tICcuL0JyZWFrQmVzdFNjb3JlRWZmZWN0JztcbmltcG9ydCB7IEVDbGFzc2ljQnJlYWtUeXBlIH0gZnJvbSAnLi9DbGFzc2ljQmVzdFR5cGVzJztcbmltcG9ydCB7IEVJbnNlcnRUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb25zdGFudC9CZWhhdmlvcnNFbnVtJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQ2xhc3NpY0Jlc3RUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xhc3NpY0Jlc3RUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJDbGFzc2ljQmVzdFwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgQmVoYXZpb3JGYWN0b3J5LnJlZ2lzdGVyQmVoYXZpb3IoQmVoYXZpb3JzTWFwcGluZy5CcmVha0Jlc3RTY29yZSwgQnJlYWtCZXN0U2NvcmVCZWhhdmlvcik7XG4gIH1cbiAgb25DbHJDbHNIbHBfcHVzaEJyZWFrQmVzdChlLCB0KSB7XG4gICAgdmFyIGkgPSBlLmlucy5fb3B0aW9ucy5icmVha0Jlc3RTdGF0ZTtcbiAgICBpZiAoaSAmJiAwICE9PSBpLmxlbmd0aCkge1xuICAgICAgdmFyIHMgPSBfX3JlYWQoaSwgMyksXG4gICAgICAgIHIgPSBzWzBdLFxuICAgICAgICBvID0gc1sxXSxcbiAgICAgICAgYSA9IHNbMl07XG4gICAgICBpZiAoLTEgIT09IGkuZmluZEluZGV4KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiB0cnVlID09PSBlO1xuICAgICAgfSkpIHtcbiAgICAgICAgdmFyIGMgPSBFQ2xhc3NpY0JyZWFrVHlwZS5Ob25lO1xuICAgICAgICBpZiAocikge1xuICAgICAgICAgIGMgPSBFQ2xhc3NpY0JyZWFrVHlwZS5CZXN0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChvKSB7XG4gICAgICAgICAgICBjID0gRUNsYXNzaWNCcmVha1R5cGUuV2VlaztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYSAmJiAoYyA9IEVDbGFzc2ljQnJlYWtUeXBlLlRvZGF5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGMgIT09IEVDbGFzc2ljQnJlYWtUeXBlLk5vbmUpIHtcbiAgICAgICAgICB2YXIgcCA9IG5ldyBCcmVha0Jlc3RTY29yZUVmZmVjdCh7XG4gICAgICAgICAgICBicmVha1R5cGU6IGNcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0KHtcbiAgICAgICAgICAgIHJldHVyblZhbDogZS5pbnMuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KHAsIEVJbnNlcnRUeXBlLlBhcmFsbGVsKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgdCgpO1xuICAgICAgfSBlbHNlIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG59Il19
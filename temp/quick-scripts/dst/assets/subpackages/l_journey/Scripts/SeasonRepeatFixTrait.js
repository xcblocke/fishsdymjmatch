
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_journey/Scripts/SeasonRepeatFixTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '55f46GBDxVDjZ+9fuwN0yxX', 'SeasonRepeatFixTrait');
// subpackages/l_journey/Scripts/SeasonRepeatFixTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TravelGameModel_1 = require("../../../Scripts/gamePlay/travel/model/TravelGameModel");
var SeasonRepeatFixTrait = /** @class */ (function (_super) {
    __extends(SeasonRepeatFixTrait, _super);
    function SeasonRepeatFixTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeasonRepeatFixTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    SeasonRepeatFixTrait.prototype.onSeasonRpt_getCurIndex = function (t, e) {
        var r = t.args[0], o = TravelGameModel_1.default.getInstance(), n = o.getCurJourney(), i = o.getHistoryJourneys(), a = this.getCurSessionIndex(n, r, i);
        e({
            returnType: TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: a
        });
    };
    SeasonRepeatFixTrait.prototype.getCurSessionIndex = function (t, e, r) {
        var o = e.indexOf(t);
        if (-1 !== o)
            return o;
        if (r.length < 1)
            return -1;
        for (var n = r.length - 1; n >= 0; n--) {
            var i = r[n], a = e.indexOf(i);
            if (-1 !== a)
                return a;
        }
        return -1;
    };
    SeasonRepeatFixTrait.traitKey = "SeasonRepeatFix";
    SeasonRepeatFixTrait = __decorate([
        mj.trait,
        mj.class("SeasonRepeatFixTrait")
    ], SeasonRepeatFixTrait);
    return SeasonRepeatFixTrait;
}(Trait_1.default));
exports.default = SeasonRepeatFixTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2pvdXJuZXkvU2NyaXB0cy9TZWFzb25SZXBlYXRGaXhUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDBGQUFxRjtBQUdyRjtJQUFrRCx3Q0FBSztJQUF2RDs7SUE0QkEsQ0FBQztJQTFCQyxxQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsc0RBQXVCLEdBQXZCLFVBQXdCLENBQUMsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ2YsQ0FBQyxHQUFHLHlCQUFlLENBQUMsV0FBVyxFQUFFLEVBQ2pDLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxFQUFFLEVBQ3JCLENBQUMsR0FBRyxDQUFDLENBQUMsa0JBQWtCLEVBQUUsRUFDMUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQztZQUNBLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1lBQzFDLE9BQU8sRUFBRSxJQUFJO1lBQ2IsU0FBUyxFQUFFLENBQUM7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsaURBQWtCLEdBQWxCLFVBQW1CLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM1QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNWLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFBRSxPQUFPLENBQUMsQ0FBQztTQUN4QjtRQUNELE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDWixDQUFDO0lBMUJNLDZCQUFRLEdBQUcsaUJBQWlCLENBQUM7SUFEakIsb0JBQW9CO1FBRnhDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztPQUNaLG9CQUFvQixDQTRCeEM7SUFBRCwyQkFBQztDQTVCRCxBQTRCQyxDQTVCaUQsZUFBSyxHQTRCdEQ7a0JBNUJvQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IFRyYXZlbEdhbWVNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3RyYXZlbC9tb2RlbC9UcmF2ZWxHYW1lTW9kZWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJTZWFzb25SZXBlYXRGaXhUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Vhc29uUmVwZWF0Rml4VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiU2Vhc29uUmVwZWF0Rml4XCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvblNlYXNvblJwdF9nZXRDdXJJbmRleCh0LCBlKSB7XG4gICAgdmFyIHIgPSB0LmFyZ3NbMF0sXG4gICAgICBvID0gVHJhdmVsR2FtZU1vZGVsLmdldEluc3RhbmNlKCksXG4gICAgICBuID0gby5nZXRDdXJKb3VybmV5KCksXG4gICAgICBpID0gby5nZXRIaXN0b3J5Sm91cm5leXMoKSxcbiAgICAgIGEgPSB0aGlzLmdldEN1clNlc3Npb25JbmRleChuLCByLCBpKTtcbiAgICBlKHtcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5WYWw6IGFcbiAgICB9KTtcbiAgfVxuICBnZXRDdXJTZXNzaW9uSW5kZXgodCwgZSwgcikge1xuICAgIHZhciBvID0gZS5pbmRleE9mKHQpO1xuICAgIGlmICgtMSAhPT0gbykgcmV0dXJuIG87XG4gICAgaWYgKHIubGVuZ3RoIDwgMSkgcmV0dXJuIC0xO1xuICAgIGZvciAodmFyIG4gPSByLmxlbmd0aCAtIDE7IG4gPj0gMDsgbi0tKSB7XG4gICAgICB2YXIgaSA9IHJbbl0sXG4gICAgICAgIGEgPSBlLmluZGV4T2YoaSk7XG4gICAgICBpZiAoLTEgIT09IGEpIHJldHVybiBhO1xuICAgIH1cbiAgICByZXR1cm4gLTE7XG4gIH1cbn0iXX0=
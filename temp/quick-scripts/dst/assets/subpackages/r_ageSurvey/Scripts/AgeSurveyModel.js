
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_ageSurvey/Scripts/AgeSurveyModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5a455SIRENESY/RVatoOjGX', 'AgeSurveyModel');
// subpackages/r_ageSurvey/Scripts/AgeSurveyModel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = require("../../../Scripts/framework/data/Model");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var DGameGetItem_1 = require("../../../Scripts/gamePlay/dot/DGameGetItem");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var AgeSurveyModel = /** @class */ (function (_super) {
    __extends(AgeSurveyModel, _super);
    function AgeSurveyModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AgeSurveyModel.prototype.getSurveyData = function (t) {
        this.localData.surveys || (this.localData.surveys = []);
        this.localData.surveys[t] || (this.localData.surveys[t] = {});
        return this.localData.surveys[t];
    };
    AgeSurveyModel.prototype.saveSurveyData = function () {
        this.localData.surveys = this.localData.surveys;
    };
    AgeSurveyModel.prototype.setCompleted = function (t, e) {
        var r = this.getSurveyData(t);
        r.completed = e;
        e && (r.completedTime = Date.now());
        this.saveSurveyData();
    };
    AgeSurveyModel.prototype.isCompleted = function (t) {
        var e;
        return null !== (e = this.getSurveyData(t).completed) && void 0 !== e && e;
    };
    AgeSurveyModel.prototype.setClosed = function (t, e) {
        this.getSurveyData(t).closed = e;
        this.saveSurveyData();
    };
    AgeSurveyModel.prototype.isClosed = function (t) {
        var e;
        return null !== (e = this.getSurveyData(t).closed) && void 0 !== e && e;
    };
    AgeSurveyModel.prototype.setSelectedAge = function (t, e) {
        this.getSurveyData(t).selectedAge = e;
        this.saveSurveyData();
    };
    AgeSurveyModel.prototype.getSelectedAge = function (t) {
        var e;
        return null !== (e = this.getSurveyData(t).selectedAge) && void 0 !== e ? e : "";
    };
    AgeSurveyModel.prototype.getCompletedTime = function (t) {
        var e;
        return null !== (e = this.getSurveyData(t).completedTime) && void 0 !== e ? e : 0;
    };
    AgeSurveyModel.prototype.isPassedHoursSince = function (t, e) {
        var r = this.getCompletedTime(t);
        if (!this.isCompleted(t) || 0 === r)
            return false;
        var o = Date.now() - r >= 3600000 * e;
        return o;
    };
    AgeSurveyModel.prototype.giveRewards = function (t, e, r, o) {
        if (e === void 0) { e = 1; }
        if (r === void 0) { r = false; }
        if (o === void 0) { o = 0; }
        var i = UserModel_1.default.getInstance().getCurrentGameData(), n = r ? GameTypeEnums_1.EGetItemReasonId.AgeSurveyAd : GameTypeEnums_1.EGetItemReasonId.AgeSurvey, a = "弹窗" + (o + 1), u = r ? a + "_看广告奖励" : a + "_奖励";
        if (t.shuffleCount > 0) {
            var p = t.shuffleCount * e;
            i.changeShuffleNums(p);
            var d = i.getShuffleNums();
            DGameGetItem_1.DotGameGetItem.dotGetItem(i, {
                itemId: GameTypeEnums_1.EItemId.Shuffle,
                number: p,
                afterNum: d,
                reasonId: n,
                reasonInfo: u
            });
        }
        if (t.hintCount > 0) {
            p = t.hintCount * e;
            i.changeHitTipsNums(p);
            d = i.getHitTipsNums();
            DGameGetItem_1.DotGameGetItem.dotGetItem(i, {
                itemId: GameTypeEnums_1.EItemId.Hint,
                number: p,
                afterNum: d,
                reasonId: n,
                reasonInfo: u
            });
        }
    };
    AgeSurveyModel = __decorate([
        mj.class("AgeSurveyModel")
    ], AgeSurveyModel);
    return AgeSurveyModel;
}(Model_1.default));
exports.default = AgeSurveyModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2FnZVN1cnZleS9TY3JpcHRzL0FnZVN1cnZleU1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFDMUQsd0ZBQW1HO0FBQ25HLDJFQUE0RTtBQUM1RSxzRUFBaUU7QUFFakU7SUFBNEMsa0NBQUs7SUFBakQ7O0lBMkVBLENBQUM7SUExRUMsc0NBQWEsR0FBYixVQUFjLENBQUM7UUFDYixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDOUQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsdUNBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO0lBQ2xELENBQUM7SUFDRCxxQ0FBWSxHQUFaLFVBQWEsQ0FBQyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFDRCxvQ0FBVyxHQUFYLFVBQVksQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDO1FBQ04sT0FBTyxJQUFJLEtB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QyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzNCLDZCQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRTtnQkFDM0IsTUFBTSxFQUFFLHVCQUFPLENBQUMsT0FBTztnQkFDdkIsTUFBTSxFQUFFLENBQUM7Z0JBQ1QsUUFBUSxFQUFFLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLENBQUM7Z0JBQ1gsVUFBVSxFQUFFLENBQUM7YUFDZCxDQUFDLENBQUM7U0FDSjtRQUNELElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUU7WUFDbkIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QixDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLDZCQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRTtnQkFDM0IsTUFBTSxFQUFFLHVCQUFPLENBQUMsSUFBSTtnQkFDcEIsTUFBTSxFQUFFLENBQUM7Z0JBQ1QsUUFBUSxFQUFFLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLENBQUM7Z0JBQ1gsVUFBVSxFQUFFLENBQUM7YUFDZCxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUExRWtCLGNBQWM7UUFEbEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztPQUNOLGNBQWMsQ0EyRWxDO0lBQUQscUJBQUM7Q0EzRUQsQUEyRUMsQ0EzRTJDLGVBQUssR0EyRWhEO2tCQTNFb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9kYXRhL01vZGVsJztcbmltcG9ydCB7IEVHZXRJdGVtUmVhc29uSWQsIEVJdGVtSWQgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgRG90R2FtZUdldEl0ZW0gfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2RvdC9ER2FtZUdldEl0ZW0nO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai5jbGFzcyhcIkFnZVN1cnZleU1vZGVsXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZ2VTdXJ2ZXlNb2RlbCBleHRlbmRzIE1vZGVsIHtcbiAgZ2V0U3VydmV5RGF0YSh0KSB7XG4gICAgdGhpcy5sb2NhbERhdGEuc3VydmV5cyB8fCAodGhpcy5sb2NhbERhdGEuc3VydmV5cyA9IFtdKTtcbiAgICB0aGlzLmxvY2FsRGF0YS5zdXJ2ZXlzW3RdIHx8ICh0aGlzLmxvY2FsRGF0YS5zdXJ2ZXlzW3RdID0ge30pO1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5zdXJ2ZXlzW3RdO1xuICB9XG4gIHNhdmVTdXJ2ZXlEYXRhKCkge1xuICAgIHRoaXMubG9jYWxEYXRhLnN1cnZleXMgPSB0aGlzLmxvY2FsRGF0YS5zdXJ2ZXlzO1xuICB9XG4gIHNldENvbXBsZXRlZCh0LCBlKSB7XG4gICAgdmFyIHIgPSB0aGlzLmdldFN1cnZleURhdGEodCk7XG4gICAgci5jb21wbGV0ZWQgPSBlO1xuICAgIGUgJiYgKHIuY29tcGxldGVkVGltZSA9IERhdGUubm93KCkpO1xuICAgIHRoaXMuc2F2ZVN1cnZleURhdGEoKTtcbiAgfVxuICBpc0NvbXBsZXRlZCh0KSB7XG4gICAgdmFyIGU7XG4gICAgcmV0dXJuIG51bGwgIT09IChlID0gdGhpcy5nZXRTdXJ2ZXlEYXRhKHQpLmNvbXBsZXRlZCkgJiYgdm9pZCAwICE9PSBlICYmIGU7XG4gIH1cbiAgc2V0Q2xvc2VkKHQsIGUpIHtcbiAgICB0aGlzLmdldFN1cnZleURhdGEodCkuY2xvc2VkID0gZTtcbiAgICB0aGlzLnNhdmVTdXJ2ZXlEYXRhKCk7XG4gIH1cbiAgaXNDbG9zZWQodCkge1xuICAgIHZhciBlO1xuICAgIHJldHVybiBudWxsICE9PSAoZSA9IHRoaXMuZ2V0U3VydmV5RGF0YSh0KS5jbG9zZWQpICYmIHZvaWQgMCAhPT0gZSAmJiBlO1xuICB9XG4gIHNldFNlbGVjdGVkQWdlKHQsIGUpIHtcbiAgICB0aGlzLmdldFN1cnZleURhdGEodCkuc2VsZWN0ZWRBZ2UgPSBlO1xuICAgIHRoaXMuc2F2ZVN1cnZleURhdGEoKTtcbiAgfVxuICBnZXRTZWxlY3RlZEFnZSh0KSB7XG4gICAgdmFyIGU7XG4gICAgcmV0dXJuIG51bGwgIT09IChlID0gdGhpcy5nZXRTdXJ2ZXlEYXRhKHQpLnNlbGVjdGVkQWdlKSAmJiB2b2lkIDAgIT09IGUgPyBlIDogXCJcIjtcbiAgfVxuICBnZXRDb21wbGV0ZWRUaW1lKHQpIHtcbiAgICB2YXIgZTtcbiAgICByZXR1cm4gbnVsbCAhPT0gKGUgPSB0aGlzLmdldFN1cnZleURhdGEodCkuY29tcGxldGVkVGltZSkgJiYgdm9pZCAwICE9PSBlID8gZSA6IDA7XG4gIH1cbiAgaXNQYXNzZWRIb3Vyc1NpbmNlKHQsIGUpIHtcbiAgICB2YXIgciA9IHRoaXMuZ2V0Q29tcGxldGVkVGltZSh0KTtcbiAgICBpZiAoIXRoaXMuaXNDb21wbGV0ZWQodCkgfHwgMCA9PT0gcikgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBvID0gRGF0ZS5ub3coKSAtIHIgPj0gMzYwMDAwMCAqIGU7XG4gICAgcmV0dXJuIG87XG4gIH1cbiAgZ2l2ZVJld2FyZHModCwgZSA9IDEsIHIgPSBmYWxzZSwgbyA9IDApIHtcbiAgICB2YXIgaSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lRGF0YSgpLFxuICAgICAgbiA9IHIgPyBFR2V0SXRlbVJlYXNvbklkLkFnZVN1cnZleUFkIDogRUdldEl0ZW1SZWFzb25JZC5BZ2VTdXJ2ZXksXG4gICAgICBhID0gXCLlvLnnqpdcIiArIChvICsgMSksXG4gICAgICB1ID0gciA/IGEgKyBcIl/nnIvlub/lkYrlpZblirFcIiA6IGEgKyBcIl/lpZblirFcIjtcbiAgICBpZiAodC5zaHVmZmxlQ291bnQgPiAwKSB7XG4gICAgICB2YXIgcCA9IHQuc2h1ZmZsZUNvdW50ICogZTtcbiAgICAgIGkuY2hhbmdlU2h1ZmZsZU51bXMocCk7XG4gICAgICB2YXIgZCA9IGkuZ2V0U2h1ZmZsZU51bXMoKTtcbiAgICAgIERvdEdhbWVHZXRJdGVtLmRvdEdldEl0ZW0oaSwge1xuICAgICAgICBpdGVtSWQ6IEVJdGVtSWQuU2h1ZmZsZSxcbiAgICAgICAgbnVtYmVyOiBwLFxuICAgICAgICBhZnRlck51bTogZCxcbiAgICAgICAgcmVhc29uSWQ6IG4sXG4gICAgICAgIHJlYXNvbkluZm86IHVcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodC5oaW50Q291bnQgPiAwKSB7XG4gICAgICBwID0gdC5oaW50Q291bnQgKiBlO1xuICAgICAgaS5jaGFuZ2VIaXRUaXBzTnVtcyhwKTtcbiAgICAgIGQgPSBpLmdldEhpdFRpcHNOdW1zKCk7XG4gICAgICBEb3RHYW1lR2V0SXRlbS5kb3RHZXRJdGVtKGksIHtcbiAgICAgICAgaXRlbUlkOiBFSXRlbUlkLkhpbnQsXG4gICAgICAgIG51bWJlcjogcCxcbiAgICAgICAgYWZ0ZXJOdW06IGQsXG4gICAgICAgIHJlYXNvbklkOiBuLFxuICAgICAgICByZWFzb25JbmZvOiB1XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0iXX0=
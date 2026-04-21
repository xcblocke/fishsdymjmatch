"use strict";
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
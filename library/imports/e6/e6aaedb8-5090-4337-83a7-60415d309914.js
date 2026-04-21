"use strict";
cc._RF.push(module, 'e6aae24UJBDN4OnYEFdMJkU', 'TravelWinController');
// Scripts/TravelWinController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameInputEnum_1 = require("./simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var TravelGameData_1 = require("./core/simulator/data/TravelGameData");
var GameInteraction_1 = require("./GameInteraction/GameInteraction");
var ViewController_1 = require("./framework/controller/ViewController");
var DataReader_1 = require("./framework/data/DataReader");
var BadgeMode_1 = require("./gamePlay/badge/mode/BadgeMode");
var ConfigType_1 = require("./gamePlay/base/data/ConfigType");
var IUserData_1 = require("./user/IUserData");
var TravelConfig_1 = require("./config/TravelConfig");
var TravelGameModel_1 = require("./gamePlay/travel/model/TravelGameModel");
var TravelWinView_1 = require("./view/TravelWinView");
var TravelWinController = /** @class */ (function (_super) {
    __extends(TravelWinController, _super);
    function TravelWinController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = TravelWinView_1.default;
        _this.viewMode = ViewController_1.viewMode.PANEL;
        return _this;
    }
    TravelWinController.prototype.initDependRes = function () {
        this.addPreloadRes("Prefab", "prefabs/journey/CollectItem");
    };
    TravelWinController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        var t = __read(this.canGainTravelReward(), 2), o = t[0], n = t[1];
        o && this.addLevelReward(n);
        this.args.canGain = o;
        this.viewDoAction("onViewLoad", this.args);
    };
    TravelWinController.prototype.addLevelReward = function (e) {
        var t = TravelGameData_1.default.getInstance().getLevelId() - 1, o = TravelGameModel_1.default.getInstance(), n = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.reward_config, e.reward);
        if (e.type === TravelConfig_1.ETravelRewardType.EBadge) {
            var i = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.item_config, n.Items[0]);
            BadgeMode_1.default.getInstance().addBadge(i.ID, BadgeMode_1.BadgeType.Journey, o.getCurJourney());
        }
        else if (e.type === TravelConfig_1.ETravelRewardType.EGiftBox)
            for (var r = n.Items, a = 0; a < r.length; a++) {
                var p = r[a], g = n.Counts[a], _ = {
                    inputType: GameInputEnum_1.EGameInputEnum.AddProp,
                    propType: IUserData_1.ItemTypeKey[p],
                    num: g,
                    reasonId: GameTypeEnums_1.EGetItemReasonId.Journey,
                    reasonInfo: "旅行活动奖励_到达第" + t + "关"
                };
                GameInteraction_1.GameInteraction.input(_);
            }
    };
    TravelWinController.prototype.viewDidShow = function (t) {
        t = t || this.args;
        _super.prototype.viewDidShow.call(this, t);
        this.viewDoAction("showWinView", t);
    };
    TravelWinController.prototype.viewDidHide = function () {
        _super.prototype.viewDidHide.call(this);
    };
    TravelWinController.prototype.canGainTravelReward = function () {
        var e = TravelGameData_1.default.getInstance().getLevelId() - 1, t = TravelGameModel_1.default.getInstance(), o = t.getRewardInfo(t.getCurJourney()), n = o.findIndex(function (t) {
            return t.lv >= e;
        });
        if (n < -1)
            return [false, null];
        var i = o[n];
        return i.type !== TravelConfig_1.ETravelRewardType.EGiftBox && i.type !== TravelConfig_1.ETravelRewardType.EBadge || i.lv !== e || i.gain ? [false, null] : [true, i];
    };
    __decorate([
        mj.traitEvent("TLWinCtrl_initRes")
    ], TravelWinController.prototype, "initDependRes", null);
    __decorate([
        mj.traitEvent("TLWinCtrl_viewShow")
    ], TravelWinController.prototype, "viewDidShow", null);
    TravelWinController = __decorate([
        mj.class("TravelWinController")
    ], TravelWinController);
    return TravelWinController;
}(ViewController_1.default));
exports.default = TravelWinController;

cc._RF.pop();
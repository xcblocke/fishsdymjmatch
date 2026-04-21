"use strict";
cc._RF.push(module, 'b58adMHQlVJxLT+zNjCYvdh', 'HallJourneyBtn');
// Scripts/HallJourneyBtn.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("./framework/ui/BaseUI");
var ControllerManager_1 = require("./framework/manager/ControllerManager");
var I18NStrings_1 = require("./framework/data/I18NStrings");
var TravelGameModel_1 = require("./gamePlay/travel/model/TravelGameModel");
var GameUtils_1 = require("./core/simulator/util/GameUtils");
var TravelConfig_1 = require("./config/TravelConfig");
var DGamePageShow_1 = require("./dot/DGamePageShow");
var DGameBtnClick_1 = require("./dot/DGameBtnClick");
var HallJourneyBtn = /** @class */ (function (_super) {
    __extends(HallJourneyBtn, _super);
    function HallJourneyBtn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timerLabel = null;
        _this.timerNode = null;
        _this.ComeSoonNode = null;
        return _this;
    }
    HallJourneyBtn.prototype.getMessageListeners = function () {
        return {
            Hall_updateUI: this.updateUI.bind(this)
        };
    };
    HallJourneyBtn.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.OnButtonClick(this.node, this.onBtnClick.bind(this));
    };
    HallJourneyBtn.prototype.updateUI = function () {
        var e = this, t = TravelGameModel_1.default.getInstance();
        this.node.active = t.isUnlocked();
        if (this.node.active)
            if (t.isSessionActive()) {
                this.timerNode.active = true;
                var o = t.getRemainTime();
                this.ComeSoonNode.active = false;
                var n = __read(GameUtils_1.default.getRemainTimeParts(o), 4), i = n[0], r = n[1], l = n[2], s = (n[3], function (e) {
                    return e.toString().padStart(2, "0");
                });
                I18NStrings_1.default.setText(this.timerLabel.node, s(i) + "d" + s(r) + "h" + s(l) + "m", "Common_CountDown_Minute", [i, r, l]);
                this.scheduleOnce(function () {
                    e.updateUI();
                }, 1);
            }
            else {
                this.ComeSoonNode.active = true;
                this.timerNode.active = false;
                this.dispatchEvent(TravelConfig_1.TRAVEL_GAME_SESSION_END);
                this.node.destroy();
            }
    };
    HallJourneyBtn.prototype.onBtnClick = function () {
        if (TravelGameModel_1.default.getInstance().isSessionActive()) {
            ControllerManager_1.default.getInstance().pushViewByController("TravelMapController");
            DGameBtnClick_1.DotGameBtnClick.dotHall(DGameBtnClick_1.EHomePageClickType.Travel);
            DGamePageShow_1.DotGamePageShow.dot(DGamePageShow_1.EPageShowType.TravelPage);
        }
    };
    HallJourneyBtn.prefabUrl = "prefabs/journey/HallBtn/HallJourneyBtn";
    __decorate([
        mj.component("Timer/Time", cc.Label)
    ], HallJourneyBtn.prototype, "timerLabel", void 0);
    __decorate([
        mj.node("Timer")
    ], HallJourneyBtn.prototype, "timerNode", void 0);
    __decorate([
        mj.node("ComeSoon")
    ], HallJourneyBtn.prototype, "ComeSoonNode", void 0);
    __decorate([
        mj.traitEvent("HallJourBtn_onClk")
    ], HallJourneyBtn.prototype, "onBtnClick", null);
    HallJourneyBtn = __decorate([
        mj.class
    ], HallJourneyBtn);
    return HallJourneyBtn;
}(BaseUI_1.default));
exports.default = HallJourneyBtn;

cc._RF.pop();
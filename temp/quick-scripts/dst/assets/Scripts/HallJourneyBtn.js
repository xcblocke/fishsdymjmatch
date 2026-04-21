
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/HallJourneyBtn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0hhbGxKb3VybmV5QnRuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFDM0MsMkVBQXNFO0FBQ3RFLDREQUF1RDtBQUN2RCwyRUFBc0U7QUFDdEUsNkRBQXdEO0FBQ3hELHNEQUFnRTtBQUNoRSxxREFBcUU7QUFDckUscURBQTBFO0FBRTFFO0lBQTRDLGtDQUFNO0lBQWxEO1FBQUEscUVBbURDO1FBakRDLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUVoQyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGtCQUFZLEdBQWUsSUFBSSxDQUFDOztJQTZDbEMsQ0FBQztJQTNDQyw0Q0FBbUIsR0FBbkI7UUFDRSxPQUFPO1lBQ0wsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztTQUN4QyxDQUFDO0lBQ0osQ0FBQztJQUNELCtCQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFDRCxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUNWLENBQUMsR0FBRyx5QkFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUFFLElBQUksQ0FBQyxDQUFDLGVBQWUsRUFBRSxFQUFFO2dCQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsbUJBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDaEQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDUixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNSLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ1IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQztvQkFDcEIsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDdkMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wscUJBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUseUJBQXlCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RILElBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ2hCLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDZixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDUDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxzQ0FBdUIsQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ3JCO0lBQ0gsQ0FBQztJQUVELG1DQUFVLEdBQVY7UUFDRSxJQUFJLHlCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsZUFBZSxFQUFFLEVBQUU7WUFDbkQsMkJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsb0JBQW9CLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUM1RSwrQkFBZSxDQUFDLE9BQU8sQ0FBQyxrQ0FBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCwrQkFBZSxDQUFDLEdBQUcsQ0FBQyw2QkFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQy9DO0lBQ0gsQ0FBQztJQTNDTSx3QkFBUyxHQUFHLHdDQUF3QyxDQUFDO0lBTDVEO1FBREMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDTDtJQUVoQztRQURDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO3FEQUNTO0lBRTFCO1FBREMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7d0RBQ1k7SUFzQ2hDO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQztvREFPbEM7SUFsRGtCLGNBQWM7UUFEbEMsRUFBRSxDQUFDLEtBQUs7T0FDWSxjQUFjLENBbURsQztJQUFELHFCQUFDO0NBbkRELEFBbURDLENBbkQyQyxnQkFBTSxHQW1EakQ7a0JBbkRvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tICcuL2ZyYW1ld29yay91aS9CYXNlVUknO1xuaW1wb3J0IENvbnRyb2xsZXJNYW5hZ2VyIGZyb20gJy4vZnJhbWV3b3JrL21hbmFnZXIvQ29udHJvbGxlck1hbmFnZXInO1xuaW1wb3J0IEkxOE5TdHJpbmdzIGZyb20gJy4vZnJhbWV3b3JrL2RhdGEvSTE4TlN0cmluZ3MnO1xuaW1wb3J0IFRyYXZlbEdhbWVNb2RlbCBmcm9tICcuL2dhbWVQbGF5L3RyYXZlbC9tb2RlbC9UcmF2ZWxHYW1lTW9kZWwnO1xuaW1wb3J0IEdhbWVVdGlscyBmcm9tICcuL2NvcmUvc2ltdWxhdG9yL3V0aWwvR2FtZVV0aWxzJztcbmltcG9ydCB7IFRSQVZFTF9HQU1FX1NFU1NJT05fRU5EIH0gZnJvbSAnLi9jb25maWcvVHJhdmVsQ29uZmlnJztcbmltcG9ydCB7IERvdEdhbWVQYWdlU2hvdywgRVBhZ2VTaG93VHlwZSB9IGZyb20gJy4vZG90L0RHYW1lUGFnZVNob3cnO1xuaW1wb3J0IHsgRG90R2FtZUJ0bkNsaWNrLCBFSG9tZVBhZ2VDbGlja1R5cGUgfSBmcm9tICcuL2RvdC9ER2FtZUJ0bkNsaWNrJztcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFsbEpvdXJuZXlCdG4gZXh0ZW5kcyBCYXNlVUkge1xuICBAbWouY29tcG9uZW50KFwiVGltZXIvVGltZVwiLCBjYy5MYWJlbClcbiAgdGltZXJMYWJlbDogXCJUaW1lci9UaW1lXCIgPSBudWxsO1xuICBAbWoubm9kZShcIlRpbWVyXCIpXG4gIHRpbWVyTm9kZTogXCJUaW1lclwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJDb21lU29vblwiKVxuICBDb21lU29vbk5vZGU6IFwiQ29tZVNvb25cIiA9IG51bGw7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvam91cm5leS9IYWxsQnRuL0hhbGxKb3VybmV5QnRuXCI7XG4gIGdldE1lc3NhZ2VMaXN0ZW5lcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIEhhbGxfdXBkYXRlVUk6IHRoaXMudXBkYXRlVUkuYmluZCh0aGlzKVxuICAgIH07XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuT25CdXR0b25DbGljayh0aGlzLm5vZGUsIHRoaXMub25CdG5DbGljay5iaW5kKHRoaXMpKTtcbiAgfVxuICB1cGRhdGVVSSgpIHtcbiAgICB2YXIgZSA9IHRoaXMsXG4gICAgICB0ID0gVHJhdmVsR2FtZU1vZGVsLmdldEluc3RhbmNlKCk7XG4gICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHQuaXNVbmxvY2tlZCgpO1xuICAgIGlmICh0aGlzLm5vZGUuYWN0aXZlKSBpZiAodC5pc1Nlc3Npb25BY3RpdmUoKSkge1xuICAgICAgdGhpcy50aW1lck5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHZhciBvID0gdC5nZXRSZW1haW5UaW1lKCk7XG4gICAgICB0aGlzLkNvbWVTb29uTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHZhciBuID0gX19yZWFkKEdhbWVVdGlscy5nZXRSZW1haW5UaW1lUGFydHMobyksIDQpLFxuICAgICAgICBpID0gblswXSxcbiAgICAgICAgciA9IG5bMV0sXG4gICAgICAgIGwgPSBuWzJdLFxuICAgICAgICBzID0gKG5bM10sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGUudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgICAgIH0pO1xuICAgICAgSTE4TlN0cmluZ3Muc2V0VGV4dCh0aGlzLnRpbWVyTGFiZWwubm9kZSwgcyhpKSArIFwiZFwiICsgcyhyKSArIFwiaFwiICsgcyhsKSArIFwibVwiLCBcIkNvbW1vbl9Db3VudERvd25fTWludXRlXCIsIFtpLCByLCBsXSk7XG4gICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGUudXBkYXRlVUkoKTtcbiAgICAgIH0sIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLkNvbWVTb29uTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy50aW1lck5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoVFJBVkVMX0dBTUVfU0VTU0lPTl9FTkQpO1xuICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJIYWxsSm91ckJ0bl9vbkNsa1wiKVxuICBvbkJ0bkNsaWNrKCkge1xuICAgIGlmIChUcmF2ZWxHYW1lTW9kZWwuZ2V0SW5zdGFuY2UoKS5pc1Nlc3Npb25BY3RpdmUoKSkge1xuICAgICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIlRyYXZlbE1hcENvbnRyb2xsZXJcIik7XG4gICAgICBEb3RHYW1lQnRuQ2xpY2suZG90SGFsbChFSG9tZVBhZ2VDbGlja1R5cGUuVHJhdmVsKTtcbiAgICAgIERvdEdhbWVQYWdlU2hvdy5kb3QoRVBhZ2VTaG93VHlwZS5UcmF2ZWxQYWdlKTtcbiAgICB9XG4gIH1cbn0iXX0=
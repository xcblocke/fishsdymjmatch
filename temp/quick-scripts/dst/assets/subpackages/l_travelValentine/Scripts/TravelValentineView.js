
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_travelValentine/Scripts/TravelValentineView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c2a6ejPDadDRrvIbQDau5Gp', 'TravelValentineView');
// subpackages/l_travelValentine/Scripts/TravelValentineView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var UIView_1 = require("../../../Scripts/framework/ui/UIView");
var DGameBtnClick_1 = require("../../../Scripts/dot/DGameBtnClick");
var TravelConfig_1 = require("../../../Scripts/config/TravelConfig");
var TravelGameModel_1 = require("../../../Scripts/gamePlay/travel/model/TravelGameModel");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var TravelValentineView = /** @class */ (function (_super) {
    __extends(TravelValentineView, _super);
    function TravelValentineView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.popNode = null;
        _this.timerNode = null;
        _this.watchNode = null;
        _this.timerLabel = null;
        _this.playBtn = null;
        _this.titleLabel = null;
        _this.popSpine = null;
        _this.watchSpine = null;
        _this.config = null;
        _this.isNewSession = false;
        _this.isInit = false;
        return _this;
    }
    TravelValentineView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initComponents();
        this.OnButtonClick(this.playBtn, this.onPlayBtnClick.bind(this));
        this.tryPlayPop();
    };
    TravelValentineView.prototype.initComponents = function () {
        if (!this.isInit) {
            this.popNode = cc.find("Pop", this.node);
            this.timerNode = cc.find("Timer", this.node);
            this.watchNode = cc.find("Timer/Watch", this.node);
            this.timerLabel = cc.find("Timer/TimerLabel", this.node);
            this.playBtn = cc.find("PlayBtn", this.node);
            this.titleLabel = cc.find("Title", this.node);
            this.titleLabel.setPosition(0, 0, 0);
            this.playBtn.setPosition(0, 0, 0);
            this.popSpine = this.popNode.addComponent(BaseSpine_1.default);
            this.watchSpine = this.watchNode.addComponent(BaseSpine_1.default);
            this.popSpine.markReady("");
            this.watchSpine.markReady("");
            this.hookNodes();
            this.isInit = true;
        }
    };
    TravelValentineView.prototype.tryPlayPop = function () {
        this.config && this.isInit && this.playAction();
    };
    TravelValentineView.prototype.playAction = function () {
        var e = this;
        this.playButtonInAction();
        this.popSpine.setAnimation("in", 1, function () {
            if (cc.isValid(e.popSpine)) {
                e.popSpine.setAnimation("init", -1);
                e.playButtonInitAction();
            }
        });
        this.watchSpine.setAnimation("clock_in", 1, function () {
            cc.isValid(e.watchSpine) && e.watchSpine.setAnimation("clock_init", -1);
        });
    };
    TravelValentineView.prototype.hookNodes = function () {
        var e = this;
        this.popSpine.attachNode("clock", function () {
            return e.timerNode;
        });
        this.popSpine.attachNode("Btn_Play_Green", function () {
            return e.playBtn;
        });
        this.popSpine.attachNode("title", function () {
            return e.titleLabel;
        });
    };
    TravelValentineView.prototype.getMessageListeners = function () {
        var _e = {};
        _e[TravelConfig_1.TRAVEL_GAME_SESSION_END] = this.onTravelGameSessionEnd.bind(this);
        return _e;
    };
    TravelValentineView.prototype.onTravelGameSessionEnd = function () {
        var e;
        null === (e = this.delegate) || void 0 === e || e.close();
    };
    TravelValentineView.prototype.updateData = function (e) {
        this.config = e.config;
        this.isNewSession = e.isNewSession;
        this.updateTime();
        DGameBtnClick_1.DotGameBtnClick.dotHall(DGameBtnClick_1.EHomePageClickType.TravelDialogDisplayed);
        this.tryPlayPop();
    };
    TravelValentineView.prototype.updateTime = function () {
        var e = this, t = TravelGameModel_1.default.getInstance().getRemainTime();
        this.isNewSession && (t = this.config.duration);
        var r = __read(GameUtils_1.default.getRemainTimeParts(t), 4), n = r[0], o = r[1], i = r[2], c = (r[3], function (e) {
            return e.toString().padStart(2, "0");
        });
        I18NStrings_1.default.setText(this.timerLabel, c(n) + "d" + c(o) + "h" + c(i) + "m", "Common_CountDown_Minute", [n, o, i]);
        this.isNewSession || this.scheduleOnce(function () {
            e.updateTime();
        }, 5);
    };
    TravelValentineView.prototype.onPlayBtnClick = function () {
        var e;
        if (TravelGameModel_1.default.getInstance().isSessionActive() || this.isNewSession) {
            this.isNewSession && this.dispatchEvent(TravelConfig_1.TRAVEL_GAME_SESSION_START);
            DGameBtnClick_1.DotGameBtnClick.dotHall(DGameBtnClick_1.EHomePageClickType.TravelGameStart);
            this.gotoTravelMap();
        }
        else
            null === (e = this.delegate) || void 0 === e || e.close();
    };
    TravelValentineView.prototype.gotoTravelMap = function () {
        var e = this;
        ControllerManager_1.default.getInstance().pushViewByController("TravelMapController", {}, function () {
            var t;
            null === (t = e.delegate) || void 0 === t || t.close();
        });
    };
    TravelValentineView.prototype.playButtonInAction = function () {
        cc.Tween.stopAllByTarget(this.playBtn);
        this.playBtn.opacity = 0;
        this.playBtn.scale = 0.7;
        cc.tween(this.playBtn).delay(0.133).to(0.2, {
            opacity: 255,
            scale: 1.1
        }).to(0.333, {
            scale: 1
        }).to(0.5, {
            scale: 1.1
        }).to(0.494, {
            scale: 1
        }).delay(1.76).to(1.67, {
            scale: 1
        }).to(0.5, {
            scale: 1.1
        }).to(0.5, {
            scale: 1
        }).start();
    };
    TravelValentineView.prototype.playButtonInitAction = function () {
        cc.Tween.stopAllByTarget(this.playBtn);
        this.playBtn.scale = 1;
        var e = cc.tween(this.playBtn).sequence(cc.tween().to(0.5, {
            scale: 1.1
        }), cc.tween().to(1, {
            scale: 1
        }), cc.tween().delay(2));
        cc.tween(this.playBtn).repeatForever(e).start();
    };
    TravelValentineView.prefabUrl = "prefabs/TravelValentine";
    __decorate([
        mj.traitEvent("TLValVw_gotoTravelMap")
    ], TravelValentineView.prototype, "gotoTravelMap", null);
    TravelValentineView = __decorate([
        mj.class
    ], TravelValentineView);
    return TravelValentineView;
}(UIView_1.default));
exports.default = TravelValentineView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RyYXZlbFZhbGVudGluZS9TY3JpcHRzL1RyYXZlbFZhbGVudGluZVZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRFQUF1RTtBQUN2RSwrREFBMEQ7QUFDMUQsb0VBQXlGO0FBQ3pGLHFFQUEwRztBQUMxRywwRkFBcUY7QUFDckYsMkVBQXNFO0FBQ3RFLHlFQUFvRTtBQUNwRSwwRkFBcUY7QUFFckY7SUFBaUQsdUNBQU07SUFBdkQ7UUFBQSxxRUFnSkM7UUEvSUMsYUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixhQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsY0FBUSxHQUFHLElBQUksQ0FBQztRQUNoQixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixZQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2Qsa0JBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsWUFBTSxHQUFHLEtBQUssQ0FBQzs7SUFxSWpCLENBQUM7SUFuSUMsb0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBQ0QsNENBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsbUJBQVMsQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsbUJBQVMsQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNwQjtJQUNILENBQUM7SUFDRCx3Q0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBQ0Qsd0NBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUU7WUFDbEMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDMUIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLENBQUMsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO2FBQzFCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFO1lBQzFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHVDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDaEMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUU7WUFDekMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO1lBQ2hDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxpREFBbUIsR0FBbkI7UUFDRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDWixFQUFFLENBQUMsc0NBQXVCLENBQUMsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JFLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUNELG9EQUFzQixHQUF0QjtRQUNFLElBQUksQ0FBQyxDQUFDO1FBQ04sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzVELENBQUM7SUFDRCx3Q0FBVSxHQUFWLFVBQVcsQ0FBQztRQUNWLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLCtCQUFlLENBQUMsT0FBTyxDQUFDLGtDQUFrQixDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFDRCx3Q0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUNWLENBQUMsR0FBRyx5QkFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3BELElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsbUJBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDaEQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDUixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNSLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ1IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQztZQUNwQixPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO1FBQ0wscUJBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSx5QkFBeUIsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqSCxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDckMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2pCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7SUFDRCw0Q0FBYyxHQUFkO1FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFJLHlCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsZUFBZSxFQUFFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN4RSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsd0NBQXlCLENBQUMsQ0FBQztZQUNuRSwrQkFBZSxDQUFDLE9BQU8sQ0FBQyxrQ0FBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7O1lBQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ25FLENBQUM7SUFFRCwyQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsMkJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsb0JBQW9CLENBQUMscUJBQXFCLEVBQUUsRUFBRSxFQUFFO1lBQzlFLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGdEQUFrQixHQUFsQjtRQUNFLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFO1lBQzFDLE9BQU8sRUFBRSxHQUFHO1lBQ1osS0FBSyxFQUFFLEdBQUc7U0FDWCxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRTtZQUNYLEtBQUssRUFBRSxDQUFDO1NBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUU7WUFDVCxLQUFLLEVBQUUsR0FBRztTQUNYLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFO1lBQ1gsS0FBSyxFQUFFLENBQUM7U0FDVCxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUU7WUFDdEIsS0FBSyxFQUFFLENBQUM7U0FDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRTtZQUNULEtBQUssRUFBRSxHQUFHO1NBQ1gsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUU7WUFDVCxLQUFLLEVBQUUsQ0FBQztTQUNULENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCxrREFBb0IsR0FBcEI7UUFDRSxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRTtZQUN6RCxLQUFLLEVBQUUsR0FBRztTQUNYLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUNuQixLQUFLLEVBQUUsQ0FBQztTQUNULENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFuSU0sNkJBQVMsR0FBRyx5QkFBeUIsQ0FBQztJQThGN0M7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDOzREQU90QztJQWhIa0IsbUJBQW1CO1FBRHZDLEVBQUUsQ0FBQyxLQUFLO09BQ1ksbUJBQW1CLENBZ0p2QztJQUFELDBCQUFDO0NBaEpELEFBZ0pDLENBaEpnRCxnQkFBTSxHQWdKdEQ7a0JBaEpvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZVV0aWxzIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvdXRpbC9HYW1lVXRpbHMnO1xuaW1wb3J0IFVJVmlldyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay91aS9VSVZpZXcnO1xuaW1wb3J0IHsgRG90R2FtZUJ0bkNsaWNrLCBFSG9tZVBhZ2VDbGlja1R5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2RvdC9ER2FtZUJ0bkNsaWNrJztcbmltcG9ydCB7IFRSQVZFTF9HQU1FX1NFU1NJT05fRU5ELCBUUkFWRUxfR0FNRV9TRVNTSU9OX1NUQVJUIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb25maWcvVHJhdmVsQ29uZmlnJztcbmltcG9ydCBUcmF2ZWxHYW1lTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS90cmF2ZWwvbW9kZWwvVHJhdmVsR2FtZU1vZGVsJztcbmltcG9ydCBJMThOU3RyaW5ncyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9kYXRhL0kxOE5TdHJpbmdzJztcbmltcG9ydCBCYXNlU3BpbmUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcGluZSc7XG5pbXBvcnQgQ29udHJvbGxlck1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvbWFuYWdlci9Db250cm9sbGVyTWFuYWdlcic7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYXZlbFZhbGVudGluZVZpZXcgZXh0ZW5kcyBVSVZpZXcge1xuICBwb3BOb2RlID0gbnVsbDtcbiAgdGltZXJOb2RlID0gbnVsbDtcbiAgd2F0Y2hOb2RlID0gbnVsbDtcbiAgdGltZXJMYWJlbCA9IG51bGw7XG4gIHBsYXlCdG4gPSBudWxsO1xuICB0aXRsZUxhYmVsID0gbnVsbDtcbiAgcG9wU3BpbmUgPSBudWxsO1xuICB3YXRjaFNwaW5lID0gbnVsbDtcbiAgY29uZmlnID0gbnVsbDtcbiAgaXNOZXdTZXNzaW9uID0gZmFsc2U7XG4gIGlzSW5pdCA9IGZhbHNlO1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL1RyYXZlbFZhbGVudGluZVwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5pbml0Q29tcG9uZW50cygpO1xuICAgIHRoaXMuT25CdXR0b25DbGljayh0aGlzLnBsYXlCdG4sIHRoaXMub25QbGF5QnRuQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgdGhpcy50cnlQbGF5UG9wKCk7XG4gIH1cbiAgaW5pdENvbXBvbmVudHMoKSB7XG4gICAgaWYgKCF0aGlzLmlzSW5pdCkge1xuICAgICAgdGhpcy5wb3BOb2RlID0gY2MuZmluZChcIlBvcFwiLCB0aGlzLm5vZGUpO1xuICAgICAgdGhpcy50aW1lck5vZGUgPSBjYy5maW5kKFwiVGltZXJcIiwgdGhpcy5ub2RlKTtcbiAgICAgIHRoaXMud2F0Y2hOb2RlID0gY2MuZmluZChcIlRpbWVyL1dhdGNoXCIsIHRoaXMubm9kZSk7XG4gICAgICB0aGlzLnRpbWVyTGFiZWwgPSBjYy5maW5kKFwiVGltZXIvVGltZXJMYWJlbFwiLCB0aGlzLm5vZGUpO1xuICAgICAgdGhpcy5wbGF5QnRuID0gY2MuZmluZChcIlBsYXlCdG5cIiwgdGhpcy5ub2RlKTtcbiAgICAgIHRoaXMudGl0bGVMYWJlbCA9IGNjLmZpbmQoXCJUaXRsZVwiLCB0aGlzLm5vZGUpO1xuICAgICAgdGhpcy50aXRsZUxhYmVsLnNldFBvc2l0aW9uKDAsIDAsIDApO1xuICAgICAgdGhpcy5wbGF5QnRuLnNldFBvc2l0aW9uKDAsIDAsIDApO1xuICAgICAgdGhpcy5wb3BTcGluZSA9IHRoaXMucG9wTm9kZS5hZGRDb21wb25lbnQoQmFzZVNwaW5lKTtcbiAgICAgIHRoaXMud2F0Y2hTcGluZSA9IHRoaXMud2F0Y2hOb2RlLmFkZENvbXBvbmVudChCYXNlU3BpbmUpO1xuICAgICAgdGhpcy5wb3BTcGluZS5tYXJrUmVhZHkoXCJcIik7XG4gICAgICB0aGlzLndhdGNoU3BpbmUubWFya1JlYWR5KFwiXCIpO1xuICAgICAgdGhpcy5ob29rTm9kZXMoKTtcbiAgICAgIHRoaXMuaXNJbml0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgdHJ5UGxheVBvcCgpIHtcbiAgICB0aGlzLmNvbmZpZyAmJiB0aGlzLmlzSW5pdCAmJiB0aGlzLnBsYXlBY3Rpb24oKTtcbiAgfVxuICBwbGF5QWN0aW9uKCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICB0aGlzLnBsYXlCdXR0b25JbkFjdGlvbigpO1xuICAgIHRoaXMucG9wU3BpbmUuc2V0QW5pbWF0aW9uKFwiaW5cIiwgMSwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGNjLmlzVmFsaWQoZS5wb3BTcGluZSkpIHtcbiAgICAgICAgZS5wb3BTcGluZS5zZXRBbmltYXRpb24oXCJpbml0XCIsIC0xKTtcbiAgICAgICAgZS5wbGF5QnV0dG9uSW5pdEFjdGlvbigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMud2F0Y2hTcGluZS5zZXRBbmltYXRpb24oXCJjbG9ja19pblwiLCAxLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjYy5pc1ZhbGlkKGUud2F0Y2hTcGluZSkgJiYgZS53YXRjaFNwaW5lLnNldEFuaW1hdGlvbihcImNsb2NrX2luaXRcIiwgLTEpO1xuICAgIH0pO1xuICB9XG4gIGhvb2tOb2RlcygpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgdGhpcy5wb3BTcGluZS5hdHRhY2hOb2RlKFwiY2xvY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGUudGltZXJOb2RlO1xuICAgIH0pO1xuICAgIHRoaXMucG9wU3BpbmUuYXR0YWNoTm9kZShcIkJ0bl9QbGF5X0dyZWVuXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBlLnBsYXlCdG47XG4gICAgfSk7XG4gICAgdGhpcy5wb3BTcGluZS5hdHRhY2hOb2RlKFwidGl0bGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGUudGl0bGVMYWJlbDtcbiAgICB9KTtcbiAgfVxuICBnZXRNZXNzYWdlTGlzdGVuZXJzKCkge1xuICAgIHZhciBfZSA9IHt9O1xuICAgIF9lW1RSQVZFTF9HQU1FX1NFU1NJT05fRU5EXSA9IHRoaXMub25UcmF2ZWxHYW1lU2Vzc2lvbkVuZC5iaW5kKHRoaXMpO1xuICAgIHJldHVybiBfZTtcbiAgfVxuICBvblRyYXZlbEdhbWVTZXNzaW9uRW5kKCkge1xuICAgIHZhciBlO1xuICAgIG51bGwgPT09IChlID0gdGhpcy5kZWxlZ2F0ZSkgfHwgdm9pZCAwID09PSBlIHx8IGUuY2xvc2UoKTtcbiAgfVxuICB1cGRhdGVEYXRhKGUpIHtcbiAgICB0aGlzLmNvbmZpZyA9IGUuY29uZmlnO1xuICAgIHRoaXMuaXNOZXdTZXNzaW9uID0gZS5pc05ld1Nlc3Npb247XG4gICAgdGhpcy51cGRhdGVUaW1lKCk7XG4gICAgRG90R2FtZUJ0bkNsaWNrLmRvdEhhbGwoRUhvbWVQYWdlQ2xpY2tUeXBlLlRyYXZlbERpYWxvZ0Rpc3BsYXllZCk7XG4gICAgdGhpcy50cnlQbGF5UG9wKCk7XG4gIH1cbiAgdXBkYXRlVGltZSgpIHtcbiAgICB2YXIgZSA9IHRoaXMsXG4gICAgICB0ID0gVHJhdmVsR2FtZU1vZGVsLmdldEluc3RhbmNlKCkuZ2V0UmVtYWluVGltZSgpO1xuICAgIHRoaXMuaXNOZXdTZXNzaW9uICYmICh0ID0gdGhpcy5jb25maWcuZHVyYXRpb24pO1xuICAgIHZhciByID0gX19yZWFkKEdhbWVVdGlscy5nZXRSZW1haW5UaW1lUGFydHModCksIDQpLFxuICAgICAgbiA9IHJbMF0sXG4gICAgICBvID0gclsxXSxcbiAgICAgIGkgPSByWzJdLFxuICAgICAgYyA9IChyWzNdLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICAgIH0pO1xuICAgIEkxOE5TdHJpbmdzLnNldFRleHQodGhpcy50aW1lckxhYmVsLCBjKG4pICsgXCJkXCIgKyBjKG8pICsgXCJoXCIgKyBjKGkpICsgXCJtXCIsIFwiQ29tbW9uX0NvdW50RG93bl9NaW51dGVcIiwgW24sIG8sIGldKTtcbiAgICB0aGlzLmlzTmV3U2Vzc2lvbiB8fCB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICBlLnVwZGF0ZVRpbWUoKTtcbiAgICB9LCA1KTtcbiAgfVxuICBvblBsYXlCdG5DbGljaygpIHtcbiAgICB2YXIgZTtcbiAgICBpZiAoVHJhdmVsR2FtZU1vZGVsLmdldEluc3RhbmNlKCkuaXNTZXNzaW9uQWN0aXZlKCkgfHwgdGhpcy5pc05ld1Nlc3Npb24pIHtcbiAgICAgIHRoaXMuaXNOZXdTZXNzaW9uICYmIHRoaXMuZGlzcGF0Y2hFdmVudChUUkFWRUxfR0FNRV9TRVNTSU9OX1NUQVJUKTtcbiAgICAgIERvdEdhbWVCdG5DbGljay5kb3RIYWxsKEVIb21lUGFnZUNsaWNrVHlwZS5UcmF2ZWxHYW1lU3RhcnQpO1xuICAgICAgdGhpcy5nb3RvVHJhdmVsTWFwKCk7XG4gICAgfSBlbHNlIG51bGwgPT09IChlID0gdGhpcy5kZWxlZ2F0ZSkgfHwgdm9pZCAwID09PSBlIHx8IGUuY2xvc2UoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRMVmFsVndfZ290b1RyYXZlbE1hcFwiKVxuICBnb3RvVHJhdmVsTWFwKCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hWaWV3QnlDb250cm9sbGVyKFwiVHJhdmVsTWFwQ29udHJvbGxlclwiLCB7fSwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHQ7XG4gICAgICBudWxsID09PSAodCA9IGUuZGVsZWdhdGUpIHx8IHZvaWQgMCA9PT0gdCB8fCB0LmNsb3NlKCk7XG4gICAgfSk7XG4gIH1cbiAgcGxheUJ1dHRvbkluQWN0aW9uKCkge1xuICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLnBsYXlCdG4pO1xuICAgIHRoaXMucGxheUJ0bi5vcGFjaXR5ID0gMDtcbiAgICB0aGlzLnBsYXlCdG4uc2NhbGUgPSAwLjc7XG4gICAgY2MudHdlZW4odGhpcy5wbGF5QnRuKS5kZWxheSgwLjEzMykudG8oMC4yLCB7XG4gICAgICBvcGFjaXR5OiAyNTUsXG4gICAgICBzY2FsZTogMS4xXG4gICAgfSkudG8oMC4zMzMsIHtcbiAgICAgIHNjYWxlOiAxXG4gICAgfSkudG8oMC41LCB7XG4gICAgICBzY2FsZTogMS4xXG4gICAgfSkudG8oMC40OTQsIHtcbiAgICAgIHNjYWxlOiAxXG4gICAgfSkuZGVsYXkoMS43NikudG8oMS42Nywge1xuICAgICAgc2NhbGU6IDFcbiAgICB9KS50bygwLjUsIHtcbiAgICAgIHNjYWxlOiAxLjFcbiAgICB9KS50bygwLjUsIHtcbiAgICAgIHNjYWxlOiAxXG4gICAgfSkuc3RhcnQoKTtcbiAgfVxuICBwbGF5QnV0dG9uSW5pdEFjdGlvbigpIHtcbiAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5wbGF5QnRuKTtcbiAgICB0aGlzLnBsYXlCdG4uc2NhbGUgPSAxO1xuICAgIHZhciBlID0gY2MudHdlZW4odGhpcy5wbGF5QnRuKS5zZXF1ZW5jZShjYy50d2VlbigpLnRvKDAuNSwge1xuICAgICAgc2NhbGU6IDEuMVxuICAgIH0pLCBjYy50d2VlbigpLnRvKDEsIHtcbiAgICAgIHNjYWxlOiAxXG4gICAgfSksIGNjLnR3ZWVuKCkuZGVsYXkoMikpO1xuICAgIGNjLnR3ZWVuKHRoaXMucGxheUJ0bikucmVwZWF0Rm9yZXZlcihlKS5zdGFydCgpO1xuICB9XG59Il19
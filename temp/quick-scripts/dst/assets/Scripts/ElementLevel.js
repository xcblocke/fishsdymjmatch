
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ElementLevel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c7846POpFdOV4jpzdZss0oR', 'ElementLevel');
// Scripts/ElementLevel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TravelMapInterface_1 = require("./TravelMapInterface");
var ElementBase_1 = require("./ElementBase");
var ControllerManager_1 = require("./framework/manager/ControllerManager");
var TravelGameModel_1 = require("./gamePlay/travel/model/TravelGameModel");
var TravelConfig_1 = require("./config/TravelConfig");
var DataReader_1 = require("./framework/data/DataReader");
var ConfigType_1 = require("./gamePlay/base/data/ConfigType");
var I18NStrings_1 = require("./framework/data/I18NStrings");
var DGameBtnClick_1 = require("./dot/DGameBtnClick");
var JumpManager_1 = require("./base/jump/JumpManager");
var ElementLevel = /** @class */ (function (_super) {
    __extends(ElementLevel, _super);
    function ElementLevel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElementLevel.prototype.uiOnLoad = function () {
        _super.prototype.uiOnLoad.call(this);
    };
    ElementLevel.prototype.getMessageListeners = function () {
        var _e = {};
        _e[TravelConfig_1.TRAVEL_GAME_COLLECT_BADGE] = this.onTravelGameCollectBadge.bind(this);
        return _e;
    };
    ElementLevel.prototype.onTravelGameCollectBadge = function (e) {
        if (this._data.level === e) {
            this._data.state = TravelMapInterface_1.EJourneyMapState.Unlocked;
            this.badgeCollectEnd();
        }
    };
    ElementLevel.prototype.badgeCollectStart = function () { };
    ElementLevel.prototype.badgeCollectEnd = function () {
        this._data.state = TravelMapInterface_1.EJourneyMapState.Unlocked;
    };
    ElementLevel.prototype.addBlockTouch = function () {
        var e = cc.Canvas.instance.node, t = new cc.Node();
        t.addComponent(cc.BlockInputEvents);
        t.setContentSize(e.getContentSize());
        t.setPosition(cc.Vec3.ZERO);
        e.addChild(t);
        cc.tween(e).delay(1).call(function () {
            t.destroy();
        }).start();
    };
    ElementLevel.prototype.updateUI = function () {
        if (cc.isValid(this.node.parent)) {
            _super.prototype.updateUI.call(this);
            this.resetState();
            if (this._data.state === TravelMapInterface_1.EJourneyMapState.Selected) {
                this.onLevelSelect();
            }
            else {
                if (this._data.state === TravelMapInterface_1.EJourneyMapState.Locked) {
                    this.onLevelLock();
                }
                else {
                    if (this._data.state === TravelMapInterface_1.EJourneyMapState.Unlocked) {
                        this.onLevelUnlock();
                    }
                    else {
                        if (this._data.state === TravelMapInterface_1.EJourneyMapState.Collecting) {
                            this.badgeCollectStart();
                        }
                        else {
                            if (this._data.state === TravelMapInterface_1.EJourneyMapState.UnlockedPass) {
                                this.onLevelUnlockPass();
                            }
                            else {
                                this._data.state === TravelMapInterface_1.EJourneyMapState.SelectedUnlocked && this.onLevelSelectUnlocked();
                            }
                        }
                    }
                }
            }
        }
    };
    ElementLevel.prototype.onLevelSelectUnlocked = function () {
        this.onLevelSelect();
    };
    ElementLevel.prototype.addLevelBtnClick = function (e, t, o) {
        if (o === void 0) { o = {}; }
        e && this.OnButtonClick(e, Object.assign({
            func: t
        }, o));
    };
    ElementLevel.prototype.getLevelState = function () {
        var e;
        return null === (e = this._data) || void 0 === e ? void 0 : e.state;
    };
    ElementLevel.prototype.getLevelType = function () {
        var e;
        return null === (e = this._data) || void 0 === e ? void 0 : e.type;
    };
    ElementLevel.prototype.isBadgeLevel = function () {
        var e, t = null === (e = this._data) || void 0 === e ? void 0 : e.level;
        if (!t)
            return false;
        var o = TravelGameModel_1.default.getInstance(), n = o.getCurJourney();
        return o.getRewardInfo(n).some(function (e) {
            return e.lv === t && e.type === TravelConfig_1.ETravelRewardType.EBadge;
        });
    };
    ElementLevel.prototype.getDesignZOrder = function () {
        if (!cc.isValid(this.node.parent))
            return 0;
        for (var e = this.node.parent.children, t = 0; t < e.length; t++)
            if (cc.isValid(e[t])) {
                var o = e[t].getComponent(ElementBase_1.default);
                if (o && o._data && TravelMapInterface_1.TopThanLevelElement.includes(o._data.type))
                    return t;
            }
        return e.length;
    };
    ElementLevel.prototype.goToTravelGame = function () {
        var e = this, t = TravelGameModel_1.default.getInstance();
        if (t.isSessionActive()) {
            if (this._data.state === TravelMapInterface_1.EJourneyMapState.Selected || this._data.state === TravelMapInterface_1.EJourneyMapState.SelectedUnlocked) {
                ControllerManager_1.default.getInstance().pushViewByController("TravelGameController", {}, function () {
                    var t;
                    null === (t = e.delegate) || void 0 === t || t.close();
                });
                var o = t.getCurJourney(), n = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.Travel, o);
                if (n) {
                    var i = I18NStrings_1.default.getCN(n.name);
                    DGameBtnClick_1.DotGameBtnClick.dotTravelMap(DGameBtnClick_1.ETravelMapClickType.Play, i, this._data.level);
                }
            }
        }
        else
            JumpManager_1.default.getInstance().jumpToHall();
    };
    __decorate([
        mj.traitEvent("ElemLv_addLevelBtn")
    ], ElementLevel.prototype, "addLevelBtnClick", null);
    ElementLevel = __decorate([
        mj.class
    ], ElementLevel);
    return ElementLevel;
}(ElementBase_1.default));
exports.default = ElementLevel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0VsZW1lbnRMZXZlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQTZFO0FBQzdFLDZDQUF3QztBQUN4QywyRUFBc0U7QUFDdEUsMkVBQXNFO0FBQ3RFLHNEQUFxRjtBQUNyRiwwREFBeUQ7QUFDekQsOERBQTZEO0FBQzdELDREQUF1RDtBQUN2RCxxREFBMkU7QUFDM0UsdURBQWtEO0FBRWxEO0lBQTBDLGdDQUFXO0lBQXJEOztJQThHQSxDQUFDO0lBN0dDLCtCQUFRLEdBQVI7UUFDRSxpQkFBTSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDRCwwQ0FBbUIsR0FBbkI7UUFDRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDWixFQUFFLENBQUMsd0NBQXlCLENBQUMsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pFLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUNELCtDQUF3QixHQUF4QixVQUF5QixDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLHFDQUFnQixDQUFDLFFBQVEsQ0FBQztZQUM3QyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBQ0Qsd0NBQWlCLEdBQWpCLGNBQXFCLENBQUM7SUFDdEIsc0NBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLHFDQUFnQixDQUFDLFFBQVEsQ0FBQztJQUMvQyxDQUFDO0lBQ0Qsb0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFDN0IsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNkLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN4QixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCwrQkFBUSxHQUFSO1FBQ0UsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDaEMsaUJBQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxxQ0FBZ0IsQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUN0QjtpQkFBTTtnQkFDTCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLHFDQUFnQixDQUFDLE1BQU0sRUFBRTtvQkFDaEQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2lCQUNwQjtxQkFBTTtvQkFDTCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLHFDQUFnQixDQUFDLFFBQVEsRUFBRTt3QkFDbEQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO3FCQUN0Qjt5QkFBTTt3QkFDTCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLHFDQUFnQixDQUFDLFVBQVUsRUFBRTs0QkFDcEQsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7eUJBQzFCOzZCQUFNOzRCQUNMLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUsscUNBQWdCLENBQUMsWUFBWSxFQUFFO2dDQUN0RCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzs2QkFDMUI7aUNBQU07Z0NBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUsscUNBQWdCLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7NkJBQ3hGO3lCQUNGO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFDRCw0Q0FBcUIsR0FBckI7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELHVDQUFnQixHQUFoQixVQUFpQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQU07UUFBTixrQkFBQSxFQUFBLE1BQU07UUFDM0IsQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDdkMsSUFBSSxFQUFFLENBQUM7U0FDUixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDVCxDQUFDO0lBQ0Qsb0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxDQUFDO1FBQ04sT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDdEUsQ0FBQztJQUNELG1DQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsQ0FBQztRQUNOLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3JFLENBQUM7SUFDRCxtQ0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNuRSxJQUFJLENBQUMsQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLHlCQUFlLENBQUMsV0FBVyxFQUFFLEVBQ25DLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEIsT0FBTyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDeEMsT0FBTyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLGdDQUFpQixDQUFDLE1BQU0sQ0FBQztRQUMzRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxzQ0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUM1QyxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtZQUFFLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdEYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxxQkFBVyxDQUFDLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksd0NBQW1CLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO29CQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQzFFO1FBQ0QsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFDRCxxQ0FBYyxHQUFkO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUNWLENBQUMsR0FBRyx5QkFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxDQUFDLGVBQWUsRUFBRSxFQUFFO1lBQ3ZCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUsscUNBQWdCLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLHFDQUFnQixDQUFDLGdCQUFnQixFQUFFO2dCQUM1RywyQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxzQkFBc0IsRUFBRSxFQUFFLEVBQUU7b0JBQy9FLElBQUksQ0FBQyxDQUFDO29CQUNOLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDekQsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUN2QixDQUFDLEdBQUcsdUJBQVUsQ0FBQyxRQUFRLENBQUMsdUJBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxFQUFFO29CQUNMLElBQUksQ0FBQyxHQUFHLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEMsK0JBQWUsQ0FBQyxZQUFZLENBQUMsbUNBQW1CLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUM3RTthQUNGO1NBQ0Y7O1lBQU0scUJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBaEREO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQzt3REFLbkM7SUFqRWtCLFlBQVk7UUFEaEMsRUFBRSxDQUFDLEtBQUs7T0FDWSxZQUFZLENBOEdoQztJQUFELG1CQUFDO0NBOUdELEFBOEdDLENBOUd5QyxxQkFBVyxHQThHcEQ7a0JBOUdvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUpvdXJuZXlNYXBTdGF0ZSwgVG9wVGhhbkxldmVsRWxlbWVudCB9IGZyb20gJy4vVHJhdmVsTWFwSW50ZXJmYWNlJztcbmltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuL0VsZW1lbnRCYXNlJztcbmltcG9ydCBDb250cm9sbGVyTWFuYWdlciBmcm9tICcuL2ZyYW1ld29yay9tYW5hZ2VyL0NvbnRyb2xsZXJNYW5hZ2VyJztcbmltcG9ydCBUcmF2ZWxHYW1lTW9kZWwgZnJvbSAnLi9nYW1lUGxheS90cmF2ZWwvbW9kZWwvVHJhdmVsR2FtZU1vZGVsJztcbmltcG9ydCB7IFRSQVZFTF9HQU1FX0NPTExFQ1RfQkFER0UsIEVUcmF2ZWxSZXdhcmRUeXBlIH0gZnJvbSAnLi9jb25maWcvVHJhdmVsQ29uZmlnJztcbmltcG9ydCB7IERhdGFSZWFkZXIgfSBmcm9tICcuL2ZyYW1ld29yay9kYXRhL0RhdGFSZWFkZXInO1xuaW1wb3J0IHsgQ29uZmlnVHlwZSB9IGZyb20gJy4vZ2FtZVBsYXkvYmFzZS9kYXRhL0NvbmZpZ1R5cGUnO1xuaW1wb3J0IEkxOE5TdHJpbmdzIGZyb20gJy4vZnJhbWV3b3JrL2RhdGEvSTE4TlN0cmluZ3MnO1xuaW1wb3J0IHsgRG90R2FtZUJ0bkNsaWNrLCBFVHJhdmVsTWFwQ2xpY2tUeXBlIH0gZnJvbSAnLi9kb3QvREdhbWVCdG5DbGljayc7XG5pbXBvcnQgSnVtcE1hbmFnZXIgZnJvbSAnLi9iYXNlL2p1bXAvSnVtcE1hbmFnZXInO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50TGV2ZWwgZXh0ZW5kcyBFbGVtZW50QmFzZSB7XG4gIHVpT25Mb2FkKCkge1xuICAgIHN1cGVyLnVpT25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgZ2V0TWVzc2FnZUxpc3RlbmVycygpIHtcbiAgICB2YXIgX2UgPSB7fTtcbiAgICBfZVtUUkFWRUxfR0FNRV9DT0xMRUNUX0JBREdFXSA9IHRoaXMub25UcmF2ZWxHYW1lQ29sbGVjdEJhZGdlLmJpbmQodGhpcyk7XG4gICAgcmV0dXJuIF9lO1xuICB9XG4gIG9uVHJhdmVsR2FtZUNvbGxlY3RCYWRnZShlKSB7XG4gICAgaWYgKHRoaXMuX2RhdGEubGV2ZWwgPT09IGUpIHtcbiAgICAgIHRoaXMuX2RhdGEuc3RhdGUgPSBFSm91cm5leU1hcFN0YXRlLlVubG9ja2VkO1xuICAgICAgdGhpcy5iYWRnZUNvbGxlY3RFbmQoKTtcbiAgICB9XG4gIH1cbiAgYmFkZ2VDb2xsZWN0U3RhcnQoKSB7fVxuICBiYWRnZUNvbGxlY3RFbmQoKSB7XG4gICAgdGhpcy5fZGF0YS5zdGF0ZSA9IEVKb3VybmV5TWFwU3RhdGUuVW5sb2NrZWQ7XG4gIH1cbiAgYWRkQmxvY2tUb3VjaCgpIHtcbiAgICB2YXIgZSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLFxuICAgICAgdCA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgdC5hZGRDb21wb25lbnQoY2MuQmxvY2tJbnB1dEV2ZW50cyk7XG4gICAgdC5zZXRDb250ZW50U2l6ZShlLmdldENvbnRlbnRTaXplKCkpO1xuICAgIHQuc2V0UG9zaXRpb24oY2MuVmVjMy5aRVJPKTtcbiAgICBlLmFkZENoaWxkKHQpO1xuICAgIGNjLnR3ZWVuKGUpLmRlbGF5KDEpLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgdC5kZXN0cm95KCk7XG4gICAgfSkuc3RhcnQoKTtcbiAgfVxuICB1cGRhdGVVSSgpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLm5vZGUucGFyZW50KSkge1xuICAgICAgc3VwZXIudXBkYXRlVUkuY2FsbCh0aGlzKTtcbiAgICAgIHRoaXMucmVzZXRTdGF0ZSgpO1xuICAgICAgaWYgKHRoaXMuX2RhdGEuc3RhdGUgPT09IEVKb3VybmV5TWFwU3RhdGUuU2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5vbkxldmVsU2VsZWN0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5fZGF0YS5zdGF0ZSA9PT0gRUpvdXJuZXlNYXBTdGF0ZS5Mb2NrZWQpIHtcbiAgICAgICAgICB0aGlzLm9uTGV2ZWxMb2NrKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2RhdGEuc3RhdGUgPT09IEVKb3VybmV5TWFwU3RhdGUuVW5sb2NrZWQpIHtcbiAgICAgICAgICAgIHRoaXMub25MZXZlbFVubG9jaygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fZGF0YS5zdGF0ZSA9PT0gRUpvdXJuZXlNYXBTdGF0ZS5Db2xsZWN0aW5nKSB7XG4gICAgICAgICAgICAgIHRoaXMuYmFkZ2VDb2xsZWN0U3RhcnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLl9kYXRhLnN0YXRlID09PSBFSm91cm5leU1hcFN0YXRlLlVubG9ja2VkUGFzcykge1xuICAgICAgICAgICAgICAgIHRoaXMub25MZXZlbFVubG9ja1Bhc3MoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXRhLnN0YXRlID09PSBFSm91cm5leU1hcFN0YXRlLlNlbGVjdGVkVW5sb2NrZWQgJiYgdGhpcy5vbkxldmVsU2VsZWN0VW5sb2NrZWQoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbkxldmVsU2VsZWN0VW5sb2NrZWQoKSB7XG4gICAgdGhpcy5vbkxldmVsU2VsZWN0KCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJFbGVtTHZfYWRkTGV2ZWxCdG5cIilcbiAgYWRkTGV2ZWxCdG5DbGljayhlLCB0LCBvID0ge30pIHtcbiAgICBlICYmIHRoaXMuT25CdXR0b25DbGljayhlLCBPYmplY3QuYXNzaWduKHtcbiAgICAgIGZ1bmM6IHRcbiAgICB9LCBvKSk7XG4gIH1cbiAgZ2V0TGV2ZWxTdGF0ZSgpIHtcbiAgICB2YXIgZTtcbiAgICByZXR1cm4gbnVsbCA9PT0gKGUgPSB0aGlzLl9kYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLnN0YXRlO1xuICB9XG4gIGdldExldmVsVHlwZSgpIHtcbiAgICB2YXIgZTtcbiAgICByZXR1cm4gbnVsbCA9PT0gKGUgPSB0aGlzLl9kYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLnR5cGU7XG4gIH1cbiAgaXNCYWRnZUxldmVsKCkge1xuICAgIHZhciBlLFxuICAgICAgdCA9IG51bGwgPT09IChlID0gdGhpcy5fZGF0YSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5sZXZlbDtcbiAgICBpZiAoIXQpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgbyA9IFRyYXZlbEdhbWVNb2RlbC5nZXRJbnN0YW5jZSgpLFxuICAgICAgbiA9IG8uZ2V0Q3VySm91cm5leSgpO1xuICAgIHJldHVybiBvLmdldFJld2FyZEluZm8obikuc29tZShmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGUubHYgPT09IHQgJiYgZS50eXBlID09PSBFVHJhdmVsUmV3YXJkVHlwZS5FQmFkZ2U7XG4gICAgfSk7XG4gIH1cbiAgZ2V0RGVzaWduWk9yZGVyKCkge1xuICAgIGlmICghY2MuaXNWYWxpZCh0aGlzLm5vZGUucGFyZW50KSkgcmV0dXJuIDA7XG4gICAgZm9yICh2YXIgZSA9IHRoaXMubm9kZS5wYXJlbnQuY2hpbGRyZW4sIHQgPSAwOyB0IDwgZS5sZW5ndGg7IHQrKykgaWYgKGNjLmlzVmFsaWQoZVt0XSkpIHtcbiAgICAgIHZhciBvID0gZVt0XS5nZXRDb21wb25lbnQoRWxlbWVudEJhc2UpO1xuICAgICAgaWYgKG8gJiYgby5fZGF0YSAmJiBUb3BUaGFuTGV2ZWxFbGVtZW50LmluY2x1ZGVzKG8uX2RhdGEudHlwZSkpIHJldHVybiB0O1xuICAgIH1cbiAgICByZXR1cm4gZS5sZW5ndGg7XG4gIH1cbiAgZ29Ub1RyYXZlbEdhbWUoKSB7XG4gICAgdmFyIGUgPSB0aGlzLFxuICAgICAgdCA9IFRyYXZlbEdhbWVNb2RlbC5nZXRJbnN0YW5jZSgpO1xuICAgIGlmICh0LmlzU2Vzc2lvbkFjdGl2ZSgpKSB7XG4gICAgICBpZiAodGhpcy5fZGF0YS5zdGF0ZSA9PT0gRUpvdXJuZXlNYXBTdGF0ZS5TZWxlY3RlZCB8fCB0aGlzLl9kYXRhLnN0YXRlID09PSBFSm91cm5leU1hcFN0YXRlLlNlbGVjdGVkVW5sb2NrZWQpIHtcbiAgICAgICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIlRyYXZlbEdhbWVDb250cm9sbGVyXCIsIHt9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIHQ7XG4gICAgICAgICAgbnVsbCA9PT0gKHQgPSBlLmRlbGVnYXRlKSB8fCB2b2lkIDAgPT09IHQgfHwgdC5jbG9zZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIG8gPSB0LmdldEN1ckpvdXJuZXkoKSxcbiAgICAgICAgICBuID0gRGF0YVJlYWRlci5nZXRCeUtleShDb25maWdUeXBlLlRyYXZlbCwgbyk7XG4gICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgdmFyIGkgPSBJMThOU3RyaW5ncy5nZXRDTihuLm5hbWUpO1xuICAgICAgICAgIERvdEdhbWVCdG5DbGljay5kb3RUcmF2ZWxNYXAoRVRyYXZlbE1hcENsaWNrVHlwZS5QbGF5LCBpLCB0aGlzLl9kYXRhLmxldmVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBKdW1wTWFuYWdlci5nZXRJbnN0YW5jZSgpLmp1bXBUb0hhbGwoKTtcbiAgfVxufSJdfQ==
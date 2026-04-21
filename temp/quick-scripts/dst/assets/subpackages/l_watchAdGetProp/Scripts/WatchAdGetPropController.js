
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_watchAdGetProp/Scripts/WatchAdGetPropController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eff7dFb/2FBHY9BuqkkAw2V', 'WatchAdGetPropController');
// subpackages/l_watchAdGetProp/Scripts/WatchAdGetPropController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var GameInteraction_1 = require("../../../Scripts/GameInteraction/GameInteraction");
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var DGameAdShow_1 = require("../../../Scripts/gamePlay/dot/DGameAdShow");
var DGameAdShowStage_1 = require("../../../Scripts/gamePlay/dot/DGameAdShowStage");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var WatchAdGetPropView_1 = require("./WatchAdGetPropView");
var WatchAdGetPropController = /** @class */ (function (_super) {
    __extends(WatchAdGetPropController, _super);
    function WatchAdGetPropController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = WatchAdGetPropView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        _this._propType = null;
        return _this;
    }
    WatchAdGetPropController.prototype.getMessageListeners = function () {
        return {};
    };
    WatchAdGetPropController.prototype.getPropType = function () {
        return this._propType;
    };
    WatchAdGetPropController.prototype.viewDidLoad = function () {
        var e;
        _super.prototype.viewDidLoad.call(this);
        this._propType = null === (e = this.args) || void 0 === e ? void 0 : e.type;
        if (null != this._propType)
            this.viewDoAction("setContent", this._propType);
        else {
            console.error("[WatchAdGetPropController] 未传入道具类型");
            this.close();
        }
    };
    WatchAdGetPropController.prototype.refreshForReuse = function (e) {
        _super.prototype.refreshForReuse.call(this, e);
        this._propType = null == e ? void 0 : e.type;
        this.viewDoAction("setContent", this._propType);
    };
    WatchAdGetPropController.prototype.playAd = function () {
        var t, e, r = this;
        if (this._propType === WatchAdGetPropView_1.WatchAdGetPropType.shuffle) {
            t = "watchad_get_shuffle";
            e = DGameAdShow_1.EAdPosition.InGameMotivation_Reshuffle;
        }
        else if (this._propType === WatchAdGetPropView_1.WatchAdGetPropType.hitTips) {
            t = "watchad_get_hint";
            e = DGameAdShow_1.EAdPosition.InGameMotivation_Hint;
        }
        else {
            t = "watchad_get_revert";
            e = DGameAdShow_1.EAdPosition.InGameMotivation_Revert;
        }
        DGameAdShowStage_1.DotGameAdShowStage.dot(false, "clickAdLock");
        AdManager_1.default.getInstance().checkVideoAdIsReady() && cc.isValid(this.rootView) && (this.rootView.opacity = 0);
        AdManager_1.default.getInstance().playVideoAd(e, {
            onSuccess: function () {
                r.onAdSuccess();
            },
            onFailed: function (t) {
                r.onAdFailed(t);
            }
        }, t, {
            type: this._propType
        });
    };
    WatchAdGetPropController.prototype.onAdSuccess = function () {
        cc.isValid(this.rootView) && this.close();
        var t;
        t = this._propType === WatchAdGetPropView_1.WatchAdGetPropType.shuffle ? "shuffle" : this._propType === WatchAdGetPropView_1.WatchAdGetPropType.hitTips ? "hitTips" : "revert";
        var e = UserModel_1.default.getInstance().getCurrentGameType(), r = {
            inputType: GameUtils_1.default.getInputAddPropType(e),
            propType: t,
            num: this.getWatchAdItemNum(t),
            reasonId: GameTypeEnums_1.EGetItemReasonId.AdReward,
            reasonInfo: "游戏内激励广告"
        };
        GameInteraction_1.GameInteraction.input(r);
        this.autoUseItem(t);
    };
    WatchAdGetPropController.prototype.autoUseItem = function (t) {
        var e = UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal;
        if ("shuffle" === t) {
            var r = e ? GameInputEnum_1.EGameInputEnum.Tile2Shuffle : GameInputEnum_1.EGameInputEnum.Shuffle;
            GameInteraction_1.GameInteraction.input({
                inputType: r,
                from: GameInputEnum_1.EShuffleFrom.WatchAd,
                isFree: false
            });
        }
        else if ("hitTips" === t) {
            r = e ? GameInputEnum_1.EGameInputEnum.Tile2HitTips : GameInputEnum_1.EGameInputEnum.HitTips;
            GameInteraction_1.GameInteraction.input({
                inputType: r
            });
        }
        else
            "revert" === t && GameInteraction_1.GameInteraction.input({
                inputType: GameInputEnum_1.EGameInputEnum.Tile2Revert
            });
    };
    WatchAdGetPropController.prototype.getWatchAdItemNum = function (t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal) {
            if ("shuffle" === t)
                return 1;
            if ("hitTips" === t)
                return 2;
            if ("revert" === t)
                return 2;
        }
        return 1;
    };
    WatchAdGetPropController.prototype.onAdFailed = function (t) {
        this.rootView && cc.isValid(this.rootView) && (t ? cc.isValid(this.rootView) && (this.rootView.opacity = 255) : this.close());
    };
    __decorate([
        mj.traitEvent("WatchAdCtrl_playAd")
    ], WatchAdGetPropController.prototype, "playAd", null);
    __decorate([
        mj.traitEvent("WatchAdCtrl_onAdSuccess")
    ], WatchAdGetPropController.prototype, "onAdSuccess", null);
    __decorate([
        mj.traitEvent("WatchAdCtrl_autoUse")
    ], WatchAdGetPropController.prototype, "autoUseItem", null);
    __decorate([
        mj.traitEvent("WatchAdCtrl_itemNum")
    ], WatchAdGetPropController.prototype, "getWatchAdItemNum", null);
    WatchAdGetPropController = __decorate([
        mj.class("WatchAdGetPropController")
    ], WatchAdGetPropController);
    return WatchAdGetPropController;
}(ViewController_1.default));
exports.default = WatchAdGetPropController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3dhdGNoQWRHZXRQcm9wL1NjcmlwdHMvV2F0Y2hBZEdldFByb3BDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtRkFBaUc7QUFDakcsd0ZBQXNHO0FBQ3RHLDRFQUF1RTtBQUN2RSxvRkFBbUY7QUFDbkYsdUZBQWdHO0FBQ2hHLGdFQUEyRDtBQUMzRCx5RUFBd0U7QUFDeEUsbUZBQW9GO0FBQ3BGLHNFQUFpRTtBQUNqRSwyREFBOEU7QUFFOUU7SUFBc0QsNENBQWM7SUFBcEU7UUFBQSxxRUFtR0M7UUFsR0MsZUFBUyxHQUFHLDRCQUFrQixDQUFDO1FBQy9CLGNBQVEsR0FBRyx5QkFBUSxDQUFDLEtBQUssQ0FBQztRQUMxQixlQUFTLEdBQUcsSUFBSSxDQUFDOztJQWdHbkIsQ0FBQztJQS9GQyxzREFBbUIsR0FBbkI7UUFDRSxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFDRCw4Q0FBVyxHQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCw4Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDTixpQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzVFLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTO1lBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQUs7WUFDL0UsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1lBQ3BE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O0lBQ1gsQ0FBQztJQUNELDZDQUFVLEdBQVYsVUFBVyxDQUFDO1FBQ1YsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDaEksQ0FBQztJQXpFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUM7MERBMkJuQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQzsrREFleEM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7K0RBa0JwQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztxRUFRcEM7SUEvRmtCLHdCQUF3QjtRQUQ1QyxFQUFFLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUFDO09BQ2hCLHdCQUF3QixDQW1HNUM7SUFBRCwrQkFBQztDQW5HRCxBQW1HQyxDQW5HcUQsd0JBQWMsR0FtR25FO2tCQW5Hb0Isd0JBQXdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUdhbWVJbnB1dEVudW0sIEVTaHVmZmxlRnJvbSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgRUdldEl0ZW1SZWFzb25JZCwgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgR2FtZVV0aWxzIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvdXRpbC9HYW1lVXRpbHMnO1xuaW1wb3J0IHsgR2FtZUludGVyYWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9HYW1lSW50ZXJhY3Rpb24vR2FtZUludGVyYWN0aW9uJztcbmltcG9ydCBWaWV3Q29udHJvbGxlciwgeyB2aWV3TW9kZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2NvbnRyb2xsZXIvVmlld0NvbnRyb2xsZXInO1xuaW1wb3J0IEFkTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2Jhc2UvYWQvQWRNYW5hZ2VyJztcbmltcG9ydCB7IEVBZFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9kb3QvREdhbWVBZFNob3cnO1xuaW1wb3J0IHsgRG90R2FtZUFkU2hvd1N0YWdlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9kb3QvREdhbWVBZFNob3dTdGFnZSc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IFdhdGNoQWRHZXRQcm9wVmlldywgeyBXYXRjaEFkR2V0UHJvcFR5cGUgfSBmcm9tICcuL1dhdGNoQWRHZXRQcm9wVmlldyc7XG5AbWouY2xhc3MoXCJXYXRjaEFkR2V0UHJvcENvbnRyb2xsZXJcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhdGNoQWRHZXRQcm9wQ29udHJvbGxlciBleHRlbmRzIFZpZXdDb250cm9sbGVyIHtcbiAgdmlld0NsYXNzID0gV2F0Y2hBZEdldFByb3BWaWV3O1xuICB2aWV3TW9kZSA9IHZpZXdNb2RlLkFMRVJUO1xuICBfcHJvcFR5cGUgPSBudWxsO1xuICBnZXRNZXNzYWdlTGlzdGVuZXJzKCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICBnZXRQcm9wVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvcFR5cGU7XG4gIH1cbiAgdmlld0RpZExvYWQoKSB7XG4gICAgdmFyIGU7XG4gICAgc3VwZXIudmlld0RpZExvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9wcm9wVHlwZSA9IG51bGwgPT09IChlID0gdGhpcy5hcmdzKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLnR5cGU7XG4gICAgaWYgKG51bGwgIT0gdGhpcy5fcHJvcFR5cGUpIHRoaXMudmlld0RvQWN0aW9uKFwic2V0Q29udGVudFwiLCB0aGlzLl9wcm9wVHlwZSk7ZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1dhdGNoQWRHZXRQcm9wQ29udHJvbGxlcl0g5pyq5Lyg5YWl6YGT5YW357G75Z6LXCIpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuICByZWZyZXNoRm9yUmV1c2UoZSkge1xuICAgIHN1cGVyLnJlZnJlc2hGb3JSZXVzZS5jYWxsKHRoaXMsIGUpO1xuICAgIHRoaXMuX3Byb3BUeXBlID0gbnVsbCA9PSBlID8gdm9pZCAwIDogZS50eXBlO1xuICAgIHRoaXMudmlld0RvQWN0aW9uKFwic2V0Q29udGVudFwiLCB0aGlzLl9wcm9wVHlwZSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJXYXRjaEFkQ3RybF9wbGF5QWRcIilcbiAgcGxheUFkKCkge1xuICAgIHZhciB0LFxuICAgICAgZSxcbiAgICAgIHIgPSB0aGlzO1xuICAgIGlmICh0aGlzLl9wcm9wVHlwZSA9PT0gV2F0Y2hBZEdldFByb3BUeXBlLnNodWZmbGUpIHtcbiAgICAgIHQgPSBcIndhdGNoYWRfZ2V0X3NodWZmbGVcIjtcbiAgICAgIGUgPSBFQWRQb3NpdGlvbi5JbkdhbWVNb3RpdmF0aW9uX1Jlc2h1ZmZsZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3Byb3BUeXBlID09PSBXYXRjaEFkR2V0UHJvcFR5cGUuaGl0VGlwcykge1xuICAgICAgdCA9IFwid2F0Y2hhZF9nZXRfaGludFwiO1xuICAgICAgZSA9IEVBZFBvc2l0aW9uLkluR2FtZU1vdGl2YXRpb25fSGludDtcbiAgICB9IGVsc2Uge1xuICAgICAgdCA9IFwid2F0Y2hhZF9nZXRfcmV2ZXJ0XCI7XG4gICAgICBlID0gRUFkUG9zaXRpb24uSW5HYW1lTW90aXZhdGlvbl9SZXZlcnQ7XG4gICAgfVxuICAgIERvdEdhbWVBZFNob3dTdGFnZS5kb3QoZmFsc2UsIFwiY2xpY2tBZExvY2tcIik7XG4gICAgQWRNYW5hZ2VyLmdldEluc3RhbmNlKCkuY2hlY2tWaWRlb0FkSXNSZWFkeSgpICYmIGNjLmlzVmFsaWQodGhpcy5yb290VmlldykgJiYgKHRoaXMucm9vdFZpZXcub3BhY2l0eSA9IDApO1xuICAgIEFkTWFuYWdlci5nZXRJbnN0YW5jZSgpLnBsYXlWaWRlb0FkKGUsIHtcbiAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICByLm9uQWRTdWNjZXNzKCk7XG4gICAgICB9LFxuICAgICAgb25GYWlsZWQ6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHIub25BZEZhaWxlZCh0KTtcbiAgICAgIH1cbiAgICB9LCB0LCB7XG4gICAgICB0eXBlOiB0aGlzLl9wcm9wVHlwZVxuICAgIH0pO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiV2F0Y2hBZEN0cmxfb25BZFN1Y2Nlc3NcIilcbiAgb25BZFN1Y2Nlc3MoKSB7XG4gICAgY2MuaXNWYWxpZCh0aGlzLnJvb3RWaWV3KSAmJiB0aGlzLmNsb3NlKCk7XG4gICAgdmFyIHQ7XG4gICAgdCA9IHRoaXMuX3Byb3BUeXBlID09PSBXYXRjaEFkR2V0UHJvcFR5cGUuc2h1ZmZsZSA/IFwic2h1ZmZsZVwiIDogdGhpcy5fcHJvcFR5cGUgPT09IFdhdGNoQWRHZXRQcm9wVHlwZS5oaXRUaXBzID8gXCJoaXRUaXBzXCIgOiBcInJldmVydFwiO1xuICAgIHZhciBlID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCksXG4gICAgICByID0ge1xuICAgICAgICBpbnB1dFR5cGU6IEdhbWVVdGlscy5nZXRJbnB1dEFkZFByb3BUeXBlKGUpLFxuICAgICAgICBwcm9wVHlwZTogdCxcbiAgICAgICAgbnVtOiB0aGlzLmdldFdhdGNoQWRJdGVtTnVtKHQpLFxuICAgICAgICByZWFzb25JZDogRUdldEl0ZW1SZWFzb25JZC5BZFJld2FyZCxcbiAgICAgICAgcmVhc29uSW5mbzogXCLmuLjmiI/lhoXmv4DlirHlub/lkYpcIlxuICAgICAgfTtcbiAgICBHYW1lSW50ZXJhY3Rpb24uaW5wdXQocik7XG4gICAgdGhpcy5hdXRvVXNlSXRlbSh0KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIldhdGNoQWRDdHJsX2F1dG9Vc2VcIilcbiAgYXV0b1VzZUl0ZW0odCkge1xuICAgIHZhciBlID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgPT09IE1qR2FtZVR5cGUuVGlsZTJOb3JtYWw7XG4gICAgaWYgKFwic2h1ZmZsZVwiID09PSB0KSB7XG4gICAgICB2YXIgciA9IGUgPyBFR2FtZUlucHV0RW51bS5UaWxlMlNodWZmbGUgOiBFR2FtZUlucHV0RW51bS5TaHVmZmxlO1xuICAgICAgR2FtZUludGVyYWN0aW9uLmlucHV0KHtcbiAgICAgICAgaW5wdXRUeXBlOiByLFxuICAgICAgICBmcm9tOiBFU2h1ZmZsZUZyb20uV2F0Y2hBZCxcbiAgICAgICAgaXNGcmVlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChcImhpdFRpcHNcIiA9PT0gdCkge1xuICAgICAgciA9IGUgPyBFR2FtZUlucHV0RW51bS5UaWxlMkhpdFRpcHMgOiBFR2FtZUlucHV0RW51bS5IaXRUaXBzO1xuICAgICAgR2FtZUludGVyYWN0aW9uLmlucHV0KHtcbiAgICAgICAgaW5wdXRUeXBlOiByXG4gICAgICB9KTtcbiAgICB9IGVsc2UgXCJyZXZlcnRcIiA9PT0gdCAmJiBHYW1lSW50ZXJhY3Rpb24uaW5wdXQoe1xuICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5UaWxlMlJldmVydFxuICAgIH0pO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiV2F0Y2hBZEN0cmxfaXRlbU51bVwiKVxuICBnZXRXYXRjaEFkSXRlbU51bSh0KSB7XG4gICAgaWYgKFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpID09PSBNakdhbWVUeXBlLlRpbGUyTm9ybWFsKSB7XG4gICAgICBpZiAoXCJzaHVmZmxlXCIgPT09IHQpIHJldHVybiAxO1xuICAgICAgaWYgKFwiaGl0VGlwc1wiID09PSB0KSByZXR1cm4gMjtcbiAgICAgIGlmIChcInJldmVydFwiID09PSB0KSByZXR1cm4gMjtcbiAgICB9XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgb25BZEZhaWxlZCh0KSB7XG4gICAgdGhpcy5yb290VmlldyAmJiBjYy5pc1ZhbGlkKHRoaXMucm9vdFZpZXcpICYmICh0ID8gY2MuaXNWYWxpZCh0aGlzLnJvb3RWaWV3KSAmJiAodGhpcy5yb290Vmlldy5vcGFjaXR5ID0gMjU1KSA6IHRoaXMuY2xvc2UoKSk7XG4gIH1cbn0iXX0=
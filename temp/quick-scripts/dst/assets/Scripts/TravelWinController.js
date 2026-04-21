
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/TravelWinController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RyYXZlbFdpbkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9FQUFvRTtBQUNwRSx5RUFBMkU7QUFDM0UsdUVBQWtFO0FBQ2xFLHFFQUFvRTtBQUNwRSx3RUFBaUY7QUFDakYsMERBQXlEO0FBQ3pELDZEQUF1RTtBQUN2RSw4REFBNkQ7QUFDN0QsOENBQStDO0FBQy9DLHNEQUEwRDtBQUMxRCwyRUFBc0U7QUFDdEUsc0RBQWlEO0FBRWpEO0lBQWlELHVDQUFjO0lBQS9EO1FBQUEscUVBd0RDO1FBdkRDLGVBQVMsR0FBRyx1QkFBYSxDQUFDO1FBQzFCLGNBQVEsR0FBRyx5QkFBUSxDQUFDLEtBQUssQ0FBQzs7SUFzRDVCLENBQUM7SUFwREMsMkNBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLDZCQUE2QixDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUNELHlDQUFXLEdBQVg7UUFDRSxpQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFDM0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDUixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsNENBQWMsR0FBZCxVQUFlLENBQUM7UUFDZCxJQUFJLENBQUMsR0FBRyx3QkFBYyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVB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QztJQUMxSSxDQUFDO0lBbkREO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQzs0REFHbEM7SUErQkQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDOzBEQUtuQztJQXpDa0IsbUJBQW1CO1FBRHZDLEVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUM7T0FDWCxtQkFBbUIsQ0F3RHZDO0lBQUQsMEJBQUM7Q0F4REQsQUF3REMsQ0F4RGdELHdCQUFjLEdBd0Q5RDtrQkF4RG9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVHYW1lSW5wdXRFbnVtIH0gZnJvbSAnLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBFR2V0SXRlbVJlYXNvbklkIH0gZnJvbSAnLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBUcmF2ZWxHYW1lRGF0YSBmcm9tICcuL2NvcmUvc2ltdWxhdG9yL2RhdGEvVHJhdmVsR2FtZURhdGEnO1xuaW1wb3J0IHsgR2FtZUludGVyYWN0aW9uIH0gZnJvbSAnLi9HYW1lSW50ZXJhY3Rpb24vR2FtZUludGVyYWN0aW9uJztcbmltcG9ydCBWaWV3Q29udHJvbGxlciwgeyB2aWV3TW9kZSB9IGZyb20gJy4vZnJhbWV3b3JrL2NvbnRyb2xsZXIvVmlld0NvbnRyb2xsZXInO1xuaW1wb3J0IHsgRGF0YVJlYWRlciB9IGZyb20gJy4vZnJhbWV3b3JrL2RhdGEvRGF0YVJlYWRlcic7XG5pbXBvcnQgQmFkZ2VNb2RlLCB7IEJhZGdlVHlwZSB9IGZyb20gJy4vZ2FtZVBsYXkvYmFkZ2UvbW9kZS9CYWRnZU1vZGUnO1xuaW1wb3J0IHsgQ29uZmlnVHlwZSB9IGZyb20gJy4vZ2FtZVBsYXkvYmFzZS9kYXRhL0NvbmZpZ1R5cGUnO1xuaW1wb3J0IHsgSXRlbVR5cGVLZXkgfSBmcm9tICcuL3VzZXIvSVVzZXJEYXRhJztcbmltcG9ydCB7IEVUcmF2ZWxSZXdhcmRUeXBlIH0gZnJvbSAnLi9jb25maWcvVHJhdmVsQ29uZmlnJztcbmltcG9ydCBUcmF2ZWxHYW1lTW9kZWwgZnJvbSAnLi9nYW1lUGxheS90cmF2ZWwvbW9kZWwvVHJhdmVsR2FtZU1vZGVsJztcbmltcG9ydCBUcmF2ZWxXaW5WaWV3IGZyb20gJy4vdmlldy9UcmF2ZWxXaW5WaWV3JztcbkBtai5jbGFzcyhcIlRyYXZlbFdpbkNvbnRyb2xsZXJcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYXZlbFdpbkNvbnRyb2xsZXIgZXh0ZW5kcyBWaWV3Q29udHJvbGxlciB7XG4gIHZpZXdDbGFzcyA9IFRyYXZlbFdpblZpZXc7XG4gIHZpZXdNb2RlID0gdmlld01vZGUuUEFORUw7XG4gIEBtai50cmFpdEV2ZW50KFwiVExXaW5DdHJsX2luaXRSZXNcIilcbiAgaW5pdERlcGVuZFJlcygpIHtcbiAgICB0aGlzLmFkZFByZWxvYWRSZXMoXCJQcmVmYWJcIiwgXCJwcmVmYWJzL2pvdXJuZXkvQ29sbGVjdEl0ZW1cIik7XG4gIH1cbiAgdmlld0RpZExvYWQoKSB7XG4gICAgc3VwZXIudmlld0RpZExvYWQuY2FsbCh0aGlzKTtcbiAgICB2YXIgdCA9IF9fcmVhZCh0aGlzLmNhbkdhaW5UcmF2ZWxSZXdhcmQoKSwgMiksXG4gICAgICBvID0gdFswXSxcbiAgICAgIG4gPSB0WzFdO1xuICAgIG8gJiYgdGhpcy5hZGRMZXZlbFJld2FyZChuKTtcbiAgICB0aGlzLmFyZ3MuY2FuR2FpbiA9IG87XG4gICAgdGhpcy52aWV3RG9BY3Rpb24oXCJvblZpZXdMb2FkXCIsIHRoaXMuYXJncyk7XG4gIH1cbiAgYWRkTGV2ZWxSZXdhcmQoZSkge1xuICAgIHZhciB0ID0gVHJhdmVsR2FtZURhdGEuZ2V0SW5zdGFuY2UoKS5nZXRMZXZlbElkKCkgLSAxLFxuICAgICAgbyA9IFRyYXZlbEdhbWVNb2RlbC5nZXRJbnN0YW5jZSgpLFxuICAgICAgbiA9IERhdGFSZWFkZXIuZ2V0QnlLZXkoQ29uZmlnVHlwZS5yZXdhcmRfY29uZmlnLCBlLnJld2FyZCk7XG4gICAgaWYgKGUudHlwZSA9PT0gRVRyYXZlbFJld2FyZFR5cGUuRUJhZGdlKSB7XG4gICAgICB2YXIgaSA9IERhdGFSZWFkZXIuZ2V0QnlLZXkoQ29uZmlnVHlwZS5pdGVtX2NvbmZpZywgbi5JdGVtc1swXSk7XG4gICAgICBCYWRnZU1vZGUuZ2V0SW5zdGFuY2UoKS5hZGRCYWRnZShpLklELCBCYWRnZVR5cGUuSm91cm5leSwgby5nZXRDdXJKb3VybmV5KCkpO1xuICAgIH0gZWxzZSBpZiAoZS50eXBlID09PSBFVHJhdmVsUmV3YXJkVHlwZS5FR2lmdEJveCkgZm9yICh2YXIgciA9IG4uSXRlbXMsIGEgPSAwOyBhIDwgci5sZW5ndGg7IGErKykge1xuICAgICAgdmFyIHAgPSByW2FdLFxuICAgICAgICBnID0gbi5Db3VudHNbYV0sXG4gICAgICAgIF8gPSB7XG4gICAgICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5BZGRQcm9wLFxuICAgICAgICAgIHByb3BUeXBlOiBJdGVtVHlwZUtleVtwXSxcbiAgICAgICAgICBudW06IGcsXG4gICAgICAgICAgcmVhc29uSWQ6IEVHZXRJdGVtUmVhc29uSWQuSm91cm5leSxcbiAgICAgICAgICByZWFzb25JbmZvOiBcIuaXheihjOa0u+WKqOWlluWKsV/liLDovr7nrKxcIiArIHQgKyBcIuWFs1wiXG4gICAgICAgIH07XG4gICAgICBHYW1lSW50ZXJhY3Rpb24uaW5wdXQoXyk7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVExXaW5DdHJsX3ZpZXdTaG93XCIpXG4gIHZpZXdEaWRTaG93KHQpIHtcbiAgICB0ID0gdCB8fCB0aGlzLmFyZ3M7XG4gICAgc3VwZXIudmlld0RpZFNob3cuY2FsbCh0aGlzLCB0KTtcbiAgICB0aGlzLnZpZXdEb0FjdGlvbihcInNob3dXaW5WaWV3XCIsIHQpO1xuICB9XG4gIHZpZXdEaWRIaWRlKCkge1xuICAgIHN1cGVyLnZpZXdEaWRIaWRlLmNhbGwodGhpcyk7XG4gIH1cbiAgY2FuR2FpblRyYXZlbFJld2FyZCgpIHtcbiAgICB2YXIgZSA9IFRyYXZlbEdhbWVEYXRhLmdldEluc3RhbmNlKCkuZ2V0TGV2ZWxJZCgpIC0gMSxcbiAgICAgIHQgPSBUcmF2ZWxHYW1lTW9kZWwuZ2V0SW5zdGFuY2UoKSxcbiAgICAgIG8gPSB0LmdldFJld2FyZEluZm8odC5nZXRDdXJKb3VybmV5KCkpLFxuICAgICAgbiA9IG8uZmluZEluZGV4KGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiB0Lmx2ID49IGU7XG4gICAgICB9KTtcbiAgICBpZiAobiA8IC0xKSByZXR1cm4gW2ZhbHNlLCBudWxsXTtcbiAgICB2YXIgaSA9IG9bbl07XG4gICAgcmV0dXJuIGkudHlwZSAhPT0gRVRyYXZlbFJld2FyZFR5cGUuRUdpZnRCb3ggJiYgaS50eXBlICE9PSBFVHJhdmVsUmV3YXJkVHlwZS5FQmFkZ2UgfHwgaS5sdiAhPT0gZSB8fCBpLmdhaW4gPyBbZmFsc2UsIG51bGxdIDogW3RydWUsIGldO1xuICB9XG59Il19
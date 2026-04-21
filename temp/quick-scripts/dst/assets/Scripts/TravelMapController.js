
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/TravelMapController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '12cddAwV0hJIZ6X74N2aXT4', 'TravelMapController');
// Scripts/TravelMapController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("./framework/controller/ViewController");
var TravelMapView_1 = require("./view/TravelMapView");
var TravelGameModel_1 = require("./gamePlay/travel/model/TravelGameModel");
var TravelMapController = /** @class */ (function (_super) {
    __extends(TravelMapController, _super);
    function TravelMapController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = TravelMapView_1.default;
        _this.viewMode = ViewController_1.viewMode.SCENE;
        _this.bundleName = "mainRes";
        return _this;
    }
    TravelMapController.prototype.init = function (t) {
        this.initConfig(t);
        _super.prototype.init.call(this, t);
    };
    TravelMapController.prototype.initConfig = function () {
        var e = TravelGameModel_1.default.getInstance().getCurJourney(), t = TravelGameModel_1.default.getInstance().getLevelConfig(e);
        if (t) {
            var o = __read(this.getMapPath(t.mapRes), 2), n = o[0], i = o[1];
            TravelMapView_1.default.prefabUrl = i;
            TravelMapView_1.default.bundleName = n;
            this.bundleName = n;
        }
    };
    TravelMapController.prototype.getMapPath = function (e) {
        var t = e.split(":");
        return 2 === t.length ? [t[0], "prefabs/" + t[1]] : ["mainRes", "prefabs/journeyMap/" + t[0]];
    };
    TravelMapController.prototype.getMessageListeners = function () {
        return {};
    };
    TravelMapController.prototype.initDependRes = function () {
        this.addPreloadRes("Prefab", "mainRes:prefabs/journey/JourneyReward");
    };
    TravelMapController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this.viewDoAction("viewDidLoad", this.args);
    };
    TravelMapController.prototype.viewDidShow = function (t) {
        _super.prototype.viewDidShow.call(this, t);
        this.viewDoAction("viewDidShow", this.args);
    };
    __decorate([
        mj.traitEvent("TLMapCtl_initRes")
    ], TravelMapController.prototype, "initDependRes", null);
    TravelMapController = __decorate([
        mj.class("TravelMapController")
    ], TravelMapController);
    return TravelMapController;
}(ViewController_1.default));
exports.default = TravelMapController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RyYXZlbE1hcENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdFQUFpRjtBQUNqRixzREFBaUQ7QUFDakQsMkVBQXNFO0FBRXRFO0lBQWlELHVDQUFjO0lBQS9EO1FBQUEscUVBdUNDO1FBdENDLGVBQVMsR0FBRyx1QkFBYSxDQUFDO1FBQzFCLGNBQVEsR0FBRyx5QkFBUSxDQUFDLEtBQUssQ0FBQztRQUMxQixnQkFBVSxHQUFHLFNBQVMsQ0FBQzs7SUFvQ3pCLENBQUM7SUFuQ0Msa0NBQUksR0FBSixVQUFLLENBQUM7UUFDSixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25CLGlCQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFDRCx3Q0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLEdBQUcseUJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxhQUFhLEVBQUUsRUFDbkQsQ0FBQyxHQUFHLHlCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUMxQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNSLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWCx1QkFBYSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDNUIsdUJBQWEsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUNELHdDQUFVLEdBQVYsVUFBVyxDQUFDO1FBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLHFCQUFxQixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7SUFDRCxpREFBbUIsR0FBbkI7UUFDRSxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRCwyQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsdUNBQXVDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBQ0QseUNBQVcsR0FBWDtRQUNFLGlCQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDRCx5Q0FBVyxHQUFYLFVBQVksQ0FBQztRQUNYLGlCQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBVkQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDOzREQUdqQztJQTlCa0IsbUJBQW1CO1FBRHZDLEVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUM7T0FDWCxtQkFBbUIsQ0F1Q3ZDO0lBQUQsMEJBQUM7Q0F2Q0QsQUF1Q0MsQ0F2Q2dELHdCQUFjLEdBdUM5RDtrQkF2Q29CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3Q29udHJvbGxlciwgeyB2aWV3TW9kZSB9IGZyb20gJy4vZnJhbWV3b3JrL2NvbnRyb2xsZXIvVmlld0NvbnRyb2xsZXInO1xuaW1wb3J0IFRyYXZlbE1hcFZpZXcgZnJvbSAnLi92aWV3L1RyYXZlbE1hcFZpZXcnO1xuaW1wb3J0IFRyYXZlbEdhbWVNb2RlbCBmcm9tICcuL2dhbWVQbGF5L3RyYXZlbC9tb2RlbC9UcmF2ZWxHYW1lTW9kZWwnO1xuQG1qLmNsYXNzKFwiVHJhdmVsTWFwQ29udHJvbGxlclwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhdmVsTWFwQ29udHJvbGxlciBleHRlbmRzIFZpZXdDb250cm9sbGVyIHtcbiAgdmlld0NsYXNzID0gVHJhdmVsTWFwVmlldztcbiAgdmlld01vZGUgPSB2aWV3TW9kZS5TQ0VORTtcbiAgYnVuZGxlTmFtZSA9IFwibWFpblJlc1wiO1xuICBpbml0KHQpIHtcbiAgICB0aGlzLmluaXRDb25maWcodCk7XG4gICAgc3VwZXIuaW5pdC5jYWxsKHRoaXMsIHQpO1xuICB9XG4gIGluaXRDb25maWcoKSB7XG4gICAgdmFyIGUgPSBUcmF2ZWxHYW1lTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJKb3VybmV5KCksXG4gICAgICB0ID0gVHJhdmVsR2FtZU1vZGVsLmdldEluc3RhbmNlKCkuZ2V0TGV2ZWxDb25maWcoZSk7XG4gICAgaWYgKHQpIHtcbiAgICAgIHZhciBvID0gX19yZWFkKHRoaXMuZ2V0TWFwUGF0aCh0Lm1hcFJlcyksIDIpLFxuICAgICAgICBuID0gb1swXSxcbiAgICAgICAgaSA9IG9bMV07XG4gICAgICBUcmF2ZWxNYXBWaWV3LnByZWZhYlVybCA9IGk7XG4gICAgICBUcmF2ZWxNYXBWaWV3LmJ1bmRsZU5hbWUgPSBuO1xuICAgICAgdGhpcy5idW5kbGVOYW1lID0gbjtcbiAgICB9XG4gIH1cbiAgZ2V0TWFwUGF0aChlKSB7XG4gICAgdmFyIHQgPSBlLnNwbGl0KFwiOlwiKTtcbiAgICByZXR1cm4gMiA9PT0gdC5sZW5ndGggPyBbdFswXSwgXCJwcmVmYWJzL1wiICsgdFsxXV0gOiBbXCJtYWluUmVzXCIsIFwicHJlZmFicy9qb3VybmV5TWFwL1wiICsgdFswXV07XG4gIH1cbiAgZ2V0TWVzc2FnZUxpc3RlbmVycygpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUTE1hcEN0bF9pbml0UmVzXCIpXG4gIGluaXREZXBlbmRSZXMoKSB7XG4gICAgdGhpcy5hZGRQcmVsb2FkUmVzKFwiUHJlZmFiXCIsIFwibWFpblJlczpwcmVmYWJzL2pvdXJuZXkvSm91cm5leVJld2FyZFwiKTtcbiAgfVxuICB2aWV3RGlkTG9hZCgpIHtcbiAgICBzdXBlci52aWV3RGlkTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMudmlld0RvQWN0aW9uKFwidmlld0RpZExvYWRcIiwgdGhpcy5hcmdzKTtcbiAgfVxuICB2aWV3RGlkU2hvdyh0KSB7XG4gICAgc3VwZXIudmlld0RpZFNob3cuY2FsbCh0aGlzLCB0KTtcbiAgICB0aGlzLnZpZXdEb0FjdGlvbihcInZpZXdEaWRTaG93XCIsIHRoaXMuYXJncyk7XG4gIH1cbn0iXX0=
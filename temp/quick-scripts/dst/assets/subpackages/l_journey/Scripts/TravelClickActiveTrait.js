
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_journey/Scripts/TravelClickActiveTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '322d3enP7tAQrOrCSwPOxfc', 'TravelClickActiveTrait');
// subpackages/l_journey/Scripts/TravelClickActiveTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var TravelGameModel_1 = require("../../../Scripts/gamePlay/travel/model/TravelGameModel");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var TravelClickActiveTrait = /** @class */ (function (_super) {
    __extends(TravelClickActiveTrait, _super);
    function TravelClickActiveTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TravelClickActiveTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TravelClickActiveTrait.prototype.onJourney_TryChange = function (t, e) {
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: false
        });
    };
    TravelClickActiveTrait.prototype.onJourney_SeasonStart = function (t, e) {
        t.ins.changeJourney();
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true
        });
    };
    TravelClickActiveTrait.prototype.onJourney_SessionEnd = function (t, e) {
        this.onTravelGameSessionEnd(t.ins);
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true
        });
    };
    TravelClickActiveTrait.prototype.onTravelGameSessionEnd = function (t) {
        var e = __read(t.getNextSession(), 1)[0];
        if ("" !== e) {
            var r = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.Travel, e);
            if (r) {
                var o = new Date(), n = Math.floor(o.getTime() / 1000);
                if (!(r.startTime > 0 && n < r.startTime)) {
                    t.doHideActiveView();
                    var i = ControllerManager_1.default.getInstance().getControByName("HallController");
                    if (i) {
                        t.createHallButton(i.rootView.getChildByName("Hall"));
                        t.showJourneyActiveView();
                    }
                }
            }
        }
    };
    TravelClickActiveTrait.prototype.onJourney_ShowActiveVw = function (t, e) {
        var r = this.showJourneyActiveView(t.ins);
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: r
        });
    };
    TravelClickActiveTrait.prototype.onJourney_CanShowActiveVw = function (t, e) {
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            isBreak: true,
            returnVal: this.canShowActiveView(t.ins)
        });
    };
    TravelClickActiveTrait.prototype.canShowActiveView = function (t) {
        if (!t.isActiveJourney())
            return false;
        var e = __read(this.getActiveViewSessionId(t), 2), r = e[0];
        e[1];
        if (r === t.curSession)
            return false;
        t.curSession = r;
        return true;
    };
    TravelClickActiveTrait.prototype.getActiveViewSessionId = function (t) {
        var e = TravelGameModel_1.default.getInstance(), r = e.getCurJourney(), o = e.getCurSession(), n = false;
        if (t.canChangeJourney()) {
            r = __read(t.getNextSession(), 1)[0];
            o += 1;
            n = true;
        }
        return [o, r, n];
    };
    TravelClickActiveTrait.prototype.showJourneyActiveView = function (t) {
        if (t.canShowActiveView()) {
            var e = __read(this.getActiveViewSessionId(t), 3), r = (e[0], e[1]), o = e[2];
            if ("" === r)
                return false;
            var n = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.Travel, r);
            if (!n)
                return false;
            t.doShowActiveView({
                config: n,
                isNewSession: o
            });
            return true;
        }
        return false;
    };
    TravelClickActiveTrait.traitKey = "TravelClickActive";
    TravelClickActiveTrait = __decorate([
        mj.trait,
        mj.class("TravelClickActiveTrait")
    ], TravelClickActiveTrait);
    return TravelClickActiveTrait;
}(Trait_1.default));
exports.default = TravelClickActiveTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2pvdXJuZXkvU2NyaXB0cy9UcmF2ZWxDbGlja0FjdGl2ZVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5RUFBd0U7QUFDeEUsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUN4Riw2RUFBNEU7QUFDNUUsMEZBQXFGO0FBQ3JGLDBGQUFxRjtBQUdyRjtJQUFvRCwwQ0FBSztJQUF6RDs7SUFnR0EsQ0FBQztJQTlGQyx1Q0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsb0RBQW1CLEdBQW5CLFVBQW9CLENBQUMsRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQztZQUNBLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO1lBQzFDLE9BQU8sRUFBRSxJQUFJO1lBQ2IsU0FBUyxFQUFFLEtBQUs7U0FDakIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHNEQUFxQixHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQztZQUNBLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO1lBQzFDLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHFEQUFvQixHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQztZQUNBLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO1lBQzFDLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHVEQUFzQixHQUF0QixVQUF1QixDQUFDO1FBQ3RCLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMs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LENBQUMsQ0FBQztJQUNuQixDQUFDO0lBQ0Qsc0RBQXFCLEdBQXJCLFVBQXNCLENBQUM7UUFDckIsSUFBSSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUMvQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ2hCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWCxJQUFJLEVBQUUsS0FBSyxDQUFDO2dCQUFFLE9BQU8sS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxHQUFHLHVCQUFVLENBQUMsUUFBUSxDQUFDLHVCQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxDQUFDO2dCQUFFLE9BQU8sS0FBSyxDQUFDO1lBQ3JCLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDakIsTUFBTSxFQUFFLENBQUM7Z0JBQ1QsWUFBWSxFQUFFLENBQUM7YUFDaEIsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQTlGTSwrQkFBUSxHQUFHLG1CQUFtQixDQUFDO0lBRG5CLHNCQUFzQjtRQUYxQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUM7T0FDZCxzQkFBc0IsQ0FnRzFDO0lBQUQsNkJBQUM7Q0FoR0QsQUFnR0MsQ0FoR21ELGVBQUssR0FnR3hEO2tCQWhHb0Isc0JBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVJlYWRlciB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvRGF0YVJlYWRlcic7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IHsgQ29uZmlnVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS9kYXRhL0NvbmZpZ1R5cGUnO1xuaW1wb3J0IFRyYXZlbEdhbWVNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3RyYXZlbC9tb2RlbC9UcmF2ZWxHYW1lTW9kZWwnO1xuaW1wb3J0IENvbnRyb2xsZXJNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL21hbmFnZXIvQ29udHJvbGxlck1hbmFnZXInO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJUcmF2ZWxDbGlja0FjdGl2ZVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmF2ZWxDbGlja0FjdGl2ZVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlRyYXZlbENsaWNrQWN0aXZlXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbkpvdXJuZXlfVHJ5Q2hhbmdlKHQsIGUpIHtcbiAgICBlKHtcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5WYWw6IGZhbHNlXG4gICAgfSk7XG4gIH1cbiAgb25Kb3VybmV5X1NlYXNvblN0YXJ0KHQsIGUpIHtcbiAgICB0Lmlucy5jaGFuZ2VKb3VybmV5KCk7XG4gICAgZSh7XG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICBpc0JyZWFrOiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgb25Kb3VybmV5X1Nlc3Npb25FbmQodCwgZSkge1xuICAgIHRoaXMub25UcmF2ZWxHYW1lU2Vzc2lvbkVuZCh0Lmlucyk7XG4gICAgZSh7XG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICBpc0JyZWFrOiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgb25UcmF2ZWxHYW1lU2Vzc2lvbkVuZCh0KSB7XG4gICAgdmFyIGUgPSBfX3JlYWQodC5nZXROZXh0U2Vzc2lvbigpLCAxKVswXTtcbiAgICBpZiAoXCJcIiAhPT0gZSkge1xuICAgICAgdmFyIHIgPSBEYXRhUmVhZGVyLmdldEJ5S2V5KENvbmZpZ1R5cGUuVHJhdmVsLCBlKTtcbiAgICAgIGlmIChyKSB7XG4gICAgICAgIHZhciBvID0gbmV3IERhdGUoKSxcbiAgICAgICAgICBuID0gTWF0aC5mbG9vcihvLmdldFRpbWUoKSAvIDEwMDApO1xuICAgICAgICBpZiAoIShyLnN0YXJ0VGltZSA+IDAgJiYgbiA8IHIuc3RhcnRUaW1lKSkge1xuICAgICAgICAgIHQuZG9IaWRlQWN0aXZlVmlldygpO1xuICAgICAgICAgIHZhciBpID0gQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRDb250cm9CeU5hbWUoXCJIYWxsQ29udHJvbGxlclwiKTtcbiAgICAgICAgICBpZiAoaSkge1xuICAgICAgICAgICAgdC5jcmVhdGVIYWxsQnV0dG9uKGkucm9vdFZpZXcuZ2V0Q2hpbGRCeU5hbWUoXCJIYWxsXCIpKTtcbiAgICAgICAgICAgIHQuc2hvd0pvdXJuZXlBY3RpdmVWaWV3KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uSm91cm5leV9TaG93QWN0aXZlVncodCwgZSkge1xuICAgIHZhciByID0gdGhpcy5zaG93Sm91cm5leUFjdGl2ZVZpZXcodC5pbnMpO1xuICAgIGUoe1xuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblZhbDogclxuICAgIH0pO1xuICB9XG4gIG9uSm91cm5leV9DYW5TaG93QWN0aXZlVncodCwgZSkge1xuICAgIGUoe1xuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUuanVtcCxcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5WYWw6IHRoaXMuY2FuU2hvd0FjdGl2ZVZpZXcodC5pbnMpXG4gICAgfSk7XG4gIH1cbiAgY2FuU2hvd0FjdGl2ZVZpZXcodCkge1xuICAgIGlmICghdC5pc0FjdGl2ZUpvdXJuZXkoKSkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBlID0gX19yZWFkKHRoaXMuZ2V0QWN0aXZlVmlld1Nlc3Npb25JZCh0KSwgMiksXG4gICAgICByID0gZVswXTtcbiAgICBlWzFdO1xuICAgIGlmIChyID09PSB0LmN1clNlc3Npb24pIHJldHVybiBmYWxzZTtcbiAgICB0LmN1clNlc3Npb24gPSByO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGdldEFjdGl2ZVZpZXdTZXNzaW9uSWQodCkge1xuICAgIHZhciBlID0gVHJhdmVsR2FtZU1vZGVsLmdldEluc3RhbmNlKCksXG4gICAgICByID0gZS5nZXRDdXJKb3VybmV5KCksXG4gICAgICBvID0gZS5nZXRDdXJTZXNzaW9uKCksXG4gICAgICBuID0gZmFsc2U7XG4gICAgaWYgKHQuY2FuQ2hhbmdlSm91cm5leSgpKSB7XG4gICAgICByID0gX19yZWFkKHQuZ2V0TmV4dFNlc3Npb24oKSwgMSlbMF07XG4gICAgICBvICs9IDE7XG4gICAgICBuID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIFtvLCByLCBuXTtcbiAgfVxuICBzaG93Sm91cm5leUFjdGl2ZVZpZXcodCkge1xuICAgIGlmICh0LmNhblNob3dBY3RpdmVWaWV3KCkpIHtcbiAgICAgIHZhciBlID0gX19yZWFkKHRoaXMuZ2V0QWN0aXZlVmlld1Nlc3Npb25JZCh0KSwgMyksXG4gICAgICAgIHIgPSAoZVswXSwgZVsxXSksXG4gICAgICAgIG8gPSBlWzJdO1xuICAgICAgaWYgKFwiXCIgPT09IHIpIHJldHVybiBmYWxzZTtcbiAgICAgIHZhciBuID0gRGF0YVJlYWRlci5nZXRCeUtleShDb25maWdUeXBlLlRyYXZlbCwgcik7XG4gICAgICBpZiAoIW4pIHJldHVybiBmYWxzZTtcbiAgICAgIHQuZG9TaG93QWN0aXZlVmlldyh7XG4gICAgICAgIGNvbmZpZzogbixcbiAgICAgICAgaXNOZXdTZXNzaW9uOiBvXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0iXX0=
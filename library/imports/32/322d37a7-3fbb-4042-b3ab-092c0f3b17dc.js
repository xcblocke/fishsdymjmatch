"use strict";
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
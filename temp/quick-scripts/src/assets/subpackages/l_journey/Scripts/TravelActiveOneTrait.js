"use strict";
cc._RF.push(module, '8ef1ebFt3JLQJXAskE0hZOt', 'TravelActiveOneTrait');
// subpackages/l_journey/Scripts/TravelActiveOneTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TravelActiveOneTrait = /** @class */ (function (_super) {
    __extends(TravelActiveOneTrait, _super);
    function TravelActiveOneTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TravelActiveOneTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.isLocalEmpty(this.localData.lastShowTime) && (this.localData.lastShowTime = -1);
        this.isLocalEmpty(this.localData.lastShowSession) && (this.localData.lastShowSession = -1);
    };
    TravelActiveOneTrait.prototype.isLocalEmpty = function (t) {
        return null == t || "" === t;
    };
    TravelActiveOneTrait.prototype.onJourney_CanShowActiveVw = function (t, e) {
        e({
            returnVal: t.beforReturnVal && this.canShowActiveView(t.ins)
        });
    };
    TravelActiveOneTrait.prototype.canShowActiveView = function (t) {
        if (t.curSession != this.localData.lastShowSession) {
            this.localData.lastShowSession = t.curSession;
            this.localData.lastShowTime = Date.now();
            return true;
        }
        if (this.isSameDay(this.localData.lastShowTime, Date.now()))
            return false;
        this.localData.lastShowTime = Date.now();
        this.localData.lastShowSession = t.curSession;
        return true;
    };
    TravelActiveOneTrait.prototype.isSameDay = function (t, e) {
        if (t < 0 || e < 0)
            return false;
        var r = new Date(t), o = new Date(e);
        return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth() && r.getDate() === o.getDate();
    };
    TravelActiveOneTrait.traitKey = "TravelActiveOne";
    TravelActiveOneTrait = __decorate([
        mj.trait,
        mj.class("TravelActiveOneTrait")
    ], TravelActiveOneTrait);
    return TravelActiveOneTrait;
}(Trait_1.default));
exports.default = TravelActiveOneTrait;

cc._RF.pop();
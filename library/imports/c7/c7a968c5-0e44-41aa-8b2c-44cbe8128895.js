"use strict";
cc._RF.push(module, 'c7a96jFDkRBqossRMvoEoiV', 'TravelBtnCreateTrait');
// subpackages/l_journey/Scripts/TravelBtnCreateTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var TravelGameModel_1 = require("../../../Scripts/gamePlay/travel/model/TravelGameModel");
var HallTravelBtn_1 = require("../../../Scripts/HallTravelBtn");
var TravelBtnCreateTrait = /** @class */ (function (_super) {
    __extends(TravelBtnCreateTrait, _super);
    function TravelBtnCreateTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TravelBtnCreateTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TravelBtnCreateTrait.prototype.onJourney_CreateBtn = function (t, e) {
        this.createTravelBtn(t.ins, t.args[0]);
        e({
            returnType: TraitCallbackReturnType.return,
            isBreak: true
        });
    };
    TravelBtnCreateTrait.prototype.createTravelBtn = function (t, e) {
        if (cc.isValid(e)) {
            var r = TravelGameModel_1.default.getInstance().getCurJourney(), o = false;
            if (t.isSessionEnd()) {
                r = __read(t.getNextSession(), 1)[0];
                o = true;
            }
            if (o && "" === r)
                return;
            if (!DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.Travel, r))
                return;
            var n = e.getChildByName("HallJourneyBtn");
            if (cc.isValid(n, true)) {
                if (t.createdHallButton) {
                    n.destroy();
                    t.doCreateHallButton(e, r, o);
                    return;
                }
                var i = n.getComponent(HallTravelBtn_1.default);
                i && i.updateUI(r, t.getLimitLevel(), o);
            }
            else
                t.doCreateHallButton(e, r, o);
        }
    };
    TravelBtnCreateTrait.traitKey = "TravelBtnCreate";
    TravelBtnCreateTrait = __decorate([
        mj.trait,
        mj.class("TravelBtnCreateTrait")
    ], TravelBtnCreateTrait);
    return TravelBtnCreateTrait;
}(Trait_1.default));
exports.default = TravelBtnCreateTrait;

cc._RF.pop();
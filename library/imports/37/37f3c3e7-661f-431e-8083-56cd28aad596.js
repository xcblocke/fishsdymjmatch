"use strict";
cc._RF.push(module, '37f3cPnZh9DHoCDVs0oqtWW', 'TopOnlyMatchHideFloatTrait');
// subpackages/l_topOnlyShowMatch/Scripts/TopOnlyMatchHideFloatTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var TopOnlyMatchHideFloatTrait = /** @class */ (function (_super) {
    __extends(TopOnlyMatchHideFloatTrait, _super);
    function TopOnlyMatchHideFloatTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TopOnlyMatchHideFloatTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TopOnlyMatchHideFloatTrait.prototype.getMainTraitIfEnabled = function () {
        var t, e = mj.getClassByName("TopOnlyShowMatchTrait"), i = null == e ? void 0 : e.getInstance();
        if (!(null == i ? void 0 : i.eventEnabled))
            return null;
        if (!(null === (t = i.isInitialized) || void 0 === t ? void 0 : t.call(i)))
            return null;
        var a = UserModel_1.default.getInstance().getCurrentGameType();
        return i.isMatchGameType(a) ? i : null;
    };
    TopOnlyMatchHideFloatTrait.prototype.onScrFloatBhv_getScale = function (t, e) {
        if (this.getMainTraitIfEnabled()) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: {
                    inScale: 0,
                    outScale: 0
                }
            });
        }
        else {
            e();
        }
    };
    TopOnlyMatchHideFloatTrait.prototype.onScoreItem_updScore = function (t, e) {
        var i, a, o, n;
        if (this.getMainTraitIfEnabled()) {
            var r = null !== (a = null === (i = t.args) || void 0 === i ? void 0 : i[0]) && void 0 !== a ? a : 0, c = null !== (n = null === (o = t.args) || void 0 === o ? void 0 : o[2]) && void 0 !== n && n;
            if (r <= 0) {
                e();
            }
            else {
                if (c) {
                    e();
                }
                else {
                    e({
                        isBreak: true,
                        returnType: TraitManager_1.TraitCallbackReturnType.return,
                        returnVal: void 0
                    });
                }
            }
        }
        else
            e();
    };
    TopOnlyMatchHideFloatTrait.traitKey = "TopOnlyMatchHideFloat";
    TopOnlyMatchHideFloatTrait = __decorate([
        mj.trait,
        mj.class("TopOnlyMatchHideFloatTrait")
    ], TopOnlyMatchHideFloatTrait);
    return TopOnlyMatchHideFloatTrait;
}(Trait_1.default));
exports.default = TopOnlyMatchHideFloatTrait;

cc._RF.pop();
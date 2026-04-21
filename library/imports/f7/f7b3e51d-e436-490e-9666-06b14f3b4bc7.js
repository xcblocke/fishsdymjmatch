"use strict";
cc._RF.push(module, 'f7b3eUd5DZJDpZmBrFPO0vH', 'HallTrait');
// subpackages/l_hall/Scripts/HallTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Config_1 = require("../../../Scripts/Config");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DGamePageShow_1 = require("../../../Scripts/dot/DGamePageShow");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var HallTrait = /** @class */ (function (_super) {
    __extends(HallTrait, _super);
    function HallTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HallTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    HallTrait.prototype.isGuidePass = function () {
        var t, e, o = UserModel_1.default.getInstance(), r = null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.levelLimit) && void 0 !== e ? e : 1;
        return o.getTotalGames() >= r;
    };
    HallTrait.prototype.onLoginM_enterGame = function (t, e) {
        var o, r = this;
        if (null === (o = this.traitData) || void 0 === o ? void 0 : o.isGuideColdStartBack) {
            var n = mj.getClassByName("GuideTrait"), a = UserModel_1.default.getInstance();
            if (n && n.getInstance() && true === n.getInstance().eventEnabled && !a.isGuideFinished() && 1 == a.getTotalGames()) {
                e();
                return;
            }
        }
        if (this.isGuidePass()) {
            DGamePageShow_1.DotGamePageShow.dot(DGamePageShow_1.EPageShowType.LoadingToMainPage);
            this.pushController("HallController", {
                isReplace: true
            }, function () {
                r.dispatchEvent(Config_1.HIDELOADING);
            });
            e({
                returnType: TraitCallbackReturnType.return
            });
        }
        else
            e();
    };
    HallTrait.prototype.onUISetDlg_adjustPH = function (t, e) {
        e();
    };
    HallTrait.traitKey = "Hall";
    HallTrait = __decorate([
        mj.trait,
        mj.class("HallTrait")
    ], HallTrait);
    return HallTrait;
}(Trait_1.default));
exports.default = HallTrait;

cc._RF.pop();
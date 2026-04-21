"use strict";
cc._RF.push(module, '93cfdVB495Noq36L5Ck4txZ', 'ClassicBaseInterAdTrait');
// subpackages/l_classicBaseInterAd/Scripts/ClassicBaseInterAdTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var DGameAdShow_1 = require("../../../Scripts/gamePlay/dot/DGameAdShow");
var DGameAdShowStage_1 = require("../../../Scripts/gamePlay/dot/DGameAdShowStage");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var ClassicBaseInterAdTrait = /** @class */ (function (_super) {
    __extends(ClassicBaseInterAdTrait, _super);
    function ClassicBaseInterAdTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassicBaseInterAdTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    ClassicBaseInterAdTrait.prototype.onClcFailBhv_start = function (e, t) {
        var r;
        if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Classic) {
            var a = e.args[0];
            if (null !== (r = null == a ? void 0 : a.data) && void 0 !== r && r.skipInterAd)
                t();
            else {
                var o = AdManager_1.default.getInstance().checkInterAdIsReady(), n = CommonUtils_1.isNetworkAvailable();
                if (o || n) {
                    DGameAdShowStage_1.DotGameAdShowStage.dot(true, "endlessGameOver");
                    AdManager_1.default.getInstance().playInterAd(DGameAdShow_1.EAdPosition.InGameInsertScreen_PauseContinue, {
                        onSuccess: function () {
                            t();
                        },
                        onFailed: function () {
                            t();
                        }
                    }, "endless_game_over", {
                        adTimeType: "endlessGameOverAd"
                    });
                }
                else
                    t();
            }
        }
        else
            t();
    };
    ClassicBaseInterAdTrait.traitKey = "ClassicBaseInterAd";
    ClassicBaseInterAdTrait.nextTimeOut = 900;
    ClassicBaseInterAdTrait = __decorate([
        mj.trait,
        mj.class("ClassicBaseInterAdTrait")
    ], ClassicBaseInterAdTrait);
    return ClassicBaseInterAdTrait;
}(Trait_1.default));
exports.default = ClassicBaseInterAdTrait;

cc._RF.pop();
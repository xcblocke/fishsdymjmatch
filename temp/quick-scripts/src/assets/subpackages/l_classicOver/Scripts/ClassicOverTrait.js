"use strict";
cc._RF.push(module, '4766eLVapNH+7wBfnJSLaSm', 'ClassicOverTrait');
// subpackages/l_classicOver/Scripts/ClassicOverTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var ClassicGameData_1 = require("../../../Scripts/core/simulator/data/ClassicGameData");
var ClassicOverTypes_1 = require("./ClassicOverTypes");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var ClassicOverTrait = /** @class */ (function (_super) {
    __extends(ClassicOverTrait, _super);
    function ClassicOverTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassicOverTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    ClassicOverTrait.prototype.onClcFailBhv_start = function (e, t) {
        var i = e.args[0];
        if (i && i.data) {
            this.showOverView(i.data);
            t();
        }
        else
            t();
    };
    ClassicOverTrait.prototype.showOverView = function () {
        var e = ClassicGameData_1.default.getInstance(), t = e.getScore(), i = e.getMaxScore(), o = e.getPreBestScore(), s = __read(e.getPreTodayScore(), 2), n = s[0], c = s[1], f = __read(e.getPreWeekScore(), 2), d = f[0], h = f[1], y = __read(e.getTodayScore(), 2), v = y[0], m = y[1], S = __read(e.getWeekScore(), 2), _ = S[0], b = S[1], w = GameUtils_1.default.isSameDay(m, c), g = GameUtils_1.default.isSameWeek(b, h), C = {
            curScore: t,
            bestScore: i,
            winType: ClassicOverTypes_1.EClassicWinType.Lose
        };
        if (t > o) {
            C.winType = ClassicOverTypes_1.EClassicWinType.Best;
        }
        else {
            if (g && _ > d) {
                C.winType = ClassicOverTypes_1.EClassicWinType.Week;
            }
            else {
                if (g || t !== _) {
                    if (w && v > n) {
                        C.winType = ClassicOverTypes_1.EClassicWinType.Today;
                    }
                    else {
                        w || t !== v || (C.winType = ClassicOverTypes_1.EClassicWinType.Today);
                    }
                }
                else {
                    C.winType = ClassicOverTypes_1.EClassicWinType.Week;
                }
            }
        }
        var P = C.winType === ClassicOverTypes_1.EClassicWinType.Lose ? "ClassicLoseController" : "ClassicWinController";
        ControllerManager_1.default.getInstance().pushViewByController(P, {
            bgStyle: {
                blackOpacity: 0
            },
            isShowAction: false,
            data: C
        });
    };
    ClassicOverTrait.traitKey = "ClassicOver";
    ClassicOverTrait = __decorate([
        mj.trait,
        mj.class("ClassicOverTrait")
    ], ClassicOverTrait);
    return ClassicOverTrait;
}(Trait_1.default));
exports.default = ClassicOverTrait;

cc._RF.pop();
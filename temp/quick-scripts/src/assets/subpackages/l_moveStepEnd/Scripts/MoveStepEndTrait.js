"use strict";
cc._RF.push(module, '6d3e329gwROxY9E/xNcv744', 'MoveStepEndTrait');
// subpackages/l_moveStepEnd/Scripts/MoveStepEndTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DGameMoveStep_1 = require("../../../Scripts/gamePlay/dot/DGameMoveStep");
var MoveStepEndTrait = /** @class */ (function (_super) {
    __extends(MoveStepEndTrait, _super);
    function MoveStepEndTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MoveStepEndTrait.prototype.onDGameLog_dot = function (t, e) {
        this.dotGameMoveStep(t.args[0]);
        e();
    };
    MoveStepEndTrait.prototype.onTrackerUtils_dotGmStep = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.return,
            isBreak: true
        });
    };
    MoveStepEndTrait.prototype.dotGameMoveStep = function (t) {
        var e, r, o = t.getGameTracker();
        if (o) {
            var n = o.stepAnalytics;
            Date.now();
            try {
                for (var i = __values(n), c = i.next(); !c.done; c = i.next()) {
                    var u = c.value;
                    DGameMoveStep_1.DotGameMoveStep.dot(t, u);
                }
            }
            catch (t) {
                e = {
                    error: t
                };
            }
            finally {
                try {
                    c && !c.done && (r = i.return) && r.call(i);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            }
        }
    };
    MoveStepEndTrait.traitKey = "MoveStepEnd";
    MoveStepEndTrait = __decorate([
        mj.trait,
        mj.class("MoveStepEndTrait")
    ], MoveStepEndTrait);
    return MoveStepEndTrait;
}(Trait_1.default));
exports.default = MoveStepEndTrait;

cc._RF.pop();
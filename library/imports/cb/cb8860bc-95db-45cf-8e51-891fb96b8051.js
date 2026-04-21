"use strict";
cc._RF.push(module, 'cb886C8ldtFz45RiR+5a4BR', 'BeforeDailyChallengeWinBehavior');
// Scripts/BeforeDailyChallengeWinBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BeforeDailyChallengeWinBehavior = void 0;
var GameInputEnum_1 = require("./simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./base/GameBehaviorsBase");
var BeforeDailyChallengeWinBehavior = /** @class */ (function (_super) {
    __extends(BeforeDailyChallengeWinBehavior, _super);
    function BeforeDailyChallengeWinBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timeout = 0;
        return _this;
    }
    BeforeDailyChallengeWinBehavior.prototype.start = function (e) {
        var t = this;
        this.doOtherLogic(function () {
            t.finish(GameInputEnum_1.EBehaviorEnum.Success);
        }, e.data);
    };
    BeforeDailyChallengeWinBehavior.prototype.doOtherLogic = function (e) {
        e();
    };
    __decorate([
        mj.traitEvent("BeforeDCWinBhv_start")
    ], BeforeDailyChallengeWinBehavior.prototype, "start", null);
    __decorate([
        mj.traitEvent("BeforeDCWinBhv_doOthLgc")
    ], BeforeDailyChallengeWinBehavior.prototype, "doOtherLogic", null);
    return BeforeDailyChallengeWinBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.BeforeDailyChallengeWinBehavior = BeforeDailyChallengeWinBehavior;

cc._RF.pop();
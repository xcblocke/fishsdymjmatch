"use strict";
cc._RF.push(module, 'f86ednJ9mpN3bcyzWAu3EaU', 'BeforeWinBehavior');
// Scripts/BeforeWinBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BeforeWinBehavior = void 0;
var GameInputEnum_1 = require("./simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./base/GameBehaviorsBase");
var BeforeWinBehavior = /** @class */ (function (_super) {
    __extends(BeforeWinBehavior, _super);
    function BeforeWinBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timeout = 0;
        return _this;
    }
    BeforeWinBehavior.prototype.start = function (e) {
        var t = this, o = this.context.applauseAudioId;
        if (o) {
            if (-1 !== o) {
                mj.audioManager.stopEffect(o);
            }
            else {
                mj.audioManager.stopAllEffect();
            }
            this.context.applauseAudioId = null;
            mj.audioManager.resumeBGM();
        }
        this.doOtherLogic(function () {
            t.finish(GameInputEnum_1.EBehaviorEnum.Success);
        }, e.data);
    };
    BeforeWinBehavior.prototype.doOtherLogic = function (e) {
        e();
    };
    __decorate([
        mj.traitEvent("BeforeWinBhv_start")
    ], BeforeWinBehavior.prototype, "start", null);
    __decorate([
        mj.traitEvent("BeforeWinBhv_doOthLgc")
    ], BeforeWinBehavior.prototype, "doOtherLogic", null);
    return BeforeWinBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.BeforeWinBehavior = BeforeWinBehavior;

cc._RF.pop();
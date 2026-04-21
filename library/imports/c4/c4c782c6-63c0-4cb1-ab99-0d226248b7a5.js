"use strict";
cc._RF.push(module, 'c4c78LGY8BMsauZDSJiSLel', 'Tile2BeforeWinBehavior');
// Scripts/base/Tile2BeforeWinBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2BeforeWinBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2BeforeWinBehavior = /** @class */ (function (_super) {
    __extends(Tile2BeforeWinBehavior, _super);
    function Tile2BeforeWinBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timeout = 0;
        return _this;
    }
    Tile2BeforeWinBehavior.prototype.start = function () {
        var e = this, t = this.context.applauseAudioId;
        if (t) {
            if (-1 !== t) {
                mj.audioManager.stopEffect(t);
            }
            else {
                mj.audioManager.stopAllEffect();
            }
            this.context.applauseAudioId = null;
            mj.audioManager.resumeBGM();
        }
        this.context.hasAutoMergeTimers() && this.context.clearAutoMergeTimers();
        this.context.gameView.setSwallowEventNodeActive(false);
        this._context.gameView.unregisterScreenTouchEnd();
        this.doOtherLogic(function () {
            e.finish(GameInputEnum_1.EBehaviorEnum.Success);
        });
    };
    Tile2BeforeWinBehavior.prototype.doOtherLogic = function (e) {
        e();
    };
    __decorate([
        mj.traitEvent("Tile2BfWinBhv_start")
    ], Tile2BeforeWinBehavior.prototype, "start", null);
    __decorate([
        mj.traitEvent("Tile2BfWinBhv_doOthLgc")
    ], Tile2BeforeWinBehavior.prototype, "doOtherLogic", null);
    return Tile2BeforeWinBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2BeforeWinBehavior = Tile2BeforeWinBehavior;

cc._RF.pop();
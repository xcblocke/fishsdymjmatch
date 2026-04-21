"use strict";
cc._RF.push(module, 'd5340AFTWlOJb8JuZpUT5mt', 'WinBehavior');
// Scripts/base/WinBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.WinBehavior = void 0;
var ControllerManager_1 = require("../framework/manager/ControllerManager");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var WinBehavior = /** @class */ (function (_super) {
    __extends(WinBehavior, _super);
    function WinBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WinBehavior.prototype.start = function (e) {
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
        this.context.hasAutoMergeTimers() && this.context.clearAutoMergeTimers();
        this.context.gameView.setSwallowEventNodeActive(false);
        this._context.gameView.unregisterScreenTouchEnd();
        ControllerManager_1.default.getInstance().closeAllPanelsAndAlerts();
        this.pushWinView(e);
        this.context.gameType !== GameTypeEnums_1.MjGameType.Travel && this.context.gameView.timerComponent.doOnce(0.2, function () {
            t.context.gameView.scoreItem.forceUpdateScore(e.data.settlementScore);
        });
        this.finish();
    };
    WinBehavior.prototype.pushWinView = function (e) {
        ControllerManager_1.default.getInstance().pushViewByController("WinController", {
            data: e.data,
            bgStyle: null,
            isShowAction: false
        }, null);
    };
    __decorate([
        mj.traitEvent("WinBhv_pushWinView")
    ], WinBehavior.prototype, "pushWinView", null);
    return WinBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.WinBehavior = WinBehavior;

cc._RF.pop();
"use strict";
cc._RF.push(module, 'e3a8eNc//1FgKNjjU/jWOUK', 'DailyChallengeWinBehavior');
// Scripts/base/DailyChallengeWinBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyChallengeWinBehavior = void 0;
var ControllerManager_1 = require("../framework/manager/ControllerManager");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var DailyChallengeWinBehavior = /** @class */ (function (_super) {
    __extends(DailyChallengeWinBehavior, _super);
    function DailyChallengeWinBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DailyChallengeWinBehavior.prototype.start = function (e) {
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
        ControllerManager_1.default.getInstance().pushViewByController("DailyChallengeWinController", {
            data: e.data,
            bgStyle: null,
            isShowAction: false
        }, null);
        this.context.gameView.timerComponent.doOnce(0.2, function () {
            t.context.gameView.scoreItem.forceUpdateScore(e.data.settlementScore);
        });
        this.finish();
    };
    return DailyChallengeWinBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.DailyChallengeWinBehavior = DailyChallengeWinBehavior;

cc._RF.pop();
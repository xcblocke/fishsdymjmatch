"use strict";
cc._RF.push(module, 'facf3RkRTBIbaTrH11lqK63', 'TravelWinBehavior');
// Scripts/base/TravelWinBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TravelWinBehavior = void 0;
var ControllerManager_1 = require("../framework/manager/ControllerManager");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var TravelWinBehavior = /** @class */ (function (_super) {
    __extends(TravelWinBehavior, _super);
    function TravelWinBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TravelWinBehavior.prototype.start = function (e) {
        var t = this.context.applauseAudioId;
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
        ControllerManager_1.default.getInstance().closeAllPanelsAndAlerts();
        ControllerManager_1.default.getInstance().pushViewByController("TravelWinController", {
            data: e.data,
            bgStyle: null,
            isShowAction: false
        }, null);
        this.finish();
    };
    return TravelWinBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.TravelWinBehavior = TravelWinBehavior;

cc._RF.pop();
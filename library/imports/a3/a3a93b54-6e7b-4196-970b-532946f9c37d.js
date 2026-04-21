"use strict";
cc._RF.push(module, 'a3a93tUbntBlpcLUylG+cN9', 'EnterAnimationFinishBehavior');
// Scripts/base/EnterAnimationFinishBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.EnterAnimationFinishBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTouchComponent_1 = require("../component/GameTouchComponent");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var EnterAnimationFinishBehavior = /** @class */ (function (_super) {
    __extends(EnterAnimationFinishBehavior, _super);
    function EnterAnimationFinishBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EnterAnimationFinishBehavior.prototype.start = function () {
        this.enableTouchEvents();
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    EnterAnimationFinishBehavior.prototype.enableTouchEvents = function () {
        var e = this.context.gameView;
        if (e) {
            var t = e._gameNode;
            if (t && cc.isValid(t)) {
                var o = t.getComponent(GameTouchComponent_1.GameTouchComponent);
                o && o.registerTouchEvents(this.context.gameType);
            }
        }
    };
    __decorate([
        mj.traitEvent("EntAniFiBhv_start")
    ], EnterAnimationFinishBehavior.prototype, "start", null);
    return EnterAnimationFinishBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.EnterAnimationFinishBehavior = EnterAnimationFinishBehavior;

cc._RF.pop();
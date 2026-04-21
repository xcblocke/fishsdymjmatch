"use strict";
cc._RF.push(module, '54213Vf8LpI7LdGOixrkGi1', 'ClassicReviveBehavior');
// Scripts/base/ClassicReviveBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassicReviveBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameInteraction_1 = require("../GameInteraction/GameInteraction");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var ClassicReviveBehavior = /** @class */ (function (_super) {
    __extends(ClassicReviveBehavior, _super);
    function ClassicReviveBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timeout = 0;
        return _this;
    }
    ClassicReviveBehavior.prototype.start = function () {
        var e = this;
        this.showReviveView(function (t) {
            if (t) {
                e.doRevive();
                e.finish(GameInputEnum_1.EBehaviorEnum.Success);
            }
            else {
                GameInteraction_1.GameInteraction.input({
                    inputType: GameInputEnum_1.EGameInputEnum.ClassicFail
                });
                e.finish(GameInputEnum_1.EBehaviorEnum.Success);
            }
        });
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    ClassicReviveBehavior.prototype.showReviveView = function (e) {
        e && e(false);
    };
    ClassicReviveBehavior.prototype.doRevive = function () {
        GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.Shuffle,
            from: GameInputEnum_1.EShuffleFrom.ClassicRevive
        });
    };
    __decorate([
        mj.traitEvent("ClcRevBhv_showReviveVw")
    ], ClassicReviveBehavior.prototype, "showReviveView", null);
    return ClassicReviveBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.ClassicReviveBehavior = ClassicReviveBehavior;

cc._RF.pop();
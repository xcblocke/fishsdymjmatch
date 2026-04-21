"use strict";
cc._RF.push(module, '7ccechRnwFFV4fLeNSFOO6B', 'InputStartAutoMerge');
// Scripts/input/InputStartAutoMerge.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var GameEvent_1 = require("../simulator/constant/GameEvent");
var StartAutoMergeEffect_1 = require("../StartAutoMergeEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputStartAutoMerge = /** @class */ (function (_super) {
    __extends(InputStartAutoMerge, _super);
    function InputStartAutoMerge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputStartAutoMerge.prototype.excute = function (e) {
        this.gameContext.getTileMapObject().unselectAllTileIds();
        this.pushStartAutoMergeEffect(e);
    };
    InputStartAutoMerge.prototype.pushStartAutoMergeEffect = function (e) {
        var t = new StartAutoMergeEffect_1.StartAutoMergeEffect({
            type: e.type
        });
        this.pushEffect(t, BehaviorsEnum_1.EInsertType.Root);
        mj.EventManager.emit(GameEvent_1.EGameEvent.Effect_StartAutoMerge, this);
    };
    __decorate([
        mj.traitEvent("IptStartAutoMrg_exec")
    ], InputStartAutoMerge.prototype, "excute", null);
    return InputStartAutoMerge;
}(InputBase_1.InputBase));
exports.default = InputStartAutoMerge;

cc._RF.pop();
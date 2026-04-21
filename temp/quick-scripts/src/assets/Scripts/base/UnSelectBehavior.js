"use strict";
cc._RF.push(module, 'fac49uRFchBP6VbVZ/a0/O2', 'UnSelectBehavior');
// Scripts/base/UnSelectBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.UnSelectBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var UnSelectBehavior = /** @class */ (function (_super) {
    __extends(UnSelectBehavior, _super);
    function UnSelectBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UnSelectBehavior.prototype.start = function (e) {
        var t = this.context.getTileNodeMap().get(e.data.tileId);
        if (t) {
            t.cancelSelected();
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        }
        else
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    return UnSelectBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.UnSelectBehavior = UnSelectBehavior;

cc._RF.pop();
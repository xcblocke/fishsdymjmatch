"use strict";
cc._RF.push(module, '2eb86ocghBHCLw89mVxz+ie', 'CancelBehavior');
// Scripts/base/CancelBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var CancelBehavior = /** @class */ (function (_super) {
    __extends(CancelBehavior, _super);
    function CancelBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CancelBehavior.prototype.start = function (e) {
        var t;
        null === (t = this.context.getTileNodeMap().get(e.data.tileId)) || void 0 === t || t.cancelTouch();
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    return CancelBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.CancelBehavior = CancelBehavior;

cc._RF.pop();
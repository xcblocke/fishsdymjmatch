"use strict";
cc._RF.push(module, '2974awAFCNKiqn19KHvar7m', 'BlockInputRefWithParamBehavior');
// Scripts/base/BlockInputRefWithParamBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockInputRefWithParamBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var BlockInputRefWithParamBehavior = /** @class */ (function (_super) {
    __extends(BlockInputRefWithParamBehavior, _super);
    function BlockInputRefWithParamBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlockInputRefWithParamBehavior.prototype.start = function (e) {
        var t = e.data.block, o = e.data.from;
        1 == e.data.isValid && (t ? this.context.gameView.increaseCountBlockNode(o) : this.context.gameView.decreaseCountBlockNode(o));
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    BlockInputRefWithParamBehavior.prototype.onAbort = function () {
        this.context.gameView.resetCountBlockNode();
        _super.prototype.onAbort.call(this);
    };
    return BlockInputRefWithParamBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.BlockInputRefWithParamBehavior = BlockInputRefWithParamBehavior;

cc._RF.pop();
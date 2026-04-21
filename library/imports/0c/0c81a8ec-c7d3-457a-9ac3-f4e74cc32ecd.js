"use strict";
cc._RF.push(module, '0c81ajsx9NFeprD9OdMwy7N', 'BlockInputRefBehavior');
// Scripts/base/BlockInputRefBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockInputRefBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var BlockInputRefBehavior = /** @class */ (function (_super) {
    __extends(BlockInputRefBehavior, _super);
    function BlockInputRefBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlockInputRefBehavior.prototype.start = function (e) {
        var t = e.data.block, o = e.data.from;
        if (t) {
            this.context.gameView.increaseCountBlockNode(o);
        }
        else {
            this.context.gameView.decreaseCountBlockNode(o);
        }
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    BlockInputRefBehavior.prototype.onAbort = function () {
        this.context.gameView.resetCountBlockNode();
        _super.prototype.onAbort.call(this);
    };
    return BlockInputRefBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.BlockInputRefBehavior = BlockInputRefBehavior;

cc._RF.pop();
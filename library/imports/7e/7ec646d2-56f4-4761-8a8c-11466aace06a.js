"use strict";
cc._RF.push(module, '7ec64bSVvRHYYqMEUZqrOBq', 'BlockInputBehavior');
// Scripts/base/BlockInputBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockInputBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var BlockInputBehavior = /** @class */ (function (_super) {
    __extends(BlockInputBehavior, _super);
    function BlockInputBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timeout = 0;
        return _this;
    }
    BlockInputBehavior.prototype.start = function (e) {
        var t = false !== e.data.block;
        this.context.gameView.setSwallowEventNodeActive(t);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    return BlockInputBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.BlockInputBehavior = BlockInputBehavior;

cc._RF.pop();
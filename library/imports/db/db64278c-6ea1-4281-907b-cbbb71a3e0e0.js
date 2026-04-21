"use strict";
cc._RF.push(module, 'db642eMbqFCgZB7y7txo+Dg', 'SkipAutoMergeBehavior');
// Scripts/base/SkipAutoMergeBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.SkipAutoMergeBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var SkipAutoMergeBehavior = /** @class */ (function (_super) {
    __extends(SkipAutoMergeBehavior, _super);
    function SkipAutoMergeBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SkipAutoMergeBehavior.prototype.start = function () {
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    return SkipAutoMergeBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.SkipAutoMergeBehavior = SkipAutoMergeBehavior;

cc._RF.pop();
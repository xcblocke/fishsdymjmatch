"use strict";
cc._RF.push(module, 'd466eGqqB9BqI/gNsCVD2Ok', 'EmptyBehavior');
// Scripts/base/EmptyBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var EmptyBehavior = /** @class */ (function (_super) {
    __extends(EmptyBehavior, _super);
    function EmptyBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmptyBehavior.prototype.start = function () {
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    return EmptyBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.default = EmptyBehavior;

cc._RF.pop();
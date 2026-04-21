"use strict";
cc._RF.push(module, 'cb066DIcEpML4LO49H4sW0Z', 'CleanViewBehavior');
// Scripts/base/CleanViewBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var CleanViewBehavior = /** @class */ (function (_super) {
    __extends(CleanViewBehavior, _super);
    function CleanViewBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CleanViewBehavior.prototype.start = function () {
        this._context.gameView.nodeCardRoot.children.forEach(function (e) {
            e.active = false;
        });
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    return CleanViewBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.default = CleanViewBehavior;

cc._RF.pop();
"use strict";
cc._RF.push(module, '4afb6ERpW5IdJecl/31syZ5', 'UpdateLevelBehavior');
// Scripts/base/UpdateLevelBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLevelBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var UpdateLevelBehavior = /** @class */ (function (_super) {
    __extends(UpdateLevelBehavior, _super);
    function UpdateLevelBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UpdateLevelBehavior.prototype.start = function (e) {
        var t = e.data.level;
        this.context.gameView.gameUI.updateLevel(t);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    return UpdateLevelBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.UpdateLevelBehavior = UpdateLevelBehavior;

cc._RF.pop();
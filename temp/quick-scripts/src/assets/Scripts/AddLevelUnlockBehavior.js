"use strict";
cc._RF.push(module, '3bac28AHStAkbr8zd8xqWxM', 'AddLevelUnlockBehavior');
// Scripts/AddLevelUnlockBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLevelUnlockBehavior = void 0;
var GameBehaviorsBase_1 = require("./base/GameBehaviorsBase");
var AddLevelUnlockBehavior = /** @class */ (function (_super) {
    __extends(AddLevelUnlockBehavior, _super);
    function AddLevelUnlockBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddLevelUnlockBehavior.prototype.start = function () {
        this.finish();
    };
    return AddLevelUnlockBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.AddLevelUnlockBehavior = AddLevelUnlockBehavior;

cc._RF.pop();
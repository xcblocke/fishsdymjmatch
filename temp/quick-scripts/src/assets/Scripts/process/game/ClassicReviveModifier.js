"use strict";
cc._RF.push(module, '9506aawwP5Cw4OkrAo7cDgJ', 'ClassicReviveModifier');
// Scripts/process/game/ClassicReviveModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassicReviveModifier = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var ClassicReviveModifier = /** @class */ (function (_super) {
    __extends(ClassicReviveModifier, _super);
    function ClassicReviveModifier(t) {
        return _super.call(this, t) || this;
    }
    ClassicReviveModifier.prototype.modifyReviveCount = function () {
        this.context.getGameData().addReviveCount();
    };
    return ClassicReviveModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.ClassicReviveModifier = ClassicReviveModifier;

cc._RF.pop();
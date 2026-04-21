"use strict";
cc._RF.push(module, '4ad31ANn8lFjqqZcOIB7heh', 'ClassicFailBehavior');
// Scripts/base/ClassicFailBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassicFailBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var ClassicFailBehavior = /** @class */ (function (_super) {
    __extends(ClassicFailBehavior, _super);
    function ClassicFailBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassicFailBehavior.prototype.start = function () {
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    __decorate([
        mj.traitEvent("ClcFailBhv_start")
    ], ClassicFailBehavior.prototype, "start", null);
    return ClassicFailBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.ClassicFailBehavior = ClassicFailBehavior;

cc._RF.pop();
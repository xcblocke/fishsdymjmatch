"use strict";
cc._RF.push(module, '2dcdbXMc9tB9ab1z7UmcAb6', 'RemoveLockMaskBehavior');
// Scripts/base/RemoveLockMaskBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveLockMaskBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var RemoveLockMaskBehavior = /** @class */ (function (_super) {
    __extends(RemoveLockMaskBehavior, _super);
    function RemoveLockMaskBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RemoveLockMaskBehavior.prototype.start = function () {
        var e = this.context.getTileNodeMap();
        this.removeAllLockMasks(e);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    RemoveLockMaskBehavior.prototype.removeAllLockMasks = function (e) {
        e.forEach(function (e) {
            if (e && cc.isValid(e.tileNode)) {
                var t = e.tileNode.getChildByName("imgMaskFadeOut");
                cc.isValid(t) && t.destroy();
            }
        });
    };
    return RemoveLockMaskBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.RemoveLockMaskBehavior = RemoveLockMaskBehavior;

cc._RF.pop();
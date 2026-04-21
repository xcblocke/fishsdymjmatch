"use strict";
cc._RF.push(module, '173e9WiwoFIVJDUMgfMI+dr', 'ToggleShowLockMaskBehavior');
// Scripts/base/ToggleShowLockMaskBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ToggleShowLockMaskBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var ToggleShowLockMaskBehavior = /** @class */ (function (_super) {
    __extends(ToggleShowLockMaskBehavior, _super);
    function ToggleShowLockMaskBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToggleShowLockMaskBehavior.prototype.start = function (e) {
        var t = e.data.enabled, o = this.context.getTileNodeMap();
        this.toggleAllLockMasks(o, t);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    ToggleShowLockMaskBehavior.prototype.toggleAllLockMasks = function (e, t) {
        e.forEach(function (e) {
            if (e && cc.isValid(e.tileNode)) {
                var o = e.tileNode.getChildByName("imgMaskFadeOut");
                if (o && cc.isValid(o)) {
                    cc.Tween.stopAllByTarget(o);
                    if (t) {
                        o.opacity = 0;
                        o.active = false;
                    }
                    else {
                        o.active = true;
                        o.opacity = 255;
                    }
                }
            }
        });
    };
    return ToggleShowLockMaskBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.ToggleShowLockMaskBehavior = ToggleShowLockMaskBehavior;

cc._RF.pop();
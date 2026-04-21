"use strict";
cc._RF.push(module, '97bc01rqxJJKI7gzRCwOua2', 'MirrorLockTrait');
// subpackages/l_mirrorLock/Scripts/MirrorLockTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var MirrorLockTrait = /** @class */ (function (_super) {
    __extends(MirrorLockTrait, _super);
    function MirrorLockTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MirrorLockTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    MirrorLockTrait.prototype.onClickSwLkBhv_playLockAni = function (t, r) {
        var e = t.args[0];
        if (e && cc.isValid(e)) {
            var o = e.getChildByName("lock");
            if (o && cc.isValid(o)) {
                o.scaleX = -1;
                r();
            }
            else
                r();
        }
        else
            r();
    };
    MirrorLockTrait.traitKey = "MirrorLock";
    MirrorLockTrait = __decorate([
        mj.trait,
        mj.class("MirrorLockTrait")
    ], MirrorLockTrait);
    return MirrorLockTrait;
}(Trait_1.default));
exports.default = MirrorLockTrait;

cc._RF.pop();
"use strict";
cc._RF.push(module, 'a3c66Gmc75AEbhMuoQf0QTi', 'DDA3Trait');
// subpackages/l_dda3/Scripts/DDA3Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Common_1 = require("../../../Scripts/types/Common");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DDA3Trait = /** @class */ (function (_super) {
    __extends(DDA3Trait, _super);
    function DDA3Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DDA3Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DDA3Trait.prototype.getStrategy = function () {
        return this.traitData.strategy || {
            x: 3,
            y: 60,
            z: 10
        };
    };
    DDA3Trait.prototype.onDCMgr_setDDASgy = function (t, e) {
        t.ins.ddaLayer.addStrategy({
            name: "DDA3",
            param: this.getStrategy()
        });
        e();
    };
    DDA3Trait.prototype.onDCMgr_recordGameEnd = function (t, e) {
        var r = t.args[1], o = t.args[0], n = this.getStrategy(), i = n.x, c = n.y, s = n.z;
        if (!r.win && r.time < c) {
            var u = Common_1.getCustomDataKey("DDA4", [i, c, s]), p = o.getCachedData(u, 0);
            o.cacheData(u, p + 1);
        }
        e();
    };
    DDA3Trait.traitKey = "DDA3";
    DDA3Trait = __decorate([
        mj.trait,
        mj.class("DDA3Trait")
    ], DDA3Trait);
    return DDA3Trait;
}(Trait_1.default));
exports.default = DDA3Trait;

cc._RF.pop();
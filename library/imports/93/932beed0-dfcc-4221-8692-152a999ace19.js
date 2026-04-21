"use strict";
cc._RF.push(module, '932be7Q38xCIYaSFSqZms4Z', 'PassedLevelBackTrait');
// subpackages/l_journey/Scripts/PassedLevelBackTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var JumpManager_1 = require("../../../Scripts/base/jump/JumpManager");
var PassedLevelBackTrait = /** @class */ (function (_super) {
    __extends(PassedLevelBackTrait, _super);
    function PassedLevelBackTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PassedLevelBackTrait.prototype, "delayTime", {
        get: function () {
            var t, e;
            return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.delayTime) && void 0 !== e ? e : 2;
        },
        enumerable: false,
        configurable: true
    });
    PassedLevelBackTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    PassedLevelBackTrait.prototype.onTLMapVw_collectBadge = function (t, e) {
        t.ins.isCollecting && t.ins.curLevelId > t.ins.levelConfig.levelCount && this.delayCloseMapView(t.ins);
        e();
    };
    PassedLevelBackTrait.prototype.onTLMapVw_viewShow = function (t, e) {
        t.ins.isCollecting || t.ins.curLevelId > t.ins.levelConfig.levelCount && this.delayCloseMapView(t.ins);
        e();
    };
    PassedLevelBackTrait.prototype.delayCloseMapView = function (t) {
        cc.isValid(t) && t.scheduleOnce(function () {
            JumpManager_1.default.getInstance().jumpToHall();
        }, this.delayTime);
    };
    PassedLevelBackTrait.traitKey = "PassedLevelBack";
    PassedLevelBackTrait = __decorate([
        mj.trait,
        mj.class("PassedLevelBackTrait")
    ], PassedLevelBackTrait);
    return PassedLevelBackTrait;
}(Trait_1.default));
exports.default = PassedLevelBackTrait;

cc._RF.pop();
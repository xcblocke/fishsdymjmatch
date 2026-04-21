"use strict";
cc._RF.push(module, 'd06fc4pFehEp7VynA5h0Jg6', 'LowPriorityLoader2Trait');
// subpackages/l_lowpriorityloader/Scripts/LowPriorityLoader2Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var LowPriorityBundleLoader_1 = require("../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader");
var LowPriorityLoader2Trait = /** @class */ (function (_super) {
    __extends(LowPriorityLoader2Trait, _super);
    function LowPriorityLoader2Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._hasDownLoadCount = 0;
        return _this;
    }
    LowPriorityLoader2Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    LowPriorityLoader2Trait.prototype.isLowMemory = function () {
        return true;
    };
    LowPriorityLoader2Trait.prototype.hasDownLoadMaxCount = function () {
        var t = this.traitData.maxDownLoadCount || 10;
        return this._hasDownLoadCount >= t;
    };
    LowPriorityLoader2Trait.prototype.onLowBunLoader_start = function (t, r) {
        this._hasDownLoadCount = 0;
        LowPriorityBundleLoader_1.default.getInstance().resume();
        r();
    };
    LowPriorityLoader2Trait.prototype.addDownLoadCount = function () {
        this._hasDownLoadCount++;
    };
    LowPriorityLoader2Trait.prototype.onLowBunLoader_taskSuccess = function (t, r) {
        var o;
        if (this.isLowMemory()) {
            var e = null === (o = t.args) || void 0 === o ? void 0 : o[0];
            this.addDownLoadCount(e.isHasDownloaded);
            this.hasDownLoadMaxCount() && LowPriorityBundleLoader_1.default.getInstance().pause();
            r();
        }
        else
            r();
    };
    LowPriorityLoader2Trait.traitKey = "LowPriorityLoader2";
    __decorate([
        mj.traitEvent("LowPriLoader_addLoadCnt")
    ], LowPriorityLoader2Trait.prototype, "addDownLoadCount", null);
    LowPriorityLoader2Trait = __decorate([
        mj.trait,
        mj.class("LowPriorityLoader2Trait")
    ], LowPriorityLoader2Trait);
    return LowPriorityLoader2Trait;
}(Trait_1.default));
exports.default = LowPriorityLoader2Trait;

cc._RF.pop();
"use strict";
cc._RF.push(module, '893f6mJZfVDO5VMAst/P4Hp', 'WatchAdNoAutoUseTrait');
// subpackages/l_watchAdGetProp/Scripts/WatchAdNoAutoUseTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var WatchAdNoAutoUseTrait = /** @class */ (function (_super) {
    __extends(WatchAdNoAutoUseTrait, _super);
    function WatchAdNoAutoUseTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WatchAdNoAutoUseTrait.prototype.onWatchAdCtrl_autoUse = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    WatchAdNoAutoUseTrait.traitKey = "WatchAdNoAutoUse";
    WatchAdNoAutoUseTrait = __decorate([
        mj.trait,
        mj.class("WatchAdNoAutoUseTrait")
    ], WatchAdNoAutoUseTrait);
    return WatchAdNoAutoUseTrait;
}(Trait_1.default));
exports.default = WatchAdNoAutoUseTrait;

cc._RF.pop();
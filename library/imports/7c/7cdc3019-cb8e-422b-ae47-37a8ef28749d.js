"use strict";
cc._RF.push(module, '7cdc3AZy45CK65HN6jvKHSd', 'AllClearFbTrait');
// subpackages/l_allClear/Scripts/AllClearFbTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var AllClearFbTrait = /** @class */ (function (_super) {
    __extends(AllClearFbTrait, _super);
    function AllClearFbTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AllClearFbTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    AllClearFbTrait.prototype.onAllClearBhv_isPreFCb = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: true
        });
    };
    AllClearFbTrait.traitKey = "AllClearFb";
    AllClearFbTrait = __decorate([
        mj.trait,
        mj.class("AllClearFbTrait")
    ], AllClearFbTrait);
    return AllClearFbTrait;
}(Trait_1.default));
exports.default = AllClearFbTrait;

cc._RF.pop();
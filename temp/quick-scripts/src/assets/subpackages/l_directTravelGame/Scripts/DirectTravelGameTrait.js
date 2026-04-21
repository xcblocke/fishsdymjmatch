"use strict";
cc._RF.push(module, '63573VfNI9GQoMvv2ruXtbC', 'DirectTravelGameTrait');
// subpackages/l_directTravelGame/Scripts/DirectTravelGameTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var JumpManager_1 = require("../../../Scripts/base/jump/JumpManager");
var DirectTravelGameTrait = /** @class */ (function (_super) {
    __extends(DirectTravelGameTrait, _super);
    function DirectTravelGameTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DirectTravelGameTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DirectTravelGameTrait.prototype.onTravelVw_gotoTravelMap = function (t, e) {
        var r = t.ins;
        if (JumpManager_1.default.getInstance().jumpToTravelGame({}, function () {
            r && r.delegate && r.delegate.close();
        })) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.jump
            });
        }
        else {
            e();
        }
    };
    DirectTravelGameTrait.prototype.onTLValVw_gotoTravelMap = function (t, e) {
        var r = t.ins;
        if (JumpManager_1.default.getInstance().jumpToTravelGame({}, function () {
            r && r.delegate && r.delegate.close();
        })) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.jump
            });
        }
        else {
            e();
        }
    };
    DirectTravelGameTrait.traitKey = "DirectTravelGame";
    DirectTravelGameTrait = __decorate([
        mj.trait,
        mj.class("DirectTravelGameTrait")
    ], DirectTravelGameTrait);
    return DirectTravelGameTrait;
}(Trait_1.default));
exports.default = DirectTravelGameTrait;

cc._RF.pop();
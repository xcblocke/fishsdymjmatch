
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_outlightConfig/Scripts/OutlightConfigTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '670237AfeFOe4zuhsHBs+dv', 'OutlightConfigTrait');
// subpackages/l_outlightConfig/Scripts/OutlightConfigTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Outlight_1 = require("../../../Scripts/Outlight");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var OutlightConfigTrait = /** @class */ (function (_super) {
    __extends(OutlightConfigTrait, _super);
    function OutlightConfigTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OutlightConfigTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        Outlight_1.default.isBakedDefault = this._traitData.isBakedDefault;
        Outlight_1.default.isLimitLowEndDevice = this._traitData.isLimitLowEndDevice;
    };
    OutlightConfigTrait.traitKey = "OutlightConfig";
    OutlightConfigTrait = __decorate([
        mj.trait,
        mj.class("OutlightConfigTrait")
    ], OutlightConfigTrait);
    return OutlightConfigTrait;
}(Trait_1.default));
exports.default = OutlightConfigTrait;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX291dGxpZ2h0Q29uZmlnL1NjcmlwdHMvT3V0bGlnaHRDb25maWdUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQWlEO0FBQ2pELGdFQUEyRDtBQUczRDtJQUFpRCx1Q0FBSztJQUF0RDs7SUFPQSxDQUFDO0lBTEMsb0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsa0JBQVEsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUM7UUFDekQsa0JBQVEsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDO0lBQ3JFLENBQUM7SUFMTSw0QkFBUSxHQUFHLGdCQUFnQixDQUFDO0lBRGhCLG1CQUFtQjtRQUZ2QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUM7T0FDWCxtQkFBbUIsQ0FPdkM7SUFBRCwwQkFBQztDQVBELEFBT0MsQ0FQZ0QsZUFBSyxHQU9yRDtrQkFQb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE91dGxpZ2h0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvT3V0bGlnaHQnO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiT3V0bGlnaHRDb25maWdUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3V0bGlnaHRDb25maWdUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJPdXRsaWdodENvbmZpZ1wiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgT3V0bGlnaHQuaXNCYWtlZERlZmF1bHQgPSB0aGlzLl90cmFpdERhdGEuaXNCYWtlZERlZmF1bHQ7XG4gICAgT3V0bGlnaHQuaXNMaW1pdExvd0VuZERldmljZSA9IHRoaXMuX3RyYWl0RGF0YS5pc0xpbWl0TG93RW5kRGV2aWNlO1xuICB9XG59Il19
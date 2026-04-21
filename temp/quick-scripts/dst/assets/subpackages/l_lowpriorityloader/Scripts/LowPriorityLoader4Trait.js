
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_lowpriorityloader/Scripts/LowPriorityLoader4Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4b8cdIQ6pJMS6krt8Bir20v', 'LowPriorityLoader4Trait');
// subpackages/l_lowpriorityloader/Scripts/LowPriorityLoader4Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var LowPriorityBundleLoader_1 = require("../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader");
var LowPriorityLoader4Trait = /** @class */ (function (_super) {
    __extends(LowPriorityLoader4Trait, _super);
    function LowPriorityLoader4Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LowPriorityLoader4Trait.prototype.LowBunLoader_onStart = function (t, r) {
        LowPriorityBundleLoader_1.default.getInstance().setPriorityLimit(LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultCardXingyunHuaPai, 3, 5);
        LowPriorityBundleLoader_1.default.getInstance().setPriorityLimit(LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultDaXiao, 1, 5);
        r();
    };
    LowPriorityLoader4Trait.traitKey = "LowPriorityLoader4";
    LowPriorityLoader4Trait = __decorate([
        mj.trait,
        mj.class("LowPriorityLoader4Trait")
    ], LowPriorityLoader4Trait);
    return LowPriorityLoader4Trait;
}(Trait_1.default));
exports.default = LowPriorityLoader4Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2xvd3ByaW9yaXR5bG9hZGVyL1NjcmlwdHMvTG93UHJpb3JpdHlMb2FkZXI0VHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCxxR0FBZ0k7QUFHaEk7SUFBcUQsMkNBQUs7SUFBMUQ7O0lBT0EsQ0FBQztJQUxDLHNEQUFvQixHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQztRQUN2QixpQ0FBdUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxvREFBMEIsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEgsaUNBQXVCLENBQUMsV0FBVyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsb0RBQTBCLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN2RyxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFMTSxnQ0FBUSxHQUFHLG9CQUFvQixDQUFDO0lBRHBCLHVCQUF1QjtRQUYzQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUM7T0FDZix1QkFBdUIsQ0FPM0M7SUFBRCw4QkFBQztDQVBELEFBT0MsQ0FQb0QsZUFBSyxHQU96RDtrQkFQb0IsdUJBQXVCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBMb3dQcmlvcml0eUJ1bmRsZUxvYWRlciwgeyBFTG93UHJpb3JpdHlCdW5kbGVQcmlvcml0eSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9Mb3dQcmlvcml0eUJ1bmRsZUxvYWRlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkxvd1ByaW9yaXR5TG9hZGVyNFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb3dQcmlvcml0eUxvYWRlcjRUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJMb3dQcmlvcml0eUxvYWRlcjRcIjtcbiAgTG93QnVuTG9hZGVyX29uU3RhcnQodCwgcikge1xuICAgIExvd1ByaW9yaXR5QnVuZGxlTG9hZGVyLmdldEluc3RhbmNlKCkuc2V0UHJpb3JpdHlMaW1pdChFTG93UHJpb3JpdHlCdW5kbGVQcmlvcml0eS5EZWZhdWx0Q2FyZFhpbmd5dW5IdWFQYWksIDMsIDUpO1xuICAgIExvd1ByaW9yaXR5QnVuZGxlTG9hZGVyLmdldEluc3RhbmNlKCkuc2V0UHJpb3JpdHlMaW1pdChFTG93UHJpb3JpdHlCdW5kbGVQcmlvcml0eS5EZWZhdWx0RGFYaWFvLCAxLCA1KTtcbiAgICByKCk7XG4gIH1cbn0iXX0=
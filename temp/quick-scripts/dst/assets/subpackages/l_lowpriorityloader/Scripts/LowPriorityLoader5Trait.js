
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_lowpriorityloader/Scripts/LowPriorityLoader5Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '68b5dD+49lP76bU+Hp3qyJx', 'LowPriorityLoader5Trait');
// subpackages/l_lowpriorityloader/Scripts/LowPriorityLoader5Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var LowPriorityBundleLoader_1 = require("../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader");
var LowPriorityLoader5Trait = /** @class */ (function (_super) {
    __extends(LowPriorityLoader5Trait, _super);
    function LowPriorityLoader5Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LowPriorityLoader5Trait.prototype.onLowBunLoader_onStart = function (t, r) {
        LowPriorityBundleLoader_1.default.getInstance().setPriorityLimit(LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultDaXiao, 1, 5);
        LowPriorityBundleLoader_1.default.getInstance().setPriorityLimit(LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultCardXingyunHuaPai, 3, 5);
        t.ins.changePriority(LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultDaXiao, LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultCardXingyunHuaPai);
        t.ins.changePriority(LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultCardXingyunHuaPai, LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultDaXiao);
        r();
    };
    LowPriorityLoader5Trait.traitKey = "LowPriorityLoader5";
    LowPriorityLoader5Trait = __decorate([
        mj.trait,
        mj.class("LowPriorityLoader5Trait")
    ], LowPriorityLoader5Trait);
    return LowPriorityLoader5Trait;
}(Trait_1.default));
exports.default = LowPriorityLoader5Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2xvd3ByaW9yaXR5bG9hZGVyL1NjcmlwdHMvTG93UHJpb3JpdHlMb2FkZXI1VHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCxxR0FBZ0k7QUFHaEk7SUFBcUQsMkNBQUs7SUFBMUQ7O0lBU0EsQ0FBQztJQVBDLHdEQUFzQixHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN6QixpQ0FBdUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxvREFBMEIsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZHLGlDQUF1QixDQUFDLFdBQVcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLG9EQUEwQixDQUFDLHdCQUF3QixFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsSCxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxvREFBMEIsQ0FBQyxhQUFhLEVBQUUsb0RBQTBCLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUNwSCxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxvREFBMEIsQ0FBQyx3QkFBd0IsRUFBRSxvREFBMEIsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNwSCxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFQTSxnQ0FBUSxHQUFHLG9CQUFvQixDQUFDO0lBRHBCLHVCQUF1QjtRQUYzQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUM7T0FDZix1QkFBdUIsQ0FTM0M7SUFBRCw4QkFBQztDQVRELEFBU0MsQ0FUb0QsZUFBSyxHQVN6RDtrQkFUb0IsdUJBQXVCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBMb3dQcmlvcml0eUJ1bmRsZUxvYWRlciwgeyBFTG93UHJpb3JpdHlCdW5kbGVQcmlvcml0eSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9Mb3dQcmlvcml0eUJ1bmRsZUxvYWRlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkxvd1ByaW9yaXR5TG9hZGVyNVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb3dQcmlvcml0eUxvYWRlcjVUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJMb3dQcmlvcml0eUxvYWRlcjVcIjtcbiAgb25Mb3dCdW5Mb2FkZXJfb25TdGFydCh0LCByKSB7XG4gICAgTG93UHJpb3JpdHlCdW5kbGVMb2FkZXIuZ2V0SW5zdGFuY2UoKS5zZXRQcmlvcml0eUxpbWl0KEVMb3dQcmlvcml0eUJ1bmRsZVByaW9yaXR5LkRlZmF1bHREYVhpYW8sIDEsIDUpO1xuICAgIExvd1ByaW9yaXR5QnVuZGxlTG9hZGVyLmdldEluc3RhbmNlKCkuc2V0UHJpb3JpdHlMaW1pdChFTG93UHJpb3JpdHlCdW5kbGVQcmlvcml0eS5EZWZhdWx0Q2FyZFhpbmd5dW5IdWFQYWksIDMsIDUpO1xuICAgIHQuaW5zLmNoYW5nZVByaW9yaXR5KEVMb3dQcmlvcml0eUJ1bmRsZVByaW9yaXR5LkRlZmF1bHREYVhpYW8sIEVMb3dQcmlvcml0eUJ1bmRsZVByaW9yaXR5LkRlZmF1bHRDYXJkWGluZ3l1bkh1YVBhaSk7XG4gICAgdC5pbnMuY2hhbmdlUHJpb3JpdHkoRUxvd1ByaW9yaXR5QnVuZGxlUHJpb3JpdHkuRGVmYXVsdENhcmRYaW5neXVuSHVhUGFpLCBFTG93UHJpb3JpdHlCdW5kbGVQcmlvcml0eS5EZWZhdWx0RGFYaWFvKTtcbiAgICByKCk7XG4gIH1cbn0iXX0=
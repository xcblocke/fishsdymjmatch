
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_lowpriorityloader/Scripts/LowPriorityLoader1Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '92a463PSBdI/Zc8YywK92tO', 'LowPriorityLoader1Trait');
// subpackages/l_lowpriorityloader/Scripts/LowPriorityLoader1Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var LowPriorityBundleLoader_1 = require("../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader");
var LowPriorityLoader1Trait = /** @class */ (function (_super) {
    __extends(LowPriorityLoader1Trait, _super);
    function LowPriorityLoader1Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LowPriorityLoader1Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    LowPriorityLoader1Trait.prototype.isLowMemory = function () {
        return true;
    };
    LowPriorityLoader1Trait.prototype.onMainGameCtrl_uiDes = function (t, r) {
        if (this.isLowMemory()) {
            LowPriorityBundleLoader_1.default.getInstance().stop();
            r();
        }
        else
            r();
    };
    LowPriorityLoader1Trait.traitKey = "LowPriorityLoader1";
    LowPriorityLoader1Trait = __decorate([
        mj.trait,
        mj.class("LowPriorityLoader1Trait")
    ], LowPriorityLoader1Trait);
    return LowPriorityLoader1Trait;
}(Trait_1.default));
exports.default = LowPriorityLoader1Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2xvd3ByaW9yaXR5bG9hZGVyL1NjcmlwdHMvTG93UHJpb3JpdHlMb2FkZXIxVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCxxR0FBZ0c7QUFHaEc7SUFBcUQsMkNBQUs7SUFBMUQ7O0lBY0EsQ0FBQztJQVpDLHdDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCw2Q0FBVyxHQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0Qsc0RBQW9CLEdBQXBCLFVBQXFCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQ3RCLGlDQUF1QixDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzdDLENBQUMsRUFBRSxDQUFDO1NBQ0w7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBWk0sZ0NBQVEsR0FBRyxvQkFBb0IsQ0FBQztJQURwQix1QkFBdUI7UUFGM0MsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDO09BQ2YsdUJBQXVCLENBYzNDO0lBQUQsOEJBQUM7Q0FkRCxBQWNDLENBZG9ELGVBQUssR0FjekQ7a0JBZG9CLHVCQUF1QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgTG93UHJpb3JpdHlCdW5kbGVMb2FkZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0xvd1ByaW9yaXR5QnVuZGxlTG9hZGVyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiTG93UHJpb3JpdHlMb2FkZXIxVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvd1ByaW9yaXR5TG9hZGVyMVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkxvd1ByaW9yaXR5TG9hZGVyMVwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgaXNMb3dNZW1vcnkoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgb25NYWluR2FtZUN0cmxfdWlEZXModCwgcikge1xuICAgIGlmICh0aGlzLmlzTG93TWVtb3J5KCkpIHtcbiAgICAgIExvd1ByaW9yaXR5QnVuZGxlTG9hZGVyLmdldEluc3RhbmNlKCkuc3RvcCgpO1xuICAgICAgcigpO1xuICAgIH0gZWxzZSByKCk7XG4gIH1cbn0iXX0=
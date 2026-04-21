
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_lowpriorityloader/Scripts/LowPriorityLoader3Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '58f3aSY++tD/o0vsxcx3Ond', 'LowPriorityLoader3Trait');
// subpackages/l_lowpriorityloader/Scripts/LowPriorityLoader3Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var LowPriorityBundleLoader_1 = require("../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader");
var LowPriorityLoader3Trait = /** @class */ (function (_super) {
    __extends(LowPriorityLoader3Trait, _super);
    function LowPriorityLoader3Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LowPriorityLoader3Trait.prototype.isLowMemory = function () {
        return true;
    };
    LowPriorityLoader3Trait.prototype.onLowBunLoader_getDelay = function (t, r) {
        var o;
        if (!this.isLowMemory() || null !== (o = t.args[0]) && void 0 !== o && o.isHasDownloaded)
            r();
        else {
            var e = LowPriorityBundleLoader_1.default.getInstance().getLastBundleAvgProgressTime(), i = t.beforReturnVal;
            i = e < 0.1 ? 0.5 : e < 0.5 ? 1 : e < 1 ? 2 : 30;
            r({
                returnType: TraitCallbackReturnType.return,
                returnVal: i
            });
        }
    };
    LowPriorityLoader3Trait.traitKey = "LowPriorityLoader3";
    LowPriorityLoader3Trait = __decorate([
        mj.trait,
        mj.class("LowPriorityLoader3Trait")
    ], LowPriorityLoader3Trait);
    return LowPriorityLoader3Trait;
}(Trait_1.default));
exports.default = LowPriorityLoader3Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2xvd3ByaW9yaXR5bG9hZGVyL1NjcmlwdHMvTG93UHJpb3JpdHlMb2FkZXIzVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCxxR0FBZ0c7QUFHaEc7SUFBcUQsMkNBQUs7SUFBMUQ7O0lBaUJBLENBQUM7SUFmQyw2Q0FBVyxHQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0QseURBQXVCLEdBQXZCLFVBQXdCLENBQUMsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxDQUFDO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsZUFBZTtZQUFFLENBQUMsRUFBRSxDQUFDO2FBQUs7WUFDakcsSUFBSSxDQUFDLEdBQUcsaUNBQXVCLENBQUMsV0FBVyxFQUFFLENBQUMsNEJBQTRCLEVBQUUsRUFDMUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUM7WUFDdkIsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNqRCxDQUFDLENBQUM7Z0JBQ0EsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQzFDLFNBQVMsRUFBRSxDQUFDO2FBQ2IsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBZk0sZ0NBQVEsR0FBRyxvQkFBb0IsQ0FBQztJQURwQix1QkFBdUI7UUFGM0MsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDO09BQ2YsdUJBQXVCLENBaUIzQztJQUFELDhCQUFDO0NBakJELEFBaUJDLENBakJvRCxlQUFLLEdBaUJ6RDtrQkFqQm9CLHVCQUF1QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgTG93UHJpb3JpdHlCdW5kbGVMb2FkZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0xvd1ByaW9yaXR5QnVuZGxlTG9hZGVyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiTG93UHJpb3JpdHlMb2FkZXIzVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvd1ByaW9yaXR5TG9hZGVyM1RyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkxvd1ByaW9yaXR5TG9hZGVyM1wiO1xuICBpc0xvd01lbW9yeSgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBvbkxvd0J1bkxvYWRlcl9nZXREZWxheSh0LCByKSB7XG4gICAgdmFyIG87XG4gICAgaWYgKCF0aGlzLmlzTG93TWVtb3J5KCkgfHwgbnVsbCAhPT0gKG8gPSB0LmFyZ3NbMF0pICYmIHZvaWQgMCAhPT0gbyAmJiBvLmlzSGFzRG93bmxvYWRlZCkgcigpO2Vsc2Uge1xuICAgICAgdmFyIGUgPSBMb3dQcmlvcml0eUJ1bmRsZUxvYWRlci5nZXRJbnN0YW5jZSgpLmdldExhc3RCdW5kbGVBdmdQcm9ncmVzc1RpbWUoKSxcbiAgICAgICAgaSA9IHQuYmVmb3JSZXR1cm5WYWw7XG4gICAgICBpID0gZSA8IDAuMSA/IDAuNSA6IGUgPCAwLjUgPyAxIDogZSA8IDEgPyAyIDogMzA7XG4gICAgICByKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICByZXR1cm5WYWw6IGlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSJdfQ==
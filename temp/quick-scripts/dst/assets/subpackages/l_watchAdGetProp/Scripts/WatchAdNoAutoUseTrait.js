
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_watchAdGetProp/Scripts/WatchAdNoAutoUseTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3dhdGNoQWRHZXRQcm9wL1NjcmlwdHMvV2F0Y2hBZE5vQXV0b1VzZVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBR3hGO0lBQW1ELHlDQUFLO0lBQXhEOztJQVFBLENBQUM7SUFOQyxxREFBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDO1lBQ0EsT0FBTyxFQUFFLElBQUk7WUFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtTQUMzQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBTk0sOEJBQVEsR0FBRyxrQkFBa0IsQ0FBQztJQURsQixxQkFBcUI7UUFGekMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDO09BQ2IscUJBQXFCLENBUXpDO0lBQUQsNEJBQUM7Q0FSRCxBQVFDLENBUmtELGVBQUssR0FRdkQ7a0JBUm9CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIldhdGNoQWROb0F1dG9Vc2VUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2F0Y2hBZE5vQXV0b1VzZVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIldhdGNoQWROb0F1dG9Vc2VcIjtcbiAgb25XYXRjaEFkQ3RybF9hdXRvVXNlKHQsIGUpIHtcbiAgICBlKHtcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICB9KTtcbiAgfVxufSJdfQ==
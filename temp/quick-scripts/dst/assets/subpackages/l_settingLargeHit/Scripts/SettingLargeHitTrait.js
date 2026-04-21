
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_settingLargeHit/Scripts/SettingLargeHitTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aeccf12QV1HOIKPSa0XotSa', 'SettingLargeHitTrait');
// subpackages/l_settingLargeHit/Scripts/SettingLargeHitTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var SettingLargeHitTrait = /** @class */ (function (_super) {
    __extends(SettingLargeHitTrait, _super);
    function SettingLargeHitTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SettingLargeHitTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    SettingLargeHitTrait.prototype.onUILangSwitch_isLarge = function (t, r) {
        r({
            returnVal: true,
            returnType: TraitCallbackReturnType.return,
            isBreak: true
        });
    };
    SettingLargeHitTrait.prototype.onUIContactUs_isLarge = function (t, r) {
        r({
            returnVal: true,
            returnType: TraitCallbackReturnType.return,
            isBreak: true
        });
    };
    SettingLargeHitTrait.prototype.onUISetDlg_isLarge = function (t, r) {
        r({
            returnVal: true,
            returnType: TraitCallbackReturnType.return,
            isBreak: true
        });
    };
    SettingLargeHitTrait.traitKey = "SettingLargeHit";
    SettingLargeHitTrait = __decorate([
        mj.trait,
        mj.class("SettingLargeHitTrait")
    ], SettingLargeHitTrait);
    return SettingLargeHitTrait;
}(Trait_1.default));
exports.default = SettingLargeHitTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3NldHRpbmdMYXJnZUhpdC9TY3JpcHRzL1NldHRpbmdMYXJnZUhpdFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFHM0Q7SUFBa0Qsd0NBQUs7SUFBdkQ7O0lBMEJBLENBQUM7SUF4QkMscUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELHFEQUFzQixHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUM7WUFDQSxTQUFTLEVBQUUsSUFBSTtZQUNmLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1lBQzFDLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELG9EQUFxQixHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUM7WUFDQSxTQUFTLEVBQUUsSUFBSTtZQUNmLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1lBQzFDLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGlEQUFrQixHQUFsQixVQUFtQixDQUFDLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUM7WUFDQSxTQUFTLEVBQUUsSUFBSTtZQUNmLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1lBQzFDLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXhCTSw2QkFBUSxHQUFHLGlCQUFpQixDQUFDO0lBRGpCLG9CQUFvQjtRQUZ4QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7T0FDWixvQkFBb0IsQ0EwQnhDO0lBQUQsMkJBQUM7Q0ExQkQsQUEwQkMsQ0ExQmlELGVBQUssR0EwQnREO2tCQTFCb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiU2V0dGluZ0xhcmdlSGl0VHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdMYXJnZUhpdFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlNldHRpbmdMYXJnZUhpdFwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25VSUxhbmdTd2l0Y2hfaXNMYXJnZSh0LCByKSB7XG4gICAgcih7XG4gICAgICByZXR1cm5WYWw6IHRydWUsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICBpc0JyZWFrOiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgb25VSUNvbnRhY3RVc19pc0xhcmdlKHQsIHIpIHtcbiAgICByKHtcbiAgICAgIHJldHVyblZhbDogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIGlzQnJlYWs6IHRydWVcbiAgICB9KTtcbiAgfVxuICBvblVJU2V0RGxnX2lzTGFyZ2UodCwgcikge1xuICAgIHIoe1xuICAgICAgcmV0dXJuVmFsOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgaXNCcmVhazogdHJ1ZVxuICAgIH0pO1xuICB9XG59Il19
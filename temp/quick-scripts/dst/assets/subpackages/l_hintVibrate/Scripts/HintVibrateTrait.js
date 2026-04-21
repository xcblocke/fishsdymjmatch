
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_hintVibrate/Scripts/HintVibrateTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ff22bBuJjhEu4trm8u1yqdS', 'HintVibrateTrait');
// subpackages/l_hintVibrate/Scripts/HintVibrateTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var VibrateManager_1 = require("../../../Scripts/gamePlay/base/vibrate/VibrateManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var HintVibrateTrait = /** @class */ (function (_super) {
    __extends(HintVibrateTrait, _super);
    function HintVibrateTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HintVibrateTrait.prototype.onGameUI_addHintBtn = function (t, r) {
        var e = this._traitData.level || VibrateManager_1.EVibrateStrength.DoubleWeak;
        t.args[2] = Object.assign(Object.assign({}, t.args[2]), {
            vibrateLevel: function () {
                var t, r;
                return ((null === (r = null === (t = UserModel_1.default.getInstance()) || void 0 === t ? void 0 : t.localData) || void 0 === r ? void 0 : r.hitTips) || 0) > 0 ? e : void 0;
            }
        });
        r();
    };
    HintVibrateTrait.traitKey = "HintVibrate";
    HintVibrateTrait = __decorate([
        mj.trait,
        mj.class("HintVibrateTrait")
    ], HintVibrateTrait);
    return HintVibrateTrait;
}(Trait_1.default));
exports.default = HintVibrateTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2hpbnRWaWJyYXRlL1NjcmlwdHMvSGludFZpYnJhdGVUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELHdGQUF5RjtBQUN6RixzRUFBaUU7QUFHakU7SUFBOEMsb0NBQUs7SUFBbkQ7O0lBWUEsQ0FBQztJQVZDLDhDQUFtQixHQUFuQixVQUFvQixDQUFDLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssSUFBSSxpQ0FBZ0IsQ0FBQyxVQUFVLENBQUM7UUFDN0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN0RCxZQUFZLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNULE9BQU8sQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JLLENBQUM7U0FDRixDQUFDLENBQUM7UUFDSCxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFWTSx5QkFBUSxHQUFHLGFBQWEsQ0FBQztJQURiLGdCQUFnQjtRQUZwQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUM7T0FDUixnQkFBZ0IsQ0FZcEM7SUFBRCx1QkFBQztDQVpELEFBWUMsQ0FaNkMsZUFBSyxHQVlsRDtrQkFab0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IEVWaWJyYXRlU3RyZW5ndGggfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdmlicmF0ZS9WaWJyYXRlTWFuYWdlcic7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJIaW50VmlicmF0ZVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIaW50VmlicmF0ZVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkhpbnRWaWJyYXRlXCI7XG4gIG9uR2FtZVVJX2FkZEhpbnRCdG4odCwgcikge1xuICAgIHZhciBlID0gdGhpcy5fdHJhaXREYXRhLmxldmVsIHx8IEVWaWJyYXRlU3RyZW5ndGguRG91YmxlV2VhaztcbiAgICB0LmFyZ3NbMl0gPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHQuYXJnc1syXSksIHtcbiAgICAgIHZpYnJhdGVMZXZlbDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCwgcjtcbiAgICAgICAgcmV0dXJuICgobnVsbCA9PT0gKHIgPSBudWxsID09PSAodCA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmxvY2FsRGF0YSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5oaXRUaXBzKSB8fCAwKSA+IDAgPyBlIDogdm9pZCAwO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHIoKTtcbiAgfVxufSJdfQ==
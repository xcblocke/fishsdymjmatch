
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_stopBombInFullCombo/Scripts/StopBombInFullComboTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5d314daMhBNc77oR1kUGyoI', 'StopBombInFullComboTrait');
// subpackages/l_stopBombInFullCombo/Scripts/StopBombInFullComboTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var StopBombInFullComboTrait = /** @class */ (function (_super) {
    __extends(StopBombInFullComboTrait, _super);
    function StopBombInFullComboTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StopBombInFullComboTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    StopBombInFullComboTrait.prototype.onClrNormHlp_parseBomb = function (t, r) {
        var o, e, n, i = t.ins, a = null == i ? void 0 : i._gameContext, u = null === (o = null == a ? void 0 : a.getGameData) || void 0 === o ? void 0 : o.call(a);
        if ((null === (e = null == u ? void 0 : u.getHasTriggeredFullCombo) || void 0 === e ? void 0 : e.call(u)) || (null === (n = null == u ? void 0 : u.getHasTriggeredRewardCombo) || void 0 === n ? void 0 : n.call(u))) {
            r({
                returnType: TraitManager_1.TraitCallbackReturnType.jump
            });
        }
        else {
            r();
        }
    };
    StopBombInFullComboTrait.traitKey = "StopBombInFullCombo";
    StopBombInFullComboTrait = __decorate([
        mj.trait,
        mj.class("StopBombInFullComboTrait")
    ], StopBombInFullComboTrait);
    return StopBombInFullComboTrait;
}(Trait_1.default));
exports.default = StopBombInFullComboTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3N0b3BCb21iSW5GdWxsQ29tYm8vU2NyaXB0cy9TdG9wQm9tYkluRnVsbENvbWJvVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFHeEY7SUFBc0QsNENBQUs7SUFBM0Q7O0lBb0JBLENBQUM7SUFsQkMseUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELHlEQUFzQixHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUNULENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFDdkMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0YsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsMEJBQTBCLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDcE4sQ0FBQyxDQUFDO2dCQUNBLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxJQUFJO2FBQ3pDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxDQUFDLEVBQUUsQ0FBQztTQUNMO0lBQ0gsQ0FBQztJQWxCTSxpQ0FBUSxHQUFHLHFCQUFxQixDQUFDO0lBRHJCLHdCQUF3QjtRQUY1QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUM7T0FDaEIsd0JBQXdCLENBb0I1QztJQUFELCtCQUFDO0NBcEJELEFBb0JDLENBcEJxRCxlQUFLLEdBb0IxRDtrQkFwQm9CLHdCQUF3QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlN0b3BCb21iSW5GdWxsQ29tYm9UcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcEJvbWJJbkZ1bGxDb21ib1RyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlN0b3BCb21iSW5GdWxsQ29tYm9cIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uQ2xyTm9ybUhscF9wYXJzZUJvbWIodCwgcikge1xuICAgIHZhciBvLFxuICAgICAgZSxcbiAgICAgIG4sXG4gICAgICBpID0gdC5pbnMsXG4gICAgICBhID0gbnVsbCA9PSBpID8gdm9pZCAwIDogaS5fZ2FtZUNvbnRleHQsXG4gICAgICB1ID0gbnVsbCA9PT0gKG8gPSBudWxsID09IGEgPyB2b2lkIDAgOiBhLmdldEdhbWVEYXRhKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLmNhbGwoYSk7XG4gICAgaWYgKChudWxsID09PSAoZSA9IG51bGwgPT0gdSA/IHZvaWQgMCA6IHUuZ2V0SGFzVHJpZ2dlcmVkRnVsbENvbWJvKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmNhbGwodSkpIHx8IChudWxsID09PSAobiA9IG51bGwgPT0gdSA/IHZvaWQgMCA6IHUuZ2V0SGFzVHJpZ2dlcmVkUmV3YXJkQ29tYm8pIHx8IHZvaWQgMCA9PT0gbiA/IHZvaWQgMCA6IG4uY2FsbCh1KSkpIHtcbiAgICAgIHIoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcigpO1xuICAgIH1cbiAgfVxufSJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_firstClearUnCombo/Scripts/FirstClearUnComboTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '00803k9tLFJ3Jxt1LEV7GSo', 'FirstClearUnComboTrait');
// subpackages/l_firstClearUnCombo/Scripts/FirstClearUnComboTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var FirstClearUnComboTrait = /** @class */ (function (_super) {
    __extends(FirstClearUnComboTrait, _super);
    function FirstClearUnComboTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirstClearUnComboTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    FirstClearUnComboTrait.prototype.onComboChk_canBreakCb = function (t, r) {
        if (0 !== t.ins.context.getGameData().getClearTileCount()) {
            r();
        }
        else {
            r({
                returnType: TraitManager_1.TraitCallbackReturnType.jump,
                returnVal: false
            });
        }
    };
    FirstClearUnComboTrait.traitKey = "FirstClearUnCombo";
    FirstClearUnComboTrait = __decorate([
        mj.trait,
        mj.class("FirstClearUnComboTrait")
    ], FirstClearUnComboTrait);
    return FirstClearUnComboTrait;
}(Trait_1.default));
exports.default = FirstClearUnComboTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2ZpcnN0Q2xlYXJVbkNvbWJvL1NjcmlwdHMvRmlyc3RDbGVhclVuQ29tYm9UcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUd4RjtJQUFvRCwwQ0FBSztJQUF6RDs7SUFlQSxDQUFDO0lBYkMsdUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELHNEQUFxQixHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFO1lBQ3pELENBQUMsRUFBRSxDQUFDO1NBQ0w7YUFBTTtZQUNMLENBQUMsQ0FBQztnQkFDQSxVQUFVLEVBQUUsc0NBQXVCLENBQUMsSUFBSTtnQkFDeEMsU0FBUyxFQUFFLEtBQUs7YUFDakIsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBYk0sK0JBQVEsR0FBRyxtQkFBbUIsQ0FBQztJQURuQixzQkFBc0I7UUFGMUMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDO09BQ2Qsc0JBQXNCLENBZTFDO0lBQUQsNkJBQUM7Q0FmRCxBQWVDLENBZm1ELGVBQUssR0FleEQ7a0JBZm9CLHNCQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkZpcnN0Q2xlYXJVbkNvbWJvVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpcnN0Q2xlYXJVbkNvbWJvVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiRmlyc3RDbGVhclVuQ29tYm9cIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uQ29tYm9DaGtfY2FuQnJlYWtDYih0LCByKSB7XG4gICAgaWYgKDAgIT09IHQuaW5zLmNvbnRleHQuZ2V0R2FtZURhdGEoKS5nZXRDbGVhclRpbGVDb3VudCgpKSB7XG4gICAgICByKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHIoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wLFxuICAgICAgICByZXR1cm5WYWw6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0iXX0=

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_fullComboNoWords/Scripts/FullComboNoWordsTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '133fdCJwptMFonfh1V3rBvP', 'FullComboNoWordsTrait');
// subpackages/l_fullComboNoWords/Scripts/FullComboNoWordsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var FullComboNoWordsTrait = /** @class */ (function (_super) {
    __extends(FullComboNoWordsTrait, _super);
    function FullComboNoWordsTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FullComboNoWordsTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    FullComboNoWordsTrait.prototype.onMotivWdsChk_canShow = function (t, r) {
        var o, e, n, i, a = t.ins, u = null === (e = null === (o = null == a ? void 0 : a.context) || void 0 === o ? void 0 : o.getGameData) || void 0 === e ? void 0 : e.call(o);
        if ((null === (n = null == u ? void 0 : u.getHasTriggeredFullCombo) || void 0 === n ? void 0 : n.call(u)) || (null === (i = null == u ? void 0 : u.getHasTriggeredRewardCombo) || void 0 === i ? void 0 : i.call(u))) {
            r({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: {
                    isShow: false,
                    index: 0
                }
            });
        }
        else {
            r();
        }
    };
    FullComboNoWordsTrait.traitKey = "FullComboNoWords";
    FullComboNoWordsTrait = __decorate([
        mj.trait,
        mj.class("FullComboNoWordsTrait")
    ], FullComboNoWordsTrait);
    return FullComboNoWordsTrait;
}(Trait_1.default));
exports.default = FullComboNoWordsTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2Z1bGxDb21ib05vV29yZHMvU2NyaXB0cy9GdWxsQ29tYm9Ob1dvcmRzVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFHeEY7SUFBbUQseUNBQUs7SUFBeEQ7O0lBeUJBLENBQUM7SUF2QkMsc0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELHFEQUFxQixHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFDVCxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pKLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3BOLENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtnQkFDMUMsU0FBUyxFQUFFO29CQUNULE1BQU0sRUFBRSxLQUFLO29CQUNiLEtBQUssRUFBRSxDQUFDO2lCQUNUO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBdkJNLDhCQUFRLEdBQUcsa0JBQWtCLENBQUM7SUFEbEIscUJBQXFCO1FBRnpDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztPQUNiLHFCQUFxQixDQXlCekM7SUFBRCw0QkFBQztDQXpCRCxBQXlCQyxDQXpCa0QsZUFBSyxHQXlCdkQ7a0JBekJvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJGdWxsQ29tYm9Ob1dvcmRzVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bGxDb21ib05vV29yZHNUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJGdWxsQ29tYm9Ob1dvcmRzXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbk1vdGl2V2RzQ2hrX2NhblNob3codCwgcikge1xuICAgIHZhciBvLFxuICAgICAgZSxcbiAgICAgIG4sXG4gICAgICBpLFxuICAgICAgYSA9IHQuaW5zLFxuICAgICAgdSA9IG51bGwgPT09IChlID0gbnVsbCA9PT0gKG8gPSBudWxsID09IGEgPyB2b2lkIDAgOiBhLmNvbnRleHQpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8uZ2V0R2FtZURhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuY2FsbChvKTtcbiAgICBpZiAoKG51bGwgPT09IChuID0gbnVsbCA9PSB1ID8gdm9pZCAwIDogdS5nZXRIYXNUcmlnZ2VyZWRGdWxsQ29tYm8pIHx8IHZvaWQgMCA9PT0gbiA/IHZvaWQgMCA6IG4uY2FsbCh1KSkgfHwgKG51bGwgPT09IChpID0gbnVsbCA9PSB1ID8gdm9pZCAwIDogdS5nZXRIYXNUcmlnZ2VyZWRSZXdhcmRDb21ibykgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5jYWxsKHUpKSkge1xuICAgICAgcih7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgcmV0dXJuVmFsOiB7XG4gICAgICAgICAgaXNTaG93OiBmYWxzZSxcbiAgICAgICAgICBpbmRleDogMFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcigpO1xuICAgIH1cbiAgfVxufSJdfQ==
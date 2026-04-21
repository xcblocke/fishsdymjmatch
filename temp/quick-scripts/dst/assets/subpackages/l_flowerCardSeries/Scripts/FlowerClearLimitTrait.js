
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_flowerCardSeries/Scripts/FlowerClearLimitTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fdb4epZDzBJDYh08YFgh6nT', 'FlowerClearLimitTrait');
// subpackages/l_flowerCardSeries/Scripts/FlowerClearLimitTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var FlowerClearLimitTrait = /** @class */ (function (_super) {
    __extends(FlowerClearLimitTrait, _super);
    function FlowerClearLimitTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlowerClearLimitTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    FlowerClearLimitTrait.prototype.onFlowerCS_isOpenCEff = function (e, t) {
        var r, a, o, i, n = null !== (a = null === (r = e.ins) || void 0 === r ? void 0 : r._currentGameType) && void 0 !== a ? a : null === (i = null === (o = UserModel_1.default.getInstance()) || void 0 === o ? void 0 : o.getCurrentGameType) || void 0 === i ? void 0 : i.call(o);
        if (n === GameTypeEnums_1.MjGameType.Normal) {
            var c = UserModel_1.default.getInstance().normalData.getLevelId();
            if (GameUtils_1.default.isTypeHardLevel(n, c)) {
                t();
            }
            else {
                t({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: false
                });
            }
        }
        else
            t();
    };
    FlowerClearLimitTrait.traitKey = "FlowerClearLimit";
    FlowerClearLimitTrait = __decorate([
        mj.trait,
        mj.class("FlowerClearLimitTrait")
    ], FlowerClearLimitTrait);
    return FlowerClearLimitTrait;
}(Trait_1.default));
exports.default = FlowerClearLimitTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2Zsb3dlckNhcmRTZXJpZXMvU2NyaXB0cy9GbG93ZXJDbGVhckxpbWl0VHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCx3RkFBb0Y7QUFDcEYsOEVBQXdGO0FBQ3hGLHNFQUFpRTtBQUNqRSw0RUFBdUU7QUFHdkU7SUFBbUQseUNBQUs7SUFBeEQ7O0lBd0JBLENBQUM7SUF0QkMsc0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELHFEQUFxQixHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDelAsSUFBSSxDQUFDLEtBQUssMEJBQVUsQ0FBQyxNQUFNLEVBQUU7WUFDM0IsSUFBSSxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDeEQsSUFBSSxtQkFBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7Z0JBQ25DLENBQUMsRUFBRSxDQUFDO2FBQ0w7aUJBQU07Z0JBQ0wsQ0FBQyxDQUFDO29CQUNBLE9BQU8sRUFBRSxJQUFJO29CQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO29CQUMxQyxTQUFTLEVBQUUsS0FBSztpQkFDakIsQ0FBQyxDQUFDO2FBQ0o7U0FDRjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUF0Qk0sOEJBQVEsR0FBRyxrQkFBa0IsQ0FBQztJQURsQixxQkFBcUI7UUFGekMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDO09BQ2IscUJBQXFCLENBd0J6QztJQUFELDRCQUFDO0NBeEJELEFBd0JDLENBeEJrRCxlQUFLLEdBd0J2RDtrQkF4Qm9CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgR2FtZVV0aWxzIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvdXRpbC9HYW1lVXRpbHMnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJGbG93ZXJDbGVhckxpbWl0VHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsb3dlckNsZWFyTGltaXRUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJGbG93ZXJDbGVhckxpbWl0XCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbkZsb3dlckNTX2lzT3BlbkNFZmYoZSwgdCkge1xuICAgIHZhciByLFxuICAgICAgYSxcbiAgICAgIG8sXG4gICAgICBpLFxuICAgICAgbiA9IG51bGwgIT09IChhID0gbnVsbCA9PT0gKHIgPSBlLmlucykgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5fY3VycmVudEdhbWVUeXBlKSAmJiB2b2lkIDAgIT09IGEgPyBhIDogbnVsbCA9PT0gKGkgPSBudWxsID09PSAobyA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLmdldEN1cnJlbnRHYW1lVHlwZSkgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5jYWxsKG8pO1xuICAgIGlmIChuID09PSBNakdhbWVUeXBlLk5vcm1hbCkge1xuICAgICAgdmFyIGMgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5ub3JtYWxEYXRhLmdldExldmVsSWQoKTtcbiAgICAgIGlmIChHYW1lVXRpbHMuaXNUeXBlSGFyZExldmVsKG4sIGMpKSB7XG4gICAgICAgIHQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHQoe1xuICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgIHJldHVyblZhbDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxufSJdfQ==
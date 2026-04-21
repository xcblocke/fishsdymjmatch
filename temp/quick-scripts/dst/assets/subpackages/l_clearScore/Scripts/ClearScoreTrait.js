
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_clearScore/Scripts/ClearScoreTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0bc5fldn4lOspoyobdv/8nT', 'ClearScoreTrait');
// subpackages/l_clearScore/Scripts/ClearScoreTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var n;
(function (n) {
    n[n["Fixed"] = 0] = "Fixed";
    n[n["LevelMultiply"] = 1] = "LevelMultiply";
})(n || (n = {}));
var ClearScoreTrait = /** @class */ (function (_super) {
    __extends(ClearScoreTrait, _super);
    function ClearScoreTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClearScoreTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var e = void 0 !== this._traitData.mode ? this._traitData.mode : 0;
        this._config = {
            mode: 1 === e ? n.LevelMultiply : n.Fixed,
            value: void 0 !== this._traitData.value ? this._traitData.value : 30
        };
    };
    ClearScoreTrait.prototype.onScoreMod_baseScr = function (t, e) {
        var r;
        if (this._config.mode === n.LevelMultiply) {
            var o = t.ins.context.getGameData().getLevelId();
            r = this._config.value * o;
        }
        else
            r = this._config.value;
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: r
        });
    };
    ClearScoreTrait.traitKey = "ClearScore";
    ClearScoreTrait = __decorate([
        mj.trait,
        mj.class("ClearScoreTrait")
    ], ClearScoreTrait);
    return ClearScoreTrait;
}(Trait_1.default));
exports.default = ClearScoreTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NsZWFyU2NvcmUvU2NyaXB0cy9DbGVhclNjb3JlVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYsSUFBSyxDQUdKO0FBSEQsV0FBSyxDQUFDO0lBQ0osMkJBQVMsQ0FBQTtJQUNULDJDQUFpQixDQUFBO0FBQ25CLENBQUMsRUFISSxDQUFDLEtBQUQsQ0FBQyxRQUdMO0FBR0Q7SUFBNkMsbUNBQUs7SUFBbEQ7O0lBc0JBLENBQUM7SUFwQkMsZ0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNiLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSztZQUN6QyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1NBQ3JFLENBQUM7SUFDSixDQUFDO0lBQ0QsNENBQWtCLEdBQWxCLFVBQW1CLENBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxDQUFDO1FBQ04sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsYUFBYSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2pELENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7U0FDNUI7O1lBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzlCLENBQUMsQ0FBQztZQUNBLE9BQU8sRUFBRSxJQUFJO1lBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07WUFDMUMsU0FBUyxFQUFFLENBQUM7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDO0lBcEJNLHdCQUFRLEdBQUcsWUFBWSxDQUFDO0lBRFosZUFBZTtRQUZuQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUM7T0FDUCxlQUFlLENBc0JuQztJQUFELHNCQUFDO0NBdEJELEFBc0JDLENBdEI0QyxlQUFLLEdBc0JqRDtrQkF0Qm9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuZW51bSBuIHtcbiAgRml4ZWQgPSAwLFxuICBMZXZlbE11bHRpcGx5ID0gMSxcbn1cbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQ2xlYXJTY29yZVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGVhclNjb3JlVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQ2xlYXJTY29yZVwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdmFyIGUgPSB2b2lkIDAgIT09IHRoaXMuX3RyYWl0RGF0YS5tb2RlID8gdGhpcy5fdHJhaXREYXRhLm1vZGUgOiAwO1xuICAgIHRoaXMuX2NvbmZpZyA9IHtcbiAgICAgIG1vZGU6IDEgPT09IGUgPyBuLkxldmVsTXVsdGlwbHkgOiBuLkZpeGVkLFxuICAgICAgdmFsdWU6IHZvaWQgMCAhPT0gdGhpcy5fdHJhaXREYXRhLnZhbHVlID8gdGhpcy5fdHJhaXREYXRhLnZhbHVlIDogMzBcbiAgICB9O1xuICB9XG4gIG9uU2NvcmVNb2RfYmFzZVNjcih0LCBlKSB7XG4gICAgdmFyIHI7XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5tb2RlID09PSBuLkxldmVsTXVsdGlwbHkpIHtcbiAgICAgIHZhciBvID0gdC5pbnMuY29udGV4dC5nZXRHYW1lRGF0YSgpLmdldExldmVsSWQoKTtcbiAgICAgIHIgPSB0aGlzLl9jb25maWcudmFsdWUgKiBvO1xuICAgIH0gZWxzZSByID0gdGhpcy5fY29uZmlnLnZhbHVlO1xuICAgIGUoe1xuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIHJldHVyblZhbDogclxuICAgIH0pO1xuICB9XG59Il19
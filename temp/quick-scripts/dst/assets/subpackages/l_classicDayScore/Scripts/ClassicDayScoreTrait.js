
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_classicDayScore/Scripts/ClassicDayScoreTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5e2begi2VVCaJg7KAuutdEv', 'ClassicDayScoreTrait');
// subpackages/l_classicDayScore/Scripts/ClassicDayScoreTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var ClassicDayScoreTrait = /** @class */ (function (_super) {
    __extends(ClassicDayScoreTrait, _super);
    function ClassicDayScoreTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassicDayScoreTrait.prototype.onLoad = function () {
        var r, e;
        _super.prototype.onLoad.call(this);
        this._config = {
            batchRate: null !== (r = this._traitData.batchRate) && void 0 !== r ? r : 1,
            dayRate: null !== (e = this._traitData.dayRate) && void 0 !== e ? e : 0.5
        };
    };
    ClassicDayScoreTrait.prototype.onScoreMod_batchRate = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._config.batchRate
        });
    };
    ClassicDayScoreTrait.prototype.onScoreMod_dayMul = function (t, r) {
        var e = UserModel_1.default.getInstance().getGameActiveDays() || 1, a = Math.log(Math.E + e * this._config.dayRate);
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: a
        });
    };
    ClassicDayScoreTrait.traitKey = "ClassicDayScore";
    ClassicDayScoreTrait = __decorate([
        mj.trait,
        mj.class("ClassicDayScoreTrait")
    ], ClassicDayScoreTrait);
    return ClassicDayScoreTrait;
}(Trait_1.default));
exports.default = ClassicDayScoreTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NsYXNzaWNEYXlTY29yZS9TY3JpcHRzL0NsYXNzaWNEYXlTY29yZVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLHNFQUFpRTtBQUdqRTtJQUFrRCx3Q0FBSztJQUF2RDs7SUEwQkEsQ0FBQztJQXhCQyxxQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsU0FBUyxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNFLE9BQU8sRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRztTQUMxRSxDQUFDO0lBQ0osQ0FBQztJQUNELG1EQUFvQixHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUM7WUFDQSxPQUFPLEVBQUUsSUFBSTtZQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO1lBQzFDLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVM7U0FDbEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGdEQUFpQixHQUFqQixVQUFrQixDQUFDLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxFQUN0RCxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQztZQUNBLE9BQU8sRUFBRSxJQUFJO1lBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07WUFDMUMsU0FBUyxFQUFFLENBQUM7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDO0lBeEJNLDZCQUFRLEdBQUcsaUJBQWlCLENBQUM7SUFEakIsb0JBQW9CO1FBRnhDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztPQUNaLG9CQUFvQixDQTBCeEM7SUFBRCwyQkFBQztDQTFCRCxBQTBCQyxDQTFCaUQsZUFBSyxHQTBCdEQ7a0JBMUJvQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQ2xhc3NpY0RheVNjb3JlVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsYXNzaWNEYXlTY29yZVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkNsYXNzaWNEYXlTY29yZVwiO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIHIsIGU7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fY29uZmlnID0ge1xuICAgICAgYmF0Y2hSYXRlOiBudWxsICE9PSAociA9IHRoaXMuX3RyYWl0RGF0YS5iYXRjaFJhdGUpICYmIHZvaWQgMCAhPT0gciA/IHIgOiAxLFxuICAgICAgZGF5UmF0ZTogbnVsbCAhPT0gKGUgPSB0aGlzLl90cmFpdERhdGEuZGF5UmF0ZSkgJiYgdm9pZCAwICE9PSBlID8gZSA6IDAuNVxuICAgIH07XG4gIH1cbiAgb25TY29yZU1vZF9iYXRjaFJhdGUodCwgcikge1xuICAgIHIoe1xuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIHJldHVyblZhbDogdGhpcy5fY29uZmlnLmJhdGNoUmF0ZVxuICAgIH0pO1xuICB9XG4gIG9uU2NvcmVNb2RfZGF5TXVsKHQsIHIpIHtcbiAgICB2YXIgZSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVBY3RpdmVEYXlzKCkgfHwgMSxcbiAgICAgIGEgPSBNYXRoLmxvZyhNYXRoLkUgKyBlICogdGhpcy5fY29uZmlnLmRheVJhdGUpO1xuICAgIHIoe1xuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIHJldHVyblZhbDogYVxuICAgIH0pO1xuICB9XG59Il19

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_prevRwdComboFcOnly/Scripts/PrevRwdComboFcOnlyTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6e91fzwJTJDc5UakMxsVaop', 'PrevRwdComboFcOnlyTrait');
// subpackages/l_prevRwdComboFcOnly/Scripts/PrevRwdComboFcOnlyTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var PrevRwdComboFcOnlyTrait = /** @class */ (function (_super) {
    __extends(PrevRwdComboFcOnlyTrait, _super);
    function PrevRwdComboFcOnlyTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._prevHadRewardCombo = false;
        return _this;
    }
    PrevRwdComboFcOnlyTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    PrevRwdComboFcOnlyTrait.prototype.onDGameEnd_adjust = function (e, r) {
        var t, o, n, a, l, c = UserModel_1.default.getInstance().getCurrentGameType();
        if (c === GameTypeEnums_1.MjGameType.Normal || c === GameTypeEnums_1.MjGameType.Tile2Normal) {
            var s = null === (t = e.args) || void 0 === t ? void 0 : t[2];
            if (null == s ? void 0 : s.win) {
                var p = null === (o = e.args) || void 0 === o ? void 0 : o[1], d = true === (null === (l = null === (a = null === (n = null == p ? void 0 : p.getGameData) || void 0 === n ? void 0 : n.call(p)) || void 0 === a ? void 0 : a.getHasTriggeredRewardCombo) || void 0 === l ? void 0 : l.call(a));
                this._prevHadRewardCombo = d;
                r();
            }
            else
                r();
        }
        else
            r();
    };
    PrevRwdComboFcOnlyTrait.prototype.onRwdComboChk_sTriNow = function (e, r) {
        var t = UserModel_1.default.getInstance().getCurrentGameType();
        if (t !== GameTypeEnums_1.MjGameType.Normal && t !== GameTypeEnums_1.MjGameType.Tile2Normal || !this._prevHadRewardCombo) {
            r();
        }
        else {
            r({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: false
            });
        }
    };
    PrevRwdComboFcOnlyTrait.traitKey = "PrevRwdComboFcOnly";
    PrevRwdComboFcOnlyTrait = __decorate([
        mj.trait,
        mj.class("PrevRwdComboFcOnlyTrait")
    ], PrevRwdComboFcOnlyTrait);
    return PrevRwdComboFcOnlyTrait;
}(Trait_1.default));
exports.default = PrevRwdComboFcOnlyTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3ByZXZSd2RDb21ib0ZjT25seS9TY3JpcHRzL1ByZXZSd2RDb21ib0ZjT25seVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBb0Y7QUFDcEYsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUN4RixzRUFBaUU7QUFHakU7SUFBcUQsMkNBQUs7SUFBMUQ7UUFBQSxxRUFtQ0M7UUFsQ0MseUJBQW1CLEdBQUcsS0FBSyxDQUFDOztJQWtDOUIsQ0FBQztJQWhDQyx3Q0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsbURBQWlCLEdBQWpCLFVBQWtCLENBQUMsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxLQUFLLDBCQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsS0FBSywwQkFBVSxDQUFDLFdBQVcsRUFBRTtZQUMzRCxJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5RCxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFO2dCQUM5QixJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDM0QsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbk8sSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQztnQkFDN0IsQ0FBQyxFQUFFLENBQUM7YUFDTDs7Z0JBQU0sQ0FBQyxFQUFFLENBQUM7U0FDWjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCx1REFBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxLQUFLLDBCQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsS0FBSywwQkFBVSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUN4RixDQUFDLEVBQUUsQ0FBQztTQUNMO2FBQU07WUFDTCxDQUFDLENBQUM7Z0JBQ0EsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07Z0JBQzFDLFNBQVMsRUFBRSxLQUFLO2FBQ2pCLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQWhDTSxnQ0FBUSxHQUFHLG9CQUFvQixDQUFDO0lBRnBCLHVCQUF1QjtRQUYzQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUM7T0FDZix1QkFBdUIsQ0FtQzNDO0lBQUQsOEJBQUM7Q0FuQ0QsQUFtQ0MsQ0FuQ29ELGVBQUssR0FtQ3pEO2tCQW5Db0IsdUJBQXVCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiUHJldlJ3ZENvbWJvRmNPbmx5VHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZXZSd2RDb21ib0ZjT25seVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfcHJldkhhZFJld2FyZENvbWJvID0gZmFsc2U7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiUHJldlJ3ZENvbWJvRmNPbmx5XCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbkRHYW1lRW5kX2FkanVzdChlLCByKSB7XG4gICAgdmFyIHQsXG4gICAgICBvLFxuICAgICAgbixcbiAgICAgIGEsXG4gICAgICBsLFxuICAgICAgYyA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpO1xuICAgIGlmIChjID09PSBNakdhbWVUeXBlLk5vcm1hbCB8fCBjID09PSBNakdhbWVUeXBlLlRpbGUyTm9ybWFsKSB7XG4gICAgICB2YXIgcyA9IG51bGwgPT09ICh0ID0gZS5hcmdzKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0WzJdO1xuICAgICAgaWYgKG51bGwgPT0gcyA/IHZvaWQgMCA6IHMud2luKSB7XG4gICAgICAgIHZhciBwID0gbnVsbCA9PT0gKG8gPSBlLmFyZ3MpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG9bMV0sXG4gICAgICAgICAgZCA9IHRydWUgPT09IChudWxsID09PSAobCA9IG51bGwgPT09IChhID0gbnVsbCA9PT0gKG4gPSBudWxsID09IHAgPyB2b2lkIDAgOiBwLmdldEdhbWVEYXRhKSB8fCB2b2lkIDAgPT09IG4gPyB2b2lkIDAgOiBuLmNhbGwocCkpIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGEuZ2V0SGFzVHJpZ2dlcmVkUmV3YXJkQ29tYm8pIHx8IHZvaWQgMCA9PT0gbCA/IHZvaWQgMCA6IGwuY2FsbChhKSk7XG4gICAgICAgIHRoaXMuX3ByZXZIYWRSZXdhcmRDb21ibyA9IGQ7XG4gICAgICAgIHIoKTtcbiAgICAgIH0gZWxzZSByKCk7XG4gICAgfSBlbHNlIHIoKTtcbiAgfVxuICBvblJ3ZENvbWJvQ2hrX3NUcmlOb3coZSwgcikge1xuICAgIHZhciB0ID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCk7XG4gICAgaWYgKHQgIT09IE1qR2FtZVR5cGUuTm9ybWFsICYmIHQgIT09IE1qR2FtZVR5cGUuVGlsZTJOb3JtYWwgfHwgIXRoaXMuX3ByZXZIYWRSZXdhcmRDb21ibykge1xuICAgICAgcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICByKHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICByZXR1cm5WYWw6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0iXX0=
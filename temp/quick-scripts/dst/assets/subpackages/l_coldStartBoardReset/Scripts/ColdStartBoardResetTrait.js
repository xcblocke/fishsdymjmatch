
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_coldStartBoardReset/Scripts/ColdStartBoardResetTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f34d8HRaolKiptWx4RddZx9', 'ColdStartBoardResetTrait');
// subpackages/l_coldStartBoardReset/Scripts/ColdStartBoardResetTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameInteraction_1 = require("../../../Scripts/GameInteraction/GameInteraction");
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var ColdStartBoardResetTrait = /** @class */ (function (_super) {
    __extends(ColdStartBoardResetTrait, _super);
    function ColdStartBoardResetTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timeHours = 24;
        _this._lastQuitAppTime = 0;
        _this._useRestart = false;
        _this._shouldReset = false;
        return _this;
    }
    ColdStartBoardResetTrait_1 = ColdStartBoardResetTrait;
    ColdStartBoardResetTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        this._timeHours = void 0 !== this._traitData.timeHours ? this._traitData.timeHours : 0;
        this._useRestart = true === this._traitData.useRestart;
        var r = UserModel_1.default.getInstance().normalData;
        this._lastQuitAppTime = (null === (e = r.localData) || void 0 === e ? void 0 : e.lastUpdateTime) || 0;
    };
    ColdStartBoardResetTrait.prototype.onLoginM_enterGame = function (t, e) {
        if (this.shouldResetBoard()) {
            if (this._useRestart) {
                this._shouldReset = true;
            }
            else {
                this.resetBoardData();
            }
            e();
        }
        else
            e();
    };
    ColdStartBoardResetTrait.prototype.onIptInitView_pushEff = function (t, e) {
        if (this._useRestart && this._shouldReset) {
            if (this.isNormalGameType()) {
                GameInteraction_1.GameInteraction.input({
                    inputType: GameInputEnum_1.EGameInputEnum.Restart,
                    dieResult: 0
                });
                this._shouldReset = false;
            }
            e();
        }
        else
            e();
    };
    ColdStartBoardResetTrait.prototype.shouldResetBoard = function () {
        try {
            var t = UserModel_1.default.getInstance().normalData.getLevelData();
            if (!t || "" === t)
                return false;
            if (0 === this._timeHours)
                return true;
            var e = this._lastQuitAppTime || 0;
            return !!e && !(Date.now() - e < 3600000 * this._timeHours);
        }
        catch (t) {
            console.error("[" + ColdStartBoardResetTrait_1.traitKey + "] 检查重置条件异常: " + t.message);
            return false;
        }
    };
    ColdStartBoardResetTrait.prototype.resetBoardData = function () {
        try {
            UserModel_1.default.getInstance().normalData.resetGameData();
        }
        catch (t) {
            console.error("[" + ColdStartBoardResetTrait_1.traitKey + "] 重置牌局数据异常: " + t.message);
        }
    };
    ColdStartBoardResetTrait.prototype.isNormalGameType = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Normal;
    };
    var ColdStartBoardResetTrait_1;
    ColdStartBoardResetTrait.traitKey = "ColdStartBoardReset";
    ColdStartBoardResetTrait = ColdStartBoardResetTrait_1 = __decorate([
        mj.trait,
        mj.class("ColdStartBoardResetTrait")
    ], ColdStartBoardResetTrait);
    return ColdStartBoardResetTrait;
}(Trait_1.default));
exports.default = ColdStartBoardResetTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NvbGRTdGFydEJvYXJkUmVzZXQvU2NyaXB0cy9Db2xkU3RhcnRCb2FyZFJlc2V0VHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdGQUFvRjtBQUNwRixnRUFBMkQ7QUFDM0Qsc0VBQWlFO0FBQ2pFLG9GQUFtRjtBQUNuRixtRkFBbUY7QUFHbkY7SUFBc0QsNENBQUs7SUFBM0Q7UUFBQSxxRUEwREM7UUF6REMsZ0JBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsc0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLGlCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGtCQUFZLEdBQUcsS0FBSyxDQUFDOztJQXNEdkIsQ0FBQztpQ0ExRG9CLHdCQUF3QjtJQU0zQyx5Q0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDTixpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkYsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7UUFDdkQsSUFBSSxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUM7UUFDM0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hHLENBQUM7SUFDRCxxREFBa0IsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBRTtZQUMzQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2FBQzFCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUN2QjtZQUNELENBQUMsRUFBRSxDQUFDO1NBQ0w7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0Qsd0RBQXFCLEdBQXJCLFVBQXNCLENBQUMsRUFBRSxDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3pDLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUU7Z0JBQzNCLGlDQUFlLENBQUMsS0FBSyxDQUFDO29CQUNwQixTQUFTLEVBQUUsOEJBQWMsQ0FBQyxPQUFPO29CQUNqQyxTQUFTLEVBQUUsQ0FBQztpQkFDYixDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7YUFDM0I7WUFDRCxDQUFDLEVBQUUsQ0FBQztTQUNMOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELG1EQUFnQixHQUFoQjtRQUNFLElBQUk7WUFDRixJQUFJLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUMxRCxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO2dCQUFFLE9BQU8sS0FBSyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxVQUFVO2dCQUFFLE9BQU8sSUFBSSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLENBQUM7WUFDbkMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDN0Q7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLDBCQUF3QixDQUFDLFFBQVEsR0FBRyxjQUFjLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BGLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBQ0QsaURBQWMsR0FBZDtRQUNFLElBQUk7WUFDRixtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUNwRDtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsMEJBQXdCLENBQUMsUUFBUSxHQUFHLGNBQWMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDckY7SUFDSCxDQUFDO0lBQ0QsbURBQWdCLEdBQWhCO1FBQ0UsT0FBTyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGtCQUFrQixFQUFFLEtBQUssMEJBQVUsQ0FBQyxNQUFNLENBQUM7SUFDNUUsQ0FBQzs7SUFwRE0saUNBQVEsR0FBRyxxQkFBcUIsQ0FBQztJQUxyQix3QkFBd0I7UUFGNUMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUFDO09BQ2hCLHdCQUF3QixDQTBENUM7SUFBRCwrQkFBQztDQTFERCxBQTBEQyxDQTFEcUQsZUFBSyxHQTBEMUQ7a0JBMURvQix3QkFBd0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IHsgR2FtZUludGVyYWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9HYW1lSW50ZXJhY3Rpb24vR2FtZUludGVyYWN0aW9uJztcbmltcG9ydCB7IEVHYW1lSW5wdXRFbnVtIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkNvbGRTdGFydEJvYXJkUmVzZXRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sZFN0YXJ0Qm9hcmRSZXNldFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfdGltZUhvdXJzID0gMjQ7XG4gIF9sYXN0UXVpdEFwcFRpbWUgPSAwO1xuICBfdXNlUmVzdGFydCA9IGZhbHNlO1xuICBfc2hvdWxkUmVzZXQgPSBmYWxzZTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJDb2xkU3RhcnRCb2FyZFJlc2V0XCI7XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgZTtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl90aW1lSG91cnMgPSB2b2lkIDAgIT09IHRoaXMuX3RyYWl0RGF0YS50aW1lSG91cnMgPyB0aGlzLl90cmFpdERhdGEudGltZUhvdXJzIDogMDtcbiAgICB0aGlzLl91c2VSZXN0YXJ0ID0gdHJ1ZSA9PT0gdGhpcy5fdHJhaXREYXRhLnVzZVJlc3RhcnQ7XG4gICAgdmFyIHIgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5ub3JtYWxEYXRhO1xuICAgIHRoaXMuX2xhc3RRdWl0QXBwVGltZSA9IChudWxsID09PSAoZSA9IHIubG9jYWxEYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmxhc3RVcGRhdGVUaW1lKSB8fCAwO1xuICB9XG4gIG9uTG9naW5NX2VudGVyR2FtZSh0LCBlKSB7XG4gICAgaWYgKHRoaXMuc2hvdWxkUmVzZXRCb2FyZCgpKSB7XG4gICAgICBpZiAodGhpcy5fdXNlUmVzdGFydCkge1xuICAgICAgICB0aGlzLl9zaG91bGRSZXNldCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlc2V0Qm9hcmREYXRhKCk7XG4gICAgICB9XG4gICAgICBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBvbklwdEluaXRWaWV3X3B1c2hFZmYodCwgZSkge1xuICAgIGlmICh0aGlzLl91c2VSZXN0YXJ0ICYmIHRoaXMuX3Nob3VsZFJlc2V0KSB7XG4gICAgICBpZiAodGhpcy5pc05vcm1hbEdhbWVUeXBlKCkpIHtcbiAgICAgICAgR2FtZUludGVyYWN0aW9uLmlucHV0KHtcbiAgICAgICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLlJlc3RhcnQsXG4gICAgICAgICAgZGllUmVzdWx0OiAwXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9zaG91bGRSZXNldCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgc2hvdWxkUmVzZXRCb2FyZCgpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIHQgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5ub3JtYWxEYXRhLmdldExldmVsRGF0YSgpO1xuICAgICAgaWYgKCF0IHx8IFwiXCIgPT09IHQpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmICgwID09PSB0aGlzLl90aW1lSG91cnMpIHJldHVybiB0cnVlO1xuICAgICAgdmFyIGUgPSB0aGlzLl9sYXN0UXVpdEFwcFRpbWUgfHwgMDtcbiAgICAgIHJldHVybiAhIWUgJiYgIShEYXRlLm5vdygpIC0gZSA8IDM2MDAwMDAgKiB0aGlzLl90aW1lSG91cnMpO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBDb2xkU3RhcnRCb2FyZFJlc2V0VHJhaXQudHJhaXRLZXkgKyBcIl0g5qOA5p+l6YeN572u5p2h5Lu25byC5bi4OiBcIiArIHQubWVzc2FnZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJlc2V0Qm9hcmREYXRhKCkge1xuICAgIHRyeSB7XG4gICAgICBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5ub3JtYWxEYXRhLnJlc2V0R2FtZURhdGEoKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgQ29sZFN0YXJ0Qm9hcmRSZXNldFRyYWl0LnRyYWl0S2V5ICsgXCJdIOmHjee9rueJjOWxgOaVsOaNruW8guW4uDogXCIgKyB0Lm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuICBpc05vcm1hbEdhbWVUeXBlKCkge1xuICAgIHJldHVybiBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSA9PT0gTWpHYW1lVHlwZS5Ob3JtYWw7XG4gIH1cbn0iXX0=
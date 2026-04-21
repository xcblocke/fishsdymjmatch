
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/rewardCombo/RewardComboChecker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ebfae48bn1EmIug9IEiDUXu', 'RewardComboChecker');
// Scripts/process/rewardCombo/RewardComboChecker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardComboChecker = void 0;
var UserModel_1 = require("../../gamePlay/user/UserModel");
var BaseCoreObject_1 = require("../../BaseCoreObject");
var RewardComboChecker = /** @class */ (function (_super) {
    __extends(RewardComboChecker, _super);
    function RewardComboChecker(t) {
        return _super.call(this, t) || this;
    }
    RewardComboChecker.prototype.shouldTriggerRewardCombo = function () {
        var e = this.context.getGameData().getLevelId();
        if (1 === e)
            return false;
        var t = this.getTriggerLevelRate(e);
        return !(t <= 0) && Math.random() <= t;
    };
    RewardComboChecker.prototype.getLevelMult = function () {
        return 4;
    };
    RewardComboChecker.prototype.getTriggerLevelRate = function (e) {
        return e % this.getLevelMult() == 0 ? this.getLevelMultRate() : this.getOtherLevelRate();
    };
    RewardComboChecker.prototype.calculateTriTileCnt = function (e) {
        var t = this.getCountRates(), o = t[Math.floor(Math.random() * t.length)], n = Math.floor(e * o);
        return this.getMinEvenNumber(n);
    };
    RewardComboChecker.prototype.getMinEvenNumber = function (e) {
        return e % 2 == 0 ? e : e + 1;
    };
    RewardComboChecker.prototype.getCountRates = function () {
        return [0.2, 0.3];
    };
    RewardComboChecker.prototype.getLevelMultRate = function () {
        return 1;
    };
    RewardComboChecker.prototype.getOtherLevelRate = function () {
        return 0.3;
    };
    RewardComboChecker.prototype.shouldTriNow = function () {
        if (!UserModel_1.default.getInstance().isGuideFinished())
            return false;
        switch (this._context.getGameData().getCurLvCanTriRewardCombo()) {
            case 0:
                var e = this.shouldTriggerRewardCombo();
                this._context.getGameData().setCurLvCanTriRewardCombo(e ? 1 : 2);
                if (!e)
                    return false;
                break;
            case 1:
                break;
            case 2:
                return false;
        }
        var t = this._context.getTileMapObject().getCurTilesCnt(), o = 2 * this._context.getGameData().getCurLevelComboMaxLimit(), n = 0, i = this._context.getGameData().getRewardComboTriTileCnt();
        if (0 !== i)
            n = i;
        else {
            n = this.calculateTriTileCnt(o);
            this._context.getGameData().setRewardComboTriTileCnt(n);
        }
        return t <= n;
    };
    __decorate([
        mj.traitEvent("RwdComboChk_lvMult")
    ], RewardComboChecker.prototype, "getLevelMult", null);
    __decorate([
        mj.traitEvent("RwdComboChk_getTrigRate")
    ], RewardComboChecker.prototype, "getTriggerLevelRate", null);
    __decorate([
        mj.traitEvent("RwdComboChk_cntRt")
    ], RewardComboChecker.prototype, "getCountRates", null);
    __decorate([
        mj.traitEvent("RwdComboChk_lvMultRt")
    ], RewardComboChecker.prototype, "getLevelMultRate", null);
    __decorate([
        mj.traitEvent("RwdComboChk_othLvRt")
    ], RewardComboChecker.prototype, "getOtherLevelRate", null);
    __decorate([
        mj.traitEvent("RwdComboChk_sTriNow")
    ], RewardComboChecker.prototype, "shouldTriNow", null);
    return RewardComboChecker;
}(BaseCoreObject_1.BaseCoreObject));
exports.RewardComboChecker = RewardComboChecker;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvcmV3YXJkQ29tYm8vUmV3YXJkQ29tYm9DaGVja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQXNEO0FBQ3RELHVEQUFzRDtBQUN0RDtJQUF3QyxzQ0FBYztJQUNwRCw0QkFBWSxDQUFDO2VBQ1gsa0JBQU0sQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUNELHFEQUF3QixHQUF4QjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQseUNBQVksR0FBWjtRQUNFLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELGdEQUFtQixHQUFuQixVQUFvQixDQUFDO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzRixDQUFDO0lBQ0QsZ0RBQW1CLEdBQW5CLFVBQW9CLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUMxQixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUMzQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNELDZDQUFnQixHQUFoQixVQUFpQixDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsMENBQWEsR0FBYjtRQUNFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELDZDQUFnQixHQUFoQjtRQUNFLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELDhDQUFpQixHQUFqQjtRQUNFLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVELHlDQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxlQUFlLEVBQUU7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUM3RCxRQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMseUJBQXlCLEVBQUUsRUFBRTtZQUMvRCxLQUFLLENBQUM7Z0JBQ0osSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqRSxJQUFJLENBQUMsQ0FBQztvQkFBRSxPQUFPLEtBQUssQ0FBQztnQkFDckIsTUFBTTtZQUNSLEtBQUssQ0FBQztnQkFDSixNQUFNO1lBQ1IsS0FBSyxDQUFDO2dCQUNKLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGNBQWMsRUFBRSxFQUN2RCxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsd0JBQXdCLEVBQUUsRUFDOUQsQ0FBQyxHQUFHLENBQUMsRUFDTCxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQzdELElBQUksQ0FBQyxLQUFLLENBQUM7WUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQUs7WUFDdEIsQ0FBQyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pEO1FBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFuREQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDOzBEQUduQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQztpRUFHeEM7SUFXRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUM7MkRBR2xDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDOzhEQUdyQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQzsrREFHcEM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7MERBdUJwQztJQUNILHlCQUFDO0NBL0RELEFBK0RDLENBL0R1QywrQkFBYyxHQStEckQ7QUEvRFksZ0RBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgeyBCYXNlQ29yZU9iamVjdCB9IGZyb20gJy4uLy4uL0Jhc2VDb3JlT2JqZWN0JztcbmV4cG9ydCBjbGFzcyBSZXdhcmRDb21ib0NoZWNrZXIgZXh0ZW5kcyBCYXNlQ29yZU9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHQpIHtcbiAgICBzdXBlcih0KTtcbiAgfVxuICBzaG91bGRUcmlnZ2VyUmV3YXJkQ29tYm8oKSB7XG4gICAgdmFyIGUgPSB0aGlzLmNvbnRleHQuZ2V0R2FtZURhdGEoKS5nZXRMZXZlbElkKCk7XG4gICAgaWYgKDEgPT09IGUpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgdCA9IHRoaXMuZ2V0VHJpZ2dlckxldmVsUmF0ZShlKTtcbiAgICByZXR1cm4gISh0IDw9IDApICYmIE1hdGgucmFuZG9tKCkgPD0gdDtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJ3ZENvbWJvQ2hrX2x2TXVsdFwiKVxuICBnZXRMZXZlbE11bHQoKSB7XG4gICAgcmV0dXJuIDQ7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSd2RDb21ib0Noa19nZXRUcmlnUmF0ZVwiKVxuICBnZXRUcmlnZ2VyTGV2ZWxSYXRlKGUpIHtcbiAgICByZXR1cm4gZSAlIHRoaXMuZ2V0TGV2ZWxNdWx0KCkgPT0gMCA/IHRoaXMuZ2V0TGV2ZWxNdWx0UmF0ZSgpIDogdGhpcy5nZXRPdGhlckxldmVsUmF0ZSgpO1xuICB9XG4gIGNhbGN1bGF0ZVRyaVRpbGVDbnQoZSkge1xuICAgIHZhciB0ID0gdGhpcy5nZXRDb3VudFJhdGVzKCksXG4gICAgICBvID0gdFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0Lmxlbmd0aCldLFxuICAgICAgbiA9IE1hdGguZmxvb3IoZSAqIG8pO1xuICAgIHJldHVybiB0aGlzLmdldE1pbkV2ZW5OdW1iZXIobik7XG4gIH1cbiAgZ2V0TWluRXZlbk51bWJlcihlKSB7XG4gICAgcmV0dXJuIGUgJSAyID09IDAgPyBlIDogZSArIDE7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSd2RDb21ib0Noa19jbnRSdFwiKVxuICBnZXRDb3VudFJhdGVzKCkge1xuICAgIHJldHVybiBbMC4yLCAwLjNdO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiUndkQ29tYm9DaGtfbHZNdWx0UnRcIilcbiAgZ2V0TGV2ZWxNdWx0UmF0ZSgpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJ3ZENvbWJvQ2hrX290aEx2UnRcIilcbiAgZ2V0T3RoZXJMZXZlbFJhdGUoKSB7XG4gICAgcmV0dXJuIDAuMztcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJ3ZENvbWJvQ2hrX3NUcmlOb3dcIilcbiAgc2hvdWxkVHJpTm93KCkge1xuICAgIGlmICghVXNlck1vZGVsLmdldEluc3RhbmNlKCkuaXNHdWlkZUZpbmlzaGVkKCkpIHJldHVybiBmYWxzZTtcbiAgICBzd2l0Y2ggKHRoaXMuX2NvbnRleHQuZ2V0R2FtZURhdGEoKS5nZXRDdXJMdkNhblRyaVJld2FyZENvbWJvKCkpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgdmFyIGUgPSB0aGlzLnNob3VsZFRyaWdnZXJSZXdhcmRDb21ibygpO1xuICAgICAgICB0aGlzLl9jb250ZXh0LmdldEdhbWVEYXRhKCkuc2V0Q3VyTHZDYW5UcmlSZXdhcmRDb21ibyhlID8gMSA6IDIpO1xuICAgICAgICBpZiAoIWUpIHJldHVybiBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciB0ID0gdGhpcy5fY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuZ2V0Q3VyVGlsZXNDbnQoKSxcbiAgICAgIG8gPSAyICogdGhpcy5fY29udGV4dC5nZXRHYW1lRGF0YSgpLmdldEN1ckxldmVsQ29tYm9NYXhMaW1pdCgpLFxuICAgICAgbiA9IDAsXG4gICAgICBpID0gdGhpcy5fY29udGV4dC5nZXRHYW1lRGF0YSgpLmdldFJld2FyZENvbWJvVHJpVGlsZUNudCgpO1xuICAgIGlmICgwICE9PSBpKSBuID0gaTtlbHNlIHtcbiAgICAgIG4gPSB0aGlzLmNhbGN1bGF0ZVRyaVRpbGVDbnQobyk7XG4gICAgICB0aGlzLl9jb250ZXh0LmdldEdhbWVEYXRhKCkuc2V0UmV3YXJkQ29tYm9UcmlUaWxlQ250KG4pO1xuICAgIH1cbiAgICByZXR1cm4gdCA8PSBuO1xuICB9XG59Il19
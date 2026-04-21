
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_coldStartPropGift/Scripts/ColdStartPropGiftTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1ca50P0+9pJMouFEpd730qW', 'ColdStartPropGiftTrait');
// subpackages/l_coldStartPropGift/Scripts/ColdStartPropGiftTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var DGameGetItem_1 = require("../../../Scripts/gamePlay/dot/DGameGetItem");
var IUserData_1 = require("../../../Scripts/user/IUserData");
var ColdStartPropGiftTrait = /** @class */ (function (_super) {
    __extends(ColdStartPropGiftTrait, _super);
    function ColdStartPropGiftTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isColdStart = true;
        return _this;
    }
    ColdStartPropGiftTrait_1 = ColdStartPropGiftTrait;
    ColdStartPropGiftTrait.prototype.onLoad = function () {
        var e, r, o, i, a, n;
        _super.prototype.onLoad.call(this);
        this._config = {
            propId: null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.propId) && void 0 !== r ? r : IUserData_1.EItemType.Hint,
            num: null !== (i = null === (o = this._traitData) || void 0 === o ? void 0 : o.num) && void 0 !== i ? i : 1,
            maxNum: null !== (n = null === (a = this._traitData) || void 0 === a ? void 0 : a.maxNum) && void 0 !== n ? n : 10
        };
        this.localData || (this.localData = {
            num: 0
        });
    };
    ColdStartPropGiftTrait.prototype.onIptSetLv_setData = function (t, e) {
        if (this.isColdStart()) {
            this._isColdStart = false;
            if (this.isNormalMode()) {
                if (this.canGift()) {
                    this.giveProp();
                    e();
                }
                else
                    e();
            }
            else
                e();
        }
        else
            e();
    };
    ColdStartPropGiftTrait.prototype.isColdStart = function () {
        return this._isColdStart;
    };
    ColdStartPropGiftTrait.prototype.isNormalMode = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Normal;
    };
    ColdStartPropGiftTrait.prototype.canGift = function () {
        return this.localData.num < this._config.maxNum;
    };
    ColdStartPropGiftTrait.prototype.giveProp = function () {
        try {
            var t = UserModel_1.default.getInstance().getCurrentGameData(), e = this._config.propId, o = this._config.num, i = void 0, a = void 0, s = void 0;
            if (e === IUserData_1.EItemType.Shuffle) {
                t.changeShuffleNums(o);
                a = t.getShuffleNums();
                i = GameTypeEnums_1.EItemId.Shuffle;
                s = "洗牌道具";
            }
            else {
                if (e !== IUserData_1.EItemType.Hint)
                    return;
                t.changeHitTipsNums(o);
                a = t.getHitTipsNums();
                i = GameTypeEnums_1.EItemId.Hint;
                s = "提示道具";
            }
            DGameGetItem_1.DotGameGetItem.dotGetItem(t, {
                itemId: i,
                number: o,
                afterNum: a,
                reasonId: GameTypeEnums_1.EGetItemReasonId.SystemGift,
                reasonInfo: "冷启动进入主线赠送" + s
            });
            this.localData.num++;
        }
        catch (t) {
            console.error("[" + ColdStartPropGiftTrait_1.traitKey + "] 赠送道具异常: " + t.message);
        }
    };
    var ColdStartPropGiftTrait_1;
    ColdStartPropGiftTrait.traitKey = "ColdStartPropGift";
    ColdStartPropGiftTrait = ColdStartPropGiftTrait_1 = __decorate([
        mj.trait,
        mj.class("ColdStartPropGiftTrait")
    ], ColdStartPropGiftTrait);
    return ColdStartPropGiftTrait;
}(Trait_1.default));
exports.default = ColdStartPropGiftTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NvbGRTdGFydFByb3BHaWZ0L1NjcmlwdHMvQ29sZFN0YXJ0UHJvcEdpZnRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0ZBQStHO0FBQy9HLGdFQUEyRDtBQUMzRCxzRUFBaUU7QUFDakUsMkVBQTRFO0FBQzVFLDZEQUE0RDtBQUc1RDtJQUFvRCwwQ0FBSztJQUF6RDtRQUFBLHFFQW1FQztRQWxFQyxrQkFBWSxHQUFHLElBQUksQ0FBQzs7SUFrRXRCLENBQUM7K0JBbkVvQixzQkFBc0I7SUFHekMsdUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckIsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsTUFBTSxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMscUJBQVMsQ0FBQyxJQUFJO1lBQzlILEdBQUcsRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFD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Q0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUN0QjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsd0JBQXNCLENBQUMsUUFBUSxHQUFHLFlBQVksR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDakY7SUFDSCxDQUFDOztJQWhFTSwrQkFBUSxHQUFHLG1CQUFtQixDQUFDO0lBRm5CLHNCQUFzQjtRQUYxQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUM7T0FDZCxzQkFBc0IsQ0FtRTFDO0lBQUQsNkJBQUM7Q0FuRUQsQUFtRUMsQ0FuRW1ELGVBQUssR0FtRXhEO2tCQW5Fb0Isc0JBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWpHYW1lVHlwZSwgRUl0ZW1JZCwgRUdldEl0ZW1SZWFzb25JZCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCB7IERvdEdhbWVHZXRJdGVtIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9kb3QvREdhbWVHZXRJdGVtJztcbmltcG9ydCB7IEVJdGVtVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvdXNlci9JVXNlckRhdGEnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJDb2xkU3RhcnRQcm9wR2lmdFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xkU3RhcnRQcm9wR2lmdFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfaXNDb2xkU3RhcnQgPSB0cnVlO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkNvbGRTdGFydFByb3BHaWZ0XCI7XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgZSwgciwgbywgaSwgYSwgbjtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9jb25maWcgPSB7XG4gICAgICBwcm9wSWQ6IG51bGwgIT09IChyID0gbnVsbCA9PT0gKGUgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUucHJvcElkKSAmJiB2b2lkIDAgIT09IHIgPyByIDogRUl0ZW1UeXBlLkhpbnQsXG4gICAgICBudW06IG51bGwgIT09IChpID0gbnVsbCA9PT0gKG8gPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8ubnVtKSAmJiB2b2lkIDAgIT09IGkgPyBpIDogMSxcbiAgICAgIG1heE51bTogbnVsbCAhPT0gKG4gPSBudWxsID09PSAoYSA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5tYXhOdW0pICYmIHZvaWQgMCAhPT0gbiA/IG4gOiAxMFxuICAgIH07XG4gICAgdGhpcy5sb2NhbERhdGEgfHwgKHRoaXMubG9jYWxEYXRhID0ge1xuICAgICAgbnVtOiAwXG4gICAgfSk7XG4gIH1cbiAgb25JcHRTZXRMdl9zZXREYXRhKHQsIGUpIHtcbiAgICBpZiAodGhpcy5pc0NvbGRTdGFydCgpKSB7XG4gICAgICB0aGlzLl9pc0NvbGRTdGFydCA9IGZhbHNlO1xuICAgICAgaWYgKHRoaXMuaXNOb3JtYWxNb2RlKCkpIHtcbiAgICAgICAgaWYgKHRoaXMuY2FuR2lmdCgpKSB7XG4gICAgICAgICAgdGhpcy5naXZlUHJvcCgpO1xuICAgICAgICAgIGUoKTtcbiAgICAgICAgfSBlbHNlIGUoKTtcbiAgICAgIH0gZWxzZSBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBpc0NvbGRTdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNDb2xkU3RhcnQ7XG4gIH1cbiAgaXNOb3JtYWxNb2RlKCkge1xuICAgIHJldHVybiBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSA9PT0gTWpHYW1lVHlwZS5Ob3JtYWw7XG4gIH1cbiAgY2FuR2lmdCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEubnVtIDwgdGhpcy5fY29uZmlnLm1heE51bTtcbiAgfVxuICBnaXZlUHJvcCgpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIHQgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZURhdGEoKSxcbiAgICAgICAgZSA9IHRoaXMuX2NvbmZpZy5wcm9wSWQsXG4gICAgICAgIG8gPSB0aGlzLl9jb25maWcubnVtLFxuICAgICAgICBpID0gdm9pZCAwLFxuICAgICAgICBhID0gdm9pZCAwLFxuICAgICAgICBzID0gdm9pZCAwO1xuICAgICAgaWYgKGUgPT09IEVJdGVtVHlwZS5TaHVmZmxlKSB7XG4gICAgICAgIHQuY2hhbmdlU2h1ZmZsZU51bXMobyk7XG4gICAgICAgIGEgPSB0LmdldFNodWZmbGVOdW1zKCk7XG4gICAgICAgIGkgPSBFSXRlbUlkLlNodWZmbGU7XG4gICAgICAgIHMgPSBcIua0l+eJjOmBk+WFt1wiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGUgIT09IEVJdGVtVHlwZS5IaW50KSByZXR1cm47XG4gICAgICAgIHQuY2hhbmdlSGl0VGlwc051bXMobyk7XG4gICAgICAgIGEgPSB0LmdldEhpdFRpcHNOdW1zKCk7XG4gICAgICAgIGkgPSBFSXRlbUlkLkhpbnQ7XG4gICAgICAgIHMgPSBcIuaPkOekuumBk+WFt1wiO1xuICAgICAgfVxuICAgICAgRG90R2FtZUdldEl0ZW0uZG90R2V0SXRlbSh0LCB7XG4gICAgICAgIGl0ZW1JZDogaSxcbiAgICAgICAgbnVtYmVyOiBvLFxuICAgICAgICBhZnRlck51bTogYSxcbiAgICAgICAgcmVhc29uSWQ6IEVHZXRJdGVtUmVhc29uSWQuU3lzdGVtR2lmdCxcbiAgICAgICAgcmVhc29uSW5mbzogXCLlhrflkK/liqjov5vlhaXkuLvnur/otaDpgIFcIiArIHNcbiAgICAgIH0pO1xuICAgICAgdGhpcy5sb2NhbERhdGEubnVtKys7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIENvbGRTdGFydFByb3BHaWZ0VHJhaXQudHJhaXRLZXkgKyBcIl0g6LWg6YCB6YGT5YW35byC5bi4OiBcIiArIHQubWVzc2FnZSk7XG4gICAgfVxuICB9XG59Il19

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_magnet/Scripts/Tile2MagnetSlotStepTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e9383F5wtFDxpi7MGcFoPlD', 'Tile2MagnetSlotStepTrait');
// subpackages/l_magnet/Scripts/Tile2MagnetSlotStepTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var Tile2MagnetSlotStepTrait = /** @class */ (function (_super) {
    __extends(Tile2MagnetSlotStepTrait, _super);
    function Tile2MagnetSlotStepTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._magnetItemNode = null;
        return _this;
    }
    Tile2MagnetSlotStepTrait.prototype.isMagnetNodeAlive = function () {
        return this._magnetItemNode && cc.isValid(this._magnetItemNode) && this._magnetItemNode.activeInHierarchy;
    };
    Tile2MagnetSlotStepTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2MagnetSlotStepTrait.prototype.isPreconMet = function () {
        return true;
    };
    Tile2MagnetSlotStepTrait.prototype.isBreakCon = function () {
        return true;
    };
    Tile2MagnetSlotStepTrait.prototype.getMatchPair = function () {
        return this.traitData.matchPair || 1;
    };
    Tile2MagnetSlotStepTrait.prototype.getStepCount = function () {
        return this.localData.stepCount || 0;
    };
    Tile2MagnetSlotStepTrait.prototype.getStepLimit = function () {
        return this.traitData.stepCount || 0;
    };
    Tile2MagnetSlotStepTrait.prototype.getSlotBarLimit = function () {
        return this.traitData.slotBarCount || 0;
    };
    Tile2MagnetSlotStepTrait.prototype.onT2MagnetItem_enterAni = function (t, e) {
        var r = t.ins;
        if (r && cc.isValid(r.node)) {
            this._magnetItemNode = r.node;
            this.localData.stepCount = 0;
        }
        e();
    };
    Tile2MagnetSlotStepTrait.prototype.onT2MagnetItem_onDestroy = function (t, e) {
        this._magnetItemNode = null;
        e();
    };
    Tile2MagnetSlotStepTrait.prototype.onClearT2Hlp_modifyStepCnt = function (t, e) {
        this.modifyStepCount();
        e();
    };
    Tile2MagnetSlotStepTrait.prototype.onClearT4Hlp_modifyStepCnt = function (t, e) {
        this.modifyStepCount();
        e();
    };
    Tile2MagnetSlotStepTrait.prototype.modifyStepCount = function () {
        if (!this.isMagnetNodeAlive()) {
            var t = UserModel_1.default.getInstance().getCurrentGameData().slotBarIds || [], e = this.getSlotBarLimit();
            if (t.length >= e) {
                this.localData.stepCount = (this.localData.stepCount || 0) + 1;
            }
            else {
                this.localData.stepCount = 0;
            }
        }
    };
    Tile2MagnetSlotStepTrait.prototype.onT2MagnetChk_chkCon = function (t, e) {
        var r = this.isPreconMet();
        r && (r = this.checkCanShow(t.ins));
        if (this.isBreakCon()) {
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: r
            });
        }
        else {
            e();
        }
    };
    Tile2MagnetSlotStepTrait.prototype.checkCanShow = function (t) {
        var e = AdManager_1.default.getInstance().checkVideoAdIsReady(), r = t.context, o = null == r ? void 0 : r.getGameData(), n = (null == o ? void 0 : o.slotBarIds) || [], a = this.getStepLimit(), i = this.getSlotBarLimit();
        return this.localData.stepCount >= a && n.length >= i && e;
    };
    Tile2MagnetSlotStepTrait.traitKey = "Tile2MagnetSlotStep";
    __decorate([
        mj.traitEvent("T2MagSlotStep_preMet")
    ], Tile2MagnetSlotStepTrait.prototype, "isPreconMet", null);
    __decorate([
        mj.traitEvent("T2MagSlotStep_breakCon")
    ], Tile2MagnetSlotStepTrait.prototype, "isBreakCon", null);
    Tile2MagnetSlotStepTrait = __decorate([
        mj.trait,
        mj.class("Tile2MagnetSlotStepTrait")
    ], Tile2MagnetSlotStepTrait);
    return Tile2MagnetSlotStepTrait;
}(Trait_1.default));
exports.default = Tile2MagnetSlotStepTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21hZ25ldC9TY3JpcHRzL1RpbGUyTWFnbmV0U2xvdFN0ZXBUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELHNFQUFpRTtBQUNqRSxnRUFBMkQ7QUFHM0Q7SUFBc0QsNENBQUs7SUFBM0Q7UUFBQSxxRUFrRkM7UUFqRkMscUJBQWUsR0FBRyxJQUFJLENBQUM7O0lBaUZ6QixDQUFDO0lBL0VDLG9EQUFpQixHQUFqQjtRQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDO0lBQzVHLENBQUM7SUFDRCx5Q0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsOENBQVcsR0FBWDtRQUNFLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELDZDQUFVLEdBQVY7UUFDRSxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDRCwrQ0FBWSxHQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNELCtDQUFZLEdBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsK0NBQVksR0FBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxrREFBZSxHQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNELDBEQUF1QixHQUF2QixVQUF3QixDQUFDLEVBQUUsQ0FBQztRQUMxQixJ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QUM7SUFReEM7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDOytEQUdyQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQzs4REFHdkM7SUFoQmtCLHdCQUF3QjtRQUY1QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUM7T0FDaEIsd0JBQXdCLENBa0Y1QztJQUFELCtCQUFDO0NBbEZELEFBa0ZDLENBbEZxRCxlQUFLLEdBa0YxRDtrQkFsRm9CLHdCQUF3QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IEFkTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2Jhc2UvYWQvQWRNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVGlsZTJNYWduZXRTbG90U3RlcFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlMk1hZ25ldFNsb3RTdGVwVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9tYWduZXRJdGVtTm9kZSA9IG51bGw7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVGlsZTJNYWduZXRTbG90U3RlcFwiO1xuICBpc01hZ25ldE5vZGVBbGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFnbmV0SXRlbU5vZGUgJiYgY2MuaXNWYWxpZCh0aGlzLl9tYWduZXRJdGVtTm9kZSkgJiYgdGhpcy5fbWFnbmV0SXRlbU5vZGUuYWN0aXZlSW5IaWVyYXJjaHk7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVDJNYWdTbG90U3RlcF9wcmVNZXRcIilcbiAgaXNQcmVjb25NZXQoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUMk1hZ1Nsb3RTdGVwX2JyZWFrQ29uXCIpXG4gIGlzQnJlYWtDb24oKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZ2V0TWF0Y2hQYWlyKCkge1xuICAgIHJldHVybiB0aGlzLnRyYWl0RGF0YS5tYXRjaFBhaXIgfHwgMTtcbiAgfVxuICBnZXRTdGVwQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLnN0ZXBDb3VudCB8fCAwO1xuICB9XG4gIGdldFN0ZXBMaW1pdCgpIHtcbiAgICByZXR1cm4gdGhpcy50cmFpdERhdGEuc3RlcENvdW50IHx8IDA7XG4gIH1cbiAgZ2V0U2xvdEJhckxpbWl0KCkge1xuICAgIHJldHVybiB0aGlzLnRyYWl0RGF0YS5zbG90QmFyQ291bnQgfHwgMDtcbiAgfVxuICBvblQyTWFnbmV0SXRlbV9lbnRlckFuaSh0LCBlKSB7XG4gICAgdmFyIHIgPSB0LmlucztcbiAgICBpZiAociAmJiBjYy5pc1ZhbGlkKHIubm9kZSkpIHtcbiAgICAgIHRoaXMuX21hZ25ldEl0ZW1Ob2RlID0gci5ub2RlO1xuICAgICAgdGhpcy5sb2NhbERhdGEuc3RlcENvdW50ID0gMDtcbiAgICB9XG4gICAgZSgpO1xuICB9XG4gIG9uVDJNYWduZXRJdGVtX29uRGVzdHJveSh0LCBlKSB7XG4gICAgdGhpcy5fbWFnbmV0SXRlbU5vZGUgPSBudWxsO1xuICAgIGUoKTtcbiAgfVxuICBvbkNsZWFyVDJIbHBfbW9kaWZ5U3RlcENudCh0LCBlKSB7XG4gICAgdGhpcy5tb2RpZnlTdGVwQ291bnQoKTtcbiAgICBlKCk7XG4gIH1cbiAgb25DbGVhclQ0SGxwX21vZGlmeVN0ZXBDbnQodCwgZSkge1xuICAgIHRoaXMubW9kaWZ5U3RlcENvdW50KCk7XG4gICAgZSgpO1xuICB9XG4gIG1vZGlmeVN0ZXBDb3VudCgpIHtcbiAgICBpZiAoIXRoaXMuaXNNYWduZXROb2RlQWxpdmUoKSkge1xuICAgICAgdmFyIHQgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZURhdGEoKS5zbG90QmFySWRzIHx8IFtdLFxuICAgICAgICBlID0gdGhpcy5nZXRTbG90QmFyTGltaXQoKTtcbiAgICAgIGlmICh0Lmxlbmd0aCA+PSBlKSB7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLnN0ZXBDb3VudCA9ICh0aGlzLmxvY2FsRGF0YS5zdGVwQ291bnQgfHwgMCkgKyAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEuc3RlcENvdW50ID0gMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25UMk1hZ25ldENoa19jaGtDb24odCwgZSkge1xuICAgIHZhciByID0gdGhpcy5pc1ByZWNvbk1ldCgpO1xuICAgIHIgJiYgKHIgPSB0aGlzLmNoZWNrQ2FuU2hvdyh0LmlucykpO1xuICAgIGlmICh0aGlzLmlzQnJlYWtDb24oKSkge1xuICAgICAgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgcmV0dXJuVmFsOiByXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBjaGVja0NhblNob3codCkge1xuICAgIHZhciBlID0gQWRNYW5hZ2VyLmdldEluc3RhbmNlKCkuY2hlY2tWaWRlb0FkSXNSZWFkeSgpLFxuICAgICAgciA9IHQuY29udGV4dCxcbiAgICAgIG8gPSBudWxsID09IHIgPyB2b2lkIDAgOiByLmdldEdhbWVEYXRhKCksXG4gICAgICBuID0gKG51bGwgPT0gbyA/IHZvaWQgMCA6IG8uc2xvdEJhcklkcykgfHwgW10sXG4gICAgICBhID0gdGhpcy5nZXRTdGVwTGltaXQoKSxcbiAgICAgIGkgPSB0aGlzLmdldFNsb3RCYXJMaW1pdCgpO1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5zdGVwQ291bnQgPj0gYSAmJiBuLmxlbmd0aCA+PSBpICYmIGU7XG4gIH1cbn0iXX0=

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/combo/Tile2ComboChecker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '52605iH481MJLz5uKn1dm89', 'Tile2ComboChecker');
// Scripts/process/combo/Tile2ComboChecker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ComboChecker = void 0;
var UserModel_1 = require("../../gamePlay/user/UserModel");
var BaseCoreObject_1 = require("../../BaseCoreObject");
var GameTypeEnums_1 = require("../../core/simulator/constant/GameTypeEnums");
var Tile2ComboChecker = /** @class */ (function (_super) {
    __extends(Tile2ComboChecker, _super);
    function Tile2ComboChecker(t) {
        return _super.call(this, t) || this;
    }
    Tile2ComboChecker.prototype.getComboLimit = function () {
        return 5;
    };
    Tile2ComboChecker.prototype.getBreakLimit = function () {
        return 1;
    };
    Tile2ComboChecker.prototype.checkIsComboState = function (e) {
        return !!UserModel_1.default.getInstance().isGuideFinished() && e >= this.getComboLimit();
    };
    Tile2ComboChecker.prototype.checkIsBreakComboState = function (e) {
        return e >= this.getBreakLimit();
    };
    Tile2ComboChecker.prototype.getComboDisplayThresholds = function () {
        return [5, 10, 15, 20, 30, 40, 50];
    };
    Tile2ComboChecker.prototype.canShowComboDisplay = function (e) {
        return this.getComboDisplayThresholds().includes(e);
    };
    Tile2ComboChecker.prototype.getScreenEdgeThresholds = function () {
        return [5, 15, 30];
    };
    Tile2ComboChecker.prototype.canShowScreenEdge = function (e) {
        return this.context.getTile2SlotType() === GameTypeEnums_1.ETile2SlotType.Slot4 ? e > 0 && e % 5 == 0 : this.getScreenEdgeThresholds().includes(e);
    };
    Tile2ComboChecker.prototype.getReachedScreenEdgeThreshold = function (e) {
        for (var t = this.getScreenEdgeThresholds(), o = t.length - 1; o >= 0; o--)
            if (e >= t[o])
                return t[o];
        return 0;
    };
    Tile2ComboChecker.prototype.canShowScreenTop = function (e) {
        return e.advanced;
    };
    Tile2ComboChecker.prototype.getSlotLevelThresholds = function () {
        return [[30, 5], [20, 4], [15, 3], [10, 2], [5, 1]];
    };
    Tile2ComboChecker.prototype.getSlotLevel = function (e) {
        var t, o;
        try {
            for (var n = __values(this.getSlotLevelThresholds()), i = n.next(); !i.done; i = n.next()) {
                var r = __read(i.value, 2), s = r[0], c = r[1];
                if (e >= s)
                    return c;
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                i && !i.done && (o = n.return) && o.call(n);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return 0;
    };
    Tile2ComboChecker.prototype.canSlotAdvance = function (e, t) {
        return !!UserModel_1.default.getInstance().isGuideFinished() && e > t;
    };
    Tile2ComboChecker.prototype.checkComboDisplayState = function () {
        var e = this.context.getGameData(), t = e.getComboNum(), o = this.checkIsComboState(t), n = e.getSlotLevel(), i = this.getSlotLevel(e.getCurMaxCombo()), r = !(this.context.getTile2SlotType() === GameTypeEnums_1.ETile2SlotType.Slot3) && this.canSlotAdvance(i, n), a = this.showTopEffect();
        return {
            comboNum: t,
            comboState: o,
            showComboDisplay: o && this.canShowComboDisplay(t),
            showScreenEdge: o && this.canShowScreenEdge(t),
            showScreenTop: o && r && a,
            showSlotAdvance: r,
            slotLevel: r ? i : n
        };
    };
    Tile2ComboChecker.prototype.showTopEffect = function () {
        return true;
    };
    __decorate([
        mj.traitEvent("T2CmbChk_showTopEff")
    ], Tile2ComboChecker.prototype, "showTopEffect", null);
    return Tile2ComboChecker;
}(BaseCoreObject_1.BaseCoreObject));
exports.Tile2ComboChecker = Tile2ComboChecker;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvY29tYm8vVGlsZTJDb21ib0NoZWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBc0Q7QUFDdEQsdURBQXNEO0FBQ3RELDZFQUE2RTtBQUM3RTtJQUF1QyxxQ0FBYztJQUNuRCwyQkFBWSxDQUFDO2VBQ1gsa0JBQU0sQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUNELHlDQUFhLEdBQWI7UUFDRSxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDRCx5Q0FBYSxHQUFiO1FBQ0UsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0QsNkNBQWlCLEdBQWpCLFVBQWtCLENBQUM7UUFDakIsT0FBTyxDQUFDLENBQUMsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ2xGLENBQUM7SUFDRCxrREFBc0IsR0FBdEIsVUFBdUIsQ0FBQztRQUN0QixPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUNELHFEQUF5QixHQUF6QjtRQUNFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsK0NBQW1CLEdBQW5CLFVBQW9CLENBQUM7UUFDbkIsT0FBTyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUNELG1EQUF1QixHQUF2QjtRQUNFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFDRCw2Q0FBaUIsR0FBakIsVUFBa0IsQ0FBQztRQUNqQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JB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QyxFQUN6QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyw4QkFBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUM1RixDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzNCLE9BQU87WUFDTCxRQUFRLEVBQUUsQ0FBQztZQUNYLFVBQVUsRUFBRSxDQUFDO1lBQ2IsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7WUFDbEQsY0FBYyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1lBQzlDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDMUIsZUFBZSxFQUFFLENBQUM7WUFDbEIsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JCLENBQUM7SUFDSixDQUFDO0lBRUQseUNBQWEsR0FBYjtRQUNFLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUZEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQzswREFHcEM7SUFDSCx3QkFBQztDQXJGRCxBQXFGQyxDQXJGc0MsK0JBQWMsR0FxRnBEO0FBckZZLDhDQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IHsgQmFzZUNvcmVPYmplY3QgfSBmcm9tICcuLi8uLi9CYXNlQ29yZU9iamVjdCc7XG5pbXBvcnQgeyBFVGlsZTJTbG90VHlwZSB9IGZyb20gJy4uLy4uL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuZXhwb3J0IGNsYXNzIFRpbGUyQ29tYm9DaGVja2VyIGV4dGVuZHMgQmFzZUNvcmVPYmplY3Qge1xuICBjb25zdHJ1Y3Rvcih0KSB7XG4gICAgc3VwZXIodCk7XG4gIH1cbiAgZ2V0Q29tYm9MaW1pdCgpIHtcbiAgICByZXR1cm4gNTtcbiAgfVxuICBnZXRCcmVha0xpbWl0KCkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIGNoZWNrSXNDb21ib1N0YXRlKGUpIHtcbiAgICByZXR1cm4gISFVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5pc0d1aWRlRmluaXNoZWQoKSAmJiBlID49IHRoaXMuZ2V0Q29tYm9MaW1pdCgpO1xuICB9XG4gIGNoZWNrSXNCcmVha0NvbWJvU3RhdGUoZSkge1xuICAgIHJldHVybiBlID49IHRoaXMuZ2V0QnJlYWtMaW1pdCgpO1xuICB9XG4gIGdldENvbWJvRGlzcGxheVRocmVzaG9sZHMoKSB7XG4gICAgcmV0dXJuIFs1LCAxMCwgMTUsIDIwLCAzMCwgNDAsIDUwXTtcbiAgfVxuICBjYW5TaG93Q29tYm9EaXNwbGF5KGUpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb21ib0Rpc3BsYXlUaHJlc2hvbGRzKCkuaW5jbHVkZXMoZSk7XG4gIH1cbiAgZ2V0U2NyZWVuRWRnZVRocmVzaG9sZHMoKSB7XG4gICAgcmV0dXJuIFs1LCAxNSwgMzBdO1xuICB9XG4gIGNhblNob3dTY3JlZW5FZGdlKGUpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LmdldFRpbGUyU2xvdFR5cGUoKSA9PT0gRVRpbGUyU2xvdFR5cGUuU2xvdDQgPyBlID4gMCAmJiBlICUgNSA9PSAwIDogdGhpcy5nZXRTY3JlZW5FZGdlVGhyZXNob2xkcygpLmluY2x1ZGVzKGUpO1xuICB9XG4gIGdldFJlYWNoZWRTY3JlZW5FZGdlVGhyZXNob2xkKGUpIHtcbiAgICBmb3IgKHZhciB0ID0gdGhpcy5nZXRTY3JlZW5FZGdlVGhyZXNob2xkcygpLCBvID0gdC5sZW5ndGggLSAxOyBvID49IDA7IG8tLSkgaWYgKGUgPj0gdFtvXSkgcmV0dXJuIHRbb107XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgY2FuU2hvd1NjcmVlblRvcChlKSB7XG4gICAgcmV0dXJuIGUuYWR2YW5jZWQ7XG4gIH1cbiAgZ2V0U2xvdExldmVsVGhyZXNob2xkcygpIHtcbiAgICByZXR1cm4gW1szMCwgNV0sIFsyMCwgNF0sIFsxNSwgM10sIFsxMCwgMl0sIFs1LCAxXV07XG4gIH1cbiAgZ2V0U2xvdExldmVsKGUpIHtcbiAgICB2YXIgdCwgbztcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbiA9IF9fdmFsdWVzKHRoaXMuZ2V0U2xvdExldmVsVGhyZXNob2xkcygpKSwgaSA9IG4ubmV4dCgpOyAhaS5kb25lOyBpID0gbi5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHIgPSBfX3JlYWQoaS52YWx1ZSwgMiksXG4gICAgICAgICAgcyA9IHJbMF0sXG4gICAgICAgICAgYyA9IHJbMV07XG4gICAgICAgIGlmIChlID49IHMpIHJldHVybiBjO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpICYmICFpLmRvbmUgJiYgKG8gPSBuLnJldHVybikgJiYgby5jYWxsKG4pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG4gIGNhblNsb3RBZHZhbmNlKGUsIHQpIHtcbiAgICByZXR1cm4gISFVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5pc0d1aWRlRmluaXNoZWQoKSAmJiBlID4gdDtcbiAgfVxuICBjaGVja0NvbWJvRGlzcGxheVN0YXRlKCkge1xuICAgIHZhciBlID0gdGhpcy5jb250ZXh0LmdldEdhbWVEYXRhKCksXG4gICAgICB0ID0gZS5nZXRDb21ib051bSgpLFxuICAgICAgbyA9IHRoaXMuY2hlY2tJc0NvbWJvU3RhdGUodCksXG4gICAgICBuID0gZS5nZXRTbG90TGV2ZWwoKSxcbiAgICAgIGkgPSB0aGlzLmdldFNsb3RMZXZlbChlLmdldEN1ck1heENvbWJvKCkpLFxuICAgICAgciA9ICEodGhpcy5jb250ZXh0LmdldFRpbGUyU2xvdFR5cGUoKSA9PT0gRVRpbGUyU2xvdFR5cGUuU2xvdDMpICYmIHRoaXMuY2FuU2xvdEFkdmFuY2UoaSwgbiksXG4gICAgICBhID0gdGhpcy5zaG93VG9wRWZmZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbWJvTnVtOiB0LFxuICAgICAgY29tYm9TdGF0ZTogbyxcbiAgICAgIHNob3dDb21ib0Rpc3BsYXk6IG8gJiYgdGhpcy5jYW5TaG93Q29tYm9EaXNwbGF5KHQpLFxuICAgICAgc2hvd1NjcmVlbkVkZ2U6IG8gJiYgdGhpcy5jYW5TaG93U2NyZWVuRWRnZSh0KSxcbiAgICAgIHNob3dTY3JlZW5Ub3A6IG8gJiYgciAmJiBhLFxuICAgICAgc2hvd1Nsb3RBZHZhbmNlOiByLFxuICAgICAgc2xvdExldmVsOiByID8gaSA6IG5cbiAgICB9O1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVDJDbWJDaGtfc2hvd1RvcEVmZlwiKVxuICBzaG93VG9wRWZmZWN0KCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59Il19
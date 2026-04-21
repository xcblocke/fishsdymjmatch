
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_materialCard/Scripts/MaterialCard9Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ea495bm0NRENb8EFCi7JpCk', 'MaterialCard9Trait');
// subpackages/l_materialCard/Scripts/MaterialCard9Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var MaterialCardBaseTrait_1 = require("./MaterialCardBaseTrait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var MaterialCard9Trait = /** @class */ (function (_super) {
    __extends(MaterialCard9Trait, _super);
    function MaterialCard9Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._startLevel = 20;
        _this._interval = 1;
        return _this;
    }
    MaterialCard9Trait_1 = MaterialCard9Trait;
    MaterialCard9Trait.prototype.onLoad = function () {
        var e, r, a, i;
        _super.prototype.onLoad.call(this);
        this._startLevel = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.startLevel) && void 0 !== r ? r : 20;
        this._interval = null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.interval) && void 0 !== i ? i : 1;
    };
    MaterialCard9Trait.prototype._getCurrentModeLevel = function () {
        var t, e, r = UserModel_1.default.getInstance(), a = r.getCurrentGameData();
        return this.isNormalMode() ? null !== (t = r.normalData.getLevelId()) && void 0 !== t ? t : 0 : this.isTravelMode() && null !== (e = a.getLevelId()) && void 0 !== e ? e : 0;
    };
    MaterialCard9Trait.prototype._shouldEnableForLevel = function (t) {
        return !(t < this._startLevel) && (t - this._startLevel) % this._interval == 0;
    };
    MaterialCard9Trait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            if (!this.isNormalMode() && !this.isTravelMode()) {
                e();
                return;
            }
            this.getCurrentGameType();
            var a = this._getCurrentModeLevel();
            if (!this._shouldEnableForLevel(a)) {
                e();
                return;
            }
            this.switchToNextMaterialCard();
            e();
        }
        catch (t) {
            console.error("[" + MaterialCard9Trait_1.traitKey + "] 处理新游戏事件失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    var MaterialCard9Trait_1;
    MaterialCard9Trait.traitKey = "MaterialCard9";
    MaterialCard9Trait = MaterialCard9Trait_1 = __decorate([
        mj.trait,
        mj.class("MaterialCard9Trait")
    ], MaterialCard9Trait);
    return MaterialCard9Trait;
}(MaterialCardBaseTrait_1.default));
exports.default = MaterialCard9Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21hdGVyaWFsQ2FyZC9TY3JpcHRzL01hdGVyaWFsQ2FyZDlUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQTREO0FBQzVELHNFQUFpRTtBQUdqRTtJQUFnRCxzQ0FBcUI7SUFBckU7UUFBQSxxRUF1Q0M7UUF0Q0MsaUJBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsZUFBUyxHQUFHLENBQUMsQ0FBQzs7SUFxQ2hCLENBQUM7MkJBdkNvQixrQkFBa0I7SUFJckMsbUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2YsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2xJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0gsQ0FBQztJQUNELGlEQUFvQixHQUFwQjtRQUNFLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsRUFDM0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzdCLE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvSyxDQUFDO0lBQ0Qsa0RBQXFCLEdBQXJCLFVBQXNCLENBQUM7UUFDckIsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUNELG1EQUFzQixHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN6QixJQUFJO1lBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRTtnQkFDaEQsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osT0FBTzthQUNSO1lBQ0QsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7WUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbEMsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osT0FBTzthQUNSO1lBQ0QsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7WUFDaEMsQ0FBQyxFQUFFLENBQUM7U0FDTDtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsb0JBQWtCLENBQUMsUUFBUSxHQUFHLGVBQWUsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN0RyxDQUFDLEVBQUUsQ0FBQztTQUNMO0lBQ0gsQ0FBQzs7SUFuQ00sMkJBQVEsR0FBRyxlQUFlLENBQUM7SUFIZixrQkFBa0I7UUFGdEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDO09BQ1Ysa0JBQWtCLENBdUN0QztJQUFELHlCQUFDO0NBdkNELEFBdUNDLENBdkMrQywrQkFBcUIsR0F1Q3BFO2tCQXZDb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hdGVyaWFsQ2FyZEJhc2VUcmFpdCBmcm9tICcuL01hdGVyaWFsQ2FyZEJhc2VUcmFpdCc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJNYXRlcmlhbENhcmQ5VHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdGVyaWFsQ2FyZDlUcmFpdCBleHRlbmRzIE1hdGVyaWFsQ2FyZEJhc2VUcmFpdCB7XG4gIF9zdGFydExldmVsID0gMjA7XG4gIF9pbnRlcnZhbCA9IDE7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiTWF0ZXJpYWxDYXJkOVwiO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIGUsIHIsIGEsIGk7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fc3RhcnRMZXZlbCA9IG51bGwgIT09IChyID0gbnVsbCA9PT0gKGUgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuc3RhcnRMZXZlbCkgJiYgdm9pZCAwICE9PSByID8gciA6IDIwO1xuICAgIHRoaXMuX2ludGVydmFsID0gbnVsbCAhPT0gKGkgPSBudWxsID09PSAoYSA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5pbnRlcnZhbCkgJiYgdm9pZCAwICE9PSBpID8gaSA6IDE7XG4gIH1cbiAgX2dldEN1cnJlbnRNb2RlTGV2ZWwoKSB7XG4gICAgdmFyIHQsXG4gICAgICBlLFxuICAgICAgciA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLFxuICAgICAgYSA9IHIuZ2V0Q3VycmVudEdhbWVEYXRhKCk7XG4gICAgcmV0dXJuIHRoaXMuaXNOb3JtYWxNb2RlKCkgPyBudWxsICE9PSAodCA9IHIubm9ybWFsRGF0YS5nZXRMZXZlbElkKCkpICYmIHZvaWQgMCAhPT0gdCA/IHQgOiAwIDogdGhpcy5pc1RyYXZlbE1vZGUoKSAmJiBudWxsICE9PSAoZSA9IGEuZ2V0TGV2ZWxJZCgpKSAmJiB2b2lkIDAgIT09IGUgPyBlIDogMDtcbiAgfVxuICBfc2hvdWxkRW5hYmxlRm9yTGV2ZWwodCkge1xuICAgIHJldHVybiAhKHQgPCB0aGlzLl9zdGFydExldmVsKSAmJiAodCAtIHRoaXMuX3N0YXJ0TGV2ZWwpICUgdGhpcy5faW50ZXJ2YWwgPT0gMDtcbiAgfVxuICBvbkdzTGlzdGVuZXJfb25OZXdHYW1lKHQsIGUpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKCF0aGlzLmlzTm9ybWFsTW9kZSgpICYmICF0aGlzLmlzVHJhdmVsTW9kZSgpKSB7XG4gICAgICAgIGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5nZXRDdXJyZW50R2FtZVR5cGUoKTtcbiAgICAgIHZhciBhID0gdGhpcy5fZ2V0Q3VycmVudE1vZGVMZXZlbCgpO1xuICAgICAgaWYgKCF0aGlzLl9zaG91bGRFbmFibGVGb3JMZXZlbChhKSkge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3dpdGNoVG9OZXh0TWF0ZXJpYWxDYXJkKCk7XG4gICAgICBlKCk7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIE1hdGVyaWFsQ2FyZDlUcmFpdC50cmFpdEtleSArIFwiXSDlpITnkIbmlrDmuLjmiI/kuovku7blpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxufSJdfQ==
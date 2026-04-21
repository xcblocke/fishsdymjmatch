
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_materialCard/Scripts/MaterialCard10Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '49c457xAhJJ+4pPlMrRC/rj', 'MaterialCard10Trait');
// subpackages/l_materialCard/Scripts/MaterialCard10Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var MaterialCardBaseTrait_1 = require("./MaterialCardBaseTrait");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var MaterialCard10Trait = /** @class */ (function (_super) {
    __extends(MaterialCard10Trait, _super);
    function MaterialCard10Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MaterialCard10Trait_1 = MaterialCard10Trait;
    MaterialCard10Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    MaterialCard10Trait.prototype._isHardLevel = function (t) {
        return GameUtils_1.default.isTypeHardLevel(this.getCurrentGameType(), t);
    };
    MaterialCard10Trait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            if (!this.isNormalMode()) {
                e();
                return;
            }
            var a = this.getCurrentLevel();
            if (this._isHardLevel(a)) {
                this.switchToNextMaterialCard();
            }
            else {
                0 !== this.getCurMaterialCard() && this.setCurMaterialCard(0);
            }
            e();
        }
        catch (t) {
            console.error("[" + MaterialCard10Trait_1.traitKey + "] 处理新游戏事件失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    var MaterialCard10Trait_1;
    MaterialCard10Trait.traitKey = "MaterialCard10";
    MaterialCard10Trait = MaterialCard10Trait_1 = __decorate([
        mj.trait,
        mj.class("MaterialCard10Trait")
    ], MaterialCard10Trait);
    return MaterialCard10Trait;
}(MaterialCardBaseTrait_1.default));
exports.default = MaterialCard10Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21hdGVyaWFsQ2FyZC9TY3JpcHRzL01hdGVyaWFsQ2FyZDEwVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUE0RDtBQUM1RCw0RUFBdUU7QUFHdkU7SUFBaUQsdUNBQXFCO0lBQXRFOztJQTBCQSxDQUFDOzRCQTFCb0IsbUJBQW1CO0lBRXRDLG9DQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCwwQ0FBWSxHQUFaLFVBQWEsQ0FBQztRQUNaLE9BQU8sbUJBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUNELG9EQUFzQixHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN6QixJQUFJO1lBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRTtnQkFDeEIsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osT0FBTzthQUNSO1lBQ0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQy9CLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7YUFDakM7aUJBQU07Z0JBQ0wsQ0FBQyxLQUFLLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMvRDtZQUNELENBQUMsRUFBRSxDQUFDO1NBQ0w7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLHFCQUFtQixDQUFDLFFBQVEsR0FBRyxlQUFlLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDdkcsQ0FBQyxFQUFFLENBQUM7U0FDTDtJQUNILENBQUM7O0lBeEJNLDRCQUFRLEdBQUcsZ0JBQWdCLENBQUM7SUFEaEIsbUJBQW1CO1FBRnZDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztPQUNYLG1CQUFtQixDQTBCdkM7SUFBRCwwQkFBQztDQTFCRCxBQTBCQyxDQTFCZ0QsK0JBQXFCLEdBMEJyRTtrQkExQm9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYXRlcmlhbENhcmRCYXNlVHJhaXQgZnJvbSAnLi9NYXRlcmlhbENhcmRCYXNlVHJhaXQnO1xuaW1wb3J0IEdhbWVVdGlscyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL3V0aWwvR2FtZVV0aWxzJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiTWF0ZXJpYWxDYXJkMTBUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0ZXJpYWxDYXJkMTBUcmFpdCBleHRlbmRzIE1hdGVyaWFsQ2FyZEJhc2VUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiTWF0ZXJpYWxDYXJkMTBcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIF9pc0hhcmRMZXZlbCh0KSB7XG4gICAgcmV0dXJuIEdhbWVVdGlscy5pc1R5cGVIYXJkTGV2ZWwodGhpcy5nZXRDdXJyZW50R2FtZVR5cGUoKSwgdCk7XG4gIH1cbiAgb25Hc0xpc3RlbmVyX29uTmV3R2FtZSh0LCBlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghdGhpcy5pc05vcm1hbE1vZGUoKSkge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBhID0gdGhpcy5nZXRDdXJyZW50TGV2ZWwoKTtcbiAgICAgIGlmICh0aGlzLl9pc0hhcmRMZXZlbChhKSkge1xuICAgICAgICB0aGlzLnN3aXRjaFRvTmV4dE1hdGVyaWFsQ2FyZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgMCAhPT0gdGhpcy5nZXRDdXJNYXRlcmlhbENhcmQoKSAmJiB0aGlzLnNldEN1ck1hdGVyaWFsQ2FyZCgwKTtcbiAgICAgIH1cbiAgICAgIGUoKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgTWF0ZXJpYWxDYXJkMTBUcmFpdC50cmFpdEtleSArIFwiXSDlpITnkIbmlrDmuLjmiI/kuovku7blpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxufSJdfQ==
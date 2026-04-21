
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_winFullCombo/Scripts/WinFullComboTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ace5bCbzwlLfoCO4+xDe92j', 'WinFullComboTrait');
// subpackages/l_winFullCombo/Scripts/WinFullComboTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var NormalGameData_1 = require("../../../Scripts/core/simulator/data/NormalGameData");
var WinFullComboView_1 = require("./WinFullComboView");
var WinFullComboTrait = /** @class */ (function (_super) {
    __extends(WinFullComboTrait, _super);
    function WinFullComboTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.requireRes = ["prefabs/ui/WinFullComboView"];
        return _this;
    }
    WinFullComboTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    WinFullComboTrait.prototype.isFullComboTriggered = function () {
        var t = NormalGameData_1.default.getInstance(), e = t.getHasTriggeredFullCombo(), o = t.getHasTriggeredRewardCombo();
        return e || o;
    };
    WinFullComboTrait.prototype.onWinCtrl_initRes = function (t, e) {
        if (this.isFullComboTriggered()) {
            var o = t.ins;
            null == o || o.addPreloadRes("Prefab", this.requireRes);
        }
        e();
    };
    WinFullComboTrait.prototype.onLevelBox_pbDelay = function (t, e) {
        this.isFullComboTriggered() && (t.args[0].delayTime += 0.33);
        e();
    };
    WinFullComboTrait.prototype.onWinVw_showWinVw = function (t, e) {
        var o = t.ins, i = t.args[0];
        if (cc.isValid(o) && this.isFullComboTriggered()) {
            var r = o.getContentNode();
            if (cc.isValid(r)) {
                var n = r.getChildByName("WinFullComboView");
                if (!cc.isValid(n)) {
                    n = o.createUISync(WinFullComboView_1.default);
                    cc.isValid(n) && r.addChild(n);
                }
                cc.isValid(n) && n.getComponent(WinFullComboView_1.default).showFullComboUI(i, r);
            }
        }
        e();
    };
    WinFullComboTrait.traitKey = "WinFullCombo";
    __decorate([
        mj.traitEvent("WinFCombo_isTriggered")
    ], WinFullComboTrait.prototype, "isFullComboTriggered", null);
    WinFullComboTrait = __decorate([
        mj.trait,
        mj.class("WinFullComboTrait")
    ], WinFullComboTrait);
    return WinFullComboTrait;
}(Trait_1.default));
exports.default = WinFullComboTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3dpbkZ1bGxDb21iby9TY3JpcHRzL1dpbkZ1bGxDb21ib1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0Qsc0ZBQWlGO0FBQ2pGLHVEQUFrRDtBQUdsRDtJQUErQyxxQ0FBSztJQUFwRDtRQUFBLHFFQXdDQztRQXZDQyxnQkFBVSxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQzs7SUF1Qy9DLENBQUM7SUFyQ0Msa0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELGdEQUFvQixHQUFwQjtRQUNFLElBQUksQ0FBQyxHQUFHLHdCQUFjLENBQUMsV0FBVyxFQUFFLEVBQ2xDLENBQUMsR0FBRyxDQUFDLENBQUMsd0JBQXdCLEVBQUUsRUFDaEMsQ0FBQyxHQUFHLENBQUMsQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBQ0QsNkNBQWlCLEdBQWpCLFVBQWtCLENBQUMsRUFBRSxDQUFDO1FBQ3BCLElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFLEVBQUU7WUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUNkLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3pEO1FBQ0QsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsOENBQWtCLEdBQWxCLFVBQW1CLENBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLENBQUM7UUFDN0QsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsNkNBQWlCLEdBQWpCLFVBQWtCLENBQUMsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQ1gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxFQUFFO1lBQ2hELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUMzQixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDN0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ2xCLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLDBCQUFnQixDQUFDLENBQUM7b0JBQ3JDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDaEM7Z0JBQ0QsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLDBCQUFnQixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUN6RTtTQUNGO1FBQ0QsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBckNNLDBCQUFRLEdBQUcsY0FBYyxDQUFDO0lBS2pDO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQztpRUFNdEM7SUFaa0IsaUJBQWlCO1FBRnJDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQztPQUNULGlCQUFpQixDQXdDckM7SUFBRCx3QkFBQztDQXhDRCxBQXdDQyxDQXhDOEMsZUFBSyxHQXdDbkQ7a0JBeENvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IE5vcm1hbEdhbWVEYXRhIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvZGF0YS9Ob3JtYWxHYW1lRGF0YSc7XG5pbXBvcnQgV2luRnVsbENvbWJvVmlldyBmcm9tICcuL1dpbkZ1bGxDb21ib1ZpZXcnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJXaW5GdWxsQ29tYm9UcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2luRnVsbENvbWJvVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHJlcXVpcmVSZXMgPSBbXCJwcmVmYWJzL3VpL1dpbkZ1bGxDb21ib1ZpZXdcIl07XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiV2luRnVsbENvbWJvXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIldpbkZDb21ib19pc1RyaWdnZXJlZFwiKVxuICBpc0Z1bGxDb21ib1RyaWdnZXJlZCgpIHtcbiAgICB2YXIgdCA9IE5vcm1hbEdhbWVEYXRhLmdldEluc3RhbmNlKCksXG4gICAgICBlID0gdC5nZXRIYXNUcmlnZ2VyZWRGdWxsQ29tYm8oKSxcbiAgICAgIG8gPSB0LmdldEhhc1RyaWdnZXJlZFJld2FyZENvbWJvKCk7XG4gICAgcmV0dXJuIGUgfHwgbztcbiAgfVxuICBvbldpbkN0cmxfaW5pdFJlcyh0LCBlKSB7XG4gICAgaWYgKHRoaXMuaXNGdWxsQ29tYm9UcmlnZ2VyZWQoKSkge1xuICAgICAgdmFyIG8gPSB0LmlucztcbiAgICAgIG51bGwgPT0gbyB8fCBvLmFkZFByZWxvYWRSZXMoXCJQcmVmYWJcIiwgdGhpcy5yZXF1aXJlUmVzKTtcbiAgICB9XG4gICAgZSgpO1xuICB9XG4gIG9uTGV2ZWxCb3hfcGJEZWxheSh0LCBlKSB7XG4gICAgdGhpcy5pc0Z1bGxDb21ib1RyaWdnZXJlZCgpICYmICh0LmFyZ3NbMF0uZGVsYXlUaW1lICs9IDAuMzMpO1xuICAgIGUoKTtcbiAgfVxuICBvbldpblZ3X3Nob3dXaW5Wdyh0LCBlKSB7XG4gICAgdmFyIG8gPSB0LmlucyxcbiAgICAgIGkgPSB0LmFyZ3NbMF07XG4gICAgaWYgKGNjLmlzVmFsaWQobykgJiYgdGhpcy5pc0Z1bGxDb21ib1RyaWdnZXJlZCgpKSB7XG4gICAgICB2YXIgciA9IG8uZ2V0Q29udGVudE5vZGUoKTtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKHIpKSB7XG4gICAgICAgIHZhciBuID0gci5nZXRDaGlsZEJ5TmFtZShcIldpbkZ1bGxDb21ib1ZpZXdcIik7XG4gICAgICAgIGlmICghY2MuaXNWYWxpZChuKSkge1xuICAgICAgICAgIG4gPSBvLmNyZWF0ZVVJU3luYyhXaW5GdWxsQ29tYm9WaWV3KTtcbiAgICAgICAgICBjYy5pc1ZhbGlkKG4pICYmIHIuYWRkQ2hpbGQobik7XG4gICAgICAgIH1cbiAgICAgICAgY2MuaXNWYWxpZChuKSAmJiBuLmdldENvbXBvbmVudChXaW5GdWxsQ29tYm9WaWV3KS5zaG93RnVsbENvbWJvVUkoaSwgcik7XG4gICAgICB9XG4gICAgfVxuICAgIGUoKTtcbiAgfVxufSJdfQ==
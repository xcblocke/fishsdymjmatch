
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/items/RewardComboItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c9d5b/NuXpCXpD9mTrlKMDf', 'RewardComboItem');
// Scripts/items/RewardComboItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../framework/ui/BaseUI");
var GameUtils_1 = require("../core/simulator/util/GameUtils");
var RewardComboItem = /** @class */ (function (_super) {
    __extends(RewardComboItem, _super);
    function RewardComboItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._spineAnim = null;
        return _this;
    }
    RewardComboItem.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._initComponents();
    };
    RewardComboItem.prototype._initComponents = function () {
        this._spineAnim = this.node.getComponentInChildren(sp.Skeleton);
        this._spineAnim;
    };
    RewardComboItem.prototype.startPlayAni = function (e, t) {
        var o = this;
        GameUtils_1.default.playSpine(this._spineAnim, e, false, function () {
            null == t || t();
            o.node.destroy();
        });
    };
    RewardComboItem.prefabUrl = "prefabs/effects/EffectRewardCombo";
    __decorate([
        mj.traitEvent("RwdComboItem_initComp")
    ], RewardComboItem.prototype, "_initComponents", null);
    __decorate([
        mj.traitEvent("RwdComboItem_startPlayAni")
    ], RewardComboItem.prototype, "startPlayAni", null);
    RewardComboItem = __decorate([
        mj.class
    ], RewardComboItem);
    return RewardComboItem;
}(BaseUI_1.default));
exports.default = RewardComboItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2l0ZW1zL1Jld2FyZENvbWJvSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQTRDO0FBQzVDLDhEQUF5RDtBQUV6RDtJQUE2QyxtQ0FBTTtJQUFuRDtRQUFBLHFFQW9CQztRQW5CQyxnQkFBVSxHQUFHLElBQUksQ0FBQzs7SUFtQnBCLENBQUM7SUFqQkMsZ0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCx5Q0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxzQ0FBWSxHQUFaLFVBQWEsQ0FBQyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixtQkFBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUU7WUFDN0MsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNqQixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQWpCTSx5QkFBUyxHQUFHLG1DQUFtQyxDQUFDO0lBTXZEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQzswREFJdEM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsMkJBQTJCLENBQUM7dURBTzFDO0lBbkJrQixlQUFlO1FBRG5DLEVBQUUsQ0FBQyxLQUFLO09BQ1ksZUFBZSxDQW9CbkM7SUFBRCxzQkFBQztDQXBCRCxBQW9CQyxDQXBCNEMsZ0JBQU0sR0FvQmxEO2tCQXBCb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSAnLi4vZnJhbWV3b3JrL3VpL0Jhc2VVSSc7XG5pbXBvcnQgR2FtZVV0aWxzIGZyb20gJy4uL2NvcmUvc2ltdWxhdG9yL3V0aWwvR2FtZVV0aWxzJztcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV3YXJkQ29tYm9JdGVtIGV4dGVuZHMgQmFzZVVJIHtcbiAgX3NwaW5lQW5pbSA9IG51bGw7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvZWZmZWN0cy9FZmZlY3RSZXdhcmRDb21ib1wiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5faW5pdENvbXBvbmVudHMoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJ3ZENvbWJvSXRlbV9pbml0Q29tcFwiKVxuICBfaW5pdENvbXBvbmVudHMoKSB7XG4gICAgdGhpcy5fc3BpbmVBbmltID0gdGhpcy5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oc3AuU2tlbGV0b24pO1xuICAgIHRoaXMuX3NwaW5lQW5pbTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJ3ZENvbWJvSXRlbV9zdGFydFBsYXlBbmlcIilcbiAgc3RhcnRQbGF5QW5pKGUsIHQpIHtcbiAgICB2YXIgbyA9IHRoaXM7XG4gICAgR2FtZVV0aWxzLnBsYXlTcGluZSh0aGlzLl9zcGluZUFuaW0sIGUsIGZhbHNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICBudWxsID09IHQgfHwgdCgpO1xuICAgICAgby5ub2RlLmRlc3Ryb3koKTtcbiAgICB9KTtcbiAgfVxufSJdfQ==
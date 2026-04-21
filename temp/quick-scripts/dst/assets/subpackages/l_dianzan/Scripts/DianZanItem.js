
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_dianzan/Scripts/DianZanItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aaa9fkK2LpEkqaWNqbj35MX', 'DianZanItem');
// subpackages/l_dianzan/Scripts/DianZanItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var DianZanItem = /** @class */ (function (_super) {
    __extends(DianZanItem, _super);
    function DianZanItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._spineAnim = null;
        return _this;
    }
    DianZanItem.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._initComponents();
    };
    DianZanItem.prototype._initComponents = function () {
        this._spineAnim = this.node.getComponentInChildren(sp.Skeleton);
        this._spineAnim;
    };
    DianZanItem.prototype.startPlayAni = function (t, e) {
        if (t === void 0) { t = "in"; }
        var n = this;
        GameUtils_1.default.playSpine(this._spineAnim, t, false, function () {
            null == e || e();
            n.node.destroy();
        });
    };
    DianZanItem.prototype.setScale = function (t) {
        this._spineAnim.node.scale = t;
    };
    DianZanItem.prefabUrl = "prefabs/effects/EffectDianZhan";
    __decorate([
        mj.traitEvent("DianZanItem_initComp")
    ], DianZanItem.prototype, "_initComponents", null);
    DianZanItem = __decorate([
        mj.class
    ], DianZanItem);
    return DianZanItem;
}(BaseUI_1.default));
exports.default = DianZanItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RpYW56YW4vU2NyaXB0cy9EaWFuWmFuSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNEVBQXVFO0FBQ3ZFLCtEQUEwRDtBQUUxRDtJQUF5QywrQkFBTTtJQUEvQztRQUFBLHFFQXNCQztRQXJCQyxnQkFBVSxHQUFHLElBQUksQ0FBQzs7SUFxQnBCLENBQUM7SUFuQkMsNEJBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxxQ0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ2xCLENBQUM7SUFDRCxrQ0FBWSxHQUFaLFVBQWEsQ0FBUSxFQUFFLENBQUU7UUFBWixrQkFBQSxFQUFBLFFBQVE7UUFDbkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsbUJBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFO1lBQzdDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDakIsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCw4QkFBUSxHQUFSLFVBQVMsQ0FBQztRQUNSLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQW5CTSxxQkFBUyxHQUFHLGdDQUFnQyxDQUFDO0lBTXBEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQztzREFJckM7SUFYa0IsV0FBVztRQUQvQixFQUFFLENBQUMsS0FBSztPQUNZLFdBQVcsQ0FzQi9CO0lBQUQsa0JBQUM7Q0F0QkQsQUFzQkMsQ0F0QndDLGdCQUFNLEdBc0I5QztrQkF0Qm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZVV0aWxzIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvdXRpbC9HYW1lVXRpbHMnO1xuaW1wb3J0IEJhc2VVSSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay91aS9CYXNlVUknO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFuWmFuSXRlbSBleHRlbmRzIEJhc2VVSSB7XG4gIF9zcGluZUFuaW0gPSBudWxsO1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL2VmZmVjdHMvRWZmZWN0RGlhblpoYW5cIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2luaXRDb21wb25lbnRzKCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJEaWFuWmFuSXRlbV9pbml0Q29tcFwiKVxuICBfaW5pdENvbXBvbmVudHMoKSB7XG4gICAgdGhpcy5fc3BpbmVBbmltID0gdGhpcy5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oc3AuU2tlbGV0b24pO1xuICAgIHRoaXMuX3NwaW5lQW5pbTtcbiAgfVxuICBzdGFydFBsYXlBbmkodCA9IFwiaW5cIiwgZT8pIHtcbiAgICB2YXIgbiA9IHRoaXM7XG4gICAgR2FtZVV0aWxzLnBsYXlTcGluZSh0aGlzLl9zcGluZUFuaW0sIHQsIGZhbHNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICBudWxsID09IGUgfHwgZSgpO1xuICAgICAgbi5ub2RlLmRlc3Ryb3koKTtcbiAgICB9KTtcbiAgfVxuICBzZXRTY2FsZSh0KSB7XG4gICAgdGhpcy5fc3BpbmVBbmltLm5vZGUuc2NhbGUgPSB0O1xuICB9XG59Il19
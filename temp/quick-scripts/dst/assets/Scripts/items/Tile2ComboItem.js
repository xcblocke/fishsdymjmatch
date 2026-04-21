
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/items/Tile2ComboItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '55783jgQ6xBapzcPYeyVXNV', 'Tile2ComboItem');
// Scripts/items/Tile2ComboItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseSpine_1 = require("../gamePlay/base/ui/BaseSpine");
var BaseUI_1 = require("../framework/ui/BaseUI");
var Tile2ComboItem = /** @class */ (function (_super) {
    __extends(Tile2ComboItem, _super);
    function Tile2ComboItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._spinCombo = null;
        _this._spinDown = null;
        _this._spinUp = null;
        _this._lblCombo = null;
        return _this;
    }
    Tile2ComboItem_1 = Tile2ComboItem;
    Tile2ComboItem.getPrefabPath = function () {
        return "prefabs/effects/Tile2EffectCombo";
    };
    Tile2ComboItem.create = function () {
        return this.createUI(this.getPrefabPath()).then(function (e) {
            return e.getComponent(Tile2ComboItem_1);
        });
    };
    Tile2ComboItem.prototype.onLoad = function () {
        var t;
        _super.prototype.onLoad.call(this);
        this._lblCombo = null === (t = cc.find("rightNode/lblCombo", this.node)) || void 0 === t ? void 0 : t.getComponent(cc.Label);
        this.initSpines();
    };
    Tile2ComboItem.prototype.initSpines = function () {
        var e = this.getSpinePath(), t = cc.find("spinCombo", this.node), o = cc.find("rightNode/spinDown", this.node), n = cc.find("rightNode/spinUp", this.node);
        t && (this._spinCombo = BaseSpine_1.default.refreshWithNode(t, e));
        o && (this._spinDown = BaseSpine_1.default.refreshWithNode(o, e));
        n && (this._spinUp = BaseSpine_1.default.refreshWithNode(n, e));
    };
    Tile2ComboItem.prototype.getSpinePath = function () {
        return "spine/combo/gameplay_combo_num";
    };
    Tile2ComboItem.prototype.setComboNum = function (e) {
        if (this._lblCombo) {
            this._lblCombo.string = this.formatComboString(e);
            this._lblCombo._forceUpdateRenderData();
        }
    };
    Tile2ComboItem.prototype.formatComboString = function (e) {
        return e.toString();
    };
    Tile2ComboItem.prototype.getLabelWidth = function () {
        return this._lblCombo ? this._lblCombo.node.width : 0;
    };
    Tile2ComboItem.prototype.adjustSpinePositions = function () {
        if (this._lblCombo) {
            var e = this._lblCombo.node.width;
            this._spinDown && (this._spinDown.node.position = cc.v3(e / 2, this._spinDown.node.y));
            this._spinUp && (this._spinUp.node.position = cc.v3(e / 2, this._spinUp.node.y));
        }
    };
    Tile2ComboItem.prototype.getAnimationConfig = function () {
        return {
            rawWidth: 137,
            lblScaleStart: 3,
            scaleDown: 0.7,
            scaleDownTime: 0.17,
            scaleUp: 1,
            scaleUpTime: 0.1,
            delay: 0.37,
            scaleEnd: 0.9,
            fadeTime: 0.17
        };
    };
    Tile2ComboItem.prototype.playComboAnimation = function (e) {
        this._spinCombo && this._spinCombo.setAnimation("in_combo", 1);
        this._spinDown && this._spinDown.setAnimation("in_down", 1);
        this._spinUp && this._spinUp.setAnimation("in_up", 1);
        if (this._lblCombo) {
            var t = this.getAnimationConfig(), o = this._lblCombo.node;
            cc.Tween.stopAllByTarget(o);
            o.scale = t.lblScaleStart;
            o.opacity = 255;
            cc.tween(o).to(t.scaleDownTime, {
                scale: t.scaleDown
            }).to(t.scaleUpTime, {
                scale: t.scaleUp
            }).delay(t.delay).to(t.fadeTime, {
                scale: t.scaleEnd,
                opacity: 0
            }).call(function () {
                null == e || e();
            }).start();
        }
        else
            null == e || e();
    };
    Tile2ComboItem.prototype.stopAllAnimations = function () {
        var e, t;
        cc.Tween.stopAllByTarget(this.node);
        this.stopAllTweensRecursively(this.node);
        var o = this.node.getComponentsInChildren(sp.Skeleton);
        try {
            for (var n = __values(o), i = n.next(); !i.done; i = n.next()) {
                var r = i.value;
                (null == r ? void 0 : r.node) && r.clearTracks();
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                i && !i.done && (t = n.return) && t.call(n);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
    };
    Tile2ComboItem.prototype.stopAllTweensRecursively = function (e) {
        var t, o;
        try {
            for (var n = __values(e.children), i = n.next(); !i.done; i = n.next()) {
                var r = i.value;
                cc.Tween.stopAllByTarget(r);
                this.stopAllTweensRecursively(r);
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
    };
    var Tile2ComboItem_1;
    Tile2ComboItem = Tile2ComboItem_1 = __decorate([
        mj.class
    ], Tile2ComboItem);
    return Tile2ComboItem;
}(BaseUI_1.default));
exports.default = Tile2ComboItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2l0ZW1zL1RpbGUyQ29tYm9JdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBc0Q7QUFDdEQsaURBQTRDO0FBRTVDO0lBQTRDLGtDQUFNO0lBQWxEO1FBQUEscUVBK0hDO1FBOUhDLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsYUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLGVBQVMsR0FBRyxJQUFJLENBQUM7O0lBMkhuQixDQUFDO3VCQS9Ib0IsY0FBYztJQUsxQiw0QkFBYSxHQUFwQjtRQUNFLE9BQU8sa0NBQWtDLENBQUM7SUFDNUMsQ0FBQztJQUNNLHFCQUFNLEdBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUN6RCxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsZ0JBQWMsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELCtCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsQ0FBQztRQUNOLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3SCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNELG1DQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsR0FBRyxJ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QUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDdEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDaEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNsQztTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO0lBQ0gsQ0FBQzs7SUE5SGtCLGNBQWM7UUFEbEMsRUFBRSxDQUFDLEtBQUs7T0FDWSxjQUFjLENBK0hsQztJQUFELHFCQUFDO0NBL0hELEFBK0hDLENBL0gyQyxnQkFBTSxHQStIakQ7a0JBL0hvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VTcGluZSBmcm9tICcuLi9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcGluZSc7XG5pbXBvcnQgQmFzZVVJIGZyb20gJy4uL2ZyYW1ld29yay91aS9CYXNlVUknO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlMkNvbWJvSXRlbSBleHRlbmRzIEJhc2VVSSB7XG4gIF9zcGluQ29tYm8gPSBudWxsO1xuICBfc3BpbkRvd24gPSBudWxsO1xuICBfc3BpblVwID0gbnVsbDtcbiAgX2xibENvbWJvID0gbnVsbDtcbiAgc3RhdGljIGdldFByZWZhYlBhdGgoKSB7XG4gICAgcmV0dXJuIFwicHJlZmFicy9lZmZlY3RzL1RpbGUyRWZmZWN0Q29tYm9cIjtcbiAgfVxuICBzdGF0aWMgY3JlYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZVVJKHRoaXMuZ2V0UHJlZmFiUGF0aCgpKS50aGVuKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZS5nZXRDb21wb25lbnQoVGlsZTJDb21ib0l0ZW0pO1xuICAgIH0pO1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgdDtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9sYmxDb21ibyA9IG51bGwgPT09ICh0ID0gY2MuZmluZChcInJpZ2h0Tm9kZS9sYmxDb21ib1wiLCB0aGlzLm5vZGUpKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgdGhpcy5pbml0U3BpbmVzKCk7XG4gIH1cbiAgaW5pdFNwaW5lcygpIHtcbiAgICB2YXIgZSA9IHRoaXMuZ2V0U3BpbmVQYXRoKCksXG4gICAgICB0ID0gY2MuZmluZChcInNwaW5Db21ib1wiLCB0aGlzLm5vZGUpLFxuICAgICAgbyA9IGNjLmZpbmQoXCJyaWdodE5vZGUvc3BpbkRvd25cIiwgdGhpcy5ub2RlKSxcbiAgICAgIG4gPSBjYy5maW5kKFwicmlnaHROb2RlL3NwaW5VcFwiLCB0aGlzLm5vZGUpO1xuICAgIHQgJiYgKHRoaXMuX3NwaW5Db21ibyA9IEJhc2VTcGluZS5yZWZyZXNoV2l0aE5vZGUodCwgZSkpO1xuICAgIG8gJiYgKHRoaXMuX3NwaW5Eb3duID0gQmFzZVNwaW5lLnJlZnJlc2hXaXRoTm9kZShvLCBlKSk7XG4gICAgbiAmJiAodGhpcy5fc3BpblVwID0gQmFzZVNwaW5lLnJlZnJlc2hXaXRoTm9kZShuLCBlKSk7XG4gIH1cbiAgZ2V0U3BpbmVQYXRoKCkge1xuICAgIHJldHVybiBcInNwaW5lL2NvbWJvL2dhbWVwbGF5X2NvbWJvX251bVwiO1xuICB9XG4gIHNldENvbWJvTnVtKGUpIHtcbiAgICBpZiAodGhpcy5fbGJsQ29tYm8pIHtcbiAgICAgIHRoaXMuX2xibENvbWJvLnN0cmluZyA9IHRoaXMuZm9ybWF0Q29tYm9TdHJpbmcoZSk7XG4gICAgICB0aGlzLl9sYmxDb21iby5fZm9yY2VVcGRhdGVSZW5kZXJEYXRhKCk7XG4gICAgfVxuICB9XG4gIGZvcm1hdENvbWJvU3RyaW5nKGUpIHtcbiAgICByZXR1cm4gZS50b1N0cmluZygpO1xuICB9XG4gIGdldExhYmVsV2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xibENvbWJvID8gdGhpcy5fbGJsQ29tYm8ubm9kZS53aWR0aCA6IDA7XG4gIH1cbiAgYWRqdXN0U3BpbmVQb3NpdGlvbnMoKSB7XG4gICAgaWYgKHRoaXMuX2xibENvbWJvKSB7XG4gICAgICB2YXIgZSA9IHRoaXMuX2xibENvbWJvLm5vZGUud2lkdGg7XG4gICAgICB0aGlzLl9zcGluRG93biAmJiAodGhpcy5fc3BpbkRvd24ubm9kZS5wb3NpdGlvbiA9IGNjLnYzKGUgLyAyLCB0aGlzLl9zcGluRG93bi5ub2RlLnkpKTtcbiAgICAgIHRoaXMuX3NwaW5VcCAmJiAodGhpcy5fc3BpblVwLm5vZGUucG9zaXRpb24gPSBjYy52MyhlIC8gMiwgdGhpcy5fc3BpblVwLm5vZGUueSkpO1xuICAgIH1cbiAgfVxuICBnZXRBbmltYXRpb25Db25maWcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJhd1dpZHRoOiAxMzcsXG4gICAgICBsYmxTY2FsZVN0YXJ0OiAzLFxuICAgICAgc2NhbGVEb3duOiAwLjcsXG4gICAgICBzY2FsZURvd25UaW1lOiAwLjE3LFxuICAgICAgc2NhbGVVcDogMSxcbiAgICAgIHNjYWxlVXBUaW1lOiAwLjEsXG4gICAgICBkZWxheTogMC4zNyxcbiAgICAgIHNjYWxlRW5kOiAwLjksXG4gICAgICBmYWRlVGltZTogMC4xN1xuICAgIH07XG4gIH1cbiAgcGxheUNvbWJvQW5pbWF0aW9uKGUpIHtcbiAgICB0aGlzLl9zcGluQ29tYm8gJiYgdGhpcy5fc3BpbkNvbWJvLnNldEFuaW1hdGlvbihcImluX2NvbWJvXCIsIDEpO1xuICAgIHRoaXMuX3NwaW5Eb3duICYmIHRoaXMuX3NwaW5Eb3duLnNldEFuaW1hdGlvbihcImluX2Rvd25cIiwgMSk7XG4gICAgdGhpcy5fc3BpblVwICYmIHRoaXMuX3NwaW5VcC5zZXRBbmltYXRpb24oXCJpbl91cFwiLCAxKTtcbiAgICBpZiAodGhpcy5fbGJsQ29tYm8pIHtcbiAgICAgIHZhciB0ID0gdGhpcy5nZXRBbmltYXRpb25Db25maWcoKSxcbiAgICAgICAgbyA9IHRoaXMuX2xibENvbWJvLm5vZGU7XG4gICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQobyk7XG4gICAgICBvLnNjYWxlID0gdC5sYmxTY2FsZVN0YXJ0O1xuICAgICAgby5vcGFjaXR5ID0gMjU1O1xuICAgICAgY2MudHdlZW4obykudG8odC5zY2FsZURvd25UaW1lLCB7XG4gICAgICAgIHNjYWxlOiB0LnNjYWxlRG93blxuICAgICAgfSkudG8odC5zY2FsZVVwVGltZSwge1xuICAgICAgICBzY2FsZTogdC5zY2FsZVVwXG4gICAgICB9KS5kZWxheSh0LmRlbGF5KS50byh0LmZhZGVUaW1lLCB7XG4gICAgICAgIHNjYWxlOiB0LnNjYWxlRW5kLFxuICAgICAgICBvcGFjaXR5OiAwXG4gICAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbnVsbCA9PSBlIHx8IGUoKTtcbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfSBlbHNlIG51bGwgPT0gZSB8fCBlKCk7XG4gIH1cbiAgc3RvcEFsbEFuaW1hdGlvbnMoKSB7XG4gICAgdmFyIGUsIHQ7XG4gICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMubm9kZSk7XG4gICAgdGhpcy5zdG9wQWxsVHdlZW5zUmVjdXJzaXZlbHkodGhpcy5ub2RlKTtcbiAgICB2YXIgbyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihzcC5Ta2VsZXRvbik7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIG4gPSBfX3ZhbHVlcyhvKSwgaSA9IG4ubmV4dCgpOyAhaS5kb25lOyBpID0gbi5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHIgPSBpLnZhbHVlO1xuICAgICAgICAobnVsbCA9PSByID8gdm9pZCAwIDogci5ub2RlKSAmJiByLmNsZWFyVHJhY2tzKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgZSA9IHtcbiAgICAgICAgZXJyb3I6IHRcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGkgJiYgIWkuZG9uZSAmJiAodCA9IG4ucmV0dXJuKSAmJiB0LmNhbGwobik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc3RvcEFsbFR3ZWVuc1JlY3Vyc2l2ZWx5KGUpIHtcbiAgICB2YXIgdCwgbztcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbiA9IF9fdmFsdWVzKGUuY2hpbGRyZW4pLCBpID0gbi5uZXh0KCk7ICFpLmRvbmU7IGkgPSBuLm5leHQoKSkge1xuICAgICAgICB2YXIgciA9IGkudmFsdWU7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChyKTtcbiAgICAgICAgdGhpcy5zdG9wQWxsVHdlZW5zUmVjdXJzaXZlbHkocik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGkgJiYgIWkuZG9uZSAmJiAobyA9IG4ucmV0dXJuKSAmJiBvLmNhbGwobik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0=
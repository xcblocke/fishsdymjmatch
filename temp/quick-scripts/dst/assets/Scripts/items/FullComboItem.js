
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/items/FullComboItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0a94559pa1HGKCf66ph9gdp', 'FullComboItem');
// Scripts/items/FullComboItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../framework/ui/BaseUI");
var CommonUtils_1 = require("../framework/utils/CommonUtils");
var GameUtils_1 = require("../core/simulator/util/GameUtils");
var FullComboItem = /** @class */ (function (_super) {
    __extends(FullComboItem, _super);
    function FullComboItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._spineAnim = null;
        _this._maskNode = null;
        return _this;
    }
    FullComboItem.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._initComponents();
    };
    FullComboItem.prototype._initComponents = function () {
        this.initSpine();
        this._maskNode = this.node.getChildByName("mask");
        this._maskNode;
    };
    FullComboItem.prototype.startPlayAni = function (e, t, o) {
        var n = this;
        if (this._maskNode) {
            var i = this._maskNode.getComponent(cc.Sprite);
            i && (i.spriteFrame = CommonUtils_1.createSingleColorSpriteFrame(new cc.Color(0, 0, 0, 0)));
            cc.tween(this._maskNode).to(this.fadeInTime(), {
                opacity: 204
            }).start();
        }
        this.playAnimation(e, this._spineAnim);
        cc.tween(this.node).delay(this.animDlyTime()).call(function () {
            null == t || t();
            n._maskNode && cc.tween(n._maskNode).to(n.fadeOutTime(), {
                opacity: 0
            }).call(function () {
                null == o || o();
                n.node.destroy();
            }).start();
        }).start();
    };
    FullComboItem.prototype.fadeInTime = function () {
        return 0.33;
    };
    FullComboItem.prototype.animDlyTime = function () {
        return 1.66;
    };
    FullComboItem.prototype.fadeOutTime = function () {
        return 0.33;
    };
    FullComboItem.prototype.playAnimation = function () {
        GameUtils_1.default.playSpine(this._spineAnim, "in", false, function () { });
    };
    FullComboItem.prototype.initSpine = function () {
        this._spineAnim = this.node.getComponentInChildren(sp.Skeleton);
        this._spineAnim;
    };
    FullComboItem.prefabUrl = "prefabs/effects/EffectFullCombo";
    __decorate([
        mj.traitEvent("FullComboItem_fadeInTime")
    ], FullComboItem.prototype, "fadeInTime", null);
    __decorate([
        mj.traitEvent("FullComboItem_animDlyTime")
    ], FullComboItem.prototype, "animDlyTime", null);
    __decorate([
        mj.traitEvent("FullComboItem_fadeOutTime")
    ], FullComboItem.prototype, "fadeOutTime", null);
    __decorate([
        mj.traitEvent("FullComboItem_playAni")
    ], FullComboItem.prototype, "playAnimation", null);
    __decorate([
        mj.traitEvent("FullComboItem_initSpine")
    ], FullComboItem.prototype, "initSpine", null);
    FullComboItem = __decorate([
        mj.class
    ], FullComboItem);
    return FullComboItem;
}(BaseUI_1.default));
exports.default = FullComboItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2l0ZW1zL0Z1bGxDb21ib0l0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUE0QztBQUM1Qyw4REFBOEU7QUFDOUUsOERBQXlEO0FBRXpEO0lBQTJDLGlDQUFNO0lBQWpEO1FBQUEscUVBc0RDO1FBckRDLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGVBQVMsR0FBRyxJQUFJLENBQUM7O0lBb0RuQixDQUFDO0lBbERDLDhCQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsdUNBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxTQUFTLENBQUM7SUFDakIsQ0FBQztJQUNELG9DQUFZLEdBQVosVUFBYSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLDBDQUE0QixDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRTtnQkFDN0MsT0FBTyxFQUFFLEdBQUc7YUFDYixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDWjtRQUNELElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2QyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2pELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDakIsQ0FBQyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFO2dCQUN2RCxPQUFPLEVBQUUsQ0FBQzthQUNYLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ04sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFDakIsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNuQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUVELGtDQUFVLEdBQVY7UUFDRSxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxtQ0FBVyxHQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsbUNBQVcsR0FBWDtRQUNFLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELHFDQUFhLEdBQWI7UUFDRSxtQkFBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsY0FBYSxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsaUNBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUNsQixDQUFDO0lBbERNLHVCQUFTLEdBQUcsaUNBQWlDLENBQUM7SUErQnJEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQzttREFHekM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsMkJBQTJCLENBQUM7b0RBRzFDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLDJCQUEyQixDQUFDO29EQUcxQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQztzREFHdEM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7a0RBSXhDO0lBckRrQixhQUFhO1FBRGpDLEVBQUUsQ0FBQyxLQUFLO09BQ1ksYUFBYSxDQXNEakM7SUFBRCxvQkFBQztDQXRERCxBQXNEQyxDQXREMEMsZ0JBQU0sR0FzRGhEO2tCQXREb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSAnLi4vZnJhbWV3b3JrL3VpL0Jhc2VVSSc7XG5pbXBvcnQgeyBjcmVhdGVTaW5nbGVDb2xvclNwcml0ZUZyYW1lIH0gZnJvbSAnLi4vZnJhbWV3b3JrL3V0aWxzL0NvbW1vblV0aWxzJztcbmltcG9ydCBHYW1lVXRpbHMgZnJvbSAnLi4vY29yZS9zaW11bGF0b3IvdXRpbC9HYW1lVXRpbHMnO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdWxsQ29tYm9JdGVtIGV4dGVuZHMgQmFzZVVJIHtcbiAgX3NwaW5lQW5pbSA9IG51bGw7XG4gIF9tYXNrTm9kZSA9IG51bGw7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvZWZmZWN0cy9FZmZlY3RGdWxsQ29tYm9cIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2luaXRDb21wb25lbnRzKCk7XG4gIH1cbiAgX2luaXRDb21wb25lbnRzKCkge1xuICAgIHRoaXMuaW5pdFNwaW5lKCk7XG4gICAgdGhpcy5fbWFza05vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtYXNrXCIpO1xuICAgIHRoaXMuX21hc2tOb2RlO1xuICB9XG4gIHN0YXJ0UGxheUFuaShlLCB0LCBvKSB7XG4gICAgdmFyIG4gPSB0aGlzO1xuICAgIGlmICh0aGlzLl9tYXNrTm9kZSkge1xuICAgICAgdmFyIGkgPSB0aGlzLl9tYXNrTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgIGkgJiYgKGkuc3ByaXRlRnJhbWUgPSBjcmVhdGVTaW5nbGVDb2xvclNwcml0ZUZyYW1lKG5ldyBjYy5Db2xvcigwLCAwLCAwLCAwKSkpO1xuICAgICAgY2MudHdlZW4odGhpcy5fbWFza05vZGUpLnRvKHRoaXMuZmFkZUluVGltZSgpLCB7XG4gICAgICAgIG9wYWNpdHk6IDIwNFxuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG4gICAgdGhpcy5wbGF5QW5pbWF0aW9uKGUsIHRoaXMuX3NwaW5lQW5pbSk7XG4gICAgY2MudHdlZW4odGhpcy5ub2RlKS5kZWxheSh0aGlzLmFuaW1EbHlUaW1lKCkpLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgbnVsbCA9PSB0IHx8IHQoKTtcbiAgICAgIG4uX21hc2tOb2RlICYmIGNjLnR3ZWVuKG4uX21hc2tOb2RlKS50byhuLmZhZGVPdXRUaW1lKCksIHtcbiAgICAgICAgb3BhY2l0eTogMFxuICAgICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG51bGwgPT0gbyB8fCBvKCk7XG4gICAgICAgIG4ubm9kZS5kZXN0cm95KCk7XG4gICAgICB9KS5zdGFydCgpO1xuICAgIH0pLnN0YXJ0KCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJGdWxsQ29tYm9JdGVtX2ZhZGVJblRpbWVcIilcbiAgZmFkZUluVGltZSgpIHtcbiAgICByZXR1cm4gMC4zMztcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkZ1bGxDb21ib0l0ZW1fYW5pbURseVRpbWVcIilcbiAgYW5pbURseVRpbWUoKSB7XG4gICAgcmV0dXJuIDEuNjY7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJGdWxsQ29tYm9JdGVtX2ZhZGVPdXRUaW1lXCIpXG4gIGZhZGVPdXRUaW1lKCkge1xuICAgIHJldHVybiAwLjMzO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRnVsbENvbWJvSXRlbV9wbGF5QW5pXCIpXG4gIHBsYXlBbmltYXRpb24oKSB7XG4gICAgR2FtZVV0aWxzLnBsYXlTcGluZSh0aGlzLl9zcGluZUFuaW0sIFwiaW5cIiwgZmFsc2UsIGZ1bmN0aW9uICgpIHt9KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkZ1bGxDb21ib0l0ZW1faW5pdFNwaW5lXCIpXG4gIGluaXRTcGluZSgpIHtcbiAgICB0aGlzLl9zcGluZUFuaW0gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihzcC5Ta2VsZXRvbik7XG4gICAgdGhpcy5fc3BpbmVBbmltO1xuICB9XG59Il19
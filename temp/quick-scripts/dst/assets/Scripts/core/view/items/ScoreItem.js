
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/view/items/ScoreItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '00de2vHqj9ATI+XmzPB8XPx', 'ScoreItem');
// Scripts/core/view/items/ScoreItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../framework/ui/BaseUI");
var GameUtils_1 = require("../../simulator/util/GameUtils");
var ScoreItem = /** @class */ (function (_super) {
    __extends(ScoreItem, _super);
    function ScoreItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._skeCombo = null;
        _this._skeShow = null;
        _this._lblNormalScore = null;
        _this._scoreDynamicAccum = null;
        _this._scaleAnimationTween = null;
        _this._isScaling = false;
        _this._isScrolling = false;
        _this._isAtMaxScale = false;
        _this._dynamicAccumComp = null;
        return _this;
    }
    ScoreItem.prototype.setDynamicAccumComp = function (e) {
        this._dynamicAccumComp = e;
    };
    ScoreItem.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._skeCombo = this.node.getChildByName("spin_combo").getComponent(sp.Skeleton);
        this._skeShow = this.node.getChildByName("spin_show").getComponent(sp.Skeleton);
        this._lblNormalScore = this.node.getChildByName("lbl_normal").getComponent(cc.Label);
        this._lblNormalScore.string = "0";
        this._skeCombo.node.active = false;
        this._skeShow.node.active = false;
        this.node.active = false;
        this.playComboAni();
    };
    ScoreItem.prototype.playComboAni = function () {
        GameUtils_1.default.playSpine(this._skeCombo, "init", true);
    };
    ScoreItem.prototype.updateScore = function (e, t, o) {
        var n = this;
        this.node.active || (this.node.active = true);
        this._skeCombo.node.active = o;
        if (e <= 0)
            this._lblNormalScore.string = t.toString();
        else if (!((Number(this._lblNormalScore.string) || 0) >= t)) {
            this._skeShow.node.active = true;
            GameUtils_1.default.playSpine(this._skeShow, o ? "in_2" : "in_1", false, function () {
                n._skeShow.node.active = false;
            });
            this.handleScoreAnimation(t);
        }
    };
    ScoreItem.prototype.getScoreBaseScale = function () {
        return 1;
    };
    ScoreItem.prototype.forceUpdateScore = function (e) {
        this.cleanup();
        var t = this.getScoreBaseScale();
        this._lblNormalScore.node.scale = t;
        this._isScaling = false;
        this._isScrolling = false;
        this._isAtMaxScale = false;
        this._lblNormalScore.string = e.toString();
        this._skeCombo.node.active = false;
        this._skeShow.node.active = false;
    };
    ScoreItem.prototype.handleScoreAnimation = function (e) {
        if (this._isScrolling)
            this.updateScrollAnimation(e);
        else {
            this.playScoreScaleUpAnimation();
            this.playScoreScrollAnimation(e);
        }
    };
    ScoreItem.prototype.playScoreScaleUpAnimation = function () {
        var e = this;
        this._isScaling = true;
        var t = this.getScoreBaseScale();
        this._lblNormalScore.node.scale = t;
        this.stopScoreScaleAnimation();
        this._scaleAnimationTween = cc.tween(this._lblNormalScore.node).to(0.2, {
            scale: 1.3 * t
        }, {
            easing: "quintOut"
        }).call(function () {
            e._scaleAnimationTween = null;
            e._isScaling = false;
            e._isAtMaxScale = true;
        }).start();
    };
    ScoreItem.prototype.playScoreScaleDownAnimation = function () {
        var e = this;
        if (this._isAtMaxScale && !this._isScaling) {
            this._isScaling = true;
            this.stopScoreScaleAnimation();
            var t = this.getScoreBaseScale();
            this._scaleAnimationTween = cc.tween(this._lblNormalScore.node).to(0.2, {
                scale: t
            }, {
                easing: "quintIn"
            }).call(function () {
                e._scaleAnimationTween = null;
                e._isScaling = false;
                e._isAtMaxScale = false;
            }).start();
        }
    };
    ScoreItem.prototype.stopScoreScaleAnimation = function () {
        if (this._scaleAnimationTween) {
            this._scaleAnimationTween.stop();
            this._scaleAnimationTween = null;
        }
    };
    ScoreItem.prototype.updateScrollAnimation = function (e) {
        this._scoreDynamicAccum && this._scoreDynamicAccum.updateTargetValue(e);
    };
    ScoreItem.prototype.playScoreScrollAnimation = function (e) {
        var t = this, o = Number(this._lblNormalScore.string) || 0;
        if (!(o >= e))
            if (this._scoreDynamicAccum)
                this._scoreDynamicAccum.updateTargetValue(e);
            else {
                this._isScrolling = true;
                this._scoreDynamicAccum = this._dynamicAccumComp.create(o, e, 0.5, function (e, o) {
                    var n = Math.floor(e);
                    t._lblNormalScore.string = n.toString();
                    t.checkScaleDownTiming(o);
                }, function (e) {
                    t._lblNormalScore.string = e.toString();
                    t._scoreDynamicAccum = null;
                    t._isScrolling = false;
                });
            }
    };
    ScoreItem.prototype.checkScaleDownTiming = function (e) {
        this._isAtMaxScale && !this._isScaling && e >= 0.6 && this.playScoreScaleDownAnimation();
    };
    ScoreItem.prototype.cleanup = function () {
        this.stopScoreScaleAnimation();
        if (this._scoreDynamicAccum) {
            this._dynamicAccumComp.removeHandler(this._scoreDynamicAccum);
            this._scoreDynamicAccum = null;
        }
        this._isScaling = false;
        this._isScrolling = false;
        this._isAtMaxScale = false;
    };
    ScoreItem.prototype.resetForRestart = function () {
        this.forceUpdateScore(0);
    };
    ScoreItem.prototype.onDestroy = function () {
        this.cleanup();
        _super.prototype.onDestroy.call(this);
    };
    __decorate([
        mj.traitEvent("ScoreItem_playComboAni")
    ], ScoreItem.prototype, "playComboAni", null);
    __decorate([
        mj.traitEvent("ScoreItem_updScore")
    ], ScoreItem.prototype, "updateScore", null);
    __decorate([
        mj.traitEvent("ScoreItem_getBaseScale")
    ], ScoreItem.prototype, "getScoreBaseScale", null);
    __decorate([
        mj.traitEvent("ScoreItem_forceUpdScore")
    ], ScoreItem.prototype, "forceUpdateScore", null);
    ScoreItem = __decorate([
        mj.class
    ], ScoreItem);
    return ScoreItem;
}(BaseUI_1.default));
exports.default = ScoreItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvdmlldy9pdGVtcy9TY29yZUl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFrRDtBQUNsRCw0REFBdUQ7QUFFdkQ7SUFBdUMsNkJBQU07SUFBN0M7UUFBQSxxRUE2SUM7UUE1SUMsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLHFCQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLHdCQUFrQixHQUFHLElBQUksQ0FBQztRQUMxQiwwQkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDNUIsZ0JBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsa0JBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsbUJBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsdUJBQWlCLEdBQUcsSUFBSSxDQUFDOztJQW9JM0IsQ0FBQztJQW5JQyx1Q0FBbUIsR0FBbkIsVUFBb0IsQ0FBQztRQUNuQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCwwQkFBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRixJQUFJLENB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QzdCLENBQUM7SUFuSEQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDO2lEQUd2QztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQztnREFZbkM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7c0RBR3ZDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDO3FEQVd4QztJQXhEa0IsU0FBUztRQUQ3QixFQUFFLENBQUMsS0FBSztPQUNZLFNBQVMsQ0E2STdCO0lBQUQsZ0JBQUM7Q0E3SUQsQUE2SUMsQ0E3SXNDLGdCQUFNLEdBNkk1QztrQkE3SW9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gJy4uLy4uLy4uL2ZyYW1ld29yay91aS9CYXNlVUknO1xuaW1wb3J0IEdhbWVVdGlscyBmcm9tICcuLi8uLi9zaW11bGF0b3IvdXRpbC9HYW1lVXRpbHMnO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZUl0ZW0gZXh0ZW5kcyBCYXNlVUkge1xuICBfc2tlQ29tYm8gPSBudWxsO1xuICBfc2tlU2hvdyA9IG51bGw7XG4gIF9sYmxOb3JtYWxTY29yZSA9IG51bGw7XG4gIF9zY29yZUR5bmFtaWNBY2N1bSA9IG51bGw7XG4gIF9zY2FsZUFuaW1hdGlvblR3ZWVuID0gbnVsbDtcbiAgX2lzU2NhbGluZyA9IGZhbHNlO1xuICBfaXNTY3JvbGxpbmcgPSBmYWxzZTtcbiAgX2lzQXRNYXhTY2FsZSA9IGZhbHNlO1xuICBfZHluYW1pY0FjY3VtQ29tcCA9IG51bGw7XG4gIHNldER5bmFtaWNBY2N1bUNvbXAoZSkge1xuICAgIHRoaXMuX2R5bmFtaWNBY2N1bUNvbXAgPSBlO1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9za2VDb21ibyA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwaW5fY29tYm9cIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICB0aGlzLl9za2VTaG93ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3Bpbl9zaG93XCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgdGhpcy5fbGJsTm9ybWFsU2NvcmUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxfbm9ybWFsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgdGhpcy5fbGJsTm9ybWFsU2NvcmUuc3RyaW5nID0gXCIwXCI7XG4gICAgdGhpcy5fc2tlQ29tYm8ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLl9za2VTaG93Lm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMucGxheUNvbWJvQW5pKCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJTY29yZUl0ZW1fcGxheUNvbWJvQW5pXCIpXG4gIHBsYXlDb21ib0FuaSgpIHtcbiAgICBHYW1lVXRpbHMucGxheVNwaW5lKHRoaXMuX3NrZUNvbWJvLCBcImluaXRcIiwgdHJ1ZSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJTY29yZUl0ZW1fdXBkU2NvcmVcIilcbiAgdXBkYXRlU2NvcmUoZSwgdCwgbykge1xuICAgIHZhciBuID0gdGhpcztcbiAgICB0aGlzLm5vZGUuYWN0aXZlIHx8ICh0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZSk7XG4gICAgdGhpcy5fc2tlQ29tYm8ubm9kZS5hY3RpdmUgPSBvO1xuICAgIGlmIChlIDw9IDApIHRoaXMuX2xibE5vcm1hbFNjb3JlLnN0cmluZyA9IHQudG9TdHJpbmcoKTtlbHNlIGlmICghKChOdW1iZXIodGhpcy5fbGJsTm9ybWFsU2NvcmUuc3RyaW5nKSB8fCAwKSA+PSB0KSkge1xuICAgICAgdGhpcy5fc2tlU2hvdy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICBHYW1lVXRpbHMucGxheVNwaW5lKHRoaXMuX3NrZVNob3csIG8gPyBcImluXzJcIiA6IFwiaW5fMVwiLCBmYWxzZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBuLl9za2VTaG93Lm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuaGFuZGxlU2NvcmVBbmltYXRpb24odCk7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiU2NvcmVJdGVtX2dldEJhc2VTY2FsZVwiKVxuICBnZXRTY29yZUJhc2VTY2FsZSgpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlNjb3JlSXRlbV9mb3JjZVVwZFNjb3JlXCIpXG4gIGZvcmNlVXBkYXRlU2NvcmUoZSkge1xuICAgIHRoaXMuY2xlYW51cCgpO1xuICAgIHZhciB0ID0gdGhpcy5nZXRTY29yZUJhc2VTY2FsZSgpO1xuICAgIHRoaXMuX2xibE5vcm1hbFNjb3JlLm5vZGUuc2NhbGUgPSB0O1xuICAgIHRoaXMuX2lzU2NhbGluZyA9IGZhbHNlO1xuICAgIHRoaXMuX2lzU2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgdGhpcy5faXNBdE1heFNjYWxlID0gZmFsc2U7XG4gICAgdGhpcy5fbGJsTm9ybWFsU2NvcmUuc3RyaW5nID0gZS50b1N0cmluZygpO1xuICAgIHRoaXMuX3NrZUNvbWJvLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5fc2tlU2hvdy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG4gIGhhbmRsZVNjb3JlQW5pbWF0aW9uKGUpIHtcbiAgICBpZiAodGhpcy5faXNTY3JvbGxpbmcpIHRoaXMudXBkYXRlU2Nyb2xsQW5pbWF0aW9uKGUpO2Vsc2Uge1xuICAgICAgdGhpcy5wbGF5U2NvcmVTY2FsZVVwQW5pbWF0aW9uKCk7XG4gICAgICB0aGlzLnBsYXlTY29yZVNjcm9sbEFuaW1hdGlvbihlKTtcbiAgICB9XG4gIH1cbiAgcGxheVNjb3JlU2NhbGVVcEFuaW1hdGlvbigpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgdGhpcy5faXNTY2FsaW5nID0gdHJ1ZTtcbiAgICB2YXIgdCA9IHRoaXMuZ2V0U2NvcmVCYXNlU2NhbGUoKTtcbiAgICB0aGlzLl9sYmxOb3JtYWxTY29yZS5ub2RlLnNjYWxlID0gdDtcbiAgICB0aGlzLnN0b3BTY29yZVNjYWxlQW5pbWF0aW9uKCk7XG4gICAgdGhpcy5fc2NhbGVBbmltYXRpb25Ud2VlbiA9IGNjLnR3ZWVuKHRoaXMuX2xibE5vcm1hbFNjb3JlLm5vZGUpLnRvKDAuMiwge1xuICAgICAgc2NhbGU6IDEuMyAqIHRcbiAgICB9LCB7XG4gICAgICBlYXNpbmc6IFwicXVpbnRPdXRcIlxuICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgZS5fc2NhbGVBbmltYXRpb25Ud2VlbiA9IG51bGw7XG4gICAgICBlLl9pc1NjYWxpbmcgPSBmYWxzZTtcbiAgICAgIGUuX2lzQXRNYXhTY2FsZSA9IHRydWU7XG4gICAgfSkuc3RhcnQoKTtcbiAgfVxuICBwbGF5U2NvcmVTY2FsZURvd25BbmltYXRpb24oKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIGlmICh0aGlzLl9pc0F0TWF4U2NhbGUgJiYgIXRoaXMuX2lzU2NhbGluZykge1xuICAgICAgdGhpcy5faXNTY2FsaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuc3RvcFNjb3JlU2NhbGVBbmltYXRpb24oKTtcbiAgICAgIHZhciB0ID0gdGhpcy5nZXRTY29yZUJhc2VTY2FsZSgpO1xuICAgICAgdGhpcy5fc2NhbGVBbmltYXRpb25Ud2VlbiA9IGNjLnR3ZWVuKHRoaXMuX2xibE5vcm1hbFNjb3JlLm5vZGUpLnRvKDAuMiwge1xuICAgICAgICBzY2FsZTogdFxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IFwicXVpbnRJblwiXG4gICAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZS5fc2NhbGVBbmltYXRpb25Ud2VlbiA9IG51bGw7XG4gICAgICAgIGUuX2lzU2NhbGluZyA9IGZhbHNlO1xuICAgICAgICBlLl9pc0F0TWF4U2NhbGUgPSBmYWxzZTtcbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuICB9XG4gIHN0b3BTY29yZVNjYWxlQW5pbWF0aW9uKCkge1xuICAgIGlmICh0aGlzLl9zY2FsZUFuaW1hdGlvblR3ZWVuKSB7XG4gICAgICB0aGlzLl9zY2FsZUFuaW1hdGlvblR3ZWVuLnN0b3AoKTtcbiAgICAgIHRoaXMuX3NjYWxlQW5pbWF0aW9uVHdlZW4gPSBudWxsO1xuICAgIH1cbiAgfVxuICB1cGRhdGVTY3JvbGxBbmltYXRpb24oZSkge1xuICAgIHRoaXMuX3Njb3JlRHluYW1pY0FjY3VtICYmIHRoaXMuX3Njb3JlRHluYW1pY0FjY3VtLnVwZGF0ZVRhcmdldFZhbHVlKGUpO1xuICB9XG4gIHBsYXlTY29yZVNjcm9sbEFuaW1hdGlvbihlKSB7XG4gICAgdmFyIHQgPSB0aGlzLFxuICAgICAgbyA9IE51bWJlcih0aGlzLl9sYmxOb3JtYWxTY29yZS5zdHJpbmcpIHx8IDA7XG4gICAgaWYgKCEobyA+PSBlKSkgaWYgKHRoaXMuX3Njb3JlRHluYW1pY0FjY3VtKSB0aGlzLl9zY29yZUR5bmFtaWNBY2N1bS51cGRhdGVUYXJnZXRWYWx1ZShlKTtlbHNlIHtcbiAgICAgIHRoaXMuX2lzU2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3Njb3JlRHluYW1pY0FjY3VtID0gdGhpcy5fZHluYW1pY0FjY3VtQ29tcC5jcmVhdGUobywgZSwgMC41LCBmdW5jdGlvbiAoZSwgbykge1xuICAgICAgICB2YXIgbiA9IE1hdGguZmxvb3IoZSk7XG4gICAgICAgIHQuX2xibE5vcm1hbFNjb3JlLnN0cmluZyA9IG4udG9TdHJpbmcoKTtcbiAgICAgICAgdC5jaGVja1NjYWxlRG93blRpbWluZyhvKTtcbiAgICAgIH0sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHQuX2xibE5vcm1hbFNjb3JlLnN0cmluZyA9IGUudG9TdHJpbmcoKTtcbiAgICAgICAgdC5fc2NvcmVEeW5hbWljQWNjdW0gPSBudWxsO1xuICAgICAgICB0Ll9pc1Njcm9sbGluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGNoZWNrU2NhbGVEb3duVGltaW5nKGUpIHtcbiAgICB0aGlzLl9pc0F0TWF4U2NhbGUgJiYgIXRoaXMuX2lzU2NhbGluZyAmJiBlID49IDAuNiAmJiB0aGlzLnBsYXlTY29yZVNjYWxlRG93bkFuaW1hdGlvbigpO1xuICB9XG4gIGNsZWFudXAoKSB7XG4gICAgdGhpcy5zdG9wU2NvcmVTY2FsZUFuaW1hdGlvbigpO1xuICAgIGlmICh0aGlzLl9zY29yZUR5bmFtaWNBY2N1bSkge1xuICAgICAgdGhpcy5fZHluYW1pY0FjY3VtQ29tcC5yZW1vdmVIYW5kbGVyKHRoaXMuX3Njb3JlRHluYW1pY0FjY3VtKTtcbiAgICAgIHRoaXMuX3Njb3JlRHluYW1pY0FjY3VtID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5faXNTY2FsaW5nID0gZmFsc2U7XG4gICAgdGhpcy5faXNTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9pc0F0TWF4U2NhbGUgPSBmYWxzZTtcbiAgfVxuICByZXNldEZvclJlc3RhcnQoKSB7XG4gICAgdGhpcy5mb3JjZVVwZGF0ZVNjb3JlKDApO1xuICB9XG4gIG9uRGVzdHJveSgpIHtcbiAgICB0aGlzLmNsZWFudXAoKTtcbiAgICBzdXBlci5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgfVxufSJdfQ==
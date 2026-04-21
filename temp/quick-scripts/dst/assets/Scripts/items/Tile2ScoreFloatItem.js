
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/items/Tile2ScoreFloatItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0fb43TU1bRK6rYj+QxAcdcu', 'Tile2ScoreFloatItem');
// Scripts/items/Tile2ScoreFloatItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../framework/ui/BaseUI");
var TweenEasing_1 = require("../base/TweenEasing");
var s = TweenEasing_1.makeCubicBezier(0.25, 1.5, 0.58, 1.15);
var c = TweenEasing_1.makeCubicBezier(0.3, 0.05, 0.78, 0.4);
var u = TweenEasing_1.makeCubicBezier(0.46, 0.18, 0.76, 0.6);
var Tile2ScoreFloatItem = /** @class */ (function (_super) {
    __extends(Tile2ScoreFloatItem, _super);
    function Tile2ScoreFloatItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._lbl = null;
        return _this;
    }
    Tile2ScoreFloatItem_1 = Tile2ScoreFloatItem;
    Tile2ScoreFloatItem.getPrefabNormal = function () {
        return "prefabs/effects/Tile2ClearScoreNormal";
    };
    Tile2ScoreFloatItem.getPrefabCombo = function () {
        return "prefabs/effects/Tile2ClearScoreCombo";
    };
    Tile2ScoreFloatItem.createNormal = function () {
        return this.createUI(this.getPrefabNormal()).then(function (e) {
            return e.getComponent(Tile2ScoreFloatItem_1);
        });
    };
    Tile2ScoreFloatItem.createCombo = function () {
        return this.createUI(this.getPrefabCombo()).then(function (e) {
            return e.getComponent(Tile2ScoreFloatItem_1);
        });
    };
    Tile2ScoreFloatItem.prototype.onLoad = function () {
        var t;
        _super.prototype.onLoad.call(this);
        this._lbl = null === (t = this.node.getChildByName("labelScore")) || void 0 === t ? void 0 : t.getComponent(cc.Label);
    };
    Tile2ScoreFloatItem.prototype.setScore = function (e) {
        this._lbl && (this._lbl.string = this.formatScore(e));
    };
    Tile2ScoreFloatItem.prototype.formatScore = function (e) {
        return "+" + e;
    };
    Tile2ScoreFloatItem.prototype.playFlyToHolderAnimation = function (e, t, o, n) {
        var i, r = this, a = 1 === (i = t) ? 0.067 : 2 === i ? 0.167 : 3 === i ? 0.267 : 4 === i ? 0.4 : 0.5, l = 1 === t, p = l ? 0.6 : 1, f = l ? 0.36 : 0.6;
        this.node.scale = 0;
        this.node.opacity = 255;
        cc.tween(this.node).to(0.2, {
            scale: p
        }, {
            easing: s
        }).delay(0.167).parallel(cc.tween(this.node).to(a, {
            position: e
        }, {
            easing: c
        }), cc.tween(this.node).to(a, {
            scale: f
        }, {
            easing: u
        })).call(function () {
            null == o || o();
            null == n || n();
            r.node.destroy();
        }).start();
    };
    var Tile2ScoreFloatItem_1;
    Tile2ScoreFloatItem = Tile2ScoreFloatItem_1 = __decorate([
        mj.class
    ], Tile2ScoreFloatItem);
    return Tile2ScoreFloatItem;
}(BaseUI_1.default));
exports.default = Tile2ScoreFloatItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2l0ZW1zL1RpbGUyU2NvcmVGbG9hdEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUE0QztBQUM1QyxtREFBc0Q7QUFDdEQsSUFBSSxDQUFDLEdBQUcsNkJBQWUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMvQyxJQUFJLENBQUMsR0FBRyw2QkFBZSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzlDLElBQUksQ0FBQyxHQUFHLDZCQUFlLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFFL0M7SUFBaUQsdUNBQU07SUFBdkQ7UUFBQSxxRUF3REM7UUF2REMsVUFBSSxHQUFHLElBQUksQ0FBQzs7SUF1RGQsQ0FBQzs0QkF4RG9CLG1CQUFtQjtJQUUvQixtQ0FBZSxHQUF0QjtRQUNFLE9BQU8sdUNBQXVDLENBQUM7SUFDakQsQ0FBQztJQUNNLGtDQUFjLEdBQXJCO1FBQ0UsT0FBTyxzQ0FBc0MsQ0FBQztJQUNoRCxDQUFDO0lBQ00sZ0NBQVksR0FBbkI7UUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUMzRCxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMscUJBQW1CLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDTSwrQkFBVyxHQUFsQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQzFELE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxxQkFBbUIsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELG9DQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsQ0FBQztRQUNOLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4SCxDQUFDO0lBQ0Qsc0NBQVEsR0FBUixVQUFTLENBQUM7UUFDUixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFDRCx5Q0FBVyxHQUFYLFVBQVksQ0FBQztRQUNYLE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBQ0Qsc0RBQXdCLEdBQXhCLFVBQXlCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLElBQUksRUFDUixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFDbkYsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQ1gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ2YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUN4QixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFO1lBQzFCLEtBQUssRUFBRSxDQUFDO1NBQ1QsRUFBRTtZQUNELE1BQU0sRUFBRSxDQUFDO1NBQ1YsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUNqRCxRQUFRLEVBQUUsQ0FBQztTQUNaLEVBQUU7WUFDRCxNQUFNLEVBQUUsQ0FBQztTQUNWLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQzVCLEtBQUssRUFBRSxDQUFDO1NBQ1QsRUFBRTtZQUNELE1BQU0sRUFBRSxDQUFDO1NBQ1YsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ1AsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNqQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDYixDQUFDOztJQXZEa0IsbUJBQW1CO1FBRHZDLEVBQUUsQ0FBQyxLQUFLO09BQ1ksbUJBQW1CLENBd0R2QztJQUFELDBCQUFDO0NBeERELEFBd0RDLENBeERnRCxnQkFBTSxHQXdEdEQ7a0JBeERvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gJy4uL2ZyYW1ld29yay91aS9CYXNlVUknO1xuaW1wb3J0IHsgbWFrZUN1YmljQmV6aWVyIH0gZnJvbSAnLi4vYmFzZS9Ud2VlbkVhc2luZyc7XG52YXIgcyA9IG1ha2VDdWJpY0JlemllcigwLjI1LCAxLjUsIDAuNTgsIDEuMTUpO1xudmFyIGMgPSBtYWtlQ3ViaWNCZXppZXIoMC4zLCAwLjA1LCAwLjc4LCAwLjQpO1xudmFyIHUgPSBtYWtlQ3ViaWNCZXppZXIoMC40NiwgMC4xOCwgMC43NiwgMC42KTtcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZTJTY29yZUZsb2F0SXRlbSBleHRlbmRzIEJhc2VVSSB7XG4gIF9sYmwgPSBudWxsO1xuICBzdGF0aWMgZ2V0UHJlZmFiTm9ybWFsKCkge1xuICAgIHJldHVybiBcInByZWZhYnMvZWZmZWN0cy9UaWxlMkNsZWFyU2NvcmVOb3JtYWxcIjtcbiAgfVxuICBzdGF0aWMgZ2V0UHJlZmFiQ29tYm8oKSB7XG4gICAgcmV0dXJuIFwicHJlZmFicy9lZmZlY3RzL1RpbGUyQ2xlYXJTY29yZUNvbWJvXCI7XG4gIH1cbiAgc3RhdGljIGNyZWF0ZU5vcm1hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVVSSh0aGlzLmdldFByZWZhYk5vcm1hbCgpKS50aGVuKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZS5nZXRDb21wb25lbnQoVGlsZTJTY29yZUZsb2F0SXRlbSk7XG4gICAgfSk7XG4gIH1cbiAgc3RhdGljIGNyZWF0ZUNvbWJvKCkge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZVVJKHRoaXMuZ2V0UHJlZmFiQ29tYm8oKSkudGhlbihmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGUuZ2V0Q29tcG9uZW50KFRpbGUyU2NvcmVGbG9hdEl0ZW0pO1xuICAgIH0pO1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgdDtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9sYmwgPSBudWxsID09PSAodCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImxhYmVsU2NvcmVcIikpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgfVxuICBzZXRTY29yZShlKSB7XG4gICAgdGhpcy5fbGJsICYmICh0aGlzLl9sYmwuc3RyaW5nID0gdGhpcy5mb3JtYXRTY29yZShlKSk7XG4gIH1cbiAgZm9ybWF0U2NvcmUoZSkge1xuICAgIHJldHVybiBcIitcIiArIGU7XG4gIH1cbiAgcGxheUZseVRvSG9sZGVyQW5pbWF0aW9uKGUsIHQsIG8sIG4pIHtcbiAgICB2YXIgaSxcbiAgICAgIHIgPSB0aGlzLFxuICAgICAgYSA9IDEgPT09IChpID0gdCkgPyAwLjA2NyA6IDIgPT09IGkgPyAwLjE2NyA6IDMgPT09IGkgPyAwLjI2NyA6IDQgPT09IGkgPyAwLjQgOiAwLjUsXG4gICAgICBsID0gMSA9PT0gdCxcbiAgICAgIHAgPSBsID8gMC42IDogMSxcbiAgICAgIGYgPSBsID8gMC4zNiA6IDAuNjtcbiAgICB0aGlzLm5vZGUuc2NhbGUgPSAwO1xuICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMC4yLCB7XG4gICAgICBzY2FsZTogcFxuICAgIH0sIHtcbiAgICAgIGVhc2luZzogc1xuICAgIH0pLmRlbGF5KDAuMTY3KS5wYXJhbGxlbChjYy50d2Vlbih0aGlzLm5vZGUpLnRvKGEsIHtcbiAgICAgIHBvc2l0aW9uOiBlXG4gICAgfSwge1xuICAgICAgZWFzaW5nOiBjXG4gICAgfSksIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oYSwge1xuICAgICAgc2NhbGU6IGZcbiAgICB9LCB7XG4gICAgICBlYXNpbmc6IHVcbiAgICB9KSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICBudWxsID09IG8gfHwgbygpO1xuICAgICAgbnVsbCA9PSBuIHx8IG4oKTtcbiAgICAgIHIubm9kZS5kZXN0cm95KCk7XG4gICAgfSkuc3RhcnQoKTtcbiAgfVxufSJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_homeBtnAdjust/Scripts/HomeBtnAdjustTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'df4b9aef55BbYUn422vfJ3+', 'HomeBtnAdjustTrait');
// subpackages/l_homeBtnAdjust/Scripts/HomeBtnAdjustTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var HomeBtnAdjustTrait = /** @class */ (function (_super) {
    __extends(HomeBtnAdjustTrait, _super);
    function HomeBtnAdjustTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._scale = 1.2;
        _this._positions = [20, 20, 0, 20, -20];
        _this._widgetValues = [210, 53];
        return _this;
    }
    Object.defineProperty(HomeBtnAdjustTrait.prototype, "scale", {
        get: function () {
            return null != this._traitData.scale ? this._traitData.scale : this._scale;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HomeBtnAdjustTrait.prototype, "positions", {
        get: function () {
            return null != this._traitData.positions ? this._traitData.positions : this._positions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HomeBtnAdjustTrait.prototype, "widgetValues", {
        get: function () {
            return null != this._traitData.widgetValues ? this._traitData.widgetValues : this._widgetValues;
        },
        enumerable: false,
        configurable: true
    });
    HomeBtnAdjustTrait.prototype.onRankBtn_onLoad = function (t, e) {
        e();
        var o = t.ins;
        o.node.scale = this.scale;
        null != this.positions[2] && (o.node.y += this.positions[2]);
        null != this.widgetValues[4] && (o.node.getComponent(cc.Widget).right = this.widgetValues[4]);
    };
    HomeBtnAdjustTrait.prototype.onHDailyBtn_onLoad = function (t, e) {
        e();
        var o = t.ins;
        o.node.scale = this.scale;
        null != this.positions[0] && (o.node.y += this.positions[0]);
        null != this.widgetValues[2] && (o.node.getComponent(cc.Widget).left = this.widgetValues[2]);
    };
    HomeBtnAdjustTrait.prototype.onTaskTt_onLoad = function (t, e) {
        e();
        var o = t.ins;
        o.node.scale = this.scale;
        null != this.positions[1] && (o.node.y += this.positions[1]);
        null != this.widgetValues[3] && (o.node.getComponent(cc.Widget).right = this.widgetValues[3]);
    };
    HomeBtnAdjustTrait.prototype.onHallNmlBtn_onLoad = function (t, e) {
        e();
        var o = t.ins;
        o.node.scale = this.scale;
        null != this.positions[3] && (o.node.y += this.positions[3]);
    };
    HomeBtnAdjustTrait.prototype.onTravelBtn_onLoad = function (t, e) {
        e();
        var o = t.ins;
        o.node.scale = this.scale;
        null != this.positions[4] && (o.node.y += this.positions[4]);
    };
    HomeBtnAdjustTrait.prototype.onHallSetBtn_onLoad = function (t, e) {
        e();
        var o = t.ins;
        o.node.scale = this.scale;
        null != this.positions[5] && (o.node.y += this.positions[5]);
        null != this.widgetValues[1] && (o.node.getComponent(cc.Widget).right = this.widgetValues[1]);
    };
    HomeBtnAdjustTrait.prototype.onHallBadgeBtn_onLoad = function (t, e) {
        e();
        var o = t.ins;
        o.node.scale = this.scale;
        null != this.positions[6] && (o.node.y += this.positions[6]);
        null != this.widgetValues[0] && (o.node.getComponent(cc.Widget).right = this.widgetValues[0]);
    };
    HomeBtnAdjustTrait.traitKey = "HomeBtnAdjust";
    HomeBtnAdjustTrait = __decorate([
        mj.trait,
        mj.class("HomeBtnAdjustTrait")
    ], HomeBtnAdjustTrait);
    return HomeBtnAdjustTrait;
}(Trait_1.default));
exports.default = HomeBtnAdjustTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2hvbWVCdG5BZGp1c3QvU2NyaXB0cy9Ib21lQnRuQWRqdXN0VHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUczRDtJQUFnRCxzQ0FBSztJQUFyRDtRQUFBLHFFQTZEQztRQTVEQyxZQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2IsZ0JBQVUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLG1CQUFhLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7O0lBMEQ1QixDQUFDO0lBeERDLHNCQUFJLHFDQUFLO2FBQVQ7WUFDRSxPQUFPLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDN0UsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSx5Q0FBUzthQUFiO1lBQ0UsT0FBTyxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3pGLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksNENBQVk7YUFBaEI7WUFDRSxPQUFPLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDbEcsQ0FBQzs7O09BQUE7SUFDRCw2Q0FBZ0IsR0FBaEIsVUFBaUIsQ0FBQyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxFQUFFLENBQUM7UUFDSixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2QsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMxQixJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RCxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7SUFDRCwrQ0FBa0IsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsQ0FBQyxFQUFFLENBQUM7UUFDSixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2QsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMxQixJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RCxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9GLENBQUM7SUFDRCw0Q0FBZSxHQUFmLFVBQWdCLENBQUMsRUFBRSxDQUFDO1FBQ2xCLENBQUMsRUFBRSxDQUFDO1FBQ0osSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNkLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDMUIsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRyxDQUFDO0lBQ0QsZ0RBQW1CLEdBQW5CLFVBQW9CLENBQUMsRUFBRSxDQUFDO1FBQ3RCLENBQUMsRUFBRSxDQUFDO1FBQ0osSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNkLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDMUIsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUNELCtDQUFrQixHQUFsQixVQUFtQixDQUFDLEVBQUUsQ0FBQztRQUNyQixDQUFDLEVBQUUsQ0FBQztRQUNKLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDZCxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzFCLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFDRCxnREFBbUIsR0FBbkIsVUFBb0IsQ0FBQyxFQUFFLENBQUM7UUFDdEIsQ0FBQyxFQUFFLENBQUM7UUFDSixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2QsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMxQixJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RCxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7SUFDRCxrREFBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxFQUFFLENBQUM7UUFDSixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2QsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMxQixJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RCxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7SUF4RE0sMkJBQVEsR0FBRyxlQUFlLENBQUM7SUFKZixrQkFBa0I7UUFGdEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDO09BQ1Ysa0JBQWtCLENBNkR0QztJQUFELHlCQUFDO0NBN0RELEFBNkRDLENBN0QrQyxlQUFLLEdBNkRwRDtrQkE3RG9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkhvbWVCdG5BZGp1c3RUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZUJ0bkFkanVzdFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfc2NhbGUgPSAxLjI7XG4gIF9wb3NpdGlvbnMgPSBbMjAsIDIwLCAwLCAyMCwgLTIwXTtcbiAgX3dpZGdldFZhbHVlcyA9IFsyMTAsIDUzXTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJIb21lQnRuQWRqdXN0XCI7XG4gIGdldCBzY2FsZSgpIHtcbiAgICByZXR1cm4gbnVsbCAhPSB0aGlzLl90cmFpdERhdGEuc2NhbGUgPyB0aGlzLl90cmFpdERhdGEuc2NhbGUgOiB0aGlzLl9zY2FsZTtcbiAgfVxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiBudWxsICE9IHRoaXMuX3RyYWl0RGF0YS5wb3NpdGlvbnMgPyB0aGlzLl90cmFpdERhdGEucG9zaXRpb25zIDogdGhpcy5fcG9zaXRpb25zO1xuICB9XG4gIGdldCB3aWRnZXRWYWx1ZXMoKSB7XG4gICAgcmV0dXJuIG51bGwgIT0gdGhpcy5fdHJhaXREYXRhLndpZGdldFZhbHVlcyA/IHRoaXMuX3RyYWl0RGF0YS53aWRnZXRWYWx1ZXMgOiB0aGlzLl93aWRnZXRWYWx1ZXM7XG4gIH1cbiAgb25SYW5rQnRuX29uTG9hZCh0LCBlKSB7XG4gICAgZSgpO1xuICAgIHZhciBvID0gdC5pbnM7XG4gICAgby5ub2RlLnNjYWxlID0gdGhpcy5zY2FsZTtcbiAgICBudWxsICE9IHRoaXMucG9zaXRpb25zWzJdICYmIChvLm5vZGUueSArPSB0aGlzLnBvc2l0aW9uc1syXSk7XG4gICAgbnVsbCAhPSB0aGlzLndpZGdldFZhbHVlc1s0XSAmJiAoby5ub2RlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnJpZ2h0ID0gdGhpcy53aWRnZXRWYWx1ZXNbNF0pO1xuICB9XG4gIG9uSERhaWx5QnRuX29uTG9hZCh0LCBlKSB7XG4gICAgZSgpO1xuICAgIHZhciBvID0gdC5pbnM7XG4gICAgby5ub2RlLnNjYWxlID0gdGhpcy5zY2FsZTtcbiAgICBudWxsICE9IHRoaXMucG9zaXRpb25zWzBdICYmIChvLm5vZGUueSArPSB0aGlzLnBvc2l0aW9uc1swXSk7XG4gICAgbnVsbCAhPSB0aGlzLndpZGdldFZhbHVlc1syXSAmJiAoby5ub2RlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmxlZnQgPSB0aGlzLndpZGdldFZhbHVlc1syXSk7XG4gIH1cbiAgb25UYXNrVHRfb25Mb2FkKHQsIGUpIHtcbiAgICBlKCk7XG4gICAgdmFyIG8gPSB0LmlucztcbiAgICBvLm5vZGUuc2NhbGUgPSB0aGlzLnNjYWxlO1xuICAgIG51bGwgIT0gdGhpcy5wb3NpdGlvbnNbMV0gJiYgKG8ubm9kZS55ICs9IHRoaXMucG9zaXRpb25zWzFdKTtcbiAgICBudWxsICE9IHRoaXMud2lkZ2V0VmFsdWVzWzNdICYmIChvLm5vZGUuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkucmlnaHQgPSB0aGlzLndpZGdldFZhbHVlc1szXSk7XG4gIH1cbiAgb25IYWxsTm1sQnRuX29uTG9hZCh0LCBlKSB7XG4gICAgZSgpO1xuICAgIHZhciBvID0gdC5pbnM7XG4gICAgby5ub2RlLnNjYWxlID0gdGhpcy5zY2FsZTtcbiAgICBudWxsICE9IHRoaXMucG9zaXRpb25zWzNdICYmIChvLm5vZGUueSArPSB0aGlzLnBvc2l0aW9uc1szXSk7XG4gIH1cbiAgb25UcmF2ZWxCdG5fb25Mb2FkKHQsIGUpIHtcbiAgICBlKCk7XG4gICAgdmFyIG8gPSB0LmlucztcbiAgICBvLm5vZGUuc2NhbGUgPSB0aGlzLnNjYWxlO1xuICAgIG51bGwgIT0gdGhpcy5wb3NpdGlvbnNbNF0gJiYgKG8ubm9kZS55ICs9IHRoaXMucG9zaXRpb25zWzRdKTtcbiAgfVxuICBvbkhhbGxTZXRCdG5fb25Mb2FkKHQsIGUpIHtcbiAgICBlKCk7XG4gICAgdmFyIG8gPSB0LmlucztcbiAgICBvLm5vZGUuc2NhbGUgPSB0aGlzLnNjYWxlO1xuICAgIG51bGwgIT0gdGhpcy5wb3NpdGlvbnNbNV0gJiYgKG8ubm9kZS55ICs9IHRoaXMucG9zaXRpb25zWzVdKTtcbiAgICBudWxsICE9IHRoaXMud2lkZ2V0VmFsdWVzWzFdICYmIChvLm5vZGUuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkucmlnaHQgPSB0aGlzLndpZGdldFZhbHVlc1sxXSk7XG4gIH1cbiAgb25IYWxsQmFkZ2VCdG5fb25Mb2FkKHQsIGUpIHtcbiAgICBlKCk7XG4gICAgdmFyIG8gPSB0LmlucztcbiAgICBvLm5vZGUuc2NhbGUgPSB0aGlzLnNjYWxlO1xuICAgIG51bGwgIT0gdGhpcy5wb3NpdGlvbnNbNl0gJiYgKG8ubm9kZS55ICs9IHRoaXMucG9zaXRpb25zWzZdKTtcbiAgICBudWxsICE9IHRoaXMud2lkZ2V0VmFsdWVzWzBdICYmIChvLm5vZGUuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkucmlnaHQgPSB0aGlzLndpZGdldFZhbHVlc1swXSk7XG4gIH1cbn0iXX0=
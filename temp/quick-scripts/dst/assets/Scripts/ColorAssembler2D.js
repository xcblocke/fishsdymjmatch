
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ColorAssembler2D.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c9f6af5intNl6QHSe43NvJk', 'ColorAssembler2D');
// Scripts/ColorAssembler2D.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, requireComponent = _a.requireComponent, menu = _a.menu;
var ColorAssembler2D = /** @class */ (function (_super) {
    __extends(ColorAssembler2D, _super);
    function ColorAssembler2D() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._colors = [];
        _this._tempColor = new cc.Color();
        return _this;
    }
    Object.defineProperty(ColorAssembler2D.prototype, "colors", {
        get: function () {
            return this._colors;
        },
        set: function (e) {
            this._colors = e;
            this._updateColors();
        },
        enumerable: false,
        configurable: true
    });
    ColorAssembler2D.prototype.onLoad = function () {
        var e = this;
        this._updateColors();
        var t = this.getComponent(cc.RenderComponent), o = t._updateColor;
        t._updateColor = function () {
            o && o.call(t);
            e._updateColors();
        };
    };
    ColorAssembler2D.prototype.onEnable = function () { };
    ColorAssembler2D.prototype.onDisable = function () {
        this.node._renderFlag |= cc.RenderFlow.FLAG_COLOR;
    };
    ColorAssembler2D.prototype.update = function () { };
    ColorAssembler2D.prototype.lateUpdate = function () {
        this._updateColors();
    };
    ColorAssembler2D.prototype._updateColors = function () {
        var e = this.getComponent(cc.RenderComponent);
        if (e) {
            var t = e._assembler;
            if (t instanceof cc.Assembler2D) {
                var o = t._renderData.uintVDatas[0];
                if (o)
                    for (var n = this.node.color, i = this.node.opacity, r = t.floatsPerVert, a = 0, l = [2, 3, 0, 1], s = t.colorOffset, c = o.length; s < c; s += r) {
                        var u = this.colors[l[a++]];
                        if (u) {
                            cc.Color.set(this._tempColor, u.r, u.g, u.b, u.a * i / 255);
                        }
                        else {
                            cc.Color.set(this._tempColor, n.r, n.g, n.b, n.a * i / 255);
                        }
                        o[s] = this._tempColor._val;
                    }
            }
        }
    };
    __decorate([
        property
    ], ColorAssembler2D.prototype, "_colors", void 0);
    __decorate([
        property({
            type: [cc.Color]
        })
    ], ColorAssembler2D.prototype, "colors", null);
    ColorAssembler2D = __decorate([
        ccclass,
        executeInEditMode,
        requireComponent(cc.RenderComponent),
        menu("i18n:MAIN_MENU.component.renderers/ColorAssembler2D")
    ], ColorAssembler2D);
    return ColorAssembler2D;
}(cc.Component));
exports.default = ColorAssembler2D;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0NvbG9yQXNzZW1ibGVyMkQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FNRixFQUFFLENBQUMsVUFBVSxFQUxmLE9BQU8sYUFBQSxFQUNQLFFBQVEsY0FBQSxFQUNSLGlCQUFpQix1QkFBQSxFQUNqQixnQkFBZ0Isc0JBQUEsRUFDaEIsSUFBSSxVQUNXLENBQUM7QUFLbEI7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUFrREM7UUFoREMsYUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGdCQUFVLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7O0lBK0M5QixDQUFDO0lBM0NDLHNCQUFJLG9DQUFNO2FBQVY7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQzthQUNELFVBQVcsQ0FBQztZQUNWLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDOzs7T0FKQTtJQUtELGlDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLEVBQzNDLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxZQUFZLEdBQUc7WUFDZixDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0QsbUNBQVEsR0FBUixjQUFZLENBQUM7SUFDYixvQ0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7SUFDcEQsQ0FBQztJQUNELGlDQUFNLEdBQU4sY0FBVSxDQUFDO0lBQ1gscUNBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0Qsd0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztZQUNyQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsV0FBVyxFQUFFO2dCQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxDQUFDO29CQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUN4SixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQzVCLElBQUksQ0FBQyxFQUFFOzRCQUNMLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7eUJBQzdEOzZCQUFNOzRCQUNMLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7eUJBQzdEO3dCQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztxQkFDN0I7YUFDRjtTQUNGO0lBQ0gsQ0FBQztJQS9DRDtRQURDLFFBQVE7cURBQ0k7SUFLYjtRQUhDLFFBQVEsQ0FBQztZQUNSLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7U0FDakIsQ0FBQztrREFHRDtJQVRrQixnQkFBZ0I7UUFKcEMsT0FBTztRQUNQLGlCQUFpQjtRQUNqQixnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxxREFBcUQsQ0FBQztPQUN2QyxnQkFBZ0IsQ0FrRHBDO0lBQUQsdUJBQUM7Q0FsREQsQUFrREMsQ0FsRDZDLEVBQUUsQ0FBQyxTQUFTLEdBa0R6RDtrQkFsRG9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtcbiAgY2NjbGFzcyxcbiAgcHJvcGVydHksXG4gIGV4ZWN1dGVJbkVkaXRNb2RlLFxuICByZXF1aXJlQ29tcG9uZW50LFxuICBtZW51XG59ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5AZXhlY3V0ZUluRWRpdE1vZGVcbkByZXF1aXJlQ29tcG9uZW50KGNjLlJlbmRlckNvbXBvbmVudClcbkBtZW51KFwiaTE4bjpNQUlOX01FTlUuY29tcG9uZW50LnJlbmRlcmVycy9Db2xvckFzc2VtYmxlcjJEXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvckFzc2VtYmxlcjJEIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgQHByb3BlcnR5XG4gIF9jb2xvcnMgPSBbXTtcbiAgX3RlbXBDb2xvciA9IG5ldyBjYy5Db2xvcigpO1xuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IFtjYy5Db2xvcl1cbiAgfSlcbiAgZ2V0IGNvbG9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3JzO1xuICB9XG4gIHNldCBjb2xvcnMoZSkge1xuICAgIHRoaXMuX2NvbG9ycyA9IGU7XG4gICAgdGhpcy5fdXBkYXRlQ29sb3JzKCk7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICB0aGlzLl91cGRhdGVDb2xvcnMoKTtcbiAgICB2YXIgdCA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJlbmRlckNvbXBvbmVudCksXG4gICAgICBvID0gdC5fdXBkYXRlQ29sb3I7XG4gICAgdC5fdXBkYXRlQ29sb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBvICYmIG8uY2FsbCh0KTtcbiAgICAgIGUuX3VwZGF0ZUNvbG9ycygpO1xuICAgIH07XG4gIH1cbiAgb25FbmFibGUoKSB7fVxuICBvbkRpc2FibGUoKSB7XG4gICAgdGhpcy5ub2RlLl9yZW5kZXJGbGFnIHw9IGNjLlJlbmRlckZsb3cuRkxBR19DT0xPUjtcbiAgfVxuICB1cGRhdGUoKSB7fVxuICBsYXRlVXBkYXRlKCkge1xuICAgIHRoaXMuX3VwZGF0ZUNvbG9ycygpO1xuICB9XG4gIF91cGRhdGVDb2xvcnMoKSB7XG4gICAgdmFyIGUgPSB0aGlzLmdldENvbXBvbmVudChjYy5SZW5kZXJDb21wb25lbnQpO1xuICAgIGlmIChlKSB7XG4gICAgICB2YXIgdCA9IGUuX2Fzc2VtYmxlcjtcbiAgICAgIGlmICh0IGluc3RhbmNlb2YgY2MuQXNzZW1ibGVyMkQpIHtcbiAgICAgICAgdmFyIG8gPSB0Ll9yZW5kZXJEYXRhLnVpbnRWRGF0YXNbMF07XG4gICAgICAgIGlmIChvKSBmb3IgKHZhciBuID0gdGhpcy5ub2RlLmNvbG9yLCBpID0gdGhpcy5ub2RlLm9wYWNpdHksIHIgPSB0LmZsb2F0c1BlclZlcnQsIGEgPSAwLCBsID0gWzIsIDMsIDAsIDFdLCBzID0gdC5jb2xvck9mZnNldCwgYyA9IG8ubGVuZ3RoOyBzIDwgYzsgcyArPSByKSB7XG4gICAgICAgICAgdmFyIHUgPSB0aGlzLmNvbG9yc1tsW2ErK11dO1xuICAgICAgICAgIGlmICh1KSB7XG4gICAgICAgICAgICBjYy5Db2xvci5zZXQodGhpcy5fdGVtcENvbG9yLCB1LnIsIHUuZywgdS5iLCB1LmEgKiBpIC8gMjU1KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MuQ29sb3Iuc2V0KHRoaXMuX3RlbXBDb2xvciwgbi5yLCBuLmcsIG4uYiwgbi5hICogaSAvIDI1NSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG9bc10gPSB0aGlzLl90ZW1wQ29sb3IuX3ZhbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSJdfQ==
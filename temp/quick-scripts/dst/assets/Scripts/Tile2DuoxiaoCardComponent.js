
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tile2DuoxiaoCardComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd05f9uUIEVCXpy3XT0CeXu/', 'Tile2DuoxiaoCardComponent');
// Scripts/Tile2DuoxiaoCardComponent.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2DuoxiaoCardComponent = void 0;
var BaseLabel_1 = require("./gamePlay/base/ui/BaseLabel");
var BaseSpine_1 = require("./gamePlay/base/ui/BaseSpine");
var BaseTileNode_1 = require("./BaseTileNode");
var TileNodeComponent_1 = require("./TileNodeComponent");
var Tile2DuoxiaoCardComponent = /** @class */ (function (_super) {
    __extends(Tile2DuoxiaoCardComponent, _super);
    function Tile2DuoxiaoCardComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2DuoxiaoCardComponent.prototype.onRefreshNode = function () {
        this._flagNode || (this._flagNode = this._createFlag());
        this._updateFlag();
    };
    Tile2DuoxiaoCardComponent.prototype.onUnbind = function () {
        this._flagNode && cc.isValid(this._flagNode) && this._flagNode.destroy();
        this._flagNode = null;
    };
    Tile2DuoxiaoCardComponent.prototype._createFlag = function () {
        var e = this._host.tileNode, t = e.getChildByName("DuoxiaoCardFlagNode");
        if (t)
            return t;
        var o = new cc.Node("DuoxiaoCardFlagNode");
        e.addChild(o);
        o.scale = 1 * this._host.info.tileObject.layoutScale;
        o.zIndex = BaseTileNode_1.TileNodeZIndexMap[BaseTileNode_1.ETileNodeNames.imgCard] + 1;
        return o;
    };
    Tile2DuoxiaoCardComponent.prototype._updateFlag = function () {
        var e = this;
        if (this._flagNode) {
            var t = BaseSpine_1.default.refreshWithNode(this._flagNode, "spine/duoxiao/idle/gameplay_hintCombo", "mainRes");
            t.setAnimation("init", -1, null, false);
            t.attachNode("hook_number", function () {
                var t = e._host.info.tileObject.getDuoxiaoCount().toString(), o = BaseLabel_1.default.create(t, "font/SPARTAN-BOLD", "mainRes", 36);
                o.node.name = "DuoxiaoCardCountNode";
                o.setColor(new cc.Color().fromHEX("#013713"));
                o.setAlign(cc.Label.HorizontalAlign.CENTER, cc.Label.VerticalAlign.CENTER);
                return o.node;
            });
        }
    };
    return Tile2DuoxiaoCardComponent;
}(TileNodeComponent_1.TileNodeComponent));
exports.Tile2DuoxiaoCardComponent = Tile2DuoxiaoCardComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RpbGUyRHVveGlhb0NhcmRDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwREFBcUQ7QUFDckQsMERBQXFEO0FBQ3JELCtDQUFtRTtBQUNuRSx5REFBd0Q7QUFDeEQ7SUFBK0MsNkNBQWlCO0lBQWhFOztJQWtDQSxDQUFDO0lBakNDLGlEQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNELDRDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDekUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUNELCtDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFDekIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2QsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUNyRCxDQUFDLENBQUMsTUFBTSxHQUFHLGdDQUFpQixDQUFDLDZCQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNELCtDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSx1Q0FBdUMsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUN0RyxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDeEMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFDMUQsQ0FBQyxHQUFHLG1CQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxtQkFBbUIsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQzlELENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLHNCQUFzQixDQUFDO2dCQUNyQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDM0UsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBQ0gsZ0NBQUM7QUFBRCxDQWxDQSxBQWtDQyxDQWxDOEMscUNBQWlCLEdBa0MvRDtBQWxDWSw4REFBeUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZUxhYmVsIGZyb20gJy4vZ2FtZVBsYXkvYmFzZS91aS9CYXNlTGFiZWwnO1xuaW1wb3J0IEJhc2VTcGluZSBmcm9tICcuL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwaW5lJztcbmltcG9ydCB7IFRpbGVOb2RlWkluZGV4TWFwLCBFVGlsZU5vZGVOYW1lcyB9IGZyb20gJy4vQmFzZVRpbGVOb2RlJztcbmltcG9ydCB7IFRpbGVOb2RlQ29tcG9uZW50IH0gZnJvbSAnLi9UaWxlTm9kZUNvbXBvbmVudCc7XG5leHBvcnQgY2xhc3MgVGlsZTJEdW94aWFvQ2FyZENvbXBvbmVudCBleHRlbmRzIFRpbGVOb2RlQ29tcG9uZW50IHtcbiAgb25SZWZyZXNoTm9kZSgpIHtcbiAgICB0aGlzLl9mbGFnTm9kZSB8fCAodGhpcy5fZmxhZ05vZGUgPSB0aGlzLl9jcmVhdGVGbGFnKCkpO1xuICAgIHRoaXMuX3VwZGF0ZUZsYWcoKTtcbiAgfVxuICBvblVuYmluZCgpIHtcbiAgICB0aGlzLl9mbGFnTm9kZSAmJiBjYy5pc1ZhbGlkKHRoaXMuX2ZsYWdOb2RlKSAmJiB0aGlzLl9mbGFnTm9kZS5kZXN0cm95KCk7XG4gICAgdGhpcy5fZmxhZ05vZGUgPSBudWxsO1xuICB9XG4gIF9jcmVhdGVGbGFnKCkge1xuICAgIHZhciBlID0gdGhpcy5faG9zdC50aWxlTm9kZSxcbiAgICAgIHQgPSBlLmdldENoaWxkQnlOYW1lKFwiRHVveGlhb0NhcmRGbGFnTm9kZVwiKTtcbiAgICBpZiAodCkgcmV0dXJuIHQ7XG4gICAgdmFyIG8gPSBuZXcgY2MuTm9kZShcIkR1b3hpYW9DYXJkRmxhZ05vZGVcIik7XG4gICAgZS5hZGRDaGlsZChvKTtcbiAgICBvLnNjYWxlID0gMSAqIHRoaXMuX2hvc3QuaW5mby50aWxlT2JqZWN0LmxheW91dFNjYWxlO1xuICAgIG8uekluZGV4ID0gVGlsZU5vZGVaSW5kZXhNYXBbRVRpbGVOb2RlTmFtZXMuaW1nQ2FyZF0gKyAxO1xuICAgIHJldHVybiBvO1xuICB9XG4gIF91cGRhdGVGbGFnKCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICBpZiAodGhpcy5fZmxhZ05vZGUpIHtcbiAgICAgIHZhciB0ID0gQmFzZVNwaW5lLnJlZnJlc2hXaXRoTm9kZSh0aGlzLl9mbGFnTm9kZSwgXCJzcGluZS9kdW94aWFvL2lkbGUvZ2FtZXBsYXlfaGludENvbWJvXCIsIFwibWFpblJlc1wiKTtcbiAgICAgIHQuc2V0QW5pbWF0aW9uKFwiaW5pdFwiLCAtMSwgbnVsbCwgZmFsc2UpO1xuICAgICAgdC5hdHRhY2hOb2RlKFwiaG9va19udW1iZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IGUuX2hvc3QuaW5mby50aWxlT2JqZWN0LmdldER1b3hpYW9Db3VudCgpLnRvU3RyaW5nKCksXG4gICAgICAgICAgbyA9IEJhc2VMYWJlbC5jcmVhdGUodCwgXCJmb250L1NQQVJUQU4tQk9MRFwiLCBcIm1haW5SZXNcIiwgMzYpO1xuICAgICAgICBvLm5vZGUubmFtZSA9IFwiRHVveGlhb0NhcmRDb3VudE5vZGVcIjtcbiAgICAgICAgby5zZXRDb2xvcihuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiIzAxMzcxM1wiKSk7XG4gICAgICAgIG8uc2V0QWxpZ24oY2MuTGFiZWwuSG9yaXpvbnRhbEFsaWduLkNFTlRFUiwgY2MuTGFiZWwuVmVydGljYWxBbGlnbi5DRU5URVIpO1xuICAgICAgICByZXR1cm4gby5ub2RlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59Il19

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DuoxiaoCardTileNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3e601l1umZBsYQU4OXyONYP', 'DuoxiaoCardTileNode');
// Scripts/DuoxiaoCardTileNode.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DuoxiaoCardTileNode = void 0;
var BaseLabel_1 = require("./gamePlay/base/ui/BaseLabel");
var BaseSpine_1 = require("./gamePlay/base/ui/BaseSpine");
var TileTypeEnum_1 = require("./simulator/constant/TileTypeEnum");
var BaseTileNode_1 = require("./BaseTileNode");
var TileNodeObject_1 = require("./TileNodeObject");
var DuoxiaoCardTileNode = /** @class */ (function (_super) {
    __extends(DuoxiaoCardTileNode, _super);
    function DuoxiaoCardTileNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._initType = TileTypeEnum_1.ETileNodeShowType.DuoxiaoCard;
        return _this;
    }
    DuoxiaoCardTileNode.prototype.refreshNode = function (t) {
        _super.prototype.refreshNode.call(this, t);
        this._duoxiaoFlagNode || (this._duoxiaoFlagNode = this.createDuoxiaoFlag());
        this.updateDuoxiaoFlag();
    };
    DuoxiaoCardTileNode.prototype.createDuoxiaoFlag = function () {
        if (!this.tileNode.getChildByName("DuoxiaoCardFlagNode")) {
            var e = new cc.Node();
            e.name = "DuoxiaoCardFlagNode";
            this.tileNode.addChild(e);
            e.scale = 1 * this.info.tileObject.layoutScale;
            e.zIndex = BaseTileNode_1.TileNodeZIndexMap[BaseTileNode_1.ETileNodeNames.imgCard] + 1;
            return e;
        }
    };
    DuoxiaoCardTileNode.prototype.updateDuoxiaoFlag = function () {
        var e = this;
        if (this._duoxiaoFlagNode) {
            var t = BaseSpine_1.default.refreshWithNode(this._duoxiaoFlagNode, "spine/duoxiao/idle/gameplay_hintCombo", "mainRes");
            t.setAnimation("init", -1, null, false);
            t.attachNode("hook_number", function () {
                var t = e.info.tileObject.getDuoxiaoCount().toString(), o = BaseLabel_1.default.create(t, "font/SPARTAN-BOLD", "mainRes", 36);
                o.node.name = "DuoxiaoCardCountNode";
                o.setColor(new cc.Color().fromHEX("#013713"));
                o.setAlign(cc.Label.HorizontalAlign.CENTER, cc.Label.VerticalAlign.CENTER);
                return o.node;
            });
        }
    };
    return DuoxiaoCardTileNode;
}(TileNodeObject_1.TileNodeObject));
exports.DuoxiaoCardTileNode = DuoxiaoCardTileNode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0R1b3hpYW9DYXJkVGlsZU5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwREFBcUQ7QUFDckQsMERBQXFEO0FBQ3JELGtFQUFzRTtBQUN0RSwrQ0FBbUU7QUFDbkUsbURBQWtEO0FBQ2xEO0lBQXlDLHVDQUFjO0lBQXZEO1FBQUEscUVBZ0NDO1FBL0JDLGVBQVMsR0FBRyxnQ0FBaUIsQ0FBQyxXQUFXLENBQUM7O0lBK0I1QyxDQUFDO0lBOUJDLHlDQUFXLEdBQVgsVUFBWSxDQUFDO1FBQ1gsaUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNELCtDQUFpQixHQUFqQjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFO1lBQ3hELElBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxJQUFJLEdBQUcscUJBQXFCLENBQUM7WUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1lBQy9DLENBQUMsQ0FBQyxNQUFNLEdBQUcsZ0NBQWlCLENBQUMsNkJBQWMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekQsT0FBTyxDQUFDLENBQUM7U0FDVjtJQUNILENBQUM7SUFDRCwrQ0FBaUIsR0FBakI7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6QixJQUFJLENBQUMsR0FBRyxtQkFBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsdUNBQXVDLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDN0csQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3hDLENBQUMsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO2dCQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFDcEQsQ0FBQyxHQUFHLG1CQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxtQkFBbUIsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQzlELENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLHNCQUFzQixDQUFDO2dCQUNyQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDM0UsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQWhDQSxBQWdDQyxDQWhDd0MsK0JBQWMsR0FnQ3REO0FBaENZLGtEQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlTGFiZWwgZnJvbSAnLi9nYW1lUGxheS9iYXNlL3VpL0Jhc2VMYWJlbCc7XG5pbXBvcnQgQmFzZVNwaW5lIGZyb20gJy4vZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3BpbmUnO1xuaW1wb3J0IHsgRVRpbGVOb2RlU2hvd1R5cGUgfSBmcm9tICcuL3NpbXVsYXRvci9jb25zdGFudC9UaWxlVHlwZUVudW0nO1xuaW1wb3J0IHsgVGlsZU5vZGVaSW5kZXhNYXAsIEVUaWxlTm9kZU5hbWVzIH0gZnJvbSAnLi9CYXNlVGlsZU5vZGUnO1xuaW1wb3J0IHsgVGlsZU5vZGVPYmplY3QgfSBmcm9tICcuL1RpbGVOb2RlT2JqZWN0JztcbmV4cG9ydCBjbGFzcyBEdW94aWFvQ2FyZFRpbGVOb2RlIGV4dGVuZHMgVGlsZU5vZGVPYmplY3Qge1xuICBfaW5pdFR5cGUgPSBFVGlsZU5vZGVTaG93VHlwZS5EdW94aWFvQ2FyZDtcbiAgcmVmcmVzaE5vZGUodCkge1xuICAgIHN1cGVyLnJlZnJlc2hOb2RlLmNhbGwodGhpcywgdCk7XG4gICAgdGhpcy5fZHVveGlhb0ZsYWdOb2RlIHx8ICh0aGlzLl9kdW94aWFvRmxhZ05vZGUgPSB0aGlzLmNyZWF0ZUR1b3hpYW9GbGFnKCkpO1xuICAgIHRoaXMudXBkYXRlRHVveGlhb0ZsYWcoKTtcbiAgfVxuICBjcmVhdGVEdW94aWFvRmxhZygpIHtcbiAgICBpZiAoIXRoaXMudGlsZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJEdW94aWFvQ2FyZEZsYWdOb2RlXCIpKSB7XG4gICAgICB2YXIgZSA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgICBlLm5hbWUgPSBcIkR1b3hpYW9DYXJkRmxhZ05vZGVcIjtcbiAgICAgIHRoaXMudGlsZU5vZGUuYWRkQ2hpbGQoZSk7XG4gICAgICBlLnNjYWxlID0gMSAqIHRoaXMuaW5mby50aWxlT2JqZWN0LmxheW91dFNjYWxlO1xuICAgICAgZS56SW5kZXggPSBUaWxlTm9kZVpJbmRleE1hcFtFVGlsZU5vZGVOYW1lcy5pbWdDYXJkXSArIDE7XG4gICAgICByZXR1cm4gZTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlRHVveGlhb0ZsYWcoKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIGlmICh0aGlzLl9kdW94aWFvRmxhZ05vZGUpIHtcbiAgICAgIHZhciB0ID0gQmFzZVNwaW5lLnJlZnJlc2hXaXRoTm9kZSh0aGlzLl9kdW94aWFvRmxhZ05vZGUsIFwic3BpbmUvZHVveGlhby9pZGxlL2dhbWVwbGF5X2hpbnRDb21ib1wiLCBcIm1haW5SZXNcIik7XG4gICAgICB0LnNldEFuaW1hdGlvbihcImluaXRcIiwgLTEsIG51bGwsIGZhbHNlKTtcbiAgICAgIHQuYXR0YWNoTm9kZShcImhvb2tfbnVtYmVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSBlLmluZm8udGlsZU9iamVjdC5nZXREdW94aWFvQ291bnQoKS50b1N0cmluZygpLFxuICAgICAgICAgIG8gPSBCYXNlTGFiZWwuY3JlYXRlKHQsIFwiZm9udC9TUEFSVEFOLUJPTERcIiwgXCJtYWluUmVzXCIsIDM2KTtcbiAgICAgICAgby5ub2RlLm5hbWUgPSBcIkR1b3hpYW9DYXJkQ291bnROb2RlXCI7XG4gICAgICAgIG8uc2V0Q29sb3IobmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiMwMTM3MTNcIikpO1xuICAgICAgICBvLnNldEFsaWduKGNjLkxhYmVsLkhvcml6b250YWxBbGlnbi5DRU5URVIsIGNjLkxhYmVsLlZlcnRpY2FsQWxpZ24uQ0VOVEVSKTtcbiAgICAgICAgcmV0dXJuIG8ubm9kZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSJdfQ==
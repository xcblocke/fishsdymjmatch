
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DaxiaoCardTileNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5bdaamroilIRY6jQdSn23oi', 'DaxiaoCardTileNode');
// Scripts/DaxiaoCardTileNode.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DaxiaoCardTileNode = void 0;
var BaseSpine_1 = require("./gamePlay/base/ui/BaseSpine");
var TileTypeEnum_1 = require("./simulator/constant/TileTypeEnum");
var BaseTileNode_1 = require("./BaseTileNode");
var TileNodeObject_1 = require("./TileNodeObject");
var DaxiaoCardTileNode = /** @class */ (function (_super) {
    __extends(DaxiaoCardTileNode, _super);
    function DaxiaoCardTileNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._initType = TileTypeEnum_1.ETileNodeShowType.DaxiaoCard;
        return _this;
    }
    DaxiaoCardTileNode.prototype.refreshNode = function (t) {
        _super.prototype.refreshNode.call(this, t);
        this._daxiaoFlagNode || (this._daxiaoFlagNode = this.createDaxiaoFlag());
        this.updateDaxiaoFlag();
    };
    DaxiaoCardTileNode.prototype.createDaxiaoFlag = function () {
        if (!this.tileNode.getChildByName("DaxiaoCardFlagNode")) {
            var e = new cc.Node();
            e.name = "DaxiaoCardFlagNode";
            this.tileNode.addChild(e);
            e.scale = 1 * this.info.tileObject.layoutScale;
            e.zIndex = BaseTileNode_1.TileNodeZIndexMap[BaseTileNode_1.ETileNodeNames.imgCard] + 1;
            return e;
        }
    };
    DaxiaoCardTileNode.prototype.updateDaxiaoFlag = function () {
        this._daxiaoFlagNode && BaseSpine_1.default.refreshWithNode(this._daxiaoFlagNode, "spine/daxiao/idle/gameplay_hintGreat", "mainRes").setAnimation("init", -1, null, false);
    };
    DaxiaoCardTileNode.prototype.realShowSelectEffect = function () {
        _super.prototype.realShowSelectEffect.call(this);
    };
    DaxiaoCardTileNode.prototype.hideSelectEffect = function () {
        _super.prototype.hideSelectEffect.call(this);
    };
    return DaxiaoCardTileNode;
}(TileNodeObject_1.TileNodeObject));
exports.DaxiaoCardTileNode = DaxiaoCardTileNode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0RheGlhb0NhcmRUaWxlTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUFxRDtBQUNyRCxrRUFBc0U7QUFDdEUsK0NBQW1FO0FBQ25FLG1EQUFrRDtBQUNsRDtJQUF3QyxzQ0FBYztJQUF0RDtRQUFBLHFFQTBCQztRQXpCQyxlQUFTLEdBQUcsZ0NBQWlCLENBQUMsVUFBVSxDQUFDOztJQXlCM0MsQ0FBQztJQXhCQyx3Q0FBVyxHQUFYLFVBQVksQ0FBQztRQUNYLGlCQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUNELDZDQUFnQixHQUFoQjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO1lBQ3ZELElBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxJQUFJLEdBQUcsb0JBQW9CLENBQUM7WUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1lBQy9DLENBQUMsQ0FBQyxNQUFNLEdBQUcsZ0NBQWlCLENBQUMsNkJBQWMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekQsT0FBTyxDQUFDLENBQUM7U0FDVjtJQUNILENBQUM7SUFDRCw2Q0FBZ0IsR0FBaEI7UUFDRSxJQUFJLENBQUMsZUFBZSxJQUFJLG1CQUFTLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsc0NBQXNDLEVBQUUsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkssQ0FBQztJQUNELGlEQUFvQixHQUFwQjtRQUNFLGlCQUFNLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsNkNBQWdCLEdBQWhCO1FBQ0UsaUJBQU0sZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDSCx5QkFBQztBQUFELENBMUJBLEFBMEJDLENBMUJ1QywrQkFBYyxHQTBCckQ7QUExQlksZ0RBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VTcGluZSBmcm9tICcuL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwaW5lJztcbmltcG9ydCB7IEVUaWxlTm9kZVNob3dUeXBlIH0gZnJvbSAnLi9zaW11bGF0b3IvY29uc3RhbnQvVGlsZVR5cGVFbnVtJztcbmltcG9ydCB7IFRpbGVOb2RlWkluZGV4TWFwLCBFVGlsZU5vZGVOYW1lcyB9IGZyb20gJy4vQmFzZVRpbGVOb2RlJztcbmltcG9ydCB7IFRpbGVOb2RlT2JqZWN0IH0gZnJvbSAnLi9UaWxlTm9kZU9iamVjdCc7XG5leHBvcnQgY2xhc3MgRGF4aWFvQ2FyZFRpbGVOb2RlIGV4dGVuZHMgVGlsZU5vZGVPYmplY3Qge1xuICBfaW5pdFR5cGUgPSBFVGlsZU5vZGVTaG93VHlwZS5EYXhpYW9DYXJkO1xuICByZWZyZXNoTm9kZSh0KSB7XG4gICAgc3VwZXIucmVmcmVzaE5vZGUuY2FsbCh0aGlzLCB0KTtcbiAgICB0aGlzLl9kYXhpYW9GbGFnTm9kZSB8fCAodGhpcy5fZGF4aWFvRmxhZ05vZGUgPSB0aGlzLmNyZWF0ZURheGlhb0ZsYWcoKSk7XG4gICAgdGhpcy51cGRhdGVEYXhpYW9GbGFnKCk7XG4gIH1cbiAgY3JlYXRlRGF4aWFvRmxhZygpIHtcbiAgICBpZiAoIXRoaXMudGlsZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJEYXhpYW9DYXJkRmxhZ05vZGVcIikpIHtcbiAgICAgIHZhciBlID0gbmV3IGNjLk5vZGUoKTtcbiAgICAgIGUubmFtZSA9IFwiRGF4aWFvQ2FyZEZsYWdOb2RlXCI7XG4gICAgICB0aGlzLnRpbGVOb2RlLmFkZENoaWxkKGUpO1xuICAgICAgZS5zY2FsZSA9IDEgKiB0aGlzLmluZm8udGlsZU9iamVjdC5sYXlvdXRTY2FsZTtcbiAgICAgIGUuekluZGV4ID0gVGlsZU5vZGVaSW5kZXhNYXBbRVRpbGVOb2RlTmFtZXMuaW1nQ2FyZF0gKyAxO1xuICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICB9XG4gIHVwZGF0ZURheGlhb0ZsYWcoKSB7XG4gICAgdGhpcy5fZGF4aWFvRmxhZ05vZGUgJiYgQmFzZVNwaW5lLnJlZnJlc2hXaXRoTm9kZSh0aGlzLl9kYXhpYW9GbGFnTm9kZSwgXCJzcGluZS9kYXhpYW8vaWRsZS9nYW1lcGxheV9oaW50R3JlYXRcIiwgXCJtYWluUmVzXCIpLnNldEFuaW1hdGlvbihcImluaXRcIiwgLTEsIG51bGwsIGZhbHNlKTtcbiAgfVxuICByZWFsU2hvd1NlbGVjdEVmZmVjdCgpIHtcbiAgICBzdXBlci5yZWFsU2hvd1NlbGVjdEVmZmVjdC5jYWxsKHRoaXMpO1xuICB9XG4gIGhpZGVTZWxlY3RFZmZlY3QoKSB7XG4gICAgc3VwZXIuaGlkZVNlbGVjdEVmZmVjdC5jYWxsKHRoaXMpO1xuICB9XG59Il19
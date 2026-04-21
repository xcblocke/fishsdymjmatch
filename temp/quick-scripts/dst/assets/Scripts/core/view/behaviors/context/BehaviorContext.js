
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/view/behaviors/context/BehaviorContext.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '16347Gp7v9EgqMnF7SYFtQY', 'BehaviorContext');
// Scripts/core/view/behaviors/context/BehaviorContext.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BehaviorContext = void 0;
var BaseContext_1 = require("../../../simulator/context/BaseContext");
var RandomGenerator_1 = require("../../../simulator/structures/RandomGenerator");
var BehaviorContext = /** @class */ (function (_super) {
    __extends(BehaviorContext, _super);
    function BehaviorContext() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._layoutScale = 1;
        _this._tileNodeMap = new Map();
        _this._lastCollisionWorldPos = null;
        _this._autoMergeTimerHandles = new Set();
        _this.applauseAudioId = null;
        _this._collectTargetPositions = new Map();
        _this._collectTargetItems = new Map();
        return _this;
    }
    Object.defineProperty(BehaviorContext.prototype, "gameType", {
        get: function () {
            return this._gameType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BehaviorContext.prototype, "gameView", {
        get: function () {
            return this._gameView;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BehaviorContext.prototype, "gameCtr", {
        get: function () {
            return this.gameView.delegate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BehaviorContext.prototype, "layoutScale", {
        get: function () {
            return this._layoutScale;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BehaviorContext.prototype, "randomGenerator", {
        get: function () {
            this._randomGenerator || (this._randomGenerator = new RandomGenerator_1.RandomGenerator());
            return this._randomGenerator;
        },
        enumerable: false,
        configurable: true
    });
    BehaviorContext.prototype.getTile2SlotType = function () {
        return this.gameView.getTile2SlotType();
    };
    BehaviorContext.prototype.setLayoutScale = function (e) {
        this._layoutScale = e;
    };
    BehaviorContext.prototype.getTileNodeWorldPosition = function (e) {
        var t, o = null === (t = this.getTileMapObject()) || void 0 === t ? void 0 : t.getTileObject(e);
        if (!o)
            return cc.v2(0, 0);
        var n = o.getPosition();
        return this.getTileNodeManager().getFirstLayer().convertToWorldSpaceAR(n);
    };
    BehaviorContext.prototype.getTileNodeMap = function () {
        return this._tileNodeMap;
    };
    BehaviorContext.prototype.setTileNodeMap = function (e) {
        this._tileNodeMap = e;
    };
    BehaviorContext.prototype.setTileMapObject = function (e) {
        this._tileMapObject = e;
    };
    BehaviorContext.prototype.getTileMapObject = function () {
        return this._tileMapObject;
    };
    BehaviorContext.prototype.setTileNodeManager = function (e) {
        this._tileNodeManager = e;
    };
    BehaviorContext.prototype.getTileNodeManager = function () {
        return this._tileNodeManager;
    };
    BehaviorContext.prototype.getTileNodeByTileId = function (e) {
        var t;
        return null === (t = this._tileNodeMap) || void 0 === t ? void 0 : t.get(e);
    };
    BehaviorContext.prototype.removeTileNodeByTileIds = function (e) {
        var t = this;
        e.forEach(function (e) {
            var o, n, i = t._tileNodeMap.get(e);
            if (i) {
                i.clear();
                var r = null === (o = i.info) || void 0 === o ? void 0 : o.layerIndex;
                r >= 0 && (null === (n = t.getTileNodeManager().getSameLayerMap(r)) || void 0 === n || n.delete(e));
            }
            t._tileNodeMap.delete(e);
        });
    };
    BehaviorContext.prototype.removeTileNodeByTileId = function (e) {
        var t, o, n = this._tileNodeMap.get(e);
        if (n) {
            n.stopAllAnimation();
            n.clear();
            var i = null === (t = n.info) || void 0 === t ? void 0 : t.layerIndex;
            i >= 0 && (null === (o = this.getTileNodeManager().getSameLayerMap(i)) || void 0 === o || o.delete(e));
        }
        this._tileNodeMap.delete(e);
    };
    BehaviorContext.prototype.setLastCollisionWorldPos = function (e) {
        this._lastCollisionWorldPos = e ? cc.v3(e.x, e.y, e.z || 0) : null;
    };
    BehaviorContext.prototype.getLastCollisionWorldPos = function () {
        return this._lastCollisionWorldPos;
    };
    BehaviorContext.prototype.registerAutoMergeTimer = function (e) {
        this._autoMergeTimerHandles.add(e);
    };
    BehaviorContext.prototype.clearAutoMergeTimers = function () {
        var e = this;
        if (0 !== this._autoMergeTimerHandles.size) {
            this._autoMergeTimerHandles.forEach(function (t) {
                var o;
                null === (o = e.gameView.timerComponent) || void 0 === o || o.clearTimer(t);
            });
            this._autoMergeTimerHandles.clear();
        }
    };
    BehaviorContext.prototype.hasAutoMergeTimers = function () {
        return this._autoMergeTimerHandles.size > 0;
    };
    BehaviorContext.prototype.setCollectTargetPosition = function (e, t) {
        this._collectTargetPositions.set(e, cc.v3(t.x, t.y, t.z || 0));
    };
    BehaviorContext.prototype.getCollectTargetPosition = function (e) {
        return this._collectTargetPositions.get(e) || null;
    };
    BehaviorContext.prototype.getAllCollectTargetPositions = function () {
        return this._collectTargetPositions;
    };
    BehaviorContext.prototype.clearCollectTargetPositions = function () {
        this._collectTargetPositions.clear();
    };
    BehaviorContext.prototype.registerCollectTargetItem = function (e, t) {
        this._collectTargetItems.set(e, t);
    };
    BehaviorContext.prototype.getCollectTargetItem = function (e) {
        return this._collectTargetItems.get(e) || null;
    };
    BehaviorContext.prototype.getAllCollectTargetItems = function () {
        return this._collectTargetItems;
    };
    BehaviorContext.prototype.clearCollectTargetItems = function () {
        this._collectTargetItems.clear();
    };
    return BehaviorContext;
}(BaseContext_1.BaseContext));
exports.BehaviorContext = BehaviorContext;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvdmlldy9iZWhhdmlvcnMvY29udGV4dC9CZWhhdmlvckNvbnRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRUFBcUU7QUFDckUsaUZBQWdGO0FBQ2hGO0lBQXFDLG1DQUFXO0lBQWhEO1FBQUEscUVBbUlDO1FBbElDLGtCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGtCQUFZLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUN6Qiw0QkFBc0IsR0FBRyxJQUFJLENBQUM7UUFDOUIsNEJBQXNCLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNuQyxxQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2Qiw2QkFBdUIsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3BDLHlCQUFtQixHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7O0lBNEhsQyxDQUFDO0lBM0hDLHNCQUFJLHFDQUFRO2FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxxQ0FBUTthQUFaO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksb0NBQU87YUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSx3Q0FBVzthQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksNENBQWU7YUFBbkI7WUFDRSxJQUFJLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUMsQ0FBQztZQUN6RSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQUNELDBDQUFnQixHQUFoQjtR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RCxxREFBMkIsR0FBM0I7UUFDRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUNELG1EQUF5QixHQUF6QixVQUEwQixDQUFDLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsOENBQW9CLEdBQXBCLFVBQXFCLENBQUM7UUFDcEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztJQUNqRCxDQUFDO0lBQ0Qsa0RBQXdCLEdBQXhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDbEMsQ0FBQztJQUNELGlEQUF1QixHQUF2QjtRQUNFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQW5JQSxBQW1JQyxDQW5Jb0MseUJBQVcsR0FtSS9DO0FBbklZLDBDQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9zaW11bGF0b3IvY29udGV4dC9CYXNlQ29udGV4dCc7XG5pbXBvcnQgeyBSYW5kb21HZW5lcmF0b3IgfSBmcm9tICcuLi8uLi8uLi9zaW11bGF0b3Ivc3RydWN0dXJlcy9SYW5kb21HZW5lcmF0b3InO1xuZXhwb3J0IGNsYXNzIEJlaGF2aW9yQ29udGV4dCBleHRlbmRzIEJhc2VDb250ZXh0IHtcbiAgX2xheW91dFNjYWxlID0gMTtcbiAgX3RpbGVOb2RlTWFwID0gbmV3IE1hcCgpO1xuICBfbGFzdENvbGxpc2lvbldvcmxkUG9zID0gbnVsbDtcbiAgX2F1dG9NZXJnZVRpbWVySGFuZGxlcyA9IG5ldyBTZXQoKTtcbiAgYXBwbGF1c2VBdWRpb0lkID0gbnVsbDtcbiAgX2NvbGxlY3RUYXJnZXRQb3NpdGlvbnMgPSBuZXcgTWFwKCk7XG4gIF9jb2xsZWN0VGFyZ2V0SXRlbXMgPSBuZXcgTWFwKCk7XG4gIGdldCBnYW1lVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2FtZVR5cGU7XG4gIH1cbiAgZ2V0IGdhbWVWaWV3KCkge1xuICAgIHJldHVybiB0aGlzLl9nYW1lVmlldztcbiAgfVxuICBnZXQgZ2FtZUN0cigpIHtcbiAgICByZXR1cm4gdGhpcy5nYW1lVmlldy5kZWxlZ2F0ZTtcbiAgfVxuICBnZXQgbGF5b3V0U2NhbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xheW91dFNjYWxlO1xuICB9XG4gIGdldCByYW5kb21HZW5lcmF0b3IoKSB7XG4gICAgdGhpcy5fcmFuZG9tR2VuZXJhdG9yIHx8ICh0aGlzLl9yYW5kb21HZW5lcmF0b3IgPSBuZXcgUmFuZG9tR2VuZXJhdG9yKCkpO1xuICAgIHJldHVybiB0aGlzLl9yYW5kb21HZW5lcmF0b3I7XG4gIH1cbiAgZ2V0VGlsZTJTbG90VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nYW1lVmlldy5nZXRUaWxlMlNsb3RUeXBlKCk7XG4gIH1cbiAgc2V0TGF5b3V0U2NhbGUoZSkge1xuICAgIHRoaXMuX2xheW91dFNjYWxlID0gZTtcbiAgfVxuICBnZXRUaWxlTm9kZVdvcmxkUG9zaXRpb24oZSkge1xuICAgIHZhciB0LFxuICAgICAgbyA9IG51bGwgPT09ICh0ID0gdGhpcy5nZXRUaWxlTWFwT2JqZWN0KCkpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZ2V0VGlsZU9iamVjdChlKTtcbiAgICBpZiAoIW8pIHJldHVybiBjYy52MigwLCAwKTtcbiAgICB2YXIgbiA9IG8uZ2V0UG9zaXRpb24oKTtcbiAgICByZXR1cm4gdGhpcy5nZXRUaWxlTm9kZU1hbmFnZXIoKS5nZXRGaXJzdExheWVyKCkuY29udmVydFRvV29ybGRTcGFjZUFSKG4pO1xuICB9XG4gIGdldFRpbGVOb2RlTWFwKCkge1xuICAgIHJldHVybiB0aGlzLl90aWxlTm9kZU1hcDtcbiAgfVxuICBzZXRUaWxlTm9kZU1hcChlKSB7XG4gICAgdGhpcy5fdGlsZU5vZGVNYXAgPSBlO1xuICB9XG4gIHNldFRpbGVNYXBPYmplY3QoZSkge1xuICAgIHRoaXMuX3RpbGVNYXBPYmplY3QgPSBlO1xuICB9XG4gIGdldFRpbGVNYXBPYmplY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbGVNYXBPYmplY3Q7XG4gIH1cbiAgc2V0VGlsZU5vZGVNYW5hZ2VyKGUpIHtcbiAgICB0aGlzLl90aWxlTm9kZU1hbmFnZXIgPSBlO1xuICB9XG4gIGdldFRpbGVOb2RlTWFuYWdlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fdGlsZU5vZGVNYW5hZ2VyO1xuICB9XG4gIGdldFRpbGVOb2RlQnlUaWxlSWQoZSkge1xuICAgIHZhciB0O1xuICAgIHJldHVybiBudWxsID09PSAodCA9IHRoaXMuX3RpbGVOb2RlTWFwKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmdldChlKTtcbiAgfVxuICByZW1vdmVUaWxlTm9kZUJ5VGlsZUlkcyhlKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIGUuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIG8sXG4gICAgICAgIG4sXG4gICAgICAgIGkgPSB0Ll90aWxlTm9kZU1hcC5nZXQoZSk7XG4gICAgICBpZiAoaSkge1xuICAgICAgICBpLmNsZWFyKCk7XG4gICAgICAgIHZhciByID0gbnVsbCA9PT0gKG8gPSBpLmluZm8pIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8ubGF5ZXJJbmRleDtcbiAgICAgICAgciA+PSAwICYmIChudWxsID09PSAobiA9IHQuZ2V0VGlsZU5vZGVNYW5hZ2VyKCkuZ2V0U2FtZUxheWVyTWFwKHIpKSB8fCB2b2lkIDAgPT09IG4gfHwgbi5kZWxldGUoZSkpO1xuICAgICAgfVxuICAgICAgdC5fdGlsZU5vZGVNYXAuZGVsZXRlKGUpO1xuICAgIH0pO1xuICB9XG4gIHJlbW92ZVRpbGVOb2RlQnlUaWxlSWQoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4gPSB0aGlzLl90aWxlTm9kZU1hcC5nZXQoZSk7XG4gICAgaWYgKG4pIHtcbiAgICAgIG4uc3RvcEFsbEFuaW1hdGlvbigpO1xuICAgICAgbi5jbGVhcigpO1xuICAgICAgdmFyIGkgPSBudWxsID09PSAodCA9IG4uaW5mbykgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5sYXllckluZGV4O1xuICAgICAgaSA+PSAwICYmIChudWxsID09PSAobyA9IHRoaXMuZ2V0VGlsZU5vZGVNYW5hZ2VyKCkuZ2V0U2FtZUxheWVyTWFwKGkpKSB8fCB2b2lkIDAgPT09IG8gfHwgby5kZWxldGUoZSkpO1xuICAgIH1cbiAgICB0aGlzLl90aWxlTm9kZU1hcC5kZWxldGUoZSk7XG4gIH1cbiAgc2V0TGFzdENvbGxpc2lvbldvcmxkUG9zKGUpIHtcbiAgICB0aGlzLl9sYXN0Q29sbGlzaW9uV29ybGRQb3MgPSBlID8gY2MudjMoZS54LCBlLnksIGUueiB8fCAwKSA6IG51bGw7XG4gIH1cbiAgZ2V0TGFzdENvbGxpc2lvbldvcmxkUG9zKCkge1xuICAgIHJldHVybiB0aGlzLl9sYXN0Q29sbGlzaW9uV29ybGRQb3M7XG4gIH1cbiAgcmVnaXN0ZXJBdXRvTWVyZ2VUaW1lcihlKSB7XG4gICAgdGhpcy5fYXV0b01lcmdlVGltZXJIYW5kbGVzLmFkZChlKTtcbiAgfVxuICBjbGVhckF1dG9NZXJnZVRpbWVycygpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgaWYgKDAgIT09IHRoaXMuX2F1dG9NZXJnZVRpbWVySGFuZGxlcy5zaXplKSB7XG4gICAgICB0aGlzLl9hdXRvTWVyZ2VUaW1lckhhbmRsZXMuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgbztcbiAgICAgICAgbnVsbCA9PT0gKG8gPSBlLmdhbWVWaWV3LnRpbWVyQ29tcG9uZW50KSB8fCB2b2lkIDAgPT09IG8gfHwgby5jbGVhclRpbWVyKHQpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9hdXRvTWVyZ2VUaW1lckhhbmRsZXMuY2xlYXIoKTtcbiAgICB9XG4gIH1cbiAgaGFzQXV0b01lcmdlVGltZXJzKCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRvTWVyZ2VUaW1lckhhbmRsZXMuc2l6ZSA+IDA7XG4gIH1cbiAgc2V0Q29sbGVjdFRhcmdldFBvc2l0aW9uKGUsIHQpIHtcbiAgICB0aGlzLl9jb2xsZWN0VGFyZ2V0UG9zaXRpb25zLnNldChlLCBjYy52Myh0LngsIHQueSwgdC56IHx8IDApKTtcbiAgfVxuICBnZXRDb2xsZWN0VGFyZ2V0UG9zaXRpb24oZSkge1xuICAgIHJldHVybiB0aGlzLl9jb2xsZWN0VGFyZ2V0UG9zaXRpb25zLmdldChlKSB8fCBudWxsO1xuICB9XG4gIGdldEFsbENvbGxlY3RUYXJnZXRQb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbGxlY3RUYXJnZXRQb3NpdGlvbnM7XG4gIH1cbiAgY2xlYXJDb2xsZWN0VGFyZ2V0UG9zaXRpb25zKCkge1xuICAgIHRoaXMuX2NvbGxlY3RUYXJnZXRQb3NpdGlvbnMuY2xlYXIoKTtcbiAgfVxuICByZWdpc3RlckNvbGxlY3RUYXJnZXRJdGVtKGUsIHQpIHtcbiAgICB0aGlzLl9jb2xsZWN0VGFyZ2V0SXRlbXMuc2V0KGUsIHQpO1xuICB9XG4gIGdldENvbGxlY3RUYXJnZXRJdGVtKGUpIHtcbiAgICByZXR1cm4gdGhpcy5fY29sbGVjdFRhcmdldEl0ZW1zLmdldChlKSB8fCBudWxsO1xuICB9XG4gIGdldEFsbENvbGxlY3RUYXJnZXRJdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5fY29sbGVjdFRhcmdldEl0ZW1zO1xuICB9XG4gIGNsZWFyQ29sbGVjdFRhcmdldEl0ZW1zKCkge1xuICAgIHRoaXMuX2NvbGxlY3RUYXJnZXRJdGVtcy5jbGVhcigpO1xuICB9XG59Il19
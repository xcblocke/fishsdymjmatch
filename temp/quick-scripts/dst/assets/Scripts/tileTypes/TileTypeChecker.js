
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/tileTypes/TileTypeChecker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '70e8aY6ODpC2bI0K0LFcSm7', 'TileTypeChecker');
// Scripts/tileTypes/TileTypeChecker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TileTypeChecker = void 0;
var BaseCoreObject_1 = require("../BaseCoreObject");
var TileTypeEnum_1 = require("../simulator/constant/TileTypeEnum");
var BombCardType_1 = require("./BombCardType");
var TileTypeChecker = /** @class */ (function (_super) {
    __extends(TileTypeChecker, _super);
    function TileTypeChecker(t) {
        return _super.call(this, t) || this;
    }
    TileTypeChecker.prototype.parseBombCard = function (e) {
        var t = e[0], o = e[1], n = this._context.getTileMapObject().getTileObject(t), i = this._context.getTileMapObject().getTileObject(o);
        if (n.type === TileTypeEnum_1.ETileType.Bomb && i.type === TileTypeEnum_1.ETileType.Bomb) {
            var r = this.getCanClearBombCardIds(e);
            if (r && r.length > 0)
                return {
                    pos1: n.getPosition(),
                    pos2: i.getPosition(),
                    bombIds: r
                };
        }
    };
    TileTypeChecker.prototype.getCanClearBombCardIds = function (e) {
        var t = [], o = BombCardType_1.BombCardType.getBombClearTileIds(this._context, e);
        if (o && 2 == o.length) {
            t.push(o[0]);
            t.push(o[1]);
        }
        return t;
    };
    return TileTypeChecker;
}(BaseCoreObject_1.BaseCoreObject));
exports.TileTypeChecker = TileTypeChecker;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3RpbGVUeXBlcy9UaWxlVHlwZUNoZWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBbUQ7QUFDbkQsbUVBQStEO0FBQy9ELCtDQUE4QztBQUM5QztJQUFxQyxtQ0FBYztJQUNqRCx5QkFBWSxDQUFDO2VBQ1gsa0JBQU0sQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUNELHVDQUFhLEdBQWIsVUFBYyxDQUFDO1FBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNWLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ1IsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQ3JELENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyx3QkFBUyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLHdCQUFTLENBQUMsSUFBSSxFQUFFO1lBQzFELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQUUsT0FBTztvQkFDNUIsSUFBSSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUU7b0JBQ3JCLElBQUksRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFO29CQUNyQixPQUFPLEVBQUUsQ0FBQztpQkFDWCxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBQ0QsZ0RBQXNCLEdBQXRCLFVBQXVCLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUNSLENBQUMsR0FBRywyQkFBWSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDdEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNiLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDZDtRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0EzQkEsQUEyQkMsQ0EzQm9DLCtCQUFjLEdBMkJsRDtBQTNCWSwwQ0FBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb3JlT2JqZWN0IH0gZnJvbSAnLi4vQmFzZUNvcmVPYmplY3QnO1xuaW1wb3J0IHsgRVRpbGVUeXBlIH0gZnJvbSAnLi4vc2ltdWxhdG9yL2NvbnN0YW50L1RpbGVUeXBlRW51bSc7XG5pbXBvcnQgeyBCb21iQ2FyZFR5cGUgfSBmcm9tICcuL0JvbWJDYXJkVHlwZSc7XG5leHBvcnQgY2xhc3MgVGlsZVR5cGVDaGVja2VyIGV4dGVuZHMgQmFzZUNvcmVPYmplY3Qge1xuICBjb25zdHJ1Y3Rvcih0KSB7XG4gICAgc3VwZXIodCk7XG4gIH1cbiAgcGFyc2VCb21iQ2FyZChlKSB7XG4gICAgdmFyIHQgPSBlWzBdLFxuICAgICAgbyA9IGVbMV0sXG4gICAgICBuID0gdGhpcy5fY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuZ2V0VGlsZU9iamVjdCh0KSxcbiAgICAgIGkgPSB0aGlzLl9jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5nZXRUaWxlT2JqZWN0KG8pO1xuICAgIGlmIChuLnR5cGUgPT09IEVUaWxlVHlwZS5Cb21iICYmIGkudHlwZSA9PT0gRVRpbGVUeXBlLkJvbWIpIHtcbiAgICAgIHZhciByID0gdGhpcy5nZXRDYW5DbGVhckJvbWJDYXJkSWRzKGUpO1xuICAgICAgaWYgKHIgJiYgci5sZW5ndGggPiAwKSByZXR1cm4ge1xuICAgICAgICBwb3MxOiBuLmdldFBvc2l0aW9uKCksXG4gICAgICAgIHBvczI6IGkuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgYm9tYklkczogclxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgZ2V0Q2FuQ2xlYXJCb21iQ2FyZElkcyhlKSB7XG4gICAgdmFyIHQgPSBbXSxcbiAgICAgIG8gPSBCb21iQ2FyZFR5cGUuZ2V0Qm9tYkNsZWFyVGlsZUlkcyh0aGlzLl9jb250ZXh0LCBlKTtcbiAgICBpZiAobyAmJiAyID09IG8ubGVuZ3RoKSB7XG4gICAgICB0LnB1c2gob1swXSk7XG4gICAgICB0LnB1c2gob1sxXSk7XG4gICAgfVxuICAgIHJldHVybiB0O1xuICB9XG59Il19
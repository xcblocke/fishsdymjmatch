
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/tile2/Tile2BombModifier.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '43a69un5VpKsbSJcXKHYR+m', 'Tile2BombModifier');
// Scripts/process/tile2/Tile2BombModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseCoreObject_1 = require("../../BaseCoreObject");
var CollectInterfact_1 = require("../../constant/CollectInterfact");
var TileTypeEnum_1 = require("../../simulator/constant/TileTypeEnum");
var BombCardType_1 = require("../../tileTypes/BombCardType");
var Tile2BombModifier = /** @class */ (function (_super) {
    __extends(Tile2BombModifier, _super);
    function Tile2BombModifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2BombModifier.prototype.parseBombCard = function (e) {
        var t = e[0], o = e[1], n = this._context.getTileMapObject().getTileObject(t), i = this._context.getTileMapObject().getTileObject(o);
        if (n.checkHasType(TileTypeEnum_1.ETileType.Bomb) && i.checkHasType(TileTypeEnum_1.ETileType.Bomb)) {
            var r = this.getCanClearBombCardIds(e);
            if (r && r.length > 0)
                return {
                    pos1: n.getPosition(),
                    pos2: i.getPosition(),
                    bombIds: r
                };
        }
    };
    Tile2BombModifier.prototype.getCanClearBombCardIds = function (e) {
        var t = [], o = BombCardType_1.BombCardType.getBombClearTileIds(this._context, e);
        if (o && 2 == o.length) {
            t.push(o[0]);
            t.push(o[1]);
        }
        return t;
    };
    Tile2BombModifier.prototype.modifyBombCard = function (e, t) {
        this.context.tile2SlotBarModifier.clear([t], CollectInterfact_1.ECollectFrom.FromBomb);
        this._context.comboModifier.addCombo(1);
        var o = this._context.scoreModifier.calAddScore(), n = this._context.getGameData().getScore();
        return {
            addScore: o,
            combo: this._context.getGameData().getComboNum(),
            showCombo: this._context.comboChecker.canShowCombo(),
            targetScore: n
        };
    };
    return Tile2BombModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.default = Tile2BombModifier;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvdGlsZTIvVGlsZTJCb21iTW9kaWZpZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFzRDtBQUN0RCxvRUFBK0Q7QUFDL0Qsc0VBQWtFO0FBQ2xFLDZEQUE0RDtBQUM1RDtJQUErQyxxQ0FBYztJQUE3RDs7SUFvQ0EsQ0FBQztJQW5DQyx5Q0FBYSxHQUFiLFVBQWMsQ0FBQztRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDVixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNSLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUNyRCxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsd0JBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLHdCQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDcEUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFBRSxPQUFPO29CQUM1QixJQUFJLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRTtvQkFDckIsSUFBSSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUU7b0JBQ3JCLE9BQU8sRUFBRSxDQUFDO2lCQUNYLENBQUM7U0FDSDtJQUNILENBQUM7SUFDRCxrREFBc0IsR0FBdEIsVUFBdUIsQ0FBQztRQUN0QixJQUFJLENBQUMsR0FBRyxFQUFFLEVBQ1IsQ0FBQyxHQUFHLDJCQUFZLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUN0QixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNkO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0QsMENBQWMsR0FBZCxVQUFlLENBQUMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsK0JBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLEVBQy9DLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzdDLE9BQU87WUFDTCxRQUFRLEVBQUUsQ0FBQztZQUNYLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLFdBQVcsRUFBRTtZQUNoRCxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFO1lBQ3BELFdBQVcsRUFBRSxDQUFDO1NBQ2YsQ0FBQztJQUNKLENBQUM7SUFDSCx3QkFBQztBQUFELENBcENBLEFBb0NDLENBcEM4QywrQkFBYyxHQW9DNUQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlQ29yZU9iamVjdCB9IGZyb20gJy4uLy4uL0Jhc2VDb3JlT2JqZWN0JztcbmltcG9ydCB7IEVDb2xsZWN0RnJvbSB9IGZyb20gJy4uLy4uL2NvbnN0YW50L0NvbGxlY3RJbnRlcmZhY3QnO1xuaW1wb3J0IHsgRVRpbGVUeXBlIH0gZnJvbSAnLi4vLi4vc2ltdWxhdG9yL2NvbnN0YW50L1RpbGVUeXBlRW51bSc7XG5pbXBvcnQgeyBCb21iQ2FyZFR5cGUgfSBmcm9tICcuLi8uLi90aWxlVHlwZXMvQm9tYkNhcmRUeXBlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGUyQm9tYk1vZGlmaWVyIGV4dGVuZHMgQmFzZUNvcmVPYmplY3Qge1xuICBwYXJzZUJvbWJDYXJkKGUpIHtcbiAgICB2YXIgdCA9IGVbMF0sXG4gICAgICBvID0gZVsxXSxcbiAgICAgIG4gPSB0aGlzLl9jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5nZXRUaWxlT2JqZWN0KHQpLFxuICAgICAgaSA9IHRoaXMuX2NvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmdldFRpbGVPYmplY3Qobyk7XG4gICAgaWYgKG4uY2hlY2tIYXNUeXBlKEVUaWxlVHlwZS5Cb21iKSAmJiBpLmNoZWNrSGFzVHlwZShFVGlsZVR5cGUuQm9tYikpIHtcbiAgICAgIHZhciByID0gdGhpcy5nZXRDYW5DbGVhckJvbWJDYXJkSWRzKGUpO1xuICAgICAgaWYgKHIgJiYgci5sZW5ndGggPiAwKSByZXR1cm4ge1xuICAgICAgICBwb3MxOiBuLmdldFBvc2l0aW9uKCksXG4gICAgICAgIHBvczI6IGkuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgYm9tYklkczogclxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgZ2V0Q2FuQ2xlYXJCb21iQ2FyZElkcyhlKSB7XG4gICAgdmFyIHQgPSBbXSxcbiAgICAgIG8gPSBCb21iQ2FyZFR5cGUuZ2V0Qm9tYkNsZWFyVGlsZUlkcyh0aGlzLl9jb250ZXh0LCBlKTtcbiAgICBpZiAobyAmJiAyID09IG8ubGVuZ3RoKSB7XG4gICAgICB0LnB1c2gob1swXSk7XG4gICAgICB0LnB1c2gob1sxXSk7XG4gICAgfVxuICAgIHJldHVybiB0O1xuICB9XG4gIG1vZGlmeUJvbWJDYXJkKGUsIHQpIHtcbiAgICB0aGlzLmNvbnRleHQudGlsZTJTbG90QmFyTW9kaWZpZXIuY2xlYXIoW3RdLCBFQ29sbGVjdEZyb20uRnJvbUJvbWIpO1xuICAgIHRoaXMuX2NvbnRleHQuY29tYm9Nb2RpZmllci5hZGRDb21ibygxKTtcbiAgICB2YXIgbyA9IHRoaXMuX2NvbnRleHQuc2NvcmVNb2RpZmllci5jYWxBZGRTY29yZSgpLFxuICAgICAgbiA9IHRoaXMuX2NvbnRleHQuZ2V0R2FtZURhdGEoKS5nZXRTY29yZSgpO1xuICAgIHJldHVybiB7XG4gICAgICBhZGRTY29yZTogbyxcbiAgICAgIGNvbWJvOiB0aGlzLl9jb250ZXh0LmdldEdhbWVEYXRhKCkuZ2V0Q29tYm9OdW0oKSxcbiAgICAgIHNob3dDb21ibzogdGhpcy5fY29udGV4dC5jb21ib0NoZWNrZXIuY2FuU2hvd0NvbWJvKCksXG4gICAgICB0YXJnZXRTY29yZTogblxuICAgIH07XG4gIH1cbn0iXX0=
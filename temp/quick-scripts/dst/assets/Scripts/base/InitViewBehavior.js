
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/InitViewBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0dcbfZzwk9E+p9wzF+mn0eF', 'InitViewBehavior');
// Scripts/base/InitViewBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.InitViewBehavior = void 0;
var TileNodeManager_1 = require("../tilenodes/TileNodeManager");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var InitViewBehavior = /** @class */ (function (_super) {
    __extends(InitViewBehavior, _super);
    function InitViewBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timeout = 0;
        return _this;
    }
    InitViewBehavior.prototype.start = function (e) {
        var t = this;
        Date.now();
        this._cardLayoutConfig = e.data.cardLayoutConfig;
        this._cardConfigMap = e.data.cardConfigMap;
        this.context.setTileMapObject(e.data.tilemapObject);
        this.context.setLayoutScale(e.data.layoutScale);
        this.initAllTileNodes().then(function () {
            Date.now();
            t.createAllTileNodes();
            t.finish();
        });
    };
    InitViewBehavior.prototype.initAllTileNodes = function () {
        return new TileNodeManager_1.default(this.context).createAllTileNodes({
            tileMapObject: this.context.getTileMapObject(),
            cardLayoutConfig: this._cardLayoutConfig,
            cardConfigMap: this._cardConfigMap
        });
    };
    InitViewBehavior.prototype.createAllTileNodes = function () { };
    __decorate([
        mj.traitEvent("InitViewBhv_crtTls")
    ], InitViewBehavior.prototype, "createAllTileNodes", null);
    return InitViewBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.InitViewBehavior = InitViewBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvSW5pdFZpZXdCZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCx5REFBd0Q7QUFDeEQ7SUFBc0Msb0NBQWlCO0lBQXZEO1FBQUEscUVBd0JDO1FBdkJDLGNBQVEsR0FBRyxDQUFDLENBQUM7O0lBdUJmLENBQUM7SUF0QkMsZ0NBQUssR0FBTCxVQUFNLENBQUM7UUFDTCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDWCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqRCxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDWCxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUN2QixDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCwyQ0FBZ0IsR0FBaEI7UUFDRSxPQUFPLElBQUkseUJBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsa0JBQWtCLENBQUM7WUFDMUQsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUU7WUFDOUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtZQUN4QyxhQUFhLEVBQUUsSUFBSSxDQUFDLGNBQWM7U0FDbkMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDZDQUFrQixHQUFsQixjQUFzQixDQUFDO0lBQXZCO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQzs4REFDYjtJQUN6Qix1QkFBQztDQXhCRCxBQXdCQyxDQXhCcUMscUNBQWlCLEdBd0J0RDtBQXhCWSw0Q0FBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGlsZU5vZGVNYW5hZ2VyIGZyb20gJy4uL3RpbGVub2Rlcy9UaWxlTm9kZU1hbmFnZXInO1xuaW1wb3J0IHsgR2FtZUJlaGF2aW9yc0Jhc2UgfSBmcm9tICcuL0dhbWVCZWhhdmlvcnNCYXNlJztcbmV4cG9ydCBjbGFzcyBJbml0Vmlld0JlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBfdGltZW91dCA9IDA7XG4gIHN0YXJ0KGUpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgRGF0ZS5ub3coKTtcbiAgICB0aGlzLl9jYXJkTGF5b3V0Q29uZmlnID0gZS5kYXRhLmNhcmRMYXlvdXRDb25maWc7XG4gICAgdGhpcy5fY2FyZENvbmZpZ01hcCA9IGUuZGF0YS5jYXJkQ29uZmlnTWFwO1xuICAgIHRoaXMuY29udGV4dC5zZXRUaWxlTWFwT2JqZWN0KGUuZGF0YS50aWxlbWFwT2JqZWN0KTtcbiAgICB0aGlzLmNvbnRleHQuc2V0TGF5b3V0U2NhbGUoZS5kYXRhLmxheW91dFNjYWxlKTtcbiAgICB0aGlzLmluaXRBbGxUaWxlTm9kZXMoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIERhdGUubm93KCk7XG4gICAgICB0LmNyZWF0ZUFsbFRpbGVOb2RlcygpO1xuICAgICAgdC5maW5pc2goKTtcbiAgICB9KTtcbiAgfVxuICBpbml0QWxsVGlsZU5vZGVzKCkge1xuICAgIHJldHVybiBuZXcgVGlsZU5vZGVNYW5hZ2VyKHRoaXMuY29udGV4dCkuY3JlYXRlQWxsVGlsZU5vZGVzKHtcbiAgICAgIHRpbGVNYXBPYmplY3Q6IHRoaXMuY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCksXG4gICAgICBjYXJkTGF5b3V0Q29uZmlnOiB0aGlzLl9jYXJkTGF5b3V0Q29uZmlnLFxuICAgICAgY2FyZENvbmZpZ01hcDogdGhpcy5fY2FyZENvbmZpZ01hcFxuICAgIH0pO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiSW5pdFZpZXdCaHZfY3J0VGxzXCIpXG4gIGNyZWF0ZUFsbFRpbGVOb2RlcygpIHt9XG59Il19

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/view/TravelGameView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2cc1frF0+tAy7RoVqqFGJlx', 'TravelGameView');
// Scripts/view/TravelGameView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var MainGameView_1 = require("../game/view/MainGameView");
var TravelGameView = /** @class */ (function (_super) {
    __extends(TravelGameView, _super);
    function TravelGameView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._logName = "TravelGameView";
        _this._gameType = GameTypeEnums_1.MjGameType.Travel;
        return _this;
    }
    Object.defineProperty(TravelGameView.prototype, "nodeCollect", {
        get: function () {
            return this._nodeCollect;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TravelGameView.prototype, "nodeCollectShow", {
        get: function () {
            return this._nodeCollectShow;
        },
        enumerable: false,
        configurable: true
    });
    TravelGameView.prototype.initScoreItem = function () {
        this.scoreRootNode && (this.scoreRootNode.active = false);
    };
    TravelGameView.prototype.initExpandNodes = function () {
        this._nodeCollect = this.topRootNode.getChildByName("nodeCollect");
        this._nodeCollectShow = this.gameUI.node.getChildByName("collectShowRoot");
    };
    TravelGameView.prototype.clearAllNode = function () {
        _super.prototype.clearAllNode.call(this);
        this._nodeCollect.removeAllChildren();
    };
    TravelGameView.prefabUrl = "prefabs/game/MainGameTravel";
    __decorate([
        mj.traitEvent("TravelGmVw_initExpands")
    ], TravelGameView.prototype, "initExpandNodes", null);
    TravelGameView = __decorate([
        mj.class
    ], TravelGameView);
    return TravelGameView;
}(MainGameView_1.default));
exports.default = TravelGameView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3ZpZXcvVHJhdmVsR2FtZVZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBFQUFzRTtBQUN0RSwwREFBcUQ7QUFFckQ7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFzQkM7UUFyQkMsY0FBUSxHQUFHLGdCQUFnQixDQUFDO1FBQzVCLGVBQVMsR0FBRywwQkFBVSxDQUFDLE1BQU0sQ0FBQzs7SUFvQmhDLENBQUM7SUFsQkMsc0JBQUksdUNBQVc7YUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUNELHNCQUFJLDJDQUFlO2FBQW5CO1lBQ0UsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFDRCxzQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCx3Q0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUNELHFDQUFZLEdBQVo7UUFDRSxpQkFBTSxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBbEJNLHdCQUFTLEdBQUcsNkJBQTZCLENBQUM7SUFXakQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDO3lEQUl2QztJQWpCa0IsY0FBYztRQURsQyxFQUFFLENBQUMsS0FBSztPQUNZLGNBQWMsQ0FzQmxDO0lBQUQscUJBQUM7Q0F0QkQsQUFzQkMsQ0F0QjJDLHNCQUFZLEdBc0J2RDtrQkF0Qm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgTWFpbkdhbWVWaWV3IGZyb20gJy4uL2dhbWUvdmlldy9NYWluR2FtZVZpZXcnO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmF2ZWxHYW1lVmlldyBleHRlbmRzIE1haW5HYW1lVmlldyB7XG4gIF9sb2dOYW1lID0gXCJUcmF2ZWxHYW1lVmlld1wiO1xuICBfZ2FtZVR5cGUgPSBNakdhbWVUeXBlLlRyYXZlbDtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFicy9nYW1lL01haW5HYW1lVHJhdmVsXCI7XG4gIGdldCBub2RlQ29sbGVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbm9kZUNvbGxlY3Q7XG4gIH1cbiAgZ2V0IG5vZGVDb2xsZWN0U2hvdygpIHtcbiAgICByZXR1cm4gdGhpcy5fbm9kZUNvbGxlY3RTaG93O1xuICB9XG4gIGluaXRTY29yZUl0ZW0oKSB7XG4gICAgdGhpcy5zY29yZVJvb3ROb2RlICYmICh0aGlzLnNjb3JlUm9vdE5vZGUuYWN0aXZlID0gZmFsc2UpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVHJhdmVsR21Wd19pbml0RXhwYW5kc1wiKVxuICBpbml0RXhwYW5kTm9kZXMoKSB7XG4gICAgdGhpcy5fbm9kZUNvbGxlY3QgPSB0aGlzLnRvcFJvb3ROb2RlLmdldENoaWxkQnlOYW1lKFwibm9kZUNvbGxlY3RcIik7XG4gICAgdGhpcy5fbm9kZUNvbGxlY3RTaG93ID0gdGhpcy5nYW1lVUkubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbGxlY3RTaG93Um9vdFwiKTtcbiAgfVxuICBjbGVhckFsbE5vZGUoKSB7XG4gICAgc3VwZXIuY2xlYXJBbGxOb2RlLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fbm9kZUNvbGxlY3QucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgfVxufSJdfQ==
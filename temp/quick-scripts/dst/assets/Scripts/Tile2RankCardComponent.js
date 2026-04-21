
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tile2RankCardComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2b250zfHRtACoNJTthLCgj4', 'Tile2RankCardComponent');
// Scripts/Tile2RankCardComponent.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2RankCardComponent = void 0;
var BaseSpine_1 = require("./gamePlay/base/ui/BaseSpine");
var BaseSprite_1 = require("./gamePlay/base/ui/BaseSprite");
var CardUtil_1 = require("./gamePlay/user/CardUtil");
var UserModel_1 = require("./gamePlay/user/UserModel");
var TileNodeComponent_1 = require("./TileNodeComponent");
var Tile2RankCardComponent = /** @class */ (function (_super) {
    __extends(Tile2RankCardComponent, _super);
    function Tile2RankCardComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2RankCardComponent.prototype.getResNameOverride = function () {
        return UserModel_1.default.getInstance().getRankCardResName();
    };
    Tile2RankCardComponent.prototype.onUpdateImgCardBg = function () {
        var e = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_special_mj_2", this._host), t = e.path, o = e.bundleName, n = e.fromAtlas;
        BaseSprite_1.default.refreshWithNode(this._host.imgCardBg, t, n, false, o);
        return true;
    };
    Tile2RankCardComponent.prototype.onUpdateEffectSelected = function () {
        this._host._effectSelectedProxy = BaseSpine_1.default.refreshWithNode(this._host.effectSelected, "spine/rankcard/select/gameplay_selected_special");
        return true;
    };
    Tile2RankCardComponent.prototype.onRealShowSelectEffect = function () {
        this._host.imgSelectedCardBg.active = false;
        return false;
    };
    return Tile2RankCardComponent;
}(TileNodeComponent_1.TileNodeComponent));
exports.Tile2RankCardComponent = Tile2RankCardComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RpbGUyUmFua0NhcmRDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwREFBcUQ7QUFDckQsNERBQXVEO0FBQ3ZELHFEQUFnRDtBQUNoRCx1REFBa0Q7QUFDbEQseURBQXdEO0FBQ3hEO0lBQTRDLDBDQUFpQjtJQUE3RDs7SUFvQkEsQ0FBQztJQW5CQyxtREFBa0IsR0FBbEI7UUFDRSxPQUFPLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0lBQ0Qsa0RBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsa0JBQVEsQ0FBQyx5QkFBeUIsQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQzdFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUNWLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUNoQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNsQixvQkFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqRSxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDRCx1REFBc0IsR0FBdEI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLG9CQUFvQixHQUFHLG1CQUFTLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLGlEQUFpRCxDQUFDLENBQUM7UUFDMUksT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0QsdURBQXNCLEdBQXRCO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzVDLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FwQkEsQUFvQkMsQ0FwQjJDLHFDQUFpQixHQW9CNUQ7QUFwQlksd0RBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VTcGluZSBmcm9tICcuL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwaW5lJztcbmltcG9ydCBCYXNlU3ByaXRlIGZyb20gJy4vZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3ByaXRlJztcbmltcG9ydCBDYXJkVXRpbCBmcm9tICcuL2dhbWVQbGF5L3VzZXIvQ2FyZFV0aWwnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCB7IFRpbGVOb2RlQ29tcG9uZW50IH0gZnJvbSAnLi9UaWxlTm9kZUNvbXBvbmVudCc7XG5leHBvcnQgY2xhc3MgVGlsZTJSYW5rQ2FyZENvbXBvbmVudCBleHRlbmRzIFRpbGVOb2RlQ29tcG9uZW50IHtcbiAgZ2V0UmVzTmFtZU92ZXJyaWRlKCkge1xuICAgIHJldHVybiBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRSYW5rQ2FyZFJlc05hbWUoKTtcbiAgfVxuICBvblVwZGF0ZUltZ0NhcmRCZygpIHtcbiAgICB2YXIgZSA9IENhcmRVdGlsLmdldEF0bGFzUGF0aEFuZEJ1bmRsZU5hbWUoXCJnYW1lcGxheV9zcGVjaWFsX21qXzJcIiwgdGhpcy5faG9zdCksXG4gICAgICB0ID0gZS5wYXRoLFxuICAgICAgbyA9IGUuYnVuZGxlTmFtZSxcbiAgICAgIG4gPSBlLmZyb21BdGxhcztcbiAgICBCYXNlU3ByaXRlLnJlZnJlc2hXaXRoTm9kZSh0aGlzLl9ob3N0LmltZ0NhcmRCZywgdCwgbiwgZmFsc2UsIG8pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIG9uVXBkYXRlRWZmZWN0U2VsZWN0ZWQoKSB7XG4gICAgdGhpcy5faG9zdC5fZWZmZWN0U2VsZWN0ZWRQcm94eSA9IEJhc2VTcGluZS5yZWZyZXNoV2l0aE5vZGUodGhpcy5faG9zdC5lZmZlY3RTZWxlY3RlZCwgXCJzcGluZS9yYW5rY2FyZC9zZWxlY3QvZ2FtZXBsYXlfc2VsZWN0ZWRfc3BlY2lhbFwiKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBvblJlYWxTaG93U2VsZWN0RWZmZWN0KCkge1xuICAgIHRoaXMuX2hvc3QuaW1nU2VsZWN0ZWRDYXJkQmcuYWN0aXZlID0gZmFsc2U7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59Il19
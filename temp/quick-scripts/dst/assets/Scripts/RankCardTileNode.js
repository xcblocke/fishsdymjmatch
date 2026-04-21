
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/RankCardTileNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e4aa1cmD6lJ0r7sjC13ZJ0X', 'RankCardTileNode');
// Scripts/RankCardTileNode.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.RankCardTileNode = void 0;
var BaseSpine_1 = require("./gamePlay/base/ui/BaseSpine");
var BaseSprite_1 = require("./gamePlay/base/ui/BaseSprite");
var CardUtil_1 = require("./gamePlay/user/CardUtil");
var UserModel_1 = require("./gamePlay/user/UserModel");
var TileTypeEnum_1 = require("./simulator/constant/TileTypeEnum");
var TileNodeObject_1 = require("./TileNodeObject");
var RankCardTileNode = /** @class */ (function (_super) {
    __extends(RankCardTileNode, _super);
    function RankCardTileNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._initType = TileTypeEnum_1.ETileNodeShowType.RankCard;
        return _this;
    }
    RankCardTileNode.prototype.updateImgCard = function () {
        var e = UserModel_1.default.getInstance().getRankCardResName(), t = CardUtil_1.default.getAtlasPathAndBundleName(e, this), o = t.path, n = t.bundleName, i = t.fromAtlas;
        BaseSprite_1.default.refreshWithNode(this.imgCard, o, i, false, n);
        this.saveCardUniqueInfo(n, o, i);
    };
    RankCardTileNode.prototype.updateImgCardBg = function () {
        var e = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_special_mj_2", this), t = e.path, o = e.bundleName, n = e.fromAtlas;
        BaseSprite_1.default.refreshWithNode(this.imgCardBg, t, n, false, o);
    };
    RankCardTileNode.prototype.updateEffectSelected = function () {
        this._effectSelectedProxy = BaseSpine_1.default.refreshWithNode(this.effectSelected, "spine/rankcard/select/gameplay_selected_special");
    };
    RankCardTileNode.prototype.realShowSelectEffect = function () {
        _super.prototype.realShowSelectEffect.call(this);
        this.imgSelectedCardBg.active = false;
    };
    __decorate([
        mj.traitEvent("RankCardNode_updImgCard")
    ], RankCardTileNode.prototype, "updateImgCard", null);
    return RankCardTileNode;
}(TileNodeObject_1.TileNodeObject));
exports.RankCardTileNode = RankCardTileNode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1JhbmtDYXJkVGlsZU5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwREFBcUQ7QUFDckQsNERBQXVEO0FBQ3ZELHFEQUFnRDtBQUNoRCx1REFBa0Q7QUFDbEQsa0VBQXNFO0FBQ3RFLG1EQUFrRDtBQUNsRDtJQUFzQyxvQ0FBYztJQUFwRDtRQUFBLHFFQTBCQztRQXpCQyxlQUFTLEdBQUcsZ0NBQWlCLENBQUMsUUFBUSxDQUFDOztJQXlCekMsQ0FBQztJQXZCQyx3Q0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxFQUNsRCxDQUFDLEdBQUcsa0JBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQy9DLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUNWLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUNoQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNsQixvQkFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDRCwwQ0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLEdBQUcsa0JBQVEsQ0FBQyx5QkFBeUIsQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsRUFDdkUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQ1YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQ2hCLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2xCLG9CQUFVLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUNELCtDQUFvQixHQUFwQjtRQUNFLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxtQkFBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLGlEQUFpRCxDQUFDLENBQUM7SUFDaEksQ0FBQztJQUNELCtDQUFvQixHQUFwQjtRQUNFLGlCQUFNLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QyxDQUFDO0lBdEJEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQzt5REFTeEM7SUFlSCx1QkFBQztDQTFCRCxBQTBCQyxDQTFCcUMsK0JBQWMsR0EwQm5EO0FBMUJZLDRDQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlU3BpbmUgZnJvbSAnLi9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcGluZSc7XG5pbXBvcnQgQmFzZVNwcml0ZSBmcm9tICcuL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwcml0ZSc7XG5pbXBvcnQgQ2FyZFV0aWwgZnJvbSAnLi9nYW1lUGxheS91c2VyL0NhcmRVdGlsJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgeyBFVGlsZU5vZGVTaG93VHlwZSB9IGZyb20gJy4vc2ltdWxhdG9yL2NvbnN0YW50L1RpbGVUeXBlRW51bSc7XG5pbXBvcnQgeyBUaWxlTm9kZU9iamVjdCB9IGZyb20gJy4vVGlsZU5vZGVPYmplY3QnO1xuZXhwb3J0IGNsYXNzIFJhbmtDYXJkVGlsZU5vZGUgZXh0ZW5kcyBUaWxlTm9kZU9iamVjdCB7XG4gIF9pbml0VHlwZSA9IEVUaWxlTm9kZVNob3dUeXBlLlJhbmtDYXJkO1xuICBAbWoudHJhaXRFdmVudChcIlJhbmtDYXJkTm9kZV91cGRJbWdDYXJkXCIpXG4gIHVwZGF0ZUltZ0NhcmQoKSB7XG4gICAgdmFyIGUgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRSYW5rQ2FyZFJlc05hbWUoKSxcbiAgICAgIHQgPSBDYXJkVXRpbC5nZXRBdGxhc1BhdGhBbmRCdW5kbGVOYW1lKGUsIHRoaXMpLFxuICAgICAgbyA9IHQucGF0aCxcbiAgICAgIG4gPSB0LmJ1bmRsZU5hbWUsXG4gICAgICBpID0gdC5mcm9tQXRsYXM7XG4gICAgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUodGhpcy5pbWdDYXJkLCBvLCBpLCBmYWxzZSwgbik7XG4gICAgdGhpcy5zYXZlQ2FyZFVuaXF1ZUluZm8obiwgbywgaSk7XG4gIH1cbiAgdXBkYXRlSW1nQ2FyZEJnKCkge1xuICAgIHZhciBlID0gQ2FyZFV0aWwuZ2V0QXRsYXNQYXRoQW5kQnVuZGxlTmFtZShcImdhbWVwbGF5X3NwZWNpYWxfbWpfMlwiLCB0aGlzKSxcbiAgICAgIHQgPSBlLnBhdGgsXG4gICAgICBvID0gZS5idW5kbGVOYW1lLFxuICAgICAgbiA9IGUuZnJvbUF0bGFzO1xuICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKHRoaXMuaW1nQ2FyZEJnLCB0LCBuLCBmYWxzZSwgbyk7XG4gIH1cbiAgdXBkYXRlRWZmZWN0U2VsZWN0ZWQoKSB7XG4gICAgdGhpcy5fZWZmZWN0U2VsZWN0ZWRQcm94eSA9IEJhc2VTcGluZS5yZWZyZXNoV2l0aE5vZGUodGhpcy5lZmZlY3RTZWxlY3RlZCwgXCJzcGluZS9yYW5rY2FyZC9zZWxlY3QvZ2FtZXBsYXlfc2VsZWN0ZWRfc3BlY2lhbFwiKTtcbiAgfVxuICByZWFsU2hvd1NlbGVjdEVmZmVjdCgpIHtcbiAgICBzdXBlci5yZWFsU2hvd1NlbGVjdEVmZmVjdC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuaW1nU2VsZWN0ZWRDYXJkQmcuYWN0aXZlID0gZmFsc2U7XG4gIH1cbn0iXX0=
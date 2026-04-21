
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/tile2game/view/Tile2NodeBottomView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '23be7pelU1OhZkTq6yzzsK2', 'Tile2NodeBottomView');
// Scripts/gamePlay/tile2game/view/Tile2NodeBottomView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameInputEnum_1 = require("../../../simulator/constant/GameInputEnum");
var GameInteraction_1 = require("../../../GameInteraction/GameInteraction");
var BaseUI_1 = require("../../../framework/ui/BaseUI");
var DGameBtnClick_1 = require("../../../dot/DGameBtnClick");
var IUserData_1 = require("../../../user/IUserData");
var Tile2NodeBottomView = /** @class */ (function (_super) {
    __extends(Tile2NodeBottomView, _super);
    function Tile2NodeBottomView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._btnShuffle = null;
        _this._btnShuffleProp = null;
        _this._btnHitTips = null;
        _this._btnHitTipsProp = null;
        _this._btnRevert = null;
        _this._btnRevertProp = null;
        return _this;
    }
    Tile2NodeBottomView.prototype.onLoad = function () {
        var t, o, n;
        _super.prototype.onLoad.call(this);
        this._btnShuffle = this.node.getChildByName("btnShuffle");
        this._btnShuffleProp = null === (t = this._btnShuffle) || void 0 === t ? void 0 : t.getChildByName("propCornerItem");
        this._btnHitTips = this.node.getChildByName("btnPropHint");
        this._btnHitTipsProp = null === (o = this._btnHitTips) || void 0 === o ? void 0 : o.getChildByName("propCornerItem");
        this._btnRevert = this.node.getChildByName("btnPropRevert");
        this._btnRevertProp = null === (n = this._btnRevert) || void 0 === n ? void 0 : n.getChildByName("propCornerItem");
        if (this._btnShuffleProp) {
            this._btnShuffleProp.getChildByName("nodeNum").active = false;
            this._btnShuffleProp.getChildByName("nodeVideo").active = false;
        }
        if (this._btnHitTipsProp) {
            this._btnHitTipsProp.getChildByName("nodeNum").active = false;
            this._btnHitTipsProp.getChildByName("nodeVideo").active = false;
        }
        if (this._btnRevertProp) {
            this._btnRevertProp.getChildByName("nodeNum").active = false;
            this._btnRevertProp.getChildByName("nodeVideo").active = false;
        }
        this._btnShuffle && this.OnButtonClick(this._btnShuffle, this.onBtnShuffle.bind(this));
        this._btnHitTips && this.OnButtonClick(this._btnHitTips, this.onBtnHitTips.bind(this));
        this._btnRevert && this.OnButtonClick(this._btnRevert, this.onBtnRevert.bind(this));
    };
    Tile2NodeBottomView.prototype.updatePropNode = function (e, t) {
        if (e) {
            e.active = true;
            if (this.isPropUnlimit(e)) {
                this.setPropUnlimit(e);
            }
            else {
                if (this.isPropLocked(e)) {
                    this.setPropLocked(e);
                }
                else {
                    this.setUnlockState(e, t);
                }
            }
        }
    };
    Tile2NodeBottomView.prototype.isPropUnlimit = function () {
        return false;
    };
    Tile2NodeBottomView.prototype.isPropLocked = function () {
        return false;
    };
    Tile2NodeBottomView.prototype.setUnlockState = function (e, t) {
        var o = t <= 0;
        e.getChildByName("nodeNum").active = !o;
        e.getChildByName("nodeNum").getChildByName("labelNum").getComponent(cc.Label).string = t.toString();
        e.getChildByName("nodeVideo").active = o;
        e.getChildByName("nodeLock").active = false;
        e.getChildByName("nodeUnlimit").active = false;
        e.parent.getChildByName("GrayMask").active = false;
    };
    Tile2NodeBottomView.prototype.setPropUnlimit = function (e) {
        e.getChildByName("nodeNum").active = false;
        e.getChildByName("nodeVideo").active = false;
        e.getChildByName("nodeLock").active = false;
        e.getChildByName("nodeUnlimit").active = true;
        e.parent.getChildByName("GrayMask").active = false;
    };
    Tile2NodeBottomView.prototype.setPropLocked = function (e) {
        e.getChildByName("nodeNum").active = false;
        e.getChildByName("nodeVideo").active = false;
        e.getChildByName("nodeLock").active = true;
        e.getChildByName("nodeUnlimit").active = false;
        e.parent.getChildByName("GrayMask").active = true;
    };
    Tile2NodeBottomView.prototype.updateShuffleNum = function (e) {
        this.updatePropNode(this._btnShuffleProp, e);
    };
    Tile2NodeBottomView.prototype.updateHitTipsNum = function (e) {
        this.updatePropNode(this._btnHitTipsProp, e);
    };
    Tile2NodeBottomView.prototype.updateRevertNum = function (e) {
        this.updatePropNode(this._btnRevertProp, e);
    };
    Tile2NodeBottomView.prototype.onBtnShuffle = function () {
        var e, t;
        if (null === (t = null === (e = this.delegate) || void 0 === e ? void 0 : e.isDisplaying) || void 0 === t || !t.call(e)) {
            DGameBtnClick_1.DotGameBtnClick.dotGame(DGameBtnClick_1.EBoardClickType.Shuffle);
            if (this.isPropLocked(this._btnShuffleProp)) {
                this.showLockTips(IUserData_1.EItemType.Shuffle);
            }
            else {
                GameInteraction_1.GameInteraction.input({
                    inputType: GameInputEnum_1.EGameInputEnum.Tile2Shuffle,
                    from: GameInputEnum_1.EShuffleFrom.Normal,
                    isFree: false
                });
            }
        }
    };
    Tile2NodeBottomView.prototype.onBtnHitTips = function () {
        var e, t;
        if (null === (t = null === (e = this.delegate) || void 0 === e ? void 0 : e.isDisplaying) || void 0 === t || !t.call(e)) {
            DGameBtnClick_1.DotGameBtnClick.dotGame(DGameBtnClick_1.EBoardClickType.Hint);
            if (this.isPropLocked(this._btnHitTipsProp)) {
                this.showLockTips(IUserData_1.EItemType.Hint);
            }
            else {
                GameInteraction_1.GameInteraction.input({
                    inputType: GameInputEnum_1.EGameInputEnum.Tile2HitTips
                });
            }
        }
    };
    Tile2NodeBottomView.prototype.onBtnRevert = function () {
        var e, t;
        if (null === (t = null === (e = this.delegate) || void 0 === e ? void 0 : e.isDisplaying) || void 0 === t || !t.call(e)) {
            DGameBtnClick_1.DotGameBtnClick.dotGame(DGameBtnClick_1.EBoardClickType.Undo);
            if (this.isPropLocked(this._btnRevertProp)) {
                this.showLockTips(IUserData_1.EItemType.Undo);
            }
            else {
                GameInteraction_1.GameInteraction.input({
                    inputType: GameInputEnum_1.EGameInputEnum.Tile2Revert
                });
            }
        }
    };
    Tile2NodeBottomView.prototype.showLockTips = function () { };
    Tile2NodeBottomView.prefabUrl = "prefabs/game/Tile2nodeBottom";
    __decorate([
        mj.traitEvent("T2NodeBtmVw_onLoad")
    ], Tile2NodeBottomView.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("T2NodeBtmVw_isPropUnlimit")
    ], Tile2NodeBottomView.prototype, "isPropUnlimit", null);
    __decorate([
        mj.traitEvent("T2NodeBtmVw_isPropLocked")
    ], Tile2NodeBottomView.prototype, "isPropLocked", null);
    __decorate([
        mj.traitEvent("T2NodeBtmVw_showLockTips")
    ], Tile2NodeBottomView.prototype, "showLockTips", null);
    Tile2NodeBottomView = __decorate([
        mj.class
    ], Tile2NodeBottomView);
    return Tile2NodeBottomView;
}(BaseUI_1.default));
exports.default = Tile2NodeBottomView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L3RpbGUyZ2FtZS92aWV3L1RpbGUyTm9kZUJvdHRvbVZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJFQUF5RjtBQUN6Riw0RUFBMkU7QUFDM0UsdURBQWtEO0FBQ2xELDREQUE4RTtBQUM5RSxxREFBb0Q7QUFFcEQ7SUFBaUQsdUNBQU07SUFBdkQ7UUFBQSxxRUFtSUM7UUFsSUMsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIscUJBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIscUJBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsb0JBQWMsR0FBRyxJQUFJLENBQUM7O0lBNkh4QixDQUFDO0lBMUhDLG9DQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1osaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDckgsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksS0FB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QUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3ZILCtCQUFlLENBQUMsT0FBTyxDQUFDLCtCQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRTtnQkFDMUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxxQkFBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ25DO2lCQUFNO2dCQUNMLGlDQUFlLENBQUMsS0FBSyxDQUFDO29CQUNwQixTQUFTLEVBQUUsOEJBQWMsQ0FBQyxXQUFXO2lCQUN0QyxDQUFDLENBQUM7YUFDSjtTQUNGO0lBQ0gsQ0FBQztJQUVELDBDQUFZLEdBQVosY0FBZ0IsQ0FBQztJQTNIViw2QkFBUyxHQUFHLDhCQUE4QixDQUFDO0lBRWxEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQztxREF5Qm5DO0lBZ0JEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQywyQkFBMkIsQ0FBQzs0REFHMUM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQUM7MkRBR3pDO0lBMkVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQzsyREFDekI7SUFsSUUsbUJBQW1CO1FBRHZDLEVBQUUsQ0FBQyxLQUFLO09BQ1ksbUJBQW1CLENBbUl2QztJQUFELDBCQUFDO0NBbklELEFBbUlDLENBbklnRCxnQkFBTSxHQW1JdEQ7a0JBbklvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFR2FtZUlucHV0RW51bSwgRVNodWZmbGVGcm9tIH0gZnJvbSAnLi4vLi4vLi4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgR2FtZUludGVyYWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vR2FtZUludGVyYWN0aW9uL0dhbWVJbnRlcmFjdGlvbic7XG5pbXBvcnQgQmFzZVVJIGZyb20gJy4uLy4uLy4uL2ZyYW1ld29yay91aS9CYXNlVUknO1xuaW1wb3J0IHsgRG90R2FtZUJ0bkNsaWNrLCBFQm9hcmRDbGlja1R5cGUgfSBmcm9tICcuLi8uLi8uLi9kb3QvREdhbWVCdG5DbGljayc7XG5pbXBvcnQgeyBFSXRlbVR5cGUgfSBmcm9tICcuLi8uLi8uLi91c2VyL0lVc2VyRGF0YSc7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGUyTm9kZUJvdHRvbVZpZXcgZXh0ZW5kcyBCYXNlVUkge1xuICBfYnRuU2h1ZmZsZSA9IG51bGw7XG4gIF9idG5TaHVmZmxlUHJvcCA9IG51bGw7XG4gIF9idG5IaXRUaXBzID0gbnVsbDtcbiAgX2J0bkhpdFRpcHNQcm9wID0gbnVsbDtcbiAgX2J0blJldmVydCA9IG51bGw7XG4gIF9idG5SZXZlcnRQcm9wID0gbnVsbDtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFicy9nYW1lL1RpbGUybm9kZUJvdHRvbVwiO1xuICBAbWoudHJhaXRFdmVudChcIlQyTm9kZUJ0bVZ3X29uTG9hZFwiKVxuICBvbkxvYWQoKSB7XG4gICAgdmFyIHQsIG8sIG47XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fYnRuU2h1ZmZsZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0blNodWZmbGVcIik7XG4gICAgdGhpcy5fYnRuU2h1ZmZsZVByb3AgPSBudWxsID09PSAodCA9IHRoaXMuX2J0blNodWZmbGUpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9wQ29ybmVySXRlbVwiKTtcbiAgICB0aGlzLl9idG5IaXRUaXBzID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuUHJvcEhpbnRcIik7XG4gICAgdGhpcy5fYnRuSGl0VGlwc1Byb3AgPSBudWxsID09PSAobyA9IHRoaXMuX2J0bkhpdFRpcHMpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8uZ2V0Q2hpbGRCeU5hbWUoXCJwcm9wQ29ybmVySXRlbVwiKTtcbiAgICB0aGlzLl9idG5SZXZlcnQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5Qcm9wUmV2ZXJ0XCIpO1xuICAgIHRoaXMuX2J0blJldmVydFByb3AgPSBudWxsID09PSAobiA9IHRoaXMuX2J0blJldmVydCkgfHwgdm9pZCAwID09PSBuID8gdm9pZCAwIDogbi5nZXRDaGlsZEJ5TmFtZShcInByb3BDb3JuZXJJdGVtXCIpO1xuICAgIGlmICh0aGlzLl9idG5TaHVmZmxlUHJvcCkge1xuICAgICAgdGhpcy5fYnRuU2h1ZmZsZVByb3AuZ2V0Q2hpbGRCeU5hbWUoXCJub2RlTnVtXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5fYnRuU2h1ZmZsZVByb3AuZ2V0Q2hpbGRCeU5hbWUoXCJub2RlVmlkZW9cIikuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9idG5IaXRUaXBzUHJvcCkge1xuICAgICAgdGhpcy5fYnRuSGl0VGlwc1Byb3AuZ2V0Q2hpbGRCeU5hbWUoXCJub2RlTnVtXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5fYnRuSGl0VGlwc1Byb3AuZ2V0Q2hpbGRCeU5hbWUoXCJub2RlVmlkZW9cIikuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9idG5SZXZlcnRQcm9wKSB7XG4gICAgICB0aGlzLl9idG5SZXZlcnRQcm9wLmdldENoaWxkQnlOYW1lKFwibm9kZU51bVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2J0blJldmVydFByb3AuZ2V0Q2hpbGRCeU5hbWUoXCJub2RlVmlkZW9cIikuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuX2J0blNodWZmbGUgJiYgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMuX2J0blNodWZmbGUsIHRoaXMub25CdG5TaHVmZmxlLmJpbmQodGhpcykpO1xuICAgIHRoaXMuX2J0bkhpdFRpcHMgJiYgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMuX2J0bkhpdFRpcHMsIHRoaXMub25CdG5IaXRUaXBzLmJpbmQodGhpcykpO1xuICAgIHRoaXMuX2J0blJldmVydCAmJiB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5fYnRuUmV2ZXJ0LCB0aGlzLm9uQnRuUmV2ZXJ0LmJpbmQodGhpcykpO1xuICB9XG4gIHVwZGF0ZVByb3BOb2RlKGUsIHQpIHtcbiAgICBpZiAoZSkge1xuICAgICAgZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMuaXNQcm9wVW5saW1pdChlKSkge1xuICAgICAgICB0aGlzLnNldFByb3BVbmxpbWl0KGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuaXNQcm9wTG9ja2VkKGUpKSB7XG4gICAgICAgICAgdGhpcy5zZXRQcm9wTG9ja2VkKGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0VW5sb2NrU3RhdGUoZSwgdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUMk5vZGVCdG1Wd19pc1Byb3BVbmxpbWl0XCIpXG4gIGlzUHJvcFVubGltaXQoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVDJOb2RlQnRtVndfaXNQcm9wTG9ja2VkXCIpXG4gIGlzUHJvcExvY2tlZCgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc2V0VW5sb2NrU3RhdGUoZSwgdCkge1xuICAgIHZhciBvID0gdCA8PSAwO1xuICAgIGUuZ2V0Q2hpbGRCeU5hbWUoXCJub2RlTnVtXCIpLmFjdGl2ZSA9ICFvO1xuICAgIGUuZ2V0Q2hpbGRCeU5hbWUoXCJub2RlTnVtXCIpLmdldENoaWxkQnlOYW1lKFwibGFiZWxOdW1cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0LnRvU3RyaW5nKCk7XG4gICAgZS5nZXRDaGlsZEJ5TmFtZShcIm5vZGVWaWRlb1wiKS5hY3RpdmUgPSBvO1xuICAgIGUuZ2V0Q2hpbGRCeU5hbWUoXCJub2RlTG9ja1wiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICBlLmdldENoaWxkQnlOYW1lKFwibm9kZVVubGltaXRcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJHcmF5TWFza1wiKS5hY3RpdmUgPSBmYWxzZTtcbiAgfVxuICBzZXRQcm9wVW5saW1pdChlKSB7XG4gICAgZS5nZXRDaGlsZEJ5TmFtZShcIm5vZGVOdW1cIikuYWN0aXZlID0gZmFsc2U7XG4gICAgZS5nZXRDaGlsZEJ5TmFtZShcIm5vZGVWaWRlb1wiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICBlLmdldENoaWxkQnlOYW1lKFwibm9kZUxvY2tcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgZS5nZXRDaGlsZEJ5TmFtZShcIm5vZGVVbmxpbWl0XCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJHcmF5TWFza1wiKS5hY3RpdmUgPSBmYWxzZTtcbiAgfVxuICBzZXRQcm9wTG9ja2VkKGUpIHtcbiAgICBlLmdldENoaWxkQnlOYW1lKFwibm9kZU51bVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICBlLmdldENoaWxkQnlOYW1lKFwibm9kZVZpZGVvXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgIGUuZ2V0Q2hpbGRCeU5hbWUoXCJub2RlTG9ja1wiKS5hY3RpdmUgPSB0cnVlO1xuICAgIGUuZ2V0Q2hpbGRCeU5hbWUoXCJub2RlVW5saW1pdFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICBlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcIkdyYXlNYXNrXCIpLmFjdGl2ZSA9IHRydWU7XG4gIH1cbiAgdXBkYXRlU2h1ZmZsZU51bShlKSB7XG4gICAgdGhpcy51cGRhdGVQcm9wTm9kZSh0aGlzLl9idG5TaHVmZmxlUHJvcCwgZSk7XG4gIH1cbiAgdXBkYXRlSGl0VGlwc051bShlKSB7XG4gICAgdGhpcy51cGRhdGVQcm9wTm9kZSh0aGlzLl9idG5IaXRUaXBzUHJvcCwgZSk7XG4gIH1cbiAgdXBkYXRlUmV2ZXJ0TnVtKGUpIHtcbiAgICB0aGlzLnVwZGF0ZVByb3BOb2RlKHRoaXMuX2J0blJldmVydFByb3AsIGUpO1xuICB9XG4gIG9uQnRuU2h1ZmZsZSgpIHtcbiAgICB2YXIgZSwgdDtcbiAgICBpZiAobnVsbCA9PT0gKHQgPSBudWxsID09PSAoZSA9IHRoaXMuZGVsZWdhdGUpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuaXNEaXNwbGF5aW5nKSB8fCB2b2lkIDAgPT09IHQgfHwgIXQuY2FsbChlKSkge1xuICAgICAgRG90R2FtZUJ0bkNsaWNrLmRvdEdhbWUoRUJvYXJkQ2xpY2tUeXBlLlNodWZmbGUpO1xuICAgICAgaWYgKHRoaXMuaXNQcm9wTG9ja2VkKHRoaXMuX2J0blNodWZmbGVQcm9wKSkge1xuICAgICAgICB0aGlzLnNob3dMb2NrVGlwcyhFSXRlbVR5cGUuU2h1ZmZsZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBHYW1lSW50ZXJhY3Rpb24uaW5wdXQoe1xuICAgICAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uVGlsZTJTaHVmZmxlLFxuICAgICAgICAgIGZyb206IEVTaHVmZmxlRnJvbS5Ob3JtYWwsXG4gICAgICAgICAgaXNGcmVlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25CdG5IaXRUaXBzKCkge1xuICAgIHZhciBlLCB0O1xuICAgIGlmIChudWxsID09PSAodCA9IG51bGwgPT09IChlID0gdGhpcy5kZWxlZ2F0ZSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5pc0Rpc3BsYXlpbmcpIHx8IHZvaWQgMCA9PT0gdCB8fCAhdC5jYWxsKGUpKSB7XG4gICAgICBEb3RHYW1lQnRuQ2xpY2suZG90R2FtZShFQm9hcmRDbGlja1R5cGUuSGludCk7XG4gICAgICBpZiAodGhpcy5pc1Byb3BMb2NrZWQodGhpcy5fYnRuSGl0VGlwc1Byb3ApKSB7XG4gICAgICAgIHRoaXMuc2hvd0xvY2tUaXBzKEVJdGVtVHlwZS5IaW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEdhbWVJbnRlcmFjdGlvbi5pbnB1dCh7XG4gICAgICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5UaWxlMkhpdFRpcHNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uQnRuUmV2ZXJ0KCkge1xuICAgIHZhciBlLCB0O1xuICAgIGlmIChudWxsID09PSAodCA9IG51bGwgPT09IChlID0gdGhpcy5kZWxlZ2F0ZSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5pc0Rpc3BsYXlpbmcpIHx8IHZvaWQgMCA9PT0gdCB8fCAhdC5jYWxsKGUpKSB7XG4gICAgICBEb3RHYW1lQnRuQ2xpY2suZG90R2FtZShFQm9hcmRDbGlja1R5cGUuVW5kbyk7XG4gICAgICBpZiAodGhpcy5pc1Byb3BMb2NrZWQodGhpcy5fYnRuUmV2ZXJ0UHJvcCkpIHtcbiAgICAgICAgdGhpcy5zaG93TG9ja1RpcHMoRUl0ZW1UeXBlLlVuZG8pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgR2FtZUludGVyYWN0aW9uLmlucHV0KHtcbiAgICAgICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLlRpbGUyUmV2ZXJ0XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlQyTm9kZUJ0bVZ3X3Nob3dMb2NrVGlwc1wiKVxuICBzaG93TG9ja1RpcHMoKSB7fVxufSJdfQ==
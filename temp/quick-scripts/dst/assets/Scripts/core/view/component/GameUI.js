
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/view/component/GameUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '66c27dEKH9BJJRnyh8C5/PN', 'GameUI');
// Scripts/core/view/component/GameUI.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../framework/ui/BaseUI");
var DGameBtnClick_1 = require("../../../dot/DGameBtnClick");
var UserModel_1 = require("../../../gamePlay/user/UserModel");
var GameInputEnum_1 = require("../../../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../../simulator/constant/GameTypeEnums");
var GameUtils_1 = require("../../simulator/util/GameUtils");
var GameInteraction_1 = require("../../../GameInteraction/GameInteraction");
var ccclass = cc._decorator.ccclass;
var GameUI = /** @class */ (function (_super) {
    __extends(GameUI, _super);
    function GameUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnHitTipsProp = null;
        _this.btnShuffleProp = null;
        _this.btnSettings = null;
        _this.btnShuffle = null;
        _this.btnHitTips = null;
        _this._lblDailyChallengeDate = null;
        return _this;
    }
    GameUI.prototype.onLoad = function () {
        var e;
        this._matchNumLabel = this.node.getChildByName("nodeTop").getChildByName("labelCanMatchNum").getComponent(cc.Label);
        this._levelLabel = this.node.getChildByName("nodeTop").getChildByName("labelLevel").getComponent(cc.Label);
        this._levelDesc = this.node.getChildByName("nodeTop").getChildByName("levelDesc").getComponent(cc.Label);
        this.btnHitTipsProp = this.node.getChildByName("nodeBottom").getChildByName("btnPropHint").getChildByName("propCornerItem");
        this.btnShuffleProp = this.node.getChildByName("nodeBottom").getChildByName("btnShuffle").getChildByName("propCornerItem");
        this.btnSettings = this.node.getChildByName("nodeTop").getChildByName("btnSettings");
        this.btnShuffle = this.node.getChildByName("nodeBottom").getChildByName("btnShuffle");
        this.btnHitTips = this.node.getChildByName("nodeBottom").getChildByName("btnPropHint");
        this.btnSettings.getComponent(BaseUI_1.default).OnButtonClick(this.btnSettings, this.onBtnSettings.bind(this));
        this.btnShuffle.getComponent(BaseUI_1.default).OnButtonClick(this.btnShuffle, this.onBtnShuffle.bind(this));
        this.addHintBtnClick(this.btnHitTips, this.onBtnHitTips.bind(this));
        this._levelLabel.node.active = false;
        this._levelDesc.node.active = false;
        this.btnHitTipsProp.getChildByName("nodeNum").active = false;
        this.btnHitTipsProp.getChildByName("nodeVideo").active = false;
        this.btnShuffleProp.getChildByName("nodeNum").active = false;
        this.btnShuffleProp.getChildByName("nodeVideo").active = false;
        this._lblDailyChallengeDate = null === (e = this.node.getChildByName("nodeTop").getChildByName("lblDate")) || void 0 === e ? void 0 : e.getComponent(cc.Label);
        if (this._lblDailyChallengeDate) {
            this._lblDailyChallengeDate.node.active = false;
            this._lblDailyChallengeDate.string = "";
        }
    };
    GameUI.prototype.start = function () {
        mj.EventManager.on("language-changed", this.onLanguageChanged, this);
    };
    GameUI.prototype.onDestroy = function () {
        mj.EventManager.off("language-changed", this.onLanguageChanged, this);
    };
    GameUI.prototype.addHintBtnClick = function (e, t, o) {
        if (o === void 0) { o = {}; }
        e && e.getComponent(BaseUI_1.default).OnButtonClick(e, Object.assign({
            func: t
        }, o));
    };
    GameUI.prototype.onLanguageChanged = function () {
        var e = this;
        this.scheduleOnce(function () {
            e._adaptLvPos();
        }, 0);
    };
    GameUI.prototype.updateMatchNum = function (e) {
        this._matchNumLabel.string = e.toString();
    };
    GameUI.prototype.updateLevel = function (e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (!this._levelLabel.node.active) {
                this._levelLabel.node.active = true;
                this._levelDesc.node.active = true;
            }
            this._levelLabel.string = e.toString();
            this.handleLevelLable(this._levelLabel, this._levelDesc);
            this._adaptLvPos();
        }
    };
    GameUI.prototype._adaptLvPos = function () {
        if (this._levelDesc.node && this._levelDesc.node.active && cc.isValid(this._levelLabel.node)) {
            var e = this._levelDesc.node.width, t = this._levelDesc.node.x, o = this._levelDesc.node.y, n = this._levelLabel.node.y;
            Math.abs(o - n) < 15 && (this._levelLabel.node.x = t + e / 2 + 10);
        }
    };
    GameUI.prototype.handleLevelLable = function () { };
    GameUI.prototype.updateDailyChallengeDate = function (e) {
        if (this._lblDailyChallengeDate) {
            this._lblDailyChallengeDate.node.active || (this._lblDailyChallengeDate.node.active = true);
            var t = GameUtils_1.default.formatDateStringMonthDay(e) || "";
            this._lblDailyChallengeDate.string = t;
        }
    };
    GameUI.prototype.updateHitTipsProp = function (e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            var t = this.node.getChildByName("nodeBottom").active;
            t || (this.node.getChildByName("nodeBottom").active = true);
            var o = e <= 0;
            this.btnHitTipsProp.active = true;
            this.btnHitTipsProp.getChildByName("nodeNum").active = !o;
            this.btnHitTipsProp.getChildByName("nodeNum").getChildByName("labelNum").getComponent(cc.Label).string = e.toString();
            this.btnHitTipsProp.getChildByName("nodeVideo").active = o;
            this.node.getChildByName("nodeBottom").active = t;
        }
    };
    GameUI.prototype.updateShuffleProp = function (e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            var t = this.node.getChildByName("nodeBottom").active;
            t || (this.node.getChildByName("nodeBottom").active = true);
            var o = e <= 0;
            this.btnShuffleProp.active = true;
            this.btnShuffleProp.getChildByName("nodeNum").active = !o;
            this.btnShuffleProp.getChildByName("nodeNum").getChildByName("labelNum").getComponent(cc.Label).string = e.toString();
            this.btnShuffleProp.getChildByName("nodeVideo").active = o;
            this.node.getChildByName("nodeBottom").active = t;
        }
    };
    GameUI.prototype.onBtnHitTips = function () {
        DGameBtnClick_1.DotGameBtnClick.dotGame(DGameBtnClick_1.EBoardClickType.Hint);
        GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.HitTips
        });
    };
    GameUI.prototype.onBtnShuffle = function () {
        DGameBtnClick_1.DotGameBtnClick.dotGame(DGameBtnClick_1.EBoardClickType.Shuffle);
        GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.Shuffle,
            from: GameInputEnum_1.EShuffleFrom.Normal
        });
    };
    GameUI.prototype.onBtnSettings = function () {
        DGameBtnClick_1.DotGameBtnClick.dotGame(DGameBtnClick_1.EBoardClickType.Setting);
    };
    GameUI.prototype.getSettingsBtn = function () {
        return this.btnSettings;
    };
    __decorate([
        mj.traitEvent("GameUI_onLoad")
    ], GameUI.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("GameUI_addHintBtn")
    ], GameUI.prototype, "addHintBtnClick", null);
    __decorate([
        mj.traitEvent("GameUI_updateLevel")
    ], GameUI.prototype, "updateLevel", null);
    __decorate([
        mj.traitEvent("GameUI_adaptLv")
    ], GameUI.prototype, "_adaptLvPos", null);
    __decorate([
        mj.traitEvent("GameUI_handleLvLbl")
    ], GameUI.prototype, "handleLevelLable", null);
    __decorate([
        mj.traitEvent("GameUI_updateDCDate")
    ], GameUI.prototype, "updateDailyChallengeDate", null);
    __decorate([
        mj.traitEvent("GameUI_updateHitTipsProp")
    ], GameUI.prototype, "updateHitTipsProp", null);
    __decorate([
        mj.traitEvent("GameUI_updateShuffleProp")
    ], GameUI.prototype, "updateShuffleProp", null);
    __decorate([
        mj.traitEvent("GameUI_onBtnHitTips")
    ], GameUI.prototype, "onBtnHitTips", null);
    __decorate([
        mj.traitEvent("GameUI_onBtnShuffle")
    ], GameUI.prototype, "onBtnShuffle", null);
    __decorate([
        mj.traitEvent("GameUI_onBtnSettings")
    ], GameUI.prototype, "onBtnSettings", null);
    GameUI = __decorate([
        ccclass
    ], GameUI);
    return GameUI;
}(cc.Component));
exports.default = GameUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvdmlldy9jb21wb25lbnQvR2FtZVVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBa0Q7QUFDbEQsNERBQThFO0FBQzlFLDhEQUF5RDtBQUN6RCwyRUFBeUY7QUFDekYsd0VBQW9FO0FBQ3BFLDREQUF1RDtBQUN2RCw0RUFBMkU7QUFFekUsSUFBQSxPQUFPLEdBQ0wsRUFBRSxDQUFDLFVBQVUsUUFEUixDQUNTO0FBRWxCO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBc0lDO1FBcklDLG9CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLG9CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLDRCQUFzQixHQUFHLElBQUksQ0FBQzs7SUFnSWhDLENBQUM7SUE5SEMsdUJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxDQUFDO1FBQ04sSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BILElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0csSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6RyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM1SCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMzSCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN2RixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxnQkFBTSxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNyRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxnQkFBTSxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNsRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMs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Y2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gJy4uLy4uLy4uL2ZyYW1ld29yay91aS9CYXNlVUknO1xuaW1wb3J0IHsgRG90R2FtZUJ0bkNsaWNrLCBFQm9hcmRDbGlja1R5cGUgfSBmcm9tICcuLi8uLi8uLi9kb3QvREdhbWVCdG5DbGljayc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCB7IEVHYW1lSW5wdXRFbnVtLCBFU2h1ZmZsZUZyb20gfSBmcm9tICcuLi8uLi8uLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IEdhbWVVdGlscyBmcm9tICcuLi8uLi9zaW11bGF0b3IvdXRpbC9HYW1lVXRpbHMnO1xuaW1wb3J0IHsgR2FtZUludGVyYWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vR2FtZUludGVyYWN0aW9uL0dhbWVJbnRlcmFjdGlvbic7XG5jb25zdCB7XG4gIGNjY2xhc3Ncbn0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIGJ0bkhpdFRpcHNQcm9wID0gbnVsbDtcbiAgYnRuU2h1ZmZsZVByb3AgPSBudWxsO1xuICBidG5TZXR0aW5ncyA9IG51bGw7XG4gIGJ0blNodWZmbGUgPSBudWxsO1xuICBidG5IaXRUaXBzID0gbnVsbDtcbiAgX2xibERhaWx5Q2hhbGxlbmdlRGF0ZSA9IG51bGw7XG4gIEBtai50cmFpdEV2ZW50KFwiR2FtZVVJX29uTG9hZFwiKVxuICBvbkxvYWQoKSB7XG4gICAgdmFyIGU7XG4gICAgdGhpcy5fbWF0Y2hOdW1MYWJlbCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm5vZGVUb3BcIikuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJlbENhbk1hdGNoTnVtXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgdGhpcy5fbGV2ZWxMYWJlbCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm5vZGVUb3BcIikuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJlbExldmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgdGhpcy5fbGV2ZWxEZXNjID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibm9kZVRvcFwiKS5nZXRDaGlsZEJ5TmFtZShcImxldmVsRGVzY1wiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgIHRoaXMuYnRuSGl0VGlwc1Byb3AgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJub2RlQm90dG9tXCIpLmdldENoaWxkQnlOYW1lKFwiYnRuUHJvcEhpbnRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9wQ29ybmVySXRlbVwiKTtcbiAgICB0aGlzLmJ0blNodWZmbGVQcm9wID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibm9kZUJvdHRvbVwiKS5nZXRDaGlsZEJ5TmFtZShcImJ0blNodWZmbGVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9wQ29ybmVySXRlbVwiKTtcbiAgICB0aGlzLmJ0blNldHRpbmdzID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibm9kZVRvcFwiKS5nZXRDaGlsZEJ5TmFtZShcImJ0blNldHRpbmdzXCIpO1xuICAgIHRoaXMuYnRuU2h1ZmZsZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm5vZGVCb3R0b21cIikuZ2V0Q2hpbGRCeU5hbWUoXCJidG5TaHVmZmxlXCIpO1xuICAgIHRoaXMuYnRuSGl0VGlwcyA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm5vZGVCb3R0b21cIikuZ2V0Q2hpbGRCeU5hbWUoXCJidG5Qcm9wSGludFwiKTtcbiAgICB0aGlzLmJ0blNldHRpbmdzLmdldENvbXBvbmVudChCYXNlVUkpLk9uQnV0dG9uQ2xpY2sodGhpcy5idG5TZXR0aW5ncywgdGhpcy5vbkJ0blNldHRpbmdzLmJpbmQodGhpcykpO1xuICAgIHRoaXMuYnRuU2h1ZmZsZS5nZXRDb21wb25lbnQoQmFzZVVJKS5PbkJ1dHRvbkNsaWNrKHRoaXMuYnRuU2h1ZmZsZSwgdGhpcy5vbkJ0blNodWZmbGUuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5hZGRIaW50QnRuQ2xpY2sodGhpcy5idG5IaXRUaXBzLCB0aGlzLm9uQnRuSGl0VGlwcy5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLl9sZXZlbExhYmVsLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5fbGV2ZWxEZXNjLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5idG5IaXRUaXBzUHJvcC5nZXRDaGlsZEJ5TmFtZShcIm5vZGVOdW1cIikuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5idG5IaXRUaXBzUHJvcC5nZXRDaGlsZEJ5TmFtZShcIm5vZGVWaWRlb1wiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmJ0blNodWZmbGVQcm9wLmdldENoaWxkQnlOYW1lKFwibm9kZU51bVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmJ0blNodWZmbGVQcm9wLmdldENoaWxkQnlOYW1lKFwibm9kZVZpZGVvXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuX2xibERhaWx5Q2hhbGxlbmdlRGF0ZSA9IG51bGwgPT09IChlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibm9kZVRvcFwiKS5nZXRDaGlsZEJ5TmFtZShcImxibERhdGVcIikpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICBpZiAodGhpcy5fbGJsRGFpbHlDaGFsbGVuZ2VEYXRlKSB7XG4gICAgICB0aGlzLl9sYmxEYWlseUNoYWxsZW5nZURhdGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2xibERhaWx5Q2hhbGxlbmdlRGF0ZS5zdHJpbmcgPSBcIlwiO1xuICAgIH1cbiAgfVxuICBzdGFydCgpIHtcbiAgICBtai5FdmVudE1hbmFnZXIub24oXCJsYW5ndWFnZS1jaGFuZ2VkXCIsIHRoaXMub25MYW5ndWFnZUNoYW5nZWQsIHRoaXMpO1xuICB9XG4gIG9uRGVzdHJveSgpIHtcbiAgICBtai5FdmVudE1hbmFnZXIub2ZmKFwibGFuZ3VhZ2UtY2hhbmdlZFwiLCB0aGlzLm9uTGFuZ3VhZ2VDaGFuZ2VkLCB0aGlzKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkdhbWVVSV9hZGRIaW50QnRuXCIpXG4gIGFkZEhpbnRCdG5DbGljayhlLCB0LCBvID0ge30pIHtcbiAgICBlICYmIGUuZ2V0Q29tcG9uZW50KEJhc2VVSSkuT25CdXR0b25DbGljayhlLCBPYmplY3QuYXNzaWduKHtcbiAgICAgIGZ1bmM6IHRcbiAgICB9LCBvKSk7XG4gIH1cbiAgb25MYW5ndWFnZUNoYW5nZWQoKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGUuX2FkYXB0THZQb3MoKTtcbiAgICB9LCAwKTtcbiAgfVxuICB1cGRhdGVNYXRjaE51bShlKSB7XG4gICAgdGhpcy5fbWF0Y2hOdW1MYWJlbC5zdHJpbmcgPSBlLnRvU3RyaW5nKCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJHYW1lVUlfdXBkYXRlTGV2ZWxcIilcbiAgdXBkYXRlTGV2ZWwoZSkge1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSAhPT0gTWpHYW1lVHlwZS5DbGFzc2ljKSB7XG4gICAgICBpZiAoIXRoaXMuX2xldmVsTGFiZWwubm9kZS5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5fbGV2ZWxMYWJlbC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuX2xldmVsRGVzYy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICB9XG4gICAgICB0aGlzLl9sZXZlbExhYmVsLnN0cmluZyA9IGUudG9TdHJpbmcoKTtcbiAgICAgIHRoaXMuaGFuZGxlTGV2ZWxMYWJsZSh0aGlzLl9sZXZlbExhYmVsLCB0aGlzLl9sZXZlbERlc2MpO1xuICAgICAgdGhpcy5fYWRhcHRMdlBvcygpO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkdhbWVVSV9hZGFwdEx2XCIpXG4gIF9hZGFwdEx2UG9zKCkge1xuICAgIGlmICh0aGlzLl9sZXZlbERlc2Mubm9kZSAmJiB0aGlzLl9sZXZlbERlc2Mubm9kZS5hY3RpdmUgJiYgY2MuaXNWYWxpZCh0aGlzLl9sZXZlbExhYmVsLm5vZGUpKSB7XG4gICAgICB2YXIgZSA9IHRoaXMuX2xldmVsRGVzYy5ub2RlLndpZHRoLFxuICAgICAgICB0ID0gdGhpcy5fbGV2ZWxEZXNjLm5vZGUueCxcbiAgICAgICAgbyA9IHRoaXMuX2xldmVsRGVzYy5ub2RlLnksXG4gICAgICAgIG4gPSB0aGlzLl9sZXZlbExhYmVsLm5vZGUueTtcbiAgICAgIE1hdGguYWJzKG8gLSBuKSA8IDE1ICYmICh0aGlzLl9sZXZlbExhYmVsLm5vZGUueCA9IHQgKyBlIC8gMiArIDEwKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJHYW1lVUlfaGFuZGxlTHZMYmxcIilcbiAgaGFuZGxlTGV2ZWxMYWJsZSgpIHt9XG4gIEBtai50cmFpdEV2ZW50KFwiR2FtZVVJX3VwZGF0ZURDRGF0ZVwiKVxuICB1cGRhdGVEYWlseUNoYWxsZW5nZURhdGUoZSkge1xuICAgIGlmICh0aGlzLl9sYmxEYWlseUNoYWxsZW5nZURhdGUpIHtcbiAgICAgIHRoaXMuX2xibERhaWx5Q2hhbGxlbmdlRGF0ZS5ub2RlLmFjdGl2ZSB8fCAodGhpcy5fbGJsRGFpbHlDaGFsbGVuZ2VEYXRlLm5vZGUuYWN0aXZlID0gdHJ1ZSk7XG4gICAgICB2YXIgdCA9IEdhbWVVdGlscy5mb3JtYXREYXRlU3RyaW5nTW9udGhEYXkoZSkgfHwgXCJcIjtcbiAgICAgIHRoaXMuX2xibERhaWx5Q2hhbGxlbmdlRGF0ZS5zdHJpbmcgPSB0O1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkdhbWVVSV91cGRhdGVIaXRUaXBzUHJvcFwiKVxuICB1cGRhdGVIaXRUaXBzUHJvcChlKSB7XG4gICAgaWYgKFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpICE9PSBNakdhbWVUeXBlLkNsYXNzaWMpIHtcbiAgICAgIHZhciB0ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibm9kZUJvdHRvbVwiKS5hY3RpdmU7XG4gICAgICB0IHx8ICh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJub2RlQm90dG9tXCIpLmFjdGl2ZSA9IHRydWUpO1xuICAgICAgdmFyIG8gPSBlIDw9IDA7XG4gICAgICB0aGlzLmJ0bkhpdFRpcHNQcm9wLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLmJ0bkhpdFRpcHNQcm9wLmdldENoaWxkQnlOYW1lKFwibm9kZU51bVwiKS5hY3RpdmUgPSAhbztcbiAgICAgIHRoaXMuYnRuSGl0VGlwc1Byb3AuZ2V0Q2hpbGRCeU5hbWUoXCJub2RlTnVtXCIpLmdldENoaWxkQnlOYW1lKFwibGFiZWxOdW1cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBlLnRvU3RyaW5nKCk7XG4gICAgICB0aGlzLmJ0bkhpdFRpcHNQcm9wLmdldENoaWxkQnlOYW1lKFwibm9kZVZpZGVvXCIpLmFjdGl2ZSA9IG87XG4gICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJub2RlQm90dG9tXCIpLmFjdGl2ZSA9IHQ7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiR2FtZVVJX3VwZGF0ZVNodWZmbGVQcm9wXCIpXG4gIHVwZGF0ZVNodWZmbGVQcm9wKGUpIHtcbiAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgIT09IE1qR2FtZVR5cGUuQ2xhc3NpYykge1xuICAgICAgdmFyIHQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJub2RlQm90dG9tXCIpLmFjdGl2ZTtcbiAgICAgIHQgfHwgKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm5vZGVCb3R0b21cIikuYWN0aXZlID0gdHJ1ZSk7XG4gICAgICB2YXIgbyA9IGUgPD0gMDtcbiAgICAgIHRoaXMuYnRuU2h1ZmZsZVByb3AuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuYnRuU2h1ZmZsZVByb3AuZ2V0Q2hpbGRCeU5hbWUoXCJub2RlTnVtXCIpLmFjdGl2ZSA9ICFvO1xuICAgICAgdGhpcy5idG5TaHVmZmxlUHJvcC5nZXRDaGlsZEJ5TmFtZShcIm5vZGVOdW1cIikuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJlbE51bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGUudG9TdHJpbmcoKTtcbiAgICAgIHRoaXMuYnRuU2h1ZmZsZVByb3AuZ2V0Q2hpbGRCeU5hbWUoXCJub2RlVmlkZW9cIikuYWN0aXZlID0gbztcbiAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm5vZGVCb3R0b21cIikuYWN0aXZlID0gdDtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJHYW1lVUlfb25CdG5IaXRUaXBzXCIpXG4gIG9uQnRuSGl0VGlwcygpIHtcbiAgICBEb3RHYW1lQnRuQ2xpY2suZG90R2FtZShFQm9hcmRDbGlja1R5cGUuSGludCk7XG4gICAgR2FtZUludGVyYWN0aW9uLmlucHV0KHtcbiAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uSGl0VGlwc1xuICAgIH0pO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiR2FtZVVJX29uQnRuU2h1ZmZsZVwiKVxuICBvbkJ0blNodWZmbGUoKSB7XG4gICAgRG90R2FtZUJ0bkNsaWNrLmRvdEdhbWUoRUJvYXJkQ2xpY2tUeXBlLlNodWZmbGUpO1xuICAgIEdhbWVJbnRlcmFjdGlvbi5pbnB1dCh7XG4gICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLlNodWZmbGUsXG4gICAgICBmcm9tOiBFU2h1ZmZsZUZyb20uTm9ybWFsXG4gICAgfSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJHYW1lVUlfb25CdG5TZXR0aW5nc1wiKVxuICBvbkJ0blNldHRpbmdzKCkge1xuICAgIERvdEdhbWVCdG5DbGljay5kb3RHYW1lKEVCb2FyZENsaWNrVHlwZS5TZXR0aW5nKTtcbiAgfVxuICBnZXRTZXR0aW5nc0J0bigpIHtcbiAgICByZXR1cm4gdGhpcy5idG5TZXR0aW5ncztcbiAgfVxufSJdfQ==
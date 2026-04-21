"use strict";
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
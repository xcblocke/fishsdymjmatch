"use strict";
cc._RF.push(module, '742587oxV9NHJY3cg1n1zGQ', 'Tile2NodeTopView');
// Scripts/gamePlay/tile2game/view/Tile2NodeTopView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../core/simulator/constant/GameTypeEnums");
var Tile2ScoreItem_1 = require("../../../core/view/items/Tile2ScoreItem");
var ControllerManager_1 = require("../../../framework/manager/ControllerManager");
var BaseUI_1 = require("../../../framework/ui/BaseUI");
var JumpManager_1 = require("../../../base/jump/JumpManager");
var DGameBtnClick_1 = require("../../../dot/DGameBtnClick");
var DGamePageShow_1 = require("../../../dot/DGamePageShow");
var Tile2NodeTopView = /** @class */ (function (_super) {
    __extends(Tile2NodeTopView, _super);
    function Tile2NodeTopView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._lblLevel = null;
        _this._lblMatchNum = null;
        _this._btnBack = null;
        _this._btnSettings = null;
        _this._scoreItem = null;
        return _this;
    }
    Object.defineProperty(Tile2NodeTopView.prototype, "btnBack", {
        get: function () {
            return this._btnBack;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2NodeTopView.prototype, "btnSettings", {
        get: function () {
            return this._btnSettings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2NodeTopView.prototype, "scoreItem", {
        get: function () {
            return this._scoreItem;
        },
        enumerable: false,
        configurable: true
    });
    Tile2NodeTopView.prototype.onLoad = function () {
        var t, o;
        _super.prototype.onLoad.call(this);
        this._lblLevel = null === (t = this.node.getChildByName("labelLevel")) || void 0 === t ? void 0 : t.getComponent(cc.Label);
        this._lblMatchNum = null === (o = this.node.getChildByName("labelCanMatchNum")) || void 0 === o ? void 0 : o.getComponent(cc.Label);
        this._btnBack = this.node.getChildByName("btnBack");
        this._btnSettings = this.node.getChildByName("btnSettings");
        if (this._btnBack) {
            this.OnButtonClick(this._btnBack, this.onBtnBack.bind(this));
            this._btnBack.active = false;
        }
        this._btnSettings && this.OnButtonClick(this._btnSettings, this.onBtnSettings.bind(this));
        var n = this.node.getChildByName("nodeScore");
        n && (this._scoreItem = n.getComponent(Tile2ScoreItem_1.default) || n.addComponent(Tile2ScoreItem_1.default));
    };
    Tile2NodeTopView.prototype.updateLevel = function (e) {
        this._lblLevel && (this._lblLevel.string = e.toString());
    };
    Tile2NodeTopView.prototype.updateMatchNum = function (e) {
        this._lblMatchNum && (this._lblMatchNum.string = e.toString());
    };
    Tile2NodeTopView.prototype.updateScore = function (e, t, o) {
        var n;
        null === (n = this._scoreItem) || void 0 === n || n.updateScore(e, t, o);
    };
    Tile2NodeTopView.prototype.resetScore = function () {
        var e;
        null === (e = this._scoreItem) || void 0 === e || e.resetForRestart();
    };
    Tile2NodeTopView.prototype.onBtnBack = function () {
        var e, t;
        if (null === (t = null === (e = this.delegate) || void 0 === e ? void 0 : e.isDisplaying) || void 0 === t || !t.call(e)) {
            mj.audioManager.stopAllEffect();
            var o = ControllerManager_1.default.getInstance().getTopSceneController();
            if (o && o.gameType === GameTypeEnums_1.MjGameType.Travel)
                ControllerManager_1.default.getInstance().pushViewByController("TravelMapController", {
                    isReplace: true
                });
            else if (o && o.gameType === GameTypeEnums_1.MjGameType.DailyChallenge)
                ControllerManager_1.default.getInstance().pushViewByController("DailyController", {
                    isReplace: true,
                    isShowAction: false,
                    isReuse: false
                });
            else {
                JumpManager_1.default.getInstance().jumpToHall();
                o && o.gameType === GameTypeEnums_1.MjGameType.Normal && DGamePageShow_1.DotGamePageShow.dot(DGamePageShow_1.EPageShowType.LevelToMainPage);
            }
            DGameBtnClick_1.DotGameBtnClick.dotGame(DGameBtnClick_1.EBoardClickType.Escape);
        }
    };
    Tile2NodeTopView.prototype.onBtnSettings = function () {
        var e, t;
        if (null === (t = null === (e = this.delegate) || void 0 === e ? void 0 : e.isDisplaying) || void 0 === t || !t.call(e)) {
            ControllerManager_1.default.getInstance().pushViewByController("UISettingsDialogController", {});
            DGameBtnClick_1.DotGameBtnClick.dotGame(DGameBtnClick_1.EBoardClickType.Setting);
        }
    };
    Tile2NodeTopView.prefabUrl = "prefabs/game/Tile2nodeTop";
    __decorate([
        mj.traitEvent("T2TopVw_onLoad")
    ], Tile2NodeTopView.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("T2TopVw_onBtnBack")
    ], Tile2NodeTopView.prototype, "onBtnBack", null);
    Tile2NodeTopView = __decorate([
        mj.class
    ], Tile2NodeTopView);
    return Tile2NodeTopView;
}(BaseUI_1.default));
exports.default = Tile2NodeTopView;

cc._RF.pop();
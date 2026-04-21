"use strict";
cc._RF.push(module, 'ce289xEe0hP/KumozhTgRVk', 'RankIntroduceView');
// subpackages/l_rank/Scripts/util/RankIntroduceView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIView_1 = require("../../../../Scripts/framework/ui/UIView");
var I18NStrings_1 = require("../../../../Scripts/framework/data/I18NStrings");
var RankModel_1 = require("../RankModel");
var CountdownComponent_1 = require("../component/CountdownComponent");
var BaseSprite_1 = require("../../../../Scripts/gamePlay/base/ui/BaseSprite");
var DGameBtnClick_1 = require("../../../../Scripts/dot/DGameBtnClick");
var Config_1 = require("../../../../Scripts/Config");
var RankEnums_1 = require("./RankEnums");
var CardUtil_1 = require("../../../../Scripts/gamePlay/user/CardUtil");
var UserModel_1 = require("../../../../Scripts/gamePlay/user/UserModel");
var RankIntroduceView = /** @class */ (function (_super) {
    __extends(RankIntroduceView, _super);
    function RankIntroduceView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._btnClose = null;
        _this._btnCollect = null;
        _this._labelCollect = null;
        _this._labelTitle = null;
        _this._labelDesc = null;
        _this._labelTime = null;
        _this._cardBgNode = null;
        _this._spriteCard = null;
        _this._isBtnCollect = false;
        return _this;
    }
    RankIntroduceView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._btnClose = cc.find("content/btn_close", this.node);
        this._btnCollect = cc.find("content/btn_collect", this.node);
        this._labelCollect = cc.find("content/lbl_Collect", this._btnCollect);
        this._labelTitle = cc.find("content/title", this.node);
        this._labelDesc = cc.find("content/cnt", this.node);
        this._labelTime = cc.find("content/time_node/time", this.node);
        this._cardBgNode = cc.find("content/mj_bg", this.node);
        this._spriteCard = cc.find("content/mj_bg/flower", this.node);
        this.registerButtons();
    };
    RankIntroduceView.prototype.registerButtons = function () {
        this._btnClose && this.OnButtonClick(this._btnClose, this.onCloseClick.bind(this));
        this._btnCollect && this.OnButtonClick(this._btnCollect, this.onCollectClick.bind(this));
    };
    RankIntroduceView.prototype.getMessageListeners = function () {
        var _t = {};
        _t[Config_1.EVT_MSG_KEY_EVENT_SHOW] = this.onGameShow.bind(this);
        _t[Config_1.EVT_MSG_KEY_EVENT_HIDE] = this.onGameHide.bind(this);
        return _t;
    };
    RankIntroduceView.prototype.onGameShow = function () {
        this.updateCountdown();
    };
    RankIntroduceView.prototype.onGameHide = function () { };
    RankIntroduceView.prototype.show = function (t) {
        mj.audioManager.playEffect(RankEnums_1.ERankAudioID.BlankCom);
        this._isBtnCollect = t.isBtnCollect;
        var e = this._isBtnCollect ? "Collect" : "OK", o = this._isBtnCollect ? "LeaderBoard_Start_GoTo" : "LeaderBoard_HowToPlay_Btn_OK", n = RankModel_1.default.getInstance().getCurBoardData();
        if (n) {
            var a = I18NStrings_1.default.get(n.Name, "Gardening Master");
            I18NStrings_1.default.setText(this._labelTitle, "Gardening Master", n.Name);
            I18NStrings_1.default.setText(this._labelDesc, "{0} has begun!\nCollect Golden Tiles, race up the leaderboard, and win amazing rewards!", "LeaderBoard_Start_Des", [a]);
            I18NStrings_1.default.setText(this._labelCollect, e, o);
            this.updateImgCard(this._spriteCard);
        }
        var i = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_special_mj_2"), r = i.path, c = i.bundleName, p = i.fromAtlas;
        BaseSprite_1.default.refreshWithNode(this._cardBgNode, r, p, false, c);
        this.updateCountdown();
    };
    RankIntroduceView.prototype.updateImgCard = function (t) {
        var e = UserModel_1.default.getInstance().getRankCardResName(), o = CardUtil_1.default.getAtlasPathAndBundleName(e), n = o.path, a = o.bundleName, i = o.fromAtlas;
        BaseSprite_1.default.refreshWithNode(t, n, i, false, a);
    };
    RankIntroduceView.prototype.getCDComp = function () {
        var t;
        return null === (t = this._labelTime) || void 0 === t ? void 0 : t.getComponent(CountdownComponent_1.default);
    };
    RankIntroduceView.prototype.updateCountdown = function () {
        var t = this._labelTime.getComponent(CountdownComponent_1.default), e = RankModel_1.default.getInstance().getLeftTime();
        if (e > 0) {
            t.setRemainTime(e, this.finishCountdown.bind(this));
        }
        else {
            this.finishCountdown();
        }
    };
    RankIntroduceView.prototype.finishCountdown = function () {
        this.delegate.close();
    };
    RankIntroduceView.prototype.onCloseClick = function () {
        this.delegate.close();
        DGameBtnClick_1.DotGameBtnClick.dotRank(DGameBtnClick_1.ERankClickType.ClickIntroduceClose);
    };
    RankIntroduceView.prototype.onCollectClick = function () {
        if (this._isBtnCollect) {
            this.collect();
            DGameBtnClick_1.DotGameBtnClick.dotRank(DGameBtnClick_1.ERankClickType.ClickIntroduceCollect);
        }
        this.delegate.close();
    };
    RankIntroduceView.prototype.collect = function () {
        this.delegate.collect();
    };
    RankIntroduceView.prototype.setContent = function () { };
    RankIntroduceView.prototype.onDestroy = function () {
        _super.prototype.onDestroy && _super.prototype.onDestroy.call(this);
    };
    RankIntroduceView.prefabUrl = "prefabs/rank/RankIntroduceView";
    RankIntroduceView.bundleName = "mainRes";
    __decorate([
        mj.traitEvent("RankIntroVw_show")
    ], RankIntroduceView.prototype, "show", null);
    __decorate([
        mj.traitEvent("RankIntroVw_updImgCard")
    ], RankIntroduceView.prototype, "updateImgCard", null);
    __decorate([
        mj.traitEvent("RankIntroVw_closeClk")
    ], RankIntroduceView.prototype, "onCloseClick", null);
    __decorate([
        mj.traitEvent("RankIntroVw_collect")
    ], RankIntroduceView.prototype, "collect", null);
    RankIntroduceView = __decorate([
        mj.class
    ], RankIntroduceView);
    return RankIntroduceView;
}(UIView_1.default));
exports.default = RankIntroduceView;

cc._RF.pop();
"use strict";
cc._RF.push(module, '1aedbHlzhpNrp4oDbSa95Ok', 'HallRankBtn');
// subpackages/l_rank/Scripts/component/HallRankBtn.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../../Scripts/framework/ui/BaseUI");
var ControllerManager_1 = require("../../../../Scripts/framework/manager/ControllerManager");
var CountdownComponent_1 = require("./CountdownComponent");
var RankModel_1 = require("../RankModel");
var I18NStrings_1 = require("../../../../Scripts/framework/data/I18NStrings");
var DGameBtnClick_1 = require("../../../../Scripts/dot/DGameBtnClick");
var Config_1 = require("../../../../Scripts/Config");
var BaseSprite_1 = require("../../../../Scripts/gamePlay/base/ui/BaseSprite");
var BaseSpine_1 = require("../../../../Scripts/gamePlay/base/ui/BaseSpine");
var CardUtil_1 = require("../../../../Scripts/gamePlay/user/CardUtil");
var UserModel_1 = require("../../../../Scripts/gamePlay/user/UserModel");
var HallRankBtn = /** @class */ (function (_super) {
    __extends(HallRankBtn, _super);
    function HallRankBtn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._labelTime = null;
        _this._labelRankNode = null;
        _this._cardSprNode = null;
        _this._aniSpineDown = null;
        _this._aniSpineUp = null;
        _this._animProxy = null;
        return _this;
    }
    HallRankBtn.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.OnButtonClick(this.node, this.onBtnClick.bind(this));
        this._labelTime = this.node.getChildByName("Bg").getChildByName("Label");
        this._labelRankNode = this.node.getChildByName("Bg").getChildByName("Rank");
        this._cardSprNode = this.node.getChildByName("bg").getChildByName("Card");
        this._aniSpineDown = this.node.getChildByName("bg").getChildByName("down").getComponent(sp.Skeleton);
        this._aniSpineUp = this.node.getChildByName("bg").getChildByName("up").getComponent(sp.Skeleton);
        this.initComponents();
        this.init();
    };
    HallRankBtn.prototype.onEnable = function () {
        _super.prototype.onEnable && _super.prototype.onEnable.call(this);
        this.dispatchEvent("MsgEnableHomeBtn", {
            type: "Rank",
            node: this.node
        });
    };
    HallRankBtn.prototype.onDisable = function () {
        _super.prototype.onDisable && _super.prototype.onDisable.call(this);
    };
    HallRankBtn.prototype.initComponents = function () {
        var t = this;
        this._animProxy = BaseSpine_1.default.refreshWithNode(this._aniSpineDown.node);
        this._animProxy.reset("");
        this._animProxy.markReady("");
        this._animProxy.attachNode("photo", function () {
            return t._cardSprNode;
        });
    };
    HallRankBtn.prototype.init = function () {
        this.updateAll();
    };
    HallRankBtn.prototype.updateRemainTime = function () {
        var t;
        if (cc.isValid(this._labelTime)) {
            var e = RankModel_1.default.getInstance().getLeftTime();
            if (e > 0) {
                null === (t = this._labelTime.getComponent(CountdownComponent_1.default)) || void 0 === t || t.setRemainTime(e, this.finishCountdown.bind(this));
            }
            else {
                this.closeOutCD();
            }
        }
    };
    HallRankBtn.prototype.updateAll = function () {
        this.updateRemainTime();
        this.updateRank();
        this.updateImgCard(this._cardSprNode);
    };
    HallRankBtn.prototype.updateImgCard = function (t) {
        if (cc.isValid(t)) {
            var e = UserModel_1.default.getInstance().getRankCardResName(), o = CardUtil_1.default.getAtlasPathAndBundleName(e), n = o.path, a = o.bundleName, i = o.fromAtlas;
            BaseSprite_1.default.refreshWithNode(t, n, i, null, a);
        }
    };
    HallRankBtn.prototype.closeOutCD = function () {
        this.node.destroy();
    };
    HallRankBtn.prototype.finishCountdown = function () {
        this.node.destroy();
    };
    HallRankBtn.prototype.updateRank = function () {
        if (cc.isValid(this._labelRankNode))
            if (RankModel_1.default.getInstance().isOnList()) {
                var t = RankModel_1.default.getInstance().getSelfRank();
                I18NStrings_1.default.setText(this._labelRankNode, t + "", "LeaderBoard_Entrance_Num", [t]);
            }
            else
                this._labelRankNode.getComponent(cc.Label).string = "";
    };
    HallRankBtn.prototype.onBtnClick = function () {
        DGameBtnClick_1.DotGameBtnClick.dotRank(DGameBtnClick_1.ERankClickType.ClickHallRank);
        this.dispatchEvent("RankModel_updTime");
        ControllerManager_1.default.getInstance().pushViewByController("RankController", {
            isReuse: true,
            isShowAction: false
        });
    };
    HallRankBtn.prototype.getMessageListeners = function () {
        var _t = {};
        _t[Config_1.EVT_MSG_KEY_EVENT_SHOW] = this.onGameShow.bind(this);
        _t[Config_1.EVT_MSG_KEY_EVENT_HIDE] = this.onGameHide.bind(this);
        return _t;
    };
    HallRankBtn.prototype.onGameShow = function () {
        this.updateRemainTime();
    };
    HallRankBtn.prototype.onGameHide = function () { };
    HallRankBtn.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
    };
    HallRankBtn.prefabUrl = "prefabs/rank/HallRankBtn";
    __decorate([
        mj.traitEvent("RankBtn_onLoad")
    ], HallRankBtn.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("RankBtn_initComp")
    ], HallRankBtn.prototype, "initComponents", null);
    __decorate([
        mj.traitEvent("RankBtn_updateAll")
    ], HallRankBtn.prototype, "updateAll", null);
    __decorate([
        mj.traitEvent("RankBtn_updImgCard")
    ], HallRankBtn.prototype, "updateImgCard", null);
    __decorate([
        mj.traitEvent("RankBtn_closeOutCD")
    ], HallRankBtn.prototype, "closeOutCD", null);
    __decorate([
        mj.traitEvent("RankBtn_finishCD")
    ], HallRankBtn.prototype, "finishCountdown", null);
    __decorate([
        mj.traitEvent("RankBtn_click")
    ], HallRankBtn.prototype, "onBtnClick", null);
    HallRankBtn = __decorate([
        mj.class
    ], HallRankBtn);
    return HallRankBtn;
}(BaseUI_1.default));
exports.default = HallRankBtn;

cc._RF.pop();
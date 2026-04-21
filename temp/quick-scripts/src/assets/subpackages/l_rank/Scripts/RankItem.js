"use strict";
cc._RF.push(module, '02f99IKPx5GkacmcT4Xfu2q', 'RankItem');
// subpackages/l_rank/Scripts/RankItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseCell_1 = require("../../../Scripts/base/ui/BaseCell");
var RankModel_1 = require("./RankModel");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var UserInfoManager_1 = require("../../../Scripts/gamePlay/base/user/UserInfoManager");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var RankItem = /** @class */ (function (_super) {
    __extends(RankItem, _super);
    function RankItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._delegate = null;
        _this.curFont = null;
        return _this;
    }
    RankItem.prototype.uiOnLoad = function () {
        var t;
        this._rankLabel = cc.find("p/rank", this._cellUI).getComponent(cc.Label);
        this._avatarSprite = cc.find("p/head/avatar", this._cellUI).getComponent(cc.Sprite);
        this._frameSprite = cc.find("p/head/frame", this._cellUI).getComponent(cc.Sprite);
        this._nameLabel = cc.find("p/name", this._cellUI).getComponent(cc.Label);
        this._scoreLabel = null === (t = cc.find("p/count", this._cellUI)) || void 0 === t ? void 0 : t.getComponent(cc.Label);
        this._cardBgNode = cc.find("p/card_bg", this._cellUI);
        this._cardSpriteNode = cc.find("p/card_bg/card", this._cellUI);
        this._boxBtnNode = cc.find("p/BoxBtn", this._cellUI);
        this._unselectedBgNode = cc.find("p/bg/unselect", this._cellUI);
        this._selectedBgNode = cc.find("p/bg/select", this._cellUI);
        this._selectedScoreBgNode = cc.find("p/score_node/select", this._cellUI);
        this._unselectedScoreBgNode = cc.find("p/score_node/unselect", this._cellUI);
        this.registerEvents();
        this.curFont = this._nameLabel.font;
    };
    RankItem.prototype.getMessageListeners = function () {
        var _t = {};
        _t.msg_rankRefreshSelf = this.onRefreshSelf.bind(this);
        return _t;
    };
    RankItem.prototype.onRefreshSelf = function () {
        if (this._data && this.isMySelf()) {
            var t = RankModel_1.default.getInstance().getRankName(this._data, true);
            this._nameLabel.string = t;
            var e = UserInfoManager_1.default.getInstance().isKoreanName(t), o = UserInfoManager_1.default.getInstance().isRussianName(t);
            if (e || o) {
                this._nameLabel.useSystemFont = true;
                this._nameLabel.font = null;
            }
            else {
                this._nameLabel.useSystemFont = false;
                this._nameLabel.font = this.curFont;
            }
            var n = RankModel_1.default.getInstance().getRankAvatarAndFrame(this._data, true), a = n.avatarId, i = n.frameId;
            this.updateAvatarAndFrame(a, i);
        }
    };
    RankItem.prototype.registerEvents = function () {
        this.OnButtonClick(this._boxBtnNode, this.onBtnTipsClick.bind(this));
    };
    RankItem.prototype.onBtnTipsClick = function () { };
    RankItem.prototype.getBoxBtnNode = function () {
        return this._boxBtnNode;
    };
    RankItem.prototype.getConfigReward = function () {
        return RankModel_1.default.getInstance().getRewardIdByRank(this._data.rank);
    };
    RankItem.prototype.setDelegate = function (t) {
        this._delegate = t;
    };
    RankItem.prototype.isMySelf = function () {
        return RankModel_1.default.getInstance().isMySelf(this._data.id);
    };
    RankItem.prototype.isZeroScore = function () {
        return 0 == this._data.score;
    };
    RankItem.prototype.updateRank = function () {
        this.setRankString(this._data.rank);
    };
    RankItem.prototype.setRankString = function (t) {
        this._rankLabel.string = t + "";
    };
    RankItem.prototype.updateUI = function () {
        if (this._data) {
            var t = this.isMySelf();
            this.updateRank();
            this._nameLabel.string = RankModel_1.default.getInstance().getRankName(this._data, t);
            this._scoreLabel.string = this._data.score + "";
            var e = UserModel_1.default.getInstance().getUserName(), o = UserInfoManager_1.default.getInstance().isKoreanName(e), n = UserInfoManager_1.default.getInstance().isRussianName(e);
            if (t && (o || n)) {
                this._nameLabel.useSystemFont = true;
                this._nameLabel.font = null;
            }
            else {
                this._nameLabel.useSystemFont = false;
                this._nameLabel.font = this.curFont;
            }
            var a = RankModel_1.default.getInstance().getRankAvatarAndFrame(this._data, t), i = a.avatarId, r = a.frameId;
            this.updateAvatarAndFrame(i, r);
            var u = t ? "#f1cd90" : "#804217";
            this._rankLabel.node.color = new cc.Color().fromHEX(u);
            this._nameLabel.node.color = new cc.Color().fromHEX(u);
            this._scoreLabel.node.color = new cc.Color().fromHEX(u);
            this._unselectedBgNode.active = !t;
            this._selectedBgNode.active = t;
            this._selectedScoreBgNode.active = t;
            this._unselectedScoreBgNode.active = !t;
            this._boxBtnNode.active = this._data.rank <= RankModel_1.default.getInstance().getCanRewardCount();
            this.updateImgCard(this._cardSpriteNode);
            var h = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_special_mj_2"), f = h.path, m = h.bundleName, _ = h.fromAtlas;
            BaseSprite_1.default.refreshWithNode(this._cardBgNode, f, _, false, m);
        }
    };
    RankItem.prototype.updateAvatarAndFrame = function (t, e) {
        UserInfoManager_1.default.getInstance().setupUserAvatar(this._delegate, this._avatarSprite, this._frameSprite, {
            avatarId: t,
            frameId: e
        });
    };
    RankItem.prototype.updateImgCard = function (t) {
        var e = UserModel_1.default.getInstance().getRankCardResName(), o = CardUtil_1.default.getAtlasPathAndBundleName(e), n = o.path, a = o.bundleName, i = o.fromAtlas;
        BaseSprite_1.default.refreshWithNode(t, n, i, false, a);
    };
    RankItem.prefabUrl = "prefabs/rank/RankItem";
    __decorate([
        mj.traitEvent("RankItem_btnTips")
    ], RankItem.prototype, "onBtnTipsClick", null);
    __decorate([
        mj.traitEvent("RankItem_updRank")
    ], RankItem.prototype, "updateRank", null);
    __decorate([
        mj.traitEvent("RankItem_updUI")
    ], RankItem.prototype, "updateUI", null);
    __decorate([
        mj.traitEvent("RankItem_updAvatarFrame")
    ], RankItem.prototype, "updateAvatarAndFrame", null);
    __decorate([
        mj.traitEvent("RankItem_updImgCard")
    ], RankItem.prototype, "updateImgCard", null);
    RankItem = __decorate([
        mj.class
    ], RankItem);
    return RankItem;
}(BaseCell_1.default));
exports.default = RankItem;

cc._RF.pop();
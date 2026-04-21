"use strict";
cc._RF.push(module, '9e79cxnkJpJAaw4NtYQnv6p', 'RankBonusItem');
// subpackages/l_rank/Scripts/RankBonusItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseCell_1 = require("../../../Scripts/base/ui/BaseCell");
var UserInfoManager_1 = require("../../../Scripts/gamePlay/base/user/UserInfoManager");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var RankModel_1 = require("./RankModel");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var RankEnums_1 = require("./util/RankEnums");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var RankBonusItem = /** @class */ (function (_super) {
    __extends(RankBonusItem, _super);
    function RankBonusItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isAddScoreScrolling = false;
        _this.curFont = null;
        return _this;
    }
    RankBonusItem.prototype.getRank = function () {
        return this._rank;
    };
    RankBonusItem.prototype.getRankSelfLabel = function () {
        return this._rankSelfLabel;
    };
    RankBonusItem.prototype.onDestroy = function () {
        var e;
        _super.prototype.onDestroy.call(this);
        (null === (e = this._contentNode) || void 0 === e ? void 0 : e.activeInHierarchy) && this._contentNode.stopAllActions();
    };
    RankBonusItem.prototype.uiOnLoad = function () {
        var t, e, o, n, a, i, r, s, l, c;
        this._contentNode = cc.find("p", this._cellUI);
        this._otherNode = cc.find("p/other", this._cellUI);
        this._rankOtherLabel = null === (t = cc.find("p/other/rank", this._cellUI)) || void 0 === t ? void 0 : t.getComponent(cc.Label);
        this._nameOtherLabel = null === (e = cc.find("p/other/name", this._cellUI)) || void 0 === e ? void 0 : e.getComponent(cc.Label);
        this._scoreOtherLabel = null === (o = cc.find("p/other/score_node/count", this._cellUI)) || void 0 === o ? void 0 : o.getComponent(cc.Label);
        this._selfNode = cc.find("p/self", this._cellUI);
        this._rankSelfLabel = null === (n = cc.find("p/self/rank", this._cellUI)) || void 0 === n ? void 0 : n.getComponent(cc.Label);
        this._nameSelfLabel = null === (a = cc.find("p/self/name", this._cellUI)) || void 0 === a ? void 0 : a.getComponent(cc.Label);
        this._scoreSelfLabel = null === (i = cc.find("p/self/score_node/count", this._cellUI)) || void 0 === i ? void 0 : i.getComponent(cc.Label);
        this._avatarSprite = null === (r = cc.find("p/head/avatar", this._cellUI)) || void 0 === r ? void 0 : r.getComponent(cc.Sprite);
        this._frameSprite = null === (s = cc.find("p/head/frame", this._cellUI)) || void 0 === s ? void 0 : s.getComponent(cc.Sprite);
        this._cardSprite = null === (l = cc.find("p/card_bg/card", this._cellUI)) || void 0 === l ? void 0 : l.getComponent(cc.Sprite);
        this._cardBgNode = cc.find("p/card_bg", this._cellUI);
        this._scoreAddValue = 0;
        this._spAddScore = null === (c = cc.find("p/sp_add_score", this._cellUI)) || void 0 === c ? void 0 : c.getComponent(sp.Skeleton);
        this.curFont = this._nameSelfLabel.font;
    };
    RankBonusItem.prototype.updateUI = function () {
        var t;
        if (this._data) {
            this._contentNode.scale = 1;
            this._scoreAddValue = 0;
            var e = RankModel_1.default.getInstance().isMySelf(this._data.id);
            this._contentNode.opacity = this._isAddScoreScrolling && e ? 0 : 255;
            this._selfNode.active = e;
            this._otherNode.active = !e;
            this._rank = this._data.rank;
            this.refreshRank(e, this._data.rank);
            this.refreshName(e, this._data.name);
            this.refreshScore(e, this._data.score);
            var o = RankModel_1.default.getInstance().getRankAvatarAndFrame(this._data, e), n = o.avatarId, a = o.frameId;
            this.updateAvatar(n);
            var i = UserInfoManager_1.default.getInstance().getFrameIconPath(a);
            BaseSprite_1.default.refreshWithNode(this._frameSprite.node, i);
            if (null === (t = RankModel_1.default.getInstance().getCurBoardData()) || void 0 === t ? void 0 : t.CollectThing) {
                this.updateImgCard(this._cardSprite.node);
                var r = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_special_mj_2"), d = r.path, p = r.bundleName, u = r.fromAtlas;
                BaseSprite_1.default.refreshWithNode(this._cardBgNode, d, u, false, p);
                this._spAddScore && (this._spAddScore.node.active = false);
            }
        }
    };
    RankBonusItem.prototype.updateAvatar = function (t) {
        var e = UserInfoManager_1.default.getInstance().getAvatarIconPath(t);
        BaseSprite_1.default.refreshWithNode(this._avatarSprite.node, e, false, true, UserInfoManager_1.default.getInstance().getDefaultIconBundleName());
    };
    RankBonusItem.prototype.updateImgCard = function (t) {
        var e = UserModel_1.default.getInstance().getRankCardResName(), o = CardUtil_1.default.getAtlasPathAndBundleName(e), n = o.path, a = o.bundleName, i = o.fromAtlas;
        BaseSprite_1.default.refreshWithNode(t, n, i, false, a);
    };
    RankBonusItem.prototype.refreshRank = function (t, e) {
        if (t) {
            this._rankSelfLabel && (this._rankSelfLabel.string = "" + e);
        }
        else {
            this._rankOtherLabel && (this._rankOtherLabel.string = "" + e);
        }
    };
    RankBonusItem.prototype.updateRankDisplay = function () {
        var t;
        this._rank = this._data.rank;
        var e = RankModel_1.default.getInstance().isMySelf(null === (t = this._data) || void 0 === t ? void 0 : t.id);
        this._cellUI && this.refreshRank(e, this._rank);
    };
    RankBonusItem.prototype.refreshName = function (t, e) {
        if (t) {
            if (this._nameSelfLabel) {
                var o = UserModel_1.default.getInstance().getUserName();
                this._nameSelfLabel.string = o;
                var n = UserInfoManager_1.default.getInstance().isKoreanName(o), a = UserInfoManager_1.default.getInstance().isRussianName(o);
                if (n || a) {
                    this._nameSelfLabel.useSystemFont = true;
                    this._nameSelfLabel.font = null;
                }
                else {
                    this._nameSelfLabel.useSystemFont = false;
                    this._nameSelfLabel.font = this.curFont;
                }
            }
        }
        else
            this._nameOtherLabel && (this._nameOtherLabel.string = e);
    };
    RankBonusItem.prototype.refreshScore = function (t, e) {
        if (t) {
            this._scoreSelfLabel && (this._scoreSelfLabel.string = "" + e);
        }
        else {
            this._scoreOtherLabel && (this._scoreOtherLabel.string = "" + e);
        }
    };
    RankBonusItem.prototype.addScore = function (t) {
        if (this._scoreSelfLabel) {
            this._scoreAddValue += t;
            this.refreshScore(true, this._scoreAddValue + this._data.score);
        }
    };
    RankBonusItem.prototype.playUpLevelEffect = function (t, e) {
        if (t) {
            this.showUpRankInEffect(e);
        }
        else {
            this.showAddScoreEffect(e);
        }
    };
    RankBonusItem.prototype.playUpLevelLoopEffect = function () {
        var t = this;
        if (cc.isValid(this._spAddScore)) {
            this._spAddScore.node.active = true;
            CommonUtils_1.playSpineAnim(this._spAddScore, -1, "init", function () {
                t._spAddScore.node.active = false;
            });
        }
        cc.isValid(this._contentNode) && (this._contentNode.scale = 1.05);
    };
    RankBonusItem.prototype.showAddScoreEffect = function (t) {
        var e = this;
        if (cc.isValid(this._spAddScore)) {
            this._spAddScore.node.active = true;
            CommonUtils_1.playSpineAnim(this._spAddScore, 1, "out", function () {
                e._spAddScore.node.active = false;
                t && t(e);
            });
        }
        else
            t && t(this);
        if (cc.isValid(this._contentNode)) {
            this._contentNode.stopAllActions();
            this._contentNode.scale = 1;
            cc.tween(this._contentNode).to(0.16, {
                scale: 1.05
            }, {
                easing: "sineInOut"
            }).call(function () {
                mj.audioManager.playEffect(RankEnums_1.ERankAudioID.ItemEnd);
            }).to(0.16, {
                scale: 1
            }, {
                easing: "sineInOut"
            }).start();
        }
    };
    RankBonusItem.prototype.showUpRankInEffect = function (t) {
        var e = this;
        if (cc.isValid(this._spAddScore)) {
            this._spAddScore.node.active = true;
            CommonUtils_1.playSpineAnim(this._spAddScore, 1, "in", function () {
                e._spAddScore.node.active = false;
                t && t(e);
            });
        }
        else
            t && t(this);
        if (cc.isValid(this._contentNode)) {
            this._contentNode.stopAllActions();
            this._contentNode.scale = 1;
            mj.audioManager.playEffect(RankEnums_1.ERankAudioID.ItemStart);
            cc.tween(this._contentNode).to(0.16, {
                scale: 1.05
            }, {
                easing: "sineInOut"
            }).call(function () {
                t && t(e);
            }).start();
        }
    };
    RankBonusItem.prototype.showRankOutEffect = function (t) {
        if (t === void 0) { t = null; }
        var e = this;
        if (cc.isValid(this._spAddScore)) {
            this._spAddScore.node.active = true;
            CommonUtils_1.playSpineAnim(this._spAddScore, 1, "out", function () {
                e._spAddScore.node.active = false;
                t && t();
            });
        }
        mj.audioManager.playEffect(RankEnums_1.ERankAudioID.ItemEnd);
        if (cc.isValid(this._contentNode)) {
            this._contentNode.stopAllActions();
            this._contentNode.scale = 1.05;
            cc.tween(this._contentNode).to(0.1, {
                scale: 1.07
            }, {
                easing: "circOut"
            }).to(0.16, {
                scale: 0.95
            }, {
                easing: "cubicIn"
            }).to(0.17, {
                scale: 1
            }, {
                easing: "sineInOut"
            }).call(function () { }).start();
        }
    };
    RankBonusItem.prototype.updateItemCell = function (t, e) {
        this._isAddScoreScrolling = e;
        this.updateCell(t);
    };
    RankBonusItem.prototype.getContentNode = function () {
        return this._contentNode;
    };
    RankBonusItem.prototype.updateContentOpacity = function () {
        if (cc.isValid(this._contentNode)) {
            this._contentNode.opacity = 255;
            this._contentNode.stopAllActions();
            this._contentNode.scale = 1;
        }
        this._isAddScoreScrolling = false;
    };
    RankBonusItem.prefabUrl = "prefabs/rank/RankBonusItem";
    __decorate([
        mj.traitEvent("RankBonusItem_updAvatar")
    ], RankBonusItem.prototype, "updateAvatar", null);
    __decorate([
        mj.traitEvent("RankBonusItem_updImgCard")
    ], RankBonusItem.prototype, "updateImgCard", null);
    __decorate([
        mj.traitEvent("RankBonusItem_rankOutEff")
    ], RankBonusItem.prototype, "showRankOutEffect", null);
    RankBonusItem = __decorate([
        mj.class
    ], RankBonusItem);
    return RankBonusItem;
}(BaseCell_1.default));
exports.default = RankBonusItem;

cc._RF.pop();
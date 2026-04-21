
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rank/Scripts/RankItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmsvU2NyaXB0cy9SYW5rSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQXlEO0FBQ3pELHlDQUFvQztBQUNwQywyRUFBc0U7QUFDdEUsc0VBQWlFO0FBQ2pFLHVGQUFrRjtBQUNsRixvRUFBK0Q7QUFFL0Q7SUFBc0MsNEJBQVE7SUFBOUM7UUFBQSxxRUE4SEM7UUE3SEMsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixhQUFPLEdBQUcsSUFBSSxDQUFDOztJQTRIakIsQ0FBQztJQTFIQywyQkFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZILElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ3RDLENBQUM7SUFDRCxzQ0FBbUIsR0FBbkI7UUFDRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDWixFQUFFLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkQsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBQ0QsZ0NBQWEsR0FBYjtRQUNFLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDakMsSUFBSSxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLEdBQUcseUJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQ25ELENBQUMsR0FBRyx5QkFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO2dCQUNyQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7YUFDN0I7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ3JDO1lBQ0QsSUFBSSxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUNyRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFDZCxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUNoQixJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztJQUNELGlDQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsaUNBQWMsR0FBZCxjQUFrQixDQUFDO0lBQ25CLGdDQUFhLEdBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUNELGtDQUFlLEdBQWY7UUFDRSxPQUFPLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBQ0QsOEJBQVcsR0FBWCxVQUFZLENBQUM7UUFDWCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBQ0QsMkJBQVEsR0FBUjtRQUNFLE9BQU8sbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBQ0QsOEJBQVcsR0FBWDtRQUNFLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFFRCw2QkFBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxnQ0FBYSxHQUFiLFVBQWMsQ0FBQztRQUNiLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELDJCQUFRLEdBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDNUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ2hELElBQUksQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsV0FBVyxFQUFFLEVBQzNDLENBQUMsR0FBRyx5QkFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFDakQsQ0FBQyxHQUFHLHlCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO2dCQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzthQUM3QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDckM7WUFDRCxJQUFJLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQ2xFLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUNkLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUN6RixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsR0FBRyxrQkFBUSxDQUFDLHlCQUF5QixDQUFDLHVCQUF1QixDQUFDLEVBQ2pFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUNWLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUNoQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUNsQixvQkFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzlEO0lBQ0gsQ0FBQztJQUVELHVDQUFvQixHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQztRQUN2Qix5QkFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuRyxRQUFRLEVBQUUsQ0FBQztZQUNYLE9BQU8sRUFBRSxDQUFDO1NBQ1gsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGdDQUFhLEdBQWIsVUFBYyxDQUFDO1FBQ2IsSUFBSSxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxFQUNsRCxDQUFDLEdBQUcsa0JBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsRUFDekMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQ1YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQ2hCLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2xCLG9CQUFVLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBMUhNLGtCQUFTLEdBQUcsdUJBQXVCLENBQUM7SUE4QzNDO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQztrREFDZjtJQWlCbkI7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDOzhDQUdqQztJQUtEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQzs0Q0FxQy9CO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDO3dEQU14QztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztpREFRcEM7SUE3SGtCLFFBQVE7UUFENUIsRUFBRSxDQUFDLEtBQUs7T0FDWSxRQUFRLENBOEg1QjtJQUFELGVBQUM7Q0E5SEQsQUE4SEMsQ0E5SHFDLGtCQUFRLEdBOEg3QztrQkE5SG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZUNlbGwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9iYXNlL3VpL0Jhc2VDZWxsJztcbmltcG9ydCBSYW5rTW9kZWwgZnJvbSAnLi9SYW5rTW9kZWwnO1xuaW1wb3J0IEJhc2VTcHJpdGUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcHJpdGUnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCBVc2VySW5mb01hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VzZXIvVXNlckluZm9NYW5hZ2VyJztcbmltcG9ydCBDYXJkVXRpbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvQ2FyZFV0aWwnO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5rSXRlbSBleHRlbmRzIEJhc2VDZWxsIHtcbiAgX2RlbGVnYXRlID0gbnVsbDtcbiAgY3VyRm9udCA9IG51bGw7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvcmFuay9SYW5rSXRlbVwiO1xuICB1aU9uTG9hZCgpIHtcbiAgICB2YXIgdDtcbiAgICB0aGlzLl9yYW5rTGFiZWwgPSBjYy5maW5kKFwicC9yYW5rXCIsIHRoaXMuX2NlbGxVSSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICB0aGlzLl9hdmF0YXJTcHJpdGUgPSBjYy5maW5kKFwicC9oZWFkL2F2YXRhclwiLCB0aGlzLl9jZWxsVUkpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgIHRoaXMuX2ZyYW1lU3ByaXRlID0gY2MuZmluZChcInAvaGVhZC9mcmFtZVwiLCB0aGlzLl9jZWxsVUkpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgIHRoaXMuX25hbWVMYWJlbCA9IGNjLmZpbmQoXCJwL25hbWVcIiwgdGhpcy5fY2VsbFVJKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgIHRoaXMuX3Njb3JlTGFiZWwgPSBudWxsID09PSAodCA9IGNjLmZpbmQoXCJwL2NvdW50XCIsIHRoaXMuX2NlbGxVSSkpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICB0aGlzLl9jYXJkQmdOb2RlID0gY2MuZmluZChcInAvY2FyZF9iZ1wiLCB0aGlzLl9jZWxsVUkpO1xuICAgIHRoaXMuX2NhcmRTcHJpdGVOb2RlID0gY2MuZmluZChcInAvY2FyZF9iZy9jYXJkXCIsIHRoaXMuX2NlbGxVSSk7XG4gICAgdGhpcy5fYm94QnRuTm9kZSA9IGNjLmZpbmQoXCJwL0JveEJ0blwiLCB0aGlzLl9jZWxsVUkpO1xuICAgIHRoaXMuX3Vuc2VsZWN0ZWRCZ05vZGUgPSBjYy5maW5kKFwicC9iZy91bnNlbGVjdFwiLCB0aGlzLl9jZWxsVUkpO1xuICAgIHRoaXMuX3NlbGVjdGVkQmdOb2RlID0gY2MuZmluZChcInAvYmcvc2VsZWN0XCIsIHRoaXMuX2NlbGxVSSk7XG4gICAgdGhpcy5fc2VsZWN0ZWRTY29yZUJnTm9kZSA9IGNjLmZpbmQoXCJwL3Njb3JlX25vZGUvc2VsZWN0XCIsIHRoaXMuX2NlbGxVSSk7XG4gICAgdGhpcy5fdW5zZWxlY3RlZFNjb3JlQmdOb2RlID0gY2MuZmluZChcInAvc2NvcmVfbm9kZS91bnNlbGVjdFwiLCB0aGlzLl9jZWxsVUkpO1xuICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcbiAgICB0aGlzLmN1ckZvbnQgPSB0aGlzLl9uYW1lTGFiZWwuZm9udDtcbiAgfVxuICBnZXRNZXNzYWdlTGlzdGVuZXJzKCkge1xuICAgIHZhciBfdCA9IHt9O1xuICAgIF90Lm1zZ19yYW5rUmVmcmVzaFNlbGYgPSB0aGlzLm9uUmVmcmVzaFNlbGYuYmluZCh0aGlzKTtcbiAgICByZXR1cm4gX3Q7XG4gIH1cbiAgb25SZWZyZXNoU2VsZigpIHtcbiAgICBpZiAodGhpcy5fZGF0YSAmJiB0aGlzLmlzTXlTZWxmKCkpIHtcbiAgICAgIHZhciB0ID0gUmFua01vZGVsLmdldEluc3RhbmNlKCkuZ2V0UmFua05hbWUodGhpcy5fZGF0YSwgdHJ1ZSk7XG4gICAgICB0aGlzLl9uYW1lTGFiZWwuc3RyaW5nID0gdDtcbiAgICAgIHZhciBlID0gVXNlckluZm9NYW5hZ2VyLmdldEluc3RhbmNlKCkuaXNLb3JlYW5OYW1lKHQpLFxuICAgICAgICBvID0gVXNlckluZm9NYW5hZ2VyLmdldEluc3RhbmNlKCkuaXNSdXNzaWFuTmFtZSh0KTtcbiAgICAgIGlmIChlIHx8IG8pIHtcbiAgICAgICAgdGhpcy5fbmFtZUxhYmVsLnVzZVN5c3RlbUZvbnQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9uYW1lTGFiZWwuZm9udCA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9uYW1lTGFiZWwudXNlU3lzdGVtRm9udCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9uYW1lTGFiZWwuZm9udCA9IHRoaXMuY3VyRm9udDtcbiAgICAgIH1cbiAgICAgIHZhciBuID0gUmFua01vZGVsLmdldEluc3RhbmNlKCkuZ2V0UmFua0F2YXRhckFuZEZyYW1lKHRoaXMuX2RhdGEsIHRydWUpLFxuICAgICAgICBhID0gbi5hdmF0YXJJZCxcbiAgICAgICAgaSA9IG4uZnJhbWVJZDtcbiAgICAgIHRoaXMudXBkYXRlQXZhdGFyQW5kRnJhbWUoYSwgaSk7XG4gICAgfVxuICB9XG4gIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgIHRoaXMuT25CdXR0b25DbGljayh0aGlzLl9ib3hCdG5Ob2RlLCB0aGlzLm9uQnRuVGlwc0NsaWNrLmJpbmQodGhpcykpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiUmFua0l0ZW1fYnRuVGlwc1wiKVxuICBvbkJ0blRpcHNDbGljaygpIHt9XG4gIGdldEJveEJ0bk5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JveEJ0bk5vZGU7XG4gIH1cbiAgZ2V0Q29uZmlnUmV3YXJkKCkge1xuICAgIHJldHVybiBSYW5rTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRSZXdhcmRJZEJ5UmFuayh0aGlzLl9kYXRhLnJhbmspO1xuICB9XG4gIHNldERlbGVnYXRlKHQpIHtcbiAgICB0aGlzLl9kZWxlZ2F0ZSA9IHQ7XG4gIH1cbiAgaXNNeVNlbGYoKSB7XG4gICAgcmV0dXJuIFJhbmtNb2RlbC5nZXRJbnN0YW5jZSgpLmlzTXlTZWxmKHRoaXMuX2RhdGEuaWQpO1xuICB9XG4gIGlzWmVyb1Njb3JlKCkge1xuICAgIHJldHVybiAwID09IHRoaXMuX2RhdGEuc2NvcmU7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSYW5rSXRlbV91cGRSYW5rXCIpXG4gIHVwZGF0ZVJhbmsoKSB7XG4gICAgdGhpcy5zZXRSYW5rU3RyaW5nKHRoaXMuX2RhdGEucmFuayk7XG4gIH1cbiAgc2V0UmFua1N0cmluZyh0KSB7XG4gICAgdGhpcy5fcmFua0xhYmVsLnN0cmluZyA9IHQgKyBcIlwiO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiUmFua0l0ZW1fdXBkVUlcIilcbiAgdXBkYXRlVUkoKSB7XG4gICAgaWYgKHRoaXMuX2RhdGEpIHtcbiAgICAgIHZhciB0ID0gdGhpcy5pc015U2VsZigpO1xuICAgICAgdGhpcy51cGRhdGVSYW5rKCk7XG4gICAgICB0aGlzLl9uYW1lTGFiZWwuc3RyaW5nID0gUmFua01vZGVsLmdldEluc3RhbmNlKCkuZ2V0UmFua05hbWUodGhpcy5fZGF0YSwgdCk7XG4gICAgICB0aGlzLl9zY29yZUxhYmVsLnN0cmluZyA9IHRoaXMuX2RhdGEuc2NvcmUgKyBcIlwiO1xuICAgICAgdmFyIGUgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRVc2VyTmFtZSgpLFxuICAgICAgICBvID0gVXNlckluZm9NYW5hZ2VyLmdldEluc3RhbmNlKCkuaXNLb3JlYW5OYW1lKGUpLFxuICAgICAgICBuID0gVXNlckluZm9NYW5hZ2VyLmdldEluc3RhbmNlKCkuaXNSdXNzaWFuTmFtZShlKTtcbiAgICAgIGlmICh0ICYmIChvIHx8IG4pKSB7XG4gICAgICAgIHRoaXMuX25hbWVMYWJlbC51c2VTeXN0ZW1Gb250ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fbmFtZUxhYmVsLmZvbnQgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fbmFtZUxhYmVsLnVzZVN5c3RlbUZvbnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fbmFtZUxhYmVsLmZvbnQgPSB0aGlzLmN1ckZvbnQ7XG4gICAgICB9XG4gICAgICB2YXIgYSA9IFJhbmtNb2RlbC5nZXRJbnN0YW5jZSgpLmdldFJhbmtBdmF0YXJBbmRGcmFtZSh0aGlzLl9kYXRhLCB0KSxcbiAgICAgICAgaSA9IGEuYXZhdGFySWQsXG4gICAgICAgIHIgPSBhLmZyYW1lSWQ7XG4gICAgICB0aGlzLnVwZGF0ZUF2YXRhckFuZEZyYW1lKGksIHIpO1xuICAgICAgdmFyIHUgPSB0ID8gXCIjZjFjZDkwXCIgOiBcIiM4MDQyMTdcIjtcbiAgICAgIHRoaXMuX3JhbmtMYWJlbC5ub2RlLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWCh1KTtcbiAgICAgIHRoaXMuX25hbWVMYWJlbC5ub2RlLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWCh1KTtcbiAgICAgIHRoaXMuX3Njb3JlTGFiZWwubm9kZS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgodSk7XG4gICAgICB0aGlzLl91bnNlbGVjdGVkQmdOb2RlLmFjdGl2ZSA9ICF0O1xuICAgICAgdGhpcy5fc2VsZWN0ZWRCZ05vZGUuYWN0aXZlID0gdDtcbiAgICAgIHRoaXMuX3NlbGVjdGVkU2NvcmVCZ05vZGUuYWN0aXZlID0gdDtcbiAgICAgIHRoaXMuX3Vuc2VsZWN0ZWRTY29yZUJnTm9kZS5hY3RpdmUgPSAhdDtcbiAgICAgIHRoaXMuX2JveEJ0bk5vZGUuYWN0aXZlID0gdGhpcy5fZGF0YS5yYW5rIDw9IFJhbmtNb2RlbC5nZXRJbnN0YW5jZSgpLmdldENhblJld2FyZENvdW50KCk7XG4gICAgICB0aGlzLnVwZGF0ZUltZ0NhcmQodGhpcy5fY2FyZFNwcml0ZU5vZGUpO1xuICAgICAgdmFyIGggPSBDYXJkVXRpbC5nZXRBdGxhc1BhdGhBbmRCdW5kbGVOYW1lKFwiZ2FtZXBsYXlfc3BlY2lhbF9tal8yXCIpLFxuICAgICAgICBmID0gaC5wYXRoLFxuICAgICAgICBtID0gaC5idW5kbGVOYW1lLFxuICAgICAgICBfID0gaC5mcm9tQXRsYXM7XG4gICAgICBCYXNlU3ByaXRlLnJlZnJlc2hXaXRoTm9kZSh0aGlzLl9jYXJkQmdOb2RlLCBmLCBfLCBmYWxzZSwgbSk7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiUmFua0l0ZW1fdXBkQXZhdGFyRnJhbWVcIilcbiAgdXBkYXRlQXZhdGFyQW5kRnJhbWUodCwgZSkge1xuICAgIFVzZXJJbmZvTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNldHVwVXNlckF2YXRhcih0aGlzLl9kZWxlZ2F0ZSwgdGhpcy5fYXZhdGFyU3ByaXRlLCB0aGlzLl9mcmFtZVNwcml0ZSwge1xuICAgICAgYXZhdGFySWQ6IHQsXG4gICAgICBmcmFtZUlkOiBlXG4gICAgfSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSYW5rSXRlbV91cGRJbWdDYXJkXCIpXG4gIHVwZGF0ZUltZ0NhcmQodCkge1xuICAgIHZhciBlID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0UmFua0NhcmRSZXNOYW1lKCksXG4gICAgICBvID0gQ2FyZFV0aWwuZ2V0QXRsYXNQYXRoQW5kQnVuZGxlTmFtZShlKSxcbiAgICAgIG4gPSBvLnBhdGgsXG4gICAgICBhID0gby5idW5kbGVOYW1lLFxuICAgICAgaSA9IG8uZnJvbUF0bGFzO1xuICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKHQsIG4sIGksIGZhbHNlLCBhKTtcbiAgfVxufSJdfQ==
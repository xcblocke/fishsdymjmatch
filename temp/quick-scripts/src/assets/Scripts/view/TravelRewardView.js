"use strict";
cc._RF.push(module, '962f0+OQKlJgZMXYl8jfrlO', 'TravelRewardView');
// Scripts/view/TravelRewardView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TravelGameModel_1 = require("../gamePlay/travel/model/TravelGameModel");
var GameUtils_1 = require("../core/simulator/util/GameUtils");
var DataReader_1 = require("../framework/data/DataReader");
var ConfigType_1 = require("../gamePlay/base/data/ConfigType");
var BaseSpine_1 = require("../gamePlay/base/ui/BaseSpine");
var I18NStrings_1 = require("../framework/data/I18NStrings");
var BaseSprite_1 = require("../gamePlay/base/ui/BaseSprite");
var TravelConfig_1 = require("../config/TravelConfig");
var UIView_1 = require("../framework/ui/UIView");
var DGameBtnClick_1 = require("../dot/DGameBtnClick");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var TravelRewardView = /** @class */ (function (_super) {
    __extends(TravelRewardView, _super);
    function TravelRewardView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.playBtn = null;
        _this.titleLabel = null;
        _this.titleLabel2 = null;
        _this.iconNode = null;
        _this.animDown = null;
        _this.animUp = null;
        _this.trailNode = null;
        _this.topNode = null;
        _this.badgeNode = null;
        _this.contentNode = null;
        _this.bgNode = null;
        _this.trophyNode = null;
        _this.levelId = 0;
        _this.proxy = null;
        return _this;
    }
    TravelRewardView.prototype.onLoad = function () {
        var t = this;
        _super.prototype.onLoad.call(this);
        this.proxy = BaseSpine_1.default.refreshWithNode(this.animUp.node);
        this.proxy.reset("");
        this.proxy.markReady("");
        this.proxy.attachNode("hook_icon", function () {
            return t.iconNode;
        });
        this.OnButtonClick(this.playBtn, this.onPlayBtnClick.bind(this));
    };
    TravelRewardView.prototype.viewDidLoad = function (e) {
        var t = this;
        this.levelId = e.levelId;
        var o = TravelGameModel_1.default.getInstance().getCurJourney(), n = TravelGameModel_1.default.getInstance().getRewardInfo(o).find(function (e) {
            return e.lv === t.levelId;
        }), i = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.reward_config, n.reward), r = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.item_config, i.Items[0]);
        I18NStrings_1.default.setText(this.titleLabel.node, I18NStrings_1.default.get(null == r ? void 0 : r.NameKey), null == r ? void 0 : r.NameKey);
        I18NStrings_1.default.setText(this.titleLabel2.node, I18NStrings_1.default.get(null == r ? void 0 : r.NameKey), null == r ? void 0 : r.NameKey);
        BaseSprite_1.default.refreshWithNode(this.iconNode, "texture/badge/" + (null == r ? void 0 : r.Icon), false);
        DGameBtnClick_1.DotGameBtnClick.dotBadge(DGameBtnClick_1.EBadgeClickType.BadgeGet, "" + I18NStrings_1.default.getCN(null == r ? void 0 : r.NameKey));
        this.trophyNode.active = false;
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.TravelTags);
        this.playAnim();
        this.isAutoClose() && this.scheduleOnce(function () {
            t.onPlayBtnClick();
        }, 3);
    };
    TravelRewardView.prototype.viewDidShow = function () { };
    TravelRewardView.prototype.playAnim = function () {
        var e = this;
        this.trailNode.active = false;
        this.animDown.node.active = false;
        this.iconNode.opacity = 0;
        this.iconNode.setPosition(cc.Vec3.ZERO);
        this.animUp.setEventListener(function (t, o) {
            if ("event_rewards" === o.data.name) {
                e.animDown.node.active = true;
                cc.tween(e.iconNode).to(0.2, {
                    opacity: 255
                }).start();
                GameUtils_1.default.playSpine(e.animDown, "in_down", false, function () {
                    GameUtils_1.default.playSpine(e.animDown, "init_down", true);
                });
            }
        });
        GameUtils_1.default.playSpine(this.animUp, "in_up", false, function () {
            e.animUp.setEventListener(null);
            GameUtils_1.default.playSpine(e.animUp, "init_up", true);
        });
        this.titleLabel.node.scale = 0.3;
        cc.tween(this.titleLabel.node).to(0.2, {
            scale: 1.3
        }, {
            easing: cc.easing.quadOut
        }).to(0.17, {
            scale: 0.8
        }, {
            easing: cc.easing.sineOut
        }).to(0.13, {
            scale: 1
        }, {
            easing: cc.easing.sineOut
        }).start();
        this.titleLabel2.node.opacity = 0;
        cc.tween(this.titleLabel2.node).delay(0.5).to(0.17, {
            opacity: 255
        }, {
            easing: cc.easing.quadOut
        }).to(0.8, {
            opacity: 0
        }, {
            easing: cc.easing.quadInOut
        }).start();
        this.playBtn.active = false;
        this.playBtn.scale = 0.6;
        cc.tween(this.playBtn).delay(0.4).call(function () {
            e.playBtn.active = true;
        }).to(0.2, {
            scale: 1.05
        }, {
            easing: cc.easing.quadOut
        }).to(0.16, {
            scale: 1
        }, {
            easing: cc.easing.quadIn
        }).start();
    };
    TravelRewardView.prototype.playCollectAnim = function () {
        var e = this;
        this.hideBgAnim(0.8);
        this.iconNode.scale = 1;
        this.iconNode.opacity = 255;
        var t = cc.tween(this.iconNode).to(0.1, {
            scale: 1.05
        }, {
            easing: cc.easing.quadOut
        }).to(0.2, {
            scale: 0.3
        }, {
            easing: cc.easing.quadIn
        }), o = cc.tween(this.iconNode).to(0.3, {
            opacity: 0
        });
        cc.tween(this.iconNode).parallel(t, o).call(function () {
            e.iconNode.active = false;
            e.playTrailAnim(function () {
                e.trophyNode.active = true;
                GameUtils_1.default.playSpine(e.trophyNode.getComponent(sp.Skeleton), "in_trophy", false, function () {
                    var t;
                    e.dispatchEvent(TravelConfig_1.TRAVEL_GAME_COLLECT_BADGE, e.levelId);
                    null === (t = e.delegate) || void 0 === t || t.close();
                });
            });
        }).start();
        cc.tween(this.animDown.node).delay(0.2).call(function () {
            GameUtils_1.default.playSpine(e.animDown, "out_collection", false);
        }).start();
    };
    TravelRewardView.prototype.playTrailAnim = function (e) {
        var t = this;
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.TravelCollect);
        GameTypeEnums_1.EAudioID;
        this.trailNode.active = true;
        var o = this.iconNode.parent.convertToWorldSpaceAR(this.iconNode.position), n = this.trailNode.parent.convertToNodeSpaceAR(o);
        this.trailNode.position = n;
        var i = this.badgeNode.parent.convertToWorldSpaceAR(this.badgeNode.position), r = this.trailNode.parent.convertToNodeSpaceAR(i);
        cc.tween(this.trailNode).to(0.3, {
            position: r
        }, {
            easing: cc.easing.sineInOut
        }).call(function () {
            t.stopTrailParticle();
        }).delay(0.25).call(function () {
            t.trailNode.active = false;
            null == e || e();
        }).start();
        this.trailNode.getComponentsInChildren(cc.ParticleSystem).forEach(function (e) {
            e.resetSystem();
            e.speed *= 1;
        });
    };
    TravelRewardView.prototype.onPlayBtnClick = function () {
        DGameBtnClick_1.DotGameBtnClick.dotVictoryChest(DGameBtnClick_1.EVictoryChestClickType.TravelClaimRewardCollection);
        this.playBtn.getComponent(cc.Button).interactable = false;
        this.playCollectAnim();
    };
    TravelRewardView.prototype.isAutoClose = function () {
        return false;
    };
    TravelRewardView.prototype.hideBgAnim = function (e) {
        cc.tween(this.bgNode).to(e, {
            opacity: 0
        }).start();
        cc.tween(this.contentNode).to(e, {
            opacity: 0
        }).start();
    };
    TravelRewardView.prototype.stopTrailParticle = function () {
        if (this.trailNode && cc.isValid(this.trailNode))
            try {
                this.trailNode.getComponentsInChildren(cc.ParticleSystem).forEach(function (e) {
                    e.stopSystem();
                });
            }
            catch (e) { }
    };
    TravelRewardView.prefabUrl = "prefabs/journey/JourneyReward";
    __decorate([
        mj.node("Content/Btn")
    ], TravelRewardView.prototype, "playBtn", void 0);
    __decorate([
        mj.component("Content/Title", cc.Label)
    ], TravelRewardView.prototype, "titleLabel", void 0);
    __decorate([
        mj.component("Content/Title2", cc.Label)
    ], TravelRewardView.prototype, "titleLabel2", void 0);
    __decorate([
        mj.node("Icon")
    ], TravelRewardView.prototype, "iconNode", void 0);
    __decorate([
        mj.component("AnimDown", sp.Skeleton)
    ], TravelRewardView.prototype, "animDown", void 0);
    __decorate([
        mj.component("AnimUp", sp.Skeleton)
    ], TravelRewardView.prototype, "animUp", void 0);
    __decorate([
        mj.node("Trail")
    ], TravelRewardView.prototype, "trailNode", void 0);
    __decorate([
        mj.node("Top")
    ], TravelRewardView.prototype, "topNode", void 0);
    __decorate([
        mj.node("Top/Badge")
    ], TravelRewardView.prototype, "badgeNode", void 0);
    __decorate([
        mj.node("Content")
    ], TravelRewardView.prototype, "contentNode", void 0);
    __decorate([
        mj.node("bg")
    ], TravelRewardView.prototype, "bgNode", void 0);
    __decorate([
        mj.node("Top/Badge/Trophy")
    ], TravelRewardView.prototype, "trophyNode", void 0);
    __decorate([
        mj.traitEvent("TravelRewardVv_autoClose")
    ], TravelRewardView.prototype, "isAutoClose", null);
    TravelRewardView = __decorate([
        mj.class
    ], TravelRewardView);
    return TravelRewardView;
}(UIView_1.default));
exports.default = TravelRewardView;

cc._RF.pop();
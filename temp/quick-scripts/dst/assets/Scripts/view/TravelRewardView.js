
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/view/TravelRewardView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3ZpZXcvVHJhdmVsUmV3YXJkVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNEVBQXVFO0FBQ3ZFLDhEQUF5RDtBQUN6RCwyREFBMEQ7QUFDMUQsK0RBQThEO0FBQzlELDJEQUFzRDtBQUN0RCw2REFBd0Q7QUFDeEQsNkRBQXdEO0FBQ3hELHVEQUFtRTtBQUNuRSxpREFBNEM7QUFDNUMsc0RBQWdHO0FBQ2hHLDBFQUFvRTtBQUVwRTtJQUE4QyxvQ0FBTTtJQUFwRDtRQUFBLHFFQXdNQztRQXRNQyxhQUFPLEdBQWtCLElBQUksQ0FBQztRQUU5QixnQkFBVSxHQUFvQixJQUFJLENBQUM7UUFFbkMsaUJBQVcsR0FBcUIsSUFBSSxDQUFDO1FBRXJDLGNBQVEsR0FBVyxJQUFJLENBQUM7UUFFeEIsY0FBUSxHQUFlLElBQUksQ0FBQztRQUU1QixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBRXhCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsYUFBTyxHQUFVLElBQUksQ0FBQztRQUV0QixlQUFTLEdBQWdCLElBQUksQ0FBQztRQUU5QixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUU5QixZQUFNLEdBQVMsSUFBSSxDQUFDO1FBRXBCLGdCQUFVLEdBQXVCLElBQUksQ0FBQztRQUN0QyxhQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osV0FBSyxHQUFHLElBQUksQ0FBQzs7SUE4S2YsQ0FBQztJQTVLQyxpQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFTLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckIs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QURwQyxFQUFFLENBQUMsS0FBSztPQUNZLGdCQUFnQixDQXdNcEM7SUFBRCx1QkFBQztDQXhNRCxBQXdNQyxDQXhNNkMsZ0JBQU0sR0F3TW5EO2tCQXhNb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYXZlbEdhbWVNb2RlbCBmcm9tICcuLi9nYW1lUGxheS90cmF2ZWwvbW9kZWwvVHJhdmVsR2FtZU1vZGVsJztcbmltcG9ydCBHYW1lVXRpbHMgZnJvbSAnLi4vY29yZS9zaW11bGF0b3IvdXRpbC9HYW1lVXRpbHMnO1xuaW1wb3J0IHsgRGF0YVJlYWRlciB9IGZyb20gJy4uL2ZyYW1ld29yay9kYXRhL0RhdGFSZWFkZXInO1xuaW1wb3J0IHsgQ29uZmlnVHlwZSB9IGZyb20gJy4uL2dhbWVQbGF5L2Jhc2UvZGF0YS9Db25maWdUeXBlJztcbmltcG9ydCBCYXNlU3BpbmUgZnJvbSAnLi4vZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3BpbmUnO1xuaW1wb3J0IEkxOE5TdHJpbmdzIGZyb20gJy4uL2ZyYW1ld29yay9kYXRhL0kxOE5TdHJpbmdzJztcbmltcG9ydCBCYXNlU3ByaXRlIGZyb20gJy4uL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwcml0ZSc7XG5pbXBvcnQgeyBUUkFWRUxfR0FNRV9DT0xMRUNUX0JBREdFIH0gZnJvbSAnLi4vY29uZmlnL1RyYXZlbENvbmZpZyc7XG5pbXBvcnQgVUlWaWV3IGZyb20gJy4uL2ZyYW1ld29yay91aS9VSVZpZXcnO1xuaW1wb3J0IHsgRG90R2FtZUJ0bkNsaWNrLCBFQmFkZ2VDbGlja1R5cGUsIEVWaWN0b3J5Q2hlc3RDbGlja1R5cGUgfSBmcm9tICcuLi9kb3QvREdhbWVCdG5DbGljayc7XG5pbXBvcnQgeyBFQXVkaW9JRCB9IGZyb20gJy4uL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmF2ZWxSZXdhcmRWaWV3IGV4dGVuZHMgVUlWaWV3IHtcbiAgQG1qLm5vZGUoXCJDb250ZW50L0J0blwiKVxuICBwbGF5QnRuOiBcIkNvbnRlbnQvQnRuXCIgPSBudWxsO1xuICBAbWouY29tcG9uZW50KFwiQ29udGVudC9UaXRsZVwiLCBjYy5MYWJlbClcbiAgdGl0bGVMYWJlbDogXCJDb250ZW50L1RpdGxlXCIgPSBudWxsO1xuICBAbWouY29tcG9uZW50KFwiQ29udGVudC9UaXRsZTJcIiwgY2MuTGFiZWwpXG4gIHRpdGxlTGFiZWwyOiBcIkNvbnRlbnQvVGl0bGUyXCIgPSBudWxsO1xuICBAbWoubm9kZShcIkljb25cIilcbiAgaWNvbk5vZGU6IFwiSWNvblwiID0gbnVsbDtcbiAgQG1qLmNvbXBvbmVudChcIkFuaW1Eb3duXCIsIHNwLlNrZWxldG9uKVxuICBhbmltRG93bjogXCJBbmltRG93blwiID0gbnVsbDtcbiAgQG1qLmNvbXBvbmVudChcIkFuaW1VcFwiLCBzcC5Ta2VsZXRvbilcbiAgYW5pbVVwOiBcIkFuaW1VcFwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJUcmFpbFwiKVxuICB0cmFpbE5vZGU6IFwiVHJhaWxcIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiVG9wXCIpXG4gIHRvcE5vZGU6IFwiVG9wXCIgPSBudWxsO1xuICBAbWoubm9kZShcIlRvcC9CYWRnZVwiKVxuICBiYWRnZU5vZGU6IFwiVG9wL0JhZGdlXCIgPSBudWxsO1xuICBAbWoubm9kZShcIkNvbnRlbnRcIilcbiAgY29udGVudE5vZGU6IFwiQ29udGVudFwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJiZ1wiKVxuICBiZ05vZGU6IFwiYmdcIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiVG9wL0JhZGdlL1Ryb3BoeVwiKVxuICB0cm9waHlOb2RlOiBcIlRvcC9CYWRnZS9Ucm9waHlcIiA9IG51bGw7XG4gIGxldmVsSWQgPSAwO1xuICBwcm94eSA9IG51bGw7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvam91cm5leS9Kb3VybmV5UmV3YXJkXCI7XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5wcm94eSA9IEJhc2VTcGluZS5yZWZyZXNoV2l0aE5vZGUodGhpcy5hbmltVXAubm9kZSk7XG4gICAgdGhpcy5wcm94eS5yZXNldChcIlwiKTtcbiAgICB0aGlzLnByb3h5Lm1hcmtSZWFkeShcIlwiKTtcbiAgICB0aGlzLnByb3h5LmF0dGFjaE5vZGUoXCJob29rX2ljb25cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHQuaWNvbk5vZGU7XG4gICAgfSk7XG4gICAgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMucGxheUJ0biwgdGhpcy5vblBsYXlCdG5DbGljay5iaW5kKHRoaXMpKTtcbiAgfVxuICB2aWV3RGlkTG9hZChlKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHRoaXMubGV2ZWxJZCA9IGUubGV2ZWxJZDtcbiAgICB2YXIgbyA9IFRyYXZlbEdhbWVNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1ckpvdXJuZXkoKSxcbiAgICAgIG4gPSBUcmF2ZWxHYW1lTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRSZXdhcmRJbmZvKG8pLmZpbmQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUubHYgPT09IHQubGV2ZWxJZDtcbiAgICAgIH0pLFxuICAgICAgaSA9IERhdGFSZWFkZXIuZ2V0QnlLZXkoQ29uZmlnVHlwZS5yZXdhcmRfY29uZmlnLCBuLnJld2FyZCksXG4gICAgICByID0gRGF0YVJlYWRlci5nZXRCeUtleShDb25maWdUeXBlLml0ZW1fY29uZmlnLCBpLkl0ZW1zWzBdKTtcbiAgICBJMThOU3RyaW5ncy5zZXRUZXh0KHRoaXMudGl0bGVMYWJlbC5ub2RlLCBJMThOU3RyaW5ncy5nZXQobnVsbCA9PSByID8gdm9pZCAwIDogci5OYW1lS2V5KSwgbnVsbCA9PSByID8gdm9pZCAwIDogci5OYW1lS2V5KTtcbiAgICBJMThOU3RyaW5ncy5zZXRUZXh0KHRoaXMudGl0bGVMYWJlbDIubm9kZSwgSTE4TlN0cmluZ3MuZ2V0KG51bGwgPT0gciA/IHZvaWQgMCA6IHIuTmFtZUtleSksIG51bGwgPT0gciA/IHZvaWQgMCA6IHIuTmFtZUtleSk7XG4gICAgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUodGhpcy5pY29uTm9kZSwgXCJ0ZXh0dXJlL2JhZGdlL1wiICsgKG51bGwgPT0gciA/IHZvaWQgMCA6IHIuSWNvbiksIGZhbHNlKTtcbiAgICBEb3RHYW1lQnRuQ2xpY2suZG90QmFkZ2UoRUJhZGdlQ2xpY2tUeXBlLkJhZGdlR2V0LCBcIlwiICsgSTE4TlN0cmluZ3MuZ2V0Q04obnVsbCA9PSByID8gdm9pZCAwIDogci5OYW1lS2V5KSk7XG4gICAgdGhpcy50cm9waHlOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIG1qLmF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KEVBdWRpb0lELlRyYXZlbFRhZ3MpO1xuICAgIHRoaXMucGxheUFuaW0oKTtcbiAgICB0aGlzLmlzQXV0b0Nsb3NlKCkgJiYgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgdC5vblBsYXlCdG5DbGljaygpO1xuICAgIH0sIDMpO1xuICB9XG4gIHZpZXdEaWRTaG93KCkge31cbiAgcGxheUFuaW0oKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIHRoaXMudHJhaWxOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuYW5pbURvd24ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmljb25Ob2RlLm9wYWNpdHkgPSAwO1xuICAgIHRoaXMuaWNvbk5vZGUuc2V0UG9zaXRpb24oY2MuVmVjMy5aRVJPKTtcbiAgICB0aGlzLmFuaW1VcC5zZXRFdmVudExpc3RlbmVyKGZ1bmN0aW9uICh0LCBvKSB7XG4gICAgICBpZiAoXCJldmVudF9yZXdhcmRzXCIgPT09IG8uZGF0YS5uYW1lKSB7XG4gICAgICAgIGUuYW5pbURvd24ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBjYy50d2VlbihlLmljb25Ob2RlKS50bygwLjIsIHtcbiAgICAgICAgICBvcGFjaXR5OiAyNTVcbiAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgR2FtZVV0aWxzLnBsYXlTcGluZShlLmFuaW1Eb3duLCBcImluX2Rvd25cIiwgZmFsc2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBHYW1lVXRpbHMucGxheVNwaW5lKGUuYW5pbURvd24sIFwiaW5pdF9kb3duXCIsIHRydWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBHYW1lVXRpbHMucGxheVNwaW5lKHRoaXMuYW5pbVVwLCBcImluX3VwXCIsIGZhbHNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICBlLmFuaW1VcC5zZXRFdmVudExpc3RlbmVyKG51bGwpO1xuICAgICAgR2FtZVV0aWxzLnBsYXlTcGluZShlLmFuaW1VcCwgXCJpbml0X3VwXCIsIHRydWUpO1xuICAgIH0pO1xuICAgIHRoaXMudGl0bGVMYWJlbC5ub2RlLnNjYWxlID0gMC4zO1xuICAgIGNjLnR3ZWVuKHRoaXMudGl0bGVMYWJlbC5ub2RlKS50bygwLjIsIHtcbiAgICAgIHNjYWxlOiAxLjNcbiAgICB9LCB7XG4gICAgICBlYXNpbmc6IGNjLmVhc2luZy5xdWFkT3V0XG4gICAgfSkudG8oMC4xNywge1xuICAgICAgc2NhbGU6IDAuOFxuICAgIH0sIHtcbiAgICAgIGVhc2luZzogY2MuZWFzaW5nLnNpbmVPdXRcbiAgICB9KS50bygwLjEzLCB7XG4gICAgICBzY2FsZTogMVxuICAgIH0sIHtcbiAgICAgIGVhc2luZzogY2MuZWFzaW5nLnNpbmVPdXRcbiAgICB9KS5zdGFydCgpO1xuICAgIHRoaXMudGl0bGVMYWJlbDIubm9kZS5vcGFjaXR5ID0gMDtcbiAgICBjYy50d2Vlbih0aGlzLnRpdGxlTGFiZWwyLm5vZGUpLmRlbGF5KDAuNSkudG8oMC4xNywge1xuICAgICAgb3BhY2l0eTogMjU1XG4gICAgfSwge1xuICAgICAgZWFzaW5nOiBjYy5lYXNpbmcucXVhZE91dFxuICAgIH0pLnRvKDAuOCwge1xuICAgICAgb3BhY2l0eTogMFxuICAgIH0sIHtcbiAgICAgIGVhc2luZzogY2MuZWFzaW5nLnF1YWRJbk91dFxuICAgIH0pLnN0YXJ0KCk7XG4gICAgdGhpcy5wbGF5QnRuLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMucGxheUJ0bi5zY2FsZSA9IDAuNjtcbiAgICBjYy50d2Vlbih0aGlzLnBsYXlCdG4pLmRlbGF5KDAuNCkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICBlLnBsYXlCdG4uYWN0aXZlID0gdHJ1ZTtcbiAgICB9KS50bygwLjIsIHtcbiAgICAgIHNjYWxlOiAxLjA1XG4gICAgfSwge1xuICAgICAgZWFzaW5nOiBjYy5lYXNpbmcucXVhZE91dFxuICAgIH0pLnRvKDAuMTYsIHtcbiAgICAgIHNjYWxlOiAxXG4gICAgfSwge1xuICAgICAgZWFzaW5nOiBjYy5lYXNpbmcucXVhZEluXG4gICAgfSkuc3RhcnQoKTtcbiAgfVxuICBwbGF5Q29sbGVjdEFuaW0oKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIHRoaXMuaGlkZUJnQW5pbSgwLjgpO1xuICAgIHRoaXMuaWNvbk5vZGUuc2NhbGUgPSAxO1xuICAgIHRoaXMuaWNvbk5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICB2YXIgdCA9IGNjLnR3ZWVuKHRoaXMuaWNvbk5vZGUpLnRvKDAuMSwge1xuICAgICAgICBzY2FsZTogMS4wNVxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5xdWFkT3V0XG4gICAgICB9KS50bygwLjIsIHtcbiAgICAgICAgc2NhbGU6IDAuM1xuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5xdWFkSW5cbiAgICAgIH0pLFxuICAgICAgbyA9IGNjLnR3ZWVuKHRoaXMuaWNvbk5vZGUpLnRvKDAuMywge1xuICAgICAgICBvcGFjaXR5OiAwXG4gICAgICB9KTtcbiAgICBjYy50d2Vlbih0aGlzLmljb25Ob2RlKS5wYXJhbGxlbCh0LCBvKS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgIGUuaWNvbk5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICBlLnBsYXlUcmFpbEFuaW0oZnVuY3Rpb24gKCkge1xuICAgICAgICBlLnRyb3BoeU5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgR2FtZVV0aWxzLnBsYXlTcGluZShlLnRyb3BoeU5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKSwgXCJpbl90cm9waHlcIiwgZmFsc2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgdDtcbiAgICAgICAgICBlLmRpc3BhdGNoRXZlbnQoVFJBVkVMX0dBTUVfQ09MTEVDVF9CQURHRSwgZS5sZXZlbElkKTtcbiAgICAgICAgICBudWxsID09PSAodCA9IGUuZGVsZWdhdGUpIHx8IHZvaWQgMCA9PT0gdCB8fCB0LmNsb3NlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSkuc3RhcnQoKTtcbiAgICBjYy50d2Vlbih0aGlzLmFuaW1Eb3duLm5vZGUpLmRlbGF5KDAuMikuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICBHYW1lVXRpbHMucGxheVNwaW5lKGUuYW5pbURvd24sIFwib3V0X2NvbGxlY3Rpb25cIiwgZmFsc2UpO1xuICAgIH0pLnN0YXJ0KCk7XG4gIH1cbiAgcGxheVRyYWlsQW5pbShlKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIG1qLmF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KEVBdWRpb0lELlRyYXZlbENvbGxlY3QpO1xuICAgIEVBdWRpb0lEO1xuICAgIHRoaXMudHJhaWxOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdmFyIG8gPSB0aGlzLmljb25Ob2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5pY29uTm9kZS5wb3NpdGlvbiksXG4gICAgICBuID0gdGhpcy50cmFpbE5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKG8pO1xuICAgIHRoaXMudHJhaWxOb2RlLnBvc2l0aW9uID0gbjtcbiAgICB2YXIgaSA9IHRoaXMuYmFkZ2VOb2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5iYWRnZU5vZGUucG9zaXRpb24pLFxuICAgICAgciA9IHRoaXMudHJhaWxOb2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihpKTtcbiAgICBjYy50d2Vlbih0aGlzLnRyYWlsTm9kZSkudG8oMC4zLCB7XG4gICAgICBwb3NpdGlvbjogclxuICAgIH0sIHtcbiAgICAgIGVhc2luZzogY2MuZWFzaW5nLnNpbmVJbk91dFxuICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgdC5zdG9wVHJhaWxQYXJ0aWNsZSgpO1xuICAgIH0pLmRlbGF5KDAuMjUpLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgdC50cmFpbE5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICBudWxsID09IGUgfHwgZSgpO1xuICAgIH0pLnN0YXJ0KCk7XG4gICAgdGhpcy50cmFpbE5vZGUuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oY2MuUGFydGljbGVTeXN0ZW0pLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucmVzZXRTeXN0ZW0oKTtcbiAgICAgIGUuc3BlZWQgKj0gMTtcbiAgICB9KTtcbiAgfVxuICBvblBsYXlCdG5DbGljaygpIHtcbiAgICBEb3RHYW1lQnRuQ2xpY2suZG90VmljdG9yeUNoZXN0KEVWaWN0b3J5Q2hlc3RDbGlja1R5cGUuVHJhdmVsQ2xhaW1SZXdhcmRDb2xsZWN0aW9uKTtcbiAgICB0aGlzLnBsYXlCdG4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgdGhpcy5wbGF5Q29sbGVjdEFuaW0oKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRyYXZlbFJld2FyZFZ2X2F1dG9DbG9zZVwiKVxuICBpc0F1dG9DbG9zZSgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaGlkZUJnQW5pbShlKSB7XG4gICAgY2MudHdlZW4odGhpcy5iZ05vZGUpLnRvKGUsIHtcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9KS5zdGFydCgpO1xuICAgIGNjLnR3ZWVuKHRoaXMuY29udGVudE5vZGUpLnRvKGUsIHtcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9KS5zdGFydCgpO1xuICB9XG4gIHN0b3BUcmFpbFBhcnRpY2xlKCkge1xuICAgIGlmICh0aGlzLnRyYWlsTm9kZSAmJiBjYy5pc1ZhbGlkKHRoaXMudHJhaWxOb2RlKSkgdHJ5IHtcbiAgICAgIHRoaXMudHJhaWxOb2RlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuKGNjLlBhcnRpY2xlU3lzdGVtKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUuc3RvcFN5c3RlbSgpO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxufSJdfQ==
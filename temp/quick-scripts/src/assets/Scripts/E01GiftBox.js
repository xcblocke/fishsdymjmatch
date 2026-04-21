"use strict";
cc._RF.push(module, '8231ejfuNJH+LUSQ86D2Gnf', 'E01GiftBox');
// Scripts/E01GiftBox.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ElementLevel_1 = require("./ElementLevel");
var TravelMapInterface_1 = require("./TravelMapInterface");
var GameUtils_1 = require("./core/simulator/util/GameUtils");
var BaseSprite_1 = require("./gamePlay/base/ui/BaseSprite");
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var i;
(i = {})[TravelMapInterface_1.MapElementId.E01GiftBox1] = "texture/badge/journey_img_medal_1";
i[TravelMapInterface_1.MapElementId.E01GiftBox2] = "texture/badge/journey_img_medal_2";
i[TravelMapInterface_1.MapElementId.E01GiftBox3] = "texture/badge/journey_img_medal_3";
var f = i;
var E01GiftBox = /** @class */ (function (_super) {
    __extends(E01GiftBox, _super);
    function E01GiftBox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.titleLabel = null;
        _this.button = null;
        _this.animNode = null;
        _this.cardNode = null;
        _this.badgeBg = null;
        _this.badgeLightBg = null;
        _this.badgeNode = null;
        _this.badgeIcon = null;
        _this.badgeLight = null;
        _this.selectAnim = null;
        _this.badgeUpBg = null;
        return _this;
    }
    E01GiftBox.prototype.uiOnLoad = function () {
        _super.prototype.uiOnLoad.call(this);
        this.titleLabel = cc.find("Element/Level", this.node).getComponent(cc.Label);
        this.button = cc.find("Element", this.node);
        this.animNode = cc.find("Element/Anim", this.node);
        this.cardNode = cc.find("Element/Card", this.node);
        this.badgeNode = cc.find("Element/Card/Badge", this.node);
        this.badgeBg = cc.find("Element/Card/BadgeBg", this.node);
        this.badgeUpBg = cc.find("Element/Card/Up", this.node);
        this.badgeLightBg = cc.find("Element/Card/LightBg", this.node);
        this.badgeIcon = cc.find("Element/Card/Badge/Icon", this.node);
        this.badgeLight = cc.find("Element/Card/Badge/Light", this.node).getComponent(sp.Skeleton);
        this.selectAnim = cc.find("Element/Select", this.node).getComponent(sp.Skeleton);
        this.selectAnim.node.active = false;
        this.badgeLight.node.active = false;
        this.addLevelBtnClick(this.button, this.onButtonClick.bind(this), {
            clickAudio: GameTypeEnums_1.EAudioID.TravelButton1
        });
    };
    E01GiftBox.prototype.updateUI = function () {
        _super.prototype.updateUI.call(this);
        this.titleLabel.string = "" + this._data.level;
        BaseSprite_1.default.refreshWithNode(this.badgeIcon, f[this._data.type], false);
    };
    E01GiftBox.prototype.resetState = function () {
        this.selectAnim.paused = true;
        this.selectAnim.node.active = false;
    };
    E01GiftBox.prototype.getBadgeId = function () {
        var e = 1;
        if (this._data.type === TravelMapInterface_1.MapElementId.E01GiftBox2) {
            e = 2;
        }
        else {
            this._data.type === TravelMapInterface_1.MapElementId.E01GiftBox3 && (e = 3);
        }
        return e;
    };
    E01GiftBox.prototype.playAnim = function (e, t) {
        if (cc.isValid(this.animNode) && cc.isValid(this.node.parent)) {
            var o = this.getBadgeId();
            GameUtils_1.default.playSpine(this.animNode.getComponent(sp.Skeleton), e + "_" + o, false, t);
        }
    };
    E01GiftBox.prototype.onButtonClick = function () {
        this._data.state !== TravelMapInterface_1.EJourneyMapState.Selected && this._data.state !== TravelMapInterface_1.EJourneyMapState.Locked || this.playAnim("tap");
        this.goToTravelGame();
    };
    E01GiftBox.prototype.onLevelSelect = function () {
        var e = this;
        this.cardNode.active = false;
        this.animNode.active = true;
        this.playAnim("idle");
        this.selectAnim.node.active = true;
        if (this._data.isSelect)
            GameUtils_1.default.playSpine(this.selectAnim, "unlocking_idle_init", true);
        else {
            this._data.isSelect = true;
            GameUtils_1.default.playSpine(this.selectAnim, "unlocking_idle_in", false, function () {
                GameUtils_1.default.playSpine(e.selectAnim, "unlocking_idle_init", true);
            });
        }
    };
    E01GiftBox.prototype.onLevelSelectUnlocked = function () {
        var e = this;
        this.cardNode.active = true;
        this.badgeNode.active = true;
        this.animNode.active = false;
        this.badgeUpBg.active = false;
        this.badgeLightBg.active = true;
        this.selectAnim.node.active = true;
        if (this._data.isSelect)
            GameUtils_1.default.playSpine(this.selectAnim, "unlocking_idle_init", true);
        else {
            this._data.isSelect = true;
            GameUtils_1.default.playSpine(this.selectAnim, "unlocking_idle_in", false, function () {
                GameUtils_1.default.playSpine(e.selectAnim, "unlocking_idle_init", true);
            });
        }
    };
    E01GiftBox.prototype.onLevelLock = function () {
        this.cardNode.active = false;
        this.animNode.active = true;
        this.playAnim("idle");
        this.selectAnim.node.active = false;
    };
    E01GiftBox.prototype.onLevelUnlock = function () {
        this.cardNode.active = true;
        this.badgeNode.active = true;
        this.animNode.active = false;
        this.badgeUpBg.active = false;
        this.badgeLightBg.active = true;
        this.selectAnim.node.active = false;
    };
    E01GiftBox.prototype.onLevelUnlockPass = function () {
        this._data.state = TravelMapInterface_1.EJourneyMapState.Unlocked;
        this.onLevelUnlock();
    };
    E01GiftBox.prototype.badgeCollectStart = function () {
        this.cardNode.active = true;
        this.animNode.active = false;
        this.badgeNode.active = false;
        this.badgeUpBg.active = true;
        this.badgeLightBg.active = false;
        this.badgeLight.node.active = false;
    };
    E01GiftBox.prototype.badgeCollectEnd = function () {
        var e = this;
        cc.Tween.stopAllByTarget(this.node);
        cc.tween(this.node).delay(0.01).call(function () {
            e.playBadgeAnim();
        }).start();
        this.addBlockTouch();
    };
    E01GiftBox.prototype.playBadgeAnim = function () {
        var e = this;
        if (cc.isValid(this.badgeBg.parent)) {
            var t = this.getBadgeId();
            this.badgeNode.active = true;
            var o = this.badgeNode.position, n = this.badgeNode.parent.convertToWorldSpaceAR(o), i = cc.Canvas.instance.node.convertToNodeSpaceAR(n), r = this.badgeNode.parent, a = this.badgeNode, l = cc.Canvas.instance.node;
            a.parent = l;
            a.position = cc.Vec3.ZERO;
            var s = cc.tween().to(0.5, {
                position: i
            }, {
                easing: cc.easing.cubicInOut
            }).call(function () {
                if (cc.isValid(r)) {
                    if (cc.isValid(f)) {
                        f.node.scale = 1;
                        a.parent = r;
                        a.setPosition(o);
                        e.badgeBg.active = true;
                        e.badgeLightBg.active = true;
                        e.badgeLightBg.opacity = 0;
                        cc.tween(e.badgeLightBg).to(0.16, {
                            opacity: 255
                        }).call(function () { }).start();
                        GameUtils_1.default.playSpine(f, "out_" + t, false, function () {
                            f.node.active = false;
                            e.onLevelUnlock();
                        });
                    }
                }
                else
                    a.destroy();
            }), u = cc.tween().to(0.16, {
                angle: 25
            }, {
                easing: cc.easing.sineInOut
            }).to(0.34, {
                angle: 0
            }, {
                easing: cc.easing.cubicIn
            }), p = cc.tween().to(0.16, {
                scale: 3
            }, {
                easing: cc.easing.circOut
            }).to(0.34, {
                scale: 0.9
            }, {
                easing: cc.easing.cubicIn
            }).to(0.16, {
                scale: 1
            }, {
                easing: cc.easing.sineInOut
            });
            a.setPosition(cc.Vec3.ZERO);
            a.setScale(0.01);
            a.active = true;
            var f = a.getComponentInChildren(sp.Skeleton);
            f.node.scale = 0.7;
            f.node.active = true;
            GameUtils_1.default.playSpine(f, "in_" + t, false);
            cc.tween(a).to(0.33, {
                scale: 2
            }, {
                easing: cc.easing.backOut
            }).delay(0.17).parallel(s, u, p).start();
        }
    };
    E01GiftBox.prefabUrl = "prefabs/journeyMap/01/E01GiftBox";
    E01GiftBox.size = new cc.Size(348, 378);
    E01GiftBox = __decorate([
        mj.class
    ], E01GiftBox);
    return E01GiftBox;
}(ElementLevel_1.default));
exports.default = E01GiftBox;

cc._RF.pop();
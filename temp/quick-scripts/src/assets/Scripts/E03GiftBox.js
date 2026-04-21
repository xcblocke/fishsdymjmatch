"use strict";
cc._RF.push(module, '94e3dYGnPxDg7D2dXvZ5S5f', 'E03GiftBox');
// Scripts/E03GiftBox.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ElementLevel_1 = require("./ElementLevel");
var TravelMapInterface_1 = require("./TravelMapInterface");
var GameUtils_1 = require("./core/simulator/util/GameUtils");
var BaseSprite_1 = require("./gamePlay/base/ui/BaseSprite");
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var i;
(i = {})[TravelMapInterface_1.MapElementId.E03GiftBox1] = ["texture/badge/journey_img_ch_medal_1", "texture/journeyMap/03/journey_bg_medal"];
i[TravelMapInterface_1.MapElementId.E03GiftBox2] = ["texture/badge/journey_img_ch_medal_2", "texture/journeyMap/03/journey_bg_medal_2"];
i[TravelMapInterface_1.MapElementId.E03GiftBox3] = ["texture/badge/journey_img_ch_medal_3", "texture/journeyMap/03/journey_bg_medal_3"];
var d = i;
var E03GiftBox = /** @class */ (function (_super) {
    __extends(E03GiftBox, _super);
    function E03GiftBox() {
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
    E03GiftBox.prototype.uiOnLoad = function () {
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
    E03GiftBox.prototype.updateUI = function () {
        _super.prototype.updateUI.call(this);
        this.titleLabel.string = "" + this._data.level;
        var t = __read(d[this._data.type], 2), o = t[0], n = t[1];
        BaseSprite_1.default.refreshWithNode(this.badgeIcon, o, false);
        BaseSprite_1.default.refreshWithNode(this.badgeBg, n, false);
    };
    E03GiftBox.prototype.resetState = function () {
        this.selectAnim.paused = true;
        this.selectAnim.node.active = false;
    };
    E03GiftBox.prototype.getBadgeId = function () {
        var e = 1;
        if (this._data.type === TravelMapInterface_1.MapElementId.E03GiftBox2) {
            e = 2;
        }
        else {
            this._data.type === TravelMapInterface_1.MapElementId.E03GiftBox3 && (e = 3);
        }
        return e;
    };
    E03GiftBox.prototype.playAnim = function (e, t) {
        if (cc.isValid(this.animNode) && cc.isValid(this.node.parent)) {
            var o = this.getBadgeId();
            GameUtils_1.default.playSpine(this.animNode.getComponent(sp.Skeleton), e + "_" + o, false, t);
        }
    };
    E03GiftBox.prototype.onButtonClick = function () {
        this._data.state !== TravelMapInterface_1.EJourneyMapState.Selected && this._data.state !== TravelMapInterface_1.EJourneyMapState.Locked || this.playAnim("tap");
        this.goToTravelGame();
    };
    E03GiftBox.prototype.onLevelSelect = function () {
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
    E03GiftBox.prototype.onLevelSelectUnlocked = function () {
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
    E03GiftBox.prototype.onLevelLock = function () {
        this.cardNode.active = false;
        this.animNode.active = true;
        this.playAnim("idle");
        this.selectAnim.node.active = false;
    };
    E03GiftBox.prototype.onLevelUnlock = function () {
        this.cardNode.active = true;
        this.badgeNode.active = true;
        this.animNode.active = false;
        this.badgeUpBg.active = false;
        this.badgeLightBg.active = true;
        this.selectAnim.node.active = false;
    };
    E03GiftBox.prototype.onLevelUnlockPass = function () {
        this._data.state = TravelMapInterface_1.EJourneyMapState.Unlocked;
        this.onLevelUnlock();
    };
    E03GiftBox.prototype.badgeCollectStart = function () {
        this.cardNode.active = true;
        this.animNode.active = false;
        this.badgeNode.active = false;
        this.badgeUpBg.active = true;
        this.badgeLightBg.active = false;
        this.badgeLight.node.active = false;
    };
    E03GiftBox.prototype.badgeCollectEnd = function () {
        var e = this;
        cc.Tween.stopAllByTarget(this.node);
        cc.tween(this.node).delay(0.01).call(function () {
            e.playBadgeAnim();
        }).start();
        this.addBlockTouch();
    };
    E03GiftBox.prototype.playBadgeAnim = function () {
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
            }), c = cc.tween().to(0.16, {
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
            }).delay(0.17).parallel(s, c, p).start();
        }
    };
    E03GiftBox.prefabUrl = "prefabs/journeyMap/03/E03GiftBox";
    E03GiftBox.size = new cc.Size(348, 378);
    E03GiftBox = __decorate([
        mj.class
    ], E03GiftBox);
    return E03GiftBox;
}(ElementLevel_1.default));
exports.default = E03GiftBox;

cc._RF.pop();
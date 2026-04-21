"use strict";
cc._RF.push(module, '0143a/9NTBP87NyhNle7xZ6', 'TravelValentineTrait');
// subpackages/l_travelValentine/Scripts/scripts/TravelValentineTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../../Scripts/framework/trait/Trait");
var ControllerManager_1 = require("../../../../Scripts/framework/manager/ControllerManager");
var TravelMapInterface_1 = require("../../../../Scripts/TravelMapInterface");
var E06GiftBox_1 = require("./E06GiftBox");
var E06Normal_1 = require("./E06Normal");
var E06Rose_1 = require("./E06Rose");
var E06Letter_1 = require("./E06Letter");
var MapElementFactory_1 = require("../../../../Scripts/elements/MapElementFactory");
var GameTypeEnums_1 = require("../../../../Scripts/core/simulator/constant/GameTypeEnums");
var TravelGameModel_1 = require("../../../../Scripts/gamePlay/travel/model/TravelGameModel");
var BaseSprite_1 = require("../../../../Scripts/gamePlay/base/ui/BaseSprite");
var TravelValentineTrait = /** @class */ (function (_super) {
    __extends(TravelValentineTrait, _super);
    function TravelValentineTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TravelValentineTrait.prototype, "startTime", {
        get: function () {
            return this.traitData.special.start;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TravelValentineTrait.prototype, "endTime", {
        get: function () {
            return this.traitData.special.end;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TravelValentineTrait.prototype, "journey", {
        get: function () {
            return this.traitData.special.journey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TravelValentineTrait.prototype, "replaceHallTheme", {
        get: function () {
            var e, t;
            return null === (t = null === (e = this.traitData) || void 0 === e ? void 0 : e.replaceHallTheme) || void 0 === t || t;
        },
        enumerable: false,
        configurable: true
    });
    TravelValentineTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerElements();
    };
    TravelValentineTrait.prototype.registerElements = function () {
        MapElementFactory_1.MapElementFactory.registerMapElement(TravelMapInterface_1.MapElementId.E06Normal, E06Normal_1.default);
        MapElementFactory_1.MapElementFactory.registerMapElement(TravelMapInterface_1.MapElementId.E06GiftBox1, E06GiftBox_1.default);
        MapElementFactory_1.MapElementFactory.registerMapElement(TravelMapInterface_1.MapElementId.E06GiftBox2, E06GiftBox_1.default);
        MapElementFactory_1.MapElementFactory.registerMapElement(TravelMapInterface_1.MapElementId.E06GiftBox3, E06GiftBox_1.default);
        MapElementFactory_1.MapElementFactory.registerMapElement(TravelMapInterface_1.MapElementId.E06Rose, E06Rose_1.default);
        MapElementFactory_1.MapElementFactory.registerMapElement(TravelMapInterface_1.MapElementId.E06Letter, E06Letter_1.default);
        MapElementFactory_1.MapElementFactory.registerMapElement(TravelMapInterface_1.MapElementId.E06LevelGiftBox1, E06Normal_1.default);
        MapElementFactory_1.MapElementFactory.registerMapElement(TravelMapInterface_1.MapElementId.E06LevelGiftBox2, E06Normal_1.default);
        MapElementFactory_1.MapElementFactory.registerMapElement(TravelMapInterface_1.MapElementId.E06LevelGiftBox3, E06Normal_1.default);
        MapElementFactory_1.MapElementFactory.registerMapElement(TravelMapInterface_1.MapElementId.E06LevelGiftBox4, E06Normal_1.default);
    };
    TravelValentineTrait.prototype.checkInSpecialTime = function () {
        var e = Date.now() / 1000;
        return e >= this.startTime && e <= this.endTime;
    };
    TravelValentineTrait.prototype.isLocalEmpty = function (e) {
        return null == e || "" === e;
    };
    TravelValentineTrait.prototype.getCurSpecialKey = function () {
        return "Special_" + this.journey + "_" + this.startTime + "_" + this.endTime;
    };
    TravelValentineTrait.prototype.canTriggerSpecial = function (e) {
        return !!this.checkInSpecialTime() && !!e.isActiveJourney() && !this.isTriggered();
    };
    TravelValentineTrait.prototype.isTriggered = function () {
        var e = this.getCurSpecialKey(), t = this.localData[e];
        return !this.isLocalEmpty(t);
    };
    TravelValentineTrait.prototype.onJourney_NextSession = function (e, t) {
        if (this.canTriggerSpecial(e.ins)) {
            t({
                returnType: TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: [this.journey, -1]
            });
        }
        else {
            t();
        }
    };
    TravelValentineTrait.prototype.onJourney_DoChange = function (e, t) {
        if (this.canTriggerSpecial(e.ins)) {
            var r = __read(e.args, 2), n = r[0], o = r[1];
            if (n === this.journey && o < 0) {
                var i = this.getCurSpecialKey();
                this.localData[i] = new Date().getTime();
            }
        }
        t();
    };
    TravelValentineTrait.prototype.onJourney_doShwActiveVw = function (e, t) {
        var r = e.args[0], n = r.config, o = r.isNewSession;
        if (n.session === this.journey) {
            ControllerManager_1.default.getInstance().pushViewByController("TravelValentineController", {
                config: n,
                isNewSession: o,
                isShowAction: false,
                bgStyle: {
                    blackOpacity: 0
                }
            });
            t({
                returnType: TraitCallbackReturnType.jump
            });
        }
        else
            t();
    };
    TravelValentineTrait.prototype.onJourney_doHideActiveVw = function (e, t) {
        ControllerManager_1.default.getInstance().closeViewByName("TravelValentineController");
        t();
    };
    TravelValentineTrait.prototype.onMainGmVw_afChangeTheme = function (e, t) {
        var r = e.ins;
        if (e.args[0] === GameTypeEnums_1.MjGameType.Travel) {
            if (TravelGameModel_1.default.getInstance().localData.curJourney === this.journey) {
                this.changeBg(r);
                t();
            }
            else
                t();
        }
        else
            t();
    };
    TravelValentineTrait.prototype.changeBg = function (e) {
        if (cc.isValid(e) && cc.isValid(e.gameNode) && cc.isValid(e.node)) {
            var t = e.gameNode.getSiblingIndex(), r = e.node.getChildByName("bg");
            if (cc.isValid(r) || !cc.isValid(r.parent)) {
                var n = r.parent.getChildByName("_valentineBg_");
                cc.isValid(n) && n.destroy();
                var o = new cc.Node("_valentineBg_");
                o.parent = r.parent;
                o.setSiblingIndex(t);
                o.once(BaseSprite_1.SPRITE_LOAD_COMPLETE, function (t) {
                    if (e && cc.isValid(e.node)) {
                        var r = t.spriteFrame;
                        if (r) {
                            if (r.getRect().width > 0 && r.getRect().height > 0) {
                                var n = cc.size(r.getRect().width, r.getRect().height);
                                o.setContentSize(n);
                                var i = cc.Canvas.instance.node.getContentSize(), a = n.width / n.height;
                                if (i.width / i.height > a) {
                                    o.setScale(i.width / n.width);
                                }
                                else {
                                    o.setScale(i.height / n.height);
                                }
                            }
                            var l = e.node.getChildByName("bg");
                            cc.isValid(l) && (l.active = false);
                        }
                    }
                });
                BaseSprite_1.default.refreshWithNode(o, "texture/gameplay_bg_board", false, true, "l_travelValentine");
            }
        }
    };
    TravelValentineTrait.prototype.onHallVw_chgTheme = function (e, t) {
        var r = TravelGameModel_1.default.getInstance(), n = r.getCurJourney();
        if (this.replaceHallTheme) {
            if (e.args[1]) {
                if (n === this.journey) {
                    if (r.isSessionActive()) {
                        e.args[0] = "Hall4";
                        t();
                    }
                    else
                        t();
                }
                else
                    t();
            }
            else
                t();
        }
        else
            t();
    };
    TravelValentineTrait.traitKey = "TravelValentine";
    TravelValentineTrait = __decorate([
        mj.trait,
        mj.class("TravelValentineTrait")
    ], TravelValentineTrait);
    return TravelValentineTrait;
}(Trait_1.default));
exports.default = TravelValentineTrait;

cc._RF.pop();
"use strict";
cc._RF.push(module, '8dffbCXBkFPnYzxkYUWcrvT', 'TravelMotivationalWordsTrait');
// subpackages/r_travelMotivationalWords/Scripts/TravelMotivationalWordsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var EffectLayerEnum_1 = require("../../../Scripts/constant/EffectLayerEnum");
var TravelMotivationalWordsTrait = /** @class */ (function (_super) {
    __extends(TravelMotivationalWordsTrait, _super);
    function TravelMotivationalWordsTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.THRESHOLDS = [0, 30, 60, 90];
        _this.TIER_NAMES = ["", "Great", "Excellent", "Amazing", "Unbelievable"];
        _this.ANIMATION_NAMES = ["", "in_great", "in_excellent", "in_amazing", "in_unbelievable"];
        _this._gameType = GameTypeEnums_1.MjGameType.None;
        _this._motivWordsNode = null;
        _this._lightNode = null;
        _this._prefabUrl = "prefabs/EffectMotivationalWordsItem";
        _this._lightUrl = "prefabs/EffectMotivationalLights";
        _this._bundleName = "r_travelMotivationalWords";
        _this.AUDIO_IDS = [0, 13, 14, 15, 16];
        return _this;
    }
    TravelMotivationalWordsTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.localData.Travel || (this.localData.Travel = {
            triggeredTiers: [false, false, false, false],
            lastProgress: 0
        });
        Array.isArray(this.localData.Travel.triggeredTiers) && 4 === this.localData.Travel.triggeredTiers.length || (this.localData.Travel.triggeredTiers = [false, false, false, false]);
    };
    TravelMotivationalWordsTrait.prototype.onInitViewBhv_crtTls = function (t, e) {
        var i, o, r, a, l, s;
        this._gameType = null === (o = null === (i = t.ins) || void 0 === i ? void 0 : i._context) || void 0 === o ? void 0 : o.gameType;
        if (this._gameType === GameTypeEnums_1.MjGameType.Travel) {
            var c = t.ins, d = (null == c ? void 0 : c.context) || (null == c ? void 0 : c._context), u = null === (a = null === (r = null == d ? void 0 : d.getTileMapObject) || void 0 === r ? void 0 : r.call(d)) || void 0 === a ? void 0 : a.gameContext;
            if (null !== (s = null === (l = null == u ? void 0 : u.getIsNewGame) || void 0 === l ? void 0 : l.call(u)) && void 0 !== s && s) {
                this.localData.Travel.triggeredTiers = [false, false, false, false];
                this.localData.Travel.lastProgress = 0;
                this.localData.Travel = this.localData.Travel;
            }
            this.cleanupNodes();
            e();
        }
        else
            e();
    };
    TravelMotivationalWordsTrait.prototype.calculateCollectProgress = function (t) {
        var e = t.getAllCollectDetails();
        if (0 === e.length)
            return 0;
        var i = 0, o = 0;
        e.forEach(function (t) {
            i += t.allCount;
            o += t.allCount - t.count;
        });
        return 0 === i ? 0 : o / i * 100;
    };
    TravelMotivationalWordsTrait.prototype.checkAndTriggerTier = function (t) {
        for (var e = 0, i = 0; i < 4; i++) {
            var o = this.THRESHOLDS[i];
            !this.localData.Travel.triggeredTiers[i] && (0 === i ? t > o : t >= o) && (e = i + 1);
        }
        if (e > 0) {
            for (i = 0; i < e; i++)
                this.localData.Travel.triggeredTiers[i] = true;
            this.localData.Travel = this.localData.Travel;
        }
        return e;
    };
    TravelMotivationalWordsTrait.prototype.onClearBhv_collision = function (t, e) {
        var i;
        if (this._gameType === GameTypeEnums_1.MjGameType.Travel) {
            var o = t.ins, r = null == o ? void 0 : o.context;
            if (r) {
                var a = null === (i = r.getTileMapObject) || void 0 === i ? void 0 : i.call(r), l = null == a ? void 0 : a.collectSystem;
                if (l) {
                    var s = this.calculateCollectProgress(l);
                    this.localData.Travel.lastProgress = s;
                    this.localData.Travel = this.localData.Travel;
                    var c = this.checkAndTriggerTier(s);
                    c > 0 && this.showMotivationalWords(c, r);
                    e();
                }
                else
                    e();
            }
            else
                e();
        }
        else
            e();
    };
    TravelMotivationalWordsTrait.prototype.showMotivationalWords = function (t, e) {
        var i, o = this, r = null == e ? void 0 : e.gameView;
        if (r) {
            this.cleanupMotivWordsNode();
            var a = (null === (i = e.getLastCollisionWorldPos) || void 0 === i ? void 0 : i.call(e)) || cc.v3(0, 0, 0), l = cc.v2(a.x, a.y);
            BaseUI_1.default.createUI(this._prefabUrl, this._bundleName).then(function (e) {
                var i;
                if (e && cc.isValid(e)) {
                    o._motivWordsNode = e;
                    var a = r.getEffectLayer(EffectLayerEnum_1.EffectLayer.Top);
                    if (a && cc.isValid(a)) {
                        e.parent = a;
                        var n = o.getSafePosition(e, l, t), s = a.convertToNodeSpaceAR(n);
                        e.position = cc.v3(s.x, s.y + 80, 0);
                        e.active = true;
                        var u = null === (i = e.getChildByName("spin")) || void 0 === i ? void 0 : i.getComponent(sp.Skeleton);
                        if (u) {
                            var v = o.ANIMATION_NAMES[t];
                            GameUtils_1.default.playSpine(u, v, false, function () {
                                e && cc.isValid(e) && e.destroy();
                                o._motivWordsNode = null;
                            });
                        }
                        o.playMotivationalAudio(t);
                        4 === t && o.showLightEffect(r);
                    }
                    else
                        e.destroy();
                }
            }).catch(function () { });
        }
    };
    TravelMotivationalWordsTrait.prototype.getSafePosition = function (t, e, i) {
        return this.clampToScreenWorld(t, e, i);
    };
    TravelMotivationalWordsTrait.prototype.clampToScreenWorld = function (t, e, i) {
        var o = cc.view.getVisibleSize(), r = o.width, a = o.height, l = this.getWordsSize(i), n = l.width, s = l.height, c = t.anchorX, d = t.anchorY, u = e.x - n * c, v = e.x + n * (1 - c), h = e.y - s * d, p = e.y + s * (1 - d), f = 0, g = 0;
        if (u < 0) {
            f = 0 - u;
        }
        else {
            v > r && (f = r - v);
        }
        if (h < 0) {
            g = 0 - h;
        }
        else {
            p > a && (g = a - p);
        }
        if (0 !== f || 0 !== g) {
            return cc.v2(e.x + f, e.y + g);
        }
        return e;
    };
    TravelMotivationalWordsTrait.prototype.getWordsSize = function (t) {
        return [{
                width: 300,
                height: 200
            }, {
                width: 320,
                height: 200
            }, {
                width: 550,
                height: 200
            }, {
                width: 700,
                height: 200
            }, {
                width: 860,
                height: 200
            }][t] || {
            width: 450,
            height: 200
        };
    };
    TravelMotivationalWordsTrait.prototype.playMotivationalAudio = function (t) {
        var e = this.AUDIO_IDS[t];
        e > 0 && mj.audioManager.playEffect(e);
    };
    TravelMotivationalWordsTrait.prototype.showLightEffect = function (t) {
        var e = this;
        this.cleanupLightNode();
        var i = null == t ? void 0 : t.effectNode;
        i && cc.isValid(i) && BaseUI_1.default.createUI(this._lightUrl, this._bundleName).then(function (t) {
            if (t && cc.isValid(t)) {
                e._lightNode = t;
                t.parent = i;
                t.position = cc.v3(0, 0, 0);
                t.active = true;
            }
        }).catch(function () { });
    };
    TravelMotivationalWordsTrait.prototype.cleanupMotivWordsNode = function () {
        this._motivWordsNode && cc.isValid(this._motivWordsNode) && this._motivWordsNode.destroy();
        this._motivWordsNode = null;
    };
    TravelMotivationalWordsTrait.prototype.cleanupLightNode = function () {
        this._lightNode && cc.isValid(this._lightNode) && this._lightNode.destroy();
        this._lightNode = null;
    };
    TravelMotivationalWordsTrait.prototype.cleanupNodes = function () {
        this.cleanupMotivWordsNode();
        this.cleanupLightNode();
    };
    TravelMotivationalWordsTrait.traitKey = "TravelMotivationalWords";
    __decorate([
        mj.traitEvent("TravelMWords_playAudio")
    ], TravelMotivationalWordsTrait.prototype, "playMotivationalAudio", null);
    TravelMotivationalWordsTrait = __decorate([
        mj.trait,
        mj.class("TravelMotivationalWordsTrait")
    ], TravelMotivationalWordsTrait);
    return TravelMotivationalWordsTrait;
}(Trait_1.default));
exports.default = TravelMotivationalWordsTrait;

cc._RF.pop();
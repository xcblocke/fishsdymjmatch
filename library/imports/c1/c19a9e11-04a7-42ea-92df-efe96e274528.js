"use strict";
cc._RF.push(module, 'c19a94RBKdC6pLf7+luJ0Uo', 'GameEndHighlightTrait');
// subpackages/l_gameEndHighlight/Scripts/GameEndHighlightTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.HighlightType = void 0;
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var NormalGameData_1 = require("../../../Scripts/core/simulator/data/NormalGameData");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var RateUtils_1 = require("../../../Scripts/RateUtils");
var NodeSkinTool_1 = require("../../../Scripts/NodeSkinTool");
var Config_1 = require("../../../Scripts/Config");
var HighlightType;
(function (HighlightType) {
    HighlightType[HighlightType["None"] = 0] = "None";
    HighlightType[HighlightType["HardLevel"] = 1] = "HardLevel";
    HighlightType[HighlightType["Speed"] = 2] = "Speed";
    HighlightType[HighlightType["HighScore"] = 3] = "HighScore";
    HighlightType[HighlightType["RateWithIncrease"] = 4] = "RateWithIncrease";
    HighlightType[HighlightType["RateOnly"] = 5] = "RateOnly";
    HighlightType[HighlightType["FullCombo"] = 6] = "FullCombo";
    HighlightType[HighlightType["General"] = 7] = "General";
})(HighlightType = exports.HighlightType || (exports.HighlightType = {}));
var GameEndHighlightTrait = /** @class */ (function (_super) {
    __extends(GameEndHighlightTrait, _super);
    function GameEndHighlightTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameEndHighlightTrait.prototype.getSpeedThreshold = function () {
        var t;
        return null !== (t = this._traitData.speedThreshold) && void 0 !== t ? t : 0.5;
    };
    GameEndHighlightTrait.prototype.getScoreThreshold = function () {
        var t;
        return null !== (t = this._traitData.scoreThreshold) && void 0 !== t ? t : 7500;
    };
    GameEndHighlightTrait.prototype.getRateThreshold = function () {
        var t;
        return null !== (t = this._traitData.rateThreshold) && void 0 !== t ? t : 86;
    };
    GameEndHighlightTrait.prototype.getExperimentType = function () {
        var t;
        return null !== (t = this._traitData.experimentType) && void 0 !== t ? t : 1;
    };
    GameEndHighlightTrait.prototype.getMCoefficient1 = function () {
        var t;
        return null !== (t = this._traitData.mCoefficient1) && void 0 !== t ? t : 100.72;
    };
    GameEndHighlightTrait.prototype.getMCoefficient2 = function () {
        var t;
        return null !== (t = this._traitData.mCoefficient2) && void 0 !== t ? t : 70;
    };
    GameEndHighlightTrait.prototype.getEnableRateAdjust = function () {
        var t;
        return null !== (t = this._traitData.enableRateAdjust) && void 0 !== t && t;
    };
    GameEndHighlightTrait.prototype.getHighlightI18NKey = function (t) {
        return "MahjongBlast_GameEnd_Type" + t + "_" + (Math.floor(11 * Math.random()) + 1).toString().padStart(2, "0");
    };
    GameEndHighlightTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.localData.lastRate || (this.localData.lastRate = 0);
        void 0 === this.localData.lastFullCombo && (this.localData.lastFullCombo = false);
        this.localData.pairTrackTime || (this.localData.pairTrackTime = 0);
        this.localData.lastUpdateTimestamp || (this.localData.lastUpdateTimestamp = 0);
        this.localData.firstPairTime || (this.localData.firstPairTime = 0);
        this.localData.lastPairTime || (this.localData.lastPairTime = 0);
        this.localData.pairCount || (this.localData.pairCount = 0);
    };
    GameEndHighlightTrait.prototype.getMessageListeners = function () {
        var _t = {};
        _t[Config_1.EVT_MSG_KEY_EVENT_HIDE] = this.onGameHide.bind(this);
        _t[Config_1.EVT_MSG_KEY_EVENT_SHOW] = this.onGameShow.bind(this);
        return _t;
    };
    GameEndHighlightTrait.prototype.onGameHide = function () {
        if (this.localData.lastUpdateTimestamp > 0) {
            var t = (Date.now() - this.localData.lastUpdateTimestamp) / 1000;
            t > 0 && t < 5 && (this.localData.pairTrackTime += t);
            this.localData.lastUpdateTimestamp = -2;
        }
    };
    GameEndHighlightTrait.prototype.onGameShow = function () {
        -2 === this.localData.lastUpdateTimestamp && (this.localData.lastUpdateTimestamp = Date.now());
    };
    GameEndHighlightTrait.prototype.onIptSetLv_newGComp = function (t, e) {
        if (1 !== NormalGameData_1.default.getInstance().getCurrentLevelId()) {
            if (this.localData.lastUpdateTimestamp <= 0) {
                this.localData.pairTrackTime = 0;
                this.localData.lastUpdateTimestamp = 0;
                this.localData.firstPairTime = 0;
                this.localData.lastPairTime = 0;
                this.localData.pairCount = 0;
            }
            else
                this.localData.lastUpdateTimestamp = Date.now();
            e();
        }
        else
            e();
    };
    GameEndHighlightTrait.prototype.onIptGameTime_exec = function (t, e) {
        if (1 !== NormalGameData_1.default.getInstance().getCurrentLevelId()) {
            var a = Date.now();
            if (-1 !== this.localData.lastUpdateTimestamp) {
                if (-2 !== this.localData.lastUpdateTimestamp) {
                    if (0 !== this.localData.lastUpdateTimestamp) {
                        var i = (a - this.localData.lastUpdateTimestamp) / 1000;
                        this.localData.pairTrackTime;
                        if (i > 0 && i < 5) {
                            this.localData.pairTrackTime += i;
                            this.localData.lastUpdateTimestamp = a;
                        }
                        else
                            this.localData.lastUpdateTimestamp = a;
                        e();
                    }
                    else {
                        this.localData.lastUpdateTimestamp = a;
                        e();
                    }
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
    GameEndHighlightTrait.prototype.onClearBhv_collision = function (t, e) {
        if (1 !== NormalGameData_1.default.getInstance().getCurrentLevelId()) {
            var a = Date.now();
            this.localData.pairTrackTime;
            if (-1 !== this.localData.lastUpdateTimestamp) {
                if (-2 !== this.localData.lastUpdateTimestamp) {
                    if (0 !== this.localData.lastUpdateTimestamp) {
                        var i = (a - this.localData.lastUpdateTimestamp) / 1000, r = this.localData.pairTrackTime + i;
                        this.localData.pairTrackTime = r;
                        this.localData.lastUpdateTimestamp = a;
                        this.localData.pairCount++;
                        this.localData.lastPairTime;
                        this.localData.lastPairTime = r;
                        e();
                    }
                    else {
                        this.localData.lastUpdateTimestamp = a;
                        this.localData.pairTrackTime = 0;
                        this.localData.pairCount = 1;
                        this.localData.firstPairTime = 0;
                        this.localData.lastPairTime = 0;
                        e();
                    }
                }
                else {
                    this.localData.lastUpdateTimestamp = a;
                    this.localData.pairCount++;
                    this.localData.lastPairTime = this.localData.pairTrackTime;
                    e();
                }
            }
            else
                e();
        }
        else
            e();
    };
    GameEndHighlightTrait.prototype.calculatePairSpeed = function () {
        var t = this.localData.pairCount, e = this.localData.firstPairTime, a = this.localData.lastPairTime;
        if (t <= 1)
            return 0;
        var i = a - e;
        return i <= 0 ? 0 : (t - 1) / i;
    };
    GameEndHighlightTrait.prototype.isCurrentFullCombo = function () {
        return NormalGameData_1.default.getInstance().getHasTriggeredFullCombo();
    };
    GameEndHighlightTrait.prototype.isHardLevel = function (t) {
        return ExtractTool_1.default.getInstance().isHardLevel(t);
    };
    GameEndHighlightTrait.prototype.determineHighlightType = function (t, e, a, i, r, o) {
        if (this.isHardLevel(t))
            return HighlightType.HardLevel;
        if (r > this.getSpeedThreshold())
            return HighlightType.Speed;
        if (e >= this.getScoreThreshold())
            return HighlightType.HighScore;
        var n = a > this.getRateThreshold();
        return n && i > 0 ? HighlightType.RateWithIncrease : n ? HighlightType.RateOnly : o ? HighlightType.FullCombo : HighlightType.General;
    };
    GameEndHighlightTrait.prototype.getHighlightText = function (t, e, a, i, r) {
        var n = this.getHighlightI18NKey(t, r);
        if (!n)
            return "";
        var _o = {};
        _o[HighlightType.HardLevel] = "Hard level completed!";
        _o[HighlightType.Speed] = "Great speed!";
        _o[HighlightType.HighScore] = "High score achieved!";
        _o[HighlightType.RateWithIncrease] = "Great improvement!";
        _o[HighlightType.RateOnly] = "Great performance!";
        _o[HighlightType.FullCombo] = "Full combo!";
        _o[HighlightType.General] = "Great job!";
        var s = _o[t] || "", p = I18NStrings_1.default.get(n, s);
        if (p.includes("{0}"))
            if (t === HighlightType.Speed) {
                var h = (3 * e).toFixed(1);
                p = p.replace("{0}", h);
            }
            else
                t !== HighlightType.RateWithIncrease && t !== HighlightType.RateOnly || (p = p.replace("{0}", a.toFixed(2) + "%"));
        p.includes("{1}") && t === HighlightType.RateWithIncrease && (p = p.replace("{1}", (100 * i).toFixed(1) + "%"));
        return p;
    };
    GameEndHighlightTrait.prototype.createRichText = function (t, e) {
        if (void 0 !== e) {
            var a = e.toFixed(2) + "%";
            return t.replace(a, "<color=#00ff00>" + a + "</color>");
        }
        return t;
    };
    GameEndHighlightTrait.prototype.syncAnimation = function (t, e, a) {
        if (t && e) {
            e.opacity = t.opacity;
            var i = a._animSpeedRate || 1, r = 1.53 * i, o = 0.2 * i;
            cc.tween(e).delay(r).to(o, {
                opacity: 255
            }, {
                easing: "linear"
            }).start();
        }
    };
    GameEndHighlightTrait.prototype.onBeforeWinBhv_start = function (t, e) {
        this.localData.lastUpdateTimestamp > 0 && (this.localData.lastUpdateTimestamp = -1);
        e();
    };
    GameEndHighlightTrait.prototype.onWinVw_showWinVw = function (t, e) {
        var a, i = t.ins, r = t.args[0];
        if (cc.isValid(i)) {
            try {
                var o = NormalGameData_1.default.getInstance(), l = o.getCurrentLevelId();
                if (1 === l) {
                    e();
                    return;
                }
                var n = r.data.settlementScore || 0, c = o.getCurLevelComboMaxLimit() || 0, p = this.isCurrentFullCombo(), u = this.getExperimentType(), m = 3 === u || 4 === u ? this.getMCoefficient1() / this.getMCoefficient2() : void 0, f = RateUtils_1.default.calculateRate(n, c, m), g = this.getEnableRateAdjust() ? RateUtils_1.default.getAdjustedRate(f, p, this.localData.lastFullCombo) : f;
                this.getEnableRateAdjust();
                var T = RateUtils_1.default.calculateRateIncrease(g, this.localData.lastRate), y = this.calculatePairSpeed(), v = this.determineHighlightType(l, n, g, T, y, p), D = i._lblSubtitle, _ = this.getHighlightText(v, y, g, T, u), E = g.toFixed(2) + "%", b = _.includes(E), C = null === (a = null == D ? void 0 : D.node) || void 0 === a ? void 0 : a.parent;
                if (C) {
                    var R = C.getChildByName("rate_richtext");
                    R && (R.active = false);
                }
                if (b) {
                    var H = D.node, x = C.getChildByName("highlight_richtext");
                    if (!x) {
                        x = NodeSkinTool_1.default.createNodeByPath(C, "highlight_richtext");
                        NodeSkinTool_1.default.applyNodeInfo(x, {
                            position: [H.x, H.y],
                            anchor: [H.anchorX, H.anchorY],
                            size: [1000, 160],
                            colorArr: [H.color.r, H.color.g, H.color.b],
                            opacity: H.opacity
                        });
                    }
                    x.active = true;
                    var S = this.createRichText(_, g);
                    NodeSkinTool_1.default.applyRichTextInfo(x, {
                        fontSize: D.fontSize,
                        lineHeight: D.lineHeight,
                        maxWidth: 1000,
                        hAlign: cc.macro.TextAlignment.CENTER,
                        string: S
                    });
                    var G = x.getComponent(cc.RichText);
                    G && D.font && (G.font = D.font);
                    this.syncAnimation(H, x, i);
                    D && cc.isValid(H) && (D.enabled = false);
                }
                else if (D && cc.isValid(D.node)) {
                    if (C) {
                        var j = C.getChildByName("highlight_richtext");
                        j && (j.active = false);
                    }
                    D.node.setContentSize(1000, 160);
                    D.enabled = true;
                    D.string = _;
                }
                this.localData.lastRate = g;
                this.localData.lastFullCombo = p;
            }
            catch (t) { }
            e();
        }
        else
            e();
    };
    GameEndHighlightTrait.prototype.onFailBhv_start = function (t, e) {
        this.localData.lastUpdateTimestamp > 0 && (this.localData.lastUpdateTimestamp = -1);
        e();
    };
    GameEndHighlightTrait.prototype.onGameUI_onBtnSettings = function (t, e) {
        if (this.localData.lastUpdateTimestamp > 0) {
            var a = (Date.now() - this.localData.lastUpdateTimestamp) / 1000;
            a > 0 && a < 5 && (this.localData.pairTrackTime += a);
            this.localData.lastUpdateTimestamp = -2;
        }
        e();
    };
    GameEndHighlightTrait.prototype.onUISetDlg_close = function (t, e) {
        -2 === this.localData.lastUpdateTimestamp && (this.localData.lastUpdateTimestamp = Date.now());
        e();
    };
    GameEndHighlightTrait.traitKey = "GameEndHighlight";
    __decorate([
        mj.traitEvent("GameEndHighLT_getSpeedTh")
    ], GameEndHighlightTrait.prototype, "getSpeedThreshold", null);
    __decorate([
        mj.traitEvent("GameEndHighLT_getScoreTh")
    ], GameEndHighlightTrait.prototype, "getScoreThreshold", null);
    __decorate([
        mj.traitEvent("GameEndHighLT_getRateTh")
    ], GameEndHighlightTrait.prototype, "getRateThreshold", null);
    __decorate([
        mj.traitEvent("GameEndHighLT_getExpType")
    ], GameEndHighlightTrait.prototype, "getExperimentType", null);
    __decorate([
        mj.traitEvent("GameEndHighLT_getMCoef1")
    ], GameEndHighlightTrait.prototype, "getMCoefficient1", null);
    __decorate([
        mj.traitEvent("GameEndHighLT_getMCoef2")
    ], GameEndHighlightTrait.prototype, "getMCoefficient2", null);
    __decorate([
        mj.traitEvent("GameEndHighLT_getEnbAdj")
    ], GameEndHighlightTrait.prototype, "getEnableRateAdjust", null);
    __decorate([
        mj.traitEvent("GameEndHighLT_getI18NKey")
    ], GameEndHighlightTrait.prototype, "getHighlightI18NKey", null);
    GameEndHighlightTrait = __decorate([
        mj.trait,
        mj.class("GameEndHighlightTrait")
    ], GameEndHighlightTrait);
    return GameEndHighlightTrait;
}(Trait_1.default));
exports.default = GameEndHighlightTrait;

cc._RF.pop();
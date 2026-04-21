"use strict";
cc._RF.push(module, '7dee1XyEKZDtKqz4aU4nnT5', 'MainGameTxtShowTrait');
// subpackages/l_mainGameTxtShow/Scripts/MainGameTxtShowTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var MainGameTxtShowTrait = /** @class */ (function (_super) {
    __extends(MainGameTxtShowTrait, _super);
    function MainGameTxtShowTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._preOpacitys = Object.create(null);
        _this.notHideNames = ["lblDate", "labelMatch", "levelDesc", "nodeScore"];
        return _this;
    }
    MainGameTxtShowTrait_1 = MainGameTxtShowTrait;
    MainGameTxtShowTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    MainGameTxtShowTrait.prototype.isSupportedGameType = function (e) {
        return e === GameTypeEnums_1.MjGameType.Normal || e === GameTypeEnums_1.MjGameType.DailyChallenge;
    };
    MainGameTxtShowTrait.prototype.setTopTextVisible = function (e, t, i) {
        var a, r;
        if (e)
            try {
                for (var l = __values(MainGameTxtShowTrait_1.TOP_NODE_NAMES), c = l.next(); !c.done; c = l.next()) {
                    var p = c.value, u = e.getChildByName(p);
                    u && this.setNodeOpacity(p, u, t, i);
                }
            }
            catch (e) {
                a = {
                    error: e
                };
            }
            finally {
                try {
                    c && !c.done && (r = l.return) && r.call(l);
                }
                finally {
                    if (a)
                        throw a.error;
                }
            }
    };
    MainGameTxtShowTrait.prototype.updateMatchHide = function (e) {
        if (cc.isValid(e)) {
            var t = true, o = mj.getClassByName("MainGameMatchNumTrait"), i = null == o ? void 0 : o.getInstance();
            true !== (null == i ? void 0 : i.eventEnabled) && (t = false);
            e.active = t;
            e.opacity = t ? 255 : 0;
        }
    };
    MainGameTxtShowTrait.prototype.isCanChangeActive = function () {
        return true;
    };
    MainGameTxtShowTrait.prototype.setNodeOpacity = function (e, t, o, i) {
        var a;
        if (this.isCanChangeActive(e, o, i)) {
            var r = null;
            "nodeScore" == e && (r = t.getChildByName("scoreItem"));
            if (i == GameTypeEnums_1.MjGameType.DailyChallenge && "levelDesc" == e || i == GameTypeEnums_1.MjGameType.Normal && "lblDate" == e)
                t.opacity = 0;
            else if (o) {
                t.opacity = null !== (a = this._preOpacitys[e]) && void 0 !== a ? a : 255;
                r && (r.opacity = 255);
                "labelCanMatchNum" !== e && "labelMatch" !== e || this.updateMatchHide(t);
            }
            else {
                void 0 === this._preOpacitys[e] && (this._preOpacitys[e] = t.opacity);
                if (-1 == this.notHideNames.indexOf(e))
                    t.opacity = 0;
                else {
                    t.active = true;
                    "labelCanMatchNum" !== e && "labelMatch" !== e || this.updateMatchHide(t);
                }
                r && (r.opacity = 0);
            }
        }
    };
    MainGameTxtShowTrait.prototype.onMainGRTop_applyTSCfg = function (e, t) {
        var o, i, a, r, n, l = null === (o = e.args) || void 0 === o ? void 0 : o[0];
        if (this.isSupportedGameType(null == l ? void 0 : l.gameType)) {
            var u = UserModel_1.default.getInstance().getGameDataByGameType(GameTypeEnums_1.MjGameType.Normal), s = null !== (n = null !== (a = null === (i = null == u ? void 0 : u.getCurrentLevelId) || void 0 === i ? void 0 : i.call(u)) && void 0 !== a ? a : null === (r = null == u ? void 0 : u.getLevelId) || void 0 === r ? void 0 : r.call(u)) && void 0 !== n ? n : null;
            if ("number" != typeof s || s <= 1)
                t();
            else {
                var d = (null == l ? void 0 : l.topRootNode) || null;
                this.setTopTextVisible(d, false, null == l ? void 0 : l.gameType);
                t();
            }
        }
        else
            t();
    };
    MainGameTxtShowTrait.prototype.onEnterAniBhv_startPlay = function (e, t) {
        var o, i = e.ins, a = null === (o = null == i ? void 0 : i.context) || void 0 === o ? void 0 : o.gameView;
        if (this.isSupportedGameType(null == a ? void 0 : a.gameType)) {
            var r = null == a ? void 0 : a.gameUI, n = null == r ? void 0 : r.node;
            if (n) {
                var l = n.getChildByName("nodeTop");
                l && this.setTopTextVisible(l, true, null == a ? void 0 : a.gameType);
            }
            t();
        }
        else
            t();
    };
    var MainGameTxtShowTrait_1;
    MainGameTxtShowTrait.traitKey = "MainGameTxtShow";
    MainGameTxtShowTrait.TOP_NODE_NAMES = ["levelDesc", "labelMatch", "lblDate", "labelLevel", "labelCanMatchNum", "nodeScore"];
    __decorate([
        mj.traitEvent("MGTxtShow_updateMatchHide")
    ], MainGameTxtShowTrait.prototype, "updateMatchHide", null);
    __decorate([
        mj.traitEvent("MGTxtShow_canChgActive")
    ], MainGameTxtShowTrait.prototype, "isCanChangeActive", null);
    __decorate([
        mj.traitEvent("MGTxtShow_setNodeOpacity")
    ], MainGameTxtShowTrait.prototype, "setNodeOpacity", null);
    MainGameTxtShowTrait = MainGameTxtShowTrait_1 = __decorate([
        mj.trait,
        mj.class("MainGameTxtShowTrait")
    ], MainGameTxtShowTrait);
    return MainGameTxtShowTrait;
}(Trait_1.default));
exports.default = MainGameTxtShowTrait;

cc._RF.pop();
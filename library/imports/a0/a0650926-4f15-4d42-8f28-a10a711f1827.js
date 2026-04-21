"use strict";
cc._RF.push(module, 'a0650kmTxVNQo8ooQpxHxgn', 'HallBtnsAniTimeSynTrait');
// subpackages/r_hallBtnsAniTimeSyn/Scripts/HallBtnsAniTimeSynTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var HallBtnsAniTimeSynTrait = /** @class */ (function (_super) {
    __extends(HallBtnsAniTimeSynTrait, _super);
    function HallBtnsAniTimeSynTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HallBtnsAniTimeSynTrait_1 = HallBtnsAniTimeSynTrait;
    HallBtnsAniTimeSynTrait.prototype.onHallCtl_initRes = function (t, n) {
        t.ins.addPreloadRes("SkeletonData", [HallBtnsAniTimeSynTrait_1.BUNDLE_NAME + ":" + HallBtnsAniTimeSynTrait_1.TRAVEL_SPINE_PATH, HallBtnsAniTimeSynTrait_1.BUNDLE_NAME + ":" + HallBtnsAniTimeSynTrait_1.RANK_SPINE_PATH, HallBtnsAniTimeSynTrait_1.BUNDLE_NAME + ":" + HallBtnsAniTimeSynTrait_1.TASK_SPINE_PATH, HallBtnsAniTimeSynTrait_1.BUNDLE_NAME + ":" + HallBtnsAniTimeSynTrait_1.CHALLENGE_SPINE_PATH]);
        n();
    };
    HallBtnsAniTimeSynTrait.prototype.onRankBtn_initComp = function (t, n) {
        var i = t.ins, r = cc.find("bg/down", i.node), o = cc.find("bg/up", i.node), a = BaseSpine_1.default.refreshWithNode(r, HallBtnsAniTimeSynTrait_1.RANK_SPINE_PATH, HallBtnsAniTimeSynTrait_1.BUNDLE_NAME);
        a.setAnimation("init_down", -1, null, false);
        a.attachNode("photo", function () {
            return i._cardSprNode;
        });
        BaseSpine_1.default.refreshWithNode(o, HallBtnsAniTimeSynTrait_1.RANK_SPINE_PATH, HallBtnsAniTimeSynTrait_1.BUNDLE_NAME).setAnimation("init_up", -1, null, false);
        n({
            isBreak: true,
            returnType: TraitCallbackReturnType.return
        });
    };
    HallBtnsAniTimeSynTrait.prototype.onTravelBtn_onLoad = function (t, n) {
        var i = t.ins, r = cc.find("Root/BgWood", i.node);
        BaseSpine_1.default.refreshWithNode(r, HallBtnsAniTimeSynTrait_1.TRAVEL_SPINE_PATH, HallBtnsAniTimeSynTrait_1.BUNDLE_NAME).setAnimation("init", -1, null, false);
        n();
    };
    HallBtnsAniTimeSynTrait.prototype.onTaskTt_onLoad = function (t, n) {
        var i = t.ins, r = cc.find("Bg/Icon", i.node);
        BaseSpine_1.default.refreshWithNode(r, HallBtnsAniTimeSynTrait_1.TASK_SPINE_PATH, HallBtnsAniTimeSynTrait_1.BUNDLE_NAME).setAnimation("init", -1, null, false);
        n();
    };
    HallBtnsAniTimeSynTrait.prototype.onHDailyBtn_initEff = function (t, n) {
        var i = t.ins, r = cc.find("eff_btn", i.node), o = BaseSpine_1.default.refreshWithNode(r, HallBtnsAniTimeSynTrait_1.CHALLENGE_SPINE_PATH, HallBtnsAniTimeSynTrait_1.BUNDLE_NAME);
        o.setAnimation("init", -1, null, false);
        i.animProxy = o;
        o.attachNode("hook_date", function () {
            if (!cc.isValid(i) || !cc.isValid(i.node))
                return null;
            var t = i._txtDay.node, n = i._txtDaily.node;
            o.attachNode("hook_date", function () {
                return t;
            });
            o.attachNode("hook_txtDaily", function () {
                return n;
            });
            t.setPosition(0, 0);
            n.setPosition(0, 0);
            return null;
        });
        n({
            isBreak: true,
            returnType: TraitCallbackReturnType.return
        });
    };
    var HallBtnsAniTimeSynTrait_1;
    HallBtnsAniTimeSynTrait.traitKey = "HallBtnsAniTimeSyn";
    HallBtnsAniTimeSynTrait.BUNDLE_NAME = "r_hallBtnsAniTimeSyn";
    HallBtnsAniTimeSynTrait.TRAVEL_SPINE_PATH = "spine/main_icon_tile";
    HallBtnsAniTimeSynTrait.RANK_SPINE_PATH = "spine/main_icon_gardeningMaster";
    HallBtnsAniTimeSynTrait.TASK_SPINE_PATH = "spine/main_icon_dailyTask";
    HallBtnsAniTimeSynTrait.CHALLENGE_SPINE_PATH = "spine/main_dailyChallenge_btn";
    HallBtnsAniTimeSynTrait = HallBtnsAniTimeSynTrait_1 = __decorate([
        mj.trait,
        mj.class("HallBtnsAniTimeSynTrait")
    ], HallBtnsAniTimeSynTrait);
    return HallBtnsAniTimeSynTrait;
}(Trait_1.default));
exports.default = HallBtnsAniTimeSynTrait;

cc._RF.pop();
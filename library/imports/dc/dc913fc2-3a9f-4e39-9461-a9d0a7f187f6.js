"use strict";
cc._RF.push(module, 'dc913/COp9OOZRhqdCn8Yf2', 'MainGameBtnBackTrait');
// subpackages/l_mainGameBtnBack/Scripts/MainGameBtnBackTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var JumpManager_1 = require("../../../Scripts/base/jump/JumpManager");
var DGamePageShow_1 = require("../../../Scripts/dot/DGamePageShow");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var MainGameBtnBackTrait = /** @class */ (function (_super) {
    __extends(MainGameBtnBackTrait, _super);
    function MainGameBtnBackTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainGameBtnBackTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    MainGameBtnBackTrait.prototype.onGameUI_onLoad = function (e, t) {
        var a, o = e.ins, n = null === (a = null == o ? void 0 : o.node) || void 0 === a ? void 0 : a.getChildByName("nodeTop"), r = null == n ? void 0 : n.getChildByName("btnBack");
        if (r) {
            var i = UserModel_1.default.getInstance().isGuideFinished();
            i || (i = this.localData.isGuidedFinished);
            r.active = i;
            r.getComponent(BaseUI_1.default) || this.addBtnBackClickEvent(r);
        }
        t();
    };
    MainGameBtnBackTrait.prototype.onGuideBhv_finish = function (e, t) {
        var a, o;
        this.localData.isGuidedFinished = true;
        var n = null === (o = null === (a = e.ins) || void 0 === a ? void 0 : a.context) || void 0 === o ? void 0 : o.gameView;
        if (n && n.topRootNode) {
            var r = n.topRootNode.getChildByName("btnBack");
            if (r) {
                r.active = true;
                r.getComponent(BaseUI_1.default) || this.addBtnBackClickEvent(r);
            }
        }
        t();
    };
    MainGameBtnBackTrait.prototype.addBtnBackClickEvent = function (e) {
        if (e) {
            var t = e.getComponent(BaseUI_1.default);
            t || (t = e.addComponent(BaseUI_1.default)) && t.OnButtonClick(e, this.onBtnBackClick.bind(this));
        }
    };
    MainGameBtnBackTrait.prototype.onBtnBackClick = function () {
        var e = ControllerManager_1.default.getInstance().getTopSceneController();
        if (e && e.gameType === GameTypeEnums_1.MjGameType.Travel)
            ControllerManager_1.default.getInstance().pushViewByController("TravelMapController", {
                isReplace: true
            });
        else if (e && e.gameType === GameTypeEnums_1.MjGameType.DailyChallenge)
            ControllerManager_1.default.getInstance().pushViewByController("DailyController", {
                isReplace: true,
                isShowAction: false,
                isReuse: false
            });
        else {
            JumpManager_1.default.getInstance().jumpToHall();
            e && e.gameType === GameTypeEnums_1.MjGameType.Normal && DGamePageShow_1.DotGamePageShow.dot(DGamePageShow_1.EPageShowType.LevelToMainPage);
        }
    };
    MainGameBtnBackTrait.traitKey = "MainGameBtnBack";
    __decorate([
        mj.traitEvent("MainGameBtnBack_onClick")
    ], MainGameBtnBackTrait.prototype, "onBtnBackClick", null);
    MainGameBtnBackTrait = __decorate([
        mj.trait,
        mj.class("MainGameBtnBackTrait")
    ], MainGameBtnBackTrait);
    return MainGameBtnBackTrait;
}(Trait_1.default));
exports.default = MainGameBtnBackTrait;

cc._RF.pop();
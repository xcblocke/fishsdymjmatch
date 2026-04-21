"use strict";
cc._RF.push(module, '509f87EQkdGZadS9MPJYwxU', 'HallDailyBtn');
// subpackages/l_daily/Scripts/HallDailyBtn.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var DGameBtnClick_1 = require("../../../Scripts/dot/DGameBtnClick");
var DGamePageShow_1 = require("../../../Scripts/dot/DGamePageShow");
var DailyModel_1 = require("./DailyModel");
var HallDailyBtn = /** @class */ (function (_super) {
    __extends(HallDailyBtn, _super);
    function HallDailyBtn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._effBtn = null;
        _this._txtDay = null;
        _this._txtDaily = null;
        _this._imgRed = null;
        _this._itemLock = null;
        _this._isOpen = true;
        _this._level = 10;
        _this._txtOpen = null;
        _this._effLock = null;
        return _this;
    }
    HallDailyBtn.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.OnButtonClick(this.node, {
            func: this.onBtnClick.bind(this)
        });
        this.initEffAnim();
    };
    HallDailyBtn.prototype.onEnable = function () {
        _super.prototype.onEnable && _super.prototype.onEnable.call(this);
        this.dispatchEvent("MsgEnableHomeBtn", {
            type: "DailyChallenge",
            node: this.node
        });
    };
    HallDailyBtn.prototype.onDisable = function () {
        _super.prototype.onDisable && _super.prototype.onDisable.call(this);
    };
    HallDailyBtn.prototype.initEffAnim = function () {
        this.animProxy = BaseSpine_1.default.refreshWithNode(this._effBtn.node);
        this.animProxy.reset("");
        this.animProxy.markReady("");
        this.attachNode("hook_date", this._txtDay.node, 1);
        this.attachNode("hook_txtDaily", this._txtDaily.node, 1);
    };
    HallDailyBtn.prototype.start = function () {
        _super.prototype.start.call(this);
        this.updateDay();
    };
    HallDailyBtn.prototype.updateDay = function () {
        if (this._txtDay) {
            var t = new Date().getDate();
            this._txtDay.string = "" + t;
            this._isOpen && (this._isOpen = true);
        }
    };
    HallDailyBtn.prototype.updateLock = function (t, e) {
        if (cc.isValid(this._txtDaily)) {
            this._itemLock && (this._itemLock.active = !t);
            this._txtOpen && !t && (this._txtOpen.string = "Lv." + e);
            this._txtDaily.node.active = t;
            this._isOpen = t;
            this._level = e;
        }
    };
    HallDailyBtn.prototype.updateRed = function (t) {
        var e = {
            show: t,
            type: GameTypeEnums_1.ERedDotType.DailyChallenge
        };
        mj.triggerInternalEvent("RedDotCtrl_showRedDot", this, [e]);
        this._imgRed && (this._imgRed.active = e.show);
    };
    HallDailyBtn.prototype.doPlayLockAnim = function () {
        cc.isValid(this._effLock) && CommonUtils_1.playSpineAnim(this._effLock, 1, "in", null, false);
    };
    HallDailyBtn.prototype.playLockAnim = function () {
        this.doPlayLockAnim();
        var t = I18NStrings_1.default.stringFormat(I18NStrings_1.default.get("MahjongTiles_ProHint_1"), this._level);
        ControllerManager_1.default.getInstance().pushViewByController("LockTipsController", {
            isReuse: false,
            tips: t,
            noBlock: true,
            isGlobal: false,
            bgStyle: null,
            isShowAction: false
        });
    };
    HallDailyBtn.prototype.attachNode = function (t, e, i) {
        if (i === void 0) { i = 1; }
        if (cc.isValid(this.animProxy) && cc.isValid(e)) {
            this.animProxy.attachNode(t, function () {
                return e;
            });
            e.setPosition(0, 0);
        }
    };
    HallDailyBtn.prototype.onBtnClick = function (t) {
        if (t === void 0) { t = true; }
        if (t) {
            DailyModel_1.default.getInstance().setOpenCnt(1);
            ControllerManager_1.default.getInstance().pushViewByController("DailyController", {
                timeStamp: new Date().format("YYYY-mm-dd"),
                isReuse: false,
                isShowAction: false
            });
            DGamePageShow_1.DotGamePageShow.dot(DGamePageShow_1.EPageShowType.DailyChallengePage);
            DGameBtnClick_1.DotGameBtnClick.dotHall(DGameBtnClick_1.EHomePageClickType.DailyChallenge);
        }
        else
            this.playLockAnim();
    };
    HallDailyBtn.prefabUrl = "prefabs/daily/HallDailyBtn";
    HallDailyBtn.bundleName = "mainRes";
    __decorate([
        mj.component("eff_btn", sp.Skeleton)
    ], HallDailyBtn.prototype, "_effBtn", void 0);
    __decorate([
        mj.component("txt_day", cc.Label)
    ], HallDailyBtn.prototype, "_txtDay", void 0);
    __decorate([
        mj.component("txt_daily", cc.Label)
    ], HallDailyBtn.prototype, "_txtDaily", void 0);
    __decorate([
        mj.node("img_red")
    ], HallDailyBtn.prototype, "_imgRed", void 0);
    __decorate([
        mj.node("item_lock")
    ], HallDailyBtn.prototype, "_itemLock", void 0);
    __decorate([
        mj.component("item_lock/txt_open", cc.Label)
    ], HallDailyBtn.prototype, "_txtOpen", void 0);
    __decorate([
        mj.component("item_lock/eff_lock", sp.Skeleton)
    ], HallDailyBtn.prototype, "_effLock", void 0);
    __decorate([
        mj.traitEvent("HDailyBtn_onLoad")
    ], HallDailyBtn.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("HDailyBtn_initEff")
    ], HallDailyBtn.prototype, "initEffAnim", null);
    __decorate([
        mj.traitEvent("HDailyBtn_updateDay")
    ], HallDailyBtn.prototype, "updateDay", null);
    __decorate([
        mj.traitEvent("HDailyBtn_updateLock")
    ], HallDailyBtn.prototype, "updateLock", null);
    __decorate([
        mj.traitEvent("HDailyBtn_updateRed")
    ], HallDailyBtn.prototype, "updateRed", null);
    __decorate([
        mj.traitEvent("HDailyBtn_doLockAni")
    ], HallDailyBtn.prototype, "doPlayLockAnim", null);
    __decorate([
        mj.traitEvent("HDailyBtn_onBClick")
    ], HallDailyBtn.prototype, "onBtnClick", null);
    HallDailyBtn = __decorate([
        mj.class
    ], HallDailyBtn);
    return HallDailyBtn;
}(BaseUI_1.default));
exports.default = HallDailyBtn;

cc._RF.pop();
"use strict";
cc._RF.push(module, '8ab39lc5xBAxaDrDPCJVBL1', 'HallSignBtn');
// subpackages/r_dailySignClassic/Scripts/view/HallSignBtn.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../../Scripts/framework/ui/BaseUI");
var ControllerManager_1 = require("../../../../Scripts/framework/manager/ControllerManager");
var DailySignClassicModel_1 = require("../model/DailySignClassicModel");
var I18NStrings_1 = require("../../../../Scripts/framework/data/I18NStrings");
var GameUtils_1 = require("../../../../Scripts/core/simulator/util/GameUtils");
var DGameBtnClick_1 = require("../../../../Scripts/dot/DGameBtnClick");
var HallSignBtn = /** @class */ (function (_super) {
    __extends(HallSignBtn, _super);
    function HallSignBtn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._redDot = null;
        _this._itemLock = null;
        _this._lb_level = null;
        _this._lb_sign = null;
        _this._effLock = null;
        return _this;
    }
    Object.defineProperty(HallSignBtn.prototype, "signModel", {
        get: function () {
            return DailySignClassicModel_1.default.getInstance();
        },
        enumerable: false,
        configurable: true
    });
    HallSignBtn.prototype.onLoad = function () {
        var e, i, o;
        _super.prototype.onLoad.call(this);
        this.OnButtonClick(this.node, this.onBtnClick.bind(this));
        this._redDot = cc.find("img_red", this.node);
        this._redDot;
        this._lb_sign = null === (e = cc.find("txt_sign", this.node)) || void 0 === e ? void 0 : e.getComponent(cc.Label);
        this._itemLock = cc.find("item_lock", this.node);
        if (this._itemLock) {
            this._lb_level = null === (i = cc.find("item_lock/txt_open", this.node)) || void 0 === i ? void 0 : i.getComponent(cc.Label);
            this._itemLock.active = false;
            this._effLock = null === (o = cc.find("item_lock/eff_lock", this.node)) || void 0 === o ? void 0 : o.getComponent(sp.Skeleton);
        }
        this.updateRedDot(false);
        this.updateLock();
    };
    HallSignBtn.prototype.onBtnClick = function () {
        if (this.signModel.isUnlocked()) {
            this.signModel.markSignViewOpened();
            ControllerManager_1.default.getInstance().pushViewByController("DailySignClassicController");
            DGameBtnClick_1.DotGameBtnClick.dotHall(DGameBtnClick_1.EHomePageClickType.DailySign);
        }
        else
            this.playLockAnim();
    };
    HallSignBtn.prototype.doPlayLockAnim = function () {
        var t = this;
        cc.isValid(this._effLock) && GameUtils_1.default.playSpine(this._effLock, "in", false, function () {
            cc.isValid(t._effLock) && GameUtils_1.default.playSpine(t._effLock, "init", true);
        });
    };
    HallSignBtn.prototype.playLockAnim = function () {
        this.doPlayLockAnim();
        var t = this.signModel.getConfig(), e = this.getOpenTips(t.unlockLevel);
        ControllerManager_1.default.getInstance().pushViewByController("LockTipsController", {
            isReuse: false,
            tips: e,
            noBlock: true,
            isGlobal: false,
            bgStyle: null,
            isShowAction: false
        });
    };
    HallSignBtn.prototype.updateRedDot = function (t) {
        cc.isValid(this._redDot) && (this._redDot.active = t);
    };
    HallSignBtn.prototype.updateLock = function (t) {
        if (t === void 0) { t = this.signModel.isUnlocked(); }
        var e = this.signModel.getConfig().unlockLevel;
        this._itemLock && (this._itemLock.active = !t);
        if (this._lb_level && !t) {
            var i = this.getLevel(e);
            this._lb_level.string = "Lv." + i;
        }
        this._lb_sign && (this._lb_sign.node.active = t);
    };
    HallSignBtn.prototype.checkRedDot = function () {
        var t = this.signModel.checkTodaySigned(), e = this.signModel.isUnlocked() && !t;
        this.updateRedDot(e);
        return e;
    };
    HallSignBtn.prototype.getLevel = function (t) {
        return t;
    };
    HallSignBtn.prototype.getOpenTips = function (t) {
        return I18NStrings_1.default.get("MahjongTiles_ProHint_2", "Unlock at Level {0}").replace("{0}", String(t));
    };
    HallSignBtn.prototype.onEnable = function () {
        _super.prototype.onEnable && _super.prototype.onEnable.call(this);
        this.dispatchEvent("MsgEnableHomeBtn", {
            type: "DailySign",
            node: this.node
        });
    };
    HallSignBtn.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
    };
    HallSignBtn.prefabUrl = "prefab/HallSignBtn";
    HallSignBtn.bundleName = "r_dailySignClassic";
    __decorate([
        mj.traitEvent("SignBtn_onLoad")
    ], HallSignBtn.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("SignBtn_click")
    ], HallSignBtn.prototype, "onBtnClick", null);
    __decorate([
        mj.traitEvent("SignBtn_doLockAni")
    ], HallSignBtn.prototype, "doPlayLockAnim", null);
    __decorate([
        mj.traitEvent("SignBtn_updateRedDot")
    ], HallSignBtn.prototype, "updateRedDot", null);
    __decorate([
        mj.traitEvent("SignBtn_updateLock")
    ], HallSignBtn.prototype, "updateLock", null);
    __decorate([
        mj.traitEvent("SignBtn_checkRedDot")
    ], HallSignBtn.prototype, "checkRedDot", null);
    __decorate([
        mj.traitEvent("SignBtn_getLv")
    ], HallSignBtn.prototype, "getLevel", null);
    __decorate([
        mj.traitEvent("SignBtn_getOTips")
    ], HallSignBtn.prototype, "getOpenTips", null);
    HallSignBtn = __decorate([
        mj.class
    ], HallSignBtn);
    return HallSignBtn;
}(BaseUI_1.default));
exports.default = HallSignBtn;

cc._RF.pop();
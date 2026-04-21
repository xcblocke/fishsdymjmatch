"use strict";
cc._RF.push(module, '194a1INT1BIHqcK0HbQYirs', 'SettingRedDotTrait');
// subpackages/l_settingRedDot/Scripts/SettingRedDotTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var SettingRedDotModel_1 = require("./SettingRedDotModel");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var SettingRedDotTrait = /** @class */ (function (_super) {
    __extends(SettingRedDotTrait, _super);
    function SettingRedDotTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._gameSettingRedDot = null;
        _this._settingBackRedDot = null;
        return _this;
    }
    SettingRedDotTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerTile2Event();
    };
    SettingRedDotTrait.prototype.registerTile2Event = function () {
        this.registerEvent([{
                event: "T2TopVw_onLoad",
                type: 2
            }]);
    };
    SettingRedDotTrait.prototype.getMessageListeners = function () {
        var _t = {};
        _t[GameEvent_1.EGameEvent.RedDot_addNotify] = this.addRedDot.bind(this);
        _t[GameEvent_1.EGameEvent.RedDot_clearNotify] = this.onClearRedDot.bind(this);
        _t[GameEvent_1.EGameEvent.RedDot_clearAllNotify] = this.clearSettingRedDot.bind(this);
        return _t;
    };
    SettingRedDotTrait.prototype.addRedDot = function (t) {
        SettingRedDotModel_1.default.getInstance().addRedDot(t);
        this.updateRedDotVisibility();
    };
    SettingRedDotTrait.prototype.onClearRedDot = function (t) {
        SettingRedDotModel_1.default.getInstance().removeRedDot(t);
        this.updateRedDotVisibility();
    };
    SettingRedDotTrait.prototype.onHallCtl_viewDidShow = function (t, e) {
        e();
        this.updateRedDotVisibility();
    };
    SettingRedDotTrait.prototype.onT2TopVw_onLoad = function (t, e) {
        e();
        var o = {
            type: GameTypeEnums_1.ERedDotType.Setting,
            show: true
        };
        mj.triggerInternalEvent("RedDotCtrl_showRedDot", this, [o]);
        if (o.show) {
            var i = t.ins;
            cc.isValid(i) && cc.isValid(i.btnSettings) && this.createGameSettingRedDot(i.btnSettings);
        }
        else {
            this.clearSettingRedDot();
            this.eventEnabled = false;
        }
    };
    SettingRedDotTrait.prototype.onGameUI_onLoad = function (t, e) {
        e();
        var o = {
            type: GameTypeEnums_1.ERedDotType.Setting,
            show: true
        };
        mj.triggerInternalEvent("RedDotCtrl_showRedDot", this, [o]);
        if (o.show) {
            var i = t.ins;
            cc.isValid(i) && "function" == typeof i.getSettingsBtn && this.createGameSettingRedDot(i.getSettingsBtn());
        }
        else {
            this.clearSettingRedDot();
            this.eventEnabled = false;
        }
    };
    SettingRedDotTrait.prototype.onUISetBtnBack_onLoad = function (t, e) {
        var o;
        e();
        this.createSettingBackRedDot(null === (o = t.ins) || void 0 === o ? void 0 : o.node);
    };
    SettingRedDotTrait.prototype.createGameSettingRedDot = function (t) {
        if (cc.isValid(t)) {
            if (!cc.isValid(this._gameSettingRedDot)) {
                var e = this.createRedDotNode();
                if (!cc.isValid(e))
                    return;
                t.addChild(e);
                e.setPosition(this.getGameSettingRedDotPosition());
                this._gameSettingRedDot = e;
            }
            this.updateRedDotVisibility();
        }
    };
    SettingRedDotTrait.prototype.getGameSettingRedDotPosition = function () {
        return UserModel_1.default.getInstance().getMainGameType() === GameTypeEnums_1.MjGameType.Tile2Normal ? cc.v2(40, 40) : cc.v2(30, 30);
    };
    SettingRedDotTrait.prototype.getSettingBackRedDotPosition = function () {
        return cc.v2(260, 65);
    };
    SettingRedDotTrait.prototype.getRedDotImagePath = function () {
        return "texture/common/com_red";
    };
    SettingRedDotTrait.prototype.createSettingBackRedDot = function (t) {
        if (cc.isValid(t)) {
            if (!cc.isValid(this._settingBackRedDot)) {
                var e = this.createRedDotNode();
                if (!cc.isValid(e))
                    return;
                var o = t.getChildByName("bg");
                cc.isValid(o) || (o = t);
                e.parent = o;
                e.setPosition(this.getSettingBackRedDotPosition());
                this._settingBackRedDot = e;
            }
            this.updateRedDotVisibility();
        }
    };
    SettingRedDotTrait.prototype.createRedDotNode = function () {
        var t = BaseSprite_1.default.create(this.getRedDotImagePath());
        return cc.isValid(t) ? t.node : null;
    };
    SettingRedDotTrait.prototype.updateRedDotVisibility = function () {
        var t = SettingRedDotModel_1.default.getInstance().getTotalRedDotCount() > 0;
        cc.isValid(this._gameSettingRedDot) && (this._gameSettingRedDot.active = t);
        cc.isValid(this._settingBackRedDot) && (this._settingBackRedDot.active = t);
    };
    SettingRedDotTrait.prototype.clearSettingRedDot = function () {
        SettingRedDotModel_1.default.getInstance().clearAllRedDots();
        this.updateRedDotVisibility();
    };
    SettingRedDotTrait.traitKey = "SettingRedDot";
    SettingRedDotTrait = __decorate([
        mj.trait,
        mj.class("SettingRedDotTrait")
    ], SettingRedDotTrait);
    return SettingRedDotTrait;
}(Trait_1.default));
exports.default = SettingRedDotTrait;

cc._RF.pop();
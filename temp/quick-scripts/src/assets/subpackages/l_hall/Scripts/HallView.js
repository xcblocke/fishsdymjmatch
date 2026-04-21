"use strict";
cc._RF.push(module, '72445s3dLJOXboeLxIQWmFd', 'HallView');
// subpackages/l_hall/Scripts/HallView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIView_1 = require("../../../Scripts/framework/ui/UIView");
var EventDefine_1 = require("../../../Scripts/base/event/EventDefine");
var TravelConfig_1 = require("../../../Scripts/config/TravelConfig");
var HallNormalBtn_1 = require("./HallNormalBtn");
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var NodeSkinTool_1 = require("../../../Scripts/NodeSkinTool");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var HallView = /** @class */ (function (_super) {
    __extends(HallView, _super);
    function HallView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.normalBtn = null;
        _this.hallTheme = "";
        return _this;
    }
    HallView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initGm();
    };
    HallView.prototype.initGm = function () { };
    HallView.prototype.getMessageListeners = function () {
        var _t = {};
        _t[TravelConfig_1.TRAVEL_GAME_SESSION_CHANGE] = this.onTravelChange.bind(this);
        _t[EventDefine_1.EVT_MSG_HALL_FORCE_UPDATE] = this.onForceUpdate.bind(this);
        return _t;
    };
    HallView.prototype.onTravelChange = function () { };
    HallView.prototype.createButtons = function (t) {
        var e = this;
        (null == t ? void 0 : t.hallTheme) && (this.hallTheme = t.hallTheme);
        HallNormalBtn_1.default.createUI().then(function (t) {
            if (cc.isValid(t) && cc.isValid(e.node)) {
                e.node.addChild(t);
                e.normalBtn = t;
                e.normalBtn.getComponent(HallNormalBtn_1.default).updateUI();
            }
        }).catch(function (t) {
            console.error("[HallView] 游戏内创建按钮失败:" + ((null == t ? void 0 : t.message) || "HallNormalBtn按钮加载失败"));
        });
    };
    HallView.prototype.updateUI = function (t) {
        (null == t ? void 0 : t.hallTheme) && (this.hallTheme = t.hallTheme);
        this.changeTheme(this.hallTheme, true);
        cc.isValid(this.normalBtn) && this.normalBtn.getComponent(HallNormalBtn_1.default).updateUI();
        this.onPopView();
    };
    HallView.prototype.onPopView = function () { };
    HallView.prototype.onForceUpdate = function () { };
    HallView.prototype.isSimpleHall = function () {
        return "Hall" === this.hallTheme;
    };
    HallView.prototype.changeTheme = function (t, e) {
        if (t) {
            var o = DataReader_1.DataReader.getTypeList(ConfigType_1.ConfigType.HallTheme, "SkinKey", t);
            if (o && 0 !== o.length) {
                NodeSkinTool_1.default.parseConfigList(this.node, o, GameTypeEnums_1.MjGameType.Normal, "");
                e && (this.hallTheme = t);
            }
        }
    };
    HallView.prefabUrl = "prefabs/hall/HallBase";
    __decorate([
        mj.traitEvent("HallVw_travelChange")
    ], HallView.prototype, "onTravelChange", null);
    __decorate([
        mj.traitEvent("HallVw_initBtns")
    ], HallView.prototype, "createButtons", null);
    __decorate([
        mj.traitEvent("HallVw_updateUI")
    ], HallView.prototype, "updateUI", null);
    __decorate([
        mj.traitEvent("HallVw_onPopView")
    ], HallView.prototype, "onPopView", null);
    __decorate([
        mj.traitEvent("HallVw_forceUpdate")
    ], HallView.prototype, "onForceUpdate", null);
    __decorate([
        mj.traitEvent("HallVw_chgTheme")
    ], HallView.prototype, "changeTheme", null);
    HallView = __decorate([
        mj.class
    ], HallView);
    return HallView;
}(UIView_1.default));
exports.default = HallView;

cc._RF.pop();
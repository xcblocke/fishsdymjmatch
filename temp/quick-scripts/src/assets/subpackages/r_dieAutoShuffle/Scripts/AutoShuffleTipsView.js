"use strict";
cc._RF.push(module, '897581TEBJEwJ9wMDbYHR8l', 'AutoShuffleTipsView');
// subpackages/r_dieAutoShuffle/Scripts/AutoShuffleTipsView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIView_1 = require("../../../Scripts/framework/ui/UIView");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var DieAutoShuffleTrait_1 = require("./DieAutoShuffleTrait");
var AutoShuffleTipsView = /** @class */ (function (_super) {
    __extends(AutoShuffleTipsView, _super);
    function AutoShuffleTipsView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnUse = null;
        _this.btnReplay = null;
        _this.lblUse = null;
        _this.lblReplay = null;
        _this.lblDesc = null;
        return _this;
    }
    AutoShuffleTipsView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var e = this.node.getChildByName("content_node");
        this.btnUse = e.getChildByName("btn_use");
        this.btnReplay = e.getChildByName("btn_replay");
        this.lblUse = this.btnUse.getChildByName("use").getComponent(cc.Label);
        this.lblReplay = this.btnReplay.getChildByName("replay").getComponent(cc.Label);
        this.lblDesc = e.getChildByName("desc").getComponent(cc.Label);
        this.btnUse && this.OnButtonClick(this.btnUse, this.onAutoBtnClick.bind(this));
        this.btnReplay && this.OnButtonClick(this.btnReplay, this.onUnAutoBtnClick.bind(this));
    };
    AutoShuffleTipsView.prototype.onCloseBtnClick = function () {
        this.delegate.close();
    };
    AutoShuffleTipsView.prototype.show = function () {
        var t, e, i, o = null === (t = this.btnUse) || void 0 === t ? void 0 : t.getChildByName("nodeNum"), n = null === (e = this.btnUse) || void 0 === e ? void 0 : e.getChildByName("use"), l = null === (i = this.btnUse) || void 0 === i ? void 0 : i.getChildByName("ad");
        cc.isValid(o) && (o.active = false);
        cc.isValid(l) && (l.active = false);
        cc.isValid(n) && (n.active = true);
        this.lblDesc.string = I18NStrings_1.default.get("AutoShuffleTips_01", "AutoShuffleTips_01");
        this.lblUse.string = I18NStrings_1.default.get("AutoShuffleTips_02", "AutoShuffleTips_02");
        this.lblReplay.string = I18NStrings_1.default.get("AutoShuffleTips_03", "AutoShuffleTips_03");
    };
    AutoShuffleTipsView.prototype.onAutoBtnClick = function () {
        var t = DieAutoShuffleTrait_1.default.getActiveSettingsInstance();
        t && t.setAutoShuffleEnabled(true, "AutoShuffleTipsView_onAutoBtnClick");
        this.onCloseBtnClick();
    };
    AutoShuffleTipsView.prototype.onUnAutoBtnClick = function () {
        var t = DieAutoShuffleTrait_1.default.getActiveSettingsInstance();
        t && t.setAutoShuffleEnabled(false, "AutoShuffleTipsView_onUnAutoBtnClick");
        this.onCloseBtnClick();
    };
    AutoShuffleTipsView.prefabUrl = "prefabs/ui/FailView";
    AutoShuffleTipsView.bundleName = "mainRes";
    AutoShuffleTipsView = __decorate([
        mj.class
    ], AutoShuffleTipsView);
    return AutoShuffleTipsView;
}(UIView_1.default));
exports.default = AutoShuffleTipsView;

cc._RF.pop();
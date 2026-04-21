"use strict";
cc._RF.push(module, '01a61gLk8xD6Ym/Ht5epCNk', 'DeviceInfoPanelView');
// subpackages/l_deviceInfo/Scripts/DeviceInfoPanelView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIView_1 = require("../../../Scripts/framework/ui/UIView");
var QRCodeUtils_1 = require("../../../Scripts/QRCodeUtils");
var LoginModel_1 = require("../../../Scripts/gamePlay/login/model/LoginModel");
var DeviceInfoTrait_1 = require("./DeviceInfoTrait");
var DeviceInfoPanelView = /** @class */ (function (_super) {
    __extends(DeviceInfoPanelView, _super);
    function DeviceInfoPanelView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._contentNode = null;
        _this._closeBtn = null;
        _this._sdkVersionLabel = null;
        _this._appVersionLabel = null;
        _this._deviceIdLabel = null;
        _this._userIdLabel = null;
        _this._planInfoLabel = null;
        _this._planInfoNode = null;
        _this._copyTipNode = null;
        return _this;
    }
    DeviceInfoPanelView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initUI();
        this.initEvents();
    };
    DeviceInfoPanelView.prototype.start = function () {
        _super.prototype.start.call(this);
        this.updateDeviceInfo();
    };
    DeviceInfoPanelView.prototype.initUI = function () {
        this._contentNode = this.node.getChildByName("Container");
        if (cc.isValid(this._contentNode)) {
            this._closeBtn = this._contentNode.getChildByName("cancelBtn");
            var e = this._contentNode.getChildByName("list");
            if (cc.isValid(e)) {
                this._sdkVersionLabel = this.findLabel(e, "sdk");
                this._appVersionLabel = this.findLabel(e, "app");
                this._deviceIdLabel = this.findLabel(e, "device_id");
                this._userIdLabel = this.findLabel(e, "distance_id");
                this._planInfoNode = e.getChildByName("plans");
                cc.isValid(this._planInfoNode) && (this._planInfoLabel = this._planInfoNode.getComponentInChildren(cc.Label));
            }
            this._copyTipNode = this._contentNode.getChildByName("copy_tip");
            cc.isValid(this._copyTipNode) && (this._copyTipNode.active = false);
        }
    };
    DeviceInfoPanelView.prototype.findLabel = function (e, t) {
        var i = e.getChildByName(t);
        return cc.isValid(i) ? i.getComponentInChildren(cc.Label) : null;
    };
    DeviceInfoPanelView.prototype.initEvents = function () {
        cc.isValid(this._closeBtn) && this.OnButtonClick(this._closeBtn, this.onCloseClick.bind(this));
    };
    DeviceInfoPanelView.prototype.updateDeviceInfo = function () {
        var e = LoginModel_1.default.getInstance(), t = e.deviceInfo, i = "SDK:" + ((null == t ? void 0 : t.app_version) || "N/A"), o = "APP:" + (e.baseVersion || (null === G_Cfg || void 0 === G_Cfg ? void 0 : G_Cfg.baseVersion) || "N/A"), n = "DeviceID:" + ((null == t ? void 0 : t.deviceid) || "N/A"), r = "DistanceID:" + ((null == t ? void 0 : t.distinct_id) || "N/A");
        cc.isValid(this._sdkVersionLabel) && (this._sdkVersionLabel.string = i);
        cc.isValid(this._appVersionLabel) && (this._appVersionLabel.string = o);
        cc.isValid(this._deviceIdLabel) && (this._deviceIdLabel.string = n);
        cc.isValid(this._userIdLabel) && (this._userIdLabel.string = r);
        if (cc.isValid(this._planInfoNode)) {
            var l = this.getPlanNumbers();
            if (DeviceInfoTrait_1.default.getInstance().isShowPlanInfo()) {
                var f = i + "\n" + o + "\n" + n + "\n" + r + "\n首次（新增）命中方案：" + this.getFirstNumbers() + "\n当前方案：" + l;
                QRCodeUtils_1.default.createQRCodeNode(f, 450).parent = this._planInfoNode;
            }
            else
                this._planInfoLabel.string = "Plans:" + l;
        }
    };
    DeviceInfoPanelView.prototype.getFirstNumbers = function () {
        var e = LoginModel_1.default.getInstance().getFirstCachedWayNum();
        return e && e.length ? e.filter(Boolean).join(",") : "无";
    };
    DeviceInfoPanelView.prototype.getPlanNumbers = function () {
        var e = LoginModel_1.default.getInstance().curWayNum();
        return e && e.length ? e.filter(Boolean).join(",") : "无";
    };
    DeviceInfoPanelView.prototype.onCloseClick = function () {
        this.delegate.close();
    };
    DeviceInfoPanelView.prefabUrl = "prefabs/UIDeviceInfoPanel";
    DeviceInfoPanelView.bundleName = "l_deviceInfo";
    DeviceInfoPanelView = __decorate([
        mj.class
    ], DeviceInfoPanelView);
    return DeviceInfoPanelView;
}(UIView_1.default));
exports.default = DeviceInfoPanelView;

cc._RF.pop();
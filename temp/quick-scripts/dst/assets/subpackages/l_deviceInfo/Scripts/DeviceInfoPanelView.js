
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_deviceInfo/Scripts/DeviceInfoPanelView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RldmljZUluZm8vU2NyaXB0cy9EZXZpY2VJbmZvUGFuZWxWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFDMUQsNERBQXVEO0FBQ3ZELCtFQUEwRTtBQUMxRSxxREFBZ0Q7QUFFaEQ7SUFBaUQsdUNBQU07SUFBdkQ7UUFBQSxxRUEyRUM7UUExRUMsa0JBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixzQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDeEIsc0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLG9CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLGtCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLG9CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLG1CQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGtCQUFZLEdBQUcsSUFBSSxDQUFDOztJQWtFdEIsQ0FBQztJQS9EQyxvQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNELG1DQUFLLEdBQUw7UUFDRSxpQkFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRCxvQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxRCxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FB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RyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1NBQ2xEO0lBQ0gsQ0FBQztJQUNELDZDQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsR0FBRyxvQkFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDeEQsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUMzRCxDQUFDO0lBQ0QsNENBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxHQUFHLG9CQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDN0MsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUMzRCxDQUFDO0lBQ0QsMENBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQWhFTSw2QkFBUyxHQUFHLDJCQUEyQixDQUFDO0lBQ3hDLDhCQUFVLEdBQUcsY0FBYyxDQUFDO0lBWGhCLG1CQUFtQjtRQUR2QyxFQUFFLENBQUMsS0FBSztPQUNZLG1CQUFtQixDQTJFdkM7SUFBRCwwQkFBQztDQTNFRCxBQTJFQyxDQTNFZ0QsZ0JBQU0sR0EyRXREO2tCQTNFb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJVmlldyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay91aS9VSVZpZXcnO1xuaW1wb3J0IFFSQ29kZVV0aWxzIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvUVJDb2RlVXRpbHMnO1xuaW1wb3J0IExvZ2luTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9sb2dpbi9tb2RlbC9Mb2dpbk1vZGVsJztcbmltcG9ydCBEZXZpY2VJbmZvVHJhaXQgZnJvbSAnLi9EZXZpY2VJbmZvVHJhaXQnO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXZpY2VJbmZvUGFuZWxWaWV3IGV4dGVuZHMgVUlWaWV3IHtcbiAgX2NvbnRlbnROb2RlID0gbnVsbDtcbiAgX2Nsb3NlQnRuID0gbnVsbDtcbiAgX3Nka1ZlcnNpb25MYWJlbCA9IG51bGw7XG4gIF9hcHBWZXJzaW9uTGFiZWwgPSBudWxsO1xuICBfZGV2aWNlSWRMYWJlbCA9IG51bGw7XG4gIF91c2VySWRMYWJlbCA9IG51bGw7XG4gIF9wbGFuSW5mb0xhYmVsID0gbnVsbDtcbiAgX3BsYW5JbmZvTm9kZSA9IG51bGw7XG4gIF9jb3B5VGlwTm9kZSA9IG51bGw7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvVUlEZXZpY2VJbmZvUGFuZWxcIjtcbiAgc3RhdGljIGJ1bmRsZU5hbWUgPSBcImxfZGV2aWNlSW5mb1wiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5pbml0VUkoKTtcbiAgICB0aGlzLmluaXRFdmVudHMoKTtcbiAgfVxuICBzdGFydCgpIHtcbiAgICBzdXBlci5zdGFydC5jYWxsKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlRGV2aWNlSW5mbygpO1xuICB9XG4gIGluaXRVSSgpIHtcbiAgICB0aGlzLl9jb250ZW50Tm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNvbnRhaW5lclwiKTtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLl9jb250ZW50Tm9kZSkpIHtcbiAgICAgIHRoaXMuX2Nsb3NlQnRuID0gdGhpcy5fY29udGVudE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjYW5jZWxCdG5cIik7XG4gICAgICB2YXIgZSA9IHRoaXMuX2NvbnRlbnROb2RlLmdldENoaWxkQnlOYW1lKFwibGlzdFwiKTtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKGUpKSB7XG4gICAgICAgIHRoaXMuX3Nka1ZlcnNpb25MYWJlbCA9IHRoaXMuZmluZExhYmVsKGUsIFwic2RrXCIpO1xuICAgICAgICB0aGlzLl9hcHBWZXJzaW9uTGFiZWwgPSB0aGlzLmZpbmRMYWJlbChlLCBcImFwcFwiKTtcbiAgICAgICAgdGhpcy5fZGV2aWNlSWRMYWJlbCA9IHRoaXMuZmluZExhYmVsKGUsIFwiZGV2aWNlX2lkXCIpO1xuICAgICAgICB0aGlzLl91c2VySWRMYWJlbCA9IHRoaXMuZmluZExhYmVsKGUsIFwiZGlzdGFuY2VfaWRcIik7XG4gICAgICAgIHRoaXMuX3BsYW5JbmZvTm9kZSA9IGUuZ2V0Q2hpbGRCeU5hbWUoXCJwbGFuc1wiKTtcbiAgICAgICAgY2MuaXNWYWxpZCh0aGlzLl9wbGFuSW5mb05vZGUpICYmICh0aGlzLl9wbGFuSW5mb0xhYmVsID0gdGhpcy5fcGxhbkluZm9Ob2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NvcHlUaXBOb2RlID0gdGhpcy5fY29udGVudE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjb3B5X3RpcFwiKTtcbiAgICAgIGNjLmlzVmFsaWQodGhpcy5fY29weVRpcE5vZGUpICYmICh0aGlzLl9jb3B5VGlwTm9kZS5hY3RpdmUgPSBmYWxzZSk7XG4gICAgfVxuICB9XG4gIGZpbmRMYWJlbChlLCB0KSB7XG4gICAgdmFyIGkgPSBlLmdldENoaWxkQnlOYW1lKHQpO1xuICAgIHJldHVybiBjYy5pc1ZhbGlkKGkpID8gaS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKSA6IG51bGw7XG4gIH1cbiAgaW5pdEV2ZW50cygpIHtcbiAgICBjYy5pc1ZhbGlkKHRoaXMuX2Nsb3NlQnRuKSAmJiB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5fY2xvc2VCdG4sIHRoaXMub25DbG9zZUNsaWNrLmJpbmQodGhpcykpO1xuICB9XG4gIHVwZGF0ZURldmljZUluZm8oKSB7XG4gICAgdmFyIGUgPSBMb2dpbk1vZGVsLmdldEluc3RhbmNlKCksXG4gICAgICB0ID0gZS5kZXZpY2VJbmZvLFxuICAgICAgaSA9IFwiU0RLOlwiICsgKChudWxsID09IHQgPyB2b2lkIDAgOiB0LmFwcF92ZXJzaW9uKSB8fCBcIk4vQVwiKSxcbiAgICAgIG8gPSBcIkFQUDpcIiArIChlLmJhc2VWZXJzaW9uIHx8IChudWxsID09PSBHX0NmZyB8fCB2b2lkIDAgPT09IEdfQ2ZnID8gdm9pZCAwIDogR19DZmcuYmFzZVZlcnNpb24pIHx8IFwiTi9BXCIpLFxuICAgICAgbiA9IFwiRGV2aWNlSUQ6XCIgKyAoKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQuZGV2aWNlaWQpIHx8IFwiTi9BXCIpLFxuICAgICAgciA9IFwiRGlzdGFuY2VJRDpcIiArICgobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5kaXN0aW5jdF9pZCkgfHwgXCJOL0FcIik7XG4gICAgY2MuaXNWYWxpZCh0aGlzLl9zZGtWZXJzaW9uTGFiZWwpICYmICh0aGlzLl9zZGtWZXJzaW9uTGFiZWwuc3RyaW5nID0gaSk7XG4gICAgY2MuaXNWYWxpZCh0aGlzLl9hcHBWZXJzaW9uTGFiZWwpICYmICh0aGlzLl9hcHBWZXJzaW9uTGFiZWwuc3RyaW5nID0gbyk7XG4gICAgY2MuaXNWYWxpZCh0aGlzLl9kZXZpY2VJZExhYmVsKSAmJiAodGhpcy5fZGV2aWNlSWRMYWJlbC5zdHJpbmcgPSBuKTtcbiAgICBjYy5pc1ZhbGlkKHRoaXMuX3VzZXJJZExhYmVsKSAmJiAodGhpcy5fdXNlcklkTGFiZWwuc3RyaW5nID0gcik7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5fcGxhbkluZm9Ob2RlKSkge1xuICAgICAgdmFyIGwgPSB0aGlzLmdldFBsYW5OdW1iZXJzKCk7XG4gICAgICBpZiAoRGV2aWNlSW5mb1RyYWl0LmdldEluc3RhbmNlKCkuaXNTaG93UGxhbkluZm8oKSkge1xuICAgICAgICB2YXIgZiA9IGkgKyBcIlxcblwiICsgbyArIFwiXFxuXCIgKyBuICsgXCJcXG5cIiArIHIgKyBcIlxcbummluasoe+8iOaWsOWinu+8ieWRveS4reaWueahiO+8mlwiICsgdGhpcy5nZXRGaXJzdE51bWJlcnMoKSArIFwiXFxu5b2T5YmN5pa55qGI77yaXCIgKyBsO1xuICAgICAgICBRUkNvZGVVdGlscy5jcmVhdGVRUkNvZGVOb2RlKGYsIDQ1MCkucGFyZW50ID0gdGhpcy5fcGxhbkluZm9Ob2RlO1xuICAgICAgfSBlbHNlIHRoaXMuX3BsYW5JbmZvTGFiZWwuc3RyaW5nID0gXCJQbGFuczpcIiArIGw7XG4gICAgfVxuICB9XG4gIGdldEZpcnN0TnVtYmVycygpIHtcbiAgICB2YXIgZSA9IExvZ2luTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRGaXJzdENhY2hlZFdheU51bSgpO1xuICAgIHJldHVybiBlICYmIGUubGVuZ3RoID8gZS5maWx0ZXIoQm9vbGVhbikuam9pbihcIixcIikgOiBcIuaXoFwiO1xuICB9XG4gIGdldFBsYW5OdW1iZXJzKCkge1xuICAgIHZhciBlID0gTG9naW5Nb2RlbC5nZXRJbnN0YW5jZSgpLmN1cldheU51bSgpO1xuICAgIHJldHVybiBlICYmIGUubGVuZ3RoID8gZS5maWx0ZXIoQm9vbGVhbikuam9pbihcIixcIikgOiBcIuaXoFwiO1xuICB9XG4gIG9uQ2xvc2VDbGljaygpIHtcbiAgICB0aGlzLmRlbGVnYXRlLmNsb3NlKCk7XG4gIH1cbn0iXX0=
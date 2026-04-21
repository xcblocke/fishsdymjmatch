
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_dailySignClassic/Scripts/view/HallSignBtn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2RhaWx5U2lnbkNsYXNzaWMvU2NyaXB0cy92aWV3L0hhbGxTaWduQnRuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrRUFBNkQ7QUFDN0QsNkZBQXdGO0FBQ3hGLHdFQUFtRTtBQUNuRSw4RUFBeUU7QUFDekUsK0VBQTBFO0FBQzFFLHVFQUE0RjtBQUU1RjtJQUF5QywrQkFBTTtJQUEvQztRQUFBLHFFQStGQztRQTlGQyxhQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsY0FBUSxHQUFHLElBQUksQ0FBQzs7SUEwRmxCLENBQUM7SUF2RkMsc0JBQUksa0NBQVM7YUFBYjtZQUNFLE9BQU8sK0JBQXFCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0MsQ0FBQzs7O09BQUE7SUFFRCw0QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNaLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMs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WyJpbXBvcnQgQmFzZVVJIGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3VpL0Jhc2VVSSc7XG5pbXBvcnQgQ29udHJvbGxlck1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvbWFuYWdlci9Db250cm9sbGVyTWFuYWdlcic7XG5pbXBvcnQgRGFpbHlTaWduQ2xhc3NpY01vZGVsIGZyb20gJy4uL21vZGVsL0RhaWx5U2lnbkNsYXNzaWNNb2RlbCc7XG5pbXBvcnQgSTE4TlN0cmluZ3MgZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvZGF0YS9JMThOU3RyaW5ncyc7XG5pbXBvcnQgR2FtZVV0aWxzIGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvdXRpbC9HYW1lVXRpbHMnO1xuaW1wb3J0IHsgRG90R2FtZUJ0bkNsaWNrLCBFSG9tZVBhZ2VDbGlja1R5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2RvdC9ER2FtZUJ0bkNsaWNrJztcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFsbFNpZ25CdG4gZXh0ZW5kcyBCYXNlVUkge1xuICBfcmVkRG90ID0gbnVsbDtcbiAgX2l0ZW1Mb2NrID0gbnVsbDtcbiAgX2xiX2xldmVsID0gbnVsbDtcbiAgX2xiX3NpZ24gPSBudWxsO1xuICBfZWZmTG9jayA9IG51bGw7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYi9IYWxsU2lnbkJ0blwiO1xuICBzdGF0aWMgYnVuZGxlTmFtZSA9IFwicl9kYWlseVNpZ25DbGFzc2ljXCI7XG4gIGdldCBzaWduTW9kZWwoKSB7XG4gICAgcmV0dXJuIERhaWx5U2lnbkNsYXNzaWNNb2RlbC5nZXRJbnN0YW5jZSgpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiU2lnbkJ0bl9vbkxvYWRcIilcbiAgb25Mb2FkKCkge1xuICAgIHZhciBlLCBpLCBvO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuT25CdXR0b25DbGljayh0aGlzLm5vZGUsIHRoaXMub25CdG5DbGljay5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLl9yZWREb3QgPSBjYy5maW5kKFwiaW1nX3JlZFwiLCB0aGlzLm5vZGUpO1xuICAgIHRoaXMuX3JlZERvdDtcbiAgICB0aGlzLl9sYl9zaWduID0gbnVsbCA9PT0gKGUgPSBjYy5maW5kKFwidHh0X3NpZ25cIiwgdGhpcy5ub2RlKSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgIHRoaXMuX2l0ZW1Mb2NrID0gY2MuZmluZChcIml0ZW1fbG9ja1wiLCB0aGlzLm5vZGUpO1xuICAgIGlmICh0aGlzLl9pdGVtTG9jaykge1xuICAgICAgdGhpcy5fbGJfbGV2ZWwgPSBudWxsID09PSAoaSA9IGNjLmZpbmQoXCJpdGVtX2xvY2svdHh0X29wZW5cIiwgdGhpcy5ub2RlKSkgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgdGhpcy5faXRlbUxvY2suYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLl9lZmZMb2NrID0gbnVsbCA9PT0gKG8gPSBjYy5maW5kKFwiaXRlbV9sb2NrL2VmZl9sb2NrXCIsIHRoaXMubm9kZSkpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVSZWREb3QoZmFsc2UpO1xuICAgIHRoaXMudXBkYXRlTG9jaygpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiU2lnbkJ0bl9jbGlja1wiKVxuICBvbkJ0bkNsaWNrKCkge1xuICAgIGlmICh0aGlzLnNpZ25Nb2RlbC5pc1VubG9ja2VkKCkpIHtcbiAgICAgIHRoaXMuc2lnbk1vZGVsLm1hcmtTaWduVmlld09wZW5lZCgpO1xuICAgICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIkRhaWx5U2lnbkNsYXNzaWNDb250cm9sbGVyXCIpO1xuICAgICAgRG90R2FtZUJ0bkNsaWNrLmRvdEhhbGwoRUhvbWVQYWdlQ2xpY2tUeXBlLkRhaWx5U2lnbik7XG4gICAgfSBlbHNlIHRoaXMucGxheUxvY2tBbmltKCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJTaWduQnRuX2RvTG9ja0FuaVwiKVxuICBkb1BsYXlMb2NrQW5pbSgpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgY2MuaXNWYWxpZCh0aGlzLl9lZmZMb2NrKSAmJiBHYW1lVXRpbHMucGxheVNwaW5lKHRoaXMuX2VmZkxvY2ssIFwiaW5cIiwgZmFsc2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNjLmlzVmFsaWQodC5fZWZmTG9jaykgJiYgR2FtZVV0aWxzLnBsYXlTcGluZSh0Ll9lZmZMb2NrLCBcImluaXRcIiwgdHJ1ZSk7XG4gICAgfSk7XG4gIH1cbiAgcGxheUxvY2tBbmltKCkge1xuICAgIHRoaXMuZG9QbGF5TG9ja0FuaW0oKTtcbiAgICB2YXIgdCA9IHRoaXMuc2lnbk1vZGVsLmdldENvbmZpZygpLFxuICAgICAgZSA9IHRoaXMuZ2V0T3BlblRpcHModC51bmxvY2tMZXZlbCk7XG4gICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIkxvY2tUaXBzQ29udHJvbGxlclwiLCB7XG4gICAgICBpc1JldXNlOiBmYWxzZSxcbiAgICAgIHRpcHM6IGUsXG4gICAgICBub0Jsb2NrOiB0cnVlLFxuICAgICAgaXNHbG9iYWw6IGZhbHNlLFxuICAgICAgYmdTdHlsZTogbnVsbCxcbiAgICAgIGlzU2hvd0FjdGlvbjogZmFsc2VcbiAgICB9KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlNpZ25CdG5fdXBkYXRlUmVkRG90XCIpXG4gIHVwZGF0ZVJlZERvdCh0KSB7XG4gICAgY2MuaXNWYWxpZCh0aGlzLl9yZWREb3QpICYmICh0aGlzLl9yZWREb3QuYWN0aXZlID0gdCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJTaWduQnRuX3VwZGF0ZUxvY2tcIilcbiAgdXBkYXRlTG9jayh0ID0gdGhpcy5zaWduTW9kZWwuaXNVbmxvY2tlZCgpKSB7XG4gICAgdmFyIGUgPSB0aGlzLnNpZ25Nb2RlbC5nZXRDb25maWcoKS51bmxvY2tMZXZlbDtcbiAgICB0aGlzLl9pdGVtTG9jayAmJiAodGhpcy5faXRlbUxvY2suYWN0aXZlID0gIXQpO1xuICAgIGlmICh0aGlzLl9sYl9sZXZlbCAmJiAhdCkge1xuICAgICAgdmFyIGkgPSB0aGlzLmdldExldmVsKGUpO1xuICAgICAgdGhpcy5fbGJfbGV2ZWwuc3RyaW5nID0gXCJMdi5cIiArIGk7XG4gICAgfVxuICAgIHRoaXMuX2xiX3NpZ24gJiYgKHRoaXMuX2xiX3NpZ24ubm9kZS5hY3RpdmUgPSB0KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlNpZ25CdG5fY2hlY2tSZWREb3RcIilcbiAgY2hlY2tSZWREb3QoKSB7XG4gICAgdmFyIHQgPSB0aGlzLnNpZ25Nb2RlbC5jaGVja1RvZGF5U2lnbmVkKCksXG4gICAgICBlID0gdGhpcy5zaWduTW9kZWwuaXNVbmxvY2tlZCgpICYmICF0O1xuICAgIHRoaXMudXBkYXRlUmVkRG90KGUpO1xuICAgIHJldHVybiBlO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiU2lnbkJ0bl9nZXRMdlwiKVxuICBnZXRMZXZlbCh0KSB7XG4gICAgcmV0dXJuIHQ7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJTaWduQnRuX2dldE9UaXBzXCIpXG4gIGdldE9wZW5UaXBzKHQpIHtcbiAgICByZXR1cm4gSTE4TlN0cmluZ3MuZ2V0KFwiTWFoam9uZ1RpbGVzX1Byb0hpbnRfMlwiLCBcIlVubG9jayBhdCBMZXZlbCB7MH1cIikucmVwbGFjZShcInswfVwiLCBTdHJpbmcodCkpO1xuICB9XG4gIG9uRW5hYmxlKCkge1xuICAgIHN1cGVyLm9uRW5hYmxlICYmIHN1cGVyLm9uRW5hYmxlLmNhbGwodGhpcyk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KFwiTXNnRW5hYmxlSG9tZUJ0blwiLCB7XG4gICAgICB0eXBlOiBcIkRhaWx5U2lnblwiLFxuICAgICAgbm9kZTogdGhpcy5ub2RlXG4gICAgfSk7XG4gIH1cbiAgb25EZXN0cm95KCkge1xuICAgIHN1cGVyLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xuICB9XG59Il19
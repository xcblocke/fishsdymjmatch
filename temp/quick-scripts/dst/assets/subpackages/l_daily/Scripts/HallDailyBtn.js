
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_daily/Scripts/HallDailyBtn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RhaWx5L1NjcmlwdHMvSGFsbERhaWx5QnRuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBcUY7QUFDckYsMkVBQXNFO0FBQ3RFLDBGQUFxRjtBQUNyRiwrREFBMEQ7QUFDMUQsNEVBQTZFO0FBQzdFLHlFQUFvRTtBQUNwRSxvRUFBeUY7QUFDekYsb0VBQW9GO0FBQ3BGLDJDQUFzQztBQUV0QztJQUEwQyxnQ0FBTTtJQUFoRDtRQUFBLHFFQWlIQztRQS9HQyxhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRTFCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFnQixJQUFJLENBQUM7UUFFOUIsYUFBTyxHQUFjLElBQUksQ0FBQztRQUUxQixlQUFTLEdBQWdCLElBQUksQ0FBQztRQUM5QixhQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsWUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVaLGNBQVEsR0FBeUIsSUFBSSxDQUFDO1FBRXRDLGNBQVEsR0FBeUIsSUFBSSxDQUFDOztJQWlHeEMsQ0FBQztJQTdGQyw2QkFBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDNUIsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztTQUNqQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNELCtCQUFRLEdBQVI7UUFDRSxpQkFBTSxRQUFRLElBQUksaUJBQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFO1lBQ3JDLElBQUksRUFBRSxnQkFBZ0I7WUFDdEIsSUFBSSxFQUFFLElBQUks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O1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQztrREFZbkM7SUFoSGtCLFlBQVk7UUFEaEMsRUFBRSxDQUFDLEtBQUs7T0FDWSxZQUFZLENBaUhoQztJQUFELG1CQUFDO0NBakhELEFBaUhDLENBakh5QyxnQkFBTSxHQWlIL0M7a0JBakhvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRVJlZERvdFR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IEkxOE5TdHJpbmdzIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvSTE4TlN0cmluZ3MnO1xuaW1wb3J0IENvbnRyb2xsZXJNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL21hbmFnZXIvQ29udHJvbGxlck1hbmFnZXInO1xuaW1wb3J0IEJhc2VVSSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay91aS9CYXNlVUknO1xuaW1wb3J0IHsgcGxheVNwaW5lQW5pbSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3V0aWxzL0NvbW1vblV0aWxzJztcbmltcG9ydCBCYXNlU3BpbmUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcGluZSc7XG5pbXBvcnQgeyBEb3RHYW1lQnRuQ2xpY2ssIEVIb21lUGFnZUNsaWNrVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZG90L0RHYW1lQnRuQ2xpY2snO1xuaW1wb3J0IHsgRG90R2FtZVBhZ2VTaG93LCBFUGFnZVNob3dUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9kb3QvREdhbWVQYWdlU2hvdyc7XG5pbXBvcnQgRGFpbHlNb2RlbCBmcm9tICcuL0RhaWx5TW9kZWwnO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYWxsRGFpbHlCdG4gZXh0ZW5kcyBCYXNlVUkge1xuICBAbWouY29tcG9uZW50KFwiZWZmX2J0blwiLCBzcC5Ta2VsZXRvbilcbiAgX2VmZkJ0bjogXCJlZmZfYnRuXCIgPSBudWxsO1xuICBAbWouY29tcG9uZW50KFwidHh0X2RheVwiLCBjYy5MYWJlbClcbiAgX3R4dERheTogXCJ0eHRfZGF5XCIgPSBudWxsO1xuICBAbWouY29tcG9uZW50KFwidHh0X2RhaWx5XCIsIGNjLkxhYmVsKVxuICBfdHh0RGFpbHk6IFwidHh0X2RhaWx5XCIgPSBudWxsO1xuICBAbWoubm9kZShcImltZ19yZWRcIilcbiAgX2ltZ1JlZDogXCJpbWdfcmVkXCIgPSBudWxsO1xuICBAbWoubm9kZShcIml0ZW1fbG9ja1wiKVxuICBfaXRlbUxvY2s6IFwiaXRlbV9sb2NrXCIgPSBudWxsO1xuICBfaXNPcGVuID0gdHJ1ZTtcbiAgX2xldmVsID0gMTA7XG4gIEBtai5jb21wb25lbnQoXCJpdGVtX2xvY2svdHh0X29wZW5cIiwgY2MuTGFiZWwpXG4gIF90eHRPcGVuOiBcIml0ZW1fbG9jay90eHRfb3BlblwiID0gbnVsbDtcbiAgQG1qLmNvbXBvbmVudChcIml0ZW1fbG9jay9lZmZfbG9ja1wiLCBzcC5Ta2VsZXRvbilcbiAgX2VmZkxvY2s6IFwiaXRlbV9sb2NrL2VmZl9sb2NrXCIgPSBudWxsO1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL2RhaWx5L0hhbGxEYWlseUJ0blwiO1xuICBzdGF0aWMgYnVuZGxlTmFtZSA9IFwibWFpblJlc1wiO1xuICBAbWoudHJhaXRFdmVudChcIkhEYWlseUJ0bl9vbkxvYWRcIilcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuT25CdXR0b25DbGljayh0aGlzLm5vZGUsIHtcbiAgICAgIGZ1bmM6IHRoaXMub25CdG5DbGljay5iaW5kKHRoaXMpXG4gICAgfSk7XG4gICAgdGhpcy5pbml0RWZmQW5pbSgpO1xuICB9XG4gIG9uRW5hYmxlKCkge1xuICAgIHN1cGVyLm9uRW5hYmxlICYmIHN1cGVyLm9uRW5hYmxlLmNhbGwodGhpcyk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KFwiTXNnRW5hYmxlSG9tZUJ0blwiLCB7XG4gICAgICB0eXBlOiBcIkRhaWx5Q2hhbGxlbmdlXCIsXG4gICAgICBub2RlOiB0aGlzLm5vZGVcbiAgICB9KTtcbiAgfVxuICBvbkRpc2FibGUoKSB7XG4gICAgc3VwZXIub25EaXNhYmxlICYmIHN1cGVyLm9uRGlzYWJsZS5jYWxsKHRoaXMpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiSERhaWx5QnRuX2luaXRFZmZcIilcbiAgaW5pdEVmZkFuaW0oKSB7XG4gICAgdGhpcy5hbmltUHJveHkgPSBCYXNlU3BpbmUucmVmcmVzaFdpdGhOb2RlKHRoaXMuX2VmZkJ0bi5ub2RlKTtcbiAgICB0aGlzLmFuaW1Qcm94eS5yZXNldChcIlwiKTtcbiAgICB0aGlzLmFuaW1Qcm94eS5tYXJrUmVhZHkoXCJcIik7XG4gICAgdGhpcy5hdHRhY2hOb2RlKFwiaG9va19kYXRlXCIsIHRoaXMuX3R4dERheS5ub2RlLCAxKTtcbiAgICB0aGlzLmF0dGFjaE5vZGUoXCJob29rX3R4dERhaWx5XCIsIHRoaXMuX3R4dERhaWx5Lm5vZGUsIDEpO1xuICB9XG4gIHN0YXJ0KCkge1xuICAgIHN1cGVyLnN0YXJ0LmNhbGwodGhpcyk7XG4gICAgdGhpcy51cGRhdGVEYXkoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkhEYWlseUJ0bl91cGRhdGVEYXlcIilcbiAgdXBkYXRlRGF5KCkge1xuICAgIGlmICh0aGlzLl90eHREYXkpIHtcbiAgICAgIHZhciB0ID0gbmV3IERhdGUoKS5nZXREYXRlKCk7XG4gICAgICB0aGlzLl90eHREYXkuc3RyaW5nID0gXCJcIiArIHQ7XG4gICAgICB0aGlzLl9pc09wZW4gJiYgKHRoaXMuX2lzT3BlbiA9IHRydWUpO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkhEYWlseUJ0bl91cGRhdGVMb2NrXCIpXG4gIHVwZGF0ZUxvY2sodCwgZSkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuX3R4dERhaWx5KSkge1xuICAgICAgdGhpcy5faXRlbUxvY2sgJiYgKHRoaXMuX2l0ZW1Mb2NrLmFjdGl2ZSA9ICF0KTtcbiAgICAgIHRoaXMuX3R4dE9wZW4gJiYgIXQgJiYgKHRoaXMuX3R4dE9wZW4uc3RyaW5nID0gXCJMdi5cIiArIGUpO1xuICAgICAgdGhpcy5fdHh0RGFpbHkubm9kZS5hY3RpdmUgPSB0O1xuICAgICAgdGhpcy5faXNPcGVuID0gdDtcbiAgICAgIHRoaXMuX2xldmVsID0gZTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJIRGFpbHlCdG5fdXBkYXRlUmVkXCIpXG4gIHVwZGF0ZVJlZCh0KSB7XG4gICAgdmFyIGUgPSB7XG4gICAgICBzaG93OiB0LFxuICAgICAgdHlwZTogRVJlZERvdFR5cGUuRGFpbHlDaGFsbGVuZ2VcbiAgICB9O1xuICAgIG1qLnRyaWdnZXJJbnRlcm5hbEV2ZW50KFwiUmVkRG90Q3RybF9zaG93UmVkRG90XCIsIHRoaXMsIFtlXSk7XG4gICAgdGhpcy5faW1nUmVkICYmICh0aGlzLl9pbWdSZWQuYWN0aXZlID0gZS5zaG93KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkhEYWlseUJ0bl9kb0xvY2tBbmlcIilcbiAgZG9QbGF5TG9ja0FuaW0oKSB7XG4gICAgY2MuaXNWYWxpZCh0aGlzLl9lZmZMb2NrKSAmJiBwbGF5U3BpbmVBbmltKHRoaXMuX2VmZkxvY2ssIDEsIFwiaW5cIiwgbnVsbCwgZmFsc2UpO1xuICB9XG4gIHBsYXlMb2NrQW5pbSgpIHtcbiAgICB0aGlzLmRvUGxheUxvY2tBbmltKCk7XG4gICAgdmFyIHQgPSBJMThOU3RyaW5ncy5zdHJpbmdGb3JtYXQoSTE4TlN0cmluZ3MuZ2V0KFwiTWFoam9uZ1RpbGVzX1Byb0hpbnRfMVwiKSwgdGhpcy5fbGV2ZWwpO1xuICAgIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFZpZXdCeUNvbnRyb2xsZXIoXCJMb2NrVGlwc0NvbnRyb2xsZXJcIiwge1xuICAgICAgaXNSZXVzZTogZmFsc2UsXG4gICAgICB0aXBzOiB0LFxuICAgICAgbm9CbG9jazogdHJ1ZSxcbiAgICAgIGlzR2xvYmFsOiBmYWxzZSxcbiAgICAgIGJnU3R5bGU6IG51bGwsXG4gICAgICBpc1Nob3dBY3Rpb246IGZhbHNlXG4gICAgfSk7XG4gIH1cbiAgYXR0YWNoTm9kZSh0LCBlLCBpID0gMSkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuYW5pbVByb3h5KSAmJiBjYy5pc1ZhbGlkKGUpKSB7XG4gICAgICB0aGlzLmFuaW1Qcm94eS5hdHRhY2hOb2RlKHQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgICB9KTtcbiAgICAgIGUuc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiSERhaWx5QnRuX29uQkNsaWNrXCIpXG4gIG9uQnRuQ2xpY2sodCA9IHRydWUpIHtcbiAgICBpZiAodCkge1xuICAgICAgRGFpbHlNb2RlbC5nZXRJbnN0YW5jZSgpLnNldE9wZW5DbnQoMSk7XG4gICAgICBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hWaWV3QnlDb250cm9sbGVyKFwiRGFpbHlDb250cm9sbGVyXCIsIHtcbiAgICAgICAgdGltZVN0YW1wOiBuZXcgRGF0ZSgpLmZvcm1hdChcIllZWVktbW0tZGRcIiksXG4gICAgICAgIGlzUmV1c2U6IGZhbHNlLFxuICAgICAgICBpc1Nob3dBY3Rpb246IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIERvdEdhbWVQYWdlU2hvdy5kb3QoRVBhZ2VTaG93VHlwZS5EYWlseUNoYWxsZW5nZVBhZ2UpO1xuICAgICAgRG90R2FtZUJ0bkNsaWNrLmRvdEhhbGwoRUhvbWVQYWdlQ2xpY2tUeXBlLkRhaWx5Q2hhbGxlbmdlKTtcbiAgICB9IGVsc2UgdGhpcy5wbGF5TG9ja0FuaW0oKTtcbiAgfVxufSJdfQ==
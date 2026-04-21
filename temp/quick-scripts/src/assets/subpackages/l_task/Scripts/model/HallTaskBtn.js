"use strict";
cc._RF.push(module, '058e8fFCvtA27DEbGEW9xBT', 'HallTaskBtn');
// subpackages/l_task/Scripts/model/HallTaskBtn.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../../Scripts/framework/ui/BaseUI");
var ControllerManager_1 = require("../../../../Scripts/framework/manager/ControllerManager");
var TaskData_1 = require("../TaskData");
var DGameBtnClick_1 = require("../../../../Scripts/dot/DGameBtnClick");
var TaskModel_1 = require("./TaskModel");
var I18NStrings_1 = require("../../../../Scripts/framework/data/I18NStrings");
var GameUtils_1 = require("../../../../Scripts/core/simulator/util/GameUtils");
var HallTaskBtn = /** @class */ (function (_super) {
    __extends(HallTaskBtn, _super);
    function HallTaskBtn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._redDot = null;
        _this._itemLock = null;
        _this._lb_level = null;
        _this._lb_task = null;
        _this._effLock = null;
        return _this;
    }
    Object.defineProperty(HallTaskBtn.prototype, "taskModel", {
        get: function () {
            return TaskModel_1.TaskModel.getInstance();
        },
        enumerable: false,
        configurable: true
    });
    HallTaskBtn.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.OnButtonClick(this.node, this.onBtnClick.bind(this));
        this._redDot = cc.find("Bg/sp_red", this.node);
        this._redDot;
        this._lb_task = cc.find("Bg/lb_task", this.node).getComponent(cc.Label);
        this._itemLock = cc.find("Bg/item_lock", this.node);
        if (this._itemLock) {
            this._lb_level = this._itemLock.getComponentInChildren(cc.Label);
            this._itemLock.active = false;
            this._effLock = cc.find("Bg/item_lock/eff_lock", this.node).getComponent(sp.Skeleton);
        }
        this.updateRedDot(false);
    };
    HallTaskBtn.prototype.onEnable = function () {
        _super.prototype.onEnable && _super.prototype.onEnable.call(this);
        this.dispatchEvent("MsgEnableHomeBtn", {
            type: "Task",
            node: this.node
        });
    };
    HallTaskBtn.prototype.onDisable = function () {
        _super.prototype.onDisable && _super.prototype.onDisable.call(this);
    };
    HallTaskBtn.prototype.onBtnClick = function () {
        if (this.taskModel.isTaskOpen()) {
            ControllerManager_1.default.getInstance().pushViewByController("TaskController", {
                from: TaskData_1.ETaskUIType.Home
            });
            this.updateRedDot(false);
            DGameBtnClick_1.DotGameBtnClick.dotHall(DGameBtnClick_1.EHomePageClickType.DailyTask);
        }
        else
            this.playLockAnim();
    };
    HallTaskBtn.prototype.doPlayLockAnim = function () {
        var t = this;
        cc.isValid(this._effLock) && GameUtils_1.default.playSpine(this._effLock, "in", false, function () {
            cc.isValid(t._effLock) && GameUtils_1.default.playSpine(t._effLock, "init", true);
        });
    };
    HallTaskBtn.prototype.playLockAnim = function () {
        this.doPlayLockAnim();
        var t = this.getOpenTips(this.taskModel.openCondition().level);
        ControllerManager_1.default.getInstance().pushViewByController("LockTipsController", {
            isReuse: false,
            tips: t,
            noBlock: true,
            isGlobal: false,
            bgStyle: null,
            isShowAction: false
        });
    };
    HallTaskBtn.prototype.updateRedDot = function (t) {
        cc.isValid(this._redDot) && (this._redDot.active = t);
    };
    HallTaskBtn.prototype.updateLock = function (t) {
        if (cc.isValid(this._lb_task)) {
            void 0 === t && (t = this.taskModel.isTaskOpen());
            var e = this.taskModel.openCondition().level;
            this._itemLock && (this._itemLock.active = !t);
            if (this._lb_level && !t) {
                var a = this.getLevel(e);
                this._lb_level.string = "Lv." + a;
            }
            this._lb_task.node.active = t;
        }
    };
    HallTaskBtn.prototype.getLevel = function (t) {
        return t;
    };
    HallTaskBtn.prototype.getOpenTips = function (t) {
        return I18NStrings_1.default.stringFormat(I18NStrings_1.default.get("Common_Reward_target_1"), t);
    };
    HallTaskBtn.prefabUrl = "prefabs/task/HallTaskBtn";
    __decorate([
        mj.traitEvent("TaskTt_onLoad")
    ], HallTaskBtn.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("TaskTt_onBtnClick")
    ], HallTaskBtn.prototype, "onBtnClick", null);
    __decorate([
        mj.traitEvent("TaskTt_doLockAni")
    ], HallTaskBtn.prototype, "doPlayLockAnim", null);
    __decorate([
        mj.traitEvent("TaskTt_updateLock")
    ], HallTaskBtn.prototype, "updateLock", null);
    __decorate([
        mj.traitEvent("TaskTt_getLv")
    ], HallTaskBtn.prototype, "getLevel", null);
    __decorate([
        mj.traitEvent("TaskTt_getOTips")
    ], HallTaskBtn.prototype, "getOpenTips", null);
    HallTaskBtn = __decorate([
        mj.class
    ], HallTaskBtn);
    return HallTaskBtn;
}(BaseUI_1.default));
exports.default = HallTaskBtn;

cc._RF.pop();
"use strict";
cc._RF.push(module, '8e5c57uhNVBxa7Fy5m0frJ9', 'TaskBannerDelayTrait');
// subpackages/l_task/Scripts/TaskBannerDelayTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var TaskBannerDelayTrait = /** @class */ (function (_super) {
    __extends(TaskBannerDelayTrait, _super);
    function TaskBannerDelayTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.DELAY_TIME = 1.7;
        _this.FORCE_BLOCK = true;
        _this.UNBLOCK_DELAY = 1;
        _this.BTN_NEXT_DELAY_TIME = 2;
        return _this;
    }
    TaskBannerDelayTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TaskBannerDelayTrait.prototype.onTaskTrait_showBanner = function (t, e) {
        var a, o, i, r = this, n = null !== (o = null === (a = t.args[0]) || void 0 === a ? void 0 : a.hasBoxReward) && void 0 !== o && o, s = null !== (i = t.args[3]) && void 0 !== i && i;
        if (n)
            e();
        else {
            var l = 1000 * this.DELAY_TIME;
            setTimeout(function () {
                e();
            }, l);
            if (!GameUtils_1.default.isRatingDialogReady() && !s) {
                var p = 1000 * this.UNBLOCK_DELAY + l;
                setTimeout(function () {
                    r.removeBlockLayer();
                }, p);
            }
        }
    };
    TaskBannerDelayTrait.prototype.removeBlockLayer = function () {
        var t;
        try {
            var e = ControllerManager_1.default.getInstance().getControByName("TaskBannerController");
            if (!e)
                return;
            (null === (t = e.rootView) || void 0 === t ? void 0 : t.getComponent(cc.BlockInputEvents)) && e.rootView.removeComponent(cc.BlockInputEvents);
        }
        catch (t) { }
    };
    TaskBannerDelayTrait.prototype.onTaskTrait_checkNeedBlock = function (t, e) {
        if (this.FORCE_BLOCK) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: true
            });
        }
        else {
            e();
        }
    };
    TaskBannerDelayTrait.prototype.onWinVw_btnNextDelay = function (t, e) {
        var a;
        if (t.args[0]) {
            (null !== (a = t.args[0].delayTime) && void 0 !== a ? a : 0) < this.BTN_NEXT_DELAY_TIME && (t.args[0].delayTime = this.BTN_NEXT_DELAY_TIME);
        }
        e();
    };
    TaskBannerDelayTrait.traitKey = "TaskBannerDelay";
    TaskBannerDelayTrait.nextTimeOut = -1;
    TaskBannerDelayTrait = __decorate([
        mj.trait,
        mj.class("TaskBannerDelayTrait")
    ], TaskBannerDelayTrait);
    return TaskBannerDelayTrait;
}(Trait_1.default));
exports.default = TaskBannerDelayTrait;

cc._RF.pop();
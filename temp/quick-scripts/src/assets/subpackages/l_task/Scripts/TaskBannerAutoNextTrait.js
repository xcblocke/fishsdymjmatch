"use strict";
cc._RF.push(module, 'ae4c8yfD1tFmJFlEgM0Bl8v', 'TaskBannerAutoNextTrait');
// subpackages/l_task/Scripts/TaskBannerAutoNextTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TaskBannerAutoNextTrait = /** @class */ (function (_super) {
    __extends(TaskBannerAutoNextTrait, _super);
    function TaskBannerAutoNextTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delayTime = 1.2;
        return _this;
    }
    TaskBannerAutoNextTrait.prototype.onLoad = function () {
        var e, a;
        _super.prototype.onLoad.call(this);
        this.delayTime = null !== (a = null === (e = this._traitData) || void 0 === e ? void 0 : e.delayTime) && void 0 !== a ? a : 1.2;
    };
    TaskBannerAutoNextTrait.prototype.onTaskTrait_showBanner = function (t, e) {
        t.args[0] = t.args[0] || {};
        t.args[0].immediateNext = true;
        var a = t.args[1], o = t.args[2], i = t.args[3], r = t.ins;
        this.pushController("TaskBannerController", {
            data: o,
            isShowAction: false,
            noBlock: !r.checkNeedBlock(),
            bgStyle: {
                blackOpacity: 0
            }
        });
        var n = 1000 * this.delayTime;
        setTimeout(function () {
            if (i) {
                r.showTask(a, true);
            }
            else {
                a();
            }
        }, n);
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    TaskBannerAutoNextTrait.traitKey = "TaskBannerAutoNext";
    TaskBannerAutoNextTrait = __decorate([
        mj.trait,
        mj.class("TaskBannerAutoNextTrait")
    ], TaskBannerAutoNextTrait);
    return TaskBannerAutoNextTrait;
}(Trait_1.default));
exports.default = TaskBannerAutoNextTrait;

cc._RF.pop();
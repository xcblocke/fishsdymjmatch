"use strict";
cc._RF.push(module, '9d660EOMNpIuKUV24Db4Mf6', 'TaskAllAdTrait');
// subpackages/l_taskAllAd/Scripts/TaskAllAdTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TaskAllAdTrait = /** @class */ (function (_super) {
    __extends(TaskAllAdTrait, _super);
    function TaskAllAdTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TaskAllAdTrait.prototype, "getAdScale", {
        get: function () {
            var t, r;
            return null !== (r = null === (t = this.traitData) || void 0 === t ? void 0 : t.adScale) && void 0 !== r ? r : 2;
        },
        enumerable: false,
        configurable: true
    });
    TaskAllAdTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TaskAllAdTrait.prototype.onTaskRwdVw_getAdScale = function (t, r) {
        var e = this.getAdScale;
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: e
        });
    };
    TaskAllAdTrait.traitKey = "TaskAllAd";
    TaskAllAdTrait = __decorate([
        mj.trait,
        mj.class("TaskAllAdTrait")
    ], TaskAllAdTrait);
    return TaskAllAdTrait;
}(Trait_1.default));
exports.default = TaskAllAdTrait;

cc._RF.pop();
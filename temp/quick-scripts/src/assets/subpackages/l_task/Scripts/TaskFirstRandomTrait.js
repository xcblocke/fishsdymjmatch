"use strict";
cc._RF.push(module, 'cadbcStYYpNYZnDjjuL5DeK', 'TaskFirstRandomTrait');
// subpackages/l_task/Scripts/TaskFirstRandomTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TaskFirstRandomTrait = /** @class */ (function (_super) {
    __extends(TaskFirstRandomTrait, _super);
    function TaskFirstRandomTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {};
        return _this;
    }
    TaskFirstRandomTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._config = this._traitData || {};
    };
    TaskFirstRandomTrait.prototype.onTaskTrait_getFstRndFlg = function (t, e) {
        if (void 0 === this._config.firstRandomFlag) {
            e();
        }
        else {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: this._config.firstRandomFlag
            });
        }
    };
    TaskFirstRandomTrait.traitKey = "TaskFirstRandom";
    TaskFirstRandomTrait = __decorate([
        mj.trait,
        mj.class("TaskFirstRandomTrait")
    ], TaskFirstRandomTrait);
    return TaskFirstRandomTrait;
}(Trait_1.default));
exports.default = TaskFirstRandomTrait;

cc._RF.pop();
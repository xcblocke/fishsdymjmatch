
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_task/Scripts/TaskBoxTipTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4556dt9G0pJd4p78fdUKCRk', 'TaskBoxTipTrait');
// subpackages/l_task/Scripts/TaskBoxTipTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var Config_1 = require("../../../Scripts/Config");
var TaskBoxTipTrait = /** @class */ (function (_super) {
    __extends(TaskBoxTipTrait, _super);
    function TaskBoxTipTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskBoxTipTrait.prototype.getMessageListeners = function () {
        var _t = {};
        _t[Config_1.EVT_MSG_KEY_EVENT_TOP_TOUCH_START] = this.onTopTouchStart.bind(this);
        return _t;
    };
    TaskBoxTipTrait.prototype.onTopTouchStart = function () {
        this._traitData.clickClose && this.dispatchEvent("removeTaskBoxTips");
    };
    TaskBoxTipTrait.traitKey = "TaskBoxTip";
    TaskBoxTipTrait = __decorate([
        mj.trait,
        mj.class("TaskBoxTipTrait")
    ], TaskBoxTipTrait);
    return TaskBoxTipTrait;
}(Trait_1.default));
exports.default = TaskBoxTipTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Rhc2svU2NyaXB0cy9UYXNrQm94VGlwVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCxrREFBNEU7QUFHNUU7SUFBNkMsbUNBQUs7SUFBbEQ7O0lBVUEsQ0FBQztJQVJDLDZDQUFtQixHQUFuQjtRQUNFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNaLEVBQUUsQ0FBQywwQ0FBaUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hFLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUNELHlDQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDeEUsQ0FBQztJQVJNLHdCQUFRLEdBQUcsWUFBWSxDQUFDO0lBRFosZUFBZTtRQUZuQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUM7T0FDUCxlQUFlLENBVW5DO0lBQUQsc0JBQUM7Q0FWRCxBQVVDLENBVjRDLGVBQUssR0FVakQ7a0JBVm9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgRVZUX01TR19LRVlfRVZFTlRfVE9QX1RPVUNIX1NUQVJUIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9Db25maWcnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJUYXNrQm94VGlwVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tCb3hUaXBUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJUYXNrQm94VGlwXCI7XG4gIGdldE1lc3NhZ2VMaXN0ZW5lcnMoKSB7XG4gICAgdmFyIF90ID0ge307XG4gICAgX3RbRVZUX01TR19LRVlfRVZFTlRfVE9QX1RPVUNIX1NUQVJUXSA9IHRoaXMub25Ub3BUb3VjaFN0YXJ0LmJpbmQodGhpcyk7XG4gICAgcmV0dXJuIF90O1xuICB9XG4gIG9uVG9wVG91Y2hTdGFydCgpIHtcbiAgICB0aGlzLl90cmFpdERhdGEuY2xpY2tDbG9zZSAmJiB0aGlzLmRpc3BhdGNoRXZlbnQoXCJyZW1vdmVUYXNrQm94VGlwc1wiKTtcbiAgfVxufSJdfQ==
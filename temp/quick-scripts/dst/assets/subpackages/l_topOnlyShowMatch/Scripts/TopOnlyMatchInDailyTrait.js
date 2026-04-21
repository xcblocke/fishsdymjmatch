
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_topOnlyShowMatch/Scripts/TopOnlyMatchInDailyTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6a1f0Usy2VKeahkM0zFr1P9', 'TopOnlyMatchInDailyTrait');
// subpackages/l_topOnlyShowMatch/Scripts/TopOnlyMatchInDailyTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TopOnlyMatchInDailyTrait = /** @class */ (function (_super) {
    __extends(TopOnlyMatchInDailyTrait, _super);
    function TopOnlyMatchInDailyTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TopOnlyMatchInDailyTrait.prototype.isMatchGameType = function (t) {
        var e, i = (null === (e = this.traitData) || void 0 === e ? void 0 : e.gameTypes) || [], a = GameTypeEnums_1.MjGameType[t];
        return i.includes(a);
    };
    TopOnlyMatchInDailyTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        null === (e = this.traitData) || void 0 === e || e.gameTypes;
    };
    TopOnlyMatchInDailyTrait.prototype.onTOSMatch_isMatchGType = function (t, e) {
        var i, a = null === (i = t.args) || void 0 === i ? void 0 : i[0];
        if (this.isMatchGameType(a)) {
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
    TopOnlyMatchInDailyTrait.traitKey = "TopOnlyMatchInDaily";
    TopOnlyMatchInDailyTrait = __decorate([
        mj.trait,
        mj.class("TopOnlyMatchInDailyTrait")
    ], TopOnlyMatchInDailyTrait);
    return TopOnlyMatchInDailyTrait;
}(Trait_1.default));
exports.default = TopOnlyMatchInDailyTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RvcE9ubHlTaG93TWF0Y2gvU2NyaXB0cy9Ub3BPbmx5TWF0Y2hJbkRhaWx5VHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYsd0ZBQW9GO0FBR3BGO0lBQXNELDRDQUFLO0lBQTNEOztJQTBCQSxDQUFDO0lBeEJDLGtEQUFlLEdBQWYsVUFBZ0IsQ0FBQztRQUNmLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsRUFDaEYsQ0FBQyxHQUFHLDBCQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFDRCx5Q0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDTixpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDL0QsQ0FBQztJQUNELDBEQUF1QixHQUF2QixVQUF3QixDQUFDLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsRUFDSCxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzNCLENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtnQkFDMUMsU0FBUyxFQUFFLElBQUk7YUFDaEIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBeEJNLGlDQUFRLEdBQUcscUJBQXFCLENBQUM7SUFEckIsd0JBQXdCO1FBRjVDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQztPQUNoQix3QkFBd0IsQ0EwQjVDO0lBQUQsK0JBQUM7Q0ExQkQsQUEwQkMsQ0ExQnFELGVBQUssR0EwQjFEO2tCQTFCb0Isd0JBQXdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJUb3BPbmx5TWF0Y2hJbkRhaWx5VHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcE9ubHlNYXRjaEluRGFpbHlUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJUb3BPbmx5TWF0Y2hJbkRhaWx5XCI7XG4gIGlzTWF0Y2hHYW1lVHlwZSh0KSB7XG4gICAgdmFyIGUsXG4gICAgICBpID0gKG51bGwgPT09IChlID0gdGhpcy50cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuZ2FtZVR5cGVzKSB8fCBbXSxcbiAgICAgIGEgPSBNakdhbWVUeXBlW3RdO1xuICAgIHJldHVybiBpLmluY2x1ZGVzKGEpO1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgZTtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICBudWxsID09PSAoZSA9IHRoaXMudHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGUgfHwgZS5nYW1lVHlwZXM7XG4gIH1cbiAgb25UT1NNYXRjaF9pc01hdGNoR1R5cGUodCwgZSkge1xuICAgIHZhciBpLFxuICAgICAgYSA9IG51bGwgPT09IChpID0gdC5hcmdzKSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpWzBdO1xuICAgIGlmICh0aGlzLmlzTWF0Y2hHYW1lVHlwZShhKSkge1xuICAgICAgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgcmV0dXJuVmFsOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxufSJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_topOnlyShowScore/Scripts/TopOnlyScoreInDailyTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'da673PeMKtPE5zDrt1YjJdg', 'TopOnlyScoreInDailyTrait');
// subpackages/l_topOnlyShowScore/Scripts/TopOnlyScoreInDailyTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TopOnlyScoreInDailyTrait = /** @class */ (function (_super) {
    __extends(TopOnlyScoreInDailyTrait, _super);
    function TopOnlyScoreInDailyTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TopOnlyScoreInDailyTrait.prototype.isMatchGameType = function (t) {
        var e, r = (null === (e = this.traitData) || void 0 === e ? void 0 : e.gameTypes) || [], o = GameTypeEnums_1.MjGameType[t];
        return r.includes(o);
    };
    TopOnlyScoreInDailyTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        null === (e = this.traitData) || void 0 === e || e.gameTypes;
    };
    TopOnlyScoreInDailyTrait.prototype.onTOSScore_isMatchGType = function (t, e) {
        var r, o = null === (r = t.args) || void 0 === r ? void 0 : r[0];
        if (this.isMatchGameType(o)) {
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
    TopOnlyScoreInDailyTrait.traitKey = "TopOnlyScoreInDaily";
    TopOnlyScoreInDailyTrait = __decorate([
        mj.trait,
        mj.class("TopOnlyScoreInDailyTrait")
    ], TopOnlyScoreInDailyTrait);
    return TopOnlyScoreInDailyTrait;
}(Trait_1.default));
exports.default = TopOnlyScoreInDailyTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RvcE9ubHlTaG93U2NvcmUvU2NyaXB0cy9Ub3BPbmx5U2NvcmVJbkRhaWx5VHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYsd0ZBQW9GO0FBR3BGO0lBQXNELDRDQUFLO0lBQTNEOztJQTBCQSxDQUFDO0lBeEJDLGtEQUFlLEdBQWYsVUFBZ0IsQ0FBQztRQUNmLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsRUFDaEYsQ0FBQyxHQUFHLDBCQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFDRCx5Q0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDTixpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDL0QsQ0FBQztJQUNELDBEQUF1QixHQUF2QixVQUF3QixDQUFDLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsRUFDSCxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzNCLENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtnQkFDMUMsU0FBUyxFQUFFLElBQUk7YUFDaEIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBeEJNLGlDQUFRLEdBQUcscUJBQXFCLENBQUM7SUFEckIsd0JBQXdCO1FBRjVDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQztPQUNoQix3QkFBd0IsQ0EwQjVDO0lBQUQsK0JBQUM7Q0ExQkQsQUEwQkMsQ0ExQnFELGVBQUssR0EwQjFEO2tCQTFCb0Isd0JBQXdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJUb3BPbmx5U2NvcmVJbkRhaWx5VHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcE9ubHlTY29yZUluRGFpbHlUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJUb3BPbmx5U2NvcmVJbkRhaWx5XCI7XG4gIGlzTWF0Y2hHYW1lVHlwZSh0KSB7XG4gICAgdmFyIGUsXG4gICAgICByID0gKG51bGwgPT09IChlID0gdGhpcy50cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuZ2FtZVR5cGVzKSB8fCBbXSxcbiAgICAgIG8gPSBNakdhbWVUeXBlW3RdO1xuICAgIHJldHVybiByLmluY2x1ZGVzKG8pO1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgZTtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICBudWxsID09PSAoZSA9IHRoaXMudHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGUgfHwgZS5nYW1lVHlwZXM7XG4gIH1cbiAgb25UT1NTY29yZV9pc01hdGNoR1R5cGUodCwgZSkge1xuICAgIHZhciByLFxuICAgICAgbyA9IG51bGwgPT09IChyID0gdC5hcmdzKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByWzBdO1xuICAgIGlmICh0aGlzLmlzTWF0Y2hHYW1lVHlwZShvKSkge1xuICAgICAgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgcmV0dXJuVmFsOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxufSJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_journey/Scripts/TravelStartUnlockTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ad516j58uZOe56/0bWT9ycG', 'TravelStartUnlockTrait');
// subpackages/l_journey/Scripts/TravelStartUnlockTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TravelStartUnlockTrait = /** @class */ (function (_super) {
    __extends(TravelStartUnlockTrait, _super);
    function TravelStartUnlockTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TravelStartUnlockTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TravelStartUnlockTrait.prototype.onJourney_GetStartTime = function (t, e) {
        var r = new Date().getTime();
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: r
        });
    };
    TravelStartUnlockTrait.traitKey = "TravelStartUnlock";
    TravelStartUnlockTrait = __decorate([
        mj.trait,
        mj.class("TravelStartUnlockTrait")
    ], TravelStartUnlockTrait);
    return TravelStartUnlockTrait;
}(Trait_1.default));
exports.default = TravelStartUnlockTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2pvdXJuZXkvU2NyaXB0cy9UcmF2ZWxTdGFydFVubG9ja1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBR3hGO0lBQW9ELDBDQUFLO0lBQXpEOztJQWFBLENBQUM7SUFYQyx1Q0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsdURBQXNCLEdBQXRCLFVBQXVCLENBQUMsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFDO1lBQ0EsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07WUFDMUMsT0FBTyxFQUFFLElBQUk7WUFDYixTQUFTLEVBQUUsQ0FBQztTQUNiLENBQUMsQ0FBQztJQUNMLENBQUM7SUFYTSwrQkFBUSxHQUFHLG1CQUFtQixDQUFDO0lBRG5CLHNCQUFzQjtRQUYxQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUM7T0FDZCxzQkFBc0IsQ0FhMUM7SUFBRCw2QkFBQztDQWJELEFBYUMsQ0FibUQsZUFBSyxHQWF4RDtrQkFib0Isc0JBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVHJhdmVsU3RhcnRVbmxvY2tUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhdmVsU3RhcnRVbmxvY2tUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJUcmF2ZWxTdGFydFVubG9ja1wiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25Kb3VybmV5X0dldFN0YXJ0VGltZSh0LCBlKSB7XG4gICAgdmFyIHIgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBlKHtcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5WYWw6IHJcbiAgICB9KTtcbiAgfVxufSJdfQ==
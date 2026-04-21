
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_pureRandom/Scripts/PureRandomExtractTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f39ffF+E1BHKL+SZfqNEhWx', 'PureRandomExtractTrait');
// subpackages/l_pureRandom/Scripts/PureRandomExtractTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ExtractStatic_1 = require("../../../Scripts/core/extractQuestion/ExtractStatic");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ExtractNormalLevels_1 = require("../../../Scripts/core/extractQuestion/ExtractNormalLevels");
var DynamicCurve_1 = require("../../../Scripts/types/DynamicCurve");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var PureRandomExtractTrait = /** @class */ (function (_super) {
    __extends(PureRandomExtractTrait, _super);
    function PureRandomExtractTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PureRandomExtractTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    PureRandomExtractTrait.prototype.onExtNormLv_getContent = function (t, r) {
        new Date().getTime();
        var e = ExtractNormalLevels_1.default.getInstance().getRandomContent();
        if (e) {
            r({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: e
            });
        }
        else {
            r();
        }
    };
    PureRandomExtractTrait.prototype.onExtractTool_upCapability = function (t, r) {
        r({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: null
        });
    };
    PureRandomExtractTrait.prototype.onExtractStatic_getContent = function (t, r) {
        var e = ExtractStatic_1.default.getInstance().getRandomContent();
        if (e) {
            r({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: e
            });
        }
        else {
            r();
        }
    };
    PureRandomExtractTrait.prototype.onDCMgr_getCont = function (t, r) {
        var e = UserModel_1.default.getInstance().getCurrentGameType(), n = new Promise(function (t, r) {
            DynamicCurve_1.default.instance.getRandomContent(e).then(function (e) {
                if (e) {
                    t(e);
                }
                else {
                    r(new Error("动态纯随机抽题失败"));
                }
            }).catch(function (t) {
                console.error("[关卡抽取 随机抽题] 动态纯随机抽题异常: " + t.message);
                r(t);
            });
        });
        r({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: n
        });
    };
    PureRandomExtractTrait.traitKey = "PureRandomExtract";
    PureRandomExtractTrait = __decorate([
        mj.trait,
        mj.class("PureRandomExtractTrait")
    ], PureRandomExtractTrait);
    return PureRandomExtractTrait;
}(Trait_1.default));
exports.default = PureRandomExtractTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3B1cmVSYW5kb20vU2NyaXB0cy9QdXJlUmFuZG9tRXh0cmFjdFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QscUZBQWdGO0FBQ2hGLDhFQUF3RjtBQUN4RixpR0FBNEY7QUFDNUYsb0VBQStEO0FBQy9ELHNFQUFpRTtBQUdqRTtJQUFvRCwwQ0FBSztJQUF6RDs7SUF5REEsQ0FBQztJQXZEQyx1Q0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsdURBQXNCLEdBQXRCLFVBQXVCLENBQUMsRUFBRSxDQUFDO1FBQ3pCLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsNkJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM3RCxJQUFJLENBQUMsRUFBRTtZQUNMLENBQUMsQ0FBQztnQkFDQSxVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtnQkFDMUMsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsU0FBUyxFQUFFLENBQUM7YUFDYixDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsQ0FBQyxFQUFFLENBQUM7U0FDTDtJQUNILENBQUM7SUFDRCwyREFBMEIsR0FBMUIsVUFBMkIsQ0FBQyxFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFDO1lBQ0EsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07WUFDMUMsT0FBTyxFQUFFLElBQUk7WUFDYixTQUFTLEVBQUUsSUFBSTtTQUNoQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsMkRBQTBCLEdBQTFCLFVBQTJCLENBQUMsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxHQUFHLHVCQUFhLENBQUMsV0FBVyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN2RCxJQUFJLENBQUMsRUFBRTtZQUNMLENBQUMsQ0FBQztnQkFDQSxVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtnQkFDMUMsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsU0FBUyxFQUFFLENBQUM7YUFDYixDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsQ0FBQyxFQUFFLENBQUM7U0FDTDtJQUNILENBQUM7SUFDRCxnREFBZSxHQUFmLFVBQWdCLENBQUMsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsRUFDbEQsQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7WUFDNUIsc0JBQVksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLEVBQUU7b0JBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNOO3FCQUFNO29CQUNMLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2lCQUMzQjtZQUNILENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7Z0JBQ2xCLE9BQU8sQ0FBQyxLQUFLLENBQUMseUJBQXlCLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNyRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO1lBQ0EsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07WUFDMUMsT0FBTyxFQUFFLElBQUk7WUFDYixTQUFTLEVBQUUsQ0FBQztTQUNiLENBQUMsQ0FBQztJQUNMLENBQUM7SUF2RE0sK0JBQVEsR0FBRyxtQkFBbUIsQ0FBQztJQURuQixzQkFBc0I7UUFGMUMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDO09BQ2Qsc0JBQXNCLENBeUQxQztJQUFELDZCQUFDO0NBekRELEFBeURDLENBekRtRCxlQUFLLEdBeUR4RDtrQkF6RG9CLHNCQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgRXh0cmFjdFN0YXRpYyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvZXh0cmFjdFF1ZXN0aW9uL0V4dHJhY3RTdGF0aWMnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IEV4dHJhY3ROb3JtYWxMZXZlbHMgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL2V4dHJhY3RRdWVzdGlvbi9FeHRyYWN0Tm9ybWFsTGV2ZWxzJztcbmltcG9ydCBEeW5hbWljQ3VydmUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy90eXBlcy9EeW5hbWljQ3VydmUnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiUHVyZVJhbmRvbUV4dHJhY3RUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHVyZVJhbmRvbUV4dHJhY3RUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJQdXJlUmFuZG9tRXh0cmFjdFwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25FeHROb3JtTHZfZ2V0Q29udGVudCh0LCByKSB7XG4gICAgbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgdmFyIGUgPSBFeHRyYWN0Tm9ybWFsTGV2ZWxzLmdldEluc3RhbmNlKCkuZ2V0UmFuZG9tQ29udGVudCgpO1xuICAgIGlmIChlKSB7XG4gICAgICByKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IGVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByKCk7XG4gICAgfVxuICB9XG4gIG9uRXh0cmFjdFRvb2xfdXBDYXBhYmlsaXR5KHQsIHIpIHtcbiAgICByKHtcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5WYWw6IG51bGxcbiAgICB9KTtcbiAgfVxuICBvbkV4dHJhY3RTdGF0aWNfZ2V0Q29udGVudCh0LCByKSB7XG4gICAgdmFyIGUgPSBFeHRyYWN0U3RhdGljLmdldEluc3RhbmNlKCkuZ2V0UmFuZG9tQ29udGVudCgpO1xuICAgIGlmIChlKSB7XG4gICAgICByKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IGVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByKCk7XG4gICAgfVxuICB9XG4gIG9uRENNZ3JfZ2V0Q29udCh0LCByKSB7XG4gICAgdmFyIGUgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSxcbiAgICAgIG4gPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAodCwgcikge1xuICAgICAgICBEeW5hbWljQ3VydmUuaW5zdGFuY2UuZ2V0UmFuZG9tQ29udGVudChlKS50aGVuKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIHQoZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHIobmV3IEVycm9yKFwi5Yqo5oCB57qv6ZqP5py65oq96aKY5aSx6LSlXCIpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIlvlhbPljaHmir3lj5Yg6ZqP5py65oq96aKYXSDliqjmgIHnuq/pmo/mnLrmir3popjlvILluLg6IFwiICsgdC5tZXNzYWdlKTtcbiAgICAgICAgICByKHQpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIHIoe1xuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblZhbDogblxuICAgIH0pO1xuICB9XG59Il19

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DyeingConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bd40cOwjlVBYZhMW4zSOZPZ', 'DyeingConfig');
// Scripts/DyeingConfig.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DyeingConfig = void 0;
var CharacterGenerator_1 = require("./CharacterGenerator");
var IClassicExtractTypes_1 = require("./IClassicExtractTypes");
var a = new Map([[IClassicExtractTypes_1.EDifficultyType.Simple, {
            coordSelectionType: CharacterGenerator_1.ECoordSelectionType.SymmetricShuffle,
            charSelectionType: CharacterGenerator_1.ECharSelectionType.Random
        }], [IClassicExtractTypes_1.EDifficultyType.Medium, {
            coordSelectionType: CharacterGenerator_1.ECoordSelectionType.LongDistance,
            charSelectionType: CharacterGenerator_1.ECharSelectionType.PredCoord
        }], [IClassicExtractTypes_1.EDifficultyType.Difficult, {
            coordSelectionType: CharacterGenerator_1.ECoordSelectionType.AntiIntuitive,
            charSelectionType: CharacterGenerator_1.ECharSelectionType.PredTrigger
        }], [IClassicExtractTypes_1.EDifficultyType.Reward, {
            coordSelectionType: CharacterGenerator_1.ECoordSelectionType.Symmetric,
            charSelectionType: CharacterGenerator_1.ECharSelectionType.Random
        }]]);
var DyeingConfig = /** @class */ (function () {
    function DyeingConfig() {
    }
    DyeingConfig_1 = DyeingConfig;
    DyeingConfig.getInstance = function () {
        DyeingConfig_1._instance || (DyeingConfig_1._instance = new DyeingConfig_1());
        return DyeingConfig_1._instance;
    };
    DyeingConfig.prototype.getDyeingConfig = function (e) {
        return a.get(e) || a.get(IClassicExtractTypes_1.EDifficultyType.Medium);
    };
    var DyeingConfig_1;
    DyeingConfig = DyeingConfig_1 = __decorate([
        mj.class("DyeingConfig")
    ], DyeingConfig);
    return DyeingConfig;
}());
exports.DyeingConfig = DyeingConfig;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0R5ZWluZ0NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUErRTtBQUMvRSwrREFBeUQ7QUFDekQsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLHNDQUFlLENBQUMsTUFBTSxFQUFFO1lBQ3hDLGtCQUFrQixFQUFFLHdDQUFtQixDQUFDLGdCQUFnQjtZQUN4RCxpQkFBaUIsRUFBRSx1Q0FBa0IsQ0FBQyxNQUFNO1NBQzdDLENBQUMsRUFBRSxDQUFDLHNDQUFlLENBQUMsTUFBTSxFQUFFO1lBQzNCLGtCQUFrQixFQUFFLHdDQUFtQixDQUFDLFlBQVk7WUFDcEQsaUJBQWlCLEVBQUUsdUNBQWtCLENBQUMsU0FBUztTQUNoRCxDQUFDLEVBQUUsQ0FBQyxzQ0FBZSxDQUFDLFNBQVMsRUFBRTtZQUM5QixrQkFBa0IsRUFBRSx3Q0FBbUIsQ0FBQyxhQUFhO1lBQ3JELGlCQUFpQixFQUFFLHVDQUFrQixDQUFDLFdBQVc7U0FDbEQsQ0FBQyxFQUFFLENBQUMsc0NBQWUsQ0FBQyxNQUFNLEVBQUU7WUFDM0Isa0JBQWtCLEVBQUUsd0NBQW1CLENBQUMsU0FBUztZQUNqRCxpQkFBaUIsRUFBRSx1Q0FBa0IsQ0FBQyxNQUFNO1NBQzdDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFTDtJQUFBO0lBUUEsQ0FBQztxQkFSWSxZQUFZO0lBQ2hCLHdCQUFXLEdBQWxCO1FBQ0UsY0FBWSxDQUFDLFNBQVMsSUFBSSxDQUFDLGNBQVksQ0FBQyxTQUFTLEdBQUcsSUFBSSxjQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ3hFLE9BQU8sY0FBWSxDQUFDLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBQ0Qsc0NBQWUsR0FBZixVQUFnQixDQUFDO1FBQ2YsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsc0NBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuRCxDQUFDOztJQVBVLFlBQVk7UUFEeEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7T0FDWixZQUFZLENBUXhCO0lBQUQsbUJBQUM7Q0FSRCxBQVFDLElBQUE7QUFSWSxvQ0FBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVDb29yZFNlbGVjdGlvblR5cGUsIEVDaGFyU2VsZWN0aW9uVHlwZSB9IGZyb20gJy4vQ2hhcmFjdGVyR2VuZXJhdG9yJztcbmltcG9ydCB7IEVEaWZmaWN1bHR5VHlwZSB9IGZyb20gJy4vSUNsYXNzaWNFeHRyYWN0VHlwZXMnO1xudmFyIGEgPSBuZXcgTWFwKFtbRURpZmZpY3VsdHlUeXBlLlNpbXBsZSwge1xuICBjb29yZFNlbGVjdGlvblR5cGU6IEVDb29yZFNlbGVjdGlvblR5cGUuU3ltbWV0cmljU2h1ZmZsZSxcbiAgY2hhclNlbGVjdGlvblR5cGU6IEVDaGFyU2VsZWN0aW9uVHlwZS5SYW5kb21cbn1dLCBbRURpZmZpY3VsdHlUeXBlLk1lZGl1bSwge1xuICBjb29yZFNlbGVjdGlvblR5cGU6IEVDb29yZFNlbGVjdGlvblR5cGUuTG9uZ0Rpc3RhbmNlLFxuICBjaGFyU2VsZWN0aW9uVHlwZTogRUNoYXJTZWxlY3Rpb25UeXBlLlByZWRDb29yZFxufV0sIFtFRGlmZmljdWx0eVR5cGUuRGlmZmljdWx0LCB7XG4gIGNvb3JkU2VsZWN0aW9uVHlwZTogRUNvb3JkU2VsZWN0aW9uVHlwZS5BbnRpSW50dWl0aXZlLFxuICBjaGFyU2VsZWN0aW9uVHlwZTogRUNoYXJTZWxlY3Rpb25UeXBlLlByZWRUcmlnZ2VyXG59XSwgW0VEaWZmaWN1bHR5VHlwZS5SZXdhcmQsIHtcbiAgY29vcmRTZWxlY3Rpb25UeXBlOiBFQ29vcmRTZWxlY3Rpb25UeXBlLlN5bW1ldHJpYyxcbiAgY2hhclNlbGVjdGlvblR5cGU6IEVDaGFyU2VsZWN0aW9uVHlwZS5SYW5kb21cbn1dXSk7XG5AbWouY2xhc3MoXCJEeWVpbmdDb25maWdcIilcbmV4cG9ydCBjbGFzcyBEeWVpbmdDb25maWcge1xuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgRHllaW5nQ29uZmlnLl9pbnN0YW5jZSB8fCAoRHllaW5nQ29uZmlnLl9pbnN0YW5jZSA9IG5ldyBEeWVpbmdDb25maWcoKSk7XG4gICAgcmV0dXJuIER5ZWluZ0NvbmZpZy5faW5zdGFuY2U7XG4gIH1cbiAgZ2V0RHllaW5nQ29uZmlnKGUpIHtcbiAgICByZXR1cm4gYS5nZXQoZSkgfHwgYS5nZXQoRURpZmZpY3VsdHlUeXBlLk1lZGl1bSk7XG4gIH1cbn0iXX0=
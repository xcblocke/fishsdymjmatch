
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ClearHelper.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba987BLgitNdoQvAUEyRJ47', 'ClearHelper');
// Scripts/ClearHelper.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var ClearClassiclHelper_1 = require("./ClearClassiclHelper");
var ClearDailyChallengeHelper_1 = require("./ClearDailyChallengeHelper");
var ClearNormalHelper_1 = require("./ClearNormalHelper");
var ClearTile2NormalHelper_1 = require("./ClearTile2NormalHelper");
var ClearTile4NormalHelper_1 = require("./ClearTile4NormalHelper");
var ClearTravelHelper_1 = require("./ClearTravelHelper");
var ClearHelper = /** @class */ (function () {
    function ClearHelper() {
    }
    ClearHelper.runClear = function (e, t, o, u) {
        if (e.gameType === GameTypeEnums_1.MjGameType.Travel) {
            ClearTravelHelper_1.default.runClear(e, t, o);
        }
        else {
            if (e.gameType === GameTypeEnums_1.MjGameType.DailyChallenge) {
                ClearDailyChallengeHelper_1.default.runClear(e, t, o);
            }
            else {
                if (e.gameType === GameTypeEnums_1.MjGameType.Classic) {
                    ClearClassiclHelper_1.default.runClear(e, t, o);
                }
                else {
                    if (e.gameType === GameTypeEnums_1.MjGameType.Tile2Normal) {
                        if (e.getTile2SlotType() === GameTypeEnums_1.ETile2SlotType.Slot4) {
                            ClearTile4NormalHelper_1.default.runClear(e, t, o, u);
                        }
                        else {
                            ClearTile2NormalHelper_1.default.runClear(e, t, o, u);
                        }
                    }
                    else {
                        ClearNormalHelper_1.default.runClear(e, t, o);
                    }
                }
            }
        }
    };
    return ClearHelper;
}());
exports.default = ClearHelper;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0NsZWFySGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5RUFBcUY7QUFDckYsNkRBQXdEO0FBQ3hELHlFQUFvRTtBQUNwRSx5REFBb0Q7QUFDcEQsbUVBQThEO0FBQzlELG1FQUE4RDtBQUM5RCx5REFBb0Q7QUFDcEQ7SUFBQTtJQXdCQSxDQUFDO0lBdkJRLG9CQUFRLEdBQWYsVUFBZ0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsQ0FBQyxRQUFRLEtBQUssMEJBQVUsQ0FBQyxNQUFNLEVBQUU7WUFDcEMsMkJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDckM7YUFBTTtZQUNMLElBQUksQ0FBQyxDQUFDLFFBQVEsS0FBSywwQkFBVSxDQUFDLGNBQWMsRUFBRTtnQkFDNUMsbUNBQXlCLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDN0M7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLENBQUMsUUFBUSxLQUFLLDBCQUFVLENBQUMsT0FBTyxFQUFFO29CQUNyQyw2QkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDdkM7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLENBQUMsUUFBUSxLQUFLLDBCQUFVLENBQUMsV0FBVyxFQUFFO3dCQUN6QyxJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLDhCQUFjLENBQUMsS0FBSyxFQUFFOzRCQUNqRCxnQ0FBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7eUJBQzdDOzZCQUFNOzRCQUNMLGdDQUFzQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzt5QkFDN0M7cUJBQ0Y7eUJBQU07d0JBQ0wsMkJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7cUJBQ3JDO2lCQUNGO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFDSCxrQkFBQztBQUFELENBeEJBLEFBd0JDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNakdhbWVUeXBlLCBFVGlsZTJTbG90VHlwZSB9IGZyb20gJy4vY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgQ2xlYXJDbGFzc2ljbEhlbHBlciBmcm9tICcuL0NsZWFyQ2xhc3NpY2xIZWxwZXInO1xuaW1wb3J0IENsZWFyRGFpbHlDaGFsbGVuZ2VIZWxwZXIgZnJvbSAnLi9DbGVhckRhaWx5Q2hhbGxlbmdlSGVscGVyJztcbmltcG9ydCBDbGVhck5vcm1hbEhlbHBlciBmcm9tICcuL0NsZWFyTm9ybWFsSGVscGVyJztcbmltcG9ydCBDbGVhclRpbGUyTm9ybWFsSGVscGVyIGZyb20gJy4vQ2xlYXJUaWxlMk5vcm1hbEhlbHBlcic7XG5pbXBvcnQgQ2xlYXJUaWxlNE5vcm1hbEhlbHBlciBmcm9tICcuL0NsZWFyVGlsZTROb3JtYWxIZWxwZXInO1xuaW1wb3J0IENsZWFyVHJhdmVsSGVscGVyIGZyb20gJy4vQ2xlYXJUcmF2ZWxIZWxwZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xlYXJIZWxwZXIge1xuICBzdGF0aWMgcnVuQ2xlYXIoZSwgdCwgbywgdSkge1xuICAgIGlmIChlLmdhbWVUeXBlID09PSBNakdhbWVUeXBlLlRyYXZlbCkge1xuICAgICAgQ2xlYXJUcmF2ZWxIZWxwZXIucnVuQ2xlYXIoZSwgdCwgbyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChlLmdhbWVUeXBlID09PSBNakdhbWVUeXBlLkRhaWx5Q2hhbGxlbmdlKSB7XG4gICAgICAgIENsZWFyRGFpbHlDaGFsbGVuZ2VIZWxwZXIucnVuQ2xlYXIoZSwgdCwgbyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZS5nYW1lVHlwZSA9PT0gTWpHYW1lVHlwZS5DbGFzc2ljKSB7XG4gICAgICAgICAgQ2xlYXJDbGFzc2ljbEhlbHBlci5ydW5DbGVhcihlLCB0LCBvKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoZS5nYW1lVHlwZSA9PT0gTWpHYW1lVHlwZS5UaWxlMk5vcm1hbCkge1xuICAgICAgICAgICAgaWYgKGUuZ2V0VGlsZTJTbG90VHlwZSgpID09PSBFVGlsZTJTbG90VHlwZS5TbG90NCkge1xuICAgICAgICAgICAgICBDbGVhclRpbGU0Tm9ybWFsSGVscGVyLnJ1bkNsZWFyKGUsIHQsIG8sIHUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgQ2xlYXJUaWxlMk5vcm1hbEhlbHBlci5ydW5DbGVhcihlLCB0LCBvLCB1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgQ2xlYXJOb3JtYWxIZWxwZXIucnVuQ2xlYXIoZSwgdCwgbyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2ResetMoveBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '51b7berCBhDRJeZBqXYYDD9', 'Tile2ResetMoveBehavior');
// Scripts/base/Tile2ResetMoveBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ResetMoveBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2ResetMoveBehavior = /** @class */ (function (_super) {
    __extends(Tile2ResetMoveBehavior, _super);
    function Tile2ResetMoveBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2ResetMoveBehavior.prototype.start = function (e) {
        var t = this, o = e.data.tileId, n = this.context.getTileNodeMap().get(o);
        if (n) {
            n.tile2ResetMove(function () {
                t.finish(GameInputEnum_1.EBehaviorEnum.Success);
            });
            mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Tile2Fit);
        }
        else
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    return Tile2ResetMoveBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2ResetMoveBehavior = Tile2ResetMoveBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJSZXNldE1vdmVCZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUFvRTtBQUNwRSwwRUFBb0U7QUFDcEUseURBQXdEO0FBQ3hEO0lBQTRDLDBDQUFpQjtJQUE3RDs7SUFZQSxDQUFDO0lBWEMsc0NBQUssR0FBTCxVQUFNLENBQUM7UUFDTCxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQ1YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUNqQixDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLEVBQUU7WUFDTCxDQUFDLENBQUMsY0FBYyxDQUFDO2dCQUNmLENBQUMsQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQztZQUNILEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLHdCQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDL0M7O1lBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDSCw2QkFBQztBQUFELENBWkEsQUFZQyxDQVoyQyxxQ0FBaUIsR0FZNUQ7QUFaWSx3REFBc0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFQmVoYXZpb3JFbnVtIH0gZnJvbSAnLi4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgRUF1ZGlvSUQgfSBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IEdhbWVCZWhhdmlvcnNCYXNlIH0gZnJvbSAnLi9HYW1lQmVoYXZpb3JzQmFzZSc7XG5leHBvcnQgY2xhc3MgVGlsZTJSZXNldE1vdmVCZWhhdmlvciBleHRlbmRzIEdhbWVCZWhhdmlvcnNCYXNlIHtcbiAgc3RhcnQoZSkge1xuICAgIHZhciB0ID0gdGhpcyxcbiAgICAgIG8gPSBlLmRhdGEudGlsZUlkLFxuICAgICAgbiA9IHRoaXMuY29udGV4dC5nZXRUaWxlTm9kZU1hcCgpLmdldChvKTtcbiAgICBpZiAobikge1xuICAgICAgbi50aWxlMlJlc2V0TW92ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gICAgICB9KTtcbiAgICAgIG1qLmF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KEVBdWRpb0lELlRpbGUyRml0KTtcbiAgICB9IGVsc2UgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgfVxufSJdfQ==
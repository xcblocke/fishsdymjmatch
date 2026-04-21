
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_travelMode/Scripts/TravelModeSupportTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f268bcq1dZAPrcHN0CQ4nJG', 'TravelModeSupportTrait');
// subpackages/l_travelMode/Scripts/TravelModeSupportTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TravelModeSupportTrait = /** @class */ (function (_super) {
    __extends(TravelModeSupportTrait, _super);
    function TravelModeSupportTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TravelModeSupportTrait.prototype.onExtractTool_isSupCapUp = function (t, r) {
        if (t.args[0] !== GameTypeEnums_1.MjGameType.Travel) {
            r();
        }
        else {
            r({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: true
            });
        }
    };
    TravelModeSupportTrait.traitKey = "TravelModeSupport";
    TravelModeSupportTrait = __decorate([
        mj.trait,
        mj.class("TravelModeSupportTrait")
    ], TravelModeSupportTrait);
    return TravelModeSupportTrait;
}(Trait_1.default));
exports.default = TravelModeSupportTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RyYXZlbE1vZGUvU2NyaXB0cy9UcmF2ZWxNb2RlU3VwcG9ydFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBb0Y7QUFDcEYsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUd4RjtJQUFvRCwwQ0FBSztJQUF6RDs7SUFhQSxDQUFDO0lBWEMseURBQXdCLEdBQXhCLFVBQXlCLENBQUMsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSywwQkFBVSxDQUFDLE1BQU0sRUFBRTtZQUNuQyxDQUFDLEVBQUUsQ0FBQztTQUNMO2FBQU07WUFDTCxDQUFDLENBQUM7Z0JBQ0EsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07Z0JBQzFDLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFNBQVMsRUFBRSxJQUFJO2FBQ2hCLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQVhNLCtCQUFRLEdBQUcsbUJBQW1CLENBQUM7SUFEbkIsc0JBQXNCO1FBRjFDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQztPQUNkLHNCQUFzQixDQWExQztJQUFELDZCQUFDO0NBYkQsQUFhQyxDQWJtRCxlQUFLLEdBYXhEO2tCQWJvQixzQkFBc0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlRyYXZlbE1vZGVTdXBwb3J0VHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYXZlbE1vZGVTdXBwb3J0VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVHJhdmVsTW9kZVN1cHBvcnRcIjtcbiAgb25FeHRyYWN0VG9vbF9pc1N1cENhcFVwKHQsIHIpIHtcbiAgICBpZiAodC5hcmdzWzBdICE9PSBNakdhbWVUeXBlLlRyYXZlbCkge1xuICAgICAgcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICByKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_guide/Scripts/DTutorial.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '30401V8RGRNpJFYbDId7bJL', 'DTutorial');
// subpackages/l_guide/Scripts/DTutorial.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ETutorialClickType = void 0;
var EventData_1 = require("../../../Scripts/base/event/EventData");
var EventTrackingManager_1 = require("../../../Scripts/base/event/EventTrackingManager");
var ETutorialClickType;
(function (ETutorialClickType) {
    ETutorialClickType[ETutorialClickType["Show"] = 0] = "Show";
    ETutorialClickType[ETutorialClickType["Clear"] = 1] = "Clear";
    ETutorialClickType[ETutorialClickType["Skip"] = 2] = "Skip";
    ETutorialClickType[ETutorialClickType["Complete"] = 3] = "Complete";
})(ETutorialClickType = exports.ETutorialClickType || (exports.ETutorialClickType = {}));
var DTutorial = /** @class */ (function () {
    function DTutorial() {
    }
    DTutorial.dot = function (t) {
        var e = "";
        switch (t.click_type) {
            case ETutorialClickType.Show:
                e = '新手引导6-第1关-盘面0-第' + this.step + "步-通过-对碰0";
                break;
            case ETutorialClickType.Clear:
                e = '新手引导6-第1关-盘面0-第' + this.step + "步-通过-对碰1";
                break;
            case ETutorialClickType.Skip:
                e = '新手引导6-第1关-盘面0-第' + this.step + "步-跳过-对碰0";
                break;
            case ETutorialClickType.Complete:
                e = '新手引导6-第1关-完成';
        }
        var r = {
            stage: this.step,
            stage_name: e
        };
        this.step++;
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.Tutorial, r);
    };
    DTutorial.step = 0;
    return DTutorial;
}());
exports.default = DTutorial;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2d1aWRlL1NjcmlwdHMvRFR1dG9yaWFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUVBQTBFO0FBQzFFLHlGQUFvRjtBQUNwRixJQUFZLGtCQUtYO0FBTEQsV0FBWSxrQkFBa0I7SUFDNUIsMkRBQVEsQ0FBQTtJQUNSLDZEQUFTLENBQUE7SUFDVCwyREFBUSxDQUFBO0lBQ1IsbUVBQVksQ0FBQTtBQUNkLENBQUMsRUFMVyxrQkFBa0IsR0FBbEIsMEJBQWtCLEtBQWxCLDBCQUFrQixRQUs3QjtBQUNEO0lBQUE7SUF3QkEsQ0FBQztJQXRCUSxhQUFHLEdBQVYsVUFBVyxDQUFDO1FBQ1YsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1gsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFFO1lBQ3BCLEtBQUssa0JBQWtCLENBQUMsSUFBSTtnQkFDMUIsQ0FBQyxHQUFHLGlCQUFpQixHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO2dCQUMvQyxNQUFNO1lBQ1IsS0FBSyxrQkFBa0IsQ0FBQyxLQUFLO2dCQUMzQixDQUFDLEdBQUcsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7Z0JBQy9DLE1BQU07WUFDUixLQUFLLGtCQUFrQixDQUFDLElBQUk7Z0JBQzFCLENBQUMsR0FBRyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztnQkFDL0MsTUFBTTtZQUNSLEtBQUssa0JBQWtCLENBQUMsUUFBUTtnQkFDOUIsQ0FBQyxHQUFHLGNBQWMsQ0FBQztTQUN0QjtRQUNELElBQUksQ0FBQyxHQUFHO1lBQ04sS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2hCLFVBQVUsRUFBRSxDQUFDO1NBQ2QsQ0FBQztRQUNGLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLDhCQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyw2QkFBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQXRCTSxjQUFJLEdBQUcsQ0FBQyxDQUFDO0lBdUJsQixnQkFBQztDQXhCRCxBQXdCQyxJQUFBO2tCQXhCb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50VHJhY2tpbmdUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9iYXNlL2V2ZW50L0V2ZW50RGF0YSc7XG5pbXBvcnQgRXZlbnRUcmFja2luZ01hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9iYXNlL2V2ZW50L0V2ZW50VHJhY2tpbmdNYW5hZ2VyJztcbmV4cG9ydCBlbnVtIEVUdXRvcmlhbENsaWNrVHlwZSB7XG4gIFNob3cgPSAwLFxuICBDbGVhciA9IDEsXG4gIFNraXAgPSAyLFxuICBDb21wbGV0ZSA9IDMsXG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEVHV0b3JpYWwge1xuICBzdGF0aWMgc3RlcCA9IDA7XG4gIHN0YXRpYyBkb3QodCkge1xuICAgIHZhciBlID0gXCJcIjtcbiAgICBzd2l0Y2ggKHQuY2xpY2tfdHlwZSkge1xuICAgICAgY2FzZSBFVHV0b3JpYWxDbGlja1R5cGUuU2hvdzpcbiAgICAgICAgZSA9ICfmlrDmiYvlvJXlr7w2LeesrDHlhbMt55uY6Z2iMC3nrKwnICsgdGhpcy5zdGVwICsgXCLmraUt6YCa6L+HLeWvueeisDBcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVUdXRvcmlhbENsaWNrVHlwZS5DbGVhcjpcbiAgICAgICAgZSA9ICfmlrDmiYvlvJXlr7w2LeesrDHlhbMt55uY6Z2iMC3nrKwnICsgdGhpcy5zdGVwICsgXCLmraUt6YCa6L+HLeWvueeisDFcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVUdXRvcmlhbENsaWNrVHlwZS5Ta2lwOlxuICAgICAgICBlID0gJ+aWsOaJi+W8leWvvDYt56ysMeWFsy3nm5jpnaIwLeesrCcgKyB0aGlzLnN0ZXAgKyBcIuatpS3ot7Pov4ct5a+556KwMFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRVR1dG9yaWFsQ2xpY2tUeXBlLkNvbXBsZXRlOlxuICAgICAgICBlID0gJ+aWsOaJi+W8leWvvDYt56ysMeWFsy3lrozmiJAnO1xuICAgIH1cbiAgICB2YXIgciA9IHtcbiAgICAgIHN0YWdlOiB0aGlzLnN0ZXAsXG4gICAgICBzdGFnZV9uYW1lOiBlXG4gICAgfTtcbiAgICB0aGlzLnN0ZXArKztcbiAgICBFdmVudFRyYWNraW5nTWFuYWdlci5nZXRJbnN0YW5jZSgpLnRyYWNrRXZlbnQoRXZlbnRUcmFja2luZ1R5cGUuVHV0b3JpYWwsIHIpO1xuICB9XG59Il19
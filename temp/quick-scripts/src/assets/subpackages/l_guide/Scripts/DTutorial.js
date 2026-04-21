"use strict";
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
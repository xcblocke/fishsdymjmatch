"use strict";
cc._RF.push(module, '064fbEl22RJuZykJQXE2El/', 'ACFullCbStrategy');
// Scripts/ACFullCbStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ACFullCbStrategy = void 0;
var FullComboItem_1 = require("./items/FullComboItem");
var AllClearStrategyRegistry_1 = require("./AllClearStrategyRegistry");
var VibrateManager_1 = require("./gamePlay/base/vibrate/VibrateManager");
var ACFullCbStrategy = /** @class */ (function () {
    function ACFullCbStrategy() {
    }
    ACFullCbStrategy.prototype.getName = function () {
        return "ACFullCbStrategy";
    };
    ACFullCbStrategy.prototype.play = function (e, t) {
        FullComboItem_1.default.createUI().then(function (e) {
            if (e && cc.isValid(e)) {
                e.setParent(t.effectNode);
                e.position = cc.v3(0, 0, 0);
                VibrateManager_1.default.executeVibrate(VibrateManager_1.EVibrateStrength.Strong);
                var o = e.getComponent(FullComboItem_1.default);
                if (o)
                    o.startPlayAni(e, function () { }, function () {
                        t.onComplete();
                    });
                else {
                    e.destroy();
                    t.onComplete();
                }
            }
            else
                t.onComplete();
        });
    };
    return ACFullCbStrategy;
}());
exports.ACFullCbStrategy = ACFullCbStrategy;
AllClearStrategyRegistry_1.AllClearStrategyRegistry.register(1, new ACFullCbStrategy());

cc._RF.pop();
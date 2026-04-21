"use strict";
cc._RF.push(module, '6b6baugyUVKAINMDC8icjz8', 'ACCaiDaiStrategy');
// Scripts/ACCaiDaiStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ACCaiDaiStrategy = void 0;
require("./Global");
require("./framework/trait/TraitManager");
var IAllClearStrategy_1 = require("./IAllClearStrategy");
var AllClearStrategyRegistry_1 = require("./AllClearStrategyRegistry");
var AcCaiDaiAnimPlayer_1 = require("./AcCaiDaiAnimPlayer");
var ACCaiDaiStrategy = /** @class */ (function () {
    function ACCaiDaiStrategy() {
    }
    ACCaiDaiStrategy.prototype.getName = function () {
        return "ACCaiDaiStrategy";
    };
    ACCaiDaiStrategy.prototype.play = function (e, t) {
        var o = IAllClearStrategy_1.buildAllClearNodeInfos(e, t);
        if (0 !== o.length) {
            var i = new AcCaiDaiAnimPlayer_1.AcCaiDaiAnimPlayer(t);
            i.setupPositions(o, 0);
            i.play(o);
        }
        else
            t.onComplete();
    };
    return ACCaiDaiStrategy;
}());
exports.ACCaiDaiStrategy = ACCaiDaiStrategy;
AllClearStrategyRegistry_1.AllClearStrategyRegistry.register(4, new ACCaiDaiStrategy());

cc._RF.pop();
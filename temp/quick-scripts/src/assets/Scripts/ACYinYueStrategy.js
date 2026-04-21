"use strict";
cc._RF.push(module, '0a2c2dexyJFU4DHBBdSgvhN', 'ACYinYueStrategy');
// Scripts/ACYinYueStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ACYinYueStrategy = void 0;
var IAllClearStrategy_1 = require("./IAllClearStrategy");
var AllClearStrategyRegistry_1 = require("./AllClearStrategyRegistry");
var AcYinxiangAnimPlayer_1 = require("./AcYinxiangAnimPlayer");
var ACYinYueStrategy = /** @class */ (function () {
    function ACYinYueStrategy() {
    }
    ACYinYueStrategy.prototype.getName = function () {
        return "ACYinYueStrategy";
    };
    ACYinYueStrategy.prototype.play = function (e, t) {
        var o, r, l = IAllClearStrategy_1.buildAllClearNodeInfos(e, t);
        if (0 !== l.length) {
            var s = new AcYinxiangAnimPlayer_1.AcYinxiangAnimPlayer(t);
            try {
                for (var c = __values(l), u = c.next(); !u.done; u = c.next()) {
                    var p = u.value;
                    s.hideFlowLight(p.cardNode1);
                    s.hideFlowLight(p.cardNode2);
                }
            }
            catch (e) {
                o = {
                    error: e
                };
            }
            finally {
                try {
                    u && !u.done && (r = c.return) && r.call(c);
                }
                finally {
                    if (o)
                        throw o.error;
                }
            }
            s.setupPositions(l);
            s.play(l);
        }
        else
            t.onComplete();
    };
    return ACYinYueStrategy;
}());
exports.ACYinYueStrategy = ACYinYueStrategy;
AllClearStrategyRegistry_1.AllClearStrategyRegistry.register(7, new ACYinYueStrategy());

cc._RF.pop();
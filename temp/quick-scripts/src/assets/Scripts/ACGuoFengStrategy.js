"use strict";
cc._RF.push(module, 'ba6c1NymjxLU4MLZ+0gQCmQ', 'ACGuoFengStrategy');
// Scripts/ACGuoFengStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ACGuoFengStrategy = void 0;
var IAllClearStrategy_1 = require("./IAllClearStrategy");
var AllClearStrategyRegistry_1 = require("./AllClearStrategyRegistry");
var AcGuofengAnimPlayer_1 = require("./AcGuofengAnimPlayer");
var ACGuoFengStrategy = /** @class */ (function () {
    function ACGuoFengStrategy() {
    }
    ACGuoFengStrategy.prototype.getName = function () {
        return "ACGuoFengStrategy";
    };
    ACGuoFengStrategy.prototype.play = function (e, t) {
        var o, r, l = IAllClearStrategy_1.buildAllClearNodeInfos(e, t);
        if (0 !== l.length) {
            var s = new AcGuofengAnimPlayer_1.AcGuofengAnimPlayer(t);
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
    return ACGuoFengStrategy;
}());
exports.ACGuoFengStrategy = ACGuoFengStrategy;
AllClearStrategyRegistry_1.AllClearStrategyRegistry.register(3, new ACGuoFengStrategy());

cc._RF.pop();
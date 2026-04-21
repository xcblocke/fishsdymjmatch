"use strict";
cc._RF.push(module, 'e044cbziRlPOI5NkcG5jWql', 'ACDaxiaoBaseStrategy');
// Scripts/ACDaxiaoBaseStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ACDaxiaoBaseStrategy = void 0;
var IAllClearStrategy_1 = require("./IAllClearStrategy");
var AllClearStrategyRegistry_1 = require("./AllClearStrategyRegistry");
var AcHaiyangAnimPlayer_1 = require("./AcHaiyangAnimPlayer");
var ACDaxiaoBaseStrategy = /** @class */ (function () {
    function ACDaxiaoBaseStrategy() {
    }
    ACDaxiaoBaseStrategy.prototype.getName = function () {
        return "ACDaxiaoBaseStrategy";
    };
    ACDaxiaoBaseStrategy.prototype.play = function (e, t) {
        var o, r, l = IAllClearStrategy_1.buildAllClearNodeInfos(e, t);
        if (0 !== l.length) {
            var s = new AcHaiyangAnimPlayer_1.AcHaiyangAnimPlayer(t);
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
    return ACDaxiaoBaseStrategy;
}());
exports.ACDaxiaoBaseStrategy = ACDaxiaoBaseStrategy;
AllClearStrategyRegistry_1.AllClearStrategyRegistry.register(2, new ACDaxiaoBaseStrategy());

cc._RF.pop();
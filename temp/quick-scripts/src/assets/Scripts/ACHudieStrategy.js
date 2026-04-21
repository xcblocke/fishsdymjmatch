"use strict";
cc._RF.push(module, 'fec25VM+s1Fgaq5wufxinYw', 'ACHudieStrategy');
// Scripts/ACHudieStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ACHudieStrategy = void 0;
var IAllClearStrategy_1 = require("./IAllClearStrategy");
var AllClearStrategyRegistry_1 = require("./AllClearStrategyRegistry");
var AcHudieAnimPlayer_1 = require("./AcHudieAnimPlayer");
var ACHudieStrategy = /** @class */ (function () {
    function ACHudieStrategy() {
    }
    ACHudieStrategy.prototype.getName = function () {
        return "ACHudieStrategy";
    };
    ACHudieStrategy.prototype.play = function (e, t) {
        var o, r, l = IAllClearStrategy_1.buildAllClearNodeInfos(e, t);
        if (0 !== l.length) {
            var s = new AcHudieAnimPlayer_1.AcHudieAnimPlayer(t);
            try {
                for (var c = __values(l), u = c.next(); !u.done; u = c.next()) {
                    var p = u.value;
                    s.hideFlowLight(p.cardNode1);
                    s.hideFlowLight(p.cardNode2);
                    p.cardNode1.active = true;
                    p.cardNode2.active = true;
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
    return ACHudieStrategy;
}());
exports.ACHudieStrategy = ACHudieStrategy;
AllClearStrategyRegistry_1.AllClearStrategyRegistry.register(5, new ACHudieStrategy());

cc._RF.pop();
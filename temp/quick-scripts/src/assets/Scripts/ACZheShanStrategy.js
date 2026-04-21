"use strict";
cc._RF.push(module, '23cb4UtNWxIi6Jztrb6cDpw', 'ACZheShanStrategy');
// Scripts/ACZheShanStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ACZheShanStrategy = void 0;
var IAllClearStrategy_1 = require("./IAllClearStrategy");
var AllClearStrategyRegistry_1 = require("./AllClearStrategyRegistry");
var AcZheshanAnimPlayer_1 = require("./AcZheshanAnimPlayer");
var ACZheShanStrategy = /** @class */ (function () {
    function ACZheShanStrategy() {
    }
    ACZheShanStrategy.prototype.getName = function () {
        return "ACZheShanStrategy";
    };
    ACZheShanStrategy.prototype.play = function (e, t) {
        var o, r, l = IAllClearStrategy_1.buildAllClearNodeInfos(e, t);
        if (0 !== l.length) {
            var s = new AcZheshanAnimPlayer_1.AcZheshanAnimPlayer(t);
            try {
                for (var c = __values(l), u = c.next(); !u.done; u = c.next()) {
                    var p = u.value;
                    s.hideFlowLight(p.cardNode1.getChildByName("TileAnimNodeName") || p.cardNode1);
                    s.hideFlowLight(p.cardNode2.getChildByName("TileAnimNodeName") || p.cardNode2);
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
    return ACZheShanStrategy;
}());
exports.ACZheShanStrategy = ACZheShanStrategy;
AllClearStrategyRegistry_1.AllClearStrategyRegistry.register(6, new ACZheShanStrategy());

cc._RF.pop();
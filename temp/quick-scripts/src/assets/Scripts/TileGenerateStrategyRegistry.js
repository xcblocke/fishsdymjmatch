"use strict";
cc._RF.push(module, '49739XxaY5BvIjx24BxNL2B', 'TileGenerateStrategyRegistry');
// Scripts/TileGenerateStrategyRegistry.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TileGenerateStrategyRegistry = void 0;
var DefaultGenerateStrategy_1 = require("./process/tile2/DefaultGenerateStrategy");
var SkipGenerateStrategy_1 = require("./process/tile2/SkipGenerateStrategy");
var TileGenerateStrategy_1 = require("./TileGenerateStrategy");
var TileGenerateStrategyRegistry = /** @class */ (function () {
    function TileGenerateStrategyRegistry() {
    }
    TileGenerateStrategyRegistry.register = function (e, t) {
        this._map.set(e, t);
    };
    TileGenerateStrategyRegistry.getStrategies = function (e) {
        var t, o, i = [];
        if (e) {
            var r = new Set();
            try {
                for (var l = __values(e.split(",")), s = l.next(); !s.done; s = l.next()) {
                    var c = s.value.trim();
                    if (!r.has(c)) {
                        r.add(c);
                        var u = this._map.get(c);
                        u && i.push(u);
                    }
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    s && !s.done && (o = l.return) && o.call(l);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
        }
        0 === i.length && i.push(this._map.get(TileGenerateStrategy_1.ETileGenerateStrategy.Default));
        return i;
    };
    TileGenerateStrategyRegistry._map = new Map([[TileGenerateStrategy_1.ETileGenerateStrategy.Default, new DefaultGenerateStrategy_1.DefaultGenerateStrategy()], [TileGenerateStrategy_1.ETileGenerateStrategy.Skip, new SkipGenerateStrategy_1.SkipGenerateStrategy()]]);
    return TileGenerateStrategyRegistry;
}());
exports.TileGenerateStrategyRegistry = TileGenerateStrategyRegistry;

cc._RF.pop();
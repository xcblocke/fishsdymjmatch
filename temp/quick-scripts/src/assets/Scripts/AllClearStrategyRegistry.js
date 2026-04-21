"use strict";
cc._RF.push(module, 'eb764BUYllFLI1IZDxdkDJe', 'AllClearStrategyRegistry');
// Scripts/AllClearStrategyRegistry.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AllClearStrategyRegistry = void 0;
var AllClearStrategyRegistry = /** @class */ (function () {
    function AllClearStrategyRegistry() {
    }
    AllClearStrategyRegistry.register = function (e, t) {
        this._map.set(e, t);
    };
    AllClearStrategyRegistry.get = function (e) {
        var t;
        return null !== (t = this._map.get(e)) && void 0 !== t ? t : null;
    };
    AllClearStrategyRegistry.getOrDefault = function (e) {
        var t, o;
        return null !== (o = null !== (t = this._map.get(e)) && void 0 !== t ? t : this._map.get(1)) && void 0 !== o ? o : null;
    };
    AllClearStrategyRegistry.has = function (e) {
        return this._map.has(e);
    };
    AllClearStrategyRegistry._map = new Map();
    return AllClearStrategyRegistry;
}());
exports.AllClearStrategyRegistry = AllClearStrategyRegistry;

cc._RF.pop();
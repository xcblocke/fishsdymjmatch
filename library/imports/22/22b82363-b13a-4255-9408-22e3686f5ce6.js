"use strict";
cc._RF.push(module, '22b82NjsTpCVZQIIuNob1zm', 'DefaultGenerateStrategy');
// Scripts/process/tile2/DefaultGenerateStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultGenerateStrategy = void 0;
var DefaultGenerateStrategy = /** @class */ (function () {
    function DefaultGenerateStrategy() {
    }
    DefaultGenerateStrategy.prototype.run = function (e, t, o, n) {
        for (var i = 0; i < t.length; i++) {
            var r = t[i];
            o.includes(r) && n.get(r)(e);
        }
    };
    return DefaultGenerateStrategy;
}());
exports.DefaultGenerateStrategy = DefaultGenerateStrategy;

cc._RF.pop();
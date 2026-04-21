"use strict";
cc._RF.push(module, '2f7e06Se+NN46u3Crb6cBZV', 'MappingStrategy0');
// Scripts/MappingStrategy0.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.MappingStrategy0 = void 0;
var FactoryMapping_1 = require("./FactoryMapping");
var MappingStrategyBase_1 = require("./MappingStrategyBase");
var MappingStrategy0 = /** @class */ (function (_super) {
    __extends(MappingStrategy0, _super);
    function MappingStrategy0() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Mapping0";
        _this.desc = "兜底随机策略";
        return _this;
    }
    MappingStrategy0.prototype.mapping = function (e) {
        var t = e.levels;
        return t && 0 !== t.length ? t[Math.floor(Math.random() * t.length)] : null;
    };
    MappingStrategy0 = __decorate([
        FactoryMapping_1.mappingStrategy("Mapping0")
    ], MappingStrategy0);
    return MappingStrategy0;
}(MappingStrategyBase_1.MappingStrategyBase));
exports.MappingStrategy0 = MappingStrategy0;

cc._RF.pop();
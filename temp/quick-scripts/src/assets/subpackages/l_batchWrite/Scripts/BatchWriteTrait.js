"use strict";
cc._RF.push(module, 'cdd580gpHxInpxX9FxHzWUf', 'BatchWriteTrait');
// subpackages/l_batchWrite/Scripts/BatchWriteTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BatchWriteTrait = /** @class */ (function (_super) {
    __extends(BatchWriteTrait, _super);
    function BatchWriteTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BatchWriteTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        cc.sys.localStorage.batchWrite = true;
    };
    BatchWriteTrait.traitKey = "BatchWrite";
    BatchWriteTrait = __decorate([
        mj.trait,
        mj.class("BatchWriteTrait")
    ], BatchWriteTrait);
    return BatchWriteTrait;
}(Trait_1.default));
exports.default = BatchWriteTrait;

cc._RF.pop();
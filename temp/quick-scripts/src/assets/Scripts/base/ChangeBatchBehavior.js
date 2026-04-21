"use strict";
cc._RF.push(module, '1e264hwxtNDIJ30WEFIDnlk', 'ChangeBatchBehavior');
// Scripts/base/ChangeBatchBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeBatchBehavior = void 0;
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var ChangeBatchBehavior = /** @class */ (function (_super) {
    __extends(ChangeBatchBehavior, _super);
    function ChangeBatchBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChangeBatchBehavior.prototype.start = function () {
        this.finish();
    };
    __decorate([
        mj.traitEvent("ChangeBatchBhv_start")
    ], ChangeBatchBehavior.prototype, "start", null);
    return ChangeBatchBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.ChangeBatchBehavior = ChangeBatchBehavior;

cc._RF.pop();
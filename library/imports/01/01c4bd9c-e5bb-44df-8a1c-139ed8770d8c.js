"use strict";
cc._RF.push(module, '01c4b2c5btE34ocE57Ydw2M', 'DuoxiaoComboBehavior');
// Scripts/base/DuoxiaoComboBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DuoxiaoComboBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameInteraction_1 = require("../GameInteraction/GameInteraction");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var DuoxiaoComboBehavior = /** @class */ (function (_super) {
    __extends(DuoxiaoComboBehavior, _super);
    function DuoxiaoComboBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DuoxiaoComboBehavior.prototype.start = function (e) {
        GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.DuoxiaoAutoMerge,
            duoxiaoCount: e.data.duoxiaoCount
        });
        this.finish();
    };
    return DuoxiaoComboBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.DuoxiaoComboBehavior = DuoxiaoComboBehavior;

cc._RF.pop();
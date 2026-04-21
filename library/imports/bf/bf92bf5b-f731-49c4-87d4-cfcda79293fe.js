"use strict";
cc._RF.push(module, 'bf92b9b9zFJxIfUz82nkpP+', 'EndStrategy');
// Scripts/objects/EndStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.EndStrategy = void 0;
var BaseCoreObject_1 = require("../BaseCoreObject");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var EndStrategy = /** @class */ (function (_super) {
    __extends(EndStrategy, _super);
    function EndStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(EndStrategy.prototype, "endStrategy", {
        get: function () {
            return this._endStrategy;
        },
        enumerable: false,
        configurable: true
    });
    EndStrategy.prototype.initEndStrategy = function (e) {
        this._endStrategy = e;
    };
    EndStrategy.prototype.checkIsKillCollectCard = function () {
        var e = this._context.collectSystem;
        return !!e && 0 !== e.allCount && e.isAllCollected();
    };
    EndStrategy.prototype.checkIsEnd = function () {
        return this._endStrategy === GameTypeEnums_1.LevelTargetType.KillCollectCard && this.checkIsKillCollectCard();
    };
    return EndStrategy;
}(BaseCoreObject_1.BaseCoreObject));
exports.EndStrategy = EndStrategy;

cc._RF.pop();
"use strict";
cc._RF.push(module, 'b3ffeVtVVZFAYClac34SLRk', 'InputTravelEnd');
// Scripts/input/InputTravelEnd.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var TravelEndEffect_1 = require("../TravelEndEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputTravelEnd = /** @class */ (function (_super) {
    __extends(InputTravelEnd, _super);
    function InputTravelEnd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTravelEnd.prototype.excute = function () {
        var e, t, o, n, i = null !== (n = null === (o = null === (t = null === (e = this.gameContext) || void 0 === e ? void 0 : e.getTileMapObject()) || void 0 === t ? void 0 : t.collectSystem) || void 0 === o ? void 0 : o.getAllCollectDetails()) && void 0 !== n ? n : [], l = new TravelEndEffect_1.TravelEndEffect({
            curLv: this.gameContext.getGameData().getLevelId(),
            collects: i
        });
        this.pushEffect(l, BehaviorsEnum_1.EInsertType.Root);
    };
    return InputTravelEnd;
}(InputBase_1.InputBase));
exports.default = InputTravelEnd;

cc._RF.pop();
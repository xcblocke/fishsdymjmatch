"use strict";
cc._RF.push(module, '00bc9OfKwxLqos6CBMmQ9jL', 'InputGuide');
// subpackages/l_guide/Scripts/InputGuide.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var InputBase_1 = require("../../../Scripts/inputbase/InputBase");
var GuideEffect_1 = require("./GuideEffect");
var InputGuide = /** @class */ (function (_super) {
    __extends(InputGuide, _super);
    function InputGuide() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputGuide.prototype.excute = function (t) {
        var e, i, n = this.gameController.tileMapObject.getCanMatchTilesHint();
        if (0 == n.length) {
            this.gameController.tileMapObject.updateCanMatchTiles();
            n = this.gameController.tileMapObject.getCanMatchTilesHint();
        }
        if (n.length) {
            var o = n[0], a = null === (e = o[0]) || void 0 === e ? void 0 : e.id, s = null === (i = o[1]) || void 0 === i ? void 0 : i.id;
            if (a && s) {
                var p = this.gameController.tileMapObject.getTileObject(a), u = this.gameController.tileMapObject.getTileObject(s);
                this.pushEffectData(p, u, a, s, t);
            }
        }
        else {
            var l = new GuideEffect_1.GuideEffect({
                tileId: null,
                showHand: t.showHand
            });
            this.pushEffect(l, BehaviorsEnum_1.EInsertType.Root);
        }
    };
    InputGuide.prototype.pushEffectData = function (t, e, i, n, o) {
        var a = t.isSelect ? n : i, s = new GuideEffect_1.GuideEffect({
            tileId: a,
            showHand: o.showHand,
            finishGuide: o.finishGuide
        });
        this.pushEffect(s, BehaviorsEnum_1.EInsertType.Root);
    };
    __decorate([
        mj.traitEvent("InputGuide_pushEfData")
    ], InputGuide.prototype, "pushEffectData", null);
    return InputGuide;
}(InputBase_1.InputBase));
exports.default = InputGuide;

cc._RF.pop();
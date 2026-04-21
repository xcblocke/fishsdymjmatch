"use strict";
cc._RF.push(module, '28f21lvslhFSJ1/MPy6TZf5', 'ShuffleCharTile2Trait');
// subpackages/l_shuffleCharTile2/Scripts/ShuffleCharTile2Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var HolderPriorityShuffler_1 = require("../../../Scripts/HolderPriorityShuffler");
var CharacterGenerator_1 = require("../../../Scripts/CharacterGenerator");
var CharacterGeneratorTile2_1 = require("../../../Scripts/helpers/CharacterGeneratorTile2");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var ShuffleCharTile2Trait = /** @class */ (function (_super) {
    __extends(ShuffleCharTile2Trait, _super);
    function ShuffleCharTile2Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._coordSelectionType = CharacterGenerator_1.ECoordSelectionType.Random;
        _this._charSelectionType = CharacterGenerator_1.ECharSelectionType.Random;
        _this._holderPickMode = "eachOne";
        _this._includeBack = false;
        return _this;
    }
    ShuffleCharTile2Trait.prototype.onLoad = function () {
        var t, r, o, i;
        _super.prototype.onLoad.call(this);
        this._coordSelectionType = null !== (t = this._traitData.coordSelectionType) && void 0 !== t ? t : CharacterGenerator_1.ECoordSelectionType.Random;
        this._charSelectionType = null !== (r = this._traitData.charSelectionType) && void 0 !== r ? r : CharacterGenerator_1.ECharSelectionType.Random;
        this._holderPickMode = null !== (o = this._traitData.holderPickMode) && void 0 !== o ? o : "eachOne";
        this._includeBack = null !== (i = this._traitData.includeBack) && void 0 !== i && i;
    };
    ShuffleCharTile2Trait.prototype.onTile2ShuffleMod_compute = function (e, t) {
        var r, o, i = e.ins._context, n = i.getGameData(), c = i.getTileMapObject(), s = new Set(n.slotBarIds || []), p = [];
        c.tileObjectMap().forEach(function (e) {
            e.isValid && !s.has(e.saveKey()) && p.push(e);
        });
        if (p.length < 2)
            t();
        else {
            var f = new Map();
            try {
                for (var d = __values(p), y = d.next(); !y.done; y = d.next()) {
                    var _ = y.value;
                    f.has(_.cardId) || f.set(_.cardId, []);
                    f.get(_.cardId).push(_);
                }
            }
            catch (e) {
                r = {
                    error: e
                };
            }
            finally {
                try {
                    y && !y.done && (o = d.return) && o.call(d);
                }
                finally {
                    if (r)
                        throw r.error;
                }
            }
            var T = [];
            f.forEach(function (e, t) {
                for (var r = 0; r + 1 < e.length; r += 2)
                    T.push([{
                            resId: t,
                            type: TileTypeEnum_1.ETileType.Normal
                        }, {
                            resId: t,
                            type: TileTypeEnum_1.ETileType.Normal
                        }]);
            });
            if (0 !== T.length) {
                var v = CharacterGeneratorTile2_1.default.getInstance(), m = v.generateCharacterAssignment(i, p, T, this._coordSelectionType, this._charSelectionType);
                0 === m.length || v.applyAssignments(m, c);
                (n.slotBarIds || []).length > 0 && new HolderPriorityShuffler_1.HolderPriorityShuffler(i).apply({
                    holderPickMode: this._holderPickMode,
                    includeBack: this._includeBack
                });
                t({
                    isBreak: true,
                    returnType: TraitCallbackReturnType.return
                });
            }
            else
                t();
        }
    };
    ShuffleCharTile2Trait.traitKey = "ShuffleCharTile2";
    ShuffleCharTile2Trait = __decorate([
        mj.trait,
        mj.class("ShuffleCharTile2Trait")
    ], ShuffleCharTile2Trait);
    return ShuffleCharTile2Trait;
}(Trait_1.default));
exports.default = ShuffleCharTile2Trait;

cc._RF.pop();
"use strict";
cc._RF.push(module, '2868c8Lu9tHL4zkeK2EdUFp', 'ShuffleTile2Trait');
// subpackages/l_shuffleTile2/Scripts/ShuffleTile2Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var HolderPriorityShuffler_1 = require("../../../Scripts/HolderPriorityShuffler");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ShuffleTile2Trait = /** @class */ (function (_super) {
    __extends(ShuffleTile2Trait, _super);
    function ShuffleTile2Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._options = {
            holderPickMode: "all",
            includeBack: false
        };
        return _this;
    }
    Object.defineProperty(ShuffleTile2Trait.prototype, "_cfg", {
        get: function () {
            var t;
            return null !== (t = this._traitData) && void 0 !== t ? t : {};
        },
        enumerable: false,
        configurable: true
    });
    ShuffleTile2Trait.prototype.onLoad = function () {
        var e, r;
        _super.prototype.onLoad.call(this);
        this._options = {
            holderPickMode: null !== (e = this._cfg.holderPickMode) && void 0 !== e ? e : "all",
            includeBack: null !== (r = this._cfg.includeBack) && void 0 !== r && r
        };
    };
    ShuffleTile2Trait.prototype.onTile2ShuffleMod_compute = function (t, e) {
        var r = t.ins;
        new HolderPriorityShuffler_1.HolderPriorityShuffler(r._context).apply(this._options);
        e();
    };
    ShuffleTile2Trait.traitKey = "ShuffleTile2";
    ShuffleTile2Trait = __decorate([
        mj.trait,
        mj.class("ShuffleTile2Trait")
    ], ShuffleTile2Trait);
    return ShuffleTile2Trait;
}(Trait_1.default));
exports.default = ShuffleTile2Trait;

cc._RF.pop();
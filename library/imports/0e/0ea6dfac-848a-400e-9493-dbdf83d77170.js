"use strict";
cc._RF.push(module, '0ea6d+shIpADpST29+D13Fw', 'CharGenShuffleTrait');
// subpackages/l_charGenerator/Scripts/CharGenShuffleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var CharacterGenerator_1 = require("../../../Scripts/CharacterGenerator");
var CharGenShuffleTrait = /** @class */ (function (_super) {
    __extends(CharGenShuffleTrait, _super);
    function CharGenShuffleTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._coordSelectionType = CharacterGenerator_1.ECoordSelectionType.Random;
        _this._charSelectionType = CharacterGenerator_1.ECharSelectionType.Random;
        return _this;
    }
    CharGenShuffleTrait.prototype.onLoad = function () {
        var t, r;
        _super.prototype.onLoad.call(this);
        this._coordSelectionType = null !== (t = this._traitData.coordSelectionType) && void 0 !== t ? t : CharacterGenerator_1.ECoordSelectionType.Random;
        this._charSelectionType = null !== (r = this._traitData.charSelectionType) && void 0 !== r ? r : CharacterGenerator_1.ECharSelectionType.Random;
    };
    CharGenShuffleTrait.prototype.getGMSetting = function () {
        try {
            var e = cc.sys.localStorage.getItem("__gmCharGenAlgo__");
            if (e)
                return JSON.parse(e);
        }
        catch (e) { }
        return null;
    };
    CharGenShuffleTrait.prototype.onShuffleMod_assignResIds = function (e, t) {
        var r = e.args[0], o = e.args[1], n = e.ins._context, i = (CharacterGenerator_1.COORD_ALGO_NAMES[this._coordSelectionType], CharacterGenerator_1.CHAR_ALGO_NAMES[this._charSelectionType], CharacterGenerator_1.default.getInstance());
        if (i) {
            var a = i.generateCharacterAssignment(n, r, o, this._coordSelectionType, this._charSelectionType);
            i.applyAssignments(a, n.getTileMapObject());
            t({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
        }
        else
            t();
    };
    CharGenShuffleTrait.traitKey = "CharGenShuffle";
    CharGenShuffleTrait = __decorate([
        mj.trait,
        mj.class("CharGenShuffleTrait")
    ], CharGenShuffleTrait);
    return CharGenShuffleTrait;
}(Trait_1.default));
exports.default = CharGenShuffleTrait;

cc._RF.pop();
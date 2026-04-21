"use strict";
cc._RF.push(module, 'c00d3J3fnxNhoqdwGdFGtYZ', 'ChangeBaseCardSkinTrait');
// subpackages/r_changeBaseCardByLan/Scripts/ChangeBaseCardSkinTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ChangeBaseCardSkinTrait = /** @class */ (function (_super) {
    __extends(ChangeBaseCardSkinTrait, _super);
    function ChangeBaseCardSkinTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._changeMaps = {};
        return _this;
    }
    ChangeBaseCardSkinTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        for (var a = (null === (e = this._traitData) || void 0 === e ? void 0 : e.changeList) || [], r = 0; r < a.length; r++) {
            var n = a[r];
            this._changeMaps[n[0]] = n[1];
        }
    };
    ChangeBaseCardSkinTrait.prototype.onChCardByLanTt_getRBName = function (t, e) {
        var a, r = null === (a = t.args) || void 0 === a ? void 0 : a[0];
        this._changeMaps && this._changeMaps[r] && (r = this._changeMaps[r]);
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: r
        });
    };
    ChangeBaseCardSkinTrait.traitKey = "ChangeBaseCardSkin";
    ChangeBaseCardSkinTrait = __decorate([
        mj.trait,
        mj.class("ChangeBaseCardSkinTrait")
    ], ChangeBaseCardSkinTrait);
    return ChangeBaseCardSkinTrait;
}(Trait_1.default));
exports.default = ChangeBaseCardSkinTrait;

cc._RF.pop();
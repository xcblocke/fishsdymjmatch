"use strict";
cc._RF.push(module, 'd3b6f2ilDlBYo22fP853WhL', 'Tile2UsAdReviveLimitTrait');
// subpackages/l_tile2UsAdReviveLimit/Scripts/Tile2UsAdReviveLimitTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var LoginModel_1 = require("../../../Scripts/gamePlay/login/model/LoginModel");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Tile2UsAdReviveLimitTrait = /** @class */ (function (_super) {
    __extends(Tile2UsAdReviveLimitTrait, _super);
    function Tile2UsAdReviveLimitTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._maxAdReviveUs = 2;
        return _this;
    }
    Tile2UsAdReviveLimitTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        var r = null !== (e = this._traitData) && void 0 !== e ? e : {};
        void 0 !== r.maxAdReviveUs && (this._maxAdReviveUs = r.maxAdReviveUs);
    };
    Tile2UsAdReviveLimitTrait.prototype._isUS = function () {
        var t;
        return "US" === (null !== (t = LoginModel_1.default.getInstance().countryIso) && void 0 !== t ? t : "").toUpperCase();
    };
    Tile2UsAdReviveLimitTrait.prototype.onT2FailAdRevi_getMaxCnt = function (t, e) {
        if (this._isUS()) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.jump,
                returnVal: this._maxAdReviveUs
            });
        }
        else {
            e();
        }
    };
    Tile2UsAdReviveLimitTrait.traitKey = "Tile2UsAdReviveLimit";
    Tile2UsAdReviveLimitTrait = __decorate([
        mj.trait,
        mj.class("Tile2UsAdReviveLimitTrait")
    ], Tile2UsAdReviveLimitTrait);
    return Tile2UsAdReviveLimitTrait;
}(Trait_1.default));
exports.default = Tile2UsAdReviveLimitTrait;

cc._RF.pop();
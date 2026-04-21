"use strict";
cc._RF.push(module, '195a8PguoFH1ZxrL4O494k2', 'InterAdStartLvCountryTrait');
// subpackages/l_interAdStartLvCountry/Scripts/InterAdStartLvCountryTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var LoginModel_1 = require("../../../Scripts/gamePlay/login/model/LoginModel");
var InterAdStartLvCountryTrait = /** @class */ (function (_super) {
    __extends(InterAdStartLvCountryTrait, _super);
    function InterAdStartLvCountryTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._startLevel = -1;
        return _this;
    }
    Object.defineProperty(InterAdStartLvCountryTrait.prototype, "country", {
        get: function () {
            return LoginModel_1.default.getInstance().country || "";
        },
        enumerable: false,
        configurable: true
    });
    InterAdStartLvCountryTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._startLevel = this._resolveStartLevel();
    };
    InterAdStartLvCountryTrait.prototype._resolveStartLevel = function () {
        var t, r = null === (t = this._traitData) || void 0 === t ? void 0 : t.countryLevels;
        if (!r || "object" != typeof r)
            return -1;
        var e = this.country.toUpperCase();
        return void 0 !== r[e] ? r[e] : void 0 !== r.default ? r.default : -1;
    };
    InterAdStartLvCountryTrait.prototype.onInterAdStart_getStartLv = function (t, r) {
        if (this._startLevel <= 0) {
            r();
        }
        else {
            r({
                returnVal: this._startLevel,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
    };
    InterAdStartLvCountryTrait.traitKey = "InterAdStartLvCountry";
    InterAdStartLvCountryTrait = __decorate([
        mj.trait,
        mj.class("InterAdStartLvCountryTrait")
    ], InterAdStartLvCountryTrait);
    return InterAdStartLvCountryTrait;
}(Trait_1.default));
exports.default = InterAdStartLvCountryTrait;

cc._RF.pop();
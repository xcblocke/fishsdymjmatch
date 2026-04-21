"use strict";
cc._RF.push(module, '36fa6GyPYFJLbjSjUvz/gV+', 'DynamicLibTrait');
// subpackages/l_dynamicLib/Scripts/DynamicLibTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var LevelModel_1 = require("../../../Scripts/core/dynamicCurve/LevelModel");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var DynamicLibTrait = /** @class */ (function (_super) {
    __extends(DynamicLibTrait, _super);
    function DynamicLibTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._jsonName = "sample";
        _this._remoteBundleName = "r_board1";
        return _this;
    }
    DynamicLibTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.checkChange();
        this._jsonName = this._traitData.jsonName || "sample";
        this._remoteBundleName = this._traitData.remoteBundleName || "r_board1";
    };
    DynamicLibTrait.prototype.checkChange = function () {
        var t = JSON.stringify(this.traitData), e = CryptoJS.MD5(t).toString().toUpperCase();
        if (this.localData.libraryHash !== e) {
            this.localData.libraryHash = e;
            LevelModel_1.LevelModel.getInstance().clearLevelValues();
        }
    };
    DynamicLibTrait.prototype.onDCMgr_getLvPath = function (t, e) {
        var r = t.args[0], o = this.getLevelPath(r);
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: o
        });
    };
    DynamicLibTrait.prototype.getLevelPath = function () {
        return [["config/boards/dynamic/" + this._jsonName, "mainRes"], [this._jsonName, this._remoteBundleName]];
    };
    DynamicLibTrait.traitKey = "DynamicLib";
    DynamicLibTrait = __decorate([
        mj.trait,
        mj.class("DynamicLibTrait")
    ], DynamicLibTrait);
    return DynamicLibTrait;
}(Trait_1.default));
exports.default = DynamicLibTrait;

cc._RF.pop();
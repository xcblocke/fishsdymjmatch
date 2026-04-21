"use strict";
cc._RF.push(module, 'c73ceB55l5GZJIRV/frNbpB', 'Tile2NengliPathsTrait');
// subpackages/l_tile2NengliPaths/Scripts/Tile2NengliPathsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Tile2CapabilityExtractRegistry_1 = require("../../../Scripts/Tile2CapabilityExtractRegistry");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Tile2NengliPathsTrait = /** @class */ (function (_super) {
    __extends(Tile2NengliPathsTrait, _super);
    function Tile2NengliPathsTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bundleName = "mainRes";
        _this.traitFolder = "trait4";
        return _this;
    }
    Tile2NengliPathsTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.bundleName = this._traitData.bundleName || "mainRes";
        this.traitFolder = this._traitData.traitFolder || "trait4";
        var e = this.traitFolder, r = this.bundleName;
        this.configPath = ["byteData/" + e + "/level_file_config", r];
        this.offsetPath = ["byteData/" + e + "/level_data_offsets", r];
        this.levelDataPath = ["byteData/" + e + "/level_data", r];
        this.jsonPath = ["config/boards/" + e + "/", r];
        Tile2CapabilityExtractRegistry_1.default.setFromConfig({
            enabled: true,
            bundle: r,
            offsetPath: this.offsetPath[0],
            levelDataPath: this.levelDataPath[0],
            levelFileConfigPath: this.configPath[0],
            jsonPathPrefix: this.jsonPath[0]
        });
    };
    Tile2NengliPathsTrait.prototype.isTile2CapabilityMode = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal && Tile2CapabilityExtractRegistry_1.default.isEnabled();
    };
    Tile2NengliPathsTrait.prototype.onExtNormLv_getConfigPath = function (t, e) {
        if (this.isTile2CapabilityMode()) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this.configPath
            });
        }
        else {
            e();
        }
    };
    Tile2NengliPathsTrait.prototype.onExtNormLv_getOffsetPath = function (t, e) {
        if (this.isTile2CapabilityMode()) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this.offsetPath
            });
        }
        else {
            e();
        }
    };
    Tile2NengliPathsTrait.prototype.onExtNormLv_getLevDataPath = function (t, e) {
        if (this.isTile2CapabilityMode()) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this.levelDataPath
            });
        }
        else {
            e();
        }
    };
    Tile2NengliPathsTrait.prototype.onExtNormLv_getJsonPath = function (t, e) {
        if (this.isTile2CapabilityMode()) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this.jsonPath
            });
        }
        else {
            e();
        }
    };
    Tile2NengliPathsTrait.traitKey = "Tile2NengliPaths";
    Tile2NengliPathsTrait = __decorate([
        mj.trait,
        mj.class("Tile2NengliPathsTrait")
    ], Tile2NengliPathsTrait);
    return Tile2NengliPathsTrait;
}(Trait_1.default));
exports.default = Tile2NengliPathsTrait;

cc._RF.pop();
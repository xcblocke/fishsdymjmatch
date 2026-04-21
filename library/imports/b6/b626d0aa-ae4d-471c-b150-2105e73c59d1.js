"use strict";
cc._RF.push(module, 'b626dCqrk1HHLFQIQXnPFnR', 'Tile2LevelTypeTrait');
// subpackages/l_tile2LevelType/Scripts/Tile2LevelTypeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var a;
(function (a) {
    a[a["None"] = 0] = "None";
    a[a["Normal"] = 1] = "Normal";
    a[a["Medium"] = 2] = "Medium";
    a[a["Hard"] = 3] = "Hard";
    a[a["Expert"] = 4] = "Expert";
})(a || (a = {}));
var Tile2LevelTypeTrait = /** @class */ (function (_super) {
    __extends(Tile2LevelTypeTrait, _super);
    function Tile2LevelTypeTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2LevelTypeTrait.prototype.isSupportMode = function (e) {
        return e === GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    Tile2LevelTypeTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._config = {
            levelTypePattern: this._traitData.levelTypePattern || []
        };
    };
    Tile2LevelTypeTrait.prototype.getLevelType = function (e) {
        var t = this._config.levelTypePattern;
        return t && 0 !== t.length && t[(e - 1) % t.length] || a.Normal;
    };
    Tile2LevelTypeTrait.prototype.onExtractTool_isHardUI = function (e, t) {
        if (this.checkGameMode()) {
            var r = e.args[0], o = this.getLevelType(r) == a.Hard;
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: o
            });
        }
        else
            t();
    };
    Tile2LevelTypeTrait.prototype.onExtractTool_isExpertUI = function (e, t) {
        if (this.checkGameMode()) {
            var r = e.args[0], o = this.getLevelType(r) == a.Expert;
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: o
            });
        }
        else
            t();
    };
    Tile2LevelTypeTrait.prototype.onT2HarStr_isHard = function (e, t) {
        if (this.checkGameMode()) {
            var r = e.args[0], o = this.getLevelType(r), n = o == a.Hard || o == a.Expert;
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: n
            });
        }
        else
            t();
    };
    Tile2LevelTypeTrait.prototype.onExtractTool_getLvType = function (e, t) {
        if (this.checkGameMode()) {
            var r = e.args[0], o = this.getLevelType(r);
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: o
            });
        }
        else
            t();
    };
    Tile2LevelTypeTrait.traitKey = "Tile2LevelType";
    Tile2LevelTypeTrait = __decorate([
        mj.trait,
        mj.class("Tile2LevelTypeTrait")
    ], Tile2LevelTypeTrait);
    return Tile2LevelTypeTrait;
}(ExtractTrait_1.default));
exports.default = Tile2LevelTypeTrait;

cc._RF.pop();
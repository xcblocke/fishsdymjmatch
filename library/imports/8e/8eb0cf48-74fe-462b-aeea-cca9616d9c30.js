"use strict";
cc._RF.push(module, '8eb0c9IdP5GK67qzKlhbZww', 'Tile2FixedRandomTrait');
// subpackages/l_tile2FixRandom/Scripts/Tile2FixedRandomTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Tile2FixedRandomTrait = /** @class */ (function (_super) {
    __extends(Tile2FixedRandomTrait, _super);
    function Tile2FixedRandomTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._minLevel = 2;
        _this._maxLevel = 10;
        _this._loadedLevelKeys = null;
        return _this;
    }
    Tile2FixedRandomTrait.prototype.isSupportMode = function (t) {
        return t === GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    Tile2FixedRandomTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._minLevel = this._traitData.strategyMinLevel || 2;
        this._maxLevel = this._traitData.strategyMaxLevel || 10;
        this.registerEvent([{
                event: "ExtractTool_isFixedLevel",
                priority: 0,
                type: TraitManager_1.TraitEventPositionType.befor
            }]);
    };
    Tile2FixedRandomTrait.prototype.onT2FxRnd_priority = function (t, e) {
        var r;
        if (this.checkGameMode()) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: null !== (r = this._traitData.priority) && void 0 !== r ? r : 90
            });
        }
        else {
            e();
        }
    };
    Tile2FixedRandomTrait.prototype.onT2FxRnd_config = function (t, e) {
        if (this.checkGameMode()) {
            var r = this._traitData.strategy;
            if (r) {
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: {
                        strategy: r,
                        minLevel: this._minLevel,
                        maxLevel: this._maxLevel,
                        path: this._traitData.strategyPath || "tile2LevelData/fixLevelStrategy/" + r + "/",
                        bundle: this._traitData.strategyBundle
                    }
                });
            }
            else {
                e();
            }
        }
        else
            e();
    };
    Tile2FixedRandomTrait.prototype.onT2FxRnd_onLoaded = function (t, e) {
        if (this.checkGameMode()) {
            var r = t.args[0];
            this._loadedLevelKeys = new Set(r);
            e();
        }
        else
            e();
    };
    Tile2FixedRandomTrait.prototype.onExtractTool_isFixedLevel = function (t, e) {
        var r;
        if (this.checkGameMode()) {
            var i = t.args[0].toString().padStart(2, "0");
            if (null !== (r = this._loadedLevelKeys) && void 0 !== r && r.has(i)) {
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: true
                });
            }
            else {
                e();
            }
        }
        else
            e();
    };
    Tile2FixedRandomTrait.traitKey = "Tile2FixedRandom";
    Tile2FixedRandomTrait = __decorate([
        mj.trait,
        mj.class("Tile2FixedRandomTrait")
    ], Tile2FixedRandomTrait);
    return Tile2FixedRandomTrait;
}(ExtractTrait_1.default));
exports.default = Tile2FixedRandomTrait;

cc._RF.pop();
"use strict";
cc._RF.push(module, 'c6bb5NjAQhJmaeOdDMXMnwC', 'Tile2FixedLevelTrait');
// subpackages/l_tile2FixedLevel/Scripts/Tile2FixedLevelTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Tile2FixedLevelTrait = /** @class */ (function (_super) {
    __extends(Tile2FixedLevelTrait, _super);
    function Tile2FixedLevelTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._levels = [];
        return _this;
    }
    Tile2FixedLevelTrait.prototype.isSupportMode = function (e) {
        return e === GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    Tile2FixedLevelTrait.prototype.onLoad = function () {
        var t;
        _super.prototype.onLoad.call(this);
        this._priority = null !== (t = this._traitData.priority) && void 0 !== t ? t : 100;
        this._levels = this._traitData.levels || [];
        this.registerEvent([{
                event: "ExtractTool_isFixedLevel",
                priority: 0,
                type: TraitManager_1.TraitEventPositionType.befor
            }]);
    };
    Tile2FixedLevelTrait.prototype.onT2FixStr_priority = function (e, t) {
        if (this.checkGameMode()) {
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this._priority
            });
        }
        else {
            t();
        }
    };
    Tile2FixedLevelTrait.prototype.onT2FixStr_isFixed = function (e, t) {
        if (this.checkGameMode()) {
            var r = e.args[0];
            if (this._levels[r - 1]) {
                t({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: true
                });
            }
            else {
                t();
            }
        }
        else
            t();
    };
    Tile2FixedLevelTrait.prototype.onT2FixStr_getFixed = function (e, t) {
        if (this.checkGameMode()) {
            var r = e.args[0], i = this._levels[r - 1];
            if (i) {
                t({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: i
                });
            }
            else {
                t();
            }
        }
        else
            t();
    };
    Tile2FixedLevelTrait.prototype.onExtractTool_isFixedLevel = function (e, t) {
        if (this.checkGameMode()) {
            var r = e.args[0];
            if (this._levels[r - 1]) {
                t({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: true
                });
            }
            else {
                t();
            }
        }
        else
            t();
    };
    Tile2FixedLevelTrait.traitKey = "Tile2FixedLevel";
    Tile2FixedLevelTrait = __decorate([
        mj.trait,
        mj.class("Tile2FixedLevelTrait")
    ], Tile2FixedLevelTrait);
    return Tile2FixedLevelTrait;
}(ExtractTrait_1.default));
exports.default = Tile2FixedLevelTrait;

cc._RF.pop();
"use strict";
cc._RF.push(module, 'ca0e42MQBNFIoKrq5xxHOPm', 'RollCardVisTrait');
// subpackages/l_rollCard/Scripts/RollCardVisTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var RollCardVisTrait = /** @class */ (function (_super) {
    __extends(RollCardVisTrait, _super);
    function RollCardVisTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._minLayer = -1;
        return _this;
    }
    RollCardVisTrait.prototype.onLoad = function () {
        var t, r;
        _super.prototype.onLoad.call(this);
        this._minLayer = null !== (r = null === (t = this._traitData) || void 0 === t ? void 0 : t.minLayer) && void 0 !== r ? r : -1;
    };
    RollCardVisTrait.prototype.onRollCardType_modify = function (e, t) {
        var r, o;
        if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal) {
            var i = e.args[0];
            if (i) {
                var n = i.getTileMapObject();
                try {
                    for (var c = __values(n.aliveTiles()), p = c.next(); !p.done; p = c.next()) {
                        var f = p.value;
                        f.layer >= this._minLayer && n.isHasVisible(f, true) === TileTypeEnum_1.ETileVisible.None && n.setTileType(f.id, TileTypeEnum_1.ETileType.RollCard);
                    }
                }
                catch (e) {
                    r = {
                        error: e
                    };
                }
                finally {
                    try {
                        p && !p.done && (o = c.return) && o.call(c);
                    }
                    finally {
                        if (r)
                            throw r.error;
                    }
                }
                t({
                    returnType: TraitCallbackReturnType.return,
                    isBreak: true
                });
            }
            else
                t();
        }
        else
            t();
    };
    RollCardVisTrait.traitKey = "RollCardVis";
    RollCardVisTrait = __decorate([
        mj.trait,
        mj.class("RollCardVisTrait")
    ], RollCardVisTrait);
    return RollCardVisTrait;
}(Trait_1.default));
exports.default = RollCardVisTrait;

cc._RF.pop();
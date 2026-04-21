"use strict";
cc._RF.push(module, '57d0dUSZwFJ/4t9w8YBEnqd', 'NormalShowBackTrait');
// subpackages/l_normalshowback/Scripts/NormalShowBackTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var NormalShowBackTrait = /** @class */ (function (_super) {
    __extends(NormalShowBackTrait, _super);
    function NormalShowBackTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NormalShowBackTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    NormalShowBackTrait.prototype.onBaseTileNode_upAnimMgr = function (e, t) {
        var o, i, r, a, p = e.ins;
        if (p.context.gameType == GameTypeEnums_1.MjGameType.Normal) {
            var s = null === (i = null === (o = p.context) || void 0 === o ? void 0 : o.gameView) || void 0 === i ? void 0 : i.delegate;
            s && s.loadRes("spine/spinebase/gameplay_flip_regular", sp.SkeletonData, "l_normalshowback");
            if (p.info.tileObject.type === TileTypeEnum_1.ETileType.Normal || p.info.tileObject.type === TileTypeEnum_1.ETileType.Bomb) {
                p.updateNormalFlip();
                if (p.info.tileObject.isCardLock()) {
                    null === (r = p.normalFlip) || void 0 === r || r.forceExit();
                }
                else {
                    null === (a = p.normalFlip) || void 0 === a || a.forceEnter();
                }
            }
            t();
        }
        else
            t();
    };
    NormalShowBackTrait.prototype.onClearBhv_collision = function (e, t) {
        var o = e.ins;
        if (o.context.gameType == GameTypeEnums_1.MjGameType.Normal) {
            o.context.getTileNodeManager().getTileNodes().forEach(function (e) {
                var t = e.normalFlip;
                !t || t.hasRun || e.info.tileObject.isCardLock() || t.tryPlayAni();
            });
            t();
        }
        else
            t();
    };
    NormalShowBackTrait.prototype.getAnimCfg = function () {
        return {
            path: "spine/spinebase/gameplay_flip_regular",
            anims: ["normal_in_1", "normal_in_2"],
            bundleName: "l_normalshowback"
        };
    };
    NormalShowBackTrait.prototype.onNorFlipStateAni_spineCfg = function (e, t) {
        t({
            returnVal: this.getAnimCfg(),
            isBreak: true,
            returnType: TraitCallbackReturnType.jump
        });
    };
    NormalShowBackTrait.prototype.onTileNodeObj_reToNormal = function (e, t) {
        var o, i = e.ins;
        if (i.context.gameType == GameTypeEnums_1.MjGameType.Normal) {
            null === (o = i.normalFlip) || void 0 === o || o.forceEnter();
            t();
        }
        else
            t();
    };
    NormalShowBackTrait.traitKey = "NormalShowBack";
    NormalShowBackTrait = __decorate([
        mj.trait,
        mj.class("NormalShowBackTrait")
    ], NormalShowBackTrait);
    return NormalShowBackTrait;
}(Trait_1.default));
exports.default = NormalShowBackTrait;

cc._RF.pop();
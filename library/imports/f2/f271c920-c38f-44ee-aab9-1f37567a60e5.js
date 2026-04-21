"use strict";
cc._RF.push(module, 'f271ckgw49E7qq5HzdWemDl', 'Tile2MotivationTrait');
// subpackages/l_tile2Motivation/Scripts/Tile2MotivationTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ClearTile2NormalHelper_1 = require("../../../Scripts/ClearTile2NormalHelper");
var Tile2MotivationTrait = /** @class */ (function (_super) {
    __extends(Tile2MotivationTrait, _super);
    function Tile2MotivationTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2MotivationTrait.prototype.onT2CheerChk_canShow = function (t, r) {
        var e = t.ins, o = e.context || e._context;
        if (o) {
            var i = ClearTile2NormalHelper_1.default._options;
            if (i) {
                var n = i.clearSlotBarList;
                if (n && 0 !== n.length) {
                    var a = i.slotBarSnapshotBefore;
                    if (!a || a.length < 2)
                        r();
                    else {
                        var s = n[0][0], f = a.indexOf(s);
                        if (f < 0)
                            r();
                        else {
                            var u = a.length, p = o.getGameData(), _ = p.slotBarCount - p.slotBarIds.length, v = (i.rollCardDatas || []).some(function (t) {
                                return !t.frontToBack;
                            }), h = -1;
                            if (v && 3 === u && 0 === f && 2 === _) {
                                h = 4;
                            }
                            else {
                                if (v && 3 === u && 1 === f && 2 === _) {
                                    h = 3;
                                }
                                else {
                                    if (3 === u && 0 === f && 2 === _) {
                                        h = 2;
                                    }
                                    else {
                                        if (3 === u && 1 === f && 2 === _) {
                                            h = 1;
                                        }
                                        else {
                                            2 === u && 0 === f && 3 === _ && (h = 0);
                                        }
                                    }
                                }
                            }
                            r({
                                isBreak: true,
                                returnType: TraitManager_1.TraitCallbackReturnType.return,
                                returnVal: {
                                    isShow: h > -1,
                                    index: h
                                }
                            });
                        }
                    }
                }
                else
                    r();
            }
            else
                r();
        }
        else
            r();
    };
    Tile2MotivationTrait.traitKey = "Tile2Motivation";
    Tile2MotivationTrait = __decorate([
        mj.trait,
        mj.class("Tile2MotivationTrait")
    ], Tile2MotivationTrait);
    return Tile2MotivationTrait;
}(Trait_1.default));
exports.default = Tile2MotivationTrait;

cc._RF.pop();
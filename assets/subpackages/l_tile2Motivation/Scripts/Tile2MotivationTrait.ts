import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import ClearTile2NormalHelper from '../../../Scripts/ClearTile2NormalHelper';
@mj.trait
@mj.class("Tile2MotivationTrait")
export default class Tile2MotivationTrait extends Trait {
  static traitKey = "Tile2Motivation";
  onT2CheerChk_canShow(t, r) {
    var e = t.ins,
      o = e.context || e._context;
    if (o) {
      var i = ClearTile2NormalHelper._options;
      if (i) {
        var n = i.clearSlotBarList;
        if (n && 0 !== n.length) {
          var a = i.slotBarSnapshotBefore;
          if (!a || a.length < 2) r();else {
            var s = n[0][0],
              f = a.indexOf(s);
            if (f < 0) r();else {
              var u = a.length,
                p = o.getGameData(),
                _ = p.slotBarCount - p.slotBarIds.length,
                v = (i.rollCardDatas || []).some(function (t) {
                  return !t.frontToBack;
                }),
                h = -1;
              if (v && 3 === u && 0 === f && 2 === _) {
                h = 4;
              } else {
                if (v && 3 === u && 1 === f && 2 === _) {
                  h = 3;
                } else {
                  if (3 === u && 0 === f && 2 === _) {
                    h = 2;
                  } else {
                    if (3 === u && 1 === f && 2 === _) {
                      h = 1;
                    } else {
                      2 === u && 0 === f && 3 === _ && (h = 0);
                    }
                  }
                }
              }
              r({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: {
                  isShow: h > -1,
                  index: h
                }
              });
            }
          }
        } else r();
      } else r();
    } else r();
  }
}
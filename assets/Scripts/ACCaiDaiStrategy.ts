import "./Global";
import "./framework/trait/TraitManager";
import {buildAllClearNodeInfos} from "./IAllClearStrategy";
import {AllClearStrategyRegistry} from "./AllClearStrategyRegistry";
import {AcCaiDaiAnimPlayer} from "./AcCaiDaiAnimPlayer";


export class ACCaiDaiStrategy {
    getName() {
        return "ACCaiDaiStrategy";
    }

    play(e, t) {
        var o = buildAllClearNodeInfos(e, t);
        if (0 !== o.length) {
            var i = new AcCaiDaiAnimPlayer(t);
            i.setupPositions(o, 0);
            i.play(o);
        } else t.onComplete();
    }
}

AllClearStrategyRegistry.register(4, new ACCaiDaiStrategy());
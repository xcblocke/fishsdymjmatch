import Trait from "../../../Scripts/framework/trait/Trait";
import {TraitCallbackReturnType} from "../../../Scripts/framework/trait/TraitManager";

@mj.trait
@mj.class("AdUnTimeOutNoRdTrait")
export default class AdUnTimeOutNoRdTrait extends Trait {
    static traitKey = "AdUnTimeOutNoRd";

    onLoad() {
        super.onLoad.call(this);
    }

    onAdUnavailCtrl_triggerCB(t, r) {
        r({
            isBreak: true,
            returnType: TraitCallbackReturnType.return
        });
    }
}
import Trait from '../../../Scripts/framework/trait/Trait';
import { UIRatingDialog } from './UIRatingDialog';
@mj.trait
@mj.class("ScrollRatingDialogTrait")
export default class ScrollRatingDialogTrait extends Trait {
  _customPrefabUrl = "prefabs/ui/ratingDialog/UIRatingDialogScroll";
  static traitKey = "ScrollRatingDialog";
  onLoad() {
    super.onLoad.call(this);
  }
  onUIRatingDlgCtrl_initRes(t, e) {
    UIRatingDialog.prefabUrl = this._customPrefabUrl;
    e();
  }
}
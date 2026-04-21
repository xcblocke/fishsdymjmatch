import I18NComponent from '../../../Scripts/component/I18NComponent';
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("ArtFontLanguagesTrait")
export default class ArtFontLanguagesTrait extends Trait {
  _isInitialized = false;
  static traitKey = "ArtFontLanguages";
  onLoad() {
    super.onLoad.call(this);
  }
  onLoginM_showLoad(t, e) {
    if (!this._isInitialized) {
      I18NComponent.setEnableSystemFontFallback(false);
      this._isInitialized = true;
    }
    e();
  }
}
import Trait from '../../../Scripts/framework/trait/Trait';
var c = ["good", "great", "excellent", "amazing"];
@mj.trait
@mj.class("T2DianZanEmojiTrait")
export default class T2DianZanEmojiTrait extends Trait {
  static traitKey = "T2DianZanEmoji";
  onLoad() {
    super.onLoad.call(this);
  }
  onTile2DZanBhv_spUrl(t, r) {
    r({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: "spine/tile2Cheer/gameplay_word_face_a"
    });
  }
  onTile2DZanBhv_animName(t, r) {
    var e = Math.floor(Math.random() * c.length);
    r({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: c[e]
    });
  }
}
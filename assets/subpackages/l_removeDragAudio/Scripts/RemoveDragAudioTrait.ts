import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("RemoveDragAudioTrait")
export default class RemoveDragAudioTrait extends Trait {
  static traitKey = "RemoveDragAudio";
  onLoad() {
    super.onLoad.call(this);
    this.registerTile2Event();
  }
  registerTile2Event() {
    this.registerEvent([{
      event: "Tile2MoveBhv_playAudio",
      type: 0
    }]);
  }
  onMoveBhv_playAudio(t, e) {
    e({
      returnType: TraitCallbackReturnType.jump
    });
  }
  onTile2MoveBhv_playAudio(t, e) {
    e({
      returnType: TraitCallbackReturnType.jump
    });
  }
}
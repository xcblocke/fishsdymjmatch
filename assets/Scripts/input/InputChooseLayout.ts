import { InputBase } from '../inputbase/InputBase';
export default class InputChooseLayout extends InputBase {
  excute(e) {
    this.gameContext.setContentSize(e.contentSize);
    var t = this.gameContext.layoutSelector.chooseLayout({
      contentSize: e.contentSize
    });
    this.gameContext.gameModifier.modifyLayout(t.config, t.scale);
  }
}
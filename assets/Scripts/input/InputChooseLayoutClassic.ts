import { InputBase } from '../inputbase/InputBase';
export default class InputChooseLayoutClassic extends InputBase {
  excute(e) {
    this.gameContext.setContentSize(e.contentSize);
    var t = this.gameContext.layoutSelector.chooseLayoutForClassic({
      contentSize: e.contentSize,
      maxRow: e.maxRow,
      maxCol: e.maxCol
    });
    this.gameContext.gameModifier.modifyLayout(t.config, t.scale);
  }
}
import ViewController, { viewMode } from '../../../Scripts/framework/controller/ViewController';
import FailView from './FailView';
@mj.class("FailController")
export default class FailController extends ViewController {
  viewClass = FailView;
  viewMode = viewMode.PANEL;
  bundleName = "mainRes";
  preShuffleData = null;
  getMessageListeners() {
    return {};
  }
  viewDidLoad() {
    super.viewDidLoad.call(this);
    var t = mj.getClassByName("FailPreviewTrait");
    if (t && t.getInstance() && true === t.getInstance().eventEnabled) {
      this.preShuffleData = t.getPreShuffleData();
      this.preShuffleData;
    }
    this.viewDoAction("show", Object.assign(Object.assign({}, this.args), {
      preShuffleData: this.preShuffleData
    }));
  }
  refreshForReuse(t) {
    super.refreshForReuse.call(this, t);
    var i = mj.getClassByName("FailPreviewTrait");
    i && i.getInstance() && true === i.getInstance().eventEnabled && (this.preShuffleData = i.getPreShuffleData());
    this.viewDoAction("show", Object.assign(Object.assign({}, t), {
      preShuffleData: this.preShuffleData
    }));
  }
  close() {
    super.close.call(this);
    var t = mj.getClassByName("FailPreviewTrait");
    t && t.getInstance() && true === t.getInstance().eventEnabled && t.clearPreShuffleData();
  }
}
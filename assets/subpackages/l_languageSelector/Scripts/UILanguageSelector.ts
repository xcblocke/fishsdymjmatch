import UIView from '../../../Scripts/framework/ui/UIView';
import { UILanguageItem } from './UILanguageItem';
import LanguageSelectorTrait from './LanguageSelectorTrait';
import { TableView } from '../../../Scripts/TableView';
@mj.class
export class UILanguageSelector extends UIView {
  _dialogContent = null;
  _scrollView = null;
  _tableView = null;
  _closeBtn = null;
  _data = [];
  static prefabUrl = "prefabs/ui/language/UILanguageSelector";
  onLoad() {
    super.onLoad.call(this);
    this.initUI();
    this.initEvents();
  }
  @mj.traitEvent("LangSelVw_start")
  start() {
    super.start.call(this);
    this.initTableView();
  }
  initUI() {
    var t;
    if (cc.isValid(this.node)) {
      this._dialogContent = this.node.getChildByName("content");
      if (cc.isValid(this._dialogContent)) {
        var e = this._dialogContent.getChildByName("top_bg");
        cc.isValid(e) && (this._closeBtn = e.getChildByName("btn_close"));
        this._scrollView = null === (t = this._dialogContent.getChildByName("scrollView")) || void 0 === t ? void 0 : t.getComponent(cc.ScrollView);
      }
    }
  }
  initEvents() {
    this._closeBtn && this.OnButtonClick(this._closeBtn, this.onCloseBtnClick.bind(this));
  }
  @mj.traitEvent("LangSelUI_initTV")
  initTableView() {
    var t = this;
    if (this._scrollView) {
      var e = LanguageSelectorTrait.getInstance();
      if (e) {
        var o = e.getLanguages();
        this._data = o.concat();
        this._scrollView.content.removeAllChildren();
        this._tableView = new TableView({
          view: this._scrollView,
          isReused: true,
          isCellActive: false
        });
        this._tableView.cellSizeForTable = function () {
          return cc.size(680, 165);
        };
        this._tableView.numberOfCellsInTableView = function () {
          return t._data.length;
        };
        this._tableView.cellAtIndex = function (e, o) {
          var n = t.getItemCell(o),
            a = t.getItemCellCmp(n);
          if (a) {
            a.setOnClick(t.onLanguageSelect.bind(t));
            a.updateCell(t._data[o]);
          }
          return n;
        };
        this.reSortLanguageList();
      }
    }
  }
  @mj.traitEvent("LangSelUI_getItemCell")
  getItemCell() {
    var t = this._tableView.dequeueCellByKey("languageItem");
    t || (t = UILanguageItem.createCell("languageItem"));
    return t;
  }
  @mj.traitEvent("LangSelUI_getItemCellCmp")
  getItemCellCmp(t) {
    return t.getComponent(UILanguageItem);
  }
  reSortLanguageList() {
    var t = LanguageSelectorTrait.getInstance();
    if (t) {
      var e = t.getCurrentLanguage(),
        o = this._data.find(function (t) {
          return t.code === e;
        }),
        n = this._data.filter(function (t) {
          return t.code !== e;
        });
      o && (this._data = [...[o], ...n]);
      this._tableView.reloadData();
    }
  }
  onLanguageSelect(t) {
    var e = LanguageSelectorTrait.getInstance();
    e && e.setLanguage(t);
    this.refreshAllVisibleCells();
  }
  refreshAllVisibleCells() {
    this._tableView && this._tableView.getCurrentCells().forEach(function (t) {
      if (cc.isValid(t)) {
        var e = t.getComponent(UILanguageItem);
        e && e.getData() && e.updateCell(e.getData());
      }
    });
  }
  onCloseBtnClick() {
    this.closeDialog();
  }
  closeDialog() {
    this.delegate.close();
  }
}
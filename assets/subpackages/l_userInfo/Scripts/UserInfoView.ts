import UIView from '../../../Scripts/framework/ui/UIView';
import { TableView } from '../../../Scripts/TableView';
import UserInfoCellItem from './UserInfoCellItem';
var c = {
  Avatar: "avatar",
  Frame: "frame"
};
@mj.class
export default class UserInfoView extends UIView {
  selfNode = null;
  selfHeadImg = null;
  selfFrameImg = null;
  selfNameLabel = null;
  changeNameBtn = null;
  tabNode = null;
  avatarTabBtn = null;
  frameTabBtn = null;
  scrollViewNode = null;
  saveBtn = null;
  _dataList = [];
  _rowDataList = [];
  _currentType = c.Avatar;
  ITEMS_PER_ROW = 4;
  CELL_HEIGHT = 183;
  static prefabUrl = "prefabs/ui/userInfo/UserInfoView";
  static bundleName = "mainRes";
  onLoad() {
    super.onLoad.call(this);
    this.initUserInfoUI();
    this.registerEvents();
  }
  initUserInfoUI() {
    this.selfNode = this.node.getChildByName("content_node").getChildByName("nodeInfo");
    this.selfHeadImg = cc.find("headImg", this.selfNode).getComponent(cc.Sprite);
    this.selfFrameImg = cc.find("headImg/frameImg", this.selfNode).getComponent(cc.Sprite);
    this.selfNameLabel = cc.find("nameBg/nameLabel", this.selfNode).getComponent(cc.Label);
    this.changeNameBtn = cc.find("changeNameBtn", this.selfNode).getComponent(cc.Button);
    this.tabNode = cc.find("content_node/nodeTab", this.node);
    this.avatarTabBtn = cc.find("tabBg/avatarBtn", this.tabNode).getComponent(cc.Button);
    this.frameTabBtn = cc.find("tabBg/frameBtn", this.tabNode).getComponent(cc.Button);
    this.saveBtn = cc.find("content_node/saveBtn", this.node).getComponent(cc.Button);
    this.scrollViewNode = cc.find("content_node/nodeCollectBg/nodeCollectView", this.node).getComponent(cc.ScrollView);
    this._tableView = new TableView({
      view: this.scrollViewNode,
      isReused: true,
      isCellActive: false
    });
    this._tableView.cellSizeForTable = this.cellSizeForTable.bind(this);
    this._tableView.numberOfCellsInTableView = this.numberOfCellsInTableView.bind(this);
    this._tableView.cellAtIndex = this.cellAtIndex.bind(this);
    this._tableView.cellWillShow = this.cellWillShow.bind(this);
    this._tableView.cellWillHide = this.cellWillHide.bind(this);
  }
  registerEvents() {
    this.OnButtonClick(this.avatarTabBtn.node, {
      func: this.onAvatarTabClick.bind(this),
      timeLimit: 0.01
    });
    this.OnButtonClick(this.frameTabBtn.node, {
      func: this.onFrameTabClick.bind(this),
      timeLimit: 0.01
    });
    this.OnButtonClick(this.changeNameBtn.node, this.onChangeNameClick.bind(this));
    this.OnButtonClick(this.saveBtn.node, this.onSaveClick.bind(this));
    mj.EventManager.on("onItemSelect", this.onItemSelect, this);
  }
  cellSizeForTable(e) {
    return cc.size(e.content.width, this.CELL_HEIGHT);
  }
  numberOfCellsInTableView() {
    return this._rowDataList.length;
  }
  cellAtIndex(e, t) {
    var r = this._tableView.dequeueCellByKey("userInfoCell");
    r || (r = UserInfoCellItem.createCell("userInfoCell"));
    var n = r.getComponent(UserInfoCellItem);
    n && t < this._rowDataList.length && n.updateCell(this._rowDataList[t]);
    return r;
  }
  cellWillShow() {}
  cellWillHide() {}
  onAvatarTabClick() {
    if (this._currentType !== c.Avatar) {
      this._currentType = c.Avatar;
      this.updateTabButtonState(c.Avatar);
    }
  }
  onFrameTabClick() {
    if (this._currentType !== c.Frame) {
      this._currentType = c.Frame;
      this.updateTabButtonState(c.Frame);
    }
  }
  onChangeNameClick() {
    this.delegate.changeUserName();
  }
  @mj.traitEvent("UsrInfoVw_save")
  onSaveClick() {
    this.delegate.saveUserInfo();
  }
  @mj.traitEvent("UsrInfoVw_itemSelect")
  async onItemSelect(e) {
    if ("avatar" === e.type) {
      this.delegate.updateSelectAvatar(e.id);
    } else {
      "frame" === e.type && this.delegate.updateSelectFrame(e.id);
    }
    this.updateSelectionState(e.id);
    return;
  }
  updateTabButtonState(e) {
    var t = e === c.Avatar;
    this.avatarTabBtn && (this.avatarTabBtn.node.opacity = t ? 255 : 0);
    this.frameTabBtn && (this.frameTabBtn.node.opacity = t ? 0 : 255);
    if (t) {
      this.delegate.loadAvatarData();
    } else {
      this.delegate.loadFrameData();
    }
  }
  showDataList(e) {
    if (cc.isValid(this.node) && this._tableView) {
      this._dataList = e;
      this._rowDataList = this.convertToRowData(this._dataList);
      this._tableView.reloadData();
    }
  }
  convertToRowData(e) {
    for (var t = [], r = 0; r < e.length; r += this.ITEMS_PER_ROW) {
      for (var n = [], a = 0; a < this.ITEMS_PER_ROW; a++) {
        var o = r + a;
        if (o < e.length) {
          n.push(e[o]);
        } else {
          n.push(null);
        }
      }
      t.push({
        items: n
      });
    }
    return t;
  }
  updateSelectionState(e) {
    this._dataList.forEach(function (t) {
      t.isSelected = t.id === e;
    });
    this._rowDataList = this.convertToRowData(this._dataList);
    var t = this.scrollViewNode.content.getPosition();
    this._tableView.reloadData(t);
  }
  @mj.traitEvent("UsrInfoVw_refreshTop")
  refreshTopDisplay(e) {
    cc.isValid(this.selfHeadImg) && e.avatarSprite && (this.selfHeadImg.spriteFrame = e.avatarSprite);
    cc.isValid(this.selfFrameImg) && e.frameSprite && (this.selfFrameImg.spriteFrame = e.frameSprite);
  }
  refreshUserName(e) {
    cc.isValid(this.selfNameLabel) && (this.selfNameLabel.string = e);
  }
  @mj.traitEvent("UserInfoVw_destroy")
  onDestroy() {
    super.onDestroy.call(this);
    mj.EventManager.off("onItemSelect", this.onItemSelect, this);
  }
}
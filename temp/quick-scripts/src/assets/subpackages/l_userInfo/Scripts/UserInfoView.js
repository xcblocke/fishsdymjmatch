"use strict";
cc._RF.push(module, '2d63cNR8t9GL6E6I5Y+Hf5V', 'UserInfoView');
// subpackages/l_userInfo/Scripts/UserInfoView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIView_1 = require("../../../Scripts/framework/ui/UIView");
var TableView_1 = require("../../../Scripts/TableView");
var UserInfoCellItem_1 = require("./UserInfoCellItem");
var c = {
    Avatar: "avatar",
    Frame: "frame"
};
var UserInfoView = /** @class */ (function (_super) {
    __extends(UserInfoView, _super);
    function UserInfoView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selfNode = null;
        _this.selfHeadImg = null;
        _this.selfFrameImg = null;
        _this.selfNameLabel = null;
        _this.changeNameBtn = null;
        _this.tabNode = null;
        _this.avatarTabBtn = null;
        _this.frameTabBtn = null;
        _this.scrollViewNode = null;
        _this.saveBtn = null;
        _this._dataList = [];
        _this._rowDataList = [];
        _this._currentType = c.Avatar;
        _this.ITEMS_PER_ROW = 4;
        _this.CELL_HEIGHT = 183;
        return _this;
    }
    UserInfoView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initUserInfoUI();
        this.registerEvents();
    };
    UserInfoView.prototype.initUserInfoUI = function () {
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
        this._tableView = new TableView_1.TableView({
            view: this.scrollViewNode,
            isReused: true,
            isCellActive: false
        });
        this._tableView.cellSizeForTable = this.cellSizeForTable.bind(this);
        this._tableView.numberOfCellsInTableView = this.numberOfCellsInTableView.bind(this);
        this._tableView.cellAtIndex = this.cellAtIndex.bind(this);
        this._tableView.cellWillShow = this.cellWillShow.bind(this);
        this._tableView.cellWillHide = this.cellWillHide.bind(this);
    };
    UserInfoView.prototype.registerEvents = function () {
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
    };
    UserInfoView.prototype.cellSizeForTable = function (e) {
        return cc.size(e.content.width, this.CELL_HEIGHT);
    };
    UserInfoView.prototype.numberOfCellsInTableView = function () {
        return this._rowDataList.length;
    };
    UserInfoView.prototype.cellAtIndex = function (e, t) {
        var r = this._tableView.dequeueCellByKey("userInfoCell");
        r || (r = UserInfoCellItem_1.default.createCell("userInfoCell"));
        var n = r.getComponent(UserInfoCellItem_1.default);
        n && t < this._rowDataList.length && n.updateCell(this._rowDataList[t]);
        return r;
    };
    UserInfoView.prototype.cellWillShow = function () { };
    UserInfoView.prototype.cellWillHide = function () { };
    UserInfoView.prototype.onAvatarTabClick = function () {
        if (this._currentType !== c.Avatar) {
            this._currentType = c.Avatar;
            this.updateTabButtonState(c.Avatar);
        }
    };
    UserInfoView.prototype.onFrameTabClick = function () {
        if (this._currentType !== c.Frame) {
            this._currentType = c.Frame;
            this.updateTabButtonState(c.Frame);
        }
    };
    UserInfoView.prototype.onChangeNameClick = function () {
        this.delegate.changeUserName();
    };
    UserInfoView.prototype.onSaveClick = function () {
        this.delegate.saveUserInfo();
    };
    UserInfoView.prototype.onItemSelect = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if ("avatar" === e.type) {
                    this.delegate.updateSelectAvatar(e.id);
                }
                else {
                    "frame" === e.type && this.delegate.updateSelectFrame(e.id);
                }
                this.updateSelectionState(e.id);
                return [2 /*return*/];
            });
        });
    };
    UserInfoView.prototype.updateTabButtonState = function (e) {
        var t = e === c.Avatar;
        this.avatarTabBtn && (this.avatarTabBtn.node.opacity = t ? 255 : 0);
        this.frameTabBtn && (this.frameTabBtn.node.opacity = t ? 0 : 255);
        if (t) {
            this.delegate.loadAvatarData();
        }
        else {
            this.delegate.loadFrameData();
        }
    };
    UserInfoView.prototype.showDataList = function (e) {
        if (cc.isValid(this.node) && this._tableView) {
            this._dataList = e;
            this._rowDataList = this.convertToRowData(this._dataList);
            this._tableView.reloadData();
        }
    };
    UserInfoView.prototype.convertToRowData = function (e) {
        for (var t = [], r = 0; r < e.length; r += this.ITEMS_PER_ROW) {
            for (var n = [], a = 0; a < this.ITEMS_PER_ROW; a++) {
                var o = r + a;
                if (o < e.length) {
                    n.push(e[o]);
                }
                else {
                    n.push(null);
                }
            }
            t.push({
                items: n
            });
        }
        return t;
    };
    UserInfoView.prototype.updateSelectionState = function (e) {
        this._dataList.forEach(function (t) {
            t.isSelected = t.id === e;
        });
        this._rowDataList = this.convertToRowData(this._dataList);
        var t = this.scrollViewNode.content.getPosition();
        this._tableView.reloadData(t);
    };
    UserInfoView.prototype.refreshTopDisplay = function (e) {
        cc.isValid(this.selfHeadImg) && e.avatarSprite && (this.selfHeadImg.spriteFrame = e.avatarSprite);
        cc.isValid(this.selfFrameImg) && e.frameSprite && (this.selfFrameImg.spriteFrame = e.frameSprite);
    };
    UserInfoView.prototype.refreshUserName = function (e) {
        cc.isValid(this.selfNameLabel) && (this.selfNameLabel.string = e);
    };
    UserInfoView.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        mj.EventManager.off("onItemSelect", this.onItemSelect, this);
    };
    UserInfoView.prefabUrl = "prefabs/ui/userInfo/UserInfoView";
    UserInfoView.bundleName = "mainRes";
    __decorate([
        mj.traitEvent("UsrInfoVw_save")
    ], UserInfoView.prototype, "onSaveClick", null);
    __decorate([
        mj.traitEvent("UsrInfoVw_itemSelect")
    ], UserInfoView.prototype, "onItemSelect", null);
    __decorate([
        mj.traitEvent("UsrInfoVw_refreshTop")
    ], UserInfoView.prototype, "refreshTopDisplay", null);
    __decorate([
        mj.traitEvent("UserInfoVw_destroy")
    ], UserInfoView.prototype, "onDestroy", null);
    UserInfoView = __decorate([
        mj.class
    ], UserInfoView);
    return UserInfoView;
}(UIView_1.default));
exports.default = UserInfoView;

cc._RF.pop();
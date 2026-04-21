
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_userInfo/Scripts/UserInfoView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3VzZXJJbmZvL1NjcmlwdHMvVXNlckluZm9WaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFDMUQsd0RBQXVEO0FBQ3ZELHVEQUFrRDtBQUNsRCxJQUFJLENBQUMsR0FBRztJQUNOLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEtBQUssRUFBRSxPQUFPO0NBQ2YsQ0FBQztBQUVGO0lBQTBDLGdDQUFNO0lBQWhEO1FBQUEscUVBNEpDO1FBM0pDLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsa0JBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsbUJBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsbUJBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsYUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLGtCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLG9CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLGFBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixlQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2Ysa0JBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsa0JBQVksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3hCLG1CQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLGlCQUFXLEdBQUcsR0FBRyxDQUFDOztJQTZJcEIsQ0FBQztJQTFJQyw2QkFBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFDRCxxQ0FBYyxHQUFkO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENB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bnRlbnQiOlsiaW1wb3J0IFVJVmlldyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay91aS9VSVZpZXcnO1xuaW1wb3J0IHsgVGFibGVWaWV3IH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9UYWJsZVZpZXcnO1xuaW1wb3J0IFVzZXJJbmZvQ2VsbEl0ZW0gZnJvbSAnLi9Vc2VySW5mb0NlbGxJdGVtJztcbnZhciBjID0ge1xuICBBdmF0YXI6IFwiYXZhdGFyXCIsXG4gIEZyYW1lOiBcImZyYW1lXCJcbn07XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvVmlldyBleHRlbmRzIFVJVmlldyB7XG4gIHNlbGZOb2RlID0gbnVsbDtcbiAgc2VsZkhlYWRJbWcgPSBudWxsO1xuICBzZWxmRnJhbWVJbWcgPSBudWxsO1xuICBzZWxmTmFtZUxhYmVsID0gbnVsbDtcbiAgY2hhbmdlTmFtZUJ0biA9IG51bGw7XG4gIHRhYk5vZGUgPSBudWxsO1xuICBhdmF0YXJUYWJCdG4gPSBudWxsO1xuICBmcmFtZVRhYkJ0biA9IG51bGw7XG4gIHNjcm9sbFZpZXdOb2RlID0gbnVsbDtcbiAgc2F2ZUJ0biA9IG51bGw7XG4gIF9kYXRhTGlzdCA9IFtdO1xuICBfcm93RGF0YUxpc3QgPSBbXTtcbiAgX2N1cnJlbnRUeXBlID0gYy5BdmF0YXI7XG4gIElURU1TX1BFUl9ST1cgPSA0O1xuICBDRUxMX0hFSUdIVCA9IDE4MztcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFicy91aS91c2VySW5mby9Vc2VySW5mb1ZpZXdcIjtcbiAgc3RhdGljIGJ1bmRsZU5hbWUgPSBcIm1haW5SZXNcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuaW5pdFVzZXJJbmZvVUkoKTtcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XG4gIH1cbiAgaW5pdFVzZXJJbmZvVUkoKSB7XG4gICAgdGhpcy5zZWxmTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbnRlbnRfbm9kZVwiKS5nZXRDaGlsZEJ5TmFtZShcIm5vZGVJbmZvXCIpO1xuICAgIHRoaXMuc2VsZkhlYWRJbWcgPSBjYy5maW5kKFwiaGVhZEltZ1wiLCB0aGlzLnNlbGZOb2RlKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICB0aGlzLnNlbGZGcmFtZUltZyA9IGNjLmZpbmQoXCJoZWFkSW1nL2ZyYW1lSW1nXCIsIHRoaXMuc2VsZk5vZGUpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgIHRoaXMuc2VsZk5hbWVMYWJlbCA9IGNjLmZpbmQoXCJuYW1lQmcvbmFtZUxhYmVsXCIsIHRoaXMuc2VsZk5vZGUpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgdGhpcy5jaGFuZ2VOYW1lQnRuID0gY2MuZmluZChcImNoYW5nZU5hbWVCdG5cIiwgdGhpcy5zZWxmTm9kZSkuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgdGhpcy50YWJOb2RlID0gY2MuZmluZChcImNvbnRlbnRfbm9kZS9ub2RlVGFiXCIsIHRoaXMubm9kZSk7XG4gICAgdGhpcy5hdmF0YXJUYWJCdG4gPSBjYy5maW5kKFwidGFiQmcvYXZhdGFyQnRuXCIsIHRoaXMudGFiTm9kZSkuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgdGhpcy5mcmFtZVRhYkJ0biA9IGNjLmZpbmQoXCJ0YWJCZy9mcmFtZUJ0blwiLCB0aGlzLnRhYk5vZGUpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgIHRoaXMuc2F2ZUJ0biA9IGNjLmZpbmQoXCJjb250ZW50X25vZGUvc2F2ZUJ0blwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgIHRoaXMuc2Nyb2xsVmlld05vZGUgPSBjYy5maW5kKFwiY29udGVudF9ub2RlL25vZGVDb2xsZWN0Qmcvbm9kZUNvbGxlY3RWaWV3XCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpO1xuICAgIHRoaXMuX3RhYmxlVmlldyA9IG5ldyBUYWJsZVZpZXcoe1xuICAgICAgdmlldzogdGhpcy5zY3JvbGxWaWV3Tm9kZSxcbiAgICAgIGlzUmV1c2VkOiB0cnVlLFxuICAgICAgaXNDZWxsQWN0aXZlOiBmYWxzZVxuICAgIH0pO1xuICAgIHRoaXMuX3RhYmxlVmlldy5jZWxsU2l6ZUZvclRhYmxlID0gdGhpcy5jZWxsU2l6ZUZvclRhYmxlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fdGFibGVWaWV3Lm51bWJlck9mQ2VsbHNJblRhYmxlVmlldyA9IHRoaXMubnVtYmVyT2ZDZWxsc0luVGFibGVWaWV3LmJpbmQodGhpcyk7XG4gICAgdGhpcy5fdGFibGVWaWV3LmNlbGxBdEluZGV4ID0gdGhpcy5jZWxsQXRJbmRleC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX3RhYmxlVmlldy5jZWxsV2lsbFNob3cgPSB0aGlzLmNlbGxXaWxsU2hvdy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX3RhYmxlVmlldy5jZWxsV2lsbEhpZGUgPSB0aGlzLmNlbGxXaWxsSGlkZS5iaW5kKHRoaXMpO1xuICB9XG4gIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgIHRoaXMuT25CdXR0b25DbGljayh0aGlzLmF2YXRhclRhYkJ0bi5ub2RlLCB7XG4gICAgICBmdW5jOiB0aGlzLm9uQXZhdGFyVGFiQ2xpY2suYmluZCh0aGlzKSxcbiAgICAgIHRpbWVMaW1pdDogMC4wMVxuICAgIH0pO1xuICAgIHRoaXMuT25CdXR0b25DbGljayh0aGlzLmZyYW1lVGFiQnRuLm5vZGUsIHtcbiAgICAgIGZ1bmM6IHRoaXMub25GcmFtZVRhYkNsaWNrLmJpbmQodGhpcyksXG4gICAgICB0aW1lTGltaXQ6IDAuMDFcbiAgICB9KTtcbiAgICB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5jaGFuZ2VOYW1lQnRuLm5vZGUsIHRoaXMub25DaGFuZ2VOYW1lQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMuc2F2ZUJ0bi5ub2RlLCB0aGlzLm9uU2F2ZUNsaWNrLmJpbmQodGhpcykpO1xuICAgIG1qLkV2ZW50TWFuYWdlci5vbihcIm9uSXRlbVNlbGVjdFwiLCB0aGlzLm9uSXRlbVNlbGVjdCwgdGhpcyk7XG4gIH1cbiAgY2VsbFNpemVGb3JUYWJsZShlKSB7XG4gICAgcmV0dXJuIGNjLnNpemUoZS5jb250ZW50LndpZHRoLCB0aGlzLkNFTExfSEVJR0hUKTtcbiAgfVxuICBudW1iZXJPZkNlbGxzSW5UYWJsZVZpZXcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jvd0RhdGFMaXN0Lmxlbmd0aDtcbiAgfVxuICBjZWxsQXRJbmRleChlLCB0KSB7XG4gICAgdmFyIHIgPSB0aGlzLl90YWJsZVZpZXcuZGVxdWV1ZUNlbGxCeUtleShcInVzZXJJbmZvQ2VsbFwiKTtcbiAgICByIHx8IChyID0gVXNlckluZm9DZWxsSXRlbS5jcmVhdGVDZWxsKFwidXNlckluZm9DZWxsXCIpKTtcbiAgICB2YXIgbiA9IHIuZ2V0Q29tcG9uZW50KFVzZXJJbmZvQ2VsbEl0ZW0pO1xuICAgIG4gJiYgdCA8IHRoaXMuX3Jvd0RhdGFMaXN0Lmxlbmd0aCAmJiBuLnVwZGF0ZUNlbGwodGhpcy5fcm93RGF0YUxpc3RbdF0pO1xuICAgIHJldHVybiByO1xuICB9XG4gIGNlbGxXaWxsU2hvdygpIHt9XG4gIGNlbGxXaWxsSGlkZSgpIHt9XG4gIG9uQXZhdGFyVGFiQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMuX2N1cnJlbnRUeXBlICE9PSBjLkF2YXRhcikge1xuICAgICAgdGhpcy5fY3VycmVudFR5cGUgPSBjLkF2YXRhcjtcbiAgICAgIHRoaXMudXBkYXRlVGFiQnV0dG9uU3RhdGUoYy5BdmF0YXIpO1xuICAgIH1cbiAgfVxuICBvbkZyYW1lVGFiQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMuX2N1cnJlbnRUeXBlICE9PSBjLkZyYW1lKSB7XG4gICAgICB0aGlzLl9jdXJyZW50VHlwZSA9IGMuRnJhbWU7XG4gICAgICB0aGlzLnVwZGF0ZVRhYkJ1dHRvblN0YXRlKGMuRnJhbWUpO1xuICAgIH1cbiAgfVxuICBvbkNoYW5nZU5hbWVDbGljaygpIHtcbiAgICB0aGlzLmRlbGVnYXRlLmNoYW5nZVVzZXJOYW1lKCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJVc3JJbmZvVndfc2F2ZVwiKVxuICBvblNhdmVDbGljaygpIHtcbiAgICB0aGlzLmRlbGVnYXRlLnNhdmVVc2VySW5mbygpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVXNySW5mb1Z3X2l0ZW1TZWxlY3RcIilcbiAgYXN5bmMgb25JdGVtU2VsZWN0KGUpIHtcbiAgICBpZiAoXCJhdmF0YXJcIiA9PT0gZS50eXBlKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlLnVwZGF0ZVNlbGVjdEF2YXRhcihlLmlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgXCJmcmFtZVwiID09PSBlLnR5cGUgJiYgdGhpcy5kZWxlZ2F0ZS51cGRhdGVTZWxlY3RGcmFtZShlLmlkKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVTZWxlY3Rpb25TdGF0ZShlLmlkKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdXBkYXRlVGFiQnV0dG9uU3RhdGUoZSkge1xuICAgIHZhciB0ID0gZSA9PT0gYy5BdmF0YXI7XG4gICAgdGhpcy5hdmF0YXJUYWJCdG4gJiYgKHRoaXMuYXZhdGFyVGFiQnRuLm5vZGUub3BhY2l0eSA9IHQgPyAyNTUgOiAwKTtcbiAgICB0aGlzLmZyYW1lVGFiQnRuICYmICh0aGlzLmZyYW1lVGFiQnRuLm5vZGUub3BhY2l0eSA9IHQgPyAwIDogMjU1KTtcbiAgICBpZiAodCkge1xuICAgICAgdGhpcy5kZWxlZ2F0ZS5sb2FkQXZhdGFyRGF0YSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlbGVnYXRlLmxvYWRGcmFtZURhdGEoKTtcbiAgICB9XG4gIH1cbiAgc2hvd0RhdGFMaXN0KGUpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLm5vZGUpICYmIHRoaXMuX3RhYmxlVmlldykge1xuICAgICAgdGhpcy5fZGF0YUxpc3QgPSBlO1xuICAgICAgdGhpcy5fcm93RGF0YUxpc3QgPSB0aGlzLmNvbnZlcnRUb1Jvd0RhdGEodGhpcy5fZGF0YUxpc3QpO1xuICAgICAgdGhpcy5fdGFibGVWaWV3LnJlbG9hZERhdGEoKTtcbiAgICB9XG4gIH1cbiAgY29udmVydFRvUm93RGF0YShlKSB7XG4gICAgZm9yICh2YXIgdCA9IFtdLCByID0gMDsgciA8IGUubGVuZ3RoOyByICs9IHRoaXMuSVRFTVNfUEVSX1JPVykge1xuICAgICAgZm9yICh2YXIgbiA9IFtdLCBhID0gMDsgYSA8IHRoaXMuSVRFTVNfUEVSX1JPVzsgYSsrKSB7XG4gICAgICAgIHZhciBvID0gciArIGE7XG4gICAgICAgIGlmIChvIDwgZS5sZW5ndGgpIHtcbiAgICAgICAgICBuLnB1c2goZVtvXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbi5wdXNoKG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0LnB1c2goe1xuICAgICAgICBpdGVtczogblxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0O1xuICB9XG4gIHVwZGF0ZVNlbGVjdGlvblN0YXRlKGUpIHtcbiAgICB0aGlzLl9kYXRhTGlzdC5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICB0LmlzU2VsZWN0ZWQgPSB0LmlkID09PSBlO1xuICAgIH0pO1xuICAgIHRoaXMuX3Jvd0RhdGFMaXN0ID0gdGhpcy5jb252ZXJ0VG9Sb3dEYXRhKHRoaXMuX2RhdGFMaXN0KTtcbiAgICB2YXIgdCA9IHRoaXMuc2Nyb2xsVmlld05vZGUuY29udGVudC5nZXRQb3NpdGlvbigpO1xuICAgIHRoaXMuX3RhYmxlVmlldy5yZWxvYWREYXRhKHQpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVXNySW5mb1Z3X3JlZnJlc2hUb3BcIilcbiAgcmVmcmVzaFRvcERpc3BsYXkoZSkge1xuICAgIGNjLmlzVmFsaWQodGhpcy5zZWxmSGVhZEltZykgJiYgZS5hdmF0YXJTcHJpdGUgJiYgKHRoaXMuc2VsZkhlYWRJbWcuc3ByaXRlRnJhbWUgPSBlLmF2YXRhclNwcml0ZSk7XG4gICAgY2MuaXNWYWxpZCh0aGlzLnNlbGZGcmFtZUltZykgJiYgZS5mcmFtZVNwcml0ZSAmJiAodGhpcy5zZWxmRnJhbWVJbWcuc3ByaXRlRnJhbWUgPSBlLmZyYW1lU3ByaXRlKTtcbiAgfVxuICByZWZyZXNoVXNlck5hbWUoZSkge1xuICAgIGNjLmlzVmFsaWQodGhpcy5zZWxmTmFtZUxhYmVsKSAmJiAodGhpcy5zZWxmTmFtZUxhYmVsLnN0cmluZyA9IGUpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVXNlckluZm9Wd19kZXN0cm95XCIpXG4gIG9uRGVzdHJveSgpIHtcbiAgICBzdXBlci5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICBtai5FdmVudE1hbmFnZXIub2ZmKFwib25JdGVtU2VsZWN0XCIsIHRoaXMub25JdGVtU2VsZWN0LCB0aGlzKTtcbiAgfVxufSJdfQ==
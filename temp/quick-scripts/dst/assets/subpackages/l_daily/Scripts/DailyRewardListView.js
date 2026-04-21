
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_daily/Scripts/DailyRewardListView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '10a4egSkIJDAo2VYSoAKoZ+', 'DailyRewardListView');
// subpackages/l_daily/Scripts/DailyRewardListView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var DailyModel_1 = require("./DailyModel");
var DailyTypes_1 = require("./DailyTypes");
var DailyRewardCellItem_1 = require("./DailyRewardCellItem");
var DailyRewardListView = /** @class */ (function (_super) {
    __extends(DailyRewardListView, _super);
    function DailyRewardListView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._scrollView = null;
        _this._contentNode = null;
        _this._itemReward0 = null;
        _this._itemReward1 = null;
        _this._itemReward2 = null;
        _this._rewardCellItem0 = null;
        _this._rewardCellItem1 = null;
        _this._rewardCellItem2 = null;
        _this._cellWidth = 750;
        _this._cellHeight = 510;
        _this.delegate = null;
        _this._monthDataList = [];
        _this._currentMonthIndex = 0;
        _this._isAnimating = false;
        _this._isScrolling = false;
        _this._scrollStartTime = 0;
        _this._lastScrollOffset = cc.v2(0, 0);
        _this.dailyScrollView = null;
        return _this;
    }
    DailyRewardListView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initView();
    };
    DailyRewardListView.prototype.initView = function () {
        this.initScrollView();
        this.initRewardItems();
        this.registerScrollEvents();
    };
    DailyRewardListView.prototype.initScrollView = function () {
        this._scrollView = this.node.getComponent(cc.ScrollView);
        this._contentNode = cc.find("view/content", this.node);
        this._itemReward0 = cc.find("view/content/item_reward0", this.node);
        this._itemReward1 = cc.find("view/content/item_reward1", this.node);
        this._itemReward2 = cc.find("view/content/item_reward2", this.node);
        this._scrollView.horizontal = true;
        this._scrollView.vertical = false;
        this._scrollView.enabled = true;
        var t = this._contentNode.getComponent(cc.Layout);
        t && (t.enabled = false);
        var e = this._scrollView.node.getContentSize();
        this._cellWidth = e.width;
        this._cellHeight = e.height;
        var i = this._contentNode;
        if (i) {
            i.anchorX = 0;
            i.anchorY = 0.5;
            i.width = 3 * this._cellWidth;
            i.height = this._cellHeight;
            i.x = -this._cellWidth / 2;
            i.y = 0;
        }
    };
    DailyRewardListView.prototype.initRewardItems = function () {
        this._rewardCellItem0 = this.initRewardItem(this._itemReward0, -this._cellWidth);
        this._rewardCellItem1 = this.initRewardItem(this._itemReward1, 0);
        this._rewardCellItem2 = this.initRewardItem(this._itemReward2, this._cellWidth);
    };
    DailyRewardListView.prototype.initRewardItem = function (t, e) {
        if (!t)
            return null;
        var i = t.getComponent(DailyRewardCellItem_1.default);
        i || (i = t.addComponent(DailyRewardCellItem_1.default));
        t.x = e;
        t.active = false;
        return i;
    };
    DailyRewardListView.prototype.registerScrollEvents = function () {
        this.node.on("scroll-began", this.onScrollBegan, this);
        this.node.on("scrolling", this.onScrolling, this);
        this.node.on("scroll-ended", this.onScrollEnded, this);
        this.node.on("touch-cancel", this.onScrollEnded, this);
    };
    DailyRewardListView.prototype.showMonthList = function (t) {
        this._monthDataList = t;
    };
    DailyRewardListView.prototype.scrollToMonth = function (t, e) {
        if (e === void 0) { e = true; }
        var i = this._monthDataList.findIndex(function (e) {
            return e.id === t;
        });
        if (!(i < 0)) {
            this._currentMonthIndex = i;
            this.updateThreeItems();
        }
    };
    DailyRewardListView.prototype.updateThreeItems = function () {
        this.updateItemData(this._rewardCellItem0, this._itemReward0, this._currentMonthIndex - 1, false);
        this.updateItemData(this._rewardCellItem1, this._itemReward1, this._currentMonthIndex, true);
        this.updateItemData(this._rewardCellItem2, this._itemReward2, this._currentMonthIndex + 1, false);
        this._contentNode.width = this._cellWidth * this._monthDataList.length;
        this._contentNode.x = this.calculateContentX();
        this.resetItemsPosition();
    };
    DailyRewardListView.prototype.updateItemData = function (t, e, i) {
        if (t && e)
            if (i >= 0 && i < this._monthDataList.length) {
                var o = this._monthDataList[i];
                this.updateCellRewardIcon(t, o);
                e.active = true;
            }
            else
                e.active = false;
    };
    DailyRewardListView.prototype.calculateContentX = function () {
        return -this._currentMonthIndex * this._cellWidth - this._cellWidth / 2;
    };
    DailyRewardListView.prototype.refreshMonth = function (t, e) {
        var i = this._monthDataList.findIndex(function (e) {
            return e.id === t;
        });
        if (!(i < 0)) {
            this._monthDataList[i] = e;
            var o = i - this._currentMonthIndex;
            if (0 === o) {
                this.updateCellRewardIcon(this._rewardCellItem1, e);
            }
            else {
                if (-1 === o) {
                    this.updateCellRewardIcon(this._rewardCellItem0, e);
                }
                else {
                    1 === o && this.updateCellRewardIcon(this._rewardCellItem2, e);
                }
            }
        }
    };
    DailyRewardListView.prototype.loadRewardIcon = function (t, e, i) {
        if (DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.item_config, e)) {
            var o = DailyModel_1.default.getInstance().getItemIconUrl(e);
            BaseSprite_1.default.refreshWithNode(t.node, o);
            if (i) {
                this.removeGrayEffect(t);
                t.node.opacity = 255;
            }
            else {
                this.applyGrayEffect(t);
                t.node.opacity = 255;
            }
        }
    };
    DailyRewardListView.prototype.updateCellRewardIcon = function (t, e) {
        if (t) {
            var i = t._imgReward;
            if (i && cc.isValid(i.node)) {
                var o = e.id, n = this.delegate.getRewardIconData(o);
                t.updateCell(n);
                this.loadRewardIcon(i, n.rewardId, n.completed);
            }
        }
    };
    DailyRewardListView.prototype.applyGrayEffect = function (t) {
        if (t && cc.isValid(t.node)) {
            var e = cc.Material.getBuiltinMaterial("2d-gray-sprite");
            t.setMaterial(0, e);
        }
    };
    DailyRewardListView.prototype.removeGrayEffect = function (t) {
        if (t && cc.isValid(t.node)) {
            t.setMaterial(0, null);
            if (!t.getMaterial(0)) {
                var e = cc.Material.getBuiltinMaterial("2d-sprite");
                t.setMaterial(0, e);
            }
            t.node.color = cc.Color.WHITE;
            var i = t.spriteFrame;
            if (i) {
                t.spriteFrame = null;
                t.spriteFrame = i;
            }
        }
    };
    DailyRewardListView.prototype.switchMonth = function (t) {
        if (0 !== t) {
            if (!(-1 === t && this._currentMonthIndex <= 0 || 1 === t && this._currentMonthIndex >= this._monthDataList.length - 1)) {
                mj.audioManager.playEffect(DailyTypes_1.EDailyAudioID.DailyMonthSlide);
                cc.Tween.stopAllByTarget(this._contentNode);
                this.prepareSwitch(t);
                this.animateSwitch(t);
            }
        }
        else
            this.bounceBack();
    };
    DailyRewardListView.prototype.prepareSwitch = function (t) {
        this._currentMonthIndex += t;
        this._isAnimating = true;
        this._scrollView.enabled = false;
        this.dailyScrollView && (this.dailyScrollView.enabled = false);
        if (-1 === t) {
            this.updateItemData(this._rewardCellItem2, this._itemReward2, this._currentMonthIndex - 1, false);
        }
        else {
            this.updateItemData(this._rewardCellItem0, this._itemReward0, this._currentMonthIndex + 1, false);
        }
    };
    DailyRewardListView.prototype.animateSwitch = function (t) {
        var i = this;
        cc.tween(this._contentNode).to(DailyRewardListView.ANIMATION_DURATION, {
            x: this.calculateContentX()
        }, {
            easing: "backOut"
        }).call(function () {
            return i.onSwitchComplete(t);
        }).start();
    };
    DailyRewardListView.prototype.onSwitchComplete = function (t) {
        this.swapItemReferences(t);
        this.resetItemsPosition();
        this.restoreScrollState();
        this.delegate.handleChangeMonth(t < 0);
    };
    DailyRewardListView.prototype.swapItemReferences = function (t) {
        if (-1 === t) {
            var e = __read([this._itemReward2, this._rewardCellItem2], 2), i = e[0], o = e[1];
            this._itemReward2 = this._itemReward1;
            this._rewardCellItem2 = this._rewardCellItem1;
            this._itemReward1 = this._itemReward0;
            this._rewardCellItem1 = this._rewardCellItem0;
            this._itemReward0 = i;
            this._rewardCellItem0 = o;
        }
        else {
            var n = __read([this._itemReward0, this._rewardCellItem0], 2);
            i = n[0], o = n[1];
            this._itemReward0 = this._itemReward1;
            this._rewardCellItem0 = this._rewardCellItem1;
            this._itemReward1 = this._itemReward2;
            this._rewardCellItem1 = this._rewardCellItem2;
            this._itemReward2 = i;
            this._rewardCellItem2 = o;
        }
    };
    DailyRewardListView.prototype.restoreScrollState = function () {
        this._isAnimating = false;
        this._scrollView.enabled = true;
        this.dailyScrollView && (this.dailyScrollView.enabled = true);
    };
    DailyRewardListView.prototype.bounceBack = function () {
        var t = this;
        this._isAnimating = true;
        this._scrollView.enabled = false;
        this.dailyScrollView && (this.dailyScrollView.enabled = false);
        cc.tween(this._contentNode).to(DailyRewardListView.ANIMATION_DURATION, {
            x: this.calculateContentX()
        }).call(function () {
            t.restoreScrollState();
            t.resetItemsPosition();
        }).start();
    };
    DailyRewardListView.prototype.resetItemsPosition = function () {
        this._itemReward0.x = (this._currentMonthIndex - 1) * this._cellWidth + this._cellWidth / 2;
        this._itemReward1.x = this._currentMonthIndex * this._cellWidth + this._cellWidth / 2;
        this._itemReward2.x = (this._currentMonthIndex + 1) * this._cellWidth + this._cellWidth / 2;
    };
    DailyRewardListView.prototype.onScrollBegan = function () {
        if (!this._isAnimating) {
            this._isScrolling = true;
            this._scrollStartTime = Date.now();
            this._lastScrollOffset = this._scrollView.getScrollOffset();
        }
    };
    DailyRewardListView.prototype.onScrolling = function () { };
    DailyRewardListView.prototype.onScrollEnded = function () {
        if (this._isScrolling && !this._isAnimating) {
            this._isScrolling = false;
            var t = this._scrollView.getScrollOffset().x - this._lastScrollOffset.x, e = this.calculateScrollDirection(t);
            this.performPageSwitch(e);
        }
    };
    DailyRewardListView.prototype.calculateScrollDirection = function (t) {
        var i = this._cellWidth / DailyRewardListView.SWIPE_THRESHOLD;
        return Math.abs(t) < i ? 0 : t > 0 && this._currentMonthIndex > 0 ? -1 : t < 0 && this._currentMonthIndex < this._monthDataList.length - 1 ? 1 : 0;
    };
    DailyRewardListView.prototype.performPageSwitch = function (t) {
        this.switchMonth(t);
        this.scheduleOnce(this.resetContentPosition.bind(this), DailyRewardListView.ANIMATION_DURATION + DailyRewardListView.ANIMATION_BUFFER);
    };
    DailyRewardListView.prototype.resetContentPosition = function () {
        this._contentNode && cc.isValid(this._contentNode) && (this._contentNode.x = this.calculateContentX());
    };
    DailyRewardListView.prototype.onDestroy = function () {
        if (this.node) {
            this.node.off("scroll-began", this.onScrollBegan, this);
            this.node.off("scrolling", this.onScrolling, this);
            this.node.off("scroll-ended", this.onScrollEnded, this);
            this.node.off("touch-cancel", this.onScrollEnded, this);
        }
        this._contentNode && cc.Tween.stopAllByTarget(this._contentNode);
        this._monthDataList = [];
        this._rewardCellItem0 = null;
        this._rewardCellItem1 = null;
        this._rewardCellItem2 = null;
        this._isAnimating = false;
        this._isScrolling = false;
        this._currentMonthIndex = 0;
        _super.prototype.onDestroy.call(this);
    };
    DailyRewardListView.ANIMATION_DURATION = 0.2;
    DailyRewardListView.ANIMATION_BUFFER = 0.05;
    DailyRewardListView.SWIPE_THRESHOLD = 4;
    __decorate([
        mj.traitEvent("DailyRwdLVw_regScrollEvts")
    ], DailyRewardListView.prototype, "registerScrollEvents", null);
    return DailyRewardListView;
}(BaseUI_1.default));
exports.default = DailyRewardListView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RhaWx5L1NjcmlwdHMvRGFpbHlSZXdhcmRMaXN0Vmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUVBQXdFO0FBQ3hFLCtEQUEwRDtBQUMxRCw2RUFBNEU7QUFDNUUsMkVBQXNFO0FBQ3RFLDJDQUFzQztBQUN0QywyQ0FBNkM7QUFDN0MsNkRBQXdEO0FBQ3hEO0lBQWlELHVDQUFNO0lBQXZEO1FBQUEscUVBcVNDO1FBcFNDLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGtCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGtCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGtCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGtCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLHNCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixzQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDeEIsc0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLGdCQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLGlCQUFXLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsb0JBQWMsR0FBRyxFQUFFLENBQUM7UUFDcEIsd0JBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLGtCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGtCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLHNCQUFnQixHQUFHLENBQUMsQ0FBQztRQUNyQix1QkFBaUIsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNoQyxxQkFBZSxHQUFHLElBQUksQ0FBQzs7SUFtUnpCLENBQUM7SUEvUUMsb0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDRCxz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UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLDJCQUEyQixDQUFDO21FQU0xQztJQTJOSCwwQkFBQztDQXJTRCxBQXFTQyxDQXJTZ0QsZ0JBQU0sR0FxU3REO2tCQXJTb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVJlYWRlciB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvRGF0YVJlYWRlcic7XG5pbXBvcnQgQmFzZVVJIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3VpL0Jhc2VVSSc7XG5pbXBvcnQgeyBDb25maWdUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL2RhdGEvQ29uZmlnVHlwZSc7XG5pbXBvcnQgQmFzZVNwcml0ZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwcml0ZSc7XG5pbXBvcnQgRGFpbHlNb2RlbCBmcm9tICcuL0RhaWx5TW9kZWwnO1xuaW1wb3J0IHsgRURhaWx5QXVkaW9JRCB9IGZyb20gJy4vRGFpbHlUeXBlcyc7XG5pbXBvcnQgRGFpbHlSZXdhcmRDZWxsSXRlbSBmcm9tICcuL0RhaWx5UmV3YXJkQ2VsbEl0ZW0nO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFpbHlSZXdhcmRMaXN0VmlldyBleHRlbmRzIEJhc2VVSSB7XG4gIF9zY3JvbGxWaWV3ID0gbnVsbDtcbiAgX2NvbnRlbnROb2RlID0gbnVsbDtcbiAgX2l0ZW1SZXdhcmQwID0gbnVsbDtcbiAgX2l0ZW1SZXdhcmQxID0gbnVsbDtcbiAgX2l0ZW1SZXdhcmQyID0gbnVsbDtcbiAgX3Jld2FyZENlbGxJdGVtMCA9IG51bGw7XG4gIF9yZXdhcmRDZWxsSXRlbTEgPSBudWxsO1xuICBfcmV3YXJkQ2VsbEl0ZW0yID0gbnVsbDtcbiAgX2NlbGxXaWR0aCA9IDc1MDtcbiAgX2NlbGxIZWlnaHQgPSA1MTA7XG4gIGRlbGVnYXRlID0gbnVsbDtcbiAgX21vbnRoRGF0YUxpc3QgPSBbXTtcbiAgX2N1cnJlbnRNb250aEluZGV4ID0gMDtcbiAgX2lzQW5pbWF0aW5nID0gZmFsc2U7XG4gIF9pc1Njcm9sbGluZyA9IGZhbHNlO1xuICBfc2Nyb2xsU3RhcnRUaW1lID0gMDtcbiAgX2xhc3RTY3JvbGxPZmZzZXQgPSBjYy52MigwLCAwKTtcbiAgZGFpbHlTY3JvbGxWaWV3ID0gbnVsbDtcbiAgc3RhdGljIEFOSU1BVElPTl9EVVJBVElPTiA9IDAuMjtcbiAgc3RhdGljIEFOSU1BVElPTl9CVUZGRVIgPSAwLjA1O1xuICBzdGF0aWMgU1dJUEVfVEhSRVNIT0xEID0gNDtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuaW5pdFZpZXcoKTtcbiAgfVxuICBpbml0VmlldygpIHtcbiAgICB0aGlzLmluaXRTY3JvbGxWaWV3KCk7XG4gICAgdGhpcy5pbml0UmV3YXJkSXRlbXMoKTtcbiAgICB0aGlzLnJlZ2lzdGVyU2Nyb2xsRXZlbnRzKCk7XG4gIH1cbiAgaW5pdFNjcm9sbFZpZXcoKSB7XG4gICAgdGhpcy5fc2Nyb2xsVmlldyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldyk7XG4gICAgdGhpcy5fY29udGVudE5vZGUgPSBjYy5maW5kKFwidmlldy9jb250ZW50XCIsIHRoaXMubm9kZSk7XG4gICAgdGhpcy5faXRlbVJld2FyZDAgPSBjYy5maW5kKFwidmlldy9jb250ZW50L2l0ZW1fcmV3YXJkMFwiLCB0aGlzLm5vZGUpO1xuICAgIHRoaXMuX2l0ZW1SZXdhcmQxID0gY2MuZmluZChcInZpZXcvY29udGVudC9pdGVtX3Jld2FyZDFcIiwgdGhpcy5ub2RlKTtcbiAgICB0aGlzLl9pdGVtUmV3YXJkMiA9IGNjLmZpbmQoXCJ2aWV3L2NvbnRlbnQvaXRlbV9yZXdhcmQyXCIsIHRoaXMubm9kZSk7XG4gICAgdGhpcy5fc2Nyb2xsVmlldy5ob3Jpem9udGFsID0gdHJ1ZTtcbiAgICB0aGlzLl9zY3JvbGxWaWV3LnZlcnRpY2FsID0gZmFsc2U7XG4gICAgdGhpcy5fc2Nyb2xsVmlldy5lbmFibGVkID0gdHJ1ZTtcbiAgICB2YXIgdCA9IHRoaXMuX2NvbnRlbnROb2RlLmdldENvbXBvbmVudChjYy5MYXlvdXQpO1xuICAgIHQgJiYgKHQuZW5hYmxlZCA9IGZhbHNlKTtcbiAgICB2YXIgZSA9IHRoaXMuX3Njcm9sbFZpZXcubm9kZS5nZXRDb250ZW50U2l6ZSgpO1xuICAgIHRoaXMuX2NlbGxXaWR0aCA9IGUud2lkdGg7XG4gICAgdGhpcy5fY2VsbEhlaWdodCA9IGUuaGVpZ2h0O1xuICAgIHZhciBpID0gdGhpcy5fY29udGVudE5vZGU7XG4gICAgaWYgKGkpIHtcbiAgICAgIGkuYW5jaG9yWCA9IDA7XG4gICAgICBpLmFuY2hvclkgPSAwLjU7XG4gICAgICBpLndpZHRoID0gMyAqIHRoaXMuX2NlbGxXaWR0aDtcbiAgICAgIGkuaGVpZ2h0ID0gdGhpcy5fY2VsbEhlaWdodDtcbiAgICAgIGkueCA9IC10aGlzLl9jZWxsV2lkdGggLyAyO1xuICAgICAgaS55ID0gMDtcbiAgICB9XG4gIH1cbiAgaW5pdFJld2FyZEl0ZW1zKCkge1xuICAgIHRoaXMuX3Jld2FyZENlbGxJdGVtMCA9IHRoaXMuaW5pdFJld2FyZEl0ZW0odGhpcy5faXRlbVJld2FyZDAsIC10aGlzLl9jZWxsV2lkdGgpO1xuICAgIHRoaXMuX3Jld2FyZENlbGxJdGVtMSA9IHRoaXMuaW5pdFJld2FyZEl0ZW0odGhpcy5faXRlbVJld2FyZDEsIDApO1xuICAgIHRoaXMuX3Jld2FyZENlbGxJdGVtMiA9IHRoaXMuaW5pdFJld2FyZEl0ZW0odGhpcy5faXRlbVJld2FyZDIsIHRoaXMuX2NlbGxXaWR0aCk7XG4gIH1cbiAgaW5pdFJld2FyZEl0ZW0odCwgZSkge1xuICAgIGlmICghdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIGkgPSB0LmdldENvbXBvbmVudChEYWlseVJld2FyZENlbGxJdGVtKTtcbiAgICBpIHx8IChpID0gdC5hZGRDb21wb25lbnQoRGFpbHlSZXdhcmRDZWxsSXRlbSkpO1xuICAgIHQueCA9IGU7XG4gICAgdC5hY3RpdmUgPSBmYWxzZTtcbiAgICByZXR1cm4gaTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkRhaWx5UndkTFZ3X3JlZ1Njcm9sbEV2dHNcIilcbiAgcmVnaXN0ZXJTY3JvbGxFdmVudHMoKSB7XG4gICAgdGhpcy5ub2RlLm9uKFwic2Nyb2xsLWJlZ2FuXCIsIHRoaXMub25TY3JvbGxCZWdhbiwgdGhpcyk7XG4gICAgdGhpcy5ub2RlLm9uKFwic2Nyb2xsaW5nXCIsIHRoaXMub25TY3JvbGxpbmcsIHRoaXMpO1xuICAgIHRoaXMubm9kZS5vbihcInNjcm9sbC1lbmRlZFwiLCB0aGlzLm9uU2Nyb2xsRW5kZWQsIHRoaXMpO1xuICAgIHRoaXMubm9kZS5vbihcInRvdWNoLWNhbmNlbFwiLCB0aGlzLm9uU2Nyb2xsRW5kZWQsIHRoaXMpO1xuICB9XG4gIHNob3dNb250aExpc3QodCkge1xuICAgIHRoaXMuX21vbnRoRGF0YUxpc3QgPSB0O1xuICB9XG4gIHNjcm9sbFRvTW9udGgodCwgZSA9IHRydWUpIHtcbiAgICB2YXIgaSA9IHRoaXMuX21vbnRoRGF0YUxpc3QuZmluZEluZGV4KGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZS5pZCA9PT0gdDtcbiAgICB9KTtcbiAgICBpZiAoIShpIDwgMCkpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRNb250aEluZGV4ID0gaTtcbiAgICAgIHRoaXMudXBkYXRlVGhyZWVJdGVtcygpO1xuICAgIH1cbiAgfVxuICB1cGRhdGVUaHJlZUl0ZW1zKCkge1xuICAgIHRoaXMudXBkYXRlSXRlbURhdGEodGhpcy5fcmV3YXJkQ2VsbEl0ZW0wLCB0aGlzLl9pdGVtUmV3YXJkMCwgdGhpcy5fY3VycmVudE1vbnRoSW5kZXggLSAxLCBmYWxzZSk7XG4gICAgdGhpcy51cGRhdGVJdGVtRGF0YSh0aGlzLl9yZXdhcmRDZWxsSXRlbTEsIHRoaXMuX2l0ZW1SZXdhcmQxLCB0aGlzLl9jdXJyZW50TW9udGhJbmRleCwgdHJ1ZSk7XG4gICAgdGhpcy51cGRhdGVJdGVtRGF0YSh0aGlzLl9yZXdhcmRDZWxsSXRlbTIsIHRoaXMuX2l0ZW1SZXdhcmQyLCB0aGlzLl9jdXJyZW50TW9udGhJbmRleCArIDEsIGZhbHNlKTtcbiAgICB0aGlzLl9jb250ZW50Tm9kZS53aWR0aCA9IHRoaXMuX2NlbGxXaWR0aCAqIHRoaXMuX21vbnRoRGF0YUxpc3QubGVuZ3RoO1xuICAgIHRoaXMuX2NvbnRlbnROb2RlLnggPSB0aGlzLmNhbGN1bGF0ZUNvbnRlbnRYKCk7XG4gICAgdGhpcy5yZXNldEl0ZW1zUG9zaXRpb24oKTtcbiAgfVxuICB1cGRhdGVJdGVtRGF0YSh0LCBlLCBpKSB7XG4gICAgaWYgKHQgJiYgZSkgaWYgKGkgPj0gMCAmJiBpIDwgdGhpcy5fbW9udGhEYXRhTGlzdC5sZW5ndGgpIHtcbiAgICAgIHZhciBvID0gdGhpcy5fbW9udGhEYXRhTGlzdFtpXTtcbiAgICAgIHRoaXMudXBkYXRlQ2VsbFJld2FyZEljb24odCwgbyk7XG4gICAgICBlLmFjdGl2ZSA9IHRydWU7XG4gICAgfSBlbHNlIGUuYWN0aXZlID0gZmFsc2U7XG4gIH1cbiAgY2FsY3VsYXRlQ29udGVudFgoKSB7XG4gICAgcmV0dXJuIC10aGlzLl9jdXJyZW50TW9udGhJbmRleCAqIHRoaXMuX2NlbGxXaWR0aCAtIHRoaXMuX2NlbGxXaWR0aCAvIDI7XG4gIH1cbiAgcmVmcmVzaE1vbnRoKHQsIGUpIHtcbiAgICB2YXIgaSA9IHRoaXMuX21vbnRoRGF0YUxpc3QuZmluZEluZGV4KGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZS5pZCA9PT0gdDtcbiAgICB9KTtcbiAgICBpZiAoIShpIDwgMCkpIHtcbiAgICAgIHRoaXMuX21vbnRoRGF0YUxpc3RbaV0gPSBlO1xuICAgICAgdmFyIG8gPSBpIC0gdGhpcy5fY3VycmVudE1vbnRoSW5kZXg7XG4gICAgICBpZiAoMCA9PT0gbykge1xuICAgICAgICB0aGlzLnVwZGF0ZUNlbGxSZXdhcmRJY29uKHRoaXMuX3Jld2FyZENlbGxJdGVtMSwgZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoLTEgPT09IG8pIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUNlbGxSZXdhcmRJY29uKHRoaXMuX3Jld2FyZENlbGxJdGVtMCwgZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgMSA9PT0gbyAmJiB0aGlzLnVwZGF0ZUNlbGxSZXdhcmRJY29uKHRoaXMuX3Jld2FyZENlbGxJdGVtMiwgZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbG9hZFJld2FyZEljb24odCwgZSwgaSkge1xuICAgIGlmIChEYXRhUmVhZGVyLmdldEJ5S2V5KENvbmZpZ1R5cGUuaXRlbV9jb25maWcsIGUpKSB7XG4gICAgICB2YXIgbyA9IERhaWx5TW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRJdGVtSWNvblVybChlKTtcbiAgICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKHQubm9kZSwgbyk7XG4gICAgICBpZiAoaSkge1xuICAgICAgICB0aGlzLnJlbW92ZUdyYXlFZmZlY3QodCk7XG4gICAgICAgIHQubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hcHBseUdyYXlFZmZlY3QodCk7XG4gICAgICAgIHQubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB1cGRhdGVDZWxsUmV3YXJkSWNvbih0LCBlKSB7XG4gICAgaWYgKHQpIHtcbiAgICAgIHZhciBpID0gdC5faW1nUmV3YXJkO1xuICAgICAgaWYgKGkgJiYgY2MuaXNWYWxpZChpLm5vZGUpKSB7XG4gICAgICAgIHZhciBvID0gZS5pZCxcbiAgICAgICAgICBuID0gdGhpcy5kZWxlZ2F0ZS5nZXRSZXdhcmRJY29uRGF0YShvKTtcbiAgICAgICAgdC51cGRhdGVDZWxsKG4pO1xuICAgICAgICB0aGlzLmxvYWRSZXdhcmRJY29uKGksIG4ucmV3YXJkSWQsIG4uY29tcGxldGVkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYXBwbHlHcmF5RWZmZWN0KHQpIHtcbiAgICBpZiAodCAmJiBjYy5pc1ZhbGlkKHQubm9kZSkpIHtcbiAgICAgIHZhciBlID0gY2MuTWF0ZXJpYWwuZ2V0QnVpbHRpbk1hdGVyaWFsKFwiMmQtZ3JheS1zcHJpdGVcIik7XG4gICAgICB0LnNldE1hdGVyaWFsKDAsIGUpO1xuICAgIH1cbiAgfVxuICByZW1vdmVHcmF5RWZmZWN0KHQpIHtcbiAgICBpZiAodCAmJiBjYy5pc1ZhbGlkKHQubm9kZSkpIHtcbiAgICAgIHQuc2V0TWF0ZXJpYWwoMCwgbnVsbCk7XG4gICAgICBpZiAoIXQuZ2V0TWF0ZXJpYWwoMCkpIHtcbiAgICAgICAgdmFyIGUgPSBjYy5NYXRlcmlhbC5nZXRCdWlsdGluTWF0ZXJpYWwoXCIyZC1zcHJpdGVcIik7XG4gICAgICAgIHQuc2V0TWF0ZXJpYWwoMCwgZSk7XG4gICAgICB9XG4gICAgICB0Lm5vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICAgIHZhciBpID0gdC5zcHJpdGVGcmFtZTtcbiAgICAgIGlmIChpKSB7XG4gICAgICAgIHQuc3ByaXRlRnJhbWUgPSBudWxsO1xuICAgICAgICB0LnNwcml0ZUZyYW1lID0gaTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc3dpdGNoTW9udGgodCkge1xuICAgIGlmICgwICE9PSB0KSB7XG4gICAgICBpZiAoISgtMSA9PT0gdCAmJiB0aGlzLl9jdXJyZW50TW9udGhJbmRleCA8PSAwIHx8IDEgPT09IHQgJiYgdGhpcy5fY3VycmVudE1vbnRoSW5kZXggPj0gdGhpcy5fbW9udGhEYXRhTGlzdC5sZW5ndGggLSAxKSkge1xuICAgICAgICBtai5hdWRpb01hbmFnZXIucGxheUVmZmVjdChFRGFpbHlBdWRpb0lELkRhaWx5TW9udGhTbGlkZSk7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLl9jb250ZW50Tm9kZSk7XG4gICAgICAgIHRoaXMucHJlcGFyZVN3aXRjaCh0KTtcbiAgICAgICAgdGhpcy5hbmltYXRlU3dpdGNoKHQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB0aGlzLmJvdW5jZUJhY2soKTtcbiAgfVxuICBwcmVwYXJlU3dpdGNoKHQpIHtcbiAgICB0aGlzLl9jdXJyZW50TW9udGhJbmRleCArPSB0O1xuICAgIHRoaXMuX2lzQW5pbWF0aW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9zY3JvbGxWaWV3LmVuYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRhaWx5U2Nyb2xsVmlldyAmJiAodGhpcy5kYWlseVNjcm9sbFZpZXcuZW5hYmxlZCA9IGZhbHNlKTtcbiAgICBpZiAoLTEgPT09IHQpIHtcbiAgICAgIHRoaXMudXBkYXRlSXRlbURhdGEodGhpcy5fcmV3YXJkQ2VsbEl0ZW0yLCB0aGlzLl9pdGVtUmV3YXJkMiwgdGhpcy5fY3VycmVudE1vbnRoSW5kZXggLSAxLCBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXBkYXRlSXRlbURhdGEodGhpcy5fcmV3YXJkQ2VsbEl0ZW0wLCB0aGlzLl9pdGVtUmV3YXJkMCwgdGhpcy5fY3VycmVudE1vbnRoSW5kZXggKyAxLCBmYWxzZSk7XG4gICAgfVxuICB9XG4gIGFuaW1hdGVTd2l0Y2godCkge1xuICAgIHZhciBpID0gdGhpcztcbiAgICBjYy50d2Vlbih0aGlzLl9jb250ZW50Tm9kZSkudG8oRGFpbHlSZXdhcmRMaXN0Vmlldy5BTklNQVRJT05fRFVSQVRJT04sIHtcbiAgICAgIHg6IHRoaXMuY2FsY3VsYXRlQ29udGVudFgoKVxuICAgIH0sIHtcbiAgICAgIGVhc2luZzogXCJiYWNrT3V0XCJcbiAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBpLm9uU3dpdGNoQ29tcGxldGUodCk7XG4gICAgfSkuc3RhcnQoKTtcbiAgfVxuICBvblN3aXRjaENvbXBsZXRlKHQpIHtcbiAgICB0aGlzLnN3YXBJdGVtUmVmZXJlbmNlcyh0KTtcbiAgICB0aGlzLnJlc2V0SXRlbXNQb3NpdGlvbigpO1xuICAgIHRoaXMucmVzdG9yZVNjcm9sbFN0YXRlKCk7XG4gICAgdGhpcy5kZWxlZ2F0ZS5oYW5kbGVDaGFuZ2VNb250aCh0IDwgMCk7XG4gIH1cbiAgc3dhcEl0ZW1SZWZlcmVuY2VzKHQpIHtcbiAgICBpZiAoLTEgPT09IHQpIHtcbiAgICAgIHZhciBlID0gX19yZWFkKFt0aGlzLl9pdGVtUmV3YXJkMiwgdGhpcy5fcmV3YXJkQ2VsbEl0ZW0yXSwgMiksXG4gICAgICAgIGkgPSBlWzBdLFxuICAgICAgICBvID0gZVsxXTtcbiAgICAgIHRoaXMuX2l0ZW1SZXdhcmQyID0gdGhpcy5faXRlbVJld2FyZDE7XG4gICAgICB0aGlzLl9yZXdhcmRDZWxsSXRlbTIgPSB0aGlzLl9yZXdhcmRDZWxsSXRlbTE7XG4gICAgICB0aGlzLl9pdGVtUmV3YXJkMSA9IHRoaXMuX2l0ZW1SZXdhcmQwO1xuICAgICAgdGhpcy5fcmV3YXJkQ2VsbEl0ZW0xID0gdGhpcy5fcmV3YXJkQ2VsbEl0ZW0wO1xuICAgICAgdGhpcy5faXRlbVJld2FyZDAgPSBpO1xuICAgICAgdGhpcy5fcmV3YXJkQ2VsbEl0ZW0wID0gbztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG4gPSBfX3JlYWQoW3RoaXMuX2l0ZW1SZXdhcmQwLCB0aGlzLl9yZXdhcmRDZWxsSXRlbTBdLCAyKTtcbiAgICAgIGkgPSBuWzBdLCBvID0gblsxXTtcbiAgICAgIHRoaXMuX2l0ZW1SZXdhcmQwID0gdGhpcy5faXRlbVJld2FyZDE7XG4gICAgICB0aGlzLl9yZXdhcmRDZWxsSXRlbTAgPSB0aGlzLl9yZXdhcmRDZWxsSXRlbTE7XG4gICAgICB0aGlzLl9pdGVtUmV3YXJkMSA9IHRoaXMuX2l0ZW1SZXdhcmQyO1xuICAgICAgdGhpcy5fcmV3YXJkQ2VsbEl0ZW0xID0gdGhpcy5fcmV3YXJkQ2VsbEl0ZW0yO1xuICAgICAgdGhpcy5faXRlbVJld2FyZDIgPSBpO1xuICAgICAgdGhpcy5fcmV3YXJkQ2VsbEl0ZW0yID0gbztcbiAgICB9XG4gIH1cbiAgcmVzdG9yZVNjcm9sbFN0YXRlKCkge1xuICAgIHRoaXMuX2lzQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5fc2Nyb2xsVmlldy5lbmFibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmRhaWx5U2Nyb2xsVmlldyAmJiAodGhpcy5kYWlseVNjcm9sbFZpZXcuZW5hYmxlZCA9IHRydWUpO1xuICB9XG4gIGJvdW5jZUJhY2soKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHRoaXMuX2lzQW5pbWF0aW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9zY3JvbGxWaWV3LmVuYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRhaWx5U2Nyb2xsVmlldyAmJiAodGhpcy5kYWlseVNjcm9sbFZpZXcuZW5hYmxlZCA9IGZhbHNlKTtcbiAgICBjYy50d2Vlbih0aGlzLl9jb250ZW50Tm9kZSkudG8oRGFpbHlSZXdhcmRMaXN0Vmlldy5BTklNQVRJT05fRFVSQVRJT04sIHtcbiAgICAgIHg6IHRoaXMuY2FsY3VsYXRlQ29udGVudFgoKVxuICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgdC5yZXN0b3JlU2Nyb2xsU3RhdGUoKTtcbiAgICAgIHQucmVzZXRJdGVtc1Bvc2l0aW9uKCk7XG4gICAgfSkuc3RhcnQoKTtcbiAgfVxuICByZXNldEl0ZW1zUG9zaXRpb24oKSB7XG4gICAgdGhpcy5faXRlbVJld2FyZDAueCA9ICh0aGlzLl9jdXJyZW50TW9udGhJbmRleCAtIDEpICogdGhpcy5fY2VsbFdpZHRoICsgdGhpcy5fY2VsbFdpZHRoIC8gMjtcbiAgICB0aGlzLl9pdGVtUmV3YXJkMS54ID0gdGhpcy5fY3VycmVudE1vbnRoSW5kZXggKiB0aGlzLl9jZWxsV2lkdGggKyB0aGlzLl9jZWxsV2lkdGggLyAyO1xuICAgIHRoaXMuX2l0ZW1SZXdhcmQyLnggPSAodGhpcy5fY3VycmVudE1vbnRoSW5kZXggKyAxKSAqIHRoaXMuX2NlbGxXaWR0aCArIHRoaXMuX2NlbGxXaWR0aCAvIDI7XG4gIH1cbiAgb25TY3JvbGxCZWdhbigpIHtcbiAgICBpZiAoIXRoaXMuX2lzQW5pbWF0aW5nKSB7XG4gICAgICB0aGlzLl9pc1Njcm9sbGluZyA9IHRydWU7XG4gICAgICB0aGlzLl9zY3JvbGxTdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgdGhpcy5fbGFzdFNjcm9sbE9mZnNldCA9IHRoaXMuX3Njcm9sbFZpZXcuZ2V0U2Nyb2xsT2Zmc2V0KCk7XG4gICAgfVxuICB9XG4gIG9uU2Nyb2xsaW5nKCkge31cbiAgb25TY3JvbGxFbmRlZCgpIHtcbiAgICBpZiAodGhpcy5faXNTY3JvbGxpbmcgJiYgIXRoaXMuX2lzQW5pbWF0aW5nKSB7XG4gICAgICB0aGlzLl9pc1Njcm9sbGluZyA9IGZhbHNlO1xuICAgICAgdmFyIHQgPSB0aGlzLl9zY3JvbGxWaWV3LmdldFNjcm9sbE9mZnNldCgpLnggLSB0aGlzLl9sYXN0U2Nyb2xsT2Zmc2V0LngsXG4gICAgICAgIGUgPSB0aGlzLmNhbGN1bGF0ZVNjcm9sbERpcmVjdGlvbih0KTtcbiAgICAgIHRoaXMucGVyZm9ybVBhZ2VTd2l0Y2goZSk7XG4gICAgfVxuICB9XG4gIGNhbGN1bGF0ZVNjcm9sbERpcmVjdGlvbih0KSB7XG4gICAgdmFyIGkgPSB0aGlzLl9jZWxsV2lkdGggLyBEYWlseVJld2FyZExpc3RWaWV3LlNXSVBFX1RIUkVTSE9MRDtcbiAgICByZXR1cm4gTWF0aC5hYnModCkgPCBpID8gMCA6IHQgPiAwICYmIHRoaXMuX2N1cnJlbnRNb250aEluZGV4ID4gMCA/IC0xIDogdCA8IDAgJiYgdGhpcy5fY3VycmVudE1vbnRoSW5kZXggPCB0aGlzLl9tb250aERhdGFMaXN0Lmxlbmd0aCAtIDEgPyAxIDogMDtcbiAgfVxuICBwZXJmb3JtUGFnZVN3aXRjaCh0KSB7XG4gICAgdGhpcy5zd2l0Y2hNb250aCh0KTtcbiAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLnJlc2V0Q29udGVudFBvc2l0aW9uLmJpbmQodGhpcyksIERhaWx5UmV3YXJkTGlzdFZpZXcuQU5JTUFUSU9OX0RVUkFUSU9OICsgRGFpbHlSZXdhcmRMaXN0Vmlldy5BTklNQVRJT05fQlVGRkVSKTtcbiAgfVxuICByZXNldENvbnRlbnRQb3NpdGlvbigpIHtcbiAgICB0aGlzLl9jb250ZW50Tm9kZSAmJiBjYy5pc1ZhbGlkKHRoaXMuX2NvbnRlbnROb2RlKSAmJiAodGhpcy5fY29udGVudE5vZGUueCA9IHRoaXMuY2FsY3VsYXRlQ29udGVudFgoKSk7XG4gIH1cbiAgb25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLm5vZGUpIHtcbiAgICAgIHRoaXMubm9kZS5vZmYoXCJzY3JvbGwtYmVnYW5cIiwgdGhpcy5vblNjcm9sbEJlZ2FuLCB0aGlzKTtcbiAgICAgIHRoaXMubm9kZS5vZmYoXCJzY3JvbGxpbmdcIiwgdGhpcy5vblNjcm9sbGluZywgdGhpcyk7XG4gICAgICB0aGlzLm5vZGUub2ZmKFwic2Nyb2xsLWVuZGVkXCIsIHRoaXMub25TY3JvbGxFbmRlZCwgdGhpcyk7XG4gICAgICB0aGlzLm5vZGUub2ZmKFwidG91Y2gtY2FuY2VsXCIsIHRoaXMub25TY3JvbGxFbmRlZCwgdGhpcyk7XG4gICAgfVxuICAgIHRoaXMuX2NvbnRlbnROb2RlICYmIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLl9jb250ZW50Tm9kZSk7XG4gICAgdGhpcy5fbW9udGhEYXRhTGlzdCA9IFtdO1xuICAgIHRoaXMuX3Jld2FyZENlbGxJdGVtMCA9IG51bGw7XG4gICAgdGhpcy5fcmV3YXJkQ2VsbEl0ZW0xID0gbnVsbDtcbiAgICB0aGlzLl9yZXdhcmRDZWxsSXRlbTIgPSBudWxsO1xuICAgIHRoaXMuX2lzQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5faXNTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9jdXJyZW50TW9udGhJbmRleCA9IDA7XG4gICAgc3VwZXIub25EZXN0cm95LmNhbGwodGhpcyk7XG4gIH1cbn0iXX0=
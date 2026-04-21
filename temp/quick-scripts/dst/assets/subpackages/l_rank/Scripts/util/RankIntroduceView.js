
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rank/Scripts/util/RankIntroduceView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ce289xEe0hP/KumozhTgRVk', 'RankIntroduceView');
// subpackages/l_rank/Scripts/util/RankIntroduceView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIView_1 = require("../../../../Scripts/framework/ui/UIView");
var I18NStrings_1 = require("../../../../Scripts/framework/data/I18NStrings");
var RankModel_1 = require("../RankModel");
var CountdownComponent_1 = require("../component/CountdownComponent");
var BaseSprite_1 = require("../../../../Scripts/gamePlay/base/ui/BaseSprite");
var DGameBtnClick_1 = require("../../../../Scripts/dot/DGameBtnClick");
var Config_1 = require("../../../../Scripts/Config");
var RankEnums_1 = require("./RankEnums");
var CardUtil_1 = require("../../../../Scripts/gamePlay/user/CardUtil");
var UserModel_1 = require("../../../../Scripts/gamePlay/user/UserModel");
var RankIntroduceView = /** @class */ (function (_super) {
    __extends(RankIntroduceView, _super);
    function RankIntroduceView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._btnClose = null;
        _this._btnCollect = null;
        _this._labelCollect = null;
        _this._labelTitle = null;
        _this._labelDesc = null;
        _this._labelTime = null;
        _this._cardBgNode = null;
        _this._spriteCard = null;
        _this._isBtnCollect = false;
        return _this;
    }
    RankIntroduceView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._btnClose = cc.find("content/btn_close", this.node);
        this._btnCollect = cc.find("content/btn_collect", this.node);
        this._labelCollect = cc.find("content/lbl_Collect", this._btnCollect);
        this._labelTitle = cc.find("content/title", this.node);
        this._labelDesc = cc.find("content/cnt", this.node);
        this._labelTime = cc.find("content/time_node/time", this.node);
        this._cardBgNode = cc.find("content/mj_bg", this.node);
        this._spriteCard = cc.find("content/mj_bg/flower", this.node);
        this.registerButtons();
    };
    RankIntroduceView.prototype.registerButtons = function () {
        this._btnClose && this.OnButtonClick(this._btnClose, this.onCloseClick.bind(this));
        this._btnCollect && this.OnButtonClick(this._btnCollect, this.onCollectClick.bind(this));
    };
    RankIntroduceView.prototype.getMessageListeners = function () {
        var _t = {};
        _t[Config_1.EVT_MSG_KEY_EVENT_SHOW] = this.onGameShow.bind(this);
        _t[Config_1.EVT_MSG_KEY_EVENT_HIDE] = this.onGameHide.bind(this);
        return _t;
    };
    RankIntroduceView.prototype.onGameShow = function () {
        this.updateCountdown();
    };
    RankIntroduceView.prototype.onGameHide = function () { };
    RankIntroduceView.prototype.show = function (t) {
        mj.audioManager.playEffect(RankEnums_1.ERankAudioID.BlankCom);
        this._isBtnCollect = t.isBtnCollect;
        var e = this._isBtnCollect ? "Collect" : "OK", o = this._isBtnCollect ? "LeaderBoard_Start_GoTo" : "LeaderBoard_HowToPlay_Btn_OK", n = RankModel_1.default.getInstance().getCurBoardData();
        if (n) {
            var a = I18NStrings_1.default.get(n.Name, "Gardening Master");
            I18NStrings_1.default.setText(this._labelTitle, "Gardening Master", n.Name);
            I18NStrings_1.default.setText(this._labelDesc, "{0} has begun!\nCollect Golden Tiles, race up the leaderboard, and win amazing rewards!", "LeaderBoard_Start_Des", [a]);
            I18NStrings_1.default.setText(this._labelCollect, e, o);
            this.updateImgCard(this._spriteCard);
        }
        var i = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_special_mj_2"), r = i.path, c = i.bundleName, p = i.fromAtlas;
        BaseSprite_1.default.refreshWithNode(this._cardBgNode, r, p, false, c);
        this.updateCountdown();
    };
    RankIntroduceView.prototype.updateImgCard = function (t) {
        var e = UserModel_1.default.getInstance().getRankCardResName(), o = CardUtil_1.default.getAtlasPathAndBundleName(e), n = o.path, a = o.bundleName, i = o.fromAtlas;
        BaseSprite_1.default.refreshWithNode(t, n, i, false, a);
    };
    RankIntroduceView.prototype.getCDComp = function () {
        var t;
        return null === (t = this._labelTime) || void 0 === t ? void 0 : t.getComponent(CountdownComponent_1.default);
    };
    RankIntroduceView.prototype.updateCountdown = function () {
        var t = this._labelTime.getComponent(CountdownComponent_1.default), e = RankModel_1.default.getInstance().getLeftTime();
        if (e > 0) {
            t.setRemainTime(e, this.finishCountdown.bind(this));
        }
        else {
            this.finishCountdown();
        }
    };
    RankIntroduceView.prototype.finishCountdown = function () {
        this.delegate.close();
    };
    RankIntroduceView.prototype.onCloseClick = function () {
        this.delegate.close();
        DGameBtnClick_1.DotGameBtnClick.dotRank(DGameBtnClick_1.ERankClickType.ClickIntroduceClose);
    };
    RankIntroduceView.prototype.onCollectClick = function () {
        if (this._isBtnCollect) {
            this.collect();
            DGameBtnClick_1.DotGameBtnClick.dotRank(DGameBtnClick_1.ERankClickType.ClickIntroduceCollect);
        }
        this.delegate.close();
    };
    RankIntroduceView.prototype.collect = function () {
        this.delegate.collect();
    };
    RankIntroduceView.prototype.setContent = function () { };
    RankIntroduceView.prototype.onDestroy = function () {
        _super.prototype.onDestroy && _super.prototype.onDestroy.call(this);
    };
    RankIntroduceView.prefabUrl = "prefabs/rank/RankIntroduceView";
    RankIntroduceView.bundleName = "mainRes";
    __decorate([
        mj.traitEvent("RankIntroVw_show")
    ], RankIntroduceView.prototype, "show", null);
    __decorate([
        mj.traitEvent("RankIntroVw_updImgCard")
    ], RankIntroduceView.prototype, "updateImgCard", null);
    __decorate([
        mj.traitEvent("RankIntroVw_closeClk")
    ], RankIntroduceView.prototype, "onCloseClick", null);
    __decorate([
        mj.traitEvent("RankIntroVw_collect")
    ], RankIntroduceView.prototype, "collect", null);
    RankIntroduceView = __decorate([
        mj.class
    ], RankIntroduceView);
    return RankIntroduceView;
}(UIView_1.default));
exports.default = RankIntroduceView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmsvU2NyaXB0cy91dGlsL1JhbmtJbnRyb2R1Y2VWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrRUFBNkQ7QUFDN0QsOEVBQXlFO0FBQ3pFLDBDQUFxQztBQUNyQyxzRUFBaUU7QUFDakUsOEVBQXlFO0FBQ3pFLHVFQUF3RjtBQUN4RixxREFBNEY7QUFDNUYseUNBQTJDO0FBQzNDLHVFQUFrRTtBQUNsRSx5RUFBb0U7QUFFcEU7SUFBK0MscUNBQU07SUFBckQ7UUFBQSxxRUF3R0M7UUF2R0MsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixpQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixtQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixpQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixpQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixpQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixtQkFBYSxHQUFHLEtBQUssQ0FBQzs7SUErRnhCLENBQUM7SUE1RkMsa0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsSUFBSSxD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LHNCQUFzQixDQUFDO3lEQUlyQztJQVNEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztvREFHcEM7SUFuR2tCLGlCQUFpQjtRQURyQyxFQUFFLENBQUMsS0FBSztPQUNZLGlCQUFpQixDQXdHckM7SUFBRCx3QkFBQztDQXhHRCxBQXdHQyxDQXhHOEMsZ0JBQU0sR0F3R3BEO2tCQXhHb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJVmlldyBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay91aS9VSVZpZXcnO1xuaW1wb3J0IEkxOE5TdHJpbmdzIGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvSTE4TlN0cmluZ3MnO1xuaW1wb3J0IFJhbmtNb2RlbCBmcm9tICcuLi9SYW5rTW9kZWwnO1xuaW1wb3J0IENvdW50ZG93bkNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQvQ291bnRkb3duQ29tcG9uZW50JztcbmltcG9ydCBCYXNlU3ByaXRlIGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3ByaXRlJztcbmltcG9ydCB7IERvdEdhbWVCdG5DbGljaywgRVJhbmtDbGlja1R5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2RvdC9ER2FtZUJ0bkNsaWNrJztcbmltcG9ydCB7IEVWVF9NU0dfS0VZX0VWRU5UX1NIT1csIEVWVF9NU0dfS0VZX0VWRU5UX0hJREUgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL0NvbmZpZyc7XG5pbXBvcnQgeyBFUmFua0F1ZGlvSUQgfSBmcm9tICcuL1JhbmtFbnVtcyc7XG5pbXBvcnQgQ2FyZFV0aWwgZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL0NhcmRVdGlsJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmtJbnRyb2R1Y2VWaWV3IGV4dGVuZHMgVUlWaWV3IHtcbiAgX2J0bkNsb3NlID0gbnVsbDtcbiAgX2J0bkNvbGxlY3QgPSBudWxsO1xuICBfbGFiZWxDb2xsZWN0ID0gbnVsbDtcbiAgX2xhYmVsVGl0bGUgPSBudWxsO1xuICBfbGFiZWxEZXNjID0gbnVsbDtcbiAgX2xhYmVsVGltZSA9IG51bGw7XG4gIF9jYXJkQmdOb2RlID0gbnVsbDtcbiAgX3Nwcml0ZUNhcmQgPSBudWxsO1xuICBfaXNCdG5Db2xsZWN0ID0gZmFsc2U7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvcmFuay9SYW5rSW50cm9kdWNlVmlld1wiO1xuICBzdGF0aWMgYnVuZGxlTmFtZSA9IFwibWFpblJlc1wiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fYnRuQ2xvc2UgPSBjYy5maW5kKFwiY29udGVudC9idG5fY2xvc2VcIiwgdGhpcy5ub2RlKTtcbiAgICB0aGlzLl9idG5Db2xsZWN0ID0gY2MuZmluZChcImNvbnRlbnQvYnRuX2NvbGxlY3RcIiwgdGhpcy5ub2RlKTtcbiAgICB0aGlzLl9sYWJlbENvbGxlY3QgPSBjYy5maW5kKFwiY29udGVudC9sYmxfQ29sbGVjdFwiLCB0aGlzLl9idG5Db2xsZWN0KTtcbiAgICB0aGlzLl9sYWJlbFRpdGxlID0gY2MuZmluZChcImNvbnRlbnQvdGl0bGVcIiwgdGhpcy5ub2RlKTtcbiAgICB0aGlzLl9sYWJlbERlc2MgPSBjYy5maW5kKFwiY29udGVudC9jbnRcIiwgdGhpcy5ub2RlKTtcbiAgICB0aGlzLl9sYWJlbFRpbWUgPSBjYy5maW5kKFwiY29udGVudC90aW1lX25vZGUvdGltZVwiLCB0aGlzLm5vZGUpO1xuICAgIHRoaXMuX2NhcmRCZ05vZGUgPSBjYy5maW5kKFwiY29udGVudC9tal9iZ1wiLCB0aGlzLm5vZGUpO1xuICAgIHRoaXMuX3Nwcml0ZUNhcmQgPSBjYy5maW5kKFwiY29udGVudC9tal9iZy9mbG93ZXJcIiwgdGhpcy5ub2RlKTtcbiAgICB0aGlzLnJlZ2lzdGVyQnV0dG9ucygpO1xuICB9XG4gIHJlZ2lzdGVyQnV0dG9ucygpIHtcbiAgICB0aGlzLl9idG5DbG9zZSAmJiB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5fYnRuQ2xvc2UsIHRoaXMub25DbG9zZUNsaWNrLmJpbmQodGhpcykpO1xuICAgIHRoaXMuX2J0bkNvbGxlY3QgJiYgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMuX2J0bkNvbGxlY3QsIHRoaXMub25Db2xsZWN0Q2xpY2suYmluZCh0aGlzKSk7XG4gIH1cbiAgZ2V0TWVzc2FnZUxpc3RlbmVycygpIHtcbiAgICB2YXIgX3QgPSB7fTtcbiAgICBfdFtFVlRfTVNHX0tFWV9FVkVOVF9TSE9XXSA9IHRoaXMub25HYW1lU2hvdy5iaW5kKHRoaXMpO1xuICAgIF90W0VWVF9NU0dfS0VZX0VWRU5UX0hJREVdID0gdGhpcy5vbkdhbWVIaWRlLmJpbmQodGhpcyk7XG4gICAgcmV0dXJuIF90O1xuICB9XG4gIG9uR2FtZVNob3coKSB7XG4gICAgdGhpcy51cGRhdGVDb3VudGRvd24oKTtcbiAgfVxuICBvbkdhbWVIaWRlKCkge31cbiAgQG1qLnRyYWl0RXZlbnQoXCJSYW5rSW50cm9Wd19zaG93XCIpXG4gIHNob3codCkge1xuICAgIG1qLmF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KEVSYW5rQXVkaW9JRC5CbGFua0NvbSk7XG4gICAgdGhpcy5faXNCdG5Db2xsZWN0ID0gdC5pc0J0bkNvbGxlY3Q7XG4gICAgdmFyIGUgPSB0aGlzLl9pc0J0bkNvbGxlY3QgPyBcIkNvbGxlY3RcIiA6IFwiT0tcIixcbiAgICAgIG8gPSB0aGlzLl9pc0J0bkNvbGxlY3QgPyBcIkxlYWRlckJvYXJkX1N0YXJ0X0dvVG9cIiA6IFwiTGVhZGVyQm9hcmRfSG93VG9QbGF5X0J0bl9PS1wiLFxuICAgICAgbiA9IFJhbmtNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1ckJvYXJkRGF0YSgpO1xuICAgIGlmIChuKSB7XG4gICAgICB2YXIgYSA9IEkxOE5TdHJpbmdzLmdldChuLk5hbWUsIFwiR2FyZGVuaW5nIE1hc3RlclwiKTtcbiAgICAgIEkxOE5TdHJpbmdzLnNldFRleHQodGhpcy5fbGFiZWxUaXRsZSwgXCJHYXJkZW5pbmcgTWFzdGVyXCIsIG4uTmFtZSk7XG4gICAgICBJMThOU3RyaW5ncy5zZXRUZXh0KHRoaXMuX2xhYmVsRGVzYywgXCJ7MH0gaGFzIGJlZ3VuIVxcbkNvbGxlY3QgR29sZGVuIFRpbGVzLCByYWNlIHVwIHRoZSBsZWFkZXJib2FyZCwgYW5kIHdpbiBhbWF6aW5nIHJld2FyZHMhXCIsIFwiTGVhZGVyQm9hcmRfU3RhcnRfRGVzXCIsIFthXSk7XG4gICAgICBJMThOU3RyaW5ncy5zZXRUZXh0KHRoaXMuX2xhYmVsQ29sbGVjdCwgZSwgbyk7XG4gICAgICB0aGlzLnVwZGF0ZUltZ0NhcmQodGhpcy5fc3ByaXRlQ2FyZCk7XG4gICAgfVxuICAgIHZhciBpID0gQ2FyZFV0aWwuZ2V0QXRsYXNQYXRoQW5kQnVuZGxlTmFtZShcImdhbWVwbGF5X3NwZWNpYWxfbWpfMlwiKSxcbiAgICAgIHIgPSBpLnBhdGgsXG4gICAgICBjID0gaS5idW5kbGVOYW1lLFxuICAgICAgcCA9IGkuZnJvbUF0bGFzO1xuICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKHRoaXMuX2NhcmRCZ05vZGUsIHIsIHAsIGZhbHNlLCBjKTtcbiAgICB0aGlzLnVwZGF0ZUNvdW50ZG93bigpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiUmFua0ludHJvVndfdXBkSW1nQ2FyZFwiKVxuICB1cGRhdGVJbWdDYXJkKHQpIHtcbiAgICB2YXIgZSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldFJhbmtDYXJkUmVzTmFtZSgpLFxuICAgICAgbyA9IENhcmRVdGlsLmdldEF0bGFzUGF0aEFuZEJ1bmRsZU5hbWUoZSksXG4gICAgICBuID0gby5wYXRoLFxuICAgICAgYSA9IG8uYnVuZGxlTmFtZSxcbiAgICAgIGkgPSBvLmZyb21BdGxhcztcbiAgICBCYXNlU3ByaXRlLnJlZnJlc2hXaXRoTm9kZSh0LCBuLCBpLCBmYWxzZSwgYSk7XG4gIH1cbiAgZ2V0Q0RDb21wKCkge1xuICAgIHZhciB0O1xuICAgIHJldHVybiBudWxsID09PSAodCA9IHRoaXMuX2xhYmVsVGltZSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5nZXRDb21wb25lbnQoQ291bnRkb3duQ29tcG9uZW50KTtcbiAgfVxuICB1cGRhdGVDb3VudGRvd24oKSB7XG4gICAgdmFyIHQgPSB0aGlzLl9sYWJlbFRpbWUuZ2V0Q29tcG9uZW50KENvdW50ZG93bkNvbXBvbmVudCksXG4gICAgICBlID0gUmFua01vZGVsLmdldEluc3RhbmNlKCkuZ2V0TGVmdFRpbWUoKTtcbiAgICBpZiAoZSA+IDApIHtcbiAgICAgIHQuc2V0UmVtYWluVGltZShlLCB0aGlzLmZpbmlzaENvdW50ZG93bi5iaW5kKHRoaXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maW5pc2hDb3VudGRvd24oKTtcbiAgICB9XG4gIH1cbiAgZmluaXNoQ291bnRkb3duKCkge1xuICAgIHRoaXMuZGVsZWdhdGUuY2xvc2UoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJhbmtJbnRyb1Z3X2Nsb3NlQ2xrXCIpXG4gIG9uQ2xvc2VDbGljaygpIHtcbiAgICB0aGlzLmRlbGVnYXRlLmNsb3NlKCk7XG4gICAgRG90R2FtZUJ0bkNsaWNrLmRvdFJhbmsoRVJhbmtDbGlja1R5cGUuQ2xpY2tJbnRyb2R1Y2VDbG9zZSk7XG4gIH1cbiAgb25Db2xsZWN0Q2xpY2soKSB7XG4gICAgaWYgKHRoaXMuX2lzQnRuQ29sbGVjdCkge1xuICAgICAgdGhpcy5jb2xsZWN0KCk7XG4gICAgICBEb3RHYW1lQnRuQ2xpY2suZG90UmFuayhFUmFua0NsaWNrVHlwZS5DbGlja0ludHJvZHVjZUNvbGxlY3QpO1xuICAgIH1cbiAgICB0aGlzLmRlbGVnYXRlLmNsb3NlKCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSYW5rSW50cm9Wd19jb2xsZWN0XCIpXG4gIGNvbGxlY3QoKSB7XG4gICAgdGhpcy5kZWxlZ2F0ZS5jb2xsZWN0KCk7XG4gIH1cbiAgc2V0Q29udGVudCgpIHt9XG4gIG9uRGVzdHJveSgpIHtcbiAgICBzdXBlci5vbkRlc3Ryb3kgJiYgc3VwZXIub25EZXN0cm95LmNhbGwodGhpcyk7XG4gIH1cbn0iXX0=

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/tile2game/view/Tile2NodeTopView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '742587oxV9NHJY3cg1n1zGQ', 'Tile2NodeTopView');
// Scripts/gamePlay/tile2game/view/Tile2NodeTopView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../core/simulator/constant/GameTypeEnums");
var Tile2ScoreItem_1 = require("../../../core/view/items/Tile2ScoreItem");
var ControllerManager_1 = require("../../../framework/manager/ControllerManager");
var BaseUI_1 = require("../../../framework/ui/BaseUI");
var JumpManager_1 = require("../../../base/jump/JumpManager");
var DGameBtnClick_1 = require("../../../dot/DGameBtnClick");
var DGamePageShow_1 = require("../../../dot/DGamePageShow");
var Tile2NodeTopView = /** @class */ (function (_super) {
    __extends(Tile2NodeTopView, _super);
    function Tile2NodeTopView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._lblLevel = null;
        _this._lblMatchNum = null;
        _this._btnBack = null;
        _this._btnSettings = null;
        _this._scoreItem = null;
        return _this;
    }
    Object.defineProperty(Tile2NodeTopView.prototype, "btnBack", {
        get: function () {
            return this._btnBack;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2NodeTopView.prototype, "btnSettings", {
        get: function () {
            return this._btnSettings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2NodeTopView.prototype, "scoreItem", {
        get: function () {
            return this._scoreItem;
        },
        enumerable: false,
        configurable: true
    });
    Tile2NodeTopView.prototype.onLoad = function () {
        var t, o;
        _super.prototype.onLoad.call(this);
        this._lblLevel = null === (t = this.node.getChildByName("labelLevel")) || void 0 === t ? void 0 : t.getComponent(cc.Label);
        this._lblMatchNum = null === (o = this.node.getChildByName("labelCanMatchNum")) || void 0 === o ? void 0 : o.getComponent(cc.Label);
        this._btnBack = this.node.getChildByName("btnBack");
        this._btnSettings = this.node.getChildByName("btnSettings");
        if (this._btnBack) {
            this.OnButtonClick(this._btnBack, this.onBtnBack.bind(this));
            this._btnBack.active = false;
        }
        this._btnSettings && this.OnButtonClick(this._btnSettings, this.onBtnSettings.bind(this));
        var n = this.node.getChildByName("nodeScore");
        n && (this._scoreItem = n.getComponent(Tile2ScoreItem_1.default) || n.addComponent(Tile2ScoreItem_1.default));
    };
    Tile2NodeTopView.prototype.updateLevel = function (e) {
        this._lblLevel && (this._lblLevel.string = e.toString());
    };
    Tile2NodeTopView.prototype.updateMatchNum = function (e) {
        this._lblMatchNum && (this._lblMatchNum.string = e.toString());
    };
    Tile2NodeTopView.prototype.updateScore = function (e, t, o) {
        var n;
        null === (n = this._scoreItem) || void 0 === n || n.updateScore(e, t, o);
    };
    Tile2NodeTopView.prototype.resetScore = function () {
        var e;
        null === (e = this._scoreItem) || void 0 === e || e.resetForRestart();
    };
    Tile2NodeTopView.prototype.onBtnBack = function () {
        var e, t;
        if (null === (t = null === (e = this.delegate) || void 0 === e ? void 0 : e.isDisplaying) || void 0 === t || !t.call(e)) {
            mj.audioManager.stopAllEffect();
            var o = ControllerManager_1.default.getInstance().getTopSceneController();
            if (o && o.gameType === GameTypeEnums_1.MjGameType.Travel)
                ControllerManager_1.default.getInstance().pushViewByController("TravelMapController", {
                    isReplace: true
                });
            else if (o && o.gameType === GameTypeEnums_1.MjGameType.DailyChallenge)
                ControllerManager_1.default.getInstance().pushViewByController("DailyController", {
                    isReplace: true,
                    isShowAction: false,
                    isReuse: false
                });
            else {
                JumpManager_1.default.getInstance().jumpToHall();
                o && o.gameType === GameTypeEnums_1.MjGameType.Normal && DGamePageShow_1.DotGamePageShow.dot(DGamePageShow_1.EPageShowType.LevelToMainPage);
            }
            DGameBtnClick_1.DotGameBtnClick.dotGame(DGameBtnClick_1.EBoardClickType.Escape);
        }
    };
    Tile2NodeTopView.prototype.onBtnSettings = function () {
        var e, t;
        if (null === (t = null === (e = this.delegate) || void 0 === e ? void 0 : e.isDisplaying) || void 0 === t || !t.call(e)) {
            ControllerManager_1.default.getInstance().pushViewByController("UISettingsDialogController", {});
            DGameBtnClick_1.DotGameBtnClick.dotGame(DGameBtnClick_1.EBoardClickType.Setting);
        }
    };
    Tile2NodeTopView.prefabUrl = "prefabs/game/Tile2nodeTop";
    __decorate([
        mj.traitEvent("T2TopVw_onLoad")
    ], Tile2NodeTopView.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("T2TopVw_onBtnBack")
    ], Tile2NodeTopView.prototype, "onBtnBack", null);
    Tile2NodeTopView = __decorate([
        mj.class
    ], Tile2NodeTopView);
    return Tile2NodeTopView;
}(BaseUI_1.default));
exports.default = Tile2NodeTopView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L3RpbGUyZ2FtZS92aWV3L1RpbGUyTm9kZVRvcFZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdGQUE0RTtBQUM1RSwwRUFBcUU7QUFDckUsa0ZBQTZFO0FBQzdFLHVEQUFrRDtBQUNsRCw4REFBeUQ7QUFDekQsNERBQThFO0FBQzlFLDREQUE0RTtBQUU1RTtJQUE4QyxvQ0FBTTtJQUFwRDtRQUFBLHFFQXdFQztRQXZFQyxlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGtCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsa0JBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsZ0JBQVUsR0FBRyxJQUFJLENBQUM7O0lBbUVwQixDQUFDO0lBakVDLHNCQUFJLHFDQUFPO2FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSx5Q0FBVzthQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksdUNBQVM7YUFBYjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUVELGlDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFD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QyxDQUFDLEVBQUU7WUFDdkgsMkJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsb0JBQW9CLENBQUMsNEJBQTRCLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDdkYsK0JBQWUsQ0FBQyxPQUFPLENBQUMsK0JBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNsRDtJQUNILENBQUM7SUFqRU0sMEJBQVMsR0FBRywyQkFBMkIsQ0FBQztJQVcvQztRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUM7a0RBZS9CO0lBZ0JEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQztxREFrQmxDO0lBaEVrQixnQkFBZ0I7UUFEcEMsRUFBRSxDQUFDLEtBQUs7T0FDWSxnQkFBZ0IsQ0F3RXBDO0lBQUQsdUJBQUM7Q0F4RUQsQUF3RUMsQ0F4RTZDLGdCQUFNLEdBd0VuRDtrQkF4RW9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBUaWxlMlNjb3JlSXRlbSBmcm9tICcuLi8uLi8uLi9jb3JlL3ZpZXcvaXRlbXMvVGlsZTJTY29yZUl0ZW0nO1xuaW1wb3J0IENvbnRyb2xsZXJNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL0NvbnRyb2xsZXJNYW5hZ2VyJztcbmltcG9ydCBCYXNlVUkgZnJvbSAnLi4vLi4vLi4vZnJhbWV3b3JrL3VpL0Jhc2VVSSc7XG5pbXBvcnQgSnVtcE1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vYmFzZS9qdW1wL0p1bXBNYW5hZ2VyJztcbmltcG9ydCB7IERvdEdhbWVCdG5DbGljaywgRUJvYXJkQ2xpY2tUeXBlIH0gZnJvbSAnLi4vLi4vLi4vZG90L0RHYW1lQnRuQ2xpY2snO1xuaW1wb3J0IHsgRG90R2FtZVBhZ2VTaG93LCBFUGFnZVNob3dUeXBlIH0gZnJvbSAnLi4vLi4vLi4vZG90L0RHYW1lUGFnZVNob3cnO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlMk5vZGVUb3BWaWV3IGV4dGVuZHMgQmFzZVVJIHtcbiAgX2xibExldmVsID0gbnVsbDtcbiAgX2xibE1hdGNoTnVtID0gbnVsbDtcbiAgX2J0bkJhY2sgPSBudWxsO1xuICBfYnRuU2V0dGluZ3MgPSBudWxsO1xuICBfc2NvcmVJdGVtID0gbnVsbDtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFicy9nYW1lL1RpbGUybm9kZVRvcFwiO1xuICBnZXQgYnRuQmFjaygpIHtcbiAgICByZXR1cm4gdGhpcy5fYnRuQmFjaztcbiAgfVxuICBnZXQgYnRuU2V0dGluZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J0blNldHRpbmdzO1xuICB9XG4gIGdldCBzY29yZUl0ZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njb3JlSXRlbTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlQyVG9wVndfb25Mb2FkXCIpXG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgdCwgbztcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9sYmxMZXZlbCA9IG51bGwgPT09ICh0ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibGFiZWxMZXZlbFwiKSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgIHRoaXMuX2xibE1hdGNoTnVtID0gbnVsbCA9PT0gKG8gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJlbENhbk1hdGNoTnVtXCIpKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgdGhpcy5fYnRuQmFjayA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bkJhY2tcIik7XG4gICAgdGhpcy5fYnRuU2V0dGluZ3MgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5TZXR0aW5nc1wiKTtcbiAgICBpZiAodGhpcy5fYnRuQmFjaykge1xuICAgICAgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMuX2J0bkJhY2ssIHRoaXMub25CdG5CYWNrLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5fYnRuQmFjay5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5fYnRuU2V0dGluZ3MgJiYgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMuX2J0blNldHRpbmdzLCB0aGlzLm9uQnRuU2V0dGluZ3MuYmluZCh0aGlzKSk7XG4gICAgdmFyIG4gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJub2RlU2NvcmVcIik7XG4gICAgbiAmJiAodGhpcy5fc2NvcmVJdGVtID0gbi5nZXRDb21wb25lbnQoVGlsZTJTY29yZUl0ZW0pIHx8IG4uYWRkQ29tcG9uZW50KFRpbGUyU2NvcmVJdGVtKSk7XG4gIH1cbiAgdXBkYXRlTGV2ZWwoZSkge1xuICAgIHRoaXMuX2xibExldmVsICYmICh0aGlzLl9sYmxMZXZlbC5zdHJpbmcgPSBlLnRvU3RyaW5nKCkpO1xuICB9XG4gIHVwZGF0ZU1hdGNoTnVtKGUpIHtcbiAgICB0aGlzLl9sYmxNYXRjaE51bSAmJiAodGhpcy5fbGJsTWF0Y2hOdW0uc3RyaW5nID0gZS50b1N0cmluZygpKTtcbiAgfVxuICB1cGRhdGVTY29yZShlLCB0LCBvKSB7XG4gICAgdmFyIG47XG4gICAgbnVsbCA9PT0gKG4gPSB0aGlzLl9zY29yZUl0ZW0pIHx8IHZvaWQgMCA9PT0gbiB8fCBuLnVwZGF0ZVNjb3JlKGUsIHQsIG8pO1xuICB9XG4gIHJlc2V0U2NvcmUoKSB7XG4gICAgdmFyIGU7XG4gICAgbnVsbCA9PT0gKGUgPSB0aGlzLl9zY29yZUl0ZW0pIHx8IHZvaWQgMCA9PT0gZSB8fCBlLnJlc2V0Rm9yUmVzdGFydCgpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVDJUb3BWd19vbkJ0bkJhY2tcIilcbiAgb25CdG5CYWNrKCkge1xuICAgIHZhciBlLCB0O1xuICAgIGlmIChudWxsID09PSAodCA9IG51bGwgPT09IChlID0gdGhpcy5kZWxlZ2F0ZSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5pc0Rpc3BsYXlpbmcpIHx8IHZvaWQgMCA9PT0gdCB8fCAhdC5jYWxsKGUpKSB7XG4gICAgICBtai5hdWRpb01hbmFnZXIuc3RvcEFsbEVmZmVjdCgpO1xuICAgICAgdmFyIG8gPSBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldFRvcFNjZW5lQ29udHJvbGxlcigpO1xuICAgICAgaWYgKG8gJiYgby5nYW1lVHlwZSA9PT0gTWpHYW1lVHlwZS5UcmF2ZWwpIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFZpZXdCeUNvbnRyb2xsZXIoXCJUcmF2ZWxNYXBDb250cm9sbGVyXCIsIHtcbiAgICAgICAgaXNSZXBsYWNlOiB0cnVlXG4gICAgICB9KTtlbHNlIGlmIChvICYmIG8uZ2FtZVR5cGUgPT09IE1qR2FtZVR5cGUuRGFpbHlDaGFsbGVuZ2UpIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFZpZXdCeUNvbnRyb2xsZXIoXCJEYWlseUNvbnRyb2xsZXJcIiwge1xuICAgICAgICBpc1JlcGxhY2U6IHRydWUsXG4gICAgICAgIGlzU2hvd0FjdGlvbjogZmFsc2UsXG4gICAgICAgIGlzUmV1c2U6IGZhbHNlXG4gICAgICB9KTtlbHNlIHtcbiAgICAgICAgSnVtcE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5qdW1wVG9IYWxsKCk7XG4gICAgICAgIG8gJiYgby5nYW1lVHlwZSA9PT0gTWpHYW1lVHlwZS5Ob3JtYWwgJiYgRG90R2FtZVBhZ2VTaG93LmRvdChFUGFnZVNob3dUeXBlLkxldmVsVG9NYWluUGFnZSk7XG4gICAgICB9XG4gICAgICBEb3RHYW1lQnRuQ2xpY2suZG90R2FtZShFQm9hcmRDbGlja1R5cGUuRXNjYXBlKTtcbiAgICB9XG4gIH1cbiAgb25CdG5TZXR0aW5ncygpIHtcbiAgICB2YXIgZSwgdDtcbiAgICBpZiAobnVsbCA9PT0gKHQgPSBudWxsID09PSAoZSA9IHRoaXMuZGVsZWdhdGUpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuaXNEaXNwbGF5aW5nKSB8fCB2b2lkIDAgPT09IHQgfHwgIXQuY2FsbChlKSkge1xuICAgICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIlVJU2V0dGluZ3NEaWFsb2dDb250cm9sbGVyXCIsIHt9KTtcbiAgICAgIERvdEdhbWVCdG5DbGljay5kb3RHYW1lKEVCb2FyZENsaWNrVHlwZS5TZXR0aW5nKTtcbiAgICB9XG4gIH1cbn0iXX0=
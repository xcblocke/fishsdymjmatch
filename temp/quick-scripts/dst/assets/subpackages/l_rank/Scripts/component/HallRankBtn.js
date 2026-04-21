
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rank/Scripts/component/HallRankBtn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1aedbHlzhpNrp4oDbSa95Ok', 'HallRankBtn');
// subpackages/l_rank/Scripts/component/HallRankBtn.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../../Scripts/framework/ui/BaseUI");
var ControllerManager_1 = require("../../../../Scripts/framework/manager/ControllerManager");
var CountdownComponent_1 = require("./CountdownComponent");
var RankModel_1 = require("../RankModel");
var I18NStrings_1 = require("../../../../Scripts/framework/data/I18NStrings");
var DGameBtnClick_1 = require("../../../../Scripts/dot/DGameBtnClick");
var Config_1 = require("../../../../Scripts/Config");
var BaseSprite_1 = require("../../../../Scripts/gamePlay/base/ui/BaseSprite");
var BaseSpine_1 = require("../../../../Scripts/gamePlay/base/ui/BaseSpine");
var CardUtil_1 = require("../../../../Scripts/gamePlay/user/CardUtil");
var UserModel_1 = require("../../../../Scripts/gamePlay/user/UserModel");
var HallRankBtn = /** @class */ (function (_super) {
    __extends(HallRankBtn, _super);
    function HallRankBtn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._labelTime = null;
        _this._labelRankNode = null;
        _this._cardSprNode = null;
        _this._aniSpineDown = null;
        _this._aniSpineUp = null;
        _this._animProxy = null;
        return _this;
    }
    HallRankBtn.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.OnButtonClick(this.node, this.onBtnClick.bind(this));
        this._labelTime = this.node.getChildByName("Bg").getChildByName("Label");
        this._labelRankNode = this.node.getChildByName("Bg").getChildByName("Rank");
        this._cardSprNode = this.node.getChildByName("bg").getChildByName("Card");
        this._aniSpineDown = this.node.getChildByName("bg").getChildByName("down").getComponent(sp.Skeleton);
        this._aniSpineUp = this.node.getChildByName("bg").getChildByName("up").getComponent(sp.Skeleton);
        this.initComponents();
        this.init();
    };
    HallRankBtn.prototype.onEnable = function () {
        _super.prototype.onEnable && _super.prototype.onEnable.call(this);
        this.dispatchEvent("MsgEnableHomeBtn", {
            type: "Rank",
            node: this.node
        });
    };
    HallRankBtn.prototype.onDisable = function () {
        _super.prototype.onDisable && _super.prototype.onDisable.call(this);
    };
    HallRankBtn.prototype.initComponents = function () {
        var t = this;
        this._animProxy = BaseSpine_1.default.refreshWithNode(this._aniSpineDown.node);
        this._animProxy.reset("");
        this._animProxy.markReady("");
        this._animProxy.attachNode("photo", function () {
            return t._cardSprNode;
        });
    };
    HallRankBtn.prototype.init = function () {
        this.updateAll();
    };
    HallRankBtn.prototype.updateRemainTime = function () {
        var t;
        if (cc.isValid(this._labelTime)) {
            var e = RankModel_1.default.getInstance().getLeftTime();
            if (e > 0) {
                null === (t = this._labelTime.getComponent(CountdownComponent_1.default)) || void 0 === t || t.setRemainTime(e, this.finishCountdown.bind(this));
            }
            else {
                this.closeOutCD();
            }
        }
    };
    HallRankBtn.prototype.updateAll = function () {
        this.updateRemainTime();
        this.updateRank();
        this.updateImgCard(this._cardSprNode);
    };
    HallRankBtn.prototype.updateImgCard = function (t) {
        if (cc.isValid(t)) {
            var e = UserModel_1.default.getInstance().getRankCardResName(), o = CardUtil_1.default.getAtlasPathAndBundleName(e), n = o.path, a = o.bundleName, i = o.fromAtlas;
            BaseSprite_1.default.refreshWithNode(t, n, i, null, a);
        }
    };
    HallRankBtn.prototype.closeOutCD = function () {
        this.node.destroy();
    };
    HallRankBtn.prototype.finishCountdown = function () {
        this.node.destroy();
    };
    HallRankBtn.prototype.updateRank = function () {
        if (cc.isValid(this._labelRankNode))
            if (RankModel_1.default.getInstance().isOnList()) {
                var t = RankModel_1.default.getInstance().getSelfRank();
                I18NStrings_1.default.setText(this._labelRankNode, t + "", "LeaderBoard_Entrance_Num", [t]);
            }
            else
                this._labelRankNode.getComponent(cc.Label).string = "";
    };
    HallRankBtn.prototype.onBtnClick = function () {
        DGameBtnClick_1.DotGameBtnClick.dotRank(DGameBtnClick_1.ERankClickType.ClickHallRank);
        this.dispatchEvent("RankModel_updTime");
        ControllerManager_1.default.getInstance().pushViewByController("RankController", {
            isReuse: true,
            isShowAction: false
        });
    };
    HallRankBtn.prototype.getMessageListeners = function () {
        var _t = {};
        _t[Config_1.EVT_MSG_KEY_EVENT_SHOW] = this.onGameShow.bind(this);
        _t[Config_1.EVT_MSG_KEY_EVENT_HIDE] = this.onGameHide.bind(this);
        return _t;
    };
    HallRankBtn.prototype.onGameShow = function () {
        this.updateRemainTime();
    };
    HallRankBtn.prototype.onGameHide = function () { };
    HallRankBtn.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
    };
    HallRankBtn.prefabUrl = "prefabs/rank/HallRankBtn";
    __decorate([
        mj.traitEvent("RankBtn_onLoad")
    ], HallRankBtn.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("RankBtn_initComp")
    ], HallRankBtn.prototype, "initComponents", null);
    __decorate([
        mj.traitEvent("RankBtn_updateAll")
    ], HallRankBtn.prototype, "updateAll", null);
    __decorate([
        mj.traitEvent("RankBtn_updImgCard")
    ], HallRankBtn.prototype, "updateImgCard", null);
    __decorate([
        mj.traitEvent("RankBtn_closeOutCD")
    ], HallRankBtn.prototype, "closeOutCD", null);
    __decorate([
        mj.traitEvent("RankBtn_finishCD")
    ], HallRankBtn.prototype, "finishCountdown", null);
    __decorate([
        mj.traitEvent("RankBtn_click")
    ], HallRankBtn.prototype, "onBtnClick", null);
    HallRankBtn = __decorate([
        mj.class
    ], HallRankBtn);
    return HallRankBtn;
}(BaseUI_1.default));
exports.default = HallRankBtn;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmsvU2NyaXB0cy9jb21wb25lbnQvSGFsbFJhbmtCdG4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtFQUE2RDtBQUM3RCw2RkFBd0Y7QUFDeEYsMkRBQXNEO0FBQ3RELDBDQUFxQztBQUNyQyw4RUFBeUU7QUFDekUsdUVBQXdGO0FBQ3hGLHFEQUE0RjtBQUM1Riw4RUFBeUU7QUFDekUsNEVBQXVFO0FBQ3ZFLHVFQUFrRTtBQUNsRSx5RUFBb0U7QUFFcEU7SUFBeUMsK0JBQU07SUFBL0M7UUFBQSxxRUEyR0M7UUExR0MsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsa0JBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsbUJBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsZ0JBQVUsR0FBRyxJQUFJLENBQUM7O0lBcUdwQixDQUFDO0lBbEdDLDRCQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUNELDhCQUFRLEdBQVI7UUFDRSxpQkFBTSxRQUFRLElBQUksaUJBQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFO1lBQ3JDLElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1NBQ2hCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCwrQkFBUyxHQUFUO1FBQ0UsaUJBQU0sU0FBUyxJQUFJLGlCQUFNLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELG9DQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLENBQUMsVUFBVSxHQUFHLG1CQUFTLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO1lBQ2xDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCwwQkFBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFDRCxzQ0FBZ0IsR0FBaEI7UUFDRSxJQUFJLENBQUMsQ0FBQztRQUNOLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDL0IsSUFBSSxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM5QyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ1QsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLDRCQUFrQixDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUN4STtpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDbkI7U0FDRjtJQUNILENBQUM7SUFFRCwrQkFBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxtQ0FBYSxHQUFiLFVBQWMsQ0FBQztRQUNiLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGtCQUFrQixFQUFFLEVBQ2xELENBQUMsR0FBRyxrQkFBUSxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxFQUN6QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFDVixDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFDaEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDbEIsb0JBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzlDO0lBQ0gsQ0FBQztJQUVELGdDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxxQ0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBQ0QsZ0NBQVUsR0FBVjtRQUNFLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQUUsSUFBSSxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFO2dCQUMzRSxJQUFJLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUM5QyxxQkFBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsMEJBQTBCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ25GOztnQkFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNoRSxDQUFDO0lBRUQsZ0NBQVUsR0FBVjtRQUNFLCtCQUFlLENBQUMsT0FBTyxDQUFDLDhCQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3hDLDJCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixFQUFFO1lBQ3JFLE9BQU8sRUFBRSxJQUFJO1lBQ2IsWUFBWSxFQUFFLEtBQUs7U0FDcEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHlDQUFtQixHQUFuQjtRQUNFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNaLEVBQUUsQ0FBQywrQkFBc0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hELEVBQUUsQ0FBQywrQkFBc0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUNELGdDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBQ0QsZ0NBQVUsR0FBVixjQUFjLENBQUM7SUFDZiwrQkFBUyxHQUFUO1FBQ0UsaUJBQU0sU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBbkdNLHFCQUFTLEdBQUcsMEJBQTBCLENBQUM7SUFFOUM7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDOzZDQVcvQjtJQVlEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQztxREFTakM7SUFnQkQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDO2dEQUtsQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQztvREFVbkM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUM7aURBR25DO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDO3NEQUdqQztJQVFEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUM7aURBUTlCO0lBN0ZrQixXQUFXO1FBRC9CLEVBQUUsQ0FBQyxLQUFLO09BQ1ksV0FBVyxDQTJHL0I7SUFBRCxrQkFBQztDQTNHRCxBQTJHQyxDQTNHd0MsZ0JBQU0sR0EyRzlDO2tCQTNHb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdWkvQmFzZVVJJztcbmltcG9ydCBDb250cm9sbGVyTWFuYWdlciBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9tYW5hZ2VyL0NvbnRyb2xsZXJNYW5hZ2VyJztcbmltcG9ydCBDb3VudGRvd25Db21wb25lbnQgZnJvbSAnLi9Db3VudGRvd25Db21wb25lbnQnO1xuaW1wb3J0IFJhbmtNb2RlbCBmcm9tICcuLi9SYW5rTW9kZWwnO1xuaW1wb3J0IEkxOE5TdHJpbmdzIGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvSTE4TlN0cmluZ3MnO1xuaW1wb3J0IHsgRG90R2FtZUJ0bkNsaWNrLCBFUmFua0NsaWNrVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZG90L0RHYW1lQnRuQ2xpY2snO1xuaW1wb3J0IHsgRVZUX01TR19LRVlfRVZFTlRfU0hPVywgRVZUX01TR19LRVlfRVZFTlRfSElERSB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvQ29uZmlnJztcbmltcG9ydCBCYXNlU3ByaXRlIGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3ByaXRlJztcbmltcG9ydCBCYXNlU3BpbmUgZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcGluZSc7XG5pbXBvcnQgQ2FyZFV0aWwgZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL0NhcmRVdGlsJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhbGxSYW5rQnRuIGV4dGVuZHMgQmFzZVVJIHtcbiAgX2xhYmVsVGltZSA9IG51bGw7XG4gIF9sYWJlbFJhbmtOb2RlID0gbnVsbDtcbiAgX2NhcmRTcHJOb2RlID0gbnVsbDtcbiAgX2FuaVNwaW5lRG93biA9IG51bGw7XG4gIF9hbmlTcGluZVVwID0gbnVsbDtcbiAgX2FuaW1Qcm94eSA9IG51bGw7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvcmFuay9IYWxsUmFua0J0blwiO1xuICBAbWoudHJhaXRFdmVudChcIlJhbmtCdG5fb25Mb2FkXCIpXG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5ub2RlLCB0aGlzLm9uQnRuQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgdGhpcy5fbGFiZWxUaW1lID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJMYWJlbFwiKTtcbiAgICB0aGlzLl9sYWJlbFJhbmtOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJSYW5rXCIpO1xuICAgIHRoaXMuX2NhcmRTcHJOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJDYXJkXCIpO1xuICAgIHRoaXMuX2FuaVNwaW5lRG93biA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwiZG93blwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgIHRoaXMuX2FuaVNwaW5lVXAgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDaGlsZEJ5TmFtZShcInVwXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgdGhpcy5pbml0Q29tcG9uZW50cygpO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG4gIG9uRW5hYmxlKCkge1xuICAgIHN1cGVyLm9uRW5hYmxlICYmIHN1cGVyLm9uRW5hYmxlLmNhbGwodGhpcyk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KFwiTXNnRW5hYmxlSG9tZUJ0blwiLCB7XG4gICAgICB0eXBlOiBcIlJhbmtcIixcbiAgICAgIG5vZGU6IHRoaXMubm9kZVxuICAgIH0pO1xuICB9XG4gIG9uRGlzYWJsZSgpIHtcbiAgICBzdXBlci5vbkRpc2FibGUgJiYgc3VwZXIub25EaXNhYmxlLmNhbGwodGhpcyk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSYW5rQnRuX2luaXRDb21wXCIpXG4gIGluaXRDb21wb25lbnRzKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICB0aGlzLl9hbmltUHJveHkgPSBCYXNlU3BpbmUucmVmcmVzaFdpdGhOb2RlKHRoaXMuX2FuaVNwaW5lRG93bi5ub2RlKTtcbiAgICB0aGlzLl9hbmltUHJveHkucmVzZXQoXCJcIik7XG4gICAgdGhpcy5fYW5pbVByb3h5Lm1hcmtSZWFkeShcIlwiKTtcbiAgICB0aGlzLl9hbmltUHJveHkuYXR0YWNoTm9kZShcInBob3RvXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0Ll9jYXJkU3ByTm9kZTtcbiAgICB9KTtcbiAgfVxuICBpbml0KCkge1xuICAgIHRoaXMudXBkYXRlQWxsKCk7XG4gIH1cbiAgdXBkYXRlUmVtYWluVGltZSgpIHtcbiAgICB2YXIgdDtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLl9sYWJlbFRpbWUpKSB7XG4gICAgICB2YXIgZSA9IFJhbmtNb2RlbC5nZXRJbnN0YW5jZSgpLmdldExlZnRUaW1lKCk7XG4gICAgICBpZiAoZSA+IDApIHtcbiAgICAgICAgbnVsbCA9PT0gKHQgPSB0aGlzLl9sYWJlbFRpbWUuZ2V0Q29tcG9uZW50KENvdW50ZG93bkNvbXBvbmVudCkpIHx8IHZvaWQgMCA9PT0gdCB8fCB0LnNldFJlbWFpblRpbWUoZSwgdGhpcy5maW5pc2hDb3VudGRvd24uYmluZCh0aGlzKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsb3NlT3V0Q0QoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSYW5rQnRuX3VwZGF0ZUFsbFwiKVxuICB1cGRhdGVBbGwoKSB7XG4gICAgdGhpcy51cGRhdGVSZW1haW5UaW1lKCk7XG4gICAgdGhpcy51cGRhdGVSYW5rKCk7XG4gICAgdGhpcy51cGRhdGVJbWdDYXJkKHRoaXMuX2NhcmRTcHJOb2RlKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJhbmtCdG5fdXBkSW1nQ2FyZFwiKVxuICB1cGRhdGVJbWdDYXJkKHQpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0KSkge1xuICAgICAgdmFyIGUgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRSYW5rQ2FyZFJlc05hbWUoKSxcbiAgICAgICAgbyA9IENhcmRVdGlsLmdldEF0bGFzUGF0aEFuZEJ1bmRsZU5hbWUoZSksXG4gICAgICAgIG4gPSBvLnBhdGgsXG4gICAgICAgIGEgPSBvLmJ1bmRsZU5hbWUsXG4gICAgICAgIGkgPSBvLmZyb21BdGxhcztcbiAgICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKHQsIG4sIGksIG51bGwsIGEpO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJhbmtCdG5fY2xvc2VPdXRDRFwiKVxuICBjbG9zZU91dENEKCkge1xuICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSYW5rQnRuX2ZpbmlzaENEXCIpXG4gIGZpbmlzaENvdW50ZG93bigpIHtcbiAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICB9XG4gIHVwZGF0ZVJhbmsoKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5fbGFiZWxSYW5rTm9kZSkpIGlmIChSYW5rTW9kZWwuZ2V0SW5zdGFuY2UoKS5pc09uTGlzdCgpKSB7XG4gICAgICB2YXIgdCA9IFJhbmtNb2RlbC5nZXRJbnN0YW5jZSgpLmdldFNlbGZSYW5rKCk7XG4gICAgICBJMThOU3RyaW5ncy5zZXRUZXh0KHRoaXMuX2xhYmVsUmFua05vZGUsIHQgKyBcIlwiLCBcIkxlYWRlckJvYXJkX0VudHJhbmNlX051bVwiLCBbdF0pO1xuICAgIH0gZWxzZSB0aGlzLl9sYWJlbFJhbmtOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIjtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJhbmtCdG5fY2xpY2tcIilcbiAgb25CdG5DbGljaygpIHtcbiAgICBEb3RHYW1lQnRuQ2xpY2suZG90UmFuayhFUmFua0NsaWNrVHlwZS5DbGlja0hhbGxSYW5rKTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoXCJSYW5rTW9kZWxfdXBkVGltZVwiKTtcbiAgICBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hWaWV3QnlDb250cm9sbGVyKFwiUmFua0NvbnRyb2xsZXJcIiwge1xuICAgICAgaXNSZXVzZTogdHJ1ZSxcbiAgICAgIGlzU2hvd0FjdGlvbjogZmFsc2VcbiAgICB9KTtcbiAgfVxuICBnZXRNZXNzYWdlTGlzdGVuZXJzKCkge1xuICAgIHZhciBfdCA9IHt9O1xuICAgIF90W0VWVF9NU0dfS0VZX0VWRU5UX1NIT1ddID0gdGhpcy5vbkdhbWVTaG93LmJpbmQodGhpcyk7XG4gICAgX3RbRVZUX01TR19LRVlfRVZFTlRfSElERV0gPSB0aGlzLm9uR2FtZUhpZGUuYmluZCh0aGlzKTtcbiAgICByZXR1cm4gX3Q7XG4gIH1cbiAgb25HYW1lU2hvdygpIHtcbiAgICB0aGlzLnVwZGF0ZVJlbWFpblRpbWUoKTtcbiAgfVxuICBvbkdhbWVIaWRlKCkge31cbiAgb25EZXN0cm95KCkge1xuICAgIHN1cGVyLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xuICB9XG59Il19
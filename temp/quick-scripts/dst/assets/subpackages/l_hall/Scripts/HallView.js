
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_hall/Scripts/HallView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '72445s3dLJOXboeLxIQWmFd', 'HallView');
// subpackages/l_hall/Scripts/HallView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIView_1 = require("../../../Scripts/framework/ui/UIView");
var EventDefine_1 = require("../../../Scripts/base/event/EventDefine");
var TravelConfig_1 = require("../../../Scripts/config/TravelConfig");
var HallNormalBtn_1 = require("./HallNormalBtn");
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var NodeSkinTool_1 = require("../../../Scripts/NodeSkinTool");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var HallView = /** @class */ (function (_super) {
    __extends(HallView, _super);
    function HallView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.normalBtn = null;
        _this.hallTheme = "";
        return _this;
    }
    HallView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initGm();
    };
    HallView.prototype.initGm = function () { };
    HallView.prototype.getMessageListeners = function () {
        var _t = {};
        _t[TravelConfig_1.TRAVEL_GAME_SESSION_CHANGE] = this.onTravelChange.bind(this);
        _t[EventDefine_1.EVT_MSG_HALL_FORCE_UPDATE] = this.onForceUpdate.bind(this);
        return _t;
    };
    HallView.prototype.onTravelChange = function () { };
    HallView.prototype.createButtons = function (t) {
        var e = this;
        (null == t ? void 0 : t.hallTheme) && (this.hallTheme = t.hallTheme);
        HallNormalBtn_1.default.createUI().then(function (t) {
            if (cc.isValid(t) && cc.isValid(e.node)) {
                e.node.addChild(t);
                e.normalBtn = t;
                e.normalBtn.getComponent(HallNormalBtn_1.default).updateUI();
            }
        }).catch(function (t) {
            console.error("[HallView] 游戏内创建按钮失败:" + ((null == t ? void 0 : t.message) || "HallNormalBtn按钮加载失败"));
        });
    };
    HallView.prototype.updateUI = function (t) {
        (null == t ? void 0 : t.hallTheme) && (this.hallTheme = t.hallTheme);
        this.changeTheme(this.hallTheme, true);
        cc.isValid(this.normalBtn) && this.normalBtn.getComponent(HallNormalBtn_1.default).updateUI();
        this.onPopView();
    };
    HallView.prototype.onPopView = function () { };
    HallView.prototype.onForceUpdate = function () { };
    HallView.prototype.isSimpleHall = function () {
        return "Hall" === this.hallTheme;
    };
    HallView.prototype.changeTheme = function (t, e) {
        if (t) {
            var o = DataReader_1.DataReader.getTypeList(ConfigType_1.ConfigType.HallTheme, "SkinKey", t);
            if (o && 0 !== o.length) {
                NodeSkinTool_1.default.parseConfigList(this.node, o, GameTypeEnums_1.MjGameType.Normal, "");
                e && (this.hallTheme = t);
            }
        }
    };
    HallView.prefabUrl = "prefabs/hall/HallBase";
    __decorate([
        mj.traitEvent("HallVw_travelChange")
    ], HallView.prototype, "onTravelChange", null);
    __decorate([
        mj.traitEvent("HallVw_initBtns")
    ], HallView.prototype, "createButtons", null);
    __decorate([
        mj.traitEvent("HallVw_updateUI")
    ], HallView.prototype, "updateUI", null);
    __decorate([
        mj.traitEvent("HallVw_onPopView")
    ], HallView.prototype, "onPopView", null);
    __decorate([
        mj.traitEvent("HallVw_forceUpdate")
    ], HallView.prototype, "onForceUpdate", null);
    __decorate([
        mj.traitEvent("HallVw_chgTheme")
    ], HallView.prototype, "changeTheme", null);
    HallView = __decorate([
        mj.class
    ], HallView);
    return HallView;
}(UIView_1.default));
exports.default = HallView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2hhbGwvU2NyaXB0cy9IYWxsVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBQzFELHVFQUFvRjtBQUNwRixxRUFBa0Y7QUFDbEYsaURBQTRDO0FBQzVDLHlFQUF3RTtBQUN4RSw2RUFBNEU7QUFDNUUsOERBQXlEO0FBQ3pELHdGQUFvRjtBQUVwRjtJQUFzQyw0QkFBTTtJQUE1QztRQUFBLHFFQXVEQztRQXREQyxlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGVBQVMsR0FBRyxFQUFFLENBQUM7O0lBcURqQixDQUFDO0lBbkRDLHlCQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBQ0QseUJBQU0sR0FBTixjQUFVLENBQUM7SUFDWCxzQ0FBbUIsR0FBbkI7UUFDRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDWixFQUFFLENBQUMseUNBQTBCLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRSxFQUFFLENBQUMsdUNBQXlCLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5RCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRCxpQ0FBYyxHQUFkLGNBQWtCLENBQUM7SUFFbkIsZ0NBQWEsR0FBYixVQUFjLENBQUM7UUFDYixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMs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dkRxQyxnQkFBTSxHQXVEM0M7a0JBdkRvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJVmlldyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay91aS9VSVZpZXcnO1xuaW1wb3J0IHsgRVZUX01TR19IQUxMX0ZPUkNFX1VQREFURSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvYmFzZS9ldmVudC9FdmVudERlZmluZSc7XG5pbXBvcnQgeyBUUkFWRUxfR0FNRV9TRVNTSU9OX0NIQU5HRSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29uZmlnL1RyYXZlbENvbmZpZyc7XG5pbXBvcnQgSGFsbE5vcm1hbEJ0biBmcm9tICcuL0hhbGxOb3JtYWxCdG4nO1xuaW1wb3J0IHsgRGF0YVJlYWRlciB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvRGF0YVJlYWRlcic7XG5pbXBvcnQgeyBDb25maWdUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL2RhdGEvQ29uZmlnVHlwZSc7XG5pbXBvcnQgTm9kZVNraW5Ub29sIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvTm9kZVNraW5Ub29sJztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYWxsVmlldyBleHRlbmRzIFVJVmlldyB7XG4gIG5vcm1hbEJ0biA9IG51bGw7XG4gIGhhbGxUaGVtZSA9IFwiXCI7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvaGFsbC9IYWxsQmFzZVwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5pbml0R20oKTtcbiAgfVxuICBpbml0R20oKSB7fVxuICBnZXRNZXNzYWdlTGlzdGVuZXJzKCkge1xuICAgIHZhciBfdCA9IHt9O1xuICAgIF90W1RSQVZFTF9HQU1FX1NFU1NJT05fQ0hBTkdFXSA9IHRoaXMub25UcmF2ZWxDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICBfdFtFVlRfTVNHX0hBTExfRk9SQ0VfVVBEQVRFXSA9IHRoaXMub25Gb3JjZVVwZGF0ZS5iaW5kKHRoaXMpO1xuICAgIHJldHVybiBfdDtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkhhbGxWd190cmF2ZWxDaGFuZ2VcIilcbiAgb25UcmF2ZWxDaGFuZ2UoKSB7fVxuICBAbWoudHJhaXRFdmVudChcIkhhbGxWd19pbml0QnRuc1wiKVxuICBjcmVhdGVCdXR0b25zKHQpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQuaGFsbFRoZW1lKSAmJiAodGhpcy5oYWxsVGhlbWUgPSB0LmhhbGxUaGVtZSk7XG4gICAgSGFsbE5vcm1hbEJ0bi5jcmVhdGVVSSgpLnRoZW4oZnVuY3Rpb24gKHQpIHtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKHQpICYmIGNjLmlzVmFsaWQoZS5ub2RlKSkge1xuICAgICAgICBlLm5vZGUuYWRkQ2hpbGQodCk7XG4gICAgICAgIGUubm9ybWFsQnRuID0gdDtcbiAgICAgICAgZS5ub3JtYWxCdG4uZ2V0Q29tcG9uZW50KEhhbGxOb3JtYWxCdG4pLnVwZGF0ZVVJKCk7XG4gICAgICB9XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbSGFsbFZpZXddIOa4uOaIj+WGheWIm+W7uuaMiemSruWksei0pTpcIiArICgobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSB8fCBcIkhhbGxOb3JtYWxCdG7mjInpkq7liqDovb3lpLHotKVcIikpO1xuICAgIH0pO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiSGFsbFZ3X3VwZGF0ZVVJXCIpXG4gIHVwZGF0ZVVJKHQpIHtcbiAgICAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5oYWxsVGhlbWUpICYmICh0aGlzLmhhbGxUaGVtZSA9IHQuaGFsbFRoZW1lKTtcbiAgICB0aGlzLmNoYW5nZVRoZW1lKHRoaXMuaGFsbFRoZW1lLCB0cnVlKTtcbiAgICBjYy5pc1ZhbGlkKHRoaXMubm9ybWFsQnRuKSAmJiB0aGlzLm5vcm1hbEJ0bi5nZXRDb21wb25lbnQoSGFsbE5vcm1hbEJ0bikudXBkYXRlVUkoKTtcbiAgICB0aGlzLm9uUG9wVmlldygpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiSGFsbFZ3X29uUG9wVmlld1wiKVxuICBvblBvcFZpZXcoKSB7fVxuICBAbWoudHJhaXRFdmVudChcIkhhbGxWd19mb3JjZVVwZGF0ZVwiKVxuICBvbkZvcmNlVXBkYXRlKCkge31cbiAgaXNTaW1wbGVIYWxsKCkge1xuICAgIHJldHVybiBcIkhhbGxcIiA9PT0gdGhpcy5oYWxsVGhlbWU7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJIYWxsVndfY2hnVGhlbWVcIilcbiAgY2hhbmdlVGhlbWUodCwgZSkge1xuICAgIGlmICh0KSB7XG4gICAgICB2YXIgbyA9IERhdGFSZWFkZXIuZ2V0VHlwZUxpc3QoQ29uZmlnVHlwZS5IYWxsVGhlbWUsIFwiU2tpbktleVwiLCB0KTtcbiAgICAgIGlmIChvICYmIDAgIT09IG8ubGVuZ3RoKSB7XG4gICAgICAgIE5vZGVTa2luVG9vbC5wYXJzZUNvbmZpZ0xpc3QodGhpcy5ub2RlLCBvLCBNakdhbWVUeXBlLk5vcm1hbCwgXCJcIik7XG4gICAgICAgIGUgJiYgKHRoaXMuaGFsbFRoZW1lID0gdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19
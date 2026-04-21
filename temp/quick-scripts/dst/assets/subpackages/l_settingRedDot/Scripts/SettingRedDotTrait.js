
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_settingRedDot/Scripts/SettingRedDotTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '194a1INT1BIHqcK0HbQYirs', 'SettingRedDotTrait');
// subpackages/l_settingRedDot/Scripts/SettingRedDotTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var SettingRedDotModel_1 = require("./SettingRedDotModel");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var SettingRedDotTrait = /** @class */ (function (_super) {
    __extends(SettingRedDotTrait, _super);
    function SettingRedDotTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._gameSettingRedDot = null;
        _this._settingBackRedDot = null;
        return _this;
    }
    SettingRedDotTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerTile2Event();
    };
    SettingRedDotTrait.prototype.registerTile2Event = function () {
        this.registerEvent([{
                event: "T2TopVw_onLoad",
                type: 2
            }]);
    };
    SettingRedDotTrait.prototype.getMessageListeners = function () {
        var _t = {};
        _t[GameEvent_1.EGameEvent.RedDot_addNotify] = this.addRedDot.bind(this);
        _t[GameEvent_1.EGameEvent.RedDot_clearNotify] = this.onClearRedDot.bind(this);
        _t[GameEvent_1.EGameEvent.RedDot_clearAllNotify] = this.clearSettingRedDot.bind(this);
        return _t;
    };
    SettingRedDotTrait.prototype.addRedDot = function (t) {
        SettingRedDotModel_1.default.getInstance().addRedDot(t);
        this.updateRedDotVisibility();
    };
    SettingRedDotTrait.prototype.onClearRedDot = function (t) {
        SettingRedDotModel_1.default.getInstance().removeRedDot(t);
        this.updateRedDotVisibility();
    };
    SettingRedDotTrait.prototype.onHallCtl_viewDidShow = function (t, e) {
        e();
        this.updateRedDotVisibility();
    };
    SettingRedDotTrait.prototype.onT2TopVw_onLoad = function (t, e) {
        e();
        var o = {
            type: GameTypeEnums_1.ERedDotType.Setting,
            show: true
        };
        mj.triggerInternalEvent("RedDotCtrl_showRedDot", this, [o]);
        if (o.show) {
            var i = t.ins;
            cc.isValid(i) && cc.isValid(i.btnSettings) && this.createGameSettingRedDot(i.btnSettings);
        }
        else {
            this.clearSettingRedDot();
            this.eventEnabled = false;
        }
    };
    SettingRedDotTrait.prototype.onGameUI_onLoad = function (t, e) {
        e();
        var o = {
            type: GameTypeEnums_1.ERedDotType.Setting,
            show: true
        };
        mj.triggerInternalEvent("RedDotCtrl_showRedDot", this, [o]);
        if (o.show) {
            var i = t.ins;
            cc.isValid(i) && "function" == typeof i.getSettingsBtn && this.createGameSettingRedDot(i.getSettingsBtn());
        }
        else {
            this.clearSettingRedDot();
            this.eventEnabled = false;
        }
    };
    SettingRedDotTrait.prototype.onUISetBtnBack_onLoad = function (t, e) {
        var o;
        e();
        this.createSettingBackRedDot(null === (o = t.ins) || void 0 === o ? void 0 : o.node);
    };
    SettingRedDotTrait.prototype.createGameSettingRedDot = function (t) {
        if (cc.isValid(t)) {
            if (!cc.isValid(this._gameSettingRedDot)) {
                var e = this.createRedDotNode();
                if (!cc.isValid(e))
                    return;
                t.addChild(e);
                e.setPosition(this.getGameSettingRedDotPosition());
                this._gameSettingRedDot = e;
            }
            this.updateRedDotVisibility();
        }
    };
    SettingRedDotTrait.prototype.getGameSettingRedDotPosition = function () {
        return UserModel_1.default.getInstance().getMainGameType() === GameTypeEnums_1.MjGameType.Tile2Normal ? cc.v2(40, 40) : cc.v2(30, 30);
    };
    SettingRedDotTrait.prototype.getSettingBackRedDotPosition = function () {
        return cc.v2(260, 65);
    };
    SettingRedDotTrait.prototype.getRedDotImagePath = function () {
        return "texture/common/com_red";
    };
    SettingRedDotTrait.prototype.createSettingBackRedDot = function (t) {
        if (cc.isValid(t)) {
            if (!cc.isValid(this._settingBackRedDot)) {
                var e = this.createRedDotNode();
                if (!cc.isValid(e))
                    return;
                var o = t.getChildByName("bg");
                cc.isValid(o) || (o = t);
                e.parent = o;
                e.setPosition(this.getSettingBackRedDotPosition());
                this._settingBackRedDot = e;
            }
            this.updateRedDotVisibility();
        }
    };
    SettingRedDotTrait.prototype.createRedDotNode = function () {
        var t = BaseSprite_1.default.create(this.getRedDotImagePath());
        return cc.isValid(t) ? t.node : null;
    };
    SettingRedDotTrait.prototype.updateRedDotVisibility = function () {
        var t = SettingRedDotModel_1.default.getInstance().getTotalRedDotCount() > 0;
        cc.isValid(this._gameSettingRedDot) && (this._gameSettingRedDot.active = t);
        cc.isValid(this._settingBackRedDot) && (this._settingBackRedDot.active = t);
    };
    SettingRedDotTrait.prototype.clearSettingRedDot = function () {
        SettingRedDotModel_1.default.getInstance().clearAllRedDots();
        this.updateRedDotVisibility();
    };
    SettingRedDotTrait.traitKey = "SettingRedDot";
    SettingRedDotTrait = __decorate([
        mj.trait,
        mj.class("SettingRedDotTrait")
    ], SettingRedDotTrait);
    return SettingRedDotTrait;
}(Trait_1.default));
exports.default = SettingRedDotTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3NldHRpbmdSZWREb3QvU2NyaXB0cy9TZXR0aW5nUmVkRG90VHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUFzRDtBQUN0RCxnRUFBMkQ7QUFDM0QsMkVBQTJFO0FBQzNFLDJFQUFzRTtBQUN0RSx3RkFBaUc7QUFDakcsc0VBQWlFO0FBR2pFO0lBQWdELHNDQUFLO0lBQXJEO1FBQUEscUVBb0hDO1FBbkhDLHdCQUFrQixHQUFHLElBQUksQ0FBQztRQUMxQix3QkFBa0IsR0FBRyxJQUFJLENBQUM7O0lBa0g1QixDQUFDO0lBaEhDLG1DQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFDRCwrQ0FBa0IsR0FBbEI7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ2xCLEtBQUssRUFBRSxnQkFBZ0I7Z0JBQ3ZCLElBQUksRUFBRSxDQUFDO2FBQ1IsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBQ0QsZ0RBQW1CLEdBQW5CO1FBQ0UsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ1osRUFBRSxDQUFDLHNCQUFVLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1RCxFQUFFLENBQUMsc0JBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xFLEVBQUUsQ0FBQyxzQkFBVSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxRSxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFDRCxzQ0FB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R0FBRyxlQUFlLENBQUM7SUFIZixrQkFBa0I7UUFGdEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDO09BQ1Ysa0JBQWtCLENBb0h0QztJQUFELHlCQUFDO0NBcEhELEFBb0hDLENBcEgrQyxlQUFLLEdBb0hwRDtrQkFwSG9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZXR0aW5nUmVkRG90TW9kZWwgZnJvbSAnLi9TZXR0aW5nUmVkRG90TW9kZWwnO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IEVHYW1lRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL3NpbXVsYXRvci9jb25zdGFudC9HYW1lRXZlbnQnO1xuaW1wb3J0IEJhc2VTcHJpdGUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcHJpdGUnO1xuaW1wb3J0IHsgRVJlZERvdFR5cGUsIE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiU2V0dGluZ1JlZERvdFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nUmVkRG90VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9nYW1lU2V0dGluZ1JlZERvdCA9IG51bGw7XG4gIF9zZXR0aW5nQmFja1JlZERvdCA9IG51bGw7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiU2V0dGluZ1JlZERvdFwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5yZWdpc3RlclRpbGUyRXZlbnQoKTtcbiAgfVxuICByZWdpc3RlclRpbGUyRXZlbnQoKSB7XG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KFt7XG4gICAgICBldmVudDogXCJUMlRvcFZ3X29uTG9hZFwiLFxuICAgICAgdHlwZTogMlxuICAgIH1dKTtcbiAgfVxuICBnZXRNZXNzYWdlTGlzdGVuZXJzKCkge1xuICAgIHZhciBfdCA9IHt9O1xuICAgIF90W0VHYW1lRXZlbnQuUmVkRG90X2FkZE5vdGlmeV0gPSB0aGlzLmFkZFJlZERvdC5iaW5kKHRoaXMpO1xuICAgIF90W0VHYW1lRXZlbnQuUmVkRG90X2NsZWFyTm90aWZ5XSA9IHRoaXMub25DbGVhclJlZERvdC5iaW5kKHRoaXMpO1xuICAgIF90W0VHYW1lRXZlbnQuUmVkRG90X2NsZWFyQWxsTm90aWZ5XSA9IHRoaXMuY2xlYXJTZXR0aW5nUmVkRG90LmJpbmQodGhpcyk7XG4gICAgcmV0dXJuIF90O1xuICB9XG4gIGFkZFJlZERvdCh0KSB7XG4gICAgU2V0dGluZ1JlZERvdE1vZGVsLmdldEluc3RhbmNlKCkuYWRkUmVkRG90KHQpO1xuICAgIHRoaXMudXBkYXRlUmVkRG90VmlzaWJpbGl0eSgpO1xuICB9XG4gIG9uQ2xlYXJSZWREb3QodCkge1xuICAgIFNldHRpbmdSZWREb3RNb2RlbC5nZXRJbnN0YW5jZSgpLnJlbW92ZVJlZERvdCh0KTtcbiAgICB0aGlzLnVwZGF0ZVJlZERvdFZpc2liaWxpdHkoKTtcbiAgfVxuICBvbkhhbGxDdGxfdmlld0RpZFNob3codCwgZSkge1xuICAgIGUoKTtcbiAgICB0aGlzLnVwZGF0ZVJlZERvdFZpc2liaWxpdHkoKTtcbiAgfVxuICBvblQyVG9wVndfb25Mb2FkKHQsIGUpIHtcbiAgICBlKCk7XG4gICAgdmFyIG8gPSB7XG4gICAgICB0eXBlOiBFUmVkRG90VHlwZS5TZXR0aW5nLFxuICAgICAgc2hvdzogdHJ1ZVxuICAgIH07XG4gICAgbWoudHJpZ2dlckludGVybmFsRXZlbnQoXCJSZWREb3RDdHJsX3Nob3dSZWREb3RcIiwgdGhpcywgW29dKTtcbiAgICBpZiAoby5zaG93KSB7XG4gICAgICB2YXIgaSA9IHQuaW5zO1xuICAgICAgY2MuaXNWYWxpZChpKSAmJiBjYy5pc1ZhbGlkKGkuYnRuU2V0dGluZ3MpICYmIHRoaXMuY3JlYXRlR2FtZVNldHRpbmdSZWREb3QoaS5idG5TZXR0aW5ncyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xlYXJTZXR0aW5nUmVkRG90KCk7XG4gICAgICB0aGlzLmV2ZW50RW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBvbkdhbWVVSV9vbkxvYWQodCwgZSkge1xuICAgIGUoKTtcbiAgICB2YXIgbyA9IHtcbiAgICAgIHR5cGU6IEVSZWREb3RUeXBlLlNldHRpbmcsXG4gICAgICBzaG93OiB0cnVlXG4gICAgfTtcbiAgICBtai50cmlnZ2VySW50ZXJuYWxFdmVudChcIlJlZERvdEN0cmxfc2hvd1JlZERvdFwiLCB0aGlzLCBbb10pO1xuICAgIGlmIChvLnNob3cpIHtcbiAgICAgIHZhciBpID0gdC5pbnM7XG4gICAgICBjYy5pc1ZhbGlkKGkpICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgaS5nZXRTZXR0aW5nc0J0biAmJiB0aGlzLmNyZWF0ZUdhbWVTZXR0aW5nUmVkRG90KGkuZ2V0U2V0dGluZ3NCdG4oKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xlYXJTZXR0aW5nUmVkRG90KCk7XG4gICAgICB0aGlzLmV2ZW50RW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBvblVJU2V0QnRuQmFja19vbkxvYWQodCwgZSkge1xuICAgIHZhciBvO1xuICAgIGUoKTtcbiAgICB0aGlzLmNyZWF0ZVNldHRpbmdCYWNrUmVkRG90KG51bGwgPT09IChvID0gdC5pbnMpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8ubm9kZSk7XG4gIH1cbiAgY3JlYXRlR2FtZVNldHRpbmdSZWREb3QodCkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHQpKSB7XG4gICAgICBpZiAoIWNjLmlzVmFsaWQodGhpcy5fZ2FtZVNldHRpbmdSZWREb3QpKSB7XG4gICAgICAgIHZhciBlID0gdGhpcy5jcmVhdGVSZWREb3ROb2RlKCk7XG4gICAgICAgIGlmICghY2MuaXNWYWxpZChlKSkgcmV0dXJuO1xuICAgICAgICB0LmFkZENoaWxkKGUpO1xuICAgICAgICBlLnNldFBvc2l0aW9uKHRoaXMuZ2V0R2FtZVNldHRpbmdSZWREb3RQb3NpdGlvbigpKTtcbiAgICAgICAgdGhpcy5fZ2FtZVNldHRpbmdSZWREb3QgPSBlO1xuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGVSZWREb3RWaXNpYmlsaXR5KCk7XG4gICAgfVxuICB9XG4gIGdldEdhbWVTZXR0aW5nUmVkRG90UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldE1haW5HYW1lVHlwZSgpID09PSBNakdhbWVUeXBlLlRpbGUyTm9ybWFsID8gY2MudjIoNDAsIDQwKSA6IGNjLnYyKDMwLCAzMCk7XG4gIH1cbiAgZ2V0U2V0dGluZ0JhY2tSZWREb3RQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gY2MudjIoMjYwLCA2NSk7XG4gIH1cbiAgZ2V0UmVkRG90SW1hZ2VQYXRoKCkge1xuICAgIHJldHVybiBcInRleHR1cmUvY29tbW9uL2NvbV9yZWRcIjtcbiAgfVxuICBjcmVhdGVTZXR0aW5nQmFja1JlZERvdCh0KSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodCkpIHtcbiAgICAgIGlmICghY2MuaXNWYWxpZCh0aGlzLl9zZXR0aW5nQmFja1JlZERvdCkpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzLmNyZWF0ZVJlZERvdE5vZGUoKTtcbiAgICAgICAgaWYgKCFjYy5pc1ZhbGlkKGUpKSByZXR1cm47XG4gICAgICAgIHZhciBvID0gdC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpO1xuICAgICAgICBjYy5pc1ZhbGlkKG8pIHx8IChvID0gdCk7XG4gICAgICAgIGUucGFyZW50ID0gbztcbiAgICAgICAgZS5zZXRQb3NpdGlvbih0aGlzLmdldFNldHRpbmdCYWNrUmVkRG90UG9zaXRpb24oKSk7XG4gICAgICAgIHRoaXMuX3NldHRpbmdCYWNrUmVkRG90ID0gZTtcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlUmVkRG90VmlzaWJpbGl0eSgpO1xuICAgIH1cbiAgfVxuICBjcmVhdGVSZWREb3ROb2RlKCkge1xuICAgIHZhciB0ID0gQmFzZVNwcml0ZS5jcmVhdGUodGhpcy5nZXRSZWREb3RJbWFnZVBhdGgoKSk7XG4gICAgcmV0dXJuIGNjLmlzVmFsaWQodCkgPyB0Lm5vZGUgOiBudWxsO1xuICB9XG4gIHVwZGF0ZVJlZERvdFZpc2liaWxpdHkoKSB7XG4gICAgdmFyIHQgPSBTZXR0aW5nUmVkRG90TW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRUb3RhbFJlZERvdENvdW50KCkgPiAwO1xuICAgIGNjLmlzVmFsaWQodGhpcy5fZ2FtZVNldHRpbmdSZWREb3QpICYmICh0aGlzLl9nYW1lU2V0dGluZ1JlZERvdC5hY3RpdmUgPSB0KTtcbiAgICBjYy5pc1ZhbGlkKHRoaXMuX3NldHRpbmdCYWNrUmVkRG90KSAmJiAodGhpcy5fc2V0dGluZ0JhY2tSZWREb3QuYWN0aXZlID0gdCk7XG4gIH1cbiAgY2xlYXJTZXR0aW5nUmVkRG90KCkge1xuICAgIFNldHRpbmdSZWREb3RNb2RlbC5nZXRJbnN0YW5jZSgpLmNsZWFyQWxsUmVkRG90cygpO1xuICAgIHRoaXMudXBkYXRlUmVkRG90VmlzaWJpbGl0eSgpO1xuICB9XG59Il19
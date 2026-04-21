
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_autoClearSwitch/Scripts/AutoClearSwitchTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8060f7hyWFBoZX5QfTcsx+2', 'AutoClearSwitchTrait');
// subpackages/l_autoClearSwitch/Scripts/AutoClearSwitchTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var UIAutoClearSwitch_1 = require("./UIAutoClearSwitch");
var FullComboItem_1 = require("../../../Scripts/items/FullComboItem");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var AutoClearSwitchTrait = /** @class */ (function (_super) {
    __extends(AutoClearSwitchTrait, _super);
    function AutoClearSwitchTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._fullComboSkipped = false;
        _this._rewardComboSkipped = false;
        return _this;
    }
    AutoClearSwitchTrait_1 = AutoClearSwitchTrait;
    AutoClearSwitchTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        "boolean" != typeof this.localData.autoClearEnabled && (this.localData.autoClearEnabled = true);
        UserModel_1.default.getInstance().setAutoClearEnabled(this.localData.autoClearEnabled);
    };
    AutoClearSwitchTrait.prototype.onEntAniFiBhv_start = function (t, e) {
        this._fullComboSkipped = false;
        this._rewardComboSkipped = false;
        e();
    };
    AutoClearSwitchTrait.prototype.onUISetDlgCtrl_initDRes = function (t, e) {
        this.addPreloadRes(t);
        e();
    };
    AutoClearSwitchTrait.prototype.addPreloadRes = function (t) {
        var e = t.ins;
        e && "function" == typeof e.addPreloadRes && e.addPreloadRes("Prefab", UIAutoClearSwitch_1.default.getUrl());
    };
    AutoClearSwitchTrait.prototype.onUISetDlg_adjustPH = function (t, e) {
        this.adjustPanelHeight(t, function () {
            e();
        });
    };
    AutoClearSwitchTrait.prototype.adjustPanelHeight = function (t, e) {
        UIAutoClearSwitch_1.default.createUI().then(function (o) {
            if (cc.isValid(o) && (null == t ? void 0 : t.args)) {
                var r = t.args[0] || [];
                o.CustomSlibingIndex = 0;
                r.push(o);
                t.args[0] = r;
            }
            e();
        }).catch(function (t) {
            console.error("[" + AutoClearSwitchTrait_1.traitKey + "] 创建按钮失败:" + ((null == t ? void 0 : t.message) || "AutoClear 按钮加载失败"));
            e();
        });
    };
    AutoClearSwitchTrait.prototype.toggleSwitch = function () {
        var t = !this.localData.autoClearEnabled;
        this.localData.autoClearEnabled = t;
        UserModel_1.default.getInstance().setAutoClearEnabled(t);
    };
    AutoClearSwitchTrait.prototype.isAutoClearEnabled = function () {
        return this.localData.autoClearEnabled;
    };
    AutoClearSwitchTrait.prototype.onFullComboBhv_shouldSkip = function (t, e) {
        if (this.localData.autoClearEnabled)
            e();
        else {
            this._fullComboSkipped = true;
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: true
            });
        }
    };
    AutoClearSwitchTrait.prototype.onRwdComboBhv_shouldSkip = function (t, e) {
        if (this.localData.autoClearEnabled)
            e();
        else {
            this._rewardComboSkipped = true;
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: true
            });
        }
    };
    AutoClearSwitchTrait.prototype.onBeforeWinBhv_doOthLgc = function (t, e) {
        this.handleBeforeWinLogic(t, e, "主线模式");
    };
    AutoClearSwitchTrait.prototype.onBeforeDCWinBhv_doOthLgc = function (t, e) {
        this.handleBeforeWinLogic(t, e, "每日挑战");
    };
    AutoClearSwitchTrait.prototype.handleBeforeWinLogic = function (t, e) {
        if (this._fullComboSkipped && this.checkFullComboTriggered()) {
            var o = t.ins.context.gameView.effectNode;
            this.showFullComboAnimation(o, function () {
                e();
            });
            this._fullComboSkipped = false;
        }
        else
            e();
    };
    AutoClearSwitchTrait.prototype.checkFullComboTriggered = function () {
        var t = UserModel_1.default.getInstance().getCurrentGameData();
        return !!t && t.getHasTriggeredFullCombo();
    };
    AutoClearSwitchTrait.prototype.showFullComboAnimation = function (t, e) {
        FullComboItem_1.default.createUI().then(function (o) {
            if (o && cc.isValid(t)) {
                o.setParent(t);
                o.position = cc.v3(0, 0, 0);
                var r = o.getComponent(FullComboItem_1.default);
                if (r) {
                    mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.FullCombo);
                    r.startPlayAni(o, function () { }, function () {
                        e();
                    });
                }
                else {
                    o.destroy();
                    e();
                }
            }
            else
                e();
        }).catch(function () {
            e();
        });
    };
    AutoClearSwitchTrait.prototype.onClrNormHlp_shldChkFail = function (t, e) {
        var o = t.args[0], r = t.args[1];
        if (this._fullComboSkipped || this._rewardComboSkipped || (o || r) && !this.localData.autoClearEnabled) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.jump,
                returnVal: true
            });
        }
        else {
            e();
        }
    };
    AutoClearSwitchTrait.prototype.onClrDailyHlp_shldChkFail = function (t, e) {
        var o = t.args[0], r = t.args[1];
        if (this._fullComboSkipped || this._rewardComboSkipped || (o || r) && !this.localData.autoClearEnabled) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.jump,
                returnVal: true
            });
        }
        else {
            e();
        }
    };
    var AutoClearSwitchTrait_1;
    AutoClearSwitchTrait.traitKey = "AutoClearSwitch";
    AutoClearSwitchTrait = AutoClearSwitchTrait_1 = __decorate([
        mj.trait,
        mj.class("AutoClearSwitchTrait")
    ], AutoClearSwitchTrait);
    return AutoClearSwitchTrait;
}(Trait_1.default));
exports.default = AutoClearSwitchTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2F1dG9DbGVhclN3aXRjaC9TY3JpcHRzL0F1dG9DbGVhclN3aXRjaFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLHNFQUFpRTtBQUNqRSx5REFBb0Q7QUFDcEQsc0VBQWlFO0FBQ2pFLHdGQUFrRjtBQUdsRjtJQUFrRCx3Q0FBSztJQUF2RDtRQUFBLHFFQW9JQztRQW5JQyx1QkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDMUIseUJBQW1CLEdBQUcsS0FBSyxDQUFDOztJQWtJOUIsQ0FBQzs2QkFwSW9CLG9CQUFvQjtJQUl2QyxxQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixTQUFTLElBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNoRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBQ0Qsa0RBQW1CLEdBQW5CLFVBQW9CLENBQUMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDL0IsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztRQUNqQyxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxzREFBdUIsR0FBdkIsVUFBd0IsQ0FBQyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCw0Q0FBYSxHQUFiLFVBQWMsQ0FBQztRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMs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Q0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ2YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLG1CQUFtQixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRTtZQUN0RyxDQUFDLENBQUM7Z0JBQ0EsVUFBVSxFQUFFLHNDQUF1QixDQUFDLElBQUk7Z0JBQ3hDLFNBQVMsRUFBRSxJQUFJO2FBQ2hCLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxDQUFDLEVBQUUsQ0FBQztTQUNMO0lBQ0gsQ0FBQzs7SUFoSU0sNkJBQVEsR0FBRyxpQkFBaUIsQ0FBQztJQUhqQixvQkFBb0I7UUFGeEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDO09BQ1osb0JBQW9CLENBb0l4QztJQUFELDJCQUFDO0NBcElELEFBb0lDLENBcElpRCxlQUFLLEdBb0l0RDtrQkFwSW9CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IFVJQXV0b0NsZWFyU3dpdGNoIGZyb20gJy4vVUlBdXRvQ2xlYXJTd2l0Y2gnO1xuaW1wb3J0IEZ1bGxDb21ib0l0ZW0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9pdGVtcy9GdWxsQ29tYm9JdGVtJztcbmltcG9ydCB7IEVBdWRpb0lEIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQXV0b0NsZWFyU3dpdGNoVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9DbGVhclN3aXRjaFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfZnVsbENvbWJvU2tpcHBlZCA9IGZhbHNlO1xuICBfcmV3YXJkQ29tYm9Ta2lwcGVkID0gZmFsc2U7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQXV0b0NsZWFyU3dpdGNoXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICBcImJvb2xlYW5cIiAhPSB0eXBlb2YgdGhpcy5sb2NhbERhdGEuYXV0b0NsZWFyRW5hYmxlZCAmJiAodGhpcy5sb2NhbERhdGEuYXV0b0NsZWFyRW5hYmxlZCA9IHRydWUpO1xuICAgIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLnNldEF1dG9DbGVhckVuYWJsZWQodGhpcy5sb2NhbERhdGEuYXV0b0NsZWFyRW5hYmxlZCk7XG4gIH1cbiAgb25FbnRBbmlGaUJodl9zdGFydCh0LCBlKSB7XG4gICAgdGhpcy5fZnVsbENvbWJvU2tpcHBlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3Jld2FyZENvbWJvU2tpcHBlZCA9IGZhbHNlO1xuICAgIGUoKTtcbiAgfVxuICBvblVJU2V0RGxnQ3RybF9pbml0RFJlcyh0LCBlKSB7XG4gICAgdGhpcy5hZGRQcmVsb2FkUmVzKHQpO1xuICAgIGUoKTtcbiAgfVxuICBhZGRQcmVsb2FkUmVzKHQpIHtcbiAgICB2YXIgZSA9IHQuaW5zO1xuICAgIGUgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBlLmFkZFByZWxvYWRSZXMgJiYgZS5hZGRQcmVsb2FkUmVzKFwiUHJlZmFiXCIsIFVJQXV0b0NsZWFyU3dpdGNoLmdldFVybCgpKTtcbiAgfVxuICBvblVJU2V0RGxnX2FkanVzdFBIKHQsIGUpIHtcbiAgICB0aGlzLmFkanVzdFBhbmVsSGVpZ2h0KHQsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGUoKTtcbiAgICB9KTtcbiAgfVxuICBhZGp1c3RQYW5lbEhlaWdodCh0LCBlKSB7XG4gICAgVUlBdXRvQ2xlYXJTd2l0Y2guY3JlYXRlVUkoKS50aGVuKGZ1bmN0aW9uIChvKSB7XG4gICAgICBpZiAoY2MuaXNWYWxpZChvKSAmJiAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5hcmdzKSkge1xuICAgICAgICB2YXIgciA9IHQuYXJnc1swXSB8fCBbXTtcbiAgICAgICAgby5DdXN0b21TbGliaW5nSW5kZXggPSAwO1xuICAgICAgICByLnB1c2gobyk7XG4gICAgICAgIHQuYXJnc1swXSA9IHI7XG4gICAgICB9XG4gICAgICBlKCk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBBdXRvQ2xlYXJTd2l0Y2hUcmFpdC50cmFpdEtleSArIFwiXSDliJvlu7rmjInpkq7lpLHotKU6XCIgKyAoKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkgfHwgXCJBdXRvQ2xlYXIg5oyJ6ZKu5Yqg6L295aSx6LSlXCIpKTtcbiAgICAgIGUoKTtcbiAgICB9KTtcbiAgfVxuICB0b2dnbGVTd2l0Y2goKSB7XG4gICAgdmFyIHQgPSAhdGhpcy5sb2NhbERhdGEuYXV0b0NsZWFyRW5hYmxlZDtcbiAgICB0aGlzLmxvY2FsRGF0YS5hdXRvQ2xlYXJFbmFibGVkID0gdDtcbiAgICBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5zZXRBdXRvQ2xlYXJFbmFibGVkKHQpO1xuICB9XG4gIGlzQXV0b0NsZWFyRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuYXV0b0NsZWFyRW5hYmxlZDtcbiAgfVxuICBvbkZ1bGxDb21ib0Jodl9zaG91bGRTa2lwKHQsIGUpIHtcbiAgICBpZiAodGhpcy5sb2NhbERhdGEuYXV0b0NsZWFyRW5hYmxlZCkgZSgpO2Vsc2Uge1xuICAgICAgdGhpcy5fZnVsbENvbWJvU2tpcHBlZCA9IHRydWU7XG4gICAgICBlKHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICByZXR1cm5WYWw6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBvblJ3ZENvbWJvQmh2X3Nob3VsZFNraXAodCwgZSkge1xuICAgIGlmICh0aGlzLmxvY2FsRGF0YS5hdXRvQ2xlYXJFbmFibGVkKSBlKCk7ZWxzZSB7XG4gICAgICB0aGlzLl9yZXdhcmRDb21ib1NraXBwZWQgPSB0cnVlO1xuICAgICAgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgcmV0dXJuVmFsOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgb25CZWZvcmVXaW5CaHZfZG9PdGhMZ2ModCwgZSkge1xuICAgIHRoaXMuaGFuZGxlQmVmb3JlV2luTG9naWModCwgZSwgXCLkuLvnur/mqKHlvI9cIik7XG4gIH1cbiAgb25CZWZvcmVEQ1dpbkJodl9kb090aExnYyh0LCBlKSB7XG4gICAgdGhpcy5oYW5kbGVCZWZvcmVXaW5Mb2dpYyh0LCBlLCBcIuavj+aXpeaMkeaImFwiKTtcbiAgfVxuICBoYW5kbGVCZWZvcmVXaW5Mb2dpYyh0LCBlKSB7XG4gICAgaWYgKHRoaXMuX2Z1bGxDb21ib1NraXBwZWQgJiYgdGhpcy5jaGVja0Z1bGxDb21ib1RyaWdnZXJlZCgpKSB7XG4gICAgICB2YXIgbyA9IHQuaW5zLmNvbnRleHQuZ2FtZVZpZXcuZWZmZWN0Tm9kZTtcbiAgICAgIHRoaXMuc2hvd0Z1bGxDb21ib0FuaW1hdGlvbihvLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGUoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fZnVsbENvbWJvU2tpcHBlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgY2hlY2tGdWxsQ29tYm9UcmlnZ2VyZWQoKSB7XG4gICAgdmFyIHQgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZURhdGEoKTtcbiAgICByZXR1cm4gISF0ICYmIHQuZ2V0SGFzVHJpZ2dlcmVkRnVsbENvbWJvKCk7XG4gIH1cbiAgc2hvd0Z1bGxDb21ib0FuaW1hdGlvbih0LCBlKSB7XG4gICAgRnVsbENvbWJvSXRlbS5jcmVhdGVVSSgpLnRoZW4oZnVuY3Rpb24gKG8pIHtcbiAgICAgIGlmIChvICYmIGNjLmlzVmFsaWQodCkpIHtcbiAgICAgICAgby5zZXRQYXJlbnQodCk7XG4gICAgICAgIG8ucG9zaXRpb24gPSBjYy52MygwLCAwLCAwKTtcbiAgICAgICAgdmFyIHIgPSBvLmdldENvbXBvbmVudChGdWxsQ29tYm9JdGVtKTtcbiAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICBtai5hdWRpb01hbmFnZXIucGxheUVmZmVjdChFQXVkaW9JRC5GdWxsQ29tYm8pO1xuICAgICAgICAgIHIuc3RhcnRQbGF5QW5pKG8sIGZ1bmN0aW9uICgpIHt9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgby5kZXN0cm95KCk7XG4gICAgICAgICAgZSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgZSgpO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGUoKTtcbiAgICB9KTtcbiAgfVxuICBvbkNsck5vcm1IbHBfc2hsZENoa0ZhaWwodCwgZSkge1xuICAgIHZhciBvID0gdC5hcmdzWzBdLFxuICAgICAgciA9IHQuYXJnc1sxXTtcbiAgICBpZiAodGhpcy5fZnVsbENvbWJvU2tpcHBlZCB8fCB0aGlzLl9yZXdhcmRDb21ib1NraXBwZWQgfHwgKG8gfHwgcikgJiYgIXRoaXMubG9jYWxEYXRhLmF1dG9DbGVhckVuYWJsZWQpIHtcbiAgICAgIGUoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wLFxuICAgICAgICByZXR1cm5WYWw6IHRydWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIG9uQ2xyRGFpbHlIbHBfc2hsZENoa0ZhaWwodCwgZSkge1xuICAgIHZhciBvID0gdC5hcmdzWzBdLFxuICAgICAgciA9IHQuYXJnc1sxXTtcbiAgICBpZiAodGhpcy5fZnVsbENvbWJvU2tpcHBlZCB8fCB0aGlzLl9yZXdhcmRDb21ib1NraXBwZWQgfHwgKG8gfHwgcikgJiYgIXRoaXMubG9jYWxEYXRhLmF1dG9DbGVhckVuYWJsZWQpIHtcbiAgICAgIGUoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wLFxuICAgICAgICByZXR1cm5WYWw6IHRydWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG59Il19
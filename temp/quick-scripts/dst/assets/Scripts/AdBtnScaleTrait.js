
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/AdBtnScaleTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '923c9jArmxL0pGRxlmP5g3l', 'AdBtnScaleTrait');
// Scripts/AdBtnScaleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("./framework/trait/Trait");
var TraitManager_1 = require("./framework/trait/TraitManager");
var AdBtnScaleTrait = /** @class */ (function (_super) {
    __extends(AdBtnScaleTrait, _super);
    function AdBtnScaleTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(AdBtnScaleTrait.prototype, "scale", {
        get: function () {
            var t, e;
            return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.scale) && void 0 !== e ? e : 1.1;
        },
        enumerable: false,
        configurable: true
    });
    AdBtnScaleTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    AdBtnScaleTrait.prototype.onBoxOpenUI_getAdBtnScale = function (t, e) {
        e({
            returnVal: this.scale,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    AdBtnScaleTrait.prototype.onLvBoxVw_getAdBtnScale = function (t, e) {
        e({
            returnVal: this.scale,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    AdBtnScaleTrait.prototype.onFailVw_show = function (t, e) {
        var r = t.ins, n = r.nodeAd;
        if (n && n.active) {
            var o = r.btnUse;
            this.scaleButton(o, "FailVw_show");
        }
        e();
    };
    AdBtnScaleTrait.prototype.scaleButton = function (t) {
        if (t && cc.isValid(t)) {
            var e = this.scale, r = t.getComponent(cc.Button);
            t.scale = e;
            if (null == r ? void 0 : r._originalScale) {
                r._originalScale.x = e;
                r._originalScale.y = e;
                r._transitionFinished = true;
            }
        }
    };
    AdBtnScaleTrait.prototype.onAdUnavailVw_onLoad = function (t, e) {
        var r = t.ins._btnRetry;
        r && cc.isValid(r) && this.scaleButton(r, "AdUnavailVw");
        e();
    };
    AdBtnScaleTrait.prototype.onWatchAdVw_onLoad = function (t, e) {
        var r = t.ins._btnConfirm;
        r && cc.isValid(r) && this.scaleButton(r, "WatchAdVw");
        e();
    };
    AdBtnScaleTrait.prototype.onTaskRwdVw_getAdBtnScale = function (t, e) {
        e({
            returnVal: this.scale,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    AdBtnScaleTrait.prototype.onRankBoxVw_getAdBtnScale = function (t, e) {
        e({
            returnVal: this.scale,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    AdBtnScaleTrait.prototype.onTLBoxVw_getAdBtnScale = function (t, e) {
        e({
            returnVal: this.scale,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    AdBtnScaleTrait.prototype.onDSSimRwdVw_getAdBtnScale = function (t, e) {
        e({
            returnVal: this.scale,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    AdBtnScaleTrait.prototype.onAgeRwdVw_getAdBtnScale = function (t, e) {
        e({
            returnVal: this.scale,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    AdBtnScaleTrait.traitKey = "AdBtnScale";
    AdBtnScaleTrait = __decorate([
        mj.trait,
        mj.class("AdBtnScaleTrait")
    ], AdBtnScaleTrait);
    return AdBtnScaleTrait;
}(Trait_1.default));
exports.default = AdBtnScaleTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0FkQnRuU2NhbGVUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQTRDO0FBQzVDLCtEQUF5RTtBQUd6RTtJQUE2QyxtQ0FBSztJQUFsRDs7SUFrRkEsQ0FBQztJQWhGQyxzQkFBSSxrQ0FBSzthQUFUO1lBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ1QsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNuSCxDQUFDOzs7T0FBQTtJQUNELGdDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxtREFBeUIsR0FBekIsVUFBMEIsQ0FBQyxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDO1lBQ0EsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ3JCLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO1NBQzNDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxpREFBdUIsR0FBdkIsVUFBd0IsQ0FBQyxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDO1lBQ0EsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ3JCLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO1NBQzNDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCx1Q0FBYSxHQUFiLFVBQWMsQ0FBQyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFDWCxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQztTQUNwQztRQUNELENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELHFDQUFXLEdBQVgsVUFBWSxDQUFDO1FBQ1gsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN0QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUNoQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDWixJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFO2dCQUN6QyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZCLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdkIsQ0FBQyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQzthQUM5QjtTQUNGO0lBQ0gsQ0FBQztJQUNELDhDQUFvQixHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUN6RCxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCw0Q0FBa0IsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFDMUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDdkQsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsbURBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQztZQUNBLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSztZQUNyQixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtTQUMzQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsbURBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQztZQUNBLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSztZQUNyQixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtTQUMzQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsaURBQXVCLEdBQXZCLFVBQXdCLENBQUMsRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQztZQUNBLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSztZQUNyQixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtTQUMzQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0Qsb0RBQTBCLEdBQTFCLFVBQTJCLENBQUMsRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQztZQUNBLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSztZQUNyQixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtTQUMzQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0Qsa0RBQXdCLEdBQXhCLFVBQXlCLENBQUMsRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQztZQUNBLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSztZQUNyQixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtTQUMzQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBaEZNLHdCQUFRLEdBQUcsWUFBWSxDQUFDO0lBRFosZUFBZTtRQUZuQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUM7T0FDUCxlQUFlLENBa0ZuQztJQUFELHNCQUFDO0NBbEZELEFBa0ZDLENBbEY0QyxlQUFLLEdBa0ZqRDtrQkFsRm9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJBZEJ0blNjYWxlVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkQnRuU2NhbGVUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJBZEJ0blNjYWxlXCI7XG4gIGdldCBzY2FsZSgpIHtcbiAgICB2YXIgdCwgZTtcbiAgICByZXR1cm4gbnVsbCAhPT0gKGUgPSBudWxsID09PSAodCA9IHRoaXMudHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LnNjYWxlKSAmJiB2b2lkIDAgIT09IGUgPyBlIDogMS4xO1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbkJveE9wZW5VSV9nZXRBZEJ0blNjYWxlKHQsIGUpIHtcbiAgICBlKHtcbiAgICAgIHJldHVyblZhbDogdGhpcy5zY2FsZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgIH0pO1xuICB9XG4gIG9uTHZCb3hWd19nZXRBZEJ0blNjYWxlKHQsIGUpIHtcbiAgICBlKHtcbiAgICAgIHJldHVyblZhbDogdGhpcy5zY2FsZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgIH0pO1xuICB9XG4gIG9uRmFpbFZ3X3Nob3codCwgZSkge1xuICAgIHZhciByID0gdC5pbnMsXG4gICAgICBuID0gci5ub2RlQWQ7XG4gICAgaWYgKG4gJiYgbi5hY3RpdmUpIHtcbiAgICAgIHZhciBvID0gci5idG5Vc2U7XG4gICAgICB0aGlzLnNjYWxlQnV0dG9uKG8sIFwiRmFpbFZ3X3Nob3dcIik7XG4gICAgfVxuICAgIGUoKTtcbiAgfVxuICBzY2FsZUJ1dHRvbih0KSB7XG4gICAgaWYgKHQgJiYgY2MuaXNWYWxpZCh0KSkge1xuICAgICAgdmFyIGUgPSB0aGlzLnNjYWxlLFxuICAgICAgICByID0gdC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgIHQuc2NhbGUgPSBlO1xuICAgICAgaWYgKG51bGwgPT0gciA/IHZvaWQgMCA6IHIuX29yaWdpbmFsU2NhbGUpIHtcbiAgICAgICAgci5fb3JpZ2luYWxTY2FsZS54ID0gZTtcbiAgICAgICAgci5fb3JpZ2luYWxTY2FsZS55ID0gZTtcbiAgICAgICAgci5fdHJhbnNpdGlvbkZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25BZFVuYXZhaWxWd19vbkxvYWQodCwgZSkge1xuICAgIHZhciByID0gdC5pbnMuX2J0blJldHJ5O1xuICAgIHIgJiYgY2MuaXNWYWxpZChyKSAmJiB0aGlzLnNjYWxlQnV0dG9uKHIsIFwiQWRVbmF2YWlsVndcIik7XG4gICAgZSgpO1xuICB9XG4gIG9uV2F0Y2hBZFZ3X29uTG9hZCh0LCBlKSB7XG4gICAgdmFyIHIgPSB0Lmlucy5fYnRuQ29uZmlybTtcbiAgICByICYmIGNjLmlzVmFsaWQocikgJiYgdGhpcy5zY2FsZUJ1dHRvbihyLCBcIldhdGNoQWRWd1wiKTtcbiAgICBlKCk7XG4gIH1cbiAgb25UYXNrUndkVndfZ2V0QWRCdG5TY2FsZSh0LCBlKSB7XG4gICAgZSh7XG4gICAgICByZXR1cm5WYWw6IHRoaXMuc2NhbGUsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICB9KTtcbiAgfVxuICBvblJhbmtCb3hWd19nZXRBZEJ0blNjYWxlKHQsIGUpIHtcbiAgICBlKHtcbiAgICAgIHJldHVyblZhbDogdGhpcy5zY2FsZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgIH0pO1xuICB9XG4gIG9uVExCb3hWd19nZXRBZEJ0blNjYWxlKHQsIGUpIHtcbiAgICBlKHtcbiAgICAgIHJldHVyblZhbDogdGhpcy5zY2FsZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgIH0pO1xuICB9XG4gIG9uRFNTaW1Sd2RWd19nZXRBZEJ0blNjYWxlKHQsIGUpIHtcbiAgICBlKHtcbiAgICAgIHJldHVyblZhbDogdGhpcy5zY2FsZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgIH0pO1xuICB9XG4gIG9uQWdlUndkVndfZ2V0QWRCdG5TY2FsZSh0LCBlKSB7XG4gICAgZSh7XG4gICAgICByZXR1cm5WYWw6IHRoaXMuc2NhbGUsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICB9KTtcbiAgfVxufSJdfQ==
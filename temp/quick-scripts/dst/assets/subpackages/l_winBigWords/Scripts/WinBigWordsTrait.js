
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_winBigWords/Scripts/WinBigWordsTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '28684hTAIVOqaFHT2wx+5fI', 'WinBigWordsTrait');
// subpackages/l_winBigWords/Scripts/WinBigWordsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var WinBigWordsTrait = /** @class */ (function (_super) {
    __extends(WinBigWordsTrait, _super);
    function WinBigWordsTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WinBigWordsTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerEvent([{
                event: "Tile2WinVw_show"
            }]);
    };
    WinBigWordsTrait.prototype.onWinVw_showWinVw = function (t, r) {
        this._applyBigWordsToWinView(t.ins);
        r();
    };
    WinBigWordsTrait.prototype.onTile2WinVw_show = function (t, r) {
        this._applyBigWordsToWinView(t.ins);
        r();
    };
    WinBigWordsTrait.prototype._applyBigWordsToWinView = function (t) {
        var r;
        if (t && cc.isValid(t.node)) {
            var i = null === (r = this._traitData) || void 0 === r ? void 0 : r.fontSize;
            if (i)
                for (var o in i) {
                    var e = i[o];
                    if (e) {
                        var n = t[o];
                        n && cc.isValid(n.node) && (n.fontSize = e);
                    }
                }
            var a = null == i ? void 0 : i._lblTitle;
            if (a) {
                var c = t._lblTitle2;
                c && cc.isValid(c.node) && (c.fontSize = a);
            }
            var f = t._contentNode;
            if (f) {
                var s = cc.find("BoxProgress/BarLayout/Condition", f);
                if (s) {
                    var p = s.getComponent(cc.Label);
                    p && (p.fontSize = 50);
                }
            }
        }
    };
    WinBigWordsTrait.traitKey = "WinBigWords";
    WinBigWordsTrait = __decorate([
        mj.trait,
        mj.class("WinBigWordsTrait")
    ], WinBigWordsTrait);
    return WinBigWordsTrait;
}(Trait_1.default));
exports.default = WinBigWordsTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3dpbkJpZ1dvcmRzL1NjcmlwdHMvV2luQmlnV29yZHNUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBRzNEO0lBQThDLG9DQUFLO0lBQW5EOztJQTBDQSxDQUFDO0lBeENDLGlDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDbEIsS0FBSyxFQUFFLGlCQUFpQjthQUN6QixDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDRCw0Q0FBaUIsR0FBakIsVUFBa0IsQ0FBQyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQyxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCw0Q0FBaUIsR0FBakIsVUFBa0IsQ0FBQyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQyxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxrREFBdUIsR0FBdkIsVUFBd0IsQ0FBQztRQUN2QixJQUFJLENBQUMsQ0FBQztRQUNOLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUM3RSxJQUFJLENBQUM7Z0JBQUUsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDYixJQUFJLENBQUMsRUFBRTt3QkFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDN0M7aUJBQ0Y7WUFDRCxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUN6QyxJQUFJLENBQUMsRUFBRTtnQkFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO2dCQUNyQixDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQzdDO1lBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQztZQUN2QixJQUFJLENBQUMsRUFBRTtnQkFDTCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLENBQUMsRUFBRTtvQkFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQztpQkFDeEI7YUFDRjtTQUNGO0lBQ0gsQ0FBQztJQXhDTSx5QkFBUSxHQUFHLGFBQWEsQ0FBQztJQURiLGdCQUFnQjtRQUZwQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUM7T0FDUixnQkFBZ0IsQ0EwQ3BDO0lBQUQsdUJBQUM7Q0ExQ0QsQUEwQ0MsQ0ExQzZDLGVBQUssR0EwQ2xEO2tCQTFDb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiV2luQmlnV29yZHNUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2luQmlnV29yZHNUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJXaW5CaWdXb3Jkc1wiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KFt7XG4gICAgICBldmVudDogXCJUaWxlMldpblZ3X3Nob3dcIlxuICAgIH1dKTtcbiAgfVxuICBvbldpblZ3X3Nob3dXaW5Wdyh0LCByKSB7XG4gICAgdGhpcy5fYXBwbHlCaWdXb3Jkc1RvV2luVmlldyh0Lmlucyk7XG4gICAgcigpO1xuICB9XG4gIG9uVGlsZTJXaW5Wd19zaG93KHQsIHIpIHtcbiAgICB0aGlzLl9hcHBseUJpZ1dvcmRzVG9XaW5WaWV3KHQuaW5zKTtcbiAgICByKCk7XG4gIH1cbiAgX2FwcGx5QmlnV29yZHNUb1dpblZpZXcodCkge1xuICAgIHZhciByO1xuICAgIGlmICh0ICYmIGNjLmlzVmFsaWQodC5ub2RlKSkge1xuICAgICAgdmFyIGkgPSBudWxsID09PSAociA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5mb250U2l6ZTtcbiAgICAgIGlmIChpKSBmb3IgKHZhciBvIGluIGkpIHtcbiAgICAgICAgdmFyIGUgPSBpW29dO1xuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgIHZhciBuID0gdFtvXTtcbiAgICAgICAgICBuICYmIGNjLmlzVmFsaWQobi5ub2RlKSAmJiAobi5mb250U2l6ZSA9IGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgYSA9IG51bGwgPT0gaSA/IHZvaWQgMCA6IGkuX2xibFRpdGxlO1xuICAgICAgaWYgKGEpIHtcbiAgICAgICAgdmFyIGMgPSB0Ll9sYmxUaXRsZTI7XG4gICAgICAgIGMgJiYgY2MuaXNWYWxpZChjLm5vZGUpICYmIChjLmZvbnRTaXplID0gYSk7XG4gICAgICB9XG4gICAgICB2YXIgZiA9IHQuX2NvbnRlbnROb2RlO1xuICAgICAgaWYgKGYpIHtcbiAgICAgICAgdmFyIHMgPSBjYy5maW5kKFwiQm94UHJvZ3Jlc3MvQmFyTGF5b3V0L0NvbmRpdGlvblwiLCBmKTtcbiAgICAgICAgaWYgKHMpIHtcbiAgICAgICAgICB2YXIgcCA9IHMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICBwICYmIChwLmZvbnRTaXplID0gNTApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19
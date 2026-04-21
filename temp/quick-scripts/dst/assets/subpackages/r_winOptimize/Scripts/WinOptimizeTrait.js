
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_winOptimize/Scripts/WinOptimizeTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '066043azGtCObJgMfEUrw/i', 'WinOptimizeTrait');
// subpackages/r_winOptimize/Scripts/WinOptimizeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var WinOptimizeView_1 = require("./WinOptimizeView");
var WinOptimizeTrait = /** @class */ (function (_super) {
    __extends(WinOptimizeTrait, _super);
    function WinOptimizeTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.requireRes = ["r_winOptimize:prefabs/WinOptimize"];
        return _this;
    }
    WinOptimizeTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    WinOptimizeTrait.prototype.onWinCtrl_initRes = function (t, e) {
        var i = t.ins;
        null == i || i.addPreloadRes("Prefab", this.requireRes);
        e();
    };
    WinOptimizeTrait.prototype.onWinVw_showWinVw = function (t, e) {
        var i, o = t.ins;
        t.args[0];
        if (cc.isValid(o)) {
            var n = o.getContentNode();
            if (cc.isValid(n)) {
                var r = n.getChildByName("WinOptimize");
                if (!cc.isValid(r)) {
                    r = o.createUISync(WinOptimizeView_1.default);
                    cc.isValid(r) && n.addChild(r);
                }
                cc.isValid(r) && (null === (i = r.getComponent(WinOptimizeView_1.default)) || void 0 === i || i.showUI(n));
            }
        }
        e();
    };
    WinOptimizeTrait.traitKey = "WinOptimize";
    WinOptimizeTrait = __decorate([
        mj.trait,
        mj.class("WinOptimizeTrait")
    ], WinOptimizeTrait);
    return WinOptimizeTrait;
}(Trait_1.default));
exports.default = WinOptimizeTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX3dpbk9wdGltaXplL1NjcmlwdHMvV2luT3B0aW1pemVUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELHFEQUFnRDtBQUdoRDtJQUE4QyxvQ0FBSztJQUFuRDtRQUFBLHFFQTRCQztRQTNCQyxnQkFBVSxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQzs7SUEyQnJELENBQUM7SUF6QkMsaUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELDRDQUFpQixHQUFqQixVQUFrQixDQUFDLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEQsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsNENBQWlCLEdBQWpCLFVBQWtCLENBQUMsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ1osQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNWLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDM0IsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDbEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMseUJBQWUsQ0FBQyxDQUFDO29CQUNwQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2hDO2dCQUNELEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyx5QkFBZSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2xHO1NBQ0Y7UUFDRCxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUF6Qk0seUJBQVEsR0FBRyxhQUFhLENBQUM7SUFGYixnQkFBZ0I7UUFGcEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDO09BQ1IsZ0JBQWdCLENBNEJwQztJQUFELHVCQUFDO0NBNUJELEFBNEJDLENBNUI2QyxlQUFLLEdBNEJsRDtrQkE1Qm9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgV2luT3B0aW1pemVWaWV3IGZyb20gJy4vV2luT3B0aW1pemVWaWV3JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiV2luT3B0aW1pemVUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2luT3B0aW1pemVUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgcmVxdWlyZVJlcyA9IFtcInJfd2luT3B0aW1pemU6cHJlZmFicy9XaW5PcHRpbWl6ZVwiXTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJXaW5PcHRpbWl6ZVwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25XaW5DdHJsX2luaXRSZXModCwgZSkge1xuICAgIHZhciBpID0gdC5pbnM7XG4gICAgbnVsbCA9PSBpIHx8IGkuYWRkUHJlbG9hZFJlcyhcIlByZWZhYlwiLCB0aGlzLnJlcXVpcmVSZXMpO1xuICAgIGUoKTtcbiAgfVxuICBvbldpblZ3X3Nob3dXaW5Wdyh0LCBlKSB7XG4gICAgdmFyIGksXG4gICAgICBvID0gdC5pbnM7XG4gICAgdC5hcmdzWzBdO1xuICAgIGlmIChjYy5pc1ZhbGlkKG8pKSB7XG4gICAgICB2YXIgbiA9IG8uZ2V0Q29udGVudE5vZGUoKTtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKG4pKSB7XG4gICAgICAgIHZhciByID0gbi5nZXRDaGlsZEJ5TmFtZShcIldpbk9wdGltaXplXCIpO1xuICAgICAgICBpZiAoIWNjLmlzVmFsaWQocikpIHtcbiAgICAgICAgICByID0gby5jcmVhdGVVSVN5bmMoV2luT3B0aW1pemVWaWV3KTtcbiAgICAgICAgICBjYy5pc1ZhbGlkKHIpICYmIG4uYWRkQ2hpbGQocik7XG4gICAgICAgIH1cbiAgICAgICAgY2MuaXNWYWxpZChyKSAmJiAobnVsbCA9PT0gKGkgPSByLmdldENvbXBvbmVudChXaW5PcHRpbWl6ZVZpZXcpKSB8fCB2b2lkIDAgPT09IGkgfHwgaS5zaG93VUkobikpO1xuICAgICAgfVxuICAgIH1cbiAgICBlKCk7XG4gIH1cbn0iXX0=
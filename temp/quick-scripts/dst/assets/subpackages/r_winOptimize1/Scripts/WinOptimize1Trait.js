
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_winOptimize1/Scripts/WinOptimize1Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd3dbc6uc0FA7rhkEON5qXrG', 'WinOptimize1Trait');
// subpackages/r_winOptimize1/Scripts/WinOptimize1Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var WinOptimize1View_1 = require("./WinOptimize1View");
var WinOptimize1Trait = /** @class */ (function (_super) {
    __extends(WinOptimize1Trait, _super);
    function WinOptimize1Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.requireRes = ["r_winOptimize1:prefabs/WinOptimize1"];
        return _this;
    }
    WinOptimize1Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    WinOptimize1Trait.prototype.onWinCtrl_initRes = function (t, i) {
        var e = t.ins;
        null == e || e.addPreloadRes("Prefab", this.requireRes);
        i();
    };
    WinOptimize1Trait.prototype.onWinVw_showWinVw = function (t, i) {
        var e, n = t.ins;
        t.args[0];
        if (cc.isValid(n)) {
            var o = n.getContentNode();
            if (cc.isValid(o)) {
                var r = o.getChildByName("WinOptimize1");
                if (!cc.isValid(r)) {
                    r = n.createUISync(WinOptimize1View_1.default);
                    cc.isValid(r) && o.addChild(r);
                }
                cc.isValid(r) && (null === (e = r.getComponent(WinOptimize1View_1.default)) || void 0 === e || e.showUI(o));
            }
        }
        i();
    };
    WinOptimize1Trait.traitKey = "WinOptimize1";
    WinOptimize1Trait = __decorate([
        mj.trait,
        mj.class("WinOptimize1Trait")
    ], WinOptimize1Trait);
    return WinOptimize1Trait;
}(Trait_1.default));
exports.default = WinOptimize1Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX3dpbk9wdGltaXplMS9TY3JpcHRzL1dpbk9wdGltaXplMVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsdURBQWtEO0FBR2xEO0lBQStDLHFDQUFLO0lBQXBEO1FBQUEscUVBNEJDO1FBM0JDLGdCQUFVLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDOztJQTJCdkQsQ0FBQztJQXpCQyxrQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsNkNBQWlCLEdBQWpCLFVBQWtCLENBQUMsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDZCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4RCxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCw2Q0FBaUIsR0FBakIsVUFBa0IsQ0FBQyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDWixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1YsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUMzQixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNsQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQywwQkFBZ0IsQ0FBQyxDQUFDO29CQUNyQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2hDO2dCQUNELEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQywwQkFBZ0IsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNuRztTQUNGO1FBQ0QsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBekJNLDBCQUFRLEdBQUcsY0FBYyxDQUFDO0lBRmQsaUJBQWlCO1FBRnJDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQztPQUNULGlCQUFpQixDQTRCckM7SUFBRCx3QkFBQztDQTVCRCxBQTRCQyxDQTVCOEMsZUFBSyxHQTRCbkQ7a0JBNUJvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IFdpbk9wdGltaXplMVZpZXcgZnJvbSAnLi9XaW5PcHRpbWl6ZTFWaWV3JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiV2luT3B0aW1pemUxVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpbk9wdGltaXplMVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICByZXF1aXJlUmVzID0gW1wicl93aW5PcHRpbWl6ZTE6cHJlZmFicy9XaW5PcHRpbWl6ZTFcIl07XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiV2luT3B0aW1pemUxXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbldpbkN0cmxfaW5pdFJlcyh0LCBpKSB7XG4gICAgdmFyIGUgPSB0LmlucztcbiAgICBudWxsID09IGUgfHwgZS5hZGRQcmVsb2FkUmVzKFwiUHJlZmFiXCIsIHRoaXMucmVxdWlyZVJlcyk7XG4gICAgaSgpO1xuICB9XG4gIG9uV2luVndfc2hvd1dpblZ3KHQsIGkpIHtcbiAgICB2YXIgZSxcbiAgICAgIG4gPSB0LmlucztcbiAgICB0LmFyZ3NbMF07XG4gICAgaWYgKGNjLmlzVmFsaWQobikpIHtcbiAgICAgIHZhciBvID0gbi5nZXRDb250ZW50Tm9kZSgpO1xuICAgICAgaWYgKGNjLmlzVmFsaWQobykpIHtcbiAgICAgICAgdmFyIHIgPSBvLmdldENoaWxkQnlOYW1lKFwiV2luT3B0aW1pemUxXCIpO1xuICAgICAgICBpZiAoIWNjLmlzVmFsaWQocikpIHtcbiAgICAgICAgICByID0gbi5jcmVhdGVVSVN5bmMoV2luT3B0aW1pemUxVmlldyk7XG4gICAgICAgICAgY2MuaXNWYWxpZChyKSAmJiBvLmFkZENoaWxkKHIpO1xuICAgICAgICB9XG4gICAgICAgIGNjLmlzVmFsaWQocikgJiYgKG51bGwgPT09IChlID0gci5nZXRDb21wb25lbnQoV2luT3B0aW1pemUxVmlldykpIHx8IHZvaWQgMCA9PT0gZSB8fCBlLnNob3dVSShvKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGkoKTtcbiAgfVxufSJdfQ==
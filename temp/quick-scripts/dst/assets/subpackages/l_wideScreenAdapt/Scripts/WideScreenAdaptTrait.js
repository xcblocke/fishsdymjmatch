
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_wideScreenAdapt/Scripts/WideScreenAdaptTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd79e9qzkMFMg5GBJf/MtW7Y', 'WideScreenAdaptTrait');
// subpackages/l_wideScreenAdapt/Scripts/WideScreenAdaptTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Adapter_1 = require("../../../Scripts/component/Adapter");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var WideScreenAdaptTrait = /** @class */ (function (_super) {
    __extends(WideScreenAdaptTrait, _super);
    function WideScreenAdaptTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WideScreenAdaptTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerTile2Event();
    };
    WideScreenAdaptTrait.prototype.registerTile2Event = function () {
        this.registerEvent([{
                event: "T2TopVw_onLoad",
                priority: 0,
                type: 2
            }]);
    };
    WideScreenAdaptTrait.prototype.isWideScreen = function () {
        var t = cc.view.getFrameSize();
        return t.height / t.width <= cc.Canvas.instance.designResolution.height / cc.Canvas.instance.designResolution.width;
    };
    WideScreenAdaptTrait.prototype.getBlackX = function () {
        return Adapter_1.default.blackX || 0;
    };
    WideScreenAdaptTrait.prototype.onMainGmVw_initLayers = function (t, i) {
        var e = t.ins;
        if (e && cc.isValid(e.node)) {
            this.adaptMainGameTop(e);
            i();
        }
        else
            i();
    };
    WideScreenAdaptTrait.prototype.onT2TopVw_onLoad = function (t, i) {
        var e = t.ins;
        if (e && cc.isValid(e.node)) {
            this.adaptTile2TopView(e);
            i();
        }
        else
            i();
    };
    WideScreenAdaptTrait.prototype.adaptTile2TopView = function (t) {
        if (this.isWideScreen()) {
            var i = this.getBlackX();
            if (!(i <= 0)) {
                var e = t.node;
                if (e && cc.isValid(e)) {
                    var o = e.getChildByName("btnBack");
                    if (o && cc.isValid(o)) {
                        var n = o.position;
                        o.setPosition(n.x - i, n.y);
                    }
                    var a = e.getChildByName("btnSettings");
                    if (a && cc.isValid(a)) {
                        n = a.position;
                        a.setPosition(n.x + i, n.y);
                    }
                }
            }
        }
    };
    WideScreenAdaptTrait.prototype.onDailyView_onLoad = function (t, i) {
        var e = t.ins;
        if (e && cc.isValid(e.node)) {
            this.adaptDailyViewTop(e);
            i();
        }
        else
            i();
    };
    WideScreenAdaptTrait.prototype.onRankVw_onLoad = function (t, i) {
        var e = t.ins;
        if (e && cc.isValid(e.node)) {
            this.adaptRankViewTop(e);
            i();
        }
        else
            i();
    };
    WideScreenAdaptTrait.prototype.adaptRankViewTop = function (t) {
        if (this.isWideScreen()) {
            var i = this.getBlackX();
            if (!(i <= 0)) {
                var e = t.node.getChildByName("top_adapt");
                if (e && cc.isValid(e)) {
                    var o = e.getChildByName("btn_back");
                    if (o && cc.isValid(o)) {
                        var n = o.position;
                        o.setPosition(n.x - i, n.y);
                    }
                    var a = e.getChildByName("btn_tips");
                    if (a && cc.isValid(a)) {
                        n = a.position;
                        a.setPosition(n.x + i, n.y);
                    }
                }
            }
        }
    };
    WideScreenAdaptTrait.prototype.adaptMainGameTop = function (t) {
        if (this.isWideScreen()) {
            var i = this.getBlackX();
            if (!(i <= 0)) {
                var e = t.topRootNode;
                if (e && cc.isValid(e)) {
                    var o = e.getChildByName("btnBack");
                    if (o && cc.isValid(o)) {
                        var n = o.position;
                        o.setPosition(n.x - i, n.y);
                    }
                    var a = e.getChildByName("btnSettings");
                    if (a && cc.isValid(a)) {
                        n = a.position;
                        a.setPosition(n.x + i, n.y);
                    }
                }
            }
        }
    };
    WideScreenAdaptTrait.prototype.onDailyCollVw_onLoad = function (t, i) {
        var e = t.ins;
        if (e && cc.isValid(e.node)) {
            this.adaptDailyCollectViewTop(e);
            i();
        }
        else
            i();
    };
    WideScreenAdaptTrait.prototype.adaptDailyCollectViewTop = function (t) {
        if (this.isWideScreen()) {
            var i = this.getBlackX();
            if (!(i <= 0)) {
                var e = t.node.getChildByName("node_top");
                if (e && cc.isValid(e)) {
                    var o = e.getChildByName("btn_back");
                    if (o && cc.isValid(o)) {
                        var n = o.position;
                        o.setPosition(n.x - i, n.y);
                    }
                }
            }
        }
    };
    WideScreenAdaptTrait.prototype.adaptDailyViewTop = function (t) {
        if (this.isWideScreen()) {
            var i = this.getBlackX();
            if (!(i <= 0)) {
                var e = t.node.getChildByName("node_top");
                if (e && cc.isValid(e)) {
                    var o = e.getChildByName("btn_back");
                    if (o && cc.isValid(o)) {
                        var n = o.position;
                        o.setPosition(n.x - i, n.y);
                    }
                    var a = e.getChildByName("btn_more");
                    if (a && cc.isValid(a)) {
                        n = a.position;
                        a.setPosition(n.x + i, n.y);
                    }
                }
            }
        }
    };
    WideScreenAdaptTrait.traitKey = "WideScreenAdapt";
    WideScreenAdaptTrait = __decorate([
        mj.trait,
        mj.class("WideScreenAdaptTrait")
    ], WideScreenAdaptTrait);
    return WideScreenAdaptTrait;
}(Trait_1.default));
exports.default = WideScreenAdaptTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3dpZGVTY3JlZW5BZGFwdC9TY3JpcHRzL1dpZGVTY3JlZW5BZGFwdFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4REFBeUQ7QUFDekQsZ0VBQTJEO0FBRzNEO0lBQWtELHdDQUFLO0lBQXZEOztJQXNKQSxDQUFDO0lBcEpDLHFDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFDRCxpREFBa0IsR0FBbEI7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ2xCLEtBQUssRUFBRSxnQkFBZ0I7Z0JBQ3ZCLFFBQVEsRUFBRSxDQUFDO2dCQUNYLElBQUksRUFBRSxDQUFDO2FBQ1IsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBQ0QsMkNBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDL0IsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQztJQUN0SCxDQUFDO0lBQ0Qsd0NBQVMsR0FBVDtRQUNFLE9BQU8saUJBQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCxvREFBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNkLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixDQUFDLEVBQUUsQ0FBQztTQUNMOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELCtDQUFnQixHQUFoQixVQUFpQixDQUFDLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLENBQUMsRUFBRSxDQUFDO1NBQ0w7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0QsZ0RBQWlCLEdBQWpCLFVBQWtCLENBQUM7UUFDakIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtnQkFDYixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNmLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ3BDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUM7d0JBQ25CLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUM3QjtvQkFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUN4QyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUN0QixDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQzt3QkFDZixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDN0I7aUJBQ0Y7YUFDRjtTQUNGO0lBQ0gsQ0FBQztJQUNELGlEQUFrQixHQUFsQixVQUFtQixDQUFDLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLENBQUMsRUFBRSxDQUFDO1NBQ0w7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0QsOENBQWUsR0FBZixVQUFnQixDQUFDLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLENBQUMsRUFBRSxDQUFDO1NBQ0w7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0QsK0NBQWdCLEdBQWhCLFVBQWlCLENBQUM7UUFDaEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtnQkFDYixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDM0MsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDckMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTt3QkFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQzt3QkFDbkIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQzdCO29CQUNELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQ3RCLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDO3dCQUNmLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUM3QjtpQkFDRjthQUNGO1NBQ0Y7SUFDSCxDQUFDO0lBQ0QsK0NBQWdCLEdBQWhCLFVBQWlCLENBQUM7UUFDaEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtnQkFDYixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDO2dCQUN0QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUNwQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDO3dCQUNuQixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDN0I7b0JBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDeEMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTt3QkFDdEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUM7d0JBQ2YsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQzdCO2lCQUNGO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFDRCxtREFBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNkLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxDQUFDLEVBQUUsQ0FBQztTQUNMOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELHVEQUF3QixHQUF4QixVQUF5QixDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUM7d0JBQ25CLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUM3QjtpQkFDRjthQUNGO1NBQ0Y7SUFDSCxDQUFDO0lBQ0QsZ0RBQWlCLEdBQWpCLFVBQWtCLENBQUM7UUFDakIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtnQkFDYixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDckMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTt3QkFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQzt3QkFDbkIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQzdCO29CQUNELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQ3RCLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDO3dCQUNmLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUM3QjtpQkFDRjthQUNGO1NBQ0Y7SUFDSCxDQUFDO0lBcEpNLDZCQUFRLEdBQUcsaUJBQWlCLENBQUM7SUFEakIsb0JBQW9CO1FBRnhDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztPQUNaLG9CQUFvQixDQXNKeEM7SUFBRCwyQkFBQztDQXRKRCxBQXNKQyxDQXRKaUQsZUFBSyxHQXNKdEQ7a0JBdEpvQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWRhcHRlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvbXBvbmVudC9BZGFwdGVyJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIldpZGVTY3JlZW5BZGFwdFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWRlU2NyZWVuQWRhcHRUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJXaWRlU2NyZWVuQWRhcHRcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMucmVnaXN0ZXJUaWxlMkV2ZW50KCk7XG4gIH1cbiAgcmVnaXN0ZXJUaWxlMkV2ZW50KCkge1xuICAgIHRoaXMucmVnaXN0ZXJFdmVudChbe1xuICAgICAgZXZlbnQ6IFwiVDJUb3BWd19vbkxvYWRcIixcbiAgICAgIHByaW9yaXR5OiAwLFxuICAgICAgdHlwZTogMlxuICAgIH1dKTtcbiAgfVxuICBpc1dpZGVTY3JlZW4oKSB7XG4gICAgdmFyIHQgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xuICAgIHJldHVybiB0LmhlaWdodCAvIHQud2lkdGggPD0gY2MuQ2FudmFzLmluc3RhbmNlLmRlc2lnblJlc29sdXRpb24uaGVpZ2h0IC8gY2MuQ2FudmFzLmluc3RhbmNlLmRlc2lnblJlc29sdXRpb24ud2lkdGg7XG4gIH1cbiAgZ2V0QmxhY2tYKCkge1xuICAgIHJldHVybiBBZGFwdGVyLmJsYWNrWCB8fCAwO1xuICB9XG4gIG9uTWFpbkdtVndfaW5pdExheWVycyh0LCBpKSB7XG4gICAgdmFyIGUgPSB0LmlucztcbiAgICBpZiAoZSAmJiBjYy5pc1ZhbGlkKGUubm9kZSkpIHtcbiAgICAgIHRoaXMuYWRhcHRNYWluR2FtZVRvcChlKTtcbiAgICAgIGkoKTtcbiAgICB9IGVsc2UgaSgpO1xuICB9XG4gIG9uVDJUb3BWd19vbkxvYWQodCwgaSkge1xuICAgIHZhciBlID0gdC5pbnM7XG4gICAgaWYgKGUgJiYgY2MuaXNWYWxpZChlLm5vZGUpKSB7XG4gICAgICB0aGlzLmFkYXB0VGlsZTJUb3BWaWV3KGUpO1xuICAgICAgaSgpO1xuICAgIH0gZWxzZSBpKCk7XG4gIH1cbiAgYWRhcHRUaWxlMlRvcFZpZXcodCkge1xuICAgIGlmICh0aGlzLmlzV2lkZVNjcmVlbigpKSB7XG4gICAgICB2YXIgaSA9IHRoaXMuZ2V0QmxhY2tYKCk7XG4gICAgICBpZiAoIShpIDw9IDApKSB7XG4gICAgICAgIHZhciBlID0gdC5ub2RlO1xuICAgICAgICBpZiAoZSAmJiBjYy5pc1ZhbGlkKGUpKSB7XG4gICAgICAgICAgdmFyIG8gPSBlLmdldENoaWxkQnlOYW1lKFwiYnRuQmFja1wiKTtcbiAgICAgICAgICBpZiAobyAmJiBjYy5pc1ZhbGlkKG8pKSB7XG4gICAgICAgICAgICB2YXIgbiA9IG8ucG9zaXRpb247XG4gICAgICAgICAgICBvLnNldFBvc2l0aW9uKG4ueCAtIGksIG4ueSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBhID0gZS5nZXRDaGlsZEJ5TmFtZShcImJ0blNldHRpbmdzXCIpO1xuICAgICAgICAgIGlmIChhICYmIGNjLmlzVmFsaWQoYSkpIHtcbiAgICAgICAgICAgIG4gPSBhLnBvc2l0aW9uO1xuICAgICAgICAgICAgYS5zZXRQb3NpdGlvbihuLnggKyBpLCBuLnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbkRhaWx5Vmlld19vbkxvYWQodCwgaSkge1xuICAgIHZhciBlID0gdC5pbnM7XG4gICAgaWYgKGUgJiYgY2MuaXNWYWxpZChlLm5vZGUpKSB7XG4gICAgICB0aGlzLmFkYXB0RGFpbHlWaWV3VG9wKGUpO1xuICAgICAgaSgpO1xuICAgIH0gZWxzZSBpKCk7XG4gIH1cbiAgb25SYW5rVndfb25Mb2FkKHQsIGkpIHtcbiAgICB2YXIgZSA9IHQuaW5zO1xuICAgIGlmIChlICYmIGNjLmlzVmFsaWQoZS5ub2RlKSkge1xuICAgICAgdGhpcy5hZGFwdFJhbmtWaWV3VG9wKGUpO1xuICAgICAgaSgpO1xuICAgIH0gZWxzZSBpKCk7XG4gIH1cbiAgYWRhcHRSYW5rVmlld1RvcCh0KSB7XG4gICAgaWYgKHRoaXMuaXNXaWRlU2NyZWVuKCkpIHtcbiAgICAgIHZhciBpID0gdGhpcy5nZXRCbGFja1goKTtcbiAgICAgIGlmICghKGkgPD0gMCkpIHtcbiAgICAgICAgdmFyIGUgPSB0Lm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0b3BfYWRhcHRcIik7XG4gICAgICAgIGlmIChlICYmIGNjLmlzVmFsaWQoZSkpIHtcbiAgICAgICAgICB2YXIgbyA9IGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fYmFja1wiKTtcbiAgICAgICAgICBpZiAobyAmJiBjYy5pc1ZhbGlkKG8pKSB7XG4gICAgICAgICAgICB2YXIgbiA9IG8ucG9zaXRpb247XG4gICAgICAgICAgICBvLnNldFBvc2l0aW9uKG4ueCAtIGksIG4ueSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBhID0gZS5nZXRDaGlsZEJ5TmFtZShcImJ0bl90aXBzXCIpO1xuICAgICAgICAgIGlmIChhICYmIGNjLmlzVmFsaWQoYSkpIHtcbiAgICAgICAgICAgIG4gPSBhLnBvc2l0aW9uO1xuICAgICAgICAgICAgYS5zZXRQb3NpdGlvbihuLnggKyBpLCBuLnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBhZGFwdE1haW5HYW1lVG9wKHQpIHtcbiAgICBpZiAodGhpcy5pc1dpZGVTY3JlZW4oKSkge1xuICAgICAgdmFyIGkgPSB0aGlzLmdldEJsYWNrWCgpO1xuICAgICAgaWYgKCEoaSA8PSAwKSkge1xuICAgICAgICB2YXIgZSA9IHQudG9wUm9vdE5vZGU7XG4gICAgICAgIGlmIChlICYmIGNjLmlzVmFsaWQoZSkpIHtcbiAgICAgICAgICB2YXIgbyA9IGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5CYWNrXCIpO1xuICAgICAgICAgIGlmIChvICYmIGNjLmlzVmFsaWQobykpIHtcbiAgICAgICAgICAgIHZhciBuID0gby5wb3NpdGlvbjtcbiAgICAgICAgICAgIG8uc2V0UG9zaXRpb24obi54IC0gaSwgbi55KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGEgPSBlLmdldENoaWxkQnlOYW1lKFwiYnRuU2V0dGluZ3NcIik7XG4gICAgICAgICAgaWYgKGEgJiYgY2MuaXNWYWxpZChhKSkge1xuICAgICAgICAgICAgbiA9IGEucG9zaXRpb247XG4gICAgICAgICAgICBhLnNldFBvc2l0aW9uKG4ueCArIGksIG4ueSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uRGFpbHlDb2xsVndfb25Mb2FkKHQsIGkpIHtcbiAgICB2YXIgZSA9IHQuaW5zO1xuICAgIGlmIChlICYmIGNjLmlzVmFsaWQoZS5ub2RlKSkge1xuICAgICAgdGhpcy5hZGFwdERhaWx5Q29sbGVjdFZpZXdUb3AoZSk7XG4gICAgICBpKCk7XG4gICAgfSBlbHNlIGkoKTtcbiAgfVxuICBhZGFwdERhaWx5Q29sbGVjdFZpZXdUb3AodCkge1xuICAgIGlmICh0aGlzLmlzV2lkZVNjcmVlbigpKSB7XG4gICAgICB2YXIgaSA9IHRoaXMuZ2V0QmxhY2tYKCk7XG4gICAgICBpZiAoIShpIDw9IDApKSB7XG4gICAgICAgIHZhciBlID0gdC5ub2RlLmdldENoaWxkQnlOYW1lKFwibm9kZV90b3BcIik7XG4gICAgICAgIGlmIChlICYmIGNjLmlzVmFsaWQoZSkpIHtcbiAgICAgICAgICB2YXIgbyA9IGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fYmFja1wiKTtcbiAgICAgICAgICBpZiAobyAmJiBjYy5pc1ZhbGlkKG8pKSB7XG4gICAgICAgICAgICB2YXIgbiA9IG8ucG9zaXRpb247XG4gICAgICAgICAgICBvLnNldFBvc2l0aW9uKG4ueCAtIGksIG4ueSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFkYXB0RGFpbHlWaWV3VG9wKHQpIHtcbiAgICBpZiAodGhpcy5pc1dpZGVTY3JlZW4oKSkge1xuICAgICAgdmFyIGkgPSB0aGlzLmdldEJsYWNrWCgpO1xuICAgICAgaWYgKCEoaSA8PSAwKSkge1xuICAgICAgICB2YXIgZSA9IHQubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm5vZGVfdG9wXCIpO1xuICAgICAgICBpZiAoZSAmJiBjYy5pc1ZhbGlkKGUpKSB7XG4gICAgICAgICAgdmFyIG8gPSBlLmdldENoaWxkQnlOYW1lKFwiYnRuX2JhY2tcIik7XG4gICAgICAgICAgaWYgKG8gJiYgY2MuaXNWYWxpZChvKSkge1xuICAgICAgICAgICAgdmFyIG4gPSBvLnBvc2l0aW9uO1xuICAgICAgICAgICAgby5zZXRQb3NpdGlvbihuLnggLSBpLCBuLnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgYSA9IGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fbW9yZVwiKTtcbiAgICAgICAgICBpZiAoYSAmJiBjYy5pc1ZhbGlkKGEpKSB7XG4gICAgICAgICAgICBuID0gYS5wb3NpdGlvbjtcbiAgICAgICAgICAgIGEuc2V0UG9zaXRpb24obi54ICsgaSwgbi55KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0=
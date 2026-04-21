
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_mainTopBtmVisible/Scripts/MainTopBtmVisibleTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '40241qpPuNNBa3XOi36EC4L', 'MainTopBtmVisibleTrait');
// subpackages/l_mainTopBtmVisible/Scripts/MainTopBtmVisibleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var MainTopBtmVisibleTrait = /** @class */ (function (_super) {
    __extends(MainTopBtmVisibleTrait, _super);
    function MainTopBtmVisibleTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainTopBtmVisibleTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    MainTopBtmVisibleTrait.prototype.onMainGmVw_calcAreaSz = function (t, o) {
        var e, r;
        (null === (e = t.ins) || void 0 === e ? void 0 : e.topRootNode) && (t.ins.topRootNode.active = false);
        (null === (r = t.ins) || void 0 === r ? void 0 : r.bottomRootNode) && (t.ins.bottomRootNode.active = false);
        o();
    };
    MainTopBtmVisibleTrait.prototype.onInitViewBhv_crtTls = function (t, o) {
        var e, r, i = null === (r = null === (e = t.ins) || void 0 === e ? void 0 : e.context) || void 0 === r ? void 0 : r.gameView;
        (null == i ? void 0 : i.topRootNode) && (i.topRootNode.active = true);
        (null == i ? void 0 : i.bottomRootNode) && (i.bottomRootNode.active = true);
        o();
    };
    MainTopBtmVisibleTrait.traitKey = "MainTopBtmVisible";
    MainTopBtmVisibleTrait = __decorate([
        mj.trait,
        mj.class("MainTopBtmVisibleTrait")
    ], MainTopBtmVisibleTrait);
    return MainTopBtmVisibleTrait;
}(Trait_1.default));
exports.default = MainTopBtmVisibleTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21haW5Ub3BCdG1WaXNpYmxlL1NjcmlwdHMvTWFpblRvcEJ0bVZpc2libGVUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBRzNEO0lBQW9ELDBDQUFLO0lBQXpEOztJQW1CQSxDQUFDO0lBakJDLHVDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxzREFBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQztRQUN0RyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQzVHLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELHFEQUFvQixHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQ3JILENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3RFLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQzVFLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQWpCTSwrQkFBUSxHQUFHLG1CQUFtQixDQUFDO0lBRG5CLHNCQUFzQjtRQUYxQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUM7T0FDZCxzQkFBc0IsQ0FtQjFDO0lBQUQsNkJBQUM7Q0FuQkQsQUFtQkMsQ0FuQm1ELGVBQUssR0FtQnhEO2tCQW5Cb0Isc0JBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiTWFpblRvcEJ0bVZpc2libGVUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblRvcEJ0bVZpc2libGVUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJNYWluVG9wQnRtVmlzaWJsZVwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25NYWluR21Wd19jYWxjQXJlYVN6KHQsIG8pIHtcbiAgICB2YXIgZSwgcjtcbiAgICAobnVsbCA9PT0gKGUgPSB0LmlucykgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS50b3BSb290Tm9kZSkgJiYgKHQuaW5zLnRvcFJvb3ROb2RlLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICAobnVsbCA9PT0gKHIgPSB0LmlucykgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5ib3R0b21Sb290Tm9kZSkgJiYgKHQuaW5zLmJvdHRvbVJvb3ROb2RlLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICBvKCk7XG4gIH1cbiAgb25Jbml0Vmlld0Jodl9jcnRUbHModCwgbykge1xuICAgIHZhciBlLFxuICAgICAgcixcbiAgICAgIGkgPSBudWxsID09PSAociA9IG51bGwgPT09IChlID0gdC5pbnMpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuY29udGV4dCkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5nYW1lVmlldztcbiAgICAobnVsbCA9PSBpID8gdm9pZCAwIDogaS50b3BSb290Tm9kZSkgJiYgKGkudG9wUm9vdE5vZGUuYWN0aXZlID0gdHJ1ZSk7XG4gICAgKG51bGwgPT0gaSA/IHZvaWQgMCA6IGkuYm90dG9tUm9vdE5vZGUpICYmIChpLmJvdHRvbVJvb3ROb2RlLmFjdGl2ZSA9IHRydWUpO1xuICAgIG8oKTtcbiAgfVxufSJdfQ==
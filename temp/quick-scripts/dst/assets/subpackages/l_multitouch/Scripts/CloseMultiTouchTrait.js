
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_multitouch/Scripts/CloseMultiTouchTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '93cfeh8e9hCqJRZI9KxjRKx', 'CloseMultiTouchTrait');
// subpackages/l_multitouch/Scripts/CloseMultiTouchTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var CloseMultiTouchTrait = /** @class */ (function (_super) {
    __extends(CloseMultiTouchTrait, _super);
    function CloseMultiTouchTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CloseMultiTouchTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    CloseMultiTouchTrait.prototype.onLoginM_showLoad = function (t, r) {
        cc.macro.ENABLE_MULTI_TOUCH && (cc.macro.ENABLE_MULTI_TOUCH = false);
        r();
    };
    CloseMultiTouchTrait.traitKey = "CloseMultiTouch";
    CloseMultiTouchTrait = __decorate([
        mj.trait,
        mj.class("CloseMultiTouchTrait")
    ], CloseMultiTouchTrait);
    return CloseMultiTouchTrait;
}(Trait_1.default));
exports.default = CloseMultiTouchTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX211bHRpdG91Y2gvU2NyaXB0cy9DbG9zZU11bHRpVG91Y2hUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBRzNEO0lBQWtELHdDQUFLO0lBQXZEOztJQVNBLENBQUM7SUFQQyxxQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsZ0RBQWlCLEdBQWpCLFVBQWtCLENBQUMsRUFBRSxDQUFDO1FBQ3BCLEVBQUUsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ3JFLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQVBNLDZCQUFRLEdBQUcsaUJBQWlCLENBQUM7SUFEakIsb0JBQW9CO1FBRnhDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztPQUNaLG9CQUFvQixDQVN4QztJQUFELDJCQUFDO0NBVEQsQUFTQyxDQVRpRCxlQUFLLEdBU3REO2tCQVRvQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJDbG9zZU11bHRpVG91Y2hUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvc2VNdWx0aVRvdWNoVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQ2xvc2VNdWx0aVRvdWNoXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbkxvZ2luTV9zaG93TG9hZCh0LCByKSB7XG4gICAgY2MubWFjcm8uRU5BQkxFX01VTFRJX1RPVUNIICYmIChjYy5tYWNyby5FTkFCTEVfTVVMVElfVE9VQ0ggPSBmYWxzZSk7XG4gICAgcigpO1xuICB9XG59Il19
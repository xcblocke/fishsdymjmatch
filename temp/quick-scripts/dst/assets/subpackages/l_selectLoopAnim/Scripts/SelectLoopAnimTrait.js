
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_selectLoopAnim/Scripts/SelectLoopAnimTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c7ced4GUH9P34iigpzpRmyV', 'SelectLoopAnimTrait');
// subpackages/l_selectLoopAnim/Scripts/SelectLoopAnimTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var SelectLoopAnimTrait = /** @class */ (function (_super) {
    __extends(SelectLoopAnimTrait, _super);
    function SelectLoopAnimTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {
            moveUpOffset: 8,
            upDuration: 0.66,
            downDuration: 0.66
        };
        return _this;
    }
    SelectLoopAnimTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    SelectLoopAnimTrait.prototype.getMessageListeners = function () {
        var _t = {};
        _t[GameEvent_1.EGameEvent.TileNode_SelectedFinish] = this.onTileNodeSelectedFinish.bind(this);
        _t[GameEvent_1.EGameEvent.TileNode_BeginUnSelected] = this.onTileNodeBeginUnSelected.bind(this);
        return _t;
    };
    SelectLoopAnimTrait.prototype.onTileNodeSelectedFinish = function (t) {
        t && cc.isValid(t.cardNode) && t.playSelectLoopAnimation(this._config);
    };
    SelectLoopAnimTrait.prototype.onTileNodeBeginUnSelected = function (t) {
        t && cc.isValid(t.cardNode) && t.stopSelectLoopAnimation();
    };
    SelectLoopAnimTrait.traitKey = "SelectLoopAnim";
    SelectLoopAnimTrait = __decorate([
        mj.trait,
        mj.class("SelectLoopAnimTrait")
    ], SelectLoopAnimTrait);
    return SelectLoopAnimTrait;
}(Trait_1.default));
exports.default = SelectLoopAnimTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3NlbGVjdExvb3BBbmltL1NjcmlwdHMvU2VsZWN0TG9vcEFuaW1UcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDJFQUEyRTtBQUczRTtJQUFpRCx1Q0FBSztJQUF0RDtRQUFBLHFFQXNCQztRQXJCQyxhQUFPLEdBQUc7WUFDUixZQUFZLEVBQUUsQ0FBQztZQUNmLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUM7O0lBaUJKLENBQUM7SUFmQyxvQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsaURBQW1CLEdBQW5CO1FBQ0UsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ1osRUFBRSxDQUFDLHNCQUFVLENBQUMsdUJBQXVCLENBQUMsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xGLEVBQUUsQ0FBQyxzQkFBVSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFDRCxzREFBd0IsR0FBeEIsVUFBeUIsQ0FBQztRQUN4QixDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBQ0QsdURBQXlCLEdBQXpCLFVBQTBCLENBQUM7UUFDekIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0lBQzdELENBQUM7SUFmTSw0QkFBUSxHQUFHLGdCQUFnQixDQUFDO0lBTmhCLG1CQUFtQjtRQUZ2QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUM7T0FDWCxtQkFBbUIsQ0FzQnZDO0lBQUQsMEJBQUM7Q0F0QkQsQUFzQkMsQ0F0QmdELGVBQUssR0FzQnJEO2tCQXRCb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IEVHYW1lRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL3NpbXVsYXRvci9jb25zdGFudC9HYW1lRXZlbnQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJTZWxlY3RMb29wQW5pbVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RMb29wQW5pbVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfY29uZmlnID0ge1xuICAgIG1vdmVVcE9mZnNldDogOCxcbiAgICB1cER1cmF0aW9uOiAwLjY2LFxuICAgIGRvd25EdXJhdGlvbjogMC42NlxuICB9O1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlNlbGVjdExvb3BBbmltXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBnZXRNZXNzYWdlTGlzdGVuZXJzKCkge1xuICAgIHZhciBfdCA9IHt9O1xuICAgIF90W0VHYW1lRXZlbnQuVGlsZU5vZGVfU2VsZWN0ZWRGaW5pc2hdID0gdGhpcy5vblRpbGVOb2RlU2VsZWN0ZWRGaW5pc2guYmluZCh0aGlzKTtcbiAgICBfdFtFR2FtZUV2ZW50LlRpbGVOb2RlX0JlZ2luVW5TZWxlY3RlZF0gPSB0aGlzLm9uVGlsZU5vZGVCZWdpblVuU2VsZWN0ZWQuYmluZCh0aGlzKTtcbiAgICByZXR1cm4gX3Q7XG4gIH1cbiAgb25UaWxlTm9kZVNlbGVjdGVkRmluaXNoKHQpIHtcbiAgICB0ICYmIGNjLmlzVmFsaWQodC5jYXJkTm9kZSkgJiYgdC5wbGF5U2VsZWN0TG9vcEFuaW1hdGlvbih0aGlzLl9jb25maWcpO1xuICB9XG4gIG9uVGlsZU5vZGVCZWdpblVuU2VsZWN0ZWQodCkge1xuICAgIHQgJiYgY2MuaXNWYWxpZCh0LmNhcmROb2RlKSAmJiB0LnN0b3BTZWxlY3RMb29wQW5pbWF0aW9uKCk7XG4gIH1cbn0iXX0=

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_buttonScale/Scripts/ButtonScaleTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6ac57SmdqNP37PgVVMn6Wga', 'ButtonScaleTrait');
// subpackages/l_buttonScale/Scripts/ButtonScaleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ButtonScaleTrait = /** @class */ (function (_super) {
    __extends(ButtonScaleTrait, _super);
    function ButtonScaleTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonScaleTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var o = cc.Button.prototype._onTouchMove, e = cc.Button.prototype._onMouseMoveIn, n = cc.Button.prototype._onMouseMoveOut;
        cc.Button.prototype._onTouchMove = function (t) {
            this.transition !== cc.Button.Transition.SCALE && o.call(this, t);
        };
        cc.Button.prototype._onMouseMoveIn = function (t) {
            this.transition !== cc.Button.Transition.SCALE && e.call(this, t);
        };
        cc.Button.prototype._onMouseMoveOut = function (t) {
            this.transition !== cc.Button.Transition.SCALE && n.call(this, t);
        };
    };
    ButtonScaleTrait.traitKey = "ButtonScale";
    ButtonScaleTrait = __decorate([
        mj.trait,
        mj.class("ButtonScaleTrait")
    ], ButtonScaleTrait);
    return ButtonScaleTrait;
}(Trait_1.default));
exports.default = ButtonScaleTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2J1dHRvblNjYWxlL1NjcmlwdHMvQnV0dG9uU2NhbGVUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBRzNEO0lBQThDLG9DQUFLO0lBQW5EOztJQWlCQSxDQUFDO0lBZkMsaUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUN0QyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUN0QyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDO1FBQzFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUM7WUFDNUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEUsQ0FBQyxDQUFDO1FBQ0YsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLFVBQVUsQ0FBQztZQUM5QyxJQUFJLENBQUMsVUFBVSxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwRSxDQUFDLENBQUM7UUFDRixFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDO1lBQy9DLElBQUksQ0FBQyxVQUFVLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLENBQUMsQ0FBQztJQUNKLENBQUM7SUFmTSx5QkFBUSxHQUFHLGFBQWEsQ0FBQztJQURiLGdCQUFnQjtRQUZwQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUM7T0FDUixnQkFBZ0IsQ0FpQnBDO0lBQUQsdUJBQUM7Q0FqQkQsQUFpQkMsQ0FqQjZDLGVBQUssR0FpQmxEO2tCQWpCb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQnV0dG9uU2NhbGVUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uU2NhbGVUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJCdXR0b25TY2FsZVwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdmFyIG8gPSBjYy5CdXR0b24ucHJvdG90eXBlLl9vblRvdWNoTW92ZSxcbiAgICAgIGUgPSBjYy5CdXR0b24ucHJvdG90eXBlLl9vbk1vdXNlTW92ZUluLFxuICAgICAgbiA9IGNjLkJ1dHRvbi5wcm90b3R5cGUuX29uTW91c2VNb3ZlT3V0O1xuICAgIGNjLkJ1dHRvbi5wcm90b3R5cGUuX29uVG91Y2hNb3ZlID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgIHRoaXMudHJhbnNpdGlvbiAhPT0gY2MuQnV0dG9uLlRyYW5zaXRpb24uU0NBTEUgJiYgby5jYWxsKHRoaXMsIHQpO1xuICAgIH07XG4gICAgY2MuQnV0dG9uLnByb3RvdHlwZS5fb25Nb3VzZU1vdmVJbiA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICB0aGlzLnRyYW5zaXRpb24gIT09IGNjLkJ1dHRvbi5UcmFuc2l0aW9uLlNDQUxFICYmIGUuY2FsbCh0aGlzLCB0KTtcbiAgICB9O1xuICAgIGNjLkJ1dHRvbi5wcm90b3R5cGUuX29uTW91c2VNb3ZlT3V0ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgIHRoaXMudHJhbnNpdGlvbiAhPT0gY2MuQnV0dG9uLlRyYW5zaXRpb24uU0NBTEUgJiYgbi5jYWxsKHRoaXMsIHQpO1xuICAgIH07XG4gIH1cbn0iXX0=
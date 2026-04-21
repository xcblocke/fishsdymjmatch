
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_t2DianZanEmoji/Scripts/T2DianZanEmojiTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '57f57dKBppHgoE8Zd27g0ky', 'T2DianZanEmojiTrait');
// subpackages/l_t2DianZanEmoji/Scripts/T2DianZanEmojiTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var c = ["good", "great", "excellent", "amazing"];
var T2DianZanEmojiTrait = /** @class */ (function (_super) {
    __extends(T2DianZanEmojiTrait, _super);
    function T2DianZanEmojiTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    T2DianZanEmojiTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    T2DianZanEmojiTrait.prototype.onTile2DZanBhv_spUrl = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: "spine/tile2Cheer/gameplay_word_face_a"
        });
    };
    T2DianZanEmojiTrait.prototype.onTile2DZanBhv_animName = function (t, r) {
        var e = Math.floor(Math.random() * c.length);
        r({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: c[e]
        });
    };
    T2DianZanEmojiTrait.traitKey = "T2DianZanEmoji";
    T2DianZanEmojiTrait = __decorate([
        mj.trait,
        mj.class("T2DianZanEmojiTrait")
    ], T2DianZanEmojiTrait);
    return T2DianZanEmojiTrait;
}(Trait_1.default));
exports.default = T2DianZanEmojiTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3QyRGlhblphbkVtb2ppL1NjcmlwdHMvVDJEaWFuWmFuRW1vamlUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFHbEQ7SUFBaUQsdUNBQUs7SUFBdEQ7O0lBb0JBLENBQUM7SUFsQkMsb0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELGtEQUFvQixHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUM7WUFDQSxPQUFPLEVBQUUsSUFBSTtZQUNiLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1lBQzFDLFNBQVMsRUFBRSx1Q0FBdUM7U0FDbkQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHFEQUF1QixHQUF2QixVQUF3QixDQUFDLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDO1lBQ0EsT0FBTyxFQUFFLElBQUk7WUFDYixVQUFVLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtZQUMxQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBbEJNLDRCQUFRLEdBQUcsZ0JBQWdCLENBQUM7SUFEaEIsbUJBQW1CO1FBRnZDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztPQUNYLG1CQUFtQixDQW9CdkM7SUFBRCwwQkFBQztDQXBCRCxBQW9CQyxDQXBCZ0QsZUFBSyxHQW9CckQ7a0JBcEJvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xudmFyIGMgPSBbXCJnb29kXCIsIFwiZ3JlYXRcIiwgXCJleGNlbGxlbnRcIiwgXCJhbWF6aW5nXCJdO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJUMkRpYW5aYW5FbW9qaVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUMkRpYW5aYW5FbW9qaVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlQyRGlhblphbkVtb2ppXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvblRpbGUyRFphbkJodl9zcFVybCh0LCByKSB7XG4gICAgcih7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgcmV0dXJuVmFsOiBcInNwaW5lL3RpbGUyQ2hlZXIvZ2FtZXBsYXlfd29yZF9mYWNlX2FcIlxuICAgIH0pO1xuICB9XG4gIG9uVGlsZTJEWmFuQmh2X2FuaW1OYW1lKHQsIHIpIHtcbiAgICB2YXIgZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGMubGVuZ3RoKTtcbiAgICByKHtcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICByZXR1cm5WYWw6IGNbZV1cbiAgICB9KTtcbiAgfVxufSJdfQ==
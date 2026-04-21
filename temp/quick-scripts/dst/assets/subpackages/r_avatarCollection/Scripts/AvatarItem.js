
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_avatarCollection/Scripts/AvatarItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '33d0bw8hj5DSbvJT4cVKDc+', 'AvatarItem');
// subpackages/r_avatarCollection/Scripts/AvatarItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var Utils_1 = require("./Utils");
var AvatarItem = /** @class */ (function (_super) {
    __extends(AvatarItem, _super);
    function AvatarItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._yellowBg = null;
        _this._whiteBg = null;
        _this._rootNode = null;
        _this._progressNode = null;
        _this._progressLabel = null;
        _this._progressBar = null;
        _this._cardSpr = null;
        _this.animTween = null;
        return _this;
    }
    AvatarItem.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var e = this.node.getChildByName("bg");
        this._yellowBg = e.getChildByName("yellow");
        this._whiteBg = e.getChildByName("white");
        this._progressNode = e.getChildByName("progress");
        this._progressBar = this._progressNode.getComponent(cc.ProgressBar);
        this._progressLabel = this._progressNode.getChildByName("value").getComponent(cc.Label);
        this._cardSpr = e.getChildByName("cardHead").getComponent(cc.Sprite);
        this._rootNode = e;
        this.init();
    };
    AvatarItem.prototype.init = function () { };
    AvatarItem.prototype.updateUI = function (t) {
        var e = Utils_1.Key2Info(t.key);
        BaseSprite_1.default.refreshWithNode(this._cardSpr.node, e.path, e.fromAtlas, false, e.bundleName);
        this._progressLabel.string = t.curCount + "/" + t.maxCount;
        this._progressBar.progress = t.curCount / t.maxCount;
        this._progressNode.opacity = t.curCount == t.maxCount ? 0 : 255;
    };
    AvatarItem.prototype.playFinishAnim = function (t) {
        var e = this;
        this.stopAnim();
        this._progressNode.opacity = 255;
        var a = t.curCount, r = a - 2;
        this._progressLabel.string = r + "/" + a;
        this._progressBar.progress = r / a;
        var n = {
            value: r
        };
        this.animTween = cc.tween(n).to(0.34, {
            value: a
        }, {
            progress: function (a, r, n, o) {
                if (cc.isValid(e._progressLabel) && cc.isValid(e._progressBar)) {
                    var i = a + (r - a) * o;
                    e._progressLabel.string = Math.floor(i) + "/" + t.maxCount;
                    e._progressBar.progress = i / t.maxCount;
                }
            }
        }).call(function () {
            e.playEffect();
            e.playProgressFadeout();
            e.stopAnim();
        }).start();
    };
    AvatarItem.prototype.stopAnim = function () {
        if (this.animTween) {
            this.animTween.stop();
            this.animTween = null;
        }
    };
    AvatarItem.prototype.playProgressFadeout = function () {
        cc.tween(this._progressNode).to(0.1, {
            opacity: 0
        }).start();
    };
    AvatarItem.prototype.playEffect = function () {
        var t = BaseSpine_1.default.create("spine/rank_progbar", "in_02", 1, null, true, Utils_1.getBundleName());
        t.node.parent = this._rootNode;
        t.node.position = cc.v3(0, 0, 0);
    };
    AvatarItem.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        this.stopAnim();
    };
    AvatarItem.prefabUrl = "prefabs/AvatarItem";
    AvatarItem.bundleName = Utils_1.getBundleName();
    AvatarItem = __decorate([
        mj.class
    ], AvatarItem);
    return AvatarItem;
}(BaseUI_1.default));
exports.default = AvatarItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2F2YXRhckNvbGxlY3Rpb24vU2NyaXB0cy9BdmF0YXJJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFDMUQseUVBQW9FO0FBQ3BFLDJFQUFzRTtBQUN0RSxpQ0FBa0Q7QUFFbEQ7SUFBd0MsOEJBQU07SUFBOUM7UUFBQSxxRUE4RUM7UUE3RUMsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsbUJBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsa0JBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsY0FBUSxHQUFHLElBQUksQ0FBQztRQUNoQixlQUFTLEdBQUcsSUFBSSxDQUFDOztJQXNFbkIsQ0FBQztJQW5FQywyQkFBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFD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b3J0IEJhc2VVSSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay91aS9CYXNlVUknO1xuaW1wb3J0IEJhc2VTcGluZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwaW5lJztcbmltcG9ydCBCYXNlU3ByaXRlIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3ByaXRlJztcbmltcG9ydCB7IEtleTJJbmZvLCBnZXRCdW5kbGVOYW1lIH0gZnJvbSAnLi9VdGlscyc7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF2YXRhckl0ZW0gZXh0ZW5kcyBCYXNlVUkge1xuICBfeWVsbG93QmcgPSBudWxsO1xuICBfd2hpdGVCZyA9IG51bGw7XG4gIF9yb290Tm9kZSA9IG51bGw7XG4gIF9wcm9ncmVzc05vZGUgPSBudWxsO1xuICBfcHJvZ3Jlc3NMYWJlbCA9IG51bGw7XG4gIF9wcm9ncmVzc0JhciA9IG51bGw7XG4gIF9jYXJkU3ByID0gbnVsbDtcbiAgYW5pbVR3ZWVuID0gbnVsbDtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFicy9BdmF0YXJJdGVtXCI7XG4gIHN0YXRpYyBidW5kbGVOYW1lID0gZ2V0QnVuZGxlTmFtZSgpO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdmFyIGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKTtcbiAgICB0aGlzLl95ZWxsb3dCZyA9IGUuZ2V0Q2hpbGRCeU5hbWUoXCJ5ZWxsb3dcIik7XG4gICAgdGhpcy5fd2hpdGVCZyA9IGUuZ2V0Q2hpbGRCeU5hbWUoXCJ3aGl0ZVwiKTtcbiAgICB0aGlzLl9wcm9ncmVzc05vZGUgPSBlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NcIik7XG4gICAgdGhpcy5fcHJvZ3Jlc3NCYXIgPSB0aGlzLl9wcm9ncmVzc05vZGUuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKTtcbiAgICB0aGlzLl9wcm9ncmVzc0xhYmVsID0gdGhpcy5fcHJvZ3Jlc3NOb2RlLmdldENoaWxkQnlOYW1lKFwidmFsdWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICB0aGlzLl9jYXJkU3ByID0gZS5nZXRDaGlsZEJ5TmFtZShcImNhcmRIZWFkXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgIHRoaXMuX3Jvb3ROb2RlID0gZTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuICBpbml0KCkge31cbiAgdXBkYXRlVUkodCkge1xuICAgIHZhciBlID0gS2V5MkluZm8odC5rZXkpO1xuICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKHRoaXMuX2NhcmRTcHIubm9kZSwgZS5wYXRoLCBlLmZyb21BdGxhcywgZmFsc2UsIGUuYnVuZGxlTmFtZSk7XG4gICAgdGhpcy5fcHJvZ3Jlc3NMYWJlbC5zdHJpbmcgPSB0LmN1ckNvdW50ICsgXCIvXCIgKyB0Lm1heENvdW50O1xuICAgIHRoaXMuX3Byb2dyZXNzQmFyLnByb2dyZXNzID0gdC5jdXJDb3VudCAvIHQubWF4Q291bnQ7XG4gICAgdGhpcy5fcHJvZ3Jlc3NOb2RlLm9wYWNpdHkgPSB0LmN1ckNvdW50ID09IHQubWF4Q291bnQgPyAwIDogMjU1O1xuICB9XG4gIHBsYXlGaW5pc2hBbmltKHQpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgdGhpcy5zdG9wQW5pbSgpO1xuICAgIHRoaXMuX3Byb2dyZXNzTm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgIHZhciBhID0gdC5jdXJDb3VudCxcbiAgICAgIHIgPSBhIC0gMjtcbiAgICB0aGlzLl9wcm9ncmVzc0xhYmVsLnN0cmluZyA9IHIgKyBcIi9cIiArIGE7XG4gICAgdGhpcy5fcHJvZ3Jlc3NCYXIucHJvZ3Jlc3MgPSByIC8gYTtcbiAgICB2YXIgbiA9IHtcbiAgICAgIHZhbHVlOiByXG4gICAgfTtcbiAgICB0aGlzLmFuaW1Ud2VlbiA9IGNjLnR3ZWVuKG4pLnRvKDAuMzQsIHtcbiAgICAgIHZhbHVlOiBhXG4gICAgfSwge1xuICAgICAgcHJvZ3Jlc3M6IGZ1bmN0aW9uIChhLCByLCBuLCBvKSB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKGUuX3Byb2dyZXNzTGFiZWwpICYmIGNjLmlzVmFsaWQoZS5fcHJvZ3Jlc3NCYXIpKSB7XG4gICAgICAgICAgdmFyIGkgPSBhICsgKHIgLSBhKSAqIG87XG4gICAgICAgICAgZS5fcHJvZ3Jlc3NMYWJlbC5zdHJpbmcgPSBNYXRoLmZsb29yKGkpICsgXCIvXCIgKyB0Lm1heENvdW50O1xuICAgICAgICAgIGUuX3Byb2dyZXNzQmFyLnByb2dyZXNzID0gaSAvIHQubWF4Q291bnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgIGUucGxheUVmZmVjdCgpO1xuICAgICAgZS5wbGF5UHJvZ3Jlc3NGYWRlb3V0KCk7XG4gICAgICBlLnN0b3BBbmltKCk7XG4gICAgfSkuc3RhcnQoKTtcbiAgfVxuICBzdG9wQW5pbSgpIHtcbiAgICBpZiAodGhpcy5hbmltVHdlZW4pIHtcbiAgICAgIHRoaXMuYW5pbVR3ZWVuLnN0b3AoKTtcbiAgICAgIHRoaXMuYW5pbVR3ZWVuID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgcGxheVByb2dyZXNzRmFkZW91dCgpIHtcbiAgICBjYy50d2Vlbih0aGlzLl9wcm9ncmVzc05vZGUpLnRvKDAuMSwge1xuICAgICAgb3BhY2l0eTogMFxuICAgIH0pLnN0YXJ0KCk7XG4gIH1cbiAgcGxheUVmZmVjdCgpIHtcbiAgICB2YXIgdCA9IEJhc2VTcGluZS5jcmVhdGUoXCJzcGluZS9yYW5rX3Byb2diYXJcIiwgXCJpbl8wMlwiLCAxLCBudWxsLCB0cnVlLCBnZXRCdW5kbGVOYW1lKCkpO1xuICAgIHQubm9kZS5wYXJlbnQgPSB0aGlzLl9yb290Tm9kZTtcbiAgICB0Lm5vZGUucG9zaXRpb24gPSBjYy52MygwLCAwLCAwKTtcbiAgfVxuICBvbkRlc3Ryb3koKSB7XG4gICAgc3VwZXIub25EZXN0cm95LmNhbGwodGhpcyk7XG4gICAgdGhpcy5zdG9wQW5pbSgpO1xuICB9XG59Il19
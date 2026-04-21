
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_avatarCollection/Scripts/AvatarIcon.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f5dc64nLFtLTLeW5jtCG+Bz', 'AvatarIcon');
// subpackages/r_avatarCollection/Scripts/AvatarIcon.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var Utils_1 = require("./Utils");
var AvatarIcon = /** @class */ (function (_super) {
    __extends(AvatarIcon, _super);
    function AvatarIcon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._yellowBg = null;
        _this._whiteBg = null;
        _this._rootNode = null;
        _this._cardSpr = null;
        return _this;
    }
    Object.defineProperty(AvatarIcon.prototype, "cardSpr", {
        get: function () {
            null == this._cardSpr && (this._cardSpr = this.node.getChildByName("bg").getChildByName("cardHead").getComponent(cc.Sprite));
            return this._cardSpr;
        },
        enumerable: false,
        configurable: true
    });
    AvatarIcon.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var e = this.node.getChildByName("bg");
        this._yellowBg = e.getChildByName("yellow");
        this._whiteBg = e.getChildByName("white");
        this._cardSpr = e.getChildByName("cardHead").getComponent(cc.Sprite);
        this._rootNode = e;
        this.init();
    };
    AvatarIcon.prototype.init = function () { };
    AvatarIcon.prototype.updateUI = function (t) {
        var e = Utils_1.Key2Info(t.key);
        BaseSprite_1.default.refreshWithNode(this.cardSpr.node, e.path, e.fromAtlas, false, e.bundleName);
    };
    AvatarIcon.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
    };
    AvatarIcon.prefabUrl = "prefabs/AvatarIcon";
    AvatarIcon.bundleName = Utils_1.getBundleName();
    AvatarIcon = __decorate([
        mj.class
    ], AvatarIcon);
    return AvatarIcon;
}(BaseUI_1.default));
exports.default = AvatarIcon;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2F2YXRhckNvbGxlY3Rpb24vU2NyaXB0cy9BdmF0YXJJY29uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFDMUQsMkVBQXNFO0FBQ3RFLGlDQUFrRDtBQUVsRDtJQUF3Qyw4QkFBTTtJQUE5QztRQUFBLHFFQTRCQztRQTNCQyxlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixjQUFRLEdBQUcsSUFBSSxDQUFDOztJQXdCbEIsQ0FBQztJQXJCQyxzQkFBSSwrQkFBTzthQUFYO1lBQ0UsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDN0gsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBQ0QsMkJBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBQ0QseUJBQUksR0FBSixjQUFRLENBQUM7SUFDVCw2QkFBUSxHQUFSLFVBQVMsQ0FBQztRQUNSLElBQUksQ0FBQyxHQUFHLGdCQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLG9CQUFVLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFDRCw4QkFBUyxHQUFUO1FBQ0UsaUJBQU0sU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBdEJNLG9CQUFTLEdBQUcsb0JBQW9CLENBQUM7SUFDakMscUJBQVUsR0FBRyxxQkFBYSxFQUFFLENBQUM7SUFOakIsVUFBVTtRQUQ5QixFQUFFLENBQUMsS0FBSztPQUNZLFVBQVUsQ0E0QjlCO0lBQUQsaUJBQUM7Q0E1QkQsQUE0QkMsQ0E1QnVDLGdCQUFNLEdBNEI3QztrQkE1Qm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3VpL0Jhc2VVSSc7XG5pbXBvcnQgQmFzZVNwcml0ZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwcml0ZSc7XG5pbXBvcnQgeyBLZXkySW5mbywgZ2V0QnVuZGxlTmFtZSB9IGZyb20gJy4vVXRpbHMnO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdmF0YXJJY29uIGV4dGVuZHMgQmFzZVVJIHtcbiAgX3llbGxvd0JnID0gbnVsbDtcbiAgX3doaXRlQmcgPSBudWxsO1xuICBfcm9vdE5vZGUgPSBudWxsO1xuICBfY2FyZFNwciA9IG51bGw7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvQXZhdGFySWNvblwiO1xuICBzdGF0aWMgYnVuZGxlTmFtZSA9IGdldEJ1bmRsZU5hbWUoKTtcbiAgZ2V0IGNhcmRTcHIoKSB7XG4gICAgbnVsbCA9PSB0aGlzLl9jYXJkU3ByICYmICh0aGlzLl9jYXJkU3ByID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJjYXJkSGVhZFwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSk7XG4gICAgcmV0dXJuIHRoaXMuX2NhcmRTcHI7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHZhciBlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIik7XG4gICAgdGhpcy5feWVsbG93QmcgPSBlLmdldENoaWxkQnlOYW1lKFwieWVsbG93XCIpO1xuICAgIHRoaXMuX3doaXRlQmcgPSBlLmdldENoaWxkQnlOYW1lKFwid2hpdGVcIik7XG4gICAgdGhpcy5fY2FyZFNwciA9IGUuZ2V0Q2hpbGRCeU5hbWUoXCJjYXJkSGVhZFwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICB0aGlzLl9yb290Tm9kZSA9IGU7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cbiAgaW5pdCgpIHt9XG4gIHVwZGF0ZVVJKHQpIHtcbiAgICB2YXIgZSA9IEtleTJJbmZvKHQua2V5KTtcbiAgICBCYXNlU3ByaXRlLnJlZnJlc2hXaXRoTm9kZSh0aGlzLmNhcmRTcHIubm9kZSwgZS5wYXRoLCBlLmZyb21BdGxhcywgZmFsc2UsIGUuYnVuZGxlTmFtZSk7XG4gIH1cbiAgb25EZXN0cm95KCkge1xuICAgIHN1cGVyLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xuICB9XG59Il19
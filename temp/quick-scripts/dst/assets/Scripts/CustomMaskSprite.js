
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/CustomMaskSprite.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0f8c9tIFWBEmZDmDDBWhF0o', 'CustomMaskSprite');
// Scripts/CustomMaskSprite.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ResManager_1 = require("./framework/manager/ResManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, requireComponent = _a.requireComponent;
var CustomMaskSprite = /** @class */ (function (_super) {
    __extends(CustomMaskSprite, _super);
    function CustomMaskSprite() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._maskSpriteFrame = null;
        _this._renderComponent = null;
        _this._loadComplete = false;
        _this._isAdaptMaskSize = false;
        _this._srcOffset = cc.Vec2.ZERO;
        return _this;
    }
    Object.defineProperty(CustomMaskSprite.prototype, "maskSpriteFrame", {
        get: function () {
            return this._maskSpriteFrame;
        },
        set: function (e) {
            this._maskSpriteFrame = e;
            this.updateProperties();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomMaskSprite.prototype, "isAdaptMaskSize", {
        get: function () {
            return this._isAdaptMaskSize;
        },
        set: function (e) {
            this._isAdaptMaskSize = e;
            this.updateProperties();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomMaskSprite.prototype, "srcOffset", {
        get: function () {
            return this._srcOffset;
        },
        set: function (e) {
            this._srcOffset = e;
            this.updateProperties();
        },
        enumerable: false,
        configurable: true
    });
    CustomMaskSprite.prototype.onLoad = function () {
        var e = this;
        if (!this._renderComponent) {
            this._renderComponent = this.getComponent(cc.Sprite);
            var t = function t(t) {
                t.addRef();
                e._loadComplete = true;
                var o = cc.MaterialVariant.create(t, e._renderComponent);
                e._renderComponent.setMaterial(0, o);
                e.updateProperties();
            };
            ResManager_1.resManager.loadRes("materials/CustomMask", cc.Material, "resources").then(function (e) {
                t(e);
            });
        }
    };
    CustomMaskSprite.prototype.updateProperties = function () {
        if (this._renderComponent && this._loadComplete && this._maskSpriteFrame) {
            var e = this._maskSpriteFrame.getTexture(), t = this._renderComponent.spriteFrame.getTexture(), o = this._maskSpriteFrame.getRect(), n = this._renderComponent.spriteFrame.getRect();
            if (this._isAdaptMaskSize) {
                var i = cc.size(o.width, o.height), r = cc.size(n.width, n.height), a = Math.min(i.width, r.width), l = Math.min(i.height, r.height), s = cc.v2((r.width - a) / 2, (r.height - l) / 2), c = cc.v2((i.width - a) / 2, (i.height - l) / 2);
                Math.abs(this._srcOffset.y) > s.y && (this._srcOffset.y = this._srcOffset.y / this._srcOffset.y * s.y);
                Math.abs(this._srcOffset.x) > s.x && (this._srcOffset.x = this._srcOffset.x / this._srcOffset.x * s.x);
                var u = this._renderComponent.spriteFrame.clone(), p = this._maskSpriteFrame.clone();
                if (this._maskSpriteFrame.isRotated()) {
                    p.setRect(cc.rect(o.x + c.y, o.y + c.x, a, l));
                }
                else {
                    p.setRect(cc.rect(o.x + c.x, o.y + c.y, a, l));
                }
                p.setOriginalSize(cc.size(a, l));
                if (this._renderComponent.spriteFrame.isRotated()) {
                    u.setRect(cc.rect(n.x + s.y + this._srcOffset.y, n.y + s.x - this._srcOffset.x, a, l));
                }
                else {
                    u.setRect(cc.rect(n.x + s.x - this._srcOffset.x, n.y + s.y + this._srcOffset.y, a, l));
                }
                u.setOriginalSize(cc.size(a, l));
                this._maskSpriteFrame = p;
                this._renderComponent.spriteFrame = u;
                o = this._maskSpriteFrame.getRect();
                n = this._renderComponent.spriteFrame.getRect();
                this.node.setContentSize(a, l);
            }
            var f = new cc.Vec4(1, 1, 1, 1);
            if (this._renderComponent.spriteFrame.isRotated()) {
                f.x = n.x / t.width + n.height / t.width;
                f.y = -n.y / t.height;
                f.z = t.height / n.width;
                f.w = t.width / n.height;
            }
            else {
                f.x = n.x / t.width;
                f.y = n.y / t.height;
                f.z = t.width / n.width;
                f.w = t.height / n.height;
            }
            var d = new cc.Vec4(1, 1, 1, 1);
            if (this._maskSpriteFrame.isRotated()) {
                d.x = o.x / e.width + o.height / e.width;
                d.y = o.y / e.height;
                d.z = e.height / o.width;
                d.w = -e.width / o.height;
            }
            else {
                d.x = o.x / e.width;
                d.y = o.y / e.height;
                d.z = e.width / o.width;
                d.w = e.height / o.height;
            }
            this._renderComponent.getMaterial(0).setProperty("maskTexture", e);
            this._renderComponent.getMaterial(0).setProperty("srcOffset", f);
            this._renderComponent.getMaterial(0).setProperty("maskOffset", d);
        }
    };
    CustomMaskSprite.prototype.start = function () { };
    __decorate([
        property
    ], CustomMaskSprite.prototype, "_maskSpriteFrame", void 0);
    __decorate([
        property
    ], CustomMaskSprite.prototype, "_isAdaptMaskSize", void 0);
    __decorate([
        property
    ], CustomMaskSprite.prototype, "_srcOffset", void 0);
    __decorate([
        property({
            type: cc.SpriteFrame,
            tooltip: "遮罩精灵帧"
        })
    ], CustomMaskSprite.prototype, "maskSpriteFrame", null);
    __decorate([
        property({
            type: cc.Boolean,
            tooltip: "是否为遮罩相交区域大小，需运行可见"
        })
    ], CustomMaskSprite.prototype, "isAdaptMaskSize", null);
    __decorate([
        property({
            type: cc.Vec2,
            tooltip: "被遮罩图片偏移,isAdaptMaskSize=true情况下生效"
        })
    ], CustomMaskSprite.prototype, "srcOffset", null);
    CustomMaskSprite = __decorate([
        ccclass,
        executeInEditMode,
        requireComponent(cc.Sprite)
    ], CustomMaskSprite);
    return CustomMaskSprite;
}(cc.Component));
exports.default = CustomMaskSprite;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0N1c3RvbU1hc2tTcHJpdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZEQUE0RDtBQUN0RCxJQUFBLEtBS0YsRUFBRSxDQUFDLFVBQVUsRUFKZixPQUFPLGFBQUEsRUFDUCxRQUFRLGNBQUEsRUFDUixpQkFBaUIsdUJBQUEsRUFDakIsZ0JBQWdCLHNCQUNELENBQUM7QUFJbEI7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUEySEM7UUF6SEMsc0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLHNCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixtQkFBYSxHQUFHLEtBQUssQ0FBQztRQUV0QixzQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFFekIsZ0JBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs7SUFtSDVCLENBQUM7SUE5R0Msc0JBQUksNkNBQWU7YUFBbkI7WUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUMvQixDQUFDO2FBQ0QsVUFBb0IsQ0FBQztZQUNuQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzFCLENBQUM7OztPQUpBO0lBU0Qsc0JBQUksNkNBQWU7YUFBbkI7WUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUMvQixDQUFDO2FBQ0QsVUFBb0IsQ0FBQztZQUNuQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzFCLENBQUM7OztPQUpBO0lBU0Qsc0JBQUksdUNBQVM7YUFBYjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN6QixDQUFDO2FBQ0QsVUFBYyxDQUFDO1lBQ2IsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLGdCQUFn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UixJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU87WUFDaEIsT0FBTyxFQUFFLG1CQUFtQjtTQUM3QixDQUFDOzJEQUdEO0lBU0Q7UUFKQyxRQUFRLENBQUM7WUFDUixJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUk7WUFDYixPQUFPLEVBQUUsbUNBQW1DO1NBQzdDLENBQUM7cURBR0Q7SUFyQ2tCLGdCQUFnQjtRQUhwQyxPQUFPO1FBQ1AsaUJBQWlCO1FBQ2pCLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7T0FDUCxnQkFBZ0IsQ0EySHBDO0lBQUQsdUJBQUM7Q0EzSEQsQUEySEMsQ0EzSDZDLEVBQUUsQ0FBQyxTQUFTLEdBMkh6RDtrQkEzSG9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlc01hbmFnZXIgfSBmcm9tICcuL2ZyYW1ld29yay9tYW5hZ2VyL1Jlc01hbmFnZXInO1xuY29uc3Qge1xuICBjY2NsYXNzLFxuICBwcm9wZXJ0eSxcbiAgZXhlY3V0ZUluRWRpdE1vZGUsXG4gIHJlcXVpcmVDb21wb25lbnRcbn0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbkBleGVjdXRlSW5FZGl0TW9kZVxuQHJlcXVpcmVDb21wb25lbnQoY2MuU3ByaXRlKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tTWFza1Nwcml0ZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eVxuICBfbWFza1Nwcml0ZUZyYW1lID0gbnVsbDtcbiAgX3JlbmRlckNvbXBvbmVudCA9IG51bGw7XG4gIF9sb2FkQ29tcGxldGUgPSBmYWxzZTtcbiAgQHByb3BlcnR5XG4gIF9pc0FkYXB0TWFza1NpemUgPSBmYWxzZTtcbiAgQHByb3BlcnR5XG4gIF9zcmNPZmZzZXQgPSBjYy5WZWMyLlpFUk87XG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgdG9vbHRpcDogXCLpga7nvannsr7ngbXluKdcIlxuICB9KVxuICBnZXQgbWFza1Nwcml0ZUZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9tYXNrU3ByaXRlRnJhbWU7XG4gIH1cbiAgc2V0IG1hc2tTcHJpdGVGcmFtZShlKSB7XG4gICAgdGhpcy5fbWFza1Nwcml0ZUZyYW1lID0gZTtcbiAgICB0aGlzLnVwZGF0ZVByb3BlcnRpZXMoKTtcbiAgfVxuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IGNjLkJvb2xlYW4sXG4gICAgdG9vbHRpcDogXCLmmK/lkKbkuLrpga7nvannm7jkuqTljLrln5/lpKflsI/vvIzpnIDov5DooYzlj6/op4FcIlxuICB9KVxuICBnZXQgaXNBZGFwdE1hc2tTaXplKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0FkYXB0TWFza1NpemU7XG4gIH1cbiAgc2V0IGlzQWRhcHRNYXNrU2l6ZShlKSB7XG4gICAgdGhpcy5faXNBZGFwdE1hc2tTaXplID0gZTtcbiAgICB0aGlzLnVwZGF0ZVByb3BlcnRpZXMoKTtcbiAgfVxuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IGNjLlZlYzIsXG4gICAgdG9vbHRpcDogXCLooqvpga7nvanlm77niYflgY/np7ssaXNBZGFwdE1hc2tTaXplPXRydWXmg4XlhrXkuIvnlJ/mlYhcIlxuICB9KVxuICBnZXQgc3JjT2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLl9zcmNPZmZzZXQ7XG4gIH1cbiAgc2V0IHNyY09mZnNldChlKSB7XG4gICAgdGhpcy5fc3JjT2Zmc2V0ID0gZTtcbiAgICB0aGlzLnVwZGF0ZVByb3BlcnRpZXMoKTtcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIGlmICghdGhpcy5fcmVuZGVyQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLl9yZW5kZXJDb21wb25lbnQgPSB0aGlzLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgdmFyIHQgPSBmdW5jdGlvbiB0KHQpIHtcbiAgICAgICAgdC5hZGRSZWYoKTtcbiAgICAgICAgZS5fbG9hZENvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgdmFyIG8gPSBjYy5NYXRlcmlhbFZhcmlhbnQuY3JlYXRlKHQsIGUuX3JlbmRlckNvbXBvbmVudCk7XG4gICAgICAgIGUuX3JlbmRlckNvbXBvbmVudC5zZXRNYXRlcmlhbCgwLCBvKTtcbiAgICAgICAgZS51cGRhdGVQcm9wZXJ0aWVzKCk7XG4gICAgICB9O1xuICAgICAgcmVzTWFuYWdlci5sb2FkUmVzKFwibWF0ZXJpYWxzL0N1c3RvbU1hc2tcIiwgY2MuTWF0ZXJpYWwsIFwicmVzb3VyY2VzXCIpLnRoZW4oZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdChlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICB1cGRhdGVQcm9wZXJ0aWVzKCkge1xuICAgIGlmICh0aGlzLl9yZW5kZXJDb21wb25lbnQgJiYgdGhpcy5fbG9hZENvbXBsZXRlICYmIHRoaXMuX21hc2tTcHJpdGVGcmFtZSkge1xuICAgICAgdmFyIGUgPSB0aGlzLl9tYXNrU3ByaXRlRnJhbWUuZ2V0VGV4dHVyZSgpLFxuICAgICAgICB0ID0gdGhpcy5fcmVuZGVyQ29tcG9uZW50LnNwcml0ZUZyYW1lLmdldFRleHR1cmUoKSxcbiAgICAgICAgbyA9IHRoaXMuX21hc2tTcHJpdGVGcmFtZS5nZXRSZWN0KCksXG4gICAgICAgIG4gPSB0aGlzLl9yZW5kZXJDb21wb25lbnQuc3ByaXRlRnJhbWUuZ2V0UmVjdCgpO1xuICAgICAgaWYgKHRoaXMuX2lzQWRhcHRNYXNrU2l6ZSkge1xuICAgICAgICB2YXIgaSA9IGNjLnNpemUoby53aWR0aCwgby5oZWlnaHQpLFxuICAgICAgICAgIHIgPSBjYy5zaXplKG4ud2lkdGgsIG4uaGVpZ2h0KSxcbiAgICAgICAgICBhID0gTWF0aC5taW4oaS53aWR0aCwgci53aWR0aCksXG4gICAgICAgICAgbCA9IE1hdGgubWluKGkuaGVpZ2h0LCByLmhlaWdodCksXG4gICAgICAgICAgcyA9IGNjLnYyKChyLndpZHRoIC0gYSkgLyAyLCAoci5oZWlnaHQgLSBsKSAvIDIpLFxuICAgICAgICAgIGMgPSBjYy52MigoaS53aWR0aCAtIGEpIC8gMiwgKGkuaGVpZ2h0IC0gbCkgLyAyKTtcbiAgICAgICAgTWF0aC5hYnModGhpcy5fc3JjT2Zmc2V0LnkpID4gcy55ICYmICh0aGlzLl9zcmNPZmZzZXQueSA9IHRoaXMuX3NyY09mZnNldC55IC8gdGhpcy5fc3JjT2Zmc2V0LnkgKiBzLnkpO1xuICAgICAgICBNYXRoLmFicyh0aGlzLl9zcmNPZmZzZXQueCkgPiBzLnggJiYgKHRoaXMuX3NyY09mZnNldC54ID0gdGhpcy5fc3JjT2Zmc2V0LnggLyB0aGlzLl9zcmNPZmZzZXQueCAqIHMueCk7XG4gICAgICAgIHZhciB1ID0gdGhpcy5fcmVuZGVyQ29tcG9uZW50LnNwcml0ZUZyYW1lLmNsb25lKCksXG4gICAgICAgICAgcCA9IHRoaXMuX21hc2tTcHJpdGVGcmFtZS5jbG9uZSgpO1xuICAgICAgICBpZiAodGhpcy5fbWFza1Nwcml0ZUZyYW1lLmlzUm90YXRlZCgpKSB7XG4gICAgICAgICAgcC5zZXRSZWN0KGNjLnJlY3Qoby54ICsgYy55LCBvLnkgKyBjLngsIGEsIGwpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwLnNldFJlY3QoY2MucmVjdChvLnggKyBjLngsIG8ueSArIGMueSwgYSwgbCkpO1xuICAgICAgICB9XG4gICAgICAgIHAuc2V0T3JpZ2luYWxTaXplKGNjLnNpemUoYSwgbCkpO1xuICAgICAgICBpZiAodGhpcy5fcmVuZGVyQ29tcG9uZW50LnNwcml0ZUZyYW1lLmlzUm90YXRlZCgpKSB7XG4gICAgICAgICAgdS5zZXRSZWN0KGNjLnJlY3Qobi54ICsgcy55ICsgdGhpcy5fc3JjT2Zmc2V0LnksIG4ueSArIHMueCAtIHRoaXMuX3NyY09mZnNldC54LCBhLCBsKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdS5zZXRSZWN0KGNjLnJlY3Qobi54ICsgcy54IC0gdGhpcy5fc3JjT2Zmc2V0LngsIG4ueSArIHMueSArIHRoaXMuX3NyY09mZnNldC55LCBhLCBsKSk7XG4gICAgICAgIH1cbiAgICAgICAgdS5zZXRPcmlnaW5hbFNpemUoY2Muc2l6ZShhLCBsKSk7XG4gICAgICAgIHRoaXMuX21hc2tTcHJpdGVGcmFtZSA9IHA7XG4gICAgICAgIHRoaXMuX3JlbmRlckNvbXBvbmVudC5zcHJpdGVGcmFtZSA9IHU7XG4gICAgICAgIG8gPSB0aGlzLl9tYXNrU3ByaXRlRnJhbWUuZ2V0UmVjdCgpO1xuICAgICAgICBuID0gdGhpcy5fcmVuZGVyQ29tcG9uZW50LnNwcml0ZUZyYW1lLmdldFJlY3QoKTtcbiAgICAgICAgdGhpcy5ub2RlLnNldENvbnRlbnRTaXplKGEsIGwpO1xuICAgICAgfVxuICAgICAgdmFyIGYgPSBuZXcgY2MuVmVjNCgxLCAxLCAxLCAxKTtcbiAgICAgIGlmICh0aGlzLl9yZW5kZXJDb21wb25lbnQuc3ByaXRlRnJhbWUuaXNSb3RhdGVkKCkpIHtcbiAgICAgICAgZi54ID0gbi54IC8gdC53aWR0aCArIG4uaGVpZ2h0IC8gdC53aWR0aDtcbiAgICAgICAgZi55ID0gLW4ueSAvIHQuaGVpZ2h0O1xuICAgICAgICBmLnogPSB0LmhlaWdodCAvIG4ud2lkdGg7XG4gICAgICAgIGYudyA9IHQud2lkdGggLyBuLmhlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGYueCA9IG4ueCAvIHQud2lkdGg7XG4gICAgICAgIGYueSA9IG4ueSAvIHQuaGVpZ2h0O1xuICAgICAgICBmLnogPSB0LndpZHRoIC8gbi53aWR0aDtcbiAgICAgICAgZi53ID0gdC5oZWlnaHQgLyBuLmhlaWdodDtcbiAgICAgIH1cbiAgICAgIHZhciBkID0gbmV3IGNjLlZlYzQoMSwgMSwgMSwgMSk7XG4gICAgICBpZiAodGhpcy5fbWFza1Nwcml0ZUZyYW1lLmlzUm90YXRlZCgpKSB7XG4gICAgICAgIGQueCA9IG8ueCAvIGUud2lkdGggKyBvLmhlaWdodCAvIGUud2lkdGg7XG4gICAgICAgIGQueSA9IG8ueSAvIGUuaGVpZ2h0O1xuICAgICAgICBkLnogPSBlLmhlaWdodCAvIG8ud2lkdGg7XG4gICAgICAgIGQudyA9IC1lLndpZHRoIC8gby5oZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkLnggPSBvLnggLyBlLndpZHRoO1xuICAgICAgICBkLnkgPSBvLnkgLyBlLmhlaWdodDtcbiAgICAgICAgZC56ID0gZS53aWR0aCAvIG8ud2lkdGg7XG4gICAgICAgIGQudyA9IGUuaGVpZ2h0IC8gby5oZWlnaHQ7XG4gICAgICB9XG4gICAgICB0aGlzLl9yZW5kZXJDb21wb25lbnQuZ2V0TWF0ZXJpYWwoMCkuc2V0UHJvcGVydHkoXCJtYXNrVGV4dHVyZVwiLCBlKTtcbiAgICAgIHRoaXMuX3JlbmRlckNvbXBvbmVudC5nZXRNYXRlcmlhbCgwKS5zZXRQcm9wZXJ0eShcInNyY09mZnNldFwiLCBmKTtcbiAgICAgIHRoaXMuX3JlbmRlckNvbXBvbmVudC5nZXRNYXRlcmlhbCgwKS5zZXRQcm9wZXJ0eShcIm1hc2tPZmZzZXRcIiwgZCk7XG4gICAgfVxuICB9XG4gIHN0YXJ0KCkge31cbn0iXX0=
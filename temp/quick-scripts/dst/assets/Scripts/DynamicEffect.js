
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DynamicEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e88a43gqLNLI4zNS++3erCq', 'DynamicEffect');
// Scripts/DynamicEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, executeInEditMode = _a.executeInEditMode, property = _a.property;
function u(e, t) {
    if (!e) {
        var o = new Error(t), n = "" + (o.stack.split("\n")[1] || "");
        n = (n = n + "\n" + (o.stack.split("\n")[2] || "")) + "\n" + (o.stack.split("\n")[3] || "");
        o.message = o.message + "\n" + n;
        throw o;
    }
}
var DynamicEffect = /** @class */ (function (_super) {
    __extends(DynamicEffect, _super);
    function DynamicEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.targetNode = null;
        _this.srcNode = null;
        _this.defaultGroup = "";
        _this._renderCamera = null;
        _this._isDynamic = false;
        return _this;
    }
    Object.defineProperty(DynamicEffect.prototype, "isDynamic", {
        get: function () {
            return this._isDynamic;
        },
        set: function (e) {
            this._isDynamic = e;
        },
        enumerable: false,
        configurable: true
    });
    DynamicEffect.prototype.start = function () {
        this.srcNode = this.node.getChildByName("src");
        u(this.srcNode, this.node.name + "此节点下需要有容器节点src,将内容放入容器节点");
        this.srcNode.active = true;
        this.targetNode && (this.defaultGroup = this.targetNode.group);
        this.targetNode = this.targetNode || this.srcNode;
        var e = this.targetNode.getContentSize(), t = e.width * this.targetNode.scaleX, o = e.height * this.targetNode.scaleY;
        u(t > 0 && o > 0, "节点boundingBox大小需要大于0");
        var n = new cc.RenderTexture();
        n.initWithSize(t, o, cc.gfx.RB_FMT_S8);
        var i = this.srcNode.getChildByName("dynamicRender");
        if (this.targetNode.getChildByName("dynamicRender")) {
            i = this.targetNode.getChildByName("dynamicRender");
        }
        else {
            (i = cc.instantiate(i)).parent = this.targetNode;
        }
        this._renderCamera = i.getComponent(cc.Camera);
        this._renderCamera.targetTexture = n;
        this._renderCamera.orthoSize = 0.5 * o;
        i.active = true;
        this._renderCamera.enabled = false;
        this.refreshSrcEffect();
        var r = new cc.SpriteFrame();
        r.setFlipY(true);
        r.setTexture(n);
        var a = this.node.getComponent(cc.Sprite);
        a || (a = this.node.addComponent(cc.Sprite));
        a.spriteFrame = r;
        a.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        this.node.setContentSize(t, o);
    };
    DynamicEffect.prototype.lateUpdate = function () {
        this.targetNode && this._renderCamera && this._isDynamic && this.refreshSrcEffect();
    };
    DynamicEffect.prototype.refreshSrcEffect = function () {
        this.targetNode.walk(function (e) {
            e.group = "dynamicRender";
        }, null);
        this._renderCamera.render();
        this.targetNode.walk(function (e) {
            e.group = "null";
        }, null);
    };
    DynamicEffect.prototype.onDestroy = function () {
        var e = this;
        this.defaultGroup && this.targetNode.isValid && this.targetNode.walk(function (t) {
            t.group = e.defaultGroup;
        }, null);
    };
    __decorate([
        property({
            type: cc.Node,
            tooltip: "指定动态效果的源节点"
        })
    ], DynamicEffect.prototype, "targetNode", void 0);
    __decorate([
        property
    ], DynamicEffect.prototype, "_isDynamic", void 0);
    __decorate([
        property({
            type: cc.Boolean,
            tooltip: "效果受体是否动态，比如播放中的spine，默认静态,节省性能"
        })
    ], DynamicEffect.prototype, "isDynamic", null);
    DynamicEffect = __decorate([
        ccclass,
        executeInEditMode
    ], DynamicEffect);
    return DynamicEffect;
}(cc.Component));
exports.default = DynamicEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0R5bmFtaWNFZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FJRixFQUFFLENBQUMsVUFBVSxFQUhmLE9BQU8sYUFBQSxFQUNQLGlCQUFpQix1QkFBQSxFQUNqQixRQUFRLGNBQ08sQ0FBQztBQUNsQixTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNiLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFDTixJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDbEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM1RixDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNqQyxNQUFNLENBQUMsQ0FBQztLQUNUO0FBQ0gsQ0FBQztBQUdEO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBd0VDO1FBbkVDLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGFBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixrQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixtQkFBYSxHQUFHLElBQUksQ0FBQztRQUVyQixnQkFBVSxHQUFHLEtBQUssQ0FBQzs7SUE4RHJCLENB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QVEsQ0FBQztZQUNSLElBQUksRUFBRSxFQUFFLENBQUMsT0FBTztZQUNoQixPQUFPLEVBQUUsZ0NBQWdDO1NBQzFDLENBQUM7a0RBR0Q7SUFqQmtCLGFBQWE7UUFGakMsT0FBTztRQUNQLGlCQUFpQjtPQUNHLGFBQWEsQ0F3RWpDO0lBQUQsb0JBQUM7Q0F4RUQsQUF3RUMsQ0F4RTBDLEVBQUUsQ0FBQyxTQUFTLEdBd0V0RDtrQkF4RW9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7XG4gIGNjY2xhc3MsXG4gIGV4ZWN1dGVJbkVkaXRNb2RlLFxuICBwcm9wZXJ0eVxufSA9IGNjLl9kZWNvcmF0b3I7XG5mdW5jdGlvbiB1KGUsIHQpIHtcbiAgaWYgKCFlKSB7XG4gICAgdmFyIG8gPSBuZXcgRXJyb3IodCksXG4gICAgICBuID0gXCJcIiArIChvLnN0YWNrLnNwbGl0KFwiXFxuXCIpWzFdIHx8IFwiXCIpO1xuICAgIG4gPSAobiA9IG4gKyBcIlxcblwiICsgKG8uc3RhY2suc3BsaXQoXCJcXG5cIilbMl0gfHwgXCJcIikpICsgXCJcXG5cIiArIChvLnN0YWNrLnNwbGl0KFwiXFxuXCIpWzNdIHx8IFwiXCIpO1xuICAgIG8ubWVzc2FnZSA9IG8ubWVzc2FnZSArIFwiXFxuXCIgKyBuO1xuICAgIHRocm93IG87XG4gIH1cbn1cbkBjY2NsYXNzXG5AZXhlY3V0ZUluRWRpdE1vZGVcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWNFZmZlY3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgdG9vbHRpcDogXCLmjIflrprliqjmgIHmlYjmnpznmoTmupDoioLngrlcIlxuICB9KVxuICB0YXJnZXROb2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgc3JjTm9kZSA9IG51bGw7XG4gIGRlZmF1bHRHcm91cCA9IFwiXCI7XG4gIF9yZW5kZXJDYW1lcmEgPSBudWxsO1xuICBAcHJvcGVydHlcbiAgX2lzRHluYW1pYyA9IGZhbHNlO1xuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IGNjLkJvb2xlYW4sXG4gICAgdG9vbHRpcDogXCLmlYjmnpzlj5fkvZPmmK/lkKbliqjmgIHvvIzmr5TlpoLmkq3mlL7kuK3nmoRzcGluZe+8jOm7mOiupOmdmeaAgSzoioLnnIHmgKfog71cIlxuICB9KVxuICBnZXQgaXNEeW5hbWljKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0R5bmFtaWM7XG4gIH1cbiAgc2V0IGlzRHluYW1pYyhlKSB7XG4gICAgdGhpcy5faXNEeW5hbWljID0gZTtcbiAgfVxuICBzdGFydCgpIHtcbiAgICB0aGlzLnNyY05vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcmNcIik7XG4gICAgdSh0aGlzLnNyY05vZGUsIHRoaXMubm9kZS5uYW1lICsgXCLmraToioLngrnkuIvpnIDopoHmnInlrrnlmajoioLngrlzcmMs5bCG5YaF5a655pS+5YWl5a655Zmo6IqC54K5XCIpO1xuICAgIHRoaXMuc3JjTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMudGFyZ2V0Tm9kZSAmJiAodGhpcy5kZWZhdWx0R3JvdXAgPSB0aGlzLnRhcmdldE5vZGUuZ3JvdXApO1xuICAgIHRoaXMudGFyZ2V0Tm9kZSA9IHRoaXMudGFyZ2V0Tm9kZSB8fCB0aGlzLnNyY05vZGU7XG4gICAgdmFyIGUgPSB0aGlzLnRhcmdldE5vZGUuZ2V0Q29udGVudFNpemUoKSxcbiAgICAgIHQgPSBlLndpZHRoICogdGhpcy50YXJnZXROb2RlLnNjYWxlWCxcbiAgICAgIG8gPSBlLmhlaWdodCAqIHRoaXMudGFyZ2V0Tm9kZS5zY2FsZVk7XG4gICAgdSh0ID4gMCAmJiBvID4gMCwgXCLoioLngrlib3VuZGluZ0JveOWkp+Wwj+mcgOimgeWkp+S6jjBcIik7XG4gICAgdmFyIG4gPSBuZXcgY2MuUmVuZGVyVGV4dHVyZSgpO1xuICAgIG4uaW5pdFdpdGhTaXplKHQsIG8sIGNjLmdmeC5SQl9GTVRfUzgpO1xuICAgIHZhciBpID0gdGhpcy5zcmNOb2RlLmdldENoaWxkQnlOYW1lKFwiZHluYW1pY1JlbmRlclwiKTtcbiAgICBpZiAodGhpcy50YXJnZXROb2RlLmdldENoaWxkQnlOYW1lKFwiZHluYW1pY1JlbmRlclwiKSkge1xuICAgICAgaSA9IHRoaXMudGFyZ2V0Tm9kZS5nZXRDaGlsZEJ5TmFtZShcImR5bmFtaWNSZW5kZXJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIChpID0gY2MuaW5zdGFudGlhdGUoaSkpLnBhcmVudCA9IHRoaXMudGFyZ2V0Tm9kZTtcbiAgICB9XG4gICAgdGhpcy5fcmVuZGVyQ2FtZXJhID0gaS5nZXRDb21wb25lbnQoY2MuQ2FtZXJhKTtcbiAgICB0aGlzLl9yZW5kZXJDYW1lcmEudGFyZ2V0VGV4dHVyZSA9IG47XG4gICAgdGhpcy5fcmVuZGVyQ2FtZXJhLm9ydGhvU2l6ZSA9IDAuNSAqIG87XG4gICAgaS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuX3JlbmRlckNhbWVyYS5lbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy5yZWZyZXNoU3JjRWZmZWN0KCk7XG4gICAgdmFyIHIgPSBuZXcgY2MuU3ByaXRlRnJhbWUoKTtcbiAgICByLnNldEZsaXBZKHRydWUpO1xuICAgIHIuc2V0VGV4dHVyZShuKTtcbiAgICB2YXIgYSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICBhIHx8IChhID0gdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpKTtcbiAgICBhLnNwcml0ZUZyYW1lID0gcjtcbiAgICBhLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcbiAgICB0aGlzLm5vZGUuc2V0Q29udGVudFNpemUodCwgbyk7XG4gIH1cbiAgbGF0ZVVwZGF0ZSgpIHtcbiAgICB0aGlzLnRhcmdldE5vZGUgJiYgdGhpcy5fcmVuZGVyQ2FtZXJhICYmIHRoaXMuX2lzRHluYW1pYyAmJiB0aGlzLnJlZnJlc2hTcmNFZmZlY3QoKTtcbiAgfVxuICByZWZyZXNoU3JjRWZmZWN0KCkge1xuICAgIHRoaXMudGFyZ2V0Tm9kZS53YWxrKGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLmdyb3VwID0gXCJkeW5hbWljUmVuZGVyXCI7XG4gICAgfSwgbnVsbCk7XG4gICAgdGhpcy5fcmVuZGVyQ2FtZXJhLnJlbmRlcigpO1xuICAgIHRoaXMudGFyZ2V0Tm9kZS53YWxrKGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLmdyb3VwID0gXCJudWxsXCI7XG4gICAgfSwgbnVsbCk7XG4gIH1cbiAgb25EZXN0cm95KCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICB0aGlzLmRlZmF1bHRHcm91cCAmJiB0aGlzLnRhcmdldE5vZGUuaXNWYWxpZCAmJiB0aGlzLnRhcmdldE5vZGUud2FsayhmdW5jdGlvbiAodCkge1xuICAgICAgdC5ncm91cCA9IGUuZGVmYXVsdEdyb3VwO1xuICAgIH0sIG51bGwpO1xuICB9XG59Il19
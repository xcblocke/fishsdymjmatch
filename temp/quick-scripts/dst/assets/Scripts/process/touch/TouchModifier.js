
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/touch/TouchModifier.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '54dc78Mq9BKPJXku07knjK4', 'TouchModifier');
// Scripts/process/touch/TouchModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TouchModifier = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var TouchModifier = /** @class */ (function (_super) {
    __extends(TouchModifier, _super);
    function TouchModifier(t) {
        return _super.call(this, t) || this;
    }
    TouchModifier.prototype.modifyTouchStartLock = function (e) {
        this._context.touchData.setIsLock(e);
    };
    TouchModifier.prototype.modifyTouchStartClear = function (e) {
        this._context.touchData.setIsClear(e);
    };
    TouchModifier.prototype.modifyTouchStart = function (e, t) {
        var o = this._context.touchData;
        o.setIsValid(e);
        o.setPos(t);
        o.setStartPos(t);
        o.setIsMoving(false);
        o.setIsLock(false);
        o.setIsClear(false);
        o.setTileId(null);
    };
    TouchModifier.prototype.modifyTouchMove = function (e) {
        var t = this._context.touchData;
        t.setPos(e);
        t.setIsMoving(true);
    };
    TouchModifier.prototype.modifyTouchEnd = function () {
        this._context.touchData.clear();
    };
    TouchModifier.prototype.modifyTouchCancel = function () {
        this._context.touchData.clear();
    };
    return TouchModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.TouchModifier = TouchModifier;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvdG91Y2gvVG91Y2hNb2RpZmllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFzRDtBQUN0RDtJQUFtQyxpQ0FBYztJQUMvQyx1QkFBWSxDQUFDO2VBQ1gsa0JBQU0sQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUNELDRDQUFvQixHQUFwQixVQUFxQixDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsNkNBQXFCLEdBQXJCLFVBQXNCLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDRCx3Q0FBZ0IsR0FBaEIsVUFBaUIsQ0FBQyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFDaEMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1osQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFDRCx1Q0FBZSxHQUFmLFVBQWdCLENBQUM7UUFDZixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUNoQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1osQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBQ0Qsc0NBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFDRCx5Q0FBaUIsR0FBakI7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQS9CQSxBQStCQyxDQS9Ca0MsK0JBQWMsR0ErQmhEO0FBL0JZLHNDQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUNvcmVPYmplY3QgfSBmcm9tICcuLi8uLi9CYXNlQ29yZU9iamVjdCc7XG5leHBvcnQgY2xhc3MgVG91Y2hNb2RpZmllciBleHRlbmRzIEJhc2VDb3JlT2JqZWN0IHtcbiAgY29uc3RydWN0b3IodCkge1xuICAgIHN1cGVyKHQpO1xuICB9XG4gIG1vZGlmeVRvdWNoU3RhcnRMb2NrKGUpIHtcbiAgICB0aGlzLl9jb250ZXh0LnRvdWNoRGF0YS5zZXRJc0xvY2soZSk7XG4gIH1cbiAgbW9kaWZ5VG91Y2hTdGFydENsZWFyKGUpIHtcbiAgICB0aGlzLl9jb250ZXh0LnRvdWNoRGF0YS5zZXRJc0NsZWFyKGUpO1xuICB9XG4gIG1vZGlmeVRvdWNoU3RhcnQoZSwgdCkge1xuICAgIHZhciBvID0gdGhpcy5fY29udGV4dC50b3VjaERhdGE7XG4gICAgby5zZXRJc1ZhbGlkKGUpO1xuICAgIG8uc2V0UG9zKHQpO1xuICAgIG8uc2V0U3RhcnRQb3ModCk7XG4gICAgby5zZXRJc01vdmluZyhmYWxzZSk7XG4gICAgby5zZXRJc0xvY2soZmFsc2UpO1xuICAgIG8uc2V0SXNDbGVhcihmYWxzZSk7XG4gICAgby5zZXRUaWxlSWQobnVsbCk7XG4gIH1cbiAgbW9kaWZ5VG91Y2hNb3ZlKGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuX2NvbnRleHQudG91Y2hEYXRhO1xuICAgIHQuc2V0UG9zKGUpO1xuICAgIHQuc2V0SXNNb3ZpbmcodHJ1ZSk7XG4gIH1cbiAgbW9kaWZ5VG91Y2hFbmQoKSB7XG4gICAgdGhpcy5fY29udGV4dC50b3VjaERhdGEuY2xlYXIoKTtcbiAgfVxuICBtb2RpZnlUb3VjaENhbmNlbCgpIHtcbiAgICB0aGlzLl9jb250ZXh0LnRvdWNoRGF0YS5jbGVhcigpO1xuICB9XG59Il19

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/objects/EndStrategy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bf92b9b9zFJxIfUz82nkpP+', 'EndStrategy');
// Scripts/objects/EndStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.EndStrategy = void 0;
var BaseCoreObject_1 = require("../BaseCoreObject");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var EndStrategy = /** @class */ (function (_super) {
    __extends(EndStrategy, _super);
    function EndStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(EndStrategy.prototype, "endStrategy", {
        get: function () {
            return this._endStrategy;
        },
        enumerable: false,
        configurable: true
    });
    EndStrategy.prototype.initEndStrategy = function (e) {
        this._endStrategy = e;
    };
    EndStrategy.prototype.checkIsKillCollectCard = function () {
        var e = this._context.collectSystem;
        return !!e && 0 !== e.allCount && e.isAllCollected();
    };
    EndStrategy.prototype.checkIsEnd = function () {
        return this._endStrategy === GameTypeEnums_1.LevelTargetType.KillCollectCard && this.checkIsKillCollectCard();
    };
    return EndStrategy;
}(BaseCoreObject_1.BaseCoreObject));
exports.EndStrategy = EndStrategy;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL29iamVjdHMvRW5kU3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBbUQ7QUFDbkQsMEVBQTJFO0FBQzNFO0lBQWlDLCtCQUFjO0lBQS9DOztJQWNBLENBQUM7SUFiQyxzQkFBSSxvQ0FBVzthQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBQ0QscUNBQWUsR0FBZixVQUFnQixDQUFDO1FBQ2YsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUNELDRDQUFzQixHQUF0QjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkQsQ0FBQztJQUNELGdDQUFVLEdBQVY7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLEtBQUssK0JBQWUsQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDaEcsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FkQSxBQWNDLENBZGdDLCtCQUFjLEdBYzlDO0FBZFksa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlQ29yZU9iamVjdCB9IGZyb20gJy4uL0Jhc2VDb3JlT2JqZWN0JztcbmltcG9ydCB7IExldmVsVGFyZ2V0VHlwZSB9IGZyb20gJy4uL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuZXhwb3J0IGNsYXNzIEVuZFN0cmF0ZWd5IGV4dGVuZHMgQmFzZUNvcmVPYmplY3Qge1xuICBnZXQgZW5kU3RyYXRlZ3koKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuZFN0cmF0ZWd5O1xuICB9XG4gIGluaXRFbmRTdHJhdGVneShlKSB7XG4gICAgdGhpcy5fZW5kU3RyYXRlZ3kgPSBlO1xuICB9XG4gIGNoZWNrSXNLaWxsQ29sbGVjdENhcmQoKSB7XG4gICAgdmFyIGUgPSB0aGlzLl9jb250ZXh0LmNvbGxlY3RTeXN0ZW07XG4gICAgcmV0dXJuICEhZSAmJiAwICE9PSBlLmFsbENvdW50ICYmIGUuaXNBbGxDb2xsZWN0ZWQoKTtcbiAgfVxuICBjaGVja0lzRW5kKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmRTdHJhdGVneSA9PT0gTGV2ZWxUYXJnZXRUeXBlLktpbGxDb2xsZWN0Q2FyZCAmJiB0aGlzLmNoZWNrSXNLaWxsQ29sbGVjdENhcmQoKTtcbiAgfVxufSJdfQ==
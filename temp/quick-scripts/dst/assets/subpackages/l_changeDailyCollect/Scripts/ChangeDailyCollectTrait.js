
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_changeDailyCollect/Scripts/ChangeDailyCollectTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b4d71XMN4ZHwLSZejZNqC3a', 'ChangeDailyCollectTrait');
// subpackages/l_changeDailyCollect/Scripts/ChangeDailyCollectTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ChangeDailyCollectTrait = /** @class */ (function (_super) {
    __extends(ChangeDailyCollectTrait, _super);
    function ChangeDailyCollectTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._changes = [];
        return _this;
    }
    ChangeDailyCollectTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._changes = this._traitData.changes;
    };
    ChangeDailyCollectTrait.prototype.onDailyMdl_itemUrl = function (t, e) {
        var r, n = t.args[0], o = null === (r = (this._changes || []).find(function (t) {
            return t.itemId === n;
        })) || void 0 === r ? void 0 : r.itemUrl;
        if (o) {
            e({
                returnType: TraitCallbackReturnType.jump,
                returnVal: "texture/badge/" + o
            });
        }
        else {
            e();
        }
    };
    ChangeDailyCollectTrait.traitKey = "ChangeDailyCollect";
    ChangeDailyCollectTrait = __decorate([
        mj.trait,
        mj.class("ChangeDailyCollectTrait")
    ], ChangeDailyCollectTrait);
    return ChangeDailyCollectTrait;
}(Trait_1.default));
exports.default = ChangeDailyCollectTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NoYW5nZURhaWx5Q29sbGVjdC9TY3JpcHRzL0NoYW5nZURhaWx5Q29sbGVjdFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFHM0Q7SUFBcUQsMkNBQUs7SUFBMUQ7UUFBQSxxRUFzQkM7UUFyQkMsY0FBUSxHQUFHLEVBQUUsQ0FBQzs7SUFxQmhCLENBQUM7SUFuQkMsd0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztJQUMxQyxDQUFDO0lBQ0Qsb0RBQWtCLEdBQWxCLFVBQW1CLENBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNiLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDdEQsT0FBTyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDM0MsSUFBSSxDQUFDLEVBQUU7WUFDTCxDQUFDLENBQUM7Z0JBQ0EsVUFBVSxFQUFFLHVCQUF1QixDQUFDLElBQUk7Z0JBQ3hDLFNBQVMsRUFBRSxnQkFBZ0IsR0FBRyxDQUFDO2FBQ2hDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxDQUFDLEVBQUUsQ0FBQztTQUNMO0lBQ0gsQ0FBQztJQW5CTSxnQ0FBUSxHQUFHLG9CQUFvQixDQUFDO0lBRnBCLHVCQUF1QjtRQUYzQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUM7T0FDZix1QkFBdUIsQ0FzQjNDO0lBQUQsOEJBQUM7Q0F0QkQsQUFzQkMsQ0F0Qm9ELGVBQUssR0FzQnpEO2tCQXRCb0IsdUJBQXVCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQ2hhbmdlRGFpbHlDb2xsZWN0VHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYW5nZURhaWx5Q29sbGVjdFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfY2hhbmdlcyA9IFtdO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkNoYW5nZURhaWx5Q29sbGVjdFwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fY2hhbmdlcyA9IHRoaXMuX3RyYWl0RGF0YS5jaGFuZ2VzO1xuICB9XG4gIG9uRGFpbHlNZGxfaXRlbVVybCh0LCBlKSB7XG4gICAgdmFyIHIsXG4gICAgICBuID0gdC5hcmdzWzBdLFxuICAgICAgbyA9IG51bGwgPT09IChyID0gKHRoaXMuX2NoYW5nZXMgfHwgW10pLmZpbmQoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHQuaXRlbUlkID09PSBuO1xuICAgICAgfSkpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIuaXRlbVVybDtcbiAgICBpZiAobykge1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXAsXG4gICAgICAgIHJldHVyblZhbDogXCJ0ZXh0dXJlL2JhZGdlL1wiICsgb1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbn0iXX0=
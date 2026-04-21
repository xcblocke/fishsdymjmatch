
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/perfect/Tile2PerfectChecker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c00e9BBZ7lAsZcF4Tta7yB/', 'Tile2PerfectChecker');
// Scripts/process/perfect/Tile2PerfectChecker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2PerfectChecker = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var GameTypeEnums_1 = require("../../core/simulator/constant/GameTypeEnums");
var Tile2PerfectChecker = /** @class */ (function (_super) {
    __extends(Tile2PerfectChecker, _super);
    function Tile2PerfectChecker(t) {
        return _super.call(this, t) || this;
    }
    Tile2PerfectChecker.prototype.checkIsPerfect = function (e, t) {
        if (!e || 0 === e.length)
            return false;
        if (!t || 0 === t.length)
            return false;
        var o = this._context.getGameData().slotBarCount;
        this._context.getTile2SlotType() === GameTypeEnums_1.ETile2SlotType.Slot3 && (o = Math.max(0, o - 1));
        if (o <= 0)
            return false;
        if (e.length !== o)
            return false;
        var n = e[e.length - 1], i = t[0];
        return i[0] === n || i[1] === n;
    };
    return Tile2PerfectChecker;
}(BaseCoreObject_1.BaseCoreObject));
exports.Tile2PerfectChecker = Tile2PerfectChecker;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvcGVyZmVjdC9UaWxlMlBlcmZlY3RDaGVja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXNEO0FBQ3RELDZFQUE2RTtBQUM3RTtJQUF5Qyx1Q0FBYztJQUNyRCw2QkFBWSxDQUFDO2VBQ1gsa0JBQU0sQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUNELDRDQUFjLEdBQWQsVUFBZSxDQUFDLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTTtZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDdkMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLDhCQUFjLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RGLElBQUksQ0FBQyxJQUFJLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUNyQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1gsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FmQSxBQWVDLENBZndDLCtCQUFjLEdBZXREO0FBZlksa0RBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUNvcmVPYmplY3QgfSBmcm9tICcuLi8uLi9CYXNlQ29yZU9iamVjdCc7XG5pbXBvcnQgeyBFVGlsZTJTbG90VHlwZSB9IGZyb20gJy4uLy4uL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuZXhwb3J0IGNsYXNzIFRpbGUyUGVyZmVjdENoZWNrZXIgZXh0ZW5kcyBCYXNlQ29yZU9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHQpIHtcbiAgICBzdXBlcih0KTtcbiAgfVxuICBjaGVja0lzUGVyZmVjdChlLCB0KSB7XG4gICAgaWYgKCFlIHx8IDAgPT09IGUubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKCF0IHx8IDAgPT09IHQubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIG8gPSB0aGlzLl9jb250ZXh0LmdldEdhbWVEYXRhKCkuc2xvdEJhckNvdW50O1xuICAgIHRoaXMuX2NvbnRleHQuZ2V0VGlsZTJTbG90VHlwZSgpID09PSBFVGlsZTJTbG90VHlwZS5TbG90MyAmJiAobyA9IE1hdGgubWF4KDAsIG8gLSAxKSk7XG4gICAgaWYgKG8gPD0gMCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChlLmxlbmd0aCAhPT0gbykgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBuID0gZVtlLmxlbmd0aCAtIDFdLFxuICAgICAgaSA9IHRbMF07XG4gICAgcmV0dXJuIGlbMF0gPT09IG4gfHwgaVsxXSA9PT0gbjtcbiAgfVxufSJdfQ==
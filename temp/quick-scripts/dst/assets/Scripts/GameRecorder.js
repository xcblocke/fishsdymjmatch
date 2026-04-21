
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/GameRecorder.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6698fd7znNDF4vK+nhGCW2y', 'GameRecorder');
// Scripts/GameRecorder.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameRecorder = /** @class */ (function () {
    function GameRecorder() {
        this._list = [];
        this._videoList = [];
    }
    GameRecorder.getInstance = function () {
        this._instance || (this._instance = new GameRecorder());
        return this._instance;
    };
    GameRecorder.prototype.push = function (e) {
        this._list.push(e);
    };
    GameRecorder.prototype.getList = function () {
        return this._videoList;
    };
    GameRecorder.prototype.clear = function () {
        this._list.length > 0 && (this._videoList = this._list.slice());
        this._list = [];
    };
    GameRecorder._instance = null;
    return GameRecorder;
}());
exports.default = GameRecorder;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0dhbWVSZWNvcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtRQUNFLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxlQUFVLEdBQUcsRUFBRSxDQUFDO0lBZ0JsQixDQUFDO0lBZFEsd0JBQVcsR0FBbEI7UUFDRSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDeEQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCwyQkFBSSxHQUFKLFVBQUssQ0FBQztRQUNKLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFDRCw4QkFBTyxHQUFQO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDRCw0QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQWRNLHNCQUFTLEdBQUcsSUFBSSxDQUFDO0lBZTFCLG1CQUFDO0NBbEJELEFBa0JDLElBQUE7a0JBbEJvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVJlY29yZGVyIHtcbiAgX2xpc3QgPSBbXTtcbiAgX3ZpZGVvTGlzdCA9IFtdO1xuICBzdGF0aWMgX2luc3RhbmNlID0gbnVsbDtcbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgIHRoaXMuX2luc3RhbmNlIHx8ICh0aGlzLl9pbnN0YW5jZSA9IG5ldyBHYW1lUmVjb3JkZXIoKSk7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICB9XG4gIHB1c2goZSkge1xuICAgIHRoaXMuX2xpc3QucHVzaChlKTtcbiAgfVxuICBnZXRMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLl92aWRlb0xpc3Q7XG4gIH1cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5fbGlzdC5sZW5ndGggPiAwICYmICh0aGlzLl92aWRlb0xpc3QgPSB0aGlzLl9saXN0LnNsaWNlKCkpO1xuICAgIHRoaXMuX2xpc3QgPSBbXTtcbiAgfVxufSJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/RecentTwoNearCharSel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e9b2cWfRAJI/5JKO1DRa7h5', 'RecentTwoNearCharSel');
// Scripts/RecentTwoNearCharSel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.RecentTwoNearCharSel = void 0;
var ICharSelection_1 = require("./ICharSelection");
var RecentTwoNearCharSel = /** @class */ (function () {
    function RecentTwoNearCharSel() {
    }
    RecentTwoNearCharSel.prototype.selectCharacterPair = function (e, t, o, r) {
        var a, l, s = r.recentCharsHistory.slice(-2), c = new Set(s), u = [];
        try {
            for (var p = __values(o), f = p.next(); !f.done; f = p.next()) {
                var d = f.value;
                u.push(c.has(d[0].resId) ? 100 : 1);
            }
        }
        catch (e) {
            a = {
                error: e
            };
        }
        finally {
            try {
                f && !f.done && (l = p.return) && l.call(p);
            }
            finally {
                if (a)
                    throw a.error;
            }
        }
        return ICharSelection_1.weightedRandomSelect(u);
    };
    return RecentTwoNearCharSel;
}());
exports.RecentTwoNearCharSel = RecentTwoNearCharSel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1JlY2VudFR3b05lYXJDaGFyU2VsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXdEO0FBQ3hEO0lBQUE7SUF5QkEsQ0FBQztJQXhCQyxrREFBbUIsR0FBbkIsVUFBb0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDbEMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUNkLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDVCxJQUFJO1lBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNyQztTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO1FBQ0QsT0FBTyxxQ0FBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQXpCQSxBQXlCQyxJQUFBO0FBekJZLG9EQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdlaWdodGVkUmFuZG9tU2VsZWN0IH0gZnJvbSAnLi9JQ2hhclNlbGVjdGlvbic7XG5leHBvcnQgY2xhc3MgUmVjZW50VHdvTmVhckNoYXJTZWwge1xuICBzZWxlY3RDaGFyYWN0ZXJQYWlyKGUsIHQsIG8sIHIpIHtcbiAgICB2YXIgYSxcbiAgICAgIGwsXG4gICAgICBzID0gci5yZWNlbnRDaGFyc0hpc3Rvcnkuc2xpY2UoLTIpLFxuICAgICAgYyA9IG5ldyBTZXQocyksXG4gICAgICB1ID0gW107XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHAgPSBfX3ZhbHVlcyhvKSwgZiA9IHAubmV4dCgpOyAhZi5kb25lOyBmID0gcC5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGQgPSBmLnZhbHVlO1xuICAgICAgICB1LnB1c2goYy5oYXMoZFswXS5yZXNJZCkgPyAxMDAgOiAxKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBhID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZiAmJiAhZi5kb25lICYmIChsID0gcC5yZXR1cm4pICYmIGwuY2FsbChwKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChhKSB0aHJvdyBhLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gd2VpZ2h0ZWRSYW5kb21TZWxlY3QodSk7XG4gIH1cbn0iXX0=
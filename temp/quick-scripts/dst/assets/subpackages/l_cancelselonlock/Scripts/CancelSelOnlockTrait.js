
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_cancelselonlock/Scripts/CancelSelOnlockTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c3b61BN2XdH3blc1A3s/AZV', 'CancelSelOnlockTrait');
// subpackages/l_cancelselonlock/Scripts/CancelSelOnlockTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var CancelSelOnlockTrait = /** @class */ (function (_super) {
    __extends(CancelSelOnlockTrait, _super);
    function CancelSelOnlockTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CancelSelOnlockTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    CancelSelOnlockTrait.prototype.onIptTchStart_Lock = function (t, e) {
        var r = t.args[0], o = t.ins, n = o.gameContext.getTileMapObject();
        if (r) {
            var i = n.getSelectTileIds();
            if (1 != i.length) {
                e();
                return;
            }
            var a = i[0], l = n.getTileObject(a), c = n.getTileObject(r);
            if (l && c && l.isValid && c.isValid && (this.isAdjacent(l, c) || this.isCoverLockTile(n, c, l))) {
                o.pushUnSelectAllTileIds();
                e();
                return;
            }
        }
        e();
    };
    CancelSelOnlockTrait.prototype.isAdjacent = function (t, e) {
        if (t.layer == e.layer) {
            var r = Math.abs(t.gridPosX - e.gridPosX) <= 2 && Math.abs(t.gridPosY - e.gridPosY) <= 1, o = Math.abs(t.gridPosX - e.gridPosX) <= 1 && Math.abs(t.gridPosY - e.gridPosY) <= 2;
            if (r || o)
                return true;
        }
        return false;
    };
    CancelSelOnlockTrait.prototype.isCoverLockTile = function (t, e, r) {
        for (var o, n, i = [], l = false, c = e.layer + 1; c <= t.maxLayerIndex; c++)
            for (var f = 0; f < e.ownerGridIds.length; f++) {
                var u = t.getTileObjectByGridIndex(c, e.ownerGridIds[f]);
                if (u) {
                    i.push(u);
                    u.id == r.id && (l = true);
                }
            }
        if (l) {
            try {
                for (var s = __values(i), p = s.next(); !p.done; p = s.next())
                    if (p.value.layer < r.layer)
                        return false;
            }
            catch (t) {
                o = {
                    error: t
                };
            }
            finally {
                try {
                    p && !p.done && (n = s.return) && n.call(s);
                }
                finally {
                    if (o)
                        throw o.error;
                }
            }
            return true;
        }
        return false;
    };
    CancelSelOnlockTrait.traitKey = "CancelSelOnlock";
    CancelSelOnlockTrait = __decorate([
        mj.trait,
        mj.class("CancelSelOnlockTrait")
    ], CancelSelOnlockTrait);
    return CancelSelOnlockTrait;
}(Trait_1.default));
exports.default = CancelSelOnlockTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NhbmNlbHNlbG9ubG9jay9TY3JpcHRzL0NhbmNlbFNlbE9ubG9ja1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFHM0Q7SUFBa0Qsd0NBQUs7SUFBdkQ7O0lBNERBLENBQUM7SUExREMscUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELGlEQUFrQixHQUFsQixVQUFtQixDQUFDLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNmLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUNULENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLEVBQUU7WUFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFO2dCQUNqQixDQUFDLEVBQUUsQ0FBQztnQkFDSixPQUFPO2FBQ1I7WUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ1YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQ3RCLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDaEcs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QUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztPQUNaLG9CQUFvQixDQTREeEM7SUFBRCwyQkFBQztDQTVERCxBQTREQyxDQTVEaUQsZUFBSyxHQTREdEQ7a0JBNURvQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJDYW5jZWxTZWxPbmxvY2tUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FuY2VsU2VsT25sb2NrVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQ2FuY2VsU2VsT25sb2NrXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbklwdFRjaFN0YXJ0X0xvY2sodCwgZSkge1xuICAgIHZhciByID0gdC5hcmdzWzBdLFxuICAgICAgbyA9IHQuaW5zLFxuICAgICAgbiA9IG8uZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpO1xuICAgIGlmIChyKSB7XG4gICAgICB2YXIgaSA9IG4uZ2V0U2VsZWN0VGlsZUlkcygpO1xuICAgICAgaWYgKDEgIT0gaS5sZW5ndGgpIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgYSA9IGlbMF0sXG4gICAgICAgIGwgPSBuLmdldFRpbGVPYmplY3QoYSksXG4gICAgICAgIGMgPSBuLmdldFRpbGVPYmplY3Qocik7XG4gICAgICBpZiAobCAmJiBjICYmIGwuaXNWYWxpZCAmJiBjLmlzVmFsaWQgJiYgKHRoaXMuaXNBZGphY2VudChsLCBjKSB8fCB0aGlzLmlzQ292ZXJMb2NrVGlsZShuLCBjLCBsKSkpIHtcbiAgICAgICAgby5wdXNoVW5TZWxlY3RBbGxUaWxlSWRzKCk7XG4gICAgICAgIGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBlKCk7XG4gIH1cbiAgaXNBZGphY2VudCh0LCBlKSB7XG4gICAgaWYgKHQubGF5ZXIgPT0gZS5sYXllcikge1xuICAgICAgdmFyIHIgPSBNYXRoLmFicyh0LmdyaWRQb3NYIC0gZS5ncmlkUG9zWCkgPD0gMiAmJiBNYXRoLmFicyh0LmdyaWRQb3NZIC0gZS5ncmlkUG9zWSkgPD0gMSxcbiAgICAgICAgbyA9IE1hdGguYWJzKHQuZ3JpZFBvc1ggLSBlLmdyaWRQb3NYKSA8PSAxICYmIE1hdGguYWJzKHQuZ3JpZFBvc1kgLSBlLmdyaWRQb3NZKSA8PSAyO1xuICAgICAgaWYgKHIgfHwgbykgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpc0NvdmVyTG9ja1RpbGUodCwgZSwgcikge1xuICAgIGZvciAodmFyIG8sIG4sIGkgPSBbXSwgbCA9IGZhbHNlLCBjID0gZS5sYXllciArIDE7IGMgPD0gdC5tYXhMYXllckluZGV4OyBjKyspIGZvciAodmFyIGYgPSAwOyBmIDwgZS5vd25lckdyaWRJZHMubGVuZ3RoOyBmKyspIHtcbiAgICAgIHZhciB1ID0gdC5nZXRUaWxlT2JqZWN0QnlHcmlkSW5kZXgoYywgZS5vd25lckdyaWRJZHNbZl0pO1xuICAgICAgaWYgKHUpIHtcbiAgICAgICAgaS5wdXNoKHUpO1xuICAgICAgICB1LmlkID09IHIuaWQgJiYgKGwgPSB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIHMgPSBfX3ZhbHVlcyhpKSwgcCA9IHMubmV4dCgpOyAhcC5kb25lOyBwID0gcy5uZXh0KCkpIGlmIChwLnZhbHVlLmxheWVyIDwgci5sYXllcikgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICBvID0ge1xuICAgICAgICAgIGVycm9yOiB0XG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHAgJiYgIXAuZG9uZSAmJiAobiA9IHMucmV0dXJuKSAmJiBuLmNhbGwocyk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0iXX0=
"use strict";
cc._RF.push(module, '44a7cYubttG3pFUBZczMTeo', 'BehaviorExecutionBuilder');
// Scripts/out/BehaviorExecutionBuilder.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BehaviorExecutionBuilder = void 0;
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var BehaviorsInterface_1 = require("../simulator/constant/BehaviorsInterface");
var BehaviorsMapping_1 = require("../mapping/BehaviorsMapping");
this && this.__spread;
var BehaviorExecutionBuilder = /** @class */ (function () {
    function BehaviorExecutionBuilder() {
        this._nodeMap = new Map();
        this._rootNodes = [];
        this._idCounter = 0;
    }
    BehaviorExecutionBuilder.prototype.generateId = function () {
        return "behavior_" + ++this._idCounter + "_" + Date.now();
    };
    BehaviorExecutionBuilder.prototype.addBehavior = function (e) {
        var t = this.generateId(), o = {
            id: t,
            type: BehaviorsInterface_1.EBehaviorExecutionType.Single,
            data: e
        };
        this._nodeMap.set(t, o);
        this._rootNodes.push(o);
        return t;
    };
    BehaviorExecutionBuilder.prototype.addContainerNode = function (e, t) {
        var o = this.generateId(), n = {
            id: o,
            type: e,
            data: [],
            children: [],
            parentId: t
        };
        this._nodeMap.set(o, n);
        if (t) {
            var i = this._nodeMap.get(t);
            if (i) {
                i.type === BehaviorsInterface_1.EBehaviorExecutionType.Single && (e === BehaviorsInterface_1.EBehaviorExecutionType.Parallel ? this.convertToParallel(i) : this.convertToSerial(i));
                i.children || (i.children = []);
                i.children.push(n);
                i.data = i.children;
            }
        }
        else
            this._rootNodes.push(n);
        return o;
    };
    BehaviorExecutionBuilder.prototype.addParallelParentNode = function (e) {
        return this.addContainerNodeDirect(BehaviorsInterface_1.EBehaviorExecutionType.Parallel, e);
    };
    BehaviorExecutionBuilder.prototype.addSerialParentNode = function (e) {
        return this.addContainerNodeDirect(BehaviorsInterface_1.EBehaviorExecutionType.Serial, e);
    };
    BehaviorExecutionBuilder.prototype.addSerialNode = function (e, t) {
        return this.addSingleNodeToContainer(e, t, BehaviorsInterface_1.EBehaviorExecutionType.Serial);
    };
    BehaviorExecutionBuilder.prototype.addParallelNode = function (e, t) {
        return this.addSingleNodeToContainer(e, t, BehaviorsInterface_1.EBehaviorExecutionType.Parallel);
    };
    BehaviorExecutionBuilder.prototype.addContainerNodeDirect = function (e, t) {
        var o = this.generateId(), n = {
            id: o,
            type: e,
            data: [],
            children: [],
            parentId: t
        };
        this._nodeMap.set(o, n);
        if (!t) {
            this._rootNodes.push(n);
            return o;
        }
        var i = this._nodeMap.get(t);
        if (!i) {
            this._nodeMap.delete(o);
            throw new Error("未找到父节点ID: " + t);
        }
        if (i.type === BehaviorsInterface_1.EBehaviorExecutionType.Single) {
            this._nodeMap.delete(o);
            throw new Error("父节点 " + t + " 是 Single，Direct 模式不允许自动转换");
        }
        i.children || (i.children = []);
        i.children.push(n);
        i.data = i.children;
        return o;
    };
    BehaviorExecutionBuilder.prototype.addSingleNodeToContainer = function (e, t, o) {
        var n = this._nodeMap.get(e);
        if (!n)
            throw new Error("未找到父节点ID: " + e);
        if (n.type !== o)
            throw new Error("父节点 " + e + " 不是 " + o + " 类型");
        var i = this.generateId(), r = {
            id: i,
            type: BehaviorsInterface_1.EBehaviorExecutionType.Single,
            data: t,
            parentId: e
        };
        this._nodeMap.set(i, r);
        n.children || (n.children = []);
        n.children.push(r);
        n.data = n.children;
        return i;
    };
    BehaviorExecutionBuilder.prototype.insertBehavior = function (e, t, o) {
        var n = this._nodeMap.get(e);
        if (!n)
            throw new Error("未找到目标行为ID: " + e);
        var i = this.generateId(), l = {
            id: i,
            type: BehaviorsInterface_1.EBehaviorExecutionType.Single,
            data: t,
            parentId: e
        };
        this._nodeMap.set(i, l);
        if (o === BehaviorsEnum_1.EInsertType.Parallel) {
            this.insertParallel(n, l);
        }
        else {
            this.insertSerial(n, l);
        }
        return i;
    };
    BehaviorExecutionBuilder.prototype.insertParallel = function (e, t) {
        e.type !== BehaviorsInterface_1.EBehaviorExecutionType.Parallel && this.convertToParallel(e);
        var o = e.children || [];
        o.push(t);
        e.children = o;
        e.data = o;
    };
    BehaviorExecutionBuilder.prototype.insertSerial = function (e, t) {
        e.type !== BehaviorsInterface_1.EBehaviorExecutionType.Serial && this.convertToSerial(e);
        var o = e.children || [];
        o.push(t);
        e.children = o;
        e.data = o;
    };
    BehaviorExecutionBuilder.prototype.convertToSerial = function (e) {
        if (e.type === BehaviorsInterface_1.EBehaviorExecutionType.Single) {
            var t = e.data, o = {
                id: this.generateId(),
                type: BehaviorsInterface_1.EBehaviorExecutionType.Single,
                data: t,
                parentId: e.id
            };
            e.type = BehaviorsInterface_1.EBehaviorExecutionType.Serial;
            e.children = [o];
            e.data = e.children;
            this._nodeMap.set(o.id, o);
        }
    };
    BehaviorExecutionBuilder.prototype.convertToParallel = function (e) {
        if (e.type === BehaviorsInterface_1.EBehaviorExecutionType.Single) {
            var t = e.data, o = {
                id: this.generateId(),
                type: BehaviorsInterface_1.EBehaviorExecutionType.Single,
                data: t,
                parentId: e.id
            };
            e.type = BehaviorsInterface_1.EBehaviorExecutionType.Parallel;
            e.children = [o];
            e.data = e.children;
            this._nodeMap.set(o.id, o);
        }
    };
    BehaviorExecutionBuilder.prototype.findNodeByName = function (e) {
        var t, o;
        try {
            for (var r = __values(this._nodeMap), l = r.next(); !l.done; l = r.next()) {
                var s = __read(l.value, 2), c = (s[0], s[1]);
                if (c.type === BehaviorsInterface_1.EBehaviorExecutionType.Single) {
                    var u = c.data;
                    if (u && u.name === e)
                        return c;
                }
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                l && !l.done && (o = r.return) && o.call(r);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
    };
    BehaviorExecutionBuilder.prototype.insertBehaviorWithNodeByName = function (e, t, o) {
        var n = this.findNodeByName(e);
        if (n) {
            var i = this.findParentContainer(n), l = i.indexOf(n);
            if (-1 !== l) {
                var s = this.generateId(), c = {
                    id: s,
                    type: o === BehaviorsEnum_1.EInsertType.Parallel ? BehaviorsInterface_1.EBehaviorExecutionType.Parallel : BehaviorsInterface_1.EBehaviorExecutionType.Serial,
                    parentId: n.parentId,
                    children: [],
                    data: []
                }, u = this.generateId(), p = {
                    id: u,
                    type: BehaviorsInterface_1.EBehaviorExecutionType.Single,
                    data: t,
                    parentId: s
                };
                n.parentId = s;
                c.children = [n, p];
                c.data = c.children;
                i[l] = c;
                this._nodeMap.set(s, c);
                this._nodeMap.set(u, p);
                return u;
            }
        }
    };
    BehaviorExecutionBuilder.prototype.findParentContainer = function (e) {
        if (!e.parentId)
            return this._rootNodes;
        var t = this._nodeMap.get(e.parentId);
        return t && t.children ? t.children : this._rootNodes;
    };
    BehaviorExecutionBuilder.prototype.getBehavior = function (e) {
        return this._nodeMap.get(e);
    };
    BehaviorExecutionBuilder.prototype.isEmpty = function () {
        return 0 === this._rootNodes.length;
    };
    BehaviorExecutionBuilder.prototype.removeBehavior = function (e) {
        var t = this, o = this._nodeMap.get(e);
        if (!o)
            return false;
        var n = this.findParentContainer(o), i = n.indexOf(o);
        -1 !== i && n.splice(i, 1);
        this._nodeMap.delete(e);
        o.children && o.children.forEach(function (e) {
            t.removeBehavior(e.id);
        });
        return true;
    };
    BehaviorExecutionBuilder.prototype.getAllBehaviorIds = function () {
        return Array.from(this._nodeMap.keys());
    };
    BehaviorExecutionBuilder.prototype.getTreeVisualization = function () {
        if (1 === this._rootNodes.length && this._rootNodes[0].type === BehaviorsInterface_1.EBehaviorExecutionType.Single && this._rootNodes[0].data.name === BehaviorsMapping_1.BehaviorsMapping.Empty)
            return "";
        var e = function e(t, o, n) {
            if (o === void 0) { o = ""; }
            if (n === void 0) { n = true; }
            return t.map(function (n, i) {
                var r = i === t.length - 1, l = o + (r ? "   " : "│  "), s = o + (r ? "└─ " : "├─ ") + "[" + n.id + "] ";
                if (n.type === BehaviorsInterface_1.EBehaviorExecutionType.Single)
                    s += "" + n.data.name;
                else {
                    s += "" + n.type.toUpperCase();
                    n.children && n.children.length > 0 && (s += "\n" + e(n.children, l, false));
                }
                return s;
            }).join("\n");
        };
        return e(this._rootNodes);
    };
    BehaviorExecutionBuilder.prototype.build = function (e) {
        var t = this;
        if (0 === this._rootNodes.length)
            return null;
        var o = null == e ? void 0 : e.inputType, n = null == e ? void 0 : e.key;
        return 1 === this._rootNodes.length ? this.convertNodeToExecution(this._rootNodes[0], o, n) : {
            type: BehaviorsInterface_1.EBehaviorExecutionType.Serial,
            key: n,
            inputType: o,
            data: this._rootNodes.map(function (e) {
                return t.convertNodeToExecution(e, o, n);
            })
        };
    };
    BehaviorExecutionBuilder.prototype.convertNodeToExecution = function (e, t, o) {
        var n = this;
        return e.type === BehaviorsInterface_1.EBehaviorExecutionType.Single ? {
            type: e.type,
            inputType: t,
            data: e.data,
            key: o
        } : {
            key: o,
            type: e.type,
            inputType: t,
            data: (e.children || []).map(function (e) {
                return n.convertNodeToExecution(e, t, o);
            })
        };
    };
    BehaviorExecutionBuilder.prototype.clear = function () {
        this._nodeMap.clear();
        this._rootNodes.length = 0;
        this._idCounter = 0;
    };
    BehaviorExecutionBuilder.prototype.getStatus = function () {
        return {
            totalNodes: this._nodeMap.size,
            rootNodes: this._rootNodes.length,
            nextId: this._idCounter + 1
        };
    };
    return BehaviorExecutionBuilder;
}());
exports.BehaviorExecutionBuilder = BehaviorExecutionBuilder;

cc._RF.pop();
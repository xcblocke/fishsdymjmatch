import { EInsertType } from '../constant/BehaviorsEnum';
import { EBehaviorExecutionType } from '../simulator/constant/BehaviorsInterface';
import { BehaviorsMapping } from '../mapping/BehaviorsMapping';
this && this.__spread;
export class BehaviorExecutionBuilder {
  _nodeMap = new Map();
  _rootNodes = [];
  _idCounter = 0;
  generateId() {
    return "behavior_" + ++this._idCounter + "_" + Date.now();
  }
  addBehavior(e) {
    var t = this.generateId(),
      o = {
        id: t,
        type: EBehaviorExecutionType.Single,
        data: e
      };
    this._nodeMap.set(t, o);
    this._rootNodes.push(o);
    return t;
  }
  addContainerNode(e, t) {
    var o = this.generateId(),
      n = {
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
        i.type === EBehaviorExecutionType.Single && (e === EBehaviorExecutionType.Parallel ? this.convertToParallel(i) : this.convertToSerial(i));
        i.children || (i.children = []);
        i.children.push(n);
        i.data = i.children;
      }
    } else this._rootNodes.push(n);
    return o;
  }
  addParallelParentNode(e) {
    return this.addContainerNodeDirect(EBehaviorExecutionType.Parallel, e);
  }
  addSerialParentNode(e) {
    return this.addContainerNodeDirect(EBehaviorExecutionType.Serial, e);
  }
  addSerialNode(e, t) {
    return this.addSingleNodeToContainer(e, t, EBehaviorExecutionType.Serial);
  }
  addParallelNode(e, t) {
    return this.addSingleNodeToContainer(e, t, EBehaviorExecutionType.Parallel);
  }
  addContainerNodeDirect(e, t) {
    var o = this.generateId(),
      n = {
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
    if (i.type === EBehaviorExecutionType.Single) {
      this._nodeMap.delete(o);
      throw new Error("父节点 " + t + " 是 Single，Direct 模式不允许自动转换");
    }
    i.children || (i.children = []);
    i.children.push(n);
    i.data = i.children;
    return o;
  }
  addSingleNodeToContainer(e, t, o) {
    var n = this._nodeMap.get(e);
    if (!n) throw new Error("未找到父节点ID: " + e);
    if (n.type !== o) throw new Error("父节点 " + e + " 不是 " + o + " 类型");
    var i = this.generateId(),
      r = {
        id: i,
        type: EBehaviorExecutionType.Single,
        data: t,
        parentId: e
      };
    this._nodeMap.set(i, r);
    n.children || (n.children = []);
    n.children.push(r);
    n.data = n.children;
    return i;
  }
  insertBehavior(e, t, o) {
    var n = this._nodeMap.get(e);
    if (!n) throw new Error("未找到目标行为ID: " + e);
    var i = this.generateId(),
      l = {
        id: i,
        type: EBehaviorExecutionType.Single,
        data: t,
        parentId: e
      };
    this._nodeMap.set(i, l);
    if (o === EInsertType.Parallel) {
      this.insertParallel(n, l);
    } else {
      this.insertSerial(n, l);
    }
    return i;
  }
  insertParallel(e, t) {
    e.type !== EBehaviorExecutionType.Parallel && this.convertToParallel(e);
    var o = e.children || [];
    o.push(t);
    e.children = o;
    e.data = o;
  }
  insertSerial(e, t) {
    e.type !== EBehaviorExecutionType.Serial && this.convertToSerial(e);
    var o = e.children || [];
    o.push(t);
    e.children = o;
    e.data = o;
  }
  convertToSerial(e) {
    if (e.type === EBehaviorExecutionType.Single) {
      var t = e.data,
        o = {
          id: this.generateId(),
          type: EBehaviorExecutionType.Single,
          data: t,
          parentId: e.id
        };
      e.type = EBehaviorExecutionType.Serial;
      e.children = [o];
      e.data = e.children;
      this._nodeMap.set(o.id, o);
    }
  }
  convertToParallel(e) {
    if (e.type === EBehaviorExecutionType.Single) {
      var t = e.data,
        o = {
          id: this.generateId(),
          type: EBehaviorExecutionType.Single,
          data: t,
          parentId: e.id
        };
      e.type = EBehaviorExecutionType.Parallel;
      e.children = [o];
      e.data = e.children;
      this._nodeMap.set(o.id, o);
    }
  }
  findNodeByName(e) {
    var t, o;
    try {
      for (var r = __values(this._nodeMap), l = r.next(); !l.done; l = r.next()) {
        var s = __read(l.value, 2),
          c = (s[0], s[1]);
        if (c.type === EBehaviorExecutionType.Single) {
          var u = c.data;
          if (u && u.name === e) return c;
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        l && !l.done && (o = r.return) && o.call(r);
      } finally {
        if (t) throw t.error;
      }
    }
  }
  insertBehaviorWithNodeByName(e, t, o) {
    var n = this.findNodeByName(e);
    if (n) {
      var i = this.findParentContainer(n),
        l = i.indexOf(n);
      if (-1 !== l) {
        var s = this.generateId(),
          c = {
            id: s,
            type: o === EInsertType.Parallel ? EBehaviorExecutionType.Parallel : EBehaviorExecutionType.Serial,
            parentId: n.parentId,
            children: [],
            data: []
          },
          u = this.generateId(),
          p = {
            id: u,
            type: EBehaviorExecutionType.Single,
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
  }
  findParentContainer(e) {
    if (!e.parentId) return this._rootNodes;
    var t = this._nodeMap.get(e.parentId);
    return t && t.children ? t.children : this._rootNodes;
  }
  getBehavior(e) {
    return this._nodeMap.get(e);
  }
  isEmpty() {
    return 0 === this._rootNodes.length;
  }
  removeBehavior(e) {
    var t = this,
      o = this._nodeMap.get(e);
    if (!o) return false;
    var n = this.findParentContainer(o),
      i = n.indexOf(o);
    -1 !== i && n.splice(i, 1);
    this._nodeMap.delete(e);
    o.children && o.children.forEach(function (e) {
      t.removeBehavior(e.id);
    });
    return true;
  }
  getAllBehaviorIds() {
    return Array.from(this._nodeMap.keys());
  }
  getTreeVisualization() {
    if (1 === this._rootNodes.length && this._rootNodes[0].type === EBehaviorExecutionType.Single && this._rootNodes[0].data.name === BehaviorsMapping.Empty) return "";
    var e = function e(t, o = "", n = true) {
      return t.map(function (n, i) {
        var r = i === t.length - 1,
          l = o + (r ? "   " : "│  "),
          s = o + (r ? "└─ " : "├─ ") + "[" + n.id + "] ";
        if (n.type === EBehaviorExecutionType.Single) s += "" + n.data.name;else {
          s += "" + n.type.toUpperCase();
          n.children && n.children.length > 0 && (s += "\n" + e(n.children, l, false));
        }
        return s;
      }).join("\n");
    };
    return e(this._rootNodes);
  }
  build(e) {
    var t = this;
    if (0 === this._rootNodes.length) return null;
    var o = null == e ? void 0 : e.inputType,
      n = null == e ? void 0 : e.key;
    return 1 === this._rootNodes.length ? this.convertNodeToExecution(this._rootNodes[0], o, n) : {
      type: EBehaviorExecutionType.Serial,
      key: n,
      inputType: o,
      data: this._rootNodes.map(function (e) {
        return t.convertNodeToExecution(e, o, n);
      })
    };
  }
  convertNodeToExecution(e, t, o) {
    var n = this;
    return e.type === EBehaviorExecutionType.Single ? {
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
  }
  clear() {
    this._nodeMap.clear();
    this._rootNodes.length = 0;
    this._idCounter = 0;
  }
  getStatus() {
    return {
      totalNodes: this._nodeMap.size,
      rootNodes: this._rootNodes.length,
      nextId: this._idCounter + 1
    };
  }
}
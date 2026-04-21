export var buildAllClearNodeInfos = function (e, t) {
  for (var o = [], n = 0; n + 1 < e.length; n += 2) {
    var i = e[n],
      r = e[n + 1],
      a = t.getTileNodePos(i),
      l = t.getTileNodePos(r),
      s = t.cloneTileNode(i),
      c = t.cloneTileNode(r);
    if (s && c && a && l) {
      s.parent = t.effectNode;
      c.parent = t.effectNode;
      s.position = a;
      c.position = l;
      s.active = true;
      c.active = false;
      t.removeTileNode(i);
      o.push({
        cardNode1: s,
        cardNode2: c,
        tileId1: i,
        tileId2: r,
        targetPos1: cc.v3(),
        targetPos2: cc.v3(),
        runIndex: 0
      });
    } else {
      null == s || s.destroy();
      null == c || c.destroy();
    }
  }
  return o;
};
export var applyAllClearSlotCardNodeScaleToBoard = function (e, t, o) {
  if (cc.isValid(e) && cc.isValid(t)) if (o && cc.isValid(o)) {
    var n = o.getBoundingBoxToWorld().width,
      i = t.getBoundingBoxToWorld().width;
    if (n < 0.0001 || i < 0.0001) e.setScale(1, 1, 1);else {
      var r = n / i;
      e.setScale(e.scaleX * r, e.scaleY * r, e.scaleZ);
    }
  } else e.setScale(1, 1, 1);
};
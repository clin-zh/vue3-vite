function insertAtCursorInEditor(dom, text) {
  let sel, range;
  if (window.getSelection) {
    sel = window.getSelection();
    if (!dom.contains(sel?.anchorNode)) {
      return false;
    }
    if (sel.getRangeAt && sel.rangeCount) {
      range = sel.getRangeAt(0);
      range.deleteContents();
      let el = document.createElement('div');
      el.innerHTML = `<span contenteditable="false">${text}</span>`;
      let frag = document.createDocumentFragment(), node, lastNode;
      while ((node = el.firstChild)) {
        lastNode = frag.appendChild(node);
      }
      range.insertNode(frag);
      if (lastNode) {
        range = range.cloneRange();
        range.setStartAfter(lastNode);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
      }
    }
  } else if (document.selection && document.selection.type !== 'Control') {
    document.selection.createRange().pasteHTML(text);
  }
  return true;
}

export {
  insertAtCursorInEditor
}


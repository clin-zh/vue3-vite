function insertAtCursorInEditor(dom, text, isEditable = true) {
  if (window.getSelection) {
    if (!dom.savedRange) return false;
    const newNode = document.createElement('span');
    newNode.contentEditable = isEditable;
    newNode.innerHTML = text;
    dom.savedRange.deleteContents();
    dom.savedRange.insertNode(newNode);
    dom.savedRange.setStartAfter(newNode);
    dom.savedRange.setEndAfter(newNode);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(dom.savedRange);
  } else if (document.selection && document.selection.type !== 'Control') {
    document.selection.createRange().pasteHTML(text);
  }
  return true;

  // let sel, range;
  // if (window.getSelection) {
  //   console.log('dom', dom.savedRange)
  //   sel = window.getSelection();
  //   if (!dom.contains(sel?.anchorNode)) {
  //     return false;
  //   }
  //   if (sel.getRangeAt && sel.rangeCount) {
  //     range = sel.getRangeAt(0);
  //     range.deleteContents();
  //     let el = document.createElement('div');
  //     el.innerHTML = `<span contenteditable="false">${text}</span>`;
  //     let frag = document.createDocumentFragment(), node, lastNode;
  //     while ((node = el.firstChild)) {
  //       lastNode = frag.appendChild(node);
  //     }
  //     range.insertNode(frag);
  //     if (lastNode) {
  //       range = range.cloneRange();
  //       range.setStartAfter(lastNode);
  //       range.collapse(true);
  //       sel.removeAllRanges();
  //       sel.addRange(range);
  //     }
  //   }
  // } else if (document.selection && document.selection.type !== 'Control') {
  //   document.selection.createRange().pasteHTML(text);
  // }
  // return true;
}

export {
  insertAtCursorInEditor
}


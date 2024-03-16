function getElementWidth(content, padding, border) {
  contentWidth = Number.parseFloat(content);
  paddingWidth = Number.parseFloat(padding);
  borderWidth = Number.parseFloat(border);
  let boxSizing = contentWidth + paddingWidth * 2 + borderWidth * 2;
  return boxSizing;
}

console.log(getElementWidth('50px', '8px', '4px'));
console.log(getElementWidth('60px', '12px', '8.5px'));
console.log(getElementWidth('200px', '0px', '0px'));

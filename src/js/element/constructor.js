/* ConstructElement is a constructor for creating an HTML
   element. We pass it an object which is handled like so:
 ************************************************************/
const ConstructElement = o => {
  let elementTag = document.createElement(o.element);

  // Id of element we will append this newly constructed element to
  let appendToIdElement = document.getElementById(o.appendToId);

  // No element tag or id of element to append it to is passed? Error!
  if (!elementTag || !appendToIdElement) {
    const error =
      'No element tag and/or id of DOM element to append it to was provided';
    console.error(error);
    alert(error);
  }

  // Element properties, such as id, width, height, border, classes, etc.
  if (o.id) elementTag.id = o.id;
  if (o.height) elementTag.style.height = o.height;
  if (o.width) elementTag.style.width = o.width;
  if (o.border) elementTag.style.border = o.border;
  if (o.classes)
    for (let i = 0; i < o.classes.length; i++) {
      elementTag.classList.add(o.classes[i]);
    }

  if (o.innerHTML) elementTag.innerHTML = o.innerHTML;

  // Finally, append newly constructed element to specified DOM element:
  appendToIdElement.appendChild(elementTag);
};

export { ConstructElement };

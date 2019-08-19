/* Dependencies:
 ************************************************************/
import { ConstructElement } from '../element/constructor';
import { squareNumbers } from './square-numbers';
import { roundBorder } from './round-border';

/* Construct the grid:
 ************************************************************/
const ConstructGrid = o => {
  const container = document.getElementById(o.container.id);
  container.style.border = `${o.container.border.width}px ${
    o.container.border.style
  } ${o.container.border.color}`;
  container.style.height = `${o.container.width}px`;
  container.style.width = `${o.container.width}px`;
  container.style.transform = `scale(${o.container.scale})`;

  // Container width (accounting for border)
  const containerWidth = container.offsetWidth - o.container.border.width * 2;

  // Square index (index of square number array)
  const sqIndex = o.cells.squareNumberIndex;

  // Construct grid cells:
  for (let i = 0; i < squareNumbers[sqIndex]; i++) {
    ConstructElement({
      element: o.cell.elementTag,
      appendToId: o.container.id,
      id: `${o.cell.idPrefix}-${i + 1}`,
      classes: o.cell.classes,
      height: `${containerWidth / Math.sqrt(squareNumbers[sqIndex])}px`,
      width: `${containerWidth / Math.sqrt(squareNumbers[sqIndex])}px`,
      border: `${o.cell.border.width}px ${o.cell.border.style} ${
        o.cell.border.color
      }`,
      innerHTML: o.cells.showLabels ? i + 1 : ''
    });
  }

  // If border rounding is turned on, implement this:
  if (o.container.border.rounded) {
    container.style.borderRadius = `${o.container.border.radius}px`;
    roundBorder({
      corners: [
        sqIndex / sqIndex,
        sqIndex,
        sqIndex * sqIndex - sqIndex + 1,
        sqIndex * sqIndex
      ],
      containerRadius: o.container.border.radius,
      cell: {
        idPrefix: o.cell.idPrefix
      }
    });
  }
};

export { ConstructGrid };

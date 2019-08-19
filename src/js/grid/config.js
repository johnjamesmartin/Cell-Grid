/* Dependencies:
 ************************************************************/
import { gridConfig } from '../config';

/* Grid object to pass to constructor:
 ************************************************************/
const grid = {
  // DOM element we will append grid to:
  container: {
    id: 'div-container',
    border: {
      color: gridConfig.border.color,
      style: gridConfig.border.style,
      width: gridConfig.border.width,
      rounded: gridConfig.border.rounded,
      radius: 10
    },
    scale: gridConfig.scale,
    width: gridConfig.width
  },

  // The cells inside the grid
  cell: {
    idPrefix: 'div-cell',
    border: {
      color: gridConfig.border.cellBorder,
      style: gridConfig.border.style,
      width: gridConfig.border.width / 2 / 2
    },
    elementTag: 'div',
    classes: ['cell']
  },

  // Futher properties across all cells
  cells: {
    showLabels: true,
    squareNumberIndex: gridConfig.size
  }
};

export { grid };

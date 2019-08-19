/* Round the border of the grid's corner cells:
 ************************************************************/
const roundBorder = o => {
  for (let i = 0; i < o.corners.length; i++) {
    let borderRadius,
      radius = Math.sqrt(o.containerRadius) * 1.5;
    if (i === 0) {
      borderRadius = `${radius}px 0 0 0`;
    } else if (i === 1) {
      borderRadius = `0 ${radius}px 0 0`;
    } else if (i === 2) {
      borderRadius = `0 0 0 ${radius}px`;
    } else if (i === 3) {
      borderRadius = `0 0 ${radius}px 0`;
    }
    document.getElementById(
      `${o.cell.idPrefix}-${o.corners[i]}`
    ).style.borderRadius = borderRadius;
  }
};

export { roundBorder };

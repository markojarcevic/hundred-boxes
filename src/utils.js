import { BOX_STATUS } from 'const';

/**
 * Generate the 10 x 10 grid of boxes with `x` and `y` coordinates
 * @return {Array} Grid of boxes
 */
export function generateGrid() {
  const gridItems = [];
  let x = 0,
    y = 0;

  while (x < 10) {
    while (y < 10) {
      gridItems.push({ x, y, id: `${x}-${y}`, status: BOX_STATUS.EMPTY });
      y++;
    }
    y = 0;
    x++;
  }

  return gridItems;
}

/**
 *
 * @param {String} boxId Id of a target box
 * @return {Array} List of ids that are in range from the target box
 */
export function getIdsInRange(boxId) {
  const [x, y] = boxId.split('-').map(n => +n);

  return [
    `${x}-${y + 3}`, // Up
    `${x}-${y - 3}`, // Down
    `${x - 3}-${y}`, // Left
    `${x + 3}-${y}`, // Right
    `${x - 2}-${y - 2}`, // Up-left
    `${x - 2}-${y + 2}`, // Up-right
    `${x + 2}-${y - 2}`, // Down-left
    `${x + 2}-${y + 2}` // Down-right
  ];
}

/**
 * Generate the level based on provided start position
 * @param {Integer} level Level of the game to be generated
 * @param {Object} boxId Id of a box which is a starting position
 * @return {Array} Grid with marked boxes for the requested level
 */
export function generateLevel(level, boxId) {
  const newGrid = generateGrid();
  const clickedBox = newGrid.find(box => box.id === boxId);
  clickedBox.status = BOX_STATUS.CLICKABLE;

  // Generate the rest of the clickable boxes depending on the starting position
  return markClickableBoxes(clickedBox, newGrid, --level);
}

/**
 * Recursively mark boxes as clickable depending on level
 * @param {Object} currentBox The box that was last marked as clickable
 * @param {Array} grid The 10 x 10 grid of boxes
 * @param {Integer} leftToMark Boxes left to be marked as clickable for required level
 * @return {Array} Grid of boxes needed to be clicked in order to complete a level
 */
function markClickableBoxes(currentBox, grid, leftToMark) {
  // Find the boxes that are in the range from the `currentBox`
  const idsInRange = getIdsInRange(currentBox.id);
  let availableBoxes = grid.filter(
    box => box.status !== BOX_STATUS.CLICKABLE && idsInRange.includes(box.id)
  );

  // In case there are no `availableBoxes` (possible only on higher levels)
  // make all boxes available and randomly choose where to continue
  if (availableBoxes.length === 0) {
    availableBoxes = grid.filter(
      box => ![BOX_STATUS.CLICKABLE].includes(box.status)
    );
  }

  const randomIndex = Math.floor(Math.random() * availableBoxes.length);
  const nextBox = availableBoxes[randomIndex];

  nextBox.status = BOX_STATUS.CLICKABLE;

  return leftToMark > 0
    ? markClickableBoxes(nextBox, grid, --leftToMark)
    : grid;
}

export function updateBoardOnClick(currentBoxes, clickedBoxId) {
  const idsInRange = getIdsInRange(clickedBoxId);
  let clickable = 0;

  const boxes = currentBoxes.map(box => {
    if (box.id === clickedBoxId) {
      // Target box, set status to `clicked`
      box.status = BOX_STATUS.CLICKED;
    } else if (
      box.status === BOX_STATUS.CLICKABLE &&
      idsInRange.includes(box.id)
    ) {
      // Box in range, set status to `clickable`
      box.status = BOX_STATUS.NEXT;
      clickable++;
    } else if (box.status === BOX_STATUS.NEXT) {
      // Previously clickable but now not in range
      box.status = BOX_STATUS.CLICKABLE;
    }

    return box;
  });

  return { boxes, clickable };
}

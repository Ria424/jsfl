/**
 * The left and top values specify the location of the upper left corner
 * (e.g., left: 0, top: 0 represents the upper left corner of the Stage)
 * and the right and bottom values specify the location of the lower-right corner.
 *
 * Therefore, the width of the rectangle is the difference in value between left and right,
 * and the height of the rectangle is the difference in value between top and bottom.
 */
interface RectangleBounds {
  bottom: number;
  left: number;
  right: number;
  top: number;
}

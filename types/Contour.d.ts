/**
 * A Contour object represents a closed path of half edges on the boundary of a shape.
 * @since Macromedia Flash MX Basic/Professional 2004
 */
interface Contour {
  /**
   * Method; Returns a {@link HalfEdge | HalfEdge object} on the contour of the selection.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @returns A {@link HalfEdge | HalfEdge object}.
   * @example
   *
   * This example traverses all the contours of the selected shape and shows the coordinates of the vertices in the Output panel:
   *
   * ```javascript
   * var elt = fl.getDocumentDOM().selection[0];
   * elt.beginEdit();
   *
   * var contourArray = elt.contours;
   * var contourCount = 0;
   * for (var i = 0; i < contourArray.length; i++) {
   *   var contour = contourArray[i];
   *   contourCount++;
   *   var he = contour.getHalfEdge();
   *   var iStart = he.id;
   *   var id = 0;
   *
   *   while (id != iStart) {
   *     // Get the next vertex.
   *     var vrt = he.getVertex();
   *     var x = vrt.x;
   *     var y = vrt.y;
   *     fl.trace("vrt: " + x + ", " + y);
   *     he = he.getNext();
   *     id = he.id;
   *   }
   * }
   *
   * elt.endEdit();
   * ```
   */
  getHalfEdge(): HalfEdge;

  /**
   * Read-only property; The value is true if the contour encloses an area; false otherwise.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * This example traverses all the contours of the selected shape and shows the value of the interior property for each contour in the Output panel:
   *
   * ```javascript
   * var elt = fl.getDocumentDOM().selection[0];
   * elt.beginEdit();
   *
   * var contourArray = elt.contours;
   * var contourCount = 0;
   * for (var i = 0; i < contourArray.length; i++) {
   *   var contour = contourArray[i];
   *   fl.trace("Next Contour, interior:" + contour.interior);
   *   contourCount++;
   * }
   *
   * elt.endEdit();
   * ```
   */
  readonly interior: boolean;

  /**
   * Read-only property; An integer indicating the orientation of the contour. The value of the integer is -1 if the orientation is counterclockwise, 1 if it is clockwise, and 0 if it is a contour with no area.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example traverses all the contours of the selected shape and shows the value of the orientation
   * property of each contour in the Output panel:
   *
   * ```javascript
   * var elt = fl.getDocumentDOM().selection[0];
   * elt.beginEdit();
   *
   * var contourArray = elt.contours;
   * var contourCount = 0;
   * for (var i = 0; i < contourArray.length; i++) {
   *   var contour = contourArray[i];
   *   fl.trace("Next Contour, orientation:" + contour.orientation);
   *   contourCount++;
   * }
   *
   * elt.endEdit();
   * ```
   */
  readonly orientation: -1 | 0 | 1;
}

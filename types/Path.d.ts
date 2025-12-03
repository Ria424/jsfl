/**
 * The Path object defines a sequence of line segments (straight, curved, or both), which you typically use when creating extensible tools.
 *
 * The following example shows an instance of a Path object being returned from the {@link Flash | Flash object}:
 *
 * ```javascript
 * var path = fl.drawingLayer.newPath();
 * ```
 *
 * See also the {@link DrawingLayer | DrawingLayer object}.
 * @since Macromedia Flash MX Basic/Professional 2004
 */
interface Path {
  /**
   * Method; appends a cubic Bézier curve segment to the path.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param xAnchor A floating-point number that specifies the *x* position of the first control point.
   * @param yAnchor A floating-point number that specifies the *y* position of the first control point.
   * @param x2 A floating-point number that specifies the *x* position of the second control point.
   * @param y2 A floating-point number that specifies the *y* position of the second control point.
   * @param x3 A floating-point number that specifies the *x* position of the third control point.
   * @param y3 A floating-point number that specifies the *y* position of the third control point.
   * @param x4 A floating-point number that specifies the *x* position of the fourth control point.
   * @param y4 A floating-point number that specifies the *y* position of the fourth control point.
   * @returns Nothing.
   * @usage path.addCubicCurve(xAnchor, yAnchor, x2, y2, x3, y3, x4, y4)
   * @example
   *
   * The following example creates a new path, stores it in the myPath variable, and assigns the curve to the path:
   *
   * ```javascript
   * var myPath = fl.drawingLayer.newPath();
   * myPath.addCubicCurve(0, 0, 10, 20, 20, 20, 30, 0);
   * ```
   */
  addCubicCurve(xAnchor: number, yAnchor: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): void;

  /**
   * Method; appends a quadratic Bézier segment to the path.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param xAnchor A floating-point number that specifies the *x* position of the first control point.
   * @param yAnchor A floating-point number that specifies the *y* position of the first control point.
   * @param x2 A floating-point number that specifies the *x* position of the second control point.
   * @param y2 A floating-point number that specifies the *y* position of the second control point.
   * @param x3 A floating-point number that specifies the *x* position of the third control point.
   * @param y3 A floating-point number that specifies the *y* position of the third control point.
   * @returns Nothing.
   * @usage path.addCurve(xAnchor, yAnchor, x2, y2, x3, y3)
   * @example
   *
   * The following example creates a new path, stores it in the myPath variable, and assigns the curve to the path:
   *
   * ```javascript
   * var myPath = fl.drawingLayer.newPath();
   * myPath.addCurve(0, 0, 10, 20, 20, 0);
   * ```
   */
  addCurve(xAnchor: number, yAnchor: number, x2: number, y2: number, x3: number, y3: number): void;

  /**
   * Method; adds a point to the path.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param x A floating-point number that specifies the *x* position of the point.
   * @param y A floating-point number that specifies the *y* position of the point.
   * @returns Nothing.
   * @usage path.addPoint(x, y)
   * @example
   *
   * The following example creates a new path, stores it in the myPath variable, and assigns the new point to the path:
   *
   * ```javascript
   * var myPath = fl.drawingLayer.newPath();
   * myPath.addPoint(10, 100);
   * ```
   */
  addPoint(x: number, y: number): void;

  /**
   * Method; removes all points from the path.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @returns Nothing.
   * @usage path.clear()
   * @example
   *
   * The following example removes all points from a path stored in the myPath variable:
   *
   * ```javascript
   * var myPath = fl.drawingLayer.newPath();
   * myPath.clear();
   * ```
   */
  clear(): void;

  /**
   * Method; appends a point at the location of the first point of the path and extends the path to that point, which closes the path. If the path has no points, no points are added.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @returns Nothing.
   * @usage path.close()
   * @example
   *
   * The following example creates a closed path:
   *
   * ```javascript
   * var myPath = fl.drawingLayer.newPath();
   * myPath.close();
   * ```
   */
  close(): void;

  /**
   * Method; Creates a shape on the Stage by using the current stroke and fill settings. The path is cleared after the shape is created. This method has two optional parameters for suppressing the fill and stroke of the resulting shape object. If you omit these parameters or set them to false, the current values for fill and stroke are used.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param [suppressFill] Whether to suppress the fill to be applied to the shape. The default value is false.
   * @param [supressStroke] Whether to suppress the stroke to be applied to the shape. The default value is false.
   * @returns Nothing.
   * @usage path.makeShape([supressFill [, supressStroke]])
   * @example
   *
   * The following example creates a shape with the current fill and no stroke:
   *
   * ```javascript
   * var myPath = fl.drawingLayer.newPath();
   * myPath.makeShape(false, true);
   * ```
   */
  makeShape(suppressFill?: boolean, supressStroke?: boolean): void;

  /**
   * Method; starts a new contour in the path.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @returns Nothing.
   * @usage path.newContour()
   * @example
   *
   * The following example creates a hollow square:
   *
   * ```javascript
   * var myPath = fl.drawingLayer.newPath();
   * myPath.addPoint(0, 0);
   * myPath.addPoint(0, 30);
   * myPath.addPoint(30, 30);
   * myPath.addPoint(30, 0);
   * myPath.addPoint(0, 0);
   *
   * myPath.newContour();
   * myPath.addPoint(10, 10);
   * myPath.addPoint(10, 20);
   * myPath.addPoint(20, 20);
   * myPath.addPoint(20, 10);
   * myPath.addPoint(10, 10);
   *
   * myPath.makeShape();
   * ```
   */
  newContour(): void;

  /**
   * Read-only property; an integer representing the number of points in the path. A new path has 0 points.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example uses the Output panel to show the number of points in the path referenced by the myPath
   * variable:
   *
   * ```javascript
   * var myPath = fl.drawingLayer.newPath();
   * var numOfPoints = myPath.nPts;
   * fl.trace("Number of points in the path: " + numOfPoints);
   * // Displays: Number of points in the path: 0
   * ```
   */
  readonly nPts: number;
}

/**
 * The Edge object represents an edge of a shape on the Stage.
 * @since Macromedia Flash MX Basic/Professional 2004
 */
interface Edge {
  /**
   * Method; Gets a point object set to the location of the specified control point of the edge.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param i Specifies which control point of the edge to return. Specify 0 for the first control point, 1 for the middle control point, or 2 for the end control point. If the {@link Edge.isLine | Edge.isLine} property is true, the middle control point is set to the midpoint of the segment joining the beginning and ending control points.
   * @returns The specified control point.
   * @usage Edge.getControl(i)
   * @example
   *
   * The following example stores the first control point of the specified shape in the pt variable:
   *
   * ```javascript
   * var shape = fl.getDocumentDOM().selection[0];
   * var pt = shape.edges[0].getControl(0);
   * ```
   */
  getControl(i: 0 | 1 | 2): Point;

  /**
   * Method; returns a {@link HalfEdge | HalfEdge object}.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param index Specifies which half edge to return. The value of *index* must be either 0 for the first half edge or 1 for the second half edge.
   * @returns A HalfEdge object.
   * @usage Edge.getHalfEdge(index)
   * @example
   *
   * The following example stores the half edges of the specified edge in the hEdge0 and hEdge1 variables:
   *
   * ```javascript
   * var shape = fl.getDocumentDOM().selection[0];
   * var edge = shape.edges[0];
   * var hEdge0 = edge.getHalfEdge(0);
   * var hEdge1 = edge.getHalfEdge(1);
   * ```
   */
  getHalfEdge(index: number): HalfEdge;

  /**
   * Method; Sets the position of the control point of the edge. You must call shape.beginEdit() before using this method. See {@link Shape.beginEdit | Shape.beginEdit()}.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param index Specifies which control point to set. Use values 0, 1, or 2 to specify the beginning, middle, and end control points, respectively.
   * @param x A floating-point value that specifies the horizontal location of the control point. If the Stage is in edit or edit-in-place mode, the point coordinate is relative to the edited object. Otherwise, the point coordinate is relative to the Stage.
   * @param y A floating-point value that specifies the vertical location of the control point. If the Stage is in edit or edit-in-place mode, the point coordinate is relative to the edited object. Otherwise, the point coordinate is relative to the Stage.
   * @returns Nothing.
   * @usage Edge.setControl(index, x, y)
   * @example
   *
   * The following example sets the beginning control point of the specified edge to the (0, 1) coordinates:
   *
   * ```javascript
   * var x = 0;
   * var y = 1;
   * var shape = fl.getDocumentDOM().selection[0];
   * shape.beginEdit();
   * shape.edges[0].setControl(0, x, y);
   * shape.endEdit();
   * ```
   */
  setControl(index: number, x: number, y: number): void;

  /**
   * Method; Splits the edge into two pieces. You must call {@link Shape.beginEdit | Shape.beginEdit()} before using this method.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param t A floating-point value between 0 and 1 that specifies where to split the edge. A value of 0 represents one end point and a value of 1represents the other. For example, passing a value of 0.5 splits the edge in the middle, which, for a line is exactly in the center. If the edge represents a curve, 0.5 represents the parametric middle of the curve.
   * @returns Nothing.
   * @usage Edge.splitEdge(t)
   * @example
   *
   * The following example splits the specified edge in half:
   *
   * ```javascript
   * var shape = fl.getDocumentDOM().selection[0];
   * shape.beginEdit();
   * shape.edges[0].splitEdge(0.5);
   * shape.endEdit();
   * ```
   */
  splitEdge(t: number): void;

  /**
   * Read-only property; Specifies the index value of a cubic segment of the edge (see {@link Shape.getCubicSegmentPoints | Shape.getCubicSegmentPoints()}).
   * @since Adobe Flash Professional CS4
   * @example
   *
   * The following code displays the index values of all the cubic segments of the specified edge:
   *
   * ```javascript
   * var theShape = fl.getDocumentDOM().selection[0];
   * var edgesArray = theShape.edges;
   * for (var i = 0; i < edgesArray.length; i++) {
   *   fl.trace(edgesArray[i].cubicSegmentIndex);
   * }
   * ```
   */
  readonly cubicSegmentIndex: number;

  /**
   * Read-only property; An integer that represents a unique identifier for the edge.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example stores a unique identifier for the specified edge in the my_shape_id variable:
   *
   * ```javascript
   * var shape = fl.getDocumentDOM().selection[0];
   * var my_shape_id = shape.edges[0].id;
   * ```
   */
  readonly id: number;

  /**
   * Read-only property; An integer with a value of 0 or 1. A value of 1 indicates that the edge is a straight line. In that case, the middle control point bisects the line joining the two end points.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example determines whether the specified edge is a straight line and shows a value of 1 (it is a straight line) or 0 (it isn't a straight line) in the Output panel:
   *
   * ```javascript
   * var shape = fl.getDocumentDOM().selection[0];
   * fl.trace(shape.edges[0].isLine);
   * ```
   */
  readonly isLine: number;

  /**
   * Property; A {@link Stroke | Stroke object}.
   * @since Adobe Flash Professional CS4
   * @example
   *
   * The following example displays the stroke color of the first edge of the selected object:
   *
   * ```javascript
   * var shape = fl.getDocumentDOM().selection[0];
   * fl.trace(shape.edges[0].stroke.color);
   * ```
   */
  stroke: Stroke;
}

/**
 * The Vertex object is the part of the shape data structure that holds the coordinate data.
 * @since Macromedia Flash MX Basic/Professional 2004
 */
interface Vertex {
  /**
   * Method; Gets a {@link HalfEdge | HalfEdge object} that shares this vertex.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @returns A {@link HalfEdge | HalfEdge object}.
   * @example
   *
   * The following example shows how to get other half edges that share the same vertex:
   *
   * ```javascript
   * var shape = fl.getDocumentDOM().selection[0];
   * var hEdge = shape.edges[0].getHalfEdge(0);
   * var theVertex = hEdge.getVertex();
   * var someHEdge = theVertex.getHalfEdge(); // Not necessarily the same half edge
   * var theSameVertex = someHEdge.getVertex();
   * fl.trace("the same vertex: " + theSameVertex);
   * ```
   */
  getHalfEdge(): HalfEdge;

  /**
   * Method; Sets the location of the vertex.
   *
   * You must call {@link Shape.beginEdit | Shape.beginEdit()} before using this method.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param x A floating-point value that specifies the *x* coordinate of where the vertex should be positioned,
   * in pixels.
   * @param y A floating-point value that specifies the *y* coordinate of where the vertex should be positioned,
   * in pixels.
   * @returns Nothing.
   * @example
   *
   * The following example sets the vertex to the origin point:
   *
   * ```javascript
   * var shape = fl.getDocumentDOM().selection[0];
   * shape.beginEdit();
   * var hEdge = shape.edges[0].getHalfEdge(0);
   * var vertex = hEdge.getVertex();
   * var someHEdge = vertex.getHalfEdge();
   * var vertex = someHEdge.getVertex();
   * // Move the vertex to the origin.
   * vertex.setLocation(0.0, 0.0);
   * shape.endEdit();
   * ```
   */
  setLocation(x: number, y: number): void;

  /**
   * Read-only property; The *x* location of the vertex, in pixels.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example displays the location of the *x* and *y* values of the vertex in the Output panel:
   *
   * ```javascript
   * var shape = fl.getDocumentDOM().selection[0];
   * var hEdge = shape.edges[0].getHalfEdge(0);
   * var vertex = hEdge.getVertex();
   *
   * fl.trace("x location of vertex is: " + vertex.x);
   * fl.trace("y location of vertex is: " + vertex.y);
   * ```
   */
  readonly x: number;

  /**
   * Read-only property; The *y* location of the vertex, in pixels.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @see {@link Vertex.x}
   */
  readonly y: number;
}

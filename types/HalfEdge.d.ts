/**
 * The HalfEdge object is the directed side of the edge of a {@link Shape | Shape object}. An edge has two half edges. You can transverse the contours of a shape by "walking around" these half edges. For example, starting from a half edge, you can trace all the half edges around a contour of a shape, and return to the original half edge.
 * Half edges are ordered. One half edge represents one side of the edge; the other half edge represents the other side.
 * @since Macromedia Flash MX Basic/Professional 2004
 */
interface HalfEdge {
  /**
   * Method; gets the Edge object for the HalfEdge object. See {@link Edge | Edge object}.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @returns An {@link Edge | Edge object}.
   * @usage halfEdge.getEdge()
   * @example
   *
   * The following example illustrates getting an edge and a half edge for the specified shape:
   *
   * ```javascript
   * var shape = fl.getDocumentDOM().selection[0];
   * var hEdge = shape.edges[0].getHalfEdge(0);
   * var edge = hEdge.getEdge();
   * ```
   */
  getEdge(): Edge;

  /**
   * Method; gets the next half edge on the current contour.
   * ***Note:** Although half edges have a direction and a sequence order, edges do not.*
   * @since Macromedia Flash MX Basic/Professional 2004
   * @returns A HalfEdge object.
   * @usage halfEdge.getNext()
   * @example
   *
   * The following example stores the next half edge of the specified contour in the nextHalfEdge variable:
   *
   * ```javascript
   * var shape = fl.getDocumentDOM().selection[0];
   * var hEdge = shape.edges[0].getHalfEdge(0);
   * var nextHalfEdge = hEdge.getNext();
   * ```
   */
  getNext(): HalfEdge;

  /**
   * Method; gets the HalfEdge object on the other side of the edge.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @returns A HalfEdge object.
   * @usage halfEdge.getOppositeHalfEdge()
   * @example
   *
   * The following example stores the half edge opposite hEdge in the otherHalfEdge variable:
   *
   * ```javascript
   * var shape = fl.getDocumentDOM().selection[0];
   * var hEdge = shape.edges[0].getHalfEdge(0);
   * var otherHalfEdge = hEdge.getOppositeHalfEdge();
   * ```
   */
  getOppositeHalfEdge(): HalfEdge;

  /**
   * Method; gets the preceding HalfEdge object on the current contour.
   *
   * ***Note:** Although half edges have a direction and a sequence order, edges do not.*
   * @since Macromedia Flash MX Basic/Professional 2004
   * @returns A HalfEdge object.
   * @usage halfEdge.getPrev()
   * @example
   *
   * The following example stores the previous half edge of the specified contour in the prevHalfEdge variable:
   *
   * ```javascript
   * var shape = fl.getDocumentDOM().selection[0];
   * var hEdge = shape.edges[0].getHalfEdge(0);
   * var prevHalfEdge = hEdge.getPrev();
   * ```
   */
  getPrev(): HalfEdge;

  /**
   * Method; gets the Vertex object at the head of the HalfEdge object. See {@link Vertex | Vertex object}
   * @since Macromedia Flash MX Basic/Professional 2004
   * @returns A {@link Vertex | Vertex object}
   * @usage halfEdge.getVertex()
   * @example
   *
   * The following example stores the Vertex object at the head of hEdge in the vertex variable:
   *
   * ```javascript
   * var shape = fl.getDocumentDOM().selection[0];
   * var edge = shape.edges[0];
   * var hEdge = edge.getHalfEdge(0);
   * var vertex = hEdge.getVertex();
   * ```
   */
  getVertex(): Vertex;

  /**
   * Read-only property; a unique integer identifier for the HalfEdge object.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example displays a unique identifier for the specified half edge in the Output panel:
   *
   * ```javascript
   * var shape = fl.getDocumentDOM().selection[0];
   * alert(shape.contours[0].getHalfEdge().id);
   * ```
   */
  readonly id: number;
}

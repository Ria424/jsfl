/**
 * The FLmath object is available as a read-only property of the {@link Flash | Flash object}; see {@link Flash.Math | Flash.Math}. This object provides methods that perform common mathematical operations.
 * @since Macromedia Flash MX Basic/Professional 2004
 */
interface FLmath extends Math {
  /**
   * Method; Performs a matrix concatenation and returns the result.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param mat1 The Matrix object to be concatenated (see {@link Matrix | Matrix object}).
   * @param mat2 The Matrix object to be concatenated (see {@link Matrix | Matrix object}).
   * @returns A concatenated Matrix object.
   * @usage Math.concatMatrix(mat1, mat2)
   * @example
   *
   * The following example stores the currently selected object in the elt variable, multiplies the object matrix by the view matrix, and stores that value in the mat variable:
   *
   * ```javascript
   * var elt = fl.getDocumentDOM().selection[0];
   * var mat = fl.Math.concatMatrix(elt.matrix, fl.getDocumentDOM().viewMatrix);
   * ```
   */
  concatMatrix(mat1: Matrix, mat2: Matrix): Matrix;

  /**
   * Method; Returns the inverse of the specified matrix.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param mat Indicates the Matrix object to invert (see {@link Matrix | Matrix object}). It must have the following fields: a, b, c, d, tx, and ty.
   * @returns A Matrix object that is the inverse of the original matrix.
   * @usage Math.invertMatrix(mat)
   * @example
   *
   * The following example stores the currently selected object in the elt variable, assigns that matrix to the mat variable, and stores the inverse of the matrix in the inv variable:
   *
   * ```javascript
   * var elt = fl.getDocumentDOM().selection[0];
   * var mat = elt.matrix;
   * var inv = fl.Math.invertMatrix(mat);
   * ```
   */
  invertMatrix(mat: Matrix): Matrix;

  /**
   * Method; Computes the distance between two points.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param pt1 The point at which the distance is measured.
   * @param pt2 The point at which the distance is measured.
   * @returns A floating-point value that represents the distance between the points.
   * @usage Math.pointDistance(pt1, pt2)
   * @example
   *
   * The following example stores the value for the distance between **`pt1`** and **`pt2`** in the dist variable:
   *
   * ```javascript
   * var pt1 = { x: 10, y: 20 };
   * var pt2 = { x: 100, y: 200 };
   * var dist = fl.Math.pointDistance(pt1, pt2);
   * ```
   */
  pointDistance(pt1: Point, pt2: Point): number;

  /**
   * Method; Applies a matrix to a point.
   * @since Adobe Flash Professional CS6
   * @param matrix Contains the matrix obejct applied to the point.
   * @param point Contains the point to which the matrix is applied.
   * @returns The transformed point.
   * @usage Math.transformPoint(matrix, point)
   * @example
   *
   * The following example gets a matrix from the first object in Frame 1, creates a point with x:100 and y:200, and transforms this point using the matrix in the first line:
   *
   * ```javascript
   * var mat = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].matrix;
   * var point = { x: 100, y: 200 };
   * var retPoint = fl.Math.transformPoint(mat, point);
   * ```
   */
  transformPoint(matrix: Matrix, point: Point): Point;
}

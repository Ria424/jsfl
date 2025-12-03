/**
 * The Fill object contains all the properties of the Fill color setting of the Tools panel or of a selected shape. To retrieve a Fill object, use {@link Document.getCustomFill | Document.getCustomFill()}.
 * @since Macromedia Flash MX Basic/Professional 2004
 */
interface Fill {
  /**
   * Property; a Boolean value that specifies whether the bitmap fill for a shape that is larger than the bitmap is clipped (true) or repeated (false). This property is available only if the value of the {@link Fill.style | Fill.style} property is "bitmap". If the shape is smaller than the bitmap, this value is false.
   * @since Adobe Flash Professional CS4
   * @example
   *
   * The following example displays information on whether the bitmap fill is clipped, if appropriate, in the Output panel:
   *
   * ```javascript
   * var fill = fl.getDocumentDOM().getCustomFill();
   * if (fill.style == "bitmap") fl.trace("Fill image is clipped: " + fill.bitmapIsClipped);
   * ```
   * @see {@link Fill.bitmapPath | Fill.bitmapPath}
   */
  bitmapIsClipped: boolean;

  /**
   * Property; a string that specifies the path and name of the bitmap fill in the Library. This property is available only if the value of the {@link Fill.style | Fill.style} property is "bitmap".
   * @since Adobe Flash Professional CS4
   * @example
   *
   * The following example sets the fill style of the specified item to a bitmap image in the Library:
   *
   * ```javascript
   * var fill = fl.getDocumentDOM().getCustomFill();
   * fill.style = "bitmap";
   * fill.bitmapPath = "myBitmap.jpg";
   * fl.getDocumentDOM().setCustomFill(fill);
   * ```
   * @see {@link Fill.bitmapIsClipped | Fill.bitmapIsClipped}
   */
  bitmapPath: string;

  /**
   * Property; the color of the fill, in one of the following formats:
   *
   * - A string in the format "\#RRGGBB" or "\#RRGGBBAA"
   *
   * - A hexadecimal number in the format 0xRRGGBB
   *
   * - An integer that represents the decimal equivalent of a hexadecimal number
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the fill color of the current selection:
   *
   * ```javascript
   * var fill = fl.getDocumentDOM().getCustomFill();
   * fill.color = "#FFFFFF";
   * fl.getDocumentDOM().setCustomFill(fill);
   * ```
   */
  color: number;

  /**
   * Property; an array of colors in the gradient, expressed as integers. This property is available only if the value of the
   * fill.style property is either "radialGradient" or "linearGradient". See {@link Fill.style | Fill.style}
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example displays the color array of the current selection, if appropriate, in the Output panel:
   *
   * ```javascript
   * var fill = fl.getDocumentDOM().getCustomFill();
   * fill.style = "linearGradient";
   * fill.colorArray = ["#00ff00", "#ff00ff"];
   * fill.posArray = [0, 255];
   * fl.getDocumentDOM().setCustomFill(fill);
   * ```
   */
  colorArray: number;

  /**
   * Property; an integer that specifies the gradient focal point horizontal offset from the transformation point. A value of 10, for example, would place the focal point at 10/255 of the distance from the transformation point to the edge of the gradient. A value of -255 would place the focal point at the left boundary of the gradient. The default value is 0.
   * This property is available only if the value of the {@link Fill.style | Fill.style} property is "radialGradient".
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example sets the focal point of a radial gradient for the current selection to 100 pixels to the right of the shape's center:
   *
   * ```javascript
   * var fill = fl.getDocumentDOM().getCustomFill();
   * fill.style = "radialGradient";
   * fill.colorArray = ["#00ff00", "#ff00ff"];
   * fill.posArray = [0, 255];
   * fill.focalPoint = 10100;
   * fl.getDocumentDOM().setCustomFill(fill);
   * ```
   */
  focalPoint: number;

  /**
   * Property; A boolean value that specifies whether to render the fill as a linear or radial RGB gradient. Set this property to true to specify a linear interpolation of a gradient; set it to false to specify a radial interpolation of a gradient. The default value is false.
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example specifies that the gradient of the current selection should be rendered with a linear RGB:
   *
   * ```javascript
   * var fill = fl.getDocumentDOM().getCustomFill();
   * fill.linearRGB = true;
   * fill.style = "radialGradient";
   * fill.colorArray = ["#00ff00", "#ff00ff"];
   * fill.posArray = [0, 255];
   * fill.focalPoint = 100;
   * fill.linearRGB = true;
   * fl.getDocumentDOM().setCustomFill(fill);
   * ```
   */
  linearRGB: boolean;

  /**
   * Property; A {@link Matrix | Matrix object} that defines the placement, orientation, and scales for gradient fills.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example uses the fill.matrix property to specify a gradient fill for the current selection:
   *
   * ```javascript
   * var fill = fl.getDocumentDOM().getCustomFill();
   * fill.style = "radialGradient";
   * fill.colorArray = ["#00ff00", "#ff00ff"];
   * fill.posArray = [0, 255];
   * fill.focalPoint = 100;
   * fill.linearRGB = false;
   * fill.overflow = "repeat";
   *
   * var mat = fill.matrix;
   * mat.a = 0.0167083740234375;
   * mat.b = -0.0096435546875;
   * mat.c = 0.0312957763671875;
   * mat.d = 0.05419921875;
   * mat.tx = 288.65;
   * mat.ty = 193.05;
   *
   * for (i in mat) {
   *   fl.trace(i + " : " + mat[i]);
   * }
   *
   * fl.getDocumentDOM().setCustomFill(fill);
   * ```
   */
  matrix: Matrix;

  /**
   * Property; a string that specifies the behavior of a gradient's overflow. Acceptable values are "extend", "repeat", and
   * "reflect"; the strings are not case-sensitive. The default value is "extend".
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example specifies that the behavior of the overflow for the current selection should be "extend":
   *
   * ```javascript
   * var fill = fl.getDocumentDOM().getCustomFill();
   * fill.overflow = "extend";
   * fl.getDocumentDOM().setCustomFill(fill);
   * ```
   */
  overflow: "extend" | "repeat" | "reflect";

  /**
   * Property; an array of integers, each in the range of zero to 255, indicating the position of the corresponding color. This property is available only if the value of the {@link Fill.style | Fill.style} property is either "radialGradient" or "linearGradient".
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example specifies the colors to use in a linear gradient for the current selection:
   *
   * ```javascript
   * var fill = fl.getDocumentDOM().getCustomFill();
   * fill.style = "linearGradient";
   * fill.colorArray = [0x00ff00, 0xff0000, 0x0000ff];
   * fill.posArray = [0, 100, 200];
   * fl.getDocumentDOM().setCustomFill(fill);
   * ```
   */
  posArray: number;

  /**
   * Property; a string that specifies the fill style. Acceptable values are "bitmap", "solid", "linearGradient", "radialGradient", and "noFill".
   * If this value is "linearGradient" or "radialGradient", the {@link Fill.colorArray | Fill.colorArray} and {@link Fill.posArray | Fill.posArray} properties are also available. If this value is "bitmap", the {@link Fill.bitmapIsClipped | Fill.bitmapIsClipped} and {@link Fill.bitmapPath | Fill.bitmapPath} properties are also available.
   * @since Macromedia Flash MX Basic/Professional 2004 Value "bitmap" added in Flash Professional CS4.
   * @example
   *
   * The following example specifies the colors to use in a linear gradient for the current selection:
   *
   * ```javascript
   * var fill = fl.getDocumentDOM().getCustomFill();
   * fill.style = "linearGradient";
   * fill.colorArray = [0x00ff00, 0xff0000, 0x0000ff];
   * fill.posArray = [0, 100, 200];
   * fl.getDocumentDOM().setCustomFill(fill);
   * ```
   */
  style: "bitmap" | "solid" | "linearGradient" | "radialGradient" | "noFill";
}

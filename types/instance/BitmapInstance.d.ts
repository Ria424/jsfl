/**
 * The BitmapInstance object is a subclass of the {@link Instance | Instance object} and represents a bitmap in a frame.
 * @since Macromedia Flash MX Basic/Professional 2004
 */
interface BitmapInstance extends Instance {
  /**
   * Method; Lets you create bitmap effects by getting the bits out of the bitmap, manipulating them,
   * and then returning them to Animate.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @returns All properties are integers.
   * @example
   *
   * The following code creates a reference to the currently selected object;
   * tests whether the object is a bitmap; and traces the height, width, and bit depth of the bitmap:
   *
   * ```javascript
   * var isBitmap = fl.getDocumentDOM().selection[0].instanceType;
   * if (isBitmap == "bitmap") {
   *   var bits = fl.getDocumentDOM().selection[0].getBits();
   *   fl.trace("height = " + bits.height);
   *   fl.trace("width = " + bits.width);
   *   fl.trace("depth = " + bits.depth);
   * }
   * ```
   * @see {@link BitmapInstance.setBits | BitmapInstance.setBits()}
   */
  getBits(): { width: number; height: number; depth: number; cTab: number };

  /**
   * Method; Sets the bits of an existing bitmap element.
   * This lets you create bitmap effects by getting the bits out of the bitmap, manipulating them,
   * and then returning the bitmap to Animate.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param bitmap An object that contains `height`, `width`, `depth`, `bits`, and `cTab` properties.
   * The `height`, `width`, and `depth` properties are integers. The bits property is a byte array.
   * The `cTab` property is required only for bitmaps with a bit depth of 8 or less and is a string
   * that represents a color value in the form "\#RRGGBB".
   *
   * ***Note:** The byte array is meaningful only when referenced by an external library.
   * You typically use it only when creating an extensible tool or effect.*
   * @returns Nothing.
   * @example
   *
   * The following code tests whether the current selection is a bitmap
   * and then sets the height of the bitmap to 150 pixels:
   *
   * ```javascript
   * var isBitmap = fl.getDocumentDOM().selection[0].instanceType;
   * if (isBitmap == "bitmap") {
   *   var bits = fl.getDocumentDOM().selection[0].getBits();
   *   bits.height = 150;
   *   fl.getDocumentDOM().selection[0].setBits(bits);
   * }
   * ```
   * @see {@link BitmapInstance.getBits | BitmapInstance.getBits()}
   */
  setBits(bitmap: {
    height: number;
    width: number;
    depth: number;
    bits: number;
    cTab: number;
  }): void;

  /**
   * Read-only property; An integer that represents the width of the bitmap—that is,
   * the number of pixels in the horizontal dimension.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following code retrieves the width of the bitmap in pixels:
   *
   * ```javascript
   * // Get the number of pixels in the horizontal dimension.
   * var bmObj = fl.getDocumentDOM().selection[0];
   * var isBitmap = bmObj.instanceType;
   * if (isBitmap == "bitmap") {
   *   var numHorizontalPixels = bmObj.hPixels;
   * }
   * ```
   * @see {@link BitmapInstance.vPixels}
   */
  readonly hPixels: number;

  /**
   * Read-only property; An integer that represents the height of the bitmap that is,
   * the number of pixels in the vertical dimension.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following code gets the height of the bitmap in pixels:
   *
   * ```javascript
   * // Get the number of pixels in the vertical dimension.
   * var bmObj = fl.getDocumentDOM().selection[0];
   * var isBitmap = bmObj.instanceType;
   * if (isBitmap == "bitmap") {
   *   var numVerticalPixels = bmObj.vPixels;
   * }
   * ```
   * @see {@link BitmapInstance.hPixels}
   */
  readonly vPixels: number;
}

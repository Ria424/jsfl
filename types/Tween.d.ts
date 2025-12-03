/**
 * The Tween object can be used to access interpolated properties of tweens.
 *
 * @throws Accessing properties for a non-tween frame throws errors.
 * @since Adobe Flash Professional CC
 * @example
 *
 * ```javascript
 * var doc = fl.getDocumentDOM();
 * var timeline = doc.getTimeline();
 * var frame = timeline.layers[0].frames[0];
 * var tweenObj = frame.tweenObj;
 *
 * fl.outputPanel.clear();
 * fl.trace("Tween duration = " + tweenObj.duration);
 *
 * for (var i = 0; i < tweenObj.duration; i++) {
 *   var colors = tweenObj.getColorTransform(i);
 *   fl.trace("\nFrame " + i + ":");
 *   fl.trace(
 *     "\nMatrix: a = " +
 *       matrix.a +
 *       ", b = " +
 *       matrix.b +
 *       ", c = " +
 *       matrix.c +
 *       ", d =" +
 *       matrix.d +
 *       ", tx = " +
 *       matrix.tx +
 *       ", ty = " +
 *       matrix.ty
 *   );
 *   fl.trace(
 *     "\nColor transform:\nalpha: amount = " +
 *       colors.colorAlphaAmount +
 *       " percent = " +
 *       colors.colorAlphaPercent +
 *       "\nred: amount = " +
 *       colors.colorRedAmount +
 *       " percent = " +
 *       colors.colorRedPercent +
 *       "\ngreen: amount = " +
 *       colors.colorGreenAmount +
 *       " percent = " +
 *       colors.colorGreenPercent +
 *       "\nblue: amount = " +
 *       colors.colorBlueAmount +
 *       " percent = " +
 *       colors.colorBluePercent
 *   );
 * }
 * ```
 */
interface Tween {
  /**
   * Method; Gets color transformation data between frames.
   * @since Adobe Flash Professional CC
   * @param frameIndex Offset (integer) index of interpolated frame.
   * @returns A {@link ColorTransform | ColorTransform object}.
   * @example
   *
   * ```javascript
   * var doc = fl.getDocumentDOM();
   * var timeline = doc.getTimeline();
   * var frame = timeline.layers[0].frames[0];
   * var tweenObj = frame.tweenObj;
   *
   * fl.outputPanel.clear();
   * fl.trace("Tween duration = " + tweenObj.duration);
   * for (var i = 0; i < tweenObj.duration; i++) {
   *   var colors = tweenObj.getColorTransform(i);
   *   fl.trace("\nFrame " + i + ":");
   *   fl.trace(
   *     "\nColor transform:\nalpha: amount = " +
   *       colors.colorAlphaAmount +
   *       " percent = " +
   *       colors.colorAlphaPercent +
   *       "\nred: amount = " +
   *       colors.colorRedAmount +
   *       " percent = " +
   *       colors.colorRedPercent +
   *       "\ngreen: amount = " +
   *       colors.colorGreenAmount +
   *       " percent = " +
   *       colors.colorGreenPercent +
   *       "\nblue: amount = " +
   *       colors.colorBlueAmount +
   *       " percent = " +
   *       colors.colorBluePercent
   *   );
   * }
   * ```
   */
  getColorTransform(frameIndex: number): ColorTransform;

  /**
   * Method; Returns filters data of a selected frame from a tween span.
   * @since Adobe Flash Professional CC
   * @param frameIndex (integer) Index of the frame from which filter data is to be retrieved.
   * @returns Array of {@link Filter | Filter object}s.
   * @example
   *
   * ```javascript
   * var tweenObj = fl.getDocumentDOM().getTimeline().layers[0].frames[0].tweenObj;
   * for (var i = 0; i < tweenObj.duration; i++) {
   *   var filterList = tweenObj.getFilters(i);
   *   for (var j = 0; j < filterList.length; j++) {
   *     var filter = filterList[j];
   *     fl.trace(filter.name);
   *     fl.trace("Blur x = " + filter.blurX + " y = " + filter.blurY);
   *   }
   * }
   * ```
   */
  getFilters(frameIndex: number): Filter[];

  /**
   * Method; Returns Matrix object that represents geometric transformation of a tween within a user-defined range
   * (from offset to a selected frame).
   * @since Adobe Flash Professional CC
   * @param frameIndex Offset (integer) index of the frame from which geometric transformations have to be retrieved.
   * @returns A {@link Matrix | Matrix object} that represents geometric transformations at the frame offset.
   * @example
   *
   * ```javascript
   * var doc = fl.getDocumentDOM();
   * var timeline = doc.getTimeline();
   * var frame = timeline.layers[0].frames[0];
   * var tweenObj = frame.tweenObj;
   *
   * fl.outputPanel.clear();
   * fl.trace("Tween duration = " + tweenObj.duration);
   * for (var i = 0; i < tweenObj.duration; i++) {
   *   var matrix = tweenObj.getGeometricTransform(i);
   *   var colors = tweenObj.getColorTransform(i);
   *   fl.trace("\nFrame " + i + ":");
   *   fl.trace(
   *     "\nMatrix: a = " +
   *       matrix.a +
   *       ", b = " +
   *       matrix.b +
   *       ", c = " +
   *       matrix.c +
   *       ", d =" +
   *       matrix.d +
   *       ", tx = " +
   *       matrix.tx +
   *       ", ty = " +
   *       matrix.ty
   *   );
   * }
   * ```
   */
  getGeometricTransform(frameIndex: number): Matrix;

  /**
   * Method; Returns interpolated shape of a selected frame within a tween-span.
   * @since Adobe Flash Professional CC
   * @param frameIndex Offset (integer) index of the frame from which shape data has to be retrieved.
   * @returns Shape coordinates at the frame offset.
   * @example
   *
   * ```javascript
   * var tweenObj = fl.getDocumentDOM().getTimeline().layers[0].frames[0].tweenObj;
   * if (tweenObj.tweenType == "shape") {
   *   for (var i = 0; i < tweenObj.duration; i++) {
   *     var shape = tweenObj.getShape(i);
   *     fl.trace("X: " + shape.x + " Y: " + shape.x + " Width: " + shape.width + " Height: " + shape.height);
   *   }
   * }
   * ```
   */
  getShape(frameIndex: number): { x: number; y: number; width: number; height: number; };

  /**
   * Duration of a tween span that is equal to number of frames in a tween.
   * @since Adobe Flash Professional CC
   * @example
   *
   * ```javascript
   * var tweenObj = fl.getDocumentDOM().getTimeline().layers[0].frames[0].tweenObj;
   * fl.trace(tweenObj.duration);
   * ```
   */
  duration: number;

  /**
   * Start frame of a tween.
   * @since Adobe Flash Professional CC
   * @example
   *
   * ```javascript
   * var tweenObj = fl.getDocumentDOM().getTimeline().layers[0].frames[0].tweenObj;
   * fl.trace(tweenObj.startFrame);
   * ```
   */
  startFrame: number;

  /**
   * Tthe type of tween. Motion or Shape.
   * @since Adobe Flash Professional CC
   * @example
   *
   * ```javascript
   * var tweenObj = fl.getDocumentDOM().getTimeline().layers[0].frames[0].tweenObj;
   * fl.trace(tweenObj.tweenType);
   * ```
   */
  tweenType: "motion" | "shape";
}

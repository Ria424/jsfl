/**
 * The Camera object provides animators with the ability to control and manipulate the camera's properties at any frame in the timeline. This allows for dynamic storytelling and enhanced visual effects, similar to techniques used in motion films.
 *
 * Key features include:
 *
 * 1. Panning to follow the subject within the frame.
 * 2. Zooming in on an object of interest to create a dramatic effect.
 * 3. Zooming out to reveal a broader perspective or context.
 * 4. Adjusting the focal point to shift the viewer's attention between subjects.
 * 5. Rotating the camera to achieve unique angles or perspectives.
 * 6. Applying color tints or filters to enhance the mood or atmosphere of a scene.
 * @since Adobe Animate CC 2019
 */
export interface Camera {
  /**
   * Gets camera color filter.
   * @since Adobe Animate CC 2019
   * @param frameIndex integer
   * @example
   *
   * The following example gets camera color filter.
   *
   * ```javascript
   * var timeline = an.getDocumentDOM().getTimeline();
   * timeline.camera.cameraEnabled = true;
   * timeline.camera.colorFilterEnabled = true;
   *
   * var filterVal = timeline.camera.getColorFilter(0);
   * fl.trace(
   *   "Brightness: " +
   *     filterVal.brightness +
   *     " Contrast: " +
   *     filterVal.contrast +
   *     " Saturation: " +
   *     filterVal.saturation +
   *     " Hue: " +
   *     filterVal.hue
   * );
   * ```
   */
  getColorFilter(frameIndex: number): void;

  /**
   * Return object with x and y properties that specify current location of camera.
   * @since Adobe Animate CC 2019
   * @param frameIndex integer
   * @returns e.g. {x: 0, y: 0}
   * @example
   *
   * ```javascript
   * var tl = an.getDocumentDOM().getTimeline();
   * var cameraPos = tl.camera.getPosition(3); // get the camera position at 4th frame in timeline
   * an.trace("Camera position: x = " + cameraPos.x + ", y = " + cameraPos.y);
   * ```
   */
  getPosition(frameIndex: number): Point;

  /**
   * Return current angle of camera.
   * @since Adobe Animate CC 2019
   * @param frameIndex integer
   * @example
   *
   * ```javascript
   * var timeline = an.getDocumentDOM().getTimeline();
   * timeline.camera.cameraEnabled = true;
   * var val = timeline.camera.getRotation(0);
   * ```
   * @see
   *
   * - {@link Camera.getZDepth | Camera.getZDepth()}
   * - {@link Camera.getRotation | Camera.getRotation()}
   * - {@link Camera.getZoom | Camera.getZoom()}
   */
  getRotation(frameIndex: number): void;

  /**
   * Return object with two properties: 'percent' & 'color'.
   * @since Adobe Animate CC 2019
   * @param frameIndex integer
   * @returns Tint object. e.g. {percent: 0, red: 0, green: 0, blue: 0}
   * @example
   *
   * ```javascript
   * var timeline = an.getDocumentDOM().getTimeline();
   * timeline.camera.cameraEnabled = true;
   * timeline.camera.tintEnabled = true;
   *
   * var tintVal = timeline.camera.getTint(0);
   * fl.trace(
   *   "Tint Percentage: " + tintVal.percent + " Red: " + tintVal.red + " Green: " + tintVal.green + " Blue: " + tintVal.blue
   * );
   * ```
   * @see
   *
   * - {@link Camera.getRotation | Camera.getRotation()}
   * - {@link Camera.getZoom | Camera.getZoom()}
   */
  getTint(frameIndex: number): { percent: number; red: number; green: number; blue: number };

  /**
   * Sets camera's Z Depth value.
   * @since Adobe Animate CC 2019
   * @param frameIndex Integer
   * @param tz Pixels
   */
  getZDepth(frameIndex: number, tz: number): void;

  /**
   * Return the current zoom value of camera. Default is 100%.
   * @since Adobe Animate CC 2019
   * @param frameIndex integer
   * @usage getZoom(frameIndex)
   * @example
   *
   * ```javascript
   * var timeline = an.getDocumentDOM().getTimeline();
   * timeline.camera.cameraEnabled = true;
   * var zoomval = timeline.camera.getZoom(0);
   * ```
   * @see
   *
   * - {@link Camera.getZDepth | Camera.getZDepth()}
   * - {@link Camera.getRotation | Camera.getRotation()}
   */
  getZoom(frameIndex: number): void;

  /**
   * Reset all camera properties to default.
   * @since Adobe Animate CC 2019
   * @param frameIndex integer
   * @returns Nothing.
   * @example
   *
   * The following example reset all camera properties to default.
   *
   * ```javascript
   * var timeline = an.getDocumentDOM().getTimeline();
   * timeline.camera.reset(0);
   * ```
   */
  reset(frameIndex: number): void;

  /**
   * Remove color filter.
   * @since Adobe Animate CC 2019
   * @param frameIndex integer
   * @returns Nothing.
   * @example
   *
   * The following example removes color filter.
   *
   * ```javascript
   * var timeline = an.getDocumentDOM().getTimeline();
   * timeline.camera.resetColorFilter(0);
   * ```
   */
  resetColorFilter(frameIndex: number): void;

  /**
   * Reset camera position to the original position i.e (0, 0, 0).
   * @since Adobe Animate CC 2019
   * @param frameIndex integer
   * @returns Nothing.
   * @example
   *
   * The following example resets camera position to the original position i.e (0, 0, 0):
   *
   * ```javascript
   * var timeline = an.getDocumentDOM().getTimeline();
   * timeline.camera.resetPosition(0);
   * ```
   */
  resetPosition(frameIndex: number): void;

  /**
   * Reset camera angle to zero.
   * @since Adobe Animate CC 2019
   * @param frameIndex integer
   * @returns Nothing.
   * @example
   *
   * The following example resets camera angle to zero.
   *
   * ```javascript
   * var timeline = an.getDocumentDOM().getTimeline();
   * timeline.camera.resetRotation(0);
   * ```
   */
  resetRotation(frameIndex: number): void;

  /**
   * Remove camera tint.
   * @since Adobe Animate CC 2019
   * @param frameIndex integer
   * @returns Nothing.
   * @example
   *
   * The following example Remove camera tint.
   *
   * ```javascript
   * var tl = an.getDocumentDOM().getTimeline();
   * tl.camera.resetTint(0); // reset camera tint at first frame in timeline
   * ```
   */
  resetTint(frameIndex: number): void;

  /**
   * Reset camera zoom to it's default zoom value i.e 100%.
   * @since Adobe Animate CC 2019
   * @param frameIndex integer
   * @returns Nothing.
   * @example
   *
   * The following example resets camera zoom to it's default zoom value i.e 100%.
   *
   * ```javascript
   * var timeline = an.getDocumentDOM().getTimeline();
   * timeline.camera.resetZoom(0);
   * ```
   */
  resetZoom(frameIndex: number): void;

  /**
   * Set camera color filter using decomposed values of (brightness, contrast, saturation, hue).
   * @since Adobe Animate CC 2019
   * @todo Find out parameter types.
   * @param frameIndex integer
   * @param brightness integer
   * @param contrast integer
   * @param saturation integer
   * @param hue integer
   * @returns Nothing.
   * @usage setColorFilter(frameIndex, brightness, contrast, saturation, hue)
   * @example
   *
   * The following example sets Set camera color filter using decomposed values of (brightness, contrast, saturation, hue).
   *
   * ```javascript
   * var timeline = an.getDocumentDOM().getTimeline();
   * timeline.camera.cameraEnabled = true;
   * timeline.camera.colorFilterEnabled = true;
   *
   * timeline.camera.setColorFilter(0, 50, 255, 255, 100);
   * ```
   */
  setColorFilter(frameIndex: number, brightness: number, contrast: number, saturation: number, hue: number): void;

  /**
   * Rotate camera by absolute angle given as input parameters.
   * @since Adobe Animate CC 2019
   * @param frameIndex Frame Number in timeline.
   * @param angleDegree (integer) The angleDegree for rotation.
   * @returns Nothing.
   * @example
   *
   * The following example rotates camera by absolute angle given as input parameters.
   *
   * ```javascript
   * var timeline = an.getDocumentDOM().getTimeline();
   * timeline.camera.setRotation(37, -100);
   * ```
   */
  setRotation(frameIndex: number, angleDegree: number): void;

  /**
   * Set camera tint using tint color(RGB) & tint percent (percentage of tint).
   * @since Adobe Animate CC 2019
   * @param frameIndex integer
   * @param amount integer
   * @param red integer
   * @param green integer
   * @param blue integer
   * @returns Nothing.
   * @example
   *
   * The following example sets camera tint using tint color(RGB) & tint percent (percentage of tint).
   *
   * ```javascript
   * var timeline = an.getDocumentDOM().getTimeline();
   * timeline.camera.cameraEnabled = true;
   * timeline.camera.tintEnabled = true;
   *
   * timeline.camera.setTint(0, 100, 255, 255, 255);
   * ```
   */
  setTint(frameIndex: number, amount: number, red: number, green: number, blue: number): void;

  /**
   * Sets camera's Z Depth value.
   * @since Adobe Animate CC 2019
   * @todo Find out parameter types.
   * @param frameIndex integer
   * @param tz Pixels.
   * @returns Nothing.
   * @example
   *
   * ```javascript
   * cameraObj.setZDepth(200);
   * ```
   */
  setZDepth(frameIndex: number, tz: number): void;

  /**
   * Zooms camera to absolute value given by input parameter in percentage.
   * @since Adobe Animate CC 2019
   * @param frameIndex integer
   * @param zoomVal integer
   * @returns Nothing.
   * @example
   *
   * The following example zooms camera to absolute value given by input parameter in percentage.
   *
   * ```javascript
   * var timeline = an.getDocumentDOM().getTimeline();
   * timeline.camera.setZoom(37, -100);
   * ```
   */
  setZoom(frameIndex: number, zoomVal: number): void;

  /**
   * Used to Enable/Disable camera. The value is true if camera is enabled otherwise false.
   * @since Adobe Animate CC 2019
   * @example
   *
   * The following example enables the camera:
   *
   * ```javascript
   * var timeline = an.getDocumentDOM().getTimeline();
   * timeline.camera.cameraEnabled = true;
   * ```
   */
  cameraEnabled: boolean;

  /**
   * Used to Enable/Disable camera's color Filter. The value is true if camera is enabled otherwise false.
   * @since Adobe Animate CC 2019
   * @example
   *
   * The following example enables the color filter:
   *
   * ```javascript
   * var timeline = an.getDocumentDOM().getTimeline();
   * timeline.camera.colorFilterEnabled = true;
   * ```
   */
  colorFilterEnabled: boolean;

  /**
   * Used to Enable/Disable tint. The value true is if camera is enabled otherwise false.
   * @since Adobe Animate CC 2019
   * @example
   *
   * The following example enables the tint:
   *
   * ```javascript
   * var timeline = an.getDocumentDOM().getTimeline();
   * timeline.camera.tintEnabled = true;
   * ```
   */
  tintEnabled: boolean;
}

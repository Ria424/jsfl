/**
 * The DrawingLayer object is accessible from JavaScript as a child of the {@link Flash | Flash object}.
 *
 * It is used for extensible tools when the user wants to temporarily draw while dragging. For example, when creating a selection marquee. You should call {@link DrawingLayer.beginFrame | DrawingLayer.beginFrame()} before you call any other Its methods.
 * @since Macromedia Flash MX Basic/Professional 2004
 */
interface DrawingLayer {
  /**
   * Method; Puts Flash in drawing mode. Drawing mode is used for temporary drawing while the mouse button is pressed. You typically use this method only when creating extensible tools.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param [persistentDraw] A boolean value (optional). If set to *true*, it indicates that the drawing in the last frame remains on the Stage until a new *beginDraw()* or *beginFrame()* call is made. (In this context, *frame* refers to where you start and end drawing; it does not refer to timeline frames.) For example, when users draw a rectangle, they can preview the outline of the shape while dragging the mouse. If you want that preview shape to remain after the user releases the mouse button, set *persistentDraw* to true.
   * @returns Nothing.
   */
  beginDraw(persistentDraw?: boolean): void;

  /**
   * Method; Erases what was previously drawn using the DrawingLayer and prepares for more drawing commands. Should be called after `DrawingLayer.beginDraw()`. Everything drawn between `DrawingLayer.beginFrame()` and an `DrawingLayer.endFrame()` remains on the Stage until you call the next `DrawingLayer.beginFrame()` and `DrawingLayer.endFrame()`. (In this context, *frame* refers to where you start and end drawing; it does not refer to timeline frames.) You typically use this method only when creating extensible tools. See {@link DrawingLayer.beginDraw | DrawingLayer.beginDraw()}.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @returns Nothing.
   */
  beginFrame(): void;

  /**
   * Method; Draws a cubic curve from the current pen location using the parameters as the coordinates of the cubic segment. You typically use this method only when creating extensible tools.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param firstX A floating-point value that is the *x* location of the first control point.
   * @param firstY A floating-point value that is the *y* location of the first control point.
   * @param middleX A floating-point value that is the *x* position of the middle control point.
   * @param middleY A floating-point value that is the *y* position of the middle control point.
   * @param endX A floating-point value that is the *x* position of the end control point.
   * @param endY A floating-point value that is the *y* position of the end control point.
   * @returns Nothing.
   * @example
   *
   * The following example draws a cubic curve using the specified control points:
   *
   * ```javascript
   * fl.drawingLayer.cubicCurveTo(0, 0, 1, 1, 2, 0);
   * ```
   */
  cubicCurveTo(firstX: number, firstY: number, middleX: number, middleY: number, endX: number, endY: number): void;

  /**
   * Method; Draws a quadratic curve segment starting at the current drawing position and ending at a specified point. You typically use this method only when creating extensible tools.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param controlX A floating-point value that is the *x* position of the control point.
   * @param controlY A floating-point value that is the *y* position of the control point.
   * @param endControlX A floating-point value that is the *x* position of the end control point.
   * @param endControlY A floating-point value that is the *y* position of the end control point.
   * @returns Nothing.
   * @example
   *
   * The following example draws a quadratic curve using the specified control points:
   *
   * ```javascript
   * fl.drawingLayer.curveTo(0, 0, 2, 0);
   * ```
   */
  curveTo(controlX: number, controlY: number, endControlX: number, endControlY: number): void;

  /**
   * Method; Draws the path specified by the *path* parameter. You typically use this method only when creating extensible tools.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param path A {@link Path | Path object} to draw.
   * @returns Nothing.
   * @example
   *
   * The following example draws a path specified by the Path object named gamePath:
   *
   * ```javascript
   * fl.drawingLayer.drawPath(gamePath);
   * ```
   */
  drawPath(path: Path): void;

  /**
   * Method; Exits drawing mode. Drawing mode is used when you want to temporarily draw while the mouse button is pressed. You typically use this method only when creating extensible tools.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @returns Nothing.
   * @example
   *
   * The following example exits drawing mode:
   *
   * ```javascript
   * fl.drawingLayer.endDraw();
   * ```
   */
  endDraw(): void;

  /**
   * Method; Signals the end of a group of drawing commands. A group of drawing commands refers to everything drawn between {@link DrawingLayer.beginFrame | DrawingLayer.beginFrame()} and `DrawingLayer.endFrame()`. The next call to {@link DrawingLayer.beginFrame | DrawingLayer.beginFrame()} will erase whatever was drawn in this group of drawing commands. You typically use this method only when creating extensible tools.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @returns Nothing.
   */
  endFrame(): void;

  /**
   * Method; Draws a line from the current drawing position to the point (*x, y*). You typically use this method only when creating extensible tools.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param x A floating-point value that is the *x* coordinate of the end point of the line to draw.
   * @param y A floating-point value that is the *y* coordinate of the end point of the line to draw.
   * @returns Nothing.
   * @example
   *
   * The following example draws a line from the current drawing position to the point (20, 30):
   *
   * ```javascript
   * fl.drawingLayer.lineTo(20, 30);
   * ```
   */
  lineTo(x: number, y: number): void;

  /**
   * Method; Sets the current drawing position. You typically use this method only when creating extensible tools.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param x A floating-point value that specifies the *x* coordinate of the position at which to start drawing.
   * @param y A floating-point value that specifies the *y* coordinate of the position at which to start drawing.
   * @returns Nothing.
   * @example
   *
   * The following example sets the current drawing position at the point (10,15):
   *
   * ```javascript
   * fl.drawingLayer.moveTo(10, 15);
   * ```
   */
  moveTo(x: number, y: number): void;

  /**
   * Method; Returns a new Path object. You typically use this method only when creating extensible tools. See {@link Path | Path object}.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @returns A Path object.
   * @example
   *
   * The following example returns a new Path object:
   *
   * ```javascript
   * fl.drawingLayer.newPath();
   * ```
   */
  newPath(): Path;

  /**
   * Method; Sets the color of subsequently drawn data. Applies only to persistent data. To use this method, the parameter passed to drawingLayer.beginDraw() must be set to true. You typically use this method only when creating extensible tools. See {@link DrawingLayer.beginDraw | DrawingLayer.beginDraw()}.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param color The color of subsequently drawn data, in one of the following formats:
   *
   * - A string in the format "\#RRGGBB" or "\#RRGGBBAA"
   *
   * - A hexadecimal number in the format 0xRRGGBB
   *
   * - An integer that represents the decimal equivalent of a hexadecimal number
   * @returns Nothing.
   * @example
   *
   * The following example draws a red line on the Stage:
   *
   * ```javascript
   * fl.drawingLayer.beginDraw(true);
   * fl.drawingLayer.beginFrame();
   * fl.drawingLayer.setColor("#ff0000");
   * fl.drawingLayer.moveTo(0, 0);
   * fl.drawingLayer.lineTo(100, 100);
   * fl.drawingLayer.endFrame();
   * fl.drawingLayer.endDraw();
   * ```
   */
  setColor(color: number | string): void;

  /**
   * @todo Fill this out
   */
  setFill(): void;

  /**
   * @todo Fill this out
   */
  setStroke(): void;
}

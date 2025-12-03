/**
 * The Tools object is accessible from the flash object ({@link Flash.tools | Flash.tools}).
 *
 * The {@link Tools.toolObjs | Tools.toolObjs} property contains an array of ToolObj objects,
 * and the {@link Tools.activeTool | Tools.activeTool} property returns the ToolObj object for the currently active tool.
 *
 * ***Note:** The following methods and properties are used only when creating extensible tools.*
 * @since Macromedia Flash MX Basic/Professional 2004
 * @see {@link ToolObj | ToolObj object}
 */
interface Tools {
  /**
   * Method; takes two points and returns a new adjusted or constrained point.
   *
   * If the Shift key is pressed when the command is run,
   * the returned point is constrained to follow either a 45º constrain
   * (useful for something such as a line with an arrowhead)
   * or to constrain an object to maintain its aspect ratio
   * (such as pulling out a perfect square with the Rectangle tool).
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param point1 The starting-click point and the drag-to point.
   * @param point2 The starting-click point and the drag-to point.
   * @returns A new adjusted or constrained point.
   * @example
   *
   * The following example returns a constrained point:
   *
   * ```javascript
   * var point2 = fl.tools.constrainPoint(point1, tempPt);
   * ```
   */
  constrainPoint(point1: Point, point2: Point): Point;

  /**
   * Method; Returns the most recently pressed key.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @returns The integer value of the key.
   * @example
   *
   * The following example displays the integer value of the most recently pressed key:
   *
   * ```javascript
   * var theKey = fl.tools.getKeyDown();
   * fl.trace(theKey);
   * ```
   */
  getKeyDown(): number;

  /**
   * Method; Sets the pointer to a specified appearance.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param cursor The pointer appearance, as described in the following list:
   *
   * - `0` = Plus cursor (+)
   * - `1` = black arrow
   * - `2` = white arrow
   * - `3` = four-way arrow
   * - `4` = two-way horizontal arrow
   * - `5` = two-way vertical arrow
   * - `6` = X
   * - `7` = hand cursor
   * @returns Nothing.
   * @example
   *
   * The following example sets the pointer to a black arrow.
   *
   * ```javascript
   * fl.tools.setCursor(1);
   * ```
   */
  setCursor(cursor: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7): void;

  /**
   * Method; Takes a point as input and returns a new point that may be adjusted or *snapped*
   * to the nearest geometric object.
   *
   * If snapping is disabled in the View menu in the Flash user interface, the point returned is the original point.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param point The location of the point for which you want to return a snap point.
   * @returns A new point that may be adjusted or snapped to the nearest geometric object.
   * @example
   *
   * The following example returns a new point that may be snapped to the nearest geometric object.
   *
   * ```javascript
   * var theSnapPoint = fl.tools.snapPoint(point);
   * ```
   */
  snapPoint(point: Point): Point;

  /**
   * Read-only property; Returns the {@link ToolObj | ToolObj object} for the currently active tool.
   * @since Macromedia Flash MX Basic/Professional 2004
   */
  readonly activeTool: ToolObj;

  /**
   * Read-only property; Identifies if the Alt key is being pressed.
   *
   * The value is `true` if the Alt key is pressed, and `false` otherwise.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example determines whether the Alt key is being pressed:
   *
   * ```javascript
   * var isAltDown = fl.tools.altIsDown;
   * ```
   */
  readonly altIsDown: boolean;

  /**
   * Read-only property; A boolean value that is `true` if the Control key is pressed; `false` otherwise.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example determines whether the Control key is being pressed:
   *
   * ```javascript
   * var isCtrldown = fl.tools.ctrlIsDown;
   * ```
   */
  readonly ctlIsDown: boolean;

  /**
   * Read-only property; A boolean value that is `true` if the left mouse button is currently down; `false` otherwise.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example determines whether the left mouse button is pressed.
   *
   * ```javascript
   * var isMouseDown = fl.tools.mouseIsDown;
   * ```
   */
  readonly mouseIsDown: boolean;

  /**
   * Read-only property; A point that represents the position of the last mouse-down event on the Stage.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example determines the position of the last mouse-down event on the Stage
   * and displays the `x` and `y` values in the Output panel:
   *
   * ```javascript
   * var point1 = fl.tools.penDownLoc;
   * fl.trace("x, y location of last mouseDown event was " + point1.x + ", " + point1.y);
   * ```
   * @see {@link Tools.penLoc | Tools.penLoc}
   */
  readonly penDownLoc: Point;

  /**
   * Read-only property; The current location of the mouse pointer.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example determines the current location of the mouse:
   *
   * ```javascript
   * var tempPt = fl.tools.penLoc;
   * ```
   * @see {@link Tools.penDownLoc}
   */
  readonly penLoc: Point;

  /**
   * Read-only property; A boolean value that is `true` if the Shift key is pressed; `false` otherwise.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example determines whether the Shift key is being pressed.
   *
   * ```javascript
   * var isShiftDown = fl.tools.shiftIsDown;
   * ```
   */
  readonly shiftIsDown: boolean;

  /**
   * Read-only property; An array of {@link ToolObj | ToolObj object}s.
   * @since Macromedia Flash MX Basic/Professional 2004
   */
  readonly toolObjs: ToolObj[];
}

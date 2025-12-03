/**
 * The Rectangle object is a shape that is drawn using the Rectangle Primitive tool.
 *
 * To determine if an item is a Rectangle object, use {@link Shape.isRectangleObject}.
 * @since Adobe Flash Professional CS3
 */
interface Rectangle extends Shape {
  /**
   * Read-only property; A float value that sets the radius of the bottom-left corner of the Rectangle object.
   * If {@link Rectangle.lockFlag} is true, trying to set this value has no effect.
   *
   * To set this value, use {@link Document.setRectangleObjectProperty | Document.setRectangleObjectProperty()}.
   * @since Adobe Flash Professional CS3
   * @see
   *
   * - {@link Document.setRectangleObjectProperty | Document.setRectangleObjectProperty()}
   * - {@link Rectangle.bottomRightRadius}
   * - {@link Rectangle.lockFlag}
   * - {@link Rectangle.topLeftRadius}
   * - {@link Rectangle.topRightRadius}
   */
  readonly bottomLeftRadius: number;

  /**
   * Read-only property; A float value that sets the radius of the bottom-right corner of the Rectangle object.
   * If {@link Rectangle.lockFlag} is true, trying to set this value has no effect.
   *
   * To set this value, use {@link Document.setRectangleObjectProperty | Document.setRectangleObjectProperty()}.
   * @since Adobe Flash Professional CS3
   * @see
   *
   * - {@link Document.setRectangleObjectProperty | Document.setRectangleObjectProperty()}
   * - {@link Rectangle.bottomLeftRadius}
   * - {@link Rectangle.lockFlag}
   * - {@link Rectangle.topLeftRadius}
   * - {@link Rectangle.topRightRadius}
   */
  readonly bottomRightRadius: number;

  readonly isRectangleObject: true;

  /**
   * Read-only property; A boolean value that determines whether different corners of the rectangle can have different radius values.
   * If this value is `true`, all corners have the value assigned to `Rectangle.topLeftRadius`.
   * If it is `false`, each corner radius can be set independently.
   *
   * To set this value, use {@link Document.setRectangleObjectProperty | Document.setRectangleObjectProperty()}.
   * @since Adobe Flash Professional CS3
   * @see
   *
   * - {@link Document.setRectangleObjectProperty | Document.setRectangleObjectProperty()}
   * - {@link Rectangle.bottomLeftRadius}
   * - {@link Rectangle.bottomRightRadius}
   * - {@link Rectangle.topLeftRadius}
   * - {@link Rectangle.topRightRadius}
   */
  readonly lockFlag: boolean;

  /**
   * Read-only property; A float value that sets the radius of all corners of the rectangle
   * (if {@link Rectangle.lockFlag} is true) or that sets only the radius of the top-left corner (if `Rectangle.lockFlag` is false).
   *
   * To set this value, use {@link Document.setRectangleObjectProperty | Document.setRectangleObjectProperty()}.
   * @since Adobe Flash Professional CS3
   * @see
   *
   * - {@link Document.setRectangleObjectProperty | Document.setRectangleObjectProperty()}
   * - {@link Rectangle.bottomLeftRadius}
   * - {@link Rectangle.bottomRightRadius}
   * - {@link Rectangle.lockFlag}
   * - {@link Rectangle.topRightRadius}
   */
  readonly topLeftRadius: number;

  /**
   * Read-only property; A float value that sets the radius of the top-right corner of the Rectangle object.
   * If {@link Rectangle.lockFlag} is true, trying to set this value has no effect.
   *
   * To set this value, use {@link Document.setRectangleObjectProperty | Document.setRectangleObjectProperty()}.
   * @since Adobe Flash Professional CS3
   * @see
   *
   * - {@link Document.setRectangleObjectProperty | Document.setRectangleObjectProperty()}
   * - {@link Rectangle.bottomLeftRadius}
   * - {@link Rectangle.bottomRightRadius}
   * - {@link Rectangle.lockFlag}
   * - {@link Rectangle.topLeftRadius}
   */
  readonly topRightRadius: number;
}

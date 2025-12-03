/**
 * The Oval object is a shape that is drawn using the Oval Primitive tool.
 * To determine if an item is an Oval object, use {@link Shape.isOvalObject}.
 * @since Adobe Flash Professional CS3
 */
interface Oval extends Shape {
  /**
   * Read-only property; A boolean value that specifies whether the Close Path check box in the Property inspector is selected.
   * If the start angle and end angle values for the object are the same, setting this property has no effect until the values change.
   * To set this value, use {@link Document.setOvalObjectProperty | Document.setOvalObjectProperty()}.
   * @since Adobe Flash Professional CS3
   * @example
   *
   * The following example deselects the `Oval.closePath` property:
   *
   * ```javascript
   * fl.getDocumentDOM().setOvalObjectProperty("closePath", false);
   * ```
   * @see
   *
   * - {@link Document.setOvalObjectProperty | Document.setOvalObjectProperty()}
   * - {@link Shape.isOvalObject}
   */
  readonly closePath: boolean;

  /**
   * Read-only property; A float value that specifies the end angle of the Oval object.
   * Acceptable values are from 0 to 360.
   * To set this value, use {@link Document.setOvalObjectProperty | Document.setOvalObjectProperty()}.
   * @since Adobe Flash Professional CS3
   * @example
   *
   * The following example sets the end angle of selected Oval objects to 270.
   *
   * ```javascript
   * fl.getDocumentDOM().setOvalObjectProperty("endAngle", 270);
   * ```
   * @see
   *
   * - {@link Document.setOvalObjectProperty | Document.setOvalObjectProperty()}
   * - {@link Oval.startAngle}
   * - {@link Shape.isOvalObject}
   */
  readonly endAngle: number;

  /**
   * Read-only property; A float value that specifies the inner radius of the Oval object as a percentage.
   * Acceptable values are from 0 to 99.
   * To set this value, use {@link Document.setOvalObjectProperty | Document.setOvalObjectProperty()}.
   * @since Adobe Flash Professional CS3
   * @example
   *
   * The following example sets the inner radius of selected Oval objects to 50 percent:
   *
   * ```javascript
   * fl.getDocumentDOM().setOvalObjectProperty("innerRadius", 50);
   * ```
   * @see
   *
   * - {@link Document.setOvalObjectProperty | Document.setOvalObjectProperty()}
   * - {@link Shape.isOvalObject}
   */
  readonly innerRadius: number;

  readonly isOvalObject: true;

  /**
   * Read-only property; A float value that specifies the start angle of the Oval object.
   * Acceptable values are from 0 to 360. To set this value, use {@link Document.setOvalObjectProperty | Document.setOvalObjectProperty()}.
   * @since Adobe Flash Professional CS3
   * @example
   *
   * The following example sets the start angle of selected Oval objects to 270:
   *
   * ```javascript
   * fl.getDocumentDOM().setOvalObjectProperty("startAngle", 270);
   * ```
   * @see
   *
   * - {@link Document.setOvalObjectProperty | Document.setOvalObjectProperty()}
   * - {@link Oval.endAngle}
   * - {@link Shape.isOvalObject}
   */
  readonly startAngle: number;
}

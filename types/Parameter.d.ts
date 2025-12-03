/**
 * The Parameter object type is accessed from the {@link ComponentInstance.parameters} array
 * (which corresponds to the component Property inspector in the authoring tool).
 * @since Macromedia Flash MX Basic/Professional 2004
 */
interface Parameter {
  /**
   * Method; Inserts an item in an object or array.
   * If a parameter is an object or array, the **`value`** property is an array.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param index A zero-based integer index that indicates where the item will be inserted in the object or array.
   * If the index is 0, the item is inserted at the beginning.
   *
   * If the index is greater than the list size, the new item is inserted at the end.
   * @param name The name of the item to insert. This is a required parameter for object parameters.
   * @param value The value of the item to insert.
   * @param type The type of item to insert.
   * @returns Nothing.
   * @example
   *
   * The following example inserts the value of New Value into the "labelPlacement" parameter:
   *
   * ```javascript
   * // Select an instance of a Button component on the Stage.
   * var parms = fl.getDocumentDOM().selection[0].parameters;
   * parms[3].insertItem(0, "name", "New Value", "String");
   * var values = parms[3].value;
   * for (var prop in values) {
   *   fl.trace("labelPlacement parameter value = " + values[prop].value);
   * }
   * ```
   */
  insertItem(index: number, name: string, value: string, type: string): void;

  /**
   * Method; Removes an element of the object or array type of a screen or component parameter.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param index The zero-based integer index of the item to be removed from the screen or component property.
   * @returns Nothing.
   * @example
   *
   * The following example removes the element at index 1 from the "labelPlacement" parameter of a component:
   *
   * ```javascript
   * // Select an instance of a Button component on the Stage.
   * var parms = fl.getDocumentDOM().selection[0].parameters;
   * var values = parms[2].value;
   * fl.trace("--Original--");
   * for (var prop in values) {
   *   fl.trace("labelPlacement value = " + values[prop].value);
   * }
   * parms[2].removeItem(1);
   * var newValues = parms[2].value;
   * fl.trace("--After Removing Item--");
   * for (var prop in newValues) {
   *   fl.trace("labelPlacement value = " + newValues[prop].value);
   * }
   * ```
   *
   * The following example removes the element at index 1 from the "autoKeyNav" parameter of a screen:
   *
   * ```javascript
   * // Open a presentation document.
   * var parms = fl.getDocumentDOM().screenOutline.screens[1].parameters;
   * var values = parms[0].value;
   * fl.trace("--Original--");
   * for (var prop in values) {
   *   fl.trace("autoKeyNav value = " + values[prop].value);
   * }
   * parms[0].removeItem(1);
   * var newValues = parms[0].value;
   * fl.trace("--After Removing Item--");
   * for (var prop in newValues) {
   *   fl.trace("autoKeyNav value = " + newValues[prop].value);
   * }
   * ```
   */
  removeItem(index: number): void;

  /**
   * Property; The value of the selected list item.
   * This property is valid only if `Parameter.valueType` is "List".
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the first parameter for a Slide,
   * which is the autoKeyNav parameter.
   * To set the parameter to one of its acceptable values (true, false, or inherit)
   * `Parameter.listIndex` is set to the index of the item in the list (0 for true, 1 for false, 2 for inherit).
   *
   * ```javascript
   * var parms = fl.getDocumentDOM().screenOutline.screens[1].parameters;
   * parms[0].listIndex = 1;
   * ```
   */
  listIndex: any;

  /**
   * Read-only property; Specifies the name of the parameter.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example shows the name of the fifth parameter for the selected component:
   *
   * ```javascript
   * var parms = fl.getDocumentDOM().selection[0].parameters;
   * fl.trace("name: " + parms[4].name);
   * ```
   *
   * The following example shows the name of the fifth parameter for the specified screen:
   *
   * ```javascript
   * var parms = fl.getDocumentDOM().screenOutline.screens[1].parameters;
   * fl.trace("name: " + parms[4].name);
   * ```
   */
  readonly name: string;

  /**
   * Property; Corresponds to the Value field in the Parameters tab of the Component inspector,
   * the Parameters tab of the Property inspector, or the screen Property inspector.
   * The type of the value property is determined by the valueType property for the parameter (see {@link Parameter.valueType}).
   * @since Macromedia Flash MX Basic/Professional 2004
   */
  value: any;

  /**
   * Read-only property; A string that indicates the type of the screen or component parameter. The type can be one of the following values: "Default", "Array", "Object", "List", "String", "Number", "Boolean", "Font Name", "Color", "Collection", "Web Service URL", **or** "Web Service Operation".
   * @since Macromedia Flash MX Basic/Professional 2004
   * @see {@link Parameter.value}
   */
  readonly valueType: "Default" | "Array" | "Object" | "List" | "String" | "Number" | "Boolean" | "Font Name" | "Color" | "Collection" | "Web Service URL" | "Web Service Operation";

  /**
   * Property; Specifies where the parameter is displayed.
   * If the value of this property is 0 (nonverbose), the parameter is displayed only in the Component inspector.
   * If it is 1 (verbose), the parameter is displayed in the Component inspector and in the Parameters tab of the Property inspector.
   * @since Macromedia Flash MX Basic/Professional 2004
   */
  verbose: 0 | 1;
}

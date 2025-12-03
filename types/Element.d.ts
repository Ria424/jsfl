/**
 * "tlfText" was added in Adobe Flash Professional CS5
 */
type ElementType = "shape" | "text" | "tlfText" | "instance" | "shapeObj";

/**
 * Everything that appears on the Stage is of the type Element.
 *
 * @example
 *
 * The following code example lets you select an element:
 *
 * ```javascript
 * var el = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0];
 * ```
 * @since Macromedia Flash MX Basic/Professional 2004
 */
interface Element {
  /**
   * Method; Retrieves the value of the data specified by the **`name`** parameter.
   *
   * The type of data depends on the type of the data that was stored.
   *
   * Only symbols and bitmaps support persistent data.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param name A string that identifies the data to be returned.
   * @returns The data specified by the **`name`** parameter, or 0 if the data doesn't exist.
   * @usage element.getPersistentData(name)
   * @example
   *
   * The following example sets and gets data for the specified element,
   * shows its value in the Output panel, and then removes the data:
   *
   * ```javascript
   * // At least one symbol or bitmap is selected in the first layer, first frame.
   * var elt = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0];
   * elt.setPersistentData("myData", "integer", 12);
   * if (elt.hasPersistentData("myData")) {
   *   fl.trace("myData = " + elt.getPersistentData("myData"));
   *   elt.removePersistentData("myData");
   *   fl.trace("myData = " + elt.getPersistentData("myData"));
   * }
   * ```
   *
   * @see {@link Element.setPersistentData | Element.setPersistentData()}
   */
  getPersistentData(name: string): any | 0;

  /**
   * Method; Indicates whether publishing of a specified persistent data item is enabled for the specified format on an element.
   * @since Adobe Animate CC 2016
   * @param name The name of the persistent data item
   * (set with {@link Element.setPersistentData | Element.setPersistentData()}).
   * @param format The publishing format.
   *
   * ***Note:** `_EMBED_SWF_` is a special built-in publishing format for persistent data.
   * If set, the persistent data will be embedded in the SWF file every time a document is published.
   * The persistent data can then be accessed via ActionScript with the `.metaData` property.
   * This requires SWF version 19 (Flash Player 11.6) and above and is only for symbol instances onstage.
   * Other custom publishing formats may be specified for custom JSFL scripts if this method is called with the same format.*
   * @returns `true` if the specified persistent data is enabled for the specified format. Otherwise `false`.
   * @example
   *
   * The following example illustrates the use of this method:
   *
   * ```javascript
   * var doc = fl.getDocumentDOM();
   *
   * // set the data
   * if (doc) {
   *   // get the first selected element
   *   var elem = doc.getTimeline().layers[0].frames[0].elements[0];
   *   if (elem) {
   *     // add persistent data "myAlign" of "left"
   *     elem.setPersistentData("myAlign", "string", "left");
   *     // enable publishing of persistent data to SWF for the element
   *     elem.setPublishPersistentData("myAlign", "_EMBED_SWF_", true);
   *     // enable publishing to SWF for entire document
   *     doc.setPublishDocumentData("_EMBED_SWF_", true);
   *   }
   * }
   *
   * // example getting data
   * if (doc && doc.getPublishDocumentData("_EMBED_SWF_")) {
   *   // get the first selected element
   *   var elem = doc.getTimeline().layers[0].frames[0].elements[0];
   *   if (elem && elem.hasPersistentData("myAlign") && elem.getPublishPersistentData("myAlign", "_EMBED_SWF_")) {
   *     alert(
   *       "elem.metaData.myAlign = '" + elem.getPersistentData("myAlign") + "' will be embedded in SWF when published."
   *     );
   *   }
   * }
   * ```
   * @see {@link Element.setPublishPersistentData | Element.setPublishPersistentData()}
   */
  getPublishPersistentData(name: string, format: string): boolean;

  /**
   * Method; Gets the value of the specified element's transformation point.
   * Transformation points are relative to different locations, depending on the type of item selected.
   * For more information, see {@link Element.setTransformationPoint | Element.setTransformationPoint()}.
   * @since Adobe Flash Professional CS3
   * @returns The position of the transformation point (also *origin point* or *zero point*)
   * within the element's coordinate system.
   * @example
   *
   * The following example gets the transformation point for the third element
   * in the ninth frame on the first layer in the document.
   *
   * The `transPoint.x` property gives the x coordinate of the transformation point.
   * The `transPoint.y` property gives the y coordinate of the transformation point.
   *
   * ```javascript
   * var transPoint = fl.getDocumentDOM().getTimeline().layers[0].frames[8].elements[2].getTransformationPoint();
   * ```
   * @see
   *
   * - {@link Document.getTransformationPoint | Document.getTransformationPoint()}
   * - {@link Element.setTransformationPoint | Element.setTransformationPoint()}
   * - {@link Element.transformX}
   * - {@link Element.transformY}
   */
  getTransformationPoint(): Point;

  /**
   * Method; Determines whether the specified data has been attached to the specified element.
   * Only symbols and bitmaps support persistent data.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param name The name of the data item to test.
   * @returns `true` if the specified data is attached to the object; `false` otherwise.
   * @see {@link Element.getPersistentData | Element.getPersistentData()}.
   */
  hasPersistentData(name: string): boolean;

  /**
   * Method; Removes any persistent data with the specified name that has been attached to the object.
   * Only symbols and bitmaps support persistent data.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param name The name of the data to remove.
   * @returns `true` if data was removed; `false` otherwise.
   * @see {@link Element.getPersistentData | Element.getPersistentData()}.
   */
  removePersistentData(name: string): boolean;

  /**
   * Method; Stores data with an element.
   * The data is available when the FLA file containing the element is reopened.
   * Only symbols and bitmaps support persistent data.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param name The name to associate with the data. This name is used to retrieve the data.
   * @param type A string that defines the type of the data.
   * @param value The value to associate with the object.
   * The data type of *value* depends on the value of the **`type`** parameter.
   * The specified value should be appropriate to the data type specified by the **`type`** parameter.
   * @returns Nothing.
   * @see {@link Element.getPersistentData | Element.getPersistentData()}.
   */
  setPersistentData(name: string, type: PersistentDataTypeName, value: PersistentDataType): void;
  setPersistentData(name: string, type: "double" | "integer", value: number): void;
  setPersistentData(name: string, type: "byteArray" | "doubleArray" | "integerArray", value: number[]): void;
  setPersistentData(name: string, type: "string", value: string): void;

  /**
   * Method; Enables or disables publishing of persistent data for a specified format.
   * @since Adobe Flash Professional CC
   * @param name The name of the persistent data item
   * (set with {@link Element.setPersistentData | Element.setPersistentData()}).
   * @param format The publishing format.
   *
   * ***Note:** `_EMBED_SWF_` is a special built-in publishing format for persistent data.
   * If set, the persistent data will be embedded in the SWF file every time a document is published.
   * The persistent data can then be accessed via ActionScript with the `.metaData` property.
   * This requires SWF version 19 (Flash Player 11.6) and above and is only for symbol instances onstage.
   * Other custom publishing formats may be specified for custom JSFL scripts if this method is called with the same format.*
   * @param publish A boolean that indicates whether to enable or disable publishing of persistent data for the specified format.
   * @returns Nothing.
   * @example
   *
   * The following example illustrates the use of this method:
   *
   * ```javascript
   * var doc = fl.getDocumentDOM();
   *
   * // set the data
   * if (doc) {
   *   // get the first selected element
   *   var elem = doc.getTimeline().layers[0].frames[0].elements[0];
   *   if (elem) {
   *     // add persistent data "myAlign" of "left"
   *     elem.setPersistentData("myAlign", "string", "left");
   *     // enable publishing of persistent data to SWF for the element
   *     elem.setPublishPersistentData("myAlign", "_EMBED_SWF_", true);
   *     // enable publishing to SWF for entire document
   *     doc.setPublishDocumentData("_EMBED_SWF_", true);
   *   }
   * }
   *
   * // example getting data
   * if (doc && doc.getPublishDocumentData("_EMBED_SWF_")) {
   *   // get the first selected element
   *   var elem = doc.getTimeline().layers[0].frames[0].elements[0];
   *   if (elem && elem.hasPersistentData("myAlign") && elem.getPublishPersistentData("myAlign", "_EMBED_SWF_")) {
   *     alert(
   *       "elem.metaData.myAlign = '" + elem.getPersistentData("myAlign") + "' will be embedded in SWF when published."
   *     );
   *   }
   * }
   * ```
   * @see {@link Element.getPublishPersistentData | Element.getPublishPersistentData()}
   */
  setPublishPersistentData(name: string, format: string, publish: boolean): void;

  /**
   * Method; Sets the position of the element's transformation point.
   * This method is almost identical to {@link Document.setTransformationPoint | Document.setTransformationPoint()}.
   * It is different in the following way:
   *
   * - You can set transformation points for elements without first selecting them.
   *
   * This method moves the transformation point but does not move the element.
   * By contrast, the {@link Element.transformX} and {@link Element.transformY} properties move the element.
   * @since Adobe Flash Professional CS3
   * @param transformationPoint A point that specifies values for an element's or group's transformation point.
   *
   * - Shapes: **`transformationPoint`** is set relative to the document (0, 0 is the upper-left corner of the Stage).
   * - Symbols: **`transformationPoint`** is set relative to the symbol's registration point (0, 0 is located at the registration point).
   * - Text: **`transformationPoint`** is set relative to the text field (0, 0 is the upper-left corner of the text field).
   * - Bitmaps/videos: **`transformationPoint`** is set relative to the bitmap/video (0, 0 is the upper-left corner of the bitmap or video).
   * - Drawing objects, primitive objects, and groups: **`transformationPoint`** is set relative to the stage.
   * @returns Nothing.
   * @example
   *
   * The following example sets the transformation point of the third element on the Stage to 100, 200:
   *
   * ```javascript
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[2].setTransformationPoint({ x: 100, y: 200 });
   * ```
   * @see
   *
   * - {@link Document.setTransformationPoint | Document.setTransformationPoint()}
   * - {@link Element.getTransformationPoint | Element.getTransformationPoint()}
   * - {@link Element.transformX}
   * - {@link Element.transformY}
   */
  setTransformationPoint(transformationPoint: Point): void;

  /**
   * Read-only property; An integer that has a value greater than 0 for the depth of the object in the view.
   * The drawing order of objects on the Stage specifies which one is on top of the others.
   * Object order can also be managed with the `Modify > Arrange` menu item.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example displays the depth of the specified element in the Output panel:
   *
   * ```javascript
   * // Select an object and run this script.
   * fl.trace("Depth of selected object: " + fl.getDocumentDOM().selection[0].depth);
   * ```
   *
   * @see See the example for {@link Element.elementType}.
   */
  readonly depth: number;

  /**
   * Read-only property; A string that represents the type of the specified element.
   *
   * The value is one of the following:
   * - "shape"
   * - "text"
   * - "tlfText" (Flash Pro CS5 and later)
   * - "instance"
   * - "shapeObj"
   * @since Macromedia Flash MX Basic/Professional 2004.
   * @example
   *
   * The following example stores the type of the first element in the eType variable:
   *
   * ```javascript
   * // In a new file, place a movie clip on first frame top layer, and
   * // then run this line of script.
   * var eType = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].elementType; // eType = instance
   * ```
   *
   * The following example displays several properties for all the elements in the current layer or frame:
   *
   * ```javascript
   * var tl = fl.getDocumentDOM().getTimeline();
   * var elts = tl.layers[tl.currentLayer].frames[tl.currentFrame].elements;
   * for (var x = 0; x < elts.length; x++) {
   *   var elt = elts[x];
   *   fl.trace(
   *     "Element " +
   *       x +
   *       " Name = " +
   *       elt.name +
   *       " Type = " +
   *       elt.elementType +
   *       " Location = " +
   *       elt.left +
   *       "," +
   *       elt.top +
   *       " Depth = " +
   *       elt.depth
   *   );
   * }
   * ```
   */
  readonly elementType: ElementType;

  /**
   * Property; A float value that specifies the height of the element in pixels.
   * Do not use this property to resize a text field.
   * Instead, select the text field and use {@link Document.setTextRectangle | Document.setTextRectangle()}.
   * Using this property with a text field scales the text.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the height of the specified element to 100:
   *
   * ```javascript
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].height = 100;
   * ```
   */
  height: number;

  /**
   * Read-only property; Represents the {@link Layer | Layer object} on which the element is located.
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example stores the Layer object that contains the element in the theLayer variable:
   *
   * ```javascript
   * var theLayer = element.layer;
   * ```
   */
  readonly layer: Layer;

  /**
   * Read-only property; A float value that represents the left side of the element.
   * The value of `Element.left` is relative to the upper left of the Stage for elements that are in a scene
   * and is relative to the symbol's registration point (also *origin point* or *zero point*) if the element is stored within a symbol.
   * Use {@link Document.setSelectionBounds | Document.setSelectionBounds()} or {@link Document.moveSelectionBy | Document.moveSelectionBy()} to set this property.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example illustrates how the value of this property changes when an element is moved:
   *
   * ```javascript
   * // Select an element on the Stage and then run this script.
   * var sel = fl.getDocumentDOM().selection[0];
   * fl.trace("Left (before) = " + sel.left);
   * fl.getDocumentDOM().moveSelectionBy({ x: 100, y: 0 });
   * fl.trace("Left (after) = " + sel.left);
   * ```
   *
   * @see See the {@link Element.elementType} example.
   */
  readonly left: number;

  /**
   * Property; `true` if the element is locked; `false` otherwise.
   * Similar to `Modify > Arrange > Lock`
   *
   * If the value of {@link Element.elementType} is "shape", this property is ignored.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example locks the first element in the first frame, top layer:
   *
   * ```javascript
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].locked = true;
   * ```
   */
  locked: boolean;

  /**
   * Property; A matrix has properties `a`, `b`, `c`, `d`, `tx`,
   * and `ty`. The `a`, `b`, `c`, and `d` properties are floating-point values;
   * the `tx` and `ty` properties are coordinates.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example moves the specified element by 10 pixels in x and 20 pixels in y:
   *
   * ```javascript
   * var mat = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].matrix;
   * mat.tx += 10;
   * mat.ty += 20;
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].matrix = mat;
   * ```
   * @see {@link Matrix | Matrix object}
   */
  matrix: Matrix;

  /**
   * Property; A string that specifies the name of the element, normally referred to as the Instance name.
   * If the value of `Element.elementType` is "shape", this property is ignored.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the Instance name of the first element in Frame 1, top layer to "clip_mc":
   *
   * ```javascript
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].name = "clip_mc";
   * ```
   *
   * @see See the {@link Element.elementType} example.
   */
  name: string;

  /**
   * Property; An integer or float value between -180 and 180 that specifies the object's clockwise rotation, in degrees.
   * @since Adobe Flash Professional CS3
   * @example
   *
   * The following example sets the currently selected element's rotation to 45 degrees:
   *
   * ```javascript
   * var element = fl.getDocumentDOM().selection[0];
   * fl.trace("Element rotation = " + element.rotation);
   * element.rotation = 45;
   * fl.trace("After setting rotation to 45: rotation = " + element.rotation);
   * ```
   */
  rotation: number;

  /**
   * Property; A float value that specifies the *x* scale value of symbols, drawing objects,
   * and primitive rectangles and ovals. A value of 1 indicates 100 percent scale.
   * @since Adobe Flash Professional CS3
   * @example
   *
   * The following example sets the x scale value of the current selection to 2 (doubles its value):
   *
   * ```javascript
   * var element = fl.getDocumentDOM().selection[0];
   * element.scaleX = 2;
   * ```
   * @see {@link Element.scaleY}
   */
  scaleX: number;

  /**
   * Property; A float value that specifies the *y* scale value of symbols, drawing objects,
   * and primitive rectangles and ovals. A value of 1 indicates 100 percent scale.
   * @since Adobe Flash Professional CS3
   * @example
   *
   * The following example sets the y scale value of the current selection to 2 (doubles its value):
   *
   * ```javascript
   * var element = fl.getDocumentDOM().selection[0];
   * element.scaleY = 2;
   * ```
   * @see {@link Element.scaleX}
   */
  scaleY: number;

  /**
   * Property; A boolean value that specifies whether the element is selected (`true`) or not (`false`).
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example selects the element:
   *
   * ```javascript
   * element.selected = true;
   * ```
   */
  selected: boolean;

  /**
   * Property; A float value between -180 and 180 that specifies the *x* skew value of symbols, drawing objects,
   * and primitive rectangles and ovals.
   * @since Adobe Flash Professional CS3
   * @example
   *
   * The following example sets the *x* skew value of the current selection to 10:
   *
   * ```javascript
   * var element = fl.getDocumentDOM().selection[0];
   * element.skewX = 10;
   * ```
   * @see
   *
   * - {@link Document.setTransformationPoint | Document.setTransformationPoint()}
   * - {@link Element.skewY}
   */
  skewX: number;

  /**
   * Property; A float value between -180 and 180 that specifies the *y* skew value of symbols, drawing objects,
   * and primitive rectangles and ovals.
   * @since Adobe Flash Professional CS3
   * @example
   *
   * The following example sets the y skew value of the current selection to 10:
   *
   * ```javascript
   * var element = fl.getDocumentDOM().selection[0];
   * element.skewY = 10;
   * ```
   * @see
   *
   * - {@link Document.setTransformationPoint | Document.setTransformationPoint()}
   * - {@link Element.skewX}
   */
  skewY: number;

  /**
   * Read-only property; Top side of the element.
   * The value of `Element.top` is relative to the upper left of the Stage for elements that are in a scene
   * and is relative to the symbol's registration point if the element is stored within a symbol.
   * Use {@link Document.setSelectionBounds | Document.setSelectionBounds()} or {@link Document.moveSelectionBy | Document.moveSelectionBy()} to set this property.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example shows how the value of this property changes when an element is moved:
   *
   * ```javascript
   * // Select an element on the Stage and then run this script.
   * var sel = fl.getDocumentDOM().selection[0];
   * fl.trace("Top (before) = " + sel.top);
   * fl.getDocumentDOM().moveSelectionBy({ x: 0, y: 100 });
   * fl.trace("Top (after) = " + sel.top);
   * ```
   *
   * @see See the {@link Element.elementType} example.
   */
  readonly top: number;

  /**
   * Property; A floating-point number that specifies the *x* value of the selected element's transformation point,
   * within the coordinate system of the element's parent.
   * Setting this property to a new value moves the element.
   * By contrast, the {@link Element.setTransformationPoint | Element.setTransformationPoint()} method moves the transformation point but does not move the element.
   * @since Adobe Flash Professional CS3
   * @example
   * @see
   *
   * - {@link Element.getTransformationPoint | Element.getTransformationPoint()}
   * - {@link Element.setTransformationPoint | Element.setTransformationPoint()}
   * - {@link Element.transformY}
   */
  transformX: number;

  /**
   * Property; A floating-point number that specifies the *y* value of the selected element's transformation point,
   * within the coordinate system of the element's parent.
   * Setting this property to a new value moves the element.
   * By contrast, the {@link Element.setTransformationPoint | Element.setTransformationPoint()} method moves the transformation point
   * but does not move the element.
   * @since Adobe Flash Professional CS3
   * @see
   *
   * - {@link Element.getTransformationPoint | Element.getTransformationPoint()}
   * - {@link Element.setTransformationPoint | Element.setTransformationPoint()}
   * - {@link Element.transformX}
   */
  transformY: number;

  /**
   * Property; A float value that specifies the width of the element in pixels.
   * Do not use this property to resize a text field. Instead, select the text field and use {@link Document.setTextRectangle | Document.setTextRectangle()}. Using this property with a text field scales the text.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the width of the specified element to 100:
   *
   * ```javascript
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].width = 100;
   * ```
   */
  width: number;

  /**
   * Property; A float value that specifies the *x* value of the selected element's registration point.
   * @since Adobe Flash Professional CS3
   * @example
   *
   * The following example sets the value of the specified element's registration point to (100, 200):
   *
   * ```javascript
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].x = 100;
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].y = 200;
   * ```
   * @see {@link Element.y}
   */
  x: number;

  /**
   * Property; A float value that specifies the *y* value of the selected element's registration point.
   * @since Adobe Flash Professional CS3
   * @see See {@link Element.x}
   */
  y: number;
}

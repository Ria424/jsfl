/**
 * The CompiledClipInstance object is a subclass of the {@link Instance | Instance object}.
 * It is essentially an instance of a **movie clip** that has been converted to a compiled clip library item.
 * @since Macromedia Flash MX Basic/Professional 2004
 */
interface CompiledClipInstance extends Instance {
  /**
   * Property; A string that is equivalent to the Name field in the Accessibility panel.
   * Screen readers identify objects by reading the name aloud.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example gets and sets the accessibility name of the first selected object:
   *
   * ```javascript
   * // Get the name of the object.
   * var theName = fl.getDocumentDOM().selection[0].accName;
   *
   * // Set the name of the object.
   * fl.getDocumentDOM().selection[0].accName = "Home Button";
   * ```
   */
  accName: string;

  /**
   * Property; A string that represents the ActionScript for this instance;
   * equivalent to {@link SymbolInstance.actionScript}.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @removed Adobe Animate CC 2016
   * @example
   *
   * The following code assigns ActionScript to specified elements:
   *
   * ```javascript
   * // Assign some ActionScript to a specified Button compiled clip instance.
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].actionScript =
   *   'on(click) {trace("button is clicked");}';
   *
   * // Assign some ActionScript to the currently selected Button compiled clip instance.
   * fl.getDocumentDOM().selection[0].actionScript = 'on(click) {trace("button is clicked");}';
   * ```
   */
  actionScript: string;

  /**
   * Property; The matte color when Opaque is selected.
   * This is a string in hexadecimal `#rrggbb` format or an integer containg the value.
   * @since Adobe Animate CC 2016
   * @example
   *
   * The following example illustrates getting the `backgroundColor` property:
   *
   * ```javascript
   * var bitmapInstance = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0];
   * bitmapInstance.backgroundColor = "#000000";
   * ```
   */
  backgroundColor: string;

  /**
   * Property; The blend mode.
   * Valid blend modes are: normal, layer, darken, multiply, lighten, screen, overlay, hardlight, add, subtract, difference, invert, alpha, and erase.
   * @since Adobe Animate CC 2016
   * @example
   *
   * The following example illustrates getting and setting the `blendMode` property:
   *
   * ```javascript
   * //if the blend mode is "add", change it to "subtract"
   * var blend = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].blendMode;
   * fl.trace(blend);
   * if (blend == "add") {
   *   fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].blendMode = "subtract";
   * }
   * ```
   */
  blendMode: BlendMode;

  /**
   * Read-only property; An integer that contains the value set in the Color Effect Property Inspector for brightness when `colorMode == "brightness"`.
   * Specify a percentage between -100 and 100.
   * Returns an error if colorMode is a different setting.
   * @since Adobe Animate CC 2016
   * @example
   *
   * The following example illustrates use of this property:
   *
   * ```javascript
   * var elem = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0];
   * if (elem.colorMode == "brightness") {
   *   fl.trace(elem.brightness);
   * }
   * ```
   */
  readonly brightness: number;

  /**
   * Property; A boolean that indicates whether to cache bitmaps.
   * (Equivalent to Use runtime bitmap caching in the Property Inspector).
   * The default is false.
   * @since Adobe Animate CC 2016
   * @example
   *
   * The following example illustrates use of this property:
   *
   * ```javascript
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].cacheAsBitmap = true;
   * ```
   */
  cacheAsBitmap: boolean;

  /**
   * Property; An integer that reduces or increases the tint and alpha values by a constant amount.
   * This value is added to the current value. This setting is most useful if used in conjunction with `colorAlphaPercent`.
   * Valid values are -255 to 255.
   *
   * This setting is the same as selecting `Color > Advanced` in the Instance Property Inspector and adjusting the controls on the right of the dialog.
   * @since Adobe Animate CC 2016
   * @example
   *
   * The following example illustrates use of this property:
   *
   * ```javascript
   * // change the colorAlphaAmount of the first element in the first frame, top layer
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].colorAlphaAmount = 100;
   * // change the colorAlphaAmount of the selected symbol instance
   * fl.getDocumentDOM().selection[0].colorAlphaAmount = -100;
   * ```
   */
  colorAlphaAmount: number;

  /**
   * Property; An integer that reduces or increases the tint and alpha values by a specified percentage.
   * The current values are multiplied by this percentage.
   *
   * Valid values are -100 to 100.
   *
   * This setting is the same as selecting `Color > Advanced` in the Instance Property Inspector
   * and adjusting the controls on the left of the dialog.
   * @since Adobe Animate CC 2016
   * @example
   *
   * The following example illustrates use of this property:
   *
   * ```javascript
   * // change the colorAlphaPercent of the first element in the first frame, top layer
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].colorAlphaPercent = -100;
   * // change the colorAlphaPercent of the selected symbol instance
   * fl.getDocumentDOM().selection[0].colorAlphaPercent = 90;
   * ```
   */
  colorAlphaPercent: number;

  /**
   * Property; An integer that either reduces or increases the blue tint by a constant amount.
   * This value is added to the current value.
   *
   * Valid values are -255 to 255.
   *
   * This setting is the same as selecting `Color > Advanced` in the Instance Property Inspector.
   * @since Adobe Animate CC 2016
   * @example
   *
   * The following example illustrates use of this property:
   *
   * ```javascript
   * // change the colorBlueAmount of the first element in the first frame, top layer
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].colorBlueAmount = 100;
   * // change the colorBlueAmount of the selected symbol instance
   * fl.getDocumentDOM().selection[0].colorBlueAmount = 255;
   * ```
   */
  colorBlueAmount: number;

  /**
   * Property; An integer that reduces or increases the blue tint values by a specified percentage.
   * The current values are multiplied by this percentage.
   *
   * Valid values are -100 to 100.
   *
   * This setting is the same as selecting `Color > Advanced` in the Instance Property Inspector.
   * @since Adobe Animate CC 2016
   * @example
   *
   * The following example illustrates use of this property:
   *
   * ```javascript
   * // change the colorBluePercent of the first element in the first frame, top layer
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].colorBluePercent = 100;
   * // change the colorBluePercent of the selected symbol instance
   * fl.getDocumentDOM().selection[0].colorBluePercent = 80;
   * ```
   */
  colorBluePercent: number;

  /**
   * Property; An integer that either reduces or increases the green tint by a constant amount.
   * This value is added to the current value.
   *
   * Valid values are -255 to 255.
   *
   * This setting is the same as selecting `Color > Advanced` in the Instance Property Inspector.
   * @since Adobe Animate CC 2016
   * @example
   *
   * The following example illustrates use of this property:
   *
   * ```javascript
   * // change the colorGreenAmount of the first element in the first frame, top layer
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].colorGreenAmount = 100;
   * // change the colorGreenAmount of the selected symbol instance
   * fl.getDocumentDOM().selection[0].colorGreenAmount = 255;
   * ```
   */
  colorGreenAmount: number;

  /**
   * Property; An integer that reduces or increases the green tint values by a specified percentage.
   * The current values are multiplied by this percentage.
   *
   * Valid values are -100 to 100.
   *
   * This setting is the same as selecting `Color > Advanced` in the Instance Property Inspector.
   * @since Adobe Animate CC 2016
   * @example
   *
   * The following example illustrates use of this property:
   *
   * ```javascript
   * //change the colorGreenPercent of the first element in the first frame, top layer
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].colorGreenPercent = 100;
   * //change the colorGreenPercent of the selected symbol instance
   * fl.getDocumentDOM().selection[0].colorGreenPercent = 80;
   * ```
   */
  colorGreenPercent: number;

  /**
   * Property; A string that specifies the color mode, as identified in the Symbol Properties dialog.
   *
   * Valid values are "none", "brightness", "tint", "alpha", and "advanced".
   * @since Adobe Animate CC 2016
   * @example
   *
   * The following example illustrates use of this property:
   *
   * ```javascript
   * //change the colorMode of the first element in the first frame, top layer
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].colorMode = "advanced";
   * ```
   */
  colorMode: "none" | "brightness" | "tint" | "alpha" | "advanced";

  /**
   * Property; An integer that either reduces or increases the red tint by a constant amount.
   * This value is added to the current value.
   *
   * Valid values are -255 to 255.
   *
   * This setting is the same as selecting `Color > Advanced` in the Instance Property Inspector.
   * @since Adobe Animate CC 2016
   * @example
   *
   * The following example illustrates use of this property:
   *
   * ```javascript
   * // change the colorRedAmount of the first element in the first frame, top layer
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].colorRedAmount = 100;
   * // change the colorRedAmount of the selected symbol instance
   * fl.getDocumentDOM().selection[0].colorRedAmount = 255;
   * ```
   */
  colorRedAmount: number;

  /**
   * Property; An integer that reduces or increases the red tint values by a specified percentage.
   * The current values are multiplied by this percentage.
   *
   * Valid values are -100 to 100.
   *
   * This setting is the same as selecting `Color > Advanced` in the Instance Property Inspector.
   * @since Adobe Animate CC 2016
   * @example
   *
   * The following example illustrates use of this property:
   *
   * ```javascript
   * // change the colorRedPercent of the first element in the first frame, top layer
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].colorRedPercent = 100;
   * // change the colorRedPercent of the selected symbol instance
   * fl.getDocumentDOM().selection[0].colorRedPercent = 80;
   * ```
   */
  colorRedPercent: number;

  /**
   * Property; A string that is equivalent to the Description field in the Accessibility panel.
   * The description is read by the screen reader.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example illustrates getting and setting the description property:
   *
   * ```javascript
   * // Get the description of the current selection.
   * var theDescription = fl.getDocumentDOM().selection[0].description;
   * // Set the description of the current selection.
   * fl.getDocumentDOM().selection[0].description = "This is compiled clip number 1";
   * ```
   */
  description: string;

  /**
   * Property; An array of Filter objects.
   * The properties of Filter object in the filters array can be read but cannot be written directly by accessing the filters array.
   * To set the properties of the filter objects in the filters array,
   * first retrieve the array, set the properties, set it back to the filters array.
   * @since Adobe Animate CC 2016
   * @example
   *
   * The following example illustrates use of this property:
   *
   * ```javascript
   * //trace the name of the filter at index 0, if == glow filter, set its blurX to 100
   * var filterName = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].filters[0].name;
   * fl.trace(filterName);
   * var filterArray = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].filters;
   * if (filterName == "glowFilter") {
   *   filterArray[0].blurX = 100;
   * }
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].filters = filterArray;
   * ```
   */
  filters: Filter[];

  /**
   * Property; A boolean value that enables and disables the children of the object to be accessible.
   * This is equivalent to the inverse logic of the `Make Child Objects Accessible` setting in the Accessibility panel.
   *
   * If `forceSimple` is `true`, it is the same as the `Make Child Objects Accessible` option being unchecked.
   *
   * If `forceSimple` is `false`, it is the same as the `Make Child Object Accessible` option being checked.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example illustrates getting and setting the forceSimple property:
   *
   * ```javascript
   * // Query if the children of the object are accessible.
   * var areChildrenAccessible = fl.getDocumentDOM().selection[0].forceSimple;
   * // Allow the children of the object to be accessible.
   * fl.getDocumentDOM().selection[0].forceSimple = false;
   * ```
   */
  forceSimple: boolean;

  /**
   * Property; A string that is equivalent to the Shortcut field in the Accessibility panel.
   * The shortcut is read by the screen reader.
   *
   * This property is **not** available for **dynamic text fields**.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example illustrates getting and setting the shortcut property:
   *
   * ```javascript
   * // Get the shortcut key of the object.
   * var theShortcut = fl.getDocumentDOM().selection[0].shortcut;
   * // Set the shortcut key of the object.
   * fl.getDocumentDOM().selection[0].shortcut = "Ctrl+I";
   * ```
   */
  shortcut: string;

  /**
   * Property; A boolean value that enables or disables the accessibility of the object;
   * equivalent to the inverse logic of `Make Object Accessible` setting in the Accessibility panel.
   *
   * That is, if silent is true, then `Make Object Accessible` is unchecked.
   * If silent is false, then `Make Object Accessible` is checked.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example illustrates getting and setting the silent property:
   *
   * ```javascript
   * // Query if the object is accessible.
   * var isSilent = fl.getDocumentDOM().selection[0].silent;
   * // Set the object to be accessible.
   * fl.getDocumentDOM().selection[0].silent = false;
   * ```
   */
  silent: boolean;

  /**
   * Property; An integer that is equivalent to the Tab Index field in the Accessibility panel.
   * Creates a tab order in which objects are accessed when the user presses the Tab key.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example illustrates getting and setting the `tabIndex` property:
   *
   * ```javascript
   * // Get the tabIndex of the object.
   * var theTabIndex = fl.getDocumentDOM().selection[0].tabIndex;
   * // Set the tabIndex of the object.
   * fl.getDocumentDOM().selection[0].tabIndex = 1;
   * ```
   */
  tabIndex: number;

  /**
   * Read-only property; (`#RRGGBB`) A Color object that,
   * when the `Color Effect Property Inspector` is using style tint (`colorMode == "tint"`),
   * returns the color applied to the tint.
   *
   * Otherwise, using this property results in an error.
   * @since Adobe Animate CC 2016
   * @example
   *
   * The following example illustrates use of this property:
   *
   * ```javascript
   * var elem = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0];
   * if ((elem.colorMode = "tint")) {
   *   fl.trace(elem.tintColor);
   *   fl.trace(elem.tintPercent);
   * }
   * ```
   */
  readonly tintColor: string;

  /**
   * Read-only property; A integer that,
   * when the Color Effect Property Inspector is using style tint (colorMode == "tint"),
   * returns the tint percentage from -100 to 100.
   *
   * Otherwise, using this property results in an error.
   * @since Adobe Animate CC 2016
   * @example
   *
   * The following example illustrates use of this property:
   *
   * ```javascript
   * var elem = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0];
   * if ((elem.colorMode = "tint")) {
   *   fl.trace(elem.tintColor);
   *   fl.trace(elem.tintPercent);
   * }
   * ```
   */
  readonly tintPercent: number;

  /**
   * Property; A boolean that sets the background color:
   *
   * - `true` - Use 32-bit with alpha.
   * - `false` - Use the background color.
   * @since Adobe Animate CC 2016
   * @example
   *
   * The following example illustrates use of this property:
   *
   * ```javascript
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].useBackgroundColor = true;
   * ```
   */
  useBackgroundColor: boolean;

  /**
   * Property; A boolean that sets visibility.
   * Equivalent to the visible checkbox in the Display section of the Property Inspector for symbols.
   * @since Adobe Animate CC 2016
   * @example
   *
   * The following example illustrates use of this property:
   *
   * ```javascript
   * // change visible to false on currently selected symbol instance
   * fl.getDocumentDOM().selection[0].visible = false;
   * ```
   */
  visible: boolean;
}

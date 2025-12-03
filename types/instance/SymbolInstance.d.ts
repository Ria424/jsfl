/**
 * SymbolInstance is a subclass of the {@link Instance | Instance object} and represents a symbol in a frame.
 * @since Macromedia Flash MX Basic/Professional 2004
 */
interface SymbolInstance extends Instance {
  /**
   * Property; A string that is equivalent to the Name field in the Accessibility panel.
   * Screen readers identify objects by reading the name aloud. This property is not available for graphic symbols.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example stores the value for the Accessibility panel name of the object in the theName variable:
   *
   * ```javascript
   * var theName = fl.getDocumentDOM().selection[0].accName;
   * ```
   *
   * The following example sets the value for the Accessibility panel name of the object to Home Button:
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].accName = "Home Button";
   * ```
   */
  accName: string;

  /**
   * Property; Specifies the actions assigned to the symbol.
   * This applies only to movie clip and button instances.
   * For a graphic symbol instance, the value returns undefined.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @removed Adobe Animate CC 2016
   * @example
   *
   * The following example assigns an "onClipEvent" action to the first item
   * in the first frame of the first layer in the timeline:
   *
   * ```javascript
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].actionScript =
   *   "onClipEvent(enterFrame) {trace('movie clip enterFrame');}";
   * ```
   */
  actionScript: string;

  /**
   * Property; Specifies the matte color when 24 bit mode is selected for the instance.
   * This is a string in hexadecimal #rrggbb format or an integer containing the value.
   * @since Adobe Flash Professional CS5.5
   * @example
   *
   * The following example assigns the symbol instance a background color of black:
   *
   * ```javascript
   * var bitmapInstance = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0];
   * bitmapInstance.backgroundColor = "#000000";
   * ```
   */
  backgroundColor: string;

  /**
   * Property; Sets the display type for the symbol. Acceptable values include:
   *
   * - "none"
   * - "cache" - Sets the symbol to be cached as a bitmap by Flash Player at runtime.
   * - "export" - Sets the symbol to be exported as a bitmap when the SWF is compiled.
   *
   * The older {@link SymbolInstance.cacheAsBitmap} property is similar to this property,
   * but it offers fewer choices since it's a boolean.
   * In the future, the cacheAsBitmap property may be deprecated, so users should switch to this new property.
   * The `true`/`false` options in the boolean `cacheAsBitmap` property are the same as the "cache" / "none" values for this new property.
   * @since Adobe Flash Professional CS5.5
   * @example
   *
   * The following example assigns the symbol's bitmapRenderMode to "export":
   *
   * ```javascript
   * var symbol = fl.getDocumentDOM().selection[0];
   * fl.trace(symbol.bitmapRenderMode);
   * symbol.bitmapRenderMode = "export";
   * ```
   */
  bitmapRenderMode: "none" | "cache" | "export";

  /**
   * Property; A string that specifies the blending mode to be applied to a movie clip symbol.
   * Acceptable values are "normal", "layer", "multiply", "screen", "overlay", "hardlight", "lighten", "darken", "difference", "add", "subtract", "invert", "alpha", and "erase".
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example sets the blending mode for the first movie clip symbol in the first frame on the first level to add:
   *
   * ```javascript
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].blendMode = "add";
   * ```
   * @see {@link Document.setBlendMode | Document.setBlendMode()}
   */
  blendMode: BlendMode;

  /**
   * Read-only property; Returns the value set in the color effect Property Inspector for brightness (percentage between - 100 and 100) when `colorMode` == "brightness".
   * Error if `colorMode` is a different setting.
   * @since Adobe Animate CC 2016
   * @example
   *
   * The following illustrates use of the brightness property:
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
   * Property; A string that, for button symbols only,
   * sets the same property as the pop-up menu for Track As Button or Track As Menu Item in the Property inspector.
   * For other types of symbols, this property is ignored. Acceptable values are "button" or "menu".
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the first symbol in the first frame of the first layer in the timeline
   * to a Track As Menu Item, as long as that symbol is a button:
   *
   * ```javascript
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].buttonTracking = "menu";
   * ```
   */
  buttonTracking: "button" | "menu";

  /**
   * Property; Specifies whether run-time bitmap caching is enabled.
   *
   * ***Note:** Starting with Flash Professional CS5.5, users should switch to using the {@link SymbolInstance.bitmapRenderMode} property instead of this property.*
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example enables run-time bitmap caching for the first element in the first frame on the first layer:
   *
   * ```javascript
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].cacheAsBitmap = true;
   * ```
   */
  cacheAsBitmap: boolean;

  /**
   * Property; An integer that is part of the color transformation for the instance, specifying the Advanced Effect Alpha settings.
   * This property is equivalent to using the `Color > Advanced` setting in the Property inspector and adjusting the controls on the right of the dialog box.
   *
   * This value either reduces or increases the tint and alpha values by a constant amount.
   * This value is added to the current value.
   *
   * This property is most useful if used with {@link SymbolInstance.colorAlphaPercent}.
   *
   * Allowable values are from -255 to 255.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example subtracts 100 from the alpha setting of the selected symbol instance:
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].colorAlphaAmount = -100;
   * ```
   */
  colorAlphaAmount: number;

  /**
   * Property; An integer that specifies part of the color transformation for the instance.
   * This property is equivalent to using the `Color > Advanced` setting in the instance Property inspector (the percentage controls on the left of the dialog box).
   *
   * This value changes the tint and alpha values to a specified percentage.
   *
   * Allowable values are from -100 to 100.
   *
   * See also {@link SymbolInstance.colorAlphaAmount}.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the colorAlphaPercent of the selected symbol instance to 80:
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].colorAlphaPercent = 80;
   * ```
   */
  colorAlphaPercent: number;

  /**
   * Property; An integer that is part of the color transformation for the instance.
   * This property is equivalent to using the `Color > Advanced` setting in the instance Property inspector.
   * Allowable values are from -255 to 255.
   * @since Macromedia Flash MX Basic/Professional 2004
   */
  colorBlueAmount: number;

  /**
   * Property; An integer that is part of the color transformation for the instance.
   * This property is equivalent to using the `Color > Advanced` setting in the instance Property inspector (the percentage controls on the left of the dialog box).
   *
   * This value sets the blue values to a specified percentage.
   *
   * Allowable values are from -100 to 100.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the colorBluePercent of the selected symbol instance to 80:
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].colorBluePercent = 80;
   * ```
   */
  colorBluePercent: number;

  /**
   * Property; An integer that is part of the color transformation for the instance.
   * This property is equivalent to using the `Color > Advanced` setting in the instance Property inspector.
   * Allowable values are from -255 to 255.
   * @since Macromedia Flash MX Basic/Professional 2004
   */
  colorGreenAmount: number;

  /**
   * Property; Part of the color transformation for the instance.
   * This property is equivalent to using the `Color > Advanced` setting in the instance Property inspector (the percentage controls on the left of the dialog box).
   * This value sets the green values by a specified percentage.
   *
   * Allowable values are from -100 to 100.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the colorGreenPercent of the selected symbol instance to 70:
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].colorGreenPercent = 70;
   * ```
   */
  colorGreenPercent: number;

  /**
   * Property; Specifies the color mode as identified in the symbol Property inspector Color pop-up menu.
   *
   * Acceptable values are "none", "brightness", "tint", "alpha", and "advanced".
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example changes the `colorMode` property
   * of the first element in the first frame of the first layer in the timeline to alpha:
   *
   * ```javascript
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].colorMode = "alpha";
   * ```
   */
  colorMode: "none" | "brightness" | "tint" | "alpha" | "advanced";

  /**
   * Property; An integer that is part of the color transformation for the instance.
   * This property is equivalent to using the `Color > Advanced` setting in the instance Property inspector.
   *
   * Allowable values are from -255 to 255.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the colorRedAmount of the selected symbol instance to 255:
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].colorRedAmount = 255;
   * ```
   */
  colorRedAmount: number;

  /**
   * Property; part of the color transformation for the instance.
   * This property is equivalent to using the `Color > Advanced` setting in the instance Property inspector (the percentage controls on the left of the dialog box).
   *
   * This value sets the red values to a specified percentage.
   *
   * Allowable values are from -100 to 100.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the colorRedPercent of the selected symbol instance to 10:
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].colorRedPercent = 10;
   * ```
   */
  colorRedPercent: number;

  /**
   * Property; A string that is equivalent to the Description field in the Accessibility panel.
   * The description is read by the screen reader.
   *
   * This property is not available for graphic symbols.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example stores the value for the Accessibility panel description
   * of the object in the theDescription variable:
   *
   * ```javascript
   * var theDescription = fl.getDocumentDOM().selection[0].description;
   * ```
   *
   * The following example sets the value for the Accessibility panel description
   * to "Click the home button to go to home":
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].description = "Click the home button to go to home";
   * ```
   */
  description: string;

  /**
   * Property; An array of {@link Filter | Filter object}s.
   *
   * To modify filter properties, you don't write to this array directly.
   * Instead, retrieve the array, set the individual properties, and then set the array to reflect the new properties.
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example traces the name of the filter at index 0.
   *
   * If it is a Glow filter, its `blurX` property is set to 100 and the new value is written to the filters array.
   *
   * ```javascript
   * var filterName = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].filters[0].name;
   * fl.trace(filterName);
   *
   * var filterArray = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].filters;
   * if (filterName == "glowFilter") {
   *   filterArray[0].blurX = 100;
   * }
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].filters = filterArray;
   * ```
   */
  filters: Filter[];

  /**
   * Property; A zero-based integer that specifies the first frame to appear in the timeline of the graphic.
   *
   * This property applies only to **graphic symbols** and sets the same property as the First field in the Property inspector.
   *
   * For other types of symbols, this property is `undefined`.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example specifies that Frame 10 should be the first frame
   * to appear in the timeline of the specified element:
   *
   * ```javascript
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].firstFrame = 10;
   * ```
   */
  firstFrame: number | undefined;

  /**
   * Property; A boolean value that enables and disables the accessibility of the object's children.
   *
   * This property is equivalent to the inverse logic of the Make Child Objects Accessible setting in the Accessibility panel.
   *
   * For example, if `forceSimple` is true, it is the same as the Make Child Object Accessible option being unchecked.
   * If `forceSimple` is false, it is the same as the Make Child Object Accessible option being checked.
   *
   * This property is available only for **MovieClip objects**.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example checks to see if the children of the object are accessible;
   * a return value of false means the children are accessible:
   *
   * ```javascript
   * var areChildrenAccessible = fl.getDocumentDOM().selection[0].forceSimple;
   * ```
   *
   * The following example allows the children of the object to be accessible:
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].forceSimple = false;
   * ```
   */
  forceSimple: boolean;

  /**
   * Read-only property; Indicates whether the symbol instance contains a 3D matrix (transform).
   * @since Adobe Flash Professional CS6
   * @example
   *
   * The following example returns the value of the `is3D` property
   * for the currently selected symbol instance on the Stage:
   *
   * ```javascript
   * fl.trace("the instance contains a 3D matrix: " + fl.getDocumentDOM().selection[0].is3D);
   * ```
   */
  readonly is3D: boolean;

  /**
   * Property; A string that, for **graphic symbols**,
   * sets the same property as the Loop pop-up menu in the Property inspector.
   *
   * For other types of symbols, this property is undefined.
   *
   * Acceptable values are "loop", "play once", and "single frame" to set the graphic's animation accordingly.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the first symbol in the first frame of the first layer in the timeline to single frame
   * (display one specified frame of the graphic timeline), as long as that symbol is a graphic:
   *
   * ```javascript
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].loop = "single frame";
   * ```
   */
  loop: "loop" | "play once" | "single frame" | undefined;

  /**
   * Property; A string that is equivalent to the shortcut key associated with the symbol.
   * This property is equivalent to the `Shortcut` field in the Accessibility panel.
   * This key is read by the screen readers.
   *
   * This property is **not** available for **graphic symbols**.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example stores the value for the shortcut key of the object in the theShortcut variable:
   *
   * ```javascript
   * var theShortcut = fl.getDocumentDOM().selection[0].shortcut;
   * ```
   *
   * The following example sets the shortcut key of the object to Ctrl+i:
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].shortcut = "Ctrl+i";
   * ```
   */
  shortcut: string;

  /**
   * Property; A boolean value that enables or disables the accessibility of the object.
   * This property is equivalent to the inverse logic of the `Make Object Accessible` setting in the Accessibility panel.
   *
   * For example, if silent is true, it is the same as the `Make Object Accessible` option being unchecked.
   * If silent is false, it is the same as the `Make Object Accessible` option being checked.
   * This property is **not** available for **graphic objects**.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example checks to see if the object is accessible;
   * a return value of false means the object is accessible:
   *
   * ```javascript
   * var isSilent = fl.getDocumentDOM().selection[0].silent;
   * ```
   *
   * The following example sets the object to be accessible:
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].silent = false;
   * ```
   */
  silent: boolean;

  /**
   * Property; A string that specifies the type of symbol.
   * This property is equivalent to the value for Behavior in the `Create New Symbol`
   * and `Convert To Symbol` dialog boxes.
   *
   * Acceptable values are "button", "movie clip", and "graphic".
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the first symbol in the first frame of the first layer in the timeline
   * of the current document to behave as a graphic symbol:
   *
   * ```javascript
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].symbolType = "graphic";
   * ```
   */
  symbolType: "button" | "movie clip" | "graphic";

  /**
   * Property; An integer that is equivalent to the `Tab index` field in the Accessibility panel.
   * Creates a tab order in which objects are accessed when the user presses the Tab key.
   *
   * This property is **not** available for **graphic symbols**.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the `tabIndex` property of the "mySymbol" object
   * to 3 and displays that value in the Output panel:
   *
   * ```javascript
   * var mySymbol = fl.getDocumentDOM().selection[0];
   * mySymbol.tabIndex = 3;
   * fl.trace(mySymbol.tabIndex);
   * ```
   */
  tabIndex: number;

  /**
   * Read-only property; When the Color Effect Property Inspector is using style tint (`colorMode == "tint"`),
   * return the color applied to the tint. Otherwise using this property results in an error.
   * @since Adobe Animate CC 2016
   * @example
   *
   * The following illustrates use of the tintColor property:
   *
   * ```javascript
   * var elem = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0];
   * if (elem.colorMode == "tint") {
   *   fl.trace(elem.tintColor);
   *   fl.trace(elem.tintPercent);
   * }
   * ```
   */
  readonly tintColor: string;

  /**
   * Read-only property; When the Color Effect Property Inspector is using style tint (`colorMode == "tint"`),
   * then return the tint percentage from -100 to 100.
   * Otherwise using this property results in an error.
   * @since Adobe Animate CC 2016
   * @example
   *
   * The following illustrates use of the tintPercent property:
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
   * Property; Indicates whether to use 24 bit mode (true) or 32 bit mode with alpha (false) for the instance.
   * If true, the backgroundColor specified for the instance is used.
   * @since Adobe Flash Professional CS5.5
   * @example
   *
   * The following example sets the `useBackgroundColor` property of an instance to true:
   *
   * ```javascript
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].useBackgroundColor = true;
   * ```
   */
  useBackgroundColor: boolean;

  /**
   * Property; A boolean value that sets the Visible property of an object to on (true) or off (false).
   * @since Adobe Flash Professional CS5.5
   * @example
   *
   * The following example sets the visibility of the first item in the first frame of the first layer to false:
   *
   * ```javascript
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].visible = false;
   * ```
   */
  visible: boolean;
}

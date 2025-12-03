type ItemType = "undefined"
  | "component"
  | "movie clip"
  | "graphic"
  | "button"
  | "folder"
  | "font"
  | "sound"
  | "bitmap"
  | "compiled clip"
  | "screen"
  | "video";

/**
 * The Item object is an abstract base class.
 *
 * Anything in the library derives from Item.
 * @since Macromedia Flash MX Basic/Professional 2004
 * @see {@link Library | Library object}
 */
interface Item {
  /**
   * Method; Adds specified data to a library item.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param name The name of the data.
   * @param type The type of the data.
   * @param value The data to add to the specified library item.
   *
   * The type of data depends on the value of the type parameter.
   * For example, if type is "integer", the value of data must be an integer, and so on.
   * @example
   *
   * The following example adds data named myData with an integer value of 12 to the first item in the library:
   *
   * ```javascript
   * fl.getDocumentDOM().library.items[0].addData("myData", "integer", 12);
   * ```
   */
  addData(name: string, type: PersistentDataTypeName, value: number | number[] | string): void;
  addData(name: string, type: "double" | "integer", value: number): void;
  addData(name: string, type: "byteArray" | "doubleArray" | "integerArray", value: number[]): void;
  addData(name: string, type: "string", value: string): void;

  /**
   * Method; Retrieves the value of the specified data.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param name The name of the data to retrieve.
   * @returns The data specified by the **`name`** parameter.
   * The type of data returned depends on the type of stored data.
   * @example
   *
   * The following example gets the value of the data named "myData"
   * from the first item in the library and stores it in the variable `libData`:
   *
   * ```javascript
   * var libData = fl.getDocumentDOM().library.items[0].getData("myData");
   * ```
   */
  getData(name: string): PersistentDataType;

  /**
   * Method; Indicates whether publishing of the specified persistent data is enabled
   * for the specified format on a specified library item.
   * @todo Is it `_EMBED_SWF_` or `_EXTERN_JSON_`?
   * @since Adobe Animate CC 2016
   * @param name The name of the persistent data item, as specified in {@link Item.addData | Item.addData()}.
   * @param format Specifies the publishing format.
   *
   * ***Note:** `_EMBED_SWF_` is a special built-in publishing format for persistent data.
   * If set, the persistent data is embedded in the SWF file every time a document is published.
   * The persistent data can then be accessed via ActionScript with the `.metaData` property.
   * This feature applies to SWF version 19 (Flash Player 11.6) and above and only for symbol instances onstage.
   * Other custom publishing formats may be specified for custom JSFL scripts
   * if `getPublishPersistentData()` is called with the same format.*
   * @returns Whether publishing of the specified persistent data is enabled
   * for the specified format on this library item.
   * @example
   *
   * The following example illustrates use of this method:
   *
   * ```javascript
   * var doc = fl.getDocumentDOM();
   * // example setting library data
   * if (doc) {
   *   var libItem = doc.library.items[0];
   *   if (libItem) {
   *     libItem.addData("sampleData", "string", "Hello! I am persistent Data.");
   *     libItem.setPublishData("sampleData", "_EXTERN_JSON_", true);
   *     // enable JSON publishing for this document
   *     doc.setPublishDocumentData("_EXTERN_JSON_", true);
   *   }
   * }
   * // example getting instance data
   * if (doc && doc.getPublishDocumentData("_EXTERN_JSON_")) {
   *   var libItem = doc.library.items[0];
   *   if (libItem) {
   *     if (libItem.hasData("sampleData") && libItem.getPublishData("sampleData", "_EXTERN_JSON_")) {
   *       alert("publish persistent data for libElem: sampleData = '" + libItem.getData("sampleData") + "'");
   *     }
   *   }
   * }
   * ```
   * @see {@link Item.setPublishData | Item.setPublishData()}
   */
  getPublishData(name: string, format: string): boolean;

  /**
   * Method; Determines whether the library item has the named data.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param name The name of the data to check for in the library item.
   * @returns `true` if the specified data exists; `false` otherwise.
   * @example
   *
   * The following example shows a message in the Output panel
   * if the first item in the library contains data named "myData":
   *
   * ```javascript
   * if (fl.getDocumentDOM().library.items[0].hasData("myData")) {
   *   fl.trace("Yep, it's there!");
   * }
   * ```
   */
  hasData(name: string): boolean;

  /**
   * Property; Removes persistent data from the library item.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param name The name of the data to remove from the library item.
   * @returns Nothing.
   * @example
   *
   * The following example removes the data named "myData" from the first item in the library:
   *
   * ```javascript
   * fl.getDocumentDOM().library.items[0].removeData("myData");
   * ```
   */
  removeData(name: string): void;

  /**
   * Method; Enables publishing of persistent data for a library item.
   * @todo Is it `_EMBED_SWF_` or `_EXTERN_JSON_`?
   * @since Adobe Animate CC 2016
   * @param name The name of the persistent data item, as specified in {@link Item.addData | Item.addData()}.
   * @param format The publishing format.
   *
   * ***Note:** `_EMBED_SWF_` is a special built-in publishing format for persistent data.
   * If set, the persistent data is embedded in the SWF file every time a document is published.
   * The persistent data can then be accessed via ActionScript with the ``.metaData` property.
   * This feature applies to SWF version 19 (Flash Player 11.6) and above and only for symbol instances onstage.
   * Other custom publishing formats may be specified for custom JSFL scripts
   * if `getPublishPersistentData()` is called with the same format.*
   * @param publish Whether to enable or disable publishing of persistent data for the specified format.
   * @returns None.
   * @example
   *
   * The following example illustrates use of this method:
   *
   * ```javascript
   * var doc = fl.getDocumentDOM();
   *
   * // Example setting library data
   * if (doc) {
   *   var libItem = doc.library.items[0];
   *   if (libItem) {
   *     libItem.addData("sampleData", "string", "Hello! I am persistent Data.");
   *     libItem.setPublishData("sampleData", "_EXTERN_JSON_", true);
   *     // enable JSON publishing for this document
   *     doc.setPublishDocumentData("_EXTERN_JSON_", true);
   *   }
   * }
   *
   * // Example getting instance data
   * if (doc && doc.getPublishDocumentData("_EXTERN_JSON_")) {
   *   var libItem = doc.library.items[0];
   *   if (libItem) {
   *     if (libItem.hasData("sampleData") && libItem.getPublishData("sampleData", "_EXTERN_JSON_")) {
   *       alert("publish persistent data for libElem: sampleData = '" + libItem.getData("sampleData") + "'");
   *     }
   *   }
   * }
   * ```
   * @see {@link Item.getPublishData | Item.getPublishData()}
   */
  setPublishData(name: string, format: string, publish: boolean): void;

  /**
   * Read-only property; The type of element.
   *
   * The value is one of the following:
   * "undefined", "component", "movie clip", "graphic", "button", "folder", "font", "sound", "bitmap", "compiled clip", "screen", or "video".
   * If this property is "video", you can determine the type of video; see {@link VideoItem.videoType}.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example shows the type of the specified library item in the Output panel:
   *
   * ```javascript
   * fl.trace(fl.getDocumentDOM().library.items[0].itemType);
   * ```
   */
  readonly itemType: ItemType;

  /**
   * Property; The ActionScript 3.0 class that will be associated with the symbol.
   *
   * The value specified here appears in the Linkage dialog box in the authoring environment,
   * and in other dialog boxes that include the Linkage dialog box controls, such as the Symbol Properties dialog box.
   * (To specify this value for an ActionScript 2.0 class, use {@link Item.linkageClassName})
   *
   * If the base class is the default for the symbol type
   * (for example, "flash.display.MovieClip" for movie clips, "flash.display.SimpleButton" for buttons, and so on),
   * this property is an empty string. Similarly, to make an item the default base class,
   * set this value to an empty string.
   *
   * When you set this value, none of the checks performed by the Linkage dialog box are performed,
   * and no errors are thrown if Animate is unable to set the base class to the specified value.
   * For example, setting this value in the Linkage dialog box forces checks to make sure that
   * the base class can be found in the FLA file's classpath. It ensures that ActionScript
   * 3.0 is chosen in the Animate tab of the Publish Settings dialog box, and so on.
   * These checks are not performed when you set this property in a script.
   * @since Adobe Flash Professional CS3
   * @example
   *
   * The following lines of code show a few ways to use this property:
   *
   * ```javascript
   * // sets the library item base class to "Sprite"
   * fl.getDocumentDOM().library.items[0].linkageBaseClass = "flash.display.Sprite";
   * // sets the library item base class to the default for that item type
   * fl.getDocumentDOM().library.items[0].linkageBaseClass = "";
   * // finds and displays the library item's base class
   * fl.trace(fl.getDocumentDOM().library.items[0].linkageBaseClass);
   * ```
   * @see {@link Document.docClass}
   */
  linkageBaseClass: string;

  /**
   * Property; The ActionScript 2.0 class that will be associated with the symbol.
   * (To specify this value for an ActionScript 3.0 class, use {@link Item.linkageBaseClass})
   *
   * For this property to be defined,
   * the {@link Item.linkageExportForAS} and/or {@link Item.linkageExportForRS} properties must be set to `true`,
   * and the {@link Item.linkageImportForRS} property must be set to `false`.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example specifies that the ActionScript 2.0 class name
   * associated with the first item in the library is "myClass":
   *
   * ```javascript
   * fl.getDocumentDOM().library.items[0].linkageClassName = "myClass";
   * ```
   */
  linkageClassName: string;

  /**
   * Property; If this property is `true`, the item is exported for ActionScript.
   *
   * You can also set the {@link Item.linkageExportForRS}
   * and {@link Item.linkageExportInFirstFrame} properties to `true`.
   *
   * If you set this property to true, the {@link Item.linkageImportForRS} property must be set to `false`.
   *
   * Also, you must specify an identifier ({@link Item.linkageIdentifier}) and a URL ({@link Item.linkageURL}).
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets this property for the specified library item:
   *
   * ```javascript
   * fl.getDocumentDOM().library.items[0].linkageExportForAS = true;
   * ```
   */
  linkageExportForAS: boolean;

  /**
   * Property; If this property is `true`, the item is exported for run-time sharing.
   * You can also set the {@link Item.linkageExportForAS}
   * and {@link Item.linkageExportInFirstFrame} properties to `true`.
   *
   * If you set this property to `true`, the {@link Item.linkageImportForRS} property must be set to `false`.
   *
   * Also, you must specify an identifier ({@link Item.linkageIdentifier}) and a URL ({@link Item.linkageURL}).
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets this property for the specified library item:
   *
   * ```javascript
   * fl.getDocumentDOM().library.items[0].linkageExportForRS = true;
   * ```
   */
  linkageExportForRS: boolean;

  /**
   * Property; If `true`, the item is exported in the first frame;
   * if `false`, the item is exported in the frame of the first instance.
   *
   * If the item does not appear on the Stage, it isn't exported.
   * This property can be set to true only when {@link Item.linkageExportForAS}
   * and/or {@link Item.linkageExportForRS} are set to `true`.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example specifies that the specified library item is exported in the first frame:
   *
   * ```javascript
   * fl.getDocumentDOM().library.items[0].linkageExportInFirstFrame = true;
   * ```
   */
  linkageExportInFirstFrame: boolean;

  /**
   * Property; The name Animate will use to identify the asset when linking to the destination SWF file.
   *
   * Animate ignores this property if {@link Item.linkageImportForRS}, {@link Item.linkageExportForAS}, and {@link Item.linkageExportForRS} are set to `false`.
   *
   * Conversely, this property must be set when any of those properties are set to `true`.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example specifies that the string "my\_mc" will be used
   * to identify the library item when it is linked to the destination SWF file to which it is being exported:
   *
   * ```javascript
   * fl.getDocumentDOM().library.items[0].linkageIdentifier = "my_mc";
   * ```
   * @see {@link Item.linkageURL}
   */
  linkageIdentifier: string;

  /**
   * Property; If `true`, the item is imported for run-time sharing.
   *
   * If this property is set to `true`,
   * both {@link Item.linkageExportForAS} and {@link Item.linkageExportForRS} must be set to false.
   * Also, you must specify an identifier ({@link Item.linkageIdentifier}) and a URL ({@link Item.linkageURL}).
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets this property to true for the specified library item:
   *
   * ```javascript
   * fl.getDocumentDOM().library.items[0].linkageImportForRS = true;
   * ```
   */
  linkageImportForRS: boolean;

  /**
   * Property; The URL where the SWF file containing the shared asset is located.
   *
   * Animate ignores this property if {@link Item.linkageImportForRS}, {@link Item.linkageExportForAS}, and {@link Item.linkageExportForRS} are set to `false`.
   *
   * Conversely, this property must be set when any of those properties are set to `true`.
   *
   * You can specify a web URL or a filename in platform-dependent format
   * (that is, forward slashes \[/\] or backward slashes \[\\\], depending on the platform).
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example specifies a linkage URL for the specified library item:
   *
   * ```javascript
   * fl.getDocumentDOM().library.items[0].linkageURL = "theShareSWF.swf";
   * ```
   * @see {@link Item.linkageIdentifier}
   */
  linkageURL: string;

  /**
   * Property; The name of the library item, which includes the folder structure.
   *
   * For example, if "Symbol\_1" is inside a folder called "Folder\_1",
   * the name property of "Symbol\_1" is "Folder\_1/Symbol\_1".
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example shows the name of the specified library item in the Output panel:
   *
   * ```javascript
   * fl.trace(fl.getDocumentDOM().library.items[0].name);
   * ```
   */
  name: string;
}

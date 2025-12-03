/**
 * The SymbolItem object is a subclass of the {@link Item | Item object}.
 * @since Macromedia Flash MX Basic/Professional 2004
 */
interface SymbolItem extends Item {
  /**
   * Method; Exports the symbol item to a SWC file.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param outputURI A string, expressed as a file:/// URI, that specifies the SWC file
   * to which the method will export the symbol.
   *
   * The **`outputURI`** must reference a local file.
   * Flash does not create a folder if **`outputURI`** does not exist.
   * @returns Nothing.
   * @example
   *
   * The following example exports an item in the library
   * to the SWC file named "mySymbol.swc" in the tests folder:
   *
   * ```javascript
   * fl.getDocumentDOM.library.selectItem("mySymbol");
   * var currentSelection = fl.getDocumentDOM().library.getSelectedItems();
   * currentSelection[0].exportSWC("file:///Macintosh HD/SWCDirectory/mySymbol.swc");
   * ```
   */
  exportSWC(outputURI: string): void;

  /**
   * Method; Exports the symbol item to a SWF file.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param outputURI A string, expressed as a file:/// URI, that specifies the SWF file
   * to which the method will export the symbol.
   *
   * The **`outputURI`** must reference a local file.
   * Flash does not create a folder if **`outputURI`** doesn't exist.
   * @returns Nothing.
   * @example
   *
   * The following example exports an item in the library to the "my.swf" file in the tests folder:
   *
   * ```javascript
   * fl.getDocumentDOM().library.items[0].exportSWF("file:///c|/tests/my.swf");
   * ```
   */
  exportSWF(outputURI: string): void;

  /**
   * Method; Exports a frame from the selected instance of movie clip, graphic, or button symbol on the Stage
   * to a bitmap in Library.
   * @since Adobe Flash Professional CS6
   * @param frameNumber An integer indicating the frame within the symbol to be exported.
   * @param bitmapName The name of the new bitmap to be added to the Library.
   * @returns Nothing.
   * @example
   *
   * The following example exports the first frame of the currently selected symbol instance
   * to a new bitmap in the library that will be called "mytestBitmap":
   *
   * ```javascript
   * fl.getDocumentDOM().library.item[0].exportToLibrary(1, "mytestBitmap");
   * ```
   */
  exportToLibrary(frameNumber: number, bitmapName: string): void;

  /**
   * Method; Exports a movie clip, graphic, or button symbol to a sequence of PNG files on disk.
   * @since Adobe Flash Professional CS6
   * @param outputURI The URI to export the PNG sequence files to.
   *
   * This URI must reference a local file.
   * For example: `file:///c|/tests/mytest.png`.
   * @param startFrameNum An integer indicating the first frame within the symbol to be exported.
   *
   * If omitted, all frames are exported.
   * @param endFrameNum An integer indicating the last frame within the symbol to be exported.
   *
   * If omitted, all frames are exported.
   * @param [matrix] A matrix to be appended to the exported PNG sequence.
   * @returns Nothing.
   * @example
   *
   * The following example exports the first symbol in the Library new sequence of numbered PNG files starting with
   * the filename "myTest.png":
   *
   * ```javascript
   * fl.getDocumentDOM().library.items[0].exportToPNGSequence("file:///c|/tests/mytest.png");
   * ```
   */
  exportToPNGSequence(outputURI: string, startFrameNum?: number, endFrameNum?: number, matrix?: Matrix): void;

  readonly itemType: "movie clip" | "button" | "graphic";

  /**
   * Read-only property; The modification date of the symbol as a hexadecimal value, representing a date and time.
   *
   * This value is incremented every time a symbol's timeline is edited.
   * @since Adobe Flash Professional CS6
   * @example
   *
   * The following example returns the hexidecimal modification date of the first symbol in the Library:
   *
   * ```javascript
   * var item = fl.getDocumentDOM().library.items[0];
   * fl.trace("name: " + item.name + ", date: " + item.lastModifiedDate); // name: Symbol 1, date: 4f273915
   * ```
   */
  readonly lastModifiedDate: string;

  /**
   * Property; Whether 9-slice scaling is enabled for the item.
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example enables 9-slice scaling for an item in the library:
   *
   * ```javascript
   * fl.getDocumentDOM().library.items[0].scalingGrid = true;
   * ```
   * @see {@link SymbolItem.scalingGridRect}
   */
  scalingGrid: boolean;

  /**
   * Property; The locations of the four 9-slice guides.
   *
   * For information on the format of the rectangle, see {@link Document.addNewRectangle | Document.addNewRectangle()}.
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example specifies the locations of the 9-slice guides:
   *
   * ```javascript
   * fl.getDocumentDOM().library.items[0].scalingGridRect = { left: 338, top: 237, right: 3859, bottom: 713 };
   * ```
   * @see {@link SymbolItem.scalingGrid}
   */
  scalingGridRect: RectangleBounds;

  /**
   * Property; Whether the item is updated when the FLA file is published.
   *
   * The default value is `false`. Used for shared library symbols.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the sourceAutoUpdate property for a library item:
   *
   * ```javascript
   * fl.getDocumentDOM().library.items[0].sourceAutoUpdate = true;
   * ```
   */
  sourceAutoUpdate: boolean;

  /**
   * Property; A string that specifies the path for the source FLA file as a file:/// URI.
   *
   * The path must be an absolute path, not a relative path.
   * This property is used for shared library symbols.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example shows the value of the sourceFilePath property in the Output panel:
   *
   * ```javascript
   * fl.trace(fl.getDocumentDOM().library.items[0].sourceFilePath);
   * ```
   */
  sourceFilePath: string;

  /**
   * Property; The name of the item in the source file library.
   *
   * It is used for shared library symbols.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example shows the value of the `sourceLibraryName` property in the Output panel:
   *
   * ```javascript
   * fl.trace(fl.getDocumentDOM().library.items[0].sourceLibraryName);
   * ```
   */
  sourceLibraryName: string;

  /**
   * Property; Specifies the type of symbol.
   *
   * Acceptable values are "movie clip", "button", and "graphic".
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example shows the current value of the `symbolType` property,
   * changes it to button, and shows it again:
   *
   * ```javascript
   * alert(fl.getDocumentDOM().library.items[0].symbolType);
   * fl.getDocumentDOM().library.items[0].symbolType = "button";
   * alert(fl.getDocumentDOM().library.items[0].symbolType);
   * ```
   */
  symbolType: "movie clip" | "button" | "graphic";

  /**
   * Read-only property; A {@link Timeline | Timeline object}.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example obtains and shows the number of layers that the selected movie clip in the library contains:
   *
   * ```javascript
   * var tl = fl.getDocumentDOM().library.getSelectedItems()[0].timeline;
   * alert(tl.layerCount);
   * ```
   */
  readonly timeline: Timeline;
}

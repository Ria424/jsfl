type Grid = "top left"
  | "top center"
  | "top right"
  | "center left"
  | "center"
  | "center right"
  | "bottom left"
  | "bottom center"
  | "bottom right";

/**
 * The Document object represents the Stage.
 *
 * That is, only FLA files are considered documents.
 *
 * To return the Document object for the current document,
 * use {@link Flash.getDocumentDOM | Flash.getDocumentDOM()}
 * @since Macromedia Flash MX Basic/Professional 2004
 */
interface Document {
  /**
   * Method; Stores specified data with a document.
   *
   * Data is written to the FLA file and is available to JavaScript when the file reopens.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param name The name of the data to add.
   * @param type The type of data to add.
   * @param data The value to add.
   *
   * Valid types depend on the **`type`** parameter.
   * @example
   *
   * The following example adds an integer value of 12 to the current document:
   *
   * ```javascript
   * fl.getDocumentDOM().addDataToDocument("myData", "integer", 12);
   * ```
   *
   * The following example returns the value of the data named "myData" and displays the result in the Output panel:
   *
   * ```javascript
   * fl.trace(fl.getDocumentDOM().getDataFromDocument("myData"));
   * ```
   * @see
   *
   * - {@link Document.getDataFromDocument | Document.getDataFromDocument()}
   * - {@link Document.removeDataFromDocument | Document.removeDataFromDocument()}
   */
  addDataToDocument(name: string, type: PersistentDataTypeName, data: PersistentDataType): void;

  addDataToDocument(name: string, type: "double" | "integer", data: number): void;
  addDataToDocument(name: string, type: "byteArray" | "doubleArray" | "integerArray", data: number[]): void;
  addDataToDocument(name: string, type: "string", data: string): void;

  /**
   * Method; Stores specified data with the selected objects.
   *
   * Data is written to the FLA file and is available to JavaScript when the file reopens.
   *
   * Only symbols and bitmaps support persistent data.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param name The name of the persistent data.
   * @param type The type of data.
   * @param data The value to add.
   *
   * Valid types depend on the **`type`** parameter.
   * @example
   *
   * The following example adds an integer value of 12 to the selected object:
   *
   * ```javascript
   * fl.getDocumentDOM().addDataToSelection("myData", "integer", 12);
   * ```
   * @see {@link Document.removeDataFromSelection | Document.removeDataFromSelection()}
   */
  addDataToSelection(name: string, type: PersistentDataTypeName, data: PersistentDataType): void;

  addDataToSelection(name: string, type: "double" | "integer", data: number): void;
  addDataToSelection(name: string, type: "byteArray" | "doubleArray" | "integerArray", data: number[]): void;
  addDataToSelection(name: string, type: "string", data: string): void;

  /**
   * Method; Applies a filter to the selected objects and places the filter at the end of the Filters list.
   * @since Macromedia Flash Basic/Professional 8
   * @param filterName The filter to be added to the Filters list and enabled for the selected objects.
   *
   * Acceptable values are "adjustColorFilter", "bevelFilter", "blurFilter", "dropShadowFilter",
   * "glowFilter", "gradientBevelFilter", and "gradientGlowFilter".
   * @example
   *
   * The following example applies a glow filter to the selected objects:
   *
   * ```javascript
   * fl.getDocumentDOM().addFilter("glowFilter");
   * ```
   * @see
   *
   * - {@link Document.changeFilterOrder | Document.changeFilterOrder()}
   * - {@link Document.disableFilter | Document.disableFilter()}
   * - {@link Document.enableFilter | Document.enableFilter()}
   * - {@link Document.getFilters | Document.getFilters()}
   * - {@link Document.removeFilter | Document.removeFilter()}
   * - {@link Document.setBlendMode | Document.setBlendMode()}
   * - {@link Document.setFilterProperty | Document.setFilterProperty()}
   */
  addFilter(filterName: FilterName): void;

  /**
   * Method; Adds an item from any open document or library to the specified Document object.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param position The *x* and *y* coordinates of the location at which to add the item.
   *
   * It uses the center of a symbol or the upper left corner of a bitmap or video.
   * @param item The {@link Item} to add and the library from which to add it.
   * @returns `true` if successful, `false` otherwise.
   * @example
   *
   * The following example adds the first item from the library to the first document
   * at the specified location for the selected symbol, bitmap, or video:
   *
   * ```javascript
   * var item = fl.documents[0].library.items[0];
   * fl.documents[0].addItem({ x: 0, y: 0 }, item);
   * ```
   *
   * The following example adds the symbol "myMovieClip" from the current document's library to the current document:
   *
   * ```javascript
   * var itemIndex = fl.getDocumentDOM().library.findItemIndex("myMovieClip");
   * var theItem = fl.getDocumentDOM().library.items[itemIndex];
   * fl.getDocumentDOM().addItem({ x: 0, y: 0 }, theItem);
   * ```
   *
   * The following example adds the symbol "myMovieClip" from the second document in the documents array
   * to the third document in the documents array:
   *
   * ```javascript
   * var itemIndex = fl.documents[1].library.findItemIndex("myMovieClip");
   * var theItem = fl.documents[1].library.items[itemIndex];
   * fl.documents[2].addItem({ x: 0, y: 0 }, theItem);
   * ```
   */
  addItem(position: Point, item: Item): boolean;

  /**
   * Method; Adds a new path between two points.
   *
   * The method uses the document's current stroke attributes and adds the path on the current frame and current layer.
   *
   * This method works in the same way as clicking on the line tool and drawing a line.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param startPoint Where the line starts.
   * @param endPoint Where the line ends.
   * @example
   *
   * The following example adds a line between the specified starting point and ending point:
   *
   * ```javascript
   * fl.getDocumentDOM().addNewLine({ x: 216.7, y: 122.3 }, { x: 366.8, y: 165.8 });
   * ```
   */
  addNewLine(startPoint: Point, endPoint: Point): void;

  /**
   * Method; Adds a new Oval object in the specified bounding rectangle.
   *
   * This method performs the same operation as the Oval tool.
   *
   * The method uses the document's current default stroke and fill attributes and adds the oval on the current frame and layer.
   *
   * If both **`suppressFill`** and **`suppressStroke`** are set to `true`, the method has no effect.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param boundingRectangle The bounds of the oval to be added.
   * @param [suppressFill] A boolean value that, if set to `true`, causes the method to create the shape without a fill.
   *
   * The default value is `false`.
   * @param [suppressStroke] A boolean value that, if set to `true`, causes the method to create the shape without a stroke.
   *
   * The default value is `false`.
   * @example
   *
   * The following example adds a new oval within the specified coordinates;
   * it is 164 pixels in width and 178 pixels in height:
   *
   * ```javascript
   * fl.getDocumentDOM().addNewOval({ left: 72, top: 50, right: 236, bottom: 228 });
   * ```
   *
   * The following example draws the oval without a fill:
   *
   * ```javascript
   * fl.getDocumentDOM().addNewOval({ left: 72, top: 50, right: 236, bottom: 228 }, true);
   * ```
   *
   * The following example draws the oval without a stroke:
   *
   * ```javascript
   * fl.getDocumentDOM().addNewOval({ left: 72, top: 50, right: 236, bottom: 228 }, false, true);
   * ```
   * @see {@link Document.addNewPrimitiveOval | Document.addNewPrimitiveOval()}
   */
  addNewOval(boundingRectangle: RectangleBounds, suppressFill?: boolean, suppressStroke?: boolean): void;

  /**
   * Method; Adds a new oval primitive fitting into the specified bounds.
   *
   * This method performs the same operation as the Oval Primitive tool.
   *
   * The oval primitive uses the document's current default stroke and fill attributes and is added on the current frame and layer.
   * If both **`suppressFill`** and **`suppressStroke`** are set to `true`, the method has no effect.
   * @since Adobe Flash Professional CS4
   * @param boundingRectangle The bounds within which the new oval primitive is added.
   * @param [suppressFill] A boolean value that, if set to `true`, causes the method to create the oval without a fill.
   *
   * The default value is `false`.
   * @param [suppressStroke] A boolean value that, if set to `true`, causes the method to create the oval without a stroke.
   *
   * The default value is `false`.
   * @example
   *
   * The following example adds oval primitives within the specified coordinates, with and without fill and stroke:
   *
   * ```javascript
   * // Add an oval primitive with fill and stroke
   * fl.getDocumentDOM().addNewPrimitiveOval({ left: 0, top: 0, right: 100, bottom: 100 });
   * // Add an oval primitive without a fill
   * fl.getDocumentDOM().addNewPrimitiveOval({ left: 100, top: 100, right: 200, bottom: 200 }, true);
   * // Add an oval primitive without a stroke
   * fl.getDocumentDOM().addNewPrimitiveOval({ left: 200, top: 200, right: 300, bottom: 300 }, false, true);
   * ```
   * @see {@link Document.addNewOval | Document.addNewOval()}
   */
  addNewPrimitiveOval(boundingRectangle: RectangleBounds, suppressFill?: boolean, suppressStroke?: boolean): void;

  /**
   * Method; Adds a new rectangle primitive fitting into the specified bounds.
   *
   * This method performs the same operation as the Rectangle Primitive tool.
   *
   * The rectangle primitive uses the document's current default stroke and fill attributes and is added on the current frame and layer.
   *
   * If both **`suppressFill`** and **`suppressStroke`** are set to `true`, the method has no effect.
   * @since Adobe Flash Professional CS4
   * @param rect The bounds within which the new rectangle primitive is added.
   * @param roundness An integer between 0 and 999 that represents the number of points used to specify how much the corners should be rounded.
   * @param [suppressFill] A boolean value that, if set to `true`, causes the method to create the rectangle without a fill.
   *
   * The default value is `false`.
   * @param [suppressStroke] A boolean value that, if set to `true`, causes the method to create the rectangle without a stroke.
   *
   * The default value is `false`.
   * @example
   *
   * The following example adds rectangle primitives within the specified coordinates,
   * with and without fill and stroke, and with different amounts of roundness:
   *
   * ```javascript
   * // Add a rectangle primitive with fill and stroke
   * fl.getDocumentDOM().addNewPrimitiveRectangle({ left: 0, top: 0, right: 100, bottom: 100 }, 0);
   * // Add a rectangle primitive without a fill
   * fl.getDocumentDOM().addNewPrimitiveRectangle({ left: 100, top: 100, right: 200, bottom: 200 }, 20, true);
   * // Add a rectangle primitive without a stroke
   * fl.getDocumentDOM().addNewPrimitiveRectangle({ left: 200, top: 200, right: 300, bottom: 300 }, 50, false, true);
   * ```
   * @see {@link Document.addNewRectangle | Document.addNewRectangle()}
   */
  addNewPrimitiveRectangle(rect: RectangleBounds, roundness: number, suppressFill?: boolean, suppressStroke?: boolean): void;

  /**
   * Method; Adds a new publish profile and makes it the current one.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param [profileName] The unique name of the new profile. If you do not specify a name, a default name is provided.
   * @returns An integer that is the index of the new profile in the profiles list. Returns -1 if a new profile cannot be created.
   * @example
   *
   * The following example adds a new publish profile with a default name and then displays the name of the profile in the Output panel:
   *
   * ```javascript
   * fl.getDocumentDOM().addNewPublishProfile();
   * fl.outputPanel.trace(fl.getDocumentDOM().currentPublishProfile);
   * ```
   *
   * The following example adds a new publish profile with the name "my profile":
   *
   * ```javascript
   * fl.getDocumentDOM().addNewPublishProfile("my profile");
   * ```
   * @see {@link Document.deletePublishProfile | Document.deletePublishProfile()}
   */
  addNewPublishProfile(profileName?: string): number;

  /**
   * Method; Adds a new rectangle or rounded rectangle, fitting it into the specified bounds.
   *
   * This method performs the same operation as the Rectangle tool.
   *
   * The method uses the document's current default stroke and fill attributes and adds the rectangle on the current frame and layer.
   *
   * If both *suppressFill* and *suppressStroke* are set to `true`, the method has no effect.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param boundingRectangle The bounds within which the new rectangle is added.
   *
   * The rectangle bounds do not all correspond to the values shown in the Property inspector.
   * The left and top values correspond to the X and Y values in the Property inspector, respectively.
   *
   * However, the right and bottom values don't correspond to the W and H values in the Property inspector.
   * For example, consider a rectangle with the following bounds:
   * {left: 10, top: 10, right: 50, bottom: 100}
   * This rectangle would display the following values in the Property inspector:
   * X = 10, Y = 10, W = 40, H = 90
   * @param roundness An integer value from 0 to 999 that specifies the roundness to use for the corners.
   *
   * The value is specified as number of points. The greater the value, the greater the roundness.
   * @param [suppressFill] A boolean value that, if set to `true`, causes the method to create the shape without a fill.
   *
   * The default value is `false`.
   * @param [suppressStroke] A boolean value that, if set to `true`, causes the method to create the rectangle without a stroke.
   *
   * The default value is `false`.
   * @example
   *
   * The following example adds a new rectangle with no rounding on the corners within the specified coordinates;
   * it is 100 pixels in width and in height:
   *
   * ```javascript
   * fl.getDocumentDOM().addNewRectangle({ left: 0, top: 0, right: 100, bottom: 100 }, 0);
   * ```
   *
   * The following example adds a new rectangle with no rounding on the corners and without a fill;
   * it is 100 pixels in width and 200 in height:
   *
   * ```javascript
   * fl.getDocumentDOM().addNewRectangle({ left: 10, top: 10, right: 110, bottom: 210 }, 0, true);
   * ```
   *
   * The following example adds a new rectangle with no rounding on the corners and without a stroke;
   * it is 200 pixels in width and 100 in height:
   *
   * ```javascript
   * fl.getDocumentDOM().addNewRectangle({ left: 20, top: 20, right: 220, bottom: 120 }, 0, false, true);
   * ```
   * @see {@link Document.addNewPrimitiveRectangle | Document.addNewPrimitiveRectangle()}
   */
  addNewRectangle(boundingRectangle: RectangleBounds, roundness: number, suppressFill?: boolean, suppressStroke?: boolean): void;

  /**
   * Method; Adds a new scene ({@link Timeline | Timeline object}) as the next scene
   * after the currently selected scene and makes the new scene the currently selected scene.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param [name] The name of the scene.
   *
   * If you do not specify a name, a new scene name is generated.
   * @returns `true` if the scene is added successfully; `false` otherwise.
   * @throws If the specified scene name already exists, the scene is not added and the method returns an error.
   * @example
   *
   * The following example adds a new scene named myScene after the current scene in the current document.
   * The variable success will be `true` when the new scene is created; `false` otherwise.
   *
   * ```javascript
   * var success = fl.getDocumentDOM().addNewScene("myScene");
   * ```
   *
   * The following example adds a new scene using the default naming convention.
   * If only one scene exists, the newly created scene is named "Scene 2".
   *
   * ```javascript
   * fl.getDocumentDOM().addNewScene();
   * ```
   */
  addNewScene(name?: string): boolean;

  /**
   * Method; Inserts a new text field and optionally places text into the field.
   *
   * If you omit the **`text`** parameter, you can call
   * {@link Document.setTextString | Document.setTextString()} to populate the text field.
   * @since Macromedia Flash MX Basic/Professional 2004. Optional **`text`** parameter added in Flash Professional CS3.
   * @param boundingRectangle The size and location of the text field.
   * @param [text] The text to place in the field.
   *
   * If omitted, the selection in the Tools panel switches to the Text tool.
   * Therefore, if you don't want the selected tool to change, pass a value for **`text`**.
   * @example
   *
   * The following example creates a new text field in the upper left corner of the Stage and sets the text string to "Hello World":
   *
   * ```javascript
   * fl.getDocumentDOM().addNewText({ left: 0, top: 0, right: 100, bottom: 100 }, "Hello World!");
   * fl.getDocumentDOM().setTextString("Hello World!");
   * ```
   * @see {@link Document.setTextString | Document.setTextString()}
   */
  addNewText(boundingRectangle: RectangleBounds, text?: string): void;

  /**
   * Method; Adds new tagged swatch with the given swatch object at the given index.
   * @since Adobe Animate 2020
   * @param swatch A {@link Swatch | Swatch object} to add.
   * @param [index] An integer that specifies the index where to add swatch.
   *
   * If omitted, adds swatch to the end of the tagged swatches.
   * @param [palette] An integer that specifies the index of the tagged swatch palette.
   *
   * Default value is 0.
   * @example
   *
   * The following example adds new tagged swatch, `swatch1` to end of the tagged swatches.
   *
   * ```javascript
   * var document = fl.getDocumentDOM();
   * var swatch1 = new Object();
   * var fill = document.getCustomFill();
   * fill.color = "#FF00FF";
   * fill.style = "solid";
   * swatch1.fill = fill;
   * swatch1.name = "solid_swatch";
   * document.addTaggedSwatch(swatch1);
   * ```
   * @see {@link Document.addTaggedSwatchWithColor | Document.addTaggedSwatchWithColor()}
   */
  addTaggedSwatch(swatch: Swatch, index?: number, palette?: number): void;

  /**
   * Method; Adds new tagged swatch with the given color string and name at the given index.
   *
   * **`name`** parameter is required for **`index`** parameter.
   * @since Adobe Animate 2020
   * @param color The color for which swatch is created like "#CCFF34".
   * @param [name] It is an integer that specifies the name of the tagged swatch.
   *
   * If omitted, adds a unique name by itself
   * @param [index] It is an integer that specifies the index where to add swatch.
   *
   * If omitted, adds swatch to the end of the tagged swatches.
   * @param [palette] It is an integer that specifies the index of the tagged swatch palette.
   *
   * Default value is 0.
   * @example
   *
   * The following example adds new tagged swatch for the color "#FF00FF".
   *
   * ```javascript
   * fl.getDocumentDOM().addTaggedSwatchWithColor("#FF00FF");
   * ```
   * @see {@link Document.addTaggedSwatch | Document.addTaggedSwatch()}
   */
  addTaggedSwatchWithColor(color: string, name?: string, index?: number, palette?: number): void;

  /**
   * Method; Aligns the selection.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param alignmode How to align the selection.
   * @param [useDocumentBounds] A boolean value that, if set to `true`, causes the method to align to the bounds of the document.
   * Otherwise, the method uses the bounds of the selected objects.
   *
   * The default is `false`.
   * @example
   *
   * The following example aligns objects to the left and to the Stage.
   * This is equivalent to turning on the To Stage setting in the Align panel and clicking the Align to Left button:
   *
   * ```javascript
   * fl.getDocumentDOM().align("left", true);
   * ```
   * @see
   *
   * - {@link Document.distribute | Document.distribute()}
   * - {@link Document.getAlignToDocument | Document.getAlignToDocument()}
   * - {@link Document.setAlignToDocument | Document.setAlignToDocument()}
   */
  align(alignmode: "left" | "right" | "top" | "bottom" | "vertical center" | "horizontal center", useDocumentBounds?: boolean): void;

  /**
   * @since Macromedia Flash MX Basic/Professional 2004
   * @removed Adobe Animate CC 2016
   * @returns `true` if {@link Document.screenOutline} can be used safely; `false` otherwise.
   * @example
   *
   * The following example determines whether screens methods can be used in the current document:
   *
   * ```javascript
   * if (fl.getDocumentDOM().allowScreens()) {
   *   fl.trace("screen outline is available.");
   * } else {
   *   fl.trace("whoops, no screens.");
   * }
   * ```
   * @see {@link Document.screenOutline}
   */
  allowScreens(): boolean;

  /**
   * Method; Arranges the selection on the Stage.
   *
   * This method applies only to **non-shape objects**.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param arrangeMode The direction in which to move the selection.
   *
   * It provides the same capabilities as these options provide on the `Modify > Arrange` menu.
   * @example
   *
   * The following example moves the current selection to the front:
   *
   * ```javascript
   * fl.getDocumentDOM().arrange("front");
   * ```
   */
  arrange(arrangeMode: "back" | "backward" | "forward" | "front"): void;

  /**
   * Method; Performs a break-apart operation on the current selection.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example breaks apart the current selection:
   *
   * ```javascript
   * fl.getDocumentDOM().breakApart();
   * ```
   */
  breakApart(): void;

  /**
   * Method; Indicates whether the Edit Symbols menu and functionality are enabled.
   *
   * This is not related to whether the selection can be edited.
   *
   * This method should **not** be used to test whether {@link Document.enterEditMode | Document.enterEditMode()} is allowed.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @returns `true` if the Edit Symbols menu and functionality are available for use; `false` otherwise.
   * @example
   *
   * The following example displays in the Output panel the state of the Edit Symbols menu and functionality:
   *
   * ```javascript
   * fl.trace("fl.getDocumentDOM().canEditSymbol() returns: " + fl.getDocumentDOM().canEditSymbol());
   * ```
   */
  canEditSymbol(): boolean;

  /**
   * Method; Determines whether you can use the {@link Document.revert | Document.revert()}
   * or {@link Flash.revertDocument | Flash.revertDocument()} method successfully.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @returns `true` if you can use the {@link Document.revert | Document.revert()}
   * or {@link Flash.revertDocument | Flash.revertDocument()} methods successfully; `false` otherwise.
   * @example
   *
   * The following example checks whether the current document can revert to the previously saved version.
   * If so, `fl.getDocumentDOM().revert()` restores the previously saved version.
   *
   * ```javascript
   * if (fl.getDocumentDOM().canRevert()) {
   *   fl.getDocumentDOM().revert();
   * }
   * ```
   */
  canRevert(): boolean;

  /**
   * Method; Determines whether you can use the {@link Document.testMovie | Document.testMovie()} method successfully.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @returns `true` if you can use the {@link Document.testMovie | Document.testMovie()} method successfully: `false` otherwise.
   * @example
   *
   * The following example tests whether `fl.getDocumentDOM().testMovie()` can be used. If so, it calls the method.
   *
   * ```javascript
   * if (fl.getDocumentDOM().canTestMovie()) {
   *   fl.getDocumentDOM().testMovie();
   * }
   * ```
   * @see
   *
   * - {@link Document.canTestScene | Document.canTestScene()}
   * - {@link Document.testScene | Document.testScene()}
   */
  canTestMovie(): boolean;

  /**
   * Method; Determines whether you can use the {@link Document.testScene | Document.testScene()} method successfully.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @returns `true` if you can use the {@link Document.testScene | Document.testScene()} method successfully; `false` otherwise.
   * @example
   *
   * The following example first tests whether `fl.getDocumentDOM().testScene()` can be used successfully.
   * If so, it calls the method.
   *
   * ```javascript
   * if (fl.getDocumentDOM().canTestScene()) {
   *   fl.getDocumentDOM().testScene();
   * }
   * ```
   * @see
   *
   * - {@link Document.canTestMovie | Document.canTestMovie()}
   * - {@link Document.testMovie | Document.testMovie()}
   */
  canTestScene(): boolean;

  /**
   * Method; Changes the index of the filter in the Filters list.
   *
   * Any filters above or below **`newIndex`** are shifted up or down accordingly.
   * @since Macromedia Flash Basic/Professional 8
   * @param oldIndex An integer that represents the current zero-based index position of the filter
   * you want to reposition in the Filters list.
   * @param newIndex An integer that represents the new index position of the filter in the list.
   * @example
   *
   * If you issue the command `fl.getDocumentDOM().changeFilterOrder(3, 0)`, the filters are rearranged as follows:
   *
   * **Before**: `blurFilter`, `dropShadowFilter`, `glowFilter`, `gradientBevelFilter`
   *
   * **After**: `gradientBevelFilter`, `blurFilter`, `dropShadowFilter`, `glowFilter`
   *
   * If you then issue the command `fl.getDocumentDOM().changeFilterOrder(0, 2)`, the filters are rearranged as follows:
   *
   * **Before**: `gradientBevelFilter`, `blurFilter`, `dropShadowFilter`, `glowFilter`
   * **After**: `blurFilter`, `dropShadowFilter`, `gradientBevelFilter`, `glowFilter`
   *
   * The following example moves the filter that is currently in the second position in the Filters list to the first position:
   *
   * ```javascript
   * fl.getDocumentDOM().changeFilterOrder(1, 0);
   * ```
   * @see
   *
   * - {@link Document.addFilter | Document.addFilter()}
   * - {@link Document.disableFilter | Document.disableFilter()}
   * - {@link Document.enableFilter | Document.enableFilter()}
   * - {@link Document.getFilters | Document.getFilters()}
   * - {@link Document.removeFilter | Document.removeFilter()}
   * - {@link Filter | Filter object}
   */
  changeFilterOrder(oldIndex: number, newIndex: number): void;

  /**
   * Method; Copies the current selection from the document to the Clipboard.
   *
   * To copy a string to the Clipboard, use {@link Flash.clipCopyString | Flash.clipCopyString()}.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example copies the current selection from the document to the Clipboard:
   *
   * ```javascript
   * fl.getDocumentDOM().clipCopy();
   * ```
   * @see
   *
   * - {@link Document.clipCut | Document.clipCut()}
   * - {@link Document.clipPaste | Document.clipPaste()}
   */
  clipCopy(): void;

  /**
   * Method; Cuts the current selection from the document and writes it to the Clipboard.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example cuts the current selection from the document and writes it to the Clipboard:
   *
   * ```javascript
   * fl.getDocumentDOM().clipCut();
   * ```
   * @see
   *
   * - {@link Document.clipCopy | Document.clipCopy()}
   * - {@link Document.clipPaste | Document.clipPaste()}
   * - {@link Flash.clipCopyString | Flash.clipCopyString()}
   */
  clipCut(): void;

  /**
   * Method; Pastes the contents of the Clipboard into the document.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param [inPlace] A boolean value that, when set to `true`, causes the method to perform a paste-in-place operation.
   *
   * The default value is `false`, which causes the method to perform a paste operation to the center of the document.
   * @example
   *
   * The following example pastes the Clipboard contents to the center of the document:
   *
   * ```javascript
   * fl.getDocumentDOM().clipPaste();
   * ```
   *
   * The following example pastes the Clipboard contents in place in the current document:
   *
   * ```javascript
   * fl.getDocumentDOM().clipPaste(true);
   * ```
   * @see
   *
   * - {@link Document.clipCopy | Document.clipCopy()}
   * - {@link Document.clipCut | Document.clipCut()}
   * - {@link Flash.clipCopyString | Flash.clipCopyString()}.
   */
  clipPaste(inPlace?: boolean): void;

  /**
   * Method; Closes the specified document.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param [promptToSaveChanges] A boolean value that, when set to `true`, causes the method to prompt the user with a dialog box
   * if there are unsaved changes in the document.
   *
   * If **`promptToSaveChanges`** is set to `false`, the user is not prompted to save any changed documents.
   *
   * The default value is `true`.
   * @example
   *
   * The following example closes the current document and prompts the user with a dialog box to save changes:
   *
   * ```javascript
   * fl.getDocumentDOM().close();
   * ```
   *
   * The following example closes the current document without saving changes:
   *
   * ```javascript
   * fl.getDocumentDOM().close(false);
   * ```
   */
  close(promptToSaveChanges?: boolean): void;

  /**
   * Method; Converts lines to fills on the selected objects.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example converts the current selected lines to fills:
   *
   * ```javascript
   * fl.getDocumentDOM().convertLinesToFills();
   * ```
   */
  convertLinesToFills(): void;

  /**
   * Method; Converts selected objects in the current frame to a bitmap and inserts the bitmap into the library.
   * @since Adobe Animate CC 2016
   * @example
   *
   * The following example illustrates use of this method:
   *
   * ```javascript
   * fl.getDocumentDOM().convertSelectionToBitmap();
   * ```
   */
  convertSelectionToBitmap(): void;

  /**
   * Method; Converts a document to expected document type.
   * @since Adobe Animate 2020
   * @param fileURI A string, expressed as a file:/// URI, that specifies the path of the generated file after conversion.
   * @param docType The required document type to be generated.
   *
   * To find document type, you can use `Document.type` property.
   * For example, `fl.trace(fl.getDocumentDOM().type)`.
   * @param [fileClose] Whether to close the generated file after conversion.
   *
   * Specifying `true` closes the generated file. The default is `false`.
   * @returns `true` if document converted to expected document type successfully. `false` otherwise.
   * @example
   *
   * The following example browse for a document and convert it to other document type.
   *
   * ```javascript
   * var fileURI = fl.browseForFileURL("open", "open");
   * var doc = fl.openDocument(fileURI);
   * var sr = "";
   * sr += fileURI;
   * fl.trace("fileuri: " + fileURI);
   * var str = sr.substring(0, sr.lastIndexOf("/"));
   * doc.convertToDoc("fileURI", "htmlcanvas", true);
   * ```
   */
  convertToDoc(fileURI: string, docType: string, fileClose?: boolean): boolean;

  /**
   * Method; Converts the selected Stage item(s) to a new symbol.
   *
   * For information on defining linkage and shared asset properties for a symbol, see {@link Item | Item object}.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param type The type of symbol to create.
   *
   * Acceptable values are "movie clip", "button", and "graphic".
   * @param name The name for the new symbol, which must be unique.
   *
   * You can submit an empty string to have this method create a unique symbol name for you.
   * @param registrationPoint The point that represents the 0, 0 location for the symbol.
   *
   * Acceptable values are: "top left", "top center", "top right", "center left", "center", "center right",
   * "bottom left", "bottom center", and "bottom right".
   * @returns An object for the newly created symbol, or `null` if it cannot create the symbol.
   * @example
   *
   * The following examples create a movie clip symbol with a specified name, a button symbol with a specified name,
   * and a movie clip symbol with a default name:
   *
   * ```javascript
   * var newMc = fl.getDocumentDOM().convertToSymbol("movie clip", "mcSymbolName", "top left");
   * var newButton = fl.getDocumentDOM().convertToSymbol("button", "btnSymbolName", "bottom right");
   * var newClipWithDefaultName = fl.getDocumentDOM().convertToSymbol("movie clip", "", "top left");
   * ```
   */
  convertToSymbol(type: "button" | "graphic" | "movie clip", name: string, registrationPoint: Grid): SymbolItem | null;

  /**
   * Method; Uses the top selected drawing object to crop all selected drawing objects underneath it.
   *
   * If no objects are selected, calling this method results in an error and the script breaks at that point.
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example crops the currently selected objects:
   *
   * ```javascript
   * fl.getDocumentDOM().crop();
   * ```
   * @see
   *
   * - {@link Document.deleteEnvelope | Document.deleteEnvelope()}
   * - {@link Document.intersect | Document.intersect()}
   * - {@link Document.punch | Document.punch()}
   * - {@link Document.union | Document.union()}
   * - {@link Shape.isDrawingObject}
   */
  crop(): void;

  /**
   * Method; Invokes the Debug Movie command on the document.
   * @since Adobe Flash Professional CS5
   * @param [abortIfErrorsExist] If set to `true`, the debug session will not start and the .swf window will not open
   * if there are compiler errors.
   *
   * Compiler warnings will not abort the command.
   *
   * The default value is `false`.
   * @example
   *
   * The following example opens the current document in debug mode, but aborts the operation if compiler errors exist:
   *
   * ```javascript
   * fl.getDocumentDOM().debugMovie(1);
   * ```
   */
  debugMovie(abortIfErrorsExist?: boolean): void;

  /**
   * Method; Deletes the envelope (bounding box that contains one or more objects) from the selected objects.
   *
   * If no objects are selected, calling this method results in an error and the script breaks at that point.
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example deletes the envelope from the selected objects:
   *
   * ```javascript
   * fl.getDocumentDOM().deleteEnvelope();
   * ```
   * @see
   *
   * - {@link Document.crop | Document.crop()}
   * - {@link Document.intersect | Document.intersect()}
   * - {@link Document.punch | Document.punch()}
   * - {@link Document.union | Document.union()}
   * - {@link Shape.isDrawingObject}
   */
  deleteEnvelope(): void;

  /**
   * Method; Deletes the currently active profile, if there is more than one.
   *
   * There must be at least one profile left.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @returns An integer that is the index of the new current profile.
   *
   * If a new profile is not available, the method leaves the current profile unchanged and returns its index.
   * @example
   *
   * The following example deletes the currently active profile, if there is more than one,
   * and displays the index of the new currently active profile:
   *
   * ```javascript
   * alert(fl.getDocumentDOM().deletePublishProfile());
   * ```
   * @see {@link Document.addNewPublishProfile | Document.addNewPublishProfile()}
   */
  deletePublishProfile(): number;

  /**
   * Method; Deletes the current scene ({@link Timeline | Timeline object}) and,
   * if the deleted scene was not the last one, sets the next scene as the current Timeline object.
   *
   * If the deleted scene was the last one, it sets the first object as the current Timeline object.
   *
   * If only one Timeline object (scene) exists, it returns the value `false`.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @returns `true` if the scene is successfully deleted; `false` otherwise.
   * @example
   *
   * Assuming there are three scenes (Scene0, Scene1, and Scene2) in the current document,
   * the following example makes Scene2 the current scene and then deletes it:
   *
   * ```javascript
   * fl.getDocumentDOM().editScene(2);
   * var success = fl.getDocumentDOM().deleteScene();
   * ```
   */
  deleteScene(): boolean;

  /**
   * Method; Deletes the current selection on the Stage.
   *
   * Displays an error message if there is no selection.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example deletes the current selection in the document:
   *
   * ```javascript
   * fl.getDocumentDOM().deleteSelection();
   * ```
   */
  deleteSelection(): void;

  /**
   * Method; Delete tagged swatch with given index.
   * @since Adobe Animate 2020
   * @param index The index of the tagged swatch to delete.
   * @param [palette] An integer that speifies the index of the tagged swatch palette.
   *
   * Default value is 0.
   * @example
   *
   * The following example delete the tagged swatch at index 0.
   *
   * ```javascript
   * fl.getDocumentDOM().deleteTaggedSwatchAtIndex(0, 4);
   * ```
   * @see {@link Document.deleteTaggedSwatchByName | Document.deleteTaggedSwatchByName()}
   */
  deleteTaggedSwatchAtIndex(index: number, palette?: number): void;

  /**
   * Method; Delete tagged swatch with given name.
   * @since Adobe Animate 2020
   * @param name The name of the tagged swatch to delete.
   * @example
   *
   * The following example delete the tagged swatch of name "swatch1"
   *
   * ```javascript
   * fl.getDocumentDOM().deleteTaggedSwatchByName("swatch1");
   * ```
   * @see {@link Document.deleteTaggedSwatchAtIndex | Document.deleteTaggedSwatchAtIndex()}
   */
  deleteTaggedSwatchByName(name: string): void;

  /**
   * Method; Disables all filters on the selected objects.
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example disables all filters on the selected objects:
   *
   * ```javascript
   * fl.getDocumentDOM().disableAllFilters();
   * ```
   * @see
   *
   * - {@link Document.addFilter | Document.addFilter()}
   * - {@link Document.changeFilterOrder | Document.changeFilterOrder()}
   * - {@link Document.disableFilter | Document.disableFilter()}
   * - {@link Document.disableOtherFilters | Document.disableOtherFilters()}
   * - {@link Document.enableAllFilters | Document.enableAllFilters()}
   * - {@link Document.getFilters | Document.getFilters()}
   * - {@link Document.removeAllFilters | Document.removeAllFilters()}
   * - {@link Filter | Filter object}
   */
  disableAllFilters(): void;

  /**
   * Method; Disables the specified filter in the Filters list.
   * @since Macromedia Flash Basic/Professional 8
   * @param filterIndex An integer representing the zero-based index of the filter in the Filters list.
   * @example
   *
   * The following example disables the first and third filters (index values of 0 and 2)
   * in the Filters list from the selected objects:
   *
   * ```javascript
   * fl.getDocumentDOM().disableFilter(0);
   * fl.getDocumentDOM().disableFilter(2);
   * ```
   * @see
   *
   * - {@link Document.addFilter | Document.addFilter()}
   * - {@link Document.changeFilterOrder | Document.changeFilterOrder()}
   * - {@link Document.disableAllFilters | Document.disableAllFilters()}
   * - {@link Document.disableOtherFilters | Document.disableOtherFilters()}
   * - {@link Document.enableFilter | Document.enableFilter()}
   * - {@link Document.getFilters | Document.getFilters()}
   * - {@link Document.removeFilter | Document.removeFilter()}
   * - {@link Filter | Filter object}
   */
  disableFilter(filterIndex: number): void;

  /**
   * Method; Disables all filters except the one at the specified position in the Filters list.
   * @since Macromedia Flash Basic/Professional 8
   * @param enabledFilterIndex An integer representing the zero-based index of the filter
   * that should remain enabled after other filters are disabled.
   * @example
   *
   * The following example disables all filters except the second filter in the list (index value of 1):
   *
   * ```javascript
   * fl.getDocumentDOM().disableOtherFilters(1);
   * ```
   * @see
   *
   * - {@link Document.addFilter | Document.addFilter()}
   * - {@link Document.changeFilterOrder | Document.changeFilterOrder()}
   * - {@link Document.disableAllFilters | Document.disableAllFilters()}
   * - {@link Document.disableFilter | Document.disableFilter()}
   * - {@link Document.enableFilter | Document.enableFilter()}
   * - {@link Document.getFilters | Document.getFilters()}
   * - {@link Document.removeFilter | Document.removeFilter()}
   * - {@link Filter | Filter object}
   */
  disableOtherFilters(enabledFilterIndex: number): void;

  /**
   * Method; Distributes the selection.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param distributemode Specifies where to distribute the selected objects.
   *
   * Acceptable values are "left edge", "horizontal center", "right edge", "top edge", "vertical center", and "bottom edge".
   * @param [useDocumentBounds] A boolean value that, when set to `true`, distributes the selected objects using the bounds of the document.
   *
   * Otherwise, the method uses the bounds of the selected objects.
   *
   * The default is `false`.
   * @example
   *
   * The following example distributes the selected objects by their top edges:
   *
   * ```javascript
   * fl.getDocumentDOM().distribute("top edge");
   * ```
   *
   * The following example distributes the selected objects by their top edges and expressly sets the **`useDocumentBounds`** parameter:
   *
   * ```javascript
   * fl.getDocumentDOM().distribute("top edge", false);
   * ```
   *
   * The following example distributes the selected objects by their top edges, using the bounds of the document:
   *
   * ```javascript
   * fl.getDocumentDOM().distribute("top edge", true);
   * ```
   * @see
   *
   * - {@link Document.getAlignToDocument | Document.getAlignToDocument()}
   * - {@link Document.setAlignToDocument | Document.setAlignToDocument()}
   */
  distribute(distributemode: "left edge" | "horizontal center" | "right edge" | "top edge" | "vertical center" | "bottom edge", useDocumentBounds?: boolean): void;

  /**
   * Method; Performs a distribute-to-keyframes operation on the current selection-equivalent to selecting `Distribute to KeyFrames`.
   *
   * A new keyframe is created for every object.
   * New keyframes are created on the active layer immediately after the active frame.
   * @since Adobe Animate CC 2016
   * @example
   *
   * The following example distributes the current selection to keyframes:
   *
   * ```javascript
   * if (fl.getDocumentDOM().canDistributeToKeyframes()) {
   *   fl.getDocumentDOM().distributeToKeyframes();
   * }
   * ```
   */
  distributeToKeyframes(): void;

  /**
   * Method; Performs a distribute-to-layers operation on the current selection—equivalent to selecting Distribute to Layers.
   *
   * This method displays an error if there is no selection.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example distributes the current selection to layers:
   *
   * ```javascript
   * fl.getDocumentDOM().distributeToLayers();
   * ```
   */
  distributeToLayers(): void;

  /**
   * Method; Checks the document for persistent data with the specified name.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param name The name of the data to check.
   * @returns `true` if the document has persistent data; `false` otherwise.
   * @example
   *
   * The following example checks the document for persistent data with the name "myData":
   *
   * ```javascript
   * var hasData = fl.getDocumentDOM().documentHasData("myData");
   * ```
   * @see
   *
   * - {@link Document.addDataToDocument | Document.addDataToDocument()}
   * - {@link Document.getDataFromDocument | Document.getDataFromDocument()}
   * - {@link Document.removeDataFromDocument | Document.removeDataFromDocument()}
   */
  documentHasData(name: string): boolean;

  /**
   * Method; Duplicates the currently active profile and gives the duplicate version focus.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param [profileName] The unique name of the duplicated profile.
   *
   * If you do not specify a name, the method uses the default name.
   * @returns An integer that is the index of the new profile in the profile list.
   *
   * Returns -1 if the profile cannot be duplicated.
   * @example
   *
   * The following example duplicates the currently active profile and displays the index of the new profile in the Output panel:
   *
   * ```javascript
   * fl.trace(fl.getDocumentDOM().duplicatePublishProfile("dup profile"));
   * ```
   */
  duplicatePublishProfile(profileName?: string): number;

  /**
   * Method; Makes a copy of the currently selected scene, giving the new scene a unique name and making it the current scene.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @returns `true` if the scene is duplicated successfully; `false` otherwise.
   * @example
   *
   * The following example duplicates the second scene in the current document:
   *
   * ```javascript
   * fl.getDocumentDOM().editScene(1); // Set the middle scene to current scene.
   * var success = fl.getDocumentDOM().duplicateScene();
   * ```
   */
  duplicateScene(): boolean;

  /**
   * Method; Duplicates the selection on the Stage.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example duplicates the current selection, which is similar to Alt-clicking and then dragging an item:
   *
   * ```javascript
   * fl.getDocumentDOM().duplicateSelection();
   * ```
   */
  duplicateSelection(): void;

  /**
   * Method; Makes the specified scene the currently selected scene for editing.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param index A zero-based integer that specifies which scene to edit.
   * @example
   *
   * Assuming that there are three scenes (Scene0, Scene1, and Scene2) in the current document,
   * the following example makes Scene2 the current scene and then deletes it:
   *
   * ```javascript
   * fl.getDocumentDOM().editScene(2);
   * fl.getDocumentDOM().deleteScene();
   * ```
   */
  editScene(index: number): void;

  /**
   * Method; Enables all the filters on the Filters list for the selected objects.
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example enables all the filters on the Filters list for the selected objects:
   *
   * ```javascript
   * fl.getDocumentDOM().enableAllFilters();
   * ```
   * @see
   *
   * - {@link Document.addFilter | Document.addFilter()}
   * - {@link Document.changeFilterOrder | Document.changeFilterOrder()}
   * - {@link Document.disableAllFilters | Document.disableAllFilters()}
   * - {@link Document.enableFilter | Document.enableFilter()}
   * - {@link Document.getFilters | Document.getFilters()}
   * - {@link Document.removeAllFilters | Document.removeAllFilters()}
   * - {@link Filter | Filter object}
   */
  enableAllFilters(): void;

  /**
   * Method; Enables the specified filter for the selected objects.
   * @since Macromedia Flash Basic/Professional 8
   * @param filterIndex An integer specifying the zero-based index of the filter in the Filters list to enable.
   * @example
   *
   * The following example enables the second filter of the selected objects:
   *
   * ```javascript
   * fl.getDocumentDOM().enableFilter(1);
   * ```
   * @see
   *
   * - {@link Document.addFilter | Document.addFilter()}
   * - {@link Document.changeFilterOrder | Document.changeFilterOrder()}
   * - {@link Document.disableFilter | Document.disableFilter()}
   * - {@link Document.enableAllFilters | Document.enableAllFilters()}
   * - {@link Document.getFilters | Document.getFilters()}
   * - {@link Document.removeFilter | Document.removeFilter()}
   * - {@link Filter | Filter object}
   */
  enableFilter(filterIndex: number): void;

  /**
   * Method; Switches the authoring tool into the editing mode specified by the **`editMode`** parameter.
   *
   * If no parameter is specified, the method defaults to symbol-editing mode,
   * which has the same result as right-clicking the symbol to invoke the context menu and selecting `Edit`.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param [editMode] The editing mode.
   *
   * Acceptable values are "inPlace" or "newWindow".
   *
   * If no parameter is specified, the default is symbol-editing mode.
   * @example
   *
   * The following example puts Flash in edit-in-place mode for the currently selected symbol:
   *
   * ```javascript
   * fl.getDocumentDOM().enterEditMode("inPlace");
   * ```
   *
   * The following example puts Flash in edit-in-new-window mode for the currently selected symbol:
   *
   * ```javascript
   * fl.getDocumentDOM().enterEditMode("newWindow");
   * ```
   * @see {@link Document.exitEditMode | Document.exitEditMode()}
   */
  enterEditMode(editMode?: "inPlace" | "newWindow"): void;

  /**
   * Method; Exits from symbol-editing mode and returns focus to the next level up from the editing mode.
   *
   * For example, if you are editing a symbol inside another symbol,
   * this method takes you up a level from the symbol you are editing, into the parent symbol.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example exits symbol-editing mode:
   *
   * ```javascript
   * fl.getDocumentDOM().exitEditMode();
   * ```
   * @see {@link Document.enterEditMode | Document.enterEditMode()}
   */
  exitEditMode(): void;

  /**
   * Method; Exports the HTML5 Canvas Publishing Template for given document, at the specified location.
   *
   * This method is specific to HTML Canvas document only.
   * @since Adobe Animate 2020
   * @param pathURI A string, expressed as a file:/// URI, that specifies the path of the generated HTML template.
   * @returns `true` if exported successfully. `false` otherwise.
   * @example
   *
   * The following example exports the HTML5 Canvas Publishing Template.
   *
   * ```javascript
   * var pathURI = "file:///C|/Users/username/desktop/CanvasTemplate.html";
   * var exportFlag = fl.getDocumentDOM().exportCanvasPublishTemplate(pathURI);
   * if (!exportFlag) fl.trace("Template could not be exported");
   * ```
   */
  exportCanvasPublishTemplate(pathURI: string): boolean;

  /**
   * Method; Exports a selected instance of a movie clip, graphic, or button symbol on the Stage to a bitmap in Library.
   * @since Adobe Flash Professional CS6
   * @param frameNumber Integer indicating the frame to be exported.
   * @param bitmapName The name of the bitmap to be added to the Library.
   * @example
   *
   * The following example exports the selected item on frame 1 to the library and assigns the new bitmap the name "myTestBitmap":
   *
   * ```javascript
   * fl.getDocumentDOM().exportInstanceToLibrary(1, "myTestBitmap");
   * ```
   */
  exportInstanceToLibrary(frameNumber: number, bitmapName: string): void;

  /**
   * Method; Exports a selected instance of a movie clip, graphic, or button symbol on the Stage to a series of PNG files on disk.
   *
   * If no **`startFrameNum`** or **`endFrameNum`** is given, the output includes all frames in the Timeline.
   * @since Adobe Flash Professional CS6
   * @param outputURI The URI to export the PNG Sequence files to.
   *
   * This URI must reference a local file. Example: `file:///c\|/tests/mytest.png`.
   * @param [startFrameNum] An integer indicating the first frame to be exported.
   *
   * The default is 1.
   * @param [endFrameNum] An Integer indicating the last frame to be exported.
   *
   * The default is 99999.
   * @param [matrix] A matrix to be appended to the exported PNG sequence.
   * @example
   *
   * The following example exports the entire Timeline to a numbered PNG sequence starting with the file name "myTest.png":
   *
   * ```javascript
   * fl.getDocumentDOM().exportInstanceToPNGSequence("file:///c\|/tests/mytest.png");
   * ```
   */
  exportInstanceToPNGSequence(outputURI: string, startFrameNum?: number, endFrameNum?: number, matrix?: Matrix): void;

  /**
   * Method; Generates the required media from the document by making use of Adobe Media Encoder.
   * @since Adobe Animate 2020
   * @param fileURI A string, expressed as a file:/// URI, that specifies the output file path (without file extension).
   * @param format The format of the file to be exported.
   * @param preset The preset to be used.
   * @param [transparent] A boolean that specifies whether to ignore the stage colour.
   *
   * Default value is `false`.
   * @param [runBatch] A boolean that specifies whether to run AME batch automatically.
   *
   * Default value is `true`.
   * @param [sceneName] A string that specifies the name of the scene if only that specific scene should be exported.
   *
   * By default, all scenes will be exported.
   * @param [startFrame] An integer, index of start frame in specific scene.
   *
   * Applicable only when a specific scene is exported.
   *
   * By default, it will be either first frame of timeline or the start frame of the timeline loop range if defined.
   * @param [endFrame] An integer, index of end frame in specific scene. Applicable only when a specific scene is exported.
   *
   * By default, it will be last frame of timeline or the end frame of the timeline loop range if defined.
   * @example
   *
   * The following example generates the required media.
   *
   * ```javascript
   * dom.exportMedia("file:///C/Desktop/media", "H.264", "Default", true, false, "Scene 1", 20, 85);
   * ```
   */
  exportMedia(fileURI: string, format: string, preset: string, transparent?: boolean, runBatch?: boolean, sceneName?: string, startFrame?: number, endFrame?: number): void;

  /**
   * Method; Exports the document as one or more PNG files.
   *
   * If **`fileURI`** is specified and the file already exists, it is overwritten without warning.
   *
   * ***Note:** If **`fileURI`** is empty and **`currentFrame`** is `true`,
   * the Export Movie dialog box does not display and Flash saves the exported PNG file in the same location as the .fla file.*
   *
   * ***Note:** If **`currentPNGSettings`** is `false` and **`currentFrame`** is `true`,
   * the Export PNG dialog box does not display and Flash uses the current PNG publish settings.*
   * @since Macromedia Flash Basic/Professional 8
   * @param [fileURI] A string, expressed as a file:/// URI, that specifies the filename for the exported file.
   *
   * If **`fileURI`** is an empty string or is not specified, Flash displays the Export Movie dialog box.
   * @param [currentPNGSettings] Whether to use the current PNG publish settings (`true`)
   * or to display the Export PNG dialog box (`false`).
   *
   * The default value is `false`.
   * @param [currentFrame] Whether to export only the current frame (`true`) or to export all frames,
   * with each frame as a separate PNG file (false).
   *
   * The default value is `false`.
   * @returns true if the file is successfully exported as a PNG file; `false` otherwise.
   * @example
   *
   * The following example exports the current frame in the current document to "myFile.png", using the current PNG publish settings:
   *
   * ```javascript
   * fl.getDocumentDOM().exportPNG("file:///C\|/myProject/myFile.png", true, true);
   * ```
   */
  exportPNG(fileURI?: string, currentPNGSettings?: boolean, currentFrame?: boolean): boolean;

  /**
   * Method; Exports the currently active profile to an XML file.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param fileURI A string, expressed as a file:/// URI, that specifies the path of the XML file to which the profile is exported.
   * @example
   *
   * The following example exports the currently active profile to the file named "profile.xml" in the
   * folder `/Documents and Settings/username/Desktop` on the C drive:
   *
   * ```javascript
   * fl.getDocumentDOM().exportPublishProfile("file:///C\|/Documents and Settings/username/Desktop/profile.xml");
   * ```
   * @see
   *
   * - {@link Document.exportPublishProfileString | Document.exportPublishProfileString()}
   * - {@link Document.importPublishProfile | Document.importPublishProfile()}
   */
  exportPublishProfile(fileURI: string): void;

  /**
   * Method; Returns a string that specifies, in XML format, the specified profile.
   *
   * If you don't pass a value for **`profileName`**, the current profile is exported.
   * @since Adobe Flash Professional CS4
   * @param [profileName] The name of the profile to export to an XML string.
   * @returns An XML string.
   * @example
   *
   * The following example stores an XML string that represents the current profile in a variable named `profileXML`
   * and then displays it in the Output panel:
   *
   * ```javascript
   * var profileXML = fl.getDocumentDOM().exportPublishProfileString();
   * fl.trace(profileXML);
   * ```
   * @see
   *
   * - {@link Document.exportPublishProfile | Document.exportPublishProfile()}
   * - {@link Document.importPublishProfileString | Document.importPublishProfileString()}
   */
  exportPublishProfileString(profileName?: string): string;

  /**
   * Method; It generates SVG File.
   * @since Adobe Animate 2020
   * @todo Check that **`fileURI`** param.
   * @param fileURI A string, expressed as a file:/// URI, that specifies the output file path (without file extension)
   * @param currentSettings Whether to use the current SVG export settings (`true`)
   * or to display the Export SVG dialog box (`false`)
   * @param currentFrame Whether to export only the current frame (`true`)
   * or to export all frames, with each frame as a separate SVG file (`false`)
   * @example
   *
   * The following example generates SVG File.
   *
   * ```javascript
   * fl.getDocumentDOM().exportSVG("file:///users/usename/Desktop/Canvas/hap.svg", true, true);
   * ```
   */
  exportSVG(fileURI: string, currentSettings: boolean, currentFrame: boolean): void;

  /**
   * Method; Exports the document in the Flash SWF format.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param [fileURI] A string, expressed as a file:/// URI, that specifies the name of the exported file.
   *
   * If **`fileURI`** is empty or not specified, Flash displays the Export Movie dialog box.
   * @param [currentSettings] A boolean value that, when set to `true`, causes Flash to use current SWF publish settings.
   *
   * Otherwise, Flash displays the Export Flash Player dialog box. The default is `false`.
   * @example
   *
   * The following example exports the document to the specified file location with the current publish settings:
   *
   * ```javascript
   * fl.getDocumentDOM().exportSWF("file:///C\|/Documents and Settings/joe\_user/Desktop/qwerty.swf", true);
   * ```
   *
   * The following example displays the Export Movie dialog box and the Export Flash Player dialog box
   * and then exports the document based on the specified settings:
   *
   * ```javascript
   * fl.getDocumentDOM().exportSWF("", false);
   * ```
   *
   * The following example displays the Export Movie dialog box and the Export Flash Player dialog box
   * and then exports the document based on the specified settings:
   *
   * ```javascript
   * fl.getDocumentDOM().exportSWF();
   * ```
   */
  exportSWF(fileURI?: string, currentSettings?: boolean): void;

  /**
   * Method; Exports a video from the document and optionally sends it to Adobe Media Encoder to convert the video.
   * @since Adobe Animate CC 2016
   * @param fileURI A string, expressed as a file:/// URI, that specifies the fully qualified path to which the video is saved.
   * @param [convertInAdobeMediaEncoder] Whether or not to send the recorded video to Adobe Media Encoder.
   *
   * The default value is `true`, which sends the video to Adobe Media Encoder.
   * @param [transparent] Whether or not the background should be included in the video.
   *
   * The default value is `false`, which includes the movie background in the video.
   * @param [stopAtFrame] Whether the video should be recorded until it reaches a certain frame or a specific time.
   *
   * The default value is `true`, stop when a certain frame is reached.
   * @param [stopAtFrameOrTime] If **`stopAtFrame`** is `true`, this is an integer specifying the number of frames to record.
   *
   * If **`stopAtFrame`** is `false`, this is the number of milliseconds to record.
   *
   * The default value is 0 which, if **`stopAtFrame`** is `true`, will record all the frames in the main timeline.
   * @example
   *
   * The following example illustrates the use of this method:
   *
   * ```javascript
   * fl.getDocumentDOM().exportVideo("file:///C\|/myProject/myVideo.mov");
   * ```
   */
  exportVideo(fileURI: string, convertInAdobeMediaEncoder?: boolean, transparent?: boolean, stopAtFrame?: boolean, stopAtFrameOrTime?: number): void;

  /**
   * Method; identical to retrieving the value of the To Stage button in the Align panel.
   *
   * Gets the preference that can be used for {@link Document.align | Document.align()},
   * {@link Document.distribute | Document.distribute()}, {@link Document.match | Document.match()},
   * and {@link Document.space | Document.space()} methods on the document.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @returns `true` if the preference is set to align the objects to the Stage; `false` otherwise.
   * @example
   *
   * The following example retrieves the value of the To Stage button in the Align panel.
   * If the return value is `true`, the To Stage button is active; otherwise, it is not.
   *
   * ```javascript
   * var isAlignToDoc = fl.getDocumentDOM().getAlignToDocument();
   * fl.getDocumentDOM().align("left", isAlignToDoc);
   * ```
   * @see {@link Document.setAlignToDocument | Document.setAlignToDocument()}
   */
  getAlignToDocument(): boolean;

  /**
   * Method; Returns a string that specifies the blending mode for the selected objects.
   * @todo Check return type
   * @since Macromedia Flash Basic/Professional 8
   * @returns The blending mode for the selected objects.
   *
   * If more than one object is selected and they have different blending modes,
   * the string reflects the blending mode of the object with the highest depth.
   *
   * ***Note:** The return value is unpredictable if the selection contains objects that don't support blending modes,
   * or that have a blending mode value of "normal".*
   * @example
   *
   * The following example displays the name of the blending mode in the Output panel:
   *
   * ```javascript
   * fl.trace(fl.getDocumentDOM().getBlendMode());
   * ```
   */
  getBlendMode(): BlendMode;

  /**
   * Method; Retrieves the fill object of the selected shape or, if specified, of the Tools panel and Property inspector.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param [objectToFill] The location of the fill object.
   *
   * The following values are valid:
   * - "toolbar" returns the fill object of the Tools panel and Property inspector.
   * - "selection" returns the fill object of the selection.
   *
   * If omitted, the default value is "selection".
   * If there is no selection, the method returns `undefined`.
   * @returns The {@link Fill | Fill object} specified by the **`objectToFill`** parameter,
   * if successful; otherwise, it returns undefined.
   * @example
   *
   * The following example gets the fill object of the selection and then changes the selection's color to white:
   *
   * ```javascript
   * var fill = fl.getDocumentDOM().getCustomFill();
   * fill.color = "#FFFFFF";
   * fill.style = "solid";
   * fl.getDocumentDOM().setCustomFill(fill);
   * ```
   *
   * The following example returns the fill object of the Tools panel and Property inspector
   * and then changes the color swatch to a linear gradient:
   *
   * ```javascript
   * var fill = fl.getDocumentDOM().getCustomFill("toolbar");
   * fill.style = "linearGradient";
   * fill.colorArray = [0x00ff00, 0xff0000, 0x0000ff];
   * fill.posArray = [0, 100, 200];
   * fl.getDocumentDOM().setCustomFill(fill);
   * ```
   * @see {@link Document.setCustomFill | Document.setCustomFill()}
   */
  getCustomFill(objectToFill?: "toolbar" | "selection"): Fill | undefined;
  getCustomFill(objectToFill: "toolbar"): Fill;
  getCustomFill(objectToFill?: "selection"): Fill | undefined;

  /**
   * Returns the stroke object of the selected shape or, if specified, of the Tools panel and Property inspector.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param [locationOfStroke] A string that specifies the location of the stroke object.
   *
   * The following values are valid:
   * - "toolbar", if set, returns the stroke object of the Tools panel and Property inspector.
   * - "selection", if set, returns the stroke object of the selection.
   *
   * If omitted, it defaults to "selection". If there is no selection, it returns `undefined`.
   * @returns The {@link Stroke | Stroke object} specified by the **`locationOfStroke`** parameter,
   * if successful; otherwise, it returns `undefined`.
   * @example
   *
   * The following example returns the current stroke settings of the selection and changes the stroke thickness to 2:
   *
   * ```javascript
   * var stroke = fl.getDocumentDOM().getCustomStroke("selection");
   * stroke.thickness = 2;
   * fl.getDocumentDOM().setCustomStroke(stroke);
   * ```
   *
   * The following example returns the current stroke settings of the Tools panel and Property inspector and sets the stroke color to red:
   *
   * ```javascript
   * var stroke = fl.getDocumentDOM().getCustomStroke("toolbar");
   * stroke.color = "#FF0000";
   * fl.getDocumentDOM().setCustomStroke(stroke);
   * ```
   * @see {@link Document.setCustomStroke | Document.setCustomStroke()}
   */
  getCustomStroke(locationOfStroke?: "toolbar" | "selection"): Stroke | undefined;
  getCustomStroke(locationOfStroke: "toolbar"): Stroke;
  getCustomStroke(locationOfStroke?: "selection"): Stroke | undefined;

  /**
   * Method; Retrieves the value of the specified data.
   *
   * The type returned depends on the type of data that was stored.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param name The name of the data to return.
   * @returns The specified data.
   * @example
   *
   * The following example adds an integer value of 12 to the current document and uses this method to display the value in the Output panel:
   *
   * ```javascript
   * fl.getDocumentDOM().addDataToDocument("myData", "integer", 12);
   * fl.trace(fl.getDocumentDOM().getDataFromDocument("myData"));
   * ```
   * @see
   *
   * - {@link Document.addDataToDocument | Document.addDataToDocument()}
   * - {@link Document.documentHasData | Document.documentHasData()}
   * - {@link Document.removeDataFromDocument | Document.removeDataFromDocument()}
   */
  getDataFromDocument(name: string): PersistentDataType;

  /**
   * Method; Gets the specified Element property for the current selection.
   *
   * For a list of acceptable values, see the {@link Element | Element object}.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param propertyName The name of the Element property for which to retrieve the value.
   * @returns The value of the specified property.
   *
   * Returns `null` if the property is an indeterminate state, as when multiple elements are selected with different property values.
   *
   * Returns `undefined` if the property is not a valid property of the selected element.
   * @example
   *
   * The following example gets the name of the Element property for the current selection:
   *
   * ```javascript
   * // the instance name of the selected object.
   * var elementName = fl.getDocumentDOM().getElementProperty("name");
   * ```
   * @see {@link Document.setElementProperty | Document.setElementProperty()}
   */
  getElementProperty(propertyName: string): any | null | undefined;

  /**
   * Method; Gets a specific TextAttrs property of the selected Text objects.
   *
   * Selected objects that are not text fields are ignored.
   *
   * For a list of property names and expected values, see the {@link TextAttrs | TextAttrs object}.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param attrName The name of the TextAttrs property to be returned.
   *
   * For a list of property names and expected values, see the {@link TextAttrs | TextAttrs object}.
   * @param [startIndex] The index of first character, with 0 (zero) specifying the first position.
   * @param [endIndex] The index of last character.
   * @returns If one text field is selected, the property is returned if there is only one value used within the text.
   *
   * Returns `undefined` if there are several values used inside the text field.
   *
   * If several text fields are selected, and all the text alignment values are equal, the method returns this value.
   *
   * If several text fields are selected, but all the text alignment values are not equal, the method returns `undefined`.
   *
   * If the optional arguments are not passed, these rules apply to the range of text currently selected
   * or the whole text field if the text is not currently being edited.
   *
   * If only **`startIndex`** is passed, the property of the character to the right of the index is returned,
   * if all the selected Text objects match values.
   *
   * If **`startIndex`** and **`endIndex`** are passed, the value returned reflects
   * the entire range of characters from **`startIndex`** up to, but not including, **`endIndex`**.
   * @example
   *
   * The following example gets the size of the selected text fields:
   *
   * ```javascript
   * fl.getDocumentDOM().getElementTextAttr("size");
   * ```
   *
   * The following example gets the color of the character at index 3 in the selected text fields:
   *
   * ```javascript
   * fl.getDocumentDOM().getElementTextAttr("fillColor", 3);
   * ```
   *
   * The following example gets the font name of the text from index 2 up to,
   * but not including, index 10 of the selected text fields:
   *
   * ```javascript
   * fl.getDocumentDOM().getElementTextAttr("face", 2, 10);
   * ```
   * @see {@link Document.setElementTextAttr | Document.setElementTextAttr()}
   */
  getElementTextAttr(attrName: string, startIndex?: number, endIndex?: number): any | undefined;

  /**
   * Method; Returns an array that contains the list of filters applied to the currently selected objects.
   *
   * If multiple objects are selected and they don't have identical filters,
   * this method returns the list of filters applied to the first selected object.
   * @since Macromedia Flash Basic/Professional 8
   * @returns An array that contains a list of filters applied to the currently selected objects.
   * @see
   *
   * - {@link Document.addFilter | Document.addFilter()}
   * - {@link Document.changeFilterOrder | Document.changeFilterOrder()}
   * - {@link Document.setFilters | Document.setFilters()}
   * - {@link Filter | Filter object}
   */
  getFilters(): Filter[];

  /**
   * Method; Gets the Tagged Swatches palette index for given palette name.
   * @since Adobe Animate 2020
   * @param paletteName Tagged swatch palette name.
   * @returns An integer that specifies the index of the palette.
   * @example
   *
   * The following example returns the index of tagged swatch palette "palette1".
   *
   * ```javascript
   * fl.trace(fl.getDocumentDOM().getIndexForTaggedSwatchesPalette("palette 1"));
   * ```
   */
  getIndexForTaggedSwatchesPalette(paletteName: string): number;

  /**
   * Method; Returns a string containing the XML metadata associated with the document,
   * or an empty string if there is no metadata.
   * @since Macromedia Flash Basic/Professional 8
   * @returns The XML metadata associated with the document or an empty string if there is no metadata.
   * @example
   *
   * The following example displays XML metadata from the current document in the Output panel:
   *
   * ```javascript
   * fl.trace("XML Metadata is :" + fl.getDocumentDOM().getMetadata());
   * ```
   * @see {@link Document.setMetadata | Document.setMetadata()}
   */
  getMetadata(): string;

  /**
   * Method; Returns the mobile XML settings for the document.
   * @since Adobe Flash Professional CS3
   * @returns The XML settings for the document.
   *
   * If no value has been set, returns an empty string.
   * @example
   *
   * The following example displays the XML settings string for the current document:
   *
   * ```javascript
   * fl.trace(fl.getDocumentDOM().getMobileSettings());
   * /* traces a string like the following
   *
   * "<? xml version="1.0" encoding="UTF-16" standalone="no"?><mobileSettings><contentType id="standalonePlayer" name="Standalone Player"/><testDevices><testDevice id="1170" name="Generic Phone" selected="yes"/></testDevices><outputMsgFiltering info="no" trace="yes" warning="yes"/><testWindowState height="496" splitterClosed="No" splitterXPos="400" width="907"/></mobileSettings>"
   * *\/
   * ```
   * @see {@link Document.setMobileSettings | Document.setMobileSettings()}
   */
  getMobileSettings(): string;

  /**
   * Method; Returns a string that represents the targeted player version for the specified document.
   *
   * For a list of values that this method can return, see {@link Document.setPlayerVersion | Document.setPlayerVersion()}.
   *
   * To determine which version of ActionScript is being targeted in the specified file, use {@link Document.asVersion}.
   * @since Adobe Flash Professional CS3
   * @returns The Flash Player version specified by using {@link Document.setPlayerVersion | Document.setPlayerVersion()}.
   *
   * If no value has been set, returns the value specified in the Publish Settings dialog box.
   * @example
   *
   * The following example illustrates targeting specified player versions for the current document and then retrieving those values:
   *
   * ```javascript
   * fl.getDocumentDOM().setPlayerVersion("6");
   * var version = fl.getDocumentDOM().getPlayerVersion();
   * fl.trace(version); // displays "6"
   *
   * fl.getDocumentDOM().setPlayerVersion("FlashPlayer10");
   * var version = fl.getDocumentDOM().getPlayerVersion();
   * fl.trace(version); // displays "FlashPlayer10"
   * ```
   * @see {@link Document.setPlayerVersion | Document.setPlayerVersion()}
   */
  getPlayerVersion(): string;

  /**
   * Method; Indicates whether publishing of the specified persistent data is enabled for the specified format in this document.
   * @since Adobe Animate CC 2016
   * @param format The publishing format.
   *
   * ***Note:** `_EMBED_SWF_` is a special built-in publishing format for persistent data.
   * If set, the persistent data will be embedded in the SWF file every time a document is published.
   * The persistent data can then be accessed via ActionScript with the .metaData property.
   * This requires SWF version 19 (Flash Player 11.6) and above and is only for symbol instances onstage.
   * Other custom publishing formats may be specified for custom JSFL scripts if this method is called with the same format.*
   * @returns `true` if publishing of the specified persistent data is enabled for the specified format in this document.
   *
   * Otherwise `false`.
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
   * @see {@link Document.setPublishDocumentData | Document.setPublishDocumentData()}
   */
  getPublishDocumentData(format: string): boolean;

  /**
   * Method; Gets the path to the SWF file that is set in the current Publish profile.
   * @todo Return type proof needed.
   * @since Adobe Flash Professional CS6
   * @returns The absolute file:/// URI to the SWF file that is set in the current Publish profile.
   * @example
   *
   * The following example displays the full path to the SWF file as defined in the Publish profile:
   *
   * ```javascript
   * fl.trace("the current Publish Setting's SWF file path is: " + fl.getDocumentDOM().getSWFPathFromProfile());
   * ```
   */
  getSWFPathFromProfile(): string;

  /**
   * Method; Gets the bounding rectangle of the current selection.
   *
   * If a selection is non-rectangular, the smallest rectangle encompassing the entire selection is returned.
   *
   * The rectangle is based on the document space or, when in edit mode,
   * the registration point (also *origin point* or *zero point*) of the symbol being edited.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @returns The bounding rectangle of the current selection, or 0 if nothing is selected.
   *
   * For information on the format of the return value, see {@link Document.addNewRectangle | Document.addNewRectangle()}.
   * @example
   *
   * The following example gets the bounding rectangle for the current selection and then displays its properties:
   *
   * ```javascript
   * var newRect = fl.getDocumentDOM().getSelectionRect();
   * var outputStr = "left: " + newRect.left
   *   + " top: " + newRect.top
   *   + " right: " + newRect.right
   *   + " bottom: " + newRect.bottom;
   * alert(outputStr);
   * ```
   * @see
   *
   * - {@link Document.selection}
   * - {@link Document.setSelectionRect | Document.setSelectionRect()}
   */
  getSelectionRect(): RectangleBounds;

  /**
   * Method; Returns the Tagged Swatch with the given index.
   * @since Adobe Animate 2020
   * @param index The index of the tagged swatch.
   * @param [palette] It is an integer that specifies the index of the tagged swatch palette.
   *
   * Default value is 0.
   * @returns Swatch object.
   * @example
   *
   * The following example returns the tagged swatch at index 0.
   *
   * ```javascript
   * var document = fl.getDocumentDOM();
   * var swatch = document.getTaggedSwatchAtIndex(0);
   * ```
   * @see
   *
   * - {@link Document.getTaggedSwatchByName | Document.getTaggedSwatchByName()}
   * - {@link Document.getTaggedSwatchesPaletteList | Document.getTaggedSwatchesPaletteList()}
   * - {@link Document.getTaggedSwatches | Document.getTaggedSwatches()}
   */
  getTaggedSwatchAtIndex(index: number, palette?: number): Swatch;

  /**
   * Method; Returns the Tagged Swatch with the given name.
   * @since Adobe Animate 2020
   * @param name The name of the tagged swatch.
   * @returns Swatch object.
   * @example
   *
   * The following example returns the tagged swatch with name "swatch1".
   *
   * ```javascript
   * var document = fl.getDocumentDOM();
   * var swatch = document.getTaggedSwatchByName("swatch1");
   * ```
   * @see
   *
   * - {@link Document.getTaggedSwatchesPaletteList | Document.getTaggedSwatchesPaletteList()}
   * - {@link Document.getTaggedSwatches | Document.getTaggedSwatches()}
   */
  getTaggedSwatchByName(name: string): Swatch;

  /**
   * Method; Returns array of tagged {@link Swatch | Swatch object}s.
   * @since Adobe Animate 2020
   * @param [palette] The index of the tagged swatch palette.
   *
   * Default value is 0.
   * @returns Array of tagged swatches.
   * @example
   *
   * The following example returns the array of tagged swatches.
   *
   * ```javascript
   * var doc = fl.getDocumentDOM();
   * var swatchArr = doc.getTaggedSwatches();
   * ```
   * @see
   *
   * - {@link Document.getTaggedSwatchByName | Document.getTaggedSwatchByName()}
   * - {@link Document.getTaggedSwatchesPaletteList | Document.getTaggedSwatchesPaletteList()}
   */
  getTaggedSwatches(palette?: number): Swatch[];

  /**
   * Method; To get the array of Tagged Swatches palette name.
   * @since Adobe Animate 2020
   * @returns Array of tagged swatches palette name list.
   * @example
   *
   * The following example returns the array of tagged swatches.
   *
   * ```javascript
   * var document = fl.getDocumentDOM();
   * var arr = document.getTaggedSwatchesPaletteList();
   * ```
   * @see
   *
   * {@link Document.getTaggedSwatchByName | Document.getTaggedSwatchByName()}
   * {@link Document.getTaggedSwatches | Document.getTaggedSwatches()}
   */
  getTaggedSwatchesPaletteList(): string[];

  /**
   * Method; Indicates whether if the "Enable detailed telemetry" checkbox is selected in the Publish Settings dialog.
   * @since Adobe Animate CC 2016
   * @returns Returns `true` if the "Enable detailed telemetry" checkbox is selected; otherwise `false`.
   * @example
   *
   * ```javascript
   * fl.trace("is detailed telemetry enabled for this doc: " + fl.getDocumentDOM().getTelemetryForSwf());
   * ```
   */
  getTelemetryForSwf(): boolean;

  /**
   * Method; Gets the currently selected text.
   *
   * If the optional parameters are not passed, the current text selection is used.
   * If text is not currently opened for editing, the whole text string is returned.
   * If only **`startIndex`** is passed, the string starting at that index and ending at the end of the field is returned.
   * If *startIndex* and **`endIndex`** are passed, the string starting from *startIndex* up to, but not including, **`endIndex`** is returned.
   * If there are several text fields selected, the concatenation of all the strings is returned.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param [startIndex] An integer that is an index of first character to get. This parameter is optional.
   * @param [endIndex] An integer that is an index of last character to get. This parameter is optional.
   * @returns A string that contains the selected text.
   * @usage Document.getTextString([startIndex [, endIndex]])
   * @example
   *
   * The following example gets the string in the selected text fields:
   *
   * ```javascript
   * fl.getDocumentDOM().getTextString();
   * ```
   *
   * The following example gets the string at character index 5 in the selected text fields:
   *
   * ```javascript
   * fl.getDocumentDOM().getTextString(5);
   * ```
   *
   * The following example gets the string from character index 2 up to, but not including, character index 10:
   *
   * ```javascript
   * fl.getDocumentDOM().getTextString(2, 10);
   * ```
   * @see {@link Document.setTextString | Document.setTextString()}
   */
  getTextString(startIndex?: number, endIndex?: number): string;

  /**
   * Method; Retrieves the current {@link Timeline | Timeline object} in the document.
   *
   * The current timeline can be the current scene, the current symbol being edited, or the current screen.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @returns The current {@link Timeline | Timeline object}.
   * @example
   *
   * The following example gets the Timeline object and returns the number of frames in the longest layer:
   *
   * ```javascript
   * var longestLayer = fl.getDocumentDOM().getTimeline().frameCount;
   * fl.trace("The longest layer has" + longestLayer + "frames");
   * ```
   *
   * The following example enters edit-in-place mode for the selected symbol on the Stage and inserts a frame on the symbol's timeline.
   *
   * ```javascript
   * fl.getDocumentDOM().enterEditMode("inPlace");
   * fl.getDocumentDOM().getTimeline().insertFrames();
   * ```
   *
   * The following example gets the Timeline object and displays its name:
   *
   * ```javascript
   * var timeline = fl.getDocumentDOM().getTimeline();
   * alert(timeline.name);
   * ```
   * @see
   *
   * - {@link Document.currentTimeline}
   * - {@link Document.timelines}
   * - {@link SymbolItem.timeline}
   */
  getTimeline(): Timeline;

  /**
   * Method; Gets the location of the transformation point of the current selection.
   *
   * You can use the transformation point for commutations such as rotate and skew.
   *
   * ***Note:** Transformation points are relative to different locations, depending on the type of item selected.
   * For more information, see {@link Document.setTransformationPoint | Document.setTransformationPoint()}.*
   * @since Macromedia Flash MX Basic/Professional 2004
   * @returns A point (for example, {x: 10, y: 20}, where x and y are floating-point numbers)
   * that specifies the position of the transformation point (also *origin point* or *zero point*)
   * within the selected element's coordinate system.
   * @example
   *
   * The following example gets the transformation point for the current selection.
   * The transPoint.x property gives the *x* coordinate of the transformation point.
   * The transPoint.y property gives the *y* coordinate of the transformation point.
   *
   * ```javascript
   * var transPoint = fl.getDocumentDOM().getTransformationPoint();
   * ```
   * @see
   *
   * - {@link Document.setTransformationPoint | Document.setTransformationPoint()}
   * - {@link Element.getTransformationPoint | Element.getTransformationPoint()}
   */
  getTransformationPoint(): Point;

  /**
   * Method; Converts the current selection to a group.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example converts the objects in the current selection to a group:
   *
   * ```javascript
   * fl.getDocumentDOM().group();
   * ```
   * @see {@link Document.unGroup | Document.unGroup()}
   */
  group(): void;

  /**
   * Method; Imports and sets the HTML5 Canvas Publishing Template for given document, from the specified location **`pathURI`**.
   *
   * This method is specific to HTML Canvas document only.
   * @since Adobe Animate 2020
   * @param pathURI A string, expressed as a file:/// URI, that specifies the path of the HTML template.
   * @returns `true` if imported successfully. `false` otherwise.
   * @example
   *
   * The following example replace the tagged swatch with the given name "Oldswatch" to the given new swatch object swatch1.
   *
   * ```javascript
   * var pathURI = "file:///C|/Users/username/desktop/CanvasTemplate.html";
   * var exportFlag = fl.getDocumentDOM().importCanvasPublishTemplate(pathURI);
   * if (!exportFlag) {
   *   fl.trace("Template could not be imported");
   * }
   * ```
   */
  importCanvasPublishTemplate(pathURI: string): boolean;

  /**
   * Method; Imports a file into a document.
   *
   * This method performs the same operation as the Import To Library or Import To Stage menu command.
   * To import a publish profile, use {@link Document.importPublishProfile | Document.importPublishProfile()}.
   * @since Macromedia Flash Basic/Professional 8. The **`showDialog`** and **`showImporterUI`** parameters are new in Adobe Animate.
   * @param fileURI A string, expressed as a file:/// URI, that specifies the path of the file to import.
   * @param [importToLibrary] Whether to import the file only into the document's library (`true`)
   * or to also place a copy on the Stage (`false`).
   *
   * The default value is `false`.
   * @param [showDialog] Whether to display the Import dialog box.
   *
   * Specifying true displays the import dialog.
   * If you specify `false`, the function imports the file using specifications set in the Preferences dialog.
   *
   * The default is `true`.
   * @param [showImporterUI] Whether to display errors visually (for example, using the Library Conflict dialog box).
   *
   * The default is `false`.
   * @example
   *
   * The following example lets the user browse for a file to import onto the Stage:
   *
   * ```javascript
   * var dom = fl.getDocumentDOM();
   * var URI = fl.browseForFileURL("select", "Import File");
   * dom.importFile(URI);
   * ```
   * @see {@link Flash.browseForFileURL | Flash.browseForFileURL()}.
   */
  importFile(fileURI: string, importToLibrary?: boolean, showDialog?: boolean, showImporterUI?: boolean): void;

  /**
   * Method; Imports a profile from a file.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param fileURI A string, expressed as a file:/// URI, that specifies the path of the XML file defining the profile to import.
   * @returns An integer that is the index of the imported profile in the profiles list.
   *
   * Returns -1 if the profile cannot be imported.
   * @example
   *
   * The following example imports the profile contained in the profile.xml file and displays its index in the profiles list:
   *
   * ```javascript
   * alert(fl.getDocumentDOM().importPublishProfile("file:///C\|/Documents and Settings/janeUser/Desktop/profile.xml"));
   * ```
   */
  importPublishProfile(fileURI: string): number;

  /**
   * Method: Imports an XML string that represents a publish profile and sets it as the current profile.
   *
   * To generate an XML string to import, use {@link Document.exportPublishProfileString | Document.exportPublishProfileString()}
   * before using this method.
   * @since Adobe Flash Professional CS4
   * @param xmlString A string that contains the XML data to be imported as the current profile.
   * @returns `true` if the string was successfully imported; `false` otherwise.
   * @example
   *
   * In the following example, the default profile is exported as an XML string.
   * The standard JavaScript replace command is used to modify the XML string.
   * The string is then imported, and the default ActionScript 3 output setting is set to ActionScript 1.
   *
   * ```javascript
   * var profileXML = fl.getDocumentDOM().exportPublishProfileString("Default");
   * fl.trace(profileXML);
   *
   * var newProfileXML = profileXML.replace(
   *   "<ActionScriptVersion>3</ActionScriptVersion>",
   *   "<ActionScriptVersion>1</ActionScriptVersion>"
   * );
   * fl.getDocumentDOM().importPublishProfileString(newProfileXML);
   * ```
   */
  importPublishProfileString(xmlString: string): boolean;

  /**
   * @since Macromedia Flash MX Basic/Professional 2004
   * @removed Adobe Animate CC 2016
   * @param fileURI A string, expressed as a file:/// URI, that specifies the file for the SWF file to import.
   * @example
   *
   * The following example imports the "mySwf.swf" file from the Flash Configuration folder:
   *
   * ```javascript
   * fl.getDocumentDOM().importSWF(fl.configURI + "mySwf.swf");
   * ```
   * @see {@link Document.importFile | Document.importFile()}
   */
  importSWF(fileURI: string): void;

  /**
   * Method; Creates an intersection drawing object from all selected drawing objects.
   *
   * If no objects are selected, calling this method results in an error and the script breaks at that point.
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example creates an intersection drawing object from all selected drawing objects:
   *
   * ```javascript
   * fl.getDocumentDOM().intersect();
   * ```
   * @see
   *
   * - {@link Document.crop | Document.crop()}
   * - {@link Document.deleteEnvelope | Document.deleteEnvelope()}
   * - {@link Document.punch | Document.punch()}
   * - {@link Document.union | Document.union()}
   * - {@link Shape.isDrawingObject}
   */
  intersect(): void;

  /**
   * Method; Loads a cue point XML file.
   *
   * The format and DTD of the XML file is the same as the one imported and exported by the Cue Points Property inspector.
   * The return value is the same as the string serialized in the Cue Point property of the object
   * containing the instance of an FLVPlayback Component.
   * @todo Test URI param
   * @since Adobe Flash Professional CS5
   * @removed Adobe Animate CC 2016
   * @param URI The absolute path to the cue point XML file.
   * @example
   *
   * The following example the cue points XML file located at C:\\testCuePoints.xml:
   *
   * ```javascript
   * var cuePoints = fl.getDocumentDOM().loadCuepointXML("c:\\testCuePoints.xml");
   * ```
   */
  loadCuepointXML(URI: string): void;

  /**
   * Method; Makes the size of the selected objects the same.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param width A boolean value that, when set to `true`, causes the method to make the widths of the selected items the same.
   * @param height A boolean value that, when set to `true`, causes the method to make the heights of the selected items the same.
   * @param [useDocumentBounds] A boolean value that, when set to `true`,
   * causes the method to match the size of the objects to the bounds of the document.
   * Otherwise, the method uses the bounds of the largest object.
   *
   * The default is `false`.
   * @example
   *
   * The following example matches the width of the selected objects only:
   *
   * ```javascript
   * fl.getDocumentDOM().match(true, false);
   * ```
   *
   * The following example matches the height only:
   *
   * ```javascript
   * fl.getDocumentDOM().match(false, true);
   * ```
   *
   * The following example matches the width only to the bounds of the document:
   *
   * ```javascript
   * fl.getDocumentDOM().match(true, false, true);
   * ```
   * @see
   *
   * - {@link Document.getAlignToDocument | Document.getAlignToDocument()}
   * - {@link Document.setAlignToDocument | Document.setAlignToDocument()}
   */
  match(width: boolean, height: boolean, useDocumentBounds?: boolean): void;

  /**
   * Method; Performs a mouse click from the Selection tool.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param position A pair of floating-point values that specify the *x* and *y* coordinates of the click in pixels.
   * @param toggleSel The state of the Shift key: true for pressed; false for not pressed.
   * @param shiftSel The state of the application preference Shift select: `true` for on; `false` for off.
   * @example
   *
   * The following example performs a mouse click at the specified location:
   *
   * ```javascript
   * fl.getDocumentDOM().mouseClick({ x: 300, y: 200 }, false, false);
   * ```
   * @see {@link Document.mouseDblClk | Document.mouseDblClk()}
   */
  mouseClick(position: Point, toggleSel: boolean, shiftSel: boolean): void;

  /**
   * Method; Performs a double mouse click from the Selection tool.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param position A pair of floating-point values that specify the *x* and *y* coordinates of the click in pixels.
   * @param altdown A boolean value that records whether the Alt key is down at the time of the event: `true` for pressed;
   * `false` for not pressed.
   * @param shiftDown A boolean value that records whether the Shift key was down when the event occurred: `true` for pressed;
   * `false` for not pressed.
   * @param shiftSelect A boolean value that indicates the state of the application preference Shift select: `true` for on;
   * `false` for off.
   * @example
   *
   * The following example performs a double mouse click at the specified location:
   *
   * ```javascript
   * fl.getDocumentDOM().mouseDblClk({ x: 392.9, y: 73 }, false, false, true);
   * ```
   * @see {@link Document.mouseClick | Document.mouseClick()}
   */
  mouseDblClk(position: Point, altdown: boolean, shiftDown: boolean, shiftSelect: boolean): void;

  /**
   * Method; If the selection contains at least one path with at least one Bézier point selected,
   * moves all selected Bézier points on all selected paths by the specified amount.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param delta A pair of floating-point values that specify the *x* and *y* coordinates in pixels
   * by which the selected Bézier points are moved.
   *
   * For example, passing ({x: 1, y: 2}) specifies a location that is to the right by one pixel and down by two pixels
   * from the current location.
   * @example
   *
   * The following example moves the selected Bézier points 10 pixels to the right and 5 pixels down:
   *
   * ```javascript
   * fl.getDocumentDOM().moveSelectedBezierPointsBy({ x: 10, y: 5 });
   * ```
   */
  moveSelectedBezierPointsBy(delta: Point): void;

  /**
   * Method; Moves selected objects by a specified distance.
   *
   * ***Note:** When the user uses the arrow keys to move the item,
   * the History panel combines all presses of the arrow key as one move step.
   *
   * When the user presses the arrow keys repeatedly, rather than taking multiple steps in the History panel,
   * the method performs one step, and the arguments are updated to reflect the repeated arrow keys.*
   *
   * For information on making a selection,
   * see {@link Document.setSelectionRect | Document.setSelectionRect()},
   * {@link Document.mouseClick | Document.mouseClick()}, {@link Document.mouseDblClk | Document.mouseDblClk()},
   * and the {@link Element | Element object}.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param distanceToMove A pair of floating-point values that specify the *x* and *y* coordinate values
   * by which the method moves the selection.
   *
   * For example, passing ({x: 1, y: 2}) specifies a location one pixel to the right and two pixels down from the current location.
   * @example
   *
   * The following example moves the selected item 62 pixels to the right and 84 pixels down:
   *
   * ```javascript
   * fl.getDocumentDOM().moveSelectionBy({ x: 62, y: 84 });
   * ```
   */
  moveSelectionBy(distanceToMove: Point): void;

  /**
   * Method; Optimizes smoothing for the current selection, allowing multiple passes, if specified, for optimal smoothing.
   *
   * This method is equivalent to selecting `Modify > Shape > Optimize`.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param smoothing An integer in the range from 0 to 100, with 0 specifying no smoothing and 100 specifying maximum smoothing.
   * @param useMultiplePasses A boolean value that, when set to `true`, indicates that the method should use multiple passes,
   * which is slower but produces a better result.
   *
   * This parameter has the same effect as clicking the Use Multiple Passes button in the Optimize Curves dialog box.
   * @example
   *
   * The following example optimizes the curve of the current selection to 50º of smoothing with multiple passes:
   *
   * ```javascript
   * fl.getDocumentDOM().optimizeCurves(50, true);
   * ```
   */
  optimizeCurves(smoothing: number, useMultiplePasses: boolean): void;

  /**
   * Method; Publishes the document according to the active publish settings (`File > Publish Settings`).
   * This method is equivalent to selecting `File > Publish`.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example publishes the current document:
   *
   * ```javascript
   * fl.getDocumentDOM().publish();
   * ```
   */
  publish(): void;

  /**
   * Method; Uses the top selected drawing object to punch through all selected drawing objects underneath it.
   *
   * If no objects are selected, calling this method results in an error and the script breaks at that point.
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example punches through drawing objects underneath the selected drawing object:
   *
   * ```javascript
   * fl.getDocumentDOM().punch();
   * ```
   * @see
   *
   * - {@link Document.crop | Document.crop()}
   * - {@link Document.deleteEnvelope | Document.deleteEnvelope()}
   * - {@link Document.intersect | Document.intersect()}
   * - {@link Document.union | Document.union()}
   * - {@link Shape.isDrawingObject}
   */
  punch(): void;

  /**
   * Method; Removes all filters from the selected objects.
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example removes all filters from the selected objects:
   *
   * ```javascript
   * fl.getDocumentDOM().removeAllFilters();
   * ```
   * @see
   *
   * - {@link Document.addFilter | Document.addFilter()}
   * - {@link Document.changeFilterOrder | Document.changeFilterOrder()}
   * - {@link Document.disableAllFilters | Document.disableAllFilters()}
   * - {@link Document.getFilters | Document.getFilters()}
   * - {@link Document.removeFilter | Document.removeFilter()}
   * - {@link Filter | Filter object}
   */
  removeAllFilters(): void;

  /**
   * Method; Removes persistent data with the specified name that has been attached to the document.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param name The name of the data to remove.
   * @example
   *
   * The following example removes from the document the persistent data named "myData":
   *
   * ```javascript
   * fl.getDocumentDOM().removeDataFromDocument("myData");
   * ```
   * @see
   *
   * - {@link Document.addDataToDocument | Document.addDataToDocument()}
   * - {@link Document.documentHasData | Document.documentHasData()}
   * - {@link Document.getDataFromDocument | Document.getDataFromDocument()}
   */
  removeDataFromDocument(name: string): void;

  /**
   * Method; Removes persistent data with the specified name that has been attached to the selection.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param name The name of the persistent data to remove.
   * @example
   *
   * The following example removes from the selection the persistent data named "myData":
   *
   * ```javascript
   * fl.getDocumentDOM().removeDataFromSelection("myData");
   * ```
   * @see {@link Document.addDataToSelection | Document.addDataToSelection()}
   */
  removeDataFromSelection(name: string): void;

  /**
   * Method; Removes the specified filter from the Filters list of the selected objects.
   * @since Macromedia Flash Basic/Professional 8
   * @param filterIndex The zero-based index of the filter to remove from the selected objects.
   * @example
   *
   * The following example removes the first filter (index value 0) from the Filters list of the selected objects:
   *
   * ```javascript
   * fl.getDocumentDOM().removeFilter(0);
   * ```
   * @see
   *
   * - {@link Document.addFilter | Document.addFilter()}
   * - {@link Document.changeFilterOrder | Document.changeFilterOrder()}
   * - {@link Document.disableFilter | Document.disableFilter()}
   * - {@link Document.getFilters | Document.getFilters()}
   * - {@link Document.removeAllFilters | Document.removeAllFilters()}
   * - {@link Filter | Filter object}
   */
  removeFilter(filterIndex: number): void;

  /**
   * Method; Renames the current profile.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param [profileNewName] The new name for the profile.
   *
   * The new name must be unique. If the name is not specified, a default name is provided.
   * @returns `true` if the name is changed successfully; `false` otherwise.
   * @example
   *
   * The following example renames the current profile to a default name and displays it:
   *
   * ```javascript
   * alert(fl.getDocumentDOM().renamePublishProfile());
   * ```
   */
  renamePublishProfile(profileNewName?: string): boolean;

  /**
   * Method; Renames the currently selected scene in the Scenes panel.
   *
   * The new name for the selected scene must be unique.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param name The new name of the scene.
   * @returns `true` if the name is changed successfully; `false` otherwise.
   *
   * If the new name is not unique, for example, the method returns `false`.
   * @example
   *
   * The following example renames the current scene to "new name":
   *
   * ```javascript
   * var success = fl.getDocumentDOM().renameScene("new name");
   * ```
   */
  renameScene(name: string): boolean;

  /**
   * Method; Moves the specified scene before another specified scene.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param sceneToMove Specifies which scene to move, with 0 (zero) being the first scene.
   * @param sceneToPutItBefore The scene before which you want to move the scene specified by **`sceneToMove`**.
   *
   * Specify 0 (zero) for the first scene.
   *
   * For example, if you specify 1 for **`sceneToMove`** and 0 for **`sceneToPutItBefore`**,
   * the second scene is placed before the first scene. Specify -1 to move the scene to the end.
   * @example
   *
   * The following example moves the second scene to before the first scene:
   *
   * ```javascript
   * fl.getDocumentDOM().reorderScene(1, 0);
   * ```
   */
  reorderScene(sceneToMove: number, sceneToPutItBefore: number): void;

  /**
   * Method; Sets all values in the Property inspector to default Oval object settings.
   *
   * If any Oval objects are selected, their properties are reset to default values as well.
   * @since Adobe Flash Professional CS3
   * @example
   *
   * The following example resets Oval object properties in the current document to default values:
   *
   * ```javascript
   * fl.getDocumentDOM().resetOvalObject();
   * ```
   * @see {@link Document.resetRectangleObject | Document.resetRectangleObject()}.
   */
  resetOvalObject(): void;

  /**
   * Method; Sets all values in the Property inspector to default Rectangle object settings.
   *
   * If any Rectangle objects are selected, their properties are reset to default values as well.
   * @since Adobe Flash Professional CS3
   * @example
   *
   * The following example resets Rectangle object properties in the current document to default values:
   *
   * ```javascript
   * fl.getDocumentDOM().resetRectangleObject();
   * ```
   * @see {@link Document.resetOvalObject | Document.resetOvalObject()}
   */
  resetRectangleObject(): void;

  /**
   * Method; Resets the transformation matrix.
   *
   * This method is equivalent to selecting `Modify > Transform > Remove Transform`.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example resets the transformation matrix for the current selection:
   *
   * ```javascript
   * fl.getDocumentDOM().resetTransformation();
   * ```
   */
  resetTransformation(): void;

  /**
   * Method; Reverts the specified document to its previously saved version.
   *
   * This method is equivalent to selecting `File > Revert`.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example reverts the current document to the previously saved version:
   *
   * ```javascript
   * fl.getDocumentDOM().revert();
   * ```
   * @see
   *
   * - {@link Document.canRevert | Document.canRevert()}
   * - {@link Flash.revertDocument | Flash.revertDocument()}.
   */
  revert(): void;

  /**
   * Method; Applies a 3D rotation to the selection.
   *
   * This method is available only for **movie clips**.
   * @since Adobe Flash Professional CS4
   * @param xyzCoordinate An XYZ coordinate point that specifies the axes for 3D rotation.
   * @param globalTransform Whether the transformation mode should be global (`true`) or local (`false`).
   * @example
   *
   * In the following example,
   * the selection is first rotated relative to the stage (globally) and then relative to itself (locally).
   *
   * ```javascript
   * var myDocument = fl.getDocumentDOM();
   * myDocument.rotate3DSelection({ x: 52.0, y: 0, z: 0 }, true);
   * myDocument.rotate3DSelection({ x: 52.0, y: 0, z: -55.2 }, false);
   * ```
   */
  rotate3DSelection(xyzCoordinate: Point3D, globalTransform: boolean): void;

  /**
   * Method; Rotates the selection by a specified number of degrees.
   *
   * The effect is the same as using the Free Transform tool to rotate the object.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param angle A floating-point value that specifies the angle of the rotation.
   * @param rotationPoint Specifies which side of the bounding box to rotate.
   *
   * Acceptable values are "top right", "top left", "bottom right", "bottom left", "top center", "right center", "bottom center",
   * and "left center".
   *
   * If omitted, the method uses the transformation point.
   * @example
   *
   * The following example rotates the selection by 45º around the transformation point:
   *
   * ```javascript
   * fl.getDocumentDOM().rotateSelection(45);
   * ```
   *
   * The following example rotates the selection by 45º around the lower-left corner:
   *
   * ```javascript
   * fl.getDocumentDOM().rotateSelection(45, "bottom left");
   * ```
   */
  rotateSelection(angle: number, rotationPoint?: Grid): void;

  /**
   * Method; Saves the document in its default location.
   *
   * This method is equivalent to selecting `File > Save`.
   * To specify a name for the file (instead of saving it with the same name), use {@link Flash.saveDocument | Flash.saveDocument()}.
   *
   * ***Note:** If the file is new and has not been modified or saved,
   * or if the file has not been modified since the last time it was saved,
   * this method has no effect and `false` is returned.
   * To allow an unsaved or unmodified file to be saved, use {@link Flash.saveDocumentAs | Flash.saveDocumentAs()}.*
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param [okToSaveAs] If `true` or omitted, and the file was never saved, opens the Save As dialog box.
   *
   * If `false` and the file was never saved, the file is not saved.
   * @returns `true` if the save operation completes successfully; `false` otherwise.
   * @example
   *
   * The following example saves the current document in its default location:
   *
   * ```javascript
   * fl.getDocumentDOM().save();
   * ```
   * @see
   *
   * - {@link Flash.saveAll | Flash.saveAll()}
   * - {@link Flash.saveDocument | Flash.saveDocument()}
   * - {@link Flash.saveDocumentAs | Flash.saveDocumentAs()}.
   */
  save(okToSaveAs?: boolean): boolean;

  /**
   * @since Macromedia Flash MX Basic/Professional 2004
   * @removed Adobe Flash Professional CS6
   * @param [okToSaveAs] If true or omitted and the file was never saved, opens the Save As dialog box.
   * If `false` and the file was never saved, the file is not saved.
   *
   * The default value is `true`.
   * @returns `true` if the save-and-compact operation completes successfully; `false` otherwise.
   * @example
   *
   * The following example saves and compacts the current document:
   *
   * ```javascript
   * fl.getDocumentDOM().saveAndCompact();
   * ```
   * @see
   *
   * - {@link Document.save | Document.save()}
   * - {@link Flash.saveDocumentAs | Flash.saveDocumentAs()}
   * - {@link Flash.saveDocument | Flash.saveDocument()}
   * - {@link Flash.saveAll | Flash.saveAll()}.
   */
  saveAndCompact(okToSaveAs?: boolean): boolean;

  /**
   * Method; Saves a new FLA file based on the existing document object, with an option to save only the current selection on Stage.
   * @since Adobe Flash Professional CS6
   * @param URI The URI to export the new FLA file to. This URI must reference a local file.
   *
   * Example: `file:///c\|/tests/myTest.fla`.
   * @param [selectionOnly] Whether only the current Stage selection should be saved to the new FLA file.
   * @example
   *
   * The following example exports the current selection to a new FLA file at the URI specified by the user:
   *
   * ```javascript
   * var uri = fl.browseForFileURL("save");
   * var selectionOnly = true;
   * fl.getDocumentDOM().saveAsCopy(uri, selectionOnly);
   * ```
   * w
   */
  saveAsCopy(URI: string, selectionOnly?: boolean): void;

  /**
   * Method; Scales the selection by a specified amount.
   * This method is equivalent to using the Free Transform tool to scale the object.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param xScale A floating-point value that specifies the amount of *x* by which to scale.
   * @param yScale A floating-point value that specifies the amount of *y* by which to scale.
   * @param [whichCorner] The edge about which the transformation occurs.
   *
   * If omitted, scaling occurs about the transformation point.
   *
   * Acceptable values are: "bottom left", "bottom right", "top right", "top left", "top center", "right center", "bottom center",
   * and "left center".
   * @example
   *
   * The following example expands the width of the current selection to double the original width and shrinks the height to half:
   *
   * ```javascript
   * fl.getDocumentDOM().scaleSelection(2.0, 0.5);
   * ```
   *
   * The following example flips the selection vertically:
   *
   * ```javascript
   * fl.getDocumentDOM().scaleSelection(1, -1);
   * ```
   *
   * The following example flips the selection horizontally:
   *
   * ```javascript
   * fl.getDocumentDOM().scaleSelection(-1, 1);
   * ```
   *
   * The following example scales the selection vertically by 1.9 from the top center:
   *
   * ```javascript
   * fl.getDocumentDOM().scaleSelection(1, 1.9, "top center");
   * ```
   */
  scaleSelection(xScale: number, yScale: number, whichCorner?: Grid): void;

  /**
   * Method; Selects all items on the Stage.
   *
   * This method is equivalent to pressing `Control` + `A` (Windows) or `Command` + `A` (Macintosh) or selecting `Edit > Select All`.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example selects everything that is currently visible to the user:
   *
   * ```javascript
   * fl.getDocumentDOM().selectAll();
   * ```
   * @see
   *
   * - {@link Document.selectNone | Document.selectNone()}
   * - {@link Document.selection}
   */
  selectAll(): void;

  /**
   * Method; Deselects any selected items.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example deselects any items that are selected:
   *
   * ```javascript
   * fl.getDocumentDOM().selectNone();
   * ```
   * @see
   *
   * - {@link Document.selectAll | Document.selectAll()}
   * - {@link Document.selection}
   */
  selectNone(): void;

  /**
   * Method; Sets the preferences for {@link Document.align | Document.align()},
   * {@link Document.distribute | Document.distribute()}, {@link Document.match | Document.match()},
   * and {@link Document.space | Document.space()} to act on the document.
   *
   * This method is equivalent to enabling the To Stage button in the Align panel.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param toStage A boolean value that, if set to `true`, aligns objects to the Stage. If set to `false`, it does not.
   * @example
   *
   * The following example enables the To Stage button in the Align panel to align objects with the Stage:
   *
   * ```javascript
   * fl.getDocumentDOM().setAlignToDocument(true);
   * ```
   * @see {@link Document.getAlignToDocument | Document.getAlignToDocument()}
   */
  setAlignToDocument(toStage: boolean): void;

  /**
   * Method; Sets the blending mode for the selected objects.
   * @since Macromedia Flash Basic/Professional 8
   * @param mode The desired blending mode for the selected objects.
   * @example
   *
   * The following example sets the blending mode for the selected object to `"add"`.
   *
   * ```javascript
   * fl.getDocumentDOM().setBlendMode("add");
   * ```
   * @see
   *
   * - {@link Document.addFilter | Document.addFilter()}
   * - {@link Document.setFilterProperty | Document.setFilterProperty()}
   * - {@link SymbolInstance.blendMode}
   */
  setBlendMode(mode: BlendMode): void;

  /**
   * Method; Sets the fill settings for the Tools panel, Property inspector, and any selected shapes.
   *
   * This allows a script to set the fill settings before drawing the object, rather than drawing the object, selecting it,
   * and changing the fill settings.
   *
   * It also lets a script change the Tools panel and Property inspector fill settings.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param fill The {@link Fill} settings to be used.
   * @example
   *
   * The following example changes the color of the fill color swatch in the Tools panel, Property inspector,
   * and any selected shapes to white:
   *
   * ```javascript
   * var fill = fl.getDocumentDOM().getCustomFill();
   * fill.color = "#FFFFFF";
   * fill.style = "solid";
   * fl.getDocumentDOM().setCustomFill(fill);
   * ```
   * @see {@link Document.getCustomFill | Document.getCustomFill()}
   */
  setCustomFill(fill: Fill): void;

  /**
   * Method; Sets the stroke settings for the Tools panel, Property inspector, and any selected shapes.
   *
   * This allows a script to set the stroke settings before drawing the object, rather than drawing the object, selecting it,
   * and changing the stroke settings.
   *
   * It also lets a script change the Tools panel and Property inspector stroke settings.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param stroke A {@link Stroke | Stroke object}.
   * @example
   *
   * The following example changes the stroke thickness setting in the Tools panel, Property inspector, and any selected shapes:
   *
   * ```javascript
   * var stroke = fl.getDocumentDOM().getCustomStroke();
   * stroke.thickness += 2;
   * fl.getDocumentDOM().setCustomStroke(stroke);
   * ```
   * @see {@link Document.getCustomStroke | Document.getCustomStroke()}
   */
  setCustomStroke(stroke: Stroke): void;

  /**
   * Method; Sets the specified Element property on selected objects in the document.
   *
   * This method does nothing if there is no selection.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param property The name of the Element property to set.
   *
   * For a complete list of properties and values, see the Property summary table for the {@link Element | Element object}.
   *
   * You can't use this method to set values for read-only properties,
   * such as {@link Element.elementType}, {@link Element.top}, or {@link Element.left}.
   * @param value The value to set in the specified Element property.
   * @example
   *
   * The following example sets the width of all selected objects to 100 and the height to 50:
   *
   * ```javascript
   * fl.getDocumentDOM().setElementProperty("width", 100);
   * fl.getDocumentDOM().setElementProperty("height", 50);
   * ```
   */
  setElementProperty(property: string, value: any): void;

  /**
   * Method; Sets the specified textAttrs property of the selected text items to the specified value.
   *
   * For a list of property names and allowable values, see the {@link TextAttrs | TextAttrs object}.
   *
   * If the optional parameters are not passed, the method sets the style of the currently selected text range,
   * or the whole text field if no text is selected.
   *
   * If only *startIndex* is passed, the method sets that character's attributes.
   *
   * If *startIndex* and *endIndex* are passed,
   * the method sets the attributes on the characters starting from *startIndex* up to, but not including, *endIndex*.
   *
   * If paragraph styles are specified, all the paragraphs that fall within the range are affected.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param attrName The name of the TextAttrs property to change.
   * @param attrValue The value to which to set the TextAttrs property.
   *
   * For a list of property names and expected values, see the {@link TextAttrs | TextAttrs object}.
   * @param [startIndex] The index of the first character that is affected.
   * @param [endIndex] The index of the last character that is affected.
   * @returns A boolean value: `true` if at least one text attribute property is changed; `false` otherwise.
   * @example
   *
   * The following examples set the `"fillColor"`, `"italic"`, and `"bold"` text attributes for the selected text items:
   *
   * ```javascript
   * var doc = fl.getDocumentDOM();
   * var success = doc.setElementTextAttr("fillColor", "#00ff00");
   * var pass = doc.setElementTextAttr("italic", true, 10);
   * var ok = doc.setElementTextAttr("bold", true, 5, 15);
   * ```
   */
  setElementTextAttr(attrName: string, attrValue: any, startIndex?: number, endIndex?: number): boolean;

  /**
   * Method; Changes the selection and the tools panel to the specified fill color.
   *
   * For additional information on changing the fill color in the Tools panel and Property inspector,
   * see {@link Document.setCustomFill | Document.setCustomFill()}.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param color The color of the fill, in one of the following formats:
   *
   * - A string in the format "#RRGGBB" or "#RRGGBBAA"
   * - A hexadecimal number in the format 0xRRGGBB
   * - An integer that represents the decimal equivalent of a hexadecimal number
   *
   * If set to `null`, no fill color is set, which is the same as setting the Fill color swatch in the user interface to no fill.
   * @example
   *
   * The first three statements in the following example set the fill color using each of the different formats for specifying color.
   * The fourth statement sets the fill to no fill.
   *
   * ```javascript
   * fl.getDocumentDOM().setFillColor("#cc00cc");
   * fl.getDocumentDOM().setFillColor(0xcc00cc);
   * fl.getDocumentDOM().setFillColor(120000);
   * fl.getDocumentDOM().setFillColor(null);
   * ```
   */
  setFillColor(color: number | string | null): void;

  /**
   * Sets a specified filter property for the currently selected objects (assuming that the object supports the specified filter).
   * @since Macromedia Flash Basic/Professional 8
   * @param property The property to be set.
   * @param filterIndex An integer specifying the zero-based index of the filter in the Filters list.
   * @param value A number or string specifying the value to be set for the specified filter property.
   *
   * Acceptable values depend on the property and the filter being set.
   *
   * @example
   *
   * The following example sets the quality property to 2 for the second filter (index value of 1)
   * in the Filters list of the selected objects
   * and then sets the shadowColor property of the first filter in the Filters list on the selected objects:
   *
   * ```javascript
   * var doc = fl.getDocumentDOM();
   * doc.setFilterProperty("quality", 1, 2);
   * doc.setFilterProperty("shadowColor", 0, "#FF00FF");
   * ```
   * @see
   *
   * - {@link Document.addFilter | Document.addFilter()}
   * - {@link Document.getFilters | Document.getFilters()}
   * - {@link Document.setBlendMode | Document.setBlendMode()}
   * - {@link Document.setFilters | Document.setFilters()}
   * - {@link Filter | Filter object}
   */
  setFilterProperty(property: string, filterIndex: number, value: any): void;

  /**
   * Method; Applies filters to the selected objects.
   * Use this method after calling {@link Document.getFilters | Document.getFilters()} and making any desired changes to the filters.
   * @since Macromedia Flash Basic/Professional 8
   * @param filterArray The array of filters currently specified.
   * @example
   *
   * The following example gets the filters on the selected object and sets the blurX property for all Blur filters to 50:
   *
   * ```javascript
   * var myFilters = fl.getDocumentDOM().getFilters();
   * for (var i = 0; i < myFilters.length; i++) {
   *   if (myFilters[i].name == "blurFilter") {
   *     myFilters[i].blurX = 50;
   *   }
   * }
   * fl.getDocumentDOM().setFilters(myFilters);
   * ```
   * @see
   *
   * - {@link Document.addFilter | Document.addFilter()}
   * - {@link Document.getFilters | Document.getFilters()}
   * - {@link Document.setFilterProperty | Document.setFilterProperty()}
   * - {@link Filter | Filter object}
   */
  setFilters(filterArray: Filter[]): void;

  /**
   * Methods; Sets the opacity of the instance.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param opacity An integer between 0 (transparent) and 100 (completely saturated) that adjusts the transparency of the instance.
   * @example
   *
   * The following example sets the opacity of the tint to a value of 50:
   *
   * ```javascript
   * fl.getDocumentDOM().setInstanceAlpha(50);
   * ```
   */
  setInstanceAlpha(opacity: number): void;

  /**
   * Method; Sets the brightness for the instance.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param brightness An integer that specifies brightness as a value from -100 (black) to 100 (white).
   * @example
   *
   * The following example sets the brightness for the instance to a value of 50:
   *
   * ```javascript
   * fl.getDocumentDOM().setInstanceBrightness(50);
   * ```
   */
  setInstanceBrightness(brightness: number): void;

  /**
   * Method; Sets the tint for the instance.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param color The color of the tint, in one of the following formats:
   *
   * - A string in the format "#RRGGBB" or "#RRGGBBAA"
   * - A hexadecimal number in the format 0xRRGGBB
   * - An integer that represents the decimal equivalent of a hexadecimal number
   * @param strength An integer between 0 and 100 that specifies the opacity of the tint.
   * @example
   *
   * The following example sets the tint for the selected instance to red with an opacity value of 50:
   *
   * ```javascript
   * fl.getDocumentDOM().setInstanceTint(0xff0000, 50);
   * ```
   */
  setInstanceTint(color: number | string, strength: number): void;

  /**
   * Method; Sets the XML metadata for the specified document, overwriting any existing metadata.
   *
   * The XML passed as **`strMetadata`** is validated and may be rewritten before being stored.
   *
   * If it cannot be validated as legal XML or violates specific rules, then the XML metadata is not set and `false` is returned.
   * (If `false` is returned, there is no way to get more detailed error information.)
   *
   * ***Note:** Even if `true` is returned, the XML that is set may not be exactly the same string that you passed in.
   * To get the exact value to which the XML was set, use {@link Document.getMetadata | Document.getMetadata()}.*
   *
   * The format of the metadata is RDF that is compliant with the XMP specification.
   *
   * For more information about RDF and XMP, see the following sources:
   *
   * - The RDF Primer at <https://www.w3.org/TR/rdf-primer/>
   * - The RDF specification at <https://www.w3.org/TR/1999/REC-rdf-syntax-19990222/>
   * - The XMP home page at <https://www.adobe.com/products/xmp.html>
   * @since Macromedia Flash Basic/Professional 8
   * @param strMetadata A string containing the XML metadata to be associated with the document.
   * @returns `true` if successful; `false` otherwise.
   * @example
   *
   * The following examples show several different legal ways to represent the same data.
   * In all of these cases but the second one, if the data were sent to `Document.setMetadata()`,
   * it would not be rewritten (aside from removing line breaks).
   * In the first example, metadata is in tags, with different schemas placed in separate rdf:Description tags:
   *
   * ```xml
   * <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
   *     <rdf:Description rdf:about="" xmlns:dc="http://purl.org/dc/1.1">
   *         <dc:title>Simple title</dc:title>
   *         <dc:description>Simple description</dc:description>
   *     </rdf:Description>
   *     <rdf:Description rdf:about="" xmlns:xmp="http://ns.adobe.com/xap/1.0/">
   *         <xmp:CreateDate>2004-10-12T10:29-07:00</xmp:CreateDate>
   *         <xmp:CreatorTool>Flash Authoring WIN 8,0,0,215</xmp:CreatorTool>
   *     </rdf:Description>
   * </rdf:RDF>
   * ```
   *
   * In the second example, metadata is in tags, but with different schemas all in one rdf:Description tag.
   * This example also includes comments, which will be ignored and discarded by the
   * `Document.setMetadata()`:
   *
   * ```xml
   * <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
   *     <!-- This is before the first rdf:Description tag-->
   *     <rdf:Description rdf:about="" xmlns:dc="http://purl.org/dc/1.1/">
   *         <dc:title>Simple title</dc:title>
   *         <dc:description>Simple description</dc:description>
   *     </rdf:Description>
   *     <!-- This is between the two rdf:Description tags-->
   *     <rdf:Description rdf:about="" xmlns:xmp="http://ns.adobe.com/xap/1.0/">
   *         <xmp:CreateDate>2004-10-12T10:29-07:00</xmp:CreateDate>
   *         <xmp:CreatorTool>Flash Authoring WIN 8,0,0,215
   * </xmp:CreatorTool>
   *     </rdf:Description>
   *     <!-- This is after the second rdf:Description tag -->
   * </rdf:RDF>
   * ```
   *
   * In the third example, metadata is in attributes, and different schemas are all in one
   * rdf:Description tag:
   *
   * ```xml
   * <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns\#">
   *     <rdf:Description rdf:about="" xmlns:dc="http://purl.org/dc/1.1/" dc:title="Simple title"
   *         dc:description="Simple description" />
   *     <rdf:Description rdf:about="" xmlns:xmp="http://ns.adobe.com/xap/1.0/"
   *         xmp:CreateDate="2004-10-12T10:29-07:00" xmp:CreatorTool="Flash Authoring WIN 8,0,0,215" />
   * </rdf:RDF>
   * ```
   * @see {@link Document.getMetadata | Document.getMetadata()}
   */
  setMetadata(strMetadata: string): boolean;

  /**
   * Method; Sets the value of an XML settings string in a mobile FLA file.
   *
   * (Most mobile FLA files have an XML string that describes the settings within the document.)
   * @since Adobe Flash Professional CS3
   * @param xmlString The XML settings in a mobile FLA file.
   * @returns A value of `true` if the settings were successfully set; `false` otherwise.
   * @example
   *
   * The following example sets the XML settings string for a mobile FLA file.
   * Note that the example below represents a single line of code.
   *
   * ```javascript
   * fl.getDocumentDOM().setMobileSettings(
   *   '<? xml version="1.0" encoding="UTF-16" standalone="no"?>
   *   + '<mobileSettings>'
   *   + '<contentType id="standalonePlayer" name="Standalone Player"/>'
   *   + '<testDevices>'
   *   + '<testDevice id="1170" name="Generic Phone" selected="yes"/>'
   *   + '</testDevices>'
   *   + '<outputMsgFiltering info="no" trace="yes" warning="yes"/>'
   *   + '<testWindowState height="496" splitterClosed="No" splitterXPos="400" width="907"/>'
   *   + '</mobileSettings>'
   * );
   * ```
   * @see {@link Document.getMobileSettings | Document.getMobileSettings()}
   */
  setMobileSettings(xmlString: string): boolean;

  /**
   * Method; Specifies a value for a specified property of primitive Oval objects.
   * @since Adobe Flash Professional CS3
   * @param propertyName The property to be set.
   *
   * For acceptable values, see the {@link Oval | Oval object}.
   * @param value The value to be assigned to the property.
   *
   * Acceptable values vary depending on the property you specify in **`propertyName`**.
   * @see
   *
   * - {@link Oval | Oval object}
   * - {@link Shape.isOvalObject | Shape.isOvalObject}
   */
  setOvalObjectProperty(propertyName: string, value: any): void;

  /**
   * Method; Sets the version of the Flash Player targeted by the specified document.
   *
   * This is the same value as that set in the Publish Settings dialog box.
   * @since Adobe Flash Professional CS3
   * @param version The version of Flash Player targeted by the specified document.
   *
   * Acceptable values are "FlashLite", "FlashLite11", "FlashLite20" , "FlashLite30",
   * "1", "2", "3", "4", "5", "6", "7", "8", "9",
   * "FlashPlayer10", "FlashPlayer10.3", "FlashPlayer11.1", "FlashPlayer11.2", "FlashPlayer11.3", "FlashPlayer11.4", "FlashPlayer11.5",
   * "FlashPlayer11.6", "FlashPlayer11.7", "AdobeAIR1_1", "AdobeAIR2_5", "AdobeAIR3_6", "android3_6", and "PF13_6".
   * @returns `true` if the player version was successfully set; `false` otherwise.
   * @example
   *
   * The following example targets Flash Player 6 as the player version for the current document:
   *
   * ```javascript
   * fl.getDocumentDOM().setPlayerVersion("6");
   * ```
   * @see {@link Document.getPlayerVersion | Document.getPlayerVersion()}
   */
  setPlayerVersion(version: string): boolean;

  /**
   * Method; Enables or disables publishing of persistent data for an entire document.
   * @since Adobe Animate CC 2016
   * @param format The publishing format.
   *
   * ***Note**: `EMBED_SWF` is a special built-in publishing format for persistent data.
   * If set, the persistent data will be embedded in the SWF file every time a document is published.
   * The persistent data can then be accessed via ActionScript with the .metaData property.
   * This requires SWF version 19 (Flash Player 11.6) and above and is only for symbol instances onstage.
   * Other custom publishing formats may be specified for custom JSFL scripts if this method is called with the same format.*
   * @param publish A boolean that indicates whether to enable or disable publishing of persistent data for the specified format. None.
   * @usage Document.setPublishDocumentData(format, publish)
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
   * @see {@link Document.getPublishDocumentData | Document.getPublishDocumentData()}
   */
  setPublishDocumentData(format: string, publish: boolean): void;

  /**
   * Method; Specifies a value for a specified property of primitive Rectangle objects.
   * @since Adobe Flash Professional CS3
   * @param propertyName The property to be set.
   *
   * For acceptable values, see the {@link Rectangle | Rectangle object}.
   * @param value The value to be assigned to the property.
   *
   * Acceptable values vary depending on the property you specify in **`propertyName`**.
   * @see
   *
   * - {@link Rectangle | Rectangle object}
   * - {@link Shape.isRectangleObject | Shape.isRectangleObject}
   */
  setRectangleObjectProperty(propertyName: string, value: any): void;

  /**
   * Method; Moves and resizes the selection in a single operation.
   *
   * If you pass a value for **`contactSensitiveSelection`**,
   * it is valid only for this method and doesn't affect the Contact Sensitive selection mode for the document
   * (see {@link Flash.contactSensitiveSelection}).
   * @since Macromedia Flash MX Basic/Professional 2004. **`contactSensitiveSelection`** parameter added in Flash 8.
   * @param boundingRectangle The new location and size of the selection.
   * @param [contactSensitiveSelection] Whether the Contact Sensitive selection mode is enabled (`true`) or disabled (`false`)
   * during object selection.
   *
   * The default value is `false`.
   * @example
   *
   * The following example moves the current selection to 10, 20 and resizes it to 100, 200:
   *
   * ```javascript
   * var l = 10;
   * var t = 20;
   * fl.getDocumentDOM().setSelectionBounds({ left: l, top: t, right: 100 + l, bottom: 200 + t });
   * ```
   * @see
   *
   * - {@link Document.selection}
   * - {@link Document.setSelectionRect | Document.setSelectionRect()}
   */
  setSelectionBounds(boundingRectangle: RectangleBounds, contactSensitiveSelection?: boolean): void;

  /**
   * Method; Draws a rectangular selection marquee relative to the Stage, using the specified coordinates.
   *
   * This is unlike `Document.getSelectionRect()`, in which the rectangle is relative to the object being edited.
   *
   * This method is equivalent to dragging a rectangle with the Selection tool.
   *
   * An instance must be fully enclosed by the rectangle to be selected.
   *
   * If you pass a value for **`contactSensitiveSelection`**,
   * it is valid only for this method and doesn't affect the Contact Sensitive selection mode for the document
   * (see {@link Flash.contactSensitiveSelection}).
   *
   * ***Note:** Repeating `setSelectionRect()` using the History panel or menu item repeats the step previous to the `setSelectionRect()` operation.*
   * @since Macromedia Flash MX Basic/Professional 2004. **`contactSensitiveSelection`** parameter added in Flash 8.
   * @param rect A rectangle to set as selected. For information on the format of *rect*, see {@link Document.addNewRectangle | Document.addNewRectangle()}.
   * @param [replaceCurrentSelection] Specifies whether the method replaces the current selection (true) or adds to the current selection (false). The default value is true.
   * @param [contactSensitiveSelection] Specifies whether the Contact Sensitive selection mode is enabled (true) or disabled (false) during object selection. The default value is false.
   * @usage Document.setSelectionRect(rect [, replaceCurrentSelection [, contactSensitiveSelection]])
   * @example
   *
   * In the following example, the second selection replaces the first one:
   *
   * ```javascript
   * fl.getDocumentDOM().setSelectionRect({ left: 1, top: 1, right: 200, bottom: 200 });
   * fl.getDocumentDOM().setSelectionRect({ left: 364.0, top: 203.0, right: 508.0, bottom: 434.0 }, true);
   * ```
   *
   * In the following example, the second selection is added to the first selection. This is the same as the manual operation of holding down Shift and selecting a second object.
   *
   * ```javascript
   * fl.getDocumentDOM().setSelectionRect({ left: 1, top: 1, right: 200, bottom: 200 });
   * fl.getDocumentDOM().setSelectionRect({ left: 364.0, top: 203.0, right: 508.0, bottom: 434.0 }, false);
   * ```
   * @see
   *
   * - {@link Document.getSelectionRect | Document.getSelectionRect()}
   * - {@link Document.selection}
   * - {@link Document.setSelectionBounds | Document.setSelectionBounds()}
   */
  setSelectionRect(rect: RectangleBounds, replaceCurrentSelection?: boolean, contactSensitiveSelection?: boolean): void;

  /**
   * Specifies the vanishing point for viewing 3D objects.
   * @since Adobe Flash Professional CS4
   * @param point A point that specifies the *x* and *y* coordinates of the location at which to set the vanishing point for viewing 3D objects.
   * @example
   *
   * The following example sets the Stage vanishing point:
   *
   * ```javascript
   * fl.getDocumentDOM().setStageVanishingPoint({ x: 45, y: 45 });
   * ```
   */
  setStageVanishingPoint(point: Point): void;

  /**
   * Specifies the perspective angle for viewing 3D objects.
   * @todo Check angle param value range.
   * @since Adobe Flash Professional CS4
   * @param angle A floating point value between 0.0 and 179.0.
   * @example
   *
   * The following example sets the Stage perspective angle to 70 degrees:
   *
   * ```javascript
   * fl.getDocumentDOM().setStageViewAngle(70);
   * ```
   */
  setStageViewAngle(angle: number): void;

  /**
   * Method; Sets the color, width, and style of the selected stroke.
   * For information on changing the stroke in the Tools panel and Property inspector, see {@link Document.setCustomStroke | Document.setCustomStroke()}.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param color The color of the stroke, in one of the following formats:
   *
   * - A string in the format "#RRGGBB" or "#RRGGBBAA"
   *
   * - A hexadecimal number in the format 0xRRGGBB
   *
   * - An integer that represents the decimal equivalent of a hexadecimal number
   * @param size A floating-point value that specifies the new stroke size for the selection.
   * @param strokeType A string that specifies the new type of stroke for the selection. Acceptable values are "hairline", "solid", "dashed", "dotted", "ragged", "stipple", and "hatched".
   * @example
   *
   * The following example sets the color of the stroke to red, the size to 3.25, and the type to dashed:
   *
   * ```javascript
   * fl.getDocumentDOM().setStroke("#ff0000", 3.25, "dashed");
   * ```
   */
  setStroke(color: number | string, size: number, strokeType: "hairline" | "solid" | "dashed" | "dotted" | "ragged" | "stipple" | "hatched"): void;

  /**
   * Method; Changes the stroke color of the selection to the specified color.
   * For information on changing the stroke in the Tools panel and Property inspector, see {@link Document.setCustomStroke | Document.setCustomStroke()}.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param color The color of the stroke, in one of the following formats:
   *
   * - A string in the format "#RRGGBB" or "#RRGGBBAA"
   *
   * - A hexadecimal number in the format 0xRRGGBB
   *
   * - An integer that represents the decimal equivalent of a hexadecimal number
   * @example
   *
   * The three statements in the following example set the stroke color using each of the different formats for specifying color:
   *
   * ```javascript
   * fl.getDocumentDOM().setStrokeColor("#cc00cc");
   * fl.getDocumentDOM().setStrokeColor(0xcc00cc);
   * fl.getDocumentDOM().setStrokeColor(120000);
   * ```
   */
  setStrokeColor(color: number | string): void;

  /**
   * Method; Changes the stroke size of the selection to the specified size.
   * For information on changing the stroke in the Tools panel and Property inspector, see {@link Document.setCustomStroke | Document.setCustomStroke()}.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param size A floating-point value from 0.25 to 250 that specifies the stroke size. The method ignores precision greater than two decimal places.
   * @usage Document.setStrokeSize(size)
   * @example
   *
   * The following example changes the stroke size for the selection to 5:
   *
   * ```javascript
   * fl.getDocumentDOM().setStrokeSize(5);
   * ```
   */
  setStrokeSize(size: number): void;

  /**
   * Method; Changes the stroke style of the selection to the specified style.
   * For information on changing the stroke in the Tools panel and Property inspector, see {@link Document.setCustomStroke | Document.setCustomStroke()}.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param strokeType The stroke style for the current selection. Acceptable values are "hairline", "solid", "dashed", "dotted", "ragged", "stipple", and "hatched".
   * @example
   *
   * The following example changes the stroke style for the selection to "dashed":
   *
   * ```javascript
   * fl.getDocumentDOM().setStrokeStyle("dashed");
   * ```
   */
  setStrokeStyle(strokeType: "hairline" | "solid" | "dashed" | "dotted" | "ragged" | "stipple" | "hatched"): void;

  /**
   * Method; Replace the tagged swatch with the given index to the given new swatch object.
   * @since Adobe Animate 2020
   * @param oldSwatchIndex Specifies the index of the tagged swatch to update.
   * @param newSwatch Swatch object to replace with.
   * @param [palette] An optional integer that specifies the index of the tagged swatch palette, default value is 0.
   * @usage Document.setTaggedSwatchAtIndex(oldSwatchIndex:int, newSwatch:Object [,palette:int ]).
   * @example
   *
   * The following example replace the tagged swatch with the given index 0 to the given new swatch object swatch1.
   *
   * ```javascript
   * var document = fl.getDocumentDOM();
   * var swatch1 = new Object();
   * var fill = document.getCustomFill();
   * fill.color = "#FF00FF";
   * fill.style = "solid";
   * swatch1.fill = fill;
   * swatch1.name = "solid_swatch";
   * document.setTaggedSwatchAtIndex(0, swatch1);
   * ```
   * @see {@link Document.setTaggedSwatchByName | Document.setTaggedSwatchByName()}
   */
  setTaggedSwatchAtIndex(oldSwatchIndex: number, newSwatch: Swatch, palette?: number): void;

  /**
   * Method; Replace the tagged swatch with the given name to the given new swatch object.
   * @since Adobe Animate 2020
   * @param oldSwatchName A string that indicates the name of the tagged swatch to update.
   * @param newSwatch New swatch Object.
   * @usage Document.setTaggedSwatchByName(oldSwatchName:name, newSwatch:object).
   * @example
   *
   * The following example replace the tagged swatch with the given name "Oldswatch" to the given new swatch object swatch1.
   *
   * ```javascript
   * var document = fl.getDocumentDOM();
   * var swatch1 = new Object();
   * var fill = document.getCustomFill();
   * fill.color = "#FF00FF";
   * fill.style = "solid";
   * swatch1.fill = fill;
   * swatch1.name = "solid_swatch";
   * document.setTaggedSwatchByName("Oldswatch", swatch1);
   * ```
   * @see {@link Document.setTaggedSwatchAtIndex | Document.setTaggedSwatchAtIndex()}
   */
  setTaggedSwatchByName(oldSwatchName: string, newSwatch: Swatch): void;

  /**
   * Method; Changes the bounding rectangle for the selected text item to the specified size.
   * This method causes the text to reflow inside the new rectangle; the text item is not scaled or transformed.
   * The values passed in **`boundingRectangle`** are used as follows:
   *
   * - If the text is horizontal and static, the method takes into account only the width value passed in **`boundingRectangle`**; the height is automatically computed to fit all the text.
   * - If the text is vertical (and therefore static), the method takes into account only the height value passed in **`boundingRectangle`**; the width is automatically computed to fit all the text.
   * - If the text is dynamic or input, the method takes into account both the width and height values passed in **`boundingRectangle`**, and the resulting rectangle might be larger than needed to fit all the text.
   * However, if the parameters specify a rectangle size that is too small to fit all the text, the method takes into account only the width value passed in **`boundingRectangle`** (the height is automatically computed to fit all the text).
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param boundingRectangle A rectangle that specifies the new size within which the text item should flow. For information on the format of *boundingRectangle*, see {@link Document.addNewRectangle | Document.addNewRectangle()}.
   * @returns true if the size of at least one text field is changed; false otherwise.
   * @example
   *
   * The following example changes the size of the bounding text rectangle to the specified dimensions:
   *
   * ```javascript
   * fl.getDocumentDOM().setTextRectangle({ left: 0, top: 0, right: 50, bottom: 200 });
   * ```
   */
  setTextRectangle(boundingRectangle: RectangleBounds): boolean;

  /**
   * Method; Sets the text selection of the currently selected text field to the values specified by the **`startIndex`** and **`endIndex`** values.
   * Text editing is activated, if it isn't already.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param startIndex The position of the first character to select. The first character position is 0 (zero).
   * @param endIndex The end position of the selection up to, but not including, **`endIndex`**. The first character position is 0 (zero).
   * @returns true if the method can successfully set the text selection; false otherwise.
   * @example
   *
   * The following example selects the text from the 6th character through the 25th character:
   *
   * ```javascript
   * fl.document.setTextSelection(5, 25);
   * ```
   */
  setTextSelection(startIndex: number, endIndex: number): boolean;

  /**
   * Method; Inserts a string of text.
   * If the optional parameters are not passed, the existing text selection is replaced; if the Text object isn't currently being edited, the whole text string is replaced.
   * If only **`startIndex`** is passed, the string passed is inserted at this position.
   * If **`startIndex`** and *endIndex* are passed, the string passed replaces the segment of text starting from **`startIndex`** up to, but not including, **`endIndex`**.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param text A string of the characters to insert in the text field.
   * @param [startIndex] An optional integer that specifies the first character to replace. The first character position is 0 (zero).
   * @param [endIndex] An integer that specifies the last character to replace.
   * @returns A boolean value: true if the text of at least one text string is set; false otherwise.
   * @usage Document.setTextString(text [, startIndex [, endIndex]])
   * @example
   *
   * The following example replaces the current text selection with "Hello World":
   *
   * ```javascript
   * var success = fl.getDocumentDOM().setTextString("Hello World!");
   * ```
   *
   * The following example inserts "hello" at position 6 of the current text selection:
   *
   * ```javascript
   * var pass = fl.getDocumentDOM().setTextString("hello", 6);
   * ```
   *
   * The following example inserts "Howdy" starting at position 2 and up to, but not including, position 7 of the current text selection:
   *
   * ```javascript
   * var ok = fl.getDocumentDOM().setTextString("Howdy", 2, 7);
   * ```
   * @see {@link Document.getTextString | Document.getTextString()}
   */
  setTextString(text: string, startIndex?: number, endIndex?: number): boolean;

  /**
   * Method; Sets the position of the current selection's transformation point.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param transformationPoint A point (for example, {x: 10, y: 20}, where x and y are floating-point numbers) that specifies values for the transformation point of each of the following elements:
   *
   * - Shapes: **`transformationPoint`** is set relative to the document (0, 0 is the upper left corner of the Stage).
   * - Symbols: **`transformationPoint`** is set relative to the symbol's registration point (0, 0 is located at the registration point).
   * - Text: **`transformationPoint`** is set relative to the text field (0, 0 is the upper left corner of the text field).
   * - Bitmaps/videos: **`transformationPoint`** is set relative to the bitmap/video (0, 0 is the upper left corner of the bitmap or video).
   * - Drawing objects, primitive ovals and rectangles, and groups: **`transformationPoint`** is set relative to the document (0, 0 is the upper left corner of the Stage).
   * To set **`transformationPoint`** relative to the center point of the object, primitive, or group, use {@link Element.setTransformationPoint | Element.setTransformationPoint()}.
   * @example
   *
   * The following example sets the transformation point of the current selection to 100, 200:
   *
   * ```javascript
   * fl.getDocumentDOM().setTransformationPoint({ x: 100, y: 200 });
   * ```
   * @see
   *
   * - {@link Document.getTransformationPoint | Document.getTransformationPoint()}
   * - {@link Element.setTransformationPoint | Element.setTransformationPoint()}
   */
  setTransformationPoint(transformationPoint: Point): void;

  /**
   * Method; Spaces the objects in the selection evenly.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param direction A string that specifies the direction in which to space the objects in the selection. Acceptable values are "horizontal" or "vertical".
   * @param [alignToPage] A boolean value that, when set to true, spaces the objects to the document bounds. Otherwise, the method uses the bounds of the selected objects. The default is false. This parameter is optional.
   *
   * @see
   *
   *  - {@link Document.getAlignToDocument | Document.getAlignToDocument}
   *  - {@link Document.setAlignToDocument | Document.setAlignToDocument}
   */
  space(direction: "horizontal" | "vertical", alignToPage?: boolean): void;

  /**
   * Method; Swaps the current selection with the specified one.
   * The selection must contain a `graphic`, `button`, `movie clip`, `video`, or `bitmap`.
   * This method displays an error message if no object is selected or the given object could not be found.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param name The name of the library item to use.
   * @example
   *
   * The following example swaps the current selection with Symbol 1 from the library:
   *
   * ```javascript
   * fl.getDocumentDOM().swapElement("Symbol 1");
   * ```
   */
  swapElement(name: string): void;

  /**
   * Method; Swaps the Stroke and Fill colors.
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example swaps the Stroke and Fill colors in the current document:
   *
   * ```javascript
   * fl.getDocumentDOM().swapStrokeAndFill();
   * ```
   */
  swapStrokeAndFill(): void;

  /**
   * Method; Executes a Test Movie operation on the document.
   * @since Macromedia Flash MX Basic/Professional 2004. **`abortIfErrorsExist`** parameter was added in Flash Professional CS5.
   * @param [abortIfErrorsExist] The default value is false. If set to true, the test movie session will not start and the .swf window will not open if there are compiler errors. Compiler warnings will not abort the command.
   * @example
   *
   * The following example tests the movie for the current document, but aborts the test movie if compiler errors exist:
   *
   * ```javascript
   * fl.getDocumentDOM().testMovie(true);
   * ```
   * @see
   *
   * - {@link Document.canTestMovie | Document.canTestMovie()}
   * - {@link Document.testScene | Document.testScene()}
   */
  testMovie(abortIfErrorsExist?: boolean): void;

  /**
   * Method; Executes a Test Scene operation on the current scene of the document.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example tests the current scene in the document:
   *
   * ```javascript
   * fl.getDocumentDOM().testScene();
   * ```
   * @see
   *
   * - {@link Document.canTestScene | Document.canTestScene()}
   * - {@link Document.testMovie | Document.testMovie()}
   */
  testScene(): void;

  /**
   * Method; Performs a trace bitmap on the current selection.
   * This method is equivalent to selecting `Modify > Bitmap > Trace Bitmap`.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param threshold An integer that controls the number of colors in your traced bitmap. Acceptable values are integers between 0 and 500.\
   * @param minimumArea An integer that specifies the radius measured in pixels. Acceptable values are integers between 1 and 1000.
   * @param curveFit Specifies how smoothly outlines are drawn. Acceptable values are "pixels", "very tight", "tight", "normal", "smooth", and "very smooth".
   * @param cornerThreshold A string that is similar to *curveFit*, but it pertains to the corners of the bitmap image. Acceptable values are "many corners", "normal", and "few corners".
   * @usage Document.traceBitmap(threshold, minimumArea, curveFit, cornerThreshold)
   * @example
   *
   * The following example traces the selected bitmap, using the specified parameters:
   *
   * ```javascript
   * fl.getDocumentDOM().traceBitmap(0, 500, "normal", "normal");
   * ```
   */
  traceBitmap(threshold: number, minimumArea: number, curveFit: "pixels" | "very tight" | "tight" | "normal" | "smooth" | "very smooth", cornerThreshold: "many corners" | "normal" | "few corners"): void;

  /**
   * Method; Performs a general transformation on the current selection by applying the matrix specified in the arguments.
   * For more information, see the {@link Element.matrix} property.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param a A floating-point number that specifies the (0, 0) element of the transformation matrix.
   * @param b A floating-point number that specifies the (0, 1) element of the transformation matrix.
   * @param c A floating-point number that specifies the (1, 0) element of the transformation matrix.
   * @param d A floating-point number that specifies the (1, 1) element of the transformation matrix.
   * @example
   *
   * The following example stretches the selection by a factor of 2 in the x direction:
   *
   * ```javascript
   * fl.getDocumentDOM().transformSelection(2.0, 0.0, 0.0, 1.0);
   * ```
   */
  transformSelection(a: number, b: number, c: number, d: number): void;

  /**
   * Method: Sets the XYZ position around which the selection is translated or rotated.
   * This method is available only for movie clips.
   * @since Adobe Flash Professional CS4
   * @param xyzCoordinate An XYZ coordinate that specifies the center point for 3D rotation or translation.
   * @example
   *
   * The following example specifies the XYZ axes for 3D translation:
   *
   * ```javascript
   * fl.getDocumentDOM().translate3DCenter({ x: 180, y: 18, z: -30 });
   * ```
   */
  translate3DCenter(xyzCoordinate: Point3D): void;

  /**
   * Method: Applies a 3D translation to the selection.
   * This method is available only for movie clips.
   * @since Adobe Flash Professional CS4
   * @param xyzCoordinate An XYZ coordinate that specifies the axes for 3D translation.
   * @param globalTransform Specifies whether the transformation mode should be global (true) or local (false).
   * @example
   *
   * In the following example, the selection is first translated relative to the stage (globally) and then relative to itself (locally).
   *
   * ```javascript
   * var myDocument = fl.getDocumentDOM();
   * myDocument.translate3DSelection({ x: 52.0, y: 0, z: 0 }, true);
   * myDocument.translate3DSelection({ x: 52.0, y: 0, z: -55.2 }, false);
   * ```
   * @see {@link Document.translate3DCenter | Document.translate3DCenter()}
   */
  translate3DSelection(xyzCoordinate: Point3D, globalTransform: boolean): void;

  /**
   * Method; Ungroups the current selection.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example ungroups the elements in the current selection:
   *
   * ```javascript
   * fl.getDocumentDOM().unGroup();
   * ```
   * @see {@link Document.group | Document.group()}
   */
  unGroup(): void;

  /**
   * Method; Combines all selected shapes into a drawing object.
   * If no objects are selected, calling this method results in an error and the script breaks at that point.
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example combines all selected shapes into a drawing object:
   *
   * ```javascript
   * fl.getDocumentDOM().union();
   * ```
   * @see
   *
   * - {@link Document.crop | Document.crop()}
   * - {@link Document.deleteEnvelope | Document.deleteEnvelope()}
   * - {@link Document.intersect | Document.intersect()}
   * - {@link Document.punch | Document.punch()}
   * - {@link Shape.isDrawingObject}
   */
  union(): void;

  /**
   * Method; Unlocks all locked elements on the currently selected frame.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example unlocks all locked objects on the current frame:
   *
   * ```javascript
   * fl.getDocumentDOM().unlockAllElements();
   * ```
   * @see {@link Element.locked}
   */
  unlockAllElements(): void;

  /**
   * Method; Posts an XMLUI dialog box. See {@link Flash.xmlui}.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param fileURI A string, expressed as a file:/// URI, that specifies the path to the XML file defining the controls in the panel. The full path is required.
   * @example
   *
   * The following example loads the Test.xml file and displays each property contained within it:
   *
   * ```javascript
   * var obj = fl.getDocumentDOM().xmlPanel(fl.configURI + "Commands/Test.xml");
   * for (var prop in obj) {
   *   fl.trace("property " + prop + " = " + obj[prop]);
   * }
   * ```
   */
  xmlPanel(fileURI: string): XMLUIPropertyControls;

  /**
   * Property; A string that is equivalent to the Name field in the Accessibility panel.
   * Screen readers identify objects by reading the name aloud.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the accessibility name of the document to "Main Movie":
   *
   * ```javascript
   * fl.getDocumentDOM().accName = "Main Movie";
   * ```
   *
   * The following example gets the accessibility name of the document:
   *
   * ```javascript
   * fl.trace(fl.getDocumentDOM().accName);
   * ```
   */
  accName: string;

  /**
   * Property; A boolean value that describes whether the instances placed on the Stage are automatically added to user-defined timeline classes.
   * The default value is true.
   * @since Adobe Flash Professional CS3
   * @example
   *
   * The following example specifies that instances placed on the Stage in the current document must be manually added to user-defined timeline classes.
   *
   * ```javascript
   * fl.getDocumentDOM().as3AutoDeclare = false;
   * ```
   */
  as3AutoDeclare: boolean;

  /**
   * Property; A string that describes the ActionScript 3.0 "dialect" being used in the specified document.
   * The default value is "AS3".
   * If you wish to allow prototype classes, as permitted in earlier ECMAScript specifications, set this value to "ES".
   * @since Adobe Flash Professional CS3
   * @example
   *
   * The following example specifies that the dialect being used in the current document is ECMAScript:
   *
   * ```javascript
   * fl.getDocumentDOM().as3Dialect = "ES";
   * ```
   * @see {@link Document.asVersion | Document.asVersion}
   */
  as3Dialect: string;

  /**
   * Property; An integer that specifies in which frame to export ActionScript 3.0 classes.
   * By default, classes are exported in Frame 1.
   * @since Adobe Flash Professional CS3
   * @example
   *
   * The following example changes the frame in which classes are exported from 1 (the default) to 5.
   *
   * ```javascript
   * var myDocument = fl.getDocumentDOM();
   * fl.outputPanel.trace("'Export classes in frame:' value before modification is " + myDocument.as3ExportFrame);
   * myDocument.as3ExportFrame = 5;
   * fl.outputPanel.trace("'Export classes in frame:' value after modification is " + myDocument.as3ExportFrame);
   * ```
   */
  as3ExportFrame: number;

  /**
   * Property; Specifies whether the ActionScript 3.0 compiler should compile with the Strict Mode option turned on (true) or off (false).
   * Strict Mode causes warnings to be reported as errors, which means that compilation will not succeed if those errors exist.
   * The default value is true.
   * @since Adobe Flash Professional CS3
   * @example
   *
   * The following example turns off the Strict Mode compiler option.
   *
   * ```javascript
   * var myDocument = fl.getDocumentDOM();
   * fl.outputPanel.trace("Strict Mode value before modification is " + myDocument.as3StrictMode);
   * myDocument.as3StrictMode = false;
   * fl.outputPanel.trace("Strict Mode value after modification is " + myDocument.as3StrictMode);
   * ```
   * @see {@link Document.as3WarningsMode}
   */
  as3StrictMode: boolean;

  /**
   * Property; Specifies whether the ActionScript 3.0 compiler should compile with the Warnings Mode option turned on (true) or off (false).
   * Warnings Mode causes extra warnings to be reported that are useful for discovering incompatibilities when updating ActionScript 2.0 code to ActionScript 3.0.
   * The default value is true.
   * @since Adobe Flash Professional CS3
   * @example
   *
   * The following example turns off the Warnings Mode compiler option.
   *
   * ```javascript
   * var myDocument = fl.getDocumentDOM();
   * fl.outputPanel.trace("Warnings Mode value before modification is " + myDocument.as3WarningsMode);
   * myDocument.as3WarningsMode = false;
   * fl.outputPanel.trace("Warnings Mode value after modification is " + myDocument.as3WarningsMode);
   * ```
   * @see {@link Document.as3StrictMode}
   */
  as3WarningsMode: boolean;

  /**
   * Property; Specifies which version of ActionScript is being used in the specified document.
   * Acceptable values are 1, 2, and 3.
   * To determine the targeted player version for the specified document, use {@link Document.getPlayerVersion | Document.getPlayerVersion()}; this method returns a string, so it can be used by Flash® Lite™ players.
   * @since Adobe Flash Professional CS3
   * @example
   *
   * The following example sets the version of ActionScript in the current document to ActionScript 2.0 if it is currently set as ActionScript 1.0.
   *
   * ```javascript
   * if (fl.getDocumentDOM().asVersion == 1) {
   *   fl.getDocumentDOM().asVersion = 2;
   * }
   * ```
   * @see
   *
   * - {@link Document.as3Dialect}
   * - {@link Document.getPlayerVersion | Document.getPlayerVersion()}
   */
  asVersion: 1 | 2 | 3;

  /**
   * Property; A boolean value that is equivalent to the Auto Label check box in the Accessibility panel.
   * You can use this property to tell Flash to automatically label objects on the Stage with the text associated with them.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example gets the value of the autoLabel property and displays the result in the Output panel:
   *
   * ```javascript
   * var isAutoLabel = fl.getDocumentDOM().autoLabel;
   * fl.trace(isAutoLabel);
   * ```
   *
   * The following example sets the autoLabel property to true, telling Flash to automatically label objects on the Stage:
   *
   * ```javascript
   * fl.getDocumentDOM().autoLabel = true;
   * ```
   */
  autoLabel: boolean;

  /**
   * Property; The color of the background, in one of the following formats:
   *
   * - A string in the format "#RRGGBB" or "#RRGGBBAA"
   * - A hexadecimal number in the format 0xRRGGBB
   * - An integer that represents the decimal equivalent of a hexadecimal number
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the background color to black:
   *
   * ```javascript
   * fl.getDocumentDOM().backgroundColor = "#000000";
   * ```
   */
  backgroundColor: number | string;

  /**
   * Property; Specifies the name of the active publish profile for the specified document.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example adds a new publish profile with the default name and then displays the name of the profile in the Output panel:
   *
   * ```javascript
   * fl.getDocumentDOM().addNewPublishProfile();
   * fl.outputPanel.trace(fl.getDocumentDOM().currentPublishProfile);
   * ```
   *
   * The following example changes the selected publish profile to "Default":
   *
   * ```javascript
   * fl.getDocumentDOM().currentPublishProfile = "Default";
   * ```
   */
  currentPublishProfile: string;

  /**
   * Property; An integer that specifies the index of the active timeline.
   * You can set the active timeline by changing the value of this property; the effect is almost equivalent to calling {@link Document.editScene | Document.editScene()}.
   * The only difference is that you don't get an error message if the index of the timeline is not valid; the property is simply not set, which causes silent failure.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example displays the index of the current timeline:
   *
   * ```javascript
   * var myCurrentTL = fl.getDocumentDOM().currentTimeline;
   * fl.trace("The index of the current timeline is: " + myCurrentTL);
   * ```
   *
   * The following example changes the active timeline from the main timeline to a scene named "myScene":
   *
   * ```javascript
   * var i = 0;
   * var curTimelines = fl.getDocumentDOM().timelines;
   * while (i < fl.getDocumentDOM().timelines.length) {
   *   if (curTimelines[i].name == "myScene") {
   *     fl.getDocumentDOM().currentTimeline = i;
   *   }
   *   ++i;
   * }
   * ```
   * @see {@link Document.getTimeline | Document.getTimeline()}
   */
  currentTimeline: number;

  /**
   * Property; A string that is equivalent to the Description field in the Accessibility panel.
   * The description is read by the screen reader.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the description of the document:
   *
   * ```javascript
   * fl.getDocumentDOM().description = "This is the main movie";
   * ```
   *
   * The following example gets the description of the document and displays it in the Output panel:
   *
   * ```javascript
   * fl.trace(fl.getDocumentDOM().description);
   * ```
   */
  description: string;

  /**
   * Property; Specifies the top-level ActionScript 3.0 class associated with the document.
   * If the document isn't configured to use ActionScript 3.0, this property is ignored.
   * @since Adobe Flash Professional CS3
   * @example
   *
   * The following example specifies that the ActionScript 3.0 class associated with the document is com.mycompany.ManagerClass, which is defined in com/mycompany/ManagerClass.as:
   *
   * ```javascript
   * var myDocument = fl.getDocumentDOM();
   * // set the property
   * myDocument.docClass = "com.mycompany.ManagerClass";
   * // get the property
   * fl.outputPanel.trace("document.docClass has been set to " + myDocument.docClass);
   * ```
   * @see {@link Item.linkageBaseClass | Item.linkageBaseClass}
   */
  docClass: string;

  /**
   * Property; A string that contains a list of items in the document's ActionScript 3.0 External library path, which specifies the location of SWC files used as runtime shared libraries.
   * Items in the string are delimited by semi-colons.
   * In the authoring tool, the items are specified by choosing `File > Publish Settings` and then choosing `ActionScript 3.0 Script Settings` on the Flash tab.
   * @since Adobe Flash Professional CS4
   * @example
   *
   * The following example sets the document's External library path to "." and "../mySWCLibrary":
   *
   * ```javascript
   * var myDocument = fl.getDocumentDOM();
   * myDocument.externalLibraryPath = ".;../mySWCLibrary";
   * fl.trace(myDocument.externalLibraryPath);
   * ```
   * @see
   *
   * - {@link Document.libraryPath | Document.libraryPath}
   * - {@link Document.sourcePath | Document.sourcePath}
   * - {@link Flash.externalLibraryPath | Flash.externalLibraryPath}.
   */
  externalLibraryPath: string;

  /**
   * Property; Specifies whether the children of the specified object are accessible.
   * This is equivalent to the inverse logic of the Make Child Objects Accessible setting in the Accessibility panel.
   * That is, if forceSimple is true, it is the same as the Make Child Object Accessible option being unchecked.
   * If forceSimple is false, it is the same as the Make Child Object Accessible option being checked.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the areChildrenAccessible variable to the value of the forceSimple property.
   * A value of false means the children are accessible.
   *
   * ```javascript
   * var areChildrenAccessible = fl.getDocumentDOM().forceSimple;
   * ```
   *
   * The following example sets the forceSimple property to allow the children of the document to be accessible:
   *
   * ```javascript
   * fl.getDocumentDOM().forceSimple = false;
   * ```
   */
  forceSimple: boolean;

  /**
   * Property; A float value that specifies the number of frames displayed per second when the SWF file plays; the default is 12.
   * Setting this property is the same as setting the default frame rate in the Document Properties dialog box (`Modify > Document`) in the FLA file.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the frame rate to 25.5 frames per second:
   *
   * ```javascript
   * fl.getDocumentDOM().frameRate = 25.5;
   * ```
   */
  frameRate: number;

  /**
   * Property; An integer that specifies the height of the document (Stage) in pixels.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the height of the Stage to 400 pixels:
   *
   * ```javascript
   * fl.getDocumentDOM().height = 400;
   * ```
   * @see {@link Document.width | Document.width}
   */
  height: number;

  /**
   * Read-only property; A unique integer (assigned automatically) that identifies a document during a Flash session.
   * Use this property in conjunction with {@link Flash.findDocumentDOM | Flash.findDocumentDOM()} to specify a particular document for an action.
   * @since Adobe Flash Professional CS3
   * @example
   *
   * The following example displays the document ID for the current document:
   *
   * ```javascript
   * fl.trace("Current doc's internal ID is: " + fl.getDocumentDOM().id);
   * ```
   * @see {@link Flash.findDocumentDOM | Flash.findDocumentDOM()}.
   */
  readonly id: number;

  /**
   * Read-only property; The {@link Library | Library object} for a document.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example gets the library for the currently focused document:
   *
   * ```javascript
   * var myCurrentLib = fl.getDocumentDOM().library;
   * ```
   *
   * Assuming the currently focused document is not `fl.documents[1]`, the following example gets the library for a nonfocused library or for a library you opened using File >Open as external library:
   *
   * ```javascript
   * var externalLib = fl.documents[1].library;
   * ```
   */
  readonly library: Library;

  /**
   * Property; A string that contains a list of items in the document's ActionScript 3.0 Library path, which specifies the location of SWC files or folders containing SWC files.
   * Items in the string are delimited by semi-colons.
   * In the authoring tool, the items are specified by choosing `File > Publish Settings` and then choosing `ActionScript 3.0 Script Settings` on the Flash tab.
   * @since Adobe Flash Professional CS4
   * @example
   *
   * The following adds the ../Files folder to the document's Library path and then displays the path Library path in the Output panel:
   *
   * ```javascript
   * var myDoc = fl.getDocumentDOM();
   * fl.trace(myDoc.libraryPath);
   * myDoc.libraryPath = "../Files;" + myDoc.libraryPath;
   * fl.trace(myDoc.libraryPath);
   * ```
   * @see
   *
   * - {@link Document.externalLibraryPath}
   * - {@link Document.sourcePath}
   * - {@link Flash.libraryPath}.
   */
  libraryPath: string;

  /**
   * Property; Specifies whether Live Preview is enabled.
   * If set to true, components appear on the Stage as they will appear in the published Flash content, including their approximate size.
   * If set to false, components appear only as outlines.
   * The default value is true.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets Live Preview to false:
   *
   * ```javascript
   * fl.getDocumentDOM().livePreview = false;
   * ```
   */
  livePreview: boolean;

  /**
   * Read-only property; A string that represents the name of a document (FLA file).
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the variable fileName to the filename of the first document in the documents array:
   *
   * ```javascript
   * var fileName = flash.documents[0].name;
   * ```
   *
   * The following example displays the names of all the open documents in the Output panel:
   *
   * ```javascript
   * var openDocs = fl.documents;
   * for (var i = 0; i < openDocs.length; i++) {
   *   fl.trace(i + " " + openDocs[i].name + "\n");
   * }
   * ```
   */
  readonly name: string;

  /**
   * Read-only property; A string that represents the path of the document in a platform-specific format.
   * If the document has never been saved, this property is undefined.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example displays the path of the first document in the documents array in the Output panel.
   * You must save the document before running this script. In the example, the file is named `test.fla` and is saved in the `My Documents` folder on a Windows computer.
   *
   * ```javascript
   * var filePath = flash.documents[0].path;
   * fl.trace(filePath);
   * // displays
   * // C:\Documents and Settings\<user name>\My Documents\test.fla
   * ```
   * @see {@link Document.pathURI}
   */
  readonly path: string;

  /**
   * Read-only property; A string that represents the path of the document, expressed as a file:/// URI.
   * If the document has never been saved, this property is undefined.
   * @since Adobe Flash Professional CS4
   * @example
   *
   * The following example displays the path of the first document in the documents array as a file:/// URI string in the Output panel.
   * You must save the document before running this script. In the example,the file is named `test.fla` and is saved in the `My Documents` folder on a Windows computer.
   *
   * ```javascript
   * var filePathURI = flash.documents[0].pathURI;
   * fl.trace(filePathURI);
   *
   * // display file: ///C|\documents%20and%20Settings/<userName>/My%20Documents/test.fla
   * ```
   * @see {@link Document.path}
   */
  readonly pathURI: string;

  /**
   * Read-only property; An array of the publish profile names for the document.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example displays the names of the publish profiles for the document:
   *
   * ```javascript
   * var myPubProfiles = fl.getDocumentDOM().publishProfiles;
   * for (var i = 0; i < myPubProfiles.length; i++) {
   *   fl.trace(myPubProfiles[i]);
   * }
   * ```
   */
  readonly publishProfiles: string[];

  /**
   * @todo Find out property type.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @removed Adobe Animate CC 2016
   * @example
   *
   * The following example displays the array of values in the screenOutline property:
   *
   * ```javascript
   * var myArray = new Array();
   * for (var i in fl.getDocumentDOM().screenOutline) {
   *   myArray.push(" " + i + " : " + fl.getDocumentDOM().screenOutline[i]);
   * }
   * fl.trace("Here is the property dump for screenOutline: " + myArray);
   * ```
   * @see {@link Document.allowScreens | Document.allowScreens()}
   */
  screenOutline: any;

  /**
   * @todo Check property type.
   * Property; An array of the selected objects in the document.
   * If nothing is selected, returns an array of length zero.
   * If no document is open, returns null.
   * To add objects to the array, you must first select them in one of the following ways:
   *
   * - Manually select objects on the Stage.
   * - Use one of the selection methods, such as {@link Document.setSelectionRect | Document.setSelectionRect()}, {@link Document.setSelectionBounds | Document.setSelectionBounds()}, {@link Document.mouseClick | Document.mouseClick()}, {@link Document.mouseDblClk | Document.mouseDblClk()}, or {@link Document.selectAll | Document.selectAll()}.
   * - Manually select a frame or frames.
   * - Use one of the methods of the {@link Timeline | Timeline object} to select a frame or frames,
   * such as {@link Timeline.getSelectedFrames | Timeline.getSelectedFrames()}, {@link Timeline.setSelectedFrames | Timeline.setSelectedFrames()}, or {@link Timeline.selectAllFrames | Timeline.selectAllFrames()}.
   * - Specify all the elements in a particular frame (see {@link Element | Element object} and the first example).
   * - Create an array of one or more elements and then assign that array to the `Document.selection` array (see the third example).
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example assigns all elements on Frame 11 to the current selection (remember that index values are different from frame number values):
   *
   * ```javascript
   * fl.getDocumentDOM().getTimeline().currentFrame = 10;
   * fl.getDocumentDOM().selection = fl.getDocumentDOM().getTimeline().layers[0].frames[10].elements;
   * ```
   *
   * The following example creates a rectangle in the upper left corner of the Stage and a text string underneath the rectangle.
   * Then it selects both objects using {@link Document.setSelectionRect | Document.setSelectionRect()} and adds them to the document.selection array.
   * Finally, it displays the contents of document.selection in the Output panel.
   *
   * ```javascript
   * var document = fl.getDocumentDOM();
   * document.addNewRectangle({ left: 0, top: 0, right: 99, bottom: 99 }, 0);
   * document.addNewText({ left: -1, top: 117.3, right: 9.2, bottom: 134.6 });
   * document.setTextString("Hello World");
   * document.setSelectionRect({ left: -28, top: -22, right: 156.0, bottom: 163 });
   *
   * var theSelectionArray = document.selection;
   * for (var i = 0; i < theSelectionArray.length; i++) {
   *   fl.trace("fl.getDocumentDOM().selection[" + i + "] = " + theSelectionArray[i]);
   * }
   * ```
   *
   * The following example is an advanced example.
   * It shows how to loop through the layer array and elements array to locate instances of a particular symbol and select them.
   * You could extend this example to include loops for multiple frames or scenes.
   * This example assigns all instances of the movie clip myMovieClip in the first frame to the current selection:
   *
   * ```javascript
   * // Assigns the layers array to the variable "theLayers".
   * var theLayers = fl.getDocumentDOM().getTimeline().layers;
   *
   * // Creates an array to hold all the elements that are instances of "myMovieClip".
   * var myArray = new Array();
   *
   * // Counter variable
   * var x = 0;
   *
   * // Begin loop through all the layers.
   * for (var i = 0; i < theLayers.length; i++) {
   *   // Gets the array of elements in Frame 1
   *   // and assigns it to the array "theElems".
   *   var theElems = theLayers[i].frames[0].elements;
   *
   *   // Begin loop through the elements on a layer.
   *   for (var c = 0; c < theElems.length; c++) {
   *     // Checks to see if the element is of type "instance".
   *     if (theElems[c].elementType == "instance") {
   *       // If the element is an instance, it checks
   *       // if it is an instance of "myMovieClip".
   *       if (theElems[c].libraryItem.name == "myMovieClip") {
   *         // Assigns elements that are instances of "myMovieClip" to "myArray".
   *         myArray[x] = theElems[c];
   *
   *         // Increments counter variable.
   *         x++;
   *       }
   *     }
   *   }
   * }
   *
   * // Now that you have assigned all the instances of "myMovieClip" to "myArray", you then set the document.selection array equal to myArray. This selects the objects on the Stage.
   * fl.getDocumentDOM().selection = myArray;
   * ```
   */
  selection: Element[];

  /**
   * Property; Specifies whether the object is accessible.
   * This is equivalent to the inverse logic of the Make Movie Accessible setting in the Accessibility panel.
   * That is, if `Document.silent` is true, it is the same as the Make Movie Accessible option being unchecked.
   * If it is false, it is the same as the Make Movie Accessible option being checked.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the `isSilent` variable to the value of the silent property:
   *
   * ```javascript
   * var isSilent = fl.getDocumentDOM().silent;
   * ```
   *
   * The following example sets the silent property to false, indicating that the document is accessible:
   *
   * ```javascript
   * fl.getDocumentDOM().silent = false;
   * ```
   */
  silent: boolean;

  /**
   * Property; a string that contains a list of items in the document's ActionScript 3.0 Source path, which specifies the location of ActionScript class files.
   * Items in the string are delimited by semi-colons.
   * In the authoring tool, the items are specified by choosing `File > Publish Settings` and then choosing `ActionScript 3.0 Script Settings` on the Flash tab.
   * @since Adobe Flash Professional CS4
   * @example
   *
   * The following example adds the ./Class files folder to the document's Source path:
   *
   * ```javascript
   * var myDoc = fl.getDocumentDOM();
   * fl.trace(myDoc.sourcePath);
   * myDoc.sourcePath = "./Class files;" + myDoc.sourcePath;
   * fl.trace(myDoc.sourcePath);
   * ```
   */
  sourcePath: boolean;

  /**
   * Property; An integer, returns the JPEG Quality setting from the current Publish Profile in the document.
   * @since Adobe Flash Professional CS6
   * @example
   *
   * The following example display the current SWF JPEG quality:
   *
   * ```javascript
   * fl.trace("current profile's JPEG Quality is: " + fl.getDocumentDOM().swfJPEGQuality);
   * ```
   */
  swfJPEGQuality: number;

  /**
   * Read-only property; An array of {@link Timeline | Timeline object}s.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example gets the array of current timelines in the active document and displays their names in the Output panel:
   *
   * ```javascript
   * var i = 0;
   * var curTimelines = fl.getDocumentDOM().timelines;
   * while (i < fl.getDocumentDOM().timelines.length) {
   *   alert(curTimelines[i].name);
   *   ++i;
   * }
   * ```
   * @see
   *
   * - {@link Document.currentTimeline}
   * - {@link Document.getTimeline | Document.getTimeline()}
   */
  readonly timelines: Timeline[];

  /**
   * Read-only property; A Matrix object.
   * The `viewMatrix` is used to transform from object space to document space when the document is in edit mode.
   * The mouse location, as a tool receives it, is relative to the object that is currently being edited.
   * See {@link Matrix | Matrix object}.
   * For example,
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * if you create a symbol, double-click to edit it, and draw with the PolyStar tool, the point (0, 0) will be at the registration point of the symbol.
   * However, the drawingLayer object expects values in document space, so if you draw a line from (0, 0) using the drawingLayer, it will start at the upper left corner of the Stage.
   * The `viewMatrix` property provides a way to transform from the space of the object being edited to document space.
   *
   * The following example gets the value of the `viewMatrix` property:
   *
   * ```javascript
   * var mat = fl.getDocumentDOM().viewMatrix;
   * ```
   */
  readonly viewMatrix: Matrix;

  /**
   * Property; (integer) The width of the document (Stage) in pixels.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the width of the Stage to 400 pixels.
   *
   * ```javascript
   * fl.getDocumentDOM().width = 400;
   * ```
   * @see {@link Document.height}
   */
  width: number;

  /**
   * Property; Specifies the zoom percent of the Stage at authoring time.
   * A value of 1 equals 100 percent zoom, 8 equals 800 percent, .5 equals 50 percent, and so on.
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example sets the zoom factor of the Stage to 200 percent.
   *
   * ```javascript
   * fl.getDocumentDOM().zoomFactor = 2;
   * ```
   */
  zoomFactor: number;
}

/**
 * The Library object represents the Library panel.
 * It is a property of the Document object and can be accessed by {@link Document.library}.
 *
 * The Library object contains an array of items of different types, including symbols, bitmaps, sounds, and videos.
 * @since Macromedia Flash MX Basic/Professional 2004
 */
interface Library {
  /**
   * Method; Adds the current or specified item to the Stage at the specified position.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param position Specifies the *x*, *y* position of the center of the item on the Stage.
   * @param [itemPath] The path of the item.
   * If the item is in a folder, you can specify its name and path using slash notation.
   * If **`itemPath`** is not specified, the current library selection is used. This parameter is optional.
   * @returns `true` if the item is successfully added to the document; `false` otherwise.
   * @example
   *
   * The following example adds the currently selected item to the Stage at the (3, 60) position:
   *
   * ```javascript
   * fl.getDocumentDOM().library.addItemToDocument({x: 3, y: 60});
   * ```
   *
   * The following example adds the item "Symbol1" located in "folder1" of the library
   * to the Stage at the (550, 485) position:
   *
   * ```javascript
   * fl.getDocumentDOM().library.addItemToDocument({x: 550.0, y: 485.0}, "folder1/Symbol1");
   * ```
   */
  addItemToDocument(position: Point, itemPath?: string): boolean;

  /**
   * Method; Creates a new item of the specified type in the Library panel and sets the new item to the currently selected item.
   *
   * For more information on importing items into the library, including items such as sounds,
   * see {@link Document.importFile | Document.importFile()}.
   * @todo Check type param type.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param type The type of item to create.
   *
   * Valid values are: `"video"`, `"movie clip"`, `"button"`, `"graphic"`, `"bitmap"`, `"screen"`, and `"folder"`.
   *
   * You cannot use this method to add sounds.
   *
   * Creating a folder is equivalent to calling {@link Library.newFolder | Library.newFolder()} first.
   * @param [namePath] The name of the item to be added.
   * If the item is in a folder, specify its name and path using slash notation. This parameter is optional.
   * @returns *true* if the item is successfully created; *false* otherwise.
   * @example
   *
   * The following example creates a new button item named start in a new folder named folderTwo:
   *
   * ```javascript
   * fl.getDocumentDOM().library.addNewItem("button", "folderTwo/start");
   * ```
   */
  addNewItem(type: "video" | "movie clip" | "button" | "graphic" | "bitmap" | "screen" | "folder", namePath?: string): boolean;

  /**
   * Method; Deletes one or more currently selected items
   * or one specified item by **`namePath`** parameter from the Library panel.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param [namePath] The name of the item to be deleted.
   * If the item is in a folder, you can specify its name and path using slash notation.
   * If you pass a folder name, the folder and all its items are deleted.
   * If no name is specified, Flash deletes the currently selected item or items.
   * To delete all the items in the Library panel, select all items before using this method.
   * This parameter is optional.
   * @returns *true* if the items are successfully deleted; *false* otherwise.
   * @example
   *
   * The following example deletes the currently selected item:
   *
   * ```javascript
   * fl.getDocumentDOM().library.deleteItem();
   * ```
   *
   * The following example deletes the item "Symbol_1" from the library folder "Folder_1":
   *
   * ```javascript
   * fl.getDocumentDOM().library.deleteItem("Folder_1/Symbol_1");
   * ```
   */
  deleteItem(namePath?: string): boolean;

  /**
   * Method; Makes a copy of the currently selected or specified item.
   * The new item has a default name (such as *item copy*) and is set as the currently selected item.
   * If more than one item is selected, the command returns `false`.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param [namePath] Specifies the name of the item to duplicate.
   * If the item is in a folder, you can specify its name and path using slash notation. This parameter is optional.
   * @returns *true* if the item is duplicated successfully; *false* otherwise.
   * If more than one item is selected, Flash returns *false*.
   * @example
   *
   * The following example creates a copy of the item "square" in the library folder "test":
   *
   * ```javascript
   * fl.getDocumentDOM().library.duplicateItem("test/square");
   * ```
   */
  duplicateItem(namePath?: string): boolean;

  /**
   * Method; Opens the currently selected or specified item in Edit mode.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param [namePath] The name of the item. If the item is in a folder,
   * you can specify its name and path using slash notation.
   * If **`namePath`** is not specified, the single selected library item opens in Edit mode.
   *
   * If none or more than one item in the library is currently selected,
   * the first scene in the main timeline appears for editing.
   * This parameter is optional.
   * @returns *true* if the specified item exists and can be edited; *false* otherwise.
   * @example
   *
   * The following example opens the item "circle" in the "test" folder of the library for editing:
   *
   * ```javascript
   * fl.getDocumentDOM().library.editItem("test/circle");
   * ```
   */
  editItem(namePath?: string): boolean;

  /**
   * Method; Returns the library item's index value (zero-based).
   * The library index is flat, so folders are considered part of the main index.
   * Folder paths can be used to specify a nested item.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param namePath The name of the item.
   *
   * If the item is in a folder, you can specify its name and path using slash notation.
   * @returns An integer value representing the item's zero-based index value.
   * @example
   *
   * The following example stores the zero-based index value of the library item "square",
   * which is in the "test" folder, in the variable sqIndex, and then displays the index value in a dialog box:
   *
   * ```javascript
   * var sqIndex = fl.getDocumentDOM().library.findItemIndex("test/square");
   * alert(sqIndex);
   * ```
   */
  findItemIndex(namePath: string): number;

  /**
   * Method; Gets the property for the selected item.
   * @todo Check return type.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param property For a list of values that you can use as a **`property`** parameter,
   * see the {@link Item | Item object},
   * along with property summaries for its subclasses.
   * @returns A string value for the property.
   * @example
   *
   * The following example shows a dialog box that contains the Linkage Identifier value
   * for the symbol when referencing it using ActionScript or for run-time sharing:
   *
   * ```javascript
   * alert(fl.getDocumentDOM().library.getItemProperty("linkageIdentifier"));
   * ```
   */
  getItemProperty(property: string): string;

  /**
   * Method; Gets the type of object currently selected or specified by a library path.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param [namePath] The name of the item.
   * If the item is in a folder, specify its name and path using slash notation.
   * If **`namePath`** is not specified, Flash provides the type of the current selection.
   * If more than one item is currently selected and no *namePath* is provided, Flash ignores the command.
   * This parameter is optional.
   * @returns The type of object.
   * @example
   *
   * The following example shows a dialog box that contains the item type of "Symbol_1"
   * located in the "Folder_1/Folder_2" folder:
   *
   * ```javascript
   * alert(fl.getDocumentDOM().library.getItemType("Folder_1/Folder_2/Symbol_1"));
   * ```
   */
  getItemType(namePath?: string): ItemType;

  /**
   * Method; Gets the array of all currently selected items in the library.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @returns An array of all currently selected items in the library.
   * @example
   *
   * The following example stores the array of currently selected library items (in this case, several audio files)
   * in the `selItems` variable and then changes the `sampleRate` property of the first audio file in the array to 11 kHz:
   *
   * ```javascript
   * var selItems = fl.getDocumentDOM().library.getSelectedItems();
   * selItems[0].sampleRate = "11 kHz";
   * ```
   */
  getSelectedItems(): Item[];

  /**
   * Method; Checks to see if a specified item exists in the library.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param namePath The name of the item. If the item is in a folder, specify its name and path using slash notation.
   * @returns True if the specified item exists in the library; *false* otherwise.
   * @example
   *
   * The following example displays `true` or `false` in a dialog box,
   * depending on whether the item "Symbol_1" exists in the "Folder_1" library folder:
   *
   * ```javascript
   * alert(fl.getDocumentDOM().library.itemExists("Folder_1/Symbol_1"));
   * ```
   */
  itemExists(namePath: string): boolean;

  /**
   * Method; Moves the currently selected or specified library item to the specified folder or top level.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param folderPath The path to the folder in the form "FolderName" or "FolderName/FolderName".
   * To move an item to the top level, pass an empty string ("").
   * @param [itemToMove] The name of the item to move. Omitting will move the currently selected items.
   * This parameter is optional.
   * @param [replace] If an item with the same name already exists,
   * specifying true for the *replace* parameter replaces the existing item with the item being moved.
   * If *false*, the name of the dropped item changes to a unique name.
   * The default value is *false*. This parameter is optional.
   * @returns `true` if the item moves successfully; `false` otherwise.
   * @usage Library.moveToFolder(folderPath [, itemToMove [, replace]])
   * @example
   *
   * The following example moves the item "Symbol_1" to the library folder "new"
   * and replaces the item in that folder with the same name:
   *
   * ```javascript
   * fl.getDocumentDOM().library.moveToFolder("new", "Symbol_1", true);
   * ```
   */
  moveToFolder(folderPath: string, itemToMove?: string, replace?: boolean): boolean;

  /**
   * Method; Creates a new folder with the specified name,
   * or a default name (*"untitled folder \#"*) if no **`folderName`** parameter is provided,
   * in the currently selected folder.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param [folderPath] The name of the folder to be created.
   * If it is specified as a path, and the path doesn't exist, the path is created. This parameter is optional.
   * @returns `true` if folder is created successfully; `false` otherwise.
   * @example
   *
   * The following example creates two new library folders. The second folder is a subfolder of the first folder:
   *
   * ```javascript
   * fl.getDocumentDOM().library.newFolder("first/second");
   * ```
   */
  newFolder(folderPath?: string): boolean;

  /**
   * Method; Renames the currently selected library item in the Library panel.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param name A new name for the library item.
   * @returns `true` if the name of the item changes successfully, `false` otherwise.
   * If multiple items are selected, no names are changed,
   * and the return value is `false` (to match user interface behavior).
   * @example
   *
   * The following example renames the currently selected library item to new name:
   *
   * ```javascript
   * fl.getDocumentDOM().library.renameItem("new name");
   * ```
   */
  renameItem(name: string): boolean;

  /**
   * Method; Selects or deselects all items in the library.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param [selectAll] Specifies whether to select or deselect all items in the library.
   * Omit this parameter or use the default value of `true` to select all the items in the library;
   * `false` deselects all library items. This parameter is optional.
   * @returns Nothing.
   * @example
   *
   * The following examples select all the items in the library:
   *
   * ```javascript
   * fl.getDocumentDOM().library.selectAll();
   * fl.getDocumentDOM().library.selectAll(true);
   * ```
   *
   * The following examples deselect all the items in the library:
   *
   * ```javascript
   * fl.getDocumentDOM().library.selectAll(false);
   * fl.getDocumentDOM().library.selectNone();
   * ```
   */
  selectAll(selectAll?: boolean): void;

  /**
   * Method; Selects a specified library item.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param namePath The name of the item. If the item is in a folder,
   * you can specify its name and path using slash notation.
   * @param [replaceCurrentSelection] Specifies whether to replace the current selection
   * or add the item to the current selection.
   * The default value is true (replace current selection). This parameter is optional.
   * @param [select] Specifies whether to select or deselect an item. The default value is `true` (select).
   * This parameter is optional.
   * @returns `true` if the specified item exists; `false` otherwise.
   * @usage Library.selectItem(namePath [, replaceCurrentSelection [, select]])
   * @example
   *
   * The following example changes the current selection in the library to "Symbol_1" inside "untitled Folder_1":
   *
   * ```javascript
   * fl.getDocumentDOM().library.selectItem("untitled Folder_1/Symbol_1");
   * ```
   *
   * The following example extends what is currently selected in the library
   * to include "Symbol_1" inside "untitled Folder_1":
   *
   * ```javascript
   * fl.getDocumentDOM().library.selectItem("untitled Folder_1/Symbol_1", false);
   * ```
   *
   * The following example deselects "Symbol_1" inside "untitled Folder_1" and does not change other selected items:
   *
   * ```javascript
   * fl.getDocumentDOM().library.selectItem("untitled Folder_1/Symbol_1", true, false);
   * ```
   */
  selectItem(namePath: string, replaceCurrentSelection?: boolean, select?: boolean): boolean;

  /**
   * Method; Deselects all the library items.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @returns Nothing.
   * @example
   *
   * The following examples deselect all the items in the library:
   *
   * ```javascript
   * fl.getDocumentDOM().library.selectNone();
   * fl.getDocumentDOM().library.selectAll(false);
   * ```
   */
  selectNone(): void;

  /**
   * Method; Sets the property for all selected library items (ignoring folders).
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param property The name of the property to set.
   * For a list of properties, see the {@link Item | Item object} and its subclasses.
   * @param value The value to assign to the specified property.
   * @returns Nothing.
   * @example
   *
   * The following example assigns the value button to the "symbolType" property
   * for the selected library item or items.
   *
   * In this case, the item must be a {@link SymbolItem | SymbolItem object};
   * "symbolType" is a valid property for SymbolItem objects.
   *
   * ```javascript
   * fl.getDocumentDOM().library.setItemProperty("symbolType", "button");
   * ```
   */
  setItemProperty(property: string, value: any): void;

  /**
   * Method; Updates the specified item.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param [namePath] The name of the item. If the item is in a folder, specify its name and path using slash notation.
   * This is the same as right-clicking on an item and selecting `Update` from the menu in the user interface.
   *
   * If no name is provided, the current selection is updated. This parameter is optional.
   * @returns `true` if Flash updated the item successfully; `false` otherwise.
   * @example
   *
   * The following example displays a dialog box that shows
   * whether the currently selected item is updated (`true`) or not (`false`):
   *
   * ```javascript
   * alert(fl.getDocumentDOM().library.updateItem());
   * ```
   */
  updateItem(namePath?: string): boolean;

  /**
   * Property; An array of item objects in the library.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example stores the array of all library items in the `itemArray` variable:
   *
   * ```javascript
   * var itemArray = fl.getDocumentDOM().library.items;
   * ```
   */
  items: Item[];

  /**
   * Property; An array of Library Items that are not used in the document.
   * This is the equivalent of the `Select Unused Items` menu item in the Library panel.
   * @since Adobe Animate CC 2016
   * @example
   *
   * The following example illustrates the use of this property:
   *
   * ```javascript
   * var items = fl.getDocumentDOM().library.unusedItems;
   * fl.trace("number of unused items found: " + items.length);
   * for (var i in items) {
   *   fl.trace(items[i].name);
   * }
   * ```
   */
  unusedItems: Item[];
}

/**
 * The PresetPanel object represents the Motion Presets panel (`Window > Motion Presets`).
 *
 * It is a property of the {@link Flash | Flash object} and can be accessed by {@link Flash.presetPanel}.
 * @since Adobe Flash Professional CS4
 */
interface PresetPanel {
  /**
   * Method; If a single motion tween is currently selected on the Stage,
   * adds that motion to the Motion Presets panel in the specified folder with the specified name.
   *
   * The path specified in **`namePath`** must exist in the panel.
   *
   * If a preset matching **`namePath`** exists, this method has no effect, and returns false.
   *
   * If you don't pass a value for **`namePath`**,
   * the item is added to the Custom Presets folder with the name "Custom preset *n*",
   * where *n* is incremented each time you add an item in this fashion.
   * @since Adobe Flash Professional CS4
   * @param [namePath] A string that specifies the path and name of the item to add to the Motion Presets panel.
   * This parameter is optional.
   * @returns A boolean value of true if the item was successfully added; *false* otherwise.
   * @example
   *
   * Assuming that a single motion tween is selected on the Stage,
   * the following code adds a preset named Bouncing Ball to the Custom Presets folder:
   *
   * ```javascript
   * fl.presetPanel.addNewItem("Custom Presets/Bouncing Ball");
   * ```
   * @see {@link PresetPanel.newFolder | PresetPanel.newFolder()}
   */
  addNewItem(namePath?: string): boolean;

  /**
   * Method; Applies the specified or currently selected preset to the currently selected item on the Stage.
   *
   * The item must be a motion tween, a symbol, or an item that can be converted to a symbol.
   *
   * If the item is a motion tween,
   * its current motion is replaced with the selected preset without requesting user confirmation.
   * This method fails in the following situations:
   *
   * - The path you specify as **`presetPath`** doesn't exist.
   * - You don't pass a value for **`presetPath`** and no preset is selected.
   * - You don't pass a value for **`presetPath`** and multiple presets are selected.
   * - The selected item on the Stage is not a symbol and can't be converted to a symbol.
   * @since Adobe Flash Professional CS4
   * @param [presetPath] A string that specifies the full path and name of the preset to be applied,
   * as it appears in the Motion Presets panel.
   * This parameter is optional; if you don't pass a value, the currently selected preset is applied.
   * @returns A boolean value of true if the preset is successfully applied, *false* otherwise.
   * @example
   *
   * The following example applies the aDribble preset to the currently selected item on the Stage:
   *
   * ```javascript
   * var result = fl.presetPanel.applyPreset("Custom Presets/Bounces/aDribble");
   * fl.trace(result);
   * ```
   */
  applyPreset(presetPath?: string): boolean;

  /**
   * Method; Deletes the specified folder and any of its subfolders from the folder tree of the Motion Presets panel.
   * Any presets in the folders are also deleted. You can't delete folders from the Default Presets folder.
   *
   * If you don't pass a value for **`folderPath`**, any folders that are currently selected are deleted.
   *
   * ***Note:** Folders are deleted without requesting user confirmation, and there is no way to undo this action.*
   * @since Adobe Flash Professional CS4
   * @param [folderPath] A string that specifies the folder to delete from the Motion Presets panel.
   * This parameter is optional.
   * @returns A boolean value of *true* if the folder or folders are successfully deleted; false otherwise.
   * @example
   *
   * The following code deletes a folder named Bouncing below the Custom Presets folder;
   * any subfolders of Bouncing are also deleted:
   *
   * ```javascript
   * fl.presetPanel.deleteFolder("Custom Presets/Bouncing");
   * ```
   * @see {@link PresetPanel.deleteItem | PresetPanel.deleteItem()}
   */
  deleteFolder(folderPath?: string): boolean;

  /**
   * Method; Deletes the specified preset from the Motion Presets panel.
   *
   * If you don't pass a value for *namePath*, any presets that are currently selected are deleted.
   * You can't delete items from the Default Presets folder.
   *
   * ***Note:** Items are deleted without requesting user confirmation, and there is no way to undo this action.*
   * @since Adobe Flash Professional CS4
   * @param [namePath] A string that specifies the path and name of the item to delete from the Motion Presets panel.
   * This parameter is optional.
   * @returns A boolean value of true if the item or items are successfully deleted; false otherwise.
   * @example
   *
   * The following code deletes a preset named aDribble from the Custom Presets folder:
   *
   * ```javascript
   * fl.presetPanel.deleteItem("Custom Presets/aDribble");
   * ```
   * @see {@link PresetPanel.deleteFolder | PresetPanel.deleteFolder()}
   */
  deleteItem(namePath?: string): boolean;

  /**
   * Method; Expands or collapses one or more currently selected folders in the Motion Presets panel.
   * To expand or collapse folders other than the folders that are currently selected, pass a value for **`folderPath`**.
   * @since Adobe Flash Professional CS4
   * @param [expand] Whether to expand (*true*) or collapse (*false*) the folder. The default value is *true*.
   * @param [recursive] Whether to expand or collapse the subfolders of the folder. The default value is *false*.
   * @param [folderPath] The path to the folder to expand or collapse.
   * If omitted, currently selected folders will be expand or collapse.
   * @returns Whether the folder's expansion or collapse was successful.
   * @example
   *
   * The following example expands the Custom Presets folder but does not expand its subfolders:
   *
   * ```javascript
   * fl.presetPanel.expandFolder(true, false, "Custom Presets");
   * ```
   *
   * The following example expands the Custom Presets folder and all its subfolders:
   *
   * ```javascript
   * fl.presetPanel.expandFolder(true, true, "Custom Presets");
   * ```
   */
  expandFolder(expand?: boolean, recursive?: boolean, folderPath?: string): boolean;

  /**
   * Method; Exports the currently selected or the specified preset to an XML file.
   * Only presets can be exported; The method fails if you try to export a folder.
   * This method also fails if you try to overwrite a file on disk.
   * @since Adobe Flash Professional CS4
   * @param fileURI A string, expressed as a file:/// URI,
   * that specifies the path and optionally a filename for the exported file.
   * @param [namePath] The path and name of the item to select from the Motion Presets panel.
   * If you don't specify a filename as part of **`fileURI`**
   * (that is, if the last character of **`fileURI`** is a slash (/)),
   * the exported file is saved with the same name as the preset being exported.
   * If omitted, the currently selected preset is exported.
   * @returns True if the preset was exported successfully; false otherwise.
   * @example
   *
   * The following example demonstrates what files are created when different parameters are passed to this method,
   * and informs you if the specified file was successfully created.
   * Before running this example,
   * select the fly-in-left preset in the Default Presets folder and create the My Presets folder on disk.
   *
   * ```javascript
   * //Exports fly-in-left to C:\My Presets\fly-in-left.xml
   * fl.presetPanel.exportItem("file:///C|/My Presets/");
   * //Exports fly-in-left to C:\My Presets\myFavoritePreset.xml
   * fl.presetPanel.exportItem("file:///C|/My Presets/myFavoritePreset.xml");
   * // Exports the "pulse" preset to C:\My Presets\pulse.xml
   * fl.presetPanel.exportItem("file:///C|/My Presets/", "Default Presets/pulse");
   * // Exports the "pulse" preset to C:\My Presets\thePulsePreset.xml
   * fl.presetPanel.exportItem("file:///C|/My Presets/thePulsePreset.xml", "Default Presets/pulse");
   * ```
   * @see {@link PresetPanel.importItem | PresetPanel.importItem()}
   */
  exportItem(fileURI: string, namePath?: string): boolean;

  /**
   * Method; Returns the index location of an item in the Motion Presets panel.
   * @since Adobe Flash Professional CS4
   * @param [presetName] The name of the preset for which the index value is returned.
   * If omitted, the index of the currently specified preset is returned.
   * @returns The index of the specified preset in the PresetPanel.items array.
   * This method returns -1 in the following situations:
   *
   * - You don't pass a value for **`presetName`** and no preset is selected.
   * - You don't pass a value for **`presetName`** and multiple presets are selected.
   * - You pass a value for **`presetName`** that doesn't correspond to an item in the panel.
   * @example
   *
   * The following code displays the index value and full pathname of the currently selected preset:
   *
   * ```javascript
   * // Select one preset in the Motions Preset panel before running this code
   * var selectedPreset = fl.presetPanel.findItemIndex();
   * fl.trace(selectedPreset);
   * fl.trace(fl.presetPanel.items[selectedPreset].path);
   * ```
   */
  findItemIndex(presetName?: string): number;

  /**
   * Returns an array of presetItem objects corresponding to the currently selected items in the Motion Presets panel
   * (see {@link PresetItem | PresetItem object}).
   * Each item in the array represents either a folder or a preset.
   * @since Adobe Flash Professional CS4
   * @returns An array of presetItem objects.
   * @usage PresetPanel.getSelectedItems()
   * @example
   *
   * The following code displays the full pathnames of the currently selected items in the Motion Presets panel:
   *
   * ```javascript
   * var itemArray = fl.presetPanel.getSelectedItems();
   * var length = itemArray.length;
   * for (var x = 0; x < length; x++) {
   *   fl.trace(itemArray[x].path);
   * }
   * ```
   * @see {@link PresetPanel.items | PresetPanel.items}
   */
  getSelectedItems(): PresetItem[];

  /**
   * Method; Adds a preset to the Motion Presets panel from a specified XML file.
   * The path specified in **`namePath`** must exist in the panel.
   *
   * To create XML files that can be imported, use {@link PresetPanel.exportItem | PresetPanel.exportItem()}.
   * If you don't pass a value for **`namePath`**,
   * the imported preset is placed in the Custom Presets folder
   * and given the same name as the imported file (without the XML extension).
   * @since Adobe Flash Professional CS4
   * @param fileURI A string, expressed as a file:/// URI,
   * that specifies the XML file to be imported as a preset in the Motion Presets panel.
   * @param [namePath] A string that specifies in which folder to place the imported file and what to name it.
   * This parameter is optional.
   * @returns A boolean value of true if the file is successfully imported; false otherwise.
   * @example
   *
   * The following example imports a preset into the Custom Presets/Pulse folder, and names it fastPulse.
   *
   * ```javascript
   * fl.presetPanel.importItem("file:///C|/My Presets/thePulsePreset.xml", "Custom Presets/Pulse/fastPulse");
   * ```
   * @see {@link PresetPanel.exportItem | PresetPanel.exportItem()}
   */
  importItem(fileURI: string, namePath?: string): boolean;

  /**
   * Method; Moves the specified item to the specified folder.
   *
   * If you pass an empty string for **`folderPath`**, the items are moved to the Custom Presets folder.
   * If you don't pass a value for **`namePath`**, the currently selected items are moved.
   *
   * You can't move items to or from the Default Presets folder.
   * @since Adobe Flash Professional CS4
   * @param folderPath The path to the folder in the Motion Presets panel to which the item or items are moved.
   * @param [namePath] The path and name of the item to move. This parameter is optional.
   * @returns A boolean value of true if the items are successfully moved; false otherwise.
   * @usage PresetPanel.moveToFolder(folderPath [, namePath] )
   * @example
   *
   * In the following example, the currently selected items are moved to the Custom Presets/Bouncing folder,
   * and then the Fast Bounce preset is moved to the same folder:
   *
   * ```javascript
   * fl.presetPanel.moveToFolder("Custom Presets/Bouncing");
   * fl.presetPanel.moveToFolder("Custom Presets/Bouncing", "Custom Presets/Fast Bounce");
   * ```
   */
  moveToFolder(folderPath: string, namePath?: string): boolean;

  /**
   * Method; Creates a folder in the folder tree of the Motion Presets panel.
   * You can create only one new folder level with this method.
   *
   * That is, if you pass "Custom Presets/My First Folder/My Second Folder" for *folderPath*,
   * "Custom Presets/My First Folder" must exist in the folder tree.
   *
   * If you don't pass a value for **`folderPath`**,
   * a folder named "Untitled folder *n*" is created at the first level below "Custom Presets",
   * where *n* is incremented each time a folder is added in this fashion.
   *
   * ***Note:** You can't add folders to the Default Presets folder.*
   * @since Adobe Flash Professional CS4
   * @param [folderPath] A string that specifies where to add a new folder in the Motion Presets panel,
   * and the name of the new folder. This parameter is optional.
   * @returns A boolean value of true if the folder is successfully added; false otherwise.
   * @example
   *
   * The following example adds a folder named Bouncing below the Custom Presets folder:
   *
   * ```javascript
   * fl.presetPanel.newFolder("Custom Presets/Bouncing");
   * ```
   * @see {@link PresetPanel.addNewItem | PresetPanel.addNewItem()}
   */
  newFolder(folderPath?: string): boolean;

  /**
   * Method; Renames the currently selected preset or folder to a specified name.
   * This method succeeds only if a single preset or folder in the Custom Presets folder is selected.
   *
   * This method fails in the following situations:
   *
   * - No item is selected.
   * - Multiple items are selected.
   * - The selected item is in the Default Presets folder.
   * - An item named **`newName`** exists in the same location as the selected item.
   * @since Adobe Flash Professional CS4
   * @param newName A string that specifies the new name for the preset or folder.
   * @returns A boolean value of true if the preset or folder is successfully renamed; false otherwise.
   * @example
   *
   * The following example renames the currently selected preset in the Custom Presets folder to "Bounce Faster".
   *
   * ```javascript
   * var renamed = fl.presetPanel.renameItem("Bounce Faster");
   * fl.trace(renamed);
   * ```
   */
  renameItem(newName: string): boolean;

  /**
   * Method; Selects or deselects an item in the Motion Presets panel,
   * optionally replacing any items currently selected.
   * @since Adobe Flash Professional CS4
   * @param namePath A string that specifies the path and name of the item to select from the Motion Presets panel.
   * @param [replaceCurrentSelection] Whether the specified item replaces any current selection (*true*)
   * or is added to the current selection (*false*). The default value is true.
   * @param [select] Whether to select the item (*true*) or deselect the item (*false*).
   * The default value is true. If you pass false for **`select`**,
   * the value of **`replaceCurrentSelection`** is ignored.
   * @returns *true* if the item was successfully selected or deselected; *false* otherwise.
   * @usage PresetPanel.selectItem(namePath [, replaceCurrentSelection [, select] ])
   * @example
   *
   * The following code adds the fly-in-blur-right preset to the currently selected presets (if any)
   * in the Motion Presets panel:
   *
   * ```javascript
   * fl.presetPanel.selectItem("Default Presets/fly-in-blur-right", false);
   * ```
   */
  selectItem(namePath: string, replaceCurrentSelection?: boolean, select?: boolean): boolean;

  /**
   * Property; An array of presetItem objects in the Motion Presets panel (see {@link PresetItem | PresetItem object}).
   * Each item in the array represents either a folder or a preset.
   * @since Adobe Flash Professional CS4
   * @example
   *
   * The following code displays the full pathnames of the items in the Motion Presets panel:
   *
   * ```javascript
   * var itemArray = fl.presetPanel.items;
   * var length = itemArray.length;
   * for (var x = 0; x < length; x++) {
   *   fl.trace(itemArray[x].path);
   * }
   * ```
   * @see {@link PresetPanel.getSelectedItems | PresetPanel.getSelectedItems()}
   */
  items: PresetItem[];
}

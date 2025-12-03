/**
 * The PresetItem object represents an item (preset or folder) in the Motion Presets panel (Window > Motion Presets).
 *
 * The array of PresetItem objects is a property of the PresetPanel object ({@link PresetPanel.items}).
 *
 * All properties of the PresetItem object are read only.
 *
 * To perform tasks such as deleting, renaming, or moving items,
 * use the methods of the {@link PresetPanel | PresetPanel object}.
 * @since Adobe Flash Professional CS4
 */
interface PresetItem {
  /**
   * Read-only property; Whether the item in the Motion Presets panel is a folder (`true`) or a preset (`false`).
   * @since Adobe Flash Professional CS4
   * @example
   *
   * The following example shows that the first item in the Motion Presets panel
   * is a folder and the second is a preset:
   *
   * ```javascript
   * var presetItemArray = fl.presetPanel.items;
   * fl.trace(presetItemArray[0].isFolder);
   * fl.trace(presetItemArray[1].isFolder);
   * ```
   */
  readonly isFolder: boolean;

  /**
   * Read-only property; The level of the item in the folder structure of the Motion Presets panel.
   *
   * The Default Folder and Custom Presets folder are level 0.
   * @since Adobe Flash Professional CS4
   * @example
   *
   * The following example shows that the first item in the Motion Presets panel is level 0
   * and the second is level 1:
   *
   * ```javascript
   * var presetItemArray = fl.presetPanel.items;
   * fl.trace(presetItemArray[0].level);
   * fl.trace(presetItemArray[1].level);
   * ```
   */
  readonly level: number;

  /**
   * Read-only property; The name of the preset or folder, without path information.
   * @since Adobe Flash Professional CS4
   * @see {@link PresetItem.path}
   */
  readonly name: string;

  /**
   * Read-only property; Whether a folder in the Motion Presets panel is currently expanded (`true`) or not (`false`).
   *
   * This property is `true` if the item is not a folder.
   * To determine if an item is a folder or a preset, use {@link PresetItem.isFolder}.
   * @since Adobe Flash Professional CS4
   * @example
   *
   * The following example displays information on whether folders in the Motion Presets panel
   * are expanded or collapsed:
   *
   * ```javascript
   * fl.outputPanel.clear();
   * var presetItemArray = fl.presetPanel.items;
   * for (var i = 0; i < presetItemArray.length; i++) {
   *   var presetItem = presetItemArray[i];
   *   if (presetItem.isFolder) {
   *     var status = presetItem.open ? "Open" : "Closed";
   *     fl.trace(presetItem.level + "-" + presetItem.name + " folder is " + status);
   *   }
   * }
   * ```
   */
  readonly open: boolean;

  /**
   * Read-only property; The path to the item in the Motion Presets panel folder tree, and the item name.
   * @since Adobe Flash Professional CS4
   * @example
   *
   * The following example illustrates the difference
   * between the values in {@link PresetItem.name} and {@link PresetItem.path}.
   *
   * ```javascript
   * fl.outputPanel.clear();
   * var presetItemArray = fl.presetPanel.items;
   * for (var i = 0; i < presetItemArray.length; i++) {
   *   var presetItem = presetItemArray[i];
   *   fl.trace("Name: " + presetItem.name + "\n" + "Path: " + presetItem.path + "\n");
   * }
   * ```
   */
  readonly path: string;
}

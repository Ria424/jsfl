/**
 * The VideoItem object is a subclass of the {@link Item | Item object}.
 * @since Macromedia Flash MX Basic/Professional 2004
 */
interface VideoItem extends Item {
  /**
   * Read-only property: a string containing a hexadecimal number that represents the number of seconds
   * that have elapsed between January 1, 1970, and the modification date of the original file (on disk)
   * at the time the file was imported to the library.
   *
   * If the file no longer exists, this value is "00000000".
   * @since Adobe Flash Professional CS4
   * @example
   *
   * Assuming that the first item in the Library is a video item,
   * the following code displays a hexadecimal number as described above.
   *
   * ```javascript
   * var libItem = fl.getDocumentDOM().library.items[0];
   * fl.trace("Mod date when imported = " + libItem.fileLastModifiedDate);
   * ```
   * @see
   *
   * - {@link VideoItem.sourceFileExists}
   * - {@link VideoItem.sourceFileIsCurrent}
   * - {@link VideoItem.sourceFilePath}
   * - {@link FLfile.getModificationDate | FLfile.getModificationDate()}
   */
  readonly fileLastModifiedDate: string;

  /**
   * Read-only property; a hexadecimal value indicating the modification date and time of the video item.
   *
   * This value is incremented every time the video item is imported.
   * @since Adobe Flash Professional CS6
   * @example
   *
   * Assuming the first item in the Library is a video item,
   * the following code displays a hex number as described above.
   *
   * ```javascript
   * var libItem = fl.getDocumentDOM().library.items[0];
   * fl.trace("Mod date when imported = " + libItem.lastModifiedDate);
   * ```
   */
  readonly lastModifiedDate: string;

  /**
   * Read-only property: a boolean value of `true` if the file that was imported to the Library still exists
   * in the location from where it was imported; `false` otherwise.
   * @since Adobe Flash Professional CS4
   * @example
   *
   * Assuming that the first item in the Library is a video item,
   * the following code displays "true" if the file that was imported into the Library still exists.
   *
   * ```javascript
   * var libItem = fl.getDocumentDOM().library.items[0];
   * fl.trace("sourceFileExists = " + libItem.sourceFileExists);
   * ```
   * @see
   *
   * - {@link VideoItem.sourceFileIsCurrent}
   * - {@link VideoItem.sourceFilePath}
   */
  readonly sourceFileExists: boolean;

  /**
   * Read-only property: a boolean value of `true` if the file modification date of the Library item
   * is the same as the modification date (on disk) of the file that was imported; `false` otherwise.
   * @since Adobe Flash Professional CS4
   * @example
   *
   * Assuming that the first item in the Library is a video item,
   * the following code displays `true` if the file that was imported has not been modified on disk
   * since it was imported.
   *
   * ```javascript
   * var libItem = fl.getDocumentDOM().library.items[0];
   * fl.trace("fileIsCurrent = " + libItem.sourceFileIsCurrent);
   * ```
   * @see
   *
   * - {@link VideoItem.fileLastModifiedDate}
   * - {@link VideoItem.sourceFilePath}
   */
  readonly sourceFileIsCurrent: boolean;

  /**
   * Read-only property; a string, expressed as a file:/// URI that specifies the path to the video item.
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example displays the name and source file path of any items in the library that are of type video:
   *
   * ```javascript
   * for (idx in fl.getDocumentDOM().library.items) {
   *   if (fl.getDocumentDOM().library.items[idx].itemType == "video") {
   *     var myItem = fl.getDocumentDOM().library.items[idx];
   *     fl.trace(myItem.name + " source is " + myItem.sourceFilePath);
   *   }
   * }
   * ```
   * @see {@link VideoItem.sourceFileExists}
   */
  readonly sourceFilePath: string;

  /**
   * Read-only property; The type of video the item represents.
   *
   * Possible values are "embedded video" and "video".
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example displays the name and type of any items in the library that are of type video:
   *
   * ```javascript
   * for (idx in fl.getDocumentDOM().library.items) {
   *   if (fl.getDocumentDOM().library.items[idx].itemType == "video") {
   *     var myItem = fl.getDocumentDOM().library.items[idx];
   *     fl.trace(myItem.name + " is " + myItem.videoType);
   *   }
   * }
   * ```
   */
  readonly videoType: "embedded video" | "video";
}

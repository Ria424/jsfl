/**
 * A BitmapItem object refers to a bitmap in the library of a document.
 *
 * The BitmapItem object is a subclass of the {@link Item | Item object}.
 * @since Macromedia Flash MX Basic/Professional 2004
 */
interface BitmapItem extends Item {
  /**
   * Method; Exports the specified item to a PNG or JPG file.
   * @since Adobe Flash Professional CS4. The **`quality`** parameter was added in Adobe Flash Professional CS6.
   * @param fileURI A string, expressed as a file:/// URI, that specifies the path and name of the exported file.
   * @param quality A integer, from 1-100, that determines the quality of the exported image file.
   *
   * A higher number indicates higher quality. The default is 80.
   * @returns A boolean value of `true` if the file was exported successfully; `false` otherwise.
   * @example
   *
   * ```javascript
   * // Assuming the first item in the Library is a bitmap item, the following code exports it as a JPG file:
   *
   * var imageFileURL = "file:///C|/exportTest/out.jpg";
   * var libItem = fl.getDocumentDOM().library.items[0];
   * libItem.exportToFile(imageFileURL);
   * ```
   */
  exportToFile(fileURI: string, quality: number): boolean;

  /**
   * Property; A string that determines the type of image compression applied to the bitmap.
   *
   * Acceptable values are "photo" or "lossless".
   *
   * If the value of {@link BitmapItem.useImportedJPEGQuality} is `false`,
   * "photo" corresponds to JPEG with a quality from 0 to 100;
   *
   * if {@link BitmapItem.useImportedJPEGQuality} is `true`,
   * "photo" corresponds to JPEG using the default document quality value.
   *
   * The value "lossless" corresponds to GIF or PNG format.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following code sets the compressionType property of the first item in the library of the current document
   * to "photo":
   *
   * ```javascript
   * fl.getDocumentDOM().library.items[0].compressionType = "photo";
   * alert(fl.getDocumentDOM().library.items[0].compressionType);
   * ```
   */
  compressionType: "photo" | "lossless";

  /**
   * Read-only property; A string containing a hexadecimal number that represents the number of seconds
   * that have elapsed between January 1, 1970
   * and the modification date of the original file at the time the file was imported to the library.
   *
   * If the file no longer exists, this value is `"00000000"`.
   * @since Adobe Flash Professional CS4
   * @example
   *
   * ```javascript
   * // Assuming the first item in the Library is a bitmap item,
   * // the following code displays a hex number as described above.
   *
   * var libItem = fl.getDocumentDOM().library.items[0];
   * fl.trace("Mod date when imported = " + libItem.fileLastModifiedDate);
   * ```
   * @see
   *
   * - {@link BitmapItem.sourceFileExists}
   * - {@link BitmapItem.sourceFileIsCurrent}
   * - {@link BitmapItem.sourceFilePath}
   * - {@link FLfile.getModificationDate | FLfile.getModificationDate()}
   */
  readonly fileLastModifiedDate: string;

  /**
   * Read-only property; The width of the bitmap, in pixels.
   * @since Adobe Flash Professional CS6
   * @example
   *
   * The following code illustrates use of this property.
   *
   * ```javascript
   * // get the number of pixels in the horizontal dimension.
   * var bmItemObj = fl.getDocumentDOM().library.items[0];
   * var numHorizontalPixels = bmItemObj.hPixels;
   * ```
   * @see {@link BitmapItem.vPixels}
   */
  readonly hPixels: number;

  /**
   * Read-only property; A boolean indicating if a bitmap in the library has a valid/useful alpha channel.
   *
   * This flag will help you decide if you should export the bitmap item as a PNG
   * instead of a JPEG using the {@link BitmapItem.exportToFile | BitmapItem.exportToFile()} method.
   * @since Adobe Flash Professional CS6
   * @example
   *
   * The following code exports a library item with the proper file name extension
   * depending on whether it has a valid alpha layer.
   *
   * ```javascript
   * var bitmapItem = fl.getDocumentDOM().library.items[0];
   * var uri = fl.browseForFileURI("open");
   * if (bitmapItem.hasValidAlphaLayer) {
   *   uri += ".png";
   * } else {
   *   uri += ".jpg";
   * }
   * bitmapItem.exportToFile(uri);
   * ```
   * @see
   *
   * - {@link BitmapItem.sourceFileExists}
   * - {@link BitmapItem.sourceFileIsCurrent}
   * - {@link BitmapItem.sourceFilePath}
   * - {@link FLfile.getModificationDate | FLfile.getModificationDate()}
   */
  readonly hasValidAlphaLayer: boolean;

  readonly itemType: "bitmap";

  /**
   * Read-only property; A hexadecimal value indicating the modification date and time of the bitmap item.
   *
   * This value is incremented every time the bitmap item is imported.
   *
   * For example, selecting the Update button from the Bitmap Properties dialog will trigger an import.
   * @since Adobe Flash Professional CS6
   * @example
   *
   * ```javascript
   * // Assuming the first item in the Library is a bitmap item,
   * the following code displays a hex number as described above.
   *
   * var libItem = fl.getDocumentDOM().library.items[0];
   * fl.trace("Mod date when imported = " + libItem.lastModifiedDate);
   * ```
   * @see
   *
   * - {@link BitmapItem.sourceFileExists}
   * - {@link BitmapItem.sourceFileIsCurrent}
   * - {@link BitmapItem.sourceFilePath}
   * - {@link FLfile.getModificationDate | FLfile.getModificationDate()}
   */
  readonly lastModifiedDate: string;

  /**
   * Read-only property; Whether the specified item was imported as an jpeg file.
   *
   * Possible values for this property are "photo" (for jpeg files)
   * and "lossless" (for uncompressed file types such as GIF and PNG).
   * @since Adobe Flash Professional CS4
   * @example
   *
   * ```javascript
   * // Assuming that the first item in the Library is a bitmap item,
   * the following code displays "photo" if the file was imported into the Library as a jpeg file,
   * or "lossless" if is was not:
   *
   * var libItem = fl.getDocumentDOM().library.items[0];
   * fl.trace("Imported compression type = " + libItem.originalCompressionType);
   * ```
   * @see {@link BitmapItem.compressionType}
   */
  readonly originalCompressionType: "photo" | "lossless";

  /**
   * Property; The quality of the bitmap.
   *
   * To use the default document quality, specify -1; otherwise, specify an integer from 0 to 100.
   *
   * Available only for JPEG compression.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following code sets the `quality` property of the first item in the library of the current document to 65:
   *
   * ```javascript
   * fl.getDocumentDOM().library.items[0].quality = 65;
   * alert(fl.getDocumentDOM().library.items[0].quality);
   * ```
   */
  quality: number;

  /**
   * Read-only property; A boolean value of `true`
   * if the file that was imported to the Library still exists in the location from where it was imported;
   * `false` otherwise.
   * @since Adobe Flash Professional CS4
   * @example
   *
   * ```javascript
   * // Assuming the first item in the Library is a bitmap item,
   * // the following code displays "true" if the file that was imported into the Library still exists.
   *
   * var libItem = fl.getDocumentDOM().library.items[0];
   * fl.trace("sourceFileExists = " + libItem.sourceFileExists);
   * ```
   * @see
   *
   * - {@link BitmapItem.sourceFileIsCurrent}
   * - {@link BitmapItem.sourceFilePath}
   */
  readonly sourceFileExists: boolean;

  /**
   * Read-only property; A boolean value of `true`
   * if the file modification date of the Library item is the same as the modification date on disk of the file
   * that was imported. `false` otherwise.
   * @since Adobe Flash Professional CS4
   * @example
   *
   * ```javascript
   * // Assuming the first item in the Library is a bitmap item,
   * // the following code displays `true` if the file that was imported has not been modified on disk
   * // since it was imported:
   *
   * var libItem = fl.getDocumentDOM().library.items[0];
   * fl.trace("fileIsCurrent = " + libItem.sourceFileIsCurrent);
   * ```
   * @see
   *
   * - {@link BitmapItem.fileLastModifiedDate}
   * - {@link BitmapItem.sourceFilePath}
   */
  readonly sourceFileIsCurrent: boolean;

  /**
   * Read-only property; A string, expressed as a file:/// URI,
   * that represents the path and name of the file that was imported into the Library.
   * @since Adobe Flash Professional CS4
   * @example
   *
   * The following example displays the name and source file path of any items in the library
   * that are of type "bitmap":
   *
   * ```javascript
   * for (idx in fl.getDocumentDOM().library.items) {
   *   if (fl.getDocumentDOM().library.items[idx].itemType == "bitmap") {
   *     var myItem = fl.getDocumentDOM().library.items[idx];
   *     fl.trace(myItem.name + " source is " + myItem.sourceFilePath);
   *   }
   * }
   * ```
   * @see {@link BitmapItem.sourceFileExists}
   */
  readonly sourceFilePath: string;

  /**
   * Property; Whether deblocking is enabled (`true`) or not (`false`).
   * @since Adobe Flash Professional CS4
   * @example
   *
   * ```javascript
   * // Assuming the first item in the Library is a bitmap item,
   * the following code enables deblocking for the item:
   *
   * var libItem = fl.getDocumentDOM().library.items[0];
   * libItem.useDeblocking = true;
   * ```
   */
  useDeblocking: boolean;

  /**
   * Property; Whether to use the default imported JPEG quality (`true`) or not (`false`).
   *
   * Available only for JPEG compression.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following code sets the `useImportedJPEGQuality` property
   * of the first item in the library of the current document to `true`:
   *
   * ```javascript
   * fl.getDocumentDOM().library.items[0].useImportedJPEGQuality = true;
   * alert(fl.getDocumentDOM().library.items[0].useImportedJPEGQuality);
   * ```
   */
  useImportedJPEGQuality: boolean;

  /**
   * Read-only property; An integer that specifies the height of the bitmap, in pixels.
   * @since Adobe Flash Professional CS6
   * @example
   *
   * The following code illustrates use of this property.
   *
   * ```javascript
   * // get the number of pixels in the vertical dimension
   * var bmitemObj = fl.getDocumentDOM().library.items[0];
   * var numHorizontalPixels = bmitemObj.vPixels;
   * ```
   * @see {@link BitmapItem.hPixels}
   */
  readonly vPixels: number;
}

/**
 * A library {@link Item} used to create a sound.
 * @since Macromedia Flash MX Basic/Professional 2004
 * @see {@link Frame.soundLibraryItem}
 */
interface SoundItem extends Item {
  /**
   * Method; exports the specified item to a WAV or MP3 file.
   *
   * Export settings are based on the item being exported.
   *
   * When exporting sound items, you should check if the {@link SoundItem.originalCompressionType} property
   * is equal to `"RAW"``.
   * If this check is `false`, you can only export the file as MP3.
   * (Optionally, you can try exporting as a WAV file, and if the function returns `false`, then try to export to MP3.)
   * @since Adobe Flash Professional CS4
   * @param fileURI A string, expressed as a file:/// URI, that specifies the path and name of the exported file.
   * @returns True if the file was exported successfully; false otherwise.
   * @usage *soundItem.exportToFile(fileURI)*
   * @example
   *
   * Assuming that the first item in the Library is a sound item, the following code exports it as a WAV file:
   *
   * ```javascript
   * var soundFileURL = "file:///C|/out.wav";
   * var libItem = fl.getDocumentDOM().library.items[0];
   * libItem.exportToFile(soundFileURL);
   * ```
   */
  exportToFile(fileURI: string): boolean;

  /**
   * Property; The bit rate of a sound in the library.
   *
   * This property is available only for the **MP3 compression** type.
   *
   * Acceptable values are "8 kbps", "16 kbps", "20 kbps", "24 kbps", "32 kbps", "48 kbps", "56 kbps", "64 kbps", "80 kbps", "112 kbps", "128 kbps", and "160 kbps".
   *
   * Stereo sounds exported at 8 Kbps or 16 Kbps are converted to mono.
   *
   * The property is `undefined` for other compression types.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example displays the bitRate value in the Output panel if the specified item in the library has the MP3 compression type:
   *
   * ```javascript
   * alert(fl.getDocumentDOM().library.items[0].bitRate);
   * ```
   * @see
   *
   *  - {@link SoundItem.compressionType}
   *  - {@link SoundItem.convertStereoToMono}
   */
  bitrate: "8 kbps" | "16 kbps" | "20 kbps" | "24 kbps" | "32 kbps" | "48 kbps" | "56 kbps" | "64 kbps" | "80 kbps" | "112 kbps" | "128 kbps" | "160 kbps" | undefined;

  /**
   * Property; The bits value for a sound in the library that has **ADPCM compression**.
   *
   * Acceptable values are "2 bit", "3 bit", "4 bit", and "5 bit".
   *
   * If you want to specify a value for this property, set {@link SoundItem.useImportedMP3Quality} to `false`.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example displays the bits value in the Output panel
   * if the currently selected item in the library has the ADPCM compression type:
   *
   * ```javascript
   * alert(fl.getDocumentDOM().library.items[0].bits);
   * ```
   * @see {@link SoundItem.compressionType}
   */
  bits: "2 bit" | "3 bit" | "4 bit" | "5 bit";

  /**
   * Property; Compression type for a sound in the library.
   *
   * Acceptable values are Default", "ADPCM", "MP3", "Raw", and "Speech".
   *
   * If you want to specify a value for this property, set {@link SoundItem.useImportedMP3Quality} to `false`.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example changes an item in the library to compression type Raw:
   *
   * ```javascript
   * fl.getDocumentDOM().library.items[0].compressionType = "Raw";
   * ```
   *
   * The following example changes the compression type of the selected library items to Speech:
   *
   * ```javascript
   * fl.getDocumentDOM().library.getSelectedItems().compressionType = "Speech";
   * ```
   * @see {@link SoundItem.originalCompressionType}
   */
  compressionType: "Default" | "ADPCM" | "MP3" | "Raw" | "Speech";

  /**
   * Property; a boolean value available only for MP3 and Raw compression types.
   *
   * Setting this value to true converts a stereo sound to mono; `false` leaves it as stereo.
   *
   * For the MP3 compression type, if {@link SoundItem.bitRate} is less than 20 Kbps,
   * this property is ignored and forced to `true`.
   *
   * If you want to specify a value for this property, set {@link SoundItem.useImportedMP3Quality} to `false`.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example converts an item in the library to mono only
   * if the item has the MP3 or Raw compression type:
   *
   * ```javascript
   * fl.getDocumentDOM().library.items[0].convertStereoToMono = true;
   * ```
   * @see {@link SoundItem.compressionType}
   */
  convertStereoToMono: boolean;

  /**
   * Read-only property: a string containing a hexadecimal number that represents the number of seconds
   * that have elapsed between January 1, 1970, and the modification date of the original file (on disk)
   * at the time the file was imported to the library.
   *
   * If the file no longer exists, this value is "00000000".
   * @since Adobe Flash Professional CS4
   * @example
   *
   * Assuming that the first item in the Library is a sound item,
   * the following code displays a hexadecimal number as described above.
   *
   * ```javascript
   * var libItem = fl.getDocumentDOM().library.items[0];
   * fl.trace("Mod date when imported = " + libItem.fileLastModifiedDate);
   * ```
   * @see
   *
   * - {@link SoundItem.sourceFileExists}
   * - {@link SoundItem.sourceFileIsCurrent}
   * - {@link SoundItem.sourceFilePath}
   * - {@link FLfile.getModificationDate | FLfile.getModificationDate()}
   */
  readonly fileLastModifiedDate: string;

  readonly itemType: "sound"

  /**
   * Read-only property; a hexadecimal value indicating the modification date and time of the sound item.
   *
   * This value is incremented every time the sound item is imported.
   * For example, selecting the Update button from the Sound Properties dialog will trigger an import.
   * @since Adobe Flash Professional CS6
   * @example
   *
   * Assuming the first item in the Library is a sound item,
   * the following code displays a hex number as described above.
   *
   * ```javascript
   * var libItem = fl.getDocumentDOM().library.items[0];
   * fl.trace("Mod date when imported = " + libItem.lastModifiedDate);
   * ```
   */
  readonly lastModifiedDate: string;

  /**
   * Read-only property: a string that specifies whether the specified item was imported as an mp3 file.
   *
   * Possible values for this property are "RAW" and "MP3".
   * @since Adobe Flash Professional CS4
   * @example
   *
   * Assuming that the first item in the Library is a sound item,
   * the following code displays "MP3" if the file was imported into the Library as an MP3 file,
   * or "RAW" if it was not:
   *
   * ```javascript
   * var libItem = fl.getDocumentDOM().library.items[0];
   * fl.trace("Imported compression type = " + libItem.originalCompressionType);
   * ```
   * @see {@link SoundItem.compressionType}
   */
  readonly originalCompressionType: "RAW" | "MP3";

  /**
   * Property; The playback quality of a sound in the library.
   *
   * This property is available only for the **MP3 compression** type.
   *
   * Acceptable values are "Fast", "Medium", and "Best".
   *
   * If you want to specify a value for this property, set {@link SoundItem.useImportedMP3Quality} to `false`.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the playback quality of an item in the library to "Best"
   * if the item has the MP3 compression type:
   *
   * ```javascript
   * fl.getDocumentDOM().library.items[0].quality = "Best";
   * ```
   * @see {@link SoundItem.compressionType}
   */
  quality: "Fast" | "Medium" | "Best";

  /**
   * Property; The sample rate for the audio clip.
   *
   * This property is available only for the **ADPCM**, **Raw**, and **Speech** compression types.
   *
   * Acceptable values are "5 kHz", "11 kHz", "22 kHz", and "44 kHz".
   *
   * If you want to specify a value for this property, set {@link SoundItem.useImportedMP3Quality} to `false`.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the sample rate of an item in the library to 5 kHz
   * if the item has the ADPCM, Raw, or Speech compression type:
   *
   * ```javascript
   * fl.getDocumentDOM().library.items[0].sampleRate = "5 kHz";
   * ```
   * @see {@link SoundItem.compressionType | SoundItem.compressionType}
   */
  sampleRate: "5 kHz" | "11 kHz" | "22 kHz" | "44 kHz";

  /**
   * Read-only property: a boolean value of `true` if the file that was imported to the Library still exists
   * in the location from where it was imported; `false` otherwise.
   * @since Adobe Flash Professional CS4
   * @example
   *
   * Assuming that the first item in the Library is a sound item,
   * the following code displays `true` if the file that was imported into the Library still exists.
   *
   * ```javascript
   * var libItem = fl.getDocumentDOM().library.items[0];
   * fl.trace("sourceFileExists = " + libItem.sourceFileExists);
   * ```
   * @see
   *
   * - {@link SoundItem.sourceFileIsCurrent}
   * - {@link SoundItem.sourceFilePath}
   */
  readonly sourceFileExists: boolean;

  /**
   * Read-only property: a boolean value of `true` if the file modification date of the Library item
   * is the same as the modification date on disk of the file that was imported; `false` otherwise.
   * @since Adobe Flash Professional CS4
   * @example
   *
   * Assuming that the first item in the Library is a sound item,
   * the following code displays "true" if the file that was imported
   * has not been modified on disk since it was imported.
   *
   * ```javascript
   * var libItem = fl.getDocumentDOM().library.items[0];
   * fl.trace("fileIsCurrent = " + libItem.sourceFileIsCurrent);
   * ```
   * @see
   *
   * - {@link SoundItem.fileLastModifiedDate}
   * - {@link SoundItem.sourceFilePath}
   */
  readonly sourceFileIsCurrent: boolean;

  /**
   * Read-only property: a string, expressed as a file:/// URI, that represents the path and name of the file
   * that was imported into the Library.
   * @since Adobe Flash Professional CS4
   * @example
   *
   * The following example displays the name and source file path of any items in the library that are of type "sound":
   *
   * ```javascript
   * for (idx in fl.getDocumentDOM().library.items) {
   *   if (fl.getDocumentDOM().library.items[idx].itemType == "sound") {
   *     var myItem = fl.getDocumentDOM().library.items[idx];
   *     fl.trace(myItem.name + " source is " + myItem.sourceFilePath);
   *   }
   * }
   * ```
   * @see {@link SoundItem.sourceFileExists}
   */
  readonly sourceFilePath: string;

  /**
   * Property; a boolean value. If `true`, all other properties are ignored, and the imported MP3 quality is used.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets an item in the library to use the imported MP3 quality:
   *
   * ```javascript
   * fl.getDocumentDOM().library.items[0].useImportedMP3Quality = true;
   * ```
   * @see {@link SoundItem.compressionType}
   */
  useImportedMP3Quality: boolean;
}

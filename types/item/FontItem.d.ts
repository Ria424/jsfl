/**
 * The FontItem object is a subclass of the {@link Item | Item object}.
 * @since Macromedia Flash MX Basic/Professional 2004
 */
interface FontItem extends Item {
  /**
   * Property; Whether the Font item is bold (true) or not (false).
   * @since Adobe Flash Professional CS4
   * @example
   *
   * Assuming that the first item in the Library is a Font item,
   * the following code displays `true` in the Output panel if it is bold,
   * `false` if it is not, and then sets it to bold.
   *
   * ```javascript
   * var theItem = fl.getDocumentDOM().library.items[0];
   * fl.outputPanel.clear();
   * fl.trace("bold: " + theItem.bold);
   * theItem.bold = true;
   * fl.trace("bold: " + theItem.bold);
   * ```
   */
  bold: boolean;

  /**
   * Property; Specifies a series of delimited integers that correspond to items that can be selected
   * in the Font Embedding dialog box.
   *
   * This property can also be read, allowing you to find out what characters were specified
   * with the Font Embedding dialog box for a given Font item.
   *
   * ***Note:** The range numbers correspond to the FontEmbedding/UnicodeTables.xml file found
   * in the configuration folder.*
   * @since Adobe Flash Professional CS5
   * @example
   *
   * Assuming that the first item in the Library is a Font item, the following code embeds the ranges identified by the
   * integers 1, 3, and 7.
   *
   * ```javascript
   * fl.getDocumentDOM().library.items[0].embedRanges = "1|3|7";
   * ```
   *
   * Assuming that the first item in the Library is a Font item, the following code resets the ranges to embed.
   *
   * ```javascript
   * fl.getDocumentDOM().library.items[0].embedRanges = "";
   * ```
   */
  embedRanges: string;

  /**
   * Property; Whether variant glyphs should be output in the font when publishing a SWF file (`true`) or not (`false`).
   *
   * Setting this value to true increases the size of your SWF file. The default value is `false`.
   *
   * Some languages dynamically substitute characters glyphs as you are typing
   * (for example, Thai, Arabic, Hebrew, and Greek).
   *
   * If you are laying out or inputting text in these types of languages, set this property to `true`.
   * @since Adobe Flash Professional CS4.
   *
   * ***Note:** While this property is available in Flash CS5 Professional,
   * it has no effect when applied to Text Layout Framework (TLF) text.
   * Beginning in Flash Professional CS5,
   * variant glyphs are always embedded in fonts used with TLF text.
   * The flash.text.engine (FTE) referenced below is only available in Flash Professional CS4.*
   * @see
   *
   * - {@link FontItem.isDefineFont4Symbol}
   * - {@link Text.embedVariantGlyphs}
   */
  embedVariantGlyphs: boolean;

  /**
   * Property; Characters to embed within a SWF file so that the characters do not need to be present on the devices
   * the SWF file eventually plays back on.
   *
   * This property provides the same functionality as the Font Embedding dialog box.
   *
   * This property can also be read, allowing you to find out what characters were specified
   * with the Font Embedding dialog box for a given Font item.
   * @since Adobe Flash Professional CS5
   * @example
   *
   * Assuming that the first item in the Library is a Font item,
   * the following code embeds the characters "a", "b", and "c".
   *
   * ```javascript
   * fl.getDocumentDOM().library.items[0].embeddedCharacters = "abc";
   * ```
   */
  embeddedCharacters: string;

  /**
   * Property; The name of the device font associated with the Font item.
   *
   * If you enter a string that does not correspond to an installed device font, an error message is displayed.
   *
   * To determine if a font exists on the system, use {@link Flash.isFontInstalled | Flash.isFontInstalled()}.
   *
   * ***Note:** When you set this value, the resulting property value might be different from the string you enter.
   * See the following example.*
   * @since Adobe Flash Professional CS4
   * @example
   *
   * Assuming that the first item in the Library is a Font item,
   * the following code displays the name of the device font currently associated with the Font item,
   * then changes it to "Times":
   *
   * ```javascript
   * fl.outputPanel.clear();
   * var theItem = fl.getDocumentDOM().library.items[0];
   * fl.trace(theItem.font);
   * theItem.font = "Times";
   * // depending on your system, the following may display something like "Times-Roman"
   * fl.trace(theItem.font);
   * ```
   */
  font: string;

  /**
   * Property; A boolean value that specifies the format of the font that is output when publishing a SWF file.
   *
   * If this value is `true`, Flash outputs a font that can be used with the flash.text.engine (FTE) APIs.
   * If this value is `false`, the font can be used with the flash.text APIs, including text fields.
   * The default value is `false`.
   * @since Adobe Flash Professional CS4
   * @see {@link FontItem.embedVariantGlyphs}
   */
  isDefineFont4Symbol: boolean;

  /**
   * Property; Specifies whether the Font item is italic (`true`) or not (`false`).
   * @since Adobe Flash Professional CS4
   * @example
   *
   * Assuming that the first item in the Library is a Font item,
   * the following code displays `true` in the Output panel if it is italic,
   * `false` if it is not, and then sets it to italic.
   *
   * ```javascript
   * var theItem = fl.getDocumentDOM().library.items[0];
   * fl.outputPanel.clear();
   * fl.trace("italic: " + theItem.italic);
   * theItem.italic = true;
   * fl.trace("italic: " + theItem.italic);
   * ```
   */
  italic: boolean;

  readonly itemType: "font";

  /**
   * Property; Represents the size of the Font item, in points.
   * @since Adobe Flash Professional CS4
   * @example
   *
   * Assuming that the first item in the Library is a Font item,
   * the following code displays the item's point size in the Output panel and then sets it to 24.
   *
   * ```javascript
   * var theItem = fl.getDocumentDOM().library.items[0];
   * fl.outputPanel.clear();
   * fl.trace("font size: " + theItem.size);
   * theItem.size = 24;
   * fl.trace("font size: " + theItem.size);
   * ```
   */
  size: number;
}

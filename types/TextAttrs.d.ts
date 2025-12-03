/**
 * The TextAttrs object contains all the properties of text that can be applied to a subselection.
 * This object is a property of the TextRun object ({@link TextRun.textAttrs}).
 * @since Macromedia Flash MX Basic/Professional 2004
 */
interface TextAttrs {
  /**
   * Property; a string that specifies paragraph justification.
   *
   * Acceptable values are "left", "center", "right", and "justify".
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the paragraphs that contain characters between index 0 up to,
   * but not including, index 3 to justify.
   * This can affect characters outside the specified range if they are in the same paragraph.
   *
   * ```javascript
   * fl.getDocumentDOM().setTextSelection(0, 3);
   * fl.getDocumentDOM().setElementTextAttr("alignment", "justify");
   * ```
   */
  alignment: "left" | "center" | "right" | "justify";

  /**
   * Property; a boolean value that determines whether Flash uses (`true`)
   * or ignores (`false`) pair kerning information in the font(s) when it kerns the text.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example selects the characters from index 2 up to, but not including,
   * index 6 and sets the `autoKern` property to true:
   *
   * ```javascript
   * fl.getDocumentDOM().setTextSelection(3, 6);
   * fl.getDocumentDOM().setElementTextAttr("autoKern", true);
   * ```
   */
  autoKern: boolean;

  /**
   * Property; a boolean value. A value of true causes text to appear with the bold version of the font.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example selects the first character of the selected Text object
   * and sets the `bold` property to true:
   *
   * ```javascript
   * fl.getDocumentDOM().setTextSelection(0, 1);
   * fl.getDocumentDOM().setElementTextAttr("bold", true);
   * ```
   */
  bold: boolean;

  /**
   * Property; Determines the baseline for the text.
   *
   * Acceptable values are "normal", "subscript", and "superscript".
   *
   * This property applies only to **static text**.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example selects the characters from index 2 up to, but not including,
   * index 6 of the selected text field and sets the `characterPosition` property to "subscript":
   *
   * ```javascript
   * fl.getDocumentDOM().setTextSelection(2, 6);
   * fl.getDocumentDOM().setElementTextAttr("characterPosition", "subscript");
   * ```
   */
  characterPosition: "normal" | "subscript" | "superscript";

  /**
   * Property; an integer that represents the space between characters.
   *
   * Acceptable values are -60 through 60.
   *
   * This property applies only to **static text**; it generates a warning if used with other text types.
   * @since Macromedia Flash MX Basic/Professional 2004 Flash MX 2004.
   *
   * Deprecated in Flash 8 in favor of {@link TextAttrs.letterSpacing}.
   * @example
   *
   * The following example sets the character spacing of the selected text field to 10:
   *
   * ```javascript
   * fl.getDocumentDOM().setElementTextAttr("characterSpacing", 10);
   * ```
   */
  characterSpacing: number;

  /**
   * Property; a string that represents the name of the font, such as "Arial".
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the font of the selected text field from the character at index 2 up to,
   * but not including, the character at index 8 to "Arial":
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].setTextAttr("face", "Arial", 2, 8);
   * ```
   */
  face: string;

  /**
   * Property; the color of the fill, in one of the following formats:
   *
   * - A string in the format `"#RRGGBB"` or `"#RRGGBBAA"`
   * - A hexadecimal number in the format `0xRRGGBB`
   * - An integer that represents the decimal equivalent of a hexadecimal number
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the color to red for the selected text field from the character at index 2 up to,
   * but not including, the character at index 8:
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].setTextAttr("fillColor", 0xff0000, 2, 8);
   * ```
   */
  fillColor: number;

  /**
   * Property; an integer that specifies paragraph indentation.
   *
   * Acceptable values are -720 through 720.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the indentation of the selected text field from the character at index 2 up to,
   * but not including, the character at index 8 to 100.
   * This can affect characters outside the specified range if they are in the same paragraph.
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].setTextAttr("indent", 100, 2, 8);
   * ```
   */
  indent: number;

  /**
   * Property; a boolean value.
   * A value of true causes text to appear with the italic version of the font.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the selected text field to "italic":
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].setTextAttr("italic", true);
   * ```
   */
  italic: boolean;

  /**
   * Property; an integer that specifies the paragraph's left margin.
   *
   * Acceptable values are 0 through 720.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the `leftMargin` property of the selected text field
   * the character at index 2 up to, but not including, the character at index 8 to 100.
   * This can affect characters outside the specified range if they are in the same paragraph.
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].setTextAttr("leftMargin", 100, 2, 8);
   * ```
   */
  leftMargin: number;

  /**
   * Property; an integer that represents the space between characters.
   *
   * Acceptable values are -60 through 60.
   *
   * This property applies only to **static text**; it generates a warning if used with other text types.
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following code selects the characters from index 0 up to but not including index 10
   * and sets the character spacing to 60:
   *
   * ```javascript
   * fl.getDocumentDOM().setTextSelection(0, 10);
   * fl.getDocumentDOM().setElementTextAttr("letterSpacing", 60);
   * ```
   */
  letterSpacing: number;

  /**
   * Property; an integer that specifies the line spacing (*leading*) of the paragraph.
   *
   * Acceptable values are -360 through 720.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the selected text field's lineSpacing property to 100:
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].setTextAttr("lineSpacing", 100);
   * ```
   */
  lineSpacing: number;

  /**
   * Property; an integer that specifies the paragraph's right margin.
   *
   * Acceptable values are 0 through 720.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the rightMargin property of the selected text field from the character at index 2 up to,
   * but not including, the character at index 8 to 100.
   * This can affect characters outside the specified range if they are in the same paragraph.
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].setTextAttr("rightMargin", 100, 2, 8);
   * ```
   */
  rightMargin: number;

  /**
   * Property; a boolean value.
   * A value of true causes Flash to rotate the characters of the text 90º.
   * The default value is *false*.
   *
   * This property applies only to **static text with a vertical orientation**;
   * it generates a warning if used with other text types.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the rotation of the selected text field to true:
   *
   * ```javascript
   * fl.getDocumentDOM().setElementTextAttr("rotation", true);
   * ```
   */
  rotation: boolean;

  /**
   * Property; an integer that specifies the size of the font.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example retrieves the size of the character at index 2 and shows the result in the Output panel:
   *
   * ```javascript
   * fl.outputPanel.trace(fl.getDocumentDOM().selection[0].getTextAttr("size", 2));
   * ```
   */
  size: number;

  /**
   * Property; a string that represents the target property of the text field.
   *
   * This property works only with **static text**.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example gets the target property of the text field in the first frame
   * of the top layer of the current scene and shows it in the Output panel:
   *
   * ```javascript
   * fl.outputPanel.trace(fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].getTextAttr("target"));
   * ```
   */
  target: string;

  /**
   * Property; a string that represents the URL property of the text field.
   *
   * This property works only with **static text**.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the URL of the selected text field to
   * {@link https://www.adobe.com | https://www.adobe.com}.
   *
   * ```javascript
   * fl.getDocumentDOM().setElementTextAttr("url", "https://www.adobe.com");
   * ```
   */
  url: string;
}

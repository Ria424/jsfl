/**
 * The Text object represents a single text item in a document.
 * All properties of the text pertain to the entire text block.
 *
 * To set properties of a text run within the text field,
 * see the Property summary for the {@link TextAttrs | TextAttrs object}.
 *
 * To change properties of a selection within a text field,
 * you can use {@link Document.setElementTextAttr | Document.setElementTextAttr()} and specify a range of text,
 * or use the current selection.
 *
 * To set generic properties of the selected text field, use {@link Document.setElementProperty | Document.setElementProperty()}.
 * The following example sets the x value of the selected text field's registration point to 50:
 *
 * ```javascript
 * fl.getDocumentDOM().setElementProperty("x", 50);
 * ```
 * @since Macromedia Flash MX Basic/Professional 2004
 */
interface Text extends Element {
  /**
   * Method; Retrieves the attribute specified by the **`attrName`** parameter for the text identified by the optional **`startIndex`** and **`endIndex`** parameters.
   *
   * If the attribute is not consistent for the specified range, Flash returns undefined.
   *
   * If you omit the optional parameters **`startIndex`** and **`endIndex`**, the method uses the entire text range.
   *
   * If you specify only **`startIndex`**, the range used is a single character at that position.
   *
   * If you specify both **`startIndex`** and **`endIndex`**, the range starts from **`startIndex`** and goes up to, but does not include, **`endIndex`**.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param attrName The name of the TextAttrs object property to be returned.
   * For a list of possible values for **`attrName`**, see the Property summary for the {@link TextAttrs | TextAttrs object}.
   * @param [startIndex] An integer that is the index of first character. This parameter is optional.
   * @param [endIndex] An integer that specifies the end of the range of text,
   * which starts with **`startIndex`** and goes up to, but does not include, **`endIndex`**. This parameter is optional.
   * @returns The value of the attribute specified in the **`attrName`** parameter.
   * @usage text.getTextAttr(attrName [, startIndex [, endIndex]])
   * @example
   *
   * The following example gets the font size of the currently selected text field and shows it:
   *
   * ```javascript
   * var textSize = fl.getDocumentDOM().selection[0].getTextAttr("size");
   * fl.trace(textSize);
   * ```
   *
   * The following example gets the text fill color of the selected text field:
   *
   * ```javascript
   * var fill = fl.getDocumentDOM().selection[0].getTextAttr("fillColor");
   * fl.trace(fill);
   * ```
   *
   * The following example gets the size of the third character:
   *
   * ```javascript
   * var char3 = fl.getDocumentDOM().selection[0].getTextAttr("size", 2);
   * fl.trace(char3);
   * ```
   *
   * The following example gets the color of the selected text field from the third through the eighth character:
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].getTextAttr("fillColor", 2, 8);
   * ```
   */
  getTextAttr(attrName: string, startIndex?: number, endIndex?: number): any;

  /**
   * Method; retrieves the specified range of text.
   *
   * If you omit the optional parameters **`startIndex`** and **`endIndex`**, the whole text string is returned.
   *
   * If you specify only **`startIndex`**, the method returns the string starting at the index location and ending at the end of the field.
   *
   * If you specify both **`startIndex`** and **`endIndex`**, the method returns the string starting from **`startIndex`** and goes up to,
   * but does not include, **`endIndex`**.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param [startIndex] An integer that specifies the index (zero-based) of the first character.
   * This parameter is optional.
   * @param [endIndex] An integer that specifies the end of the range of text,
   * which starts from **`startIndex`** and goes up to, but does not include, **`endIndex`**.
   * This parameter is optional.
   * @returns A string of the text in the specified range.
   * @usage text.getTextString([startIndex [, endIndex]])
   * @example
   *
   * The following example gets the character(s) from the fifth character through the end of the selected text field:
   *
   * ```javascript
   * var myText = fl.getDocumentDOM().selection[0].getTextString(4);
   * fl.trace(myText);
   * ```
   *
   * The following example gets the fourth through the ninth characters starting in the selected text field:
   *
   * ```javascript
   * var myText = fl.getDocumentDOM().selection[0].getTextString(3, 9);
   * fl.trace(myText);
   * ```
   */
  getTextString(startIndex?: number, endIndex?: number): string;

  /**
   * Method; sets the attribute specified by the **`attrName`** parameter associated with the text identified by **`startIndex`** and **`endIndex`** to the value specified by **`attrValue`**.
   * This method can be used to change attributes of text that might span {@link TextRun} elements, or that are portions of existing {@link TextRun} elements.
   * Using it may change the position and number of {@link TextRun} elements within this object's {@link Text.textRuns} array.
   *
   * If you omit the optional parameters, the method uses the entire Text object's character range.
   *
   * If you specify only **`startIndex`**, the range is a single character at that position.
   *
   * If you specify both **`startIndex`** and **`endIndex`**, the range starts from **`startIndex`** and goes up to,
   * but does not include, the character located at **`endIndex`**.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param attrName A string that specifies the name of the {@link TextAttrs} object property to change.
   * @param attrValue The value for the {@link TextAttrs} object property.
   * @param [startIndex] An integer that is the index (zero-based) of the first character in the array.
   *
   * This parameter is optional.
   * @param [endIndex] An integer that specifies the index of the end point in the selected text string,
   * which starts at **`startIndex`** and goes up to, but does not include, **`endIndex`**.
   *
   * This parameter is optional.
   * @returns Nothing.
   * @usage text.setTextAttr(attrName, attrValue [, startIndex [, endIndex]])
   * @example
   *
   * The following example sets the selected text field to italic:
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].setTextAttr("italic", true);
   * ```
   *
   * The following example sets the size of the third character to 10:
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].setTextAttr("size", 10, 2);
   * ```
   *
   * The following example sets the color to red for the third through the eighth character of the selected text:
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].setTextAttr("fillColor", 0xff0000, 2, 8);
   * ```
   */
  setTextAttr(attrName: string, attrValue: any, startIndex?: number, endIndex?: number): void;

  /**
   * Property; changes the text string within this Text object.
   *
   * If you omit the optional parameters, the whole Text object is replaced.
   *
   * If you specify only **`startIndex`**, the specified string is inserted at the **`startIndex`** position.
   *
   * If you specify both **`startIndex`** and **`endIndex`**,
   * the specified string replaces the segment of text starting from **`startIndex`** up to,
   * but not including, **`endIndex`**.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param text A string that consists of the characters to be inserted into this Text object.
   * @param [startIndex] An integer that specifies the index (zero-based) of the character in the string where the text will be inserted.
   * This parameter is optional.
   * @param [endIndex] An integer that specifies the index of the end point in the selected text string.
   * The new text overwrites the text from **`startIndex`** up to, but not including, **`endIndex`**.
   * This parameter is optional.
   * @returns Nothing.
   * @usage text.setTextString(text [, startIndex [, endIndex]])
   * @example
   *
   * The following example assigns the string this is a string to the selected text field:
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].setTextString("this is a string");
   * ```
   *
   * The following example inserts the string "abc" beginning at the fifth character of the selected text field:
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].setTextString("01234567890");
   * fl.getDocumentDOM().selection[0].setTextString("abc", 4);
   * // text field is now "0123abc4567890"
   * ```
   *
   * The following example replaces the text from the third through the eighth character of the selected text string
   * with the string "abcdefghij". Characters between *startIndex* and *endIndex* are overwritten.
   * Characters beginning with *endIndex* follow the inserted string.
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].setTextString("01234567890");
   * fl.getDocumentDOM().selection[0].setTextString("abcdefghij", 2, 8);
   * // text field is now "01abcdefghij890"
   * ```
   */
  setTextString(text: string, startIndex?: number, endIndex?: number): void;

  /**
   * Property; A string that is equivalent to the Name field in the Accessibility panel.
   * Screen readers identify objects by reading the name aloud.
   * This property cannot be used with dynamic text.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example retrieves the name of the object:
   *
   * ```javascript
   * var doc = fl.getDocumentDOM();
   * var theName = doc.selection[0].accName;
   * ```
   *
   * The following example sets the name of the currently selected object:
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].accName = "Home Button";
   * ```
   */
  accName: string;

  /**
   * Property; A float value that specifies the anti-aliasing sharpness of the text.
   * This property controls how crisply the text is drawn; higher values specify sharper (or crisper) text.
   * A value of 0 specifies normal sharpness.
   *
   * This property is available only if {@link Text.fontRenderingMode} is set to "customThicknessSharpness".
   * @since Macromedia Flash Basic/Professional 8
   * @see
   * - {@link Text.fontRenderingMode}
   * - {@link Text.antiAliasThickness}
   * - {@link Text.fontRenderingMode}
   */
  antiAliasSharpness: number;

  /**
   * Property; A float value that specifies the anti-aliasing thickness of the text.
   * This property controls how thickly the text is drawn, with higher values specifying thicker text.
   * A value of 0 specifies normal thickness.
   *
   * This property is available only if {@link Text.fontRenderingMode} is set to "customThicknessSharpness".
   * @since Macromedia Flash Basic/Professional 8
   * @see
   * - {@link Text.fontRenderingMode}
   * - {@link Text.antiAliasSharpness}
   * - {@link Text.fontRenderingMode}
   */
  antiAliasThickness: number;

  /**
   * Property; a boolean value.
   * For static text fields, a value of `true` causes the bounding width to expand to show all text.
   * For dynamic or input text fields, a value of `true` causes the bounding width and height to expand to show all text.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the `autoExpand` property to a value of true:
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].autoExpand = true;
   * ```
   */
  autoExpand: boolean;

  /**
   * Property; a boolean value. A value of `true` causes Flash to show a border around text.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the `border` property to a value of true:
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].border = true;
   * ```
   */
  border: boolean;

  /**
   * Property; a string that is equivalent to the Description field in the Accessibility panel.
   * The description is read by the screen reader.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example retrieves the description of the object:
   *
   * ```javascript
   * var doc = fl.getDocumentDOM();
   * var desc = doc.selection[0].description;
   * ```
   *
   * The following example sets the description of the object:
   *
   * ```javascript
   * var doc = fl.getDocumentDOM();
   * doc.selection[0].description = "Enter your name here";
   * ```
   */
  description: string;

  readonly elementType: "text" | "tlfText";

  /**
   * Property; a string that consists of delimited integers that correspond to the items that can be selected in the Character Embedding dialog box.
   * This property works only with dynamic or input text; it is ignored if used with static text.
   *
   * This property corresponds to the XML file in the Configuration/Font Embedding folder.
   *
   * ***Note:** Beginning in Flash Professional CS5, font embedding is controlled at the document level instead of the text object level.
   * Use the {@link FontItem.embedRanges} property instead of the `Text.embedRanges` property.*
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example assumes that the first or only item in the current selection is a classic text object
   * and sets the `embedRanges` property to "1|3|7":
   *
   * ```javascript
   * var doc = fl.getDocumentDOM();
   * doc.selection[0].embedRanges = "1|3|7";
   * ```
   *
   * The following example resets the property:
   *
   * ```javascript
   * var doc = fl.getDocumentDOM();
   * doc.selection[0].embedRanges = "";
   * ```
   */
  embedRanges: string;

  /**
   * Property; a boolean value that specifies whether to enable the embedding of variant glyphs (`true`) or not (`false`).
   *
   * This property works only with dynamic or input text; it is ignored if used with static text. The default value is `false`.
   *
   * ***Note:** Beginning in Flash Professional CS5, font embedding is controlled at the document level instead of the text object level.
   * Use the {@link FontItem.embedVariantGlyphs} property instead of the `Text.embedVariantGlyphs` property.
   * In Flash Professional CS5, the `Text.embedVariantGlyphs` property no longer has any effect
   * because Flash always embeds variant glyphs for TLF text and never embeds them for Classic text.*
   * @since Adobe Flash Professional CS4
   * @example
   *
   * The following example enables variant glyphs to be embedded in the selected Text object:
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].embedVariantGlyphs = true;
   * ```
   * @see {@link FontItem.embedVariantGlyphs}
   */
  embedVariantGlyphs: boolean;

  /**
   * Property; a string that specifies characters to embed.
   * This is equivalent to entering text in the Character Embedding dialog box.
   *
   * This property works only with dynamic or input text; it generates a warning if used with other text types.
   *
   * ***Note:** Beginning in Flash Professional CS5, font embedding is controlled at the document level instead of the text object level.
   * Use the {@link FontItem.embeddedCharacters} property instead of the `Text.embeddedCharacters` property.*
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example assumes that the first or only item in the current selection is a classic text object
   * and sets the embeddedCharacters property to "abc":
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].embeddedCharacters = "abc";
   * ```
   */
  embeddedCharacters: string;

  /**
   * Property; An array of filters applied to the text element.
   * To modify filter properties, you don't write to this array directly.
   * Instead, retrieve the array, set the individual properties, and then set the array to reflect the new properties.
   * @since Adobe Flash Professional CS6
   * @example
   *
   * The following example traces the name of the filter at index 0.
   * If it is a Glow filter, its `blurX` property is set to 100 and the new value is written to the filters array:
   *
   * ```javascript
   * //trace the name of the filter at index 0, if it's glow filter, set its blurX to 100
   * var filterName = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].filters[0].name;
   * fl.trace(filterName);
   * var filterArray = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].filters;
   * if (filterName == "glowFilter") {
   *   filterArray[0].blurX = 100;
   * }
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].filters = filterArray;
   * ```
   */
  filters: Filter[];

  /**
   * Property; a string that specifies the rendering mode for the text.
   * This property affects how the text is displayed both on the Stage and in Flash Player.
   *
   * Acceptable values are described in the following table:
   * | **Property value** | **How text is rendered** |
   * | --- | --- |
   * | device | Renders the text with device fonts. |
   * | bitmap | Renders aliased text as a bitmap, or as a pixel font would. |
   * | standard | Renders text using the standard anti-aliasing method used by Flash MX 2004. This is the best setting to use for animated, very large, or skewed text. |
   * | advanced | Renders text using the advanced anti-aliasing font rendering technology implemented in Flash 8, which produces better anti-aliasing and improves readability, especially for small text. |
   * | customThicknessSharpness | Lets you specify custom settings for the sharpness and thickness of the text when using the advanced anti-aliasing font rendering technology implemented in Flash 8. |
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example shows how you can use the "customThicknessSharpness" value
   * to specify the sharpness and thickness of the text:
   *
   * ```javascript
   * fl.getDocumentDOM().setElementProperty("fontRenderingMode", "customThicknessSharpness");
   * fl.getDocumentDOM().setElementProperty("antiAliasSharpness", 400);
   * fl.getDocumentDOM().setElementProperty("antiAliasThickness", -200);
   * ```
   * @see
   *
   *  - {@link Text.antiAliasSharpness | Text.antiAliasSharpness}
   *  - {@link Text.antiAliasThickness | Text.antiAliasThickness}
   */
  fontRenderingMode: "device" | "bitmap" | "standard" | "advanced" | "customThicknessSharpness";

  /**
   * Read-only property; an integer that represents the number of characters in the Text object.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example returns the number of characters in the selected text:
   *
   * ```javascript
   * var textLength = fl.getDocumentDOM().selection[0].length;
   * ```
   */
  readonly length: number;

  /**
   * Property; a string that sets the line type.
   *
   * Acceptable values are "single line", "multiline", "multiline no wrap", and "password".
   *
   * This property works only with **dynamic or input text** and generates a warning if used with static text.
   *
   * The "password" value works only for input text.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the lineType property to the value multiline no wrap:
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].lineType = "multiline no wrap";
   * ```
   */
  lineType: "single line" | "multiline" | "multiline no wrap" | "password";

  /**
   * Property; an integer that specifies the maximum number of characters the user can enter in this Text object.
   *
   * This property works only with **input text**; if used with other text types, the property generates a warning.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the value of the maxCharacters property to 30:
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].maxCharacters = 30;
   * ```
   */
  maxCharacters: number;

  /**
   * Property; a string that specifies the orientation of the text field.
   *
   * Acceptable values are "horizontal", "vertical left to right", and "vertical right to left".
   *
   * This property works only with **static text**; it generates a warning if used with other text types.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the orientation property to "vertical right to left":
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].orientation = "vertical right to left";
   * ```
   */
  orientation: "horizontal" | "vertical left to right" | "vertical right to left";

  /**
   * Property; a boolean value.
   * If the value is `true`, Flash draws the text as HTML and interprets embedded HTML tags.
   *
   *  This property works only with dynamic or input text; it generates a warning if used with other text types.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the renderAsHTML property to `true`:
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].renderAsHTML = true;
   * ```
   */
  renderAsHTML: boolean;

  /**
   * Property; a boolean value. If the value is `true`, the text can be scrolled.
   *
   * This property works only with **dynamic or input text**; it generates a warning if used with static text.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the scrollable property to `false`:
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].scrollable = false;
   * ```
   */
  scrollable: boolean;

  /**
   * Property; a Boolean value. If the value is `true`, the text can be selected.
   *
   * Input text is always selectable.
   * Flash generates a warning when this property is set to false and used with input text.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the selectable property to `true`:
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].selectable = true;
   * ```
   */
  selectable: boolean;

  /**
   * Property; a zero-based integer that specifies the end of a text subselection.
   * For more information, see {@link Text.selectionStart}.
   * @since Macromedia Flash MX Basic/Professional 2004
   */
  selectionEnd: number;

  /**
   * Property; a zero-based integer that specifies the beginning of a text subselection.
   * You can use this property with text.selectionEnd to select a range of characters.
   * Characters up to, but not including, text.selectionEnd are selected.
   * See {@link Text.selectionEnd}.
   *
   * - If there is an insertion point or no selection, {@link Text.selectionEnd} is equal to {@link Text.selectionStart}.
   * - If {@link Text.selectionStart} is set to a value greater than {@link Text.selectionEnd},
   * {@link Text.selectionEnd} is set to {@link Text.selectionStart}, and no text is selected.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the start of the text subselection to the sixth character:
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].selectionStart = 5;
   * ```
   *
   * The following example selects the characters Barbara from a text field that contains the text "My name is Barbara"
   * and formats them as bold and green:
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].selectionStart = 11;
   * fl.getDocumentDOM().selection[0].selectionEnd = 18;
   * var s = fl.getDocumentDOM().selection[0].selectionStart;
   * var e = fl.getDocumentDOM().selection[0].selectionEnd;
   * fl.getDocumentDOM().setElementTextAttr("bold", true, s, e);
   * fl.getDocumentDOM().setElementTextAttr("fillColor", "#00ff00", s, e);
   * ```
   */
  selectionStart: number;

  /**
   * Property; a string that is equivalent to the Shortcut field in the Accessibility panel.
   * The shortcut is read by the screen reader.
   *
   * This property **cannot** be used with **dynamic text**.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example gets the shortcut key of the selected object and shows the value:
   *
   * ```javascript
   * var theShortcut = fl.getDocumentDOM().selection[0].shortcut;
   * fl.trace(theShortcut);
   * ```
   *
   * The following example sets the shortcut key of the selected object:
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].shortcut = "Ctrl+i";
   * ```
   */
  shortcut: string;

  /**
   * Property; a Boolean value that specifies whether the object is accessible.
   * This is equivalent to the inverse logic of the Make Object Accessible setting in the Accessibility panel.
   * That is, if silent is `true`, Make Object Accessible is deselected.
   * If it is `false`, Make Object Accessible is selected.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example determines if the object is accessible (a value of false means that it is accessible):
   *
   * ```javascript
   * var isSilent = fl.getDocumentDOM().selection[0].silent;
   * ```
   *
   * The following example sets the object to be accessible:
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].silent = false;
   * ```
   */
  silent: boolean;

  /**
   * Property; an integer that is equivalent to the Tab Index field in the Accessibility panel.
   * This value lets you determine the order in which objects are accessed when the user presses the Tab key.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example gets the `tabIndex` of the currently selected object:
   *
   * ```javascript
   * var theTabIndex = fl.getDocumentDOM().selection[0].tabIndex;
   * ```
   *
   * The following example sets the `tabIndex` of the currently selected object:
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].tabIndex = 1;
   * ```
   */
  tabIndex: number;

  /**
   * Read-only property; An array of {@link TextRun | TextRun object}s.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example stores the value of the `textRuns` property in the `myTextRuns` variable:
   *
   * ```javascript
   * var myTextRuns = fl.getDocumentDOM().selection[0].textRuns;
   * ```
   */
  readonly textRuns: TextRun[];

  /**
   * Property; a string that specifies the type of text field.
   *
   * Acceptable values are "static", "dynamic", and "input".
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the `textType` property to input:
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].textType = "input";
   * ```
   */
  textType: "static" | "dynamic" | "input";

  /**
   * Property; a boolean value. A value of true causes Flash to draw text using device fonts.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example causes Flash to use device fonts when drawing text:
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].useDeviceFonts = true;
   * ```
   */
  useDeviceFonts: boolean;

  /**
   * Property; a string that contains the name of the variable associated with the Text object.
   * This property works only with dynamic or input text; it generates a warning if used with other text types.
   *
   * This property is supported only in **ActionScript 1.0** and **ActionScript 2.0**.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the variable name of the selected text box to firstName:
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].variableName = "firstName";
   * ```
   */
  variableName: string;
}

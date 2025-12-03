/**
 * The TextRun object represents a run of characters that have attributes
 * that match all of the properties in the {@link TextAttrs | TextAttrs object}.
 * This object is a property of the Text object ({@link Text.textRuns}).
 * @since Macromedia Flash MX Basic/Professional 2004
 */
interface TextRun {
  /**
   * Property; The text contained in the TextRun object.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example displays the characters that make up the first run of characters
   * in the selected text field in the Output panel:
   *
   * ```javascript
   * fl.trace(fl.getDocumentDOM().selection[0].textRuns[0].characters);
   * ```
   */
  characters: any;

  /**
   * Property; The {@link TextAttrs | TextAttrs object} containing the attributes of the run of text.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example displays the properties of the first run of characters
   * in the selected text field in the Output panel.
   *
   * ```javascript
   * var curTextAttrs = fl.getDocumentDOM().selection[0].textRuns[0].textAttrs;
   * for (var prop in curTextAttrs) {
   *   fl.trace(prop + " = " + curTextAttrs[prop]);
   * }
   * ```
   */
  textAttrs: TextAttrs;
}

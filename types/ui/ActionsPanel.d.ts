/**
 * The ActionsPanel object represents the currently displayed Actions panel.
 *
 * It is a property of the {@link Flash | Flash object} and can be accessed by {@link Flash.actionsPanel}.
 * @since Adobe Flash Professional CS3
 */
interface ActionsPanel {
  /**
   * Method; Returns the class of the specified variable, which must be defined in the currently displayed Actions panel.
   * In addition, the cursor or selected text in the Actions panel must be positioned after the variable definition.
   * @since Adobe Flash Professional CS3
   * @removed Adobe Animate CC 2016
   * @param actionScriptVariableName The name of an ActionScript variable.
   * @returns The class of which **`actionScriptVariableName`** is a member.
   * @usage getClassForObject(actionScriptVariableName)
   * @example
   *
   * The following example displays the class assigned to the variable myVar, if the cursor is positioned after the statement `var myVar:ActivityEvent;` in the Actions panel.
   *
   * ```javascript
   * // Place the following code in the Actions panel,
   * // and position the cursor somewhere after the end of the line var myVar:ActivityEvent;
   * // Place the following code in the JSFL file
   * var theClass = fl.actionsPanel.getClassForObject("myVar");
   * fl.trace(theClass);
   * // traces: "ActivityEvent"
   * ```
   */
  getClassForObject(actionScriptVariableName: string): string;

  /**
   * Method; Specifies whether Script Assist mode is enabled.
   * @since Adobe Flash Professional CS3
   * @removed Adobe Animate CC 2016
   * @returns A boolean value that specifies whether Script Assist mode is enabled (true) or not (false).
   * @example
   *
   * The following example displays a message if Script Assist mode is not enabled.
   *
   * ```javascript
   * var mAssist = fl.actionsPanel.getScriptAssistMode();
   * if (!mAssist) {
   *   alert("For more guidance when writing ActionScript code, try Script Assist mode");
   * }
   * ```
   * @see {@link ActionsPanel.setScriptAssistMode | ActionsPanel.setScriptAssistMode()}
   */
  getScriptAssistMode(): boolean;

  /**
   * Method; Returns the text that is currently selected in the Actions panel.
   * @since Adobe Flash Professional CS3
   * @returns A string that contains the text that is currently selected in the Actions panel.
   * @example
   *
   * The following example displays the text that is currently selected in the Actions panel.
   *
   * ```javascript
   * var apText = fl.actionsPanel.getSelectedText();
   * fl.trace(apText);
   * ```
   * @see
   *
   * - {@link ActionsPanel.getText | ActionsPanel.getText()}
   * - {@link ActionsPanel.hasSelection | ActionsPanel.hasSelection()}
   * - {@link ActionsPanel.replaceSelectedText | ActionsPanel.replaceSelectedText()}
   * - {@link ActionsPanel.setSelection | ActionsPanel.setSelection()}
   */
  getSelectedText(): string;

  /**
   * Method; returns the text in the Actions panel.
   * @since Adobe Flash Professional CS3
   * @returns A string that contains all the text in the Actions panel.
   * @example
   *
   * The following example displays the text that is in the Actions panel.
   *
   * ```javascript
   * var apText = fl.actionsPanel.getText();
   * fl.trace(apText);
   * ```
   * @see
   *
   * - {@link ActionsPanel.getSelectedText | ActionsPanel.getSelectedText()}
   * - {@link ActionsPanel.setText | ActionsPanel.setText()}
   */
  getText(): string;

  /**
   * Method; Specifies whether any text is currently selected in the Actions panel.
   * @since Adobe Flash Professional CS3
   * @returns A boolean value that specifies whether any text is selected in the Actions panel (true) or not (false).
   * @example
   *
   * The following example displays text that is currently selected in the Actions panel. If no text is selected, it displays all the text in the Actions panel.
   *
   * ```javascript
   * var apText;
   * if (fl.actionsPanel.hasSelection()) {
   *   apText = fl.actionsPanel.getSelectedText();
   * } else {
   *   apText = fl.actionsPanel.getText();
   * }
   * fl.trace(apText);
   * ```
   * @see
   *
   * - {@link ActionsPanel.getSelectedText | ActionsPanel.getSelectedText()}
   * - {@link ActionsPanel.getText | ActionsPanel.getText()}
   * - {@link ActionsPanel.replaceSelectedText | ActionsPanel.replaceSelectedText()}
   * - {@link ActionsPanel.setSelection | ActionsPanel.setSelection()}
   */
  hasSelection(): boolean;

  /**
   * Method; Replaces the currently selected text with the text specified in **`replacementText`**.
   * If *replacementText* contains more characters than the selected text,
   * any characters following the selected text now follow **`replacementText`**; that is, they are not overwritten.
   * @since Adobe Flash Professional CS3
   * @param replacementText A string that represents text to replace selected text in the Actions panel.
   * @returns A boolean value of true if the Actions panel is found; false otherwise.
   * @usage replaceSelectedText(replacementText)
   * @example
   *
   * The following example replaces currently selected text in the Actions panel.
   *
   * ```javascript
   * if (fl.actionsPanel.hasSelection()) {
   *   fl.actionsPanel.replaceSelectedText("// © 2006 Adobe Inc.");
   * }
   * ```
   * @see
   *
   * - {@link ActionsPanel.getSelectedText | ActionsPanel.getSelectedText()}
   * - {@link ActionsPanel.hasSelection | ActionsPanel.hasSelection()}
   * - {@link ActionsPanel.setSelection | ActionsPanel.setSelection()}
   * - {@link ActionsPanel.setText | ActionsPanel.setText()}
   */
  replaceSelectedText(replacementText: string): boolean;

  /**
   * Method; Enables or disables Script Assist mode.
   * @since Adobe Flash Professional CS3
   * @removed Adobe Animate CC 2016
   * @param scriptAssist A boolean value that specifies whether to enable or disable Script Assist mode.
   * @returns A boolean value that specifies whether Script Assist mode was enabled or disabled successfully.
   * @example
   *
   * The following example toggles the state of Script Assist mode.
   *
   * ```javascript
   * fl.trace(fl.actionsPanel.getScriptAssistMode());
   * if (fl.actionsPanel.getScriptAssistMode()) {
   *   fl.actionsPanel.setScriptAssistMode(false);
   * } else {
   *   fl.actionsPanel.setScriptAssistMode(true);
   * }
   * fl.trace(fl.actionsPanel.getScriptAssistMode());
   * ```
   * @see {@link ActionsPanel.getScriptAssistMode | ActionsPanel.getScriptAssistMode()}
   */
  setScriptAssistMode(scriptAssist: boolean): boolean;

  /**
   * Method; Selects a specified set of characters in the Actions panel.
   * @since Adobe Flash Professional CS3
   * @param startIndex A zero-based integer that specifies the first character to be selected.
   * @param numberOfChars An integer that specifies how many characters to select.
   * @returns A boolean value that specifies whether the requested characters can be selected (true) or not (false).
   * @example
   *
   * The following example replaces the characters "2006" in the Actions panel with the specified text.
   *
   * ```javascript
   * // Type the following as the first line in the Actions panel
   * // 2006 - Addresses user request 40196
   *
   * // Type the following in the JSFL file
   * fl.actionsPanel.setSelection(3, 4);
   * fl.actionsPanel.replaceSelectedText("// Last updated: 2007");
   * ```
   * @see
   *
   * - {@link ActionsPanel.getSelectedText | ActionsPanel.getSelectedText()}
   * - {@link ActionsPanel.hasSelection | ActionsPanel.hasSelection()}
   * - {@link ActionsPanel.replaceSelectedText | ActionsPanel.replaceSelectedText()}
   */
  setSelection(startIndex: number, numberOfChars: number): boolean;

  /**
   * Method; Clears any text in the Actions panel and then adds the text specified in **`replacementText`**.
   * @since Adobe Flash Professional CS3
   * @param replacementText A string that represents text to place in the Actions panel.
   * @returns A boolean value of true if the specified text was placed in the Actions panel; false otherwise.
   * @example
   *
   * The following example replaces any text currently in the Actions panel with the specified text.
   *
   * ```javascript
   * fl.actionsPanel.setText("// Deleted this code - no longer needed");
   * ```
   * @see
   *
   * - {@link ActionsPanel.getText | ActionsPanel.getText()}
   * - {@link ActionsPanel.replaceSelectedText | ActionsPanel.replaceSelectedText()}
   */
  setText(replacementText: string): boolean;
}

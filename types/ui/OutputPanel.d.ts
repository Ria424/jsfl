/**
 * This object represents the Output panel, which displays troubleshooting information such as syntax errors.
 *
 * To access this object, use {@link Flash.outputPanel}.
 * @since Macromedia Flash MX Basic/Professional 2004
 */
interface OutputPanel {
  /**
   * Method; Clears the contents of the Output panel.
   *
   * You can use this method in a batch processing application to clear a list of errors,
   * or to save them incrementally by using this method with {@link OutputPanel.save | OutputPanel.save()}.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @returns Nothing.
   * @example
   *
   * The following example clears the current contents of the Output panel:
   *
   * ```javascript
   * fl.outputPanel.clear();
   * ```
   */
  clear(): void;

  /**
   * Saves the contents of the Output panel to a local text file, either by overwriting the file or by appending to the file.
   *
   * If **`fileURI`** is invalid or unspecified, an error is reported.
   *
   * This method is useful for batch processing.
   *
   * For example, you can create a JSFL file that compiles several components.
   * Any compile errors appear in the Output panel, and you can use this method to save the resulting errors to a text file,
   * which can be automatically parsed by the build system in use.
   * @since Macromedia Flash MX Basic/Professional 2004. **`useSystemEncoding`** parameter added in Flash 8.
   * @param fileURI A string, expressed as a file:/// URI,
   * that specifies the local file to contain the contents of the Output panel.
   * @param [appendToFile] An optional boolean. If true, appends the Output panel's contents to the file;
   * if false, overwrites the file. Default is false.
   * @param [useSystemEncoding] An optional boolean value.
   * If true, it saves the Output panel text using the system encoding; if false, it saves the Output panel text using UTF-8 encoding, with Byte Order Mark characters at the beginning of the text. The default value is false.
   * @returns Nothing.
   * @example
   *
   * The following example saves the Output panel's contents to the batch.log file in the `/tests` folder,
   * overwriting the batch.log file if it already exists:
   *
   * ```javascript
   * fl.outputPanel.save("file:///c|/tests/batch.log");
   * ```
   */
  save(fileURI: string, appendToFile?: boolean, useSystemEncoding?: boolean): void;

  /**
   * Method; Sends a text string to the Output panel, terminated by a new line,
   * and displays the Output panel if it is not already visible.
   *
   * This method is identical to {@link Flash.trace | Flash.trace()},
   * and works in the same way as the trace() statement in ActionScript.
   *
   * To send a blank line, use `OutputPanel.trace("")` or `OutputPanel.trace("\n")`.
   * You can use the latter command inline, making \n a part of the **`message`** string.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param message A string that contains the text to add to the Output panel.
   * @returns Nothing.
   * @usage OutputPanel.trace(message)
   * @example
   *
   * The following example displays several lines of text in the Output panel:
   *
   * ```javascript
   * fl.outputPanel.clear();
   * fl.outputPanel.trace("Hello World!!!");
   * var myPet = "cat";
   * fl.outputPanel.trace("\nI have a " + myPet + "\n");
   * fl.outputPanel.trace("I love my " + myPet);
   * fl.outputPanel.trace("Do you have a " + myPet + "?");
   * ```
   */
  trace(message: string): void;
}

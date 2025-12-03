/**
 * The CompilerErrors object represents the Compiler Errors panel.
 *
 * It is a property of the {@link Flash | Flash object} and can be accessed by {@link Flash.compilerErrors}.
 * @since Adobe Flash Professional CS3
 */
interface CompilerErrors {
  /**
   * Method; Clears the contents of the Compiler Errors panel.
   * @since Adobe Flash Professional CS3
   * @returns Nothing.
   * @example
   *
   * The following example clears the contents of the Compiler Errors panel:
   *
   * ```javascript
   * fl.compilerErrors.clear();
   * ```
   * @see {@link CompilerErrors.save | CompilerErrors.save()}
   */
  clear(): void;

  /**
   * Method; Saves the contents of the Compiler Errors panel to a local text file.
   * @since Adobe Flash Professional CS3
   * @param fileURI A string, expressed as a file:/// URI, that specifies the filename for the saved file.
   *
   * If **`fileURI`** already exists, and you haven't specified a value of true for **`appendToFile`**,
   * **`fileURI`** is overwritten without warning.
   * @param [appendToFile] Whether the contents of the Compiler Errors panel should be appended to *fileURI* (`true`) or not (`false`).
   *
   * The default value is `false`.
   * @param [useSystemEncoding] Whether to save the Compiler Errors panel text using the system encoding.
   *
   * If this value is `false`, the Compiler Errors panel text is saved using UTF-8 encoding,
   * with Byte Order Mark characters at the beginning of the text.
   *
   * The default value is false.
   * @returns Nothing.
   * @example
   *
   * The following example saves the contents of the Compiler Errors panel to a file named errors.log in the C:\tests folder:
   *
   * ```javascript
   * fl.compilerErrors.save("file:///c|/tests/errors.log");
   * ```
   * @see {@link CompilerErrors.clear | CompilerErrors.clear()}
   */
  save(fileURI: string, appendToFile?: boolean, useSystemEncoding?: boolean): void;
}

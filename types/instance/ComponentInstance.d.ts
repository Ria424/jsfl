/**
 * The ComponentInstance object is a subclass of the {@link SymbolInstance | SymbolInstance object} and represents a component in a frame.
 * @since Macromedia Flash MX Basic/Professional 2004
 */
interface ComponentInstance extends SymbolInstance {
  /**
   * Read-only property; An array of ActionScript 2.0 properties that are accessible from the component Property inspector.
   * See {@link Parameter | Parameter object}.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example illustrates getting and setting the parameters property:
   *
   * ```javascript
   * var params = fl.getDocumentDOM().selection[0].parameters;
   * params[0].value = "some value";
   * ```
   * @see {@link Parameter | Parameter object}
   */
  readonly parameters: Parameter[];
}

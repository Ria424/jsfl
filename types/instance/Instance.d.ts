/**
 * Instance is a subclass of the {@link Element | Element object}.
 * @since Macromedia Flash MX Basic/Professional 2004
 */
interface Instance extends Element {
  readonly elementType: "instance";

  /**
   * Read-only property; A string that represents the type of instance.
   * Possible values are "symbol", "bitmap", "embedded video", "linked video", "video", and "compiled clip".
   *
   * In Flash MX 2004, the value of `Instance.instanceType` for an item added to the library using `Library.addNewItem("video")` is "embedded\_video".
   *
   * In Flash 8 and later, the value is "video". See {@link Library.addNewItem | Library.addNewItem()}.
   * @since Macromedia Flash MX Basic/Professional 2004. Possible value of "video" added in Flash 8.
   * @example
   *
   * The following example shows that the instance type of a movie clip is symbol:
   *
   * ```javascript
   * // Select a movie clip and then run this script.
   * var type = fl.getDocumentDOM().selection[0].instanceType;
   * fl.trace("This instance type is " + type);
   * ```
   */
  readonly instanceType: "symbol" | "bitmap" | "embedded video" | "linked video" | "video" | "compiled clip";

  /**
   * Property; A library item used to instantiate this instance.
   * You can change this property only to another library item of the same type (that is, you cannot set a symbol instance to refer to a bitmap).
   * See {@link Library | Library object}.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example changes the selected symbol to refer to the first item in the library:
   *
   * ```javascript
   * fl.getDocumentDOM().selection[0].libraryItem = fl.getDocumentDOM().library.items[0];
   * ```
   */
  libraryItem: Item;
}

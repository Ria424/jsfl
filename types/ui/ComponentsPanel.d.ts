/**
 * The ComponentsPanel object represents the Components panel.
 *
 * It is a property of the {@link Flash | Flash object} and can be accessed by {@link Flash.componentsPanel}.
 * @since Macromedia Flash MX Basic/Professional 2004
 */
interface ComponentsPanel {
  /**
   * Adds the specified component to the document at the specified position.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param position
   * A point (for example, {x: 0, y: 100}) that specifies the location at which to add the component.
   * Specify **`position`** relative to the center point of the component,
   * not the component's registration point (also *origin point* or *zero point*).
   * @param categoryName
   * The name of the component category (for example, *"Data"*).
   * The valid category names are listed in the Components panel.
   * @param componentName
   * The name of the component in the specified category (for example, *"WebServiceConnector"*).
   * The valid component names are listed in the Components panel.
   * @returns Nothing.
   * @example
   *
   * The following examples illustrate some ways to use this method:
   *
   * ```javascript
   * fl.componentsPanel.addItemToDocument({ x: 0, y: 0 }, "User Interface", "CheckBox");
   * fl.componentsPanel.addItemToDocument({ x: 0, y: 100 }, "Data", "WebServiceConnector");
   * fl.componentsPanel.addItemToDocument({ x: 0, y: 200 }, "User Interface", "Button");
   * ```
   */
  addItemToDocument(position: Point, categoryName: string, componentName: string): void;

  /**
   * Method; Refreshes the Components panel's list of components.
   * @since Macromedia Flash Basic/Professional 8
   * @returns A boolean value of *true* if the Component panel list is refreshed, *false* otherwise.
   * @usage ComponentsPanel.reload()
   * @example
   *
   * The following example refreshes the Components panel:
   *
   * ```javascript
   * fl.componentsPanel.reload();
   * ```
   */
  reload(): boolean;
}

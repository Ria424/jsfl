/**
 * Flash 8 supports custom dialog boxes written in a subset of the XML User Interface Language (XUL).
 *
 * An XML User Interface (XMLUI) dialog box can be used by several Flash features, such as commands and behaviors,
 * to provide a user interface for features that you build using extensibility.
 *
 * The XMLUI object provides the ability to get and set properties of an XMLUI dialog box,
 * and accept or cancel out of one. The XMLUI methods can be used in callbacks, such as `oncommand` handlers in buttons.
 *
 * You can write a XML file and invoke it from the JavaScript API
 * using the {@link Document.xmlPanel | Document.xmlPanel()} method.
 *
 * To retrieve an object representing the current XMLUI dialog box, use {@link Flash.xmlui}.
 * @since Macromedia Flash MX Basic/Professional 2004
 */
interface XMLUI {
  /**
   * Method; Closes the current XMLUI dialog box with an accept state,
   * which is equivalent to the user clicking the OK button.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @returns Nothing.
   * @see
   *
   * - {@link Flash.xmlui}
   * - {@link Document.xmlPanel | Document.xmlPanel()}
   * - {@link XMLUI.cancel | XMLUI.cancel()}
   */
  accept(): void;

  /**
   * Method; Closes the current XMLUI dialog box with a cancel state,
   * which is equivalent to the user clicking the Cancel button.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @returns Nothing.
   * @see
   *
   * - {@link Flash.xmlui}
   * - {@link Document.xmlPanel | Document.xmlPanel()}
   * - {@link XMLUI.accept | XMLUI.accept()}
   */
  cancel(): void;

  /**
   * Method; Retrieves the value of the specified property of the current XMLUI dialog box.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param controlPropertyName The name of the XMLUI property whose value you want to retrieve.
   * @returns The value of the specified property. In cases where you might expect a boolean value of `true`
   * or `false`, it returns the string `"true"` or `"false"`.
   * @example
   *
   * The following example returns the value of a property named URL:
   *
   * ```javascript
   * fl.xmlui.get("URL");
   * ```
   * @see
   *
   * - {@link Flash.xmlui}
   * - {@link Document.xmlPanel | Document.xmlPanel()}
   * - {@link XMLUI.getControlItemElement | XMLUI.getControlItemElement()}
   * - {@link XMLUI.set | XMLUI.set()}
   */
  get(controlPropertyName: string): string;

  /**
   * Method; Returns the label and value of the line selected in a `ListBox` or `ComboBox` control
   * for the control specified by **`controlPropertyName`**.
   * @since Macromedia Flash Basic/Professional 8
   * @param controlPropertyName The property whose control item element you want to retrieve.
   * @returns An object that represents the current control item for the control specified by **`controlPropertyName`**.
   * @example
   *
   * The following example returns the label and value of the currently selected line for the "myListBox" control:
   *
   * ```javascript
   * var elem = new Object();
   * elem = fl.xmlui.getControlItemElement("myListBox");
   * fl.trace("label = " + elem.label + " value = " + elem.value);
   * ```
   * @see
   *
   * - {@link Flash.xmlui}
   * - {@link Document.xmlPanel | Document.xmlPanel()}
   * - {@link XMLUI.get | XMLUI.get()}
   * - {@link XMLUI.setControlItemElement | XMLUI.setControlItemElement()}
   * - {@link XMLUI.setControlItemElements | XMLUI.setControlItemElements()}
   */
  getControlItemElement(controlPropertyName: string): any;

  /**
   * Method; Returns a boolean value that specifies whether the control is enabled or disabled (dimmed).
   * @since Macromedia Flash Basic/Professional 8
   * @param controlID The ID attribute of the control whose status you want to retrieve.
   * @returns A boolean value of `true` if the control is enabled; `false` otherwise.
   * @example
   *
   * The following example returns a value that indicates
   * whether the control with the ID attribute "myListBox" is enabled:
   *
   * ```javascript
   * var isEnabled = fl.xmlui.getEnabled("myListBox");
   * fl.trace(isEnabled);
   * ```
   * @see
   *
   * - {@link Flash.xmlui}
   * - {@link Document.xmlPanel | Document.xmlPanel()}
   * - {@link XMLUI.setEnabled | XMLUI.setEnabled()}
   */
  getEnabled(controlID: string): boolean;

  /**
   * Method; Returns a boolean value that specifies whether the control is visible or hidden.
   * @since Macromedia Flash Basic/Professional 8
   * @param controlID The ID attribute of the control whose visibility status you want to retrieve.
   * @returns A boolean value of `true` if the control is visible, or `false` if it is invisible (hidden).
   * @example
   *
   * The following example returns a value that indicates
   * whether the control with the ID attribute "myListBox" is visible:
   *
   * ```javascript
   * var isVisible = fl.xmlui.getVisible("myListBox");
   * fl.trace(isVisible);
   * ```
   * @see {@link XMLUI.setVisible | XMLUI.setVisible()}
   */
  getVisible(controlID: string): boolean;

  /**
   * Method; Modifies the value of the specified property of the current XMLUI dialog box.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param controlPropertyName The name of XMLUI property to modify.
   * @param value The value to which you want to set the XMLUI property.
   * @returns Nothing.
   * @example
   *
   * The following example sets the value of a property named URL to <https://www.adobe.com>
   *
   * ```javascript
   * fl.xmlui.set("URL", "www.adobe.com");
   * ```
   * @see
   *
   * - {@link Flash.xmlui}
   * - {@link Document.xmlPanel | Document.xmlPanel()}
   * - {@link XMLUI.get | XMLUI.get()}
   * - {@link XMLUI.setControlItemElement | XMLUI.setControlItemElement()}
   * - {@link XMLUI.setControlItemElements | XMLUI.setControlItemElements()}
   */
  set(controlPropertyName: string, value: string): void;

  /**
   * Method; Sets the label and value of the currently selected line in the `ListBox` or `ComboBox` control
   * specified by **`controlPropertyName`**.
   * @since Macromedia Flash Basic/Professional 8
   * @param controlPropertyName The control item element to set.
   * @param elementItem A JavaScript object with a string property named `label`
   * and an optional string property named `value`.
   * If the `value` property does not exist, then it is created and assigned the same value as label.
   * @returns Nothing.
   * @example
   *
   * The following example sets the label and value for the current item of the control property named "PhoneNumber":
   *
   * ```javascript
   * var elem = new Object();
   * elem.label = "Fax";
   * elem.value = "707-555-5555";
   * fl.xmlui.setControlItemElement("PhoneNumber", elem);
   * ```
   * @see
   *
   * - {@link Flash.xmlui}
   * - {@link Document.xmlPanel | Document.xmlPanel()}
   * - {@link XMLUI.getControlItemElement | XMLUI.getControlItemElement()}
   * - {@link XMLUI.set | XMLUI.set()}
   * - {@link XMLUI.setControlItemElements | XMLUI.setControlItemElements()}
   */
  setControlItemElement(controlPropertyName: string, elementItem: { label: string; value?: string; }): void;

  /**
   * Method; Clears the values of the `ListBox` or `ComboBox` control
   * specified by **`controlID`** and replaces the list or menu items with the label,
   * value pairs specified by **`elementItemArray`**.
   * @since Macromedia Flash Basic/Professional 8
   * @param controlID The ID attribute of the control you want to set.
   * @param elementItemArray An array of JavaScript objects, where each object has a string property named `label`
   * and an optional string property named `value`.
   * If the value property does not exist, then it is created and assigned the same value as `label`.
   * @returns Nothing.
   * @example
   *
   * The following example sets the label and value of items in the control with the ID attribute "myControlID"
   * to the label, value pairs specified:
   *
   * ```javascript
   * var nameArray = new Array("January", "February", "March");
   * var monthArray = new Array();
   * for (var i = 0; i < nameArray.length; i++) {
   *   elem = new Object();
   *   elem.label = nameArray[i];
   *   elem.value = i;
   *   monthArray[i] = elem;
   * }
   * fl.xmlui.setControlItemElements("myControlID", monthArray);
   * ```
   * @see
   *
   * - {@link XMLUI.getControlItemElement | XMLUI.getControlItemElement()}
   * - {@link XMLUI.set | XMLUI.set()}
   * - {@link XMLUI.setControlItemElement | XMLUI.setControlItemElement()}
   */
  setControlItemElements(controlID: string, elementItemArray: { label: string; value?: string; }[]): void;

  /**
   * Method; Enables or disables (dims) a control.
   * @since Macromedia Flash Basic/Professional 8
   * @param controlID The ID attribute of the control you want to enable or disable.
   * @param enable `true` if you want to enable the control, or `false` if you want to disable (dim) it.
   * @returns Nothing.
   * @example
   *
   * The following example dims the control with the ID attribute myControl:
   *
   * ```javascript
   * fl.xmlui.setEnabled("myControl", false);
   * ```
   * @see {@link XMLUI.getEnabled | XMLUI.getEnabled()}
   */
  setEnabled(controlID: string, enable: boolean): void;

  /**
   * Method; Shows or hides a control.
   * @since Macromedia Flash Basic/Professional 8
   * @param controlID Specifies the ID attribute of the control you want to show or hide.
   * @param visible `true` if you want to show the control; `false` if you want to hide it.
   * @returns Nothing.
   * @example
   *
   * The following example hides the control with the ID attribute "myControl":
   *
   * ```javascript
   * fl.xmlui.setVisible("myControl", false);
   * ```
   * @see {@link XMLUI.getVisible | XMLUI.getVisible()}
   */
  setVisible(controlID: string, visible: boolean): void;
}

/**
 * The object contains properties for all controls defined in the XML file.
 *
 * All properties are returned as strings.
 *
 * The object will have one predefined property named "dismiss",
 * which will have a string value that is either "accept" or "cancel".
 * @since Macromedia Flash MX Basic/Professional 2004
 * @see
 *
 * - {@link Flash.xmlPanel | Flash.xmlPanel()}
 * - {@link Flash.xmlPanelFromString | Flash.xmlPanelFromString()}
 */
interface XMLUIPropertyControls {
  /**
   * Predefined property. A string value that is either "accept" or "cancel".
   * @since Macromedia Flash MX Basic/Professional 2004
   */
  dismiss: "accept" | "cancel";

  [property: string]: string | undefined
}

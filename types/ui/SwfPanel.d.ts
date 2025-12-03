/**
 * The SwfPanel object represents a Window SWF panel.
 *
 * Window SWF panels are SWF files that implement applications you can run from the Flash authoring environment;
 * they are available from the `Window > Other Panels` menu.
 * By default, Window SWF panels are stored in a subfolder of the Configuration folder.
 *
 * For example, on Windows XP, the folder is in *boot drive*\\Documents and Settings\\*user*\\Local Settings\\Application Data\\Adobe\\Flash CS4\\*language*\\Configuration\\WindowSWF.
 *
 * The array of registered Window SWF panels is stored in the {@link Flash.swfPanels} property.
 * @since Adobe Flash Professional CS4
 */
interface SwfPanel {
  /**
   * Method; Works in conjunction with the ActionScript `ExternalInterface.addCallback()` and `MMExecute()`
   * methods to communicate with the SWF panel from the authoring environment.
   * @since Adobe Flash Professional CS4
   * @param request Parameters to pass to the function.
   * @returns Either null or a string that is returned by the function call.
   * The function result could be an empty string.
   * @example
   *
   * The following example illustrates how to use ActionScript and JavaScript code to create a Window SWF panel and communicate with it from the authoring environment.
   *
   * 1. Create an ActionScript 3.0 FLA file, set its color to a medium gray, and set its size to 400 pixels wide and 250 pixels high.
   *
   * 2. Place a dynamic text box in the center of the Stage, set its Instance name to myTextField, and type the word "Status" in the text box.
   *
   * 3. Set other text box properties similar to the following:
   *
   *     - Center aligned
   *
   *     - 355 pixels wide and 46 pixels high
   *
   *     - Times New Roman font, 28 points, red
   *
   * 4. Add the following ActionScript code:
   *
   *     ```javascript
   *     // Here's the callback function to be called from JSAPI
   *     function callMeFromJavascript(arg:String):void {
   *       try {
   *         var name:String = String(arg);
   *         myTextField.text = name;
   *       } catch (e:Error) {}
   *     }
   *
   *     // Expose the callback function as "callMySWF"
   *     ExternalInterface.addCallback("callMySWF", callMeFromJavascript);
   *
   *     // run the JSAPI to wire up the callback
   *     MMExecute("fl.runScript(fl.configURI + \"WindowSWF/fileOp.jsfl\");");
   *
   *     MMExecute("fl.trace(\"AS3 File Status Panel Initialized\");");
   *     ```
   *
   * 5. Save the file as fileStatus.fla, and publish the SWF file with the default Publish settings.
   *
   * 6. Close Flash.
   *
   * 7. Copy the fileStatus.swf file to the WindowSWF folder, which is a subfolder of the Configuration folder.
   * For example, on Windows XP, the folder is in \boot drive\Documents and Settings\\user\Local Settings\Application Data\Adobe\Flash CS4\language\Configuration\WindowSWF.
   *
   * 8. Start Flash.
   *
   * 9. Create a JSFL file with the following code:
   *
   *     ```javascript
   *     function callMyPanel(panelName, arg) {
   *       if (fl.swfPanels.length > 0) {
   *         for (var x = 0; x < fl.swfPanels.length; x++) {
   *           // look for a SWF panel of the specified name, then call the specified AS3 function
   *           // in this example, the panel is named "test" and the AS3 callback is "callMySWF"
   *           if (fl.swfPanels[x].name == panelName) { // name busted?
   *             fl.swfPanels[x].call("callMySWF", arg);
   *             break;
   *           }
   *         }
   *       } else
   *         fl.trace("no panels");
   *     }
   *
   *     // define the various handlers for events
   *     documentClosedHandler = function () { callMyPanel("fileStatus", "Document Closed"); };
   *     fl.addEventListener("documentClosed", documentClosedHandler);
   *
   *     var dater = "New Document";
   *     documentNewHandler = function () { callMyPanel("fileStatus", dater); };
   *     fl.addEventListener("documentNew", documentNewHandler);
   *
   *     documentOpenedHandler = function () { callMyPanel("fileStatus", "Document Opened"); };
   *     fl.addEventListener("documentOpened", documentOpenedHandler);
   *     ```
   *
   * 10. Save the JSFL file in the same directory as the SWF file, with the name fileOp.jsfl.
   *
   * 11. Choose `Window > Other panels > fileStatus`.
   *
   * Now, as you create, open, and close FLA files, the fileStatus panel displays a message indicating the action you have taken.
   */
  call(request: any): string | null;

  /**
   * Method: Reloads content in the SWF panel.
   * @since Adobe Flash Professional CC
   * @example
   *
   * The following example illustrates the use of this method:
   *
   * ```javascript
   * fl.swfPanels[0].reload();
   * ```
   */
  reload(): void;

  /**
   * Method; Sets the keyboard focus to the specified SWF panel.
   * @since Adobe Flash Professional CS5.5
   * @example
   *
   * The following code sets the focus to the SWF panel named "Project":
   *
   * Please do the followings steps before running this command:
   *
   * 1. Undock the Project panel, so it is a floating panel.
   *
   * 2. Open the Create File dialog box from the Project panel and then click the Stage.
   *
   * 3. Press the Tab key a few times to ensure the Project panel does not have focus.
   *
   * 4. Run the script below from the Commands menu (put a JSFL file containing the code below in the user/config/Commands directory):
   *
   * 5. Press the tab key. You should see an insertion cursor in one of the text fields in the Create File dialog box.
   *
   * ```javascript
   * fl.getSwfPanel("Project").setFocus();
   * ```
   * @see
   *
   * - {@link SwfPanel.name}
   * - {@link Flash.swfPanels}
   */
  setFocus(): void;

  /**
   * Read-only property: a string that contains the DPI scale factor (scaleX) for swfPanel.
   * Depending on this scale-factor, SwfPanel can adjust its contents.
   * @since Adobe Animate CC 2016
   * @example
   *
   * The following code illustrates the use of this property:
   *
   * ```javascript
   * fl.trace(fl.swfPanel[x].dpiScaleFactorX);
   * ```
   * @see {@link SwfPanel.dpiScaleFactorY}
   */
  readonly dpiScaleFactorX: string;

  /**
   * Read-only property: a string that contains the DPI scale factor (scaleY) for swfPanel.
   * Depending on this scale-factor, SwfPanel can adjust its contents.
   * @since Adobe Animate CC 2016
   * @example
   *
   * The following code illustrates the use of this property:
   *
   * ```javascript
   * fl.trace(fl.swfPanel[x].dpiScaleFactorY);
   * ```
   * @see {@link SwfPanel.dpiScaleFactorX}
   */
  readonly dpiScaleFactorY: string;

  /**
   * Read-only property: a string that represents the name of the specified Window SWF panel.
   * @since Adobe Flash Professional CS4
   * @example
   *
   * The following code displays the name of the first registered Window SWF panel in the Output panel:
   *
   * ```javascript
   * fl.trace(fl.swfPanels[0].name);
   * ```
   * @see
   *
   * - {@link SwfPanel.path | SwfPanel.path}
   * - {@link Flash.swfPanels | Flash.swfPanels}
   */
  readonly name: string;

  /**
   * Read-only property: a string that represents the path to the SWF file used in the specified Window SWF panel.
   * @since Adobe Flash Professional CS4
   * @example
   *
   * The following code displays the path of the SWF file used in the first registered Window SWF panel in the Output panel:
   *
   * ```javascript
   * fl.trace(fl.swfPanels[0].path);
   * ```
   * @see
   *
   * - {@link SwfPanel.name}
   * - {@link Flash.swfPanels}
   */
  readonly path: string;
}

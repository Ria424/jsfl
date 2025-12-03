/**
 * A callback function that Animate calls when the extensible tool becomes active.
 *
 * Use this function to perform any initialization tasks the tool requires.
 * @since Macromedia Flash MX Basic/Professional 2004
 * @remarks
 * This function must be implemented by the user. Animate calls this function when the tool is selected in the Tools panel,
 * allowing for any necessary initialization tasks.
 *
 * @usage
 *
 * ```javascript
 * function activate() {
 *   // statements
 * }
 * ```
 * @example
 *
 * The following example sets the value of {@link Tools.activeTool}
 * when the extensible tool is selected in the Tools panel:
 *
 * ```javascript
 * function activate() {
 *   var theTool = fl.tools.activeTool;
 * }
 * ```
 * @see {@link Tools.activeTool}
 */
declare function activate(): void;

/**
 * A global function that displays a modal Alert dialog box with an OK button.
 * @since Macromedia Flash MX Basic/Professional 2004
 * @param alertText The message you want to display in the Alert dialog box.
 * @example
 *
 * The following example displays the message "Process Complete" in an Alert dialog box:
 *
 * ```javascript
 * alert("Process Complete");
 * ```
 * @see
 *
 * - {@link confirm | confirm()}
 * - {@link prompt | prompt()}
 */
declare function alert(alertText: string): void;

/**
 * A callback function that Animate calls when it opens and the extensible tool is loaded.
 *
 * Use this function to set any information Flash needs to know about the tool.
 * @since Macromedia Flash MX Basic/Professional 2004
 * @remarks
 * This function must be implemented by the user. Animate calls this function to configure the tool's properties,
 * such as its name, icon, and tooltip.
 *
 * @usage
 *
 * ```javascript
 * function configureTool() {
 *   // statements
 * }
 * ```
 * @example
 *
 * The following examples show two possible implementations of this function:
 *
 * ```javascript
 * function configureTool() {
 *   theTool = fl.tools.activeTool;
 *   theTool.setToolName("myTool");
 *   theTool.setIcon("myTool.png");
 *   theTool.setMenuString("My Tool's menu string");
 *   theTool.setToolTip("my tool's tool tip");
 *   theTool.setOptionsFile("mtTool.xml");
 * }
 * ```
 *
 * ```javascript
 * function configureTool() {
 *   theTool = fl.tools.activeTool;
 *   theTool.setToolName("ellipse");
 *   theTool.setIcon("Ellipse.png");
 *   theTool.setMenuString("Ellipse");
 *   theTool.setToolTip("Ellipse");
 *   theTool.showTransformHandles(true);
 * }
 * ```
 */
declare function configureTool(): void;

/**
 * A global function that displays a modal Confirm dialog box with OK and Cancel buttons.
 * @since Adobe Flash Professional CS3
 * @param message The message you want to display in the Confirm dialog box.
 * @returns Returns `true` if the user clicks OK; `false` if the user clicks Cancel.
 */
declare function confirm(message: string): boolean;

/**
 * Function; Called when the extensible tool becomes inactive
 * (that is, when the active tool changes from this tool to another one).
 *
 * Use this function to perform any cleanup the tool needs.
 * @since Macromedia Flash MX Basic/Professional 2004
 * @remarks
 * This function must be implemented by the user. Animate calls this function when the active tool is switched,
 * allowing for necessary cleanup operations.
 *
 * @usage
 *
 * ```javascript
 * function dactivate() {
 *   // statements
 * }
 * ```
 * @example
 *
 * The following example displays a message in the Output panel when the tool becomes inactive:
 *
 * ```javascript
 * function deactivate() {
 *   fl.trace("Tool is no longer active");
 * }
 * ```
 */
declare function deactivate(): void;

/**
 * A callback function that Animate calls when a key is pressed while the extensible tool is active.
 *
 * The script should call {@link Tools.getKeyDown | Tools.getKeyDown()} to determine which key was pressed.
 * @since Macromedia Flash MX Basic/Professional 2004
 * @remarks
 * This function must be implemented by the user. Animate calls this function upon detecting a keyboard press event.
 *
 * @usage
 *
 * ```javascript
 * function keyDown() {
 *   // statements
 * }
 * ```
 * @example
 *
 * The following example displays information about which key was pressed
 * when the extensible tool is active and the user presses a key.
 *
 * ```javascript
 * function keyDown() {
 *   fl.trace("key " + fl.tools.getKeyDown() + " was pressed");
 * }
 * ```
 * @see
 *
 * - {@link keyUp | keyUp()}
 * - {@link Tools.getKeyDown | Tools.getKeyDown()}
 */
declare function keyDown(): void;

/**
 * A callback function that Animate calls when a key is released while the extensible tool is active.
 * @since Macromedia Flash MX Basic/Professional 2004
 * @remarks
 * This function must be implemented by the user. Animate calls this function upon detecting a keyboard release event.
 *
 * @usage
 *
 * ```javascript
 * function keyUp() {
 *   // statements
 * }
 * ```
 * @example
 *
 * The following example displays a message in the Output panel
 * when the extensible tool is active and a key is released.
 *
 * ```javascript
 * function keyUp() {
 *   fl.trace("Key is released");
 * }
 * ```
 * @see {@link keyDown | keyDown()}
 */
declare function keyUp(): void;

/**
 * A callback function that Animate calls when the mouse is double-clicked on the Stage while the extensible tool is active.
 * @since Macromedia Flash MX Basic/Professional 2004
 * @remarks
 * This function must be implemented by the user. Animate calls this function upon detecting a mouse double-click event.
 *
 * @usage
 *
 * ```javascript
 * function mouseDoubleClick() {
 *   // statements
 * }
 * ```
 * @example
 *
 * The following example displays a message in the Output panel
 * when the extensible tool is active and the mouse button is double-clicked.
 *
 * ```javascript
 * function mouseDoubleClick() {
 *   fl.trace("Mouse was double-clicked");
 * }
 * ```
 */
declare function mouseDoubleClick(): void;

/**
 * A callback function that Animate calls when the mouse button is pressed over the Stage while the extensible tool is active.
 * while the pointer is over the Stage.
 * @since Macromedia Flash MX Basic/Professional 2004
 * @param [point] The location of the mouse when the button is pressed.
 *
 * It is passed to the function when the mouse button is pressed.
 * @remarks
 * This function must be implemented by the user. Animate calls this function upon detecting a mouse down event,
 * passing the coordinates of the click as an argument.
 * @usage
 *
 * ```javascript
 * function mouseDown([point]) {
 *   // statements
 * }
 * ```
 * @example
 *
 * The following examples show how this function can be used when the extensible tool is active.
 * The first example displays a message in the Output panel that the mouse button was pressed.
 * The second example displays the *x* and *y* coordinates of the mouse's location when the button was pressed.
 *
 * ```javascript
 * function mouseDown() {
 *   fl.trace("Mouse button has been pressed");
 * }
 * ```
 *
 * ```javascript
 * function mouseDown(point) {
 *   fl.trace("x = " + point.x + " :: y = " + point.y);
 * }
 * ```
 */
declare function mouseDown(point?: Point): void;

/**
 * A callback function that Animate calls whenever the mouse moves over the Stage while the extensible tool is active.
 *
 * The mouse button can be down or up.
 * @remarks
 * This function must be implemented by the user. Animate calls this function upon detecting mouse movement,
 * passing the current pointer coordinates as an argument.
 * @since Macromedia Flash MX Basic/Professional 2004
 * @param [point] The current location of the mouse.
 *
 * It is passed to the function whenever the mouse moves, which tracks the mouse location.
 * If the Stage is in edit or edit-in-place mode, the point coordinates are relative to the object being edited.
 * Otherwise, the point coordinates are relative to the Stage.
 * @usage
 *
 * ```javascript
 * function mouseMove([point]) {
 *   // statements
 * }
 * ```
 * @example
 *
 * The following examples show how this function can be used.
 * The first example displays a message in the Output panel that the mouse is being moved.
 * The second example displays the *x* and *y* coordinates of the mouse's location as it moves.
 *
 * ```javascript
 * function mouseMove() {
 *   fl.trace("moving");
 * }
 * ```
 *
 * ```javascript
 * function mouseMove(point) {
 *   fl.trace("x = " + point.x + " :: y = " + point.y);
 * }
 * ```
 */
declare function mouseMove(point?: Point): void;

/**
 * A callback function that Animate calls when the mouse button is released over the Stage while the extensible tool is active.
 * and the mouse button is released after being pressed on the Stage.
 * @since Macromedia Flash MX Basic/Professional 2004
 * @remarks
 * This function must be implemented by the user. Animate calls this function upon detecting a mouse up event.
 *
 * @usage
 *
 * ```javascript
 * function mouseUp() {
 *   // statements
 * }
 * ```
 * @example
 *
 * The following example displays a message in the Output panel
 * when the extensible tool is active and the mouse button is released.
 *
 * ```javascript
 * function mouseUp() {
 *   fl.trace("mouse is up");
 * }
 * ```
 */
declare function mouseUp(): void;

/**
 * A callback function that Animate calls when the user changes the tool's options in the Property inspector.
 *
 * You can use the {@link Tools.activeTool} property to query the current values of the options.
 * @since Macromedia Flash MX Basic/Professional 2004
 * @remarks
 * This function must be implemented by the user. Animate calls this function when it detects that the tool's options have been modified.
 *
 * @usage
 *
 * ```javascript
 * function notifySettingsChanged() {
 *   // statements
 * }
 * ```
 * @example
 *
 * The following example displays a message in the Output panel
 * when the extensible tool is active and the user changes its options in the Property inspector.
 *
 * ```javascript
 * function notifySettingsChanged() {
 *   var theTool = fl.tools.activeTool;
 *   var newValue = theTool.myProp;
 * }
 * ```
 */
declare function notifySettingsChanged(): void;

/**
 * Method; Displays a prompt and optional text in a modal Alert dialog box, along with `OK` and `Cancel` buttons.
 * @since Macromedia Flash MX Basic/Professional 2004
 * @param promptMessage A string to display in the Prompt dialog box (limited to 256 characters in Mac OS X).
 * @param [text] A default value for the text field.
 * @remarks
 * This function can be called directly from a JSFL script to get a string input from the user.
 *
 * @returns Returns the string entered by the user,
 * or `null` if the user clicks `Cancel` or clicks `OK` but doesn't enter anything.
 * @example
 *
 * The following example prompts the user to enter a user name.
 * If the user types a name and clicks `OK`, the name appears in the Output panel.
 *
 * ```javascript
 * var userName = prompt("Enter user name", "Type user name here");
 * fl.trace(userName);
 * ```
 * @see
 *
 * - {@link alert | alert()}
 * - {@link confirm | confirm()}
 */
declare function prompt(promptMessage: string, text?: string): string | null;

/**
 * @since Macromedia Flash MX Basic/Professional 2004
 */
declare const fl: Flash;

/**
 * @since Macromedia Flash MX Basic/Professional 2004
 */
declare const flash: Flash;

/**
 * @since Adobe Animate CC 2016
 */
declare const an: Flash;

/**
 * @since Adobe Animate CC 2016
 */
declare const animate: Flash;

/**
 * @since Macromedia Flash MX Basic/Professional 2004
 */
declare const Math: FLmath;

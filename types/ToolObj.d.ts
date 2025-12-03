type ToolName = "arrow"
  | "bezierSelect"
  | "freeXform"
  | "fillXform"
  | "lasso"
  | "pen"
  | "penplus"
  | "penminus"
  | "penmodify"
  | "text"
  | "line"
  | "rect"
  | "oval"
  | "rectPrimitive"
  | "ovalPrimitive"
  | "polystar"
  | "pencil"
  | "brush"
  | "inkBottle"
  | "bucket"
  | "eyeDropper"
  | "eraser"
  | "hand"
  | "magnifier"
  | "GPUBrush"
  | "ThreeDRotate"
  | "ThreeDXform"
  | "lassoPoly"
  | "magicWand"
  | "paintBrush"
  | "camera"
  | "width"
  | "stageRotation"
  | "timeScrub"
  | "puppet";

/**
 * A ToolObj object represents an individual tool in the Tools panel.
 *
 * To access a ToolObj object,
 * use properties of the {@link Tools | Tools object}: either the {@link Tools.toolObjs} array
 * or {@link Tools.activeTool}.
 * @since Macromedia Flash MX Basic/Professional 2004
 */
interface ToolObj {
  /**
   * Method; Enables or disables the specified control in a Property inspector.\
   *
   * Used only when creating extensible tools.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param control The name of the control to enable or disable.
   * Legal values depend on the Property inspector invoked by this tool; see {@link ToolObj.setPI | ToolObj.setPI()}.
   *
   * A shape Property inspector has the following controls:
   *
   * - Stroke
   * - fill
   *
   * A text Property inspector has the following controls:
   *
   * | type | font | pointsize |
   * | --- | --- | --- |
   * | color | bold | italic |
   * | direction | alignLeft | alignCenter |
   * | alignRight | alignJustify | spacing |
   * | position | autoKern | small |
   * | rotation | format | lineType |
   * | selectable | html | border |
   * | deviceFonts | varEdit | options |
   * | link | maxChars | target |
   *
   * A movie Property inspector has the following controls:
   *
   * | size | publish | background |
   * | --- | --- | --- |
   * | framerate | player | profile |
   * @param enable A boolean value that determines whether to enable (true) or disable (false) the control.
   * @returns Nothing.
   * @example
   *
   * The following command in an extensible tool's JavaScript file sets Flash
   * to not show the stroke options in the Property inspector for that tool:
   *
   * ```javascript
   * theTool.enablePIControl("stroke", false);
   * ```
   */
  enablePIControl(control: string, enable: boolean): void;

  /**
   * Method; Identifies a PNG file to use as a tool icon in the Tools panel.
   *
   * This method is used only when you create extensible tools.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param file The name of the PNG file to use as the icon.
   * The PNG file must be placed in the same folder as the JSFL file.
   * @returns Nothing.
   * @example
   *
   * The following example specifies that the image in the PolyStar.png file should be used
   * as the icon for the tool named "PolyStar":
   *
   * ```javascript
   * var theTool = fl.tools.activeTool;
   * var theTool.setIcon("PolyStar.png");
   * ```
   */
  setIcon(file: string): void;

  /**
   * Method; Sets the string that appears in the pop-up menu as the name for the tool.
   *
   * This method is used only when you create extensible tools.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param menuStr The name that appears in the pop-up menu as the name for the tool.
   * @returns Nothing.
   * @example
   *
   * The following example specifies that the tool named `theTool`
   * should display the name "PolyStar Tool" in its pop-up menu:
   *
   * ```javascript
   * var theTool = fl.tools.activeTool;
   * var theTool.setMenuString("PolyStar Tool");
   * ```
   */
  setMenuString(menuStr: string): void;

  /**
   * Method; Associates an XML file with the tool.
   *
   * The file specifies the options to appear in a modal panel that is invoked by an Options button
   * in the Property inspector.
   *
   * You would usually use this method in the `configureTool()` function inside your JSFL file.
   * See {@link configureTool | configureTool()}.
   *
   * For example, the "PolyStar.xml" file specifies three options associated with the Polygon tool:
   *
   * ```xml
   * <properties>
   *   <property name="Style"
   *     variable="style"
   *     list="polygon,star"
   *     defaultValue="0"
   *     type="Strings" />
   *
   *   <property name="Number of Sides"
   *     variable="nsides"
   *     min="3"
   *     max="32"
   *     defaultValue="5"
   *     type="Number" />
   *
   *   <property name="Star point size"
   *     variable="pointParam"
   *     min="0"
   *     max="1"
   *     defaultValue=".5"
   *     type="Double" />
   * </properties>
   * ```
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param xmlFile The name of the XML file that has the description of the tool's options.
   * The XML file must be placed in the same folder as the JSFL file.
   * @returns Nothing.
   * @example
   *
   * The following example specifies that the file named "PolyStar.xml"
   * is associated with the currently active tool:
   *
   * ```javascript
   * theTool = fl.tools.activeTool;
   * theTool.setOptionsFile("PolyStar.xml");
   * ```
   */
  setOptionsFile(xmlFile: string): void;

  /**
   * Method; Specifies which Property inspector should be used when the tool is activated.
   *
   * This method is used only when you create extensible tools.
   *
   * Acceptable values are "shape" (the default), "text", and "movie".
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param pi The Property inspector to invoke for this tool.
   * @returns Nothing.
   * @example
   *
   * The following example specifies that the shape Property inspector should be used when the tool is activated:
   *
   * ```javascript
   * theTool = fl.tools.activeTool;
   * theTool.setPI("shape");
   * ```
   */
  setPI(pi: "shape" | "text" | "movie"): void;

  /**
   * Method; Assigns a name to the tool for the configuration of the Tools panel.
   *
   * This method is used only when you create extensible tools.
   * The name is used only by the XML layout file that Flash reads to construct the Tools panel.
   * The name does not appear in the Flash user interface.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param name The name of the tool.
   * @returns Nothing.
   * @example
   *
   * The following example assigns the name "polystar" to the tool named `theTool`:
   *
   * ```javascript
   * theTool = fl.tools.activeTool;
   * theTool.setToolName("polystar");
   * ```
   */
  setToolName(name: string): void;

  /**
   * Method; Sets the tooltip that appears when the mouse is held over the tool icon.
   *
   * This method is used only when you create extensible tools.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param toolTip The tooltip to use for the tool.
   * @returns Nothing.
   * @example
   *
   * The following example specifies that the tooltip for the tool should be "PolyStar Tool":
   *
   * ```javascript
   * theTool = fl.tools.activeTool;
   * theTool.setToolTip("PolyStar Tool");
   * ```
   */
  setToolTip(toolTip: string): void;

  /**
   * Method; Shows or hides a control in the Property inspector.
   *
   * This method is used only when you create extensible tools.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param control The name of the control to show or hide.
   *
   * Valid values depend on the Property inspector invoked by this tool (see {@link ToolObj.setPI | ToolObj.setPI()}).
   *
   * A shape Property inspector has the following controls:
   *
   * - Stroke
   * - fill
   *
   * A text Property inspector has the following controls:
   *
   * | type | font | pointsize |
   * | --- | --- | --- |
   * | color | bold | italic |
   * | direction | alignLeft | alignCenter |
   * | alignRight | alignJustify | spacing |
   * | position | autoKern | small |
   * | rotation | format | lineType |
   * | selectable | html | border |
   * | deviceFonts | varEdit | options |
   * | link | maxChars | target |
   *
   * The movie Property inspector has the following controls:
   *
   * | size | publish | background |
   * | --- | --- | --- |
   * | framerate | player | profile |
   * @param show Whether to show or hide the specified control (`true` shows the control; `false` hides the control).
   * @returns Nothing.
   * @example
   *
   * The following command in an extensible tool's JavaScript file
   * will set Flash to not show the fill options in the Property inspector for that tool:
   *
   * ```javascript
   * fl.tools.activeTool.showPIControl("fill", false);
   * ```
   */
  showPIControl(control: string, show: boolean): void;

  /**
   * Method; Called in the {@link configureTool | configureTool()} method of an extensible tool's JavaScript file
   * to indicate that the free transform handles should appear when the tool is active.
   *
   * This method is used only when you create extensible tools.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param show Whether to show or hide the free transform handles for the current tool
   * (`true` shows the handles; `false` hides them).
   * @returns Nothing.
   * @see {@link configureTool | configureTool()}.
   */
  showTransformHandles(show: boolean): void;

  /**
   * Read-only property; An integer that specifies the depth of the tool in the pop-up menu in the Tools panel.
   *
   * This property is used only when creating extensible tools.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example specifies that the tool has a depth of 1,
   * which means one level under a tool in the Tools panel:
   *
   * ```javascript
   * fl.tools.activeTool.depth = 1;
   * ```
   */
  readonly depth: number;

  /**
   * Read-only property; An integer with a value of -1. This property is used only when you create extensible tools.
   *
   * An iconID value of -1 means that Flash will not try find an icon for the tool.
   * Instead, the script for the tool should specify the icon to display in the Tools panel;
   * see {@link ToolObj.setIcon | ToolObj.setIcon()}.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example assigns a value of -1 (the icon ID of the current tool) to the `toolIconID` variable:
   *
   * ```javascript
   * var toolIconID = fl.tools.activeTool.iconID;
   * ```
   */
  readonly iconID: number;

  /**
   * Read-only property; The integer position of the tool in the Tools panel.
   *
   * This property is used only when you create extensible tools.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following commands in the `mouseDown()` method of a tool's JavaScript file will show that
   * tool's position in the Tools panel as an integer in the Output panel:
   *
   * ```javascript
   * var myToolPos = fl.tools.activeTool.position;
   * fl.trace(myToolPos);
   * ```
   */
  readonly position: number;
}

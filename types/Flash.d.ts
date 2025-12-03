type ThemeBooleanParameter = "themeUseGradients" | "themeEnableShading"

type ThemeColorParameter = "themeAppBackgroundColor"
  | "themeItemSelectedColor"
  | "themeItemHighlightedColor"
  | "themeHotTextNormalColor"
  | "themeHotTextRolloverColor"
  | "themeHotTextDisableColor"
  | "themeStaticTextNormalColor"
  | "themeStaticTextDisableColor"
  | "themeTextEditNormalBackgroundColor"
  | "themeTextEditDisableBackgroundColor"
  | "themeDividerLine"
  | "themeDividerLineBevel"
  | "themeControlFocus"
  | "themeControlBorderNormal"
  | "themeControlBorderDisabled"
  | "themeControlFillNormal"
  | "themeControlFillTopNormal"
  | "themeControlFillBottomNormal"
  | "themeControlFillOver"
  | "themeControlFillTopOver"
  | "themeControlFillBottomOver"
  | "themeControlFillDown"
  | "themeControlFillTopDown"
  | "themeControlFillBottomDown"
  | "themeControlFillDisabled"
  | "themeControlFillTopDisabled"
  | "themeControlFillBottomDisabled"
  | "themeControlFillSelectedOver"
  | "themeControlFillTopSelectedOver"
  | "themeControlFillBottomSelectedOver"
  | "themeGenericIconNormal"
  | "themeGenericIconShadowNormal"
  | "themeGenericIconDisabled"
  | "themeGenericIconShadowDisabled";

type EventType = "documentNew"
  | "documentOpened"
  | "documentClosed"
  | "mouseMove"
  | "documentChanged"
  | "layerChanged"
  | "timelineChanged"
  | "frameChanged"

  // New in Adobe Animate.
  | "prePublish"
  | "postPublish"
  | "selectionChanged"
  | "dpiChanged"

interface FoundObjectInfo<T extends Element> {
  obj: T
  keyframe: number;
  timeline: Timeline;
  parent: Element
}

/**
 * The Flash object represents the Flash application.
 *
 * You can refer to this object using `flash` or `fl`.
 * Starting with Adobe Animate, you can also use `animate` or `an`.
 *
 * `fl` is used in code samples because it is concise and widely used in scripting,
 * making the code easier to read and write compared to other aliases such as `flash` or `animate`.
 * @since Macromedia Flash MX Basic/Professional 2004
 */
interface Flash {
  /**
   * Method; Registers a function to be called when a specific event occurs.
   *
   * Note that you can define multiple listeners for the same event.
   *
   * When using this method, be aware that if the event occurs frequently (as might be the case with `"mouseMove"`)
   * and the function takes a long time to run, your application might hang or otherwise enter an error state.
   *
   * Additionally, the `"prePublish"` and `"postPublish"` events should have minimal code and execute quickly.
   * @since Adobe Flash Professional CS3.
   *
   * The `"prePublish"`, `"postPublish"`, `"selectionChanged"`, and `"dpiChanged"` events are new in Adobe Animate.
   * @param eventType The event type to pass to this callback function.
   *
   * The `"documentChanged"` value doesn't mean that the content of a document has changed;
   * it means that a different document is now in the foreground.
   * That is, `fl.getDocumentDOM()` will return a different value than it did before this event occurred.
   * @param callbackFunction The function you want to execute every time the event occurs.
   * @returns An integer that identifies the event listener.
   *
   * Use this identifier when calling `fl.removeEventListener()`.
   * @example
   *
   * The following example displays a message in the Output panel when a document is closed:
   *
   * ```javascript
   * var myFunction = function () {
   *   fl.trace("document was closed");
   * };
   * var eventID = fl.addEventListener("documentClosed", myFunction);
   * ```
   * @see {@link Flash.removeEventListener | Flash.removeEventListener()}
   */
  addEventListener(eventType: EventType, callbackFunction: () => {}): number;

  /**
   * Method; Appends the specified tool in the Tools Panel from Toolbar Palette if it is not already present.
   *
   * If you or a user creates custom tools,
   * the names of those tools can also be passed as the **`toolName`** parameter.
   * @since Adobe Animate 2020
   * @param toolName The name of the tool to select.
   * @returns Whether the specified tool has been successfully added in the Tools Panel.
   * @example
   *
   * The following example selects the Oval tool.
   *
   * ```javascript
   * var success = fl.addToolInToolbar("oval");
   * ```
   */
  addToolInToolbar(toolName: ToolName): boolean;

  /**
   * Method; Opens a File Open or File Save system dialog box and lets the user specify a file to be opened or saved.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param browseType The type of file browse operation.
   *
   * The values `"open"` and `"select"` open the system File Open dialog box.
   * Each value is provided for compatibility with Dreamweaver.
   * The value "save" opens a system File Save dialog box.
   * @param [title] The title for the File Open or File Save dialog box.
   *
   * If omitted, a default value is used.
   * @param [fileDescription] A file description.
   *
   * For example:
   * - FLA Document (`*.fla`)
   * - ActionScript File (`*.as`)
   * @param [fileFilter] A file filter, such that only files that match the filters are displayed in the dialog.
   *
   * For example:
   * - "fla"
   * - "fla;as"
   * - "jsfl;fla;as"
   * @returns The URL of the file, expressed as a file:/// URI.
   * `null` if the user cancels out of the dialog box.
   * @example
   *
   * The following examples illustrate various options of the `Flash.browseForFileURL()` method:
   *
   * Adobe Flash Professional CC:
   *
   * ```javascript
   * var uri = fl.browseForFileURL("open", "Select a FLA", "FLA Document (*.fla)", "fla");
   * // Or
   * var fileDescription = "FLA document (*.fla);Actionscript File (*.as)";
   * var fileFilter = "fla;as";
   * var uri = fl.browseForFileURL("open", "Select a FLA or AS file", fileDescription, fileFilter);
   * ```
   *
   * The following are for CS4 through CS6. They do not work in Adobe Flash Professional CC.
   *
   * ```javascript
   * var fileURL = fl.browseForFileURL("open", "Select file");
   * var doc = fl.openDocument(fileURL);
   * ```
   *
   * The macFormat and winFormat parameters are supported in Flash CS4 through CS6.
   *
   * ```javascript
   * // To enable only FLA files in the open file dialog
   * var macFormat = "Flash Document|SPA||";
   * var winFormat = "Flash Document|*.fla||";
   * var previewArea = {};
   * var uri = fl.browseForFileURL("open", "Select a FLA file", previewArea, macFormat, winFormat);
   *
   * // To enable only AS files in the open file dialog
   * var macFormat = "ActionScript File|TEXT[*.as||";
   * var winFormat = "ActionScript File|*.as||";
   * var previewArea = {};
   * var uri = fl.browseForFileURL("open", "Select a FLA file", previewArea, macFormat, winFormat);
   *
   * // To enable only FLA and AS files in the open file dialog
   * var macFormat = "Flash Document|SPA[*.fla|ActionScript File|TEXT[*.as||";
   * var winFormat = "Flash Document|*.fla|ActionScript File|*.as||";
   * var previewArea = {};
   * var uri = fl.browseForFileURL("open", "Select a FLA or AS file", previewArea, macFormat, winFormat);
   * ```
   * @see {@link Flash.browseForFolderURL | Flash.browseForFolderURL()}
   */
  browseForFileURL(browseType: "open" | "save" | "select", title?: string, fileDescription?: string, fileFilter?: string): string | null;

  /**
   * Method; Displays a Browse for Folder dialog box and lets the user select a folder.
   * @since Macromedia Flash Basic/Professional 8
   * @param [description] The description of the Browse For Folder dialog box.
   *
   * If omitted, the dialog box title is "Select Folder."
   * @returns The URL of the folder, expressed as a file:/// URI.
   * `null` if the user cancels out of the dialog box.
   * @example
   *
   * The following example lets the user select a folder and then displays a list of files in that folder:
   *
   * ```javascript
   * var folderURI = fl.browseForFolderURL("Select a folder.");
   * var folderContents = FLfile.listFolder(folderURI);
   * ```
   * @see
   *
   * - {@link Flash.browseForFileURL | Flash.browseForFileURL()}
   * - {@link FLfile | FLfile object}
   */
  browseForFolderURL(description?: string): string | null;

  /**
   * Method; Empties the publish cache.
   * @since Adobe Flash Professional CS5.5
   * @example
   *
   * The following code empties the publish cache:
   *
   * ```javascript
   * fl.clearPublishCache();
   * ```
   * @see
   *
   * - {@link Flash.publishCacheDiskSizeMax}
   * - {@link Flash.publishCacheEnabled}
   * - {@link Flash.publishCacheMemoryEntrySizeLimit}
   * - {@link Flash.publishCacheMemorySizeMax}
   */
  clearPublishCache(): void;

  /**
   * Method; Copies the specified string to the Clipboard.
   *
   * To copy the current selection to the Clipboard, use {@link Document.clipCopy | Document.clipCopy()}.
   * @since Adobe Flash Professional CS3
   * @param string A string to be copied to the Clipboard.
   * @example
   *
   * The following example copies the path of the current document to the Clipboard:
   *
   * ```javascript
   * var documentPath = fl.getDocumentDOM().path;
   * fl.clipCopyString(documentPath);
   * ```
   */
  clipCopyString(string: string): void;

  /**
   * Method; Closes all open files (FLA files, SWF files, JSFL files, and so on).
   *
   * If you want to close all open files without saving changes to any of them,
   * pass false for **`promptToSave`**.
   *
   * This method does **not** terminate the application.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param [promptToSave] Whether to display the Save dialog box for any files that have been changed
   * since they were previously saved, or the Save As dialog box for files that have never been saved.
   *
   * The default value is `true`.
   * @returns Nothing.
   * @example
   *
   * The following code closes all open files, prompting the user to save any new or changed files.
   *
   * ```javascript
   * fl.closeAll();
   * ```
   * @see
   *
   * - {@link Flash.closeAllPlayerDocuments | Flash.closeAllPlayerDocuments()}
   * - {@link Flash.closeDocument | Flash.closeDocument()}
   */
  closeAll(promptToSave?: boolean): void;

  /**
   * Method; Closes all the SWF files that were opened with `Control > Test Movie`.
   * @since Adobe Flash Professional CS3
   * @returns `true` if one or more movie windows were open; `false` otherwise.
   * @example
   *
   * The following example closes all the SWF files that were opened with `Control > Test Movie`.
   *
   * ```javascript
   * fl.closeAllPlayerDocuments();
   * ```
   * @see
   *
   * - {@link Flash.closeAll | Flash.closeAll()}
   * - {@link Flash.closeDocument | Flash.closeDocument()}
   */
  closeAllPlayerDocuments(): boolean;

  /**
   * Method; Closes the specified document.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param documentObject A {@link Document | Document object}.
   *
   * If this parameter refers to the active document,
   * the Document window might not close until the script that calls this method finishes executing.
   * @param [promptToSaveChanges] When **`promptToSaveChanges`** is `false`,
   * the user is not prompted if the document contains unsaved changes;
   * that is, the file is closed and the changes are discarded.
   * If **`promptToSaveChanges`** is `true`, and if the document contains unsaved changes,
   * the user is prompted with the standard yes-or-no dialog box.
   *
   * The default value is `true`.
   * @returns Nothing.
   * @example
   *
   * The following example illustrates two ways of closing a document.
   *
   * ```javascript
   * // Closes the specified document and prompts to save changes.
   * fl.closeDocument(fl.documents[0]);
   * fl.closeDocument(fl.documents[0], true); // Use of true is optional.
   *
   * // Closes the specified document without prompting to save changes.
   * fl.closeDocument(fl.documents[0], false);
   * ```
   * @see {@link Flash.closeAll | Flash.closeAll()}
   */
  closeDocument(documentObject: Document, promptToSaveChanges?: boolean): void;

  /**
   * Method; Silently copies a library item from a document without exposing the item in the Flash Pro user interface.
   *
   * Call the {@link Document.clipPaste | Document.clipPaste()} method to paste the item into the new document.
   * @since Adobe Flash Professional CS5
   * @param fileURI A string, expressed as a file:/// URI, that contains the path to the FLA or XFL file.
   * @param libraryItemPath The path to the library item to be copied.
   * @returns `true` if the copy succeeds; `false` otherwise.
   * @example
   *
   * The following example illustrates use of the `fl.copyLibraryItem()` method
   * to copy the "armjoint-l1" library item:
   *
   * ```javascript
   * fl.copyLibraryItem("file:///c:/users/userid/Desktop/Robot.fla", "armjoint-l1");
   * fl.getDocumentDOM().clipPaste(true);
   * ```
   */
  copyLibraryItem(fileURI: string, libraryItemPath: string): boolean;

  /**
   * Method; Opens a new document and selects it.
   *
   * Values for size, resolution, and color are the same as the current defaults.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param [docType] The type of document to create.
   *
   * Acceptable values are `"timeline"`, `"htmlcanvas"`, `"vrPanoDoc"`, `"vr360Doc"`
   * for `AS3`, `HTML5 canvas`, `VR Panorama` and `VR 360` document respectively.
   *
   * To find document type, you can use `Document.type` property. For example, ```fl.trace(fl.getDocumentDOM().type)```.
   *
   * The default value is `"timeline"`,
   * which has the same effect as choosing `File > New > Advanced > ActionScript 3.0` document.
   * @returns The {@link Document | Document object} for the newly created document, if the method is successful.
   *
   * If an error occurs, the value is `undefined`.
   * @example
   *
   * The following example creates two timeline-based documents:
   *
   * ```javascript
   * // Create two AS3.0 documents and one HTML5 canvas document.
   * fl.createDocument();
   * fl.createDocument("timeline");
   * fl.createDocument("htmlcanvas");
   * ```
   */
  createDocument(docType?: "timeline" | "htmlcanvas" | "vrPanoDoc" | "vr360Doc"): Document | undefined;

  /**
   * Returns a specific document's publishing profile without having to open the file.
   * @since Adobe Flash Professional CS5
   * @param ucfURI The file URI from which to export the publish settings.
   * @param [profileName] The profile name to export.
   * @example
   *
   * The following example reads the publishing profile string:
   *
   * ```javascript
   * var ppXML = "";
   * var ucfURI = fl.browseForFileURL("open", "select a FLA");
   * if (ucfURI && ucfURI.length > 0) {
   *   ppXML = fl.exportPublishProfileString(ucfURI);
   * }
   * fl.trace(ppXML);
   * ```
   */
  exportPublishProfileString(ucfURI: string, profileName?: string): void;

  /**
   * Method; Checks whether a file already exists on disk.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param fileURI A string, expressed as a file:/// URI, that contains the path to the file.
   * @returns `true` if the file exists on disk; `false` otherwise.
   * @example
   *
   * The following example displays `true` or `false` in the Output panel for each specified file,
   * depending on whether the file exists.
   *
   * ```javascript
   * alert(fl.fileExists("file:///C|/example.fla"));
   * alert(fl.fileExists("file:///C|/example.jsfl"));
   * alert(fl.fileExists(""));
   * ```
   */
  fileExists(fileURI: string): boolean;

  /**
   * Method; lets you target a specific file by using its unique identifier
   * (instead of its index value, for example).
   *
   * Use this method in conjunction with {@link Document.id}.
   * @since Adobe Flash Professional CS3
   * @param id An integer that represents a unique identifier for a document.
   * @returns A {@link Document | Document object}.
   *
   * `null` if no document exists with the specified **`id`**.
   * @example
   *
   * The following example illustrates reading a document's ID and then using it to target that document:
   *
   * ```javascript
   * var originalDocID = fl.getDocumentDOM().id;
   * // other code here, maybe working in different files
   * var targetDoc = fl.findDocumentDOM(originalDocID);
   * // Set the height of the Stage in the original document to 400 pixels.
   * targetDoc.height = 400;
   * ```
   * @see {@link Flash.findDocumentIndex | Flash.findDocumentIndex()}
   */
  findDocumentDOM(id: number): Document | null;

  /**
   * Method; Returns an array of integers that represent the position of the document **`name`**
   * in the {@link Flash.documents} array.
   *
   * More than one document with the same name can be open (if the documents are located in different folders).
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param name The document name for which you want to find the index. The document must be open.
   * @returns An array of integers that represent the position of the document **`name`**
   * in the {@link Flash.documents} array.
   * @example
   *
   * The following example displays information about the index position of any open files named "test.fla"
   * in the Output panel:
   *
   * ```javascript
   * var filename = "test.fla";
   * var docIndex = fl.findDocumentIndex(filename);
   * for (var index in docIndex) {
   *   fl.trace(filename + " is open at index " + docIndex[index]);
   * }
   * ```
   * @see
   *
   * - {@link Flash.documents}
   * - {@link Flash.findDocumentDOM | Flash.findDocumentDOM()}
   */
  findDocumentIndex(name: string): number[];

  /**
   * Method; Exposes elements in a document with instance names that match the specified text.
   *
   * ***Note:** In some cases, this method works only when run as a command from within a FLA file,
   * not when you are currently viewing or editing the JSFL file.*
   * @since Adobe Flash Professional CS3
   * @param instanceName The instance name of an item in the specified document.
   * @param document The {@link Document | Document object} in which to search for the specified item.
   * @returns An array of generic objects. Use the `obj` property of each item in the array to get the object.
   *
   * The object has the following properties: `keyframe`, `layer`, `timeline`, and `parent`.
   * You can use these properties to access the hierarchy of the object.
   *
   * For more information on these properties and how to access them,
   * see {@link Flash.findObjectInDocByType | Flash.findObjectInDocByType()}.
   *
   * You can also access methods and properties for the layer and timeline values;
   * they are equivalent to the {@link Layer | Layer object} and the {@link Timeline | Timeline object}, respectively.
   * @example
   *
   * The following example searches the current document for elements named "instance01".
   *
   * ```javascript
   * var nameToSearchFor = "instance01";
   * var doc = fl.getDocumentDOM();
   * var results = fl.findObjectInDocByName(nameToSearchFor, doc);
   * if (results.length > 0) {
   *   alert("success, found " + results.length + " objects");
   * } else {
   *   alert("failed, no objects named " + nameToSearchFor + " found");
   * }
   * ```
   * @see {@link Flash.findObjectInDocByType | Flash.findObjectInDocByType()}
   */
  findObjectInDocByName(instanceName: string, document: Document): FoundObjectInfo<Element>[];

  /**
   * Method; Exposes elements of a specified element type in a document.
   *
   * ***Note:** In some cases, this method works only when run as a command from within a FLA file,
   * not when you are currently viewing or editing the JSFL file.*
   * @since Adobe Flash Professional CS3
   * @param elementType The type of element to search for.
   * @param document The {@link Document | Document object} in which to search for the specified item.
   * @returns An array of generic objects. Use the `obj` property of each item in the array to get the element object.
   * Each object has the following properties: `keyframe`, `layer`, `timeline`, and `parent`.
   *
   * You can use these properties to access the hierarchy of the object.
   *
   * You can also access methods and properties for the layer and timeline values;
   * they are equivalent to the {@link Layer | Layer object} and the {@link Timeline | Timeline object}, respectively.
   * @example
   *
   * The following example searches the current document for text fields and then changes their contents:
   *
   * ```javascript
   * var doc = fl.getDocumentDOM();
   * var typeToSearchFor = "text";
   * var results = fl.findObjectInDocByType(typeToSearchFor, doc);
   * if (results.length > 0) {
   *   for (var i = 0; i < results.length; i++) {
   *     results[i].obj.setTextString("new text");
   *   }
   *   alert("success, found " + results.length + " objects");
   * } else {
   *   alert("failed, no objects of type " + typeToSearchFor + " found");
   * }
   * ```
   *
   * The following example shows how to access the special properties of the object returned by this method:
   *
   * ```javascript
   * var doc = fl.getDocumentDOM();
   * var resultsArray = findObjectInDocByType("text", doc);
   * if (resultsArray.length > 0) {
   *   var firstItem = resultsArray[0];
   *   // firstItem.obj - This is the element object that was found.
   *   // You can access the following properties of this object:
   *   // firstItem.keyframe - The keyframe that the element is on.
   *   // firstItem.layer - The layer that the keyframe is on.
   *   // firstItem.timeline - The timeline that the layer is on.
   *   // firstItem.parent - The parent of the timeline. For example,
   *   // the timeline might be in a symbol instance.
   * }
   * ```
   *
   * The following example shows how to back up the DOM to find the name of a layer on which a text field was found,
   * using the `resultArray.obj` object:
   *
   * ```javascript
   * var doc = fl.getDocumentDOM();
   * var typeToSearchFor = "text";
   * var resultsArray = fl.findObjectInDocByType(typeToSearchFor, doc);
   * if (resultsArray.length > 0) {
   *   for (var i = 0; i < resultsArray.length; i++) {
   *     resultsArray[i].obj.setTextString("new text");
   *     var firstItem = resultsArray[0];
   *     firstItemObj = firstItem.obj;
   *     fl.trace(firstItemObj.layer.name + "layerName");
   *   }
   * } else {
   *   alert("failed, no objects of type " + typeToSearchFor + " found");
   * }
   * ```
   * @see {@link Flash.findObjectInDocByName | Flash.findObjectInDocByName()}
   */
  findObjectInDocByType(elementType: ElementType, document: Document): FoundObjectInfo<Element>[];
  findObjectInDocByType(elementType: "shape" | "shapeObj", document: Document): FoundObjectInfo<Shape>[];
  findObjectInDocByType(elementType: "text" | "tlfText", document: Document): FoundObjectInfo<Text>[];
  findObjectInDocByType(elementType: "instance", document: Document): FoundObjectInfo<Instance>[];

  /**
   * Method; Returns an integer that represents the number of bytes being used in a specified area of Flash.exe memory.
   *
   * @since Macromedia Flash Basic/Professional 8. **Windows only**
   * @param memType An integer that specifies the memory utilization area to be queried.
   *
   * Use the following table to determine which value you want to pass as **`memType`**:
   *
   * | **memType** | **Resource data** |
   * | --- | --- |
   * | 0 | PAGEFAULTCOUNT |
   * | 1 | PEAKWORKINGSETSIZE |
   * | 2 | WORKINGSETSIZE |
   * | 3 | QUOTAPEAKPAGEDPOOLUSAGE |
   * | 4 | QUOTAPAGEDPOOLUSAGE |
   * | 5 | QUOTAPEAKNONPAGEDPOOLUSAGE |
   * | 6 | QUOTANONPAGEDPOOLUSAGE |
   * | 7 | PAGEFILEUSAGE |
   * | 8 | PEAKPAGEFILEUSAGE |
   * @returns An integer that represents the number of bytes being used in a specified area of Flash.exe memory.
   * @example
   *
   * The following example displays the current working memory consumption:
   *
   * ```javascript
   * var memsize = fl.getAppMemoryInfo(2);
   * fl.trace("Flash current memory consumption is " + memsize + " bytes or " + memsize / 1024 + "KB");
   * ```
   */
  getAppMemoryInfo(memType: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8): number;

  /**
   * Method; Retrieves the {@link Document | DOM} of the currently active document (FLA file).
   *
   * If one or more documents are open but a document does not currently have focus
   * (for example, if a JSFL file has focus), retrieves the DOM of the most recently active document.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @returns A {@link Document | Document object}, or `null` if no documents are open.
   * @example
   *
   * The following example displays the name of the current or most recently active document in the Output panel:
   *
   * ```javascript
   * var currentDoc = fl.getDocumentDOM();
   * fl.trace(currentDoc.name);
   * ```
   */
  getDocumentDOM(): Document | null;

  /**
   * Method; Returns the SWFPanel object based on the panel's localized name or its SWF filename
   * (without the filename extension).
   * @since Adobe Flash Professional CS5.5
   * @param panelName The localized panel name or the root filename of the panel's SWF file.
   *
   * Pass in `false` as the second parameter if using the latter.
   * @param [useLocalizedPanelName] If `false`, the **`panelName`** parameter is assumed
   * to be the English (unlocalized) name of the panel,
   * which corresponds to the SWF filename without the file extension.
   *
   * Default value is `true`.
   * @returns SWFPanel object.
   * @example
   *
   * The following example displays the name of the panel referenced as 'Project' in the Output panel:
   *
   * ```javascript
   * fl.trace("name of panel is: " + fl.getSwfPanel("Project").name);
   * ```
   */
  getSwfPanel(panelName: string, useLocalizedPanelName?: boolean): SwfPanel;

  /**
   * Method; Returns the theme color that matches the passed theme parameter.
   *
   * Adobe Animate introduced 2 UI themes: Dark and Light UI,
   * and this method retrieves the current theme color to help you render your custom content.
   * @since Adobe Animate CC 2016
   * @param themeParamName A theme parameter from the list returned by the `fl.getThemeColorParameters()` method.
   *
   * If the theme parameter is one of {@link ThemeBooleanParameter}, this method returns either "true" or "false".
   * @returns A string containing a theme color (in #rrggbb or #rrggbbaa format) that matches the passed parameter.
   *
   * If the theme parameter is one of {@link ThemeBooleanParameter},
   * this method returns either "true" or "false".
   * @example
   *
   * The following example returns the theme colors that corresponds to "themeAppBackgroundColor" and
   * "themeStaticTextNormalColor":
   *
   * ```javascript
   * var colorValue = fl.getThemeColor("themeAppBackgroundColor");
   * fl.trace("app background color " + colorValue);
   * var staticColor = fl.getThemeColor("themeStaticTextNormalColor");
   * fl.trace("staticColor " + staticColor);
   * ```
   */
  getThemeColor(themeParamName: ThemeColorParameter | ThemeBooleanParameter): string;
  getThemeColor(themeParamName: ThemeBooleanParameter): "false" | "true";

  /**
   * Method; returns an Array of strings that contain the theme color parameters. The available theme color parameters are as follows:
   *
   * - themeAppBackgroundColor
   * - themeItemSelectedColor
   * - themeItemHighlightedColor
   * - themeHotTextNormalColor
   * - themeHotTextRolloverColor
   * - themeHotTextDisableColor
   * - themeStaticTextNormalColor
   * - themeStaticTextDisableColor
   * - themeTextEditNormalBackgroundColor
   * - themeTextEditDisableBackgroundColor
   * - themeUseGradients
   * - themeEnableShading
   * - themeDividerLine
   * - themeDividerLineBevel
   * - themeControlFocus
   * - themeControlBorderNormal
   * - themeControlBorderDisabled
   * - themeControlFillNormal
   * - themeControlFillTopNormal
   * - themeControlFillBottomNormal
   * - themeControlFillOver
   * - themeControlFillTopOver
   * - themeControlFillBottomOver
   * - themeControlFillDown
   * - themeControlFillTopDown
   * - themeControlFillBottomDown
   * - themeControlFillDisabled
   * - themeControlFillTopDisabled
   * - themeControlFillBottomDisabled
   * - themeControlFillSelectedOver
   * - themeControlFillTopSelectedOver
   * - themeControlFillBottomSelectedOver
   * - themeGenericIconNormal
   * - themeGenericIconShadowNormal
   * - themeGenericIconDisabled
   * - themeGenericIconShadowDisabled
   *
   * Adobe Animate introduced 2 UI themes: Dark and Light UI,
   * and this method retrieves the current theme color parameters to help you render your custom content.
   *
   * ***Note:** The "top" and "bottom" colors are for drawing controls when shading is enabled.
   * When shading is disabled, use `themeControlFillNormal`, `themeControlFillOver`
   * without the "top" and "bottom" in the names*
   * @since Adobe Animate CC 2016
   * @returns An array of strings that contain the theme color parameters.
   * @example
   *
   * The following example lists the theme color parameters:
   *
   * ```javascript
   * var params = fl.getThemeColorParameters();
   * for (var i = 0; i < params.length; i++) {
   *   fl.trace("param: " + params[i]);
   * }
   * ```
   */
  getThemeColorParameters(): (ThemeColorParameter | ThemeBooleanParameter)[];

  /**
   * Method; Returns either the font Style or the font Size that is used to draw the UI of the specified size.
   * @since Adobe Animate CC 2016
   * @todo Find out the return type.
   * @param infoType A string that contains one of the following:
   *
   * - fontStyle - Return the font style for the size specified by the **`size`** parameter.
   * - fontSize - Return the font size for the size specified by the **`size`** parameter.
   * @param size Either "large" or "small".
   * @returns A string containing either the font style or the font size for the specifie size.
   * @example
   *
   * The following example illustrates the use of this method:
   *
   * ```javascript
   * fl.getThemeFontInfo("fontStyle", "large"); // Return the fontStyle for large size
   * fl.getThemeFontInfo("fontStyle", "small"); // Return the fontStyle for small size
   * fl.getThemeFontInfo("fontSize", "large"); // Return the fontSize for large size
   * fl.getThemeFontInfo("fontSize", "small"); // Return the fontSize for small size
   * ```
   */
  getThemeFontInfo(infoType: "fontStyle" | "fontSize", size: "large" | "small"): string;

  /**
   * Method; Determines whether a specified font is installed.
   * @since Adobe Flash Professional CS4
   * @param fontName A string that specifies the name of a device font.
   * @returns Whether the specified font is installed.
   * @example
   *
   * The following code displays `true` in the Output panel if the "Times" font is installed.
   *
   * ```javascript
   * fl.trace(fl.isFontInstalled("Times"));
   * ```
   */
  isFontInstalled(fontName: string): boolean;

  /**
   * Method; Maps an escaped Unicode URL to a UTF-8 or MBCS URL. Use this method when the string will be used in ActionScript to access an external resource. You must use this method if you need to handle multibyte characters.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param URI A string that contains the escaped Unicode URL to map.
   * @param [returnMBCS] A boolean value that you must set to true if you want an escaped MBCS path returned. Otherwise, the method returns UTF-8. The default value is false. This parameter is optional.
   * @returns The converted URL.
   * @example
   *
   * The following example converts a URL to UTF-8 so the player can load it:
   *
   * ```javascript
   * var url = MMExecute("fl.mapPlayerURL(" + myURL + ", false);");
   * mc.loadMovie(url);
   * ```
   */
  mapPlayerURL(URI: string, returnMBCS?: boolean): string;

  /**
   * Method; Opens a Flash document (FLA file) for editing in a new Flash Document window and gives it focus.
   *
   * For a user, the effect is the same as selecting `File > Open` and then selecting a file.
   *
   * If the specified file is already open, the window that contains the document comes to the front.
   *
   * The window that contains the specified file becomes the currently selected document.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param fileURI A string, expressed as a file:/// URI, that specifies the name of the file to be opened.
   * @returns The {@link Document | Document object} for the newly opened document, if the method is successful.
   * @throws If the file is not found or is not a valid FLA file, an error is reported and the script is cancelled.
   * @example
   *
   * The following example opens a file named Document.fla that is stored in the root directory on the C drive.
   * The code stores a Document object representing that document in the doc variable and sets the document to be the currently selected document.
   * That is, until focus is changed, `Flash.getDocumentDOM()` refers to this document.
   *
   * ```javascript
   * var doc = fl.openDocument("file:///c|/Document.fla");
   * ```
   */
  openDocument(fileURI: string): Document;

  /**
   * Method; Opens an existing file or creates a new script (JSFL, AS, ASC) or other file (XML, TXT) in Flash.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param fileURI A string, expressed as a file:/// URI,
   * that specifies the path of the `JSFL`, `AS`, `ASC`, `XML`, `TXT`,
   * or other file that should be loaded into Flash.
   * @example
   *
   * The following example opens a file named my_test.jsfl that is stored in the temp directory on the C drive:
   *
   * ```javascript
   * fl.openScript("file:///c|/temp/my_test.jsfl");
   * ```
   */
  openScript(fileURI: string): void;

  /**
   * Method; Publishes a FLA file without opening it.
   *
   * This API opens the FLA in a headless mode and publishes the SWF (or whatever the profile is set to).
   * @since Adobe Flash Professional CS5
   * @param flaURI A string, expressed as a file:/// URI,
   * that specifies the path of the FLA file that should be silently published.
   * @param [publishProfile] The publish profile to use when publishing.
   *
   * If omitted, the default publish profile is used.
   * @returns Whether the profile specified by **`publishProfile`** has been found or not.
   *
   * Always `true` if **`publishProfile`** parameter is omitted.
   * @example
   *
   * The following example prompts the user to select a FLA file and silently publishes it
   * using the "Default" publish profile:
   *
   * ```javascript
   * var uri = fl.browseForFileURL("select", "select a FLA file to publish");
   * var publishProfileName = "Default";
   * fl.publishDocument(uri, publishProfileName);
   * ```
   */
  publishDocument(flaURI: string, publishProfile?: string): boolean;
  publishDocument(flaURI: string): true;

  /**
   * Method; Quits Flash, prompting the user to save any changed documents.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param [promptIfNeeded]
   * A boolean value that is `true` (default) if you want the user to be prompted to save any modified documents.
   * Set this parameter to `false` if you do not want the user to be prompted to save modified documents.
   * In the latter case, any modifications in open documents will be discarded and the application will exit immediately. Although it is useful for batch processing, use this method with caution. This parameter is optional.
   * @returns Nothing.
   * @example
   *
   * The following example illustrates quitting with and without asking to save modified documents:
   *
   * ```javascript
   * // Quit with prompt to save any modified documents.
   * fl.quit();
   * fl.quit(true); // True is optional.
   * // Quit without saving any files.
   * fl.quit(false);
   * ```
   */
  quit(promptIfNeeded?: boolean): void;

  /**
   * Method; Reloads all effects descriptors defined in the user's Configuration Effects folder. This permits you to rapidly change the scripts during development, and it provides a mechanism to improve the effects without relaunching the application. This method works best if used in a command placed in the Commands folder.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @removed Adobe Animate CC 2016
   * @returns Nothing.
   * @example
   *
   * The following example is a one-line script that you can place in the Commands folder. When you need to reload effects, go to the Commands menu and execute the script.
   *
   * ```javascript
   * fl.reloadEffects();
   * ```
   */
  reloadEffects(): void;

  /**
   * Method; rebuilds the Tools panel from the toolconfig.xml file. This method is used only when creating extensible tools. Use this method when you need to reload the Tools panel, for example, after modifying the JSFL file that defines a tool that is already present in the panel.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @returns Nothing.
   * @example
   *
   * The following example is a one-line script that you can place in the Commands folder. When you need to reload the Tools panel, run the script from the Commands menu.
   *
   * ```javascript
   * fl.reloadTools();
   * ```
   */
  reloadTools(): void;

  /**
   * Unregisters a function that was registered using {@link Flash.addEventListener | Flash.addEventListener()}.
   * @since Adobe Flash Professional CS3. The **`id`** parameter is new in Flash Professional CS4.
   * @param eventType A string that specifies the event type to remove from this callback function.
   * @param id An integer that specifies the listener ID returned from the corresponding `fl.addEventListener()` call.
   * @returns A boolean value of true if the event listener was successfully removed; false if the function was never added to the list with the `fl.addEventListener()` method.
   * @usage fl.removeEventListener(eventType, id)
   * @example
   *
   * The following example removes the event listener associated with the documentClosed event:
   *
   * ```javascript
   * fl.removeEventListener("documentClosed", eventID);
   * ```
   * @see {@link Flash.addEventListener | Flash.addEventListener()}
   */
  removeEventListener(eventType: EventType, id: number): boolean;

  /**
   * Method; Resets the global Classpath setting in the ActionScript 3.0 Settings dialog box to the default value.
   *
   * To reset the ActionScript 2.0 global Classpath, use {@link Flash.resetPackagePaths | Flash.resetPackagePaths()}.
   * @since Adobe Flash Professional CS3
   * @example
   *
   * The following example resets the ActionScript 3.0 Classpath setting to its default value.
   *
   * ```javascript
   * fl.resetAS3PackagePaths();
   * ```
   * @see {@link Flash.as3PackagePaths}
   */
  resetAS3PackagePaths(): void;

  /**
   * Method; Resets the global Classpath setting in the ActionScript 2.0 Settings dialog box to the default value. To reset the ActionScript 3.0 global Classpath, use {@link Flash.resetAS3PackagePaths | Flash.resetAS3PackagePaths()}.
   * @since Adobe Flash Professional CS3
   * @removed Adobe Animate CC 2016
   * @example
   *
   * The following example resets the ActionScript 2.0 Classpath setting to its default value.
   *
   * ```javascript
   * fl.resetPackagePaths();
   * ```
   * @see {@link Flash.packagePaths}
   */
  resetPackagePaths(): void;

  /**
   * Method; reverts the specified FLA document to its last saved version.
   *
   * Unlike the File Revert menu option,
   * this method does not display a warning window that asks the user to confirm the operation.
   *
   * See also {@link Document.revert | Document.revert()} and {@link Document.canRevert | Document.canRevert()}.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param documentObject A {@link Document | Document object}. If *documentObject* refers to the active document, the Document window might not revert until the script that calls this method finishes executing.
   * @returns `true` if the Revert operation completes successfully; `false` otherwise.
   * @example
   *
   * The following example reverts the current FLA document to its last saved version;
   * any changes made since the last save are lost.
   *
   * ```javascript
   * fl.revertDocument(fl.getDocumentDOM());
   * ```
   */
  revertDocument(documentObject: Document): boolean;

  /**
   * Method; Executes a JavaScript file. If a function is specified as one of the arguments, it runs the function and also any code in the script that is not within the function. The rest of the code in the script runs before the function is run.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @todo Find out parameter types.
   * @param fileURI A string, expressed as a file:/// URI, that specifies the name of the script file to execute.
   * @param [funcName] A string that identifies a function to execute in the JSFL file that is specified in *fileURI*. This parameter is optional.
   * @param [arg] An optional parameter that specifies one or more arguments to be passed to **`funcName`**.
   * @returns The function's result as a string, if **`funcName`** is specified; otherwise, nothing.
   * @usage fl.runScript(fileURI, funcName?, arg1, arg2, arg3, ...)
   * @example
   *
   * Suppose there is a script file named testScript.jsfl in the root directory on the C drive and its contents are as follows:
   *
   * ```javascript
   * function testFunct(num, minNum) {
   *   fl.trace("in testFunct: 1st arg: " + num + " 2nd arg: " + minNum);
   * }
   * for (var i = 0; i < 2; i++) {
   *   fl.trace("in for loop i=" + i);
   * }
   * fl.trace("end of for loop");
   * // End of testScript.jsfl
   * ```
   *
   * If you issue the following command,
   *
   * ```javascript
   * fl.runScript("file:///C|/testScript.jsfl", "testFunct", 10, 1);
   * ```
   *
   * the following information appears in the Output panel:
   *
   * ```text
   * in for loop i=0
   * in for loop i=1
   * end of for loop
   * in testFunct: 1st arg: 10 2nd arg: 1
   * ```
   *
   * You can also just call testScript.jsfl without executing a function, as follows:
   *
   * ```javascript
   * fl.runScript("file:///C|/testScript.jsfl");
   * ```
   *
   * This produces the following in the Output panel:
   *
   * ```text
   * in for loop i=0
   * in for loop i=1
   * end of for loop
   * ```
   */
  runScript(fileURI: string, funcName?: string, ...arg: string[]): string | void;

  /**
   * Method; saves all open documents.
   * If a file has never been saved, the Save As dialog box displays. If a file has not been modified since the last time it was saved, the file isn't saved. To allow an unsaved or unmodified file to be saved, use {@link Flash.saveDocumentAs | Flash.saveDocumentAs()}.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @returns Nothing.
   * @example
   *
   * The following example saves all open documents:
   *
   * ```javascript
   * fl.saveAll();
   * ```
   * @see
   *
   * - {@link Document.save | Document.save()}
   * - {@link Document.saveAndCompact | Document.saveAndCompact()}
   * - {@link Flash.saveDocument | Flash.saveDocument()}
   * - {@link Flash.saveDocumentAs | Flash.saveDocumentAs()}
   */
  saveAll(): void;

  /**
   * Method; saves the specified document as a FLA document.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @todo Find out parameter types.
   * @param document A {@link Document | Document object} that specifies the document to be saved.
   *
   * If **`document`** is `null`, the active document is saved.
   * @param [fileURI] A string, expressed as a file:/// URI, that specifies the name of the saved document.
   *
   * If the *fileURI* parameter is `null` or omitted, the document is saved with its current name.
   * @returns Whether the save operation has completed successfully.
   *
   * This method save the file regardless of whether it is new, modified, or unmodified.
   * @example
   *
   * The following example saves the current document and two specified documents:
   *
   * ```javascript
   * // Save the current document.
   * alert(fl.saveDocument(fl.getDocumentDOM()));
   * // Save the specified documents.
   * alert(fl.saveDocument(fl.documents[0], "file:///C|/example1.fla"));
   * alert(fl.saveDocument(fl.documents[1], "file:///C|/example2.fla"));
   * ```
   * @see
   *
   * - {@link Document.save | Document.save()}
   * - {@link Document.saveAndCompact | Document.saveAndCompact()}
   * - {@link Flash.saveAll | Flash.saveAll()}
   * - {@link Flash.saveDocumentAs | Flash.saveDocumentAs()}
   */
  saveDocument(document: Document | null, fileURI?: string): boolean;

  /**
   * Method; displays the Save As dialog box for the specified document.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param document A {@link Document | Document object} that specifies the document to save.
   *
   * If **`document`** is `null`, the active document is saved.
   * @returns True if the Save As operation completes successfully; false otherwise.
   * @example
   *
   * The following example prompts the user to save the specified document
   * and then displays an alert message that indicates whether the document was saved:
   *
   * ```javascript
   * alert(fl.saveDocumentAs(fl.documents[1]));
   * ```
   * @see
   *
   * - {@link Document.save | Document.save()}
   * - {@link Document.saveAndCompact | Document.saveAndCompact()}
   * - {@link Flash.saveAll | Flash.saveAll()}
   * - {@link Flash.saveDocument | Flash.saveDocument()}
   */
  saveDocumentAs(document: Document | null): boolean;

  /**
   * Method; Enables selection or editing of an element.
   *
   * Generally, you will use this method on objects returned by
   * {@link Flash.findObjectInDocByName | Flash.findObjectInDocByName()}
   * or {@link Flash.findObjectInDocByType | Flash.findObjectInDocByType()}.
   * @since Adobe Flash Professional CS3
   * @param elementObject The {@link Element | Element object} you want to select.
   * @param editMode Whether you want to edit the element (`true`) or want only to select it (`false`).
   * @returns Whether the element was selected successfully or not.
   * @example
   *
   * The following example selects an element named "second text field" if one is found in the document:
   *
   * ```javascript
   * var nameToSearchFor = "second text field";
   * var doc = fl.getDocumentDOM();
   * // Start by viewing Scene 1 (index value of 0).
   * document.editScene(0);
   * // Search for element by name.
   * var results = fl.findObjectInDocByName(nameToSearchFor, doc);
   * if (results.length > 0) {
   *   // Select the first element found.
   *   // Pass false, so the symbolInstance you are searching for is selected.
   *   // If you pass true, the symbol instance will switch to edit mode.
   *   fl.selectElement(results[0], false);
   *   alert("success, found " + results.length + " objects");
   * } else {
   *   alert('failed, no objects with name "' + nameToSearchFor + '" found');
   * }
   * ```
   * @see
   *
   * - {@link Flash.findObjectInDocByName | Flash.findObjectInDocByName()}
   * - {@link Flash.findObjectInDocByType | Flash.findObjectInDocByType()}
   */
  selectElement(elementObject: Element, editMode: boolean): boolean;

  /**
   * Method; Selects the specified tool in the Tools panel.
   *
   * If you or a user creates custom tools, the names of those tools can also be passed as the **`toolName`** parameter.
   * @since Adobe Flash Professional CS3
   * @param toolName A string that specifies the name of the tool to select.
   *
   * @example
   *
   * The following example selects the Pen tool.
   *
   * ```javascript
   * fl.selectTool("pen");
   * ```
   * @see
   *
   * - {@link Tools | Tools object}
   * - {@link ToolObj | ToolObj object}
   */
  selectTool(toolName: ToolName): void;

  /**
   * Method; sets the active window to be the specified document.
   *
   * This method is also supported by Dreamweaver and Fireworks.
   * If the document has multiple views (created by `Window > Duplicate Window`),
   * the most recently active view is selected.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param document A {@link Document | Document object} that specifies the document to select as the active window.
   * @param [activateFrame] A parameter that is ignored by Flash and Fireworks
   * and is present only for compatibility with Dreamweaver.
   * @returns Nothing.
   * @example
   *
   * The following example shows two ways to activate a specified document:
   *
   * ```javascript
   * fl.setActiveWindow(fl.documents[0]);
   *
   * var theIndex = fl.findDocumentIndex("myFile.fla");
   * fl.setActiveWindow(fl.documents[theIndex]);
   * ```
   */
  setActiveWindow(document: Document, activateFrame?: boolean): void;

  /**
   * Method; Sets a boolean preference value.
   * @since Adobe Animate CC 2016
   * @param keySection The preferences section that contains keyName. (usually this is "Settings").
   * @param keyName The name of the boolean preference setting to be set.
   * @param keyValue The value to be set.
   * @example
   *
   * The following example calls the fl.setPrefBoolean() method:
   *
   * ```javascript
   * fl.setPrefBoolean("BridgeTalk", "LogIncoming", true);
   * ```
   */
  setPrefBoolean(keySection: string, keyName: string, keyValue: boolean): void;

  /**
   * Method; Lets you disable the warning about a script running too long (pass false for **`show`**). You might want to do this when processing batch operations that take a long time to complete. To re-enable the alert, issue the command again, this time passing true for **`show`**.
   * @since Macromedia Flash Basic/Professional 8
   * @param show A boolean value specifying whether to enable or disable the warning about a script running too long.
   * @returns Nothing.
   * @example
   *
   * The following example illustrates how to disable and re-enable the warning about a script running too long:
   *
   * ```javascript
   * fl.showIdleMessage(false);
   * var result = timeConsumingFunction();
   * fl.showIdleMessage(true);
   * var result = timeConsumingFunction();
   * ```
   */
  showIdleMessage(show: boolean): void;

  /**
   * Toggles a breakpoint for the given .as file at the given line. If enable is false, the breakpoint currently stored at that line will be erased.
   * @since Adobe Animate CC 2016
   * @todo Evaluate example code.
   * @param fileURI The URI of the the AS file in which to toggle the breakpoint.
   * @param line An integer; the line number at which to toggle the breakpoint.
   * @param enable If set to true, the breakpoint is enabled. If set to false, the breakpoint is disabled.
   * @example
   *
   * The following example enables a breakppoint at line 10 of the AS file located at C:\AS\breakpointTest.as:
   *
   * ```javascript
   * fl.toggleBreakpoint("file:///C|/AS/breakpointTest.as", 10, 1);
   * ```
   */
  toggleBreakpoint(fileURI: string, line: number, enable: boolean): void;

  /**
   * Method; Sends a text string to the Output panel, terminated by a new line, and displays the Output panel if it is not already visible. This method is identical to {@link OutputPanel.trace | OutputPanel.trace()} and works in the same way as the trace() statement in ActionScript.
   * To send a blank line, use fl.trace("") or fl.trace("\\n"). You can use the latter command inline, making \\n a part of the *message* string.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @param message A string that appears in the Output panel.
   * @returns Nothing.
   * @example
   *
   * The following example displays several lines of text in the Output panel:
   *
   * ```javascript
   * fl.outputPanel.clear();
   * fl.trace("Hello World!!!");
   * var myPet = "cat";
   * fl.trace("\nI have a " + myPet);
   * fl.trace("");
   * fl.trace("I love my " + myPet);
   * fl.trace("Do you have a " + myPet + "?");
   * ```
   */
  trace(message: any): void;

  /**
   * Method; Launches the XML To UI dialog from a URI that points to an XML-format file.
   * @since Adobe Animate CC 2016
   * @param xmlURI A URI specifying the XML file that defines the controls in the panel. You must specify the full path name.
   * @example
   *
   * The following example calls the xmlPanel method:
   *
   * ```javascript
   * var obj = fl.xmlPanel(fl.configURI + "Commands/Test.xml");
   * for (var prop in obj) {
   *   fl.trace("property " + prop + " = " + obj[prop]);
   * }
   * ```
   */
  xmlPanel(xmlURI: string): XMLUIPropertyControls;

  /**
   * Method; Launches the XML To UI dialog from an XML-format string.
   * @since Adobe Animate CC 2016
   * @param xmlString A string containing XML that defines a dialog.
   * @example
   *
   * The following example calls the xmlPanelFromString method:
   *
   * ```javascript
   * var str =
   *   '<?xml version="1.0"?><dialog id="scale-dialog" title="Scale Selection"buttons="accept, cancel"><grid><columns><column/><column/></columns><rows><row align="center"><label value="Scale y:" control="yScale"/><textbox id="yScale"/></row></rows></grid></dialog>';
   * var theDialog = fl.xmlPanelFromString(str);
   * ```
   */
  xmlPanelFromString(xmlString: string): XMLUIPropertyControls;

  /**
   * Read-only property; The {@link Math | Math object} provides methods for matrix and point operations.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example shows the transformation matrix of the selected object and its inverse:
   *
   * ```javascript
   * // Select an element on the Stage and then run this script.
   * var mat = fl.getDocumentDOM().selection[0].matrix;
   * for (var prop in mat) {
   *   fl.trace("mat." + prop + " = " + mat[prop]);
   * }
   *
   * var invMat = fl.Math.invertMatrix(mat);
   * for (var prop in invMat) {
   *   fl.trace("invMat." + prop + " = " + invMat[prop]);
   * }
   * ```
   */
  readonly Math: Math;

  /**
   * Read-only property; An {@link ActionsPanel | ActionsPanel object}, which represents the currently displayed Actions panel.
   * @since Adobe Flash Professional CS3
   */
  readonly actionsPanel: ActionsPanel;

  /**
   * Read-only property; The absolute path for the local user's Application directory in a platform-specific format.
   * @since Adobe Flash Professional CS5.5. Flash CS5 might also have this property.
   */
  readonly applicationDirectory: string;

  /**
   * Read-only property; The URI that indicates the absolute path of the folder containing the executable file of the Flash/Animate program.
   * @since Adobe Flash Professional CS5.5. Flash CS5 might also have this property.
   */
  readonly applicationURI: string;

  /**
   * Property; A string that corresponds to the global Classpath setting in the ActionScript 3.0 Settings dialog box. Items in the string are delimited by semi-colons. To view or change ActionScript 2.0 Classpath settings, use {@link Flash.packagePaths}.
   * @since Adobe Flash Professional CS3
   * @example
   *
   * The following example illustrates changing the ActionScript 3.0 Classpath settings.
   *
   * ```javascript
   * fl.trace(fl.as3PackagePaths);
   * // Output (assuming started with default value)
   * // .;$(AppConfig)/ActionScript 3.0/Classes
   *
   * fl.as3PackagePaths = "buying;selling";
   * fl.trace(fl.as3PackagePaths);
   * // Output
   * // buying; selling
   * ```
   * @see {@link Flash.resetAS3PackagePaths | Flash.resetAS3PackagePaths()}
   */
  as3PackagePaths: string;

  /**
   * Read-only property; A {@link CompilerErrors | CompilerErrors object}, which represents the Errors panel.
   * @since Adobe Flash Professional CS3
   */
  readonly compilerErrors: CompilerErrors;

  /**
   * Read-only property; A {@link ComponentsPanel | ComponentsPanel object}, which represents the Components panel.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example stores a componentsPanel object in the comPanel variable:
   *
   * ```javascript
   * var comPanel = fl.componentsPanel;
   * ```
   */
  readonly componentsPanel: ComponentsPanel;

  /**
   * Read-only property; A string that specifies the full path for the local user's Configuration directory in a platform-specific format. To specify this path as a file:/// URI, which is not platform-specific, use {@link Flash.configURI}.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example displays the Configuration directory in the Output panel:
   *
   * ```javascript
   * fl.trace("My local configuration directory is " + fl.configDirectory);
   * ```
   */
  readonly configDirectory: string;

  /**
   * Read-only property; A string that specifies the full path for the local user's Configuration directory as a file:/// URI. See also {@link Flash.configDirectory}.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example runs a specified script. Using fl.configURI lets you specify the location of the script without knowing which platform the script is running on.
   *
   * ```javascript
   * // To run a command in your commands menu, change "Test.Jsfl"
   * // to the command you want to run in the line below.
   * fl.runScript(fl.configURI + "Commands/Test.jsfl");
   * ```
   */
  readonly configURI: string;

  /**
   * A boolean value that specifies whether Contact Sensitive selection mode is enabled (true) or not (false).
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example shows how to disable Contact Sensitive selection mode before making a selection and then how to reset it to its original value after making the selection:
   *
   * ```javascript
   * var contact = fl.contactSensitiveSelection;
   * fl.contactSensitiveSelection = false;
   * // Insert selection code here.
   * fl.contactSensitiveSelection = contact;
   * ```
   */
  contactSensitiveSelection: boolean;

  /**
   * Read-only property; An array of strings that represent the various types of documents that can be created.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example displays the types of documents that can be created, in the Output panel:
   *
   * ```javascript
   * fl.trace("Number of choices " + fl.createNewDocList.length);
   * for (var i = 0; i < fl.createNewDocList.length; i++) fl.trace("choice: " + fl.createNewDocList[i]);
   * ```
   */
  readonly createNewDocList: string[];

  /**
   * Read-only property; An array of strings that represent the file extensions of the types of documents that can be created. The entries in the array correspond directly (by index) to the entries in the {@link Flash.createNewDocList | Flash.createNewDocList} array.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example displays the extensions of the types of documents that can be created, in the Output panel:
   *
   * ```javascript
   * fl.trace("Number of types " + fl.createNewDocListType.length);
   * for (var i = 0; i < fl.createNewDocListType.length; i++) fl.trace("type: " + fl.createNewDocListType[i]);
   * ```
   */
  readonly createNewDocListType: string[];

  /**
   * Read-only property; An array of strings that represent the various types of templates that can be created.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example displays the types of templates that can be created, in the Output panel:
   *
   * ```javascript
   * fl.trace("Number of template types: " + fl.createNewTemplateList.length);
   * for (var i = 0; i < fl.createNewTemplateList.length; i++) fl.trace("type: " + fl.createNewTemplateList[i]);
   * ```
   */
  readonly createNewTemplateList: string[];

  /**
   * Read-only property; An array of {@link Document | Document object}s that represent the documents (FLA files) that are currently open for editing.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example stores an array of open documents in the docs variable:
   *
   * ```javascript
   * var docs = fl.documents;
   * ```
   *
   * The following example displays the names of currently open documents, in the Output panel:
   *
   * ```javascript
   * for (doc in fl.documents) {
   *   fl.trace(fl.documents[doc].name);
   * }
   * ```
   */
  readonly documents: Document[];

  /**
   * Read-only property; The {@link DrawingLayer | DrawingLayer object} that an extensible tool
   * should use when the user wants to temporarily draw while dragging (for example, when creating a selection marquee).
   * @since Macromedia Flash MX Basic/Professional 2004
   * @see {@link DrawingLayer.setColor | DrawingLayer.setColor()}
   */
  readonly drawingLayer: DrawingLayer;

  /**
   * Property; A string that contains a list of items in the global ActionScript 3.0 External library path,
   * which specifies the location of SWC files used as runtime shared libraries.
   *
   * Items in the string are delimited by semi-colons.
   *
   * In the authoring tool, the items are specified by choosing `Edit > Preferences > ActionScript > ActionScript 3.0 Settings`.
   * @since Adobe Flash Professional CS4
   * @example
   *
   * The following example adds the /SWC_runtime folder to the global ActionScript 3.0 External library path:
   *
   * ```javascript
   * fl.trace(fl.externalLibraryPath);
   * fl.externalLibraryPath = "/SWC_runtime;" + fl.externalLibraryPath;
   * fl.trace(fl.externalLibraryPath);
   * ```
   * @see
   *
   * - {@link Flash.flexSDKPath}
   * - {@link Flash.libraryPath}
   * - {@link Flash.sourcePath}
   * - {@link Document.externalLibraryPath}
   */
  externalLibraryPath: string;

  /**
   * Property; A string that specifies the path to the Flex SDK folder, which contains bin, frameworks, lib, and other folders. In the authoring tool, the items are specified by choosing Edit > Preferences > ActionScript > ActionScript 3.0 Settings.
   * @since Adobe Flash Professional CS4
   * @example
   *
   * The following code displays the Flex SDK path in the Output panel:
   *
   * ```javascript
   * fl.trace(fl.flexSDKPath);
   * ```
   * @see
   *
   * - {@link Flash.externalLibraryPath}
   * - {@link Flash.libraryPath}
   * - {@link Flash.sourcePath}
   */
  flexSDKPath: string;

  /**
   * Read-only property; The array of generic objects corresponding to the list of installed Flash Players in the document PI. Each object in the array contains the following properties:
   *
   * **name** The string name of the document.
   *
   * **version** Can be used to set the current player for a document, using the Document.setPlayerVersion() function.
   *
   * **minASVersion** The minimum ActionScript version required by the document. An integer between the minASVersion and the maxASVersion (inclusive) can be used to set the ActionScript version of the document, using the Document.asVersion property.
   *
   * **maxASVersion** The maximum ActionScript version supported by the document.
   *
   * **stageWidth** The default Stage width in pixels for the given target. For example, for iPhone the default size is 320 x 480 pixels. For Android, the default size is 480 x 800.
   *
   * **stageHeight** The default Stage height in pixels for the given target. For example, for iPhone the default size is 320 x 480 pixels. For Android, the default size is 480 x 800.
   * @since Adobe Flash Professional CS5.5
   * @example
   *
   * The following example traces the properties of all objects in the installedPlayers array to the output window:
   *
   * ```javascript
   * var arr = fl.installedPlayers;
   * for (var i in arr) {
   *   fl.trace(
   *     "name: " +
   *       arr[i].name +
   *       " version: " +
   *       arr[i].version +
   *       "minASVersion: " +
   *       arr[i].minASVersion +
   *       "maxASVersion: " +
   *       arr[i].maxASVersion +
   *       " stageWidth:" +
   *       arr[i].stageWidth +
   *       " stageHeight: " +
   *       arr[i].stageHeight +
   *       " "
   *   );
   * }
   * ```
   */
  readonly installedPlayers: { name: string; version: string; minASVersion: string; maxASVersion: string; stageWidth: number; stageHeight: number }[];

  /**
   * Property; A string that returns the five character code identifying the locale of the application's user interface.
   * @since Adobe Flash Professional CS5
   * @example
   *
   * The following example returns the five character langauge code indicated by the Flash application's localized user interface:
   *
   * ```javascript
   * var locConfigURI = fl.applicationURI + fl.languageCode + "/Configuration";
   * ```
   */
  languageCode: string;

  /**
   * Property; A string that contains a list of items in the global ActionScript 3.0 Library path,
   * which specifies the location of SWC files or folders containing SWC files.
   *
   * Items in the string are delimited by semi-colons.
   *
   * In the authoring tool,
   * the items are specified by choosing `Edit > Preferences > ActionScript > ActionScript 3.0 Settings`.
   * @since Adobe Flash Professional CS4
   * @example
   *
   * The following example adds the /SWC folder to the global ActionScript 3.0 Library path:
   *
   * ```javascript
   * fl.trace(fl.libraryPath);
   * fl.libraryPath = "/SWC;" + fl.libraryPath;
   * fl.trace(fl.libraryPath);
   * ```
   * @see
   *
   * - {@link Flash.externalLibraryPath}
   * - {@link Flash.flexSDKPath}
   * - {@link Flash.sourcePath}
   * - {@link Document.libraryPath}
   */
  libraryPath: string;

  /**
   * Read-only property; An array of the complete filenames in the Most Recently Used (MRU) list that the Flash authoring tool manages.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example displays the number of recently opened files and the name of each file, in the Output panel:
   *
   * ```javascript
   * fl.trace("Number of recently opened files: " + fl.mruRecentFileList.length);
   * for (var i = 0; i < fl.mruRecentFileList.length; i++) {
   *   fl.trace("file: " + fl.mruRecentFileList[i]);
   * }
   * ```
   */
  readonly mruRecentFileList: string[];

  /**
   * Read-only property; An array of the file types in the MRU list that the Flash authoring tool manages. This array corresponds to the array in the {@link Flash.mruRecentFileList} property.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example displays the number of recently opened files and the type of each file, in the Output panel:
   *
   * ```javascript
   * fl.trace("Number of recently opened files: " + fl.mruRecentFileListType.length);
   * for (var i = 0; i < fl.mruRecentFileListType.length; i++) {
   *   fl.trace("type: " + fl.mruRecentFileListType[i]);
   * }
   * ```
   */
  readonly mruRecentFileListType: string[];

  /**
   * Property; A boolean value that specifies whether the object drawing mode is enabled (true) or the merge drawing mode is enabled (false).
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example toggles the state of the object drawing mode:
   *
   * ```javascript
   * var toggleMode = fl.objectDrawingMode;
   * if (toggleMode) {
   *   fl.objectDrawingMode = false;
   * } else {
   *   fl.objectDrawingMode = true;
   * }
   * ```
   */
  objectDrawingMode: boolean;

  /**
   * Read-only property; Reference to the {@link OutputPanel | OutputPanel object}.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @see {@link OutputPanel | OutputPanel object}.
   */
  readonly outputPanel: OutputPanel;

  /**
   * Property; A string that corresponds to the global Classpath setting in the ActionScript 2.0 Settings dialog box. Class paths within the string are delimited with semi-colons (;). To view or change ActionScript 3.0 Classpath settings, use {@link Flash.as3PackagePaths}.
   * @since Adobe Flash Professional CS3
   * @removed Adobe Animate CC 2016
   * @example
   *
   * The following example illustrates changing the ActionScript 2.0 Classpath settings:
   *
   * ```javascript
   * fl.trace(fl.packagePaths);
   * // Output (assuming started with default value)
   * // .;$(LocalData)/Classes
   * fl.packagePaths = "buying;selling";
   * fl.trace(fl.packagePaths);
   * // Output
   * // buying; selling
   * ```
   * @see {@link Flash.resetPackagePaths | Flash.resetPackagePaths()}
   */
  packagePaths: string;

  /**
   * Read-only property; A {@link PresetPanel | PresetPanel object}.
   * @since Adobe Flash Professional CS4
   */
  readonly presetPanel: PresetPanel;

  /**
   * Property: An integer that sets the maximum size, in megabytes, of the publish cache on disk.
   * @since Adobe Flash Professional CS5.5
   * @example
   *
   * The following code sets the maximum publish cache size on disk to 1 megabyte:
   *
   * ```javascript
   * fl.publishCacheDiskSizeMax = 1;
   * ```
   * @see
   *
   * - {@link Flash.clearPublishCache | Flash.clearPublishCache()}
   * - {@link Flash.publishCacheEnabled | Flash.publishCacheEnabled}
   * - {@link Flash.publishCacheMemoryEntrySizeLimit | Flash.publishCacheMemoryEntrySizeLimit}
   * - {@link Flash.publishCacheMemorySizeMax | Flash.publishCacheMemorySizeMax}
   */
  publishCacheDiskSizeMax: number;

  /**
   * Property: A boolean value that sets whether the publish cache is enabled.
   * @since Adobe Flash Professional CS5.5
   * @example
   *
   * The following code displays whether the published cache is enabled in the Output window.
   *
   * ```javascript
   * fl.trace(fl.publishCacheEnabled);
   * ```
   * @see
   *
   * - {@link Flash.publishCacheDiskSizeMax}
   * - {@link Flash.clearPublishCache | Flash.clearPublishCache()}
   * - {@link Flash.publishCacheMemoryEntrySizeLimit}
   * - {@link Flash.publishCacheMemorySizeMax}
   */
  publishCacheEnabled: boolean;

  /**
   * Property; An integer that sets the maximum size, in kilobytes, of entries that can be added to the publish cache in memory. Anything at or below this size will be kept in memory; anything larger will be written to disk.
   *
   * Users with a lot of memory might want to raise this value to increase performance, while a user with very little memory might want to make it lower to keep the publish cache from consuming too much memory.
   * @since Adobe Flash Professional CS5.5
   * @example
   *
   * The following code sets the maximum publish cache entry size that can be stored in memory to 100 kilobytes:
   *
   * ```javascript
   * fl.publishCacheMemoryEntrySizeLimit = 100;
   * ```
   * @see
   *
   * - {@link Flash.publishCacheDiskSizeMax}
   * - {@link Flash.publishCacheEnabled}
   * - {@link Flash.clearPublishCache | Flash.clearPublishCache()}
   * - {@link Flash.publishCacheMemorySizeMax}
   */
  publishCacheMemoryEntrySizeLimit: number;

  /**
   * Property; An integer that sets the maximum size, in megabytes, of the publish cache in memory.
   * @since Adobe Flash Professional CS5.5
   * @example
   *
   * The following code sets the maximum publish cache size in memory to 1 megabyte:
   *
   * ```javascript
   * fl.publishCacheMemorySizeMax = 1;
   * ```
   * @see
   *
   * - {@link Flash.publishCacheDiskSizeMax}
   * - {@link Flash.publishCacheEnabled}
   * - {@link Flash.publishCacheMemoryEntrySizeLimit}
   * - {@link Flash.clearPublishCache | Flash.clearPublishCache()}
   */
  publishCacheMemorySizeMax: number;

  /**
   * Read-only property; The path of the currently running JSFL script, expressed as a file:/// URI.
   *
   * If the script was called from {@link Flash.runScript | Flash.runScript()},
   * this property represents the path of the immediate parent script.
   * That is, it doesn't traverse multiple calls to {@link Flash.runScript | Flash.runScript()}
   * to find the path of the original calling script.
   * @since Adobe Flash Professional CS3
   * @example
   *
   * The following example displays the path of the currently running JSFL script in the Output panel:
   *
   * ```javascript
   * fl.trace(fl.scriptURI);
   * ```
   * @see {@link Flash.runScript | Flash.runScript()}
   */
  readonly scriptURI: string;

  /**
   * Property; A string that contains a list of items in the global ActionScript 3.0 Source path,
   * which specifies the location of ActionScript class files.
   *
   * Items in the string are delimited by semi-colons.
   *
   * In the authoring tool, the items are specified by choosing `Edit > Preferences > ActionScript > ActionScript 3.0 Settings`.
   * @since Adobe Flash Professional CS4
   * @example
   *
   * The following example adds the "/Classes" folder to the global ActionScript 3.0 Source path:
   *
   * ```javascript
   * fl.trace(fl.sourcePath);
   * fl.sourcePath = "/Classes;" + fl.sourcePath;
   * fl.trace(fl.sourcePath);
   * ```
   * @see
   *
   * - {@link Flash.flexSDKPath}
   * - {@link Flash.externalLibraryPath}
   * - {@link Flash.libraryPath}
   * - {@link Document.sourcePath}
   */
  sourcePath: string;

  /**
   * Property; Returns an instance of the SpriteSheetExporter object.
   * @since Adobe Flash Professional CS6
   * @example
   *
   * The following example returns a reference to the SpriteSheetExporter object:
   *
   * ```javascript
   * fl.trace(fl.spriteSheetExporter);
   * ```
   */
  spriteSheetExporter: SpriteSheetExporter;

  /**
   * Read-only property; An array of registered {@link SwfPanel | SwfPanel object}s.
   *
   * A swfPanel object is registered if it has been opened at least once.
   *
   * A panel's position in the array represents the order in which it was opened.
   *
   * If the first panel opened is named TraceBitmap and the second panel opened is named AnotherFunction,
   * then `fl.swfPanels[0]` is the TraceBitmap swfPanel object,
   * `fl.swfPanels[1]` is the AnotherFunction swfPanel object, and so on.
   *
   * This property is undefined if none of panels have been opened (this behavior is new in Adobe Animate).
   * @since Adobe Flash Professional CS4
   * @example
   *
   * The following code displays the name and path of any registered Window SWF panels in the Output panel:
   *
   * ```javascript
   * if (fl.swfPanels.length > 0) {
   *   for (var x = 0; x < fl.swfPanels.length; x++) {
   *     fl.trace("Panel: " + fl.swfPanels[x].name + " -- Path: " + fl.swfPanels[x].path);
   *   }
   * }
   * ```
   */
  readonly swfPanels: SwfPanel[];

  /**
   * Read-only property; An array of {@link Tools | Tools object}s. This property is used only when creating extensible tools.
   * @since Macromedia Flash MX Basic/Professional 2004
   */
  readonly tools: Tools[];

  /**
   * Read-only property; The long string version of the Flash authoring tool, including platform.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example displays the version of the Flash authoring tool in the Output panel:
   *
   * ```javascript
   * alert(fl.version); // For example, WIN 10,0,0,540
   * ```
   * @see {@link https://wikipedia.org/wiki/Adobe_Flash#History | Adobe Flash History - Wikipedia}
   */
  readonly version: string;

  /**
   * Read-only property; An {@link XMLUI | XMLUI object}.
   *
   * This property lets you get and set XMLUI properties in a XMLUI dialog box
   * and lets you accept or cancel the dialog box programmatically.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @see {@link XMLUI | XMLUI object}
   */
  readonly xmlui: XMLUI;
}

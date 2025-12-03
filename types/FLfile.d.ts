/**
 * The FLfile object lets you write Flash extensions that can access, modify, and remove files and folders on the local file system. The FLfile API is provided in the form of an extension to the JavaScript API. This extension is called a *shared library* and is located in the following folder:
 *
 * - Windows 7 and 8:
 *
 * *boot drive*\\Users\\*username*\\AppData\\Local\\Adobe\\Flash CC\\*language*\\Configuration\\External Libraries\\FLfile.dll
 *
 * - Mac OS X:
 *
 * Macintosh HD/Users/*username*\/Library/Application Support/Adobe/Flash CC/*language*\/Configuration/External Libraries/FLfile.dll
 *
 * ***Note:** Don't confuse the shared libraries that contain symbols in your Flash documents with the JavaScript API shared libraries. They are two different things.*
 *
 * The FLfile methods work with files or folders (directories) on disk. Therefore, each method takes one or more parameters to specify the location of a file or folder. The location of the file or folder is expressed as a string in a form very similar to a website URL. It is called a file URI (Uniform Resource Identifier) and is formatted as shown here (including the quote marks):
 *
 * *"file:///drive\|/folder 1/folder 2/.../filename"*
 *
 * For example, if you want to create a folder on the C drive called config and place it in the Program Files/MyApp folder, use the following command:
 *
 * ```javascript
 * FLfile.createFolder("file:///C\|/Program Files/MyApp/config");
 * ```
 *
 * If you then want to place a file called config.ini in that folder, use the following command:
 *
 * ```javascript
 * FLfile.write("file:///C\|/Program Files/MyApp/config/config.ini", "");
 * ```
 *
 * To create a folder on the Macintosh, you could use the following command:
 *
 * ```javascript
 * FLfile.createFolder("file:///Macintosh/MyApp/config");
 * ```
 * @since Macromedia Flash MX Basic/Professional 2004 (7.2)
 */
declare namespace FLfile {

  /**
   * Method; Copies a file from one location to another. This method returns *false* if *copyURI* already exists.
   * @since Macromedia Flash MX Basic/Professional 2004 (7.2)
   * @param fileURI Expressed as a file:/// URI, that specifies the file you want to copy.
   * @param copyURI Expressed as a file:/// URI, that specifies the location and name of the copied file.
   * @returns A boolean value of true if successful; false otherwise.
   * @usage FLfile.copy(fileURI, copyURI)
   * @example
   *
   * The following example makes a backup copy of a configuration file named config.ini and places it inside the same folder in which it is located, with a new name:
   *
   * ```javascript
   * var originalFileURI = "file:///C|/Program Files/MyApp/config.ini";
   * var newFileURI = "file:///C|/Program Files/MyApp/config_backup.ini";
   * FLfile.copy(originalFileURI, newFileURI);
   * ```
   *
   * If you prefer, you can perform the same task with a single command:
   *
   * ```javascript
   * FLfile.copy("file:///C|:/Program Files/MyApp/config.ini", "file:///C|/Program Files/MyApp/config_backup.ini");
   * ```
   */
  function copy(fileURI: string, copyURI: string): boolean;

  /**
   * Method; Creates one or more folders at the specified location.
   * You can create multiple folders at one time. For example, the following command creates both the MyData and the TempData folders if they don't already exist:
   *
   * `FLfile.createFolder("file:///c\|/MyData/TempData")`
   * @since Macromedia Flash MX Basic/Professional 2004 (7.2)
   * @param folderURI A folder URI that specifies the folder structure you want to create.
   * @returns A boolean value of true if successful; false if *folderURI* already exists.
   * @usage FLfile.createFolder(folderURI)
   * @example
   *
   * The following example creates a folder and a subfolder under the configuration folder ({@link Flash.configURI | Flash.configURI}):
   *
   * ```javascript
   * fl.trace(FLfile.createFolder(fl.configURI + "folder01/subfolder01"));
   * ```
   *
   * The following example attempts to create a folder called tempFolder at the root level on the C drive and displays an alert box indicating whether the operation was successful:
   *
   * ```javascript
   * var folderURI = "file:///c|/tempFolder";
   * if (FLfile.createFolder(folderURI)) {
   *   alert("Created " + folderURI);
   * } else {
   *   alert(folderURI + " already exists");
   * }
   * ```
   * @see
   *
   * - {@link FLfile.remove | FLfile.remove()}
   * - {@link FLfile.write | FLfile.write()}
   */
  function createFolder(folderURI: string): boolean;

  /**
   * Method; Determines whether a specified file exists. If you specify a folder and a filename, the folder must already exist. To create folders, see {@link FLfile.createFolder | FLfile.createFolder()}.
   * @since Macromedia Flash MX Basic/Professional 2004 (7.2)
   * @param fileURI A string, expressed as a file:/// URI, that specifies the file you want to verify.
   * @returns A boolean value of true if successful; false otherwise.
   * @usage FLfile.exists(fileURI)
   * @see {@link FLfile.write | FLfile.write()}
   */
  function exists(fileURI: string): boolean;

  /**
   * Method; Returns a string representing the attributes of the specified file or folder, or an empty string if the file has no specific attributes (that it, it is not read-only, not hidden, and so on). You should always use {@link FLfile.exists | FLfile.exists()} to test for the existence of a file or folder before using this method.
   * Characters in the string represent the attributes as follows:
   *
   * - `R` — *fileOrFolderURI* is read-only
   *
   * - `D` — *fileOrFolderURI* is a folder (directory)
   *
   * - `H` — *fileOrFolderURI* is hidden (Windows only)
   *
   * - `S` — *fileOrFolderURI* is a system file or folder (Windows only)
   *
   * - `A` — *fileOrFolderURI* is ready for archiving (Windows only)
   *
   * For example, if *fileOrFolderURI* is a hidden folder, the string returned is `"DH"`.
   * @since Macromedia Flash MX Basic/Professional 2004 (7.2)
   * @param fileOrFolderURI Expressed as a file:/// URI, specifying the file or folder whose attributes you want to retrieve.
   * @returns A string that represents the attributes of the specified file or folder.
   * Results are unpredictable if the file or folder doesn't exist. You should use {@link FLfile.exists | FLfile.exists()} before using this method.
   * @usage FLfile.getAttributes(fileOrFolderURI)
   * @example
   *
   * The following example gets the attributes of the file mydata.txt and displays an alert box if the file is read-only.
   *
   * ```javascript
   * var URI = "file:///c|/temp/mydata.txt";
   * if (FLfile.exists(URI)) {
   *   var attr = FLfile.getAttributes(URI);
   *   if (attr && attr.indexOf("R") != -1) {
   *     // Returned string contains R.
   *     alert(URI + " is read only!");
   *   }
   * }
   * ```
   * @see {@link FLfile.setAttributes | FLfile.setAttributes()}
   */
  function getAttributes(fileOrFolderURI: string): string;

  /**
   * Method; Specifies how many seconds have passed between January 1, 1970 and the time the file or folder was created. This method is used primarily to compare the creation or modification dates of files or folders.
   * @since Macromedia Flash MX Basic/Professional 2004 (7.2)
   * @param fileOrFolderURI Expressed as a file:/// URI, specifying the file or folder whose creation date and time you want to retrieve as a hexadecimal string.
   * @returns A string containing a hexadecimal number that represents the number of seconds that have elapsed between January 1, 1970 and the time the file or folder was created, or *"00000000"* if the file or folder doesn't exist.
   * @usage FLfile.getCreationDate(fileOrFolderURI)
   * @example
   *
   * The following example determines whether a file has been modified since it was created:
   *
   * ```javascript
   * // Make sure the specified file exists
   * var fileURI = "file:///C|/MyApplication/MyApp.fla";
   * var creationTime = FLfile.getCreationDate(fileURI);
   * var modificationTime = FLfile.getModificationDate(fileURI);
   *
   * if (modificationTime > creationTime) {
   *   alert("The file has been modified since it was created.");
   * } else {
   *   alert("The file has not been modified since it was created.");
   * }
   * ```
   * @see
   *
   * - {@link FLfile.getCreationDateObj | FLfile.getCreationDateObj()}
   * - {@link FLfile.getModificationDate | FLfile.getModificationDate()}
   */
  function getCreationDate(fileOrFolderURI: string): string;

  /**
   * Method; Returns a JavaScript Date object that represents the date and time when the specified file or folder was created.
   * @since Macromedia Flash MX Basic/Professional 2004 (7.2)
   * @param fileOrFolderURI Expressed as a file:/// URI, specifying the file or folder whose creation date and time you want to retrieve as a JavaScript Date object.
   * @returns A JavaScript Date object that represents the date and time when the specified file or folder was created. If the file doesn't exist, the object contains information indicating that the file or folder was created at midnight GMT on December 31, 1969.
   * @usage FLfile.getCreationDateObj(fileOrFolderURI)
   * @example
   *
   * The following example displays (in human-readable form) the date a file was created, in the Output panel:
   *
   * ```javascript
   * // Make sure the specified file exists.
   * var file1Date = FLfile.getCreationDateObj("file:///c|/temp/file1.txt");
   * fl.trace(file1Date);
   * ```
   * @see
   *
   * - {@link FLfile.getCreationDate | FLfile.getCreationDate()}
   * - {@link FLfile.getModificationDateObj | FLfile.getModificationDateObj()}
   */
  function getCreationDateObj(fileOrFolderURI: string): Date;

  /**
   * Method; Specifies how many seconds have passed between January 1, 1970 and the time the file or folder was last modified. This method is used primarily to compare the creation or modification dates of files or folders.
   * @since Macromedia Flash MX Basic/Professional 2004 (7.2)
   * @param fileOrFolderURI Expressed as a file:/// URI, specifying the file whose modification date and time you want to retrieve as a hexadecimal string.
   * @returns A string containing a hexadecimal number that represents the number of seconds that have elapsed between January 1, 1970 and the time the file or folder was last modified, or *"00000000"* if the file doesn't exist.
   * @usage FLfile.getModificationDate(fileOrFolderURI)
   * @example
   *
   * The following example compares the modification dates of two files and determines which of the two was modified more recently:
   *
   * ```javascript
   * // Make sure the specified files exist.
   * var file1 = "file:///C|/MyApplication/MyApp.fla";
   * var file2 = "file:///C|/MyApplication/MyApp.as";
   * var modificationTime1 = FLfile.getModificationDate(file1);
   * var modificationTime2 = FLfile.getModificationDate(file2);
   *
   * if (modificationTime1 > modificationTime2) {
   *   alert("File 2 is older than File 1");
   * } else if (modificationTime1 < modificationTime2) {
   *   alert("File 1 is older than File 2");
   * } else {
   *   alert("File 1 and File 2 were saved at the same time");
   * }
   * ```
   * @see
   *
   * - {@link FLfile.getCreationDate | FLfile.getCreationDate()}
   * - {@link FLfile.getModificationDateObj | FLfile.getModificationDateObj()}
   */
  function getModificationDate(fileOrFolderURI: string): string;

  /**
   * Method; Returns a JavaScript Date object that represents the date and time when the specified file or folder was last modified.
   * @since Macromedia Flash MX Basic/Professional 2004 (7.2)
   * @param fileOrFolderURI Expressed as a file:/// URI, specifying the file or folder whose modification date and time you want to retrieve as a JavaScript Date object.
   * @returns A JavaScript Date object that represents the date and time when the specified file or folder was last modified. If the file or folder doesn't exist, the object contains information indicating that the file or folder was created at midnight GMT on December 31, 1969.
   * @usage FLfile.getModificationDateObj(fileOrFolderURI)
   * @example
   *
   * The following example displays (in human-readable form) the date a file was last modified, in the Output panel:
   *
   * ```javascript
   * // Make sure the specified file exists.
   * var file1Date = FLfile.getModificationDateObj("file:///c|/temp/file1.txt");
   * trace(file1Date);
   * ```
   * @see
   *
   * - {@link FLfile.getCreationDateObj | FLfile.getCreationDateObj()}
   * - {@link FLfile.getModificationDate | FLfile.getModificationDate()}
   */
  function getModificationDateObj(fileOrFolderURI: string): Date;

  /**
   * Method; Returns an integer that represents the size of the specified file, in bytes, or 0 if the file doesn't exist. If the return value is 0, you can use {@link FLfile.exists | FLfile.exists()} to determine whether the file is a zero-byte file or the file doesn't exist.
   * This method returns correct file size values only for files that are less than or equal to 2GB in size.
   * @since Macromedia Flash MX Basic/Professional 2004 (7.2)
   * @param fileURI Expressed as a file:/// URI, specifying the file whose size you want to retrieve.
   * @returns An integer that represents the size of the specified file, in bytes, or 0 if the file doesn't exist.
   * @usage FLfile.getSize(fileURI)
   * @example
   *
   * The following example stores the size of the mydata.txt file in the fileSize variable:
   *
   * ```javascript
   * var URL = "file:///c|/temp/mydata.txt";
   * var fileSize = FLfile.getSize(URL);
   * ```
   */
  function getSize(fileURI: string): number;

  /**
   * Method; Returns an array of strings representing the contents of the folder.
   * @since Macromedia Flash MX Basic/Professional 2004 (7.2)
   * @param folderURI Expressed as a file:/// URI, specifying the folder whose contents you want to retrieve. You can include a wildcard mask as part of *folderURI*. Valid wildcards are \* (matches one or more characters) and ? (matches a single character).
   * @param [filesOrDirectories] An optional string that specifies whether to return only filenames or only folder (directory) names. If omitted, both filenames and folder names are returned. Acceptable values are *"files"* and *"directories"*.
   * @returns An array of strings representing the contents of the folder. If the folder doesn't exist or if no files or folders match the specified criteria, returns an empty array.
   * @usage FLfile.listFolder(folderURI \[, filesOrDirectories\])
   */
  function listFolder(folderURI: string, filesOrDirectories?: "directories" | "files"): string[];

  /**
   * Method; Converts a filename in a platform-specific format to a file:/// URI.
   * @since Adobe Flash Professional CS4
   * @param fileName Expressed in a platform-specific format, specifying the filename you want to convert.
   * @returns A string expressed as a file:/// URI.
   * @usage FLfile.platformPathToURI(fileName)
   * @example
   *
   * The following example converts a filename from a platform-specific format to a file:/// URI, which is passed to `OutputPanel.save()`:
   *
   * ```javascript
   * var myFilename = "C:\\outputPanel.txt";
   * var myURI = FLfile.platformPathToURI(myFilename);
   * fl.outputPanel.save(myURI);
   * ```
   * @see {@link FLfile.uriToPlatformPath | FLfile.uriToPlatformPath()}
   */
  function platformPathToURI(fileName: string): string;

  /**
   * Method; Returns the contents of the specified file as a string, or null if the read fails.
   * @since Macromedia Flash MX Basic/Professional 2004 (7.2)
   * @param fileURI Expressed as a file:/// URI, specifying the text-based file (such as .js, .txt, or .jsfl) that you want to read.
   * @returns The contents of the specified file as a string, or null if the read fails.
   * @usage FLfile.read(fileURI)
   */
  function read(fileURI: string): string | null;

  /**
   * Method; Deletes the specified file or folder. If the folder contains files, those files will be deleted as well. Files with the R (read-only) attribute cannot be removed.
   * @since Macromedia Flash MX Basic/Professional 2004 (7.2)
   * @param fileOrFolderURI Expressed as a file:/// URI, specifying the file or folder you want to remove (delete).
   * @returns A boolean value of true if successful; false otherwise.
   * @usage FLfile.remove(fileOrFolderURI)
   * @see
   *
   * - {@link FLfile.createFolder | FLfile.createFolder()}
   * - {@link FLfile.getAttributes | FLfile.getAttributes()}
   */
  function remove(fileOrFolderURI: string): boolean;

  /**
   * Method; specifies system-level attributes for the specified file.
   * The following values are valid for *strAttrs*:
   *
   * - `N` — No specific attributes (not read-only, not hidden, and so on)
   *
   * - `A` — Ready for archiving (Windows only)
   *
   * - `R` — Read-only (on the Macintosh, read-only means "locked")
   *
   * - `W` — Writable (overrides R)
   *
   * - `H` — Hidden (Windows only)
   *
   * - `V` — Visible (overrides H, Windows only)
   *
   * If you include both `R` and `W` in *strAttrs*, the `R` is ignored and the file is set as writable. Similarly, if you pass `H` and `V`, the
   * `H` is ignored and the file is set as visible.
   * If you want to make sure the archive attribute is not set, use this command with the `N` parameter before setting attributes. That is, there is no direct counterpart to `A` that turns off the archive attribute.
   * @since Macromedia Flash MX Basic/Professional 2004 (7.2)
   * @param fileURI Expressed as a file:/// URI, specifying the file whose attributes you want to set.
   * @param strAttrs A string specifying values for the attribute(s) you want to set. For acceptable values for *strAttrs*, see the "Description" section.
   * @returns A boolean value of true if successful.
   * ***Note:** Results are unpredictable if the file or folder doesn't exist. You should use* *{@link FLfile.exists | FLfile.exists()} before using this method.*
   * @usage FLfile.setAttributes(fileURI, strAttrs)
   * @see {@link FLfile.getAttributes | FLfile.getAttributes()}
   */
  function setAttributes(fileURI: string, strAttrs: string): boolean;

  /**
   * Method; Converts a filename expressed as a file:/// URI to a platform-specific format.
   * @since Adobe Flash Professional CS4
   * @param fileURI Expressed as a file:/// URI, specifying the filename you want to convert.
   * @returns A string representing a platform-specific path.
   * @usage FLfile.uriToPlatformPath(fileURI)
   * @example
   *
   * The following example converts a file:/// URI to a platform-specific format:
   *
   * ```javascript
   * var dir = fl.configDirectory;
   * var URI = FLfile.platformPathToURI(dir);
   * fl.trace(URI == fl.configURI); // Displays "true"
   * ```
   * @see {@link FLfile.platformPathToURI | FLfile.platformPathToURI()}
   */
  function uriToPlatformPath(fileURI: string): string;

  /**
   * Method; Writes the specified string to the specified file (as UTF-8). If the specified file does not exist, it is created. However, the folder in which you are placing the file must exist before you use this method. To create folders, use {@link FLfile.createFolder | FLfile.createFolder()}.
   * @since Macromedia Flash MX Basic/Professional 2004 (7.2)
   * @param fileURI Expressed as a file:/// URI, specifying the file to which you want to write.
   * @param textToWrite Representing the text you want to place in the file.
   * @param [strAppendMode] An optional string with the value "append", which specifies that you want to append *textToWrite* to the existing file. If omitted, *fileURI* is overwritten with *textToWrite*.
   * @returns A boolean value of true if successful; *false* otherwise.
   * @usage FLfile.write(fileURI, textToWrite, [ , strAppendMode])
   * @example
   *
   * The following example attempts to write the string "xxx" to the file mydata.txt and displays an alert message if the write succeeded. It then attempts to append the string "aaa" to the file and displays a second alert message if the write succeeded. After executing this script, the file mydata.txt will contain only the text "xxxaaa".
   *
   * ```javascript
   * var URI = "file:///c|/temp/mydata.txt";
   * if (FLfile.write(URI, "xxx")) {
   *   alert("Wrote xxx to " + URI);
   * }
   * if (FLfile.write(URI, "aaa", "append")) {
   *   alert("Appended aaa to " + fileURI);
   * }
   * ```
   * @see
   *
   * - {@link FLfile.createFolder | FLfile.createFolder()}
   * - {@link FLfile.exists | FLfile.exists()}
   */
  function write(fileURI: string, textToWrite: string, strAppendMode?: "append"): boolean;
}

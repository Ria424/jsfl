/**
 * The TextureAtlasExporter object is a subclass of the {@link Item | Item object}.
 * @since Adobe Animate 2020
 */
interface TextureAtlasExporter extends Item {
  /**
   * Property; Algorithm to use to pack the texture atlas.
   *
   * Valid values are "basic", and "maxRects" (the default).
   * @since Adobe Animate 2020
   * @example
   *
   * ```javascript
   * var exporter = new TextureAtlasExporter;
   * exporter.algorithm = "maxRects";
   * ```
   */
  algorithm: "basic" | "maxRects";

  /**
   * Property; Whether the symbol frames can be rotated when packed into the texture atlas.
   * @since Adobe Animate 2020
   * @example
   *
   * ```javascript
   * var exporter = new TextureAtlasExporter;
   * exporter.allowRotate = true;
   * ```
   */
  allowRotate: boolean;

  /**
   * Read-only property; The name of the application that is generating the texture atlas.
   *
   * This property is provided for use by any future texture atlas generator plugins
   * that may be created for Adobe Animate 2020.
   * @since Adobe Animate 2020
   * @example
   *
   * ```javascript
   * var exporter = new TextureAtlasExporter;
   * alert(exporter.app); // "Adobe Animate"
   * ```
   */
  readonly app: string;

  /**
   * Property; Whether the `TextureAtlasExporter` should calculate the overall size of texture atlas on its own.
   * @since Adobe Animate 2020
   * @example
   *
   * ```javascript
   * var exporter = new TextureAtlasExporter;
   * exporter.autoSize = false;
   * ```
   */
  autoSize: boolean;

  /**
   * Property; An integer indicating the number of pixels of padding to add around each texture in the texture atlas.
   * @since Adobe Animate 2020
   * @example
   *
   * ```javascript
   * var exporter = new TextureAtlasExporter;
   * exporter.borderPadding = 5;
   * ```
   */
  borderPadding: number;

  /**
   * Read-only property; Whether the {@link algorithm | TextureAtlasExporter.algorithm} specified
   * can rotate textures when it is added to the texture atlas.
   * @since Adobe Animate 2020
   * @example
   *
   * ```javascript
   * var exporter = new TextureAtlasExporter;
   * alert(exporter.canRotate);
   * ```
   */
  readonly canRotate: boolean;

  /**
   * Property; The location where the texture atlas files needs to be exported.
   * @since Adobe Animate 2020
   * @example
   *
   * ```javascript
   * var exporter = new TextureAtlasExporter;
   * exporter.filePath  = "file:///Downloads/TextureAtlasExporter";
   * ```
   */
  filePath: string;

  /**
   * Property; Whether skewed assets needs to be flattened to the texture atlas.
   * @since Adobe Animate 2020
   * @example
   *
   * ```javascript
   * var exporter = new TextureAtlasExporter;
   * exporter.flattenSkewObject = true;
   * ```
   */
  flattenSkewObject: boolean;

  /**
   * Property; The format of the texture atlas bitmaps
   * 32 bit and 8 bit represented as "RGB8888"  and "RGB8" respectively.
   * @since Adobe Animate 2020
   * @example
   *
   * ```javascript
   * var exporter = new TextureAtlasExporter;
   * exporter.imageFormat = "RGB8";
   * ```
   */
  imageFormat: "RGB8" | "RGB8888";

  /**
   * Property; Whether texture atlas bitmaps needs to be optimized by removing extra spaces.
   * @since Adobe Animate 2020
   * @example
   *
   * ```javascript
   * var exporter = new TextureAtlasExporter;
   * exporter.optimizeBitmap = true;
   * ```
   */
  optimizeBitmap: boolean;

  /**
   * Property; Whether `animation.json` needs to be optimized by removing indentation,
   * decomposed matrix and use shortened names.
   * @since Adobe Animate 2020
   * @example
   *
   * ```javascript
   * var exporter = new TextureAtlasExporter;
   * exporter.optimizeJson = true;
   * ```
   */
  optimizeJson: boolean;

  /**
   * Read-only property; Whether assets remain after packaging in texture atlas.
   * @since Adobe Animate 2020
   * @example
   *
   * ```javascript
   * var exporter = new TextureAtlasExporter;
   * alert(exporter.overflowed);
   * ```
   */
  readonly overflowed: boolean;

  /**
   * Property; Floating value which indicates in which resolution the textures needs to be exported.
   * @since Adobe Animate 2020
   * @example
   *
   * ```javascript
   * var exporter = new TextureAtlasExporter;
   * exporter.resolution = 1.5;
   * ```
   */
  resolution: number;

  /**
   * Property; An integer value indicating how many pixels of padding should be added to each exported symbol frame
   * when adding it to the texture atlas.
   * @since Adobe Animate 2020
   * @example
   *
   * ```javascript
   * var exporter = new TextureAtlasExporter;
   * exporter.shapePadding = 1.5;
   * ```
   */
  shapePadding: number;

  /**
   * Property; An integer value specifying the height of the texture atlas.
   * This value is read-only if {@link TextureAtlasExporter.autoSize} is set to `true`.
   * @since Adobe Animate 2020
   * @example
   *
   * ```javascript
   * var exporter = new TextureAtlasExporter;
   * exporter.sheetHeight = 512;
   * ```
   */
  sheetHeight: number;

  /**
   * Property; An integer value specifying the width of the texture atlas.
   * This value is read-only if {@link TextureAtlasExporter.autoSize} is set to `true`.
   * @since Adobe Animate 2020
   * @example
   *
   * ```javascript
   * var exporter = new TextureAtlasExporter;
   * exporter.sheetwidth = 512;
   * ```
   */
  sheetWidth: number;

  /**
   * Read-only property; The version number of the Animate application.
   * This property is provided for use by texture atlas plugins.
   * @since Adobe Animate 2020
   * @example
   *
   * ``` javascript
   * var exporter = new TextureAtlasExporter;
   * alert(exporter.version); // "20.0.1.19255"
   * ````
   */
  readonly version: string;
}

interface TextureAtlasExporterConstructor {
  new(): TextureAtlasExporter;
}

declare var TextureAtlasExporter: TextureAtlasExporterConstructor;

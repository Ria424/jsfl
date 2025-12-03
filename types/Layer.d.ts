/**
 * @todo Is it "hardLight" or "hardlight"?
 */
type BlendMode = "normal"
  | "layer"
  | "darken"
  | "multiply"
  | "lighten"
  | "screen"
  | "overlay"
  | "hardLight"
  | "add"
  | "subtract"
  | "difference"
  | "invert"
  | "alpha"
  | "erase";

/**
 * The Layer object represents a layer in the timeline.
 * The {@link Timeline.layers} property contains an array of Layer objects, which can be accessed by `fl.getDocumentDOM().getTimeline().layers`.
 * @since Macromedia Flash MX Basic/Professional 2004
 */
interface Layer {
  /**
   * Method; A string value that specifies the blending mode applied at the particular frame.
   * @since Adobe Animate 2020
   * @param frameIndex Absolute zero-based frame index.
   * @returns A string value that specifies the blending mode applied at the particular frame.
   * @example
   *
   * The following example displays the name of the blending mode applied at the first frame of the first layer in the Output panel:
   *
   * ```javascript
   * an.trace(an.getDocumentDOM().getTimeline().layers[0].getBlendModeAtFrame(0));
   * ```
   * @see {@link Layer.setBlendModeAtFrame | Layer.setBlendModeAtFrame()}
   */
  getBlendModeAtFrame(frameIndex: number): BlendMode;

  /**
   * Returns ColorTransform object.
   *
   * Based on the mode, the paramters will be updated here.
   * For example, if tint is present, the value corresponding to tint only will be present along with the color matrix values.
   * @since Adobe Animate 2020
   * @param frameIndex Absolute zero-based frame index.
   * @returns ColorTransform object.
   *
   * If there's no ColorTransform in frame, this default object will be returned.
   *
   * ```javascript
   * {
   *     mode: "Advanced";
   *     colorAlphaAmount: 0;
   *     colorAlphaPercent: 100;
   *     colorRedAmount: 0;
   *     colorRedPercent: 100;
   *     colorGreenAmount: 0;
   *     colorGreenPercent: 100;
   *     colorBlueAmount: 0;
   *     colorBluePercent: 100;
   * }
   * ```
   * @example
   *
   * The following example gets the color transform at the fifth frame of first layer:
   *
   * ```javascript
   * var cxform = an.getDocumentDOM().getTimeline().layers[0].getColorTransformAtFrame(4);
   * ```
   * @see {@link Layer.setColorTransformAtFrame | Layer.setColorTransformAtFrame()}
   */
  getColorTransformAtFrame(frameIndex: number): FrameAdvancedColorTransform | FrameBrightnessColorTransform | FrameTintColorTransform | FrameAlphaColorTransform;

  /**
   * Method; An array that contains a list of filters applied to the frame at frameIndex.
   * @since Adobe Animate 2020
   * @param frameIndex Absolute zero-based frame index.
   * @returns An array that contains a list of filters applied to the frame at frameIndex
   * @example
   *
   * The following example gets the filters at the first frame of the first layer:
   *
   * ```javascript
   * var filters = an.getDocumentDOM().getTimeline().layers[0].getFiltersAtFrame(0);
   * ```
   */
  getFiltersAtFrame(frameIndex: number): Filter[];

  /**
   * Method; It will return the rig matrix of the particular frame.
   * @since Adobe Animate 2020
   * @param frameIndex An integer that specifies absolute frame index.
   * @returns Matrix object
   * @example
   *
   * The following example gets the rig matrix from the first frame of the ninth layer:
   *
   * ```javascript
   * var matrix = an.getDocumentDOM().getTimeline().layers[8].getRigMatrixAtFrame(0);
   * ```
   */
  getRigMatrixAtFrame(frameIndex: number): Matrix;

  /**
   * Method; It will return the layer parent of the given frame.
   * @since Adobe Animate 2020
   * @param frameIndex An integer that specifies absolute frame index.
   * @returns Layer object
   * @example
   *
   * The following example gets the layer parent from the first frame of the ninth layer:
   *
   * ```javascript
   * var myparent = an.getDocumentDOM().getTimeline().layers[8].getRigParentAtFrame(0);
   * ```
   */
  getRigParentAtFrame(frameIndex: number): Layer;

  /**
   * Method; Gets the Z depth at the specified frame number.
   * @since Adobe Animate CC 2019
   * @param frameIndex Absolute zero-based frame index.
   * @returns Integer value that specifies the Z depth value of the frame.
   * @example
   *
   * The following example gets the zdepth value at first frame of the first layer:
   *
   * ```javascript
   * fl.getDocumentDOM().getTimeline().layers[0].getZDepthAtFrame(0);
   * ```
   */
  getZDepthAtFrame(frameIndex: number): number;

  /**
   * Method; Sets the blending mode at the particular frame.
   * @since Adobe Animate 2020
   * @param frameIndex Absolute zero-based frame index.
   * @param blendMode The blending mode to apply. This value is case-insensitive.
   * @returns Nothing.
   * @example
   *
   * The following example sets the blending mode of the frame number 5.
   *
   * ```javascript
   * an.getDocumentDOM().getTimeline().layers[0].setBlendModeAtFrame(4, "Subtract");
   * ```
   * @see {@link Layer.getBlendModeAtFrame | Layer.getBlendModeAtFrame()}
   */
  setBlendModeAtFrame(frameIndex: number, blendMode: BlendMode): void;

  /**
   * Method; Sets the color transform at the frame.
   * @since Adobe Animate 2020
   * @param frameIndex Absolute zero-based frame index.
   * @param colorTransform The {@link ColorTransform} to be set.
   * @returns Nothing.
   * @example
   *
   * The following example copies the color transform of the first frame and sets it to the tenth frame:
   *
   * ```javascript
   * var layer = an.getDocumentDOM().getTimeline().layers[0];
   * var cxform = layer.getColorTransformAtFrame(0);
   * layer.setColorTransformAtFrame(9, cxform);
   * ```
   * @see {@link Layer.getColorTransformAtFrame | Layer.getColorTransformAtFrame()}
   */
  setColorTransformAtFrame(frameIndex: number, colorTransform: FrameAdvancedColorTransform | FrameBrightnessColorTransform | FrameTintColorTransform | FrameAlphaColorTransform): void;

  /**
   * Method; Apply filters at a particular frame.
   * @since Adobe Animate 2020
   * @param frameIndex Absolute zero-based frame index.
   * @param filterArray The array of filters to be set.
   * @returns Nothing.
   * @example
   *
   * The following example copies the filter applied at the first frame and sets it to the tenth frame:
   *
   * ```javascript
   * var layer = an.getDocumentDOM().getTimeline().layers[0];
   * var filters = layer.getFiltersAtFrame(0);
   * layer.setFiltersAtFrame(9, filters);
   * ```
   */
  setFiltersAtFrame(frameIndex: number, filterArray: Filter[]): void;

  /**
   * Method; It will set the layer parent of the particular frame.
   * @since Adobe Animate 2020
   * @param frameIndex An integer that specifies absolute frame index.
   * @param layer The layer object to be set as parent.
   * @returns Nothing.
   * @example
   *
   * The following example gets the layer parent of the first frame and sets the same to the tenth frame of the first layer:
   *
   * ```javascript
   * var myParent = an.getDocumentDOM().getTimeline().layers[0].getRigParentAtFrame(0);
   * an.getDocumentDOM().getTimeline().layers[0].setRigParentAtFrame(9, myParent);
   * ```
   */
  setRigParentAtFrame(frameIndex: number, layer: Layer): void;

  /**
   * Method; Sets the Z depth at the specified frame number.
   * @since Adobe Animate CC 2019
   * @param frameIndex Integer that specifies the frame index starting from 0.
   * @param zDepth Integer that specifies the Z depth value ranges between -5000 to 10000.
   * @returns Nothing.
   * @example
   *
   * The following example sets the zdepth value at first frame to 100 of the first layer:
   *
   * ```javascript
   * fl.getDocumentDOM().getTimeline().layers[0].setZDepthAtFrame(0, 100);
   * ```
   */
  setZDepthAtFrame(frameIndex: number, zDepth: number): void;

  /**
   * Property; The color assigned to outline the layer, in one of the following formats:
   *
   * - A string in the format "#RRGGBB" or "#RRGGBBAA"
   * - A hexadecimal number in the format 0xRRGGBB
   * - An integer that represents the decimal equivalent of a hexadecimal number
   *
   * This property is equivalent to the Outline color setting in the Layer Properties dialog box.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example stores the value of the first layer in the colorValue variable:
   *
   * ```javascript
   * var colorValue = fl.getDocumentDOM().getTimeline().layers[0].color;
   * ```
   *
   * The following example shows three ways to set the color of the first layer to red:
   *
   * ```javascript
   * fl.getDocumentDOM().getTimeline().layers[0].color = 16711680;
   * fl.getDocumentDOM().getTimeline().layers[0].color = "#ff0000";
   * fl.getDocumentDOM().getTimeline().layers[0].color = 0xff0000;
   * ```
   */
  color: number | string;

  /**
   * Read-only property; Specifies the number of frames in the layer.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example stores the number of frames in the first layer in the fcNum variable:
   *
   * ```javascript
   * var fcNum = fl.getDocumentDOM().getTimeline().layers[0].frameCount;
   * ```
   */
  readonly frameCount: number;

  /**
   * Read-only property; An array of {@link Frame | Frame object}s.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the variable frameArray to the array of Frame objects for the frames in the current document:
   *
   * ```javascript
   * var frameArray = fl.getDocumentDOM().getTimeline().layers[0].frames;
   * ```
   *
   * To determine if a frame is a keyframe, check whether the {@link Frame.startFrame} property
   * matches the array index, as shown in the following example:
   *
   * ```javascript
   * var frameArray = fl.getDocumentDOM().getTimeline().layers[0].frames;
   * var n = frameArray.length;
   * for (var i = 0; i < n; i++) {
   *   if (i == frameArray[i].startFrame) {
   *     alert("Keyframe at: " + i);
   *   }
   * }
   * ```
   */
  readonly frames: Frame[];

  /**
   * Property; Specifies the percentage layer height; equivalent to the Layer height value in the Layer Properties dialog box.
   * Acceptable values represent percentages of the default height: 100, 200, or 300.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example stores the percentage value of the first layer's height setting:
   *
   * ```javascript
   * var layerHeight = fl.getDocumentDOM().getTimeline().layers[0].height;
   * ```
   *
   * The following example sets the height of the first layer to 300 percent:
   *
   * ```javascript
   * fl.getDocumentDOM().getTimeline().layers[0].height = 300;
   * ```
   */
  height: number;

  /**
   * Property; A string that specifies the current use of the layer; equivalent to the Type setting in the Layer Properties dialog box.
   * Acceptable values are "normal", "guide", "guided", "mask", "masked", and "folder".
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the first layer in the timeline to type folder:
   *
   * ```javascript
   * fl.getDocumentDOM().getTimeline().layers[0].layerType = "folder";
   * ```
   */
  layerType: "normal" | "guide" | "guided" | "mask" | "masked" | "folder";

  /**
   * Property; Specifies the locked status of the layer.
   * If set to true, the layer is locked.
   * The default value is false.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example stores the Boolean value for the status of the first layer in the lockStatus variable:
   *
   * ```javascript
   * var lockStatus = fl.getDocumentDOM().getTimeline().layers[0].locked;
   * ```
   *
   * The following example sets the status of the first layer to unlocked:
   *
   * ```javascript
   * fl.getDocumentDOM().getTimeline().layers[0].locked = false;
   * ```
   */
  locked: boolean;

  /**
   * Property; Specifies the name of the layer.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the name of the first layer in the current document to foreground:
   *
   * ```javascript
   * fl.getDocumentDOM().getTimeline().layers[0].name = "foreground";
   * ```
   */
  name: string;

  /**
   * Property; Specifies the status of outlines for all objects in the layer.
   * If set to true, all objects in the layer appear only with outlines.
   * If false, objects appear as they were created.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example makes all objects on the first layer appear only with outlines:
   *
   * ```javascript
   * fl.getDocumentDOM().getTimeline().layers[0].outline = true;
   * ```
   */
  outline: boolean;

  /**
   * Property; Represents the layer's containing folder, guiding, or masking layer.
   * The parent layer must be a folder, guide, or mask layer that precedes the layer, or the **`parentLayer`** of the preceding or following layer.
   * Setting the layer's *parentLayer* does not move the layer's position in the list; trying to set a layer's parentLayer to a layer that would require moving it has no effect.
   * Uses `null` for a top-level layer.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example uses two layers at the same level on the same timeline.
   * The first layer (layers\[0\]) is converted into a folder and then set as the parent folder of the second layer (layers\[1\]).
   * This action moves the second layer inside the first layer.
   *
   * ```javascript
   * var parLayer = fl.getDocumentDOM().getTimeline().layers[0];
   * parLayer.layerType = "folder";
   * fl.getDocumentDOM().getTimeline().layers[1].parentLayer = parLayer;
   * ```
   */
  parentLayer: Layer | null;

  /**
   * Property; Specifies whether the layer's objects on the Stage are shown or hidden.
   * If set to true, all objects in the layer are visible; if false, they are hidden.
   * The default value is true.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example makes all objects in the first layer invisible:
   *
   * ```javascript
   * fl.getDocumentDOM().getTimeline().layers[0].visible = false;
   * ```
   */
  visible: boolean;
}

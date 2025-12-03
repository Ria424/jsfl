/**
 * The Stroke object contains all the settings for a stroke,
 * including the custom settings. This object represents the information contained in the Property inspector.
 *
 * Using the Stroke object together with the {@link Document.setCustomStroke | Document.setCustomStroke()} method,
 * you can change the stroke settings for the Tools panel, the Property inspector, and the current selection.
 *
 * You can also get the stroke settings of the Tools panel and Property inspector, or of the current selection,
 * by using the {@link Document.getCustomStroke | Document.getCustomStroke()} method.
 *
 * This object always has the following four properties: style, thickness, color, and breakAtCorners.
 * (In Flash CS3, the breakAtCorners property was deprecated in favor of {@link Stroke.joinType}.)
 * Other properties can be set, depending on the value of the {@link Stroke.style} property.
 * @since Macromedia Flash MX Basic/Professional 2004
 */
interface Stroke {
  /**
   * Property; a boolean value.
   * This property is the same as the Sharp Corners setting in the custom Stroke Style dialog box.
   * @since Macromedia Flash MX Basic/Professional 2004 Flash MX 2004.
   *
   * Deprecated in Flash CS3 in favor of {@link Stroke.joinType}.
   * @deprecated Adobe Flash Professional CS3
   * @example
   *
   * The following example sets the breakAtCorners property to true:
   *
   * ```javascript
   * var myStroke = fl.getDocumentDOM().getCustomStroke();
   * myStroke.breakAtCorners = true;
   * fl.getDocumentDOM().setCustomStroke(myStroke);
   * ```
   */
  breakAtCorners: boolean;

  /**
   * Property; a string that specifies the type of cap for the stroke.
   *
   * Acceptable values are "none", "round", and "square".
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example sets the stroke cap type to round:
   *
   * ```javascript
   * var myStroke = fl.getDocumentDOM().getCustomStroke();
   * myStroke.capType = "round";
   * fl.getDocumentDOM().setCustomStroke(myStroke);
   * ```
   */
  capType: "none" | "round" | "square";

  /**
   * Property; the color of the stroke, in one of the following formats:
   *
   * - A string in the format "#RRGGBB" or "#RRGGBBAA"
   * - A hexadecimal number in the format 0xRRGGBB
   * - An integer that represents the decimal equivalent of a hexadecimal number
   * @since Macromedia Flash MX Basic/Professional 2004 Flash MX 2004.
   *
   * In Flash 8 and later, this property is deprecated in favor of {@link Stroke.shapeFill}.color.
   * @deprecated Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example sets the stroke color:
   *
   * ```javascript
   * var myStroke = fl.getDocumentDOM().getCustomStroke();
   * myStroke.color = "#000000";
   * fl.getDocumentDOM().setCustomStroke(myStroke);
   * ```
   * @see {@link Stroke.shapeFill}
   */
  color: number;

  /**
   * Property; a string that specifies the type of hatching for the stroke.
   *
   * This property can be set only if the {@link Stroke.style} property is set to "hatched".
   *
   * Acceptable values are "straight", "slight curve", "medium curve", and "very curved".
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the `curve` property, as well as others, for a stroke having the hatched style:
   *
   * ```javascript
   * var myStroke = fl.getDocumentDOM().getCustomStroke();
   * myStroke.style = "hatched";
   * myStroke.curve = "straight";
   * myStroke.space = "close";
   * myStroke.jiggle = "wild";
   * myStroke.rotate = "free";
   * myStroke.length = "slight";
   * myStroke.hatchThickness = "thin";
   * fl.getDocumentDOM().setCustomStroke(myStroke);
   * ```
   */
  curve: "straight" | "slight curve" | "medium curve" | "very curved";

  /**
   * Property; an integer that specifies the lengths of the solid parts of a dashed line.
   *
   * This property is available only if the {@link Stroke.style} property is set to dashed.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the `dash1` and `dash2` properties for a stroke style of dashed:
   *
   * ```javascript
   * var myStroke = fl.getDocumentDOM().getCustomStroke();
   * myStroke.style = "dashed";
   * myStroke.dash1 = 1;
   * myStroke.dash2 = 2;
   * fl.getDocumentDOM().setCustomStroke(myStroke);
   * ```
   */
  dash1: number;

  /**
   * Property; an integer that specifies the lengths of the blank parts of a dashed line.
   *
   * This property is available only if the {@link Stroke.style} property is set to dashed.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @see {@link Stroke.dash1}
   */
  dash2: number;

  /**
   * Property; a string that specifies the density of a stippled line.
   *
   * This property is available only if the {@link Stroke.style} property is set to stipple.
   *
   * Acceptable values are "very dense", "dense", "sparse", and "very sparse".
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the `density` property to "sparse" for the stroke style of stipple:
   *
   * ```javascript
   * var myStroke = fl.getDocumentDOM().getCustomStroke();
   * myStroke.style = "stipple";
   * myStroke.dotSpace = 3;
   * myStroke.variation = "random sizes";
   * myStroke.density = "sparse";
   * fl.getDocumentDOM().setCustomStroke(myStroke);
   * ```
   */
  density: "very dense" | "dense" | "sparse" | "very sparse";

  /**
   * Property; A string that specifies the dot size of a stippled line.
   *
   * This property is available only if the {@link Stroke.style | Stroke.style} property is set to stipple.
   *
   * Acceptable values are "tiny", "small", "medium", and "large".
   *
   * @example
   *
   * The following example sets the `dotSize` property to "tiny" for the stroke style of stipple:
   *
   * ```javascript
   * var myStroke = fl.getDocumentDOM().getCustomStroke();
   * myStroke.style = "stipple";
   * myStroke.dotSpace= 3;
   * myStroke.dotsize = "tiny";
   * myStroke.variation = "random sizes";
   * myStroke.density = "sparse";
   * fl.getDocumentDOM().setCustomStroke(myStroke);
   * ```
   * @since Macromedia Flash MX Basic/Professional 2004
   */
  dotSize: "tiny" | "small" | "medium" | "large";

  /**
   * Property; an integer that specifies the spacing between dots in a dotted line.
   *
   * This property is available only if the {@link Stroke.style} property is set to dotted.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the `dotSpace` property to 3 for a stroke style of dotted:
   *
   * ```javascript
   * var myStroke = fl.getDocumentDOM().getCustomStroke();
   * myStroke.style = "dotted";
   * myStroke.dotSpace = 3;
   * fl.getDocumentDOM().setCustomStroke(myStroke);
   * ```
   */
  dotSpace: number;

  /**
   * Property; a string that specifies the thickness of a hatch line.
   *
   * This property is available only if the {@link Stroke.style} property is set to hatched.
   *
   * Acceptable values are "hairline", "thin", "medium", and "thick".
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the `hatchThickness` property to "thin" for a stroke style of hatched:
   *
   * ```javascript
   * var myStroke = fl.getDocumentDOM().getCustomStroke();
   * myStroke.style = "hatched";
   * myStroke.curve = "straight";
   * myStroke.space = "close";
   * myStroke.jiggle = "wild";
   * myStroke.rotate = "free";
   * myStroke.length = "slight";
   * myStroke.hatchThickness = "thin";
   * fl.getDocumentDOM().setCustomStroke(myStroke);
   * ```
   */
  hatchThickness: "hairline" | "thin" | "medium" | "thick";

  /**
   * Property; a string that specifies the jiggle property of a hatched line.
   *
   * This property is available only if the {@link Stroke.style} property is set to hatched.
   *
   * Acceptable values are "none", "bounce", "loose", and "wild".
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the `jiggle` property to "wild" for a stroke style of hatched:
   *
   * ```javascript
   * var myStroke = fl.getDocumentDOM().getCustomStroke();
   * myStroke.style = "hatched";
   * myStroke.curve = "straight";
   * myStroke.space = "close";
   * myStroke.jiggle = "wild";
   * myStroke.rotate = "free";
   * myStroke.length = "slight";
   * myStroke.hatchThickness = "thin";
   * fl.getDocumentDOM().setCustomStroke(myStroke);
   * ```
   */
  jiggle: "none" | "bounce" | "loose" | "wild";

  /**
   * Property; a string that specifies the type of join for the stroke.
   *
   * Acceptable values are "miter", "round", and "bevel".
   * @since Macromedia Flash Basic/Professional 8
   * @see {@link Stroke.capType}
   */
  joinType: "miter" | "round" | "bevel";

  /**
   * Property; A string that specifies the length of a hatch line.
   *
   * This property is available only if the {@link Stroke.style} property is set to hatched.
   *
   * Acceptable values are "equal", "slight variation", "medium variation", and "random".
   * (The value "random" actually maps to "medium variation".)
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the `length` property to slight for a stroke style of hatched:
   *
   * ```javascript
   * var myStroke = fl.getDocumentDOM().getCustomStroke();
   * myStroke.style = "hatched";
   * myStroke.curve = "straight";
   * myStroke.space = "close";
   * myStroke.jiggle = "wild";
   * myStroke.rotate = "free";
   * myStroke.length = "slight variation";
   * myStroke.hatchThickness = "thin";
   * fl.getDocumentDOM().setCustomStroke(myStroke);
   * ```
   */
  length: "equal" | "slight variation" | "medium variation" | "random";

  /**
   * Property; A float value that specifies the angle above which the tip of the miter will be truncated by a segment.
   *
   * That means the miter is truncated only if the miter angle is greater than the value of `miterLimit`.
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example changes the miter limit of the stroke setting to 3.
   * If the miter angle is greater than 3, the miter is truncated.
   *
   * ```javascript
   * var myStroke = fl.getDocumentDOM().getCustomStroke();
   * myStroke.miterLimit = 3;
   * var myStroke = fl.getDocumentDOM().setCustomStroke();
   * ```
   */
  miterLimit: number;

  /**
   * Property; a string that specifies the pattern of a ragged line.
   *
   * This property is available only if the {@link Stroke.style} property is set to ragged.
   *
   * Acceptable values are "solid", "simple", "random", "dotted", "random dotted", "triple dotted", and "random triple dotted".
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the pattern property to random for a stroke style of ragged:
   *
   * ```javascript
   * var myStroke = fl.getDocumentDOM().getCustomStroke();
   * myStroke.style = "ragged";
   * myStroke.pattern = "random";
   * fl.getDocumentDOM().setCustomStroke(myStroke);
   * ```
   */
  pattern: "solid" | "simple" | "random" | "dotted" | "random dotted" | "triple dotted" | "random triple dotted";

  /**
   * Property; a string that specifies the rotation of a hatch line.
   *
   * This property is available only if the {@link Stroke.style} property is set to hatched.
   *
   * Acceptable values are "none", "slight", "medium", and "free".
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the rotate property to free for a style stroke of hatched:
   *
   * ```javascript
   * var myStroke = fl.getDocumentDOM().getCustomStroke();
   * myStroke.style = "hatched";
   * myStroke.curve = "straight";
   * myStroke.space = "close";
   * myStroke.jiggle = "wild";
   * myStroke.rotate = "free";
   * myStroke.length = "slight";
   * myStroke.hatchThickness = "thin";
   * ```
   */
  rotate: "none" | "slight" | "medium" | "free";

  /**
   * Property; a string that specifies the type of scale to be applied to the stroke.
   *
   * Acceptable values are "normal", "horizontal", "vertical", and "none".
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example sets the scale type of the stroke to horizontal:
   *
   * ```javascript
   * var myStroke = fl.getDocumentDOM().getCustomStroke();
   * myStroke.scaleType = "horizontal";
   * fl.getDocumentDOM().setCustomStroke(myStroke);
   * ```
   */
  scaleType: "normal" | "horizontal" | "vertical" | "none";

  /**
   * Property; A {@link Fill | Fill object} that represents the fill settings of the stroke.
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example specifies fill settings and then applies them to the stroke:
   *
   * ```javascript
   * var fill = fl.getDocumentDOM().getCustomFill();
   * fill.linearGradient = true;
   * fill.colorArray = [0x00ff00, 0xff0000, 0xfffff];
   * var stroke = fl.getDocumentDOM().getCustomStroke();
   * stroke.shapeFill = fill;
   * fl.getDocumentDOM().setCustomStroke(stroke);
   * ```
   */
  shapeFill: Fill;

  /**
   * Property; The spacing of a hatched line.
   *
   * This property is available only if the {@link Stroke.style} property is set to hatched.
   *
   * Acceptable values are "very close", "close", "distant", and "very distant".
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the space property to close for a stroke style of hatched:
   *
   * ```javascript
   * var myStroke = fl.getDocumentDOM().getCustomStroke();
   * myStroke.style = "hatched";
   * myStroke.curve = "straight";
   * myStroke.space = "close";
   * myStroke.jiggle = "wild";
   * myStroke.rotate = "free";
   * myStroke.length = "slight";
   * myStroke.hatchThickness = "thin";
   * fl.getDocumentDOM().setCustomStroke(myStroke);
   * ```
   */
  space: "very close" | "close" | "distant" | "very distant";

  /**
   * Property; a boolean value that specifies whether stroke hinting is set on the stroke.
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example enables stroke hinting for the stroke:
   *
   * ```javascript
   * var myStroke = fl.getDocumentDOM().getCustomStroke();
   * myStroke.strokeHinting = true;
   * fl.getDocumentDOM().setCustomStroke(myStroke);
   * ```
   */
  strokeHinting: boolean;

  /**
   * Property; A string that describes the stroke style.
   *
   * Acceptable values are "noStroke", "solid", "dashed", "dotted", "ragged", "stipple", and "hatched".
   *
   * Some of these values require additional properties of the Stroke object to be set,
   * as described in the following list:
   *
   * - If value is "solid" or "noStroke", there are no other properties.
   * - If value is "dashed", there are two additional properties: {@link dash1} and {@link dash2}.
   * - If value is "dotted", there is one additional property: {@link dotSpace}.
   * - If value is "ragged", there are three additional properties: {@link pattern}, {@link waveHeight}, and {@link waveLength}.
   * - If value is "stipple", there are three additional properties: {@link dotSize}, {@link variation}, and {@link density}.
   * - If value is "hatched", there are six additional properties: {@link hatchThickness}, {@link space}, {@link jiggle}, {@link rotate}, {@link curve}, and {@link length}.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the stroke style to ragged:
   *
   * ```javascript
   * var myStroke = fl.getDocumentDOM().getCustomStroke();
   * myStroke.style = "ragged";
   * fl.getDocumentDOM().setCustomStroke(myStroke);
   * ```
   */
  style: "noStroke" | "solid" | "dashed" | "dotted" | "ragged" | "stipple" | "hatched";

  /**
   * Property; an integer that specifies the stroke size.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the `thickness` property of the stroke to a value of 2:
   *
   * ```javascript
   * var myStroke = fl.getDocumentDOM().getCustomStroke();
   * myStroke.thickness = 2;
   * fl.getDocumentDOM().setCustomStroke(myStroke);
   * ```
   */
  thickness: number;

  /**
   * Property; a string that specifies the variation of a stippled line.
   *
   * This property is available only if the {@link Stroke.style} property is set to stipple.
   *
   * Acceptable values are "one size", "small variation", "varied sizes", and "random sizes".
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the `variation` property to random sizes for a stroke style of stipple:
   *
   * ```javascript
   * var myStroke = fl.getDocumentDOM().getCustomStroke();
   * myStroke.style = "stipple";
   * myStroke.dotSpace = 3;
   * myStroke.variation = "random sizes";
   * myStroke.density = "sparse";
   * fl.getDocumentDOM().setCustomStroke(myStroke);
   * ```
   */
  variation: "one size" | "small variation" | "varied sizes" | "random sizes";

  /**
   * Property; a string that specifies the wave height of a ragged line.
   *
   * This property is available only if the {@link Stroke.style} property is set to ragged.
   *
   * Acceptable values are "flat", "wavy", "very wavy", and "wild".
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the `waveHeight` property to flat for a stroke style of ragged:
   *
   * ```javascript
   * var myStroke = fl.getDocumentDOM().getCustomStroke();
   * myStroke.style = "ragged";
   * myStroke.pattern = "random";
   * myStroke.waveHeight = "flat";
   * myStroke.waveLength = "short";
   * fl.getDocumentDOM().setCustomStroke(myStroke);
   * ```
   */
  waveHeight: "flat" | "wavy" | "very wavy" | "wild";

  /**
   * Property; a string that specifies the wavelength of a ragged line.
   *
   * This property is available only if the {@link Stroke.style} property is set to ragged.
   *
   * Acceptable values are "very short", "short", "medium", and "long".
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the `waveLength` property to short for a stroke style of ragged:
   *
   * ```javascript
   * var myStroke = fl.getDocumentDOM().getCustomStroke();
   * myStroke.style = "ragged";
   * myStroke.pattern = "random";
   * myStroke.waveHeight = "flat";
   * myStroke.waveLength = "short";
   * fl.getDocumentDOM().setCustomStroke(myStroke);
   * ```
   */
  waveLength: "very short" | "short" | "medium" | "long";
}

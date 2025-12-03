type SoundEnvelope = { mark: number; leftChannel: number; rightChannel: number; }[];

/**
 * The Frame object represents frames in the layer.
 * @since Macromedia Flash MX Basic/Professional 2004
 */
interface Frame {
  /**
   * Method; Converts the selected motion object to a 2D motion object.
   * @since Adobe Flash Professional CS5
   *
   * @usage Frame.convertMotionObjectTo2D()
   * @example
   *
   * The following example converts the selected motion object to a 2D motion object:
   *
   * ```javascript
   * var doc = fl.getDocumentDOM();
   * var my_tl = doc.getTimeline();
   * getCurrentFrame = function () {
   *   var layer = my_tl.layers[my_tl.currentLayer];
   *   var frame = layer.frames[my_tl.currentFrame];
   *   return frame;
   * };
   * var theFrame = getCurrentFrame();
   * if (theFrame.isMotionObject() && the()) {
   *   theFrame.convertMotionObjectTo2D();
   * } else {
   *   fl.trace("It isn't motion or it's already a 2D motion");
   * }
   * ```
   */
  convertMotionObjectTo2D(): void;

  /**
   * Method; Converts the selected motion object to a 3D motion object.
   * @since Adobe Flash Professional CS5
   *
   * @usage Frame.convertMotionObjectTo3D()
   * @example
   *
   * The following example converts the selected motion object to a 3D motion object:
   *
   * ```javascript
   * var doc = fl.getDocumentDOM();
   * var my_tl = doc.getTimeline();
   * getCurrentFrame = function () {
   *   var layer = my_tl.layers[my_tl.currentLayer];
   *   var frame = layer.frames[my_tl.currentFrame];
   *   return frame;
   * };
   * var theFrame = getCurrentFrame();
   * if (theFrame.isMotionObject() && !theFrame.is3DMotionObject()) {
   *   theFrame.convertMotionObjectTo3D();
   * } else {
   *   fl.trace("It isn't motion or it's already a 3D motion");
   * }
   * ```
   */
  convertMotionObjectTo3D(): void;

  /**
   * Method; Converts the current frame to Frame-by-Frame Animation.
   * @since Adobe Animate CC 2016
   * @returns Returns true if the frame contains animation that can be converted to frame by frame animation. For example: return *true* for Motion Tween frame or Classic Tween frame; return *false* for other type of frame such as static.
   * @usage Frame.convertToFrameByFrameAnimation()
   * @example
   *
   * The following example converts the frame 0 to Frame-by-Frame Animation:
   *
   * ```javascript
   * var result = fl.getDocumentDOM().getTimeline().layers[0].frames[0].convertToFrameByFrameAnimation();
   * fl.trace(result);
   * ```
   */
  convertToFrameByFrameAnimation(): boolean;

  /**
   * Method; Returns an array of objects that represent the control points for the cubic Bézier curve that defines the ease curve.
   * @since Macromedia Flash Basic/Professional 8
   * @param [property] An optional string that specifies the property for which you want to return the custom ease value. Acceptable values are *"all", "position", "rotation", "scale", "color", and "filters"*. The default value is *"all"*.
   * @returns Returns an array of JavaScript objects, each of which has an *x* and *y* property.
   * @usage Frame.getCustomEase([property])
   * @example
   *
   * The following example returns the custom ease value of the position property for the first frame in the top layer:
   *
   * ```javascript
   * var theFrame = fl.getDocumentDOM().getTimeline().layers[0].frames[0];
   * var easeArray = theFrame.getCustomEase("position");
   * ```
   * @see
   *
   * - {@link Frame.hasCustomEase | Frame.hasCustomEase}
   * - {@link Frame.setCustomEase | Frame.setCustomEase()}
   * - {@link Frame.useSingleEaseCurve | Frame.useSingleEaseCurve}
   */
  getCustomEase(property?: "all" | "position" | "rotation" | "scale" | "color" | "filters"): Point[];

  /**
   * @since Adobe Flash Professional CS5
   * @returns Motion XML from the selected motion object.
   * @usage Frame.getMotionObjectXML()
   * @example
   *
   * The following example returns the motion XML from the selected motion object.
   *
   * ```javascript
   * var doc = fl.getDocumentDOM();
   * var my_tl = doc.getTimeline();
   * getCurrentFrame = function () {
   *   var layer = my_tl.layers[my_tl.currentLayer];
   *   var frame = layer.frames[my_tl.currentFrame];
   *   return frame;
   * };
   * var theFrame = getCurrentFrame();
   * if (theFrame.isMotionObject()) {
   *   fl.trace(theFrame.getMotionObjectXML());
   * } else {
   *   fl.trace("It is not motion.");
   * }
   * ```
   */
  getMotionObjectXML(): string;

  /**
   * Method; Gets the sound envelope data of any frame.
   * @since Adobe Flash Professional CC
   * @returns Returns SoundEnvelope object.
   * @usage Frame.getSoundEnvelope()
   * @example
   *
   * The following example illustrates the use of getSoundEnvelope:
   *
   * ```javascript
   * // Add a sound item to the first Frame
   *
   * // Get the sound Envelope
   * var soundEnv = fl.getDocumentDOM().getTimeline().layers[0].frames[0].getSoundEnvelope();
   *
   * // Assigning the sound 1 in the library to Frame 2
   * fl.getDocumentDOM().getTimeline().layers[0].frames[1].soundLibraryItem = fl.getDocumentDOM().library.items[1];
   *
   * // Set the Sound Envelope
   * fl.getDocumentDOM().getTimeline().layers[0].frames[1].setSoundEnvelope(soundEnv);
   * ```
   * @see {@link Frame.setSoundEnvelope | Frame.setSoundEnvelope()}
   */
  getSoundEnvelope(): { mark: number; leftChannel: number; rightChannel: number; }[];

  /**
   * Method; Gets the limits (start, end) for a custom Sound envelope that is applied to the frame sound.
   * @since Adobe Animate CC 2016
   * @returns Returns a structure that contain start and end fields.
   * @usage Frame.getSoundEnvelopeLmits()
   * @example
   *
   * The following example illustrates the use of getSoundEnvelopeLimits:
   *
   * ```javascript
   * var limits = fl.getDocumentDOM().getTimeline().layers[0].frames[0].getSoundEnvelopeLimits();
   * fl.trace(limits.start);
   * fl.trace(limits.end);
   * ```
   * @see {@link Frame.setSoundEnvelopeLimits | Frame.setSoundEnvelopeLimits()}
   */
  getSoundEnvelopeLimits(): { start: any; end: any; };

  /**
   * Method; Lets you know whether the current selection includes a motion path.
   * @since Adobe Flash Professional CS5
   * @returns whether the current selection includes a motion path.
   * @usage Frame.hasMotionPath()
   * @example
   *
   * The following example returns a trace statement informing you if the current selection has a motion path.
   *
   * ```javascript
   * var doc = fl.getDocumentDOM();
   * var my_tl = doc.getTimeline();
   * getCurrentFrame = function () {
   *   var layer = my_tl.layers[my_tl.currentLayer];
   *   var frame = layer.frames[my_tl.currentFrame];
   *   return frame;
   * };
   * var theFrame = getCurrentFrame();
   * if (theFrame.isMotionObject()) {
   *   if (theFrame.hasMotionPath()) {
   *     fl.trace("There is a motion path");
   *   } else {
   *     fl.trace("There is no motion path");
   *   }
   * }
   * ```
   */
  hasMotionPath(): boolean;

  /**
   * Method; A boolean value. Lets you know whether the current selection is a 3D motion object.
   * @since Adobe Flash Professional CS5
   * @returns whether the current selection is a 3D motion object.
   * @usage Frame.is3DMotionObject()
   * @example
   *
   * The following example returns a trace statement informing you that the current selection is or is not a 3D motion object.
   *
   * ```javascript
   * var doc = fl.getDocumentDOM();
   * var my_tl = doc.getTimeline();
   * getCurrentFrame = function () {
   *   var layer = my_tl.layers[my_tl.currentLayer];
   *   var frame = layer.frames[my_tl.currentFrame];
   *   return frame;
   * };
   * var theFrame = getCurrentFrame();
   * if (theFrame.isMotionObject() && theFrame.is3DMotionObject()) {
   *   fl.trace("This selection is 3D Motion");
   * } else {
   *   fl.trace("This selection is not 3D motion");
   * }
   * ```
   */
  is3DMotionObject(): boolean;

  /**
   * Method; Lets you know whether the frame contains any elements.
   * @since Adobe Animate CC 2016
   * @returns whether the frame contains any elements.
   * @usage Frame.isEmpty()
   * @example
   *
   * The following example illustrates use of this method.
   *
   * ```javascript
   * var frame = fl.getDocumentDOM().getTimeline().layers[0].frames[0];
   * if (frame.isEmpty) fl.trace("first frame is empty");
   * ```
   */
  isEmpty(): boolean;

  /**
   * Method; Lets you know whether the current selection is a motion object.
   * @since Adobe Flash Professional CS5
   * @returns whether the current selection is a motion object.
   * @usage Frame.isMotionObject()
   * @example
   *
   * The following example returns a trace statement informing you that the current selection is or is not a motion object.
   *
   * ```javascript
   * var my_tl = doc.getTimeline();
   * getCurrentFrame = function () {
   *   var layer = my_tl.layers[my_tl.currentLayer];
   *   var frame = layer.frames[my_tl.currentFrame];
   *   return frame;
   * };
   * var theFrame = getCurrentFrame();
   * if (theFrame.isMotionObject()) {
   *   fl.trace("This selection is motion.");
   * } else {
   *   fl.trace("This selection is not motion.");
   * }
   * ```
   */
  isMotionObject(): boolean;

  /**
   * Method; Selects or deselects the motion path of the current motion object.
   * @since Adobe Flash Professional CS5
   * @param selectValue Specifies whether to select (`true`) or deselect (`false`) the motion path of the current motion object.
   *
   * @usage Frame.selectMotionPath(selectValue)
   * @example
   *
   * The example selects or deselects the motion path of the current motion object.
   *
   * ```javascript
   * var doc = fl.getDocumentDOM();
   * var my_tl = doc.getTimeline();
   * getCurrentFrame = function () {
   *   var layer = my_tl.layers[my_tl.currentLayer];
   *   var frame = layer.frames[my_tl.currentFrame];
   *   return frame;
   * };
   * var theFrame = getCurrentFrame();
   * if (theFrame.isMotionObject()) {
   *   if (theFrame.hasMotionPath()) {
   *     theFrame.selectMotionPath(true);
   *   } else {
   *     fl.trace("There is no motion path");
   *   }
   * } else {
   *   fl.trace("It is no motion");
   * }
   * ```
   */
  selectMotionPath(selectValue: boolean): void;

  /**
   * Method; Specifies an array of control point and tangent endpoint coordinates that describe a cubic Bézier curve to be used as a custom ease curve. This array is constructed by the horizontal (ordinal: left to right) position of the control points and tangent endpoints.
   * @since Macromedia Flash Basic/Professional 8
   * @param property Specifies the property the ease curve should be used for. Acceptable values are *"all", "position", "rotation", "scale", "color"*, and *"filters"*.
   * @param easeCurve An array of objects that defines the ease curve. Each array element must be a JavaScript object with *x* and *y* properties.
   * @returns Nothing.
   * @usage Frame.setCustomEase(property, easeCurve)
   * @example
   *
   * The following example sets the ease curve for all properties of the first frame in the first layer to the Bézier curve specified by the easeCurve array:
   *
   * ```javascript
   * var theFrame = fl.getDocumentDOM().getTimeline().layers[0].frames[0];
   * var easeCurve = [
   *   { x: 0, y: 0 },
   *   { x: 0.3, y: 0.3 },
   *   { x: 0.7, y: 0.7 },
   *   { x: 1, y: 1 }
   * ];
   * theFrame.setCustomEase("all", easeCurve);
   * ```
   * @see
   *
   * - {@link Frame.getCustomEase | Frame.getCustomEase()}
   * - {@link Frame.hasCustomEase | Frame.hasCustomEase}
   * - {@link Frame.useSingleEaseCurve | Frame.useSingleEaseCurve}
   */
  setCustomEase(property: "all" | "position" | "rotation" | "scale" | "color" | "filters", easeCurve: Point[]): void;

  /**
   * Method; Sets the duration (the tween span length) of the currently selected motion object.
   * @since Adobe Flash Professional CS5
   * @param duration Specifies the number of frames for the tween span of the selected motion object.
   * @param [stretchExistingKeyframes] A boolean value that determines whether the tween span is stretched, or if frames are added, to the end of the last frame.
   *
   * @usage Frame.setMotionObjectDuration(duration [, stretchExistingKeyframes])
   * @example
   *
   * The following example specifies a duration of 11 frames for the selected motion object.
   *
   * ```javascript
   * var doc = fl.getDocumentDOM();
   * var my_tl = doc.getTimeline();
   * getCurrentFrame = function () {
   *   var layer = my_tl.layers[my_tl.currentLayer];
   *   var frame = layer.frames[my_tl.currentFrame];
   *   return frame;
   * };
   * var theFrame = getCurrentFrame();
   * if (theFrame.isMotionObject()) {
   *   theFrame.setMotionObjectDuration(11);
   * } else {
   *   fl.trace("It isn't motion");
   * }
   * ```
   */
  setMotionObjectDuration(duration: number, stretchExistingKeyframes?: boolean): void;

  /**
   * Method; Applies the specified motion XML to the selected motion object.
   * @since Adobe Flash Professional CS5
   * @param xmlstr Specifies the XML string.
   * @param endAtCurrentLocation Determines whether the tween starts or ends at the current position.
   *
   * @usage Frame.setMotionObjectXML(xmlstr [, endAtCurrentLocation])
   * @example
   *
   * This example specifies that the motion XML identified as myMotionXML be applied to the selected motion object.
   *
   * ```javascript
   * var doc = fl.getDocumentDOM();
   * var my_tl = doc.getTimeline();
   * getCurrentFrame = function () {
   *   var layer = my_tl.layers[my_tl.currentLayer];
   *   var frame = layer.frames[my_tl.currentFrame];
   *   return frame;
   * };
   * var theFrame = getCurrentFrame();
   * theFrame.setMotionObjectXML(myMotionXML.toString(), false);
   * ```
   */
  setMotionObjectXML(xmlstr: string, endAtCurrentLocation: boolean): void;

  /**
   * Method; Sets the sound envelope of any frame with sound file. The soundEnv object is an array and every element of array contains the following properties:
   *
   * - *mark*
   *
   * - *leftChannel*
   *
   * - *rightChannel*
   * @since Adobe Animate CC 2016
   * @param soundEnv A sound envelope.
   * @returns Nothing.
   * @usage Frame.setSoundEnvelope(soundEnv)
   * @example
   *
   * The following example illustrates the use of setSoundEnvelope:
   *
   * ```javascript
   * var doc = fl.getDocumentDOM();
   * var timeline = doc.getTimeline();
   * var layer = timeline.layers[0];
   * var frame = layer.frames[0];
   *
   * // Add a sound item to the first Frame
   *
   * // Get the sound Envelope
   * var soundEnv = fl.getDocumentDOM().getTimeline().layers[0].frames[0].getSoundEnvelope();
   *
   * // Assigning the sound 1 in the library to Frame 2
   * fl.getDocumentDOM().getTimeline().layers[0].frames[1].soundLibraryItem = fl.getDocumentDOM().library.items[1];
   *
   * // Set the Sound Envelope
   * fl.getDocumentDOM().getTimeline().layers[0].frames[1].setSoundEnvelope(soundEnv);
   * for (var i = 0; i < soundEnv.length; i++) {
   *   fl.trace(soundEnv[i].mark);
   *   fl.trace(soundEnv[i].leftChannel);
   *   fl.trace(soundEnv[i].rightChannel);
   * }
   * ```
   * @see {@link Frame.getSoundEnvelope | Frame.getSoundEnvelope()}
   */
  setSoundEnvelope(soundEnv: {
    mark: number;
    leftChannel: number;
    rightChannel: number;
  }[]): void;

  /**
   * Method; Sets the sound envelope limits of any frame with a sound file.
   * @since Adobe Animate CC 2016
   * @param limits A structure that contains start and end fields that signify the limits for a custom sound envelope.
   * @returns Nothing.
   * @usage Frame.setSoundEnvelopeLimits(limits)
   * @example
   *
   * The following example illustrates the use of setSoundEnvelopeLimits:
   *
   * ```javascript
   * var limits;
   * limits.start = 2000;
   * limits.end = 15000;
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].setSoundEnvelopeLimits(limits);
   * ```
   * @see {@link Frame.getSoundEnvelopeLimits | Frame.getSoundEnvelopeLimits()}
   */
  setSoundEnvelopeLimits(limits: { start: number; end: number; }): void;

  /**
   * Property; A string that represents ActionScript code. To insert a new line character, use "\n".
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example assigns stop() to first frame top layer action:
   *
   * ```javascript
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].actionScript = "stop();";
   * ```
   */
  actionScript: string;

  /**
   * Read-only property; The number of frames in a frame sequence.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example stores the number of frames in a frame sequence that starts at the first frame in the top layer in the frameSpan variable:
   *
   * ```javascript
   * var frameSpan = fl.getDocumentDOM().getTimeline().layers[0].frames[0].duration;
   * ```
   */
  readonly duration: number;

  /**
   * Read-only property; An array of {@link Element | Element object}s. The order of elements is the order in which they are stored in the FLA file. If there are multiple shapes on the Stage, and each is ungrouped, Flash treats them as one element. If each shape is grouped, so there are multiple groups on the Stage, Flash sees them as separate elements. In other words, Flash treats raw, ungrouped shapes as a single element, regardless of how many separate shapes are on the Stage. If a frame contains three raw, ungrouped shapes, for example, then elements.length in that frame returns a value of 1. To work around this issue, select each shape individually and group it .
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example stores an array of current elements in the top layer, first frame in the myElements variable:
   *
   * ```javascript
   * var myElements = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements;
   * ```
   */
  readonly elements: Element[];

  /**
   * Property; If true, the frame gets its ease information from the custom ease curve. If false, the frame gets its ease information from the ease value.
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example specifies that the first frame in the top layer should get its ease information from the ease value rather than the custom ease curve:
   *
   * ```javascript
   * var theFrame = fl.getDocumentDOM().getTimeline().layers[0].frames[0];
   * theFrame.hasCustomEase = false;
   * ```
   * @see
   *
   * - {@link Frame.getCustomEase | Frame.getCustomEase()}
   * - {@link Frame.setCustomEase | Frame.setCustomEase()}
   * - {@link Frame.useSingleEaseCurve | Frame.useSingleEaseCurve}
   */
  hasCustomEase: boolean;

  /**
   * Property; A string that specifies the type of Frame name. Acceptable values are "none", "name", "comment", and
   * "anchor". Setting a label to "none" clears the {@link Frame.name | Frame.name} property.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the name of the first frame in the top layer to "First Frame" and then sets its label to "comment":
   *
   * ```javascript
   * var frame = fl.getDocumentDOM().getTimeline().layers[0].frames[0];
   * frame.name = "First Frame";
   * frame.labelType = "comment";
   * ```
   */
  labelType: "none" | "name" | "comment" | "anchor";

  /**
   * Property; A boolean value that specifies whether the tweened element rotates the element as it moves along a path to maintain its angle with respect to each point on the path *(true)* or whether it does not rotate *(false)*.
   * If you want to specify a value for this property, you should set {@link Frame.motionTweenRotate | Frame.motionTweenRotate} to "none".
   * @since Macromedia Flash MX Basic/Professional 2004
   */
  motionTweenOrientToPath: boolean;

  /**
   * Property; A string that specifies how the tweened element rotates. Acceptable values are *"none", "auto", "clockwise"*, and *"counter-clockwise"*. A value of "auto" means the object will rotate in the direction requiring the least motion to match the rotation of the object in the following keyframe.
   * If you want to specify a value for {@link Frame.motionTweenOrientToPath | Frame.motionTweenOrientToPath}, set this property to "none".
   * @since Macromedia Flash MX Basic/Professional 2004
   * @see {@link Frame.motionTweenRotateTimes | Frame.motionTweenRotateTimes}
   */
  motionTweenRotate: "none" | "auto" | "clockwise" | "counter-clockwise";

  /**
   * Property; An integer that specifies the number of times the tweened element rotates between the starting keyframe and the next keyframe.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example rotates the element in this frame counter-clockwise three times by the time it reaches the next keyframe:
   *
   * ```javascript
   * var frame = fl.getDocumentDOM().getTimeline().layers[0].frames[0];
   * frame.motionTweenRotate = "counter-clockwise";
   * frame.motionTweenRotateTimes = 3;
   * ```
   */
  motionTweenRotateTimes: number;

  /**
   * Property; A boolean value that specifies whether the tweened element scales to the size of the object in the following keyframe, increasing its size with each frame in the tween *(true)*, or doesn't scale *(false)*.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example specifies that the tweened element should scale to the size of the object in the following keyframe, increasing its size with each frame in the tween.
   *
   * ```javascript
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].motionTweenScale = true;
   * ```
   */
  motionTweenScale: boolean;

  /**
   * Property; Specifies whether the tweened element automatically snaps to the nearest point on the motion guide layer associated with this frame's layer *(true)* or not *(false)*.
   * @since Macromedia Flash MX Basic/Professional 2004
   */
  motionTweenSnap: boolean;

  /**
   * Property; If set to true, synchronizes the animation of the tweened object with the main timeline.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example specifies that tweened object should be synchronized with the timeline:
   *
   * ```javascript
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].motionTweenSync = true;
   * ```
   */
  motionTweenSync: boolean;

  /**
   * Property; A string that specifies the name of the frame.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example sets the name of the first frame, top layer to "First Frame" and then stores the name value in the frameLabel variable:
   *
   * ```javascript
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].name = "First Frame";
   * var frameLabel = fl.getDocumentDOM().getTimeline().layers[0].frames[0].name;
   * ```
   */
  name: string;

  /**
   * Property; A string that specifies how a shape tween is blended between the shape in the keyframe at the start of the tween and the shape in the following keyframe. Acceptable values are *"distributive"* and *"angular"*.
   * @since Macromedia Flash MX Basic/Professional 2004
   */
  shapeTweenBlend: "distributive" | "angular";

  /**
   * Property; A string that specifies effects for a sound that is attached directly to a frame ({@link Frame.soundLibraryItem | Frame.soundLibraryItem}). Acceptable values are *"none", "left channel", "right channel", "fade left to right", "fade right to left", "fade in", "fade out",* and *"custom"*.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example specifies that the sound attached to the first frame should fade in:
   *
   * ```javascript
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].soundEffect = "fade in";
   * ```
   */
  soundEffect: "none" | "left channel" | "right channel" | "fade left to right" | "fade right to left" | "fade in" | "fade out" | "custom";

  /**
   * Property; A library item (see {@link SoundItem | SoundItem object}) used to create a sound. The sound is attached directly to the frame.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example assigns the first item in the library to the soundLibraryItem property of the first frame:
   *
   * ```javascript
   * // The first item in the library must be a sound object.
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].soundLibraryItem = fl.getDocumentDOM().library.items[0];
   * ```
   */
  soundLibraryItem: SoundItem;

  /**
   * Property; The number of times a sound that is attached directly to a frame ({@link Frame.soundLibraryItem | Frame.soundLibraryItem}) plays. If you want to specify a value for this property, set {@link Frame.soundLoopMode | Frame.soundLoopMode} to *"repeat"*.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @see {@link Frame.soundLoopMode | Frame.soundLoopMode}.
   */
  soundLoop: number;

  /**
   * Property; A string that specifies whether a sound that is attached directly to a frame ({@link Frame.soundLibraryItem | Frame.soundLibraryItem}) should play a specific number of times or loop indefinitely. Acceptable values are *"repeat"* and *"loop"*. To specify the number of times the sound should play, set a value for {@link Frame.soundLoop | Frame.soundLoop}.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example specifies that a sound should play two times:
   *
   * ```javascript
   * var frame = fl.getDocumentDOM().getTimeline().layers[0].frames[0];
   * frame.soundLoopMode = "repeat";
   * frame.soundLoop = 2;
   * ```
   */
  soundLoopMode: "repeat" | "loop";

  /**
   * Property; The name of a sound that is attached directly to a frame ({@link Frame.soundLibraryItem | Frame.soundLibraryItem}), as stored in the library.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example changes the soundName property of the first frame to "song1.mp3"; song1.mp3 must exist in the library:
   *
   * ```javascript
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].soundName = "song1.mp3";
   * ```
   */
  soundName: string;

  /**
   * Property; The sync behavior of a sound that is attached directly to a frame ({@link Frame.soundLibraryItem | Frame.soundLibraryItem}). Acceptable values are *"event", "stop", "start", and "stream"*.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example specifies that a sound should stream:
   *
   * ```javascript
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].soundSync = "stream";
   * ```
   */
  soundSync: "event" | "stop" | "start" | "stream";

  /**
   * Read-only property; The index of the first frame in a sequence.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * In the following example, stFrame is the index of the first frame in the frame sequence. In this example, a frame sequence is spanning the six frames from Frame 5 to Frame 10. Therefore, the value of stFrame at any frame between Frame 5 and Frame 10 is 4 (remember that index values are different from frame number values).
   *
   * ```javascript
   * var stFrame = fl.getDocumentDOM().getTimeline().layers[0].frames[4].startFrame;
   * fl.trace(stFrame); // 4
   * var stFrame = fl.getDocumentDOM().getTimeline().layers[0].frames[9].startFrame;
   * fl.trace(stFrame); // 4
   * ```
   */
  readonly startFrame: number;

  /**
   * Property; The amount of easing that should be applied to the tweened object. Acceptable values are -100 to 100. To begin the tween slowly and accelerate the tween toward the end of the animation, use a value between -1 and -100. To begin the tween rapidly and decelerate the tween toward the end of the animation, use a positive value between 1 and 100. Defaults to 0.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example specifies that the motion of the tweened object should begin fairly rapidly and decelerate toward the end of the animation:
   *
   * ```javascript
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].tweenEasing = 50;
   * ```
   */
  tweenEasing: number;

  /**
   * Property; A string that assigns an instance name to the selected motion object. Empty string if there is no tween.
   * @since Adobe Flash Professional CS5
   * @example
   *
   * The following example assigns the instance name MyMotionTween to the specified motion object.
   *
   * ```javascript
   * theFrame.tweenInstanceName = "MyMotionTween";
   * ```
   */
  tweenInstanceName: string;

  /**
   * Property; A {@link Tween | Tween object}.
   * @since Adobe Flash Professional CC
   */
  readonly tweenObj: Tween | null;

  /**
   * Property; The type of tween; The value "none" removes the motion tween. Use the {@link Timeline.createMotionTween | Timeline.createMotionTween()} method to create a motion tween.
   * If you specify "motion" (classic tween) or "motion object" (motion tween), the object in the frame must be a symbol, text field, or grouped object. It will be tweened from its location in the current keyframe to the location in the following keyframe.
   * If you specify "shape" (shape tween), the object in the frame must be a shape. It will blend from its shape in the current keyframe to the shape in the following keyframe.
   * @since Macromedia Flash MX Basic/Professional 2004
   * @example
   *
   * The following example specifies that the object is a motion tween, and therefore, it should be tweened from its location in the current keyframe to the location in the following keyframe:
   *
   * ```javascript
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].tweenType = "motion";
   * ```
   */
  tweenType: "motion" | "motion object" | "shape" | "none";

  /**
   * Property; If true, a single custom ease curve is used for easing information for all properties. If false, each property has its own ease curve.
   * This property is ignored if the frame doesn't have custom easing applied.
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example specifies that a single custom ease curve should be used for all properties of the first frame on the first layer:
   *
   * ```javascript
   * var theFrame = fl.getDocumentDOM().getTimeline().layers[0].frames[0];
   * theFrame.useSingleEaseCurve = true;
   * ```
   * @see
   *
   * - {@link Frame.getCustomEase | Frame.getCustomEase()}
   * - {@link Frame.hasCustomEase | Frame.hasCustomEase}
   * - {@link Frame.setCustomEase | Frame.setCustomEase()}
   */
  useSingleEaseCurve: boolean;
}

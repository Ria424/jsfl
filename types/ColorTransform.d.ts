/**
 * Unofficial but useful interface. Used in Filter.
 */
interface ColorTransform {
  colorAlphaAmount: number;
  colorAlphaPercent: number;
  colorBlueAmount: number;
  colorBluePercent: number;
  colorGreenAmount: number;
  colorGreenPercent: number;
  colorRedAmount: number;
  colorRedPercent: number;
}

interface FrameAdvancedColorTransform extends ColorTransform {
  mode: "Advanced";
}

interface FrameAlphaColorTransform extends ColorTransform {
  alphaPercent: number;
  mode: "Alpha";
}

interface FrameBrightnessColorTransform extends ColorTransform {
  brightnessPercent: number;
  mode: "Brightness";
}

interface FrameTintColorTransform extends ColorTransform {
  mode: "Tint";
  tintBlue: number;
  tintGreen: number;
  tintPercent: number;
  tintRed: number;
}

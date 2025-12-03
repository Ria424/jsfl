interface _FilterHasBlur {
  /**
   * Property; A float value that specifies the amount to blur in the *x* direction, in pixels.
   * Acceptable values are between 0 and 255.
   * This property is defined for Filter objects with a value of "bevelFilter", "blurFilter", "dropShadowFilter", "glowFilter", "gradientBevelFilter", or "gradientGlowFilter" for the {@link Filter.name | Filter.name} property.
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example sets the blurX value to 30 and the blurY value to 20 for the Blur filters on the selected object(s):
   *
   * ```javascript
   * var myFilters = fl.getDocumentDOM().getFilters();
   * for (var i = 0; i < myFilters.length; i++) {
   *   if (myFilters[i].name == "blurFilter") {
   *     myFilters[i].blurX = 30;
   *     myFilters[i].blurY = 20;
   *   }
   * }
   * fl.getDocumentDOM().setFilters(myFilters);
   * ```
   * @see
   *
   * - {@link Document.setFilterProperty | Document.setFilterProperty()}
   * - {@link _FilterHasBlur.blurY}
   */
  blurX: number;

  /**
   * Property; A float value that specifies the amount to blur in the *y* direction, in pixels.
   * Acceptable values are between 0 and 255. This property is defined for Filter objects with a value of "bevelFilter", "blurFilter", "dropShadowFilter", "glowFilter", "gradientBevelFilter", or "gradientGlowFilter" for the {@link Filter.name | Filter.name} property.
   * @since Macromedia Flash Basic/Professional 8
   * @see
   *
   * - {@link Document.setFilterProperty | Document.setFilterProperty()}
   * - {@link _FilterHasBlur.blurX}
   */
  blurY: number;

  /**
   * Property; The blur quality.
   *
   * Acceptable values are "low", "medium", and "high" ("high" is similar to a Gaussian blur).
   *
   * This property is defined for Filter objects with a value of "bevelFilter", "blurFilter", "dropShadowFilter", "glowFilter", "gradientGlowFilter", or "gradientBevelFilter" for the {@link Filter.name | Filter.name} property.
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example sets the blur quality to "medium" for the Glow filters on the selected object(s):
   *
   * ```javascript
   * var myFilters = fl.getDocumentDOM().getFilters();
   * for (var i = 0; i < myFilters.length; i++) {
   *   if (myFilters[i].name == "glowFilter") {
   *     myFilters[i].quality = "medium";
   *   }
   * }
   * fl.getDocumentDOM().setFilters(myFilters);
   * ```
   * @see {@link Document.setFilterProperty | Document.setFilterProperty()}
   */
  quality: "low" | "medium" | "high";
}

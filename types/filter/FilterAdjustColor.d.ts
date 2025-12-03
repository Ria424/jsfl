interface FilterAdjustColor extends Filter {
  /**
   * Property; A float value that specifies the brightness of the filter.
   *
   * Acceptable values are between -100 and 100.
   *
   * This property is defined for Filter objects with a value of "adjustColorFilter"
   * for the {@link Filter.name} property.
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example sets the brightness to 30.5 for the Adjust Color filters on the selected object(s):
   *
   * ```javascript
   * var myFilters = fl.getDocumentDOM().getFilters();
   * for (var i = 0; i < myFilters.length; i++) {
   *   if (myFilters[i].name == "adjustColorFilter") {
   *     myFilters[i].brightness = 30.5;
   *   }
   * }
   * fl.getDocumentDOM().setFilters(myFilters);
   * ```
   */
  brightness: number;

  /**
   * Property; A float value that specifies the contrast value of the filter.
   * Acceptable values are between -100 and 100.
   * This property is defined for Filter objects with a value of "adjustColorFilter" for the {@link Filter.name | Filter.name} property.
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example sets the contrast value to -15.5 for the Adjust Color filters on the selected object(s):
   *
   * ```javascript
   * var myFilters = fl.getDocumentDOM().getFilters();
   * for (var i = 0; i < myFilters.length; i++) {
   *   if (myFilters[i].name == "adjustColorFilter") {
   *     myFilters[i].contrast = -15.5;
   *   }
   * }
   * fl.getDocumentDOM().setFilters(myFilters);
   * ```
   */
  contrast: number;

  /**
   * Property; A float value that specifies the hue of the filter.
   *
   * Acceptable values are between -180 and 180.
   *
   * This property is defined for Filter objects with a value of "adjustColorFilter"
   * for the {@link Filter.name | Filter.name} property.
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example sets the hue to 120 for the Adjust Color filters on the selected object(s):
   *
   * ```javascript
   * var myFilters = fl.getDocumentDOM().getFilters();
   * for (var i = 0; i < myFilters.length; i++) {
   *   if (myFilters[i].name == "adjustColorFilter") {
   *     myFilters[i].hue = 120;
   *   }
   * }
   * fl.getDocumentDOM().setFilters(myFilters);
   * ```
   */
  hue: number;

  readonly name: "adjustColorFilter";

  /**
   * Property; A float value that specifies the saturation value of the filter. Acceptable values are from -100 to 100. This property is defined for Filter objects with a value of "adjustColorFilter" for the {@link Filter.name | Filter.name} property.
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example sets the saturation value to -100 (grayscale) for the Adjust Color filters on the selected object(s):
   *
   * ```javascript
   * var myFilters = fl.getDocumentDOM().getFilters();
   * for (var i = 0; i < myFilters.length; i++) {
   *   if (myFilters[i].name == "adjustColorFilter") {
   *     myFilters[i].saturation = -100;
   *   }
   * }
   * fl.getDocumentDOM().setFilters(myFilters);
   * ```
   * @see {@link Document.setFilterProperty | Document.setFilterProperty()}
   */
  saturation: number;
}

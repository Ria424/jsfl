interface FilterBevel extends Filter, _FilterHasBlur, _FilterHasDistance, _FilterHasKnockout, _FilterHasOutlineType, _FilterHasStrength {
  /**
   * Property; The color of the highlight, in one of the following formats:
   *
   * - A string in the format `"#RRGGBB"` or `"#RRGGBBAA"`
   * - A hexadecimal number in the format `0xRRGGBB`
   * - An integer that represents the decimal equivalent of a hexadecimal number
   *
   * This property is defined for Filter objects with a value of "bevelFilter" for the {@link Filter.name} property.
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example sets the highlight color to `"#ff00003e"` for the Bevel filters on the selected object(s):
   *
   * ```javascript
   * var myFilters = fl.getDocumentDOM().getFilters();
   * for (var i = 0; i < myFilters.length; i++) {
   *   if (myFilters[i].name == "bevelFilter") {
   *     myFilters[i].highlightColor = "#ff00003e";
   *   }
   * }
   * fl.getDocumentDOM().setFilters(myFilters);
   * ```
   */
  highlightColor: number | string;

  /**
   * Property; The color of the shadow, in one of the following formats:
   *
   * - A string in the format `"#RRGGBB"` or `"#RRGGBBAA"`
   * - A hexadecimal number in the format `0xRRGGBB`
   * - An integer that represents the decimal equivalent of a hexadecimal number
   *
   * This property is defined for Filter objects with a value of "bevelFilter" for the {@link Filter.name} property.
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example sets the shadow color to `"#ff00003e"` for the Bevel filters on the selected object(s):
   *
   * ```javascript
   * var myFilters = fl.getDocumentDOM().getFilters();
   * for (var i = 0; i < myFilters.length; i++) {
   *   if (myFilters[i].name == "bevelFilter") {
   *     myFilters[i].shadowColor = "#ff00003e";
   *   }
   * }
   * fl.getDocumentDOM().setFilters(myFilters);
   * ```
   * @see {@link Document.setFilterProperty | Document.setFilterProperty()}
   */
  shadowColor: number | string;

  readonly name: "bevelFilter"
}

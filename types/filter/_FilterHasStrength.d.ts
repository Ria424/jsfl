interface _FilterHasStrength {
  /**
   * Property; An integer that specifies the percentage strength of the filter.
   * Acceptable values are between `0` and `25,500`.
   * This property is defined for Filter objects with a value of "bevelFilter", "dropShadowFilter", "glowFilter", "gradientGlowFilter", or "gradientBevelFilter" for the {@link Filter.name | Filter.name} property.
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example sets the strength to 50 for the Glow filters on the selected object(s):
   *
   * ```javascript
   * var myFilters = fl.getDocumentDOM().getFilters();
   * for (var i = 0; i < myFilters.length; i++) {
   *   if (myFilters[i].name == "glowFilter") {
   *     myFilters[i].strength = 50;
   *   }
   * }
   * fl.getDocumentDOM().setFilters(myFilters);
   * ```
   * @see {@link Document.setFilterProperty | Document.setFilterProperty()}
   */
  strength: number;
}

interface _FilterHasDistance {
  /**
   * Property; A float value that specifies the distance between the filter's effect and an object, in pixels.
   * Acceptable values are from -255 to 255.
   * This property is defined for Filter objects with a value of "bevelFilter", "dropShadowFilter", "gradientBevelFilter", or "gradientGlowFilter" for the {@link Filter.name | Filter.name} property.
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example sets the distance to 10 pixels for the Drop Shadow filters on the selected object(s):
   *
   * ```javascript
   * var myFilters = fl.getDocumentDOM().getFilters();
   * for (var i = 0; i < myFilters.length; i++) {
   *   if (myFilters[i].name == "dropShadowFilter") {
   *     myFilters[i].distance = 10;
   *   }
   * }
   * fl.getDocumentDOM().setFilters(myFilters);
   * ```
   * @see {@link Document.setFilterProperty | Document.setFilterProperty()}
   */
  distance: number;
}

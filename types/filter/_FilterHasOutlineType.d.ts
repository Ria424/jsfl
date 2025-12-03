interface _FilterHasOutlineType {
  /**
   * Property; A string that specifies the type of bevel or glow.
   * Acceptable values are "inner", "outer", and "full".
   * This property is defined for Filter objects with a value of "bevelFilter", "gradientGlowFilter", or "gradientBevelFilter" for the {@link Filter.name | Filter.name} property.
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example sets the type to "full" for all Bevel filters on the selected object(s):
   *
   * ```javascript
   * var myFilters = fl.getDocumentDOM().getFilters();
   * for (var i = 0; i < myFilters.length; i++) {
   *   if (myFilters[i].name == "bevelFilter") {
   *     myFilters[i].type = "full";
   *   }
   * }
   * fl.getDocumentDOM().setFilters(myFilters);
   * ```
   * @see {@link Document.setFilterProperty | Document.setFilterProperty()}
   */
  type: "inner" | "outer" | "full";
}

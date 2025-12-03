interface FilterDropShadow extends Filter, _FilterHasBlur, _FilterHasBorderControl, _FilterHasColor, _FilterHasDistance, _FilterHasKnockout, _FilterHasStrength {
  /**
   * Property; Whether the source image is hidden (`true`) or displayed (`false`).
   *
   * This property is defined for Filter objects with a value of "dropShadowFilter"
   * for the {@link Filter.name} property.
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example sets the `hideObject` property to `true`
   * for the Drop Shadow filters on the selected object(s):
   *
   * ```javascript
   * var myFilters = fl.getDocumentDOM().getFilters();
   * for (var i = 0; i < myFilters.length; i++) {
   *   if (myFilters[i].name == "dropShadowFilter") {
   *     myFilters[i].hideObject = true;
   *   }
   * }
   * fl.getDocumentDOM().setFilters(myFilters);
   * ```
   */
  hideObject: boolean;

  readonly name: "dropShadowFilter";
}

type FilterName = "adjustColorFilter"
  | "bevelFilter"
  | "blurFilter"
  | "dropShadowFilter"
  | "glowFilter"
  | "gradientBevelFilter"
  | "gradientGlowFilter";

/**
 * The Filter object contains all the properties for all filters.
 *
 * The {@link Filter.name} property specifies the type of filter,
 * and determines which properties are applicable to each filter.
 *
 * To return the filter list for an object or objects, use {@link Document.getFilters | Document.getFilters()}.
 *
 * To apply filters to an object or objects, use {@link Document.setFilters | Document.setFilters()}.
 * @since Macromedia Flash Basic/Professional 8
 * @see
 *
 * - {@link Document.getFilters | Document.getFilters()}
 * - {@link Document.setFilters | Document.setFilters()}
 */
interface Filter {
  /**
   * Property; Whether the specified filter is enabled (`true`) or disabled (`false`).
   * @since Adobe Flash Professional CS3
   * @example
   *
   * The following example disables the Color filters on the selected object(s):
   *
   * ```javascript
   * var myFilters = fl.getDocumentDOM().getFilters();
   * for (var i = 0; i < myFilters.length; i++) {
   *   if (myFilters[i].name == "adjustColorFilter") {
   *     myFilters[i].enabled = false;
   *   }
   * }
   * fl.getDocumentDOM().setFilters(myFilters);
   * ```
   */
  enabled: boolean;

  /**
   * Read-only property. The type of filter.
   * The value of this property determines which other properties of the Filter object are available.
   * @since Macromedia Flash Basic/Professional 8
   * @example
   *
   * The following example displays the filter names and index positions in the Output panel:
   *
   * ```javascript
   * var myFilters = fl.getDocumentDOM().getFilters();
   * var traceStr = "";
   * for (var i = 0; i < myFilters.length; i++) {
   *   traceStr = traceStr + " At index " + i + ": " + myFilters[i].name;
   * }
   * fl.trace(traceStr);
   * ```
   * @see
   *
   * - {@link Document.getFilters | Document.getFilters()}
   * - {@link Document.setFilterProperty | Document.setFilterProperty()}
   */
  readonly name: FilterName;
}

/**
 * Este objeto é utilizado pelo atributo `sanitize` da biblioteca {@link js-search https://github.com/bvaughn/js-search},
 * nele é implementada a interface `ISanitizer` da biblioteca. Logo, o método sanitize é responsável por
 * transformar o valor passado para caixa baixa, remove espaços extras no começo e no
 * fim do valor e substituir caracteres especiais e acentos por caracteres equivalentes.
 *
 * @see {@link https://github.com/bvaughn/js-search/blob/master/source/Sanitizer/Sanitizer.js}
 */
const SearchTermsSanitizer = {
  /**
   * Este método transforma o valor passado para caixa baixa, remove espaços extras no começo e no
   * fim do valor e substituir caracteres especiais e acentos por caracteres equivalentes.
   *
   * @example
   * ```
   * SearchTermsSanitizer.sanitize('Olá Mundo, Crianças!'); // ola mundo, criancas!
   * ```
   *
   * @param {string} text - valor a ser transformado
   */
  sanitize: text =>
    text
      ? text
          .toLocaleLowerCase()
          .trim()
          .normalize('NFKD')
          .replace(/[\u0080-\uF8FF]/g, '')
      : '',
}

export default SearchTermsSanitizer

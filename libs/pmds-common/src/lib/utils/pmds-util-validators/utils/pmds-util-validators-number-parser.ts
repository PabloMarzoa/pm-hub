/* eslint-disable @typescript-eslint/no-explicit-any */
export class PmdsUtilNumberParser {
  private group: RegExp;
  private decimal: RegExp;
  private numeral: RegExp;
  private index: unknown;

  constructor(public locale: string) {
    const parts = new Intl.NumberFormat(locale).formatToParts(12345.6);
    const numerals = [
      ...new Intl.NumberFormat(locale, { useGrouping: false }).format(
        9876543210
      ),
    ].reverse();
    const index = new Map(numerals.map((d, i) => [d, i]));
    this.group = new RegExp(
      `[${parts.find((d: any) => d.type === 'group')?.value}]`,
      'g'
    );
    this.decimal = new RegExp(
      `[${parts.find((d: any) => d.type === 'decimal')?.value}]`
    );
    this.numeral = new RegExp(`[${numerals.join('')}]`, 'g');
    this.index = (d: string) => index.get(d);
  }

  parse(value: any): number {
    value = value
    .toString()
    .trim()
    .replace(this.group, '')
    .replace(this.decimal, '.')
    .replace(this.numeral, this.index)
    return value
      ? +value
      : NaN;
  }
}

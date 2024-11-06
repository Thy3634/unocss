import type { Rule } from '@unocss/core'
import { varEmpty } from '@unocss/preset-mini/rules'

export const fontVariantNumericBase = {
  '--un-ordinal': varEmpty,
  '--un-slashed-zero': varEmpty,
  '--un-numeric-figure': varEmpty,
  '--un-numeric-spacing': varEmpty,
  '--un-numeric-fraction': varEmpty,
}
const preflightKeys = Object.keys(fontVariantNumericBase)
function toEntries(entry: any) {
  return {
    ...entry,
    'font-variant-numeric': 'var(--un-ordinal) var(--un-slashed-zero) var(--un-numeric-figure) var(--un-numeric-spacing) var(--un-numeric-fraction)',
  }
}

export const fontVariantNumeric: Rule[] = [
  [/^ordinal$/, () => toEntries({ '--un-ordinal': 'ordinal' }), { preflightKeys, autocomplete: 'ordinal' }],
  [/^slashed-zero$/, () => toEntries({ '--un-slashed-zero': 'slashed-zero' }), { preflightKeys, autocomplete: 'slashed-zero' }],
  [/^lining-nums$/, () => toEntries({ '--un-numeric-figure': 'lining-nums' }), { preflightKeys, autocomplete: 'lining-nums' }],
  [/^oldstyle-nums$/, () => toEntries({ '--un-numeric-figure': 'oldstyle-nums' }), { preflightKeys, autocomplete: 'oldstyle-nums' }],
  [/^proportional-nums$/, () => toEntries({ '--un-numeric-spacing': 'proportional-nums' }), { preflightKeys, autocomplete: 'proportional-nums' }],
  [/^tabular-nums$/, () => toEntries({ '--un-numeric-spacing': 'tabular-nums' }), { preflightKeys, autocomplete: 'tabular-nums' }],
  [/^diagonal-fractions$/, () => toEntries({ '--un-numeric-fraction': 'diagonal-fractions' }), { preflightKeys, autocomplete: 'diagonal-fractions' }],
  [/^stacked-fractions$/, () => toEntries({ '--un-numeric-fraction': 'stacked-fractions' }), { preflightKeys, autocomplete: 'stacked-fractions' }],
  ['normal-nums', { 'font-variant-numeric': 'normal' }],
]

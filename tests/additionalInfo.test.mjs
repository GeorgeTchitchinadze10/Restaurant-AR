import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8')

test('public menu maps bilingual additional information from Supabase', () => {
  assert.match(html, /additional_info_en:\s*_cleanText\(r\.additional_info_en\)/)
  assert.match(html, /additional_info_ka:\s*_cleanText\(r\.additional_info_ka\)/)
})

test('public warning markup is Food & Market scoped and escaped', () => {
  assert.match(html, /function _foodMarketAdditionalInfoHtml\(item\)/)
  assert.match(html, /if \(!_isFoodMarketTenant\(\)\) return ''/)
  assert.match(html, /_escapeHtml\(additionalInfo\)/)
  assert.match(html, /class="additional-info"/)
})

test('public detail modal has a separate additional information element', () => {
  assert.match(html, /id="modal-additional-info"/)
  assert.match(html, /modalAdditionalInfo\.textContent/)
})

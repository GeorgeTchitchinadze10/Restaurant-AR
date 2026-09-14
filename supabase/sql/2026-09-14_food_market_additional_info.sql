-- Food & Market optional bilingual additional information / allergen warning.
-- Safe to re-run. The columns are nullable so existing menu items and all other
-- restaurant tenants remain unchanged.

alter table public.menu_items
  add column if not exists additional_info_en text,
  add column if not exists additional_info_ka text;

comment on column public.menu_items.additional_info_en is
  'Optional English additional information shown only by opted-in tenant UIs.';
comment on column public.menu_items.additional_info_ka is
  'Optional Georgian additional information shown only by opted-in tenant UIs.';

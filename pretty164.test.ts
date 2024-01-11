#!/usr/bin/env -S deno test

import { pretty164 } from "./pretty164.ts";
import { assertStrictEquals } from "https://deno.land/std@0.211.0/assert/mod.ts";

Deno.test("tolerate bad input", () => {
  assertStrictEquals(pretty164(""), "");
  assertStrictEquals(pretty164("+"), "+");
  assertStrictEquals(pretty164("+elevendigi"), "+elevendigi");
  assertStrictEquals(pretty164("+1234567890"), "+1234567890");
  assertStrictEquals(pretty164("+++++++++++"), "+++++++++++");
  assertStrictEquals(pretty164("++++++++++++"), "++-+++-+++-++++");
  assertStrictEquals(pretty164("+xxxxxxxxxxx"), "+x-xxx-xxx-xxxx");
  assertStrictEquals(pretty164("+sixteen-digitss"), "+sixteen-digitss");
  assertStrictEquals(pretty164("+123456789012345"), "+123456789012345");
});

Deno.test("12-digit (US & CA) phone numbers", () => {
  assertStrictEquals(pretty164("+12223334444"), "+1-222-333-4444");
  assertStrictEquals(pretty164("+14155552671"), "+1-415-555-2671");
});

Deno.test("13-digit (UK & Intl) phone numbers", () => {
  assertStrictEquals(pretty164("+112233334444"), "+11-22-3333-4444");
  assertStrictEquals(pretty164("+1122AAAABBBB"), "+11-22-AAAA-BBBB");
  assertStrictEquals(pretty164("+442071838750"), "+44-20-7183-8750");
  assertStrictEquals(pretty164("+551155256325"), "+55-11-5525-6325");
});

Deno.test("14-digit (Intl) phone numbers", () => {
  assertStrictEquals(pretty164("+1122233334444"), "+11-222-3333-4444");
});

Deno.test("15-digit (Intl) phone numbers", () => {
  assertStrictEquals(pretty164("+11222233334444"), "+11-2222-3333-4444");
});

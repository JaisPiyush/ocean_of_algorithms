import { assertEquals } from "https://deno.land/std@0.180.0/testing/asserts.ts";
import { isDivisibleByThree } from "./divisibility_large_number.ts";

Deno.test("Testing isDivisibleByThree", () => {
  assertEquals(isDivisibleByThree("769452"), true);
  assertEquals(isDivisibleByThree("123456758933312"), false);
  assertEquals(isDivisibleByThree("3635883959606670431112222"), true);
});

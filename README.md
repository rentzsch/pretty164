# pretty164: Simple E.164 dash-inserter

Reformats E.164 strings by inserting dashes. No dependancies.

### Usage

```ts
// node (after `npm install pretty164@1.1.0`):
import { pretty164 } from "pretty164";

// deno:
import { pretty164 } from "https://deno.land/x/pretty164@1.1.0/pretty164.ts";

// web esm:
import { pretty164 } from "https://www.unpkg.com/pretty164@1.1.0/esm/pretty164.js";

pretty164("+14155552671");
//=> "+1-415-555-2671"

pretty164("+442071838750");
//=> "+44-20-7183-8750"

pretty164("nope");
//=> "nope"
```

### References

- <https://www.twilio.com/docs/glossary/what-e164>
- <https://en.wikipedia.org/wiki/E.164>
- <https://en.wikipedia.org/wiki/List_of_country_calling_codes>
- <https://www.globalcallforwarding.com/blog/what-is-e-164/>
- <https://46elks.com/kb/e164>
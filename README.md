# pretty164: Simple E.164 dash-inserter

Reformats E.164 strings by inserting dashes.

### Usage

```ts
import { pretty164 } from "https://deno.land/x/pretty164@$MODULE_VERSION/pretty164.ts";

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
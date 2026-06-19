## 2024-05-15 - Cached Intl Object Instantiations
**Learning:** Instantiating `Intl` objects (like `Intl.DateTimeFormat`) is a relatively slow and expensive operation in JavaScript/Node.js. Repeatedly creating them inside formatting functions that are called multiple times (e.g., rendering lists or rows) can create a measurable performance bottleneck.
**Action:** Always extract and cache `Intl` object instantiations outside of the formatting functions so that a single instance is reused across multiple formatting calls.

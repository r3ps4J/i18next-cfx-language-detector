# Introduction

[![npm version](https://img.shields.io/npm/v/@r3ps4j/i18next-cfx-language-detector.svg?style=flat-square)](https://www.npmjs.com/package/@r3ps4j/i18next-cfx-language-detector)

This is a i18next language detection plugin for FXServer. It will detect the languages based on a convar variable. The language detector will fallback to the `locale` convar when the specified convar is not found or empty.

# Getting started

Install the package via npm.

```
npm install @r3ps4j/i18next-cfx-language-detector
```

To make use of the package, import it and load the detector as a module using `i18next.use`:

```js
import i18next from "i18next";
import LanguageDetector from "@r3ps4j/i18next-cfx-language-detector";

i18next.use(LanguageDetector).init(i18nextOptions);
```

## Detector options

```js
{
    convar: "i18next_lng", // Defaults to "i18next_lng"
}
```

Options can be passed in by setting `options.detection` in `i18next.init`:

```js
import i18next from "i18next";
import LanguageDetector from "@r3ps4j/i18next-cfx-language-detector";

i18next.use(LanguageDetector).init({
    detection: options,
});
```

# Genesis Child Theme Index

Crowdsourcing an index of all available Genesis child themes.

The purpose is to gather a list of all themes, and their feature attributes, which can then be used as a datasource for those wanting to create a filterable showcase. Since the data comes from (or on behalf of) the theme authors, it should be more accurate and up to date.

## The Theme Data File

1. Each theme has it's own file inside the `themes` directory.
2. Each file is named in the format of `{vendor-name}_{theme-name}.json` e.g. `studiopress_parallax-pro.json`.
3. Populate the properties as required. Check with [JSONLint](jsonlint.com) that your file is valid JSON.

Here's an example file:

~~~json
{
    "name": "Incipio",
    "author": "Gary Jones, Gamajo Tech",
    "purchaseUrl": "http://shop.example.com/incipio/",
    "demoUrl": "http://demo.example.com/incipio/",
    "free": false,
    "html5": true,
    "responsive": true,
    "mobileMenu": true,
    "layouts": 6,
    "accessibilityReady": false,
    "customBackground": true,
    "customColors": false,
    "editorStyle": true,
    "featuredImageHeader": true,
    "grunt": true,
    "parallax": false,
    "postFormats": false,
    "psds": false,
    "rtlLanguageSupport": true,
    "starter": true,
    "translationReady": true,
    "browsersSupported": {
        "IE": 8,
        "Chrome": 22,
        "Safari": 6,
        "Firefox": 12
    },
    "pluginsSupported": [
        "WooCommerce",
        "bbPress",
        "Simple Social Icons"
    ]
}
~~~

### Properties

#### name *(string)*
Name of the theme. **Required**

#### author *(string)*
Name of the individual or company who is credited as the author of the theme. **Required**

#### purchaseURL *(string)*
The URL of the page where the theme can be purchased from, or in the case of being free, downloaded from. **Required**

#### demoURL *(string)*
The URL where a live demo of the theme can be found.

#### free *(boolean)*
`true` if the theme is free, `false` if a premium theme.

#### html5 *(boolean)*
`true` if the theme supports HTML5, `false` if it outputs XHTML instead.

#### responsive *(boolean)*
`true` if the theme displays well at various screen sizes, `false` if it is fixed width.

#### mobileMenu *(boolean)*
`true` if the theme displays a mobile-specific menu at small screen sizes, `false` if it doesn't.

#### layouts *(integer)*
The number of layouts the theme supports (Genesis default is 6 but child theme may register or register others).

#### accessibilityReady *(boolean)*
`true` if the theme meets all of the guidelines at [http://make.wordpress.org/themes/guidelines/guidelines-accessibility/](http://make.wordpress.org/themes/guidelines/guidelines-accessibility/), `false` if not.

#### customBackground *(boolean)*
`true` if the theme supports the WordPress custom background feature, `false` if it doesn't.

#### customColors *(boolean)*
`true` if the theme allows a user to choose custom colors via an interface, `false` if it doesn't.

#### editorStyle *(boolean)*
`true` if the theme includes styles for the post editor that match the front-end, `false` if it doesn't.

#### featuredImageHeader *(boolean)*
`true` if the theme displays a featured image as a header, `false` if it doesn't.

#### grunt *(boolean)*
`true` if the theme includes support for *grunt* to allow development tasks to be automated, `false` if it doesn't.

#### parallax *(boolean)*
`true` if the theme design includes a parallax feature, `false` if it doesn't.

#### postFormats *(boolean)*
`true` if the theme adds support for post formats, `false` if it doesn't.

#### psds *(boolean)*
`true` if the theme includes PhotoShop (PSD) files of the original design, `false` if it doesn't.

#### rtlLanguageSupport *(boolean)*
`true` if the theme includes right-to-left (RTL) style sheets, `false` if it doesn't.

#### starter *(boolean)*
`true` if the theme author considers this theme to be a starter theme, `false` if not.

#### translationReady *(boolean)*
`true` if the theme has all strings internationalised, loads a child theme text domain, and includes a .pot file, `false` if it doesn't.

#### browsersSupported *(object)*
Key-value pairs of browser names and their minimum supported versions.

#### pluginsSupported *(array)*
List of plugins names that the theme explicitly includes styles for.

## Add Your Theme

1. Fork this project.
2. Edit your fork to create new theme data files in the `theme/` directory.
3. Commit (and push back to your GitHub repo if editing locally).
4. Submit a pull request.

Please do separate commits for each theme file. Multiple themes files can be sent in one pull request.

## Remove Your Theme

If your theme gets retired and is no longer available, then submit a pull requests which deletes the respective theme file.

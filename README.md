# Copy Selection to Readwise

Copy title, URL, selection as Markdown

![How it works](images/screencast.gif)

## Install

Go to [Add-ons for Firefox](https://addons.mozilla.org/en-US/firefox/addon/copy-selection-to-readwise/) and install.

## Usage

Right click and select:

- when part of the page is selected: **Copy Selection to Readwise**
- when user context-clicks in the page: **Copy Title and URL as Markdown**
- when user context-clicks in the link: **Copy Link as Markdown**

Since v0.18.0, rich text (`text/html`) version of the selection will be copied to the clipboard as well. Almost all of users of this extension might be using plain text editor, but it should be useful for using with [Slack](https://slack.com).

## Settings

The add-on have multiple configuration to suit your setup as follows. Set your preference by:

1. Click the menu button ![](images/menu.svg) and choose ![](images/extensionGeneric-16.svg) **Add-ons**. The Add-ons Manager tab will open
2. In the Add-ons Manager tab, select the **Extensions** panel
3. Click **Copy Selection to Readwise** and click **Preferences** tab
4. Hit **Save** button on the top to apply changes (no restart required)

### General

- Prepend quote (<code>&gt;</code>) to selection
- Include link to source web page in the beginning of copied text
- Enable experimental MathJax support
- Disable link styling (`like this (https://example.com)` instead of `[like this](https://example.com)`)

### Shortcut Key

- macOS: `Command` + `Shift` + `E`
- Windows/Linux: `Ctrl` + `Shift` + `E`

To change shortcut key, click gear icon on top-right and click **Manage Extension Shortcuts**.

### Markdown Styles

- Enable <a href="https://github.github.com/gfm/">GitHub Flavored Markdown</a> (strikethrough, tables, and taskListItems) support
- Use `img` tag for image instead of `![title](url for image)`
- Reduce padding spaces for list items
- Replace `<>` with HTML entities

#### Heading style

- Setext
  ```
  Heading 1
  =========
  Heading 2
  ---------
  ```
- ATX (default)
  ```
  # Heading 1
  ## Heading 2
  ```

#### Bullet list marker

- Minus (`-`) (default)
  ```
  - one
  - two
  - three
  ```
- Plus (`+`)
  ```
  + one
  + two
  + three
  ```
- Asterisk (`*`)
  ```
  * one
  * two
  * three
  ```

#### Code block style

- Indented (default)
  ```
          let code = "indented";
  ```
- Fenced
  ````
      ```
      code = "fenced";
      ```
  ````

#### Fence

- Backticks (```) (default)
  ````
      ```
      let code = "fenced";
      ```
  ````
- Tildes (`~`)
  ```
      ~~~
      let code = "fenced";
      ~~~
  ```

#### Em

- Underline (`_`) (default)
  ```
  _Em_
  ```
- Asterisk (`*`)
  ```
  *Em*
  ```

#### Strong

- Underlines (`__`)
  ```
  __Strong__
  ```
- Asterisks (`*`) (default)
  ```
  **Strong**
  ```

#### Link style

- Inlined (default)
  ```
  [Inlined](https://example.com)
  ```
- Referenced
  ```
  [Referenced][1]<br/>
  [1]: https://example.com
  ```

#### Link reference style

- Reference (default)

  ```
  [Reference][1]

  [1]: https://example.com
  ```

- Collapsed

  ```
  [Reference with collapsed style][]

  [Reference with collapsed style]: https://example.com
  ```

- Shortcut

  ```
  [Reference with shortcut style]

  [reference with shortcut style]: https://example.com
  ```

### Advanced

- Title Substitution -- line separated texts which will be removed from title text. If you add ` - Mozilla | MDN` to the textbox, the copied text wil be:
  - From `[Add-ons - Mozilla | MDN](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons)`
  - To `[Add-ons](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons)`
- Embed `img`s (.gif, .jpg, .jpeg, .png, and .webp) as base64 -- images will be encoded as base64 text, instead of URL, and added at the end of copied text. Sometime it might fail but useful for backup. See [Permissions](#privacy).

## Contributing

Please read [CONTRIBUTING](CONTRIBUTING.md) for details.

## FAQ: Not working on Mozilla related sites

By default, no add-on can interfere pre-configured domains for security reason. You can configure this behavior at `about:config` → `extensions.webextensions.restrictedDomains` preference. See [Configuration Editor for Firefox | Firefox Help](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) for how to change the preference.

- Default list of restricted domains (See [modules/libpref/init/all.js](https://searchfox.org/mozilla-central/source/modules/libpref/init/all.js#3839))
  - accounts-static.cdn.mozilla.net
  - accounts.firefox.com
  - addons.cdn.mozilla.net
  - addons.mozilla.org
  - api.accounts.firefox.com
  - content.cdn.mozilla.net
  - discovery.addons.mozilla.org
  - install.mozilla.org
  - oauth.accounts.firefox.com
  - profile.accounts.firefox.com
  - support.mozilla.org
  - sync.services.mozilla.com

## License

This extension is released under the MIT License. See [LICENSE](LICENSE) for details.

## Acknowledgements

- [Turndown](https://github.com/domchristie/turndown), which does all the heavy lifting from HTML to markdown
- [Octicons](https://octicons.github.com/) [clippy](https://octicons.github.com/icon/clippy/)

## Privacy

The add-on does not store any user data outside of the Firefox user profile. The conversion to markdown is solely done locally. The add-on never send user action/data to any server.

### Permissions

See [permissions - Mozilla | MDN](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) for more detail.

| Permission       | Optional | Description                                                                                                                                                                                                                                                                                                                                                       |
| ---------------- | :------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `activeTab`      |          | to run copy functionality at active tab                                                                                                                                                                                                                                                                                                                           |
| `clipboardWrite` |          | to write to clipboard obviously                                                                                                                                                                                                                                                                                                                                   |
| `contextMenus`   |          | to add context menus                                                                                                                                                                                                                                                                                                                                              |
| `storage`        |          | to store preferences                                                                                                                                                                                                                                                                                                                                              |
| `<all_urls>`     |    X     | when [**Embed <code>img</code>s (.gif, .jpg, .jpeg, .png, and .webp) as base64 text as possible** option](#advanced) is set, the extension requests this permission since sometimes referenced images are hosted other than current active tab's URL so `activeTab` permission is not sufficient. If the option's not set, the extension removes this permission. |

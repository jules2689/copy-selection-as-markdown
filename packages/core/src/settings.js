document.addEventListener("DOMContentLoaded", () => {
  browser.storage.local.get().then(
    (result) => {
      document.querySelector("#quote").checked =
        typeof result["use-quote"] === "undefined" ? false : result["use-quote"];
      document.querySelector("#link").checked =
        typeof result["link-to-source"] === "undefined"
          ? true
          : result["link-to-source"];
      document.querySelector("form").headingStyle.value =
        typeof result.headingStyle === "undefined"
          ? "atx"
          : result.headingStyle;
      document.querySelector("form").bulletListMarker.value =
        typeof result.bulletListMarker === "undefined"
          ? "-"
          : result.bulletListMarker;
      document.querySelector("form").codeBlockStyle.value =
        typeof result.codeBlockStyle === "undefined"
          ? "indented"
          : result.codeBlockStyle;
      document.querySelector("form").fence.value =
        typeof result.fence === "undefined" ? "`" : result.fence;
      document.querySelector("form").emDelimiter.value =
        typeof result.emDelimiter === "undefined" ? "_" : result.emDelimiter;
      document.querySelector("form").strongDelimiter.value =
        typeof result.strongDelimiter === "undefined"
          ? "**"
          : result.strongDelimiter;
      document.querySelector("form").linkStyle.value =
        typeof result.linkStyle === "undefined" ? "inlined" : result.linkStyle;
      document.querySelector("form").linkReferenceStyle.value =
        typeof result.linkReferenceStyle === "undefined"
          ? "full"
          : result.linkReferenceStyle;
      document.querySelector("#debug").checked =
        typeof result.debug === "undefined" ? false : result.debug;
      document.querySelector("#mathjax").checked =
        typeof result.mathjax === "undefined" ? false : result.mathjax;
      document.querySelector("#gfm").checked =
        typeof result.gfm === "undefined" ? true : result.gfm;
      document.querySelector("#linkWithoutStyling").checked =
        typeof result.linkWithoutStyling === "undefined"
          ? false
          : result.linkWithoutStyling;
      document.querySelector("#img").checked =
        typeof result.img === "undefined" ? false : result.img;
      document.querySelector("#embedImage").checked =
        typeof result.embedImage === "undefined" ? false : result.embedImage;
      document.querySelector("#titleSubstitution").value =
        typeof result.titleSubstitution === "undefined"
          ? ""
          : result.titleSubstitution;
      document.querySelector("#reduceListItemPadding").value =
        typeof result.reduceListItemPadding === "undefined"
          ? false
          : result.reduceListItemPadding;
      document.querySelector("#replaceAngleBrackets").value =
        typeof result.replaceAngleBrackets === "undefined"
          ? false
        : result.replaceAngleBrackets;
      document.querySelector("#readwiseToken").value =
        typeof result.readwiseToken === "undefined"
          ? null
          : result.readwiseToken;
    },
    (error) => console.log(`Error: ${error}`)
  );
});

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  let embedImage = document.querySelector("#embedImage").checked || false;

  if (embedImage) {
    embedImage = await browser.permissions.request({
      origins: ["<all_urls>"],
      permissions: [],
    });
    document.querySelector("#embedImage").checked = embedImage;
  } else {
    await browser.permissions.remove({ origins: ["<all_urls>"] });
  }

  browser.storage.local.set({
    "use-quote": document.querySelector("#quote").checked,
    "link-to-source": document.querySelector("#link").checked,
    headingStyle: document.querySelector("form").headingStyle.value,
    bulletListMarker: document.querySelector("form").bulletListMarker.value,
    codeBlockStyle: document.querySelector("form").codeBlockStyle.value,
    fence: document.querySelector("form").fence.value,
    emDelimiter: document.querySelector("form").emDelimiter.value,
    strongDelimiter: document.querySelector("form").strongDelimiter.value,
    linkStyle: document.querySelector("form").linkStyle.value,
    linkReferenceStyle: document.querySelector("form").linkReferenceStyle.value,
    debug: document.querySelector("#debug").checked,
    mathjax: document.querySelector("#mathjax").checked,
    gfm: document.querySelector("#gfm").checked,
    linkWithoutStyling: document.querySelector("#linkWithoutStyling").checked,
    img: document.querySelector("#img").checked,
    embedImage,
    titleSubstitution: document.querySelector("#titleSubstitution").value,
    reduceListItemPadding: document.querySelector("#reduceListItemPadding")
      .value,
    replaceAngleBrackets: document.querySelector("#replaceAngleBrackets").value,
    readwiseToken: document.querySelector("#readwiseToken").value,
  });
});

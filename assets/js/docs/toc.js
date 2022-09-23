$(() => {
  let parent = $("#TocOfContents");
  let pre = parent;
  let preLevel = 1;
  $("section h2, section h3, section h4").each((_, header) => {
    let currentLevel = parseInt(header.nodeName[1]);
    let levelDiff = currentLevel - preLevel;

    let li = $(
      "<li><a href='#" +
        $(header).attr("id") +
        "'>" +
        $(header).text() +
        "</a></li>"
    );

    if (levelDiff === 0) {
      // 与上一层级一致
    }

    if (levelDiff > 0) {
      // 比上一层级低
      parent = pre;
      for (let index = 0; index < levelDiff; index++) {
        let ul = $("<ul></ul>");
        $(parent).append(ul);
        parent = ul;
      }
    }

    if (levelDiff < 0) {
      // 比上一层级高
      const parents = $(pre).parents("ul");
      parent = parents[-levelDiff];
    }

    $(parent).append(li);
    pre = li;
    preLevel = currentLevel;
  });
});

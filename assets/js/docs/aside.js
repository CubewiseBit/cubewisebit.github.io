---
---

$(() => {
  const pathname = window.location.pathname;

  if (pathname.indexOf("docs") < 0) {
    console.error("This is not a doc page! " + pathname);
    return;
  }

  const paths = _.split(pathname, /[\/#?]/);
  const schemaIdx =
    _.findIndex(paths, (path) => _.toLower(path) === "docs") + 1;
  const schema = paths[schemaIdx];
  if (!schema) {
    console.error("Cannot find aside schema from " + pathname);
    return;
  }

  const title = _.map(_.split(schema, "-"), (word) =>
    _.toLower(word) === "cubebit" ? "CubeBit" : _.capitalize(word)
  ).join(" ");
  $("#DocNavOfTitleSm").prepend(title);
  $("#DocNavOfTitleMd").text(title);

  const basePath = pathname.substring(0, pathname.indexOf("/docs")) || "";
  const schemaUrl = basePath + "/assets/aside/" + schema + ".json?v={{ site.github.build_revision }}";
  $.getJSON(schemaUrl, (schemas) =>
    appendSideItem(schemas, $("#DocNavOfContents"))
  );

  function appendSideItem(schemas, parent, isSub) {
    schemas.forEach((schema) => {
      if (!!schema.separator) {
        const li = $("<li class='my-3 mx-4 border-top'></li>");
        parent.append(li);
      } else if (!!schema.children && schema.children.length > 0) {
        // 目录

        // dom id 必须以字母开头，并且对长度有限制
        const collapseId = "collapse-" + new Date().getTime().toString(16);

        const li = $(
          "<li style='margin-left: " + (isSub ? 16 : 0) + "px;'></li>"
        );
        $(parent).append(li);

        const collapsedBtn = $(
          "<button class='btn d-inline-flex align-items-center rounded collapsed' data-bs-toggle='collapse' data-bs-target='#" +
            collapseId +
            "' aria-expanded='false'>" +
            schema.title +
            "</button>"
        );
        $(li).append(collapsedBtn);

        const collapsedDiv = $(
          "<div class='collapse' id='" + collapseId + "'></div>"
        );
        $(li).append(collapsedDiv);

        const ul = $("<ul class='list-unstyled fw-normal pb-1 small'></ul>");
        $(collapsedDiv).append(ul);

        appendSideItem(schema.children, ul, true);

        appendTags(collapsedBtn, schema.tags);
      } else if (!!schema.path) {
        const path = schema.disabled ? "#" : basePath + schema.path;
        const li = $("<li></li>");
        $(parent).append(li);

        const a = $(
          "<a href='" +
            path +
            "' class='d-inline-flex align-items-center rounded'>" +
            schema.title +
            "</a>"
        );
        $(li).append(a);

        appendTags(a, schema.tags);

        if (pathname === path) {
          // 当前节点需要展开
          $(a).addClass("active");
          $(a)
            .parents("li")
            .each((_, li) => {
              $(li)
                .children("button[data-bs-toggle='collapse']")
                .each((_, btn) => {
                  $(btn).attr("aria-expanded", "true");
                  $(btn).attr("aria-current", "true");
                });
              $(li)
                .children("div.collapse")
                .each((_, div) => {
                  $(div).addClass("show");
                });
            });
        }
      }
    });
  }

  function appendTags(dom, tags) {
    (tags || []).forEach((tag) => {
      switch(tag) {
        case "hot": {
          $(dom).append("<i class='bi bi-fire' style='color: #dc3545;'></i>");
          break;
        }
        default: break;
      }
    });
  }
});

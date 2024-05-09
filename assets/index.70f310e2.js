import { jsx, jsxs, Fragment } from "react/jsx-runtime";
const frontmatter = void 0;
const toc = [{
  "id": "211-\u4EC0\u4E48\u662F\u67E5\u8BE2\u6267\u884C\u8BA1\u5212",
  "text": "2.1.1 \u4EC0\u4E48\u662F\u67E5\u8BE2\u6267\u884C\u8BA1\u5212",
  "depth": 3
}, {
  "id": "212-\u5982\u4F55\u67E5\u770B\u67E5\u8BE2\u6267\u884C\u8BA1\u5212",
  "text": "2.1.2 \u5982\u4F55\u67E5\u770B\u67E5\u8BE2\u6267\u884C\u8BA1\u5212",
  "depth": 3
}, {
  "id": "31-\u7D22\u5F15\u7684\u7C7B\u578B\u53CA\u521B\u5EFA\u65B9\u6CD5",
  "text": "3.1 \u7D22\u5F15\u7684\u7C7B\u578B\u53CA\u521B\u5EFA\u65B9\u6CD5",
  "depth": 3
}, {
  "id": "311-b-tree\u7D22\u5F15",
  "text": "3.1.1 B-tree\u7D22\u5F15",
  "depth": 4
}, {
  "id": "312-\u54C8\u5E0C\u7D22\u5F15",
  "text": "3.1.2 \u54C8\u5E0C\u7D22\u5F15",
  "depth": 4
}, {
  "id": "313-\u5168\u6587\u7D22\u5F15",
  "text": "3.1.3 \u5168\u6587\u7D22\u5F15",
  "depth": 4
}, {
  "id": "32-\u7D22\u5F15\u7684\u6700\u4F73\u5B9E\u8DF5",
  "text": "3.2 \u7D22\u5F15\u7684\u6700\u4F73\u5B9E\u8DF5",
  "depth": 3
}, {
  "id": "321-\u5982\u4F55\u9009\u62E9\u6B63\u786E\u7684\u7D22\u5F15",
  "text": "3.2.1 \u5982\u4F55\u9009\u62E9\u6B63\u786E\u7684\u7D22\u5F15",
  "depth": 4
}, {
  "id": "322-\u7D22\u5F15\u7684\u4F18\u5316\u6280\u5DE7",
  "text": "3.2.2 \u7D22\u5F15\u7684\u4F18\u5316\u6280\u5DE7",
  "depth": 4
}, {
  "id": "323-\u7D22\u5F15\u76F8\u5173\u7684\u6700\u4F73\u5B9E\u8DF5",
  "text": "3.2.3 \u7D22\u5F15\u76F8\u5173\u7684\u6700\u4F73\u5B9E\u8DF5",
  "depth": 4
}, {
  "id": "41-sql\u8BED\u53E5\u5199\u4F5C\u89C4\u8303",
  "text": "4.1 SQL\u8BED\u53E5\u5199\u4F5C\u89C4\u8303",
  "depth": 3
}, {
  "id": "411-sql\u8BED\u53E5\u7684\u4E66\u5199\u98CE\u683C",
  "text": "4.1.1 SQL\u8BED\u53E5\u7684\u4E66\u5199\u98CE\u683C",
  "depth": 4
}, {
  "id": "412-sql\u8BED\u53E5\u7684\u4F18\u5316\u539F\u5219",
  "text": "4.1.2 SQL\u8BED\u53E5\u7684\u4F18\u5316\u539F\u5219",
  "depth": 4
}, {
  "id": "42-\u907F\u514D\u5168\u8868\u626B\u63CF\u7684\u65B9\u6CD5",
  "text": "4.2 \u907F\u514D\u5168\u8868\u626B\u63CF\u7684\u65B9\u6CD5",
  "depth": 3
}, {
  "id": "421-\u5229\u7528\u7D22\u5F15\u4F18\u5316\u67E5\u8BE2",
  "text": "4.2.1 \u5229\u7528\u7D22\u5F15\u4F18\u5316\u67E5\u8BE2",
  "depth": 4
}, {
  "id": "422-\u4F7F\u7528\u8986\u76D6\u7D22\u5F15\u63D0\u9AD8\u6027\u80FD",
  "text": "4.2.2 \u4F7F\u7528\u8986\u76D6\u7D22\u5F15\u63D0\u9AD8\u6027\u80FD",
  "depth": 4
}, {
  "id": "423-\u5145\u5206\u5229\u7528\u7D22\u5F15\u5217\u7684\u987A\u5E8F",
  "text": "4.2.3 \u5145\u5206\u5229\u7528\u7D22\u5F15\u5217\u7684\u987A\u5E8F",
  "depth": 4
}, {
  "id": "51-\u6162\u67E5\u8BE2\u65E5\u5FD7\u7684\u8BBE\u7F6E\u4E0E\u5206\u6790",
  "text": "5.1 \u6162\u67E5\u8BE2\u65E5\u5FD7\u7684\u8BBE\u7F6E\u4E0E\u5206\u6790",
  "depth": 3
}, {
  "id": "511-\u5982\u4F55\u5F00\u542F\u6162\u67E5\u8BE2\u65E5\u5FD7",
  "text": "5.1.1 \u5982\u4F55\u5F00\u542F\u6162\u67E5\u8BE2\u65E5\u5FD7",
  "depth": 4
}, {
  "id": "512-\u901A\u8FC7\u6162\u67E5\u8BE2\u65E5\u5FD7\u627E\u51FA\u6027\u80FD\u74F6\u9888",
  "text": "5.1.2 \u901A\u8FC7\u6162\u67E5\u8BE2\u65E5\u5FD7\u627E\u51FA\u6027\u80FD\u74F6\u9888",
  "depth": 4
}, {
  "id": "52-explain\u5DE5\u5177\u89E3\u8BFB",
  "text": "5.2 Explain\u5DE5\u5177\u89E3\u8BFB",
  "depth": 3
}, {
  "id": "521-explain\u8F93\u51FA\u7684\u542B\u4E49",
  "text": "5.2.1 Explain\u8F93\u51FA\u7684\u542B\u4E49",
  "depth": 4
}, {
  "id": "522-\u5982\u4F55\u4F7F\u7528explain\u8FDB\u884C\u67E5\u8BE2\u4F18\u5316",
  "text": "5.2.2 \u5982\u4F55\u4F7F\u7528Explain\u8FDB\u884C\u67E5\u8BE2\u4F18\u5316",
  "depth": 4
}, {
  "id": "523-explain\u89E3\u8BFB\u4E2D\u7684\u5E38\u89C1\u8BEF\u533A",
  "text": "5.2.3 Explain\u89E3\u8BFB\u4E2D\u7684\u5E38\u89C1\u8BEF\u533A",
  "depth": 4
}, {
  "id": "61-\u5B9E\u4F8B\u5206\u6790\u4F18\u5316\u5177\u4F53\u67E5\u8BE2\u6848\u4F8B",
  "text": "6.1 \u5B9E\u4F8B\u5206\u6790\uFF1A\u4F18\u5316\u5177\u4F53\u67E5\u8BE2\u6848\u4F8B",
  "depth": 3
}, {
  "id": "611-\u573A\u666F\u63CF\u8FF0",
  "text": "6.1.1 \u573A\u666F\u63CF\u8FF0",
  "depth": 4
}, {
  "id": "612-\u4F18\u5316\u524D\u67E5\u8BE2\u8BED\u53E5",
  "text": "6.1.2 \u4F18\u5316\u524D\u67E5\u8BE2\u8BED\u53E5",
  "depth": 4
}, {
  "id": "613-\u4F18\u5316\u540E\u67E5\u8BE2\u8BED\u53E5",
  "text": "6.1.3 \u4F18\u5316\u540E\u67E5\u8BE2\u8BED\u53E5",
  "depth": 4
}, {
  "id": "614-\u4EE3\u7801\u903B\u8F91\u8BF4\u660E",
  "text": "6.1.4 \u4EE3\u7801\u903B\u8F91\u8BF4\u660E",
  "depth": 4
}, {
  "id": "615-\u4EE3\u7801\u8FD0\u884C\u7ED3\u679C",
  "text": "6.1.5 \u4EE3\u7801\u8FD0\u884C\u7ED3\u679C",
  "depth": 4
}, {
  "id": "62-\u7ECF\u9A8C\u603B\u7ED3mysql\u67E5\u8BE2\u4F18\u5316\u5B9E\u8DF5\u4E2D\u7684\u6CE8\u610F\u4E8B\u9879",
  "text": "6.2 \u7ECF\u9A8C\u603B\u7ED3\uFF1AMySQL\u67E5\u8BE2\u4F18\u5316\u5B9E\u8DF5\u4E2D\u7684\u6CE8\u610F\u4E8B\u9879",
  "depth": 3
}, {
  "id": "621-\u5145\u5206\u5229\u7528\u7D22\u5F15",
  "text": "6.2.1 \u5145\u5206\u5229\u7528\u7D22\u5F15",
  "depth": 4
}, {
  "id": "622-\u907F\u514D\u8FC7\u591A\u7684\u5173\u8054",
  "text": "6.2.2 \u907F\u514D\u8FC7\u591A\u7684\u5173\u8054",
  "depth": 4
}, {
  "id": "623-\u5B9A\u671F\u4F18\u5316\u6570\u636E\u5E93",
  "text": "6.2.3 \u5B9A\u671F\u4F18\u5316\u6570\u636E\u5E93",
  "depth": 4
}, {
  "id": "63-\u76F2\u70B9\u5206\u6790\u5E38\u89C1\u7684mysql\u67E5\u8BE2\u4F18\u5316\u8BEF\u533A",
  "text": "6.3 \u76F2\u70B9\u5206\u6790\uFF1A\u5E38\u89C1\u7684MySQL\u67E5\u8BE2\u4F18\u5316\u8BEF\u533A",
  "depth": 3
}, {
  "id": "631-\u8FC7\u5EA6\u7D22\u5F15",
  "text": "6.3.1 \u8FC7\u5EA6\u7D22\u5F15",
  "depth": 4
}, {
  "id": "632-\u5FFD\u7565sql\u8BED\u53E5\u7684\u6027\u80FD",
  "text": "6.3.2 \u5FFD\u7565SQL\u8BED\u53E5\u7684\u6027\u80FD",
  "depth": 4
}, {
  "id": "633-\u7F3A\u4E4F\u6574\u4F53\u89C4\u5212",
  "text": "6.3.3 \u7F3A\u4E4F\u6574\u4F53\u89C4\u5212",
  "depth": 4
}];
const title = "6. \u5B9E\u4F8B\u4E0E\u7ECF\u9A8C\u5206\u6790";
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    img: "img",
    h1: "h1",
    a: "a",
    h3: "h3",
    code: "code",
    div: "div",
    button: "button",
    span: "span",
    pre: "pre",
    h4: "h4",
    ul: "ul",
    li: "li",
    table: "table",
    thead: "thead",
    tr: "tr",
    th: "th",
    tbody: "tbody",
    td: "td"
  }, props.components);
  return jsxs(Fragment, {
    children: [jsx(_components.p, {
      children: jsx(_components.img, {
        src: "https://img-blog.csdnimg.cn/cd527e6b2b024d89ba68990769d7139a.png",
        alt: "mysql\u6570\u636E\u5E93\u5206\u6790\u5E38\u89C1\u95EE\u9898\u4E0E\u8BE6\u7EC6\u89E3\u51B3\u64CD\u4F5C"
      })
    }), "\n", jsxs(_components.h1, {
      id: "1-mysql\u67E5\u8BE2\u4F18\u5316\u6982\u8FF0",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#1-mysql\u67E5\u8BE2\u4F18\u5316\u6982\u8FF0",
        children: "#"
      }), "1. MySQL\u67E5\u8BE2\u4F18\u5316\u6982\u8FF0"]
    }), "\n", jsx(_components.p, {
      children: "\u5728MySQL\u6570\u636E\u5E93\u7684\u4F7F\u7528\u8FC7\u7A0B\u4E2D\uFF0C\u67E5\u8BE2\u4F18\u5316\u662F\u975E\u5E38\u91CD\u8981\u7684\u4E00\u73AF\u3002\u901A\u8FC7\u5BF9\u67E5\u8BE2\u8BED\u53E5\u548C\u6570\u636E\u5E93\u7ED3\u6784\u7684\u4F18\u5316\uFF0C\u53EF\u4EE5\u663E\u8457\u63D0\u5347\u67E5\u8BE2\u6027\u80FD\uFF0C\u51CF\u5C11\u7CFB\u7EDF\u8D44\u6E90\u7684\u5360\u7528\uFF0C\u4EE5\u53CA\u63D0\u9AD8\u7528\u6237\u4F53\u9A8C\u3002\u672C\u7AE0\u5C06\u4ECEMySQL\u67E5\u8BE2\u4F18\u5316\u7684\u6982\u5FF5\u5165\u624B\uFF0C\u4ECB\u7ECD\u4E3A\u4EC0\u4E48\u9700\u8981\u8FDB\u884C\u67E5\u8BE2\u4F18\u5316\u4EE5\u53CA\u4F18\u5316\u5E26\u6765\u7684\u597D\u5904\u3002\u6211\u4EEC\u5C06\u6DF1\u5165\u63A2\u8BA8\u67E5\u8BE2\u4F18\u5316\u7684\u76EE\u6807\u662F\u4EC0\u4E48\uFF0C\u4EE5\u53CA\u5982\u4F55\u7075\u6D3B\u8FD0\u7528\u4E0D\u540C\u7684\u8C03\u7528\u6280\u5DE7\uFF0C\u6709\u6548\u63D0\u9AD8\u6570\u636E\u5E93\u7684\u67E5\u8BE2\u6548\u7387\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u672C\u7AE0\u5185\u5BB9\u7684\u9610\u8FF0\uFF0C\u8BFB\u8005\u5C06\u5BF9MySQL\u67E5\u8BE2\u4F18\u5316\u6709\u4E2A\u6574\u4F53\u7684\u8BA4\u8BC6\uFF0C\u4E3A\u540E\u7EED\u5B66\u4E60\u66F4\u5177\u4F53\u7684\u67E5\u8BE2\u4F18\u5316\u6280\u5DE7\u5960\u5B9A\u57FA\u7840\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "21-mysql\u67E5\u8BE2\u6267\u884C\u8BA1\u5212\u57FA\u7840\u6982\u5FF5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#21-mysql\u67E5\u8BE2\u6267\u884C\u8BA1\u5212\u57FA\u7840\u6982\u5FF5",
        children: "#"
      }), "2.1 MySQL\u67E5\u8BE2\u6267\u884C\u8BA1\u5212\u57FA\u7840\u6982\u5FF5"]
    }), "\n", jsx(_components.p, {
      children: "\u5728MySQL\u6570\u636E\u5E93\u4F18\u5316\u4E2D\uFF0C\u67E5\u8BE2\u6267\u884C\u8BA1\u5212\u662F\u975E\u5E38\u91CD\u8981\u7684\u6982\u5FF5\u4E4B\u4E00\u3002\u901A\u8FC7\u6DF1\u5165\u7406\u89E3\u67E5\u8BE2\u6267\u884C\u8BA1\u5212\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u5206\u6790\u67E5\u8BE2\u8BED\u53E5\u7684\u6267\u884C\u6548\u7387\uFF0C\u627E\u51FA\u6F5C\u5728\u7684\u6027\u80FD\u74F6\u9888\uFF0C\u8FDB\u800C\u8FDB\u884C\u6709\u9488\u5BF9\u6027\u7684\u4F18\u5316\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "211-\u4EC0\u4E48\u662F\u67E5\u8BE2\u6267\u884C\u8BA1\u5212",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#211-\u4EC0\u4E48\u662F\u67E5\u8BE2\u6267\u884C\u8BA1\u5212",
        children: "#"
      }), "2.1.1 \u4EC0\u4E48\u662F\u67E5\u8BE2\u6267\u884C\u8BA1\u5212"]
    }), "\n", jsx(_components.p, {
      children: "\u67E5\u8BE2\u6267\u884C\u8BA1\u5212\u662F\u6307\u6570\u636E\u5E93\u5728\u6267\u884C\u67E5\u8BE2\u8BED\u53E5\u65F6\u751F\u6210\u7684\u6267\u884C\u8DEF\u7EBF\u56FE\uFF0C\u5B83\u5C55\u793A\u4E86\u6570\u636E\u5E93\u662F\u5982\u4F55\u8BBF\u95EE\u8868\u4E2D\u7684\u6570\u636E\u4EE5\u83B7\u53D6\u67E5\u8BE2\u7ED3\u679C\u7684\u3002\u901A\u8FC7\u67E5\u770B\u67E5\u8BE2\u6267\u884C\u8BA1\u5212\uFF0C\u53EF\u4EE5\u4E86\u89E3\u6570\u636E\u5E93\u7CFB\u7EDF\u662F\u5982\u4F55\u6267\u884C\u67E5\u8BE2\u7684\uFF0C\u5305\u62EC\u8868\u7684\u8BBF\u95EE\u987A\u5E8F\u3001\u4F7F\u7528\u7684\u7D22\u5F15\u3001\u8FDE\u63A5\u65B9\u5F0F\u7B49\u4FE1\u606F\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "212-\u5982\u4F55\u67E5\u770B\u67E5\u8BE2\u6267\u884C\u8BA1\u5212",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#212-\u5982\u4F55\u67E5\u770B\u67E5\u8BE2\u6267\u884C\u8BA1\u5212",
        children: "#"
      }), "2.1.2 \u5982\u4F55\u67E5\u770B\u67E5\u8BE2\u6267\u884C\u8BA1\u5212"]
    }), "\n", jsxs(_components.p, {
      children: ["\u5728MySQL\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528", jsx(_components.code, {
        children: "EXPLAIN"
      }), "\u5173\u952E\u5B57\u6765\u67E5\u770B\u67E5\u8BE2\u6267\u884C\u8BA1\u5212\u3002\u901A\u8FC7\u5728\u67E5\u8BE2\u8BED\u53E5\u524D\u52A0\u4E0A", jsx(_components.code, {
        children: "EXPLAIN"
      }), "\u5173\u952E\u5B57\uFF0CMySQL\u4F1A\u89E3\u91CA\u8BE5\u67E5\u8BE2\u7684\u6267\u884C\u8BA1\u5212\uFF0C\u5E76\u8FD4\u56DE\u4E00\u7EC4\u63CF\u8FF0\u67E5\u8BE2\u6267\u884C\u7684\u4FE1\u606F\u3002\u8FD9\u5BF9\u4E8E\u5206\u6790\u67E5\u8BE2\u6027\u80FD\u548C\u4F18\u5316\u67E5\u8BE2\u8BED\u53E5\u975E\u5E38\u6709\u5E2E\u52A9\u3002"]
    }), "\n", jsx(_components.p, {
      children: "\u4E0B\u9762\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u793A\u4F8B\uFF0C\u6F14\u793A\u5982\u4F55\u67E5\u770B\u67E5\u8BE2\u6267\u884C\u8BA1\u5212\uFF1A"
    }), "\n", jsxs(_components.div, {
      className: "language-sql",
      children: [jsx(_components.button, {
        className: "copy"
      }), jsx(_components.span, {
        className: "lang",
        children: "sql"
      }), jsx(_components.pre, {
        className: "shiki",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "EXPLAIN "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "SELECT"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "FROM"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " users "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "WHERE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " age "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "30"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u4EE5\u4E0A\u547D\u4EE4\uFF0C\u6211\u4EEC\u53EF\u4EE5\u83B7\u5F97\u5173\u4E8E\u8BE5\u67E5\u8BE2\u6267\u884C\u8BA1\u5212\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u5305\u62EC\u8868\u7684\u8BFB\u53D6\u987A\u5E8F\u3001\u4F7F\u7528\u7684\u7D22\u5F15\u3001\u53EF\u80FD\u7684\u5168\u8868\u626B\u63CF\u7B49\u5185\u5BB9\u3002\u7406\u89E3\u5E76\u5206\u6790\u8FD9\u4E9B\u4FE1\u606F\u5C06\u6709\u52A9\u4E8E\u6211\u4EEC\u4F18\u5316\u67E5\u8BE2\u8BED\u53E5\uFF0C\u63D0\u5347\u67E5\u8BE2\u6548\u7387\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u5728\u4E0B\u4E00\u8282\u4E2D\uFF0C\u6211\u4EEC\u5C06\u6DF1\u5165\u63A2\u8BA8MySQL\u67E5\u8BE2\u4F18\u5316\u5668\u7684\u5DE5\u4F5C\u539F\u7406\uFF0C\u4E86\u89E3\u4F18\u5316\u5668\u7684\u9009\u62E9\u7B56\u7565\u4EE5\u53CA\u5F71\u54CD\u67E5\u8BE2\u6027\u80FD\u7684\u5173\u952E\u7B97\u6CD5\u3002\u7EE7\u7EED\u5F80\u4E0B\u9605\u8BFB\uFF0C\u8BA9\u6211\u4EEC\u4E00\u8D77\u63A2\u7A76\u66F4\u591A\u5173\u4E8EMySQL\u67E5\u8BE2\u7684\u5965\u79D8\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "3-\u7D22\u5F15\u4F18\u5316\u53CA\u4F7F\u7528\u6280\u5DE7",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#3-\u7D22\u5F15\u4F18\u5316\u53CA\u4F7F\u7528\u6280\u5DE7",
        children: "#"
      }), "3. \u7D22\u5F15\u4F18\u5316\u53CA\u4F7F\u7528\u6280\u5DE7"]
    }), "\n", jsxs(_components.h3, {
      id: "31-\u7D22\u5F15\u7684\u7C7B\u578B\u53CA\u521B\u5EFA\u65B9\u6CD5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#31-\u7D22\u5F15\u7684\u7C7B\u578B\u53CA\u521B\u5EFA\u65B9\u6CD5",
        children: "#"
      }), "3.1 \u7D22\u5F15\u7684\u7C7B\u578B\u53CA\u521B\u5EFA\u65B9\u6CD5"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u6570\u636E\u5E93\u4E2D\uFF0C\u7D22\u5F15\u88AB\u7528\u6765\u63D0\u9AD8\u67E5\u8BE2\u901F\u5EA6\uFF0C\u4F7F\u5F97\u67E5\u8BE2\u64CD\u4F5C\u66F4\u4E3A\u9AD8\u6548\u3002\u4E0B\u9762\u6211\u4EEC\u5C06\u4ECB\u7ECD\u51E0\u79CD\u5E38\u89C1\u7684\u7D22\u5F15\u7C7B\u578B\u4EE5\u53CA\u5B83\u4EEC\u7684\u521B\u5EFA\u65B9\u6CD5\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "311-b-tree\u7D22\u5F15",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#311-b-tree\u7D22\u5F15",
        children: "#"
      }), "3.1.1 B-tree\u7D22\u5F15"]
    }), "\n", jsx(_components.p, {
      children: "B-tree\u7D22\u5F15\u662FMySQL\u4E2D\u6700\u5E38\u89C1\u7684\u7D22\u5F15\u7C7B\u578B\u4E4B\u4E00\uFF0C\u5B83\u9002\u7528\u4E8E\u7B49\u503C\u67E5\u8BE2\u3001\u8303\u56F4\u67E5\u8BE2\u548C\u6392\u5E8F\u3002\u4E0B\u9762\u662F\u521B\u5EFAB-tree\u7D22\u5F15\u7684\u57FA\u672C\u8BED\u6CD5\uFF1A"
    }), "\n", jsxs(_components.div, {
      className: "language-sql",
      children: [jsx(_components.button, {
        className: "copy"
      }), jsx(_components.span, {
        className: "lang",
        children: "sql"
      }), jsx(_components.pre, {
        className: "shiki",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "CREATE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "INDEX"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " index_name "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "ON"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " table_name (column_name);"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.p, {
      children: ["\u5176\u4E2D\uFF0C", jsx(_components.code, {
        children: "index_name"
      }), "\u4E3A\u7D22\u5F15\u540D\u79F0\uFF0C", jsx(_components.code, {
        children: "table_name"
      }), "\u4E3A\u8868\u540D\uFF0C", jsx(_components.code, {
        children: "column_name"
      }), "\u4E3A\u9700\u8981\u521B\u5EFA\u7D22\u5F15\u7684\u5217\u540D\u3002"]
    }), "\n", jsxs(_components.h4, {
      id: "312-\u54C8\u5E0C\u7D22\u5F15",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#312-\u54C8\u5E0C\u7D22\u5F15",
        children: "#"
      }), "3.1.2 \u54C8\u5E0C\u7D22\u5F15"]
    }), "\n", jsx(_components.p, {
      children: "\u54C8\u5E0C\u7D22\u5F15\u9002\u7528\u4E8E\u7B49\u503C\u67E5\u8BE2\uFF0C\u4F46\u4E0D\u9002\u7528\u4E8E\u8303\u56F4\u67E5\u8BE2\u548C\u6392\u5E8F\u3002\u521B\u5EFA\u54C8\u5E0C\u7D22\u5F15\u7684\u65B9\u6CD5\u5982\u4E0B\uFF1A"
    }), "\n", jsxs(_components.div, {
      className: "language-sql",
      children: [jsx(_components.button, {
        className: "copy"
      }), jsx(_components.span, {
        className: "lang",
        children: "sql"
      }), jsx(_components.pre, {
        className: "shiki",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "CREATE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "INDEX"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " index_name "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "ON"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " table_name (column_name) "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "USING"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "HASH"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h4, {
      id: "313-\u5168\u6587\u7D22\u5F15",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#313-\u5168\u6587\u7D22\u5F15",
        children: "#"
      }), "3.1.3 \u5168\u6587\u7D22\u5F15"]
    }), "\n", jsx(_components.p, {
      children: "\u5168\u6587\u7D22\u5F15\u4E3B\u8981\u7528\u4E8E\u5168\u6587\u68C0\u7D22\uFF0C\u53EF\u4EE5\u5728\u6587\u672C\u5217\u4E0A\u8FDB\u884C\u9AD8\u6548\u7684\u641C\u7D22\u3002\u521B\u5EFA\u5168\u6587\u7D22\u5F15\u7684\u8BED\u6CD5\u5982\u4E0B\uFF1A"
    }), "\n", jsxs(_components.div, {
      className: "language-sql",
      children: [jsx(_components.button, {
        className: "copy"
      }), jsx(_components.span, {
        className: "lang",
        children: "sql"
      }), jsx(_components.pre, {
        className: "shiki",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "CREATE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "FULLTEXT"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "INDEX"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " index_name "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "ON"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " table_name (column_name);"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h3, {
      id: "32-\u7D22\u5F15\u7684\u6700\u4F73\u5B9E\u8DF5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#32-\u7D22\u5F15\u7684\u6700\u4F73\u5B9E\u8DF5",
        children: "#"
      }), "3.2 \u7D22\u5F15\u7684\u6700\u4F73\u5B9E\u8DF5"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u4F7F\u7528\u7D22\u5F15\u65F6\uFF0C\u9700\u8981\u6CE8\u610F\u4EE5\u4E0B\u6700\u4F73\u5B9E\u8DF5\uFF0C\u4EE5\u786E\u4FDD\u7D22\u5F15\u7684\u6709\u6548\u5229\u7528\u548C\u67E5\u8BE2\u6027\u80FD\u7684\u63D0\u5347\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "321-\u5982\u4F55\u9009\u62E9\u6B63\u786E\u7684\u7D22\u5F15",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#321-\u5982\u4F55\u9009\u62E9\u6B63\u786E\u7684\u7D22\u5F15",
        children: "#"
      }), "3.2.1 \u5982\u4F55\u9009\u62E9\u6B63\u786E\u7684\u7D22\u5F15"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "\u6839\u636E\u67E5\u8BE2\u9700\u6C42\u9009\u62E9\u5408\u9002\u7684\u7D22\u5F15\u7C7B\u578B\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u7EFC\u5408\u8003\u8651\u67E5\u8BE2\u9891\u7387\u3001\u6570\u636E\u552F\u4E00\u6027\u3001\u6570\u636E\u91CF\u7B49\u56E0\u7D20\u8FDB\u884C\u7D22\u5F15\u9009\u62E9\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u907F\u514D\u521B\u5EFA\u8FC7\u591A\u7D22\u5F15\uFF0C\u907F\u514D\u7D22\u5F15\u5197\u4F59\u3002"
      }), "\n"]
    }), "\n", jsxs(_components.h4, {
      id: "322-\u7D22\u5F15\u7684\u4F18\u5316\u6280\u5DE7",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#322-\u7D22\u5F15\u7684\u4F18\u5316\u6280\u5DE7",
        children: "#"
      }), "3.2.2 \u7D22\u5F15\u7684\u4F18\u5316\u6280\u5DE7"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "\u5B9A\u671F\u5BF9\u7D22\u5F15\u8FDB\u884C\u7EF4\u62A4\u548C\u4F18\u5316\uFF0C\u5220\u9664\u4E0D\u5FC5\u8981\u7684\u7D22\u5F15\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u4F7F\u7528\u8986\u76D6\u7D22\u5F15\u4EE5\u51CF\u5C11\u78C1\u76D8IO\u64CD\u4F5C\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u5BF9\u590D\u5408\u7D22\u5F15\u8FDB\u884C\u6B63\u786E\u7684\u6392\u5E8F\u4EE5\u63D0\u9AD8\u67E5\u8BE2\u6548\u7387\u3002"
      }), "\n"]
    }), "\n", jsxs(_components.h4, {
      id: "323-\u7D22\u5F15\u76F8\u5173\u7684\u6700\u4F73\u5B9E\u8DF5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#323-\u7D22\u5F15\u76F8\u5173\u7684\u6700\u4F73\u5B9E\u8DF5",
        children: "#"
      }), "3.2.3 \u7D22\u5F15\u76F8\u5173\u7684\u6700\u4F73\u5B9E\u8DF5"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "\u907F\u514D\u5728\u67E5\u8BE2\u4E2D\u5BF9\u7D22\u5F15\u5217\u8FDB\u884C\u51FD\u6570\u64CD\u4F5C\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u6CE8\u610F\u957F\u5B57\u6BB5\u548C\u53D8\u957F\u5B57\u6BB5\u7684\u7D22\u5F15\u4F7F\u7528\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u5728\u6DFB\u52A0\u7D22\u5F15\u524D\u8FDB\u884C\u67E5\u8BE2\u6027\u80FD\u8BC4\u4F30\uFF0C\u786E\u4FDD\u7D22\u5F15\u7684\u5FC5\u8981\u6027\u548C\u6709\u6548\u6027\u3002"
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u7406\u89E3\u4E0D\u540C\u7D22\u5F15\u7C7B\u578B\u7684\u7279\u70B9\u4EE5\u53CA\u6700\u4F73\u5B9E\u8DF5\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u66F4\u597D\u5730\u4F18\u5316\u6570\u636E\u5E93\u7684\u7D22\u5F15\u8BBE\u8BA1\uFF0C\u5E76\u63D0\u5347\u67E5\u8BE2\u6027\u80FD\u548C\u7CFB\u7EDF\u7684\u6574\u4F53\u6027\u80FD\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "4-sql\u8BED\u53E5\u4F18\u5316\u6280\u5DE7",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#4-sql\u8BED\u53E5\u4F18\u5316\u6280\u5DE7",
        children: "#"
      }), "4. SQL\u8BED\u53E5\u4F18\u5316\u6280\u5DE7"]
    }), "\n", jsxs(_components.h3, {
      id: "41-sql\u8BED\u53E5\u5199\u4F5C\u89C4\u8303",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#41-sql\u8BED\u53E5\u5199\u4F5C\u89C4\u8303",
        children: "#"
      }), "4.1 SQL\u8BED\u53E5\u5199\u4F5C\u89C4\u8303"]
    }), "\n", jsx(_components.p, {
      children: "SQL\u8BED\u53E5\u7684\u4E66\u5199\u98CE\u683C\u548C\u4F18\u5316\u539F\u5219\u5BF9\u4E8E\u63D0\u5347\u67E5\u8BE2\u6027\u80FD\u8D77\u7740\u81F3\u5173\u91CD\u8981\u7684\u4F5C\u7528\u3002\u4EE5\u4E0B\u662F\u4E00\u4E9B\u503C\u5F97\u6CE8\u610F\u7684\u5730\u65B9\uFF1A"
    }), "\n", jsxs(_components.h4, {
      id: "411-sql\u8BED\u53E5\u7684\u4E66\u5199\u98CE\u683C",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#411-sql\u8BED\u53E5\u7684\u4E66\u5199\u98CE\u683C",
        children: "#"
      }), "4.1.1 SQL\u8BED\u53E5\u7684\u4E66\u5199\u98CE\u683C"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u7F16\u5199SQL\u8BED\u53E5\u65F6\uFF0C\u5E94\u8BE5\u9075\u5FAA\u4E00\u5B9A\u7684\u4E66\u5199\u89C4\u8303\uFF0C\u4EE5\u63D0\u9AD8\u53EF\u8BFB\u6027\u548C\u7EF4\u62A4\u6027\u3002\u4EE5\u4E0B\u662F\u4E00\u4E9B\u5EFA\u8BAE\u7684\u4E66\u5199\u98CE\u683C\uFF1A"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "\u4F7F\u7528\u5173\u952E\u5B57\u5927\u5199\uFF0C\u8868\u540D\u3001\u5217\u540D\u5C0F\u5199\uFF0C\u4EE5\u589E\u52A0\u53EF\u8BFB\u6027\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u4F7F\u7528\u7F29\u8FDB\u548C\u6362\u884C\u6765\u4F7FSQL\u8BED\u53E5\u7ED3\u6784\u6E05\u6670\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u4E3ASQL\u8BED\u53E5\u4E2D\u7684\u5173\u952E\u90E8\u5206\u6DFB\u52A0\u6CE8\u91CA\uFF0C\u89E3\u91CA\u67E5\u8BE2\u610F\u56FE\u548C\u903B\u8F91\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u907F\u514D\u4F7F\u7528SELECT *\uFF0C\u800C\u662F\u660E\u786E\u5217\u51FA\u9700\u8981\u7684\u5B57\u6BB5\uFF0C\u4EE5\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u6570\u636E\u8BFB\u53D6\u3002"
      }), "\n"]
    }), "\n", jsxs(_components.div, {
      className: "language-sql",
      children: [jsx(_components.button, {
        className: "copy"
      }), jsx(_components.span, {
        className: "lang",
        children: "sql"
      }), jsx(_components.pre, {
        className: "shiki",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "-- \u4F8B\uFF1ASQL\u67E5\u8BE2\u8BED\u53E5\u4E66\u5199\u793A\u4F8B"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "SELECT"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    column1, column2"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "FROM"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "table"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "WHERE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    condition;"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h4, {
      id: "412-sql\u8BED\u53E5\u7684\u4F18\u5316\u539F\u5219",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#412-sql\u8BED\u53E5\u7684\u4F18\u5316\u539F\u5219",
        children: "#"
      }), "4.1.2 SQL\u8BED\u53E5\u7684\u4F18\u5316\u539F\u5219"]
    }), "\n", jsx(_components.p, {
      children: "SQL\u8BED\u53E5\u7684\u4F18\u5316\u539F\u5219\u662F\u786E\u4FDD\u67E5\u8BE2\u6027\u80FD\u6700\u4F73\u7684\u5173\u952E\u3002\u4EE5\u4E0B\u662F\u4E00\u4E9B\u5EFA\u8BAE\u7684\u4F18\u5316\u539F\u5219\uFF1A"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "\u907F\u514D\u5728\u67E5\u8BE2\u4E2D\u4F7F\u7528\u51FD\u6570\uFF0C\u56E0\u4E3A\u51FD\u6570\u4F1A\u4F7F\u7D22\u5F15\u5931\u6548\uFF0C\u5F71\u54CD\u67E5\u8BE2\u6027\u80FD\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u4F7F\u7528\u5408\u9002\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u907F\u514D\u5728WHERE\u6761\u4EF6\u4E2D\u5BF9\u5B57\u6BB5\u8FDB\u884C\u7C7B\u578B\u8F6C\u6362\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u5C3D\u91CF\u907F\u514D\u5728WHERE\u6761\u4EF6\u4E2D\u4F7F\u7528LIKE '%value%'\uFF0C\u8FD9\u79CD\u6A21\u7CCA\u67E5\u8BE2\u4F1A\u5BFC\u81F4\u5168\u8868\u626B\u63CF\uFF0C\u5F71\u54CD\u6027\u80FD\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u8C28\u614E\u4F7F\u7528\u5B50\u67E5\u8BE2\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u4F7F\u7528JOIN\u6765\u63D0\u9AD8\u67E5\u8BE2\u6548\u7387\u3002"
      }), "\n"]
    }), "\n", jsxs(_components.div, {
      className: "language-sql",
      children: [jsx(_components.button, {
        className: "copy"
      }), jsx(_components.span, {
        className: "lang",
        children: "sql"
      }), jsx(_components.pre, {
        className: "shiki",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "-- \u4F8B\uFF1ASQL\u67E5\u8BE2\u4F18\u5316\u539F\u5219\u5E94\u7528"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "SELECT"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    column1, column2"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "FROM"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "table"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "WHERE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    indexed_column "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "value"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h3, {
      id: "42-\u907F\u514D\u5168\u8868\u626B\u63CF\u7684\u65B9\u6CD5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#42-\u907F\u514D\u5168\u8868\u626B\u63CF\u7684\u65B9\u6CD5",
        children: "#"
      }), "4.2 \u907F\u514D\u5168\u8868\u626B\u63CF\u7684\u65B9\u6CD5"]
    }), "\n", jsx(_components.p, {
      children: "\u907F\u514D\u5168\u8868\u626B\u63CF\u662FSQL\u4F18\u5316\u4E2D\u7684\u6838\u5FC3\u5185\u5BB9\u3002\u901A\u8FC7\u5408\u7406\u5730\u5229\u7528\u7D22\u5F15\u6765\u4F18\u5316\u67E5\u8BE2\uFF0C\u53EF\u4EE5\u5927\u5927\u63D0\u9AD8\u67E5\u8BE2\u6548\u7387\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "421-\u5229\u7528\u7D22\u5F15\u4F18\u5316\u67E5\u8BE2",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#421-\u5229\u7528\u7D22\u5F15\u4F18\u5316\u67E5\u8BE2",
        children: "#"
      }), "4.2.1 \u5229\u7528\u7D22\u5F15\u4F18\u5316\u67E5\u8BE2"]
    }), "\n", jsxs(_components.p, {
      children: ["\u7D22\u5F15\u662FMySQL\u4E2D\u63D0\u9AD8\u67E5\u8BE2\u6027\u80FD\u7684\u91CD\u8981\u5DE5\u5177\u3002\u901A\u8FC7\u5728\u67E5\u8BE2\u5B57\u6BB5\u4E0A\u521B\u5EFA\u7D22\u5F15\uFF0C\u53EF\u4EE5\u4F7F\u67E5\u8BE2\u66F4\u9AD8\u6548\u3002\u4F7F\u7528", jsx(_components.code, {
        children: "EXPLAIN"
      }), "\u547D\u4EE4\u53EF\u4EE5\u67E5\u770BMySQL\u6267\u884C\u8BA1\u5212\u4E2D\u662F\u5426\u4F7F\u7528\u4E86\u7D22\u5F15\u3002"]
    }), "\n", jsxs(_components.div, {
      className: "language-sql",
      children: [jsx(_components.button, {
        className: "copy"
      }), jsx(_components.span, {
        className: "lang",
        children: "sql"
      }), jsx(_components.pre, {
        className: "shiki",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "-- \u4F8B\uFF1A\u521B\u5EFA\u7D22\u5F15\u793A\u4F8B"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "CREATE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "INDEX"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " idx_name "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "ON"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " table_name(column_name);"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "-- \u4F18\u5316\u67E5\u8BE2\u793A\u4F8B"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "EXPLAIN "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "SELECT"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " column1, column2 "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "FROM"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " table_name "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "WHERE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " indexed_column "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "value"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h4, {
      id: "422-\u4F7F\u7528\u8986\u76D6\u7D22\u5F15\u63D0\u9AD8\u6027\u80FD",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#422-\u4F7F\u7528\u8986\u76D6\u7D22\u5F15\u63D0\u9AD8\u6027\u80FD",
        children: "#"
      }), "4.2.2 \u4F7F\u7528\u8986\u76D6\u7D22\u5F15\u63D0\u9AD8\u6027\u80FD"]
    }), "\n", jsx(_components.p, {
      children: "\u8986\u76D6\u7D22\u5F15\u662F\u6307\u67E5\u8BE2\u7684\u5217\u5305\u542B\u5728\u7D22\u5F15\u5185\uFF0C\u907F\u514D\u4E86MySQL\u9700\u8981\u56DE\u8868\u67E5\u8BE2\u7684\u60C5\u51B5\uFF0C\u4ECE\u800C\u63D0\u9AD8\u67E5\u8BE2\u6548\u7387\u3002\u5728\u8BBE\u8BA1\u8868\u7ED3\u6784\u65F6\uFF0C\u53EF\u4EE5\u8003\u8651\u4F7F\u7528\u8986\u76D6\u7D22\u5F15\u6765\u4F18\u5316\u67E5\u8BE2\u6027\u80FD\u3002"
    }), "\n", jsxs(_components.div, {
      className: "language-sql",
      children: [jsx(_components.button, {
        className: "copy"
      }), jsx(_components.span, {
        className: "lang",
        children: "sql"
      }), jsx(_components.pre, {
        className: "shiki",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "-- \u4F8B\uFF1A\u8986\u76D6\u7D22\u5F15\u5E94\u7528\u793A\u4F8B"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "CREATE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "INDEX"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " idx_cover "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "ON"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " table_name(column_name1, column_name2);"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "SELECT"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " column_name1, column_name2 "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "FROM"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " table_name "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "WHERE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " indexed_column "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "value"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h4, {
      id: "423-\u5145\u5206\u5229\u7528\u7D22\u5F15\u5217\u7684\u987A\u5E8F",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#423-\u5145\u5206\u5229\u7528\u7D22\u5F15\u5217\u7684\u987A\u5E8F",
        children: "#"
      }), "4.2.3 \u5145\u5206\u5229\u7528\u7D22\u5F15\u5217\u7684\u987A\u5E8F"]
    }), "\n", jsx(_components.p, {
      children: "\u7D22\u5F15\u5217\u7684\u987A\u5E8F\u4E5F\u4F1A\u5F71\u54CD\u67E5\u8BE2\u6027\u80FD\u3002\u5728\u521B\u5EFA\u590D\u5408\u7D22\u5F15\u65F6\uFF0C\u5E94\u8BE5\u5408\u7406\u9009\u62E9\u7D22\u5F15\u5217\u7684\u987A\u5E8F\uFF0C\u5C06\u7ECF\u5E38\u4F5C\u4E3A\u67E5\u8BE2\u6761\u4EF6\u7684\u5217\u653E\u5728\u524D\u9762\uFF0C\u4EE5\u63D0\u9AD8\u67E5\u8BE2\u6548\u7387\u3002"
    }), "\n", jsxs(_components.div, {
      className: "language-sql",
      children: [jsx(_components.button, {
        className: "copy"
      }), jsx(_components.span, {
        className: "lang",
        children: "sql"
      }), jsx(_components.pre, {
        className: "shiki",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "-- \u4F8B\uFF1A\u590D\u5408\u7D22\u5F15\u5217\u987A\u5E8F\u9009\u62E9\u793A\u4F8B"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "CREATE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "INDEX"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " idx_order "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "ON"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " table_name(column_name1, column_name2);"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "SELECT"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " column_name1, column_name2 "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "FROM"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " table_name "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "WHERE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " column_name1 "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " value1 "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "AND"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " column_name2 "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " value2;"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u4EE5\u4E0ASQL\u8BED\u53E5\u4F18\u5316\u6280\u5DE7\uFF0C\u53EF\u4EE5\u6709\u6548\u5730\u63D0\u5347MySQL\u67E5\u8BE2\u7684\u6027\u80FD\uFF0C\u907F\u514D\u5168\u8868\u626B\u63CF\uFF0C\u5145\u5206\u5229\u7528\u7D22\u5F15\u4EE5\u53CA\u4F18\u5316SQL\u8BED\u53E5\u7684\u5199\u4F5C\u89C4\u8303\u548C\u539F\u5219\u3002\u4E0D\u4EC5\u53EF\u4EE5\u63D0\u9AD8\u67E5\u8BE2\u6548\u7387\uFF0C\u8FD8\u53EF\u4EE5\u964D\u4F4E\u7CFB\u7EDF\u8D44\u6E90\u7684\u6D88\u8017\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "5-\u9AD8\u7EA7\u4F18\u5316\u6280\u5DE7\u4E0E\u5DE5\u5177\u4F7F\u7528",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#5-\u9AD8\u7EA7\u4F18\u5316\u6280\u5DE7\u4E0E\u5DE5\u5177\u4F7F\u7528",
        children: "#"
      }), "5. \u9AD8\u7EA7\u4F18\u5316\u6280\u5DE7\u4E0E\u5DE5\u5177\u4F7F\u7528"]
    }), "\n", jsx(_components.p, {
      children: "MySQL\u67E5\u8BE2\u4F18\u5316\u662F\u6570\u636E\u5E93\u6027\u80FD\u8C03\u4F18\u4E2D\u81F3\u5173\u91CD\u8981\u7684\u4E00\u73AF\uFF0C\u800C\u4F7F\u7528\u9002\u5F53\u7684\u5DE5\u5177\u8FDB\u884C\u5206\u6790\u5219\u53EF\u4EE5\u4E8B\u534A\u529F\u500D\u3002\u672C\u7AE0\u5C06\u4ECB\u7ECD\u4E00\u4E9B\u9AD8\u7EA7\u7684\u4F18\u5316\u6280\u5DE7\u4EE5\u53CA\u5E38\u7528\u5DE5\u5177\u7684\u4F7F\u7528\u65B9\u6CD5\uFF0C\u5E2E\u52A9\u8BFB\u8005\u66F4\u6DF1\u5165\u5730\u7406\u89E3\u548C\u5E94\u7528MySQL\u67E5\u8BE2\u4F18\u5316\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "51-\u6162\u67E5\u8BE2\u65E5\u5FD7\u7684\u8BBE\u7F6E\u4E0E\u5206\u6790",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#51-\u6162\u67E5\u8BE2\u65E5\u5FD7\u7684\u8BBE\u7F6E\u4E0E\u5206\u6790",
        children: "#"
      }), "5.1 \u6162\u67E5\u8BE2\u65E5\u5FD7\u7684\u8BBE\u7F6E\u4E0E\u5206\u6790"]
    }), "\n", jsx(_components.p, {
      children: "\u6162\u67E5\u8BE2\u65E5\u5FD7\u662FMySQL\u63D0\u4F9B\u7684\u4E00\u79CD\u65E5\u5FD7\u8BB0\u5F55\u529F\u80FD\uFF0C\u80FD\u591F\u5E2E\u52A9\u6211\u4EEC\u627E\u51FA\u6267\u884C\u65F6\u95F4\u8D85\u8FC7\u9608\u503C\u7684\u67E5\u8BE2\u8BED\u53E5\uFF0C\u4ECE\u800C\u627E\u51FA\u53EF\u80FD\u5B58\u5728\u7684\u6027\u80FD\u74F6\u9888\u3002\u4EE5\u4E0B\u662F\u5982\u4F55\u8BBE\u7F6E\u548C\u5206\u6790\u6162\u67E5\u8BE2\u65E5\u5FD7\u7684\u6B65\u9AA4\uFF1A"
    }), "\n", jsxs(_components.h4, {
      id: "511-\u5982\u4F55\u5F00\u542F\u6162\u67E5\u8BE2\u65E5\u5FD7",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#511-\u5982\u4F55\u5F00\u542F\u6162\u67E5\u8BE2\u65E5\u5FD7",
        children: "#"
      }), "5.1.1 \u5982\u4F55\u5F00\u542F\u6162\u67E5\u8BE2\u65E5\u5FD7"]
    }), "\n", jsx(_components.p, {
      children: "\u5728MySQL\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u627E\u5230\u5E76\u4FEE\u6539\u4EE5\u4E0B\u53C2\u6570\uFF1A"
    }), "\n", jsxs(_components.div, {
      className: "language-sql",
      children: [jsx(_components.button, {
        className: "copy"
      }), jsx(_components.span, {
        className: "lang",
        children: "sql"
      }), jsx(_components.pre, {
        className: "shiki",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "slow_query_log "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "ON"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "long_query_time "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "1"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "log_output "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "FILE"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "slow_query_log_file "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "/"
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "var"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "/"
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "log"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "/"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "mysql"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "/"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "mysql"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "slow.log"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.p, {
      children: ["\u8FD9\u91CC\u6211\u4EEC\u8BBE\u7F6E", jsx(_components.code, {
        children: "long_query_time = 1"
      }), "\uFF0C\u8868\u793A\u67E5\u8BE2\u65F6\u95F4\u8D85\u8FC71\u79D2\u7684\u8BED\u53E5\u5C06\u88AB\u8BB0\u5F55\u5728\u6162\u67E5\u8BE2\u65E5\u5FD7\u4E2D\u3002"]
    }), "\n", jsxs(_components.h4, {
      id: "512-\u901A\u8FC7\u6162\u67E5\u8BE2\u65E5\u5FD7\u627E\u51FA\u6027\u80FD\u74F6\u9888",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#512-\u901A\u8FC7\u6162\u67E5\u8BE2\u65E5\u5FD7\u627E\u51FA\u6027\u80FD\u74F6\u9888",
        children: "#"
      }), "5.1.2 \u901A\u8FC7\u6162\u67E5\u8BE2\u65E5\u5FD7\u627E\u51FA\u6027\u80FD\u74F6\u9888"]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u5206\u6790\u6162\u67E5\u8BE2\u65E5\u5FD7\uFF0C\u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0\u54EA\u4E9BSQL\u8BED\u53E5\u6267\u884C\u8F83\u6162\uFF0C\u7136\u540E\u9488\u5BF9\u8FD9\u4E9B\u8BED\u53E5\u8FDB\u884C\u4F18\u5316\u3002\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0BSQL\u8BED\u53E5\u67E5\u770B\u6162\u67E5\u8BE2\u65E5\u5FD7\u4E2D\u7684\u5185\u5BB9\uFF1A"
    }), "\n", jsxs(_components.div, {
      className: "language-sql",
      children: [jsx(_components.button, {
        className: "copy"
      }), jsx(_components.span, {
        className: "lang",
        children: "sql"
      }), jsx(_components.pre, {
        className: "shiki",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "SELECT"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "FROM"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " mysql.slow_log;"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u6839\u636E\u6162\u67E5\u8BE2\u65E5\u5FD7\u4E2D\u7684\u4FE1\u606F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u627E\u51FA\u6F5C\u5728\u7684\u6027\u80FD\u95EE\u9898\uFF0C\u5E76\u9488\u5BF9\u6027\u5730\u8FDB\u884C\u4F18\u5316\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "52-explain\u5DE5\u5177\u89E3\u8BFB",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#52-explain\u5DE5\u5177\u89E3\u8BFB",
        children: "#"
      }), "5.2 Explain\u5DE5\u5177\u89E3\u8BFB"]
    }), "\n", jsx(_components.p, {
      children: "Explain\u662FMySQL\u63D0\u4F9B\u7684\u7528\u4E8E\u663E\u793A\u67E5\u8BE2\u6267\u884C\u8BA1\u5212\u7684\u5DE5\u5177\uFF0C\u901A\u8FC7\u5206\u6790\u6267\u884C\u8BA1\u5212\uFF0C\u6211\u4EEC\u53EF\u4EE5\u66F4\u597D\u5730\u4E86\u89E3\u67E5\u8BE2\u7684\u6267\u884C\u6D41\u7A0B\u548C\u6D89\u53CA\u7684\u7D22\u5F15\u60C5\u51B5\uFF0C\u4ECE\u800C\u8FDB\u884C\u4F18\u5316\u3002\u4EE5\u4E0B\u662FExplain\u5DE5\u5177\u7684\u4F7F\u7528\u65B9\u6CD5\u548C\u4E00\u4E9B\u5E38\u89C1\u8BEF\u533A\u7684\u89E3\u51B3\u65B9\u6848\uFF1A"
    }), "\n", jsxs(_components.h4, {
      id: "521-explain\u8F93\u51FA\u7684\u542B\u4E49",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#521-explain\u8F93\u51FA\u7684\u542B\u4E49",
        children: "#"
      }), "5.2.1 Explain\u8F93\u51FA\u7684\u542B\u4E49"]
    }), "\n", jsx(_components.p, {
      children: "Explain\u8F93\u51FA\u7684\u5404\u5217\u4EE3\u8868\u4E0D\u540C\u7684\u4FE1\u606F\uFF0C\u5982id\u3001select_type\u3001table\u3001type\u3001possible_keys\u3001key\u3001rows\u7B49\uFF0C\u901A\u8FC7\u8FD9\u4E9B\u4FE1\u606F\u53EF\u4EE5\u5206\u6790\u67E5\u8BE2\u8BED\u53E5\u7684\u6267\u884C\u8BA1\u5212\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "522-\u5982\u4F55\u4F7F\u7528explain\u8FDB\u884C\u67E5\u8BE2\u4F18\u5316",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#522-\u5982\u4F55\u4F7F\u7528explain\u8FDB\u884C\u67E5\u8BE2\u4F18\u5316",
        children: "#"
      }), "5.2.2 \u5982\u4F55\u4F7F\u7528Explain\u8FDB\u884C\u67E5\u8BE2\u4F18\u5316"]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7Explain\u53EF\u4EE5\u67E5\u770B\u67E5\u8BE2\u662F\u5426\u4F7F\u7528\u4E86\u7D22\u5F15\uFF0C\u4EE5\u53CA\u4F7F\u7528\u4E86\u54EA\u79CD\u7C7B\u578B\u7684\u7D22\u5F15\uFF0C\u901A\u8FC7\u5206\u6790\u6267\u884C\u8BA1\u5212\u53EF\u4EE5\u627E\u5230\u6F5C\u5728\u7684\u6027\u80FD\u74F6\u9888\uFF0C\u5E76\u8FDB\u884C\u76F8\u5E94\u4F18\u5316\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "523-explain\u89E3\u8BFB\u4E2D\u7684\u5E38\u89C1\u8BEF\u533A",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#523-explain\u89E3\u8BFB\u4E2D\u7684\u5E38\u89C1\u8BEF\u533A",
        children: "#"
      }), "5.2.3 Explain\u89E3\u8BFB\u4E2D\u7684\u5E38\u89C1\u8BEF\u533A"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u89E3\u8BFBExplain\u8F93\u51FA\u65F6\uFF0C\u5F88\u5BB9\u6613\u51FA\u73B0\u8BEF\u89E3\uFF0C\u6BD4\u5982\u8BA4\u4E3Arows\u503C\u8D8A\u5927\u6027\u80FD\u8D8A\u5DEE\uFF0C\u5B9E\u9645\u4E0A\u8FD9\u5E76\u4E0D\u4E00\u5B9A\u6210\u7ACB\uFF0C\u9700\u8981\u7ED3\u5408\u5176\u4ED6\u4FE1\u606F\u8FDB\u884C\u5206\u6790\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u6DF1\u5165\u7406\u89E3Explain\u7684\u8F93\u51FA\u548C\u6162\u67E5\u8BE2\u65E5\u5FD7\u5206\u6790\uFF0C\u6211\u4EEC\u53EF\u4EE5\u66F4\u597D\u5730\u4F18\u5316\u67E5\u8BE2\u8BED\u53E5\uFF0C\u63D0\u5347MySQL\u6570\u636E\u5E93\u7684\u6027\u80FD\u3002\u5728\u5B9E\u9645\u5E94\u7528\u4E2D\uFF0C\u7ED3\u5408\u5DE5\u5177\u5206\u6790\u548C\u81EA\u8EAB\u7ECF\u9A8C\uFF0C\u80FD\u591F\u66F4\u597D\u5730\u5E94\u5BF9\u5404\u79CD\u590D\u6742\u7684\u67E5\u8BE2\u573A\u666F\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "6-\u5B9E\u4F8B\u4E0E\u7ECF\u9A8C\u5206\u6790",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#6-\u5B9E\u4F8B\u4E0E\u7ECF\u9A8C\u5206\u6790",
        children: "#"
      }), "6. \u5B9E\u4F8B\u4E0E\u7ECF\u9A8C\u5206\u6790"]
    }), "\n", jsxs(_components.h3, {
      id: "61-\u5B9E\u4F8B\u5206\u6790\u4F18\u5316\u5177\u4F53\u67E5\u8BE2\u6848\u4F8B",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#61-\u5B9E\u4F8B\u5206\u6790\u4F18\u5316\u5177\u4F53\u67E5\u8BE2\u6848\u4F8B",
        children: "#"
      }), "6.1 \u5B9E\u4F8B\u5206\u6790\uFF1A\u4F18\u5316\u5177\u4F53\u67E5\u8BE2\u6848\u4F8B"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u5B9E\u9645\u5DE5\u4F5C\u4E2D\uFF0C\u7ECF\u5E38\u4F1A\u9047\u5230\u9700\u8981\u4F18\u5316\u7279\u5B9A\u67E5\u8BE2\u7684\u60C5\u51B5\u3002\u901A\u8FC7\u5177\u4F53\u6848\u4F8B\u5206\u6790\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6DF1\u5165\u4E86\u89E3\u4F18\u5316\u7684\u5177\u4F53\u6B65\u9AA4\u548C\u6548\u679C\uFF0C\u5E76\u901A\u8FC7\u5B9E\u4F8B\u5C55\u793A\u4F18\u5316\u524D\u540E\u7684\u5BF9\u6BD4\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "611-\u573A\u666F\u63CF\u8FF0",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#611-\u573A\u666F\u63CF\u8FF0",
        children: "#"
      }), "6.1.1 \u573A\u666F\u63CF\u8FF0"]
    }), "\n", jsx(_components.p, {
      children: "\u5047\u8BBE\u6211\u4EEC\u6709\u4E00\u4E2A\u7535\u5546\u5E73\u53F0\u7684\u8BA2\u5355\u8868\uFF0C\u7ED3\u6784\u5982\u4E0B\uFF1A"
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "\u8BA2\u5355ID"
          }), jsx(_components.th, {
            children: "\u7528\u6237ID"
          }), jsx(_components.th, {
            children: "\u8BA2\u5355\u91D1\u989D"
          }), jsx(_components.th, {
            children: "\u4E0B\u5355\u65F6\u95F4"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "1"
          }), jsx(_components.td, {
            children: "101"
          }), jsx(_components.td, {
            children: "99.9"
          }), jsx(_components.td, {
            children: "2022-01-01 10:00:00"
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "2"
          }), jsx(_components.td, {
            children: "102"
          }), jsx(_components.td, {
            children: "120.5"
          }), jsx(_components.td, {
            children: "2022-01-02 11:30:00"
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "3"
          }), jsx(_components.td, {
            children: "103"
          }), jsx(_components.td, {
            children: "50.0"
          }), jsx(_components.td, {
            children: "2022-01-03 09:45:00"
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "..."
          }), jsx(_components.td, {
            children: "..."
          }), jsx(_components.td, {
            children: "..."
          }), jsx(_components.td, {
            children: "..."
          })]
        })]
      })]
    }), "\n", jsx(_components.p, {
      children: "\u6211\u4EEC\u73B0\u5728\u9700\u8981\u67E5\u8BE2\u67D0\u4E2A\u7528\u6237\u7684\u8BA2\u5355\u91D1\u989D\u603B\u548C\uFF0C\u4EE5\u53CA\u8BE5\u7528\u6237\u7684\u8BA2\u5355\u6570\u91CF\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "612-\u4F18\u5316\u524D\u67E5\u8BE2\u8BED\u53E5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#612-\u4F18\u5316\u524D\u67E5\u8BE2\u8BED\u53E5",
        children: "#"
      }), "6.1.2 \u4F18\u5316\u524D\u67E5\u8BE2\u8BED\u53E5"]
    }), "\n", jsx(_components.p, {
      children: "\u9996\u5148\uFF0C\u6211\u4EEC\u5148\u6765\u770B\u4E00\u4E0B\u672A\u7ECF\u4F18\u5316\u7684\u67E5\u8BE2\u8BED\u53E5\uFF0C\u8BE5\u8BED\u53E5\u4F7F\u7528\u4E86\u5B50\u67E5\u8BE2\u7684\u65B9\u5F0F\u5B9E\u73B0\u529F\u80FD\uFF1A"
    }), "\n", jsxs(_components.div, {
      className: "language-sql",
      children: [jsx(_components.button, {
        className: "copy"
      }), jsx(_components.span, {
        className: "lang",
        children: "sql"
      }), jsx(_components.pre, {
        className: "shiki",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "SELECT"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    u.user_id,"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    ("
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "SELECT"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "            "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "SUM"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "(o.order_amount) "
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "FROM"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "            orders o "
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "WHERE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "            o.user_id "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " u.user_id"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    ) "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "AS"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " total_amount,"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    ("
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "SELECT"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "            "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "COUNT"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "(o.order_id) "
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "FROM"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "            orders o "
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "WHERE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "            o.user_id "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " u.user_id"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    ) "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "AS"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " order_count"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "FROM"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    users u"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "WHERE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    u.user_id "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "101"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h4, {
      id: "613-\u4F18\u5316\u540E\u67E5\u8BE2\u8BED\u53E5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#613-\u4F18\u5316\u540E\u67E5\u8BE2\u8BED\u53E5",
        children: "#"
      }), "6.1.3 \u4F18\u5316\u540E\u67E5\u8BE2\u8BED\u53E5"]
    }), "\n", jsx(_components.p, {
      children: "\u7ECF\u8FC7\u4F18\u5316\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u8054\u8868\u67E5\u8BE2\u7684\u65B9\u5F0F\u907F\u514D\u591A\u6B21\u5B50\u67E5\u8BE2\uFF0C\u63D0\u9AD8\u67E5\u8BE2\u6548\u7387\u3002"
    }), "\n", jsxs(_components.div, {
      className: "language-sql",
      children: [jsx(_components.button, {
        className: "copy"
      }), jsx(_components.span, {
        className: "lang",
        children: "sql"
      }), jsx(_components.pre, {
        className: "shiki",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "SELECT"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    u.user_id,"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "SUM"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "(o.order_amount) "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "AS"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " total_amount,"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "COUNT"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "(o.order_id) "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "AS"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " order_count"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "FROM"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    users u"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "JOIN"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    orders o "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "ON"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " u.user_id "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " o.user_id"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "WHERE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    u.user_id "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "101"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "GROUP BY"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    u.user_id;"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h4, {
      id: "614-\u4EE3\u7801\u903B\u8F91\u8BF4\u660E",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#614-\u4EE3\u7801\u903B\u8F91\u8BF4\u660E",
        children: "#"
      }), "6.1.4 \u4EE3\u7801\u903B\u8F91\u8BF4\u660E"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u4F18\u5316\u524D\u7684\u67E5\u8BE2\u8BED\u53E5\u4E2D\uFF0C\u901A\u8FC7\u4E24\u6B21\u5B50\u67E5\u8BE2\u5206\u522B\u8BA1\u7B97\u4E86\u7528\u6237\u7684\u8BA2\u5355\u91D1\u989D\u603B\u548C\u548C\u8BA2\u5355\u6570\u91CF\uFF0C\u5BFC\u81F4\u4E86\u91CD\u590D\u8BFB\u53D6\u6570\u636E\u548C\u4F4E\u6548\u7387\u7684\u95EE\u9898\u3002\u800C\u5728\u4F18\u5316\u540E\u7684\u67E5\u8BE2\u8BED\u53E5\u4E2D\uFF0C\u901A\u8FC7\u8054\u8868\u67E5\u8BE2\u7684\u65B9\u5F0F\u5C06\u4E24\u6B21\u67E5\u8BE2\u5408\u5E76\u4E3A\u4E00\u6B21\uFF0C\u907F\u514D\u4E86\u91CD\u590D\u67E5\u8BE2\uFF0C\u63D0\u5347\u4E86\u67E5\u8BE2\u6548\u7387\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "615-\u4EE3\u7801\u8FD0\u884C\u7ED3\u679C",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#615-\u4EE3\u7801\u8FD0\u884C\u7ED3\u679C",
        children: "#"
      }), "6.1.5 \u4EE3\u7801\u8FD0\u884C\u7ED3\u679C"]
    }), "\n", jsx(_components.p, {
      children: "\u8FD0\u884C\u4F18\u5316\u524D\u67E5\u8BE2\u8BED\u53E5\u548C\u4F18\u5316\u540E\u67E5\u8BE2\u8BED\u53E5\u540E\uFF0C\u53EF\u4EE5\u5BF9\u6BD4\u67E5\u8BE2\u65F6\u95F4\u548C\u6027\u80FD\u7684\u5DEE\u5F02\uFF0C\u4ECE\u800C\u9A8C\u8BC1\u4F18\u5316\u6548\u679C\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u4EE5\u4E0A\u5B9E\u4F8B\u5206\u6790\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6E05\u6670\u5730\u770B\u5230\u4F18\u5316\u67E5\u8BE2\u7684\u91CD\u8981\u6027\u548C\u4F18\u5316\u65B9\u6CD5\uFF0C\u5E0C\u6728\u80FD\u591F\u5E2E\u52A9\u8BFB\u8005\u66F4\u597D\u5730\u7406\u89E3MySQL\u67E5\u8BE2\u4F18\u5316\u7684\u5B9E\u9645\u64CD\u4F5C\u8FC7\u7A0B\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "62-\u7ECF\u9A8C\u603B\u7ED3mysql\u67E5\u8BE2\u4F18\u5316\u5B9E\u8DF5\u4E2D\u7684\u6CE8\u610F\u4E8B\u9879",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#62-\u7ECF\u9A8C\u603B\u7ED3mysql\u67E5\u8BE2\u4F18\u5316\u5B9E\u8DF5\u4E2D\u7684\u6CE8\u610F\u4E8B\u9879",
        children: "#"
      }), "6.2 \u7ECF\u9A8C\u603B\u7ED3\uFF1AMySQL\u67E5\u8BE2\u4F18\u5316\u5B9E\u8DF5\u4E2D\u7684\u6CE8\u610F\u4E8B\u9879"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u5B9E\u8DF5\u8FC7\u7A0B\u4E2D\uFF0C\u9664\u4E86\u5177\u4F53\u7684\u67E5\u8BE2\u6848\u4F8B\uFF0C\u8FD8\u9700\u8981\u603B\u7ED3\u4E00\u4E9B\u7ECF\u9A8C\u548C\u6CE8\u610F\u4E8B\u9879\uFF0C\u4EE5\u4FBF\u5728\u4ECA\u540E\u7684\u4F18\u5316\u8FC7\u7A0B\u4E2D\u80FD\u591F\u66F4\u52A0\u5F97\u5FC3\u5E94\u624B\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "621-\u5145\u5206\u5229\u7528\u7D22\u5F15",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#621-\u5145\u5206\u5229\u7528\u7D22\u5F15",
        children: "#"
      }), "6.2.1 \u5145\u5206\u5229\u7528\u7D22\u5F15"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u8FDB\u884C\u67E5\u8BE2\u4F18\u5316\u65F6\uFF0C\u7D22\u5F15\u662F\u975E\u5E38\u91CD\u8981\u7684\u3002\u4E00\u5B9A\u8981\u5145\u5206\u5229\u7528\u7D22\u5F15\u6765\u52A0\u5FEB\u67E5\u8BE2\u7684\u901F\u5EA6\uFF0C\u7279\u522B\u662F\u5BF9\u4E8E\u7ECF\u5E38\u88AB\u67E5\u8BE2\u7684\u5217\u52A0\u4E0A\u7D22\u5F15\uFF0C\u907F\u514D\u5168\u8868\u626B\u63CF\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "622-\u907F\u514D\u8FC7\u591A\u7684\u5173\u8054",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#622-\u907F\u514D\u8FC7\u591A\u7684\u5173\u8054",
        children: "#"
      }), "6.2.2 \u907F\u514D\u8FC7\u591A\u7684\u5173\u8054"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u8BBE\u8BA1\u6570\u636E\u5E93\u8868\u7ED3\u6784\u65F6\uFF0C\u8981\u6CE8\u610F\u907F\u514D\u8FC7\u591A\u7684\u8868\u5173\u8054\u3002\u8FC7\u591A\u7684\u5173\u8054\u4F1A\u5BFC\u81F4\u67E5\u8BE2\u53D8\u6162\uFF0C\u5C3D\u91CF\u5C06\u5173\u8054\u5B57\u6BB5\u8BBE\u8BA1\u4E3A\u7D22\u5F15\uFF0C\u51CF\u5C11\u5173\u8054\u5E26\u6765\u7684\u6027\u80FD\u635F\u8017\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "623-\u5B9A\u671F\u4F18\u5316\u6570\u636E\u5E93",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#623-\u5B9A\u671F\u4F18\u5316\u6570\u636E\u5E93",
        children: "#"
      }), "6.2.3 \u5B9A\u671F\u4F18\u5316\u6570\u636E\u5E93"]
    }), "\n", jsx(_components.p, {
      children: "\u5B9A\u671F\u5BF9\u6570\u636E\u5E93\u8FDB\u884C\u4F18\u5316\u548C\u7EF4\u62A4\uFF0C\u5305\u62EC\u7D22\u5F15\u91CD\u5EFA\u3001\u7EDF\u8BA1\u4FE1\u606F\u66F4\u65B0\u7B49\uFF0C\u4EE5\u4FDD\u8BC1\u6570\u636E\u5E93\u7684\u9AD8\u6027\u80FD\u548C\u7A33\u5B9A\u6027\uFF0C\u51CF\u5C11\u67E5\u8BE2\u7684\u65F6\u95F4\u6D88\u8017\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "63-\u76F2\u70B9\u5206\u6790\u5E38\u89C1\u7684mysql\u67E5\u8BE2\u4F18\u5316\u8BEF\u533A",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#63-\u76F2\u70B9\u5206\u6790\u5E38\u89C1\u7684mysql\u67E5\u8BE2\u4F18\u5316\u8BEF\u533A",
        children: "#"
      }), "6.3 \u76F2\u70B9\u5206\u6790\uFF1A\u5E38\u89C1\u7684MySQL\u67E5\u8BE2\u4F18\u5316\u8BEF\u533A"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u5B9E\u9645\u7684\u67E5\u8BE2\u4F18\u5316\u4E2D\uFF0C\u6709\u4E00\u4E9B\u5E38\u89C1\u7684\u8BEF\u533A\u9700\u8981\u5F15\u8D77\u6CE8\u610F\uFF0C\u907F\u514D\u8D70\u8FDB\u8BEF\u533A\uFF0C\u6D6A\u8D39\u65F6\u95F4\u548C\u7CBE\u529B\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "631-\u8FC7\u5EA6\u7D22\u5F15",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#631-\u8FC7\u5EA6\u7D22\u5F15",
        children: "#"
      }), "6.3.1 \u8FC7\u5EA6\u7D22\u5F15"]
    }), "\n", jsx(_components.p, {
      children: "\u6709\u65F6\u5019\u4E3A\u4E86\u63D0\u5347\u67E5\u8BE2\u901F\u5EA6\uFF0C\u4F1A\u51FA\u73B0\u8FC7\u5EA6\u6DFB\u52A0\u7D22\u5F15\u7684\u60C5\u51B5\u3002\u8FC7\u591A\u7684\u7D22\u5F15\u4E0D\u4EC5\u4F1A\u589E\u52A0\u5199\u64CD\u4F5C\u7684\u65F6\u95F4\u5F00\u9500\uFF0C\u8FD8\u53EF\u80FD\u5BFC\u81F4\u67E5\u8BE2\u6027\u80FD\u53CD\u800C\u964D\u4F4E\uFF0C\u9700\u8981\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u5408\u7406\u6DFB\u52A0\u7D22\u5F15\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "632-\u5FFD\u7565sql\u8BED\u53E5\u7684\u6027\u80FD",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#632-\u5FFD\u7565sql\u8BED\u53E5\u7684\u6027\u80FD",
        children: "#"
      }), "6.3.2 \u5FFD\u7565SQL\u8BED\u53E5\u7684\u6027\u80FD"]
    }), "\n", jsx(_components.p, {
      children: "\u6709\u4E9B\u5F00\u53D1\u8005\u53EF\u80FD\u53EA\u5173\u6CE8\u529F\u80FD\u5B9E\u73B0\uFF0C\u5BF9SQL\u8BED\u53E5\u7684\u6027\u80FD\u5374\u5FFD\u89C6\u4E86\u3002\u4E00\u4E2A\u9AD8\u6548\u7684SQL\u8BED\u53E5\u5F80\u5F80\u80FD\u591F\u6781\u5927\u63D0\u5347\u6574\u4E2A\u7CFB\u7EDF\u7684\u6027\u80FD\uFF0C\u56E0\u6B64\u5728\u7F16\u5199\u548C\u4F18\u5316SQL\u8BED\u53E5\u65F6\u4E00\u5B9A\u8981\u91CD\u89C6\u6027\u80FD\u95EE\u9898\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "633-\u7F3A\u4E4F\u6574\u4F53\u89C4\u5212",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#633-\u7F3A\u4E4F\u6574\u4F53\u89C4\u5212",
        children: "#"
      }), "6.3.3 \u7F3A\u4E4F\u6574\u4F53\u89C4\u5212"]
    }), "\n", jsx(_components.p, {
      children: "\u6709\u65F6\u5019\u9488\u5BF9\u5355\u4E00\u67E5\u8BE2\u8FDB\u884C\u4F18\u5316\u53EF\u80FD\u5E76\u4E0D\u80FD\u5E26\u6765\u663E\u8457\u7684\u6027\u80FD\u63D0\u5347\u3002\u7F3A\u4E4F\u6574\u4F53\u7684\u6570\u636E\u5E93\u7ED3\u6784\u89C4\u5212\u548C\u4F18\u5316\u53EF\u80FD\u9650\u5236\u4E86\u6574\u4F53\u6027\u80FD\u7684\u63D0\u5347\uFF0C\u56E0\u6B64\u5728\u8FDB\u884C\u67E5\u8BE2\u4F18\u5316\u65F6\u8981\u6709\u5168\u5C40\u89C2\u5FF5\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u5728MySQL\u67E5\u8BE2\u4F18\u5316\u5B9E\u8DF5\u4E2D\u8981\u6CE8\u610F\u907F\u514D\u8FD9\u4E9B\u5E38\u89C1\u7684\u8BEF\u533A\uFF0C\u4ECE\u800C\u66F4\u597D\u5730\u63D0\u5347\u67E5\u8BE2\u6027\u80FD\u548C\u6548\u7387\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u8FD9\u4E00\u7AE0\u8282\u901A\u8FC7\u5B9E\u4F8B\u5206\u6790\u3001\u7ECF\u9A8C\u603B\u7ED3\u548C\u76F2\u70B9\u5206\u6790\uFF0C\u5E2E\u52A9\u8BFB\u8005\u66F4\u6DF1\u5165\u5730\u4E86\u89E3MySQL\u67E5\u8BE2\u4F18\u5316\u7684\u5B9E\u8DF5\u65B9\u6CD5\u548C\u6CE8\u610F\u4E8B\u9879\uFF0C\u8FBE\u5230\u63D0\u5347\u67E5\u8BE2\u6027\u80FD\u7684\u76EE\u7684\u3002"
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, Object.assign({}, props, {
    children: jsx(_createMdxContent, props)
  })) : _createMdxContent(props);
}
export {
  MDXContent as default,
  frontmatter,
  title,
  toc
};

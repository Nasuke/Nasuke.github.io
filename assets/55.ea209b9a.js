import { jsx, jsxs, Fragment } from "react/jsx-runtime";
const frontmatter = void 0;
const toc = [{
  "id": "21-\u6570\u636E\u7C7B\u578B\u9009\u62E9\u4E0E\u4F18\u5316",
  "text": "2.1 \u6570\u636E\u7C7B\u578B\u9009\u62E9\u4E0E\u4F18\u5316",
  "depth": 3
}, {
  "id": "211-\u6574\u6570\u7C7B\u578B\u7684\u9009\u53D6",
  "text": "2.1.1 \u6574\u6570\u7C7B\u578B\u7684\u9009\u53D6",
  "depth": 4
}, {
  "id": "212-\u6D6E\u70B9\u6570\u7C7B\u578B\u7684\u5408\u7406\u8FD0\u7528",
  "text": "2.1.2 \u6D6E\u70B9\u6570\u7C7B\u578B\u7684\u5408\u7406\u8FD0\u7528",
  "depth": 4
}, {
  "id": "213-\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u5904\u7406",
  "text": "2.1.3 \u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u5904\u7406",
  "depth": 4
}, {
  "id": "22-\u4E3B\u952E\u4E0E\u7D22\u5F15\u8BBE\u8BA1",
  "text": "2.2 \u4E3B\u952E\u4E0E\u7D22\u5F15\u8BBE\u8BA1",
  "depth": 3
}, {
  "id": "221-\u4E3B\u952E\u7684\u9009\u62E9\u4E0E\u552F\u4E00\u6027",
  "text": "2.2.1 \u4E3B\u952E\u7684\u9009\u62E9\u4E0E\u552F\u4E00\u6027",
  "depth": 4
}, {
  "id": "222-\u7D22\u5F15\u7684\u5EFA\u7ACB\u53CA\u5F71\u54CD",
  "text": "2.2.2 \u7D22\u5F15\u7684\u5EFA\u7ACB\u53CA\u5F71\u54CD",
  "depth": 4
}, {
  "id": "223-\u5408\u9002\u7684\u7D22\u5F15\u7C7B\u578B\u9009\u62E9",
  "text": "2.2.3 \u5408\u9002\u7684\u7D22\u5F15\u7C7B\u578B\u9009\u62E9",
  "depth": 4
}, {
  "id": "31-\u67E5\u8BE2\u8BED\u53E5\u4F18\u5316",
  "text": "3.1 \u67E5\u8BE2\u8BED\u53E5\u4F18\u5316",
  "depth": 3
}, {
  "id": "311-where\u6761\u4EF6\u7684\u5199\u6CD5",
  "text": "3.1.1 WHERE\u6761\u4EF6\u7684\u5199\u6CD5",
  "depth": 4
}, {
  "id": "312-\u907F\u514D\u4F7F\u7528-select-",
  "text": "3.1.2 \u907F\u514D\u4F7F\u7528 SELECT *",
  "depth": 4
}, {
  "id": "313-join\u4F7F\u7528\u6280\u5DE7",
  "text": "3.1.3 JOIN\u4F7F\u7528\u6280\u5DE7",
  "depth": 4
}, {
  "id": "32-\u7D22\u5F15\u4F18\u5316",
  "text": "3.2 \u7D22\u5F15\u4F18\u5316",
  "depth": 3
}, {
  "id": "321-\u4E86\u89E3mysql\u7D22\u5F15\u7C7B\u578B",
  "text": "3.2.1 \u4E86\u89E3MySQL\u7D22\u5F15\u7C7B\u578B",
  "depth": 4
}, {
  "id": "322-\u7D22\u5F15\u7684\u521B\u5EFA\u4E0E\u7EF4\u62A4",
  "text": "3.2.2 \u7D22\u5F15\u7684\u521B\u5EFA\u4E0E\u7EF4\u62A4",
  "depth": 4
}, {
  "id": "323-\u7D22\u5F15\u8986\u76D6\u4F18\u5316",
  "text": "3.2.3 \u7D22\u5F15\u8986\u76D6\u4F18\u5316",
  "depth": 4
}, {
  "id": "33-\u6570\u636E\u91CF\u5927\u65F6\u7684\u4F18\u5316",
  "text": "3.3 \u6570\u636E\u91CF\u5927\u65F6\u7684\u4F18\u5316",
  "depth": 3
}, {
  "id": "331-\u5206\u533A\u8868\u7684\u4F7F\u7528",
  "text": "3.3.1 \u5206\u533A\u8868\u7684\u4F7F\u7528",
  "depth": 4
}, {
  "id": "332-\u5782\u76F4\u4E0E\u6C34\u5E73\u62C6\u5206",
  "text": "3.3.2 \u5782\u76F4\u4E0E\u6C34\u5E73\u62C6\u5206",
  "depth": 4
}, {
  "id": "411-\u5FFD\u89C6\u6570\u636E\u5B8C\u6574\u6027",
  "text": "4.1.1 \u5FFD\u89C6\u6570\u636E\u5B8C\u6574\u6027",
  "depth": 4
}, {
  "id": "412-\u7EA6\u675F\u6761\u4EF6\u7684\u5236\u5B9A",
  "text": "4.1.2 \u7EA6\u675F\u6761\u4EF6\u7684\u5236\u5B9A",
  "depth": 4
}, {
  "id": "\u6570\u636E\u8868\u683C",
  "text": "\u6570\u636E\u8868\u683C",
  "depth": 3
}, {
  "id": "mermaid\u6D41\u7A0B\u56FE",
  "text": "mermaid\u6D41\u7A0B\u56FE",
  "depth": 3
}, {
  "id": "51-\u573A\u666F\u4ECB\u7ECD",
  "text": "5.1 \u573A\u666F\u4ECB\u7ECD",
  "depth": 3
}, {
  "id": "52-\u6570\u636E\u5E93\u8868\u8BBE\u8BA1",
  "text": "5.2 \u6570\u636E\u5E93\u8868\u8BBE\u8BA1",
  "depth": 3
}, {
  "id": "521-\u7528\u6237\u4FE1\u606F\u8868users",
  "text": "5.2.1 \u7528\u6237\u4FE1\u606F\u8868\uFF08users\uFF09",
  "depth": 4
}, {
  "id": "522-\u8BA2\u5355\u4FE1\u606F\u8868orders",
  "text": "5.2.2 \u8BA2\u5355\u4FE1\u606F\u8868\uFF08orders\uFF09",
  "depth": 4
}, {
  "id": "523-\u5546\u54C1\u4FE1\u606F\u8868products",
  "text": "5.2.3 \u5546\u54C1\u4FE1\u606F\u8868\uFF08products\uFF09",
  "depth": 4
}, {
  "id": "53-\u6570\u636E\u5E93\u8868\u5173\u7CFB\u5206\u6790",
  "text": "5.3 \u6570\u636E\u5E93\u8868\u5173\u7CFB\u5206\u6790",
  "depth": 3
}, {
  "id": "54-\u6570\u636E\u5E93\u64CD\u4F5C\u793A\u4F8B",
  "text": "5.4 \u6570\u636E\u5E93\u64CD\u4F5C\u793A\u4F8B",
  "depth": 3
}, {
  "id": "\u8868\u683C\u5C55\u793A",
  "text": "\u8868\u683C\u5C55\u793A",
  "depth": 3
}, {
  "id": "\u603B\u7ED3",
  "text": "\u603B\u7ED3",
  "depth": 3
}, {
  "id": "\u4F18\u5316\u6848\u4F8B\u80CC\u666F",
  "text": "\u4F18\u5316\u6848\u4F8B\u80CC\u666F",
  "depth": 3
}, {
  "id": "\u4F18\u5316\u6848\u4F8B\u6B65\u9AA4",
  "text": "\u4F18\u5316\u6848\u4F8B\u6B65\u9AA4",
  "depth": 3
}, {
  "id": "1-\u4F18\u5316\u8BA2\u5355\u8868order_table",
  "text": "1. \u4F18\u5316\u8BA2\u5355\u8868(order_table)",
  "depth": 4
}, {
  "id": "2-\u4F18\u5316\u5546\u54C1\u8868product_table",
  "text": "2. \u4F18\u5316\u5546\u54C1\u8868(product_table)",
  "depth": 4
}, {
  "id": "\u4F18\u5316\u6848\u4F8B\u603B\u7ED3",
  "text": "\u4F18\u5316\u6848\u4F8B\u603B\u7ED3",
  "depth": 3
}];
const title = "6. \u4F18\u5316\u6848\u4F8B\u63A2\u8BA8\u4E0E\u603B\u7ED3";
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    p: "p",
    h3: "h3",
    h4: "h4",
    div: "div",
    button: "button",
    span: "span",
    pre: "pre",
    code: "code",
    ul: "ul",
    li: "li",
    table: "table",
    thead: "thead",
    tr: "tr",
    th: "th",
    tbody: "tbody",
    td: "td",
    svg: "svg",
    style: "style",
    g: "g",
    marker: "marker",
    path: "path",
    circle: "circle",
    foreignObject: "foreignObject",
    rect: "rect"
  }, props.components);
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "1-mysql\u8868\u7ED3\u6784\u8BBE\u8BA1\u7684\u91CD\u8981\u6027",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#1-mysql\u8868\u7ED3\u6784\u8BBE\u8BA1\u7684\u91CD\u8981\u6027",
        children: "#"
      }), "1. MySQL\u8868\u7ED3\u6784\u8BBE\u8BA1\u7684\u91CD\u8981\u6027"]
    }), "\n", jsx(_components.p, {
      children: "\u5728MySQL\u6570\u636E\u5E93\u4E2D\uFF0C\u826F\u597D\u7684\u8868\u7ED3\u6784\u8BBE\u8BA1\u662F\u786E\u4FDD\u6570\u636E\u5E93\u9AD8\u6548\u8FD0\u884C\u7684\u57FA\u7840\u3002\u5408\u7406\u7684\u8868\u7ED3\u6784\u8BBE\u8BA1\u53EF\u4EE5\u63D0\u9AD8\u67E5\u8BE2\u6548\u7387\uFF0C\u51CF\u5C11\u6570\u636E\u5197\u4F59\uFF0C\u786E\u4FDD\u6570\u636E\u5B8C\u6574\u6027\u3002\u4E00\u4E2A\u597D\u7684\u8868\u7ED3\u6784\u8BBE\u8BA1\u4E0D\u4EC5\u80FD\u591F\u63D0\u9AD8\u6570\u636E\u5E93\u6027\u80FD\uFF0C\u8FD8\u80FD\u591F\u964D\u4F4E\u7CFB\u7EDF\u6545\u969C\u7684\u98CE\u9669\u3002\u56E0\u6B64\uFF0C\u5728\u8BBE\u8BA1MySQL\u8868\u7ED3\u6784\u65F6\uFF0C\u9700\u8981\u8003\u8651\u6570\u636E\u7C7B\u578B\u9009\u62E9\u3001\u4E3B\u952E\u4E0E\u7D22\u5F15\u8BBE\u8BA1\u3001\u89C4\u8303\u5316\u4E0E\u53CD\u89C4\u8303\u5316\u7B49\u56E0\u7D20\uFF0C\u4EE5\u786E\u4FDD\u6570\u636E\u5E93\u7684\u7A33\u5B9A\u6027\u548C\u9AD8\u6548\u6027\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "2-mysql\u8868\u7ED3\u6784\u8BBE\u8BA1\u8981\u70B9\u89E3\u6790",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#2-mysql\u8868\u7ED3\u6784\u8BBE\u8BA1\u8981\u70B9\u89E3\u6790",
        children: "#"
      }), "2. MySQL\u8868\u7ED3\u6784\u8BBE\u8BA1\u8981\u70B9\u89E3\u6790"]
    }), "\n", jsxs(_components.h3, {
      id: "21-\u6570\u636E\u7C7B\u578B\u9009\u62E9\u4E0E\u4F18\u5316",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#21-\u6570\u636E\u7C7B\u578B\u9009\u62E9\u4E0E\u4F18\u5316",
        children: "#"
      }), "2.1 \u6570\u636E\u7C7B\u578B\u9009\u62E9\u4E0E\u4F18\u5316"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u8BBE\u8BA1MySQL\u8868\u7ED3\u6784\u65F6\uFF0C\u9009\u62E9\u5408\u9002\u7684\u6570\u636E\u7C7B\u578B\u5BF9\u6570\u636E\u5E93\u6027\u80FD\u548C\u5B58\u50A8\u7A7A\u95F4\u90FD\u81F3\u5173\u91CD\u8981\u3002\u4E0B\u9762\u5C06\u5206\u522B\u4ECB\u7ECD\u6574\u6570\u7C7B\u578B\u3001\u6D6E\u70B9\u6570\u7C7B\u578B\u548C\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u9009\u62E9\u4E0E\u4F18\u5316\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "211-\u6574\u6570\u7C7B\u578B\u7684\u9009\u53D6",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#211-\u6574\u6570\u7C7B\u578B\u7684\u9009\u53D6",
        children: "#"
      }), "2.1.1 \u6574\u6570\u7C7B\u578B\u7684\u9009\u53D6"]
    }), "\n", jsx(_components.p, {
      children: "\u5728MySQL\u4E2D\uFF0C\u6574\u6570\u7C7B\u578B\u662F\u5E38\u7528\u7684\u6570\u636E\u7C7B\u578B\u4E4B\u4E00\uFF0C\u4E0D\u540C\u7684\u6574\u6570\u7C7B\u578B\u5728\u5B58\u50A8\u8303\u56F4\u548C\u5B58\u50A8\u7A7A\u95F4\u4E0A\u6709\u6240\u4E0D\u540C\u3002\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u6839\u636E\u5B9E\u9645\u9700\u6C42\u9009\u62E9\u5408\u9002\u7684\u6574\u6570\u7C7B\u578B\u53EF\u4EE5\u51CF\u5C11\u5B58\u50A8\u7A7A\u95F4\u7684\u5360\u7528\uFF0C\u52A0\u5FEB\u6570\u636E\u68C0\u7D22\u901F\u5EA6\u3002"
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
              children: "TABLE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " users ("
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
              children: "user_id"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "INT"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ",  "
            }), jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "-- \u4F7F\u7528INT\u7C7B\u578B\u6765\u5B58\u50A8\u7528\u6237ID"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    ..."
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ");"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u6574\u6570\u7C7B\u578B\u5305\u62ECTINYINT\u3001SMALLINT\u3001INT\u548CBIGINT\u7B49\uFF0C\u6839\u636E\u6570\u636E\u8303\u56F4\u7684\u5927\u5C0F\u9009\u62E9\u9002\u5F53\u7684\u6574\u6570\u7C7B\u578B\uFF0C\u907F\u514D\u8FC7\u5EA6\u4F7F\u7528\u5927\u5BB9\u91CF\u7684\u6574\u6570\u7C7B\u578B\u6D6A\u8D39\u7A7A\u95F4\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "212-\u6D6E\u70B9\u6570\u7C7B\u578B\u7684\u5408\u7406\u8FD0\u7528",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#212-\u6D6E\u70B9\u6570\u7C7B\u578B\u7684\u5408\u7406\u8FD0\u7528",
        children: "#"
      }), "2.1.2 \u6D6E\u70B9\u6570\u7C7B\u578B\u7684\u5408\u7406\u8FD0\u7528"]
    }), "\n", jsx(_components.p, {
      children: "\u6D6E\u70B9\u6570\u7C7B\u578B\u7528\u4E8E\u5B58\u50A8\u5C0F\u6570\uFF0C\u5305\u62ECFLOAT\u548CDOUBLE\u4E24\u79CD\u5E38\u89C1\u7C7B\u578B\u3002\u5728\u8BBE\u8BA1\u8868\u7ED3\u6784\u65F6\uFF0C\u9700\u8981\u8003\u8651\u5C0F\u6570\u4F4D\u6570\u7684\u7CBE\u5EA6\uFF0C\u907F\u514D\u5B58\u50A8\u8FC7\u591A\u7684\u5C0F\u6570\u4F4D\u5BFC\u81F4\u6570\u636E\u7CBE\u5EA6\u4E22\u5931\u3002"
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
              children: "TABLE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " products ("
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    price "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "DECIMAL"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "10"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "2"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "),  "
            }), jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "-- \u4F7F\u7528DECIMAL\u7C7B\u578B\u5B58\u50A8\u4EF7\u683C\uFF0C\u4FDD\u7559\u4E24\u4F4D\u5C0F\u6570"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    ..."
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ");"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u6839\u636E\u5B9E\u9645\u9700\u8981\u9009\u62E9\u5408\u9002\u7684\u6D6E\u70B9\u6570\u7C7B\u578B\uFF0C\u5E76\u8BBE\u7F6E\u5408\u7406\u7684\u7CBE\u5EA6\uFF0C\u4EE5\u786E\u4FDD\u6570\u636E\u51C6\u786E\u6027\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "213-\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u5904\u7406",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#213-\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u5904\u7406",
        children: "#"
      }), "2.1.3 \u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u5904\u7406"]
    }), "\n", jsx(_components.p, {
      children: "\u5B57\u7B26\u4E32\u7C7B\u578B\u5728MySQL\u4E2D\u6709\u591A\u79CD\u9009\u62E9\uFF0C\u5305\u62ECCHAR\u3001VARCHAR\u548CTEXT\u7B49\u3002\u5728\u9009\u62E9\u5B57\u7B26\u4E32\u7C7B\u578B\u65F6\uFF0C\u9700\u8981\u8003\u8651\u5B57\u6BB5\u957F\u5EA6\u548C\u5B58\u50A8\u65B9\u5F0F\uFF0C\u907F\u514D\u8FC7\u5EA6\u4F7F\u7528\u5360\u7528\u7A7A\u95F4\u3002"
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
              children: "TABLE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " articles ("
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    title "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "VARCHAR"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "100"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "),  "
            }), jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "-- \u4F7F\u7528VARCHAR\u5B58\u50A8\u6587\u7AE0\u6807\u9898"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    content "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "TEXT"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ",        "
            }), jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "-- \u4F7F\u7528TEXT\u5B58\u50A8\u6587\u7AE0\u5185\u5BB9"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    ..."
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ");"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u5408\u7406\u9009\u62E9\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u5E76\u6839\u636E\u5B9E\u9645\u5185\u5BB9\u957F\u5EA6\u8BBE\u5B9A\u5408\u9002\u7684\u5B57\u6BB5\u957F\u5EA6\uFF0C\u53EF\u4EE5\u63D0\u9AD8\u6570\u636E\u5E93\u6027\u80FD\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "22-\u4E3B\u952E\u4E0E\u7D22\u5F15\u8BBE\u8BA1",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#22-\u4E3B\u952E\u4E0E\u7D22\u5F15\u8BBE\u8BA1",
        children: "#"
      }), "2.2 \u4E3B\u952E\u4E0E\u7D22\u5F15\u8BBE\u8BA1"]
    }), "\n", jsx(_components.p, {
      children: "\u4E3B\u952E\u548C\u7D22\u5F15\u662F\u6570\u636E\u5E93\u4E2D\u7528\u4E8E\u4F18\u5316\u67E5\u8BE2\u7684\u91CD\u8981\u8BBE\u8BA1\u5143\u7D20\u3002\u6B63\u786E\u9009\u62E9\u4E3B\u952E\u548C\u5EFA\u7ACB\u9002\u5F53\u7684\u7D22\u5F15\u53EF\u4EE5\u63D0\u9AD8\u67E5\u8BE2\u6548\u7387\u5E76\u4FDD\u8BC1\u6570\u636E\u5B8C\u6574\u6027\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "221-\u4E3B\u952E\u7684\u9009\u62E9\u4E0E\u552F\u4E00\u6027",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#221-\u4E3B\u952E\u7684\u9009\u62E9\u4E0E\u552F\u4E00\u6027",
        children: "#"
      }), "2.2.1 \u4E3B\u952E\u7684\u9009\u62E9\u4E0E\u552F\u4E00\u6027"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u8BBE\u8BA1\u8868\u7ED3\u6784\u65F6\uFF0C\u9009\u62E9\u5408\u9002\u7684\u4E3B\u952E\u5BF9\u4E8E\u6570\u636E\u7684\u552F\u4E00\u6807\u8BC6\u548C\u7D22\u5F15\u6548\u7387\u81F3\u5173\u91CD\u8981\u3002\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u4F7F\u7528\u81EA\u589E\u4E3B\u952E\u53EF\u4EE5\u6709\u6548\u63D0\u9AD8\u67E5\u8BE2\u6548\u7387\u3002"
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
              children: "TABLE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " orders ("
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    order_id "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "INT"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "PRIMARY"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "KEY"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " AUTO_INCREMENT,  "
            }), jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "-- \u4F7F\u7528order_id\u4F5C\u4E3A\u81EA\u589E\u4E3B\u952E"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    ..."
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ");"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u4E3B\u952E\u7684\u9009\u62E9\u5E94\u786E\u4FDD\u552F\u4E00\u6027\uFF0C\u5E76\u907F\u514D\u4F7F\u7528\u5177\u6709\u4E1A\u52A1\u542B\u4E49\u7684\u5B57\u6BB5\u4F5C\u4E3A\u4E3B\u952E\uFF0C\u4EE5\u514D\u5F71\u54CD\u6570\u636E\u7684\u51C6\u786E\u6027\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "222-\u7D22\u5F15\u7684\u5EFA\u7ACB\u53CA\u5F71\u54CD",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#222-\u7D22\u5F15\u7684\u5EFA\u7ACB\u53CA\u5F71\u54CD",
        children: "#"
      }), "2.2.2 \u7D22\u5F15\u7684\u5EFA\u7ACB\u53CA\u5F71\u54CD"]
    }), "\n", jsx(_components.p, {
      children: "\u5728MySQL\u4E2D\uFF0C\u7D22\u5F15\u53EF\u4EE5\u52A0\u5FEB\u6570\u636E\u68C0\u7D22\u7684\u901F\u5EA6\uFF0C\u63D0\u9AD8\u67E5\u8BE2\u6027\u80FD\u3002\u5EFA\u7ACB\u9002\u5F53\u7684\u7D22\u5F15\u9700\u8981\u8003\u8651\u67E5\u8BE2\u9891\u7387\u9AD8\u7684\u5B57\u6BB5\u4EE5\u53CA\u7EC4\u5408\u7D22\u5F15\u7684\u4F7F\u7528\u60C5\u51B5\u3002"
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
              children: " idx_username "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "ON"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " users(username);  "
            }), jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "-- \u4E3Ausername\u5B57\u6BB5\u521B\u5EFA\u7D22\u5F15"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u8FC7\u591A\u7684\u7D22\u5F15\u4F1A\u589E\u52A0\u6570\u636E\u5E93\u7684\u5B58\u50A8\u7A7A\u95F4\u548C\u7EF4\u62A4\u6210\u672C\uFF0C\u56E0\u6B64\u9700\u8981\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u5408\u7406\u8BBE\u8BA1\u7D22\u5F15\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "223-\u5408\u9002\u7684\u7D22\u5F15\u7C7B\u578B\u9009\u62E9",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#223-\u5408\u9002\u7684\u7D22\u5F15\u7C7B\u578B\u9009\u62E9",
        children: "#"
      }), "2.2.3 \u5408\u9002\u7684\u7D22\u5F15\u7C7B\u578B\u9009\u62E9"]
    }), "\n", jsx(_components.p, {
      children: "MySQL\u4E2D\u4E0D\u540C\u7684\u7D22\u5F15\u7C7B\u578B\u5305\u62EC\u666E\u901A\u7D22\u5F15\u3001\u552F\u4E00\u7D22\u5F15\u3001\u5168\u6587\u7D22\u5F15\u7B49\u3002\u6839\u636E\u5B9E\u9645\u9700\u6C42\u9009\u62E9\u5408\u9002\u7684\u7D22\u5F15\u7C7B\u578B\u53EF\u4EE5\u63D0\u9AD8\u67E5\u8BE2\u6548\u7387\u3002"
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
              children: "UNIQUE"
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
              children: " idx_email "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "ON"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " users(email);  "
            }), jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "-- \u521B\u5EFA\u552F\u4E00\u7D22\u5F15"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u6839\u636E\u8868\u7684\u67E5\u8BE2\u7C7B\u578B\u548C\u4E1A\u52A1\u9700\u6C42\uFF0C\u9009\u62E9\u5408\u9002\u7684\u7D22\u5F15\u7C7B\u578B\u8FDB\u884C\u4F18\u5316\uFF0C\u4EE5\u63D0\u9AD8\u6570\u636E\u5E93\u6027\u80FD\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u4EE5\u4E0A\u662F\u5173\u4E8EMySQL\u8868\u7ED3\u6784\u8BBE\u8BA1\u8981\u70B9\u7684\u89E3\u6790\uFF0C\u901A\u8FC7\u5408\u7406\u9009\u62E9\u6570\u636E\u7C7B\u578B\u548C\u4F18\u5316\u4E3B\u952E\u7D22\u5F15\u8BBE\u8BA1\uFF0C\u53EF\u4EE5\u6709\u6548\u63D0\u5347\u6570\u636E\u5E93\u6027\u80FD\u5E76\u4FDD\u8BC1\u6570\u636E\u7684\u5B8C\u6574\u6027\u3002\u63A5\u4E0B\u6765\u5C06\u8FDB\u5165\u7B2C\u4E09\u7AE0\uFF0C\u63A2\u8BA8\u4F18\u5316\u6570\u636E\u5E93\u67E5\u8BE2\u6027\u80FD\u7684\u76F8\u5173\u5185\u5BB9\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "3-\u4F18\u5316\u6570\u636E\u5E93\u67E5\u8BE2\u6027\u80FD",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#3-\u4F18\u5316\u6570\u636E\u5E93\u67E5\u8BE2\u6027\u80FD",
        children: "#"
      }), "3. \u4F18\u5316\u6570\u636E\u5E93\u67E5\u8BE2\u6027\u80FD"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u6570\u636E\u5E93\u5E94\u7528\u4E2D\uFF0C\u4F18\u5316\u67E5\u8BE2\u6027\u80FD\u662F\u81F3\u5173\u91CD\u8981\u7684\uFF0C\u80FD\u591F\u6709\u6548\u63D0\u9AD8\u7CFB\u7EDF\u7684\u54CD\u5E94\u901F\u5EA6\u548C\u8D44\u6E90\u5229\u7528\u7387\u3002\u672C\u7AE0\u5C06\u6DF1\u5165\u63A2\u8BA8\u5982\u4F55\u4F18\u5316\u6570\u636E\u5E93\u67E5\u8BE2\u6027\u80FD\uFF0C\u5305\u62EC\u67E5\u8BE2\u8BED\u53E5\u7684\u4F18\u5316\u3001\u7D22\u5F15\u4F18\u5316\u4EE5\u53CA\u5904\u7406\u5927\u6570\u636E\u91CF\u65F6\u7684\u4F18\u5316\u7B56\u7565\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "31-\u67E5\u8BE2\u8BED\u53E5\u4F18\u5316",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#31-\u67E5\u8BE2\u8BED\u53E5\u4F18\u5316",
        children: "#"
      }), "3.1 \u67E5\u8BE2\u8BED\u53E5\u4F18\u5316"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u7F16\u5199\u67E5\u8BE2\u8BED\u53E5\u65F6\uFF0C\u5408\u7406\u7684\u8BED\u53E5\u7ED3\u6784\u548C\u6761\u4EF6\u8BBE\u8BA1\u5BF9\u4E8E\u67E5\u8BE2\u6027\u80FD\u81F3\u5173\u91CD\u8981\u3002\u4E0B\u9762\u6211\u4EEC\u5C06\u4ECE WHERE \u6761\u4EF6\u7684\u5199\u6CD5\u3001\u907F\u514D\u4F7F\u7528 SELECT * \u548C JOIN \u4F7F\u7528\u6280\u5DE7\u7B49\u65B9\u9762\u6765\u8FDB\u884C\u4F18\u5316\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "311-where\u6761\u4EF6\u7684\u5199\u6CD5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#311-where\u6761\u4EF6\u7684\u5199\u6CD5",
        children: "#"
      }), "3.1.1 WHERE\u6761\u4EF6\u7684\u5199\u6CD5"]
    }), "\n", jsx(_components.p, {
      children: "WHERE \u6761\u4EF6\u4E2D\u7684\u5199\u6CD5\u4F1A\u76F4\u63A5\u5F71\u54CD\u5230\u67E5\u8BE2\u7684\u6548\u7387\uFF0C\u5E38\u89C1\u7684\u5199\u6CD5\u5982\u4E0B\uFF1A"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\u5C3D\u91CF\u907F\u514D\u5728 WHERE \u6761\u4EF6\u4E2D\u5BF9\u5B57\u6BB5\u8FDB\u884C\u51FD\u6570\u8FD0\u7B97\uFF0C\u5982 ", jsx(_components.code, {
          children: "WHERE YEAR(create_time) = 2022"
        }), "\uFF0C\u8FD9\u4F1A\u5BFC\u81F4\u5168\u8868\u626B\u63CF\uFF1B"]
      }), "\n", jsx(_components.li, {
        children: "\u4F7F\u7528\u5408\u9002\u7684\u7D22\u5F15\u5217\u4F5C\u4E3A WHERE \u6761\u4EF6\uFF1B"
      }), "\n", jsxs(_components.li, {
        children: ["\u907F\u514D\u5728 WHERE \u6761\u4EF6\u4E2D\u5BF9\u5B57\u6BB5\u8FDB\u884C\u7C7B\u578B\u8F6C\u6362\uFF0C\u5982 ", jsx(_components.code, {
          children: "WHERE id = '123'"
        }), "\uFF0C\u4F1A\u5BFC\u81F4\u5168\u8868\u626B\u63CF\u3002"]
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
              children: "-- \u4F18\u5316\u524D"
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
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "YEAR"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "(create_time) "
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
              children: "2022"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "-- \u4F18\u5316\u540E"
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
              children: " create_time "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "2022-01-01"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "AND"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " create_time "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "2023-01-01"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
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
      id: "312-\u907F\u514D\u4F7F\u7528-select-",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#312-\u907F\u514D\u4F7F\u7528-select-",
        children: "#"
      }), "3.1.2 \u907F\u514D\u4F7F\u7528 SELECT *"]
    }), "\n", jsxs(_components.p, {
      children: ["\u4F7F\u7528 ", jsx(_components.code, {
        children: "SELECT *"
      }), " \u4F1A\u67E5\u8BE2\u8868\u4E2D\u6240\u6709\u5B57\u6BB5\uFF0C\u5305\u62EC\u4E0D\u5FC5\u8981\u7684\u5B57\u6BB5\uFF0C\u589E\u52A0\u4E86\u6570\u636E\u4F20\u8F93\u7684\u5F00\u9500\u3002\u5E94\u8BE5\u660E\u786E\u6307\u5B9A\u9700\u8981\u67E5\u8BE2\u7684\u5B57\u6BB5\u3002"]
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
              children: "-- \u4E0D\u63A8\u8350"
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
              children: " orders "
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
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "status"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
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
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "paid"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "-- \u63A8\u8350"
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
              children: " order_id, order_time, total_amount "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "FROM"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " orders "
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
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "status"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
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
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "paid"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
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
      id: "313-join\u4F7F\u7528\u6280\u5DE7",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#313-join\u4F7F\u7528\u6280\u5DE7",
        children: "#"
      }), "3.1.3 JOIN\u4F7F\u7528\u6280\u5DE7"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u4F7F\u7528 JOIN \u8FDB\u884C\u8868\u8FDE\u63A5\u65F6\uFF0C\u5E94\u8BE5\u6CE8\u610F\u4EE5\u4E0B\u51E0\u70B9\uFF1A"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "\u5C3D\u91CF\u907F\u514D\u5728 JOIN \u6761\u4EF6\u4E2D\u8FDB\u884C\u51FD\u6570\u8FD0\u7B97\uFF0C\u4F1A\u5F71\u54CD\u7D22\u5F15\u7684\u4F7F\u7528\uFF1B"
      }), "\n", jsx(_components.li, {
        children: "\u5BF9\u4E8E\u5927\u8868\u7684\u8FDE\u63A5\uFF0C\u5E94\u8BE5\u8003\u8651\u5408\u9002\u7684\u6570\u636E\u5206\u9875\u548C\u6761\u4EF6\u8FC7\u6EE4\u3002"
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
              children: "-- \u4E0D\u63A8\u8350"
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
              children: " orders "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "JOIN"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " users "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "ON"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " orders.user_id "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " users.id "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "WHERE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " users.status "
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
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "active"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "-- \u63A8\u8350"
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
              children: " orders.order_id, orders.order_time, users.username "
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
              children: " orders "
            })]
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
              children: " users "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "ON"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " orders.user_id "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " users.id "
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
              children: " users.status "
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
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "active"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
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
      id: "32-\u7D22\u5F15\u4F18\u5316",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#32-\u7D22\u5F15\u4F18\u5316",
        children: "#"
      }), "3.2 \u7D22\u5F15\u4F18\u5316"]
    }), "\n", jsx(_components.p, {
      children: "\u7D22\u5F15\u5728\u63D0\u9AD8\u67E5\u8BE2\u6027\u80FD\u65B9\u9762\u8D77\u7740\u5173\u952E\u4F5C\u7528\uFF0C\u6B63\u786E\u5730\u9009\u62E9\u548C\u4F7F\u7528\u7D22\u5F15\u80FD\u591F\u663E\u8457\u51CF\u5C11\u67E5\u8BE2\u65F6\u95F4\u3002\u63A5\u4E0B\u6765\u6211\u4EEC\u5C06\u4ECB\u7ECD\u4E86\u89E3 MySQL \u7D22\u5F15\u7C7B\u578B\u3001\u7D22\u5F15\u7684\u521B\u5EFA\u4E0E\u7EF4\u62A4\u4EE5\u53CA\u7D22\u5F15\u8986\u76D6\u4F18\u5316\u7684\u76F8\u5173\u5185\u5BB9\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "321-\u4E86\u89E3mysql\u7D22\u5F15\u7C7B\u578B",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#321-\u4E86\u89E3mysql\u7D22\u5F15\u7C7B\u578B",
        children: "#"
      }), "3.2.1 \u4E86\u89E3MySQL\u7D22\u5F15\u7C7B\u578B"]
    }), "\n", jsx(_components.p, {
      children: "MySQL\u4E2D\u5E38\u89C1\u7684\u7D22\u5F15\u7C7B\u578B\u5305\u62EC\uFF1A\u666E\u901A\u7D22\u5F15\u3001\u552F\u4E00\u7D22\u5F15\u3001\u4E3B\u952E\u7D22\u5F15\u3001\u5168\u6587\u7D22\u5F15\u7B49\u3002\u6839\u636E\u4E0D\u540C\u573A\u666F\u9009\u62E9\u5408\u9002\u7684\u7D22\u5F15\u7C7B\u578B\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "322-\u7D22\u5F15\u7684\u521B\u5EFA\u4E0E\u7EF4\u62A4",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#322-\u7D22\u5F15\u7684\u521B\u5EFA\u4E0E\u7EF4\u62A4",
        children: "#"
      }), "3.2.2 \u7D22\u5F15\u7684\u521B\u5EFA\u4E0E\u7EF4\u62A4"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u521B\u5EFA\u7D22\u5F15\u65F6\uFF0C\u5E94\u8BE5\u6CE8\u610F\u4EE5\u4E0B\u51E0\u70B9\uFF1A"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "\u4E3A\u7ECF\u5E38\u7528\u4E8E\u6761\u4EF6\u7B5B\u9009\u3001\u6392\u5E8F\u6216\u8FDE\u63A5\u7684\u5217\u521B\u5EFA\u7D22\u5F15\uFF1B"
      }), "\n", jsx(_components.li, {
        children: "\u907F\u514D\u521B\u5EFA\u8FC7\u591A\u7684\u7D22\u5F15\uFF0C\u4F1A\u589E\u52A0\u5199\u64CD\u4F5C\u7684\u5F00\u9500\uFF1B"
      }), "\n", jsx(_components.li, {
        children: "\u5B9A\u671F\u5BF9\u7D22\u5F15\u8FDB\u884C\u7EF4\u62A4\uFF0C\u5220\u9664\u65E0\u7528\u7684\u7D22\u5F15\uFF0C\u91CD\u5EFA\u78C1\u76D8\u788E\u7247\u5316\u8FC7\u591A\u7684\u7D22\u5F15\u3002"
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
              children: "-- \u521B\u5EFA\u7D22\u5F15"
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
              children: " idx_username "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "ON"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " users(username);"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "-- \u7EF4\u62A4\u7D22\u5F15"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "ANALYZE "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "TABLE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " users;"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h4, {
      id: "323-\u7D22\u5F15\u8986\u76D6\u4F18\u5316",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#323-\u7D22\u5F15\u8986\u76D6\u4F18\u5316",
        children: "#"
      }), "3.2.3 \u7D22\u5F15\u8986\u76D6\u4F18\u5316"]
    }), "\n", jsx(_components.p, {
      children: "\u7D22\u5F15\u8986\u76D6\u662F\u6307\u67E5\u8BE2\u7684\u7ED3\u679C\u53EF\u4EE5\u4EC5\u901A\u8FC7\u7D22\u5F15\u6765\u83B7\u53D6\uFF0C\u4E0D\u5FC5\u518D\u56DE\u8868\u67E5\u8BE2\u6570\u636E\u884C\uFF0C\u51CF\u5C11\u4E86\u67E5\u8BE2\u6210\u672C\u3002"
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
              children: "-- \u7D22\u5F15\u8986\u76D6\u4F18\u5316"
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
              children: " order_id, order_time "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "FROM"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " orders "
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
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "status"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
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
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "paid"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
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
      id: "33-\u6570\u636E\u91CF\u5927\u65F6\u7684\u4F18\u5316",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#33-\u6570\u636E\u91CF\u5927\u65F6\u7684\u4F18\u5316",
        children: "#"
      }), "3.3 \u6570\u636E\u91CF\u5927\u65F6\u7684\u4F18\u5316"]
    }), "\n", jsx(_components.p, {
      children: "\u5904\u7406\u5927\u6570\u636E\u91CF\u7684\u67E5\u8BE2\u65F6\uFF0C\u5E38\u89C4\u7684\u4F18\u5316\u624B\u6BB5\u5DF2\u7ECF\u4E0D\u80FD\u6EE1\u8DB3\u9700\u6C42\uFF0C\u6B64\u65F6\u5E94\u8BE5\u8003\u8651\u5206\u533A\u8868\u7684\u4F7F\u7528\u4EE5\u53CA\u6C34\u5E73\u4E0E\u5782\u76F4\u62C6\u5206\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "331-\u5206\u533A\u8868\u7684\u4F7F\u7528",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#331-\u5206\u533A\u8868\u7684\u4F7F\u7528",
        children: "#"
      }), "3.3.1 \u5206\u533A\u8868\u7684\u4F7F\u7528"]
    }), "\n", jsx(_components.p, {
      children: "\u5BF9\u4E8E\u6570\u636E\u91CF\u5927\u7684\u8868\uFF0C\u53EF\u4EE5\u8003\u8651\u4F7F\u7528\u5206\u533A\u8868\u8FDB\u884C\u5B58\u50A8\uFF0C\u53EF\u4EE5\u63D0\u9AD8\u67E5\u8BE2\u6548\u7387\u548C\u51CF\u5C11\u7EF4\u62A4\u6210\u672C\u3002"
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
              children: "-- \u4F7F\u7528\u5206\u533A\u8868"
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
              children: "TABLE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " orders ("
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    ..."
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "PARTITION"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "BY"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "RANGE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "YEAR"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "(order_time)) ("
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
              children: "PARTITION"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " p0 "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "VALUES"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " LESS THAN ("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "2020"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "),"
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
              children: "PARTITION"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " p1 "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "VALUES"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " LESS THAN ("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "2021"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "),"
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
              children: "PARTITION"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " p2 "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "VALUES"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " LESS THAN ("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "2022"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ");"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h4, {
      id: "332-\u5782\u76F4\u4E0E\u6C34\u5E73\u62C6\u5206",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#332-\u5782\u76F4\u4E0E\u6C34\u5E73\u62C6\u5206",
        children: "#"
      }), "3.3.2 \u5782\u76F4\u4E0E\u6C34\u5E73\u62C6\u5206"]
    }), "\n", jsx(_components.p, {
      children: "\u5BF9\u4E8E\u590D\u6742\u7684\u6570\u636E\u8868\uFF0C\u53EF\u4EE5\u8003\u8651\u5C06\u5176\u62C6\u5206\u6210\u591A\u4E2A\u8868\uFF0C\u51CF\u5C11\u5355\u8868\u7684\u6570\u636E\u91CF\uFF1B\u4E5F\u53EF\u4EE5\u5C06\u4E00\u4E2A\u5927\u8868\u6309\u884C\u8FDB\u884C\u5206\u5272\u5B58\u50A8\u5728\u4E0D\u540C\u7684\u8868\u4E2D\uFF0C\u51CF\u5C11\u6BCF\u5F20\u8868\u7684\u6570\u636E\u91CF\u3002"
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
              children: "-- \u5782\u76F4\u62C6\u5206"
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
              children: "TABLE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " orders_main ("
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    order_id "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "INT"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "PRIMARY"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "KEY"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ","
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    ..."
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ");"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
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
              children: "TABLE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " orders_details ("
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    order_id "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "INT"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ","
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
              children: "FOREIGN KEY"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " (order_id) "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "REFERENCES"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " orders_main(order_id),"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    ..."
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ");"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "-- \u6C34\u5E73\u62C6\u5206"
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
              children: "TABLE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " orders_2022 ("
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    ..."
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ");"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u5BF9\u67E5\u8BE2\u8BED\u53E5\u7684\u4F18\u5316\u3001\u7D22\u5F15\u7684\u4F18\u5316\u4EE5\u53CA\u5904\u7406\u5927\u6570\u636E\u91CF\u65F6\u7684\u4F18\u5316\uFF0C\u53EF\u4EE5\u6709\u6548\u63D0\u5347\u6570\u636E\u5E93\u7684\u67E5\u8BE2\u6027\u80FD\uFF0C\u63D0\u5347\u7CFB\u7EDF\u7684\u6574\u4F53\u6027\u80FD\u548C\u7528\u6237\u4F53\u9A8C\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "41-\u7F3A\u4E4F\u9002\u5F53\u7EA6\u675F\u4E0E\u89C4\u8303",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#41-\u7F3A\u4E4F\u9002\u5F53\u7EA6\u675F\u4E0E\u89C4\u8303",
        children: "#"
      }), "4.1 \u7F3A\u4E4F\u9002\u5F53\u7EA6\u675F\u4E0E\u89C4\u8303"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u8FDB\u884CMySQL\u8868\u7ED3\u6784\u8BBE\u8BA1\u65F6\uFF0C\u7ECF\u5E38\u4F1A\u51FA\u73B0\u4E00\u4E9B\u7F3A\u4E4F\u9002\u5F53\u7EA6\u675F\u4E0E\u89C4\u8303\u7684\u60C5\u51B5\uFF0C\u8FD9\u53EF\u80FD\u4F1A\u5BFC\u81F4\u6570\u636E\u7684\u4E0D\u5B8C\u6574\u6027\u548C\u4E00\u81F4\u6027\u95EE\u9898\uFF0C\u751A\u81F3\u4F1A\u5F15\u53D1\u6570\u636E\u6DF7\u4E71\u548C\u9519\u8BEF\u3002\u56E0\u6B64\uFF0C\u6211\u4EEC\u9700\u8981\u91CD\u89C6\u5728\u8BBE\u8BA1\u8868\u7ED3\u6784\u65F6\u7684\u7EA6\u675F\u6761\u4EF6\u8BBE\u7F6E\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "411-\u5FFD\u89C6\u6570\u636E\u5B8C\u6574\u6027",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#411-\u5FFD\u89C6\u6570\u636E\u5B8C\u6574\u6027",
        children: "#"
      }), "4.1.1 \u5FFD\u89C6\u6570\u636E\u5B8C\u6574\u6027"]
    }), "\n", jsx(_components.p, {
      children: "\u6570\u636E\u5B8C\u6574\u6027\u662F\u6570\u636E\u5E93\u8BBE\u8BA1\u4E2D\u81F3\u5173\u91CD\u8981\u7684\u4E00\u73AF\uFF0C\u800C\u5728\u5B9E\u9645\u5DE5\u4F5C\u4E2D\uFF0C\u6709\u65F6\u4F1A\u56E0\u4E3A\u5FFD\u89C6\u6570\u636E\u5B8C\u6574\u6027\u800C\u5BFC\u81F4\u6570\u636E\u4E0D\u5B8C\u6574\u7684\u60C5\u51B5\u3002\u4F8B\u5982\uFF0C\u5728\u8BBE\u8BA1\u7528\u6237\u4FE1\u606F\u8868\u65F6\uFF0C\u5982\u679C\u6CA1\u6709\u8BBE\u7F6E\u7528\u6237\u540D\u5B57\u6BB5\u4E3A\u552F\u4E00\u7D22\u5F15\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u51FA\u73B0\u591A\u4E2A\u7528\u6237\u4F7F\u7528\u76F8\u540C\u7528\u6237\u540D\u7684\u95EE\u9898\uFF0C\u7834\u574F\u4E86\u6570\u636E\u7684\u552F\u4E00\u6027\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u4E3A\u907F\u514D\u8FD9\u79CD\u60C5\u51B5\uFF0C\u6211\u4EEC\u5728\u8BBE\u8BA1\u8868\u7ED3\u6784\u65F6\uFF0C\u5E94\u8BE5\u6839\u636E\u5B9E\u9645\u4E1A\u52A1\u9700\u6C42\uFF0C\u8BBE\u7F6E\u9002\u5F53\u7684\u7EA6\u675F\u6761\u4EF6\u548C\u7D22\u5F15\uFF0C\u786E\u4FDD\u6570\u636E\u7684\u5B8C\u6574\u6027\u548C\u4E00\u81F4\u6027\u3002\u4F8B\u5982\uFF0C\u5728\u4E0A\u8FF0\u7528\u6237\u4FE1\u606F\u8868\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5728\u7528\u6237\u540D\u5B57\u6BB5\u4E0A\u6DFB\u52A0\u552F\u4E00\u7D22\u5F15\uFF0C\u6765\u4FDD\u8BC1\u7528\u6237\u540D\u7684\u552F\u4E00\u6027\u3002"
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
              children: "TABLE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " user_info ("
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    id "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "INT"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "PRIMARY"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "KEY"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    username "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "VARCHAR"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "50"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "UNIQUE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ","
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
              children: "password"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "VARCHAR"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "50"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "),"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    email "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "VARCHAR"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "50"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ");"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h4, {
      id: "412-\u7EA6\u675F\u6761\u4EF6\u7684\u5236\u5B9A",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#412-\u7EA6\u675F\u6761\u4EF6\u7684\u5236\u5B9A",
        children: "#"
      }), "4.1.2 \u7EA6\u675F\u6761\u4EF6\u7684\u5236\u5B9A"]
    }), "\n", jsx(_components.p, {
      children: "\u9664\u4E86\u552F\u4E00\u7D22\u5F15\u5916\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E\u5916\u952E\u7EA6\u675F\u3001\u9ED8\u8BA4\u503C\u7EA6\u675F\u3001\u975E\u7A7A\u7EA6\u675F\u7B49\u65B9\u5F0F\u6765\u4FDD\u8BC1\u6570\u636E\u7684\u5B8C\u6574\u6027\u3002\u5728\u8BBE\u8BA1\u8868\u7ED3\u6784\u65F6\uFF0C\u8981\u8003\u8651\u5230\u5404\u5B57\u6BB5\u4E4B\u95F4\u7684\u5173\u8054\u6027\uFF0C\u5408\u7406\u8BBE\u7F6E\u7EA6\u675F\u6761\u4EF6\uFF0C\u907F\u514D\u6570\u636E\u4E4B\u95F4\u7684\u4E0D\u4E00\u81F4\u548C\u51B2\u7A81\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u4F8B\u5982\uFF0C\u5728\u8BBE\u8BA1\u8BA2\u5355\u8868\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5916\u952E\u7EA6\u675F\u786E\u4FDD\u8BA2\u5355\u8868\u4E2D\u7684\u7528\u6237id\u5728\u7528\u6237\u4FE1\u606F\u8868\u4E2D\u5B58\u5728\uFF0C\u4EE5\u4FDD\u8BC1\u8BA2\u5355\u6570\u636E\u7684\u6709\u6548\u6027\u3002"
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
              children: "TABLE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " orders ("
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    order_id "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "INT"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "PRIMARY"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "KEY"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ","
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
              children: "user_id"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "INT"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    amount "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "DECIMAL"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "10"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "2"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "),"
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
              children: "FOREIGN KEY"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "user_id"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "REFERENCES"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " user_info(id)"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ");"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u5408\u7406\u8BBE\u7F6E\u7EA6\u675F\u6761\u4EF6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6709\u6548\u907F\u514D\u6570\u636E\u4E0D\u5B8C\u6574\u6027\u95EE\u9898\uFF0C\u63D0\u9AD8\u6570\u636E\u7684\u8D28\u91CF\u548C\u7A33\u5B9A\u6027\uFF0C\u786E\u4FDD\u6570\u636E\u5E93\u7CFB\u7EDF\u7684\u6B63\u5E38\u8FD0\u884C\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "\u6570\u636E\u8868\u683C",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u6570\u636E\u8868\u683C",
        children: "#"
      }), "\u6570\u636E\u8868\u683C"]
    }), "\n", jsx(_components.p, {
      children: "\u4E0B\u8868\u603B\u7ED3\u4E86\u5728MySQL\u8868\u7ED3\u6784\u8BBE\u8BA1\u8FC7\u7A0B\u4E2D\uFF0C\u5E38\u89C1\u7684\u7EA6\u675F\u6761\u4EF6\u53CA\u5176\u4F5C\u7528\uFF1A"
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "\u7EA6\u675F\u7C7B\u578B"
          }), jsx(_components.th, {
            children: "\u4F5C\u7528"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "\u552F\u4E00\u7D22\u5F15"
          }), jsx(_components.td, {
            children: "\u4FDD\u8BC1\u5B57\u6BB5\u503C\u7684\u552F\u4E00\u6027"
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "\u4E3B\u952E\u7EA6\u675F"
          }), jsx(_components.td, {
            children: "\u552F\u4E00\u6807\u8BC6\u8868\u4E2D\u7684\u6BCF\u4E00\u884C\u6570\u636E"
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "\u5916\u952E\u7EA6\u675F"
          }), jsx(_components.td, {
            children: "\u786E\u4FDD\u5B57\u6BB5\u4E0E\u5176\u4ED6\u8868\u7684\u5173\u8054\u6027"
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "\u9ED8\u8BA4\u503C\u7EA6\u675F"
          }), jsx(_components.td, {
            children: "\u5728\u672A\u6307\u5B9A\u503C\u65F6\u81EA\u52A8\u586B\u5145\u9ED8\u8BA4\u503C"
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "\u975E\u7A7A\u7EA6\u675F"
          }), jsx(_components.td, {
            children: "\u7981\u6B62\u5B57\u6BB5\u7684\u503C\u4E3A\u7A7A"
          })]
        })]
      })]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u5408\u7406\u4F7F\u7528\u4E0A\u8FF0\u7EA6\u675F\u6761\u4EF6\uFF0C\u53EF\u4EE5\u6709\u6548\u89C4\u8303\u8868\u7ED3\u6784\u8BBE\u8BA1\uFF0C\u63D0\u9AD8\u6570\u636E\u7684\u5B8C\u6574\u6027\u548C\u4E00\u81F4\u6027\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "mermaid\u6D41\u7A0B\u56FE",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#mermaid\u6D41\u7A0B\u56FE",
        children: "#"
      }), "mermaid\u6D41\u7A0B\u56FE"]
    }), "\n", jsx(_components.p, {
      children: jsxs(_components.svg, {
        "aria-roledescription": "flowchart-v2",
        role: "graphics-document document",
        viewBox: "-8 -8 143 578.5",
        style: {
          maxWidth: "143px"
        },
        xmlns: "http://www.w3.org/2000/svg",
        width: "100%",
        id: "mermaid-0",
        children: [jsx(_components.style, {
          children: "#mermaid-0{font-family:arial,sans-serif;font-size:16px;fill:#333;}#mermaid-0 .error-icon{fill:#552222;}#mermaid-0 .error-text{fill:#552222;stroke:#552222;}#mermaid-0 .edge-thickness-normal{stroke-width:2px;}#mermaid-0 .edge-thickness-thick{stroke-width:3.5px;}#mermaid-0 .edge-pattern-solid{stroke-dasharray:0;}#mermaid-0 .edge-pattern-dashed{stroke-dasharray:3;}#mermaid-0 .edge-pattern-dotted{stroke-dasharray:2;}#mermaid-0 .marker{fill:#333333;stroke:#333333;}#mermaid-0 .marker.cross{stroke:#333333;}#mermaid-0 svg{font-family:arial,sans-serif;font-size:16px;}#mermaid-0 .label{font-family:arial,sans-serif;color:#333;}#mermaid-0 .cluster-label text{fill:#333;}#mermaid-0 .cluster-label span,#mermaid-0 p{color:#333;}#mermaid-0 .label text,#mermaid-0 span,#mermaid-0 p{fill:#333;color:#333;}#mermaid-0 .node rect,#mermaid-0 .node circle,#mermaid-0 .node ellipse,#mermaid-0 .node polygon,#mermaid-0 .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#mermaid-0 .flowchart-label text{text-anchor:middle;}#mermaid-0 .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#mermaid-0 .node .label{text-align:center;}#mermaid-0 .node.clickable{cursor:pointer;}#mermaid-0 .arrowheadPath{fill:#333333;}#mermaid-0 .edgePath .path{stroke:#333333;stroke-width:2.0px;}#mermaid-0 .flowchart-link{stroke:#333333;fill:none;}#mermaid-0 .edgeLabel{background-color:#e8e8e8;text-align:center;}#mermaid-0 .edgeLabel rect{opacity:0.5;background-color:#e8e8e8;fill:#e8e8e8;}#mermaid-0 .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#mermaid-0 .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#mermaid-0 .cluster text{fill:#333;}#mermaid-0 .cluster span,#mermaid-0 p{color:#333;}#mermaid-0 div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:arial,sans-serif;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#mermaid-0 .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#mermaid-0 :root{--mermaid-font-family:arial,sans-serif;}"
        }), jsxs(_components.g, {
          children: [jsx(_components.marker, {
            orient: "auto",
            markerHeight: "12",
            markerWidth: "12",
            markerUnits: "userSpaceOnUse",
            refY: "5",
            refX: "6",
            viewBox: "0 0 10 10",
            className: "marker flowchart",
            id: "mermaid-0_flowchart-pointEnd",
            children: jsx(_components.path, {
              style: {
                strokeWidth: "1",
                strokeDasharray: "1, 0"
              },
              className: "arrowMarkerPath",
              d: "M 0 0 L 10 5 L 0 10 z"
            })
          }), jsx(_components.marker, {
            orient: "auto",
            markerHeight: "12",
            markerWidth: "12",
            markerUnits: "userSpaceOnUse",
            refY: "5",
            refX: "4.5",
            viewBox: "0 0 10 10",
            className: "marker flowchart",
            id: "mermaid-0_flowchart-pointStart",
            children: jsx(_components.path, {
              style: {
                strokeWidth: "1",
                strokeDasharray: "1, 0"
              },
              className: "arrowMarkerPath",
              d: "M 0 5 L 10 10 L 10 0 z"
            })
          }), jsx(_components.marker, {
            orient: "auto",
            markerHeight: "11",
            markerWidth: "11",
            markerUnits: "userSpaceOnUse",
            refY: "5",
            refX: "11",
            viewBox: "0 0 10 10",
            className: "marker flowchart",
            id: "mermaid-0_flowchart-circleEnd",
            children: jsx(_components.circle, {
              style: {
                strokeWidth: "1",
                strokeDasharray: "1, 0"
              },
              className: "arrowMarkerPath",
              r: "5",
              cy: "5",
              cx: "5"
            })
          }), jsx(_components.marker, {
            orient: "auto",
            markerHeight: "11",
            markerWidth: "11",
            markerUnits: "userSpaceOnUse",
            refY: "5",
            refX: "-1",
            viewBox: "0 0 10 10",
            className: "marker flowchart",
            id: "mermaid-0_flowchart-circleStart",
            children: jsx(_components.circle, {
              style: {
                strokeWidth: "1",
                strokeDasharray: "1, 0"
              },
              className: "arrowMarkerPath",
              r: "5",
              cy: "5",
              cx: "5"
            })
          }), jsx(_components.marker, {
            orient: "auto",
            markerHeight: "11",
            markerWidth: "11",
            markerUnits: "userSpaceOnUse",
            refY: "5.2",
            refX: "12",
            viewBox: "0 0 11 11",
            className: "marker cross flowchart",
            id: "mermaid-0_flowchart-crossEnd",
            children: jsx(_components.path, {
              style: {
                strokeWidth: "2",
                strokeDasharray: "1, 0"
              },
              className: "arrowMarkerPath",
              d: "M 1,1 l 9,9 M 10,1 l -9,9"
            })
          }), jsx(_components.marker, {
            orient: "auto",
            markerHeight: "11",
            markerWidth: "11",
            markerUnits: "userSpaceOnUse",
            refY: "5.2",
            refX: "-1",
            viewBox: "0 0 11 11",
            className: "marker cross flowchart",
            id: "mermaid-0_flowchart-crossStart",
            children: jsx(_components.path, {
              style: {
                strokeWidth: "2",
                strokeDasharray: "1, 0"
              },
              className: "arrowMarkerPath",
              d: "M 1,1 l 9,9 M 10,1 l -9,9"
            })
          }), jsxs(_components.g, {
            className: "root",
            children: [jsx(_components.g, {
              className: "clusters"
            }), jsxs(_components.g, {
              className: "edgePaths",
              children: [jsx(_components.path, {
                markerEnd: "url(#mermaid-0_flowchart-pointEnd)",
                style: {
                  fill: "none"
                },
                className: "edge-thickness-normal edge-pattern-solid flowchart-link LS-A LE-B",
                id: "L-A-B-0",
                d: "M63.5,37.5L63.5,41.667C63.5,45.833,63.5,54.167,63.5,61.617C63.5,69.067,63.5,75.633,63.5,78.917L63.5,82.2"
              }), jsx(_components.path, {
                markerEnd: "url(#mermaid-0_flowchart-pointEnd)",
                style: {
                  fill: "none"
                },
                className: "edge-thickness-normal edge-pattern-solid flowchart-link LS-B LE-C",
                id: "L-B-C-0",
                d: "M63.5,125L63.5,129.167C63.5,133.333,63.5,141.667,63.5,149.117C63.5,156.567,63.5,163.133,63.5,166.417L63.5,169.7"
              }), jsx(_components.path, {
                markerEnd: "url(#mermaid-0_flowchart-pointEnd)",
                style: {
                  fill: "none"
                },
                className: "edge-thickness-normal edge-pattern-solid flowchart-link LS-C LE-D",
                id: "L-C-D-0",
                d: "M63.5,212.5L63.5,216.667C63.5,220.833,63.5,229.167,63.5,236.617C63.5,244.067,63.5,250.633,63.5,253.917L63.5,257.2"
              }), jsx(_components.path, {
                markerEnd: "url(#mermaid-0_flowchart-pointEnd)",
                style: {
                  fill: "none"
                },
                className: "edge-thickness-normal edge-pattern-solid flowchart-link LS-D LE-E",
                id: "L-D-E-0",
                d: "M63.5,300L63.5,304.167C63.5,308.333,63.5,316.667,63.5,324.117C63.5,331.567,63.5,338.133,63.5,341.417L63.5,344.7"
              }), jsx(_components.path, {
                markerEnd: "url(#mermaid-0_flowchart-pointEnd)",
                style: {
                  fill: "none"
                },
                className: "edge-thickness-normal edge-pattern-solid flowchart-link LS-E LE-F",
                id: "L-E-F-0",
                d: "M63.5,387.5L63.5,391.667C63.5,395.833,63.5,404.167,63.5,411.617C63.5,419.067,63.5,425.633,63.5,428.917L63.5,432.2"
              }), jsx(_components.path, {
                markerEnd: "url(#mermaid-0_flowchart-pointEnd)",
                style: {
                  fill: "none"
                },
                className: "edge-thickness-normal edge-pattern-solid flowchart-link LS-F LE-G",
                id: "L-F-G-0",
                d: "M63.5,475L63.5,479.167C63.5,483.333,63.5,491.667,63.5,499.117C63.5,506.567,63.5,513.133,63.5,516.417L63.5,519.7"
              })]
            }), jsxs(_components.g, {
              className: "edgeLabels",
              children: [jsx(_components.g, {
                className: "edgeLabel",
                children: jsx(_components.g, {
                  transform: "translate(0, 0)",
                  className: "label",
                  children: jsx(_components.foreignObject, {
                    height: "0",
                    width: "0",
                    children: jsx(_components.div, {
                      style: {
                        display: "inline-block",
                        whiteSpace: "nowrap"
                      },
                      xmlns: "http://www.w3.org/1999/xhtml",
                      children: jsx(_components.span, {
                        className: "edgeLabel"
                      })
                    })
                  })
                })
              }), jsx(_components.g, {
                className: "edgeLabel",
                children: jsx(_components.g, {
                  transform: "translate(0, 0)",
                  className: "label",
                  children: jsx(_components.foreignObject, {
                    height: "0",
                    width: "0",
                    children: jsx(_components.div, {
                      style: {
                        display: "inline-block",
                        whiteSpace: "nowrap"
                      },
                      xmlns: "http://www.w3.org/1999/xhtml",
                      children: jsx(_components.span, {
                        className: "edgeLabel"
                      })
                    })
                  })
                })
              }), jsx(_components.g, {
                className: "edgeLabel",
                children: jsx(_components.g, {
                  transform: "translate(0, 0)",
                  className: "label",
                  children: jsx(_components.foreignObject, {
                    height: "0",
                    width: "0",
                    children: jsx(_components.div, {
                      style: {
                        display: "inline-block",
                        whiteSpace: "nowrap"
                      },
                      xmlns: "http://www.w3.org/1999/xhtml",
                      children: jsx(_components.span, {
                        className: "edgeLabel"
                      })
                    })
                  })
                })
              }), jsx(_components.g, {
                className: "edgeLabel",
                children: jsx(_components.g, {
                  transform: "translate(0, 0)",
                  className: "label",
                  children: jsx(_components.foreignObject, {
                    height: "0",
                    width: "0",
                    children: jsx(_components.div, {
                      style: {
                        display: "inline-block",
                        whiteSpace: "nowrap"
                      },
                      xmlns: "http://www.w3.org/1999/xhtml",
                      children: jsx(_components.span, {
                        className: "edgeLabel"
                      })
                    })
                  })
                })
              }), jsx(_components.g, {
                className: "edgeLabel",
                children: jsx(_components.g, {
                  transform: "translate(0, 0)",
                  className: "label",
                  children: jsx(_components.foreignObject, {
                    height: "0",
                    width: "0",
                    children: jsx(_components.div, {
                      style: {
                        display: "inline-block",
                        whiteSpace: "nowrap"
                      },
                      xmlns: "http://www.w3.org/1999/xhtml",
                      children: jsx(_components.span, {
                        className: "edgeLabel"
                      })
                    })
                  })
                })
              }), jsx(_components.g, {
                className: "edgeLabel",
                children: jsx(_components.g, {
                  transform: "translate(0, 0)",
                  className: "label",
                  children: jsx(_components.foreignObject, {
                    height: "0",
                    width: "0",
                    children: jsx(_components.div, {
                      style: {
                        display: "inline-block",
                        whiteSpace: "nowrap"
                      },
                      xmlns: "http://www.w3.org/1999/xhtml",
                      children: jsx(_components.span, {
                        className: "edgeLabel"
                      })
                    })
                  })
                })
              })]
            }), jsxs(_components.g, {
              className: "nodes",
              children: [jsxs(_components.g, {
                transform: "translate(63.5, 18.75)",
                "data-id": "A",
                "data-node": "true",
                id: "flowchart-A-0",
                className: "node default default flowchart-label",
                children: [jsx(_components.rect, {
                  height: "37.5",
                  width: "47",
                  y: "-18.75",
                  x: "-23.5",
                  ry: "0",
                  rx: "0",
                  style: {},
                  className: "basic label-container"
                }), jsxs(_components.g, {
                  transform: "translate(-16, -11.25)",
                  style: {},
                  className: "label",
                  children: [jsx(_components.rect, {}), jsx(_components.foreignObject, {
                    height: "22.5",
                    width: "32",
                    children: jsx(_components.div, {
                      style: {
                        display: "inline-block",
                        whiteSpace: "nowrap"
                      },
                      xmlns: "http://www.w3.org/1999/xhtml",
                      children: jsx(_components.span, {
                        className: "nodeLabel",
                        children: "\u5F00\u59CB"
                      })
                    })
                  })]
                })]
              }), jsxs(_components.g, {
                transform: "translate(63.5, 106.25)",
                "data-id": "B",
                "data-node": "true",
                id: "flowchart-B-1",
                className: "node default default flowchart-label",
                children: [jsx(_components.rect, {
                  height: "37.5",
                  width: "111",
                  y: "-18.75",
                  x: "-55.5",
                  ry: "0",
                  rx: "0",
                  style: {},
                  className: "basic label-container"
                }), jsxs(_components.g, {
                  transform: "translate(-48, -11.25)",
                  style: {},
                  className: "label",
                  children: [jsx(_components.rect, {}), jsx(_components.foreignObject, {
                    height: "22.5",
                    width: "96",
                    children: jsx(_components.div, {
                      style: {
                        display: "inline-block",
                        whiteSpace: "nowrap"
                      },
                      xmlns: "http://www.w3.org/1999/xhtml",
                      children: jsx(_components.span, {
                        className: "nodeLabel",
                        children: "\u8BBE\u7F6E\u552F\u4E00\u7D22\u5F15"
                      })
                    })
                  })]
                })]
              }), jsxs(_components.g, {
                transform: "translate(63.5, 193.75)",
                "data-id": "C",
                "data-node": "true",
                id: "flowchart-C-3",
                className: "node default default flowchart-label",
                children: [jsx(_components.rect, {
                  height: "37.5",
                  width: "111",
                  y: "-18.75",
                  x: "-55.5",
                  ry: "0",
                  rx: "0",
                  style: {},
                  className: "basic label-container"
                }), jsxs(_components.g, {
                  transform: "translate(-48, -11.25)",
                  style: {},
                  className: "label",
                  children: [jsx(_components.rect, {}), jsx(_components.foreignObject, {
                    height: "22.5",
                    width: "96",
                    children: jsx(_components.div, {
                      style: {
                        display: "inline-block",
                        whiteSpace: "nowrap"
                      },
                      xmlns: "http://www.w3.org/1999/xhtml",
                      children: jsx(_components.span, {
                        className: "nodeLabel",
                        children: "\u8BBE\u7F6E\u4E3B\u952E\u7EA6\u675F"
                      })
                    })
                  })]
                })]
              }), jsxs(_components.g, {
                transform: "translate(63.5, 281.25)",
                "data-id": "D",
                "data-node": "true",
                id: "flowchart-D-5",
                className: "node default default flowchart-label",
                children: [jsx(_components.rect, {
                  height: "37.5",
                  width: "111",
                  y: "-18.75",
                  x: "-55.5",
                  ry: "0",
                  rx: "0",
                  style: {},
                  className: "basic label-container"
                }), jsxs(_components.g, {
                  transform: "translate(-48, -11.25)",
                  style: {},
                  className: "label",
                  children: [jsx(_components.rect, {}), jsx(_components.foreignObject, {
                    height: "22.5",
                    width: "96",
                    children: jsx(_components.div, {
                      style: {
                        display: "inline-block",
                        whiteSpace: "nowrap"
                      },
                      xmlns: "http://www.w3.org/1999/xhtml",
                      children: jsx(_components.span, {
                        className: "nodeLabel",
                        children: "\u8BBE\u7F6E\u5916\u952E\u7EA6\u675F"
                      })
                    })
                  })]
                })]
              }), jsxs(_components.g, {
                transform: "translate(63.5, 368.75)",
                "data-id": "E",
                "data-node": "true",
                id: "flowchart-E-7",
                className: "node default default flowchart-label",
                children: [jsx(_components.rect, {
                  height: "37.5",
                  width: "127",
                  y: "-18.75",
                  x: "-63.5",
                  ry: "0",
                  rx: "0",
                  style: {},
                  className: "basic label-container"
                }), jsxs(_components.g, {
                  transform: "translate(-56, -11.25)",
                  style: {},
                  className: "label",
                  children: [jsx(_components.rect, {}), jsx(_components.foreignObject, {
                    height: "22.5",
                    width: "112",
                    children: jsx(_components.div, {
                      style: {
                        display: "inline-block",
                        whiteSpace: "nowrap"
                      },
                      xmlns: "http://www.w3.org/1999/xhtml",
                      children: jsx(_components.span, {
                        className: "nodeLabel",
                        children: "\u8BBE\u7F6E\u9ED8\u8BA4\u503C\u7EA6\u675F"
                      })
                    })
                  })]
                })]
              }), jsxs(_components.g, {
                transform: "translate(63.5, 456.25)",
                "data-id": "F",
                "data-node": "true",
                id: "flowchart-F-9",
                className: "node default default flowchart-label",
                children: [jsx(_components.rect, {
                  height: "37.5",
                  width: "111",
                  y: "-18.75",
                  x: "-55.5",
                  ry: "0",
                  rx: "0",
                  style: {},
                  className: "basic label-container"
                }), jsxs(_components.g, {
                  transform: "translate(-48, -11.25)",
                  style: {},
                  className: "label",
                  children: [jsx(_components.rect, {}), jsx(_components.foreignObject, {
                    height: "22.5",
                    width: "96",
                    children: jsx(_components.div, {
                      style: {
                        display: "inline-block",
                        whiteSpace: "nowrap"
                      },
                      xmlns: "http://www.w3.org/1999/xhtml",
                      children: jsx(_components.span, {
                        className: "nodeLabel",
                        children: "\u8BBE\u7F6E\u975E\u7A7A\u7EA6\u675F"
                      })
                    })
                  })]
                })]
              }), jsxs(_components.g, {
                transform: "translate(63.5, 543.75)",
                "data-id": "G",
                "data-node": "true",
                id: "flowchart-G-11",
                className: "node default default flowchart-label",
                children: [jsx(_components.rect, {
                  height: "37.5",
                  width: "47",
                  y: "-18.75",
                  x: "-23.5",
                  ry: "0",
                  rx: "0",
                  style: {},
                  className: "basic label-container"
                }), jsxs(_components.g, {
                  transform: "translate(-16, -11.25)",
                  style: {},
                  className: "label",
                  children: [jsx(_components.rect, {}), jsx(_components.foreignObject, {
                    height: "22.5",
                    width: "32",
                    children: jsx(_components.div, {
                      style: {
                        display: "inline-block",
                        whiteSpace: "nowrap"
                      },
                      xmlns: "http://www.w3.org/1999/xhtml",
                      children: jsx(_components.span, {
                        className: "nodeLabel",
                        children: "\u7ED3\u675F"
                      })
                    })
                  })]
                })]
              })]
            })]
          })]
        })]
      })
    }), "\n", jsx(_components.p, {
      children: "\u4EE5\u4E0A\u662F\u5173\u4E8E\u7F3A\u4E4F\u9002\u5F53\u7EA6\u675F\u4E0E\u89C4\u8303\u53EF\u80FD\u5BFC\u81F4\u7684\u95EE\u9898\u4EE5\u53CA\u5982\u4F55\u901A\u8FC7\u8BBE\u7F6E\u7EA6\u675F\u6761\u4EF6\u6765\u89C4\u907F\u8FD9\u4E9B\u95EE\u9898\u7684\u8BE6\u7EC6\u4ECB\u7ECD\u3002\u5728\u8FDB\u884CMySQL\u8868\u7ED3\u6784\u8BBE\u8BA1\u65F6\uFF0C\u52A1\u5FC5\u91CD\u89C6\u6570\u636E\u5B8C\u6574\u6027\u548C\u4E00\u81F4\u6027\uFF0C\u5408\u7406\u8BBE\u7F6E\u7EA6\u675F\u6761\u4EF6\uFF0C\u4EE5\u786E\u4FDD\u6570\u636E\u5E93\u7CFB\u7EDF\u7684\u7A33\u5B9A\u8FD0\u884C\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "5-\u5B9E\u4F8B\u5206\u6790\u5178\u578Bmysql\u8868\u7ED3\u6784\u8BBE\u8BA1\u6848\u4F8B",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#5-\u5B9E\u4F8B\u5206\u6790\u5178\u578Bmysql\u8868\u7ED3\u6784\u8BBE\u8BA1\u6848\u4F8B",
        children: "#"
      }), "5. \u5B9E\u4F8B\u5206\u6790\uFF1A\u5178\u578BMySQL\u8868\u7ED3\u6784\u8BBE\u8BA1\u6848\u4F8B"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u524D\u9762\u7684\u7AE0\u8282\u4E2D\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u4E86\u89E3\u4E86MySQL\u8868\u7ED3\u6784\u8BBE\u8BA1\u7684\u91CD\u8981\u6027\u3001\u8BBE\u8BA1\u8981\u70B9\u7684\u89E3\u6790\u4EE5\u53CA\u4F18\u5316\u6570\u636E\u5E93\u67E5\u8BE2\u6027\u80FD\u7684\u76F8\u5173\u5185\u5BB9\u3002\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5C06\u901A\u8FC7\u5B9E\u4F8B\u5206\u6790\u6765\u6DF1\u5165\u63A2\u8BA8\u5178\u578B\u7684MySQL\u8868\u7ED3\u6784\u8BBE\u8BA1\u6848\u4F8B\uFF0C\u901A\u8FC7\u5B9E\u9645\u6848\u4F8B\u7684\u5206\u6790\uFF0C\u52A0\u6DF1\u5BF9\u8868\u7ED3\u6784\u8BBE\u8BA1\u7684\u7406\u89E3\uFF0C\u5E76\u5B66\u4E60\u5982\u4F55\u5728\u5B9E\u9645\u9879\u76EE\u4E2D\u5E94\u7528\u8FD9\u4E9B\u77E5\u8BC6\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "51-\u573A\u666F\u4ECB\u7ECD",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#51-\u573A\u666F\u4ECB\u7ECD",
        children: "#"
      }), "5.1 \u573A\u666F\u4ECB\u7ECD"]
    }), "\n", jsx(_components.p, {
      children: "\u5047\u8BBE\u6211\u4EEC\u662F\u4E00\u5BB6\u7535\u5546\u5E73\u53F0\uFF0C\u9700\u8981\u8BBE\u8BA1\u4E00\u4E2A\u7528\u6237\u8BA2\u5355\u7BA1\u7406\u7CFB\u7EDF\u3002\u5728\u8FD9\u4E2A\u7CFB\u7EDF\u4E2D\uFF0C\u6D89\u53CA\u5230\u7528\u6237\u4FE1\u606F\u3001\u8BA2\u5355\u4FE1\u606F\u3001\u5546\u54C1\u4FE1\u606F\u7B49\u6570\u636E\u7684\u5B58\u50A8\u548C\u7BA1\u7406\u3002\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5C06\u9488\u5BF9\u8FD9\u4E00\u573A\u666F\u8BBE\u8BA1\u76F8\u5E94\u7684MySQL\u8868\u7ED3\u6784\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "52-\u6570\u636E\u5E93\u8868\u8BBE\u8BA1",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#52-\u6570\u636E\u5E93\u8868\u8BBE\u8BA1",
        children: "#"
      }), "5.2 \u6570\u636E\u5E93\u8868\u8BBE\u8BA1"]
    }), "\n", jsxs(_components.h4, {
      id: "521-\u7528\u6237\u4FE1\u606F\u8868users",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#521-\u7528\u6237\u4FE1\u606F\u8868users",
        children: "#"
      }), "5.2.1 \u7528\u6237\u4FE1\u606F\u8868\uFF08users\uFF09"]
    }), "\n", jsx(_components.p, {
      children: "\u9996\u5148\uFF0C\u6211\u4EEC\u9700\u8981\u8BBE\u8BA1\u7528\u6237\u4FE1\u606F\u8868\uFF0C\u7528\u4E8E\u5B58\u50A8\u7528\u6237\u7684\u57FA\u672C\u4FE1\u606F\uFF0C\u4F8B\u5982\u7528\u6237ID\u3001\u7528\u6237\u540D\u3001\u624B\u673A\u53F7\u7801\u7B49\u3002"
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
              children: "TABLE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " users ("
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
              children: "user_id"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "INT"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "PRIMARY"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "KEY"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    username "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "VARCHAR"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "50"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "NOT"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "NULL"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    phone "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "VARCHAR"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "11"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "UNIQUE"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ");"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "user_id"
        }), "\uFF1A\u7528\u6237ID\uFF0C\u4F5C\u4E3A\u4E3B\u952E\uFF0C\u4FDD\u8BC1\u552F\u4E00\u6027\u3002"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "username"
        }), "\uFF1A\u7528\u6237\u540D\uFF0C\u9650\u5B9A\u4E3A\u4E0D\u4E3A\u7A7A\u7684\u5B57\u7B26\u4E32\u3002"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "phone"
        }), "\uFF1A\u624B\u673A\u53F7\u7801\uFF0C\u8BBE\u7F6E\u4E3A\u552F\u4E00\u7D22\u5F15\uFF0C\u4FDD\u8BC1\u552F\u4E00\u6027\u3002"]
      }), "\n"]
    }), "\n", jsxs(_components.h4, {
      id: "522-\u8BA2\u5355\u4FE1\u606F\u8868orders",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#522-\u8BA2\u5355\u4FE1\u606F\u8868orders",
        children: "#"
      }), "5.2.2 \u8BA2\u5355\u4FE1\u606F\u8868\uFF08orders\uFF09"]
    }), "\n", jsx(_components.p, {
      children: "\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u8BBE\u8BA1\u8BA2\u5355\u4FE1\u606F\u8868\uFF0C\u7528\u4E8E\u5B58\u50A8\u7528\u6237\u7684\u8BA2\u5355\u4FE1\u606F\uFF0C\u5305\u62EC\u8BA2\u5355ID\u3001\u7528\u6237ID\u3001\u8BA2\u5355\u91D1\u989D\u7B49\u5B57\u6BB5\u3002"
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
              children: "TABLE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " orders ("
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    order_id "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "INT"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "PRIMARY"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "KEY"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ","
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
              children: "user_id"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "INT"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    amount "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "DECIMAL"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "10"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "2"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "),"
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
              children: "FOREIGN KEY"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "user_id"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "REFERENCES"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " users("
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "user_id"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ");"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "order_id"
        }), "\uFF1A\u8BA2\u5355ID\uFF0C\u4F5C\u4E3A\u4E3B\u952E\uFF0C\u4FDD\u8BC1\u552F\u4E00\u6027\u3002"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "user_id"
        }), "\uFF1A\u7528\u6237ID\uFF0C\u4E0E\u7528\u6237\u4FE1\u606F\u8868\u5173\u8054\u3002"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "amount"
        }), "\uFF1A\u8BA2\u5355\u91D1\u989D\uFF0C\u4F7F\u7528", jsx(_components.code, {
          children: "DECIMAL"
        }), "\u7C7B\u578B\u5B58\u50A8\u3002"]
      }), "\n"]
    }), "\n", jsxs(_components.h4, {
      id: "523-\u5546\u54C1\u4FE1\u606F\u8868products",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#523-\u5546\u54C1\u4FE1\u606F\u8868products",
        children: "#"
      }), "5.2.3 \u5546\u54C1\u4FE1\u606F\u8868\uFF08products\uFF09"]
    }), "\n", jsx(_components.p, {
      children: "\u6700\u540E\uFF0C\u6211\u4EEC\u8BBE\u8BA1\u5546\u54C1\u4FE1\u606F\u8868\uFF0C\u7528\u4E8E\u5B58\u50A8\u5546\u54C1\u7684\u4FE1\u606F\uFF0C\u5305\u62EC\u5546\u54C1ID\u3001\u5546\u54C1\u540D\u79F0\u3001\u4EF7\u683C\u7B49\u3002"
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
              children: "TABLE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " products ("
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    product_id "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "INT"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "PRIMARY"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "KEY"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    product_name "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "VARCHAR"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "100"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "NOT"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "NULL"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    price "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "DECIMAL"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "10"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "2"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ");"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "product_id"
        }), "\uFF1A\u5546\u54C1ID\uFF0C\u4F5C\u4E3A\u4E3B\u952E\uFF0C\u4FDD\u8BC1\u552F\u4E00\u6027\u3002"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "product_name"
        }), "\uFF1A\u5546\u54C1\u540D\u79F0\uFF0C\u9650\u5B9A\u4E3A\u4E0D\u4E3A\u7A7A\u7684\u5B57\u7B26\u4E32\u3002"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "price"
        }), "\uFF1A\u5546\u54C1\u4EF7\u683C\uFF0C\u4F7F\u7528", jsx(_components.code, {
          children: "DECIMAL"
        }), "\u7C7B\u578B\u5B58\u50A8\u3002"]
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "53-\u6570\u636E\u5E93\u8868\u5173\u7CFB\u5206\u6790",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#53-\u6570\u636E\u5E93\u8868\u5173\u7CFB\u5206\u6790",
        children: "#"
      }), "5.3 \u6570\u636E\u5E93\u8868\u5173\u7CFB\u5206\u6790"]
    }), "\n", jsx(_components.p, {
      children: "\u6839\u636E\u4E0A\u8FF0\u8BBE\u8BA1\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5F97\u51FA\u4EE5\u4E0B\u6570\u636E\u5E93\u8868\u4E4B\u95F4\u7684\u5173\u7CFB\uFF1A"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "\u7528\u6237\u4FE1\u606F\u8868\uFF08users\uFF09\u4E0E\u8BA2\u5355\u4FE1\u606F\u8868\uFF08orders\uFF09\u4E4B\u95F4\u662F\u4E00\u5BF9\u591A\u5173\u7CFB\uFF0C\u5373\u4E00\u4E2A\u7528\u6237\u53EF\u4EE5\u5BF9\u5E94\u591A\u4E2A\u8BA2\u5355\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u8BA2\u5355\u4FE1\u606F\u8868\uFF08orders\uFF09\u4E0E\u5546\u54C1\u4FE1\u606F\u8868\uFF08products\uFF09\u4E4B\u95F4\u662F\u591A\u5BF9\u4E00\u5173\u7CFB\uFF0C\u5373\u591A\u4E2A\u8BA2\u5355\u5BF9\u5E94\u4E00\u4E2A\u5546\u54C1\u3002"
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "54-\u6570\u636E\u5E93\u64CD\u4F5C\u793A\u4F8B",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#54-\u6570\u636E\u5E93\u64CD\u4F5C\u793A\u4F8B",
        children: "#"
      }), "5.4 \u6570\u636E\u5E93\u64CD\u4F5C\u793A\u4F8B"]
    }), "\n", jsx(_components.p, {
      children: "\u4E0B\u9762\u6211\u4EEC\u7ED9\u51FA\u4E00\u4E2A\u7B80\u5355\u7684\u6570\u636E\u5E93\u64CD\u4F5C\u793A\u4F8B\uFF0C\u5C55\u793A\u5982\u4F55\u5411\u7528\u6237\u4FE1\u606F\u8868\u4E2D\u63D2\u5165\u4E00\u6761\u7528\u6237\u6570\u636E\uFF1A"
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
              children: "INSERT"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "INTO"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " users ("
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "user_id"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ", username, phone) "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "VALUES"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "1"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Alice"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "12345678901"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ");"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u4EE5\u4E0A\u64CD\u4F5C\uFF0C\u6211\u4EEC\u6210\u529F\u5411\u7528\u6237\u4FE1\u606F\u8868\u4E2D\u63D2\u5165\u4E86\u4E00\u6761\u7528\u6237\u6570\u636E\uFF0C\u7528\u6237ID\u4E3A1\uFF0C\u7528\u6237\u540D\u4E3AAlice\uFF0C\u624B\u673A\u53F7\u7801\u4E3A12345678901\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "\u8868\u683C\u5C55\u793A",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u8868\u683C\u5C55\u793A",
        children: "#"
      }), "\u8868\u683C\u5C55\u793A"]
    }), "\n", jsx(_components.p, {
      children: "\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u901A\u8FC7\u8868\u683C\u7684\u5F62\u5F0F\u5C55\u793A\u5404\u8868\u7684\u7ED3\u6784\u8BBE\u8BA1\uFF0C\u4EE5\u4FBF\u66F4\u76F4\u89C2\u5730\u67E5\u770B\uFF1A"
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Table Name"
          }), jsx(_components.th, {
            children: "Columns"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "users"
          }), jsx(_components.td, {
            children: "user_id, username, phone"
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "orders"
          }), jsx(_components.td, {
            children: "order_id, user_id, amount"
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "products"
          }), jsx(_components.td, {
            children: "product_id, product_name, price"
          })]
        })]
      })]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u8FD9\u4E2A\u8868\u683C\u4E2D\uFF0C\u6E05\u6670\u5730\u5217\u51FA\u4E86\u6BCF\u4E2A\u8868\u6240\u5305\u542B\u7684\u5B57\u6BB5\u4FE1\u606F\uFF0C\u65B9\u4FBF\u67E5\u770B\u548C\u6BD4\u5BF9\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "\u603B\u7ED3",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u603B\u7ED3",
        children: "#"
      }), "\u603B\u7ED3"]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u672C\u5B9E\u4F8B\u5206\u6790\uFF0C\u6211\u4EEC\u6DF1\u5165\u4E86\u89E3\u4E86\u5178\u578B\u7684MySQL\u8868\u7ED3\u6784\u8BBE\u8BA1\u6848\u4F8B\uFF0C\u5305\u62EC\u8BBE\u8BA1\u601D\u8DEF\u3001\u8868\u7ED3\u6784\u8BBE\u8BA1\u3001\u8868\u5173\u7CFB\u5206\u6790\u4EE5\u53CA\u6570\u636E\u5E93\u64CD\u4F5C\u793A\u4F8B\u3002\u901A\u8FC7\u5B9E\u9645\u6848\u4F8B\u7684\u5B66\u4E60\uFF0C\u6211\u4EEC\u80FD\u66F4\u597D\u5730\u5E94\u7528\u8868\u7ED3\u6784\u8BBE\u8BA1\u7684\u77E5\u8BC6\u5230\u5B9E\u9643\u9879\u76EE\u4E2D\uFF0C\u63D0\u9AD8\u6570\u636E\u5E93\u8BBE\u8BA1\u7684\u8D28\u91CF\u548C\u6548\u7387\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u5728\u4E0B\u4E00\u7AE0\u4E2D\uFF0C\u6211\u4EEC\u5C06\u7EE7\u7EED\u63A2\u8BA8\u4F18\u5316\u6848\u4F8B\uFF0C\u5E76\u5BF9\u524D\u9762\u6240\u5B66\u5185\u5BB9\u8FDB\u884C\u66F4\u6DF1\u5165\u7684\u603B\u7ED3\u548C\u63A2\u8BA8\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "6-\u4F18\u5316\u6848\u4F8B\u63A2\u8BA8\u4E0E\u603B\u7ED3",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#6-\u4F18\u5316\u6848\u4F8B\u63A2\u8BA8\u4E0E\u603B\u7ED3",
        children: "#"
      }), "6. \u4F18\u5316\u6848\u4F8B\u63A2\u8BA8\u4E0E\u603B\u7ED3"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u5B9E\u9645\u7684MySQL\u8868\u7ED3\u6784\u8BBE\u8BA1\u548C\u4F18\u5316\u8FC7\u7A0B\u4E2D\uFF0C\u7ECF\u5E38\u4F1A\u9047\u5230\u5404\u79CD\u6027\u80FD\u74F6\u9888\u548C\u95EE\u9898\u3002\u672C\u7AE0\u5C06\u901A\u8FC7\u4E00\u4E2A\u5177\u4F53\u7684\u6848\u4F8B\u6765\u5C55\u793A\u5982\u4F55\u4F18\u5316MySQL\u8868\u7ED3\u6784\u8BBE\u8BA1\uFF0C\u4EE5\u63D0\u9AD8\u7CFB\u7EDF\u7684\u6027\u80FD\u548C\u53EF\u9760\u6027\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "\u4F18\u5316\u6848\u4F8B\u80CC\u666F",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u4F18\u5316\u6848\u4F8B\u80CC\u666F",
        children: "#"
      }), "\u4F18\u5316\u6848\u4F8B\u80CC\u666F"]
    }), "\n", jsx(_components.p, {
      children: "\u5047\u8BBE\u6211\u4EEC\u6709\u4E00\u4E2A\u5728\u7EBF\u5546\u57CE\u7CFB\u7EDF\uFF0C\u5176\u4E2D\u7684\u8BA2\u5355\u8868(order_table)\u548C\u5546\u54C1\u8868(product_table)\u662F\u7CFB\u7EDF\u4E2D\u7684\u4E24\u5F20\u6838\u5FC3\u8868\u3002\u7531\u4E8E\u8BA2\u5355\u8868\u548C\u5546\u54C1\u8868\u6570\u636E\u91CF\u5DE8\u5927\uFF0C\u67E5\u8BE2\u9891\u7E41\uFF0C\u73B0\u5728\u6211\u4EEC\u9700\u8981\u5BF9\u8FD9\u4E24\u5F20\u8868\u8FDB\u884C\u7ED3\u6784\u8BBE\u8BA1\u4F18\u5316\uFF0C\u4EE5\u63D0\u5347\u7CFB\u7EDF\u6027\u80FD\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "\u4F18\u5316\u6848\u4F8B\u6B65\u9AA4",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u4F18\u5316\u6848\u4F8B\u6B65\u9AA4",
        children: "#"
      }), "\u4F18\u5316\u6848\u4F8B\u6B65\u9AA4"]
    }), "\n", jsxs(_components.h4, {
      id: "1-\u4F18\u5316\u8BA2\u5355\u8868order_table",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#1-\u4F18\u5316\u8BA2\u5355\u8868order_table",
        children: "#"
      }), "1. \u4F18\u5316\u8BA2\u5355\u8868(order_table)"]
    }), "\n", jsx(_components.p, {
      children: "\u9996\u5148\uFF0C\u6211\u4EEC\u9488\u5BF9\u8BA2\u5355\u8868(order_table)\u8FDB\u884C\u4F18\u5316\u3002\u5F53\u524D\u8BA2\u5355\u8868\u7ED3\u6784\u5982\u4E0B\uFF1A"
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "\u5217\u540D"
          }), jsx(_components.th, {
            children: "\u6570\u636E\u7C7B\u578B"
          }), jsx(_components.th, {
            children: "\u5907\u6CE8"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "order_id"
          }), jsx(_components.td, {
            children: "INT"
          }), jsx(_components.td, {
            children: "\u8BA2\u5355ID\uFF0C\u4E3B\u952E"
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "customer_id"
          }), jsx(_components.td, {
            children: "INT"
          }), jsx(_components.td, {
            children: "\u5BA2\u6237ID"
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "product_id"
          }), jsx(_components.td, {
            children: "INT"
          }), jsx(_components.td, {
            children: "\u5546\u54C1ID"
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "amount"
          }), jsx(_components.td, {
            children: "DECIMAL"
          }), jsx(_components.td, {
            children: "\u8BA2\u5355\u91D1\u989D"
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "create_time"
          }), jsx(_components.td, {
            children: "DATETIME"
          }), jsx(_components.td, {
            children: "\u8BA2\u5355\u521B\u5EFA\u65F6\u95F4"
          })]
        })]
      })]
    }), "\n", jsx(_components.p, {
      children: "\u9488\u5BF9\u8FD9\u4E2A\u8BA2\u5355\u8868\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8FDB\u884C\u4EE5\u4E0B\u4F18\u5316\u6B65\u9AA4\uFF1A"
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
              children: "-- \u4E3A\u8BA2\u5355\u8868\u6DFB\u52A0\u7D22\u5F15"
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
              children: " idx_customer_id "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "ON"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " order_table(customer_id);"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "-- \u5BF9\u8BA2\u5355\u91D1\u989D\u5B57\u6BB5\u8FDB\u884C\u6570\u636E\u7C7B\u578B\u8C03\u6574"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "ALTER"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "TABLE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " order_table "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "MODIFY"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " amount "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "DECIMAL"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "10"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "2"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ");"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h4, {
      id: "2-\u4F18\u5316\u5546\u54C1\u8868product_table",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#2-\u4F18\u5316\u5546\u54C1\u8868product_table",
        children: "#"
      }), "2. \u4F18\u5316\u5546\u54C1\u8868(product_table)"]
    }), "\n", jsx(_components.p, {
      children: "\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u7EE7\u7EED\u5BF9\u5546\u54C1\u8868(product_table)\u8FDB\u884C\u4F18\u5316\u3002\u5F53\u524D\u5546\u54C1\u8868\u7ED3\u6784\u5982\u4E0B\uFF1A"
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "\u5217\u540D"
          }), jsx(_components.th, {
            children: "\u6570\u636E\u7C7B\u578B"
          }), jsx(_components.th, {
            children: "\u5907\u6CE8"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "product_id"
          }), jsx(_components.td, {
            children: "INT"
          }), jsx(_components.td, {
            children: "\u5546\u54C1ID\uFF0C\u4E3B\u952E"
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "product_name"
          }), jsx(_components.td, {
            children: "VARCHAR(50)"
          }), jsx(_components.td, {
            children: "\u5546\u54C1\u540D\u79F0"
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "price"
          }), jsx(_components.td, {
            children: "DECIMAL"
          }), jsx(_components.td, {
            children: "\u5546\u54C1\u4EF7\u683C"
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "stock"
          }), jsx(_components.td, {
            children: "INT"
          }), jsx(_components.td, {
            children: "\u5546\u54C1\u5E93\u5B58"
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "create_time"
          }), jsx(_components.td, {
            children: "DATETIME"
          }), jsx(_components.td, {
            children: "\u5546\u54C1\u521B\u5EFA\u65F6\u95F4"
          })]
        })]
      })]
    }), "\n", jsx(_components.p, {
      children: "\u5BF9\u4E8E\u5546\u54C1\u8868\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6267\u884C\u5982\u4E0B\u4F18\u5316\u64CD\u4F5C\uFF1A"
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
              children: "-- \u4E3A\u5546\u54C1\u8868\u6DFB\u52A0\u7D22\u5F15"
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
              children: " idx_product_name "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "ON"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " product_table(product_name);"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "-- \u589E\u52A0\u9002\u5F53\u7684\u552F\u4E00\u6027\u7EA6\u675F"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "ALTER"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "TABLE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " product_table "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "ADD"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "UNIQUE"
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
              children: " unique_product_name(product_name);"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h3, {
      id: "\u4F18\u5316\u6848\u4F8B\u603B\u7ED3",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u4F18\u5316\u6848\u4F8B\u603B\u7ED3",
        children: "#"
      }), "\u4F18\u5316\u6848\u4F8B\u603B\u7ED3"]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u4EE5\u4E0A\u4F18\u5316\u64CD\u4F5C\uFF0C\u6211\u4EEC\u53EF\u4EE5\u660E\u663E\u6539\u5584\u8BA2\u5355\u8868\u548C\u5546\u54C1\u8868\u7684\u67E5\u8BE2\u6027\u80FD\u548C\u6570\u636E\u5B8C\u6574\u6027\u3002\u5728\u5B9E\u9645\u9879\u76EE\u4E2D\uFF0C\u8868\u7ED3\u6784\u8BBE\u8BA1\u7684\u5408\u7406\u6027\u548C\u7D22\u5F15\u7684\u5408\u7406\u5E94\u7528\u662F\u5173\u952E\u56E0\u7D20\uFF0C\u540C\u65F6\u907F\u514D\u8FC7\u5EA6\u5197\u4F59\u548C\u4E0D\u5FC5\u8981\u7684\u5B57\u6BB5\u8BBE\u8BA1\u4E5F\u662F\u4F18\u5316\u7684\u91CD\u70B9\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u4F18\u5316\u6570\u636E\u5E93\u8868\u7ED3\u6784\u662F\u4E00\u4E2A\u4E0D\u65AD\u4F18\u5316\u548C\u6539\u8FDB\u7684\u8FC7\u7A0B\uFF0C\u9700\u8981\u7ED3\u5408\u5177\u4F53\u4E1A\u52A1\u573A\u666F\u548C\u5B9E\u9645\u6027\u80FD\u9700\u6C42\u6765\u8FDB\u884C\u8BBE\u8BA1\u548C\u8C03\u6574\uFF0C\u901A\u8FC7\u6301\u7EED\u4F18\u5316\u6765\u63D0\u5347\u7CFB\u7EDF\u7684\u6574\u4F53\u6027\u80FD\u548C\u7A33\u5B9A\u6027\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u4EE5\u4E0A\u662F\u4F18\u5316\u6848\u4F8B\u7684\u63A2\u8BA8\u548C\u603B\u7ED3\uFF0C\u5E0C\u671B\u5BF9\u4F60\u5728\u5B9E\u9645\u9879\u76EE\u4E2D\u7684\u8868\u7ED3\u6784\u8BBE\u8BA1\u548C\u4F18\u5316\u8FC7\u7A0B\u6709\u6240\u5E2E\u52A9\u3002"
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

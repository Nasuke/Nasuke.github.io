import { jsx, jsxs, Fragment } from "react/jsx-runtime";
const frontmatter = void 0;
const toc = [{
  "id": "21-\u6570\u636E\u7C7B\u578B\u6982\u8FF0",
  "text": "2.1 \u6570\u636E\u7C7B\u578B\u6982\u8FF0",
  "depth": 3
}, {
  "id": "211-\u6570\u503C\u578B\u6570\u636E\u7C7B\u578B",
  "text": "2.1.1 \u6570\u503C\u578B\u6570\u636E\u7C7B\u578B",
  "depth": 4
}, {
  "id": "212-\u5B57\u7B26\u578B\u6570\u636E\u7C7B\u578B",
  "text": "2.1.2 \u5B57\u7B26\u578B\u6570\u636E\u7C7B\u578B",
  "depth": 4
}, {
  "id": "213-\u65E5\u671F\u548C\u65F6\u95F4\u578B\u6570\u636E\u7C7B\u578B",
  "text": "2.1.3 \u65E5\u671F\u548C\u65F6\u95F4\u578B\u6570\u636E\u7C7B\u578B",
  "depth": 4
}, {
  "id": "22-\u7EA6\u675F\u7684\u4F5C\u7528\u4E0E\u5206\u7C7B",
  "text": "2.2 \u7EA6\u675F\u7684\u4F5C\u7528\u4E0E\u5206\u7C7B",
  "depth": 3
}, {
  "id": "221-\u4E3B\u952E\u7EA6\u675F",
  "text": "2.2.1 \u4E3B\u952E\u7EA6\u675F",
  "depth": 4
}, {
  "id": "222-\u5916\u952E\u7EA6\u675F",
  "text": "2.2.2 \u5916\u952E\u7EA6\u675F",
  "depth": 4
}, {
  "id": "223-\u552F\u4E00\u7EA6\u675F",
  "text": "2.2.3 \u552F\u4E00\u7EA6\u675F",
  "depth": 4
}, {
  "id": "224-\u9ED8\u8BA4\u7EA6\u675F",
  "text": "2.2.4 \u9ED8\u8BA4\u7EA6\u675F",
  "depth": 4
}, {
  "id": "225-\u68C0\u67E5\u7EA6\u675F",
  "text": "2.2.5 \u68C0\u67E5\u7EA6\u675F",
  "depth": 4
}, {
  "id": "31-\u8BBE\u8BA1\u89C4\u8303\u4E0E\u8303\u5F0F",
  "text": "3.1 \u8BBE\u8BA1\u89C4\u8303\u4E0E\u8303\u5F0F",
  "depth": 3
}, {
  "id": "311-\u6570\u636E\u5E93\u8BBE\u8BA1\u8303\u5F0F\u6982\u8FF0",
  "text": "3.1.1 \u6570\u636E\u5E93\u8BBE\u8BA1\u8303\u5F0F\u6982\u8FF0",
  "depth": 4
}, {
  "id": "312-\u7B2C\u4E00\u8303\u5F0F1nf\u8981\u6C42",
  "text": "3.1.2 \u7B2C\u4E00\u8303\u5F0F\uFF081NF\uFF09\u8981\u6C42",
  "depth": 4
}, {
  "id": "313-\u7B2C\u4E8C\u8303\u5F0F2nf\u8981\u6C42",
  "text": "3.1.3 \u7B2C\u4E8C\u8303\u5F0F\uFF082NF\uFF09\u8981\u6C42",
  "depth": 4
}, {
  "id": "314-\u7B2C\u4E09\u8303\u5F0F3nf\u8981\u6C42",
  "text": "3.1.4 \u7B2C\u4E09\u8303\u5F0F\uFF083NF\uFF09\u8981\u6C42",
  "depth": 4
}, {
  "id": "32-\u5173\u7CFB\u95F4\u7684\u8054\u7CFB",
  "text": "3.2 \u5173\u7CFB\u95F4\u7684\u8054\u7CFB",
  "depth": 3
}, {
  "id": "321-\u4E00\u5BF9\u4E00\u5173\u7CFB",
  "text": "3.2.1 \u4E00\u5BF9\u4E00\u5173\u7CFB",
  "depth": 4
}, {
  "id": "322-\u4E00\u5BF9\u591A\u5173\u7CFB",
  "text": "3.2.2 \u4E00\u5BF9\u591A\u5173\u7CFB",
  "depth": 4
}, {
  "id": "323-\u591A\u5BF9\u591A\u5173\u7CFB",
  "text": "3.2.3 \u591A\u5BF9\u591A\u5173\u7CFB",
  "depth": 4
}, {
  "id": "41-\u5B9E\u4F53\u5B8C\u6574\u6027",
  "text": "4.1 \u5B9E\u4F53\u5B8C\u6574\u6027",
  "depth": 3
}, {
  "id": "411-\u4E3B\u952E\u7EA6\u675F\u4FDD\u8BC1\u5B9E\u4F53\u5B8C\u6574\u6027",
  "text": "4.1.1 \u4E3B\u952E\u7EA6\u675F\u4FDD\u8BC1\u5B9E\u4F53\u5B8C\u6574\u6027",
  "depth": 4
}, {
  "id": "412-\u552F\u4E00\u7EA6\u675F\u4E0E\u68C0\u67E5\u7EA6\u675F",
  "text": "4.1.2 \u552F\u4E00\u7EA6\u675F\u4E0E\u68C0\u67E5\u7EA6\u675F",
  "depth": 4
}, {
  "id": "42-\u53C2\u7167\u5B8C\u6574\u6027",
  "text": "4.2 \u53C2\u7167\u5B8C\u6574\u6027",
  "depth": 3
}, {
  "id": "421-\u5916\u952E\u7EA6\u675F\u7684\u4F5C\u7528",
  "text": "4.2.1 \u5916\u952E\u7EA6\u675F\u7684\u4F5C\u7528",
  "depth": 4
}, {
  "id": "422-\u5916\u952E\u7EA6\u675F\u7684\u5E38\u89C1\u9519\u8BEF\u53CA\u5904\u7406",
  "text": "4.2.2 \u5916\u952E\u7EA6\u675F\u7684\u5E38\u89C1\u9519\u8BEF\u53CA\u5904\u7406",
  "depth": 4
}, {
  "id": "43-\u6570\u636E\u5B8C\u6574\u6027\u7684\u7EF4\u62A4\u4E0E\u4F18\u5316",
  "text": "4.3 \u6570\u636E\u5B8C\u6574\u6027\u7684\u7EF4\u62A4\u4E0E\u4F18\u5316",
  "depth": 3
}, {
  "id": "51-\u7528\u6237\u6743\u9650\u7BA1\u7406",
  "text": "5.1 \u7528\u6237\u6743\u9650\u7BA1\u7406",
  "depth": 3
}, {
  "id": "511-\u521B\u5EFA\u4E0E\u7BA1\u7406\u7528\u6237",
  "text": "5.1.1 \u521B\u5EFA\u4E0E\u7BA1\u7406\u7528\u6237",
  "depth": 4
}, {
  "id": "512-\u5206\u914D\u6743\u9650\u548C\u89D2\u8272",
  "text": "5.1.2 \u5206\u914D\u6743\u9650\u548C\u89D2\u8272",
  "depth": 4
}, {
  "id": "52-\u6570\u636E\u5907\u4EFD\u4E0E\u6062\u590D",
  "text": "5.2 \u6570\u636E\u5907\u4EFD\u4E0E\u6062\u590D",
  "depth": 3
}, {
  "id": "521-\u5B9A\u671F\u5907\u4EFD\u6570\u636E\u7684\u91CD\u8981\u6027",
  "text": "5.2.1 \u5B9A\u671F\u5907\u4EFD\u6570\u636E\u7684\u91CD\u8981\u6027",
  "depth": 4
}, {
  "id": "522-\u5907\u4EFD\u7B56\u7565\u9009\u62E9\u53CA\u5907\u4EFD\u6062\u590D\u65B9\u6848",
  "text": "5.2.2 \u5907\u4EFD\u7B56\u7565\u9009\u62E9\u53CA\u5907\u4EFD\u6062\u590D\u65B9\u6848",
  "depth": 4
}, {
  "id": "61-\u67E5\u8BE2\u6027\u80FD\u4F18\u5316\u6982\u8FF0",
  "text": "6.1 \u67E5\u8BE2\u6027\u80FD\u4F18\u5316\u6982\u8FF0",
  "depth": 3
}, {
  "id": "611-sql\u67E5\u8BE2\u4F18\u5316\u57FA\u672C\u539F\u5219",
  "text": "6.1.1 SQL\u67E5\u8BE2\u4F18\u5316\u57FA\u672C\u539F\u5219",
  "depth": 4
}, {
  "id": "612-explain\u5DE5\u5177\u7684\u4F7F\u7528\u4E0E\u89E3\u8BFB",
  "text": "6.1.2 Explain\u5DE5\u5177\u7684\u4F7F\u7528\u4E0E\u89E3\u8BFB",
  "depth": 4
}, {
  "id": "62-\u7D22\u5F15\u8BBE\u8BA1\u4E0E\u4F18\u5316",
  "text": "6.2 \u7D22\u5F15\u8BBE\u8BA1\u4E0E\u4F18\u5316",
  "depth": 3
}, {
  "id": "621-\u7D22\u5F15\u539F\u7406\u53CA\u7C7B\u578B",
  "text": "6.2.1 \u7D22\u5F15\u539F\u7406\u53CA\u7C7B\u578B",
  "depth": 4
}, {
  "id": "622-\u521B\u5EFA\u5408\u9002\u7684\u7D22\u5F15",
  "text": "6.2.2 \u521B\u5EFA\u5408\u9002\u7684\u7D22\u5F15",
  "depth": 4
}, {
  "id": "623-\u7D22\u5F15\u7684\u7EF4\u62A4\u4E0E\u4F18\u5316\u6280\u5DE7",
  "text": "6.2.3 \u7D22\u5F15\u7684\u7EF4\u62A4\u4E0E\u4F18\u5316\u6280\u5DE7",
  "depth": 4
}];
const title = "6. \u9AD8\u6548\u67E5\u8BE2\u4E0E\u7D22\u5F15\u4F18\u5316";
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
    strong: "strong",
    ol: "ol"
  }, props.components);
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "1-mysql\u6570\u636E\u5E93\u8BBE\u8BA1\u57FA\u7840\u6982\u5FF5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#1-mysql\u6570\u636E\u5E93\u8BBE\u8BA1\u57FA\u7840\u6982\u5FF5",
        children: "#"
      }), "1. MySQL\u6570\u636E\u5E93\u8BBE\u8BA1\u57FA\u7840\u6982\u5FF5"]
    }), "\n", jsx(_components.p, {
      children: "\u5728MySQL\u6570\u636E\u5E93\u8BBE\u8BA1\u4E2D\uFF0C\u638C\u63E1\u57FA\u7840\u6982\u5FF5\u662F\u81F3\u5173\u91CD\u8981\u7684\u3002\u6570\u636E\u5E93\u8BBE\u8BA1\u7684\u76EE\u6807\u662F\u6784\u5EFA\u4E00\u4E2A\u7ED3\u6784\u826F\u597D\u3001\u9AD8\u6548\u3001\u6613\u4E8E\u7EF4\u62A4\u7684\u6570\u636E\u5E93\u7CFB\u7EDF\uFF0C\u540C\u65F6\u6EE1\u8DB3\u4E1A\u52A1\u9700\u6C42\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u4E3A\u4E86\u8FBE\u5230\u8FD9\u4E00\u76EE\u6807\uFF0C\u9700\u8981\u638C\u63E1\u6570\u636E\u5E93\u8BBE\u8BA1\u4E2D\u7684\u4E00\u4E9B\u6838\u5FC3\u6982\u5FF5\uFF0C\u4F8B\u5982\u5B9E\u4F53\u3001\u5C5E\u6027\u3001\u5173\u7CFB\u3001\u8303\u5F0F\u7B49\u3002\u5B9E\u4F53\u4EE3\u8868\u5B58\u50A8\u5728\u6570\u636E\u5E93\u4E2D\u7684\u57FA\u672C\u5BF9\u8C61\uFF0C\u5C5E\u6027\u63CF\u8FF0\u4E86\u5B9E\u4F53\u7684\u7279\u5F81\uFF0C\u800C\u5173\u7CFB\u5219\u662F\u4E0D\u540C\u5B9E\u4F53\u4E4B\u95F4\u7684\u8054\u7CFB\u3002\u6B64\u5916\uFF0C\u8303\u5F0F\u662F\u7528\u4E8E\u89C4\u8303\u6570\u636E\u5E93\u8BBE\u8BA1\u7684\u4E00\u7CFB\u5217\u89C4\u5219\uFF0C\u5305\u62EC\u7B2C\u4E00\u8303\u5F0F\u3001\u7B2C\u4E8C\u8303\u5F0F\u548C\u7B2C\u4E09\u8303\u5F0F\u7B49\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u6DF1\u5165\u7406\u89E3\u8FD9\u4E9B\u57FA\u7840\u6982\u5FF5\uFF0C\u53EF\u4EE5\u4E3A\u540E\u7EED\u7684\u6570\u636E\u7C7B\u578B\u9009\u62E9\u3001\u7EA6\u675F\u8BBE\u7F6E\u3001\u8868\u8BBE\u8BA1\u548C\u6570\u636E\u5B8C\u6574\u6027\u4FDD\u969C\u6253\u4E0B\u575A\u5B9E\u7684\u57FA\u7840\u3002\u5728\u6570\u636E\u5E93\u8BBE\u8BA1\u4E2D\uFF0C\u6E05\u6670\u7684\u6982\u5FF5\u8BA4\u77E5\u662F\u6210\u529F\u7684\u7B2C\u4E00\u6B65\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "2-\u6570\u636E\u7C7B\u578B\u4E0E\u7EA6\u675F",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#2-\u6570\u636E\u7C7B\u578B\u4E0E\u7EA6\u675F",
        children: "#"
      }), "2. \u6570\u636E\u7C7B\u578B\u4E0E\u7EA6\u675F"]
    }), "\n", jsxs(_components.h3, {
      id: "21-\u6570\u636E\u7C7B\u578B\u6982\u8FF0",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#21-\u6570\u636E\u7C7B\u578B\u6982\u8FF0",
        children: "#"
      }), "2.1 \u6570\u636E\u7C7B\u578B\u6982\u8FF0"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u6570\u636E\u5E93\u8BBE\u8BA1\u4E2D\uFF0C\u9009\u62E9\u5408\u9002\u7684\u6570\u636E\u7C7B\u578B\u5BF9\u4E8E\u6570\u636E\u5B58\u50A8\u548C\u5904\u7406\u81F3\u5173\u91CD\u8981\u3002\u4E0D\u540C\u7684\u6570\u636E\u7C7B\u578B\u5177\u6709\u4E0D\u540C\u7684\u5B58\u50A8\u5927\u5C0F\u3001\u53D6\u503C\u8303\u56F4\u548C\u5904\u7406\u80FD\u529B\uFF0C\u56E0\u6B64\u6211\u4EEC\u9700\u8981\u6839\u636E\u5B9E\u9645\u9700\u6C42\u6765\u9009\u62E9\u9002\u5F53\u7684\u6570\u636E\u7C7B\u578B\u3002\u5E38\u89C1\u7684\u6570\u636E\u7C7B\u578B\u4E3B\u8981\u5305\u62EC\u6570\u503C\u578B\u3001\u5B57\u7B26\u578B\u548C\u65E5\u671F\u65F6\u95F4\u578B\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "211-\u6570\u503C\u578B\u6570\u636E\u7C7B\u578B",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#211-\u6570\u503C\u578B\u6570\u636E\u7C7B\u578B",
        children: "#"
      }), "2.1.1 \u6570\u503C\u578B\u6570\u636E\u7C7B\u578B"]
    }), "\n", jsx(_components.p, {
      children: "\u6570\u503C\u578B\u6570\u636E\u7C7B\u578B\u7528\u4E8E\u5B58\u50A8\u6570\u5B57\u6570\u636E\uFF0C\u5728MySQL\u4E2D\u4E3B\u8981\u5305\u62EC\u6574\u578B\u3001\u6D6E\u70B9\u578B\u548C\u5B9A\u70B9\u578B\u3002\u5176\u4E2D\uFF0C\u6574\u578B\u5305\u62ECTINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\uFF0C\u800C\u6D6E\u70B9\u578B\u5305\u62ECFLOAT\u548CDOUBLE\uFF0C\u5B9A\u70B9\u578B\u5219\u662FDECIMAL\u3002\u5728\u9009\u62E9\u6570\u503C\u578B\u6570\u636E\u7C7B\u578B\u65F6\uFF0C\u9700\u8981\u8003\u8651\u6570\u636E\u7CBE\u5EA6\u548C\u8303\u56F4\uFF0C\u907F\u514D\u6570\u636E\u6EA2\u51FA\u6216\u7CBE\u5EA6\u4E22\u5931\u7684\u60C5\u51B5\u3002"
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
              children: " numbers ("
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
    }), "\n", jsxs(_components.h4, {
      id: "212-\u5B57\u7B26\u578B\u6570\u636E\u7C7B\u578B",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#212-\u5B57\u7B26\u578B\u6570\u636E\u7C7B\u578B",
        children: "#"
      }), "2.1.2 \u5B57\u7B26\u578B\u6570\u636E\u7C7B\u578B"]
    }), "\n", jsx(_components.p, {
      children: "\u5B57\u7B26\u578B\u6570\u636E\u7C7B\u578B\u7528\u4E8E\u5B58\u50A8\u6587\u672C\u6570\u636E\uFF0C\u5305\u62EC\u5B9A\u957F\u5B57\u7B26\u548C\u53D8\u957F\u5B57\u7B26\u3002\u5728MySQL\u4E2D\uFF0C\u5E38\u89C1\u7684\u5B57\u7B26\u578B\u6570\u636E\u7C7B\u578B\u6709CHAR\u548CVARCHAR\u3002CHAR\u7528\u4E8E\u5B58\u50A8\u5B9A\u957F\u5B57\u7B26\uFF0C\u800CVARCHAR\u7528\u4E8E\u5B58\u50A8\u53D8\u957F\u5B57\u7B26\uFF0C\u6839\u636E\u5B9E\u9645\u5B58\u50A8\u9700\u6C42\u9009\u62E9\u9002\u5F53\u7684\u5B57\u7B26\u578B\u6570\u636E\u7C7B\u578B\u53EF\u4EE5\u6709\u6548\u8282\u7701\u5B58\u50A8\u7A7A\u95F4\u3002"
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
              children: "CHAR"
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
      id: "213-\u65E5\u671F\u548C\u65F6\u95F4\u578B\u6570\u636E\u7C7B\u578B",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#213-\u65E5\u671F\u548C\u65F6\u95F4\u578B\u6570\u636E\u7C7B\u578B",
        children: "#"
      }), "2.1.3 \u65E5\u671F\u548C\u65F6\u95F4\u578B\u6570\u636E\u7C7B\u578B"]
    }), "\n", jsx(_components.p, {
      children: "\u65E5\u671F\u548C\u65F6\u95F4\u578B\u6570\u636E\u7C7B\u578B\u7528\u4E8E\u5B58\u50A8\u65E5\u671F\u3001\u65F6\u95F4\u6216\u65E5\u671F\u65F6\u95F4\u4FE1\u606F\u3002MySQL\u63D0\u4F9B\u4E86DATE\u3001TIME\u3001DATETIME\u548CTIMESTAMP\u7B49\u6570\u636E\u7C7B\u578B\u6765\u6EE1\u8DB3\u4E0D\u540C\u7684\u65F6\u95F4\u5B58\u50A8\u9700\u6C42\u3002\u5728\u8BBE\u8BA1\u8868\u7ED3\u6784\u65F6\uFF0C\u9009\u62E9\u5408\u9002\u7684\u65E5\u671F\u548C\u65F6\u95F4\u6570\u636E\u7C7B\u578B\u53EF\u4EE5\u65B9\u4FBF\u6570\u636E\u7684\u5904\u7406\u548C\u67E5\u8BE2\u3002"
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
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    order_date "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "DATE"
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
              children: "    delivery_time "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "DATETIME"
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
    }), "\n", jsxs(_components.h3, {
      id: "22-\u7EA6\u675F\u7684\u4F5C\u7528\u4E0E\u5206\u7C7B",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#22-\u7EA6\u675F\u7684\u4F5C\u7528\u4E0E\u5206\u7C7B",
        children: "#"
      }), "2.2 \u7EA6\u675F\u7684\u4F5C\u7528\u4E0E\u5206\u7C7B"]
    }), "\n", jsx(_components.p, {
      children: "\u7EA6\u675F\u53EF\u4EE5\u4FDD\u8BC1\u6570\u636E\u7684\u5B8C\u6574\u6027\u548C\u4E00\u81F4\u6027\uFF0C\u9632\u6B62\u9519\u8BEF\u6570\u636E\u7684\u63D2\u5165\u548C\u66F4\u65B0\u3002\u5728MySQL\u4E2D\uFF0C\u5E38\u89C1\u7684\u7EA6\u675F\u5305\u62EC\u4E3B\u952E\u7EA6\u675F\u3001\u5916\u952E\u7EA6\u675F\u3001\u552F\u4E00\u7EA6\u675F\u3001\u9ED8\u8BA4\u7EA6\u675F\u548C\u68C0\u67E5\u7EA6\u675F\uFF0C\u5B83\u4EEC\u5728\u6570\u636E\u5E93\u8BBE\u8BA1\u4E2D\u626E\u6F14\u7740\u4E0D\u540C\u7684\u89D2\u8272\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "221-\u4E3B\u952E\u7EA6\u675F",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#221-\u4E3B\u952E\u7EA6\u675F",
        children: "#"
      }), "2.2.1 \u4E3B\u952E\u7EA6\u675F"]
    }), "\n", jsx(_components.p, {
      children: "\u4E3B\u952E\u7EA6\u675F\u7528\u4E8E\u552F\u4E00\u6807\u8BC6\u8868\u4E2D\u7684\u6BCF\u6761\u8BB0\u5F55\uFF0C\u4FDD\u8BC1\u6570\u636E\u7684\u552F\u4E00\u6027\u3002\u4E3B\u952E\u7EA6\u675F\u8981\u6C42\u4E3B\u952E\u5217\u7684\u53D6\u503C\u552F\u4E00\u4E14\u4E0D\u4E3A\u7A7A\uFF0C\u53EF\u4EE5\u52A0\u901F\u6570\u636E\u7684\u68C0\u7D22\u548C\u5173\u8054\u64CD\u4F5C\u3002"
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
      id: "222-\u5916\u952E\u7EA6\u675F",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#222-\u5916\u952E\u7EA6\u675F",
        children: "#"
      }), "2.2.2 \u5916\u952E\u7EA6\u675F"]
    }), "\n", jsx(_components.p, {
      children: "\u5916\u952E\u7EA6\u675F\u7528\u4E8E\u5EFA\u7ACB\u8868\u4E0E\u8868\u4E4B\u95F4\u7684\u5173\u7CFB\uFF0C\u7EF4\u62A4\u6570\u636E\u4E4B\u95F4\u7684\u5F15\u7528\u5B8C\u6574\u6027\u3002\u5916\u952E\u7EA6\u675F\u8981\u6C42\u5B50\u8868\u7684\u5916\u952E\u5217\u503C\u5FC5\u987B\u5728\u7236\u8868\u7684\u4E3B\u952E\u5217\u4E2D\u5B58\u5728\uFF0C\u786E\u4FDD\u6570\u636E\u7684\u4E00\u81F4\u6027\u548C\u5173\u8054\u6027\u3002"
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
              children: " (product_id) "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "REFERENCES"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " products(product_id)"
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
      id: "223-\u552F\u4E00\u7EA6\u675F",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#223-\u552F\u4E00\u7EA6\u675F",
        children: "#"
      }), "2.2.3 \u552F\u4E00\u7EA6\u675F"]
    }), "\n", jsx(_components.p, {
      children: "\u552F\u4E00\u7EA6\u675F\u4FDD\u8BC1\u8868\u4E2D\u67D0\u4E00\u5217\u7684\u53D6\u503C\u552F\u4E00\uFF0C\u4E0D\u5141\u8BB8\u91CD\u590D\u503C\u7684\u63D2\u5165\u3002\u552F\u4E00\u7EA6\u675F\u53EF\u4EE5\u7528\u4E8E\u786E\u4FDD\u67D0\u4E9B\u6570\u636E\u7684\u552F\u4E00\u6027\u8981\u6C42\uFF0C\u5BF9\u4E8E\u9700\u8981\u4FDD\u6301\u6570\u636E\u4E00\u81F4\u6027\u7684\u573A\u666F\u975E\u5E38\u6709\u7528\u3002"
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
    }), "\n", jsxs(_components.h4, {
      id: "224-\u9ED8\u8BA4\u7EA6\u675F",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#224-\u9ED8\u8BA4\u7EA6\u675F",
        children: "#"
      }), "2.2.4 \u9ED8\u8BA4\u7EA6\u675F"]
    }), "\n", jsx(_components.p, {
      children: "\u9ED8\u8BA4\u7EA6\u675F\u6307\u5B9A\u5728\u63D2\u5165\u65B0\u8BB0\u5F55\u65F6\uFF0C\u5982\u679C\u672A\u6307\u5B9A\u503C\uFF0C\u5219\u4F7F\u7528\u9ED8\u8BA4\u503C\u3002\u9ED8\u8BA4\u7EA6\u675F\u53EF\u4EE5\u7B80\u5316\u6570\u636E\u63D2\u5165\u64CD\u4F5C\uFF0C\u786E\u4FDD\u8868\u4E2D\u67D0\u4E9B\u5217\u59CB\u7EC8\u5305\u542B\u6709\u6548\u503C\u3002"
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
              children: " students ("
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    student_id "
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
              children: "    gender ENUM("
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "M"
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
              children: "F"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "DEFAULT"
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
              children: "M"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
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
      id: "225-\u68C0\u67E5\u7EA6\u675F",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#225-\u68C0\u67E5\u7EA6\u675F",
        children: "#"
      }), "2.2.5 \u68C0\u67E5\u7EA6\u675F"]
    }), "\n", jsx(_components.p, {
      children: "\u68C0\u67E5\u7EA6\u675F\u7528\u4E8E\u9650\u5236\u5217\u4E2D\u7684\u53D6\u503C\u8303\u56F4\u6216\u683C\u5F0F\uFF0C\u786E\u4FDD\u6570\u636E\u7684\u6709\u6548\u6027\u3002\u901A\u8FC7\u5B9A\u4E49\u68C0\u67E5\u7EA6\u675F\uFF0C\u53EF\u4EE5\u5728\u6570\u636E\u5E93\u5C42\u9762\u5B9E\u73B0\u5BF9\u6570\u636E\u7684\u9A8C\u8BC1\u548C\u7B5B\u9009\u3002"
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
              children: " employees ("
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    employee_id "
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
              children: "    salary "
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
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "CHECK"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " (salary "
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
              children: "0"
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
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u5408\u7406\u9009\u62E9\u6570\u636E\u7C7B\u578B\u548C\u7EA6\u675F\uFF0C\u53EF\u4EE5\u6709\u6548\u63D0\u9AD8\u6570\u636E\u5E93\u7684\u6027\u80FD\u548C\u6570\u636E\u8D28\u91CF\uFF0C\u786E\u4FDD\u6570\u636E\u7684\u6709\u6548\u5B58\u50A8\u548C\u7BA1\u7406\u3002\u5728\u8BBE\u8BA1\u6570\u636E\u5E93\u8868\u7ED3\u6784\u65F6\uFF0C\u8981\u6839\u636E\u5B9E\u9645\u9700\u6C42\u548C\u4E1A\u52A1\u903B\u8F91\u6765\u7075\u6D3B\u5E94\u7528\u4E0D\u540C\u7684\u6570\u636E\u7C7B\u578B\u548C\u7EA6\u675F\uFF0C\u4EE5\u4FBF\u8FBE\u5230\u6700\u4F73\u7684\u6570\u636E\u5E93\u8BBE\u8BA1\u6548\u679C\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "3-\u8868\u8BBE\u8BA1\u548C\u5173\u7CFB\u5EFA\u7ACB",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#3-\u8868\u8BBE\u8BA1\u548C\u5173\u7CFB\u5EFA\u7ACB",
        children: "#"
      }), "3. \u8868\u8BBE\u8BA1\u548C\u5173\u7CFB\u5EFA\u7ACB"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u6570\u636E\u5E93\u8BBE\u8BA1\u4E2D\uFF0C\u8868\u7684\u8BBE\u8BA1\u548C\u5173\u7CFB\u7684\u5EFA\u7ACB\u662F\u81F3\u5173\u91CD\u8981\u7684\u73AF\u8282\u3002\u672C\u7AE0\u5C06\u91CD\u70B9\u4ECB\u7ECD\u8BBE\u8BA1\u89C4\u8303\u4E0E\u8303\u5F0F\uFF0C\u4EE5\u53CA\u5173\u7CFB\u95F4\u7684\u8054\u7CFB\uFF0C\u5E2E\u52A9\u4F60\u5EFA\u7ACB\u9AD8\u6548\u7684\u6570\u636E\u5E93\u7ED3\u6784\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "31-\u8BBE\u8BA1\u89C4\u8303\u4E0E\u8303\u5F0F",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#31-\u8BBE\u8BA1\u89C4\u8303\u4E0E\u8303\u5F0F",
        children: "#"
      }), "3.1 \u8BBE\u8BA1\u89C4\u8303\u4E0E\u8303\u5F0F"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u8BBE\u8BA1\u6570\u636E\u5E93\u8868\u7ED3\u6784\u65F6\uFF0C\u6211\u4EEC\u901A\u5E38\u9075\u5FAA\u4E00\u5B9A\u7684\u8BBE\u8BA1\u89C4\u8303\u548C\u8303\u5F0F\uFF0C\u4EE5\u786E\u4FDD\u6570\u636E\u5B58\u50A8\u7684\u9AD8\u6548\u6027\u548C\u4E00\u81F4\u6027\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "311-\u6570\u636E\u5E93\u8BBE\u8BA1\u8303\u5F0F\u6982\u8FF0",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#311-\u6570\u636E\u5E93\u8BBE\u8BA1\u8303\u5F0F\u6982\u8FF0",
        children: "#"
      }), "3.1.1 \u6570\u636E\u5E93\u8BBE\u8BA1\u8303\u5F0F\u6982\u8FF0"]
    }), "\n", jsx(_components.p, {
      children: "\u6570\u636E\u5E93\u8BBE\u8BA1\u8303\u5F0F\u662F\u6570\u636E\u5E93\u89C4\u8303\u5316\u7684\u91CD\u8981\u6307\u5BFC\u539F\u5219\uFF0C\u4E3B\u8981\u5305\u62EC1NF\u30012NF\u30013NF\u7B49\u8303\u5F0F\u3002\u8303\u5F0F\u7684\u9075\u5FAA\u53EF\u4EE5\u51CF\u5C11\u6570\u636E\u5197\u4F59\uFF0C\u63D0\u9AD8\u6570\u636E\u5B58\u50A8\u6548\u7387\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "312-\u7B2C\u4E00\u8303\u5F0F1nf\u8981\u6C42",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#312-\u7B2C\u4E00\u8303\u5F0F1nf\u8981\u6C42",
        children: "#"
      }), "3.1.2 \u7B2C\u4E00\u8303\u5F0F\uFF081NF\uFF09\u8981\u6C42"]
    }), "\n", jsx(_components.p, {
      children: "\u7B2C\u4E00\u8303\u5F0F\u8981\u6C42\u6BCF\u4E2A\u6570\u636E\u8868\u4E2D\u7684\u5217\u90FD\u662F\u4E0D\u53EF\u518D\u5206\u7684\u6700\u5C0F\u6570\u636E\u5355\u5143\uFF0C\u5373\u6BCF\u4E2A\u5B57\u6BB5\u90FD\u662F\u539F\u5B50\u6027\u7684\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "313-\u7B2C\u4E8C\u8303\u5F0F2nf\u8981\u6C42",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#313-\u7B2C\u4E8C\u8303\u5F0F2nf\u8981\u6C42",
        children: "#"
      }), "3.1.3 \u7B2C\u4E8C\u8303\u5F0F\uFF082NF\uFF09\u8981\u6C42"]
    }), "\n", jsx(_components.p, {
      children: "\u7B2C\u4E8C\u8303\u5F0F\u8981\u6C42\u6570\u636E\u8868\u4E2D\u7684\u975E\u4E3B\u5C5E\u6027\u5FC5\u987B\u5B8C\u5168\u4F9D\u8D56\u4E8E\u5019\u9009\u952E\uFF0C\u800C\u4E0D\u662F\u90E8\u5206\u4F9D\u8D56\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "314-\u7B2C\u4E09\u8303\u5F0F3nf\u8981\u6C42",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#314-\u7B2C\u4E09\u8303\u5F0F3nf\u8981\u6C42",
        children: "#"
      }), "3.1.4 \u7B2C\u4E09\u8303\u5F0F\uFF083NF\uFF09\u8981\u6C42"]
    }), "\n", jsx(_components.p, {
      children: "\u7B2C\u4E09\u8303\u5F0F\u8981\u6C42\u6570\u636E\u8868\u4E2D\u7684\u6BCF\u4E00\u5217\u53EA\u4E0E\u4E3B\u952E\u6709\u76F4\u63A5\u5173\u7CFB\uFF0C\u800C\u4E0D\u4F9D\u8D56\u4E8E\u5176\u4ED6\u975E\u4E3B\u5C5E\u6027\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "32-\u5173\u7CFB\u95F4\u7684\u8054\u7CFB",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#32-\u5173\u7CFB\u95F4\u7684\u8054\u7CFB",
        children: "#"
      }), "3.2 \u5173\u7CFB\u95F4\u7684\u8054\u7CFB"]
    }), "\n", jsx(_components.p, {
      children: "\u6570\u636E\u5E93\u4E2D\u7684\u8868\u901A\u8FC7\u4E0D\u540C\u7684\u5173\u7CFB\u8FDB\u884C\u8054\u7CFB\uFF0C\u5E38\u89C1\u7684\u5173\u7CFB\u5305\u62EC\u4E00\u5BF9\u4E00\u3001\u4E00\u5BF9\u591A\u548C\u591A\u5BF9\u591A\u5173\u7CFB\uFF0C\u8FD9\u4E9B\u5173\u7CFB\u7684\u5EFA\u7ACB\u5F71\u54CD\u7740\u6570\u636E\u5E93\u7684\u7ED3\u6784\u548C\u6027\u80FD\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "321-\u4E00\u5BF9\u4E00\u5173\u7CFB",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#321-\u4E00\u5BF9\u4E00\u5173\u7CFB",
        children: "#"
      }), "3.2.1 \u4E00\u5BF9\u4E00\u5173\u7CFB"]
    }), "\n", jsx(_components.p, {
      children: "\u4E00\u5BF9\u4E00\u5173\u7CFB\u6307\u7684\u662F\u4E24\u4E2A\u8868\u4E4B\u95F4\u5B58\u5728\u4E00\u4E00\u5BF9\u5E94\u7684\u5173\u7CFB\uFF0C\u5176\u4E2D\u4E00\u4E2A\u8868\u7684\u4E00\u6761\u8BB0\u5F55\u5BF9\u5E94\u53E6\u4E00\u4E2A\u8868\u4E2D\u7684\u4E00\u6761\u8BB0\u5F55\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "322-\u4E00\u5BF9\u591A\u5173\u7CFB",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#322-\u4E00\u5BF9\u591A\u5173\u7CFB",
        children: "#"
      }), "3.2.2 \u4E00\u5BF9\u591A\u5173\u7CFB"]
    }), "\n", jsx(_components.p, {
      children: "\u4E00\u5BF9\u591A\u5173\u7CFB\u6307\u7684\u662F\u4E00\u4E2A\u8868\u7684\u4E00\u6761\u8BB0\u5F55\u5BF9\u5E94\u53E6\u4E00\u4E2A\u8868\u4E2D\u591A\u6761\u8BB0\u5F55\uFF0C\u5373\u4E00\u6761\u8BB0\u5F55\u5728\u53E6\u4E00\u4E2A\u8868\u4E2D\u53EF\u4EE5\u6709\u591A\u4E2A\u5173\u8054\u8BB0\u5F55\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "323-\u591A\u5BF9\u591A\u5173\u7CFB",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#323-\u591A\u5BF9\u591A\u5173\u7CFB",
        children: "#"
      }), "3.2.3 \u591A\u5BF9\u591A\u5173\u7CFB"]
    }), "\n", jsx(_components.p, {
      children: "\u591A\u5BF9\u591A\u5173\u7CFB\u6307\u7684\u662F\u4E24\u4E2A\u8868\u4E4B\u95F4\u4E92\u76F8\u5173\u8054\uFF0C\u4E00\u6761\u8BB0\u5F55\u5728\u4E24\u4E2A\u8868\u4E2D\u90FD\u53EF\u4EE5\u5BF9\u5E94\u591A\u6761\u8BB0\u5F55\uFF0C\u901A\u5E38\u901A\u8FC7\u7B2C\u4E09\u5F20\u4E2D\u95F4\u8868\u6765\u5B9E\u73B0\u591A\u5BF9\u591A\u5173\u7CFB\u7684\u5EFA\u7ACB\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u8BBE\u8BA1\u89C4\u8303\u4E0E\u8303\u5F0F\u7684\u7406\u89E3\uFF0C\u4EE5\u53CA\u5BF9\u5173\u7CFB\u95F4\u8054\u7CFB\u7684\u628A\u63E1\uFF0C\u4F60\u53EF\u4EE5\u66F4\u52A0\u6E05\u6670\u5730\u6784\u5EFA\u6570\u636E\u5E93\u8868\u7ED3\u6784\uFF0C\u786E\u4FDD\u6570\u636E\u5E93\u7684\u9AD8\u6548\u6027\u548C\u4E00\u81F4\u6027\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "4-\u6570\u636E\u5B8C\u6574\u6027\u4FDD\u969C",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#4-\u6570\u636E\u5B8C\u6574\u6027\u4FDD\u969C",
        children: "#"
      }), "4. \u6570\u636E\u5B8C\u6574\u6027\u4FDD\u969C"]
    }), "\n", jsxs(_components.h3, {
      id: "41-\u5B9E\u4F53\u5B8C\u6574\u6027",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#41-\u5B9E\u4F53\u5B8C\u6574\u6027",
        children: "#"
      }), "4.1 \u5B9E\u4F53\u5B8C\u6574\u6027"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u6570\u636E\u5E93\u8BBE\u8BA1\u4E2D\uFF0C\u5B9E\u4F53\u5B8C\u6574\u6027\u662F\u975E\u5E38\u91CD\u8981\u7684\u4E00\u73AF\uFF0C\u5B83\u786E\u4FDD\u6570\u636E\u8868\u4E2D\u7684\u6BCF\u4E00\u884C\u90FD\u80FD\u88AB\u552F\u4E00\u5730\u6807\u8BC6\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u51FA\u73B0 NULL \u503C\u3002\u4EE5\u4E0B\u662F\u5B9E\u4F53\u5B8C\u6574\u6027\u7684\u51E0\u79CD\u4FDD\u969C\u65B9\u5F0F\uFF1A"
    }), "\n", jsxs(_components.h4, {
      id: "411-\u4E3B\u952E\u7EA6\u675F\u4FDD\u8BC1\u5B9E\u4F53\u5B8C\u6574\u6027",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#411-\u4E3B\u952E\u7EA6\u675F\u4FDD\u8BC1\u5B9E\u4F53\u5B8C\u6574\u6027",
        children: "#"
      }), "4.1.1 \u4E3B\u952E\u7EA6\u675F\u4FDD\u8BC1\u5B9E\u4F53\u5B8C\u6574\u6027"]
    }), "\n", jsx(_components.p, {
      children: "\u4E3B\u952E\u7EA6\u675F\u662F\u5B9E\u73B0\u5B9E\u4F53\u5B8C\u6574\u6027\u7684\u6709\u6548\u9014\u5F84\uFF0C\u901A\u8FC7\u8BBE\u7F6E\u4E3B\u952E\uFF0C\u53EF\u4EE5\u4FDD\u8BC1\u8868\u4E2D\u6BCF\u4E00\u884C\u6570\u636E\u90FD\u6709\u4E00\u4E2A\u552F\u4E00\u7684\u6807\u8BC6\uFF0C\u800C\u4E14\u4E3B\u952E\u5217\u7684\u503C\u4E0D\u4E3A\u7A7A\u3002\u8BA9\u6211\u4EEC\u901A\u8FC7\u4E00\u4E2A\u793A\u4F8B\u6765\u8BF4\u660E\u4E3B\u952E\u7EA6\u675F\u7684\u5E94\u7528\uFF1A"
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
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "name"
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
    }), "\n", jsxs(_components.p, {
      children: ["\u5728\u4E0A\u9762\u7684\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u8BBE\u7F6E\u4E86 ", jsx(_components.code, {
        children: "id"
      }), " \u5217\u4E3A\u4E3B\u952E\uFF0C\u5E76\u4E14\u8BE5\u5217\u4E0D\u5141\u8BB8\u4E3A\u7A7A\u503C\uFF0C\u8FD9\u6837\u53EF\u4EE5\u4FDD\u8BC1\u6BCF\u4E2A\u7528\u6237\u90FD\u6709\u4E00\u4E2A\u552F\u4E00\u7684\u6807\u8BC6\u7B26\u3002"]
    }), "\n", jsxs(_components.h4, {
      id: "412-\u552F\u4E00\u7EA6\u675F\u4E0E\u68C0\u67E5\u7EA6\u675F",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#412-\u552F\u4E00\u7EA6\u675F\u4E0E\u68C0\u67E5\u7EA6\u675F",
        children: "#"
      }), "4.1.2 \u552F\u4E00\u7EA6\u675F\u4E0E\u68C0\u67E5\u7EA6\u675F"]
    }), "\n", jsx(_components.p, {
      children: "\u9664\u4E86\u4E3B\u952E\u7EA6\u675F\u5916\uFF0C\u552F\u4E00\u7EA6\u675F\u548C\u68C0\u67E5\u7EA6\u675F\u4E5F\u53EF\u4EE5\u7528\u4E8E\u4FDD\u969C\u5B9E\u4F53\u5B8C\u6574\u6027\uFF1A"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "\u552F\u4E00\u7EA6\u675F"
        }), "\uFF1A\u786E\u4FDD\u8868\u4E2D\u7684\u67D0\u5217\u6216\u51E0\u5217\u7684\u53D6\u503C\u662F\u552F\u4E00\u7684\uFF0C\u4F46\u5141\u8BB8\u51FA\u73B0 NULL \u503C\u3002"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "\u68C0\u67E5\u7EA6\u675F"
        }), "\uFF1A\u9650\u5236\u67D0\u5217\u7684\u53D6\u503C\u8303\u56F4\uFF0C\u53EF\u4EE5\u662F\u6570\u636E\u7C7B\u578B\u3001\u8303\u56F4\u3001\u683C\u5F0F\u7B49\u7684\u9650\u5236\uFF0C\u6765\u786E\u4FDD\u6570\u636E\u7684\u51C6\u786E\u6027\u3002"]
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "42-\u53C2\u7167\u5B8C\u6574\u6027",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#42-\u53C2\u7167\u5B8C\u6574\u6027",
        children: "#"
      }), "4.2 \u53C2\u7167\u5B8C\u6574\u6027"]
    }), "\n", jsx(_components.p, {
      children: "\u53C2\u7167\u5B8C\u6574\u6027\u662F\u786E\u4FDD\u8868\u4E0E\u8868\u4E4B\u95F4\u5173\u7CFB\u7684\u6709\u6548\u6027\u548C\u8FDE\u901A\u6027\u7684\u91CD\u8981\u4FDD\u8BC1\uFF0C\u5176\u4E2D\u5916\u952E\u7EA6\u675F\u626E\u6F14\u4E86\u81F3\u5173\u91CD\u8981\u7684\u89D2\u8272\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "421-\u5916\u952E\u7EA6\u675F\u7684\u4F5C\u7528",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#421-\u5916\u952E\u7EA6\u675F\u7684\u4F5C\u7528",
        children: "#"
      }), "4.2.1 \u5916\u952E\u7EA6\u675F\u7684\u4F5C\u7528"]
    }), "\n", jsx(_components.p, {
      children: "\u5916\u952E\u7EA6\u675F\u7528\u4E8E\u5B9A\u4E49\u4E24\u4E2A\u8868\u4E4B\u95F4\u7684\u5173\u7CFB\uFF0C\u786E\u4FDD\u5728\u5B50\u8868\u4E2D\u7684\u5916\u952E\u503C\u5FC5\u987B\u5728\u7236\u8868\u4E2D\u5B58\u5728\u3002\u8FD9\u53EF\u4EE5\u907F\u514D\u51FA\u73B0\u65E0\u6548\u7684\u6570\u636E\u5173\u8054\uFF0C\u4FDD\u6301\u6570\u636E\u7684\u4E00\u81F4\u6027\u3002\u8BA9\u6211\u4EEC\u901A\u8FC7\u4E00\u4E2A\u7B80\u5355\u793A\u4F8B\u6765\u8BF4\u660E\u5916\u952E\u7EA6\u675F\u7684\u4F5C\u7528\uFF1A"
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
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    order_date "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "DATE"
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
              children: " (product_id) "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "REFERENCES"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " products(product_id)"
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
    }), "\n", jsxs(_components.p, {
      children: ["\u5728\u4E0A\u9762\u7684\u793A\u4F8B\u4E2D\uFF0C", jsx(_components.code, {
        children: "orders"
      }), " \u8868\u7684 ", jsx(_components.code, {
        children: "product_id"
      }), " \u5217\u901A\u8FC7\u5916\u952E\u7EA6\u675F\u4E0E ", jsx(_components.code, {
        children: "products"
      }), " \u8868\u7684 ", jsx(_components.code, {
        children: "product_id"
      }), " \u5217\u5173\u8054\uFF0C\u4ECE\u800C\u786E\u4FDD\u8BA2\u5355\u8868\u4E2D\u7684\u4EA7\u54C1 ID \u5FC5\u987B\u5B58\u5728\u4E8E\u4EA7\u54C1\u8868\u4E2D\u3002"]
    }), "\n", jsxs(_components.h4, {
      id: "422-\u5916\u952E\u7EA6\u675F\u7684\u5E38\u89C1\u9519\u8BEF\u53CA\u5904\u7406",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#422-\u5916\u952E\u7EA6\u675F\u7684\u5E38\u89C1\u9519\u8BEF\u53CA\u5904\u7406",
        children: "#"
      }), "4.2.2 \u5916\u952E\u7EA6\u675F\u7684\u5E38\u89C1\u9519\u8BEF\u53CA\u5904\u7406"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u5B9E\u9645\u5E94\u7528\u4E2D\uFF0C\u5916\u952E\u7EA6\u675F\u53EF\u80FD\u4F1A\u5F15\u53D1\u4E00\u4E9B\u5E38\u89C1\u7684\u9519\u8BEF\uFF0C\u4F8B\u5982\u63D2\u5165\u65E0\u6548\u7684\u5916\u952E\u503C\u6216\u66F4\u65B0\u4E3B\u8868\u4E2D\u7684\u4E3B\u952E\u503C\u3002\u4E3A\u4E86\u5904\u7406\u8FD9\u4E9B\u9519\u8BEF\uFF0C\u53EF\u4EE5\u91C7\u53D6\u4EE5\u4E0B\u51E0\u79CD\u65B9\u5F0F\uFF1A"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "\u4F7F\u7528\u7EA7\u8054\u66F4\u65B0\u6216\u7EA7\u8054\u5220\u9664\u6765\u7EF4\u62A4\u4E3B\u4ECE\u8868\u6570\u636E\u7684\u4E00\u81F4\u6027\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u5728\u5904\u7406\u5F02\u5E38\u60C5\u51B5\u65F6\uFF0C\u8FDB\u884C\u4E8B\u52A1\u56DE\u6EDA\uFF0C\u907F\u514D\u6570\u636E\u4E0D\u4E00\u81F4\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u5B9A\u671F\u68C0\u67E5\u5916\u952E\u7EA6\u675F\uFF0C\u786E\u4FDD\u6570\u636E\u7684\u5B8C\u6574\u6027\u3002"
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "43-\u6570\u636E\u5B8C\u6574\u6027\u7684\u7EF4\u62A4\u4E0E\u4F18\u5316",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#43-\u6570\u636E\u5B8C\u6574\u6027\u7684\u7EF4\u62A4\u4E0E\u4F18\u5316",
        children: "#"
      }), "4.3 \u6570\u636E\u5B8C\u6574\u6027\u7684\u7EF4\u62A4\u4E0E\u4F18\u5316"]
    }), "\n", jsx(_components.p, {
      children: "\u6570\u636E\u5B8C\u6574\u6027\u662F\u6570\u636E\u5E93\u8BBE\u8BA1\u7684\u6838\u5FC3\u4E4B\u4E00\uFF0C\u4E3A\u4E86\u786E\u4FDD\u6570\u636E\u7684\u51C6\u786E\u6027\u548C\u4E00\u81F4\u6027\uFF0C\u9664\u4E86\u4F7F\u7528\u7EA6\u675F\u5916\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u7EF4\u62A4\u548C\u4F18\u5316\u6570\u636E\u5B8C\u6574\u6027\uFF1A"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "\u5B9A\u671F\u6E05\u7406\u65E0\u6548\u6570\u636E\u548C\u91CD\u590D\u6570\u636E\uFF0C\u4FDD\u6301\u6570\u636E\u7684\u6574\u6D01\u6027\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u4F7F\u7528\u89E6\u53D1\u5668\u6765\u81EA\u52A8\u76D1\u6D4B\u548C\u4FEE\u590D\u6570\u636E\u5B8C\u6574\u6027\u95EE\u9898\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u6839\u636E\u4E1A\u52A1\u9700\u6C42\u4F18\u5316\u8868\u7ED3\u6784\u548C\u7EA6\u675F\u8BBE\u7F6E\uFF0C\u63D0\u9AD8\u6570\u636E\u64CD\u4F5C\u6548\u7387\u3002"
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u4EE5\u4E0A\u65B9\u6CD5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6709\u6548\u5730\u4FDD\u969C\u6570\u636E\u7684\u5B8C\u6574\u6027\uFF0C\u5E76\u8BA9\u6570\u636E\u5E93\u7CFB\u7EDF\u66F4\u52A0\u7A33\u5B9A\u548C\u53EF\u9760\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "5-\u6570\u636E\u5B89\u5168\u4E0E\u5907\u4EFD\u7B56\u7565",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#5-\u6570\u636E\u5B89\u5168\u4E0E\u5907\u4EFD\u7B56\u7565",
        children: "#"
      }), "5. \u6570\u636E\u5B89\u5168\u4E0E\u5907\u4EFD\u7B56\u7565"]
    }), "\n", jsxs(_components.h3, {
      id: "51-\u7528\u6237\u6743\u9650\u7BA1\u7406",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#51-\u7528\u6237\u6743\u9650\u7BA1\u7406",
        children: "#"
      }), "5.1 \u7528\u6237\u6743\u9650\u7BA1\u7406"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u6570\u636E\u5E93\u7BA1\u7406\u4E2D\uFF0C\u7528\u6237\u6743\u9650\u7BA1\u7406\u662F\u975E\u5E38\u5173\u952E\u7684\u4E00\u90E8\u5206\uFF0C\u901A\u8FC7\u5408\u7406\u7684\u7528\u6237\u6743\u9650\u8BBE\u7F6E\u53EF\u4EE5\u4FDD\u969C\u6570\u636E\u5B89\u5168\u548C\u9690\u79C1\u3002\u672C\u8282\u5C06\u4ECB\u7ECD\u5982\u4F55\u521B\u5EFA\u548C\u7BA1\u7406\u7528\u6237\uFF0C\u5E76\u5206\u914D\u76F8\u5E94\u7684\u6743\u9650\u548C\u89D2\u8272\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "511-\u521B\u5EFA\u4E0E\u7BA1\u7406\u7528\u6237",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#511-\u521B\u5EFA\u4E0E\u7BA1\u7406\u7528\u6237",
        children: "#"
      }), "5.1.1 \u521B\u5EFA\u4E0E\u7BA1\u7406\u7528\u6237"]
    }), "\n", jsx(_components.p, {
      children: "\u5728 MySQL \u6570\u636E\u5E93\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B SQL \u8BED\u53E5\u6765\u521B\u5EFA\u65B0\u7528\u6237\uFF1A"
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
              children: " USER "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "new_user"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "@"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "localhost"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " IDENTIFIED "
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
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "password"
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
    }), "\n", jsx(_components.p, {
      children: "\u4E0A\u8FF0\u4EE3\u7801\u4E2D\uFF0C'new_user' \u662F\u65B0\u5EFA\u7528\u6237\u7684\u7528\u6237\u540D\uFF0C'localhost' \u8868\u793A\u8BE5\u7528\u6237\u53EA\u80FD\u901A\u8FC7\u672C\u5730\u8FDE\u63A5\u8BBF\u95EE\uFF0C'password' \u662F\u7528\u6237\u7684\u5BC6\u7801\u3002\u521B\u5EFA\u7528\u6237\u540E\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u7ED9\u7528\u6237\u6388\u4E88\u8BFB\u5199\u6743\u9650\uFF1A"
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
              children: "GRANT"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ALL PRIVILEGES "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "ON"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "database_name"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "."
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
              children: "TO"
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
              children: "new_user"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "@"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "localhost"
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
      id: "512-\u5206\u914D\u6743\u9650\u548C\u89D2\u8272",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#512-\u5206\u914D\u6743\u9650\u548C\u89D2\u8272",
        children: "#"
      }), "5.1.2 \u5206\u914D\u6743\u9650\u548C\u89D2\u8272"]
    }), "\n", jsx(_components.p, {
      children: "\u9664\u4E86\u76F4\u63A5\u6388\u4E88\u6743\u9650\u7ED9\u7528\u6237\u5916\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7\u521B\u5EFA\u89D2\u8272\uFF0C\u5C06\u4E00\u7EC4\u6743\u9650\u8D4B\u4E88\u7ED9\u89D2\u8272\uFF0C\u518D\u5C06\u89D2\u8272\u8D4B\u4E88\u7528\u6237\uFF0C\u7B80\u5316\u6743\u9650\u7BA1\u7406\u6D41\u7A0B\u3002\u4EE5\u4E0B\u662F\u521B\u5EFA\u89D2\u8272\u5E76\u6388\u6743\u7ED9\u7528\u6237\u7684\u793A\u4F8B\u4EE3\u7801\uFF1A"
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
              children: "ROLE"
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
              children: "developer"
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
              children: "analyst"
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
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "GRANT"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "SELECT"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ", "
            }), jsx(_components.span, {
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
              children: "ON"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "database_name"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "."
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
              children: "TO"
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
              children: "developer"
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
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "GRANT"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ALL PRIVILEGES "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "ON"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "database_name"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "."
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
              children: "TO"
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
              children: "analyst"
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
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "GRANT"
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
              children: "developer"
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
              children: "TO"
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
              children: "new_user"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "@"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "localhost"
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
      id: "52-\u6570\u636E\u5907\u4EFD\u4E0E\u6062\u590D",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#52-\u6570\u636E\u5907\u4EFD\u4E0E\u6062\u590D",
        children: "#"
      }), "5.2 \u6570\u636E\u5907\u4EFD\u4E0E\u6062\u590D"]
    }), "\n", jsx(_components.p, {
      children: "\u6570\u636E\u5907\u4EFD\u662F\u4FDD\u969C\u6570\u636E\u5B89\u5168\u7684\u91CD\u8981\u624B\u6BB5\uFF0C\u5408\u7406\u7684\u5907\u4EFD\u7B56\u7565\u53EF\u4EE5\u907F\u514D\u6570\u636E\u4E22\u5931\u60C5\u51B5\u53D1\u751F\u3002\u672C\u8282\u5C06\u4ECB\u7ECD\u5B9A\u671F\u5907\u4EFD\u6570\u636E\u7684\u91CD\u8981\u6027\u4EE5\u53CA\u5907\u4EFD\u7B56\u7565\u9009\u62E9\u4E0E\u5907\u4EFD\u6062\u590D\u65B9\u6848\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "521-\u5B9A\u671F\u5907\u4EFD\u6570\u636E\u7684\u91CD\u8981\u6027",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#521-\u5B9A\u671F\u5907\u4EFD\u6570\u636E\u7684\u91CD\u8981\u6027",
        children: "#"
      }), "5.2.1 \u5B9A\u671F\u5907\u4EFD\u6570\u636E\u7684\u91CD\u8981\u6027"]
    }), "\n", jsx(_components.p, {
      children: "\u5B9A\u671F\u5907\u4EFD\u6570\u636E\u662F\u6570\u636E\u5E93\u7BA1\u7406\u4E2D\u4E0D\u53EF\u6216\u7F3A\u7684\u4E00\u73AF\u3002\u901A\u8FC7\u5B9A\u671F\u5907\u4EFD\u6570\u636E\u53EF\u4EE5\u907F\u514D\u7531\u4E8E\u8BEF\u64CD\u4F5C\u3001\u786C\u4EF6\u6545\u969C\u7B49\u539F\u56E0\u5BFC\u81F4\u7684\u6570\u636E\u4E22\u5931\u60C5\u51B5\u3002\u4E00\u822C\u800C\u8A00\uFF0C\u53EF\u4EE5\u901A\u8FC7 MySQL \u7684\u5185\u7F6E\u5DE5\u5177\u6216\u7B2C\u4E09\u65B9\u5DE5\u5177\u8FDB\u884C\u5B9A\u671F\u5168\u91CF\u5907\u4EFD\u548C\u589E\u91CF\u5907\u4EFD\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "522-\u5907\u4EFD\u7B56\u7565\u9009\u62E9\u53CA\u5907\u4EFD\u6062\u590D\u65B9\u6848",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#522-\u5907\u4EFD\u7B56\u7565\u9009\u62E9\u53CA\u5907\u4EFD\u6062\u590D\u65B9\u6848",
        children: "#"
      }), "5.2.2 \u5907\u4EFD\u7B56\u7565\u9009\u62E9\u53CA\u5907\u4EFD\u6062\u590D\u65B9\u6848"]
    }), "\n", jsx(_components.p, {
      children: "\u5907\u4EFD\u7B56\u7565\u7684\u9009\u62E9\u5E94\u6839\u636E\u4E1A\u52A1\u9700\u6C42\u548C\u6570\u636E\u91CD\u8981\u6027\u6765\u786E\u5B9A\u3002\u5168\u91CF\u5907\u4EFD\u8017\u65F6\u8F83\u957F\uFF0C\u4F46\u6062\u590D\u901F\u5EA6\u5FEB\uFF1B\u589E\u91CF\u5907\u4EFD\u8017\u65F6\u77ED\uFF0C\u4F46\u6062\u590D\u8FC7\u7A0B\u6BD4\u5168\u91CF\u5907\u4EFD\u590D\u6742\u3002\u6839\u636E\u5177\u4F53\u60C5\u51B5\u53EF\u4EE5\u9009\u62E9\u6BCF\u65E5\u5168\u91CF\u5907\u4EFD\u5E76\u7ED3\u5408\u5B9A\u671F\u589E\u91CF\u5907\u4EFD\u7684\u65B9\u5F0F\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u5728\u6570\u636E\u6062\u590D\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u6B65\u9AA4\u8FDB\u884C\uFF1A"
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsx(_components.li, {
        children: "\u4F7F\u7528\u5907\u4EFD\u5DE5\u5177\u6062\u590D\u5168\u91CF\u5907\u4EFD\u6587\u4EF6\uFF1B"
      }), "\n", jsx(_components.li, {
        children: "\u68C0\u67E5\u662F\u5426\u9700\u8981\u5E94\u7528\u589E\u91CF\u5907\u4EFD\u4EE5\u6062\u590D\u6700\u65B0\u6570\u636E\uFF1B"
      }), "\n", jsx(_components.li, {
        children: "\u6062\u590D\u5B8C\u6210\u540E\u8FDB\u884C\u6570\u636E\u5B8C\u6574\u6027\u68C0\u67E5\u3002"
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u5907\u4EFD\u6570\u636E\u5E94\u5B58\u50A8\u5728\u5B89\u5168\u53EF\u9760\u7684\u4F4D\u7F6E\uFF0C\u907F\u514D\u6570\u636E\u6CC4\u9732\u6216\u4E22\u5931\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u81F3\u6B64\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u6DF1\u5165\u63A2\u8BA8\u4E86\u6570\u636E\u5E93\u4E2D\u7684\u6570\u636E\u5B89\u5168\u4E0E\u5907\u4EFD\u7B56\u7565\uFF0C\u901A\u8FC7\u5408\u7406\u7684\u6743\u9650\u7BA1\u7406\u548C\u5907\u4EFD\u63AA\u65BD\uFF0C\u53EF\u4EE5\u6709\u6548\u4FDD\u969C\u6570\u636E\u7684\u5B89\u5168\u6027\u548C\u5B8C\u6574\u6027\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "6-\u9AD8\u6548\u67E5\u8BE2\u4E0E\u7D22\u5F15\u4F18\u5316",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#6-\u9AD8\u6548\u67E5\u8BE2\u4E0E\u7D22\u5F15\u4F18\u5316",
        children: "#"
      }), "6. \u9AD8\u6548\u67E5\u8BE2\u4E0E\u7D22\u5F15\u4F18\u5316"]
    }), "\n", jsxs(_components.h3, {
      id: "61-\u67E5\u8BE2\u6027\u80FD\u4F18\u5316\u6982\u8FF0",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#61-\u67E5\u8BE2\u6027\u80FD\u4F18\u5316\u6982\u8FF0",
        children: "#"
      }), "6.1 \u67E5\u8BE2\u6027\u80FD\u4F18\u5316\u6982\u8FF0"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u6570\u636E\u5E93\u7BA1\u7406\u4E2D\uFF0C\u67E5\u8BE2\u6027\u80FD\u4F18\u5316\u662F\u4E00\u4E2A\u81F3\u5173\u91CD\u8981\u7684\u8BFE\u9898\u3002\u901A\u8FC7\u5408\u9002\u7684\u4F18\u5316\u65B9\u6CD5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u63D0\u5347\u6570\u636E\u5E93\u7CFB\u7EDF\u7684\u54CD\u5E94\u901F\u5EA6\uFF0C\u63D0\u9AD8\u67E5\u8BE2\u6548\u7387\uFF0C\u4ECE\u800C\u83B7\u5F97\u66F4\u597D\u7684\u7528\u6237\u4F53\u9A8C\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "611-sql\u67E5\u8BE2\u4F18\u5316\u57FA\u672C\u539F\u5219",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#611-sql\u67E5\u8BE2\u4F18\u5316\u57FA\u672C\u539F\u5219",
        children: "#"
      }), "6.1.1 SQL\u67E5\u8BE2\u4F18\u5316\u57FA\u672C\u539F\u5219"]
    }), "\n", jsx(_components.p, {
      children: "SQL\u67E5\u8BE2\u4F18\u5316\u662F\u63D0\u9AD8\u6570\u636E\u5E93\u6027\u80FD\u7684\u6709\u6548\u9014\u5F84\u4E4B\u4E00\uFF0C\u4E0B\u9762\u6211\u4EEC\u6765\u4ECB\u7ECD\u4E00\u4E9B SQL \u67E5\u8BE2\u4F18\u5316\u7684\u57FA\u672C\u539F\u5219\uFF1A"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "\u907F\u514D\u4F7F\u7528\u901A\u914D\u7B26\u67E5\u8BE2"
          }), "\uFF1A\u5728 SQL \u8BED\u53E5\u4E2D\u5C3D\u53EF\u80FD\u907F\u514D\u4F7F\u7528 ", jsx(_components.code, {
            children: "LIKE '%value%'"
          }), " \u8FD9\u6837\u7684\u901A\u914D\u7B26\u67E5\u8BE2\uFF0C\u56E0\u4E3A\u4F1A\u5BFC\u81F4\u5168\u8868\u626B\u63CF\uFF0C\u5F71\u54CD\u67E5\u8BE2\u6027\u80FD\u3002"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "\u9002\u5F53\u5EFA\u7ACB\u7D22\u5F15"
          }), "\uFF1A\u5408\u7406\u7684\u7D22\u5F15\u7B56\u7565\u53EF\u4EE5\u5927\u5927\u63D0\u5347\u67E5\u8BE2\u901F\u5EA6\u3002\u5728\u8BBE\u8BA1\u6570\u636E\u5E93\u8868\u65F6\uFF0C\u9700\u8981\u6839\u636E\u5B9E\u9645\u9700\u6C42\u5EFA\u7ACB\u7D22\u5F15\uFF0C\u4F46\u4E5F\u4E0D\u8981\u8FC7\u5EA6\u7D22\u5F15\uFF0C\u5426\u5219\u4F1A\u589E\u52A0\u5199\u64CD\u4F5C\u7684\u8D1F\u62C5\u3002"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "\u907F\u514D\u4F7F\u7528 SELECT * \u67E5\u8BE2"
          }), "\uFF1A\u5C3D\u91CF\u907F\u514D\u4F7F\u7528 ", jsx(_components.code, {
            children: "SELECT *"
          }), " \u7684\u65B9\u5F0F\u67E5\u8BE2\u6570\u636E\uFF0C\u5E94\u8BE5\u660E\u786E\u6307\u5B9A\u6240\u9700\u7684\u5B57\u6BB5\uFF0C\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u6570\u636E\u4F20\u8F93\u548C\u5904\u7406\u3002"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "\u4F18\u5316 MySQL \u914D\u7F6E\u53C2\u6570"
          }), "\uFF1A\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8C03\u6574 MySQL \u7684\u914D\u7F6E\u53C2\u6570\uFF0C\u5982\u7F13\u51B2\u6C60\u5927\u5C0F\u3001\u8FDE\u63A5\u6570\u7B49\uFF0C\u4EE5\u63D0\u9AD8\u6570\u636E\u5E93\u7684\u6027\u80FD\u3002"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsxs(_components.h4, {
      id: "612-explain\u5DE5\u5177\u7684\u4F7F\u7528\u4E0E\u89E3\u8BFB",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#612-explain\u5DE5\u5177\u7684\u4F7F\u7528\u4E0E\u89E3\u8BFB",
        children: "#"
      }), "6.1.2 Explain\u5DE5\u5177\u7684\u4F7F\u7528\u4E0E\u89E3\u8BFB"]
    }), "\n", jsx(_components.p, {
      children: "Explain \u662F MySQL \u63D0\u4F9B\u7684\u7528\u4E8E\u5206\u6790 SQL \u8BED\u53E5\u6267\u884C\u8BA1\u5212\u7684\u5DE5\u5177\u3002\u901A\u8FC7 Explain \u53EF\u4EE5\u67E5\u770B MySQL \u662F\u5982\u4F55\u6267\u884C\u67E5\u8BE2\u8BED\u53E5\u7684\uFF0C\u5E2E\u52A9\u6211\u4EEC\u4F18\u5316\u67E5\u8BE2\u6027\u80FD\u3002"
    }), "\n", jsxs(_components.p, {
      children: ["\u5728\u5B9E\u9645\u4F7F\u7528\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728 SQL \u8BED\u53E5\u524D\u52A0\u4E0A ", jsx(_components.code, {
        children: "EXPLAIN"
      }), " \u5173\u952E\u5B57\uFF0C\u6765\u83B7\u53D6\u8BE5 SQL \u8BED\u53E5\u7684\u6267\u884C\u8BA1\u5212\u3002\u6267\u884C\u7ED3\u679C\u4F1A\u8FD4\u56DE\u4E00\u5F20\u8868\u683C\uFF0C\u5305\u542B\u4E86 MySQL \u5728\u6267\u884C\u8BE5\u67E5\u8BE2\u65F6\u7684\u4E00\u4E9B\u91CD\u8981\u4FE1\u606F\uFF0C\u5982\u8868\u7684\u8BFB\u53D6\u987A\u5E8F\u3001\u4F7F\u7528\u7684\u7D22\u5F15\u7B49\u3002"]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u5206\u6790 Explain \u7ED3\u679C\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4E86\u89E3\u662F\u5426\u547D\u4E2D\u7D22\u5F15\u3001\u662F\u5426\u8FDB\u884C\u4E86\u5168\u8868\u626B\u63CF\u4EE5\u53CA\u67E5\u8BE2\u8BED\u53E5\u7684\u6548\u7387\u7B49\u4FE1\u606F\uFF0C\u4ECE\u800C\u9488\u5BF9\u6027\u5730\u5BF9 SQL \u67E5\u8BE2\u8FDB\u884C\u4F18\u5316\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "62-\u7D22\u5F15\u8BBE\u8BA1\u4E0E\u4F18\u5316",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#62-\u7D22\u5F15\u8BBE\u8BA1\u4E0E\u4F18\u5316",
        children: "#"
      }), "6.2 \u7D22\u5F15\u8BBE\u8BA1\u4E0E\u4F18\u5316"]
    }), "\n", jsx(_components.p, {
      children: "\u7D22\u5F15\u5728\u6570\u636E\u5E93\u4E2D\u626E\u6F14\u7740\u91CD\u8981\u7684\u89D2\u8272\uFF0C\u5408\u7406\u7684\u7D22\u5F15\u8BBE\u8BA1\u53EF\u4EE5\u663E\u8457\u63D0\u5347\u67E5\u8BE2\u901F\u5EA6\u548C\u6027\u80FD\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "621-\u7D22\u5F15\u539F\u7406\u53CA\u7C7B\u578B",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#621-\u7D22\u5F15\u539F\u7406\u53CA\u7C7B\u578B",
        children: "#"
      }), "6.2.1 \u7D22\u5F15\u539F\u7406\u53CA\u7C7B\u578B"]
    }), "\n", jsx(_components.p, {
      children: "\u7D22\u5F15\u662F\u4E00\u79CD\u6570\u636E\u7ED3\u6784\uFF0C\u7528\u4E8E\u52A0\u5FEB\u6570\u636E\u5E93\u8868\u4E2D\u6570\u636E\u7684\u68C0\u7D22\u901F\u5EA6\u3002\u5E38\u89C1\u7684\u7D22\u5F15\u7C7B\u578B\u5305\u62EC\uFF1A"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "B-Tree \u7D22\u5F15"
          }), "\uFF1AB-Tree \u7D22\u5F15\u662F\u6700\u5E38\u89C1\u7684\u7D22\u5F15\u7C7B\u578B\uFF0C\u9002\u7528\u4E8E\u5168\u952E\u503C\u3001\u952E\u503C\u8303\u56F4\u548C\u952E\u524D\u7F00\u67E5\u8BE2\u3002"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "\u54C8\u5E0C\u7D22\u5F15"
          }), "\uFF1A\u54C8\u5E0C\u7D22\u5F15\u9002\u7528\u4E8E\u7B49\u503C\u67E5\u8BE2\uFF0C\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u5177\u6709\u5F88\u9AD8\u7684\u67E5\u8BE2\u901F\u5EA6\uFF0C\u4F46\u4E0D\u652F\u6301\u8303\u56F4\u67E5\u8BE2\u3002"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "\u5168\u6587\u7D22\u5F15"
          }), "\uFF1A\u5168\u6587\u7D22\u5F15\u7528\u4E8E\u5168\u6587\u641C\u7D22\uFF0C\u9002\u7528\u4E8E\u5BF9\u6587\u672C\u5185\u5BB9\u8FDB\u884C\u641C\u7D22\u7684\u573A\u666F\u3002"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsxs(_components.h4, {
      id: "622-\u521B\u5EFA\u5408\u9002\u7684\u7D22\u5F15",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#622-\u521B\u5EFA\u5408\u9002\u7684\u7D22\u5F15",
        children: "#"
      }), "6.2.2 \u521B\u5EFA\u5408\u9002\u7684\u7D22\u5F15"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u521B\u5EFA\u7D22\u5F15\u65F6\uFF0C\u9700\u8981\u8003\u8651\u4EE5\u4E0B\u51E0\u70B9\uFF1A"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "\u552F\u4E00\u6027"
        }), "\uFF1A\u6839\u636E\u9700\u8981\u786E\u4FDD\u7D22\u5F15\u662F\u552F\u4E00\u7684\u6216\u975E\u552F\u4E00\u7684\u3002"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "\u5B57\u6BB5\u9009\u62E9"
        }), "\uFF1A\u9009\u62E9\u5408\u9002\u7684\u5B57\u6BB5\u4F5C\u4E3A\u7D22\u5F15\uFF0C\u901A\u5E38\u5728\u67E5\u8BE2\u6761\u4EF6\u7ECF\u5E38\u7528\u5230\u7684\u5B57\u6BB5\u4E0A\u521B\u5EFA\u7D22\u5F15\u3002"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "\u8054\u5408\u7D22\u5F15"
        }), "\uFF1A\u5BF9\u591A\u4E2A\u5B57\u6BB5\u8FDB\u884C\u8054\u5408\u7D22\u5F15\uFF0C\u53EF\u4EE5\u63D0\u9AD8\u591A\u5B57\u6BB5\u7EC4\u5408\u67E5\u8BE2\u7684\u6548\u7387\u3002"]
      }), "\n"]
    }), "\n", jsxs(_components.h4, {
      id: "623-\u7D22\u5F15\u7684\u7EF4\u62A4\u4E0E\u4F18\u5316\u6280\u5DE7",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#623-\u7D22\u5F15\u7684\u7EF4\u62A4\u4E0E\u4F18\u5316\u6280\u5DE7",
        children: "#"
      }), "6.2.3 \u7D22\u5F15\u7684\u7EF4\u62A4\u4E0E\u4F18\u5316\u6280\u5DE7"]
    }), "\n", jsx(_components.p, {
      children: "\u9664\u4E86\u521B\u5EFA\u5408\u9002\u7684\u7D22\u5F15\u5916\uFF0C\u7D22\u5F15\u7684\u7EF4\u62A4\u548C\u4F18\u5316\u540C\u6837\u91CD\u8981\uFF0C\u4EE5\u4E0B\u662F\u4E00\u4E9B\u7D22\u5F15\u7684\u7EF4\u62A4\u4E0E\u4F18\u5316\u6280\u5DE7\uFF1A"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "\u5B9A\u671F\u91CD\u5EFA\u7D22\u5F15"
        }), "\uFF1A\u5B9A\u671F\u5BF9\u7D22\u5F15\u8FDB\u884C\u91CD\u5EFA\uFF0C\u4EE5\u4FDD\u8BC1\u5176\u6027\u80FD\u7684\u7A33\u5B9A\u3002"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "\u76D1\u63A7\u7D22\u5F15\u4F7F\u7528\u60C5\u51B5"
        }), "\uFF1A\u76D1\u63A7\u7D22\u5F15\u7684\u4F7F\u7528\u60C5\u51B5\uFF0C\u6839\u636E\u5B9E\u9645\u6570\u636E\u67E5\u8BE2\u60C5\u51B5\u8FDB\u884C\u4F18\u5316\u51B3\u7B56\u3002"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "\u907F\u514D\u8FC7\u5EA6\u7D22\u5F15"
        }), "\uFF1A\u8FC7\u5EA6\u7D22\u5F15\u4F1A\u589E\u52A0\u5199\u64CD\u4F5C\u7684\u6210\u672C\uFF0C\u9700\u8981\u6743\u8861\u7D22\u5F15\u5BF9\u67E5\u8BE2\u6027\u80FD\u7684\u63D0\u5347\u548C\u5199\u5165\u6027\u80FD\u7684\u5F71\u54CD\uFF0C\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u7D22\u5F15\u3002"]
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u7D22\u5F15\u8BBE\u8BA1\u4E0E\u4F18\u5316\u65B9\u9762\uFF0C\u9700\u8981\u4E0D\u65AD\u5730\u8FDB\u884C\u5B9E\u8DF5\u548C\u8C03\u6574\uFF0C\u6839\u636E\u5177\u4F53\u7684\u4E1A\u52A1\u9700\u6C42\u548C\u6570\u636E\u60C5\u51B5\u6765\u9009\u62E9\u6700\u5408\u9002\u7684\u7D22\u5F15\u7B56\u7565\u3002"
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

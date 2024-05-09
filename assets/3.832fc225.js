import { jsx, jsxs, Fragment } from "react/jsx-runtime";
const frontmatter = void 0;
const toc = [{
  "id": "21-mysql\u8FDE\u63A5\u914D\u7F6E\u57FA\u7840",
  "text": "2.1 MySQL\u8FDE\u63A5\u914D\u7F6E\u57FA\u7840",
  "depth": 3
}, {
  "id": "211-\u4E3B\u673A\u4E0E\u7AEF\u53E3\u8BBE\u7F6E",
  "text": "2.1.1 \u4E3B\u673A\u4E0E\u7AEF\u53E3\u8BBE\u7F6E",
  "depth": 4
}, {
  "id": "212-\u6570\u636E\u5E93\u7528\u6237\u540D\u548C\u5BC6\u7801\u8BBE\u7F6E",
  "text": "2.1.2 \u6570\u636E\u5E93\u7528\u6237\u540D\u548C\u5BC6\u7801\u8BBE\u7F6E",
  "depth": 4
}, {
  "id": "22-\u8FDE\u63A5\u9A71\u52A8\u9009\u62E9\u4E0E\u5BFC\u5165",
  "text": "2.2 \u8FDE\u63A5\u9A71\u52A8\u9009\u62E9\u4E0E\u5BFC\u5165",
  "depth": 3
}, {
  "id": "221-jdbc\u9A71\u52A8\u5668\u5BFC\u5165",
  "text": "2.2.1 JDBC\u9A71\u52A8\u5668\u5BFC\u5165",
  "depth": 4
}, {
  "id": "222-\u7B2C\u4E09\u65B9\u6570\u636E\u5E93\u9A71\u52A8\u5668\u4F7F\u7528",
  "text": "2.2.2 \u7B2C\u4E09\u65B9\u6570\u636E\u5E93\u9A71\u52A8\u5668\u4F7F\u7528",
  "depth": 4
}, {
  "id": "23-\u8FDE\u63A5\u53C2\u6570\u8BBE\u7F6E",
  "text": "2.3 \u8FDE\u63A5\u53C2\u6570\u8BBE\u7F6E",
  "depth": 3
}, {
  "id": "231-\u8BBE\u7F6E\u8FDE\u63A5\u8D85\u65F6",
  "text": "2.3.1 \u8BBE\u7F6E\u8FDE\u63A5\u8D85\u65F6",
  "depth": 4
}, {
  "id": "232-\u914D\u7F6E\u5B57\u7B26\u96C6",
  "text": "2.3.2 \u914D\u7F6E\u5B57\u7B26\u96C6",
  "depth": 4
}, {
  "id": "31-\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5",
  "text": "3.1 \u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5",
  "depth": 3
}, {
  "id": "311-\u786E\u8BA4\u4E3B\u673A\u4E0E\u7AEF\u53E3\u53EF\u7528\u6027",
  "text": "3.1.1 \u786E\u8BA4\u4E3B\u673A\u4E0E\u7AEF\u53E3\u53EF\u7528\u6027",
  "depth": 4
}, {
  "id": "312-\u67E5\u770B\u9632\u706B\u5899\u8BBE\u7F6E",
  "text": "3.1.2 \u67E5\u770B\u9632\u706B\u5899\u8BBE\u7F6E",
  "depth": 4
}, {
  "id": "32-\u9A8C\u8BC1\u7528\u6237\u540D\u548C\u5BC6\u7801",
  "text": "3.2 \u9A8C\u8BC1\u7528\u6237\u540D\u548C\u5BC6\u7801",
  "depth": 3
}, {
  "id": "321-\u68C0\u67E5\u7528\u6237\u6743\u9650",
  "text": "3.2.1 \u68C0\u67E5\u7528\u6237\u6743\u9650",
  "depth": 4
}, {
  "id": "322-\u91CD\u65B0\u8BBE\u7F6E\u5BC6\u7801",
  "text": "3.2.2 \u91CD\u65B0\u8BBE\u7F6E\u5BC6\u7801",
  "depth": 4
}, {
  "id": "33-\u68C0\u67E5\u8FDE\u63A5\u9A71\u52A8",
  "text": "3.3 \u68C0\u67E5\u8FDE\u63A5\u9A71\u52A8",
  "depth": 3
}, {
  "id": "331-\u786E\u8BA4\u9A71\u52A8\u4F9D\u8D56",
  "text": "3.3.1 \u786E\u8BA4\u9A71\u52A8\u4F9D\u8D56",
  "depth": 4
}, {
  "id": "332-\u66F4\u65B0\u9A71\u52A8\u7248\u672C",
  "text": "3.3.2 \u66F4\u65B0\u9A71\u52A8\u7248\u672C",
  "depth": 4
}, {
  "id": "41-\u8FDE\u63A5\u6C60\u914D\u7F6E",
  "text": "4.1 \u8FDE\u63A5\u6C60\u914D\u7F6E",
  "depth": 3
}, {
  "id": "411-\u4F7F\u7528\u8FDE\u63A5\u6C60\u7BA1\u7406\u8FDE\u63A5",
  "text": "4.1.1 \u4F7F\u7528\u8FDE\u63A5\u6C60\u7BA1\u7406\u8FDE\u63A5",
  "depth": 4
}, {
  "id": "412-\u914D\u7F6E\u8FDE\u63A5\u6C60\u53C2\u6570",
  "text": "4.1.2 \u914D\u7F6E\u8FDE\u63A5\u6C60\u53C2\u6570",
  "depth": 4
}, {
  "id": "42-ssl\u52A0\u5BC6\u8FDE\u63A5",
  "text": "4.2 SSL\u52A0\u5BC6\u8FDE\u63A5",
  "depth": 3
}, {
  "id": "421-\u542F\u7528ssl\u5B89\u5168\u8FDE\u63A5",
  "text": "4.2.1 \u542F\u7528SSL\u5B89\u5168\u8FDE\u63A5",
  "depth": 4
}, {
  "id": "422-\u914D\u7F6Essl\u9009\u9879",
  "text": "4.2.2 \u914D\u7F6ESSL\u9009\u9879",
  "depth": 4
}, {
  "id": "43-\u6027\u80FD\u4F18\u5316\u5EFA\u8BAE",
  "text": "4.3 \u6027\u80FD\u4F18\u5316\u5EFA\u8BAE",
  "depth": 3
}, {
  "id": "431-\u67E5\u8BE2\u4F18\u5316",
  "text": "4.3.1 \u67E5\u8BE2\u4F18\u5316",
  "depth": 4
}, {
  "id": "432-\u7D22\u5F15\u8C03\u4F18",
  "text": "4.3.2 \u7D22\u5F15\u8C03\u4F18",
  "depth": 4
}, {
  "id": "51-\u65E5\u5FD7\u7B49\u7EA7\u8BBE\u7F6E",
  "text": "5.1 \u65E5\u5FD7\u7B49\u7EA7\u8BBE\u7F6E",
  "depth": 3
}, {
  "id": "511-\u8C03\u6574\u65E5\u5FD7\u8F93\u51FA\u7EA7\u522B",
  "text": "5.1.1 \u8C03\u6574\u65E5\u5FD7\u8F93\u51FA\u7EA7\u522B",
  "depth": 4
}, {
  "id": "512-\u67E5\u770B\u65E5\u5FD7\u6587\u4EF6",
  "text": "5.1.2 \u67E5\u770B\u65E5\u5FD7\u6587\u4EF6",
  "depth": 4
}, {
  "id": "52-\u5E38\u89C1\u9519\u8BEF\u89E3\u51B3",
  "text": "5.2 \u5E38\u89C1\u9519\u8BEF\u89E3\u51B3",
  "depth": 3
}, {
  "id": "521-connection-refused\u9519\u8BEF\u5904\u7406",
  "text": "5.2.1 Connection refused\u9519\u8BEF\u5904\u7406",
  "depth": 4
}, {
  "id": "522-connection-timeout\u89E3\u51B3\u65B9\u6CD5",
  "text": "5.2.2 Connection timeout\u89E3\u51B3\u65B9\u6CD5",
  "depth": 4
}];
const title = "5. \u6545\u969C\u6392\u9664\u4E0E\u65E5\u5FD7\u5206\u6790";
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
    ol: "ol"
  }, props.components);
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "1-\u4E86\u89E3intellij-idea",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#1-\u4E86\u89E3intellij-idea",
        children: "#"
      }), "1. \u4E86\u89E3IntelliJ IDEA"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u672C\u7AE0\u4E2D\uFF0C\u6211\u4EEC\u5C06\u6DF1\u5165\u4E86\u89E3IntelliJ IDEA\u8FD9\u4E00\u96C6\u6210\u5F00\u53D1\u73AF\u5883\uFF0C\u63A2\u7D22\u5176\u5728\u8FDE\u63A5MySQL\u6570\u636E\u5E93\u65B9\u9762\u7684\u4F18\u52BF\u548C\u4F7F\u7528\u6280\u5DE7\u3002\u901A\u8FC7\u5B66\u4E60\u672C\u7AE0\u5185\u5BB9\uFF0C\u8BFB\u8005\u5C06\u80FD\u591F\u638C\u63E1IntelliJ IDEA\u5728\u6570\u636E\u5E93\u8FDE\u63A5\u65B9\u9762\u7684\u5404\u9879\u529F\u80FD\u548C\u64CD\u4F5C\u65B9\u5F0F\uFF0C\u4E3A\u540E\u7EED\u7AE0\u8282\u7684\u5B66\u4E60\u6253\u4E0B\u575A\u5B9E\u57FA\u7840\u3002\u901A\u8FC7\u672C\u7AE0\u5185\u5BB9\uFF0C\u8BFB\u8005\u5C06\u4E86\u89E3IntelliJ IDEA\u5982\u4F55\u7B80\u5316\u6570\u636E\u5E93\u8FDE\u63A5\u914D\u7F6E\u3001\u63D0\u5347\u5F00\u53D1\u6548\u7387\uFF0C\u5E76\u89E3\u51B3\u5E38\u89C1\u7684\u8FDE\u63A5\u95EE\u9898\uFF0C\u8BA9\u6570\u636E\u5E93\u8FDE\u63A5\u53D8\u5F97\u66F4\u52A0\u8F7B\u677E\u4FBF\u6377\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "2-mysql\u6570\u636E\u5E93\u8FDE\u63A5\u914D\u7F6E",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#2-mysql\u6570\u636E\u5E93\u8FDE\u63A5\u914D\u7F6E",
        children: "#"
      }), "2. MySQL\u6570\u636E\u5E93\u8FDE\u63A5\u914D\u7F6E"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u4F7F\u7528 IntelliJ IDEA \u8FDB\u884C\u5F00\u53D1\u65F6\uFF0C\u7ECF\u5E38\u9700\u8981\u8FDE\u63A5\u6570\u636E\u5E93\u8FDB\u884C\u6570\u636E\u64CD\u4F5C\u3002\u672C\u7AE0\u5C06\u8BE6\u7EC6\u4ECB\u7ECD\u5982\u4F55\u5728 IntelliJ IDEA \u4E2D\u914D\u7F6E MySQL \u6570\u636E\u5E93\u8FDE\u63A5\uFF0C\u5305\u62EC\u57FA\u7840\u914D\u7F6E\u3001\u8FDE\u63A5\u9A71\u52A8\u9009\u62E9\u4E0E\u5BFC\u5165\u4EE5\u53CA\u8FDE\u63A5\u53C2\u6570\u8BBE\u7F6E\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "21-mysql\u8FDE\u63A5\u914D\u7F6E\u57FA\u7840",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#21-mysql\u8FDE\u63A5\u914D\u7F6E\u57FA\u7840",
        children: "#"
      }), "2.1 MySQL\u8FDE\u63A5\u914D\u7F6E\u57FA\u7840"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u8FDB\u884C MySQL \u6570\u636E\u5E93\u8FDE\u63A5\u4E4B\u524D\uFF0C\u9700\u8981\u8FDB\u884C\u57FA\u7840\u914D\u7F6E\uFF0C\u5305\u62EC\u8BBE\u7F6E\u4E3B\u673A\u4E0E\u7AEF\u53E3\u3001\u6570\u636E\u5E93\u7528\u6237\u540D\u548C\u5BC6\u7801\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "211-\u4E3B\u673A\u4E0E\u7AEF\u53E3\u8BBE\u7F6E",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#211-\u4E3B\u673A\u4E0E\u7AEF\u53E3\u8BBE\u7F6E",
        children: "#"
      }), "2.1.1 \u4E3B\u673A\u4E0E\u7AEF\u53E3\u8BBE\u7F6E"]
    }), "\n", jsx(_components.p, {
      children: "\u5728 IntelliJ IDEA \u4E2D\u914D\u7F6E MySQL \u6570\u636E\u5E93\u8FDE\u63A5\u65F6\uFF0C\u9996\u5148\u9700\u8981\u8BBE\u7F6E\u4E3B\u673A\u4E0E\u7AEF\u53E3\u4FE1\u606F\u3002\u901A\u5E38\u9ED8\u8BA4\u7684 MySQL \u4E3B\u673A\u662F localhost\uFF0C\u7AEF\u53E3\u662F 3306\uFF0C\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8FDB\u884C\u76F8\u5E94\u8BBE\u7F6E\u3002"
    }), "\n", jsxs(_components.div, {
      className: "language-java",
      children: [jsx(_components.button, {
        className: "copy"
      }), jsx(_components.span, {
        className: "lang",
        children: "java"
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
              children: "// \u8BBE\u7F6EMySQL\u4E3B\u673A\u4E0E\u7AEF\u53E3"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "String"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "host"
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
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "localhost"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "int"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "port"
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
                color: "#B48EAD"
              },
              children: "3306"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h4, {
      id: "212-\u6570\u636E\u5E93\u7528\u6237\u540D\u548C\u5BC6\u7801\u8BBE\u7F6E",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#212-\u6570\u636E\u5E93\u7528\u6237\u540D\u548C\u5BC6\u7801\u8BBE\u7F6E",
        children: "#"
      }), "2.1.2 \u6570\u636E\u5E93\u7528\u6237\u540D\u548C\u5BC6\u7801\u8BBE\u7F6E"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u8FDE\u63A5 MySQL \u6570\u636E\u5E93\u65F6\uFF0C\u5FC5\u987B\u63D0\u4F9B\u6B63\u786E\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801\u3002\u5728 IntelliJ IDEA \u4E2D\u914D\u7F6E\u8FDE\u63A5\u65F6\uFF0C\u8F93\u5165\u6570\u636E\u5E93\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF0C\u4EE5\u786E\u4FDD\u8FDE\u63A5\u987A\u5229\u5EFA\u7ACB\u3002"
    }), "\n", jsxs(_components.div, {
      className: "language-java",
      children: [jsx(_components.button, {
        className: "copy"
      }), jsx(_components.span, {
        className: "lang",
        children: "java"
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
              children: "// \u8BBE\u7F6E\u6570\u636E\u5E93\u7528\u6237\u540D\u548C\u5BC6\u7801"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "String"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "username"
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
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "your_username"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "String"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
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
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "your_password"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h3, {
      id: "22-\u8FDE\u63A5\u9A71\u52A8\u9009\u62E9\u4E0E\u5BFC\u5165",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#22-\u8FDE\u63A5\u9A71\u52A8\u9009\u62E9\u4E0E\u5BFC\u5165",
        children: "#"
      }), "2.2 \u8FDE\u63A5\u9A71\u52A8\u9009\u62E9\u4E0E\u5BFC\u5165"]
    }), "\n", jsx(_components.p, {
      children: "\u9009\u62E9\u9002\u5F53\u7684\u8FDE\u63A5\u9A71\u52A8\u5668\u662F\u8FDE\u63A5 MySQL \u6570\u636E\u5E93\u7684\u5173\u952E\u90E8\u5206\uFF0C\u672C\u8282\u5C06\u4ECB\u7ECD\u5982\u4F55\u5BFC\u5165 JDBC \u9A71\u52A8\u5668\u548C\u7B2C\u4E09\u65B9\u6570\u636E\u5E93\u9A71\u52A8\u5668\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "221-jdbc\u9A71\u52A8\u5668\u5BFC\u5165",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#221-jdbc\u9A71\u52A8\u5668\u5BFC\u5165",
        children: "#"
      }), "2.2.1 JDBC\u9A71\u52A8\u5668\u5BFC\u5165"]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7 Maven \u6216\u624B\u52A8\u5BFC\u5165 JDBC \u9A71\u52A8\u5668\uFF0C\u4F7F IntelliJ IDEA \u80FD\u591F\u8BC6\u522B\u5E76\u4F7F\u7528 MySQL \u9A71\u52A8\u5668\u6765\u8FDE\u63A5\u6570\u636E\u5E93\u3002"
    }), "\n", jsxs(_components.div, {
      className: "language-xml",
      children: [jsx(_components.button, {
        className: "copy"
      }), jsx(_components.span, {
        className: "lang",
        children: "xml"
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
              children: "<!-- \u5BFC\u5165MySQL JDBC\u9A71\u52A8 -->"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<dependency>"
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
                color: "#81A1C1"
              },
              children: "<groupId>"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "mysql"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</groupId>"
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
              children: "<artifactId>"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "mysql-connector-java"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</artifactId>"
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
              children: "<version>"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "8.0.23"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</version>"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</dependency>"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h4, {
      id: "222-\u7B2C\u4E09\u65B9\u6570\u636E\u5E93\u9A71\u52A8\u5668\u4F7F\u7528",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#222-\u7B2C\u4E09\u65B9\u6570\u636E\u5E93\u9A71\u52A8\u5668\u4F7F\u7528",
        children: "#"
      }), "2.2.2 \u7B2C\u4E09\u65B9\u6570\u636E\u5E93\u9A71\u52A8\u5668\u4F7F\u7528"]
    }), "\n", jsx(_components.p, {
      children: "\u9664\u4E86\u5B98\u65B9\u7684 MySQL \u9A71\u52A8\u5668\uFF0C\u6709\u65F6\u4E5F\u53EF\u4EE5\u9009\u62E9\u7B2C\u4E09\u65B9\u6570\u636E\u5E93\u9A71\u52A8\u5668\u6765\u8FDE\u63A5 MySQL \u6570\u636E\u5E93\u3002\u5728\u5BFC\u5165\u9A71\u52A8\u5668\u540E\uFF0C\u9700\u5728 IntelliJ IDEA \u4E2D\u914D\u7F6E\u9A71\u52A8\u5668\u4FE1\u606F\u3002"
    }), "\n", jsxs(_components.div, {
      className: "language-java",
      children: [jsx(_components.button, {
        className: "copy"
      }), jsx(_components.span, {
        className: "lang",
        children: "java"
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
              children: "// \u5BFC\u5165\u7B2C\u4E09\u65B9\u6570\u636E\u5E93\u9A71\u52A8\u5668"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "Class"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "forName"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "com.mysql.cj.jdbc.Driver"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h3, {
      id: "23-\u8FDE\u63A5\u53C2\u6570\u8BBE\u7F6E",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#23-\u8FDE\u63A5\u53C2\u6570\u8BBE\u7F6E",
        children: "#"
      }), "2.3 \u8FDE\u63A5\u53C2\u6570\u8BBE\u7F6E"]
    }), "\n", jsx(_components.p, {
      children: "\u8FDE\u63A5\u53C2\u6570\u7684\u8BBE\u7F6E\u5BF9\u4E8E\u786E\u4FDD\u8FDE\u63A5\u7684\u987A\u5229\u8FDB\u884C\u81F3\u5173\u91CD\u8981\uFF0C\u672C\u8282\u5C06\u4ECB\u7ECD\u5982\u4F55\u8BBE\u7F6E\u8FDE\u63A5\u8D85\u65F6\u548C\u914D\u7F6E\u5B57\u7B26\u96C6\u7B49\u53C2\u6570\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "231-\u8BBE\u7F6E\u8FDE\u63A5\u8D85\u65F6",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#231-\u8BBE\u7F6E\u8FDE\u63A5\u8D85\u65F6",
        children: "#"
      }), "2.3.1 \u8BBE\u7F6E\u8FDE\u63A5\u8D85\u65F6"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u8FDE\u63A5 MySQL \u6570\u636E\u5E93\u65F6\uFF0C\u7ECF\u5E38\u9700\u8981\u8BBE\u7F6E\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\uFF0C\u4EE5\u786E\u4FDD\u8FDE\u63A5\u4E0D\u4F1A\u56E0\u957F\u65F6\u95F4\u7B49\u5F85\u800C\u5931\u8D25\u3002"
    }), "\n", jsxs(_components.div, {
      className: "language-java",
      children: [jsx(_components.button, {
        className: "copy"
      }), jsx(_components.span, {
        className: "lang",
        children: "java"
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
              children: "// \u8BBE\u7F6E\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\u4E3A5\u79D2"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "int"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "timeout"
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
                color: "#B48EAD"
              },
              children: "5"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h4, {
      id: "232-\u914D\u7F6E\u5B57\u7B26\u96C6",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#232-\u914D\u7F6E\u5B57\u7B26\u96C6",
        children: "#"
      }), "2.3.2 \u914D\u7F6E\u5B57\u7B26\u96C6"]
    }), "\n", jsx(_components.p, {
      children: "\u6839\u636E\u9879\u76EE\u9700\u6C42\uFF0C\u914D\u7F6E\u6B63\u786E\u7684\u5B57\u7B26\u96C6\u662F\u975E\u5E38\u91CD\u8981\u7684\uFF0C\u53EF\u4EE5\u907F\u514D\u51FA\u73B0\u4E71\u5417\u6216\u7F16\u7801\u95EE\u9898\u3002"
    }), "\n", jsxs(_components.div, {
      className: "language-java",
      children: [jsx(_components.button, {
        className: "copy"
      }), jsx(_components.span, {
        className: "lang",
        children: "java"
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
              children: "// \u914D\u7F6EMySQL\u8FDE\u63A5\u5B57\u7B26\u96C6\u4E3AUTF-8"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "String"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "charset"
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
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "UTF-8"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u672C\u7AE0\u8BE6\u7EC6\u4ECB\u7ECD\u4E86\u5728 IntelliJ IDEA \u4E2D\u914D\u7F6E MySQL \u6570\u636E\u5E93\u8FDE\u63A5\u65F6\u7684\u57FA\u7840\u914D\u7F6E\u3001\u8FDE\u63A5\u9A71\u52A8\u9009\u62E9\u4E0E\u5BFC\u5165\u4EE5\u53CA\u8FDE\u63A5\u53C2\u6570\u8BBE\u7F6E\u7684\u76F8\u5173\u5185\u5BB9\uFF0C\u5E0C\u671B\u53EF\u4EE5\u5E2E\u52A9\u8BFB\u8005\u987A\u5229\u8FDE\u63A5\u6570\u636E\u5E93\u8FDB\u884C\u5F00\u53D1\u5DE5\u4F5C\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "3-\u6392\u67E5\u8FDE\u63A5\u5E38\u89C1\u8BBE\u7F6E\u95EE\u9898",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#3-\u6392\u67E5\u8FDE\u63A5\u5E38\u89C1\u8BBE\u7F6E\u95EE\u9898",
        children: "#"
      }), "3. \u6392\u67E5\u8FDE\u63A5\u5E38\u89C1\u8BBE\u7F6E\u95EE\u9898"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u4F7F\u7528IntelliJ IDEA\u8FDE\u63A5MySQL\u6570\u636E\u5E93\u65F6\uFF0C\u6709\u65F6\u5019\u4F1A\u9047\u5230\u8FDE\u63A5\u95EE\u9898\uFF0C\u672C\u7AE0\u8282\u5C06\u91CD\u70B9\u4ECB\u7ECD\u5982\u4F55\u6392\u67E5\u5E38\u89C1\u7684\u8FDE\u63A5\u8BBE\u7F6E\u95EE\u9898\uFF0C\u4EE5\u786E\u4FDD\u8FDE\u63A5\u987A\u5229\u8FDB\u884C\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "31-\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#31-\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5",
        children: "#"
      }), "3.1 \u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u8FDB\u884CMySQL\u6570\u636E\u5E93\u8FDE\u63A5\u65F6\uFF0C\u9996\u5148\u9700\u8981\u786E\u8BA4\u7F51\u7EDC\u8FDE\u63A5\u662F\u5426\u6B63\u5E38\uFF0C\u4E0B\u9762\u5C06\u4ECB\u7ECD\u5982\u4F55\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5\u7684\u4E24\u4E2A\u5173\u952E\u65B9\u9762\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "311-\u786E\u8BA4\u4E3B\u673A\u4E0E\u7AEF\u53E3\u53EF\u7528\u6027",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#311-\u786E\u8BA4\u4E3B\u673A\u4E0E\u7AEF\u53E3\u53EF\u7528\u6027",
        children: "#"
      }), "3.1.1 \u786E\u8BA4\u4E3B\u673A\u4E0E\u7AEF\u53E3\u53EF\u7528\u6027"]
    }), "\n", jsx(_components.p, {
      children: "\u5728IntelliJ IDEA\u4E2D\u914D\u7F6EMySQL\u8FDE\u63A5\u65F6\uFF0C\u9700\u8981\u786E\u4FDD\u8F93\u5165\u7684\u4E3B\u673A\u540D\u548C\u7AEF\u53E3\u53F7\u662F\u6B63\u786E\u7684\u3002\u53EF\u4EE5\u901A\u8FC7 ping \u4E3B\u673A\u540D \u548C telnet \u4E3B\u673A\u540D \u7AEF\u53E3\u53F7 \u547D\u4EE4\u6765\u68C0\u67E5\u4E3B\u673A\u4E0E\u7AEF\u53E3\u7684\u8FDE\u901A\u6027\uFF0C\u786E\u4FDD\u6570\u636E\u5E93\u670D\u52A1\u80FD\u591F\u6B63\u5E38\u8BBF\u95EE\u3002"
    }), "\n", jsxs(_components.div, {
      className: "language-bash",
      children: [jsx(_components.button, {
        className: "copy"
      }), jsx(_components.span, {
        className: "lang",
        children: "bash"
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
              children: "# \u68C0\u67E5\u4E3B\u673A\u4E0E\u7AEF\u53E3\u8FDE\u901A\u6027"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "ping \u4E3B\u673A\u540D"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "# telnet\u65B9\u5F0F\u68C0\u67E5\u7AEF\u53E3\u8FDE\u901A\u6027"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "telnet \u4E3B\u673A\u540D \u7AEF\u53E3\u53F7"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h4, {
      id: "312-\u67E5\u770B\u9632\u706B\u5899\u8BBE\u7F6E",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#312-\u67E5\u770B\u9632\u706B\u5899\u8BBE\u7F6E",
        children: "#"
      }), "3.1.2 \u67E5\u770B\u9632\u706B\u5899\u8BBE\u7F6E"]
    }), "\n", jsx(_components.p, {
      children: "\u9632\u706B\u5899\u53EF\u80FD\u4F1A\u963B\u6B62\u6570\u636E\u5E93\u8FDE\u63A5\uFF0C\u56E0\u6B64\u9700\u8981\u67E5\u770B\u9632\u706B\u5899\u8BBE\u7F6E\u662F\u5426\u5BF9\u6570\u636E\u5E93\u7AEF\u53E3\u5F00\u653E\u3002\u53EF\u4EE5\u901A\u8FC7\u5728\u670D\u52A1\u5668\u7AEF\u6253\u5F00\u5BF9\u5E94\u7AEF\u53E3\u6216\u8005\u914D\u7F6E\u9632\u706B\u5899\u89C4\u5219\u6765\u89E3\u51B3\u8FDE\u63A5\u53D7\u963B\u95EE\u9898\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "32-\u9A8C\u8BC1\u7528\u6237\u540D\u548C\u5BC6\u7801",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#32-\u9A8C\u8BC1\u7528\u6237\u540D\u548C\u5BC6\u7801",
        children: "#"
      }), "3.2 \u9A8C\u8BC1\u7528\u6237\u540D\u548C\u5BC6\u7801"]
    }), "\n", jsx(_components.p, {
      children: "\u6B63\u786E\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801\u662F\u786E\u4FDD\u8FDE\u63A5\u6210\u529F\u7684\u524D\u63D0\uFF0C\u672C\u5C0F\u8282\u5C06\u4ECB\u7ECD\u5982\u4F55\u9A8C\u8BC1\u7528\u6237\u540D\u548C\u5BC6\u7801\u8BBE\u7F6E\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "321-\u68C0\u67E5\u7528\u6237\u6743\u9650",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#321-\u68C0\u67E5\u7528\u6237\u6743\u9650",
        children: "#"
      }), "3.2.1 \u68C0\u67E5\u7528\u6237\u6743\u9650"]
    }), "\n", jsx(_components.p, {
      children: "\u5728MySQL\u4E2D\uFF0C\u7528\u6237\u9700\u8981\u6709\u8DB3\u591F\u7684\u6743\u9650\u6765\u8BBF\u95EE\u6570\u636E\u5E93\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0BSQL\u8BED\u53E5\u68C0\u67E5\u7528\u6237\u6743\u9650\uFF1A"
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
              children: "SHOW GRANTS FOR "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "\u7528\u6237\u540D"
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
              children: "\u4E3B\u673A\u540D"
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
      id: "322-\u91CD\u65B0\u8BBE\u7F6E\u5BC6\u7801",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#322-\u91CD\u65B0\u8BBE\u7F6E\u5BC6\u7801",
        children: "#"
      }), "3.2.2 \u91CD\u65B0\u8BBE\u7F6E\u5BC6\u7801"]
    }), "\n", jsx(_components.p, {
      children: "\u5982\u679C\u6000\u7591\u5BC6\u7801\u9519\u8BEF\u5BFC\u81F4\u8FDE\u63A5\u5931\u8D25\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u91CD\u65B0\u8BBE\u7F6E\u5BC6\u7801\uFF1A"
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
              children: "ALTER"
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
              children: "\u7528\u6237\u540D"
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
              children: "\u4E3B\u673A\u540D"
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
              children: "\u65B0\u5BC6\u7801"
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
      id: "33-\u68C0\u67E5\u8FDE\u63A5\u9A71\u52A8",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#33-\u68C0\u67E5\u8FDE\u63A5\u9A71\u52A8",
        children: "#"
      }), "3.3 \u68C0\u67E5\u8FDE\u63A5\u9A71\u52A8"]
    }), "\n", jsx(_components.p, {
      children: "\u5408\u9002\u7684\u9A71\u52A8\u7A0B\u5E8F\u5BF9\u4E8E\u6570\u636E\u5E93\u8FDE\u63A5\u81F3\u5173\u91CD\u8981\uFF0C\u672C\u8282\u5C06\u4ECB\u7ECD\u5982\u4F55\u6392\u67E5\u8FDE\u63A5\u9A71\u52A8\u76F8\u5173\u7684\u95EE\u9898\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "331-\u786E\u8BA4\u9A71\u52A8\u4F9D\u8D56",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#331-\u786E\u8BA4\u9A71\u52A8\u4F9D\u8D56",
        children: "#"
      }), "3.3.1 \u786E\u8BA4\u9A71\u52A8\u4F9D\u8D56"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u9879\u76EE\u4E2D\u5F15\u5165\u7684\u9A71\u52A8\u5305\u5FC5\u987B\u6B63\u786E\uFF0C\u4EE5\u786E\u4FDD\u80FD\u591F\u987A\u5229\u8FDE\u63A5\u6570\u636E\u5E93\u3002\u68C0\u67E5\u9879\u76EE\u7684\u4F9D\u8D56\u914D\u7F6E\uFF0C\u786E\u8BA4\u9A71\u52A8\u5305\u662F\u5426\u6B63\u786E\u5BFC\u5165\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "332-\u66F4\u65B0\u9A71\u52A8\u7248\u672C",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#332-\u66F4\u65B0\u9A71\u52A8\u7248\u672C",
        children: "#"
      }), "3.3.2 \u66F4\u65B0\u9A71\u52A8\u7248\u672C"]
    }), "\n", jsx(_components.p, {
      children: "\u6709\u65F6\u5019\u53EF\u80FD\u662F\u56E0\u4E3A\u9A71\u52A8\u7248\u672C\u8FC7\u4F4E\u6216\u8FC7\u9AD8\u5BFC\u81F4\u8FDE\u63A5\u95EE\u9898\uFF0C\u5EFA\u8BAE\u6839\u636EMySQL\u7248\u672C\u9009\u62E9\u5408\u9002\u7684\u9A71\u52A8\u7248\u672C\uFF0C\u5E76\u53CA\u65F6\u66F4\u65B0\u9A71\u52A8\u7A0B\u5E8F\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u4EE5\u4E0A\u6392\u67E5\u6B65\u9AA4\uFF0C\u53EF\u4EE5\u6709\u6548\u89E3\u51B3IntelliJ IDEA\u8FDE\u63A5MySQL\u6570\u636E\u5E93\u65F6\u5E38\u89C1\u7684\u8BBE\u7F6E\u95EE\u9898\uFF0C\u4FDD\u8BC1\u8FDE\u63A5\u987A\u5229\u8FDB\u884C\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "4-\u9AD8\u7EA7\u8FDE\u63A5\u8BBE\u7F6E\u4E0E\u4F18\u5316",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#4-\u9AD8\u7EA7\u8FDE\u63A5\u8BBE\u7F6E\u4E0E\u4F18\u5316",
        children: "#"
      }), "4. \u9AD8\u7EA7\u8FDE\u63A5\u8BBE\u7F6E\u4E0E\u4F18\u5316"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u672C\u7AE0\u4E2D\uFF0C\u6211\u4EEC\u5C06\u6DF1\u5165\u63A2\u8BA8\u5982\u4F55\u8FDB\u884C\u9AD8\u7EA7\u8FDE\u63A5\u8BBE\u7F6E\u4E0E\u4F18\u5316\uFF0C\u4ECE\u914D\u7F6E\u8FDE\u63A5\u6C60\u5230\u542F\u7528SSL\u52A0\u5BC6\u8FDE\u63A5\uFF0C\u518D\u5230\u6027\u80FD\u4F18\u5316\u5EFA\u8BAE\uFF0C\u5E2E\u52A9\u4F60\u66F4\u597D\u5730\u7BA1\u7406\u6570\u636E\u5E93\u8FDE\u63A5\uFF0C\u63D0\u5347\u7CFB\u7EDF\u6027\u80FD\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "41-\u8FDE\u63A5\u6C60\u914D\u7F6E",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#41-\u8FDE\u63A5\u6C60\u914D\u7F6E",
        children: "#"
      }), "4.1 \u8FDE\u63A5\u6C60\u914D\u7F6E"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u5B9E\u9645\u5E94\u7528\u4E2D\uFF0C\u4F7F\u7528\u8FDE\u63A5\u6C60\u53EF\u4EE5\u6709\u6548\u5730\u7BA1\u7406\u6570\u636E\u5E93\u8FDE\u63A5\uFF0C\u63D0\u9AD8\u7CFB\u7EDF\u6027\u80FD\u548C\u8D44\u6E90\u5229\u7528\u7387\u3002\u4E0B\u9762\u662F\u4E00\u4E9B\u914D\u7F6E\u8FDE\u63A5\u6C60\u7684\u65B9\u6CD5\uFF1A"
    }), "\n", jsxs(_components.h4, {
      id: "411-\u4F7F\u7528\u8FDE\u63A5\u6C60\u7BA1\u7406\u8FDE\u63A5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#411-\u4F7F\u7528\u8FDE\u63A5\u6C60\u7BA1\u7406\u8FDE\u63A5",
        children: "#"
      }), "4.1.1 \u4F7F\u7528\u8FDE\u63A5\u6C60\u7BA1\u7406\u8FDE\u63A5"]
    }), "\n", jsx(_components.p, {
      children: "\u8FDE\u63A5\u6C60\u53EF\u4EE5\u91CD\u590D\u5229\u7528\u5DF2\u521B\u5EFA\u7684\u6570\u636E\u5E93\u8FDE\u63A5\uFF0C\u907F\u514D\u9891\u7E41\u5730\u6253\u5F00\u548C\u5173\u95ED\u8FDE\u63A5\uFF0C\u8282\u7701\u8FDE\u63A5\u5EFA\u7ACB\u7684\u65F6\u95F4\u6210\u672C\u3002\u4E0B\u9762\u662F\u4F7F\u7528\u8FDE\u63A5\u6C60\u7684\u793A\u4F8B\u4EE3\u7801\uFF1A"
    }), "\n", jsxs(_components.div, {
      className: "language-java",
      children: [jsx(_components.button, {
        className: "copy"
      }), jsx(_components.span, {
        className: "lang",
        children: "java"
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
              children: "// \u521D\u59CB\u5316\u8FDE\u63A5\u6C60"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "DataSource"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "dataSource"
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
                color: "#81A1C1"
              },
              children: "new"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "MyDataSource"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "()"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// \u4ECE\u8FDE\u63A5\u6C60\u83B7\u53D6\u8FDE\u63A5"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Connection"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "connection"
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
                color: "#D8DEE9"
              },
              children: "dataSource"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "getConnection"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "()"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// \u6267\u884C\u6570\u636E\u5E93\u64CD\u4F5C"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Statement"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "statement"
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
                color: "#D8DEE9"
              },
              children: "connection"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "createStatement"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "()"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// \u5173\u95ED\u8FDE\u63A5\uFF0C\u5B9E\u9645\u662F\u5C06\u8FDE\u63A5\u5F52\u8FD8\u7ED9\u8FDE\u63A5\u6C60"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "connection"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "close"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "()"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h4, {
      id: "412-\u914D\u7F6E\u8FDE\u63A5\u6C60\u53C2\u6570",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#412-\u914D\u7F6E\u8FDE\u63A5\u6C60\u53C2\u6570",
        children: "#"
      }), "4.1.2 \u914D\u7F6E\u8FDE\u63A5\u6C60\u53C2\u6570"]
    }), "\n", jsx(_components.p, {
      children: "\u8FDE\u63A5\u6C60\u7684\u6027\u80FD\u548C\u8D44\u6E90\u5229\u7528\u7387\u4E0E\u5176\u53C2\u6570\u7684\u8BBE\u7F6E\u5BC6\u5207\u76F8\u5173\uFF0C\u5408\u7406\u914D\u7F6E\u8FDE\u63A5\u6C60\u53C2\u6570\u53EF\u4EE5\u63D0\u5347\u7CFB\u7EDF\u7684\u6027\u80FD\u3002\u4EE5\u4E0B\u662F\u4E00\u4E9B\u5E38\u89C1\u7684\u8FDE\u63A5\u6C60\u53C2\u6570\u8BBE\u7F6E\uFF1A"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "\u8FDE\u63A5\u6C60\u5927\u5C0F\uFF1A\u63A7\u5236\u8FDE\u63A5\u6C60\u4E2D\u53EF\u4EE5\u5B58\u5728\u7684\u6700\u5927\u8FDE\u63A5\u6570\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u6700\u5927\u7A7A\u95F2\u65F6\u95F4\uFF1A\u8BBE\u5B9A\u8FDE\u63A5\u5728\u7A7A\u95F2\u72B6\u6001\u4E0B\u7684\u6700\u5927\u5B58\u6D3B\u65F6\u95F4\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\uFF1A\u6307\u5B9A\u83B7\u53D6\u8FDE\u63A5\u7684\u8D85\u65F6\u65F6\u95F4\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u6700\u5927\u7B49\u5F85\u65F6\u95F4\uFF1A\u8BBE\u7F6E\u83B7\u53D6\u8FDE\u63A5\u65F6\u7684\u6700\u5927\u7B49\u5F85\u65F6\u95F4\uFF0C\u907F\u514D\u957F\u65F6\u95F4\u7B49\u5F85\u3002"
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "42-ssl\u52A0\u5BC6\u8FDE\u63A5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#42-ssl\u52A0\u5BC6\u8FDE\u63A5",
        children: "#"
      }), "4.2 SSL\u52A0\u5BC6\u8FDE\u63A5"]
    }), "\n", jsx(_components.p, {
      children: "\u4FDD\u969C\u6570\u636E\u5E93\u8FDE\u63A5\u7684\u5B89\u5168\u6027\u662F\u81F3\u5173\u91CD\u8981\u7684\uFF0C\u7279\u522B\u662F\u5728\u6570\u636E\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u3002\u542F\u7528SSL\u52A0\u5BC6\u8FDE\u63A5\u53EF\u4EE5\u6709\u6548\u5730\u9632\u6B62\u6570\u636E\u88AB\u7A83\u53D6\u6216\u7BE1\u6539\u3002\u4EE5\u4E0B\u662F\u914D\u7F6ESSL\u9009\u9879\u7684\u6B65\u9AA4\uFF1A"
    }), "\n", jsxs(_components.h4, {
      id: "421-\u542F\u7528ssl\u5B89\u5168\u8FDE\u63A5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#421-\u542F\u7528ssl\u5B89\u5168\u8FDE\u63A5",
        children: "#"
      }), "4.2.1 \u542F\u7528SSL\u5B89\u5168\u8FDE\u63A5"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u8FDE\u63A5\u6570\u636E\u5E93\u65F6\uFF0C\u542F\u7528SSL\u9009\u9879\uFF0C\u5E76\u914D\u7F6E\u76F8\u5E94\u7684\u8BC1\u4E66\u4FE1\u606F\u548C\u52A0\u5BC6\u7B97\u6CD5\u3002"
    }), "\n", jsxs(_components.div, {
      className: "language-java",
      children: [jsx(_components.button, {
        className: "copy"
      }), jsx(_components.span, {
        className: "lang",
        children: "java"
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
              children: "// \u542F\u7528SSL\u8FDE\u63A5"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "jdbc"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "mysql"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "//localhost:3306/test?useSSL=true"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h4, {
      id: "422-\u914D\u7F6Essl\u9009\u9879",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#422-\u914D\u7F6Essl\u9009\u9879",
        children: "#"
      }), "4.2.2 \u914D\u7F6ESSL\u9009\u9879"]
    }), "\n", jsx(_components.p, {
      children: "\u914D\u7F6ESSL\u8FDE\u63A5\u7684\u5177\u4F53\u53C2\u6570\uFF0C\u5982\u8BC1\u4E66\u8DEF\u5F84\u3001\u5BC6\u7801\u7B49\uFF0C\u786E\u4FDD\u8FDE\u63A5\u7684\u5B89\u5168\u6027\u548C\u53EF\u9760\u6027\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "43-\u6027\u80FD\u4F18\u5316\u5EFA\u8BAE",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#43-\u6027\u80FD\u4F18\u5316\u5EFA\u8BAE",
        children: "#"
      }), "4.3 \u6027\u80FD\u4F18\u5316\u5EFA\u8BAE"]
    }), "\n", jsx(_components.p, {
      children: "\u5BF9\u4E8E\u6570\u636E\u5E93\u8FDE\u63A5\u7684\u6027\u80FD\u4F18\u5316\uFF0C\u4E0D\u4EC5\u53EF\u4EE5\u63D0\u5347\u7CFB\u7EDF\u7684\u54CD\u5E94\u901F\u5EA6\uFF0C\u8FD8\u53EF\u4EE5\u964D\u4F4E\u7CFB\u7EDF\u8D44\u6E90\u7684\u5360\u7528\u3002\u4EE5\u4E0B\u662F\u4E00\u4E9B\u6027\u80FD\u4F18\u5316\u7684\u5EFA\u8BAE\uFF1A"
    }), "\n", jsxs(_components.h4, {
      id: "431-\u67E5\u8BE2\u4F18\u5316",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#431-\u67E5\u8BE2\u4F18\u5316",
        children: "#"
      }), "4.3.1 \u67E5\u8BE2\u4F18\u5316"]
    }), "\n", jsx(_components.p, {
      children: "\u5408\u7406\u8BBE\u8BA1\u548C\u4F18\u5316\u6570\u636E\u5E93\u67E5\u8BE2\u8BED\u53E5\uFF0C\u5305\u62EC\u7D22\u5F15\u7684\u4F7F\u7528\u3001\u907F\u514D\u5168\u8868\u626B\u63CF\u7B49\uFF0C\u53EF\u4EE5\u63D0\u9AD8\u67E5\u8BE2\u6548\u7387\u3002"
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
          })]
        })
      })]
    }), "\n", jsxs(_components.h4, {
      id: "432-\u7D22\u5F15\u8C03\u4F18",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#432-\u7D22\u5F15\u8C03\u4F18",
        children: "#"
      }), "4.3.2 \u7D22\u5F15\u8C03\u4F18"]
    }), "\n", jsx(_components.p, {
      children: "\u5BF9\u6570\u636E\u5E93\u8868\u7684\u7D22\u5F15\u8FDB\u884C\u8C03\u4F18\uFF0C\u5305\u62EC\u91CD\u5EFA\u7D22\u5F15\u3001\u8C03\u6574\u7D22\u5F15\u7ED3\u6784\u7B49\uFF0C\u6709\u52A9\u4E8E\u63D0\u5347\u67E5\u8BE2\u6027\u80FD\u548C\u964D\u4F4E\u6570\u636E\u5E93\u8D1F\u8F7D\u3002"
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
              children: "-- \u91CD\u5EFA\u7D22\u5F15"
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
              children: " table_name "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "REBUILD"
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
      children: "\u901A\u8FC7\u5408\u7406\u914D\u7F6E\u8FDE\u63A5\u6C60\u3001\u542F\u7528SSL\u5B89\u5168\u8FDE\u63A5\u4EE5\u53CA\u4F18\u5316\u6570\u636E\u5E93\u67E5\u8BE2\u7B49\u624B\u6BB5\uFF0C\u53EF\u4EE5\u6709\u6548\u63D0\u5347\u6570\u636E\u5E93\u8FDE\u63A5\u7684\u6027\u80FD\u548C\u5B89\u5168\u6027\uFF0C\u4E3A\u7CFB\u7EDF\u7684\u7A33\u5B9A\u8FD0\u884C\u63D0\u4F9B\u4FDD\u969C\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "5-\u6545\u969C\u6392\u9664\u4E0E\u65E5\u5FD7\u5206\u6790",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#5-\u6545\u969C\u6392\u9664\u4E0E\u65E5\u5FD7\u5206\u6790",
        children: "#"
      }), "5. \u6545\u969C\u6392\u9664\u4E0E\u65E5\u5FD7\u5206\u6790"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u4F7F\u7528IntelliJ IDEA\u8FDE\u63A5MySQL\u6570\u636E\u5E93\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u7ECF\u5E38\u4F1A\u9047\u5230\u5404\u79CD\u6545\u969C\u548C\u9519\u8BEF\u4FE1\u606F\u3002\u672C\u7AE0\u5C06\u4ECB\u7ECD\u5982\u4F55\u8FDB\u884C\u6545\u969C\u6392\u9664\u4EE5\u53CA\u5982\u4F55\u5206\u6790\u65E5\u5FD7\uFF0C\u5E2E\u52A9\u8BFB\u8005\u66F4\u597D\u5730\u89E3\u51B3\u95EE\u9898\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "51-\u65E5\u5FD7\u7B49\u7EA7\u8BBE\u7F6E",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#51-\u65E5\u5FD7\u7B49\u7EA7\u8BBE\u7F6E",
        children: "#"
      }), "5.1 \u65E5\u5FD7\u7B49\u7EA7\u8BBE\u7F6E"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u6392\u67E5\u6545\u969C\u65F6\uFF0C\u8BBE\u7F6E\u9002\u5F53\u7684\u65E5\u5FD7\u7B49\u7EA7\u662F\u975E\u5E38\u91CD\u8981\u7684\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u66F4\u6E05\u6670\u5730\u4E86\u89E3\u7CFB\u7EDF\u8FD0\u884C\u7684\u60C5\u51B5\uFF0C\u53CA\u65F6\u53D1\u73B0\u5F02\u5E38\u5E76\u9488\u5BF9\u6027\u5730\u5904\u7406\u3002\u4E0B\u9762\u6211\u4EEC\u6765\u770B\u5982\u4F55\u8FDB\u884C\u65E5\u5FD7\u7B49\u7EA7\u7684\u8BBE\u7F6E\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "511-\u8C03\u6574\u65E5\u5FD7\u8F93\u51FA\u7EA7\u522B",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#511-\u8C03\u6574\u65E5\u5FD7\u8F93\u51FA\u7EA7\u522B",
        children: "#"
      }), "5.1.1 \u8C03\u6574\u65E5\u5FD7\u8F93\u51FA\u7EA7\u522B"]
    }), "\n", jsx(_components.p, {
      children: "\u5728IntelliJ IDEA\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539\u65E5\u5FD7\u914D\u7F6E\u6587\u4EF6\u6765\u8C03\u6574\u8F93\u51FA\u7EA7\u522B\u3002\u4E00\u822C\u6765\u8BF4\uFF0C\u65E5\u5FD7\u7EA7\u522B\u5305\u62ECDEBUG\u3001INFO\u3001WARN\u3001ERROR\u7B49\u4E0D\u540C\u7EA7\u522B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u9700\u8981\u8FDB\u884C\u8BBE\u7F6E\u3002\u4EE5\u4E0B\u662F\u4E00\u4E2A\u793A\u4F8B\u7684logback.xml\u914D\u7F6E\u6587\u4EF6\uFF1A"
    }), "\n", jsxs(_components.div, {
      className: "language-xml",
      children: [jsx(_components.button, {
        className: "copy"
      }), jsx(_components.span, {
        className: "lang",
        children: "xml"
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
                color: "#81A1C1"
              },
              children: "<configuration>"
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
                color: "#81A1C1"
              },
              children: "<appender"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "name"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "FILE"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "class"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "ch.qos.logback.core.FileAppender"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
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
              children: "<file>"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "log.txt"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</file>"
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
              children: "<encoder>"
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
                color: "#81A1C1"
              },
              children: "<pattern>"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "%d %level [%thread] %logger{10} [%file:%line] %msg%n"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</pattern>"
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
              children: "</encoder>"
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
              children: "</appender>"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
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
              children: "<root"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "level"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "DEBUG"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
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
              children: "<appender-ref"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "ref"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "FILE"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "/>"
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
              children: "</root>"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</configuration>"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h4, {
      id: "512-\u67E5\u770B\u65E5\u5FD7\u6587\u4EF6",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#512-\u67E5\u770B\u65E5\u5FD7\u6587\u4EF6",
        children: "#"
      }), "5.1.2 \u67E5\u770B\u65E5\u5FD7\u6587\u4EF6"]
    }), "\n", jsx(_components.p, {
      children: "\u8BBE\u7F6E\u597D\u65E5\u5FD7\u8F93\u51FA\u7EA7\u522B\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u67E5\u770B\u76F8\u5E94\u7684\u65E5\u5FD7\u6587\u4EF6\u6765\u83B7\u53D6\u7CFB\u7EDF\u7684\u8FD0\u884C\u4FE1\u606F\u548C\u53EF\u80FD\u7684\u62A5\u9519\u3002\u901A\u8FC7\u5206\u6790\u65E5\u5FD7\uFF0C\u6211\u4EEC\u53EF\u4EE5\u66F4\u5FEB\u901F\u5730\u5B9A\u4F4D\u95EE\u9898\u6240\u5728\uFF0C\u8FDB\u800C\u8FDB\u884C\u4FEE\u590D\u548C\u4F18\u5316\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "52-\u5E38\u89C1\u9519\u8BEF\u89E3\u51B3",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#52-\u5E38\u89C1\u9519\u8BEF\u89E3\u51B3",
        children: "#"
      }), "5.2 \u5E38\u89C1\u9519\u8BEF\u89E3\u51B3"]
    }), "\n", jsx(_components.p, {
      children: "\u8FDE\u63A5MySQL\u6570\u636E\u5E93\u65F6\uFF0C\u5E38\u5E38\u4F1A\u78B0\u5230\u4E00\u4E9B\u5E38\u89C1\u9519\u8BEF\uFF0C\u5982Connection refused\u548CConnection timeout\u7B49\u95EE\u9898\u3002\u4E0B\u9762\u6211\u4EEC\u5C06\u9488\u5BF9\u8FD9\u4E9B\u9519\u8BEF\u5C55\u5F00\u8BA8\u8BBA\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "521-connection-refused\u9519\u8BEF\u5904\u7406",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#521-connection-refused\u9519\u8BEF\u5904\u7406",
        children: "#"
      }), "5.2.1 Connection refused\u9519\u8BEF\u5904\u7406"]
    }), "\n", jsx(_components.p, {
      children: "\u5F53\u51FA\u73B0Connection refused\u9519\u8BEF\u65F6\uFF0C\u9996\u5148\u9700\u8981\u68C0\u67E5MySQL\u670D\u52A1\u662F\u5426\u6B63\u5E38\u8FD0\u884C\uFF0C\u7136\u540E\u518D\u786E\u8BA4\u8FDE\u63A5\u53C2\u6570\u8BBE\u7F6E\u662F\u5426\u6B63\u786E\u3002\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u6B65\u9AA4\u6765\u5904\u7406\u8FD9\u4E00\u9519\u8BEF\uFF1A"
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: ["\u786E\u8BA4MySQL\u670D\u52A1\u662F\u5426\u542F\u52A8\uFF0C\u53EF\u4F7F\u7528\u547D\u4EE4", jsx(_components.code, {
          children: "sudo service mysql status"
        }), "\u6765\u68C0\u67E5\u3002"]
      }), "\n", jsx(_components.li, {
        children: "\u68C0\u67E5\u8FDE\u63A5\u7684\u4E3B\u673A\u540D\u548C\u7AEF\u53E3\u53F7\u662F\u5426\u51C6\u786E\u65E0\u8BEF\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u68C0\u67E5\u9632\u706B\u5899\u8BBE\u7F6E\uFF0C\u786E\u4FDDMySQL\u7AEF\u53E3\u662F\u5F00\u653E\u7684\u3002"
      }), "\n"]
    }), "\n", jsxs(_components.h4, {
      id: "522-connection-timeout\u89E3\u51B3\u65B9\u6CD5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#522-connection-timeout\u89E3\u51B3\u65B9\u6CD5",
        children: "#"
      }), "5.2.2 Connection timeout\u89E3\u51B3\u65B9\u6CD5"]
    }), "\n", jsx(_components.p, {
      children: "Connection timeout\u6307\u7684\u662F\u8FDE\u63A5\u8D85\u65F6\uFF0C\u8FD9\u53EF\u80FD\u662F\u7531\u4E8E\u7F51\u7EDC\u4E0D\u7A33\u5B9A\u6216\u8005\u8FDE\u63A5\u53C2\u6570\u8BBE\u7F6E\u4E0D\u5F53\u5BFC\u81F4\u7684\u3002\u4E0B\u9762\u662F\u89E3\u51B3Connection timeout\u9519\u8BEF\u7684\u65B9\u6CD5\uFF1A"
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsx(_components.li, {
        children: "\u589E\u52A0\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\uFF0C\u53EF\u4EE5\u5728\u8FDE\u63A5\u53C2\u6570\u4E2D\u8BBE\u7F6E\u8F83\u957F\u7684\u8D85\u65F6\u65F6\u95F4\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5\u662F\u5426\u6B63\u5E38\uFF0C\u5C1D\u8BD5\u4F7F\u7528ping\u547D\u4EE4\u68C0\u67E5MySQL\u670D\u52A1\u5668\u7684\u7F51\u7EDC\u8FDE\u901A\u6027\u3002"
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u4EE5\u4E0A\u65B9\u6CD5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6709\u6548\u5730\u89E3\u51B3Connection refused\u548CConnection timeout\u7B49\u5E38\u89C1\u9519\u8BEF\uFF0C\u786E\u4FDD\u8FDE\u63A5MySQL\u6570\u636E\u5E93\u7684\u987A\u5229\u8FDB\u884C\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u63A5\u4E0B\u6765\u6211\u4EEC\u5C06\u8FDB\u4E00\u6B65\u6DF1\u5165\u63A2\u8BA8MySQL\u6570\u636E\u5E93\u7684\u8FDE\u63A5\u914D\u7F6E\u548C\u6545\u969C\u6392\u9664\uFF0C\u5E2E\u52A9\u8BFB\u8005\u66F4\u597D\u5730\u7406\u89E3\u548C\u5229\u7528IntelliJ IDEA\u8FDB\u884C\u6570\u636E\u5E93\u5F00\u53D1\u3002"
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

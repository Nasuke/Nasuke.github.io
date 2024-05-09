import { jsx, jsxs, Fragment } from "react/jsx-runtime";
const frontmatter = void 0;
const toc = [{
  "id": "21-\u5B89\u88C5mysql\u9A71\u52A8\u8FDE\u63A5\u6570\u636E\u5E93",
  "text": "2.1 \u5B89\u88C5MySQL\u9A71\u52A8\u3001\u8FDE\u63A5\u6570\u636E\u5E93",
  "depth": 3
}, {
  "id": "211-\u4E0B\u8F7Dmysql-connectorj\u9A71\u52A8",
  "text": "2.1.1 \u4E0B\u8F7DMySQL Connector/J\u9A71\u52A8",
  "depth": 4
}, {
  "id": "212-\u914D\u7F6E\u9A71\u52A8\u6587\u4EF6",
  "text": "2.1.2 \u914D\u7F6E\u9A71\u52A8\u6587\u4EF6",
  "depth": 4
}, {
  "id": "22-\u521B\u5EFA\u65B0\u7684\u6570\u636E\u6E90",
  "text": "2.2 \u521B\u5EFA\u65B0\u7684\u6570\u636E\u6E90",
  "depth": 3
}, {
  "id": "221-\u9009\u62E9\u6570\u636E\u6E90\u7C7B\u578B",
  "text": "2.2.1 \u9009\u62E9\u6570\u636E\u6E90\u7C7B\u578B",
  "depth": 4
}, {
  "id": "222-\u8F93\u5165\u6570\u636E\u5E93\u8FDE\u63A5\u4FE1\u606F",
  "text": "2.2.2 \u8F93\u5165\u6570\u636E\u5E93\u8FDE\u63A5\u4FE1\u606F",
  "depth": 4
}, {
  "id": "223-\u6D4B\u8BD5\u8FDE\u63A5",
  "text": "2.2.3 \u6D4B\u8BD5\u8FDE\u63A5",
  "depth": 4
}, {
  "id": "23-\u6570\u636E\u6E90\u5C5E\u6027\u8BBE\u7F6E",
  "text": "2.3 \u6570\u636E\u6E90\u5C5E\u6027\u8BBE\u7F6E",
  "depth": 3
}, {
  "id": "231-\u8BBE\u5B9A\u540D\u79F0\u548C\u63CF\u8FF0",
  "text": "2.3.1 \u8BBE\u5B9A\u540D\u79F0\u548C\u63CF\u8FF0",
  "depth": 4
}, {
  "id": "232-\u9AD8\u7EA7\u8BBE\u7F6E",
  "text": "2.3.2 \u9AD8\u7EA7\u8BBE\u7F6E",
  "depth": 4
}, {
  "id": "31-\u6570\u636E\u5E93\u6D4F\u89C8",
  "text": "3.1 \u6570\u636E\u5E93\u6D4F\u89C8",
  "depth": 3
}, {
  "id": "311-\u67E5\u770B\u6570\u636E\u5E93\u4FE1\u606F",
  "text": "3.1.1 \u67E5\u770B\u6570\u636E\u5E93\u4FE1\u606F",
  "depth": 4
}, {
  "id": "312-\u6D4F\u89C8\u6570\u636E\u5E93\u5185\u5BB9",
  "text": "3.1.2 \u6D4F\u89C8\u6570\u636E\u5E93\u5185\u5BB9",
  "depth": 4
}, {
  "id": "32-\u7F16\u8F91\u6570\u636E",
  "text": "3.2 \u7F16\u8F91\u6570\u636E",
  "depth": 3
}, {
  "id": "321-\u67E5\u770B\u8868\u7ED3\u6784",
  "text": "3.2.1 \u67E5\u770B\u8868\u7ED3\u6784",
  "depth": 4
}, {
  "id": "322-\u7F16\u8F91\u8868\u5185\u5BB9",
  "text": "3.2.2 \u7F16\u8F91\u8868\u5185\u5BB9",
  "depth": 4
}, {
  "id": "33-\u5176\u4ED6\u64CD\u4F5C",
  "text": "3.3 \u5176\u4ED6\u64CD\u4F5C",
  "depth": 3
}, {
  "id": "331-\u5BFC\u5165\u5BFC\u51FA\u6570\u636E",
  "text": "3.3.1 \u5BFC\u5165\u5BFC\u51FA\u6570\u636E",
  "depth": 4
}, {
  "id": "332-\u4F18\u5316\u6570\u636E\u6E90\u914D\u7F6E",
  "text": "3.3.2 \u4F18\u5316\u6570\u636E\u6E90\u914D\u7F6E",
  "depth": 4
}, {
  "id": "41-\u591A\u6570\u636E\u6E90\u7BA1\u7406",
  "text": "4.1 \u591A\u6570\u636E\u6E90\u7BA1\u7406",
  "depth": 3
}, {
  "id": "411-\u914D\u7F6E\u591A\u6570\u636E\u6E90",
  "text": "4.1.1 \u914D\u7F6E\u591A\u6570\u636E\u6E90",
  "depth": 4
}, {
  "id": "412-\u5207\u6362\u6570\u636E\u6E90",
  "text": "4.1.2 \u5207\u6362\u6570\u636E\u6E90",
  "depth": 4
}, {
  "id": "42-\u81EA\u5B9A\u4E49\u67E5\u8BE2",
  "text": "4.2 \u81EA\u5B9A\u4E49\u67E5\u8BE2",
  "depth": 3
}, {
  "id": "421-\u7F16\u5199sql\u67E5\u8BE2\u8BED\u53E5",
  "text": "4.2.1 \u7F16\u5199SQL\u67E5\u8BE2\u8BED\u53E5",
  "depth": 4
}, {
  "id": "422-\u6267\u884C\u81EA\u5B9A\u4E49\u67E5\u8BE2",
  "text": "4.2.2 \u6267\u884C\u81EA\u5B9A\u4E49\u67E5\u8BE2",
  "depth": 4
}, {
  "id": "43-\u6570\u636E\u6E90\u7248\u672C\u63A7\u5236",
  "text": "4.3 \u6570\u636E\u6E90\u7248\u672C\u63A7\u5236",
  "depth": 3
}, {
  "id": "431-\u96C6\u6210\u7248\u672C\u63A7\u5236\u5DE5\u5177",
  "text": "4.3.1 \u96C6\u6210\u7248\u672C\u63A7\u5236\u5DE5\u5177",
  "depth": 4
}, {
  "id": "432-\u6570\u636E\u6E90\u7248\u672C\u7BA1\u7406",
  "text": "4.3.2 \u6570\u636E\u6E90\u7248\u672C\u7BA1\u7406",
  "depth": 4
}, {
  "id": "51-\u76D1\u63A7\u4E0E\u6027\u80FD\u4F18\u5316",
  "text": "5.1 \u76D1\u63A7\u4E0E\u6027\u80FD\u4F18\u5316",
  "depth": 3
}, {
  "id": "511-\u76D1\u63A7\u6570\u636E\u6E90\u6027\u80FD",
  "text": "5.1.1 \u76D1\u63A7\u6570\u636E\u6E90\u6027\u80FD",
  "depth": 4
}, {
  "id": "512-\u4F18\u5316\u6570\u636E\u6E90\u8FDE\u63A5",
  "text": "5.1.2 \u4F18\u5316\u6570\u636E\u6E90\u8FDE\u63A5",
  "depth": 4
}, {
  "id": "52-\u8C03\u8BD5\u4E0E\u65E5\u5FD7",
  "text": "5.2 \u8C03\u8BD5\u4E0E\u65E5\u5FD7",
  "depth": 3
}, {
  "id": "521-\u8BBE\u7F6E\u6570\u636E\u6E90\u8C03\u8BD5\u4FE1\u606F",
  "text": "5.2.1 \u8BBE\u7F6E\u6570\u636E\u6E90\u8C03\u8BD5\u4FE1\u606F",
  "depth": 4
}, {
  "id": "522-\u67E5\u770B\u6570\u636E\u6E90\u65E5\u5FD7",
  "text": "5.2.2 \u67E5\u770B\u6570\u636E\u6E90\u65E5\u5FD7",
  "depth": 4
}, {
  "id": "",
  "text": "",
  "depth": 3
}];
const title = "5. \u89E3\u9501\u6570\u636E\u6E90\u9AD8\u7EA7\u5E94\u7528";
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
      id: "1-mysql\u6570\u636E\u6E90\u662F\u4EC0\u4E48",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#1-mysql\u6570\u636E\u6E90\u662F\u4EC0\u4E48",
        children: "#"
      }), "1. MySQL\u6570\u636E\u6E90\u662F\u4EC0\u4E48\uFF1F"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u8F6F\u4EF6\u5F00\u53D1\u4E2D\uFF0C\u6570\u636E\u6E90\u662F\u4E00\u4E2A\u975E\u5E38\u91CD\u8981\u7684\u6982\u5FF5\uFF0C\u7279\u522B\u662F\u5728\u4E0E\u6570\u636E\u5E93\u8FDB\u884C\u4EA4\u4E92\u65F6\u3002MySQL\u6570\u636E\u6E90\u6307\u7684\u662F\u5E94\u7528\u7A0B\u5E8F\u53EF\u4EE5\u8FDE\u63A5\u5E76\u8BBF\u95EEMySQL\u6570\u636E\u5E93\u7684\u914D\u7F6E\u4FE1\u606F\u96C6\u5408\u3002\u4E00\u4E2A\u6570\u636E\u6E90\u5305\u542B\u4E86\u8FDE\u63A5\u6570\u636E\u5E93\u6240\u9700\u7684\u5404\u79CD\u53C2\u6570\uFF0C\u5982\u6570\u636E\u5E93\u5730\u5740\u3001\u7528\u6237\u540D\u3001\u5BC6\u7801\u7B49\u3002\u901A\u8FC7\u6B63\u786E\u914D\u7F6EMySQL\u6570\u636E\u6E90\uFF0C\u5E94\u7528\u7A0B\u5E8F\u53EF\u4EE5\u7A33\u5B9A\u9AD8\u6548\u5730\u4E0E\u6570\u636E\u5E93\u4EA4\u4E92\uFF0C\u6267\u884C\u5404\u79CD\u6570\u636E\u5E93\u64CD\u4F5C\uFF0C\u5982\u67E5\u8BE2\u3001\u63D2\u5165\u3001\u66F4\u65B0\u548C\u5220\u9664\u6570\u636E\u3002\u719F\u7EC3\u638C\u63E1MySQL\u6570\u636E\u6E90\u7684\u914D\u7F6E\u548C\u4F7F\u7528\uFF0C\u5BF9\u4E8E\u5F00\u53D1\u4EBA\u5458\u6765\u8BF4\u81F3\u5173\u91CD\u8981\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "2-intellij-idea\u6570\u636E\u6E90\u914D\u7F6E\u8BE6\u89E3",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#2-intellij-idea\u6570\u636E\u6E90\u914D\u7F6E\u8BE6\u89E3",
        children: "#"
      }), "2. IntelliJ IDEA\u6570\u636E\u6E90\u914D\u7F6E\u8BE6\u89E3"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u672C\u7AE0\u4E2D\uFF0C\u6211\u4EEC\u5C06\u6DF1\u5165\u63A2\u8BA8\u5982\u4F55\u5728IntelliJ IDEA\u4E2D\u914D\u7F6E\u6570\u636E\u6E90\uFF0C\u786E\u4FDD\u987A\u5229\u8FDE\u63A5\u5230MySQL\u6570\u636E\u5E93\uFF0C\u5E76\u8FDB\u884C\u5404\u9879\u64CD\u4F5C\u3002\u8DDF\u968F\u4EE5\u4E0B\u6B65\u9AA4\uFF0C\u60A8\u5C06\u8F7B\u677E\u5B8C\u6210\u6570\u636E\u6E90\u914D\u7F6E\uFF0C\u4E3A\u540E\u7EED\u7684\u6570\u636E\u64CD\u4F5C\u6253\u4E0B\u57FA\u7840\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "21-\u5B89\u88C5mysql\u9A71\u52A8\u8FDE\u63A5\u6570\u636E\u5E93",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#21-\u5B89\u88C5mysql\u9A71\u52A8\u8FDE\u63A5\u6570\u636E\u5E93",
        children: "#"
      }), "2.1 \u5B89\u88C5MySQL\u9A71\u52A8\u3001\u8FDE\u63A5\u6570\u636E\u5E93"]
    }), "\n", jsxs(_components.h4, {
      id: "211-\u4E0B\u8F7Dmysql-connectorj\u9A71\u52A8",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#211-\u4E0B\u8F7Dmysql-connectorj\u9A71\u52A8",
        children: "#"
      }), "2.1.1 \u4E0B\u8F7DMySQL Connector/J\u9A71\u52A8"]
    }), "\n", jsx(_components.p, {
      children: "\u9996\u5148\uFF0C\u6211\u4EEC\u9700\u8981\u4E0B\u8F7DMySQL Connector/J\u9A71\u52A8\u7A0B\u5E8F\uFF0C\u5B83\u53EF\u4EE5\u5E2E\u52A9IDEA\u4E0EMySQL\u6570\u636E\u5E93\u8FDB\u884C\u901A\u4FE1\u3002\u60A8\u53EF\u4EE5\u524D\u5F80MySQL\u5B98\u65B9\u7F51\u7AD9\u6216Maven\u4E2D\u592E\u4ED3\u5E93\u4E0B\u8F7D\u6700\u65B0\u7248\u672C\u7684\u9A71\u52A8\u7A0B\u5E8F\u3002"
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
              children: "// \u793A\u4F8B\u4EE3\u7801\uFF1AMaven\u4F9D\u8D56"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "dependency"
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
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "groupId"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "mysql"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "groupId"
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
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "artifactId"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
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
              children: "connector"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "java"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "artifactId"
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
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "version"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "8.0"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "26"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "version"
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
                color: "#81A1C1"
              },
              children: "</"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "dependency"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h4, {
      id: "212-\u914D\u7F6E\u9A71\u52A8\u6587\u4EF6",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#212-\u914D\u7F6E\u9A71\u52A8\u6587\u4EF6",
        children: "#"
      }), "2.1.2 \u914D\u7F6E\u9A71\u52A8\u6587\u4EF6"]
    }), "\n", jsx(_components.p, {
      children: '\u63A5\u7740\uFF0C\u5C06\u4E0B\u8F7D\u597D\u7684MySQL Connector/J\u9A71\u52A8jar\u6587\u4EF6\u653E\u7F6E\u5728IDEA\u7684\u5408\u9002\u4F4D\u7F6E\u3002\u5728IDEA\u7684\u9879\u76EE\u7ED3\u6784\u4E2D\uFF0C\u6253\u5F00"Project Settings"\uFF0C\u9009\u62E9"Libraries"\uFF0C\u70B9\u51FB"+"\u53F7\u6DFB\u52A0\u5DF2\u4E0B\u8F7D\u7684\u9A71\u52A8jar\u5305\u3002'
    }), "\n", jsxs(_components.h3, {
      id: "22-\u521B\u5EFA\u65B0\u7684\u6570\u636E\u6E90",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#22-\u521B\u5EFA\u65B0\u7684\u6570\u636E\u6E90",
        children: "#"
      }), "2.2 \u521B\u5EFA\u65B0\u7684\u6570\u636E\u6E90"]
    }), "\n", jsx(_components.p, {
      children: "\u521B\u5EFA\u65B0\u7684\u6570\u636E\u6E90\u662F\u975E\u5E38\u5173\u952E\u7684\u4E00\u6B65\uFF0C\u8BA9\u6211\u4EEC\u6765\u8BE6\u7EC6\u8BB2\u89E3\u8BE5\u8FC7\u7A0B\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "221-\u9009\u62E9\u6570\u636E\u6E90\u7C7B\u578B",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#221-\u9009\u62E9\u6570\u636E\u6E90\u7C7B\u578B",
        children: "#"
      }), "2.2.1 \u9009\u62E9\u6570\u636E\u6E90\u7C7B\u578B"]
    }), "\n", jsx(_components.p, {
      children: '\u5728IDEA\u9876\u90E8\u83DC\u5355\u4E2D\u627E\u5230"View" -> "Tool Windows" -> "Database"\uFF0C\u7136\u540E\u70B9\u51FB"+"\u56FE\u6807\uFF0C\u9009\u62E9"Data Source"\uFF0C\u63A5\u7740\u9009\u62E9"MySQL"\u4F5C\u4E3A\u6570\u636E\u6E90\u7C7B\u578B\u3002'
    }), "\n", jsxs(_components.h4, {
      id: "222-\u8F93\u5165\u6570\u636E\u5E93\u8FDE\u63A5\u4FE1\u606F",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#222-\u8F93\u5165\u6570\u636E\u5E93\u8FDE\u63A5\u4FE1\u606F",
        children: "#"
      }), "2.2.2 \u8F93\u5165\u6570\u636E\u5E93\u8FDE\u63A5\u4FE1\u606F"]
    }), "\n", jsx(_components.p, {
      children: '\u5728\u5F39\u51FA\u7684\u5BF9\u8BDD\u6846\u4E2D\uFF0C\u586B\u5199\u6570\u636E\u5E93\u8FDE\u63A5\u4FE1\u606F\uFF0C\u5305\u62EC\u4E3B\u673A\u540D\u3001\u7AEF\u53E3\u53F7\u3001\u6570\u636E\u5E93\u540D\u3001\u7528\u6237\u540D\u548C\u5BC6\u7801\u7B49\u3002\u70B9\u51FB"Test Connection"\u6765\u6D4B\u8BD5\u8FDE\u63A5\u662F\u5426\u6210\u529F\u3002'
    }), "\n", jsxs(_components.h4, {
      id: "223-\u6D4B\u8BD5\u8FDE\u63A5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#223-\u6D4B\u8BD5\u8FDE\u63A5",
        children: "#"
      }), "2.2.3 \u6D4B\u8BD5\u8FDE\u63A5"]
    }), "\n", jsx(_components.p, {
      children: "\u6D4B\u8BD5\u8FDE\u63A5\u7684\u76EE\u7684\u662F\u786E\u4FDD\u914D\u7F6E\u7684\u6570\u636E\u5E93\u8FDE\u63A5\u4FE1\u606F\u662F\u6B63\u786E\u7684\uFF0C\u4E5F\u65B9\u4FBF\u540E\u7EED\u5BF9\u6570\u636E\u6E90\u7684\u4F7F\u7528\u505A\u597D\u51C6\u5907\u3002\u4E00\u65E6\u6D4B\u8BD5\u8FDE\u63A5\u6210\u529F\uFF0C\u5C31\u53EF\u4EE5\u8FDB\u884C\u4E0B\u4E00\u6B65\u64CD\u4F5C\u4E86\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "23-\u6570\u636E\u6E90\u5C5E\u6027\u8BBE\u7F6E",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#23-\u6570\u636E\u6E90\u5C5E\u6027\u8BBE\u7F6E",
        children: "#"
      }), "2.3 \u6570\u636E\u6E90\u5C5E\u6027\u8BBE\u7F6E"]
    }), "\n", jsx(_components.p, {
      children: "\u6210\u529F\u521B\u5EFA\u6570\u636E\u6E90\u540E\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u8FDB\u4E00\u6B65\u8BBE\u7F6E\u6570\u636E\u6E90\u7684\u5C5E\u6027\uFF0C\u8BA9\u5176\u66F4\u7B26\u5408\u5B9E\u9645\u9700\u6C42\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "231-\u8BBE\u5B9A\u540D\u79F0\u548C\u63CF\u8FF0",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#231-\u8BBE\u5B9A\u540D\u79F0\u548C\u63CF\u8FF0",
        children: "#"
      }), "2.3.1 \u8BBE\u5B9A\u540D\u79F0\u548C\u63CF\u8FF0"]
    }), "\n", jsx(_components.p, {
      children: "\u7ED9\u6570\u636E\u6E90\u8D77\u4E00\u4E2A\u6613\u4E8E\u8BC6\u522B\u7684\u540D\u79F0\uFF0C\u5E76\u6DFB\u52A0\u63CF\u8FF0\uFF0C\u6709\u52A9\u4E8E\u5728\u4F17\u591A\u6570\u636E\u6E90\u4E2D\u5FEB\u901F\u5B9A\u4F4D\u6240\u9700\u6570\u636E\u6E90\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "232-\u9AD8\u7EA7\u8BBE\u7F6E",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#232-\u9AD8\u7EA7\u8BBE\u7F6E",
        children: "#"
      }), "2.3.2 \u9AD8\u7EA7\u8BBE\u7F6E"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u6570\u636E\u6E90\u5C5E\u6027\u4E2D\uFF0C\u8FD8\u53EF\u4EE5\u8FDB\u884C\u9AD8\u7EA7\u8BBE\u7F6E\uFF0C\u6BD4\u5982\u8BBE\u7F6E\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\u3001\u5B57\u7B26\u96C6\u3001SSL\u7B49\u9009\u9879\uFF0C\u4EE5\u6EE1\u8DB3\u7279\u5B9A\u8FDE\u63A5\u9700\u6C42\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u4EE5\u4E0A\u6B65\u9AA4\uFF0C\u60A8\u5DF2\u7ECF\u8BE6\u7EC6\u4E86\u89E3\u4E86\u5728IntelliJ IDEA\u4E2D\u914D\u7F6E\u6570\u636E\u5E93\u6570\u636E\u6E90\u7684\u6D41\u7A0B\u548C\u6CE8\u610F\u4E8B\u9879\u3002\u63A5\u4E0B\u6765\u53EF\u4EE5\u5F00\u59CB\u4F7F\u7528\u6570\u636E\u6E90\u8FDB\u884C\u6570\u636E\u5E93\u64CD\u4F5C\u548C\u5F00\u53D1\u5DE5\u4F5C\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "3-\u6570\u636E\u6E90\u64CD\u4F5C\u6280\u5DE7",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#3-\u6570\u636E\u6E90\u64CD\u4F5C\u6280\u5DE7",
        children: "#"
      }), "3. \u6570\u636E\u6E90\u64CD\u4F5C\u6280\u5DE7"]
    }), "\n", jsx(_components.p, {
      children: "\u719F\u7EC3\u4F7F\u7528\u6570\u636E\u6E90\u63D0\u9AD8\u6548\u7387"
    }), "\n", jsxs(_components.h3, {
      id: "31-\u6570\u636E\u5E93\u6D4F\u89C8",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#31-\u6570\u636E\u5E93\u6D4F\u89C8",
        children: "#"
      }), "3.1 \u6570\u636E\u5E93\u6D4F\u89C8"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u5B9E\u9645\u5DE5\u4F5C\u4E2D\uFF0C\u7ECF\u5E38\u9700\u8981\u67E5\u770B\u6570\u636E\u5E93\u7684\u4FE1\u606F\u4EE5\u53CA\u6D4F\u89C8\u5176\u4E2D\u7684\u5185\u5BB9\u3002\u638C\u63E1\u6570\u636E\u6E90\u64CD\u4F5C\u6280\u5DE7\uFF0C\u80FD\u591F\u63D0\u9AD8\u5DE5\u4F5C\u6548\u7387\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "311-\u67E5\u770B\u6570\u636E\u5E93\u4FE1\u606F",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#311-\u67E5\u770B\u6570\u636E\u5E93\u4FE1\u606F",
        children: "#"
      }), "3.1.1 \u67E5\u770B\u6570\u636E\u5E93\u4FE1\u606F"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "\u6253\u5F00 IntelliJ IDEA\uFF0C\u8FDB\u5165\u6570\u636E\u6E90\u89C6\u56FE\u3002"
      }), "\n", jsx(_components.li, {
        children: '\u9009\u62E9\u9700\u8981\u67E5\u770B\u7684\u6570\u636E\u6E90\uFF0C\u53F3\u952E\u70B9\u51FB\u8BE5\u6570\u636E\u6E90\uFF0C\u5E76\u9009\u62E9"\u67E5\u770B\u5C5E\u6027"\u3002'
      }), "\n", jsx(_components.li, {
        children: "\u5728\u5F39\u51FA\u7684\u5C5E\u6027\u7A97\u53E3\u4E2D\uFF0C\u53EF\u4EE5\u67E5\u770B\u8BE5\u6570\u636E\u5E93\u7684\u57FA\u672C\u4FE1\u606F\uFF0C\u5982\u540D\u79F0\u3001\u7248\u672C\u3001\u5927\u5C0F\u7B49\u3002"
      }), "\n"]
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
              children: "// \u901A\u8FC7\u4EE3\u7801\u67E5\u770B\u6570\u636E\u5E93\u4FE1\u606F"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "DatabaseMetaData"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "metaData"
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
              children: "getMetaData"
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
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "System"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "out"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "println"
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
              children: "\u6570\u636E\u5E93\u540D\u79F0\uFF1A"
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
                color: "#81A1C1"
              },
              children: "+"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "metaData"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "getDatabaseProductName"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "())"
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
                color: "#D8DEE9"
              },
              children: "System"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "out"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "println"
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
              children: "\u6570\u636E\u5E93\u7248\u672C\uFF1A"
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
                color: "#81A1C1"
              },
              children: "+"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "metaData"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "getDatabaseProductVersion"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "())"
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
      children: "\u7ED3\u679C\u793A\u4F8B\uFF1A"
    }), "\n", jsx(_components.pre, {
      children: jsx(_components.code, {
        children: "\u6570\u636E\u5E93\u540D\u79F0\uFF1AMySQL\n\u6570\u636E\u5E93\u7248\u672C\uFF1A8.0.23\n"
      })
    }), "\n", jsxs(_components.h4, {
      id: "312-\u6D4F\u89C8\u6570\u636E\u5E93\u5185\u5BB9",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#312-\u6D4F\u89C8\u6570\u636E\u5E93\u5185\u5BB9",
        children: "#"
      }), "3.1.2 \u6D4F\u89C8\u6570\u636E\u5E93\u5185\u5BB9"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "\u5728\u6570\u636E\u6E90\u89C6\u56FE\u4E2D\uFF0C\u5C55\u5F00\u6570\u636E\u5E93\uFF0C\u53EF\u4EE5\u770B\u5230\u5176\u4E2D\u5305\u542B\u7684\u8868\u3001\u89C6\u56FE\u7B49\u5BF9\u8C61\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u53CC\u51FB\u8868\u540D\uFF0C\u53EF\u4EE5\u67E5\u770B\u8868\u7684\u6570\u636E\u5185\u5BB9\u3002"
      }), "\n"]
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
              children: "// \u901A\u8FC7\u4EE3\u7801\u6D4F\u89C8\u8868\u5185\u5BB9"
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
              children: "query"
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
              children: "SELECT * FROM table_name"
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
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "ResultSet"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "resultSet"
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
              children: "statement"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "executeQuery"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "query"
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
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "while"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "resultSet"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "next"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "())"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
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
                color: "#D8DEE9"
              },
              children: "System"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "out"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "println"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "resultSet"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "getString"
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
              children: "column_name"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "))"
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
                color: "#ECEFF4"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u7ED3\u679C\u793A\u4F8B\uFF1A"
    }), "\n", jsx(_components.pre, {
      children: jsx(_components.code, {
        children: "John Doe\nJane Smith\n"
      })
    }), "\n", jsxs(_components.h3, {
      id: "32-\u7F16\u8F91\u6570\u636E",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#32-\u7F16\u8F91\u6570\u636E",
        children: "#"
      }), "3.2 \u7F16\u8F91\u6570\u636E"]
    }), "\n", jsx(_components.p, {
      children: "\u6570\u636E\u6E90\u64CD\u4F5C\u4E0D\u4EC5\u9650\u4E8E\u67E5\u770B\uFF0C\u6709\u65F6\u9700\u8981\u5BF9\u6570\u636E\u8FDB\u884C\u4FEE\u6539\u6216\u64CD\u4F5C\uFF0C\u4E0B\u9762\u4ECB\u7ECD\u5982\u4F55\u7F16\u8F91\u8868\u5185\u5BB9\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "321-\u67E5\u770B\u8868\u7ED3\u6784",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#321-\u67E5\u770B\u8868\u7ED3\u6784",
        children: "#"
      }), "3.2.1 \u67E5\u770B\u8868\u7ED3\u6784"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: '\u5728\u6570\u636E\u6E90\u89C6\u56FE\u4E2D\u9009\u62E9\u8981\u67E5\u770B\u7684\u8868\uFF0C\u53F3\u952E\u70B9\u51FB\u5E76\u9009\u62E9"\u67E5\u770B\u8868\u7ED3\u6784"\u3002'
      }), "\n", jsx(_components.li, {
        children: "\u53EF\u4EE5\u67E5\u770B\u8BE5\u8868\u7684\u5B57\u6BB5\u3001\u7C7B\u578B\u3001\u7EA6\u675F\u7B49\u7ED3\u6784\u4FE1\u606F\u3002"
      }), "\n"]
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
              children: "// \u901A\u8FC7\u4EE3\u7801\u67E5\u770B\u8868\u7ED3\u6784"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "DatabaseMetaData"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "metaData"
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
              children: "getMetaData"
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
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "ResultSet"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "columns"
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
              children: "metaData"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "getColumns"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "null"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "null"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
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
              children: "table_name"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "null"
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
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "while"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "columns"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "next"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "())"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
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
                color: "#D8DEE9"
              },
              children: "System"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "out"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "println"
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
              children: "Column Name: "
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
                color: "#81A1C1"
              },
              children: "+"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "columns"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "getString"
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
              children: "COLUMN_NAME"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "))"
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
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "System"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "out"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "println"
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
              children: "Data Type: "
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
                color: "#81A1C1"
              },
              children: "+"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "columns"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "getString"
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
              children: "TYPE_NAME"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "))"
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
                color: "#ECEFF4"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u7ED3\u679C\u793A\u4F8B\uFF1A"
    }), "\n", jsx(_components.pre, {
      children: jsx(_components.code, {
        children: "Column Name: id\nData Type: INT\nColumn Name: name\nData Type: VARCHAR\n\n"
      })
    }), "\n", jsxs(_components.h4, {
      id: "322-\u7F16\u8F91\u8868\u5185\u5BB9",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#322-\u7F16\u8F91\u8868\u5185\u5BB9",
        children: "#"
      }), "3.2.2 \u7F16\u8F91\u8868\u5185\u5BB9"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "\u5728\u8868\u7ED3\u6784\u89C6\u56FE\u4E2D\uFF0C\u53EF\u4EE5\u4FEE\u6539\u8868\u5B57\u6BB5\u7C7B\u578B\u3001\u65B0\u589E\u5B57\u6BB5\u7B49\u64CD\u4F5C\u3002"
      }), "\n", jsx(_components.li, {
        children: '\u53F3\u952E\u70B9\u51FB\u8868\u4E2D\u7684\u6570\u636E\u884C\uFF0C\u9009\u62E9"\u7F16\u8F91"\uFF0C\u53EF\u4EE5\u5BF9\u6570\u636E\u8FDB\u884C\u7F16\u8F91\u548C\u4FDD\u5B58\u3002'
      }), "\n"]
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
              children: "// \u901A\u8FC7\u4EE3\u7801\u7F16\u8F91\u8868\u5185\u5BB9"
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
              children: "updateQuery"
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
              children: "UPDATE table_name SET column_name = 'new_value' WHERE id = 1"
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
              children: "rowsAffected"
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
              children: "statement"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "executeUpdate"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "updateQuery"
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
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "System"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "out"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "println"
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
              children: "Updated "
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
                color: "#81A1C1"
              },
              children: "+"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " rowsAffected "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "+"
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
              children: " rows"
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
    }), "\n", jsx(_components.p, {
      children: "\u7ED3\u679C\u793A\u4F8B\uFF1A"
    }), "\n", jsx(_components.pre, {
      children: jsx(_components.code, {
        children: "Updated 1 rows\n"
      })
    }), "\n", jsxs(_components.h3, {
      id: "33-\u5176\u4ED6\u64CD\u4F5C",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#33-\u5176\u4ED6\u64CD\u4F5C",
        children: "#"
      }), "3.3 \u5176\u4ED6\u64CD\u4F5C"]
    }), "\n", jsx(_components.p, {
      children: "\u9664\u4E86\u6D4F\u89C8\u548C\u7F16\u8F91\u6570\u636E\u5916\uFF0C\u6570\u636E\u6E90\u8FD8\u652F\u6301\u4E00\u4E9B\u5176\u4ED6\u6709\u7528\u7684\u64CD\u4F5C\uFF0C\u4F8B\u5982\u5BFC\u5165\u5BFC\u51FA\u6570\u636E\u548C\u4F18\u5316\u914D\u7F6E\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "331-\u5BFC\u5165\u5BFC\u51FA\u6570\u636E",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#331-\u5BFC\u5165\u5BFC\u51FA\u6570\u636E",
        children: "#"
      }), "3.3.1 \u5BFC\u5165\u5BFC\u51FA\u6570\u636E"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\u53EF\u4EE5\u901A\u8FC7SQL\u811A\u672C\u6216\u6570\u636E\u4F20\u8F93\u5DE5\u5177\u6765\u8FDB\u884C\u6570\u636E\u5BFC\u5165\u5BFC\u51FA\uFF0C\u5982\u4F7F\u7528", jsx(_components.code, {
          children: "mysqldump"
        }), "\u5BFC\u51FA\u6570\u636E\uFF0C\u4F7F\u7528", jsx(_components.code, {
          children: "mysql"
        }), "\u547D\u4EE4\u5BFC\u5165\u6570\u636E\u3002"]
      }), "\n"]
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
              children: "# \u5BFC\u51FA\u6570\u636E"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "mysqldump -u username -p database_name "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " data_backup.sql"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "# \u5BFC\u5165\u6570\u636E"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "mysql -u username -p database_name "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " data_backup.sql"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h4, {
      id: "332-\u4F18\u5316\u6570\u636E\u6E90\u914D\u7F6E",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#332-\u4F18\u5316\u6570\u636E\u6E90\u914D\u7F6E",
        children: "#"
      }), "3.3.2 \u4F18\u5316\u6570\u636E\u6E90\u914D\u7F6E"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "\u5728\u6570\u636E\u6E90\u5C5E\u6027\u8BBE\u7F6E\u4E2D\uFF0C\u53EF\u4EE5\u8FDB\u884C\u9AD8\u7EA7\u8BBE\u7F6E\uFF0C\u5982\u8C03\u6574\u8FDE\u63A5\u6C60\u5927\u5C0F\u3001\u8D85\u65F6\u65F6\u95F4\u7B49\uFF0C\u4EE5\u4F18\u5316\u6570\u636E\u6E90\u7684\u6027\u80FD\u548C\u7A33\u5B9A\u6027\u3002"
      }), "\n"]
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
              children: "// \u901A\u8FC7\u4EE3\u7801\u4F18\u5316\u6570\u636E\u6E90\u914D\u7F6E"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "HikariConfig"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "config"
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
              children: "HikariConfig"
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
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "config"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "setJdbcUrl"
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
              children: "jdbc:mysql://localhost:3306/db_name"
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
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "config"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "setUsername"
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
              children: "username"
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
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "config"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "setPassword"
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
              children: "password"
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
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "config"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "setMaximumPoolSize"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "10"
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
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "HikariDataSource"
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
              children: "HikariDataSource"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "config"
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
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u5B66\u4E60\u6570\u636E\u6E90\u64CD\u4F5C\u6280\u5DE7\uFF0C\u6211\u4EEC\u53EF\u4EE5\u66F4\u9AD8\u6548\u5730\u4F7F\u7528\u6570\u636E\u5E93\u5DE5\u5177\uFF0C\u5FEB\u901F\u6D4F\u89C8\u548C\u7F16\u8F91\u6570\u636E\uFF0C\u540C\u65F6\u8FDB\u884C\u6570\u636E\u5BFC\u5165\u5BFC\u51FA\u548C\u4F18\u5316\u914D\u7F6E\uFF0C\u63D0\u5347\u5DE5\u4F5C\u6548\u7387\u548C\u8D28\u91CF\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "4-\u9AD8\u7EA7\u529F\u80FD\u4E0E\u6269\u5C55",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#4-\u9AD8\u7EA7\u529F\u80FD\u4E0E\u6269\u5C55",
        children: "#"
      }), "4. \u9AD8\u7EA7\u529F\u80FD\u4E0E\u6269\u5C55"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u8FD9\u4E00\u7AE0\u8282\u4E2D\uFF0C\u6211\u4EEC\u5C06\u6DF1\u5165\u63A2\u8BA8\u5982\u4F55\u5229\u7528IntelliJ IDEA\u8FDB\u884C\u9AD8\u7EA7\u6570\u636E\u6E90\u7BA1\u7406\u548C\u6269\u5C55\u529F\u80FD\u7684\u64CD\u4F5C\u3002\u4ECE\u914D\u7F6E\u591A\u6570\u636E\u6E90\u5230\u81EA\u5B9A\u4E49\u67E5\u8BE2\uFF0C\u518D\u5230\u6570\u636E\u6E90\u7248\u672C\u63A7\u5236\uFF0C\u8BA9\u6211\u4EEC\u4E00\u8D77\u6765\u4E86\u89E3\u8FD9\u4E9B\u9AD8\u7EA7\u529F\u80FD\u7684\u5E94\u7528\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "41-\u591A\u6570\u636E\u6E90\u7BA1\u7406",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#41-\u591A\u6570\u636E\u6E90\u7BA1\u7406",
        children: "#"
      }), "4.1 \u591A\u6570\u636E\u6E90\u7BA1\u7406"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u5B9E\u9645\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u7ECF\u5E38\u9700\u8981\u8FDE\u63A5\u591A\u4E2A\u6570\u636E\u5E93\u6E90\u3002IntelliJ IDEA\u63D0\u4F9B\u4E86\u4FBF\u6377\u7684\u591A\u6570\u636E\u6E90\u7BA1\u7406\u529F\u80FD\uFF0C\u8BA9\u6211\u4EEC\u53EF\u4EE5\u8F7B\u677E\u5207\u6362\u4E0D\u540C\u7684\u6570\u636E\u6E90\u8FDB\u884C\u64CD\u4F5C\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "411-\u914D\u7F6E\u591A\u6570\u636E\u6E90",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#411-\u914D\u7F6E\u591A\u6570\u636E\u6E90",
        children: "#"
      }), "4.1.1 \u914D\u7F6E\u591A\u6570\u636E\u6E90"]
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsx(_components.li, {
        children: "\u6253\u5F00IntelliJ IDEA\uFF0C\u8FDB\u5165\u6570\u636E\u6E90\u7A97\u53E3\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u70B9\u51FB\u6DFB\u52A0(+)\u6309\u94AE\uFF0C\u9009\u62E9\u201CData Source\u201D\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u5728\u5F39\u51FA\u7684\u5BF9\u8BDD\u6846\u4E2D\u9009\u62E9\u76F8\u5E94\u7684\u6570\u636E\u5E93\u7C7B\u578B\uFF0C\u5E76\u586B\u5199\u8FDE\u63A5\u4FE1\u606F\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u70B9\u51FB\u201CTest Connection\u201D\u6D4B\u8BD5\u8FDE\u63A5\u662F\u5426\u6210\u529F\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u786E\u8BA4\u4FE1\u606F\u65E0\u8BEF\u540E\uFF0C\u70B9\u51FB\u786E\u5B9A\u6DFB\u52A0\u6570\u636E\u6E90\u3002"
      }), "\n"]
    }), "\n", jsxs(_components.h4, {
      id: "412-\u5207\u6362\u6570\u636E\u6E90",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#412-\u5207\u6362\u6570\u636E\u6E90",
        children: "#"
      }), "4.1.2 \u5207\u6362\u6570\u636E\u6E90"]
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsx(_components.li, {
        children: "\u5728IDEA\u754C\u9762\u7684\u53F3\u4E0A\u89D2\uFF0C\u9009\u62E9\u9700\u8981\u64CD\u4F5C\u7684\u6570\u636E\u6E90\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u70B9\u51FB\u4E0B\u62C9\u83DC\u5355\uFF0C\u9009\u62E9\u9700\u8981\u5207\u6362\u7684\u6570\u636E\u6E90\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u53EF\u4EE5\u5728\u4E0D\u540C\u6570\u636E\u6E90\u95F4\u5FEB\u901F\u5207\u6362\uFF0C\u65B9\u4FBF\u8FDB\u884C\u591A\u6570\u636E\u6E90\u7684\u7BA1\u7406\u548C\u64CD\u4F5C\u3002"
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "42-\u81EA\u5B9A\u4E49\u67E5\u8BE2",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#42-\u81EA\u5B9A\u4E49\u67E5\u8BE2",
        children: "#"
      }), "4.2 \u81EA\u5B9A\u4E49\u67E5\u8BE2"]
    }), "\n", jsx(_components.p, {
      children: "\u6709\u65F6\u5019\uFF0C\u6211\u4EEC\u9700\u8981\u8FDB\u884C\u4E00\u4E9B\u7279\u5B9A\u7684\u6570\u636E\u5E93\u64CD\u4F5C\uFF0C\u4F8B\u5982\u6267\u884C\u7279\u5B9A\u7684SQL\u67E5\u8BE2\u8BED\u53E5\u3002\u901A\u8FC7IntelliJ IDEA\u7684\u81EA\u5B9A\u4E49\u67E5\u8BE2\u529F\u80FD\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u5730\u5B9E\u73B0\u8FD9\u4E00\u76EE\u7684\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "421-\u7F16\u5199sql\u67E5\u8BE2\u8BED\u53E5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#421-\u7F16\u5199sql\u67E5\u8BE2\u8BED\u53E5",
        children: "#"
      }), "4.2.1 \u7F16\u5199SQL\u67E5\u8BE2\u8BED\u53E5"]
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsx(_components.li, {
        children: "\u6253\u5F00IDEA\uFF0C\u8FDB\u5165\u6570\u636E\u6E90\u7A97\u53E3\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u9009\u62E9\u9700\u8981\u64CD\u4F5C\u7684\u6570\u636E\u6E90\uFF0C\u53F3\u952E\u70B9\u51FB\u9009\u62E9\u201CNew\u201D -> \u201CSQL File\u201D\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u5728SQL\u6587\u4EF6\u4E2D\u7F16\u5199\u9700\u8981\u6267\u884C\u7684SQL\u67E5\u8BE2\u8BED\u53E5\uFF0C\u4F8B\u5982\uFF1ASELECT * FROM table_name WHERE condition;"
      }), "\n"]
    }), "\n", jsxs(_components.h4, {
      id: "422-\u6267\u884C\u81EA\u5B9A\u4E49\u67E5\u8BE2",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#422-\u6267\u884C\u81EA\u5B9A\u4E49\u67E5\u8BE2",
        children: "#"
      }), "4.2.2 \u6267\u884C\u81EA\u5B9A\u4E49\u67E5\u8BE2"]
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsx(_components.li, {
        children: "\u5728\u7F16\u5199\u5B8CSQL\u67E5\u8BE2\u8BED\u53E5\u540E\uFF0C\u70B9\u51FB\u5DE5\u5177\u680F\u4E2D\u7684\u8FD0\u884C\u6309\u94AE\u6216\u8005\u6309\u4E0B\u5FEB\u6377\u952E\u6267\u884C\u67E5\u8BE2\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u67E5\u8BE2\u7ED3\u679C\u5C06\u4F1A\u5728IDEA\u4E2D\u5C55\u793A\uFF0C\u65B9\u4FBF\u67E5\u770B\u548C\u5206\u6790\u3002"
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "43-\u6570\u636E\u6E90\u7248\u672C\u63A7\u5236",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#43-\u6570\u636E\u6E90\u7248\u672C\u63A7\u5236",
        children: "#"
      }), "4.3 \u6570\u636E\u6E90\u7248\u672C\u63A7\u5236"]
    }), "\n", jsx(_components.p, {
      children: "\u6570\u636E\u6E90\u7684\u7248\u672C\u7BA1\u7406\u5BF9\u4E8E\u56E2\u961F\u534F\u4F5C\u548C\u4EE3\u7801\u7EF4\u62A4\u975E\u5E38\u91CD\u8981\u3002IntelliJ IDEA\u63D0\u4F9B\u4E86\u6570\u636E\u6E90\u7248\u672C\u63A7\u5236\u7684\u529F\u80FD\uFF0C\u8BA9\u6211\u4EEC\u53EF\u4EE5\u66F4\u597D\u5730\u7BA1\u7406\u6570\u636E\u6E90\u7684\u53D8\u5316\u548C\u5386\u53F2\u8BB0\u5F55\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "431-\u96C6\u6210\u7248\u672C\u63A7\u5236\u5DE5\u5177",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#431-\u96C6\u6210\u7248\u672C\u63A7\u5236\u5DE5\u5177",
        children: "#"
      }), "4.3.1 \u96C6\u6210\u7248\u672C\u63A7\u5236\u5DE5\u5177"]
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsx(_components.li, {
        children: "\u5728IDEA\u4E2D\u9009\u62E9\u9700\u8981\u7BA1\u7406\u7684\u6570\u636E\u6E90\uFF0C\u53F3\u952E\u70B9\u51FB\u9009\u62E9\u201CGit\u201D -> \u201CAdd to Version Control\u201D\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u5C06\u6570\u636E\u6E90\u6587\u4EF6\u6DFB\u52A0\u5230\u7248\u672C\u63A7\u5236\u5DE5\u5177\u4E2D\uFF0C\u4F8B\u5982Git\u3002"
      }), "\n"]
    }), "\n", jsxs(_components.h4, {
      id: "432-\u6570\u636E\u6E90\u7248\u672C\u7BA1\u7406",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#432-\u6570\u636E\u6E90\u7248\u672C\u7BA1\u7406",
        children: "#"
      }), "4.3.2 \u6570\u636E\u6E90\u7248\u672C\u7BA1\u7406"]
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsx(_components.li, {
        children: "\u5728\u7248\u672C\u63A7\u5236\u5DE5\u5177\u4E2D\u53EF\u4EE5\u67E5\u770B\u6570\u636E\u6E90\u7684\u4FEE\u6539\u8BB0\u5F55\u3001\u63D0\u4EA4\u5386\u53F2\u4EE5\u53CA\u8FDB\u884C\u7248\u672C\u56DE\u6EDA\u7B49\u64CD\u4F5C\uFF0C\u786E\u4FDD\u6570\u636E\u6E90\u7684\u7A33\u5B9A\u548C\u4E00\u81F4\u6027\u3002"
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u672C\u7AE0\u8282\u7684\u4ECB\u7ECD\uFF0C\u6211\u4EEC\u5B66\u4E60\u4E86\u5982\u4F55\u5728IntelliJ IDEA\u4E2D\u8FDB\u884C\u9AD8\u7EA7\u6570\u636E\u6E90\u7BA1\u7406\uFF0C\u5305\u62EC\u914D\u7F6E\u591A\u6570\u636E\u6E90\u3001\u81EA\u5B9A\u4E49\u67E5\u8BE2\u548C\u6570\u636E\u6E90\u7248\u672C\u63A7\u5236\u3002\u8FD9\u4E9B\u9AD8\u7EA7\u529F\u80FD\u7684\u5E94\u7528\uFF0C\u5C06\u5E2E\u52A9\u6211\u4EEC\u66F4\u9AD8\u6548\u5730\u5904\u7406\u6570\u636E\u5E93\u64CD\u4F5C\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "5-\u89E3\u9501\u6570\u636E\u6E90\u9AD8\u7EA7\u5E94\u7528",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#5-\u89E3\u9501\u6570\u636E\u6E90\u9AD8\u7EA7\u5E94\u7528",
        children: "#"
      }), "5. \u89E3\u9501\u6570\u636E\u6E90\u9AD8\u7EA7\u5E94\u7528"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u524D\u9762\u7684\u7AE0\u8282\u4E2D\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u5B66\u4E60\u4E86\u5982\u4F55\u914D\u7F6E\u548C\u57FA\u672C\u64CD\u4F5C\u6570\u636E\u6E90\u3002\u672C\u7AE0\u5C06\u4ECB\u7ECD\u4E00\u4E9B\u66F4\u9AD8\u7EA7\u7684\u5E94\u7528\u6280\u5DE7\uFF0C\u5E2E\u52A9\u60A8\u66F4\u6709\u6548\u5730\u64CD\u4F5CMySQL\u6570\u636E\u6E90\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "51-\u76D1\u63A7\u4E0E\u6027\u80FD\u4F18\u5316",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#51-\u76D1\u63A7\u4E0E\u6027\u80FD\u4F18\u5316",
        children: "#"
      }), "5.1 \u76D1\u63A7\u4E0E\u6027\u80FD\u4F18\u5316"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u5B9E\u9645\u5E94\u7528\u4E2D\uFF0C\u76D1\u63A7\u6570\u636E\u6E90\u7684\u6027\u80FD\u5E76\u8FDB\u884C\u4F18\u5316\u662F\u975E\u5E38\u91CD\u8981\u7684\u3002\u901A\u8FC7\u76D1\u63A7\uFF0C\u60A8\u53EF\u4EE5\u53CA\u65F6\u53D1\u73B0\u95EE\u9898\u5E76\u53CA\u65F6\u8C03\u6574\u4F18\u5316\u7B56\u7565\uFF0C\u4ECE\u800C\u63D0\u5347\u7CFB\u7EDF\u7684\u6027\u80FD\u548C\u7A33\u5B9A\u6027\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "511-\u76D1\u63A7\u6570\u636E\u6E90\u6027\u80FD",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#511-\u76D1\u63A7\u6570\u636E\u6E90\u6027\u80FD",
        children: "#"
      }), "5.1.1 \u76D1\u63A7\u6570\u636E\u6E90\u6027\u80FD"]
    }), "\n", jsx(_components.p, {
      children: "\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E9B\u76D1\u63A7\u5DE5\u5177\u6765\u76D1\u63A7\u6570\u636E\u6E90\u6027\u80FD\uFF0C\u4F8B\u5982MySQL\u81EA\u5E26\u7684Performance Schema\u3002\u901A\u8FC7Performance Schema\uFF0C\u53EF\u4EE5\u67E5\u770B\u5404\u79CD\u6027\u80FD\u6307\u6807\uFF0C\u5982\u8FDE\u63A5\u6570\u3001\u67E5\u8BE2\u65F6\u95F4\u7B49\uFF0C\u5E2E\u52A9\u60A8\u6DF1\u5165\u4E86\u89E3\u6570\u636E\u6E90\u7684\u8FD0\u884C\u60C5\u51B5\u3002"
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
              children: "-- \u67E5\u770B\u5F53\u524D\u7EBF\u7A0B\u72B6\u6001"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "SHOW FULL PROCESSLIST;"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "-- \u67E5\u770B\u6570\u636E\u7F13\u5B58\u60C5\u51B5"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "SHOW "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "STATUS"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "LIKE"
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
              children: "Qcache%"
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
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "-- \u67E5\u770B\u67E5\u8BE2\u54CD\u5E94\u65F6\u95F4"
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
              children: " information_schema.processlist "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "WHERE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " command "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "!="
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
              children: "Sleep"
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
      id: "512-\u4F18\u5316\u6570\u636E\u6E90\u8FDE\u63A5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#512-\u4F18\u5316\u6570\u636E\u6E90\u8FDE\u63A5",
        children: "#"
      }), "5.1.2 \u4F18\u5316\u6570\u636E\u6E90\u8FDE\u63A5"]
    }), "\n", jsx(_components.p, {
      children: "\u4F18\u5316\u6570\u636E\u6E90\u8FDE\u63A5\u662F\u63D0\u5347\u6027\u80FD\u7684\u5173\u952E\u3002\u53EF\u4EE5\u901A\u8FC7\u4E00\u4E9B\u65B9\u6CD5\u6765\u4F18\u5316\u6570\u636E\u6E90\u8FDE\u63A5\uFF0C\u4F8B\u5982\u5408\u7406\u8BBE\u7F6E\u8FDE\u63A5\u6C60\u5927\u5C0F\u3001\u8C03\u6574\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\u3001\u4F7F\u7528\u8FDE\u63A5\u6C60\u7B49\u3002\u8FD9\u4E9B\u65B9\u6CD5\u53EF\u4EE5\u6709\u6548\u51CF\u5C11\u8FDE\u63A5\u5EFA\u7ACB\u548C\u9500\u6BC1\u7684\u5F00\u9500\uFF0C\u63D0\u5347\u6570\u636E\u6E90\u7684\u54CD\u5E94\u901F\u5EA6\u3002"
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
              children: "// \u8BBE\u7F6E\u8FDE\u63A5\u6C60\u5927\u5C0F\u4E3A30"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
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
              children: "setMaxTotal"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "30"
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
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// \u8BBE\u7F6E\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\u4E3A10\u79D2"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
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
              children: "setMaxWaitMillis"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "10000"
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
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// \u4F7F\u7528\u8FDE\u63A5\u6C60"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
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
              children: "setPoolPreparedStatements"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "true"
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
      id: "52-\u8C03\u8BD5\u4E0E\u65E5\u5FD7",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#52-\u8C03\u8BD5\u4E0E\u65E5\u5FD7",
        children: "#"
      }), "5.2 \u8C03\u8BD5\u4E0E\u65E5\u5FD7"]
    }), "\n", jsx(_components.p, {
      children: "\u8C03\u8BD5\u548C\u65E5\u5FD7\u8BB0\u5F55\u662F\u5728\u5904\u7406\u6570\u636E\u6E90\u95EE\u9898\u65F6\u975E\u5E38\u6709\u7528\u7684\u5DE5\u5177\u3002\u901A\u8FC7\u8BBE\u7F6E\u8C03\u8BD5\u4FE1\u606F\u548C\u67E5\u770B\u65E5\u5FD7\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u60A8\u5B9A\u4F4D\u95EE\u9898\u5E76\u5FEB\u901F\u89E3\u51B3\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "521-\u8BBE\u7F6E\u6570\u636E\u6E90\u8C03\u8BD5\u4FE1\u606F",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#521-\u8BBE\u7F6E\u6570\u636E\u6E90\u8C03\u8BD5\u4FE1\u606F",
        children: "#"
      }), "5.2.1 \u8BBE\u7F6E\u6570\u636E\u6E90\u8C03\u8BD5\u4FE1\u606F"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u5E94\u7528\u7A0B\u5E8F\u4E2D\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u6570\u636E\u6E90\u7684\u8C03\u8BD5\u4FE1\u606F\u7EA7\u522B\uFF0C\u4EE5\u4FBF\u5728\u8C03\u8BD5\u65F6\u8F93\u51FA\u8BE6\u7EC6\u7684\u4FE1\u606F\u3002\u901A\u8FC7\u8C03\u8BD5\u4FE1\u606F\uFF0C\u60A8\u53EF\u4EE5\u4E86\u89E3\u6570\u636E\u6E90\u7684\u8BE6\u7EC6\u64CD\u4F5C\u8FC7\u7A0B\uFF0C\u5E2E\u52A9\u60A8\u53D1\u73B0\u95EE\u9898\u6240\u5728\u3002"
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
              children: "// \u8BBE\u7F6E\u6570\u636E\u6E90\u8C03\u8BD5\u7EA7\u522B\u4E3ADEBUG"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
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
              children: "setLogAbandoned"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "true"
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
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
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
              children: "getLogWriter"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "()."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "println"
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
              children: "Debug information..."
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
    }), "\n", jsxs(_components.h4, {
      id: "522-\u67E5\u770B\u6570\u636E\u6E90\u65E5\u5FD7",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#522-\u67E5\u770B\u6570\u636E\u6E90\u65E5\u5FD7",
        children: "#"
      }), "5.2.2 \u67E5\u770B\u6570\u636E\u6E90\u65E5\u5FD7"]
    }), "\n", jsx(_components.p, {
      children: "\u9664\u4E86\u5728\u5E94\u7528\u4E2D\u8BBE\u7F6E\u8C03\u8BD5\u4FE1\u606F\u5916\uFF0C\u8FD8\u53EF\u4EE5\u67E5\u770B\u6570\u636E\u6E90\u7684\u65E5\u5FD7\u6587\u4EF6\uFF0C\u4E86\u89E3\u6570\u636E\u6E90\u7684\u8FD0\u884C\u60C5\u51B5\u3002\u901A\u8FC7\u67E5\u770B\u65E5\u5FD7\u6587\u4EF6\uFF0C\u60A8\u53EF\u4EE5\u53D1\u73B0\u6F5C\u5728\u95EE\u9898\u5E76\u8FDB\u884C\u5904\u7406\u3002"
    }), "\n", jsxs(_components.div, {
      className: "language-shell",
      children: [jsx(_components.button, {
        className: "copy"
      }), jsx(_components.span, {
        className: "lang",
        children: "shell"
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
                color: "#D8DEE9FF"
              },
              children: "tail -f /var/log/mysql/error.log"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u8FD9\u4E9B\u9AD8\u7EA7\u5E94\u7528\u6280\u5DE7\u53EF\u4EE5\u5E2E\u52A9\u60A8\u66F4\u52A0\u6DF1\u5165\u5730\u4E86\u89E3\u548C\u64CD\u4F5CMySQL\u6570\u636E\u6E90\uFF0C\u63D0\u5347\u5DE5\u4F5C\u6548\u7387\u548C\u7CFB\u7EDF\u6027\u80FD\u3002"
    }), "\n", jsx(_components.h3, {
      id: "",
      children: jsx(_components.a, {
        className: "header-anchor",
        href: "#",
        children: "#"
      })
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

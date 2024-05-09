import { jsx, jsxs, Fragment } from "react/jsx-runtime";
const frontmatter = void 0;
const toc = [{
  "id": "21-\u914D\u7F6Emysql\u8FDE\u63A5",
  "text": "2.1 \u914D\u7F6EMySQL\u8FDE\u63A5",
  "depth": 3
}, {
  "id": "211-\u6DFB\u52A0\u6570\u636E\u5E93\u9A71\u52A8",
  "text": "2.1.1 \u6DFB\u52A0\u6570\u636E\u5E93\u9A71\u52A8",
  "depth": 4
}, {
  "id": "212-\u914D\u7F6E\u6570\u636E\u6E90",
  "text": "2.1.2 \u914D\u7F6E\u6570\u636E\u6E90",
  "depth": 4
}, {
  "id": "22-\u914D\u7F6Emysql\u7528\u6237\u6743\u9650",
  "text": "2.2 \u914D\u7F6EMySQL\u7528\u6237\u6743\u9650",
  "depth": 3
}, {
  "id": "221-\u521B\u5EFAmysql\u7528\u6237",
  "text": "2.2.1 \u521B\u5EFAMySQL\u7528\u6237",
  "depth": 4
}, {
  "id": "222-\u6388\u6743\u7528\u6237\u8BBF\u95EE\u6570\u636E\u5E93",
  "text": "2.2.2 \u6388\u6743\u7528\u6237\u8BBF\u95EE\u6570\u636E\u5E93",
  "depth": 4
}, {
  "id": "31-\u68C0\u67E5\u8D26\u53F7\u5BC6\u7801",
  "text": "3.1 \u68C0\u67E5\u8D26\u53F7\u5BC6\u7801",
  "depth": 3
}, {
  "id": "311-\u786E\u8BA4\u7528\u6237\u540D\u548C\u5BC6\u7801\u51C6\u786E\u6027",
  "text": "3.1.1 \u786E\u8BA4\u7528\u6237\u540D\u548C\u5BC6\u7801\u51C6\u786E\u6027",
  "depth": 4
}, {
  "id": "312-\u68C0\u67E5\u662F\u5426\u5F00\u542F\u8FDC\u7A0B\u8BBF\u95EE\u6743\u9650",
  "text": "3.1.2 \u68C0\u67E5\u662F\u5426\u5F00\u542F\u8FDC\u7A0B\u8BBF\u95EE\u6743\u9650",
  "depth": 4
}, {
  "id": "32-\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5",
  "text": "3.2 \u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5",
  "depth": 3
}, {
  "id": "321-\u786E\u4FDD\u7F51\u7EDC\u8FDE\u63A5\u6B63\u5E38",
  "text": "3.2.1 \u786E\u4FDD\u7F51\u7EDC\u8FDE\u63A5\u6B63\u5E38",
  "depth": 4
}, {
  "id": "322-\u68C0\u67E5mysql\u670D\u52A1\u72B6\u6001",
  "text": "3.2.2 \u68C0\u67E5MySQL\u670D\u52A1\u72B6\u6001",
  "depth": 4
}, {
  "id": "41-\u4F7F\u7528ssh\u96A7\u9053\u767B\u5F55mysql",
  "text": "4.1 \u4F7F\u7528SSH\u96A7\u9053\u767B\u5F55MySQL",
  "depth": 3
}, {
  "id": "411-\u914D\u7F6Essh\u8FDE\u63A5",
  "text": "4.1.1 \u914D\u7F6ESSH\u8FDE\u63A5",
  "depth": 4
}, {
  "id": "412-\u5229\u7528ssh\u96A7\u9053\u8FDE\u63A5mysql",
  "text": "4.1.2 \u5229\u7528SSH\u96A7\u9053\u8FDE\u63A5MySQL",
  "depth": 4
}, {
  "id": "42-\u4F7F\u7528\u53EF\u89C6\u5316\u5DE5\u5177\u8FDE\u63A5mysql",
  "text": "4.2 \u4F7F\u7528\u53EF\u89C6\u5316\u5DE5\u5177\u8FDE\u63A5MySQL",
  "depth": 3
}, {
  "id": "421-\u914D\u7F6Eidea\u8FDE\u63A5mysql",
  "text": "4.2.1 \u914D\u7F6EIdea\u8FDE\u63A5MySQL",
  "depth": 4
}, {
  "id": "422-\u4F7F\u7528navicat\u8FDE\u63A5mysql\u6570\u636E\u5E93",
  "text": "4.2.2 \u4F7F\u7528Navicat\u8FDE\u63A5MySQL\u6570\u636E\u5E93",
  "depth": 4
}, {
  "id": "51-\u9632\u706B\u5899\u914D\u7F6E\u6CE8\u610F\u4E8B\u9879",
  "text": "5.1 \u9632\u706B\u5899\u914D\u7F6E\u6CE8\u610F\u4E8B\u9879",
  "depth": 3
}, {
  "id": "511-\u6DFB\u52A0\u9632\u706B\u5899\u89C4\u5219",
  "text": "5.1.1 \u6DFB\u52A0\u9632\u706B\u5899\u89C4\u5219",
  "depth": 4
}, {
  "id": "512-\u9632\u706B\u5899\u7AEF\u53E3\u653E\u884C",
  "text": "5.1.2 \u9632\u706B\u5899\u7AEF\u53E3\u653E\u884C",
  "depth": 4
}, {
  "id": "52-\u6570\u636E\u5E93\u4F18\u5316\u4E0E\u5B89\u5168\u6027\u52A0\u56FA",
  "text": "5.2 \u6570\u636E\u5E93\u4F18\u5316\u4E0E\u5B89\u5168\u6027\u52A0\u56FA",
  "depth": 3
}, {
  "id": "521-\u5B9A\u671F\u5907\u4EFD\u6570\u636E\u5E93",
  "text": "5.2.1 \u5B9A\u671F\u5907\u4EFD\u6570\u636E\u5E93",
  "depth": 4
}, {
  "id": "522-\u4F7F\u7528ssl\u52A0\u5BC6\u8FDE\u63A5mysql",
  "text": "5.2.2 \u4F7F\u7528SSL\u52A0\u5BC6\u8FDE\u63A5MySQL",
  "depth": 4
}];
const title = "5. \u8FDB\u9636\u5E94\u7528\u4E0E\u6CE8\u610F\u4E8B\u9879";
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
    ol: "ol",
    li: "li"
  }, props.components);
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "1-\u95EE\u9898\u80CC\u666F\u5206\u6790",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#1-\u95EE\u9898\u80CC\u666F\u5206\u6790",
        children: "#"
      }), "1. \u95EE\u9898\u80CC\u666F\u5206\u6790"]
    }), "\n", jsx(_components.p, {
      children: "\u5982\u679C\u60A8\u5728\u4F7F\u7528IDEA\u8FDE\u63A5MySQL\u65F6\u9047\u5230\u767B\u5F55\u95EE\u9898\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u5DE5\u4F5C\u6548\u7387\u964D\u4F4E\u548C\u6570\u636E\u5B89\u5168\u6027\u53D7\u5230\u5A01\u80C1\u3002\u5728\u672C\u6587\u4E2D\uFF0C\u6211\u4EEC\u5C06\u6DF1\u5165\u5206\u6790Idea\u767B\u5F55MySQL\u5931\u8D25\u7684\u80CC\u666F\u539F\u56E0\uFF0C\u5E76\u63D0\u4F9B\u89E3\u51B3\u65B9\u6CD5\u548C\u6280\u5DE7\u5206\u4EAB\uFF0C\u5E2E\u52A9\u60A8\u5FEB\u901F\u89E3\u51B3\u8FD9\u4E00\u95EE\u9898\u3002\u901A\u8FC7\u672C\u6587\u7684\u6307\u5BFC\uFF0C\u60A8\u5C06\u5B66\u4F1A\u914D\u7F6EMySQL\u8FDE\u63A5\u3001\u7BA1\u7406MySQL\u7528\u6237\u6743\u9650\u3001\u6392\u67E5\u767B\u5F55\u5931\u8D25\u539F\u56E0\u3001\u4F7F\u7528\u9AD8\u6548\u89E3\u51B3\u6280\u5DE7\u4EE5\u53CA\u8FDB\u9636\u5E94\u7528\u548C\u6CE8\u610F\u4E8B\u9879\uFF0C\u4ECE\u800C\u5168\u9762\u63D0\u5347\u5DE5\u4F5C\u6548\u7387\u548C\u6570\u636E\u5B89\u5168\u6027\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "2-idea\u96C6\u6210mysql\u767B\u5F55\u6D41\u7A0B",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#2-idea\u96C6\u6210mysql\u767B\u5F55\u6D41\u7A0B",
        children: "#"
      }), "2. Idea\u96C6\u6210MySQL\u767B\u5F55\u6D41\u7A0B"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u672C\u7AE0\u4E2D\uFF0C\u6211\u4EEC\u5C06\u63A2\u8BA8\u5982\u4F55\u5728Idea\u4E2D\u96C6\u6210MySQL\u767B\u5F55\u6D41\u7A0B\u3002MySQL\u662F\u4E00\u4E2A\u5E7F\u6CDB\u4F7F\u7528\u7684\u5F00\u6E90\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7BA1\u7406\u7CFB\u7EDF\uFF0C\u800C\u4F7F\u7528Idea\u8FDB\u884CMySQL\u64CD\u4F5C\u53EF\u4EE5\u63D0\u5347\u5F00\u53D1\u6548\u7387\u3002\u5728\u672C\u8282\u4E2D\uFF0C\u6211\u4EEC\u5C06\u8BE6\u7EC6\u4ECB\u7ECD\u5982\u4F55\u914D\u7F6EMySQL\u8FDE\u63A5\u4EE5\u53CA\u8BBE\u7F6E\u7528\u6237\u6743\u9650\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "21-\u914D\u7F6Emysql\u8FDE\u63A5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#21-\u914D\u7F6Emysql\u8FDE\u63A5",
        children: "#"
      }), "2.1 \u914D\u7F6EMySQL\u8FDE\u63A5"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u8FD9\u4E00\u90E8\u5206\uFF0C\u6211\u4EEC\u5C06\u5B66\u4E60\u5982\u4F55\u914D\u7F6EMySQL\u8FDE\u63A5\u4EE5\u4FBF\u5728Idea\u4E2D\u6B63\u786E\u767B\u5F55MySQL\u6570\u636E\u5E93\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "211-\u6DFB\u52A0\u6570\u636E\u5E93\u9A71\u52A8",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#211-\u6DFB\u52A0\u6570\u636E\u5E93\u9A71\u52A8",
        children: "#"
      }), "2.1.1 \u6DFB\u52A0\u6570\u636E\u5E93\u9A71\u52A8"]
    }), "\n", jsx(_components.p, {
      children: "\u9996\u5148\uFF0C\u9700\u8981\u5728Idea\u4E2D\u6DFB\u52A0MySQL\u6570\u636E\u5E93\u9A71\u52A8\u4EE5\u786E\u4FDD\u80FD\u591F\u6B63\u5E38\u8FDE\u63A5\u3002\u5728Idea\u7684\u9879\u76EE\u914D\u7F6E\u4E2D\uFF0C\u901A\u8FC7\u6DFB\u52A0\u6570\u636E\u5E93\u9A71\u52A8\u7684\u65B9\u5F0F\u5F15\u5165MySQL\u9A71\u52A8\uFF0C\u4ECE\u800C\u5B9E\u73B0\u8FDE\u63A5\u6570\u636E\u5E93\u7684\u529F\u80FD\u3002"
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
              children: "// \u6DFB\u52A0MySQL\u6570\u636E\u5E93\u9A71\u52A8"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "dependencies "
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
              children: "    compile group"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
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
              children: "mysql"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " name"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
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
              children: "mysql-connector-java"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " version"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
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
              children: "8.0.25"
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
      children: "\u6DFB\u52A0\u4E0A\u8FF0\u4F9D\u8D56\u540E\uFF0CIdea\u5C06\u80FD\u591F\u8BC6\u522BMySQL\u6570\u636E\u5E93\u5E76\u8FDB\u884C\u8FDE\u63A5\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "212-\u914D\u7F6E\u6570\u636E\u6E90",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#212-\u914D\u7F6E\u6570\u636E\u6E90",
        children: "#"
      }), "2.1.2 \u914D\u7F6E\u6570\u636E\u6E90"]
    }), "\n", jsx(_components.p, {
      children: "\u63A5\u7740\uFF0C\u5728Idea\u7684\u8BBE\u7F6E\u4E2D\u914D\u7F6E\u6570\u636E\u6E90\u4FE1\u606F\uFF0C\u5305\u62EC\u6570\u636E\u5E93\u7684\u5730\u5740\u3001\u7528\u6237\u540D\u3001\u5BC6\u7801\u7B49\uFF0C\u4EE5\u4FBFIdea\u80FD\u591F\u6B63\u786E\u8FDE\u63A5\u5230MySQL\u6570\u636E\u5E93\u3002"
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
              children: "// \u914D\u7F6E\u6570\u636E\u6E90\u4FE1\u606F"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "url"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " jdbc"
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
              children: "//localhost:3306/mydatabase"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "username"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " root"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "password"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "123456"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u4EE5\u4E0A\u6B65\u9AA4\uFF0C\u6211\u4EEC\u6210\u529F\u914D\u7F6E\u4E86MySQL\u8FDE\u63A5\uFF0C\u53EF\u4EE5\u987A\u5229\u767B\u5F55MySQL\u6570\u636E\u5E93\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "22-\u914D\u7F6Emysql\u7528\u6237\u6743\u9650",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#22-\u914D\u7F6Emysql\u7528\u6237\u6743\u9650",
        children: "#"
      }), "2.2 \u914D\u7F6EMySQL\u7528\u6237\u6743\u9650"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u8FD9\u4E00\u5C0F\u8282\u4E2D\uFF0C\u6211\u4EEC\u5C06\u5B66\u4E60\u5982\u4F55\u914D\u7F6EMySQL\u7528\u6237\u6743\u9650\u4EE5\u4FDD\u8BC1\u6570\u636E\u5E93\u7684\u5B89\u5168\u6027\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "221-\u521B\u5EFAmysql\u7528\u6237",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#221-\u521B\u5EFAmysql\u7528\u6237",
        children: "#"
      }), "2.2.1 \u521B\u5EFAMySQL\u7528\u6237"]
    }), "\n", jsx(_components.p, {
      children: "\u9996\u5148\uFF0C\u4F7F\u7528SQL\u8BED\u53E5\u5728MySQL\u6570\u636E\u5E93\u4E2D\u521B\u5EFA\u65B0\u7528\u6237\uFF0C\u5E76\u8BBE\u7F6E\u7528\u6237\u7684\u767B\u5F55\u6743\u9650\u548C\u5BC6\u7801\u3002"
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
              children: "newuser"
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
    }), "\n", jsxs(_components.h4, {
      id: "222-\u6388\u6743\u7528\u6237\u8BBF\u95EE\u6570\u636E\u5E93",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#222-\u6388\u6743\u7528\u6237\u8BBF\u95EE\u6570\u636E\u5E93",
        children: "#"
      }), "2.2.2 \u6388\u6743\u7528\u6237\u8BBF\u95EE\u6570\u636E\u5E93"]
    }), "\n", jsx(_components.p, {
      children: "\u63A5\u7740\uFF0C\u901A\u8FC7\u6388\u6743\u8BED\u53E5\u4E3A\u7528\u6237\u8D4B\u4E88\u8BBF\u95EE\u7279\u5B9A\u6570\u636E\u5E93\u7684\u6743\u9650\u3002"
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
              children: " mydatabase."
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
              children: "newuser"
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
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u4EE5\u4E0A\u914D\u7F6E\uFF0C\u6211\u4EEC\u6210\u529F\u8BBE\u7F6E\u4E86MySQL\u7528\u6237\u6743\u9650\uFF0C\u4FDD\u8BC1\u4E86\u6570\u636E\u5E93\u7684\u5B89\u5168\u6027\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u5728\u4E0B\u4E00\u8282\u4E2D\uFF0C\u6211\u4EEC\u5C06\u63A2\u8BA8\u89E3\u51B3\u767B\u5F55\u5931\u8D25\u95EE\u9898\u7684\u65B9\u6CD5\uFF0C\u4E3A\u8BFB\u8005\u63D0\u4F9B\u5168\u9762\u7684\u95EE\u9898\u89E3\u51B3\u601D\u8DEF\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "3-\u89E3\u51B3\u767B\u5F55\u5931\u8D25\u95EE\u9898\u65B9\u6CD5\u63A2\u7A76",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#3-\u89E3\u51B3\u767B\u5F55\u5931\u8D25\u95EE\u9898\u65B9\u6CD5\u63A2\u7A76",
        children: "#"
      }), "3. \u89E3\u51B3\u767B\u5F55\u5931\u8D25\u95EE\u9898\u65B9\u6CD5\u63A2\u7A76"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u4F7F\u7528Idea\u96C6\u6210MySQL\u65F6\uFF0C\u767B\u5F55\u5931\u8D25\u662F\u4E00\u4E2A\u5E38\u89C1\u95EE\u9898\uFF0C\u53EF\u80FD\u7531\u591A\u79CD\u539F\u56E0\u5F15\u8D77\u3002\u672C\u7AE0\u5C06\u63A2\u8BA8\u89E3\u51B3\u767B\u5F55\u5931\u8D25\u95EE\u9898\u7684\u65B9\u6CD5\uFF0C\u5E2E\u52A9\u60A8\u5FEB\u901F\u6392\u9664\u6545\u969C\u5E76\u987A\u5229\u767B\u5F55MySQL\u6570\u636E\u5E93\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "31-\u68C0\u67E5\u8D26\u53F7\u5BC6\u7801",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#31-\u68C0\u67E5\u8D26\u53F7\u5BC6\u7801",
        children: "#"
      }), "3.1 \u68C0\u67E5\u8D26\u53F7\u5BC6\u7801"]
    }), "\n", jsx(_components.p, {
      children: "\u5F53\u5C1D\u8BD5\u767B\u5F55MySQL\u65F6\uFF0C\u9996\u5148\u8981\u786E\u4FDD\u8D26\u53F7\u5BC6\u7801\u7684\u51C6\u786E\u6027\u3002\u4EE5\u4E0B\u662F\u4E00\u4E9B\u5E38\u89C1\u7684\u68C0\u67E5\u65B9\u6CD5\uFF1A"
    }), "\n", jsxs(_components.h4, {
      id: "311-\u786E\u8BA4\u7528\u6237\u540D\u548C\u5BC6\u7801\u51C6\u786E\u6027",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#311-\u786E\u8BA4\u7528\u6237\u540D\u548C\u5BC6\u7801\u51C6\u786E\u6027",
        children: "#"
      }), "3.1.1 \u786E\u8BA4\u7528\u6237\u540D\u548C\u5BC6\u7801\u51C6\u786E\u6027"]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7Idea\u914D\u7F6E\u7684MySQL\u7528\u6237\u540D\u548C\u5BC6\u7801\u767B\u5F55\u6570\u636E\u5E93\u65F6\uFF0C\u52A1\u5FC5\u786E\u4FDD\u8F93\u5165\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801\u65E0\u8BEF\u3002\u7528\u6237\u540D\u533A\u5206\u5927\u5C0F\u5199\uFF0C\u5BC6\u7801\u5E94\u4E0E\u5728MySQL\u6570\u636E\u5E93\u4E2D\u8BBE\u7F6E\u7684\u4E00\u81F4\u3002"
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
              children: "// \u9A8C\u8BC1\u7528\u6237\u540D\u548C\u5BC6\u7801"
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
    }), "\n", jsxs(_components.h4, {
      id: "312-\u68C0\u67E5\u662F\u5426\u5F00\u542F\u8FDC\u7A0B\u8BBF\u95EE\u6743\u9650",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#312-\u68C0\u67E5\u662F\u5426\u5F00\u542F\u8FDC\u7A0B\u8BBF\u95EE\u6743\u9650",
        children: "#"
      }), "3.1.2 \u68C0\u67E5\u662F\u5426\u5F00\u542F\u8FDC\u7A0B\u8BBF\u95EE\u6743\u9650"]
    }), "\n", jsx(_components.p, {
      children: "\u6709\u65F6\u5019\uFF0C\u767B\u5F55\u5931\u8D25\u662F\u56E0\u4E3AMySQL\u6CA1\u6709\u5F00\u542F\u8FDC\u7A0B\u8BBF\u95EE\u7684\u6743\u9650\u3002\u60A8\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u6B65\u9AA4\u68C0\u67E5\u5E76\u5F00\u542F\u8FDC\u7A0B\u8BBF\u95EE\u6743\u9650\uFF1A"
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: ["\u6253\u5F00MySQL\u914D\u7F6E\u6587\u4EF6\uFF0C\u901A\u5E38\u662F", jsx(_components.code, {
          children: "my.cnf"
        }), "\u6216", jsx(_components.code, {
          children: "my.ini"
        }), "\u3002"]
      }), "\n", jsxs(_components.li, {
        children: ["\u6CE8\u91CA\u6389", jsx(_components.code, {
          children: "bind-address = 127.0.0.1"
        }), "\u8FD9\u4E00\u884C\uFF0C\u6216\u5C06\u5176\u4FEE\u6539\u4E3A", jsx(_components.code, {
          children: "bind-address = 0.0.0.0"
        }), "\u3002"]
      }), "\n", jsx(_components.li, {
        children: "\u91CD\u542FMySQL\u670D\u52A1\uFF0C\u4F7F\u66F4\u6539\u751F\u6548\u3002"
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "32-\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#32-\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5",
        children: "#"
      }), "3.2 \u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5"]
    }), "\n", jsx(_components.p, {
      children: "\u9664\u4E86\u8D26\u53F7\u5BC6\u7801\u9519\u8BEF\u5916\uFF0C\u7F51\u7EDC\u8FDE\u63A5\u95EE\u9898\u4E5F\u53EF\u80FD\u5BFC\u81F4\u767B\u5F55\u5931\u8D25\u3002\u5728\u9762\u5BF9\u767B\u5F55\u95EE\u9898\u65F6\uFF0C\u60A8\u53EF\u4EE5\u6267\u884C\u4EE5\u4E0B\u68C0\u67E5\uFF1A"
    }), "\n", jsxs(_components.h4, {
      id: "321-\u786E\u4FDD\u7F51\u7EDC\u8FDE\u63A5\u6B63\u5E38",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#321-\u786E\u4FDD\u7F51\u7EDC\u8FDE\u63A5\u6B63\u5E38",
        children: "#"
      }), "3.2.1 \u786E\u4FDD\u7F51\u7EDC\u8FDE\u63A5\u6B63\u5E38"]
    }), "\n", jsx(_components.p, {
      children: "\u786E\u4FDD\u60A8\u7684\u8BA1\u7B97\u673A\u80FD\u591F\u6B63\u5E38\u8FDE\u63A5\u5230\u7F51\u7EDC\uFF0C\u5C24\u5176\u662F\u5F53\u60A8\u5C1D\u8BD5\u8FDC\u7A0B\u767B\u5F55MySQL\u65F6\u3002\u68C0\u67E5\u7F51\u7EDC\u662F\u5426\u901A\u7545\uFF0C\u786E\u4FDD\u6CA1\u6709\u9632\u706B\u5899\u6216\u4EE3\u7406\u7684\u9650\u5236\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "322-\u68C0\u67E5mysql\u670D\u52A1\u72B6\u6001",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#322-\u68C0\u67E5mysql\u670D\u52A1\u72B6\u6001",
        children: "#"
      }), "3.2.2 \u68C0\u67E5MySQL\u670D\u52A1\u72B6\u6001"]
    }), "\n", jsx(_components.p, {
      children: "\u767B\u5F55\u5931\u8D25\u8FD8\u53EF\u80FD\u662F\u56E0\u4E3AMySQL\u670D\u52A1\u672A\u542F\u52A8\u6216\u5F02\u5E38\u3002\u60A8\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u6B65\u9AA4\u68C0\u67E5MySQL\u670D\u52A1\u72B6\u6001\uFF1A"
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsx(_components.li, {
        children: "\u6253\u5F00\u547D\u4EE4\u884C\u6216\u7EC8\u7AEF\u3002"
      }), "\n", jsxs(_components.li, {
        children: ["\u8F93\u5165\u547D\u4EE4", jsx(_components.code, {
          children: "sudo service mysql status"
        }), "\uFF08Linux\uFF09\u6216", jsx(_components.code, {
          children: "net start mysql"
        }), "\uFF08Windows\uFF09\u68C0\u67E5MySQL\u670D\u52A1\u662F\u5426\u5728\u8FD0\u884C\u3002"]
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u4EE5\u4E0A\u662F\u89E3\u51B3\u767B\u5F55\u5931\u8D25\u95EE\u9898\u7684\u521D\u6B65\u63A2\u7A76\u65B9\u6CD5\uFF0C\u786E\u4FDD\u8D26\u53F7\u5BC6\u7801\u6B63\u786E\u5E76\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5\u662F\u5426\u6B63\u5E38\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u60A8\u5FEB\u901F\u5B9A\u4F4D\u95EE\u9898\u5E76\u89E3\u51B3\u767B\u5F55\u5931\u8D25\u7684\u60C5\u51B5\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "4-\u9AD8\u6548\u89E3\u51B3\u767B\u5F55\u95EE\u9898\u6280\u5DE7\u5206\u4EAB",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#4-\u9AD8\u6548\u89E3\u51B3\u767B\u5F55\u95EE\u9898\u6280\u5DE7\u5206\u4EAB",
        children: "#"
      }), "4. \u9AD8\u6548\u89E3\u51B3\u767B\u5F55\u95EE\u9898\u6280\u5DE7\u5206\u4EAB"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u4E92\u8054\u7F51\u65F6\u4EE3\uFF0CMySQL\u4F5C\u4E3A\u4E00\u6B3E\u5E38\u7528\u7684\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7BA1\u7406\u7CFB\u7EDF\uFF0C\u4E0E\u5404\u79CD\u5F00\u53D1\u5DE5\u5177\u7684\u96C6\u6210\u64CD\u4F5C\u6108\u53D1\u91CD\u8981\u3002\u672C\u7AE0\u5C06\u4ECB\u7ECD\u4E00\u4E9B\u9AD8\u6548\u89E3\u51B3Idea\u767B\u5F55MySQL\u7684\u95EE\u9898\u6280\u5DE7\uFF0C\u5E2E\u52A9\u60A8\u66F4\u5FEB\u6377\u5730\u8FDE\u63A5MySQL\u6570\u636E\u5E93\uFF0C\u63D0\u9AD8\u5DE5\u4F5C\u6548\u7387\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "41-\u4F7F\u7528ssh\u96A7\u9053\u767B\u5F55mysql",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#41-\u4F7F\u7528ssh\u96A7\u9053\u767B\u5F55mysql",
        children: "#"
      }), "4.1 \u4F7F\u7528SSH\u96A7\u9053\u767B\u5F55MySQL"]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7SSH\u96A7\u9053\u8FDE\u63A5MySQL\u662F\u4E00\u79CD\u5B89\u5168\u4E14\u53EF\u9760\u7684\u65B9\u5F0F\uFF0C\u4E5F\u662F\u89E3\u51B3\u67D0\u4E9B\u8BBF\u95EE\u95EE\u9898\u7684\u6709\u6548\u9014\u5F84\u3002\u4E0B\u9762\u5C06\u8BE6\u7EC6\u4ECB\u7ECD\u5982\u4F55\u914D\u7F6ESSH\u8FDE\u63A5\uFF0C\u5E76\u5229\u7528SSH\u96A7\u9053\u8FDE\u63A5MySQL\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "411-\u914D\u7F6Essh\u8FDE\u63A5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#411-\u914D\u7F6Essh\u8FDE\u63A5",
        children: "#"
      }), "4.1.1 \u914D\u7F6ESSH\u8FDE\u63A5"]
    }), "\n", jsx(_components.p, {
      children: "\u9996\u5148\uFF0C\u786E\u4FDD\u60A8\u62E5\u6709SSH\u670D\u52A1\u7684\u767B\u5F55\u6743\u9650\uFF0C\u5E76\u5DF2\u77E5\u6653SSH\u8FDE\u63A5\u7684\u76F8\u5173\u4FE1\u606F\uFF0C\u5305\u62ECIP\u5730\u5740\u3001\u7528\u6237\u540D\u3001\u7AEF\u53E3\u4EE5\u53CA\u5BC6\u94A5\u7B49\u3002\u63A5\u4E0B\u6765\uFF0C\u5728Idea\u4E2D\u8FDB\u884CSSH\u914D\u7F6E\uFF1A"
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
              children: "<!-- \u8FD9\u91CC\u662F\u914D\u7F6Essh\u8FDE\u63A5\u7684\u793A\u4F8B\u4EE3\u7801 -->"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<ssh>"
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
              children: "<host>"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "xxx.xxx.xxx.xxx"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</host>"
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
              children: "<username>"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "your_username"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</username>"
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
              children: "<port>"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "22"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</port>"
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
              children: "<privateKey>"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "path_to_your_private_key"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</privateKey>"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</ssh>"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h4, {
      id: "412-\u5229\u7528ssh\u96A7\u9053\u8FDE\u63A5mysql",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#412-\u5229\u7528ssh\u96A7\u9053\u8FDE\u63A5mysql",
        children: "#"
      }), "4.1.2 \u5229\u7528SSH\u96A7\u9053\u8FDE\u63A5MySQL"]
    }), "\n", jsx(_components.p, {
      children: "\u5728Idea\u4E2D\u914D\u7F6EMySQL\u6570\u636E\u5E93\u8FDE\u63A5\u65F6\uFF0C\u9009\u62E9\u901A\u8FC7SSH\u96A7\u9053\u8FDE\u63A5\u65B9\u5F0F\uFF0C\u586B\u5165\u76F8\u5E94\u7684SSH\u8FDE\u63A5\u4FE1\u606F\uFF0C\u4F8B\u5982\u4E3B\u673A\u3001\u7AEF\u53E3\u3001\u7528\u6237\u540D\u7B49\u3002\u786E\u4FDD\u5DF2\u52FE\u9009SSH\u96A7\u9053\u9009\u9879\uFF0C\u5E76\u8F93\u5165\u6B63\u786E\u7684\u672C\u5730\u7AEF\u53E3\u548C\u8FDC\u7A0BMySQL\u670D\u52A1\u5668\u5730\u5740\u3002\u901A\u8FC7\u6B64\u65B9\u6CD5\uFF0C\u5373\u53EF\u5B9E\u73B0\u5B89\u5168\u7A33\u5B9A\u5730\u767B\u5F55MySQL\u6570\u636E\u5E93\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "42-\u4F7F\u7528\u53EF\u89C6\u5316\u5DE5\u5177\u8FDE\u63A5mysql",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#42-\u4F7F\u7528\u53EF\u89C6\u5316\u5DE5\u5177\u8FDE\u63A5mysql",
        children: "#"
      }), "4.2 \u4F7F\u7528\u53EF\u89C6\u5316\u5DE5\u5177\u8FDE\u63A5MySQL"]
    }), "\n", jsx(_components.p, {
      children: "\u9664\u4E86SSH\u96A7\u9053\u8FDE\u63A5\u5916\uFF0C\u53EF\u89C6\u5316\u5DE5\u5177\u4E5F\u662F\u4E00\u79CD\u4FBF\u6377\u7684\u8FDE\u63A5\u65B9\u5F0F\uFF0C\u80FD\u591F\u63D0\u4F9B\u76F4\u89C2\u7684\u6570\u636E\u5E93\u64CD\u4F5C\u754C\u9762\uFF0C\u4F8B\u5982Navicat\u7B49\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "421-\u914D\u7F6Eidea\u8FDE\u63A5mysql",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#421-\u914D\u7F6Eidea\u8FDE\u63A5mysql",
        children: "#"
      }), "4.2.1 \u914D\u7F6EIdea\u8FDE\u63A5MySQL"]
    }), "\n", jsx(_components.p, {
      children: "\u9996\u5148\uFF0C\u5728Idea\u4E2D\u6DFB\u52A0\u6570\u636E\u5E93\u8FDE\u63A5\uFF0C\u9009\u62E9MySQL\u7C7B\u578B\uFF0C\u5E76\u586B\u5165\u6570\u636E\u5E93\u76F8\u5173\u4FE1\u606F\uFF0C\u6CE8\u610F\u9009\u62E9\u6B63\u786E\u7684\u9A71\u52A8\u548C\u7248\u672C\u3002\u5728\u9AD8\u7EA7\u9009\u9879\u4E2D\uFF0C\u53EF\u4EE5\u8BBE\u7F6ESSH\u96A7\u9053\u7B49\u914D\u7F6E\uFF0C\u4EE5\u4FDD\u8BC1\u8FDE\u63A5\u5B89\u5168\u6027\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "422-\u4F7F\u7528navicat\u8FDE\u63A5mysql\u6570\u636E\u5E93",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#422-\u4F7F\u7528navicat\u8FDE\u63A5mysql\u6570\u636E\u5E93",
        children: "#"
      }), "4.2.2 \u4F7F\u7528Navicat\u8FDE\u63A5MySQL\u6570\u636E\u5E93"]
    }), "\n", jsx(_components.p, {
      children: "Navicat\u662F\u4E00\u6B3E\u5E38\u7528\u7684\u6570\u636E\u5E93\u7BA1\u7406\u5DE5\u5177\uFF0C\u7B80\u5355\u6613\u7528\u4E14\u529F\u80FD\u5F3A\u5927\u3002\u5728Navicat\u4E2D\u6DFB\u52A0\u65B0\u8FDE\u63A5\uFF0C\u586B\u5199MySQL\u76F8\u5173\u4FE1\u606F\uFF0C\u5982\u4E3B\u673A\u5730\u5740\u3001\u7AEF\u53E3\u3001\u7528\u6237\u540D\u3001\u5BC6\u7801\u7B49\uFF0C\u786E\u4FDD\u8FDE\u63A5\u4FE1\u606F\u51C6\u786E\u65E0\u8BEF\u3002\u70B9\u51FB\u8FDE\u63A5\u6309\u94AE\uFF0C\u5373\u53EF\u6210\u529F\u8FDE\u63A5MySQL\u6570\u636E\u5E93\uFF0C\u8FDB\u884C\u6570\u636E\u64CD\u4F5C\u548C\u7BA1\u7406\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u4EE5\u4E0A\u4ECB\u7ECD\uFF0C\u60A8\u5C06\u5B66\u4F1A\u4F7F\u7528SSH\u96A7\u9053\u548C\u53EF\u89C6\u5316\u5DE5\u5177\u4E24\u79CD\u9AD8\u6548\u7684\u65B9\u5F0F\u8FDE\u63A5MySQL\u6570\u636E\u5E93\uFF0C\u8F7B\u677E\u89E3\u51B3Idea\u767B\u5F55MySQL\u7684\u95EE\u9898\uFF0C\u63D0\u5347\u5F00\u53D1\u5DE5\u4F5C\u6548\u7387\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "5-\u8FDB\u9636\u5E94\u7528\u4E0E\u6CE8\u610F\u4E8B\u9879",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#5-\u8FDB\u9636\u5E94\u7528\u4E0E\u6CE8\u610F\u4E8B\u9879",
        children: "#"
      }), "5. \u8FDB\u9636\u5E94\u7528\u4E0E\u6CE8\u610F\u4E8B\u9879"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u89E3\u51B3Idea\u767B\u5F55MySQL\u5931\u8D25\u7684\u95EE\u9898\u540E\uFF0C\u4E3A\u4E86\u8FDB\u4E00\u6B65\u63D0\u9AD8\u5DE5\u4F5C\u6548\u7387\u548C\u6570\u636E\u5B89\u5168\u6027\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5E94\u7528\u4E00\u4E9B\u8FDB\u9636\u6280\u5DE7\u548C\u6CE8\u610F\u4E8B\u9879\u3002\u672C\u7AE0\u5C06\u91CD\u70B9\u8BA8\u8BBA\u9632\u706B\u5899\u914D\u7F6E\u6CE8\u610F\u4E8B\u9879\u4EE5\u53CA\u6570\u636E\u5E93\u4F18\u5316\u4E0E\u5B89\u5168\u6027\u52A0\u56FA\u7684\u65B9\u6CD5\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "51-\u9632\u706B\u5899\u914D\u7F6E\u6CE8\u610F\u4E8B\u9879",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#51-\u9632\u706B\u5899\u914D\u7F6E\u6CE8\u610F\u4E8B\u9879",
        children: "#"
      }), "5.1 \u9632\u706B\u5899\u914D\u7F6E\u6CE8\u610F\u4E8B\u9879"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u4F7F\u7528MySQL\u65F6\uFF0C\u4E3A\u4E86\u4FDD\u969C\u6570\u636E\u5E93\u7684\u5B89\u5168\u6027\uFF0C\u9632\u706B\u5899\u914D\u7F6E\u662F\u81F3\u5173\u91CD\u8981\u7684\u3002\u4EE5\u4E0B\u662F\u4E00\u4E9B\u9632\u706B\u5899\u914D\u7F6E\u7684\u6CE8\u610F\u4E8B\u9879\uFF1A"
    }), "\n", jsxs(_components.h4, {
      id: "511-\u6DFB\u52A0\u9632\u706B\u5899\u89C4\u5219",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#511-\u6DFB\u52A0\u9632\u706B\u5899\u89C4\u5219",
        children: "#"
      }), "5.1.1 \u6DFB\u52A0\u9632\u706B\u5899\u89C4\u5219"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u9632\u706B\u5899\u4E2D\u6DFB\u52A0\u89C4\u5219\uFF0C\u9650\u5236\u5BF9MySQL\u7AEF\u53E3\u7684\u8BBF\u95EE\uFF0C\u53EF\u4EE5\u6709\u6548\u9632\u6B62\u672A\u6388\u6743\u7684\u8BBF\u95EE\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u793A\u4F8B\uFF1A"
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
                color: "#D8DEE9FF"
              },
              children: "sudo ufw allow 3306/tcp"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h4, {
      id: "512-\u9632\u706B\u5899\u7AEF\u53E3\u653E\u884C",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#512-\u9632\u706B\u5899\u7AEF\u53E3\u653E\u884C",
        children: "#"
      }), "5.1.2 \u9632\u706B\u5899\u7AEF\u53E3\u653E\u884C"]
    }), "\n", jsx(_components.p, {
      children: "\u786E\u4FDD\u9632\u706B\u5899\u7AEF\u53E3\u6B63\u786E\u653E\u884C\uFF0C\u4EE5\u5141\u8BB8MySQL\u670D\u52A1\u6B63\u5E38\u901A\u4FE1\u3002\u5728\u914D\u7F6E\u9632\u706B\u5899\u89C4\u5219\u65F6\uFF0C\u52A1\u5FC5\u786E\u4FDD\u7AEF\u53E3\u7684\u6B63\u786E\u653E\u884C\uFF0C\u9632\u6B62\u8FDE\u63A5\u51FA\u73B0\u95EE\u9898\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "52-\u6570\u636E\u5E93\u4F18\u5316\u4E0E\u5B89\u5168\u6027\u52A0\u56FA",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#52-\u6570\u636E\u5E93\u4F18\u5316\u4E0E\u5B89\u5168\u6027\u52A0\u56FA",
        children: "#"
      }), "5.2 \u6570\u636E\u5E93\u4F18\u5316\u4E0E\u5B89\u5168\u6027\u52A0\u56FA"]
    }), "\n", jsx(_components.p, {
      children: "\u4E3A\u4E86\u63D0\u5347\u6570\u636E\u5E93\u6027\u80FD\u548C\u6570\u636E\u5B89\u5168\u6027\uFF0C\u5B9A\u671F\u8FDB\u884C\u6570\u636E\u5E93\u4F18\u5316\u548C\u52A0\u56FA\u662F\u5FC5\u4E0D\u53EF\u5C11\u7684\u3002\u4EE5\u4E0B\u662F\u4E00\u4E9B\u5E38\u7528\u7684\u6570\u636E\u5E93\u4F18\u5316\u4E0E\u5B89\u5168\u6027\u52A0\u56FA\u65B9\u6CD5\uFF1A"
    }), "\n", jsxs(_components.h4, {
      id: "521-\u5B9A\u671F\u5907\u4EFD\u6570\u636E\u5E93",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#521-\u5B9A\u671F\u5907\u4EFD\u6570\u636E\u5E93",
        children: "#"
      }), "5.2.1 \u5B9A\u671F\u5907\u4EFD\u6570\u636E\u5E93"]
    }), "\n", jsx(_components.p, {
      children: "\u5B9A\u671F\u5907\u4EFD\u662F\u4FDD\u8BC1\u6570\u636E\u4E0D\u4E22\u5931\u7684\u5173\u952E\u6B65\u9AA4\u3002\u901A\u8FC7\u5B9A\u671F\u5907\u4EFD\u6570\u636E\u5E93\uFF0C\u53EF\u4EE5\u5728\u610F\u5916\u60C5\u51B5\u4E0B\u5FEB\u901F\u6062\u590D\u6570\u636E\u3002\u53EF\u4EE5\u4F7F\u7528MySQL\u81EA\u5E26\u7684\u5907\u4EFD\u5DE5\u5177\u6216\u7B2C\u4E09\u65B9\u5DE5\u5177\u8FDB\u884C\u5907\u4EFD\u64CD\u4F5C\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "522-\u4F7F\u7528ssl\u52A0\u5BC6\u8FDE\u63A5mysql",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#522-\u4F7F\u7528ssl\u52A0\u5BC6\u8FDE\u63A5mysql",
        children: "#"
      }), "5.2.2 \u4F7F\u7528SSL\u52A0\u5BC6\u8FDE\u63A5MySQL"]
    }), "\n", jsx(_components.p, {
      children: "\u4F7F\u7528SSL\u52A0\u5BC6\u8FDE\u63A5MySQL\u53EF\u4EE5\u6709\u6548\u63D0\u5347\u6570\u636E\u4F20\u8F93\u7684\u5B89\u5168\u6027\u3002\u901A\u8FC7\u914D\u7F6EMySQL\u670D\u52A1\u5668\u548C\u5BA2\u6237\u7AEF\u7684SSL\u8FDE\u63A5\uFF0C\u6570\u636E\u5728\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u4F1A\u8FDB\u884C\u52A0\u5BC6\uFF0C\u786E\u4FDD\u6570\u636E\u4E0D\u4F1A\u88AB\u7A83\u53D6\u6216\u7BE1\u6539\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u5B66\u4E60\u672C\u7AE0\u5185\u5BB9\uFF0C\u8BFB\u8005\u53EF\u4EE5\u8FDB\u4E00\u6B65\u52A0\u5F3A\u5BF9\u6570\u636E\u5E93\u5B89\u5168\u7684\u8BA4\u8BC6\uFF0C\u638C\u63E1\u9632\u706B\u5899\u914D\u7F6E\u548C\u6570\u636E\u5E93\u4F18\u5316\u7684\u5173\u952E\u6280\u5DE7\uFF0C\u4ECE\u800C\u63D0\u9AD8\u6570\u636E\u5B89\u5168\u6027\u548C\u5DE5\u4F5C\u6548\u7387\u3002"
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

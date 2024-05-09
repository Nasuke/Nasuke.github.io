import { jsx, jsxs, Fragment } from "react/jsx-runtime";
const frontmatter = void 0;
const toc = [{
  "id": "21-\u4E0B\u8F7D\u4E0E\u5B89\u88C5mysql\u6570\u636E\u5E93",
  "text": "2.1 \u4E0B\u8F7D\u4E0E\u5B89\u88C5MySQL\u6570\u636E\u5E93",
  "depth": 2
}, {
  "id": "211-windows\u5E73\u53F0\u5B89\u88C5\u6B65\u9AA4",
  "text": "2.1.1 Windows\u5E73\u53F0\u5B89\u88C5\u6B65\u9AA4",
  "depth": 3
}, {
  "id": "212-macos\u5E73\u53F0\u5B89\u88C5\u6B65\u9AA4",
  "text": "2.1.2 macOS\u5E73\u53F0\u5B89\u88C5\u6B65\u9AA4",
  "depth": 3
}, {
  "id": "213-linux\u5E73\u53F0\u5B89\u88C5\u6B65\u9AA4",
  "text": "2.1.3 Linux\u5E73\u53F0\u5B89\u88C5\u6B65\u9AA4",
  "depth": 3
}, {
  "id": "22-\u521D\u6B21\u914D\u7F6Emysql\u6570\u636E\u5E93",
  "text": "2.2 \u521D\u6B21\u914D\u7F6EMySQL\u6570\u636E\u5E93",
  "depth": 2
}, {
  "id": "221-\u8BBE\u7F6E\u7BA1\u7406\u5458\u5BC6\u7801",
  "text": "2.2.1 \u8BBE\u7F6E\u7BA1\u7406\u5458\u5BC6\u7801",
  "depth": 3
}, {
  "id": "222-\u914D\u7F6E\u7F51\u7EDC\u8FDE\u63A5",
  "text": "2.2.2 \u914D\u7F6E\u7F51\u7EDC\u8FDE\u63A5",
  "depth": 3
}, {
  "id": "223-\u8BBE\u7F6E\u5B57\u7B26\u96C6\u4E0E\u6821\u5BF9\u89C4\u5219",
  "text": "2.2.3 \u8BBE\u7F6E\u5B57\u7B26\u96C6\u4E0E\u6821\u5BF9\u89C4\u5219",
  "depth": 3
}, {
  "id": "31-\u767B\u5F55mysql\u6570\u636E\u5E93",
  "text": "3.1 \u767B\u5F55MySQL\u6570\u636E\u5E93",
  "depth": 2
}, {
  "id": "32-\u521B\u5EFA\u4E0E\u7BA1\u7406\u6570\u636E\u5E93",
  "text": "3.2 \u521B\u5EFA\u4E0E\u7BA1\u7406\u6570\u636E\u5E93",
  "depth": 2
}, {
  "id": "321-\u521B\u5EFA\u65B0\u6570\u636E\u5E93",
  "text": "3.2.1 \u521B\u5EFA\u65B0\u6570\u636E\u5E93",
  "depth": 3
}, {
  "id": "322-\u4FEE\u6539\u6570\u636E\u5E93\u5C5E\u6027",
  "text": "3.2.2 \u4FEE\u6539\u6570\u636E\u5E93\u5C5E\u6027",
  "depth": 3
}, {
  "id": "323-\u5220\u9664\u6570\u636E\u5E93",
  "text": "3.2.3 \u5220\u9664\u6570\u636E\u5E93",
  "depth": 3
}, {
  "id": "33-\u8868\u7684\u64CD\u4F5C\u4E0E\u7BA1\u7406",
  "text": "3.3 \u8868\u7684\u64CD\u4F5C\u4E0E\u7BA1\u7406",
  "depth": 2
}, {
  "id": "331-\u521B\u5EFA\u6570\u636E\u8868",
  "text": "3.3.1 \u521B\u5EFA\u6570\u636E\u8868",
  "depth": 3
}, {
  "id": "332-\u6DFB\u52A0\u5220\u9664\u4FEE\u6539\u5B57\u6BB5",
  "text": "3.3.2 \u6DFB\u52A0\u3001\u5220\u9664\u3001\u4FEE\u6539\u5B57\u6BB5",
  "depth": 3
}, {
  "id": "333-\u8BBE\u5B9A\u4E3B\u952E\u4E0E\u7D22\u5F15",
  "text": "3.3.3 \u8BBE\u5B9A\u4E3B\u952E\u4E0E\u7D22\u5F15",
  "depth": 3
}, {
  "id": "41-\u6570\u636E\u5907\u4EFD\u4E0E\u6062\u590D",
  "text": "4.1 \u6570\u636E\u5907\u4EFD\u4E0E\u6062\u590D",
  "depth": 2
}, {
  "id": "411-\u624B\u52A8\u5907\u4EFD\u4E0E\u8FD8\u539F",
  "text": "4.1.1 \u624B\u52A8\u5907\u4EFD\u4E0E\u8FD8\u539F",
  "depth": 3
}, {
  "id": "\u5907\u4EFD\u6570\u636E\u5E93",
  "text": "\u5907\u4EFD\u6570\u636E\u5E93\uFF1A",
  "depth": 4
}, {
  "id": "\u8FD8\u539F\u6570\u636E\u5E93",
  "text": "\u8FD8\u539F\u6570\u636E\u5E93\uFF1A",
  "depth": 4
}, {
  "id": "412-\u4F7F\u7528mysqldump\u547D\u4EE4\u5907\u4EFD",
  "text": "4.1.2 \u4F7F\u7528mysqldump\u547D\u4EE4\u5907\u4EFD",
  "depth": 3
}, {
  "id": "42-\u6570\u636E\u5E93\u6027\u80FD\u4F18\u5316",
  "text": "4.2 \u6570\u636E\u5E93\u6027\u80FD\u4F18\u5316",
  "depth": 2
}, {
  "id": "421-\u7D22\u5F15\u4F18\u5316",
  "text": "4.2.1 \u7D22\u5F15\u4F18\u5316",
  "depth": 3
}, {
  "id": "422-\u67E5\u8BE2\u4F18\u5316",
  "text": "4.2.2 \u67E5\u8BE2\u4F18\u5316",
  "depth": 3
}, {
  "id": "423-\u914D\u7F6E\u4F18\u5316\u53C2\u6570",
  "text": "4.2.3 \u914D\u7F6E\u4F18\u5316\u53C2\u6570",
  "depth": 3
}, {
  "id": "\u603B\u7ED3",
  "text": "\u603B\u7ED3",
  "depth": 2
}, {
  "id": "51-\u7528\u6237\u4E0E\u6743\u9650\u7BA1\u7406",
  "text": "5.1 \u7528\u6237\u4E0E\u6743\u9650\u7BA1\u7406",
  "depth": 2
}, {
  "id": "511-\u521B\u5EFA\u65B0\u7528\u6237",
  "text": "5.1.1 \u521B\u5EFA\u65B0\u7528\u6237",
  "depth": 3
}, {
  "id": "512-\u8BBE\u7F6E\u6743\u9650\u4E0E\u89D2\u8272",
  "text": "5.1.2 \u8BBE\u7F6E\u6743\u9650\u4E0E\u89D2\u8272",
  "depth": 3
}, {
  "id": "52-\u5B89\u5168\u7B56\u7565\u4E0E\u9632\u62A4\u63AA\u65BD",
  "text": "5.2 \u5B89\u5168\u7B56\u7565\u4E0E\u9632\u62A4\u63AA\u65BD",
  "depth": 2
}, {
  "id": "521-\u52A0\u5BC6\u8FDE\u63A5",
  "text": "5.2.1 \u52A0\u5BC6\u8FDE\u63A5",
  "depth": 3
}, {
  "id": "522-\u9632\u706B\u5899\u8BBE\u7F6E",
  "text": "5.2.2 \u9632\u706B\u5899\u8BBE\u7F6E",
  "depth": 3
}, {
  "id": "61-\u5E38\u89C1\u6545\u969C\u53CA\u89E3\u51B3\u65B9\u6CD5",
  "text": "6.1 \u5E38\u89C1\u6545\u969C\u53CA\u89E3\u51B3\u65B9\u6CD5",
  "depth": 2
}, {
  "id": "611-\u6570\u636E\u5E93\u65E0\u6CD5\u542F\u52A8",
  "text": "6.1.1 \u6570\u636E\u5E93\u65E0\u6CD5\u542F\u52A8",
  "depth": 3
}, {
  "id": "612-\u6570\u636E\u5E93\u8FDE\u63A5\u5931\u8D25",
  "text": "6.1.2 \u6570\u636E\u5E93\u8FDE\u63A5\u5931\u8D25",
  "depth": 3
}, {
  "id": "62-\u6570\u636E\u5E93\u6062\u590D\u65B9\u6CD5",
  "text": "6.2 \u6570\u636E\u5E93\u6062\u590D\u65B9\u6CD5",
  "depth": 2
}, {
  "id": "621-\u8BEF\u5220\u6570\u636E\u6062\u590D",
  "text": "6.2.1 \u8BEF\u5220\u6570\u636E\u6062\u590D",
  "depth": 3
}, {
  "id": "622-\u6570\u636E\u5E93\u635F\u574F\u4FEE\u590D",
  "text": "6.2.2 \u6570\u636E\u5E93\u635F\u574F\u4FEE\u590D",
  "depth": 3
}];
const title = "6. MySQL\u6570\u636E\u5E93\u7684\u6545\u969C\u6392\u9664\u4E0E\u6062\u590D";
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    p: "p",
    h2: "h2",
    h3: "h3",
    ol: "ol",
    li: "li",
    div: "div",
    button: "button",
    span: "span",
    pre: "pre",
    code: "code",
    h4: "h4",
    ul: "ul",
    table: "table",
    thead: "thead",
    tr: "tr",
    th: "th",
    tbody: "tbody",
    td: "td",
    strong: "strong"
  }, props.components);
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "1-mysql\u6570\u636E\u5E93\u7684\u57FA\u7840\u4ECB\u7ECD",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#1-mysql\u6570\u636E\u5E93\u7684\u57FA\u7840\u4ECB\u7ECD",
        children: "#"
      }), "1. MySQL\u6570\u636E\u5E93\u7684\u57FA\u7840\u4ECB\u7ECD"]
    }), "\n", jsx(_components.p, {
      children: "MySQL\u6570\u636E\u5E93\u662F\u4E00\u79CD\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7BA1\u7406\u7CFB\u7EDF\uFF0C\u88AB\u5E7F\u6CDB\u5E94\u7528\u4E8E\u5404\u79CDWeb\u5E94\u7528\u7A0B\u5E8F\u4E2D\uFF0C\u5176\u5F00\u6E90\u3001\u9AD8\u6027\u80FD\u3001\u7A33\u5B9A\u53EF\u9760\u7B49\u7279\u70B9\u4F7F\u5176\u6210\u4E3A\u4F17\u591A\u5F00\u53D1\u8005\u9996\u9009\u7684\u6570\u636E\u5E93\u89E3\u51B3\u65B9\u6848\u3002"
    }), "\n", jsx(_components.p, {
      children: "MySQL\u6570\u636E\u5E93\u7684\u4F18\u52BF\u5728\u4E8E\u5176\u5177\u6709\u826F\u597D\u7684\u6027\u80FD\u3001\u652F\u6301\u591A\u79CD\u64CD\u4F5C\u7CFB\u7EDF\u3001\u6613\u4E8E\u5B66\u4E60\u548C\u4F7F\u7528\u3001\u826F\u597D\u7684\u793E\u533A\u652F\u6301\u7B49\u7279\u70B9\u3002\u4F5C\u4E3A\u4E00\u6B3E\u5F00\u6E90\u6570\u636E\u5E93\uFF0CMySQL\u5177\u6709\u5F3A\u5927\u7684\u6269\u5C55\u6027\u548C\u7075\u6D3B\u6027\uFF0C\u53EF\u4EE5\u6EE1\u8DB3\u5404\u79CD\u89C4\u6A21\u7684\u5E94\u7528\u9700\u6C42\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u603B\u7684\u6765\u8BF4\uFF0CMySQL\u6570\u636E\u5E93\u4E0D\u4EC5\u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u529F\u80FD\u548C\u5F3A\u5927\u6027\u80FD\uFF0C\u540C\u65F6\u4E5F\u5177\u5907\u4E86\u826F\u597D\u7684\u53EF\u7EF4\u62A4\u6027\u548C\u5F00\u53D1\u4FBF\u6377\u6027\uFF0C\u9002\u7528\u4E8E\u5404\u79CD\u573A\u666F\u4E0B\u7684\u6570\u636E\u5B58\u50A8\u548C\u7BA1\u7406\u4EFB\u52A1\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "2-mysql\u6570\u636E\u5E93\u7684\u5B89\u88C5\u4E0E\u914D\u7F6E",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#2-mysql\u6570\u636E\u5E93\u7684\u5B89\u88C5\u4E0E\u914D\u7F6E",
        children: "#"
      }), "2. MySQL\u6570\u636E\u5E93\u7684\u5B89\u88C5\u4E0E\u914D\u7F6E"]
    }), "\n", jsxs(_components.h2, {
      id: "21-\u4E0B\u8F7D\u4E0E\u5B89\u88C5mysql\u6570\u636E\u5E93",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#21-\u4E0B\u8F7D\u4E0E\u5B89\u88C5mysql\u6570\u636E\u5E93",
        children: "#"
      }), "2.1 \u4E0B\u8F7D\u4E0E\u5B89\u88C5MySQL\u6570\u636E\u5E93"]
    }), "\n", jsx(_components.p, {
      children: "MySQL \u662F\u4E00\u6B3E\u5F00\u6E90\u7684\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7BA1\u7406\u7CFB\u7EDF\uFF0C\u63D0\u4F9B\u4E86\u8DE8\u5E73\u53F0\u3001\u9AD8\u6027\u80FD\u3001\u53EF\u9760\u7A33\u5B9A\u7684\u6570\u636E\u5E93\u670D\u52A1\u3002\u5728\u5F00\u59CB\u5B66\u4E60MySQL\u6570\u636E\u5E93\u4E4B\u524D\uFF0C\u9996\u5148\u9700\u8981\u8FDB\u884C\u4E0B\u8F7D\u4E0E\u5B89\u88C5\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "211-windows\u5E73\u53F0\u5B89\u88C5\u6B65\u9AA4",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#211-windows\u5E73\u53F0\u5B89\u88C5\u6B65\u9AA4",
        children: "#"
      }), "2.1.1 Windows\u5E73\u53F0\u5B89\u88C5\u6B65\u9AA4"]
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: ["\u8BBF\u95EE\u5B98\u65B9\u7F51\u7AD9 ", jsx(_components.a, {
          href: "https://dev.mysql.com/downloads/mysql/%EF%BC%8C%E9%80%89%E6%8B%A9%E9%80%82%E5%90%88",
          children: "https://dev.mysql.com/downloads/mysql/\uFF0C\u9009\u62E9\u9002\u5408"
        }), " Windows \u5E73\u53F0\u7684 MySQL Community Server \u7248\u672C\u8FDB\u884C\u4E0B\u8F7D\u3002"]
      }), "\n", jsx(_components.li, {
        children: "\u8FD0\u884C\u4E0B\u8F7D\u7684\u5B89\u88C5\u7A0B\u5E8F\uFF0C\u6309\u7167\u63D0\u793A\u9010\u6B65\u8FDB\u884C\u5B89\u88C5\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u5728\u5B89\u88C5\u8FC7\u7A0B\u4E2D\uFF0C\u8BBE\u7F6Eroot\u7528\u6237\u7684\u5BC6\u7801\uFF0C\u786E\u4FDD\u5BC6\u7801\u590D\u6742\u5EA6\u548C\u5B89\u5168\u6027\u3002"
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "212-macos\u5E73\u53F0\u5B89\u88C5\u6B65\u9AA4",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#212-macos\u5E73\u53F0\u5B89\u88C5\u6B65\u9AA4",
        children: "#"
      }), "2.1.2 macOS\u5E73\u53F0\u5B89\u88C5\u6B65\u9AA4"]
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: ["\u5728 macOS \u7CFB\u7EDF\u4E0A\uFF0C\u53EF\u4EE5\u901A\u8FC7 Homebrew \u8FDB\u884C MySQL \u7684\u5B89\u88C5\u3002\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A", "\n", jsxs(_components.div, {
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
                  children: "brew install mysql"
                })
              }), "\n", jsx(_components.span, {
                className: "line"
              })]
            })
          })]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\u5B8C\u6210\u5B89\u88C5\u540E\uFF0C\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u542F\u52A8 MySQL \u670D\u52A1\uFF1A", "\n", jsxs(_components.div, {
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
                  children: "brew services start mysql"
                })
              }), "\n", jsx(_components.span, {
                className: "line"
              })]
            })
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "213-linux\u5E73\u53F0\u5B89\u88C5\u6B65\u9AA4",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#213-linux\u5E73\u53F0\u5B89\u88C5\u6B65\u9AA4",
        children: "#"
      }), "2.1.3 Linux\u5E73\u53F0\u5B89\u88C5\u6B65\u9AA4"]
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: ["\u5BF9\u4E8E\u5927\u591A\u6570 Linux \u53D1\u884C\u7248\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5305\u7BA1\u7406\u5668\u6765\u5B89\u88C5 MySQL\u3002\u4EE5 Ubuntu \u4E3A\u4F8B\uFF0C\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u8FDB\u884C\u5B89\u88C5\uFF1A", "\n", jsxs(_components.div, {
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
                  children: "sudo apt-get update"
                })
              }), "\n", jsx(_components.span, {
                className: "line",
                children: jsx(_components.span, {
                  style: {
                    color: "#D8DEE9FF"
                  },
                  children: "sudo apt-get install mysql-server"
                })
              }), "\n", jsx(_components.span, {
                className: "line"
              })]
            })
          })]
        }), "\n"]
      }), "\n", jsx(_components.li, {
        children: "\u5728\u5B89\u88C5\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u63D0\u793A\u8BBE\u7F6E root \u7528\u6237\u5BC6\u7801\u3002"
      }), "\n"]
    }), "\n", jsxs(_components.h2, {
      id: "22-\u521D\u6B21\u914D\u7F6Emysql\u6570\u636E\u5E93",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#22-\u521D\u6B21\u914D\u7F6Emysql\u6570\u636E\u5E93",
        children: "#"
      }), "2.2 \u521D\u6B21\u914D\u7F6EMySQL\u6570\u636E\u5E93"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u6210\u529F\u5B89\u88C5 MySQL \u6570\u636E\u5E93\u540E\uFF0C\u63A5\u4E0B\u6765\u9700\u8981\u8FDB\u884C\u4E00\u4E9B\u521D\u6B21\u914D\u7F6E\u64CD\u4F5C\uFF0C\u4EE5\u786E\u4FDD\u6570\u636E\u5E93\u7684\u6B63\u5E38\u8FD0\u884C\u548C\u5B89\u5168\u6027\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "221-\u8BBE\u7F6E\u7BA1\u7406\u5458\u5BC6\u7801",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#221-\u8BBE\u7F6E\u7BA1\u7406\u5458\u5BC6\u7801",
        children: "#"
      }), "2.2.1 \u8BBE\u7F6E\u7BA1\u7406\u5458\u5BC6\u7801"]
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: ["\u4F7F\u7528\u547D\u4EE4\u884C\u5DE5\u5177\u767B\u5F55\u5230 MySQL \u6570\u636E\u5E93\uFF1A", "\n", jsxs(_components.div, {
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
                  children: "mysql -u root -p"
                })
              }), "\n", jsx(_components.span, {
                className: "line"
              })]
            })
          })]
        }), "\n"]
      }), "\n", jsx(_components.li, {
        children: "\u8F93\u5165\u521A\u521A\u8BBE\u7F6E\u7684 root \u7528\u6237\u5BC6\u7801\uFF0C\u8FDB\u5165 MySQL \u63A7\u5236\u53F0\u3002"
      }), "\n", jsxs(_components.li, {
        children: ["\u5728\u63A7\u5236\u53F0\u4E2D\u6267\u884C\u4EE5\u4E0B SQL \u8BED\u53E5\u6765\u4FEE\u6539 root \u7528\u6237\u5BC6\u7801\uFF1A", "\n", jsxs(_components.div, {
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
                  children: "root"
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
        }), "\n", "\u5176\u4E2D\uFF0C'\u65B0\u5BC6\u7801' \u4E3A\u60A8\u8981\u8BBE\u7F6E\u7684\u65B0\u5BC6\u7801\u3002"]
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "222-\u914D\u7F6E\u7F51\u7EDC\u8FDE\u63A5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#222-\u914D\u7F6E\u7F51\u7EDC\u8FDE\u63A5",
        children: "#"
      }), "2.2.2 \u914D\u7F6E\u7F51\u7EDC\u8FDE\u63A5"]
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsx(_components.li, {
        children: "\u7F16\u8F91 MySQL \u914D\u7F6E\u6587\u4EF6 my.cnf\uFF0C\u53EF\u4EE5\u914D\u7F6E\u5141\u8BB8\u8FDC\u7A0B\u8FDE\u63A5\u7B49\u53C2\u6570\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u5C06 bind-address \u4FEE\u6539\u4E3A\u670D\u52A1\u5668\u7684 IP \u5730\u5740\uFF0C\u4EE5\u5141\u8BB8\u8FDC\u7A0B\u8BBF\u95EE\u3002"
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "223-\u8BBE\u7F6E\u5B57\u7B26\u96C6\u4E0E\u6821\u5BF9\u89C4\u5219",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#223-\u8BBE\u7F6E\u5B57\u7B26\u96C6\u4E0E\u6821\u5BF9\u89C4\u5219",
        children: "#"
      }), "2.2.3 \u8BBE\u7F6E\u5B57\u7B26\u96C6\u4E0E\u6821\u5BF9\u89C4\u5219"]
    }), "\n", jsx(_components.p, {
      children: "\u5728 MySQL \u4E2D\uFF0C\u5B57\u7B26\u96C6\u548C\u6821\u5BF9\u89C4\u5219\u53EF\u4EE5\u5F71\u54CD\u5B58\u50A8\u548C\u68C0\u7D22\u6570\u636E\u7684\u884C\u4E3A\u3002\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u6B65\u9AA4\u8BBE\u7F6E\uFF1A"
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: ["\u67E5\u770B\u5F53\u524D\u6570\u636E\u5E93\u7684\u5B57\u7B26\u96C6\u548C\u6821\u5BF9\u89C4\u5219\uFF1A", "\n", jsxs(_components.div, {
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
                  children: "SHOW VARIABLES "
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
                  children: "character\\_set\\_%"
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
                    color: "#D8DEE9FF"
                  },
                  children: "SHOW VARIABLES "
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
                  children: "collation%"
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
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\u4FEE\u6539\u6570\u636E\u5E93\u7684\u9ED8\u8BA4\u5B57\u7B26\u96C6\u548C\u6821\u5BF9\u89C4\u5219\uFF1A", "\n", jsxs(_components.div, {
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
                  children: " "
                }), jsx(_components.span, {
                  style: {
                    color: "#81A1C1"
                  },
                  children: "DATABASE"
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
                  children: " "
                }), jsx(_components.span, {
                  style: {
                    color: "#81A1C1"
                  },
                  children: "CHARACTER"
                }), jsx(_components.span, {
                  style: {
                    color: "#D8DEE9FF"
                  },
                  children: " "
                }), jsx(_components.span, {
                  style: {
                    color: "#81A1C1"
                  },
                  children: "SET"
                }), jsx(_components.span, {
                  style: {
                    color: "#D8DEE9FF"
                  },
                  children: " utf8 "
                }), jsx(_components.span, {
                  style: {
                    color: "#81A1C1"
                  },
                  children: "COLLATE"
                }), jsx(_components.span, {
                  style: {
                    color: "#D8DEE9FF"
                  },
                  children: " utf8_general_ci;"
                })]
              }), "\n", jsx(_components.span, {
                className: "line"
              })]
            })
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u4EE5\u4E0A\u6B65\u9AA4\uFF0C\u60A8\u5DF2\u7ECF\u6210\u529F\u5B8C\u6210\u4E86 MySQL \u6570\u636E\u5E93\u7684\u5B89\u88C5\u4E0E\u521D\u6B21\u914D\u7F6E\uFF0C\u4E3A\u63A5\u4E0B\u6765\u7684\u64CD\u4F5C\u6253\u4E0B\u57FA\u7840\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "3-mysql\u6570\u636E\u5E93\u7684\u57FA\u672C\u64CD\u4F5C",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#3-mysql\u6570\u636E\u5E93\u7684\u57FA\u672C\u64CD\u4F5C",
        children: "#"
      }), "3. MySQL\u6570\u636E\u5E93\u7684\u57FA\u672C\u64CD\u4F5C"]
    }), "\n", jsxs(_components.h2, {
      id: "31-\u767B\u5F55mysql\u6570\u636E\u5E93",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#31-\u767B\u5F55mysql\u6570\u636E\u5E93",
        children: "#"
      }), "3.1 \u767B\u5F55MySQL\u6570\u636E\u5E93"]
    }), "\n", jsx(_components.p, {
      children: "\u8981\u5F00\u59CB\u5BF9MySQL\u6570\u636E\u5E93\u8FDB\u884C\u64CD\u4F5C\uFF0C\u9996\u5148\u9700\u8981\u767B\u5F55\u6570\u636E\u5E93\u7CFB\u7EDF\u3002\u767B\u5F55MySQL\u6570\u636E\u5E93\u53EF\u4EE5\u901A\u8FC7\u547D\u4EE4\u884C\u5DE5\u5177\u6216\u56FE\u5F62\u5316\u5DE5\u5177\uFF0C\u4E0B\u9762\u4ECB\u7ECD\u901A\u8FC7\u547D\u4EE4\u884C\u5DE5\u5177\u8FDB\u884C\u767B\u5F55\u7684\u65B9\u6CD5\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u6253\u5F00\u547D\u4EE4\u884C\u5DE5\u5177\uFF0C\u8F93\u5165\u4EE5\u4E0B\u547D\u4EE4\u8FDB\u884C\u767B\u5F55\uFF1A"
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
              children: "mysql -u root -p"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u7CFB\u7EDF\u4F1A\u63D0\u793A\u8F93\u5165\u5BC6\u7801\uFF0C\u8F93\u5165\u4E4B\u524D\u8BBE\u7F6E\u7684\u7BA1\u7406\u5458\u5BC6\u7801\u5373\u53EF\u767B\u5F55\u5230MySQL\u6570\u636E\u5E93\u7CFB\u7EDF\u4E2D\u3002"
    }), "\n", jsxs(_components.h2, {
      id: "32-\u521B\u5EFA\u4E0E\u7BA1\u7406\u6570\u636E\u5E93",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#32-\u521B\u5EFA\u4E0E\u7BA1\u7406\u6570\u636E\u5E93",
        children: "#"
      }), "3.2 \u521B\u5EFA\u4E0E\u7BA1\u7406\u6570\u636E\u5E93"]
    }), "\n", jsxs(_components.h3, {
      id: "321-\u521B\u5EFA\u65B0\u6570\u636E\u5E93",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#321-\u521B\u5EFA\u65B0\u6570\u636E\u5E93",
        children: "#"
      }), "3.2.1 \u521B\u5EFA\u65B0\u6570\u636E\u5E93"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u767B\u5F55MySQL\u6570\u636E\u5E93\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0BSQL\u8BED\u53E5\u521B\u5EFA\u65B0\u7684\u6570\u636E\u5E93\uFF1A"
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
              children: "DATABASE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " mydatabase;"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.p, {
      children: ["\u8FD9\u5C06\u4F1A\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A", jsx(_components.code, {
        children: "mydatabase"
      }), "\u7684\u65B0\u6570\u636E\u5E93\u3002"]
    }), "\n", jsxs(_components.h3, {
      id: "322-\u4FEE\u6539\u6570\u636E\u5E93\u5C5E\u6027",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#322-\u4FEE\u6539\u6570\u636E\u5E93\u5C5E\u6027",
        children: "#"
      }), "3.2.2 \u4FEE\u6539\u6570\u636E\u5E93\u5C5E\u6027"]
    }), "\n", jsxs(_components.p, {
      children: ["\u8981\u4FEE\u6539\u6570\u636E\u5E93\u7684\u5C5E\u6027\uFF0C\u53EF\u4EE5\u4F7F\u7528", jsx(_components.code, {
        children: "ALTER DATABASE"
      }), "\u8BED\u53E5\uFF1A"]
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
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "DATABASE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " mydatabase "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "CHARACTER"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "SET"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " utf8mb4 "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "COLLATE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " utf8mb4_unicode_ci;"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.p, {
      children: ["\u8FD9\u91CC\u5C06\u6570\u636E\u5E93", jsx(_components.code, {
        children: "mydatabase"
      }), "\u7684\u5B57\u7B26\u96C6\u4FEE\u6539\u4E3A", jsx(_components.code, {
        children: "utf8mb4"
      }), "\uFF0C\u6821\u5BF9\u89C4\u5219\u4FEE\u6539\u4E3A", jsx(_components.code, {
        children: "utf8mb4_unicode_ci"
      }), "\u3002"]
    }), "\n", jsxs(_components.h3, {
      id: "323-\u5220\u9664\u6570\u636E\u5E93",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#323-\u5220\u9664\u6570\u636E\u5E93",
        children: "#"
      }), "3.2.3 \u5220\u9664\u6570\u636E\u5E93"]
    }), "\n", jsx(_components.p, {
      children: "\u82E5\u9700\u8981\u5220\u9664\u6570\u636E\u5E93\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0BSQL\u8BED\u53E5\uFF1A"
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
              children: "DROP"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "DATABASE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " mydatabase;"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.p, {
      children: ["\u8FD9\u6761\u547D\u4EE4\u5C06\u4F1A\u5220\u9664\u540D\u4E3A", jsx(_components.code, {
        children: "mydatabase"
      }), "\u7684\u6570\u636E\u5E93\uFF0C\u614E\u91CD\u64CD\u4F5C\u3002"]
    }), "\n", jsxs(_components.h2, {
      id: "33-\u8868\u7684\u64CD\u4F5C\u4E0E\u7BA1\u7406",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#33-\u8868\u7684\u64CD\u4F5C\u4E0E\u7BA1\u7406",
        children: "#"
      }), "3.3 \u8868\u7684\u64CD\u4F5C\u4E0E\u7BA1\u7406"]
    }), "\n", jsxs(_components.h3, {
      id: "331-\u521B\u5EFA\u6570\u636E\u8868",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#331-\u521B\u5EFA\u6570\u636E\u8868",
        children: "#"
      }), "3.3.1 \u521B\u5EFA\u6570\u636E\u8868"]
    }), "\n", jsxs(_components.p, {
      children: ["\u521B\u5EFA\u8868\u9700\u8981\u4F7F\u7528", jsx(_components.code, {
        children: "CREATE TABLE"
      }), "\u8BED\u53E5\uFF0C\u4F8B\u5982\uFF1A"]
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
    }), "\n", jsxs(_components.p, {
      children: ["\u8FD9\u521B\u5EFA\u4E86\u4E00\u4E2A\u540D\u4E3A", jsx(_components.code, {
        children: "users"
      }), "\u7684\u8868\uFF0C\u5305\u542B", jsx(_components.code, {
        children: "id"
      }), "\u3001", jsx(_components.code, {
        children: "name"
      }), "\u548C", jsx(_components.code, {
        children: "email"
      }), "\u4E09\u4E2A\u5B57\u6BB5\u3002"]
    }), "\n", jsxs(_components.h3, {
      id: "332-\u6DFB\u52A0\u5220\u9664\u4FEE\u6539\u5B57\u6BB5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#332-\u6DFB\u52A0\u5220\u9664\u4FEE\u6539\u5B57\u6BB5",
        children: "#"
      }), "3.3.2 \u6DFB\u52A0\u3001\u5220\u9664\u3001\u4FEE\u6539\u5B57\u6BB5"]
    }), "\n", jsxs(_components.p, {
      children: ["\u8981\u6DFB\u52A0\u3001\u5220\u9664\u6216\u4FEE\u6539\u8868\u4E2D\u7684\u5B57\u6BB5\uFF0C\u53EF\u4F7F\u7528", jsx(_components.code, {
        children: "ALTER TABLE"
      }), "\u8BED\u53E5\uFF0C\u4F8B\u5982\uFF1A"]
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
              children: " users"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "ADD"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " age "
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
                color: "#81A1C1"
              },
              children: "DROP"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " COLUMN email,"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "MODIFY"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " COLUMN "
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
              children: "100"
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
    }), "\n", jsxs(_components.p, {
      children: ["\u4E0A\u8FF0\u64CD\u4F5C\u5728", jsx(_components.code, {
        children: "users"
      }), "\u8868\u4E2D\u6DFB\u52A0\u4E86", jsx(_components.code, {
        children: "age"
      }), "\u5B57\u6BB5\uFF0C\u5220\u9664\u4E86", jsx(_components.code, {
        children: "email"
      }), "\u5B57\u6BB5\uFF0C\u5E76\u5C06", jsx(_components.code, {
        children: "name"
      }), "\u5B57\u6BB5\u7684\u957F\u5EA6\u4FEE\u6539\u4E3A100\u3002"]
    }), "\n", jsxs(_components.h3, {
      id: "333-\u8BBE\u5B9A\u4E3B\u952E\u4E0E\u7D22\u5F15",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#333-\u8BBE\u5B9A\u4E3B\u952E\u4E0E\u7D22\u5F15",
        children: "#"
      }), "3.3.3 \u8BBE\u5B9A\u4E3B\u952E\u4E0E\u7D22\u5F15"]
    }), "\n", jsx(_components.p, {
      children: "\u8BBE\u5B9A\u4E3B\u952E\u548C\u7D22\u5F15\u6709\u52A9\u4E8E\u63D0\u9AD8\u6570\u636E\u5E93\u7684\u6027\u80FD\uFF0C\u6BD4\u5982\uFF1A"
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
              children: " users"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
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
              children: " (id),"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
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
              children: "INDEX"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " idx_name ("
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "name"
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
    }), "\n", jsxs(_components.p, {
      children: ["\u4E0A\u8FF0\u547D\u4EE4\u5C06", jsx(_components.code, {
        children: "id"
      }), "\u5B57\u6BB5\u8BBE\u7F6E\u4E3A\u4E3B\u952E\uFF0C", jsx(_components.code, {
        children: "name"
      }), "\u5B57\u6BB5\u521B\u5EFA\u7D22\u5F15\u3002"]
    }), "\n", jsx(_components.p, {
      children: "\u4EE5\u4E0A\u662FMySQL\u6570\u636E\u5E93\u7684\u4E00\u4E9B\u57FA\u672C\u64CD\u4F5C\uFF0C\u5305\u62EC\u767B\u5F55\u6570\u636E\u5E93\u3001\u521B\u5EFA\u4E0E\u7BA1\u7406\u6570\u636E\u5E93\u3001\u8868\u7684\u64CD\u4F5C\u4E0E\u7BA1\u7406\u3002\u5728\u5B9E\u9645\u64CD\u4F5C\u4E2D\uFF0C\u719F\u7EC3\u638C\u63E1\u8FD9\u4E9B\u64CD\u4F5C\u5C06\u6709\u52A9\u4E8E\u63D0\u9AD8\u5DE5\u4F5C\u6548\u7387\u548C\u6570\u636E\u7BA1\u7406\u80FD\u529B\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "4-mysql\u6570\u636E\u5E93\u7684\u9AD8\u7EA7\u64CD\u4F5C",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#4-mysql\u6570\u636E\u5E93\u7684\u9AD8\u7EA7\u64CD\u4F5C",
        children: "#"
      }), "4. MySQL\u6570\u636E\u5E93\u7684\u9AD8\u7EA7\u64CD\u4F5C"]
    }), "\n", jsxs(_components.h2, {
      id: "41-\u6570\u636E\u5907\u4EFD\u4E0E\u6062\u590D",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#41-\u6570\u636E\u5907\u4EFD\u4E0E\u6062\u590D",
        children: "#"
      }), "4.1 \u6570\u636E\u5907\u4EFD\u4E0E\u6062\u590D"]
    }), "\n", jsx(_components.p, {
      children: "\u5728MySQL\u6570\u636E\u5E93\u7BA1\u7406\u4E2D\uFF0C\u6570\u636E\u5907\u4EFD\u4E0E\u6062\u590D\u662F\u975E\u5E38\u91CD\u8981\u7684\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u4FDD\u8BC1\u6570\u636E\u7684\u5B89\u5168\u6027\u548C\u5B8C\u6574\u6027\u3002\u672C\u8282\u5C06\u4ECB\u7ECD\u5982\u4F55\u8FDB\u884C\u6570\u636E\u5907\u4EFD\u4E0E\u6062\u590D\uFF0C\u5305\u62EC\u624B\u52A8\u5907\u4EFD\u4E0E\u8FD8\u539F\u4EE5\u53CA\u4F7F\u7528mysqldump\u547D\u4EE4\u5907\u4EFD\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "411-\u624B\u52A8\u5907\u4EFD\u4E0E\u8FD8\u539F",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#411-\u624B\u52A8\u5907\u4EFD\u4E0E\u8FD8\u539F",
        children: "#"
      }), "4.1.1 \u624B\u52A8\u5907\u4EFD\u4E0E\u8FD8\u539F"]
    }), "\n", jsx(_components.p, {
      children: "\u624B\u52A8\u5907\u4EFD\u662F\u4E00\u79CD\u7B80\u5355\u800C\u6709\u6548\u7684\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5728\u9700\u8981\u7684\u65F6\u5019\u5FEB\u901F\u5907\u4EFD\u6574\u4E2A\u6570\u636E\u5E93\u6216\u8005\u6307\u5B9A\u7684\u8868\u6570\u636E\u3002\u4EE5\u4E0B\u662F\u624B\u52A8\u5907\u4EFD\u548C\u8FD8\u539F\u7684\u6B65\u9AA4\uFF1A"
    }), "\n", jsxs(_components.h4, {
      id: "\u5907\u4EFD\u6570\u636E\u5E93",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u5907\u4EFD\u6570\u636E\u5E93",
        children: "#"
      }), "\u5907\u4EFD\u6570\u636E\u5E93\uFF1A"]
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
                color: "#D8DEE9FF"
              },
              children: "# \u5907\u4EFD\u6574\u4E2A\u6570\u636E\u5E93"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "mysqldump "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "u "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "root"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "p dbname "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " backup.sql"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "# \u5907\u4EFD\u6307\u5B9A\u8868\u6570\u636E"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "mysqldump "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "u "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "root"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "p dbname table1 table2 "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " backup.sql"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h4, {
      id: "\u8FD8\u539F\u6570\u636E\u5E93",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u8FD8\u539F\u6570\u636E\u5E93",
        children: "#"
      }), "\u8FD8\u539F\u6570\u636E\u5E93\uFF1A"]
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
                color: "#D8DEE9FF"
              },
              children: "# \u8FD8\u539F\u6574\u4E2A\u6570\u636E\u5E93"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "mysql "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "u "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "root"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "p dbname "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " backup.sql"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h3, {
      id: "412-\u4F7F\u7528mysqldump\u547D\u4EE4\u5907\u4EFD",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#412-\u4F7F\u7528mysqldump\u547D\u4EE4\u5907\u4EFD",
        children: "#"
      }), "4.1.2 \u4F7F\u7528mysqldump\u547D\u4EE4\u5907\u4EFD"]
    }), "\n", jsx(_components.p, {
      children: "mysqldump\u662FMySQL\u81EA\u5E26\u7684\u5907\u4EFD\u5DE5\u5177\uFF0C\u53EF\u4EE5\u5C06\u6570\u636E\u5E93\u7684\u7ED3\u6784\u548C\u6570\u636E\u5BFC\u51FA\u5230\u6587\u4EF6\u4E2D\uFF0C\u975E\u5E38\u65B9\u4FBF\u5FEB\u6377\u3002\u4EE5\u4E0B\u662F\u4F7F\u7528mysqldump\u547D\u4EE4\u5907\u4EFD\u7684\u6B65\u9AA4\uFF1A"
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
                color: "#D8DEE9FF"
              },
              children: "# \u5907\u4EFD\u6574\u4E2A\u6570\u636E\u5E93"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "mysqldump "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "u "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "root"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "p dbname "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " backup.sql"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "# \u5907\u4EFD\u6307\u5B9A\u8868\u6570\u636E"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "mysqldump "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "u "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "root"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "p dbname table1 table2 "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " backup.sql"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h2, {
      id: "42-\u6570\u636E\u5E93\u6027\u80FD\u4F18\u5316",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#42-\u6570\u636E\u5E93\u6027\u80FD\u4F18\u5316",
        children: "#"
      }), "4.2 \u6570\u636E\u5E93\u6027\u80FD\u4F18\u5316"]
    }), "\n", jsx(_components.p, {
      children: "\u6570\u636E\u5E93\u6027\u80FD\u4F18\u5316\u662F\u63D0\u5347\u6570\u636E\u5E93\u8BBF\u95EE\u6548\u7387\u548C\u54CD\u5E94\u901F\u5EA6\u7684\u5173\u952E\uFF0C\u80FD\u591F\u6709\u6548\u6539\u5584\u7528\u6237\u4F53\u9A8C\u548C\u7CFB\u7EDF\u7A33\u5B9A\u6027\u3002\u672C\u8282\u5C06\u4ECB\u7ECD\u7D22\u5F15\u4F18\u5316\u3001\u67E5\u8BE2\u4F18\u5316\u548C\u914D\u7F6E\u4F18\u5316\u53C2\u6570\u7B49\u5185\u5BB9\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "421-\u7D22\u5F15\u4F18\u5316",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#421-\u7D22\u5F15\u4F18\u5316",
        children: "#"
      }), "4.2.1 \u7D22\u5F15\u4F18\u5316"]
    }), "\n", jsx(_components.p, {
      children: "\u7D22\u5F15\u80FD\u591F\u52A0\u5FEB\u6570\u636E\u68C0\u7D22\u901F\u5EA6\uFF0C\u4F18\u5316\u67E5\u8BE2\u6548\u7387\u3002\u901A\u8FC7\u5728\u7ECF\u5E38\u7528\u4F5C\u68C0\u7D22\u6761\u4EF6\u7684\u5217\u4E0A\u521B\u5EFA\u7D22\u5F15\uFF0C\u53EF\u4EE5\u5927\u5927\u63D0\u9AD8\u67E5\u8BE2\u901F\u5EA6\u3002\u4EE5\u4E0B\u662F\u521B\u5EFA\u7D22\u5F15\u7684\u793A\u4F8B\uFF1A"
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
                color: "#D8DEE9FF"
              },
              children: "# \u521B\u5EFA\u5355\u5217\u7D22\u5F15"
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
              children: " table_name (column_name);"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "# \u521B\u5EFA\u591A\u5217\u7D22\u5F15"
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
              children: " table_name (column1, column2);"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h3, {
      id: "422-\u67E5\u8BE2\u4F18\u5316",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#422-\u67E5\u8BE2\u4F18\u5316",
        children: "#"
      }), "4.2.2 \u67E5\u8BE2\u4F18\u5316"]
    }), "\n", jsx(_components.p, {
      children: "\u67E5\u8BE2\u4F18\u5316\u662F\u901A\u8FC7\u5408\u7406\u8BBE\u8BA1SQL\u67E5\u8BE2\u8BED\u53E5\uFF0C\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u6570\u636E\u626B\u63CF\u548C\u8BA1\u7B97\uFF0C\u4ECE\u800C\u63D0\u9AD8\u67E5\u8BE2\u6027\u80FD\u3002\u4EE5\u4E0B\u662F\u4E00\u4E9B\u67E5\u8BE2\u4F18\u5316\u7684\u6280\u5DE7\uFF1A"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "\u9009\u62E9\u5408\u9002\u7684\u6570\u636E\u7C7B\u578B"
      }), "\n", jsx(_components.li, {
        children: "\u907F\u514DSELECT *"
      }), "\n", jsx(_components.li, {
        children: "\u4F7F\u7528JOIN\u4F18\u5316"
      }), "\n", jsx(_components.li, {
        children: "\u907F\u514D\u5728WHERE\u5B50\u53E5\u4E2D\u4F7F\u7528\u51FD\u6570"
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "423-\u914D\u7F6E\u4F18\u5316\u53C2\u6570",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#423-\u914D\u7F6E\u4F18\u5316\u53C2\u6570",
        children: "#"
      }), "4.2.3 \u914D\u7F6E\u4F18\u5316\u53C2\u6570"]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u8C03\u6574MySQL\u7684\u914D\u7F6E\u53C2\u6570\uFF0C\u53EF\u4EE5\u6709\u6548\u63D0\u5347\u6570\u636E\u5E93\u7684\u6027\u80FD\u548C\u7A33\u5B9A\u6027\u3002\u4EE5\u4E0B\u662F\u4E00\u4E9B\u5E38\u7528\u7684\u914D\u7F6E\u4F18\u5316\u53C2\u6570\uFF1A"
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "\u53C2\u6570\u540D\u79F0"
          }), jsx(_components.th, {
            children: "\u53C2\u6570\u8BF4\u660E"
          }), jsx(_components.th, {
            children: "\u9ED8\u8BA4\u503C"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "innodb_buffer_pool_size"
          }), jsx(_components.td, {
            children: "InnoDB\u7F13\u51B2\u6C60\u7684\u5927\u5C0F"
          }), jsx(_components.td, {
            children: "128MB"
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "key_buffer_size"
          }), jsx(_components.td, {
            children: "MyISAM\u7D22\u5F15\u7F13\u51B2\u533A\u5927\u5C0F"
          }), jsx(_components.td, {
            children: "8MB"
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "query_cache_size"
          }), jsx(_components.td, {
            children: "\u67E5\u8BE2\u7F13\u5B58\u7684\u5927\u5C0F"
          }), jsx(_components.td, {
            children: "0"
          })]
        })]
      })]
    }), "\n", jsxs(_components.h2, {
      id: "\u603B\u7ED3",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u603B\u7ED3",
        children: "#"
      }), "\u603B\u7ED3"]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u672C\u7AE0\u8282\u7684\u4ECB\u7ECD\uFF0C\u6211\u4EEC\u5B66\u4E60\u4E86MySQL\u6570\u636E\u5E93\u9AD8\u7EA7\u64CD\u4F5C\u4E2D\u7684\u6570\u636E\u5907\u4EFD\u4E0E\u6062\u590D\u548C\u6570\u636E\u5E93\u6027\u80FD\u4F18\u5316\u3002\u6570\u636E\u5907\u4EFD\u662F\u4FDD\u969C\u6570\u636E\u5B89\u5168\u7684\u5FC5\u8981\u624B\u6BB5\uFF0C\u800C\u6570\u636E\u5E93\u6027\u80FD\u4F18\u5316\u80FD\u591F\u63D0\u5347\u7CFB\u7EDF\u7684\u54CD\u5E94\u901F\u5EA6\u548C\u7A33\u5B9A\u6027\uFF0C\u662F\u6570\u636E\u5E93\u7BA1\u7406\u7684\u91CD\u8981\u5DE5\u4F5C\u4E4B\u4E00\u3002\u6DF1\u5165\u7406\u89E3\u5E76\u7075\u6D3B\u8FD0\u7528\u8FD9\u4E9B\u6280\u672F\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u66F4\u597D\u5730\u7BA1\u7406\u548C\u4F18\u5316MySQL\u6570\u636E\u5E93\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "5-mysql\u6570\u636E\u5E93\u7684\u5B89\u5168\u6027\u4FDD\u969C",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#5-mysql\u6570\u636E\u5E93\u7684\u5B89\u5168\u6027\u4FDD\u969C",
        children: "#"
      }), "5. MySQL\u6570\u636E\u5E93\u7684\u5B89\u5168\u6027\u4FDD\u969C"]
    }), "\n", jsxs(_components.h2, {
      id: "51-\u7528\u6237\u4E0E\u6743\u9650\u7BA1\u7406",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#51-\u7528\u6237\u4E0E\u6743\u9650\u7BA1\u7406",
        children: "#"
      }), "5.1 \u7528\u6237\u4E0E\u6743\u9650\u7BA1\u7406"]
    }), "\n", jsx(_components.p, {
      children: "\u5728MySQL\u6570\u636E\u5E93\u4E2D\uFF0C\u7528\u6237\u4E0E\u6743\u9650\u7684\u7BA1\u7406\u81F3\u5173\u91CD\u8981\u3002\u901A\u8FC7\u5408\u7406\u8BBE\u7F6E\u7528\u6237\u548C\u6743\u9650\uFF0C\u53EF\u4EE5\u63D0\u9AD8\u6570\u636E\u5E93\u7684\u5B89\u5168\u6027\u3002\u4E0B\u9762\u6211\u4EEC\u5C06\u8BE6\u7EC6\u4ECB\u7ECD\u5982\u4F55\u5728MySQL\u6570\u636E\u5E93\u4E2D\u8FDB\u884C\u7528\u6237\u4E0E\u6743\u9650\u7BA1\u7406\u64CD\u4F5C\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "511-\u521B\u5EFA\u65B0\u7528\u6237",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#511-\u521B\u5EFA\u65B0\u7528\u6237",
        children: "#"
      }), "5.1.1 \u521B\u5EFA\u65B0\u7528\u6237"]
    }), "\n", jsx(_components.p, {
      children: "\u5728MySQL\u4E2D\u65B0\u5EFA\u7528\u6237\u662F\u4FDD\u969C\u6570\u636E\u5E93\u5B89\u5168\u7684\u57FA\u7840\u6B65\u9AA4\u4E4B\u4E00\u3002\u4E0B\u9762\u662F\u521B\u5EFA\u65B0\u7528\u6237\u7684\u64CD\u4F5C\u6B65\u9AA4\uFF1A"
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
              children: "-- \u521B\u5EFA\u65B0\u7528\u6237"
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
      children: "\u89E3\u91CA\uFF1A"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "\u2018new_user\u2019\uFF1A\u65B0\u7528\u6237\u540D\u79F0"
      }), "\n", jsx(_components.li, {
        children: "\u2018localhost\u2019\uFF1A\u5141\u8BB8\u767B\u5F55\u7684\u4E3B\u673A\u5730\u5740\uFF0C\u4E5F\u53EF\u4EE5\u662F'%'"
      }), "\n", jsx(_components.li, {
        children: "\u2018password\u2019\uFF1A\u65B0\u7528\u6237\u7684\u5BC6\u7801"
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "512-\u8BBE\u7F6E\u6743\u9650\u4E0E\u89D2\u8272",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#512-\u8BBE\u7F6E\u6743\u9650\u4E0E\u89D2\u8272",
        children: "#"
      }), "5.1.2 \u8BBE\u7F6E\u6743\u9650\u4E0E\u89D2\u8272"]
    }), "\n", jsx(_components.p, {
      children: "\u4E3A\u4E86\u4FDD\u8BC1\u6570\u636E\u5E93\u5B89\u5168\uFF0C\u6211\u4EEC\u9700\u8981\u4E3A\u7528\u6237\u5206\u914D\u5408\u9002\u7684\u6743\u9650\u548C\u89D2\u8272\u3002\u4E0B\u9762\u662F\u8BBE\u7F6E\u7528\u6237\u6743\u9650\u4E0E\u89D2\u8272\u7684\u793A\u4F8B\u4EE3\u7801\uFF1A"
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
              children: "-- \u6388\u4E88\u6743\u9650"
            })
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
              children: "database"
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
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "-- \u5206\u914D\u89D2\u8272"
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
              children: "admin"
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
              children: "admin"
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
    }), "\n", jsx(_components.p, {
      children: "\u89E3\u91CA\uFF1A"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "GRANT"
        }), "\u8BED\u53E5\u7528\u4E8E\u6388\u4E88\u7528\u6237\u6743\u9650"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "CREATE ROLE"
        }), "\u7528\u4E8E\u521B\u5EFA\u89D2\u8272"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "GRANT 'admin' TO 'new_user'@'localhost'"
        }), " \u5C06\u89D2\u8272\u8D4B\u4E88\u7528\u6237"]
      }), "\n"]
    }), "\n", jsxs(_components.h2, {
      id: "52-\u5B89\u5168\u7B56\u7565\u4E0E\u9632\u62A4\u63AA\u65BD",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#52-\u5B89\u5168\u7B56\u7565\u4E0E\u9632\u62A4\u63AA\u65BD",
        children: "#"
      }), "5.2 \u5B89\u5168\u7B56\u7565\u4E0E\u9632\u62A4\u63AA\u65BD"]
    }), "\n", jsx(_components.p, {
      children: "MySQL\u6570\u636E\u5E93\u7684\u5B89\u5168\u6027\u4E0D\u4EC5\u4EC5\u4F9D\u8D56\u4E8E\u7528\u6237\u6743\u9650\u7684\u7BA1\u7406\uFF0C\u8FD8\u9700\u8981\u91C7\u53D6\u5404\u79CD\u5B89\u5168\u7B56\u7565\u548C\u9632\u62A4\u63AA\u65BD\u6765\u5E94\u5BF9\u6F5C\u5728\u7684\u5B89\u5168\u5A01\u80C1\u3002\u63A5\u4E0B\u6765\u6211\u4EEC\u5C06\u4ECB\u7ECD\u5982\u4F55\u63D0\u5347MySQL\u6570\u636E\u5E93\u7684\u5B89\u5168\u6027\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "521-\u52A0\u5BC6\u8FDE\u63A5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#521-\u52A0\u5BC6\u8FDE\u63A5",
        children: "#"
      }), "5.2.1 \u52A0\u5BC6\u8FDE\u63A5"]
    }), "\n", jsx(_components.p, {
      children: "\u4E3A\u4E86\u4FDD\u62A4\u6570\u636E\u5728\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u7684\u5B89\u5168\u6027\uFF0C\u53EF\u4EE5\u4F7F\u7528SSL/TLS\u7B49\u52A0\u5BC6\u534F\u8BAE\u6765\u52A0\u5BC6\u8FDE\u63A5\u3002\u4EE5\u4E0B\u662F\u5728MySQL\u4E2D\u5F00\u542FSSL\u7684\u7B80\u8981\u6B65\u9AA4\uFF1A"
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
              children: "-- \u5F00\u542FSSL"
            })
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
              children: " USAGE "
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
              children: "*"
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
              children: "ssl_user"
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
              children: " REQUIRE "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "SSL"
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
    }), "\n", jsxs(_components.p, {
      children: ["\u89E3\u91CA\uFF1A", jsx(_components.code, {
        children: "REQUIRE SSL"
      }), "\u6307\u5B9A\u7528\u6237\u8FDE\u63A5\u5FC5\u987B\u4F7F\u7528SSL\u534F\u8BAE"]
    }), "\n", jsxs(_components.h3, {
      id: "522-\u9632\u706B\u5899\u8BBE\u7F6E",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#522-\u9632\u706B\u5899\u8BBE\u7F6E",
        children: "#"
      }), "5.2.2 \u9632\u706B\u5899\u8BBE\u7F6E"]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u914D\u7F6E\u9632\u706B\u5899\uFF0C\u9650\u5236\u5916\u90E8\u7F51\u7EDC\u5BF9\u6570\u636E\u5E93\u7684\u8BBF\u95EE\uFF0C\u53EF\u4EE5\u6709\u6548\u589E\u5F3A\u6570\u636E\u5E93\u7684\u5B89\u5168\u6027\u3002\u4EE5\u4E0B\u662F\u8BBE\u7F6E\u9632\u706B\u5899\u89C4\u5219\u7684\u4E00\u4E2A\u793A\u4F8B\uFF1A"
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
              children: "# \u9488\u5BF9MySQL\u6570\u636E\u5E93\u7684\u9632\u706B\u5899\u89C4\u5219"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "sudo iptables -A INPUT -p tcp --dport 3306 -s trusted_ip -j ACCEPT"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u89E3\u91CA\uFF1A"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "--dport 3306"
        }), "\uFF1A\u6307\u5B9AMySQL\u7684\u7AEF\u53E3\u53F7"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "-s trusted_ip"
        }), "\uFF1A\u5141\u8BB8\u8BBF\u95EE\u7684IP\u5730\u5740"]
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u4EE5\u4E0A\u8BBE\u7F6E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6709\u6548\u52A0\u56FAMySQL\u6570\u636E\u5E93\u7684\u5B89\u5168\u9632\u62A4\uFF0C\u4FDD\u62A4\u6570\u636E\u5E93\u4E2D\u7684\u91CD\u8981\u4FE1\u606F\u4E0D\u53D7\u672A\u6388\u6743\u8BBF\u95EE\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u81F3\u6B64\uFF0C\u6211\u4EEC\u8BE6\u7EC6\u4ECB\u7ECD\u4E86MySQL\u6570\u636E\u5E93\u7684\u5B89\u5168\u6027\u4FDD\u969C\u63AA\u65BD\uFF0C\u5305\u62EC\u7528\u6237\u4E0E\u6743\u9650\u7BA1\u7406\u3001\u5B89\u5168\u7B56\u7565\u4E0E\u9632\u62A4\u63AA\u65BD\u3002\u901A\u8FC7\u5408\u7406\u8BBE\u7F6E\u7528\u6237\u6743\u9650\u548C\u52A0\u56FA\u6570\u636E\u5E93\uFF0C\u53EF\u4EE5\u6709\u6548\u9632\u8303\u6F5C\u5728\u7684\u5B89\u5168\u98CE\u9669\uFF0C\u786E\u4FDD\u6570\u636E\u5E93\u6570\u636E\u7684\u5B89\u5168\u53EF\u9760\u6027\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "6-mysql\u6570\u636E\u5E93\u7684\u6545\u969C\u6392\u9664\u4E0E\u6062\u590D",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#6-mysql\u6570\u636E\u5E93\u7684\u6545\u969C\u6392\u9664\u4E0E\u6062\u590D",
        children: "#"
      }), "6. MySQL\u6570\u636E\u5E93\u7684\u6545\u969C\u6392\u9664\u4E0E\u6062\u590D"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u4F7F\u7528MySQL\u6570\u636E\u5E93\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u96BE\u514D\u4F1A\u9047\u5230\u4E00\u4E9B\u6545\u969C\u60C5\u51B5\uFF0C\u6BD4\u5982\u6570\u636E\u5E93\u65E0\u6CD5\u542F\u52A8\u6216\u8005\u8FDE\u63A5\u5931\u8D25\u7B49\u95EE\u9898\u3002\u672C\u7AE0\u5C06\u4ECB\u7ECD\u4E00\u4E9B\u5E38\u89C1\u7684\u6545\u969C\u53CA\u76F8\u5E94\u7684\u89E3\u51B3\u65B9\u6CD5\uFF0C\u540C\u65F6\u4E5F\u4F1A\u63A2\u8BA8\u6570\u636E\u6062\u590D\u7684\u65B9\u6CD5\uFF0C\u5305\u62EC\u8BEF\u5220\u6570\u636E\u6062\u590D\u548C\u6570\u636E\u5E93\u635F\u574F\u4FEE\u590D\u3002"
    }), "\n", jsxs(_components.h2, {
      id: "61-\u5E38\u89C1\u6545\u969C\u53CA\u89E3\u51B3\u65B9\u6CD5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#61-\u5E38\u89C1\u6545\u969C\u53CA\u89E3\u51B3\u65B9\u6CD5",
        children: "#"
      }), "6.1 \u5E38\u89C1\u6545\u969C\u53CA\u89E3\u51B3\u65B9\u6CD5"]
    }), "\n", jsxs(_components.h3, {
      id: "611-\u6570\u636E\u5E93\u65E0\u6CD5\u542F\u52A8",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#611-\u6570\u636E\u5E93\u65E0\u6CD5\u542F\u52A8",
        children: "#"
      }), "6.1.1 \u6570\u636E\u5E93\u65E0\u6CD5\u542F\u52A8"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u5B9E\u9645\u64CD\u4F5C\u4E2D\uFF0C\u6709\u65F6\u4F1A\u9047\u5230MySQL\u6570\u636E\u5E93\u65E0\u6CD5\u542F\u52A8\u7684\u60C5\u51B5\u3002\u9020\u6210\u8FD9\u79CD\u95EE\u9898\u7684\u539F\u56E0\u53EF\u80FD\u6709\u591A\u79CD\uFF0C\u4F8B\u5982\u914D\u7F6E\u9519\u8BEF\u3001\u7AEF\u53E3\u88AB\u5360\u7528\u7B49\u3002\u9488\u5BF9\u8FD9\u79CD\u60C5\u51B5\uFF0C\u53EF\u4EE5\u6309\u4EE5\u4E0B\u6B65\u9AA4\u8FDB\u884C\u6392\u67E5\u548C\u89E3\u51B3\uFF1A"
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "\u68C0\u67E5MySQL\u65E5\u5FD7"
          }), "\uFF1A\u9996\u5148\u67E5\u770BMySQL\u7684\u9519\u8BEF\u65E5\u5FD7\uFF0C\u901A\u5E38\u4F4D\u4E8EMySQL\u7684\u6570\u636E\u76EE\u5F55\u4E0B\uFF0C\u53EF\u4EE5\u4ECE\u65E5\u5FD7\u4E2D\u627E\u5230\u5F15\u8D77\u6570\u636E\u5E93\u542F\u52A8\u5931\u8D25\u7684\u5177\u4F53\u539F\u56E0\u3002"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "\u68C0\u67E5\u7AEF\u53E3\u5360\u7528"
          }), "\uFF1A\u4F7F\u7528\u547D\u4EE4\u884C\u5DE5\u5177\u6216\u8005\u7CFB\u7EDF\u76D1\u63A7\u5DE5\u5177\u68C0\u67E5\u5F53\u524D\u7CFB\u7EDF\u4E2D\u662F\u5426\u6709\u5176\u4ED6\u7A0B\u5E8F\u5360\u7528\u4E86MySQL\u9700\u8981\u4F7F\u7528\u7684\u7AEF\u53E3\u3002\u5982\u679C\u7AEF\u53E3\u88AB\u5360\u7528\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u4FEE\u6539MySQL\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u7AEF\u53E3\u53F7\u3002"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "\u4FEE\u590D\u6570\u636E\u5E93\u6587\u4EF6"
          }), "\uFF1A\u6709\u65F6\u6570\u636E\u5E93\u6587\u4EF6\u635F\u574F\u4E5F\u4F1A\u5BFC\u81F4\u6570\u636E\u5E93\u65E0\u6CD5\u542F\u52A8\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6570\u636E\u5E93\u7684\u4FEE\u590D\u5DE5\u5177\u5C1D\u8BD5\u4FEE\u590D\u6570\u636E\u6587\u4EF6\u3002"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "612-\u6570\u636E\u5E93\u8FDE\u63A5\u5931\u8D25",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#612-\u6570\u636E\u5E93\u8FDE\u63A5\u5931\u8D25",
        children: "#"
      }), "6.1.2 \u6570\u636E\u5E93\u8FDE\u63A5\u5931\u8D25"]
    }), "\n", jsx(_components.p, {
      children: "\u53E6\u5916\u4E00\u4E2A\u5E38\u89C1\u7684\u95EE\u9898\u662F\u6570\u636E\u5E93\u8FDE\u63A5\u5931\u8D25\uFF0C\u8FD9\u53EF\u80FD\u662F\u7531\u4E8E\u7F51\u7EDC\u95EE\u9898\u3001\u7528\u6237\u540D\u5BC6\u7801\u9519\u8BEF\u6216\u8005\u6743\u9650\u914D\u7F6E\u4E0D\u6B63\u786E\u5F15\u8D77\u7684\u3002\u4EE5\u4E0B\u662F\u4E00\u4E9B\u89E3\u51B3\u65B9\u6CD5\uFF1A"
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5"
          }), "\uFF1A\u786E\u4FDD\u7F51\u7EDC\u6B63\u5E38\u8FDE\u63A5\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u4F7F\u7528\u547D\u4EE4\u884C\u5DE5\u5177\u6216\u8005\u5176\u4ED6\u6570\u636E\u5E93\u7BA1\u7406\u5DE5\u5177\u8FDE\u63A5\u6570\u636E\u5E93\uFF0C\u67E5\u770B\u662F\u5426\u5B58\u5728\u7F51\u7EDC\u8FDE\u63A5\u95EE\u9898\u3002"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "\u68C0\u67E5\u7528\u6237\u540D\u5BC6\u7801"
          }), "\uFF1A\u786E\u8BA4\u8FDE\u63A5\u6570\u636E\u5E93\u65F6\u4F7F\u7528\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801\u662F\u5426\u6B63\u786E\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u91CD\u65B0\u8F93\u5165\u7528\u6237\u540D\u5BC6\u7801\u8FDB\u884C\u8FDE\u63A5\u3002"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "\u68C0\u67E5\u6743\u9650\u914D\u7F6E"
          }), "\uFF1A\u68C0\u67E5\u7528\u6237\u7684\u6743\u9650\u914D\u7F6E\uFF0C\u786E\u4FDD\u6240\u4F7F\u7528\u7684\u8D26\u6237\u62E5\u6709\u8DB3\u591F\u7684\u6743\u9650\u8BBF\u95EE\u76EE\u6807\u6570\u636E\u5E93\u3002"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsxs(_components.h2, {
      id: "62-\u6570\u636E\u5E93\u6062\u590D\u65B9\u6CD5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#62-\u6570\u636E\u5E93\u6062\u590D\u65B9\u6CD5",
        children: "#"
      }), "6.2 \u6570\u636E\u5E93\u6062\u590D\u65B9\u6CD5"]
    }), "\n", jsxs(_components.h3, {
      id: "621-\u8BEF\u5220\u6570\u636E\u6062\u590D",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#621-\u8BEF\u5220\u6570\u636E\u6062\u590D",
        children: "#"
      }), "6.2.1 \u8BEF\u5220\u6570\u636E\u6062\u590D"]
    }), "\n", jsx(_components.p, {
      children: "\u5F53\u8BEF\u5220\u4E86\u6570\u636E\u5E93\u4E2D\u7684\u91CD\u8981\u6570\u636E\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6570\u636E\u5E93\u5907\u4EFD\u8FDB\u884C\u6062\u590D\u3002\u4EE5\u4E0B\u662F\u4E00\u822C\u7684\u6062\u590D\u6D41\u7A0B\uFF1A"
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "\u67E5\u627E\u5907\u4EFD"
          }), "\uFF1A\u9996\u5148\u68C0\u67E5\u662F\u5426\u6709\u6570\u636E\u5E93\u5907\u4EFD\u6587\u4EF6\uFF0C\u53EF\u4EE5\u662F\u4F7F\u7528\u7B2C\u4E09\u65B9\u5907\u4EFD\u5DE5\u5177\u81EA\u52A8\u751F\u6210\u7684\u5907\u4EFD\u6587\u4EF6\uFF0C\u6216\u8005\u624B\u52A8\u521B\u5EFA\u7684\u5907\u4EFD\u6587\u4EF6\u3002"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "\u6062\u590D\u6570\u636E"
          }), "\uFF1A\u4F7F\u7528\u5907\u4EFD\u6587\u4EF6\u8FDB\u884C\u6570\u636E\u6062\u590D\uFF0C\u53EF\u4EE5\u91C7\u7528\u6570\u636E\u5E93\u6062\u590D\u5DE5\u5177\uFF0C\u6216\u8005\u901A\u8FC7\u547D\u4EE4\u884C\u5DE5\u5177\u5BFC\u5165\u5907\u4EFD\u6587\u4EF6\u8FDB\u884C\u6062\u590D\u64CD\u4F5C\u3002"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "622-\u6570\u636E\u5E93\u635F\u574F\u4FEE\u590D",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#622-\u6570\u636E\u5E93\u635F\u574F\u4FEE\u590D",
        children: "#"
      }), "6.2.2 \u6570\u636E\u5E93\u635F\u574F\u4FEE\u590D"]
    }), "\n", jsx(_components.p, {
      children: "\u6570\u636E\u5E93\u635F\u574F\u53EF\u80FD\u4F1A\u5BFC\u81F4\u90E8\u5206\u6570\u636E\u65E0\u6CD5\u8BBF\u95EE\u6216\u8005\u6570\u636E\u5E93\u65E0\u6CD5\u6B63\u5E38\u5DE5\u4F5C\u3002\u4EE5\u4E0B\u662F\u4E00\u822C\u7684\u6570\u636E\u5E93\u635F\u574F\u4FEE\u590D\u65B9\u6CD5\uFF1A"
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "\u4F7F\u7528MySQL\u81EA\u5E26\u5DE5\u5177"
          }), "\uFF1AMySQL\u63D0\u4F9B\u4E86\u4E00\u4E9B\u6570\u636E\u5E93\u4FEE\u590D\u5DE5\u5177\uFF0C\u6BD4\u5982", jsx(_components.code, {
            children: "mysqlcheck"
          }), "\uFF0C\u53EF\u4EE5\u4F7F\u7528\u8BE5\u5DE5\u5177\u5BF9\u6570\u636E\u5E93\u8FDB\u884C\u68C0\u6D4B\u548C\u4FEE\u590D\u3002"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "\u624B\u52A8\u4FEE\u590D"
          }), "\uFF1A\u5BF9\u4E8E\u4E00\u4E9B\u8F83\u4E3A\u4E25\u91CD\u7684\u6570\u636E\u5E93\u635F\u574F\u60C5\u51B5\uFF0C\u53EF\u80FD\u9700\u8981\u624B\u52A8\u4FEE\u590D\u6570\u636E\u5E93\u6587\u4EF6\uFF0C\u5EFA\u8BAE\u5728\u64CD\u4F5C\u524D\u505A\u597D\u6570\u636E\u5E93\u5907\u4EFD\u4EE5\u9632\u610F\u5916\u53D1\u751F\u3002"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u4EE5\u4E0A\u662FMySQL\u6570\u636E\u5E93\u7684\u6545\u969C\u6392\u9664\u4E0E\u6062\u590D\u5185\u5BB9\uFF0C\u5E0C\u671B\u53EF\u4EE5\u5E2E\u52A9\u60A8\u66F4\u597D\u5730\u5904\u7406\u5728\u6570\u636E\u5E93\u64CD\u4F5C\u4E2D\u9047\u5230\u7684\u5404\u79CD\u6545\u969C\u60C5\u51B5\u3002"
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

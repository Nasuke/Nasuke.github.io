import { jsx, jsxs, Fragment } from "react/jsx-runtime";
const frontmatter = void 0;
const toc = [{
  "id": "21-\u7F51\u7EDC\u8FDE\u63A5\u76F8\u5173\u6392\u67E5",
  "text": "2.1 \u7F51\u7EDC\u8FDE\u63A5\u76F8\u5173\u6392\u67E5",
  "depth": 3
}, {
  "id": "211-\u68C0\u67E5\u7F51\u7EDC\u7A33\u5B9A\u6027",
  "text": "2.1.1 \u68C0\u67E5\u7F51\u7EDC\u7A33\u5B9A\u6027",
  "depth": 4
}, {
  "id": "212-\u786E\u8BA4\u9632\u706B\u5899\u8BBE\u7F6E",
  "text": "2.1.2 \u786E\u8BA4\u9632\u706B\u5899\u8BBE\u7F6E",
  "depth": 4
}, {
  "id": "22-mysql\u914D\u7F6E\u76F8\u5173\u6392\u67E5",
  "text": "2.2 MySQL\u914D\u7F6E\u76F8\u5173\u6392\u67E5",
  "depth": 3
}, {
  "id": "221-\u68C0\u67E5mysql\u670D\u52A1\u8FD0\u884C\u72B6\u6001",
  "text": "2.2.1 \u68C0\u67E5MySQL\u670D\u52A1\u8FD0\u884C\u72B6\u6001",
  "depth": 4
}, {
  "id": "222-\u786E\u8BA4mysql\u8FDE\u63A5\u6570\u8BBE\u7F6E",
  "text": "2.2.2 \u786E\u8BA4MySQL\u8FDE\u63A5\u6570\u8BBE\u7F6E",
  "depth": 4
}, {
  "id": "23-idea\u914D\u7F6E\u76F8\u5173\u6392\u67E5",
  "text": "2.3 IDEA\u914D\u7F6E\u76F8\u5173\u6392\u67E5",
  "depth": 3
}, {
  "id": "231-\u68C0\u67E5idea\u8FDE\u63A5\u53C2\u6570\u8BBE\u7F6E",
  "text": "2.3.1 \u68C0\u67E5IDEA\u8FDE\u63A5\u53C2\u6570\u8BBE\u7F6E",
  "depth": 4
}, {
  "id": "232-\u786E\u8BA4idea\u7248\u672C\u517C\u5BB9\u6027",
  "text": "2.3.2 \u786E\u8BA4IDEA\u7248\u672C\u517C\u5BB9\u6027",
  "depth": 4
}, {
  "id": "31-\u8C03\u6574idea\u8FDE\u63A5\u8D85\u65F6\u8BBE\u7F6E",
  "text": "3.1 \u8C03\u6574IDEA\u8FDE\u63A5\u8D85\u65F6\u8BBE\u7F6E",
  "depth": 3
}, {
  "id": "311-\u4FEE\u6539idea\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4",
  "text": "3.1.1 \u4FEE\u6539IDEA\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4",
  "depth": 4
}, {
  "id": "312-\u5229\u7528\u8FDE\u63A5\u6C60\u4F18\u5316\u8FDE\u63A5",
  "text": "3.1.2 \u5229\u7528\u8FDE\u63A5\u6C60\u4F18\u5316\u8FDE\u63A5",
  "depth": 4
}, {
  "id": "32-\u4F18\u5316mysql\u6027\u80FD\u89E3\u51B3\u8D85\u65F6",
  "text": "3.2 \u4F18\u5316MySQL\u6027\u80FD\u89E3\u51B3\u8D85\u65F6",
  "depth": 3
}, {
  "id": "321-\u67E5\u8BE2\u4F18\u5316\u4E0E\u7D22\u5F15\u6DFB\u52A0",
  "text": "3.2.1 \u67E5\u8BE2\u4F18\u5316\u4E0E\u7D22\u5F15\u6DFB\u52A0",
  "depth": 4
}, {
  "id": "322-\u8C03\u6574mysql\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4",
  "text": "3.2.2 \u8C03\u6574MySQL\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4",
  "depth": 4
}, {
  "id": "41-\u65E5\u5FD7\u6392\u67E5\u65B9\u6CD5",
  "text": "4.1 \u65E5\u5FD7\u6392\u67E5\u65B9\u6CD5",
  "depth": 3
}, {
  "id": "411-\u67E5\u770Bidea\u65E5\u5FD7",
  "text": "4.1.1 \u67E5\u770BIDEA\u65E5\u5FD7",
  "depth": 4
}, {
  "id": "412-\u5206\u6790mysql\u9519\u8BEF\u65E5\u5FD7",
  "text": "4.1.2 \u5206\u6790MySQL\u9519\u8BEF\u65E5\u5FD7",
  "depth": 4
}, {
  "id": "42-\u6392\u67E5\u5DE5\u5177\u63A8\u8350",
  "text": "4.2 \u6392\u67E5\u5DE5\u5177\u63A8\u8350",
  "depth": 3
}, {
  "id": "421-\u4F7F\u7528wireshark\u6293\u5305\u5206\u6790",
  "text": "4.2.1 \u4F7F\u7528Wireshark\u6293\u5305\u5206\u6790",
  "depth": 4
}, {
  "id": "422-\u4F7F\u7528mysql-workbench\u68C0\u6D4B\u8FDE\u63A5\u95EE\u9898",
  "text": "4.2.2 \u4F7F\u7528MySQL Workbench\u68C0\u6D4B\u8FDE\u63A5\u95EE\u9898",
  "depth": 4
}, {
  "id": "51-\u5B9E\u9645\u6848\u4F8B\u5206\u6790",
  "text": "5.1 \u5B9E\u9645\u6848\u4F8B\u5206\u6790",
  "depth": 3
}, {
  "id": "52-\u5FEB\u901F\u5B9A\u4F4D\u95EE\u9898\u63D0\u793A",
  "text": "5.2 \u5FEB\u901F\u5B9A\u4F4D\u95EE\u9898\u63D0\u793A",
  "depth": 3
}, {
  "id": "53-\u5E38\u89C1\u89E3\u51B3\u65B9\u6848\u5206\u4EAB",
  "text": "5.3 \u5E38\u89C1\u89E3\u51B3\u65B9\u6848\u5206\u4EAB",
  "depth": 3
}];
const title = "5. \u5B9E\u6218\u6848\u4F8B\u5206\u4EAB\u4E0E\u7ECF\u9A8C\u603B\u7ED3";
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
    strong: "strong",
    ol: "ol",
    li: "li",
    ul: "ul",
    hr: "hr"
  }, props.components);
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "1-\u7406\u89E3idea\u4E0Emysql\u8FDE\u63A5\u8D85\u65F6\u95EE\u9898",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#1-\u7406\u89E3idea\u4E0Emysql\u8FDE\u63A5\u8D85\u65F6\u95EE\u9898",
        children: "#"
      }), "1. \u7406\u89E3IDEA\u4E0EMySQL\u8FDE\u63A5\u8D85\u65F6\u95EE\u9898"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u8F6F\u4EF6\u5F00\u53D1\u4E2D\uFF0CIDEA\u4F5C\u4E3A\u4E00\u6B3E\u5F3A\u5927\u7684\u96C6\u6210\u5F00\u53D1\u73AF\u5883\uFF0C\u5E38\u7528\u4E8E\u4E0EMySQL\u6570\u636E\u5E93\u8FDB\u884C\u8FDE\u63A5\u3002\u7136\u800C\uFF0C\u6709\u65F6\u5019\u5728\u4F7F\u7528IDEA\u8FDE\u63A5MySQL\u7684\u8FC7\u7A0B\u4E2D\u4F1A\u9047\u5230\u8FDE\u63A5\u8D85\u65F6\u7684\u95EE\u9898\uFF0C\u4F7F\u5F97\u5F00\u53D1\u548C\u8C03\u8BD5\u53D8\u5F97\u56F0\u96BE\u3002\u4E3A\u4E86\u66F4\u597D\u5730\u7406\u89E3IDEA\u4E0EMySQL\u8FDE\u63A5\u8D85\u65F6\u95EE\u9898\uFF0C\u6211\u4EEC\u9700\u8981\u5148\u6DF1\u5165\u4E86\u89E3\u8FDE\u63A5\u8D85\u65F6\u7684\u5B9A\u4E49\u3001\u539F\u56E0\u548C\u5F71\u54CD\uFF0C\u4ECE\u800C\u4E3A\u540E\u7EED\u7684\u6392\u67E5\u548C\u89E3\u51B3\u5DE5\u4F5C\u5960\u5B9A\u57FA\u7840\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u5728\u672C\u7AE0\u4E2D\uFF0C\u6211\u4EEC\u5C06\u63A2\u8BA8IDEA\u4E0EMySQL\u8FDE\u63A5\u8D85\u65F6\u95EE\u9898\u7684\u6839\u672C\u539F\u56E0\uFF0C\u4EE5\u53CA\u5982\u4F55\u4ECE\u76EE\u6807\u7684\u89D2\u5EA6\u51FA\u53D1\uFF0C\u901A\u8FC7\u5408\u7406\u7684\u8C03\u7528\u6280\u5DE7\u6765\u89E3\u51B3\u8FD9\u4E00\u5E38\u89C1\u95EE\u9898\u3002\u6211\u4EEC\u5C06\u91CD\u70B9\u4ECB\u7ECD\u8FDE\u63A5\u8D85\u65F6\u7684\u6F5C\u5728\u539F\u56E0\uFF0C\u4EE5\u53CA\u5982\u4F55\u901A\u8FC7\u6709\u6548\u7684\u6392\u67E5\u548C\u8C03\u8BD5\u6280\u5DE7\uFF0C\u89E3\u51B3IDEA\u8FDE\u63A5MySQL\u8D85\u65F6\u95EE\u9898\uFF0C\u63D0\u5347\u5F00\u53D1\u6548\u7387\u548C\u4F53\u9A8C\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "2-\u6392\u67E5idea\u8FDE\u63A5mysql\u8D85\u65F6\u7684\u5E38\u89C1\u539F\u56E0",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#2-\u6392\u67E5idea\u8FDE\u63A5mysql\u8D85\u65F6\u7684\u5E38\u89C1\u539F\u56E0",
        children: "#"
      }), "2. \u6392\u67E5IDEA\u8FDE\u63A5MySQL\u8D85\u65F6\u7684\u5E38\u89C1\u539F\u56E0"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u6392\u67E5IDEA\u8FDE\u63A5MySQL\u8D85\u65F6\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u9996\u5148\u9700\u8981\u4E86\u89E3\u9020\u6210\u8FDE\u63A5\u8D85\u65F6\u7684\u5E38\u89C1\u539F\u56E0\u3002\u901A\u8FC7\u5BF9\u7F51\u7EDC\u8FDE\u63A5\u3001MySQL\u914D\u7F6E\u4EE5\u53CAIDEA\u914D\u7F6E\u7684\u6392\u67E5\uFF0C\u53EF\u4EE5\u6709\u6548\u5730\u5B9A\u4F4D\u95EE\u9898\u6240\u5728\uFF0C\u5E76\u91C7\u53D6\u76F8\u5E94\u7684\u89E3\u51B3\u63AA\u65BD\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "21-\u7F51\u7EDC\u8FDE\u63A5\u76F8\u5173\u6392\u67E5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#21-\u7F51\u7EDC\u8FDE\u63A5\u76F8\u5173\u6392\u67E5",
        children: "#"
      }), "2.1 \u7F51\u7EDC\u8FDE\u63A5\u76F8\u5173\u6392\u67E5"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u8FDE\u63A5\u8D85\u65F6\u7684\u95EE\u9898\u6392\u67E5\u4E2D\uFF0C\u7F51\u7EDC\u8FDE\u63A5\u662F\u4E00\u4E2A\u91CD\u8981\u7684\u65B9\u9762\u3002\u4EE5\u4E0B\u662F\u4E00\u4E9B\u5E38\u89C1\u7684\u7F51\u7EDC\u8FDE\u63A5\u76F8\u5173\u6392\u67E5\u65B9\u6CD5\uFF1A"
    }), "\n", jsxs(_components.h4, {
      id: "211-\u68C0\u67E5\u7F51\u7EDC\u7A33\u5B9A\u6027",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#211-\u68C0\u67E5\u7F51\u7EDC\u7A33\u5B9A\u6027",
        children: "#"
      }), "2.1.1 \u68C0\u67E5\u7F51\u7EDC\u7A33\u5B9A\u6027"]
    }), "\n", jsx(_components.p, {
      children: "\u7F51\u7EDC\u7A33\u5B9A\u6027\u5BF9\u4E8EIDEA\u8FDE\u63A5MySQL\u81F3\u5173\u91CD\u8981\u3002\u786E\u4FDD\u7F51\u7EDC\u8FDE\u63A5\u6B63\u5E38\u8FD0\u884C\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u6B65\u9AA4\u8FDB\u884C\u6392\u67E5\uFF1A"
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
              children: "// \u68C0\u67E5\u7F51\u7EDC\u662F\u5426\u7A33\u5B9A"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "ping "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "www"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "mysql"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "com"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u5982\u679C\u63D0\u793A\u7F51\u7EDC\u8FDE\u63A5\u8D85\u65F6\u6216\u4E22\u5305\u73B0\u8C61\uFF0C\u5219\u9700\u8981\u8FDB\u4E00\u6B65\u89E3\u51B3\u7F51\u7EDC\u7A33\u5B9A\u6027\u95EE\u9898\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "212-\u786E\u8BA4\u9632\u706B\u5899\u8BBE\u7F6E",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#212-\u786E\u8BA4\u9632\u706B\u5899\u8BBE\u7F6E",
        children: "#"
      }), "2.1.2 \u786E\u8BA4\u9632\u706B\u5899\u8BBE\u7F6E"]
    }), "\n", jsx(_components.p, {
      children: "\u9632\u706B\u5899\u53EF\u80FD\u4F1A\u963B\u6B62IDEA\u4E0EMySQL\u7684\u6B63\u5E38\u901A\u4FE1\uFF0C\u5BFC\u81F4\u8FDE\u63A5\u8D85\u65F6\u95EE\u9898\u3002\u68C0\u67E5\u9632\u706B\u5899\u8BBE\u7F6E\u662F\u5426\u7981\u6B62\u4E86IDEA\u4E0EMySQL\u7684\u901A\u4FE1\u7AEF\u53E3\uFF1A"
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
              children: "// \u67E5\u770B\u9632\u706B\u5899\u89C4\u5219"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "iptables -L"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u5982\u679C\u53D1\u73B0\u76F8\u5173\u89C4\u5219\u9650\u5236\u4E86IDEA\u4E0EMySQL\u7684\u8FDE\u63A5\u7AEF\u53E3\uFF0C\u9700\u8981\u8C03\u6574\u9632\u706B\u5899\u8BBE\u7F6E\u4EE5\u5141\u8BB8\u901A\u4FE1\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "22-mysql\u914D\u7F6E\u76F8\u5173\u6392\u67E5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#22-mysql\u914D\u7F6E\u76F8\u5173\u6392\u67E5",
        children: "#"
      }), "2.2 MySQL\u914D\u7F6E\u76F8\u5173\u6392\u67E5"]
    }), "\n", jsx(_components.p, {
      children: "MySQL\u7684\u914D\u7F6E\u4E5F\u662F\u5BFC\u81F4\u8FDE\u63A5\u8D85\u65F6\u7684\u5E38\u89C1\u539F\u56E0\u4E4B\u4E00\u3002\u4EE5\u4E0B\u662F\u4E00\u4E9BMySQL\u914D\u7F6E\u76F8\u5173\u6392\u67E5\u65B9\u6CD5\uFF1A"
    }), "\n", jsxs(_components.h4, {
      id: "221-\u68C0\u67E5mysql\u670D\u52A1\u8FD0\u884C\u72B6\u6001",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#221-\u68C0\u67E5mysql\u670D\u52A1\u8FD0\u884C\u72B6\u6001",
        children: "#"
      }), "2.2.1 \u68C0\u67E5MySQL\u670D\u52A1\u8FD0\u884C\u72B6\u6001"]
    }), "\n", jsx(_components.p, {
      children: "\u9996\u5148\u9700\u8981\u786E\u4FDDMySQL\u670D\u52A1\u6B63\u5E38\u8FD0\u884C\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u68C0\u67E5MySQL\u7684\u72B6\u6001\uFF1A"
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
              children: "// \u68C0\u67E5MySQL\u670D\u52A1\u72B6\u6001"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "systemctl status mysql"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u5982\u679CMySQL\u670D\u52A1\u672A\u6B63\u5E38\u542F\u52A8\u6216\u5B58\u5728\u5F02\u5E38\uFF0C\u9700\u8981\u53CA\u65F6\u6392\u67E5\u5E76\u4FEE\u590D\u95EE\u9898\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "222-\u786E\u8BA4mysql\u8FDE\u63A5\u6570\u8BBE\u7F6E",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#222-\u786E\u8BA4mysql\u8FDE\u63A5\u6570\u8BBE\u7F6E",
        children: "#"
      }), "2.2.2 \u786E\u8BA4MySQL\u8FDE\u63A5\u6570\u8BBE\u7F6E"]
    }), "\n", jsx(_components.p, {
      children: "MySQL\u8FDE\u63A5\u6570\u8BBE\u7F6E\u4E0D\u5F53\u4E5F\u4F1A\u5BFC\u81F4\u8FDE\u63A5\u8D85\u65F6\u95EE\u9898\u3002\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0BSQL\u8BED\u53E5\u67E5\u8BE2MySQL\u8FDE\u63A5\u6570\u8BBE\u7F6E\uFF1A"
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
              children: "-- \u67E5\u8BE2MySQL\u8FDE\u63A5\u6570\u8BBE\u7F6E"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "show variables "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "like"
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
              children: "max_connections"
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
      children: "\u5982\u679C\u8FDE\u63A5\u6570\u8BBE\u7F6E\u8FC7\u4F4E\u6216\u8FDE\u63A5\u8FC7\u591A\u5BFC\u81F4\u8D44\u6E90\u4E0D\u8DB3\uFF0C\u9700\u8981\u9002\u5F53\u8C03\u6574MySQL\u7684\u8FDE\u63A5\u6570\u914D\u7F6E\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "23-idea\u914D\u7F6E\u76F8\u5173\u6392\u67E5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#23-idea\u914D\u7F6E\u76F8\u5173\u6392\u67E5",
        children: "#"
      }), "2.3 IDEA\u914D\u7F6E\u76F8\u5173\u6392\u67E5"]
    }), "\n", jsx(_components.p, {
      children: "\u9664\u4E86\u7F51\u7EDC\u8FDE\u63A5\u548CMySQL\u914D\u7F6E\u5916\uFF0CIDEA\u81EA\u8EAB\u7684\u914D\u7F6E\u4E5F\u53EF\u80FD\u5BFC\u81F4\u8FDE\u63A5\u8D85\u65F6\u3002\u4EE5\u4E0B\u662F\u4E00\u4E9BIDEA\u914D\u7F6E\u76F8\u5173\u7684\u6392\u67E5\u65B9\u6CD5\uFF1A"
    }), "\n", jsxs(_components.h4, {
      id: "231-\u68C0\u67E5idea\u8FDE\u63A5\u53C2\u6570\u8BBE\u7F6E",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#231-\u68C0\u67E5idea\u8FDE\u63A5\u53C2\u6570\u8BBE\u7F6E",
        children: "#"
      }), "2.3.1 \u68C0\u67E5IDEA\u8FDE\u63A5\u53C2\u6570\u8BBE\u7F6E"]
    }), "\n", jsx(_components.p, {
      children: "\u68C0\u67E5IDEA\u4E2D\u4E0EMySQL\u8FDE\u63A5\u76F8\u5173\u7684\u53C2\u6570\u8BBE\u7F6E\uFF0C\u786E\u4FDD\u914D\u7F6E\u6B63\u786E\u65E0\u8BEF\uFF0C\u53EF\u4EE5\u4ECEIDEA\u7684\u6570\u636E\u5E93\u8FDE\u63A5\u8BBE\u7F6E\u4E2D\u8FDB\u884C\u67E5\u770B\u548C\u8C03\u6574\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "232-\u786E\u8BA4idea\u7248\u672C\u517C\u5BB9\u6027",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#232-\u786E\u8BA4idea\u7248\u672C\u517C\u5BB9\u6027",
        children: "#"
      }), "2.3.2 \u786E\u8BA4IDEA\u7248\u672C\u517C\u5BB9\u6027"]
    }), "\n", jsx(_components.p, {
      children: "\u6709\u65F6\u5019\uFF0CIDEA\u7248\u672C\u4E0EMySQL\u7684\u517C\u5BB9\u6027\u95EE\u9898\u4E5F\u4F1A\u5BFC\u81F4\u8FDE\u63A5\u8D85\u65F6\u3002\u786E\u4FDD\u4F7F\u7528\u7684IDEA\u7248\u672C\u4E0EMySQL\u7248\u672C\u517C\u5BB9\uFF0C\u53EF\u4EE5\u51CF\u5C11\u4E00\u4E9B\u610F\u5916\u95EE\u9898\u7684\u51FA\u73B0\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u4EE5\u4E0A\u5BF9\u7F51\u7EDC\u8FDE\u63A5\u3001MySQL\u914D\u7F6E\u548CIDEA\u914D\u7F6E\u7684\u5E38\u89C1\u6392\u67E5\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u521D\u6B65\u4E86\u89E3\u8FDE\u63A5\u8D85\u65F6\u95EE\u9898\u7684\u53EF\u80FD\u539F\u56E0\uFF0C\u5E76\u4E3A\u540E\u7EED\u7684\u89E3\u51B3\u63D0\u4F9B\u65B9\u5411\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "3-\u89E3\u51B3idea\u8FDE\u63A5mysql\u8D85\u65F6\u7684\u5B9E\u7528\u65B9\u6CD5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#3-\u89E3\u51B3idea\u8FDE\u63A5mysql\u8D85\u65F6\u7684\u5B9E\u7528\u65B9\u6CD5",
        children: "#"
      }), "3. \u89E3\u51B3IDEA\u8FDE\u63A5MySQL\u8D85\u65F6\u7684\u5B9E\u7528\u65B9\u6CD5"]
    }), "\n", jsx(_components.p, {
      children: "IDEA\u8FDE\u63A5MySQL\u8D85\u65F6\u662F\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u5E38\u89C1\u7684\u95EE\u9898\uFF0C\u672C\u7AE0\u5C06\u4ECB\u7ECD\u4E00\u4E9B\u5B9E\u7528\u65B9\u6CD5\u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u540C\u65F6\u63D0\u4F9B\u4E00\u4E9B\u4F18\u5316\u5EFA\u8BAE\uFF0C\u8BA9\u4F60\u66F4\u9AD8\u6548\u5730\u4F7F\u7528IDEA\u8FDE\u63A5MySQL\u6570\u636E\u5E93\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "31-\u8C03\u6574idea\u8FDE\u63A5\u8D85\u65F6\u8BBE\u7F6E",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#31-\u8C03\u6574idea\u8FDE\u63A5\u8D85\u65F6\u8BBE\u7F6E",
        children: "#"
      }), "3.1 \u8C03\u6574IDEA\u8FDE\u63A5\u8D85\u65F6\u8BBE\u7F6E"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u89E3\u51B3IDEA\u8FDE\u63A5MySQL\u8D85\u65F6\u95EE\u9898\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u8C03\u6574IDEA\u7684\u8FDE\u63A5\u8D85\u65F6\u8BBE\u7F6E\u6765\u63D0\u9AD8\u8FDE\u63A5\u7A33\u5B9A\u6027\u548C\u901F\u5EA6\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "311-\u4FEE\u6539idea\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#311-\u4FEE\u6539idea\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4",
        children: "#"
      }), "3.1.1 \u4FEE\u6539IDEA\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4"]
    }), "\n", jsx(_components.p, {
      children: "\u9996\u5148\uFF0C\u6211\u4EEC\u9700\u8981\u6253\u5F00IDEA\u7684\u8BBE\u7F6E\uFF0C\u627E\u5230\u6570\u636E\u5E93\u8FDE\u63A5\u76F8\u5173\u7684\u914D\u7F6E\u9009\u9879\u3002\u5728\u8FDE\u63A5\u8BBE\u7F6E\u4E2D\uFF0C\u4E00\u822C\u4F1A\u6709\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\u7684\u9009\u9879\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u9ED8\u8BA4\u7684\u8D85\u65F6\u65F6\u95F4\u9002\u5F53\u5EF6\u957F\uFF0C\u901A\u5E38\u5EFA\u8BAE\u572830\u79D2\u52301\u5206\u949F\u4E4B\u95F4\uFF0C\u4EE5\u786E\u4FDD\u8FDE\u63A5\u7A33\u5B9A\u3002"
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
              children: "// \u8BBE\u7F6E\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\u4E3A60\u79D2"
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
              children: "setConnectionTimeout"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "60000"
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
      children: "\u901A\u8FC7\u5EF6\u957F\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\uFF0C\u53EF\u4EE5\u51CF\u5C11\u56E0\u4E3A\u7F51\u7EDC\u6CE2\u52A8\u6216\u670D\u52A1\u5668\u54CD\u5E94\u5EF6\u8FDF\u5BFC\u81F4\u7684\u8FDE\u63A5\u8D85\u65F6\u9519\u8BEF\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "312-\u5229\u7528\u8FDE\u63A5\u6C60\u4F18\u5316\u8FDE\u63A5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#312-\u5229\u7528\u8FDE\u63A5\u6C60\u4F18\u5316\u8FDE\u63A5",
        children: "#"
      }), "3.1.2 \u5229\u7528\u8FDE\u63A5\u6C60\u4F18\u5316\u8FDE\u63A5"]
    }), "\n", jsx(_components.p, {
      children: "\u53E6\u5916\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u8003\u8651\u4F7F\u7528\u8FDE\u63A5\u6C60\u6765\u7BA1\u7406\u6570\u636E\u5E93\u8FDE\u63A5\uFF0C\u907F\u514D\u9891\u7E41\u5730\u521B\u5EFA\u548C\u5173\u95ED\u8FDE\u63A5\uFF0C\u63D0\u9AD8\u8FDE\u63A5\u7684\u590D\u7528\u6027\u548C\u6548\u7387\u3002"
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
              children: "// \u4F7F\u7528\u8FDE\u63A5\u6C60\u7BA1\u7406\u6570\u636E\u5E93\u8FDE\u63A5"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "ConnectionPool"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "pool"
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
              children: "ConnectionPool"
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
              children: "conn"
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
              children: "pool"
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
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u8FDE\u63A5\u6C60\u53EF\u4EE5\u5728\u521D\u59CB\u5316\u65F6\u521B\u5EFA\u4E00\u5B9A\u6570\u91CF\u7684\u8FDE\u63A5\uFF0C\u5E76\u5728\u9700\u8981\u65F6\u4ECE\u6C60\u4E2D\u83B7\u53D6\u53EF\u7528\u8FDE\u63A5\uFF0C\u51CF\u5C11\u8FDE\u63A5\u7684\u521B\u5EFA\u548C\u9500\u6BC1\uFF0C\u63D0\u5347\u6027\u80FD\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "32-\u4F18\u5316mysql\u6027\u80FD\u89E3\u51B3\u8D85\u65F6",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#32-\u4F18\u5316mysql\u6027\u80FD\u89E3\u51B3\u8D85\u65F6",
        children: "#"
      }), "3.2 \u4F18\u5316MySQL\u6027\u80FD\u89E3\u51B3\u8D85\u65F6"]
    }), "\n", jsx(_components.p, {
      children: "\u9664\u4E86\u8C03\u6574IDEA\u7684\u8FDE\u63A5\u8BBE\u7F6E\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u901A\u8FC7\u4F18\u5316MySQL\u6570\u636E\u5E93\u7684\u6027\u80FD\u6765\u89E3\u51B3\u8FDE\u63A5\u8D85\u65F6\u7684\u95EE\u9898\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "321-\u67E5\u8BE2\u4F18\u5316\u4E0E\u7D22\u5F15\u6DFB\u52A0",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#321-\u67E5\u8BE2\u4F18\u5316\u4E0E\u7D22\u5F15\u6DFB\u52A0",
        children: "#"
      }), "3.2.1 \u67E5\u8BE2\u4F18\u5316\u4E0E\u7D22\u5F15\u6DFB\u52A0"]
    }), "\n", jsx(_components.p, {
      children: "\u5728MySQL\u4E2D\uFF0C\u7ECF\u5E38\u4F1A\u51FA\u73B0\u67E5\u8BE2\u6027\u80FD\u8F83\u4F4E\u5BFC\u81F4\u8FDE\u63A5\u8D85\u65F6\u7684\u60C5\u51B5\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4F18\u5316SQL\u67E5\u8BE2\u8BED\u53E5\uFF0C\u6DFB\u52A0\u9002\u5F53\u7684\u7D22\u5F15\u6765\u63D0\u5347\u67E5\u8BE2\u6548\u7387\u3002"
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
              children: "-- \u6DFB\u52A0\u7D22\u5F15"
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
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u5BF9\u7ECF\u5E38\u67E5\u8BE2\u7684\u5B57\u6BB5\u6DFB\u52A0\u7D22\u5F15\uFF0C\u53EF\u4EE5\u52A0\u5FEB\u67E5\u8BE2\u901F\u5EA6\uFF0C\u51CF\u5C11\u8FDE\u63A5\u8D85\u65F6\u7684\u6982\u7387\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "322-\u8C03\u6574mysql\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#322-\u8C03\u6574mysql\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4",
        children: "#"
      }), "3.2.2 \u8C03\u6574MySQL\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4"]
    }), "\n", jsx(_components.p, {
      children: "\u6B64\u5916\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u5728MySQL\u914D\u7F6E\u4E2D\u9002\u5F53\u8C03\u6574\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\uFF0C\u786E\u4FDD\u8FDE\u63A5\u80FD\u591F\u5728\u89C4\u5B9A\u65F6\u95F4\u5185\u5B8C\u6210\u64CD\u4F5C\u3002"
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
                color: "#616E88"
              },
              children: "# \u4FEE\u6539MySQL\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\u4E3A60\u79D2"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "wait_timeout = 60"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u589E\u52A0\u8FDE\u63A5\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u53EF\u4EE5\u8BA9\u8FDE\u63A5\u5728\u5904\u7406\u590D\u6742\u67E5\u8BE2\u6216\u5927\u91CF\u6570\u636E\u65F6\u6709\u66F4\u5145\u8DB3\u7684\u65F6\u95F4\uFF0C\u51CF\u5C11\u8D85\u65F6\u9519\u8BEF\u7684\u53D1\u751F\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u5728\u5B9E\u9645\u5E94\u7528\u4E2D\uFF0C\u7ED3\u5408\u4EE5\u4E0A\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u6709\u6548\u89E3\u51B3IDEA\u8FDE\u63A5MySQL\u8D85\u65F6\u7684\u95EE\u9898\uFF0C\u63D0\u5347\u5F00\u53D1\u6548\u7387\u548C\u4F53\u9A8C\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u81F3\u6B64\uFF0C\u6211\u4EEC\u901A\u8FC7\u8C03\u6574IDEA\u7684\u8FDE\u63A5\u8D85\u65F6\u8BBE\u7F6E\u548C\u4F18\u5316MySQL\u7684\u6027\u80FD\uFF0C\u89E3\u51B3\u4E86IDEA\u8FDE\u63A5MySQL\u8D85\u65F6\u7684\u5B9E\u7528\u65B9\u6CD5\u3002\u4E0B\u4E00\u7AE0\u5C06\u4ECB\u7ECD\u66F4\u8FDB\u9636\u7684\u6392\u67E5\u6280\u5DE7\u4E0E\u5DE5\u5177\u63A8\u8350\uFF0C\u5E2E\u52A9\u8BFB\u8005\u66F4\u6DF1\u5165\u5730\u89E3\u51B3\u8FDE\u63A5\u8D85\u65F6\u95EE\u9898\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "4-\u8FDB\u9636\u6392\u67E5\u6280\u5DE7\u4E0E\u5DE5\u5177\u63A8\u8350",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#4-\u8FDB\u9636\u6392\u67E5\u6280\u5DE7\u4E0E\u5DE5\u5177\u63A8\u8350",
        children: "#"
      }), "4. \u8FDB\u9636\u6392\u67E5\u6280\u5DE7\u4E0E\u5DE5\u5177\u63A8\u8350"]
    }), "\n", jsx(_components.p, {
      children: "\u8FDE\u63A5\u8D85\u65F6\u95EE\u9898\u662F\u5F00\u53D1\u4E2D\u5E38\u89C1\u7684\u74F6\u9888\u4E4B\u4E00\uFF0C\u5F53\u6392\u67E5\u5E38\u89C1\u539F\u56E0\u65E0\u679C\u65F6\uFF0C\u6211\u4EEC\u9700\u8981\u8FDB\u4E00\u6B65\u91C7\u7528\u4E00\u4E9B\u9AD8\u7EA7\u7684\u6392\u67E5\u6280\u5DE7\u4E0E\u5DE5\u5177\u6765\u89E3\u51B3\u95EE\u9898\u3002\u672C\u7AE0\u5C06\u4ECB\u7ECD\u4E00\u4E9B\u8FDB\u9636\u7684\u6392\u67E5\u6280\u5DE7\uFF0C\u5E76\u63A8\u8350\u4E00\u4E9B\u5B9E\u7528\u7684\u5DE5\u5177\uFF0C\u5E2E\u52A9\u8BFB\u8005\u66F4\u5FEB\u901F\u5730\u5B9A\u4F4D\u548C\u89E3\u51B3IDEA\u8FDE\u63A5MySQL\u8D85\u65F6\u7684\u95EE\u9898\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "41-\u65E5\u5FD7\u6392\u67E5\u65B9\u6CD5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#41-\u65E5\u5FD7\u6392\u67E5\u65B9\u6CD5",
        children: "#"
      }), "4.1 \u65E5\u5FD7\u6392\u67E5\u65B9\u6CD5"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u6392\u67E5\u8FDE\u63A5\u8D85\u65F6\u95EE\u9898\u65F6\uFF0C\u65E5\u5FD7\u662F\u4E00\u4E2A\u975E\u5E38\u91CD\u8981\u7684\u7EBF\u7D22\u6765\u6E90\u3002\u901A\u8FC7\u67E5\u770BIDEA\u548CMySQL\u7684\u65E5\u5FD7\u4FE1\u606F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0\u4E00\u4E9B\u6F5C\u5728\u7684\u95EE\u9898\uFF0C\u4ECE\u800C\u66F4\u6709\u9488\u5BF9\u6027\u5730\u89E3\u51B3\u8FDE\u63A5\u8D85\u65F6\u7684\u60C5\u51B5\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "411-\u67E5\u770Bidea\u65E5\u5FD7",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#411-\u67E5\u770Bidea\u65E5\u5FD7",
        children: "#"
      }), "4.1.1 \u67E5\u770BIDEA\u65E5\u5FD7"]
    }), "\n", jsx(_components.p, {
      children: "IDEA\u672C\u8EAB\u4F1A\u8BB0\u5F55\u4E00\u4E9B\u8FDE\u63A5MySQL\u7684\u64CD\u4F5C\u65E5\u5FD7\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u67E5\u770B\u8FD9\u4E9B\u65E5\u5FD7\u6765\u4E86\u89E3IDEA\u8FDE\u63A5MySQL\u7684\u8FC7\u7A0B\uFF0C\u662F\u5426\u5B58\u5728\u5F02\u5E38\u60C5\u51B5\u3002\u5177\u4F53\u64CD\u4F5C\u5982\u4E0B\uFF1A"
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
              children: "// \u67E5\u627EIDEA\u65E5\u5FD7\u6587\u4EF6"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "cd"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "~"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "/.IntelliJIdea/config/logs"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "// \u67E5\u770B\u6700\u8FD1\u7684\u65E5\u5FD7\u4FE1\u606F"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "tail idea.log"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u67E5\u770B\u65E5\u5FD7\u6587\u4EF6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0IDEA\u8FDE\u63A5MySQL\u65F6\u7684\u5177\u4F53\u64CD\u4F5C\u8FC7\u7A0B\uFF0C\u4ECE\u800C\u5206\u6790\u662F\u5426\u5B58\u5728\u8FDE\u63A5\u8D85\u65F6\u7684\u95EE\u9898\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "412-\u5206\u6790mysql\u9519\u8BEF\u65E5\u5FD7",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#412-\u5206\u6790mysql\u9519\u8BEF\u65E5\u5FD7",
        children: "#"
      }), "4.1.2 \u5206\u6790MySQL\u9519\u8BEF\u65E5\u5FD7"]
    }), "\n", jsx(_components.p, {
      children: "\u53E6\u5916\uFF0C\u6211\u4EEC\u4E5F\u9700\u8981\u5173\u6CE8MySQL\u672C\u8EAB\u7684\u9519\u8BEF\u65E5\u5FD7\uFF0C\u8FD9\u91CC\u4F1A\u8BB0\u5F55MySQL\u670D\u52A1\u8FD0\u884C\u65F6\u7684\u5F02\u5E38\u60C5\u51B5\uFF0C\u5305\u62EC\u8FDE\u63A5\u8D85\u65F6\u7B49\u95EE\u9898\u3002\u4EE5\u4E0B\u662F\u67E5\u770BMySQL\u9519\u8BEF\u65E5\u5FD7\u7684\u65B9\u6CD5\uFF1A"
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
              children: "// \u67E5\u627EMySQL\u9519\u8BEF\u65E5\u5FD7\u6587\u4EF6"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "cd"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " /var/log/mysql"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "// \u67E5\u770B\u6700\u8FD1\u7684\u9519\u8BEF\u65E5\u5FD7\u4FE1\u606F"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "tail error.log"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u5206\u6790MySQL\u7684\u9519\u8BEF\u65E5\u5FD7\uFF0C\u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0MySQL\u670D\u52A1\u7AEF\u662F\u5426\u5B58\u5728\u8FDE\u63A5\u8D85\u65F6\u7684\u60C5\u51B5\uFF0C\u4EE5\u53CA\u5177\u4F53\u7684\u9519\u8BEF\u4FE1\u606F\uFF0C\u6709\u52A9\u4E8E\u8FDB\u4E00\u6B65\u6392\u67E5\u95EE\u9898\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "42-\u6392\u67E5\u5DE5\u5177\u63A8\u8350",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#42-\u6392\u67E5\u5DE5\u5177\u63A8\u8350",
        children: "#"
      }), "4.2 \u6392\u67E5\u5DE5\u5177\u63A8\u8350"]
    }), "\n", jsx(_components.p, {
      children: "\u9664\u4E86\u67E5\u770B\u65E5\u5FD7\u5916\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u501F\u52A9\u4E00\u4E9B\u4E13\u4E1A\u7684\u6392\u67E5\u5DE5\u5177\u6765\u5E2E\u52A9\u6211\u4EEC\u5206\u6790\u8FDE\u63A5\u8D85\u65F6\u95EE\u9898\uFF0C\u4E0B\u9762\u5C06\u4ECB\u7ECD\u4E24\u6B3E\u7ECF\u5178\u7684\u5DE5\u5177\uFF1AWireshark\u548CMySQL Workbench\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "421-\u4F7F\u7528wireshark\u6293\u5305\u5206\u6790",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#421-\u4F7F\u7528wireshark\u6293\u5305\u5206\u6790",
        children: "#"
      }), "4.2.1 \u4F7F\u7528Wireshark\u6293\u5305\u5206\u6790"]
    }), "\n", jsx(_components.p, {
      children: "Wireshark\u662F\u4E00\u6B3E\u5F00\u6E90\u7684\u7F51\u7EDC\u534F\u8BAE\u5206\u6790\u5DE5\u5177\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u6293\u53D6\u7F51\u7EDC\u6570\u636E\u5305\uFF0C\u4ECE\u800C\u5206\u6790\u7F51\u7EDC\u901A\u4FE1\u8FC7\u7A0B\u4E2D\u662F\u5426\u5B58\u5728\u5F02\u5E38\u60C5\u51B5\u3002\u5728\u6392\u67E5\u8FDE\u63A5\u8D85\u65F6\u95EE\u9898\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7Wireshark\u6765\u76D1\u63A7IDEA\u4E0EMySQL\u4E4B\u95F4\u7684\u7F51\u7EDC\u901A\u4FE1\uFF0C\u786E\u5B9A\u662F\u5426\u5B58\u5728\u6570\u636E\u5305\u4E22\u5931\u3001\u5EF6\u8FDF\u7B49\u95EE\u9898\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "422-\u4F7F\u7528mysql-workbench\u68C0\u6D4B\u8FDE\u63A5\u95EE\u9898",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#422-\u4F7F\u7528mysql-workbench\u68C0\u6D4B\u8FDE\u63A5\u95EE\u9898",
        children: "#"
      }), "4.2.2 \u4F7F\u7528MySQL Workbench\u68C0\u6D4B\u8FDE\u63A5\u95EE\u9898"]
    }), "\n", jsx(_components.p, {
      children: "MySQL Workbench\u662F\u4E00\u6B3E\u529F\u80FD\u5F3A\u5927\u7684MySQL\u7BA1\u7406\u5DE5\u5177\uFF0C\u5176\u4E2D\u96C6\u6210\u4E86\u8FDE\u63A5\u76D1\u63A7\u529F\u80FD\uFF0C\u53EF\u4EE5\u5B9E\u65F6\u76D1\u6D4BMySQL\u6570\u636E\u5E93\u7684\u8FDE\u63A5\u60C5\u51B5\u3002\u901A\u8FC7MySQL Workbench\uFF0C\u6211\u4EEC\u53EF\u4EE5\u67E5\u770B\u5F53\u524D\u8FDE\u63A5\u6570\u3001\u8FDE\u63A5\u6267\u884C\u65F6\u95F4\u7B49\u4FE1\u606F\uFF0C\u5E2E\u52A9\u6211\u4EEC\u5B9A\u4F4D\u8FDE\u63A5\u8D85\u65F6\u7684\u5177\u4F53\u539F\u56E0\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u4EE5\u4E0A\u4ECB\u7ECD\u7684\u65E5\u5FD7\u6392\u67E5\u65B9\u6CD5\u548C\u5DE5\u5177\u63A8\u8350\uFF0C\u8BFB\u8005\u53EF\u4EE5\u66F4\u5168\u9762\u5730\u4E86\u89E3IDEA\u8FDE\u63A5MySQL\u8D85\u65F6\u95EE\u9898\u7684\u6839\u6E90\uFF0C\u4ECE\u800C\u6709\u9488\u5BF9\u6027\u5730\u91C7\u53D6\u76F8\u5E94\u7684\u89E3\u51B3\u63AA\u65BD\u3002\u5728\u5B9E\u9645\u6392\u67E5\u8FC7\u7A0B\u4E2D\uFF0C\u7ED3\u5408\u65E5\u5FD7\u5206\u6790\u548C\u5DE5\u5177\u8F85\u52A9\uFF0C\u53EF\u4EE5\u66F4\u9AD8\u6548\u5730\u89E3\u51B3\u8FDE\u63A5\u8D85\u65F6\u7684\u96BE\u9898\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "5-\u5B9E\u6218\u6848\u4F8B\u5206\u4EAB\u4E0E\u7ECF\u9A8C\u603B\u7ED3",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#5-\u5B9E\u6218\u6848\u4F8B\u5206\u4EAB\u4E0E\u7ECF\u9A8C\u603B\u7ED3",
        children: "#"
      }), "5. \u5B9E\u6218\u6848\u4F8B\u5206\u4EAB\u4E0E\u7ECF\u9A8C\u603B\u7ED3"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u524D\u9762\u7684\u7AE0\u8282\u4E2D\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u5B66\u4E60\u4E86\u5982\u4F55\u7406\u89E3IDEA\u4E0EMySQL\u8FDE\u63A5\u8D85\u65F6\u7684\u95EE\u9898\uFF0C\u6392\u67E5\u8FDE\u63A5\u8D85\u65F6\u7684\u5E38\u89C1\u539F\u56E0\uFF0C\u4EE5\u53CA\u89E3\u51B3IDEA\u8FDE\u63A5MySQL\u8D85\u65F6\u7684\u5B9E\u7528\u65B9\u6CD5\u548C\u8FDB\u9636\u6392\u67E5\u6280\u5DE7\u4E0E\u5DE5\u5177\u63A8\u8350\u3002\u73B0\u5728\uFF0C\u8BA9\u6211\u4EEC\u901A\u8FC7\u5B9E\u9645\u6848\u4F8B\u5206\u4EAB\u548C\u7ECF\u9A8C\u603B\u7ED3\uFF0C\u8FDB\u4E00\u6B65\u52A0\u6DF1\u5BF9\u8FD9\u4E00\u95EE\u9898\u7684\u7406\u89E3\u548C\u89E3\u51B3\u65B9\u6848\u7684\u638C\u63E1\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "51-\u5B9E\u9645\u6848\u4F8B\u5206\u6790",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#51-\u5B9E\u9645\u6848\u4F8B\u5206\u6790",
        children: "#"
      }), "5.1 \u5B9E\u9645\u6848\u4F8B\u5206\u6790"]
    }), "\n", jsx(_components.p, {
      children: "\u5047\u8BBE\u4F60\u662F\u4E00\u540D\u5F00\u53D1\u4EBA\u5458\uFF0C\u5728\u4F7F\u7528IDEA\u8FDE\u63A5MySQL\u65F6\u9047\u5230\u4E86\u8FDE\u63A5\u8D85\u65F6\u7684\u95EE\u9898\u3002\u7ECF\u8FC7\u524D\u9762\u7AE0\u8282\u7684\u6392\u67E5\u548C\u89E3\u51B3\u65B9\u6CD5\u5C1D\u8BD5\u540E\uFF0C\u95EE\u9898\u4ECD\u7136\u5B58\u5728\u3002\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5C06\u901A\u8FC7\u4E00\u4E2A\u5B9E\u9645\u6848\u4F8B\u6765\u5C55\u793A\u5982\u4F55\u5904\u7406\u8FD9\u7C7B\u8FDE\u63A5\u8D85\u65F6\u95EE\u9898\u3002"
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.strong, {
        children: "\u6848\u4F8B\u80CC\u666F\uFF1A"
      }), " \u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0CIDEA\u8FDE\u63A5MySQL\u6570\u636E\u5E93\u6267\u884C\u67E5\u8BE2\u64CD\u4F5C\u65F6\u63D0\u793A\u8FDE\u63A5\u8D85\u65F6\uFF0C\u5BFC\u81F4\u65E0\u6CD5\u6B63\u5E38\u64CD\u4F5C\u6570\u636E\u3002"]
    }), "\n", jsx(_components.p, {
      children: jsx(_components.strong, {
        children: "\u89E3\u51B3\u6B65\u9AA4\uFF1A"
      })
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5\uFF1A"
        }), " \u9996\u5148\uFF0C\u786E\u8BA4\u672C\u5730\u7F51\u7EDC\u8FDE\u63A5\u662F\u5426\u6B63\u5E38\u3002\u53EF\u4EE5\u901A\u8FC7Ping\u547D\u4EE4\u68C0\u6D4B\u4E0EMySQL\u670D\u52A1\u5668\u7684\u8FDE\u901A\u6027\u3002"]
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
                color: "#D8DEE9FF"
              },
              children: "ping mysql_server_ip"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.ol, {
      start: "2",
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "\u68C0\u67E5MySQL\u670D\u52A1\u72B6\u6001\uFF1A"
        }), " \u767B\u5F55\u5230MySQL\u670D\u52A1\u5668\uFF0C\u68C0\u67E5MySQL\u670D\u52A1\u662F\u5426\u6B63\u5E38\u8FD0\u884C\u3002"]
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
                color: "#D8DEE9FF"
              },
              children: "systemctl status mysql"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.ol, {
      start: "3",
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "\u8C03\u6574IDEA\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\uFF1A"
        }), "\n", jsxs(_components.ul, {
          children: ["\n", jsx(_components.li, {
            children: "\u6253\u5F00IDEA\uFF0C\u8FDB\u5165\u6570\u636E\u5E93\u8FDE\u63A5\u914D\u7F6E\u3002"
          }), "\n", jsx(_components.li, {
            children: "\u4FEE\u6539\u8FDE\u63A5\u8D85\u65F6\u8BBE\u7F6E\uFF0C\u589E\u52A0\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\u3002"
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "\u4F18\u5316MySQL\u6027\u80FD\uFF1A"
        }), "\n", jsxs(_components.ul, {
          children: ["\n", jsx(_components.li, {
            children: "\u5BF9\u9700\u8981\u9891\u7E41\u67E5\u8BE2\u7684\u8868\u6DFB\u52A0\u7D22\u5F15\uFF0C\u4F18\u5316\u67E5\u8BE2\u901F\u5EA6\u3002"
          }), "\n", jsx(_components.li, {
            children: "\u8C03\u6574MySQL\u8FDE\u63A5\u8D85\u65F6\u7B49\u76F8\u5173\u914D\u7F6E\uFF0C\u9002\u914DIDEA\u8FDE\u63A5\u9700\u6C42\u3002"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "52-\u5FEB\u901F\u5B9A\u4F4D\u95EE\u9898\u63D0\u793A",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#52-\u5FEB\u901F\u5B9A\u4F4D\u95EE\u9898\u63D0\u793A",
        children: "#"
      }), "5.2 \u5FEB\u901F\u5B9A\u4F4D\u95EE\u9898\u63D0\u793A"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u5904\u7406IDEA\u8FDE\u63A5MySQL\u8D85\u65F6\u95EE\u9898\u65F6\uFF0C\u5E38\u4F1A\u9047\u5230\u5404\u79CD\u9519\u8BEF\u63D0\u793A\u3002\u4E0B\u9762\u5217\u4E3E\u51E0\u4E2A\u5E38\u89C1\u7684\u9519\u8BEF\u63D0\u793A\u53CA\u5176\u53EF\u80FD\u7684\u539F\u56E0\uFF1A"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: '"Connection timed out"\uFF1A'
        }), " \u53EF\u80FD\u662F\u7F51\u7EDC\u8FDE\u63A5\u95EE\u9898\u6216\u8005MySQL\u670D\u52A1\u7AEF\u672A\u6B63\u786E\u54CD\u5E94\u3002"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: '"Connection reset"\uFF1A'
        }), " \u53EF\u80FD\u662F\u9632\u706B\u5899\u8BBE\u7F6E\u963B\u6B62\u8FDE\u63A5\u6216\u8005MySQL\u670D\u52A1\u7AEF\u4E3B\u52A8\u65AD\u5F00\u8FDE\u63A5\u3002"]
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u5F53\u6211\u4EEC\u9047\u5230\u8FD9\u4E9B\u9519\u8BEF\u63D0\u793A\u65F6\uFF0C\u53EF\u4EE5\u6839\u636E\u5177\u4F53\u60C5\u51B5\u91C7\u53D6\u76F8\u5E94\u7684\u6392\u67E5\u63AA\u65BD\uFF0C\u4EE5\u4FBF\u5FEB\u901F\u5B9A\u4F4D\u95EE\u9898\u6240\u5728\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "53-\u5E38\u89C1\u89E3\u51B3\u65B9\u6848\u5206\u4EAB",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#53-\u5E38\u89C1\u89E3\u51B3\u65B9\u6848\u5206\u4EAB",
        children: "#"
      }), "5.3 \u5E38\u89C1\u89E3\u51B3\u65B9\u6848\u5206\u4EAB"]
    }), "\n", jsx(_components.p, {
      children: "\u9488\u5BF9IDEA\u8FDE\u63A5MySQL\u8D85\u65F6\u7684\u5E38\u89C1\u95EE\u9898\uFF0C\u6211\u4EEC\u5206\u4EAB\u4E00\u4E9B\u5E38\u89C1\u7684\u89E3\u51B3\u65B9\u6848\uFF1A"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "\u8C03\u6574IDEA\u8FDE\u63A5\u8D85\u65F6\u8BBE\u7F6E\uFF1A"
        }), " \u589E\u52A0\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\uFF0C\u63D0\u9AD8\u8FDE\u63A5\u7A33\u5B9A\u6027\u3002"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "\u4F18\u5316MySQL\u6027\u80FD\uFF1A"
        }), " \u6DFB\u52A0\u7D22\u5F15\u3001\u8C03\u6574\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\u7B49\u65B9\u5F0F\u4F18\u5316MySQL\u6570\u636E\u5E93\u6027\u80FD\uFF0C\u51CF\u5C11\u8FDE\u63A5\u8D85\u65F6\u53D1\u751F\u7684\u53EF\u80FD\u6027\u3002"]
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u4EE5\u4E0A\u5B9E\u9645\u6848\u4F8B\u5206\u6790\u3001\u95EE\u9898\u63D0\u793A\u5B9A\u4F4D\u548C\u89E3\u51B3\u65B9\u6848\u5206\u4EAB\uFF0C\u6211\u4EEC\u53EF\u4EE5\u66F4\u597D\u5730\u638C\u63E1\u6392\u67E5\u548C\u89E3\u51B3IDEA\u8FDE\u63A5MySQL\u8D85\u65F6\u95EE\u9898\u7684\u65B9\u6CD5\uFF0C\u63D0\u5347\u5F00\u53D1\u6548\u7387\u548C\u5DE5\u4F5C\u8D28\u91CF\u3002"
    }), "\n", jsx(_components.hr, {}), "\n", jsx(_components.p, {
      children: "\u5728\u672C\u7AE0\u4E2D\uFF0C\u6211\u4EEC\u5206\u4EAB\u4E86\u5B9E\u9645\u6848\u4F8B\u7684\u5206\u6790\u5904\u7406\u8FC7\u7A0B\uFF0C\u5FEB\u901F\u5B9A\u4F4D\u8FDE\u63A5\u8D85\u65F6\u95EE\u9898\u7684\u63D0\u793A\u548C\u5E38\u89C1\u7684\u89E3\u51B3\u65B9\u6848\u3002\u8FD9\u4E9B\u7ECF\u9A8C\u603B\u7ED3\u5C06\u6709\u52A9\u4E8E\u8BFB\u8005\u66F4\u597D\u5730\u7406\u89E3\u548C\u89E3\u51B3IDEA\u8FDE\u63A5MySQL\u8D85\u65F6\u95EE\u9898\u3002\u63A5\u4E0B\u6765\uFF0C\u8BA9\u6211\u4EEC\u5728\u5B9E\u9645\u5DE5\u4F5C\u4E2D\u8FD0\u7528\u8FD9\u4E9B\u77E5\u8BC6\uFF0C\u63D0\u5347\u5F00\u53D1\u548C\u8C03\u8BD5\u7684\u6548\u7387\u3002"
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

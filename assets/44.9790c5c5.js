import { jsx, jsxs, Fragment } from "react/jsx-runtime";
const frontmatter = void 0;
const toc = [{
  "id": "21-\u4E0B\u8F7D\u4E0E\u5B89\u88C5mysql",
  "text": "2.1 \u4E0B\u8F7D\u4E0E\u5B89\u88C5MySQL",
  "depth": 3
}, {
  "id": "22-\u5B89\u88C5mysql\u63D2\u4EF6",
  "text": "2.2 \u5B89\u88C5MySQL\u63D2\u4EF6",
  "depth": 3
}, {
  "id": "221-\u63D2\u4EF6\u5B89\u88C5\u6B65\u9AA4",
  "text": "2.2.1 \u63D2\u4EF6\u5B89\u88C5\u6B65\u9AA4",
  "depth": 4
}, {
  "id": "222-\u63D2\u4EF6\u914D\u7F6E\u65B9\u6CD5",
  "text": "2.2.2 \u63D2\u4EF6\u914D\u7F6E\u65B9\u6CD5",
  "depth": 4
}, {
  "id": "23-\u914D\u7F6E\u6570\u636E\u5E93\u8FDE\u63A5",
  "text": "2.3 \u914D\u7F6E\u6570\u636E\u5E93\u8FDE\u63A5",
  "depth": 3
}, {
  "id": "231-\u8BBE\u7F6E\u6570\u636E\u6E90",
  "text": "2.3.1 \u8BBE\u7F6E\u6570\u636E\u6E90",
  "depth": 4
}, {
  "id": "232-\u914D\u7F6E\u8FDE\u63A5\u5C5E\u6027",
  "text": "2.3.2 \u914D\u7F6E\u8FDE\u63A5\u5C5E\u6027",
  "depth": 4
}, {
  "id": "31-\u6570\u636E\u5E93\u5BFC\u822A",
  "text": "3.1 \u6570\u636E\u5E93\u5BFC\u822A",
  "depth": 3
}, {
  "id": "311-\u67E5\u770B\u6570\u636E\u5E93\u7ED3\u6784",
  "text": "3.1.1 \u67E5\u770B\u6570\u636E\u5E93\u7ED3\u6784",
  "depth": 4
}, {
  "id": "312-\u67E5\u770B\u8868\u6570\u636E",
  "text": "3.1.2 \u67E5\u770B\u8868\u6570\u636E",
  "depth": 4
}, {
  "id": "32-sql\u7F16\u8F91\u4E0E\u6267\u884C",
  "text": "3.2 SQL\u7F16\u8F91\u4E0E\u6267\u884C",
  "depth": 3
}, {
  "id": "321-\u7F16\u5199sql\u8BED\u53E5",
  "text": "3.2.1 \u7F16\u5199SQL\u8BED\u53E5",
  "depth": 4
}, {
  "id": "322-\u6267\u884Csql\u67E5\u8BE2",
  "text": "3.2.2 \u6267\u884CSQL\u67E5\u8BE2",
  "depth": 4
}, {
  "id": "33-\u6570\u636E\u5E93\u7BA1\u7406",
  "text": "3.3 \u6570\u636E\u5E93\u7BA1\u7406",
  "depth": 3
}, {
  "id": "331-\u521B\u5EFA\u4E0E\u5220\u9664\u6570\u636E\u5E93",
  "text": "3.3.1 \u521B\u5EFA\u4E0E\u5220\u9664\u6570\u636E\u5E93",
  "depth": 4
}, {
  "id": "332-\u7BA1\u7406\u8868\u7ED3\u6784",
  "text": "3.3.2 \u7BA1\u7406\u8868\u7ED3\u6784",
  "depth": 4
}, {
  "id": "41-\u6570\u636E\u5E93\u7248\u672C\u63A7\u5236",
  "text": "4.1 \u6570\u636E\u5E93\u7248\u672C\u63A7\u5236",
  "depth": 3
}, {
  "id": "411-\u4F7F\u7528\u7248\u672C\u63A7\u5236\u5DE5\u5177",
  "text": "4.1.1 \u4F7F\u7528\u7248\u672C\u63A7\u5236\u5DE5\u5177",
  "depth": 4
}, {
  "id": "412-\u7248\u672C\u7BA1\u7406\u6280\u5DE7",
  "text": "4.1.2 \u7248\u672C\u7BA1\u7406\u6280\u5DE7",
  "depth": 4
}, {
  "id": "42-\u6570\u636E\u5E93\u8C03\u8BD5\u4E0E\u4F18\u5316",
  "text": "4.2 \u6570\u636E\u5E93\u8C03\u8BD5\u4E0E\u4F18\u5316",
  "depth": 3
}, {
  "id": "421-\u6027\u80FD\u8C03\u4F18\u65B9\u6CD5",
  "text": "4.2.1 \u6027\u80FD\u8C03\u4F18\u65B9\u6CD5",
  "depth": 4
}, {
  "id": "422-\u4EE3\u7801\u8C03\u8BD5\u6280\u5DE7",
  "text": "4.2.2 \u4EE3\u7801\u8C03\u8BD5\u6280\u5DE7",
  "depth": 4
}, {
  "id": "43-\u6570\u636E\u5E93\u90E8\u7F72\u4E0E\u5907\u4EFD",
  "text": "4.3 \u6570\u636E\u5E93\u90E8\u7F72\u4E0E\u5907\u4EFD",
  "depth": 3
}, {
  "id": "431-\u6570\u636E\u5E93\u8FC1\u79FB",
  "text": "4.3.1 \u6570\u636E\u5E93\u8FC1\u79FB",
  "depth": 4
}, {
  "id": "432-\u6570\u636E\u5907\u4EFD\u4E0E\u6062\u590D",
  "text": "4.3.2 \u6570\u636E\u5907\u4EFD\u4E0E\u6062\u590D",
  "depth": 4
}, {
  "id": "41-\u6570\u636E\u5E93\u7248\u672C\u63A7\u5236-1",
  "text": "4.1 \u6570\u636E\u5E93\u7248\u672C\u63A7\u5236",
  "depth": 3
}, {
  "id": "411-\u4F7F\u7528\u7248\u672C\u63A7\u5236\u5DE5\u5177-1",
  "text": "4.1.1 \u4F7F\u7528\u7248\u672C\u63A7\u5236\u5DE5\u5177",
  "depth": 4
}, {
  "id": "412-\u7248\u672C\u7BA1\u7406\u6280\u5DE7-1",
  "text": "4.1.2 \u7248\u672C\u7BA1\u7406\u6280\u5DE7",
  "depth": 4
}, {
  "id": "42-\u6570\u636E\u5E93\u8C03\u8BD5\u4E0E\u4F18\u5316-1",
  "text": "4.2 \u6570\u636E\u5E93\u8C03\u8BD5\u4E0E\u4F18\u5316",
  "depth": 3
}, {
  "id": "421-\u6027\u80FD\u8C03\u4F18\u65B9\u6CD5-1",
  "text": "4.2.1 \u6027\u80FD\u8C03\u4F18\u65B9\u6CD5",
  "depth": 4
}, {
  "id": "422-\u4EE3\u7801\u8C03\u8BD5\u6280\u5DE7-1",
  "text": "4.2.2 \u4EE3\u7801\u8C03\u8BD5\u6280\u5DE7",
  "depth": 4
}, {
  "id": "43-\u6570\u636E\u5E93\u90E8\u7F72\u4E0E\u5907\u4EFD-1",
  "text": "4.3 \u6570\u636E\u5E93\u90E8\u7F72\u4E0E\u5907\u4EFD",
  "depth": 3
}, {
  "id": "431-\u6570\u636E\u5E93\u8FC1\u79FB-1",
  "text": "4.3.1 \u6570\u636E\u5E93\u8FC1\u79FB",
  "depth": 4
}, {
  "id": "432-\u6570\u636E\u5907\u4EFD\u4E0E\u6062\u590D-1",
  "text": "4.3.2 \u6570\u636E\u5907\u4EFD\u4E0E\u6062\u590D",
  "depth": 4
}];
const title = "5. \u9AD8\u7EA7\u5E94\u7528\u4E0E\u6280\u5DE7\u8FDB\u9636";
function _createMdxContent(props) {
  const _components = Object.assign({
    div: "div",
    button: "button",
    span: "span",
    pre: "pre",
    code: "code",
    h1: "h1",
    a: "a",
    p: "p",
    h3: "h3",
    h4: "h4",
    ol: "ol",
    li: "li",
    h5: "h5",
    ul: "ul",
    strong: "strong"
  }, props.components);
  return jsxs(Fragment, {
    children: [jsxs(_components.div, {
      className: "language-html",
      children: [jsx(_components.button, {
        className: "copy"
      }), jsx(_components.span, {
        className: "lang",
        children: "html"
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
              children: "<img"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "src"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
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
              children: "https://img-blog.csdnimg.cn/20211011004118702.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pif5aSc5a2k5biG,size_20,color_FFFFFF,t_70,g_se,x_16"
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
              children: "alt"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
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
              children: "image"
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
              children: "style"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
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
              children: "width:1200px;height:600px;"
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
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h1, {
      id: "1-\u7406\u89E3idea\u4E0Emysql\u7684\u8FDE\u63A5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#1-\u7406\u89E3idea\u4E0Emysql\u7684\u8FDE\u63A5",
        children: "#"
      }), "1. \u7406\u89E3IDEA\u4E0EMySQL\u7684\u8FDE\u63A5"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u672C\u7AE0\u4E2D\uFF0C\u6211\u4EEC\u5C06\u6DF1\u5165\u4E86\u89E3\u5982\u4F55\u5728IDEA\u4E2D\u5B9E\u73B0\u4E0EMySQL\u6570\u636E\u5E93\u7684\u8FDE\u63A5\u3002IDEA\u4F5C\u4E3A\u4E00\u6B3E\u5F3A\u5927\u7684\u96C6\u6210\u5F00\u53D1\u73AF\u5883\uFF0C\u901A\u8FC7\u5176\u4E0EMySQL\u6570\u636E\u5E93\u7684\u8FDE\u63A5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5B9E\u73B0\u6570\u636E\u5E93\u7684\u589E\u5220\u6539\u67E5\u64CD\u4F5C\uFF0C\u4EE5\u53CA\u8FDB\u884C\u6570\u636E\u5E93\u7BA1\u7406\u3001\u8C03\u8BD5\u548C\u4F18\u5316\u7B49\u5DE5\u4F5C\u3002\u6B63\u786E\u7406\u89E3IDEA\u4E0EMySQL\u7684\u8FDE\u63A5\u65B9\u5F0F\u548C\u539F\u7406\uFF0C\u5BF9\u6211\u4EEC\u540E\u7EED\u7684\u73AF\u5883\u914D\u7F6E\u548C\u64CD\u4F5C\u6280\u5DE7\u81F3\u5173\u91CD\u8981\u3002\u901A\u8FC7\u672C\u7AE0\u7684\u5B66\u4E60\uFF0C\u60A8\u5C06\u5168\u9762\u638C\u63E1IDEA\u4E0EMySQL\u4E4B\u95F4\u7684\u8FDE\u63A5\u5173\u7CFB\uFF0C\u4E3A\u4E4B\u540E\u7684\u64CD\u4F5C\u6253\u4E0B\u575A\u5B9E\u7684\u57FA\u7840\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "2-\u73AF\u5883\u914D\u7F6E",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#2-\u73AF\u5883\u914D\u7F6E",
        children: "#"
      }), "2. \u73AF\u5883\u914D\u7F6E"]
    }), "\n", jsx(_components.p, {
      children: "\u4E3A\u4E86\u5728IDEA\u4E2D\u6210\u529F\u8FDE\u63A5MySQL\u6570\u636E\u5E93\uFF0C\u60A8\u9700\u8981\u8FDB\u884C\u4E00\u4E9B\u73AF\u5883\u914D\u7F6E\uFF0C\u5305\u62EC\u4E0B\u8F7D\u4E0E\u5B89\u88C5MySQL\u3001\u5B89\u88C5MySQL\u63D2\u4EF6\u4EE5\u53CA\u914D\u7F6E\u6570\u636E\u5E93\u8FDE\u63A5\u3002\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5C06\u9010\u6B65\u8FDB\u884C\u64CD\u4F5C\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "21-\u4E0B\u8F7D\u4E0E\u5B89\u88C5mysql",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#21-\u4E0B\u8F7D\u4E0E\u5B89\u88C5mysql",
        children: "#"
      }), "2.1 \u4E0B\u8F7D\u4E0E\u5B89\u88C5MySQL"]
    }), "\n", jsx(_components.p, {
      children: "\u9996\u5148\uFF0C\u60A8\u9700\u8981\u4E0B\u8F7DMySQL\u6570\u636E\u5E93\u7684\u5B89\u88C5\u5305\u5E76\u8FDB\u884C\u5B89\u88C5\u3002\u60A8\u53EF\u4EE5\u5728MySQL\u5B98\u65B9\u7F51\u7AD9\u4E0A\u627E\u5230\u6700\u65B0\u7684\u5B89\u88C5\u5305\uFF0C\u6839\u636E\u60A8\u7684\u64CD\u4F5C\u7CFB\u7EDF\u7248\u672C\u9009\u62E9\u5408\u9002\u7684\u5B89\u88C5\u6587\u4EF6\u8FDB\u884C\u4E0B\u8F7D\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u5B89\u88C5\u8FC7\u7A0B\u4E2D\uFF0C\u6839\u636E\u5B89\u88C5\u5411\u5BFC\u7684\u63D0\u793A\u9010\u6B65\u8FDB\u884C\uFF0C\u53EF\u4EE5\u9009\u62E9\u81EA\u5B9A\u4E49\u5B89\u88C5\u6216\u4F7F\u7528\u9ED8\u8BA4\u8BBE\u7F6E\u3002\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u8BB0\u5F97\u8BBE\u7F6E\u597D\u60A8\u7684\u6570\u636E\u5E93\u767B\u5F55\u5BC6\u7801\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "22-\u5B89\u88C5mysql\u63D2\u4EF6",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#22-\u5B89\u88C5mysql\u63D2\u4EF6",
        children: "#"
      }), "2.2 \u5B89\u88C5MySQL\u63D2\u4EF6"]
    }), "\n", jsx(_components.p, {
      children: "\u5728IDEA\u4E2D\u8FDE\u63A5MySQL\u6570\u636E\u5E93\u9700\u8981\u5B89\u88C5\u76F8\u5E94\u7684\u63D2\u4EF6\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u6765\u8BE6\u7EC6\u4ECB\u7ECD\u5982\u4F55\u5B89\u88C5MySQL\u63D2\u4EF6\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "221-\u63D2\u4EF6\u5B89\u88C5\u6B65\u9AA4",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#221-\u63D2\u4EF6\u5B89\u88C5\u6B65\u9AA4",
        children: "#"
      }), "2.2.1 \u63D2\u4EF6\u5B89\u88C5\u6B65\u9AA4"]
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsx(_components.li, {
        children: "\u6253\u5F00IDEA\uFF0C\u8FDB\u5165\u63D2\u4EF6\u5E02\u573A\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u5728\u641C\u7D22\u6846\u4E2D\u8F93\u5165MySQL\uFF0C\u627E\u5230\u9002\u7528\u4E8EIDEA\u7684MySQL\u63D2\u4EF6\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u70B9\u51FB\u5B89\u88C5\u6309\u94AE\uFF0C\u7B49\u5F85\u63D2\u4EF6\u5B89\u88C5\u5B8C\u6210\u5E76\u91CD\u542FIDEA\u3002"
      }), "\n"]
    }), "\n", jsxs(_components.h4, {
      id: "222-\u63D2\u4EF6\u914D\u7F6E\u65B9\u6CD5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#222-\u63D2\u4EF6\u914D\u7F6E\u65B9\u6CD5",
        children: "#"
      }), "2.2.2 \u63D2\u4EF6\u914D\u7F6E\u65B9\u6CD5"]
    }), "\n", jsx(_components.p, {
      children: "\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u8FDB\u5165IDEA\u7684\u8BBE\u7F6E\u754C\u9762\uFF0C\u627E\u5230\u5DF2\u5B89\u88C5\u7684MySQL\u63D2\u4EF6\uFF0C\u8FDB\u884C\u76F8\u5173\u914D\u7F6E\uFF0C\u6BD4\u5982\u8BBE\u7F6E\u9ED8\u8BA4\u8FDE\u63A5\u548C\u8C03\u6574\u5176\u4ED6\u53C2\u6570\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "23-\u914D\u7F6E\u6570\u636E\u5E93\u8FDE\u63A5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#23-\u914D\u7F6E\u6570\u636E\u5E93\u8FDE\u63A5",
        children: "#"
      }), "2.3 \u914D\u7F6E\u6570\u636E\u5E93\u8FDE\u63A5"]
    }), "\n", jsx(_components.p, {
      children: "\u6210\u529F\u5B89\u88C5MySQL\u63D2\u4EF6\u540E\uFF0C\u63A5\u4E0B\u6765\u662F\u914D\u7F6E\u6570\u636E\u5E93\u8FDE\u63A5\uFF0C\u4F7FIDEA\u80FD\u591F\u987A\u5229\u8FDE\u63A5\u5230\u60A8\u7684MySQL\u6570\u636E\u5E93\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "231-\u8BBE\u7F6E\u6570\u636E\u6E90",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#231-\u8BBE\u7F6E\u6570\u636E\u6E90",
        children: "#"
      }), "2.3.1 \u8BBE\u7F6E\u6570\u636E\u6E90"]
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsx(_components.li, {
        children: "\u5728IDEA\u4E2D\u6253\u5F00\u6570\u636E\u5E93\u5DE5\u5177\u7A97\u53E3\uFF0C\u9009\u62E9\u6DFB\u52A0\u6570\u636E\u6E90\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u9009\u62E9MySQL\u4F5C\u4E3A\u6570\u636E\u6E90\u7C7B\u578B\uFF0C\u586B\u5199\u76F8\u5173\u8FDE\u63A5\u4FE1\u606F\u5982\u4E3B\u673A\u540D\u3001\u7AEF\u53E3\u53F7\u3001\u7528\u6237\u540D\u3001\u5BC6\u7801\u7B49\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u70B9\u51FB\u6D4B\u8BD5\u8FDE\u63A5\uFF0C\u786E\u4FDD\u8FDE\u63A5\u914D\u7F6E\u65E0\u8BEF\u540E\u4FDD\u5B58\u3002"
      }), "\n"]
    }), "\n", jsxs(_components.h4, {
      id: "232-\u914D\u7F6E\u8FDE\u63A5\u5C5E\u6027",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#232-\u914D\u7F6E\u8FDE\u63A5\u5C5E\u6027",
        children: "#"
      }), "2.3.2 \u914D\u7F6E\u8FDE\u63A5\u5C5E\u6027"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u8FDE\u63A5\u5C5E\u6027\u4E2D\uFF0C\u60A8\u53EF\u4EE5\u8BBE\u7F6E\u8FDE\u63A5\u7684\u5404\u79CD\u5C5E\u6027\uFF0C\u5982\u5B57\u7B26\u96C6\u3001\u8D85\u65F6\u65F6\u95F4\u7B49\uFF0C\u6839\u636E\u60A8\u7684\u9700\u6C42\u8FDB\u884C\u76F8\u5E94\u8BBE\u7F6E\u5E76\u4FDD\u5B58\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u4EE5\u4E0A\u6B65\u9AA4\uFF0C\u60A8\u5DF2\u7ECF\u5B8C\u6210\u4E86IDEA\u4E0EMySQL\u6570\u636E\u5E93\u7684\u8FDE\u63A5\u914D\u7F6E\uFF0C\u63A5\u4E0B\u6765\u53EF\u4EE5\u5F00\u59CB\u4F7F\u7528\u5404\u79CD\u64CD\u4F5C\u6280\u5DE7\u6765\u63D0\u9AD8\u5DE5\u4F5C\u6548\u7387\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "3-\u64CD\u4F5C\u6280\u5DE7",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#3-\u64CD\u4F5C\u6280\u5DE7",
        children: "#"
      }), "3. \u64CD\u4F5C\u6280\u5DE7"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u672C\u7AE0\u4E2D\uFF0C\u6211\u4EEC\u5C06\u63A2\u8BA8\u5982\u4F55\u5728IDEA\u4E2D\u4F7F\u7528MySQL\u6570\u636E\u5E93\u7684\u64CD\u4F5C\u6280\u5DE7\uFF0C\u5305\u62EC\u6570\u636E\u5E93\u5BFC\u822A\u3001SQL\u7F16\u8F91\u4E0E\u6267\u884C\u4EE5\u53CA\u6570\u636E\u5E93\u7BA1\u7406\u3002\u901A\u8FC7\u8FD9\u4E9B\u6280\u5DE7\uFF0C\u60A8\u5C06\u80FD\u66F4\u52A0\u7075\u6D3B\u9AD8\u6548\u5730\u64CD\u4F5C\u6570\u636E\u5E93\uFF0C\u63D0\u5347\u5DE5\u4F5C\u6548\u7387\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "31-\u6570\u636E\u5E93\u5BFC\u822A",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#31-\u6570\u636E\u5E93\u5BFC\u822A",
        children: "#"
      }), "3.1 \u6570\u636E\u5E93\u5BFC\u822A"]
    }), "\n", jsx(_components.p, {
      children: "\u6570\u636E\u5E93\u5BFC\u822A\u662F\u6570\u636E\u5E93\u5F00\u53D1\u4E2D\u975E\u5E38\u91CD\u8981\u7684\u4E00\u73AF\uFF0C\u5B83\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u5FEB\u901F\u4E86\u89E3\u6570\u636E\u5E93\u7ED3\u6784\uFF0C\u67E5\u770B\u8868\u6570\u636E\u7B49\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "311-\u67E5\u770B\u6570\u636E\u5E93\u7ED3\u6784",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#311-\u67E5\u770B\u6570\u636E\u5E93\u7ED3\u6784",
        children: "#"
      }), "3.1.1 \u67E5\u770B\u6570\u636E\u5E93\u7ED3\u6784"]
    }), "\n", jsx(_components.p, {
      children: "\u9996\u5148\uFF0C\u6211\u4EEC\u9700\u8981\u5728IDEA\u4E2D\u6253\u5F00MySQL\u6570\u636E\u5E93\u8FDE\u63A5\u3002\u5728IDEA\u7684\u6570\u636E\u5E93\u89C6\u56FE\u4E2D\uFF0C\u60A8\u53EF\u4EE5\u770B\u5230\u8FDE\u63A5\u7684\u6570\u636E\u5E93\u5217\u8868\uFF0C\u5C55\u5F00\u6570\u636E\u5E93\u540E\uFF0C\u53EF\u4EE5\u67E5\u770B\u5176\u5305\u542B\u7684\u8868\u4EE5\u53CA\u5176\u4ED6\u5BF9\u8C61\u3002\u901A\u8FC7\u7B80\u5355\u7684\u70B9\u51FB\uFF0C\u60A8\u53EF\u4EE5\u65B9\u4FBF\u5730\u6D4F\u89C8\u6570\u636E\u5E93\u7ED3\u6784\uFF0C\u4E86\u89E3\u5404\u4E2A\u8868\u4E4B\u95F4\u7684\u5173\u7CFB\u3002"
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
              children: "-- \u67E5\u770B\u6570\u636E\u5E93\u7ED3\u6784\u793A\u4F8B"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "SHOW DATABASES;"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u6267\u884C\u4EE5\u4E0ASQL\u8BED\u53E5\uFF0C\u53EF\u4EE5\u5217\u51FA\u5F53\u524DMySQL\u6570\u636E\u5E93\u4E2D\u7684\u6240\u6709\u6570\u636E\u5E93\u540D\u79F0\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "312-\u67E5\u770B\u8868\u6570\u636E",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#312-\u67E5\u770B\u8868\u6570\u636E",
        children: "#"
      }), "3.1.2 \u67E5\u770B\u8868\u6570\u636E"]
    }), "\n", jsx(_components.p, {
      children: "\u9664\u4E86\u67E5\u770B\u6570\u636E\u5E93\u7ED3\u6784\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u67E5\u770B\u8868\u4E2D\u7684\u6570\u636E\u3002\u5728IDEA\u6570\u636E\u5E93\u89C6\u56FE\u4E2D\uFF0C\u53CC\u51FB\u8868\u540D\uFF0C\u5373\u53EF\u67E5\u770B\u8868\u4E2D\u7684\u6570\u636E\u3002\u60A8\u53EF\u4EE5\u76F4\u63A5\u5728IDEA\u4E2D\u6D4F\u89C8\u6570\u636E\u5185\u5BB9\uFF0C\u65B9\u4FBF\u5FEB\u6377\u3002"
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
              children: "-- \u67E5\u770B\u8868\u6570\u636E\u793A\u4F8B"
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
              children: " table_name;"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u6267\u884C\u4EE5\u4E0ASQL\u8BED\u53E5\uFF0C\u53EF\u4EE5\u67E5\u770B\u6307\u5B9A\u8868\u4E2D\u7684\u6240\u6709\u6570\u636E\u5185\u5BB9\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "32-sql\u7F16\u8F91\u4E0E\u6267\u884C",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#32-sql\u7F16\u8F91\u4E0E\u6267\u884C",
        children: "#"
      }), "3.2 SQL\u7F16\u8F91\u4E0E\u6267\u884C"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\uFF0C\u6211\u4EEC\u7ECF\u5E38\u9700\u8981\u7F16\u5199SQL\u8BED\u53E5\u8FDB\u884C\u6570\u636E\u5E93\u64CD\u4F5C\u3002IDEA\u63D0\u4F9B\u4E86\u5F3A\u5927\u7684SQL\u7F16\u8F91\u4E0E\u6267\u884C\u529F\u80FD\uFF0C\u4F7F\u5F97\u6211\u4EEC\u80FD\u591F\u5FEB\u901F\u6267\u884CSQL\u67E5\u8BE2\u7B49\u64CD\u4F5C\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "321-\u7F16\u5199sql\u8BED\u53E5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#321-\u7F16\u5199sql\u8BED\u53E5",
        children: "#"
      }), "3.2.1 \u7F16\u5199SQL\u8BED\u53E5"]
    }), "\n", jsx(_components.p, {
      children: "\u5728IDEA\u4E2D\uFF0C\u60A8\u53EF\u4EE5\u6253\u5F00SQL\u7F16\u8F91\u5668\uFF0C\u8F93\u5165\u60A8\u9700\u8981\u7684SQL\u8BED\u53E5\u3002IDEA\u8FD8\u63D0\u4F9B\u4E86\u4EE3\u7801\u8865\u5168\u3001\u8BED\u6CD5\u68C0\u67E5\u7B49\u529F\u80FD\uFF0C\u5E2E\u52A9\u60A8\u9AD8\u6548\u7F16\u5199SQL\u8BED\u53E5\u3002"
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
              children: "-- \u7F16\u5199SQL\u8BED\u53E5\u793A\u4F8B"
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
              children: " condition;"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u7F16\u5199\u7B26\u5408\u6761\u4EF6\u7684SQL\u8BED\u53E5\uFF0C\u60A8\u53EF\u4EE5\u5B9E\u73B0\u5BF9\u6570\u636E\u5E93\u7684\u7CBE\u51C6\u64CD\u4F5C\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "322-\u6267\u884Csql\u67E5\u8BE2",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#322-\u6267\u884Csql\u67E5\u8BE2",
        children: "#"
      }), "3.2.2 \u6267\u884CSQL\u67E5\u8BE2"]
    }), "\n", jsx(_components.p, {
      children: "\u7F16\u5199\u597DSQL\u8BED\u53E5\u540E\uFF0C\u901A\u8FC7IDEA\u7684\u6267\u884C\u6309\u94AE\u6216\u5FEB\u6377\u952E\uFF0C\u5373\u53EF\u6267\u884CSQL\u67E5\u8BE2\u3002\u6267\u884C\u7ED3\u679C\u5C06\u4F1A\u663E\u793A\u5728IDEA\u4E2D\uFF0C\u65B9\u4FBF\u60A8\u67E5\u770B\u548C\u5206\u6790\u6570\u636E\u3002"
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
              children: "-- \u6267\u884CSQL\u67E5\u8BE2\u793A\u4F8B"
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
              children: " table_name;"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u6267\u884C\u4EE5\u4E0ASQL\u8BED\u53E5\uFF0C\u53EF\u4EE5\u67E5\u8BE2\u6307\u5B9A\u8868\u4E2D\u7684\u6240\u6709\u6570\u636E\uFF0C\u5E76\u5C06\u7ED3\u679C\u5C55\u793A\u51FA\u6765\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "33-\u6570\u636E\u5E93\u7BA1\u7406",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#33-\u6570\u636E\u5E93\u7BA1\u7406",
        children: "#"
      }), "3.3 \u6570\u636E\u5E93\u7BA1\u7406"]
    }), "\n", jsx(_components.p, {
      children: "\u6570\u636E\u5E93\u7BA1\u7406\u662F\u6570\u636E\u5E93\u5F00\u53D1\u4E2D\u5FC5\u4E0D\u53EF\u5C11\u7684\u4E00\u90E8\u5206\uFF0C\u5305\u62EC\u521B\u5EFA\u5220\u9664\u6570\u636E\u5E93\u3001\u7BA1\u7406\u8868\u7ED3\u6784\u7B49\u64CD\u4F5C\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "331-\u521B\u5EFA\u4E0E\u5220\u9664\u6570\u636E\u5E93",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#331-\u521B\u5EFA\u4E0E\u5220\u9664\u6570\u636E\u5E93",
        children: "#"
      }), "3.3.1 \u521B\u5EFA\u4E0E\u5220\u9664\u6570\u636E\u5E93"]
    }), "\n", jsxs(_components.p, {
      children: ["\u5728IDEA\u4E2D\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7SQL\u547D\u4EE4\u6216IDEA\u7684\u53EF\u89C6\u5316\u754C\u9762\u6765\u521B\u5EFA\u548C\u5220\u9664\u6570\u636E\u5E93\u3002\u521B\u5EFA\u6570\u636E\u5E93\u53EF\u4EE5\u4F7F\u7528", jsx(_components.code, {
        children: "CREATE DATABASE"
      }), "\u547D\u4EE4\uFF0C\u5220\u9664\u6570\u636E\u5E93\u53EF\u4EE5\u4F7F\u7528", jsx(_components.code, {
        children: "DROP DATABASE"
      }), "\u547D\u4EE4\u3002"]
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
              children: "-- \u521B\u5EFA\u6570\u636E\u5E93\u793A\u4F8B"
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
              children: "DATABASE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " new_database;"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "-- \u5220\u9664\u6570\u636E\u5E93\u793A\u4F8B"
            })
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
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h4, {
      id: "332-\u7BA1\u7406\u8868\u7ED3\u6784",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#332-\u7BA1\u7406\u8868\u7ED3\u6784",
        children: "#"
      }), "3.3.2 \u7BA1\u7406\u8868\u7ED3\u6784"]
    }), "\n", jsx(_components.p, {
      children: "\u9664\u4E86\u6570\u636E\u5E93\u7EA7\u522B\u7684\u64CD\u4F5C\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u7BA1\u7406\u8868\u7ED3\u6784\uFF0C\u5305\u62EC\u521B\u5EFA\u8868\u3001\u4FEE\u6539\u8868\u7ED3\u6784\u7B49\u3002\u5728IDEA\u4E2D\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7SQL\u547D\u4EE4\u6216\u53EF\u89C6\u5316\u64CD\u4F5C\u8FDB\u884C\u7BA1\u7406\u3002"
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
              children: "-- \u521B\u5EFA\u8868\u793A\u4F8B"
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
              children: " table_name("
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    column1 datatype,"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    column2 datatype,"
            })
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
              children: "-- \u4FEE\u6539\u8868\u7ED3\u6784\u793A\u4F8B"
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
              children: " table_name "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "ADD"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " column_name datatype;"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u4E0A\u8FF0\u64CD\u4F5C\uFF0C\u60A8\u53EF\u4EE5\u8F7B\u677E\u7BA1\u7406\u6570\u636E\u5E93\u4E2D\u7684\u8868\u7ED3\u6784\uFF0C\u4FDD\u6301\u6570\u636E\u7684\u5B8C\u6574\u6027\u548C\u4E00\u81F4\u6027\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u672C\u7AE0\u7684\u64CD\u4F5C\u6280\u5DE7\uFF0C\u76F8\u4FE1\u60A8\u5DF2\u7ECF\u638C\u63E1\u4E86\u5728IDEA\u4E2D\u4F7F\u7528MySQL\u6570\u636E\u5E93\u7684\u57FA\u672C\u64CD\u4F5C\u65B9\u6CD5\uFF0C\u5305\u62EC\u6570\u636E\u5E93\u5BFC\u822A\u3001SQL\u7F16\u8F91\u4E0E\u6267\u884C\u4EE5\u53CA\u6570\u636E\u5E93\u7BA1\u7406\u3002\u8FD9\u4E9B\u6280\u5DE7\u5C06\u5E2E\u52A9\u60A8\u66F4\u52A0\u9AD8\u6548\u5730\u8FDB\u884C\u6570\u636E\u5E93\u5F00\u53D1\u5DE5\u4F5C\uFF0C\u63D0\u5347\u5DE5\u4F5C\u6548\u7387\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "4-\u9AD8\u7EA7\u5E94\u7528\u4E0E\u6280\u5DE7",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#4-\u9AD8\u7EA7\u5E94\u7528\u4E0E\u6280\u5DE7",
        children: "#"
      }), "4. \u9AD8\u7EA7\u5E94\u7528\u4E0E\u6280\u5DE7"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u524D\u9762\u7684\u7AE0\u8282\u4E2D\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u5B66\u4E60\u4E86\u5982\u4F55\u5728IDEA\u4E2D\u8FDE\u63A5MySQL\u6570\u636E\u5E93\uFF0C\u5E76\u638C\u63E1\u4E86\u4E00\u4E9B\u57FA\u672C\u7684\u64CD\u4F5C\u6280\u5DE7\u3002\u5728\u8FD9\u4E00\u7AE0\u4E2D\uFF0C\u6211\u4EEC\u5C06\u8FDB\u4E00\u6B65\u6DF1\u5165\u63A2\u8BA8\u9AD8\u7EA7\u5E94\u7528\u4E0E\u6280\u5DE7\uFF0C\u5305\u62EC\u6570\u636E\u5E93\u7248\u672C\u63A7\u5236\u3001\u6570\u636E\u5E93\u8C03\u8BD5\u4E0E\u4F18\u5316\u4EE5\u53CA\u6570\u636E\u5E93\u90E8\u7F72\u4E0E\u5907\u4EFD\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "41-\u6570\u636E\u5E93\u7248\u672C\u63A7\u5236",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#41-\u6570\u636E\u5E93\u7248\u672C\u63A7\u5236",
        children: "#"
      }), "4.1 \u6570\u636E\u5E93\u7248\u672C\u63A7\u5236"]
    }), "\n", jsx(_components.p, {
      children: "\u6570\u636E\u5E93\u7248\u672C\u63A7\u5236\u662F\u975E\u5E38\u91CD\u8981\u7684\uFF0C\u5B83\u53EF\u4EE5\u5E2E\u52A9\u56E2\u961F\u534F\u4F5C\u3001\u8FFD\u8E2A\u6570\u636E\u53D8\u5316\u5386\u53F2\u4EE5\u53CA\u907F\u514D\u610F\u5916\u6570\u636E\u4E22\u5931\u3002\u5728\u8FD9\u4E00\u8282\uFF0C\u6211\u4EEC\u5C06\u4ECB\u7ECD\u5982\u4F55\u5229\u7528\u7248\u672C\u63A7\u5236\u5DE5\u5177\u6765\u7BA1\u7406\u6570\u636E\u5E93\u7684\u53D8\u5316\uFF0C\u4EE5\u53CA\u4E00\u4E9B\u7248\u672C\u7BA1\u7406\u7684\u6280\u5DE7\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "411-\u4F7F\u7528\u7248\u672C\u63A7\u5236\u5DE5\u5177",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#411-\u4F7F\u7528\u7248\u672C\u63A7\u5236\u5DE5\u5177",
        children: "#"
      }), "4.1.1 \u4F7F\u7528\u7248\u672C\u63A7\u5236\u5DE5\u5177"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u5B9E\u9645\u9879\u76EE\u4E2D\uFF0C\u6211\u4EEC\u5E38\u5E38\u4F1A\u9047\u5230\u591A\u4EBA\u540C\u65F6\u5BF9\u6570\u636E\u5E93\u8FDB\u884C\u64CD\u4F5C\u7684\u60C5\u51B5\uFF0C\u8FD9\u65F6\u5C31\u9700\u8981\u4F7F\u7528\u7248\u672C\u63A7\u5236\u5DE5\u5177\u6765\u7BA1\u7406\u6570\u636E\u5E93\u7684\u7ED3\u6784\u53D8\u5316\u3002\u5E38\u89C1\u7684\u7248\u672C\u63A7\u5236\u5DE5\u5177\u5305\u62ECGit\u3001SVN\u7B49\uFF0C\u901A\u8FC7\u8FD9\u4E9B\u5DE5\u5177\u53EF\u4EE5\u5B9E\u73B0\u5BF9\u6570\u636E\u5E93\u7ED3\u6784\u7684\u7248\u672C\u7BA1\u7406\u3002"
    }), "\n", jsxs(_components.h5, {
      id: "\u793A\u4F8B\u4EE3\u7801",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u793A\u4F8B\u4EE3\u7801",
        children: "#"
      }), "\u793A\u4F8B\u4EE3\u7801\uFF1A"]
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
              children: "-- \u521B\u5EFA\u65B0\u7684\u7248\u672C\u63A7\u5236\u5206\u652F"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "git checkout "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "b feature"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "/add-"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "new"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-table"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h4, {
      id: "412-\u7248\u672C\u7BA1\u7406\u6280\u5DE7",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#412-\u7248\u672C\u7BA1\u7406\u6280\u5DE7",
        children: "#"
      }), "4.1.2 \u7248\u672C\u7BA1\u7406\u6280\u5DE7"]
    }), "\n", jsx(_components.p, {
      children: "\u7248\u672C\u7BA1\u7406\u4E0D\u4EC5\u4EC5\u662F\u7B80\u5355\u7684\u63D0\u4EA4\u548C\u56DE\u6EDA\u64CD\u4F5C\uFF0C\u8FD8\u6D89\u53CA\u5230\u5206\u652F\u7BA1\u7406\u3001\u5408\u5E76\u51B2\u7A81\u89E3\u51B3\u3001\u7248\u672C\u53D1\u5E03\u7B49\u590D\u6742\u64CD\u4F5C\u3002\u5728\u4F7F\u7528\u7248\u672C\u63A7\u5236\u5DE5\u5177\u65F6\uFF0C\u9700\u8981\u6CE8\u610F\u9075\u5FAA\u56E2\u961F\u7684\u7248\u672C\u7BA1\u7406\u89C4\u8303\uFF0C\u4EE5\u53CA\u53CA\u65F6\u5907\u4EFD\u91CD\u8981\u6570\u636E\uFF0C\u4EE5\u9632\u6B62\u610F\u5916\u6570\u636E\u4E22\u5931\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "42-\u6570\u636E\u5E93\u8C03\u8BD5\u4E0E\u4F18\u5316",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#42-\u6570\u636E\u5E93\u8C03\u8BD5\u4E0E\u4F18\u5316",
        children: "#"
      }), "4.2 \u6570\u636E\u5E93\u8C03\u8BD5\u4E0E\u4F18\u5316"]
    }), "\n", jsx(_components.p, {
      children: "\u6570\u636E\u5E93\u7684\u6027\u80FD\u8C03\u4F18\u548C\u4EE3\u7801\u8C03\u8BD5\u662F\u6570\u636E\u5E93\u5F00\u53D1\u4E2D\u975E\u5E38\u91CD\u8981\u7684\u4E00\u73AF\uFF0C\u5B83\u53EF\u4EE5\u5E2E\u52A9\u63D0\u5347\u7CFB\u7EDF\u6027\u80FD\u548C\u4F18\u5316\u67E5\u8BE2\u901F\u5EA6\u3002\u5728\u8FD9\u4E00\u8282\uFF0C\u6211\u4EEC\u5C06\u4ECB\u7ECD\u4E00\u4E9B\u5E38\u7528\u7684\u6027\u80FD\u8C03\u4F18\u65B9\u6CD5\u548C\u4EE3\u7801\u8C03\u8BD5\u6280\u5DE7\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "421-\u6027\u80FD\u8C03\u4F18\u65B9\u6CD5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#421-\u6027\u80FD\u8C03\u4F18\u65B9\u6CD5",
        children: "#"
      }), "4.2.1 \u6027\u80FD\u8C03\u4F18\u65B9\u6CD5"]
    }), "\n", jsx(_components.p, {
      children: "\u6027\u80FD\u8C03\u4F18\u662F\u6570\u636E\u5E93\u5F00\u53D1\u4E2D\u7684\u91CD\u8981\u5DE5\u4F5C\u4E4B\u4E00\uFF0C\u901A\u8FC7\u4F18\u5316\u67E5\u8BE2\u8BED\u53E5\u3001\u7D22\u5F15\u8BBE\u8BA1\u3001\u670D\u52A1\u5668\u53C2\u6570\u8C03\u6574\u7B49\u65B9\u5F0F\u53EF\u4EE5\u63D0\u5347\u6570\u636E\u5E93\u7684\u54CD\u5E94\u901F\u5EA6\u548C\u5E76\u53D1\u80FD\u529B\u3002"
    }), "\n", jsxs(_components.h5, {
      id: "\u793A\u4F8B\u4EE3\u7801-1",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u793A\u4F8B\u4EE3\u7801-1",
        children: "#"
      }), "\u793A\u4F8B\u4EE3\u7801\uFF1A"]
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
              children: "-- \u521B\u5EFA\u7D22\u5F15\u4EE5\u4F18\u5316\u67E5\u8BE2\u901F\u5EA6"
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
              children: " tbl_name("
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "col_name"
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
      id: "422-\u4EE3\u7801\u8C03\u8BD5\u6280\u5DE7",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#422-\u4EE3\u7801\u8C03\u8BD5\u6280\u5DE7",
        children: "#"
      }), "4.2.2 \u4EE3\u7801\u8C03\u8BD5\u6280\u5DE7"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u8FDB\u884C\u6570\u636E\u5E93\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u6709\u65F6\u4F1A\u9047\u5230\u4E00\u4E9B\u590D\u6742\u7684\u67E5\u8BE2\u95EE\u9898\u6216\u8005\u4EE3\u7801\u903B\u8F91\u9519\u8BEF\uFF0C\u8FD9\u65F6\u9700\u8981\u5229\u7528\u8C03\u8BD5\u5DE5\u5177\u6765\u5B9A\u4F4D\u95EE\u9898\u5E76\u8FDB\u884C\u4FEE\u590D\u3002\u5E38\u89C1\u7684\u8C03\u8BD5\u6280\u5DE7\u5305\u62EC\u65E5\u5FD7\u6253\u5370\u3001SQL\u5206\u6790\u3001\u6027\u80FD\u76D1\u63A7\u7B49\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "43-\u6570\u636E\u5E93\u90E8\u7F72\u4E0E\u5907\u4EFD",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#43-\u6570\u636E\u5E93\u90E8\u7F72\u4E0E\u5907\u4EFD",
        children: "#"
      }), "4.3 \u6570\u636E\u5E93\u90E8\u7F72\u4E0E\u5907\u4EFD"]
    }), "\n", jsx(_components.p, {
      children: "\u6570\u636E\u5E93\u7684\u90E8\u7F72\u4E0E\u5907\u4EFD\u5DE5\u4F5C\u662F\u4FDD\u969C\u6570\u636E\u5B89\u5168\u548C\u7A33\u5B9A\u6027\u7684\u91CD\u8981\u624B\u6BB5\uFF0C\u5B83\u53EF\u4EE5\u9632\u6B62\u6570\u636E\u4E22\u5931\u548C\u4FDD\u969C\u7CFB\u7EDF\u7684\u53EF\u9760\u6027\u3002\u5728\u8FD9\u4E00\u8282\uFF0C\u6211\u4EEC\u5C06\u4ECB\u7ECD\u6570\u636E\u5E93\u8FC1\u79FB\u3001\u6570\u636E\u5907\u4EFD\u4E0E\u6062\u590D\u7B49\u5185\u5BB9\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "431-\u6570\u636E\u5E93\u8FC1\u79FB",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#431-\u6570\u636E\u5E93\u8FC1\u79FB",
        children: "#"
      }), "4.3.1 \u6570\u636E\u5E93\u8FC1\u79FB"]
    }), "\n", jsx(_components.p, {
      children: "\u6570\u636E\u5E93\u8FC1\u79FB\u662F\u5C06\u6570\u636E\u5E93\u4ECE\u4E00\u4E2A\u73AF\u5883\u8FC1\u79FB\u5230\u53E6\u4E00\u4E2A\u73AF\u5883\u7684\u8FC7\u7A0B\uFF0C\u5B83\u5305\u62EC\u6570\u636E\u5BFC\u51FA\u3001\u79FB\u690D\u3001\u5BFC\u5165\u7B49\u64CD\u4F5C\u3002\u5728\u6570\u636E\u5E93\u8FC1\u79FB\u8FC7\u7A0B\u4E2D\uFF0C\u9700\u8981\u786E\u4FDD\u6570\u636E\u7684\u5B8C\u6574\u6027\u548C\u4E00\u81F4\u6027\u3002"
    }), "\n", jsxs(_components.h5, {
      id: "\u793A\u4F8B\u4EE3\u7801-2",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u793A\u4F8B\u4EE3\u7801-2",
        children: "#"
      }), "\u793A\u4F8B\u4EE3\u7801\uFF1A"]
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
              children: "-- \u5BFC\u51FA\u6570\u636E"
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
              children: " dbname_backup.sql"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h4, {
      id: "432-\u6570\u636E\u5907\u4EFD\u4E0E\u6062\u590D",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#432-\u6570\u636E\u5907\u4EFD\u4E0E\u6062\u590D",
        children: "#"
      }), "4.3.2 \u6570\u636E\u5907\u4EFD\u4E0E\u6062\u590D"]
    }), "\n", jsx(_components.p, {
      children: "\u6570\u636E\u5907\u4EFD\u662F\u4FDD\u969C\u6570\u636E\u5B89\u5168\u7684\u6709\u6548\u624B\u6BB5\uFF0C\u901A\u8FC7\u5B9A\u671F\u5907\u4EFD\u6570\u636E\u5E93\u53EF\u4EE5\u907F\u514D\u6570\u636E\u4E22\u5931\u7684\u98CE\u9669\u3002\u800C\u5728\u610F\u5916\u60C5\u51B5\u53D1\u751F\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5907\u4EFD\u6587\u4EF6\u8FDB\u884C\u6570\u636E\u6062\u590D\uFF0C\u4FDD\u969C\u7CFB\u7EDF\u7A33\u5B9A\u8FD0\u884C\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u672C\u7AE0\u5185\u5BB9\u7684\u5B66\u4E60\uFF0C\u6211\u4EEC\u6DF1\u5165\u4E86\u89E3\u4E86\u6570\u636E\u5E93\u7684\u9AD8\u7EA7\u5E94\u7528\u4E0E\u6280\u5DE7\uFF0C\u5305\u62EC\u6570\u636E\u5E93\u7248\u672C\u63A7\u5236\u3001\u6027\u80FD\u8C03\u4F18\u3001\u4EE3\u7801\u8C03\u8BD5\u4EE5\u53CA\u6570\u636E\u5907\u4EFD\u4E0E\u6062\u590D\u7B49\u5185\u5BB9\uFF0C\u8FD9\u4E9B\u6280\u5DE7\u5C06\u5E2E\u52A9\u6211\u4EEC\u66F4\u52A0\u9AD8\u6548\u5730\u8FDB\u884C\u6570\u636E\u5E93\u5F00\u53D1\u548C\u7EF4\u62A4\u5DE5\u4F5C\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "5-\u9AD8\u7EA7\u5E94\u7528\u4E0E\u6280\u5DE7\u8FDB\u9636",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#5-\u9AD8\u7EA7\u5E94\u7528\u4E0E\u6280\u5DE7\u8FDB\u9636",
        children: "#"
      }), "5. \u9AD8\u7EA7\u5E94\u7528\u4E0E\u6280\u5DE7\u8FDB\u9636"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u524D\u9762\u7684\u7AE0\u8282\u4E2D\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u5B66\u4E60\u4E86\u5982\u4F55\u5728IDEA\u4E2D\u8FDE\u63A5MySQL\u6570\u636E\u5E93\u3001\u8FDB\u884C\u73AF\u5883\u914D\u7F6E\u4EE5\u53CA\u57FA\u672C\u7684\u64CD\u4F5C\u6280\u5DE7\u3002\u5728\u672C\u7AE0\u4E2D\uFF0C\u6211\u4EEC\u5C06\u6DF1\u5165\u63A2\u8BA8MySQL\u6570\u636E\u5E93\u7684\u9AD8\u7EA7\u5E94\u7528\u4E0E\u6280\u5DE7\uFF0C\u5305\u62EC\u6570\u636E\u5E93\u7248\u672C\u63A7\u5236\u3001\u8C03\u8BD5\u4F18\u5316\u3001\u90E8\u7F72\u5907\u4EFD\u7B49\u5185\u5BB9\uFF0C\u5E2E\u52A9\u60A8\u66F4\u597D\u5730\u7BA1\u7406\u6570\u636E\u5E93\uFF0C\u63D0\u5347\u5DE5\u4F5C\u6548\u7387\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "41-\u6570\u636E\u5E93\u7248\u672C\u63A7\u5236-1",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#41-\u6570\u636E\u5E93\u7248\u672C\u63A7\u5236-1",
        children: "#"
      }), "4.1 \u6570\u636E\u5E93\u7248\u672C\u63A7\u5236"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u8F6F\u4EF6\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u6570\u636E\u5E93\u7248\u672C\u63A7\u5236\u662F\u975E\u5E38\u91CD\u8981\u7684\u4E00\u73AF\u3002\u901A\u8FC7\u7248\u672C\u63A7\u5236\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8FFD\u8E2A\u6570\u636E\u5E93\u7ED3\u6784\u7684\u53D8\u5316\uFF0C\u7BA1\u7406\u4E0D\u540C\u7248\u672C\u4E4B\u95F4\u7684\u5DEE\u5F02\uFF0C\u786E\u4FDD\u6570\u636E\u5E93\u7684\u7A33\u5B9A\u6027\u548C\u4E00\u81F4\u6027\u3002\u4E0B\u9762\u8BA9\u6211\u4EEC\u8BE6\u7EC6\u4E86\u89E3\u4E00\u4E0B\u6570\u636E\u5E93\u7248\u672C\u63A7\u5236\u7684\u76F8\u5173\u6280\u5DE7\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "411-\u4F7F\u7528\u7248\u672C\u63A7\u5236\u5DE5\u5177-1",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#411-\u4F7F\u7528\u7248\u672C\u63A7\u5236\u5DE5\u5177-1",
        children: "#"
      }), "4.1.1 \u4F7F\u7528\u7248\u672C\u63A7\u5236\u5DE5\u5177"]
    }), "\n", jsx(_components.p, {
      children: "\u4E3A\u4E86\u5B9E\u73B0\u6570\u636E\u5E93\u7248\u672C\u63A7\u5236\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u4E13\u95E8\u7684\u7248\u672C\u63A7\u5236\u5DE5\u5177\uFF0C\u5982Git\u3001SVN\u7B49\u3002\u8FD9\u4E9B\u5DE5\u5177\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u8BB0\u5F55\u6570\u636E\u5E93\u7ED3\u6784\u7684\u53D8\u5316\uFF0C\u7BA1\u7406\u4E0D\u540C\u7248\u672C\u7684SQL\u811A\u672C\uFF0C\u5E76\u8FDB\u884C\u7248\u672C\u56DE\u6EDA\u548C\u5408\u5E76\u64CD\u4F5C\u3002"
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
              children: "# \u514B\u9686\u8FDC\u7A0B\u4ED3\u5E93"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "git clone "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "repository_url"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "# \u6DFB\u52A0SQL\u811A\u672C\u5230\u7248\u672C\u63A7\u5236"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "git add "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "sql_script.sql"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "# \u63D0\u4EA4\u66F4\u6539"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "git commit -m "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Add new table"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "# \u5C06\u66F4\u6539\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "git push origin master"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h4, {
      id: "412-\u7248\u672C\u7BA1\u7406\u6280\u5DE7-1",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#412-\u7248\u672C\u7BA1\u7406\u6280\u5DE7-1",
        children: "#"
      }), "4.1.2 \u7248\u672C\u7BA1\u7406\u6280\u5DE7"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u8FDB\u884C\u6570\u636E\u5E93\u7248\u672C\u63A7\u5236\u65F6\uFF0C\u6709\u4E00\u4E9B\u6280\u5DE7\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u66F4\u597D\u5730\u7BA1\u7406\u6570\u636E\u5E93\u53D8\u66F4\u8BB0\u5F55\u3002\u6BD4\u5982\u7ED9\u6BCF\u4E2A\u7248\u672C\u6DFB\u52A0\u8BE6\u7EC6\u7684\u6CE8\u91CA\u8BF4\u660E\u3001\u5B9A\u671F\u5907\u4EFD\u6570\u636E\u5E93\u3001\u5B9A\u671F\u5BA1\u6838\u7248\u672C\u5DEE\u5F02\u7B49\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "42-\u6570\u636E\u5E93\u8C03\u8BD5\u4E0E\u4F18\u5316-1",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#42-\u6570\u636E\u5E93\u8C03\u8BD5\u4E0E\u4F18\u5316-1",
        children: "#"
      }), "4.2 \u6570\u636E\u5E93\u8C03\u8BD5\u4E0E\u4F18\u5316"]
    }), "\n", jsx(_components.p, {
      children: "\u6570\u636E\u5E93\u8C03\u8BD5\u4E0E\u4F18\u5316\u662F\u6570\u636E\u5E93\u5F00\u53D1\u4E2D\u975E\u5E38\u91CD\u8981\u7684\u4E00\u90E8\u5206\uFF0C\u901A\u8FC7\u8C03\u8BD5\u4E0E\u4F18\u5316\u53EF\u4EE5\u63D0\u9AD8\u6570\u636E\u5E93\u7684\u6027\u80FD\u548C\u7A33\u5B9A\u6027\u3002\u63A5\u4E0B\u6765\u6211\u4EEC\u5C06\u4ECB\u7ECD\u4E00\u4E9B\u5E38\u7528\u7684\u6027\u80FD\u8C03\u4F18\u65B9\u6CD5\u548C\u4EE3\u7801\u8C03\u8BD5\u6280\u5DE7\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "421-\u6027\u80FD\u8C03\u4F18\u65B9\u6CD5-1",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#421-\u6027\u80FD\u8C03\u4F18\u65B9\u6CD5-1",
        children: "#"
      }), "4.2.1 \u6027\u80FD\u8C03\u4F18\u65B9\u6CD5"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "\u5EFA\u7ACB\u5408\u9002\u7684\u7D22\u5F15"
        }), "\uFF1A\u7D22\u5F15\u53EF\u4EE5\u52A0\u5FEB\u6570\u636E\u68C0\u7D22\u901F\u5EA6\uFF0C\u907F\u514D\u5168\u8868\u626B\u63CF\u3002"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "\u4F18\u5316SQL\u67E5\u8BE2\u8BED\u53E5"
        }), "\uFF1A\u907F\u514D\u4F7F\u7528 ", jsx(_components.code, {
          children: "SELECT *"
        }), "\uFF0C\u5C3D\u91CF\u4F7F\u7528\u5177\u4F53\u5B57\u6BB5\u540D\uFF0C\u907F\u514D\u591A\u8868\u8FDE\u63A5\u7B49\u64CD\u4F5C\u3002"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "\u5B9A\u65F6\u6E05\u7406\u65E0\u7528\u6570\u636E"
        }), "\uFF1A\u5B9A\u671F\u6E05\u7406\u8FC7\u671F\u65E0\u7528\u6570\u636E\uFF0C\u51CF\u5C11\u6570\u636E\u5E93\u8D1F\u62C5\u3002"]
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
              children: "-- \u4F18\u5316\u67E5\u8BE2\u8BED\u53E5"
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
              children: " condition;"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h4, {
      id: "422-\u4EE3\u7801\u8C03\u8BD5\u6280\u5DE7-1",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#422-\u4EE3\u7801\u8C03\u8BD5\u6280\u5DE7-1",
        children: "#"
      }), "4.2.2 \u4EE3\u7801\u8C03\u8BD5\u6280\u5DE7"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u6570\u636E\u5E93\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u7ECF\u5E38\u9700\u8981\u8FDB\u884C\u8C03\u8BD5\u6765\u5B9A\u4F4D\u548C\u89E3\u51B3\u95EE\u9898\u3002\u4F7F\u7528IDEA\u63D0\u4F9B\u7684\u8C03\u8BD5\u5DE5\u5177\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u5FEB\u901F\u627E\u5230\u95EE\u9898\u6240\u5728\uFF0C\u4E0B\u9762\u662F\u4E00\u4E9B\u5E38\u7528\u7684\u8C03\u8BD5\u6280\u5DE7\uFF1A"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "\u8BBE\u7F6E\u65AD\u70B9"
        }), "\uFF1A\u5728SQL\u8BED\u53E5\u6216\u5B58\u50A8\u8FC7\u7A0B\u4E2D\u8BBE\u7F6E\u65AD\u70B9\uFF0C\u4E00\u6B65\u6B65\u6267\u884C\u67E5\u770B\u53D8\u91CF\u53D6\u503C\u3002"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "\u8F93\u51FA\u8C03\u8BD5\u4FE1\u606F"
        }), "\uFF1A\u4F7F\u7528 ", jsx(_components.code, {
          children: "PRINT"
        }), " \u6216 ", jsx(_components.code, {
          children: "SELECT"
        }), " \u8BED\u53E5\u8F93\u51FA\u4E2D\u95F4\u7ED3\u679C\uFF0C\u8F85\u52A9\u5206\u6790\u95EE\u9898\u3002"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "\u5229\u7528IDEA\u8C03\u8BD5\u5DE5\u5177"
        }), "\uFF1AIDEA\u63D0\u4F9B\u4E86\u5F3A\u5927\u7684\u8C03\u8BD5\u529F\u80FD\uFF0C\u53EF\u4EE5\u9010\u884C\u6267\u884CSQL\u8BED\u53E5\uFF0C\u67E5\u770B\u7ED3\u679C\u53CA\u53D8\u91CF\u503C\u3002"]
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "43-\u6570\u636E\u5E93\u90E8\u7F72\u4E0E\u5907\u4EFD-1",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#43-\u6570\u636E\u5E93\u90E8\u7F72\u4E0E\u5907\u4EFD-1",
        children: "#"
      }), "4.3 \u6570\u636E\u5E93\u90E8\u7F72\u4E0E\u5907\u4EFD"]
    }), "\n", jsx(_components.p, {
      children: "\u6570\u636E\u5E93\u90E8\u7F72\u4E0E\u5907\u4EFD\u662F\u6570\u636E\u5E93\u7BA1\u7406\u4E2D\u81F3\u5173\u91CD\u8981\u7684\u4E00\u73AF\uFF0C\u5B83\u6D89\u53CA\u5230\u6570\u636E\u5E93\u7684\u8FC1\u79FB\u3001\u5907\u4EFD\u4E0E\u6570\u636E\u6062\u590D\u7B49\u5DE5\u4F5C\u3002\u4E0B\u9762\u6211\u4EEC\u5C06\u4ECB\u7ECD\u4E00\u4E9B\u6570\u636E\u5E93\u90E8\u7F72\u4E0E\u5907\u4EFD\u7684\u6280\u5DE7\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "431-\u6570\u636E\u5E93\u8FC1\u79FB-1",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#431-\u6570\u636E\u5E93\u8FC1\u79FB-1",
        children: "#"
      }), "4.3.1 \u6570\u636E\u5E93\u8FC1\u79FB"]
    }), "\n", jsxs(_components.p, {
      children: ["\u5728\u8FDB\u884C\u6570\u636E\u5E93\u8FC1\u79FB\u65F6\uFF0C\u6211\u4EEC\u9700\u8981\u6CE8\u610F\u6570\u636E\u5E93\u7684\u6574\u4F53\u7ED3\u6784\u548C\u6570\u636E\u7684\u4E00\u81F4\u6027\u3002\u53EF\u4EE5\u4F7F\u7528 ", jsx(_components.code, {
        children: "mysqldump"
      }), " \u5DE5\u5177\u5BFC\u51FA\u6570\u636E\u5E93\u7ED3\u6784\u548C\u6570\u636E\uFF0C\u7136\u540E\u5728\u65B0\u73AF\u5883\u4E2D\u5BFC\u5165\u6570\u636E\u3002"]
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
              children: "# \u5BFC\u51FA\u6570\u636E\u5E93"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "mysqldump -u "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "username"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " -p "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "database_name"
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
                color: "#616E88"
              },
              children: "# \u5BFC\u5165\u6570\u636E\u5E93"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "mysql -u "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "username"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " -p "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "database_name"
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
    }), "\n", jsxs(_components.h4, {
      id: "432-\u6570\u636E\u5907\u4EFD\u4E0E\u6062\u590D-1",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#432-\u6570\u636E\u5907\u4EFD\u4E0E\u6062\u590D-1",
        children: "#"
      }), "4.3.2 \u6570\u636E\u5907\u4EFD\u4E0E\u6062\u590D"]
    }), "\n", jsx(_components.p, {
      children: "\u5B9A\u671F\u8FDB\u884C\u6570\u636E\u5E93\u5907\u4EFD\u662F\u975E\u5E38\u91CD\u8981\u7684\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u5728\u6570\u636E\u4E22\u5931\u65F6\u53CA\u65F6\u6062\u590D\u3002\u53EF\u4EE5\u4F7F\u7528\u81EA\u52A8\u5316\u5DE5\u5177\u6216\u5B9A\u65F6\u4EFB\u52A1\u6765\u5B9A\u671F\u5907\u4EFD\u6570\u636E\u5E93\uFF0C\u786E\u4FDD\u6570\u636E\u7684\u5B89\u5168\u6027\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u5230\u6B64\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u4ECB\u7ECD\u4E86MySQL\u6570\u636E\u5E93\u7684\u9AD8\u7EA7\u5E94\u7528\u4E0E\u6280\u5DE7\uFF0C\u5305\u62EC\u6570\u636E\u5E93\u7248\u672C\u63A7\u5236\u3001\u8C03\u8BD5\u4F18\u5316\u3001\u90E8\u7F72\u5907\u4EFD\u7B49\u5185\u5BB9\u3002\u8FD9\u4E9B\u6280\u5DE7\u53EF\u4EE5\u5E2E\u52A9\u60A8\u66F4\u597D\u5730\u7BA1\u7406\u6570\u636E\u5E93\uFF0C\u63D0\u9AD8\u5DE5\u4F5C\u6548\u7387\u3002"
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

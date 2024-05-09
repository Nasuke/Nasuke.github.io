import { jsx, jsxs, Fragment } from "react/jsx-runtime";
const frontmatter = void 0;
const toc = [{
  "id": "ssh\u96A7\u9053\u7684\u57FA\u672C\u539F\u7406",
  "text": "SSH\u96A7\u9053\u7684\u57FA\u672C\u539F\u7406",
  "depth": 3
}, {
  "id": "ssh\u96A7\u9053\u7684\u5E94\u7528\u573A\u666F",
  "text": "SSH\u96A7\u9053\u7684\u5E94\u7528\u573A\u666F",
  "depth": 3
}, {
  "id": "\u4F18\u52BF",
  "text": "\u4F18\u52BF",
  "depth": 3
}, {
  "id": "31-\u51C6\u5907\u5DE5\u4F5C\u53CA\u524D\u63D0\u6761\u4EF6",
  "text": "3.1 \u51C6\u5907\u5DE5\u4F5C\u53CA\u524D\u63D0\u6761\u4EF6",
  "depth": 4
}, {
  "id": "32-\u521B\u5EFAssh\u5BC6\u94A5\u5BF9",
  "text": "3.2 \u521B\u5EFASSH\u5BC6\u94A5\u5BF9",
  "depth": 4
}, {
  "id": "33-\u5728\u672C\u5730\u673A\u5668\u4E0A\u914D\u7F6Essh\u8FDE\u63A5",
  "text": "3.3 \u5728\u672C\u5730\u673A\u5668\u4E0A\u914D\u7F6ESSH\u8FDE\u63A5",
  "depth": 4
}, {
  "id": "\u603B\u7ED3",
  "text": "\u603B\u7ED3",
  "depth": 4
}, {
  "id": "41-\u914D\u7F6Eidea\u5F00\u53D1\u73AF\u5883",
  "text": "4.1 \u914D\u7F6EIDEA\u5F00\u53D1\u73AF\u5883",
  "depth": 3
}, {
  "id": "42-\u8BBE\u7F6Essh\u96A7\u9053",
  "text": "4.2 \u8BBE\u7F6ESSH\u96A7\u9053",
  "depth": 3
}, {
  "id": "421-\u5728idea\u4E2D\u8BBE\u7F6E\u6570\u636E\u5E93\u8FDE\u63A5",
  "text": "4.2.1 \u5728IDEA\u4E2D\u8BBE\u7F6E\u6570\u636E\u5E93\u8FDE\u63A5",
  "depth": 4
}, {
  "id": "422-\u8BBE\u7F6Essh\u96A7\u9053\u8FDE\u63A5\u65B9\u5F0F",
  "text": "4.2.2 \u8BBE\u7F6ESSH\u96A7\u9053\u8FDE\u63A5\u65B9\u5F0F",
  "depth": 4
}, {
  "id": "43-\u6D4B\u8BD5\u8FDE\u63A5\u548C\u8C03\u8BD5",
  "text": "4.3 \u6D4B\u8BD5\u8FDE\u63A5\u548C\u8C03\u8BD5",
  "depth": 3
}, {
  "id": "51-ssh\u8FDE\u63A5mysql\u7684\u6027\u80FD\u4F18\u5316",
  "text": "5.1 SSH\u8FDE\u63A5MySQL\u7684\u6027\u80FD\u4F18\u5316",
  "depth": 3
}, {
  "id": "52-\u5E38\u89C1\u95EE\u9898\u53CA\u89E3\u51B3\u65B9\u6848",
  "text": "5.2 \u5E38\u89C1\u95EE\u9898\u53CA\u89E3\u51B3\u65B9\u6848",
  "depth": 3
}, {
  "id": "521-\u8FDE\u63A5\u8D85\u65F6\u95EE\u9898\u89E3\u51B3",
  "text": "5.2.1 \u8FDE\u63A5\u8D85\u65F6\u95EE\u9898\u89E3\u51B3",
  "depth": 4
}, {
  "id": "522-\u6570\u636E\u4F20\u8F93\u5F02\u5E38\u5904\u7406",
  "text": "5.2.2 \u6570\u636E\u4F20\u8F93\u5F02\u5E38\u5904\u7406",
  "depth": 4
}];
const title = "5. \u4F18\u5316\u4E0E\u6545\u969C\u6392\u9664";
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    p: "p",
    h3: "h3",
    ul: "ul",
    li: "li",
    strong: "strong",
    h4: "h4",
    h5: "h5",
    div: "div",
    button: "button",
    span: "span",
    pre: "pre",
    code: "code",
    ol: "ol"
  }, props.components);
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "1-\u5F15\u8A00",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#1-\u5F15\u8A00",
        children: "#"
      }), "1. \u5F15\u8A00"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u73B0\u4EE3\u7684\u8F6F\u4EF6\u5F00\u53D1\u548C\u6570\u636E\u7BA1\u7406\u4E2D\uFF0C\u4F7F\u7528SSH\u96A7\u9053\u8FDE\u63A5MySQL\u5DF2\u7ECF\u6210\u4E3A\u4E00\u79CD\u5E38\u89C1\u7684\u505A\u6CD5\u3002\u901A\u8FC7SSH\u534F\u8BAE\u5EFA\u7ACB\u5B89\u5168\u901A\u9053\uFF0C\u53EF\u4EE5\u4FDD\u8BC1\u6570\u636E\u4F20\u8F93\u7684\u5B89\u5168\u6027\u548C\u53EF\u9760\u6027\u3002\u672C\u6587\u5C06\u4ECB\u7ECD\u5982\u4F55\u914D\u7F6ESSH\u8FDE\u63A5MySQL\uFF0C\u4EE5\u53CA\u5982\u4F55\u5728IDEA\u4E2D\u4F7F\u7528SSH\u96A7\u9053\u8FDE\u63A5MySQL\u8FDB\u884C\u5F00\u53D1\u548C\u8C03\u8BD5\u3002\u901A\u8FC7\u672C\u6587\u7684\u5B66\u4E60\uFF0C\u8BFB\u8005\u5C06\u80FD\u591F\u5168\u9762\u638C\u63E1SSH\u96A7\u9053\u8FDE\u63A5\u7684\u57FA\u7840\u77E5\u8BC6\uFF0C\u7406\u89E3SSH\u8FDE\u63A5MySQL\u7684\u4F18\u52BF\uFF0C\u914D\u7F6E\u5B9E\u9645\u7684\u8FDE\u63A5\u73AF\u5883\uFF0C\u5E76\u8FDB\u884C\u6027\u80FD\u4F18\u5316\u53CA\u6545\u969C\u6392\u9664\uFF0C\u6700\u7EC8\u63D0\u5347\u5DE5\u4F5C\u6548\u7387\u548C\u6570\u636E\u5B89\u5168\u6027\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "21-\u4EC0\u4E48\u662Fssh\u96A7\u9053",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#21-\u4EC0\u4E48\u662Fssh\u96A7\u9053",
        children: "#"
      }), "2.1 \u4EC0\u4E48\u662FSSH\u96A7\u9053"]
    }), "\n", jsx(_components.p, {
      children: "SSH\u96A7\u9053\u662F\u4E00\u79CD\u5B89\u5168\u52A0\u5BC6\u7684\u901A\u4FE1\u6E20\u9053\uFF0C\u7528\u4E8E\u5728\u4E0D\u5B89\u5168\u7684\u7F51\u7EDC\u4E2D\u4F20\u8F93\u6570\u636E\uFF0C\u4FDD\u969C\u6570\u636E\u4F20\u8F93\u8FC7\u7A0B\u7684\u5B89\u5168\u6027\u3002\u901A\u8FC7SSH\u534F\u8BAE\uFF0C\u53EF\u4EE5\u5728\u672C\u5730\u4E3B\u673A\u548C\u8FDC\u7A0B\u670D\u52A1\u5668\u4E4B\u95F4\u5EFA\u7ACB\u4E00\u4E2A\u52A0\u5BC6\u7684\u901A\u9053\uFF0C\u4F7F\u5F97\u6570\u636E\u5728\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u4E0D\u6613\u88AB\u7A83\u53D6\u6216\u7BE1\u6539\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "ssh\u96A7\u9053\u7684\u57FA\u672C\u539F\u7406",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#ssh\u96A7\u9053\u7684\u57FA\u672C\u539F\u7406",
        children: "#"
      }), "SSH\u96A7\u9053\u7684\u57FA\u672C\u539F\u7406"]
    }), "\n", jsx(_components.p, {
      children: "SSH\u96A7\u9053\u5B9E\u8D28\u4E0A\u662F\u901A\u8FC7\u5C06\u6570\u636E\u5305\u5728\u672C\u5730\u4E3B\u673A\u7AEF\u548C\u8FDC\u7A0B\u670D\u52A1\u5668\u7AEF\u8FDB\u884C\u5C01\u88C5\u548C\u89E3\u5C01\u88C5\uFF0C\u7136\u540E\u901A\u8FC7\u52A0\u5BC6\u7684\u901A\u9053\u5728\u4E24\u8005\u4E4B\u95F4\u4F20\u8F93\u3002\u8FD9\u6837\uFF0C\u5373\u4F7F\u5728\u4E0D\u5B89\u5168\u7684\u7F51\u7EDC\u73AF\u5883\u4E0B\uFF0C\u4E5F\u53EF\u4EE5\u786E\u4FDD\u6570\u636E\u7684\u673A\u5BC6\u6027\u548C\u5B8C\u6574\u6027\u3002"
    }), "\n", jsx(_components.p, {
      children: "SSH\u96A7\u9053\u901A\u5E38\u5206\u4E3A\u672C\u5730\u7AEF\u53E3\u8F6C\u53D1\u548C\u8FDC\u7A0B\u7AEF\u53E3\u8F6C\u53D1\u4E24\u79CD\u6A21\u5F0F\u3002\u672C\u5730\u7AEF\u53E3\u8F6C\u53D1\u662F\u5C06\u672C\u5730\u4E3B\u673A\u7684\u67D0\u4E2A\u7AEF\u53E3\u6570\u636E\u8F6C\u53D1\u5230\u8FDC\u7A0B\u670D\u52A1\u5668\u4E0A\uFF0C\u800C\u8FDC\u7A0B\u7AEF\u53E3\u8F6C\u53D1\u5219\u662F\u76F8\u53CD\u7684\u64CD\u4F5C\uFF0C\u5C06\u8FDC\u7A0B\u670D\u52A1\u5668\u7684\u67D0\u4E2A\u7AEF\u53E3\u6570\u636E\u8F6C\u53D1\u5230\u672C\u5730\u4E3B\u673A\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "ssh\u96A7\u9053\u7684\u5E94\u7528\u573A\u666F",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#ssh\u96A7\u9053\u7684\u5E94\u7528\u573A\u666F",
        children: "#"
      }), "SSH\u96A7\u9053\u7684\u5E94\u7528\u573A\u666F"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "\u8FDC\u7A0B\u7BA1\u7406"
        }), ": \u901A\u8FC7SSH\u96A7\u9053\uFF0C\u53EF\u4EE5\u8FDC\u7A0B\u7BA1\u7406\u670D\u52A1\u5668\uFF0C\u8FDB\u884C\u6587\u4EF6\u4F20\u8F93\u3001\u8FDC\u7A0B\u547D\u4EE4\u6267\u884C\u7B49\u64CD\u4F5C\u3002"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "\u52A0\u5BC6\u901A\u4FE1"
        }), ": \u5728\u4E0D\u53D7\u4FE1\u4EFB\u7684\u516C\u5171\u7F51\u7EDC\u4E2D\uFF0C\u4F7F\u7528SSH\u96A7\u9053\u53EF\u4EE5\u52A0\u5BC6\u901A\u4FE1\u5185\u5BB9\uFF0C\u9632\u6B62\u4FE1\u606F\u6CC4\u9732\u3002"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "\u8BBF\u95EE\u5185\u90E8\u8D44\u6E90"
        }), ": \u53EF\u4EE5\u901A\u8FC7SSH\u96A7\u9053\u8BBF\u95EE\u5185\u90E8\u7F51\u7EDC\u8D44\u6E90\uFF0C\u7ED5\u8FC7\u9632\u706B\u5899\u7B49\u9650\u5236\u3002"]
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "\u4F18\u52BF",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u4F18\u52BF",
        children: "#"
      }), "\u4F18\u52BF"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "\u5B89\u5168\u6027"
        }), ": SSH\u96A7\u9053\u91C7\u7528\u52A0\u5BC6\u901A\u4FE1\uFF0C\u6570\u636E\u4F20\u8F93\u66F4\u52A0\u5B89\u5168\u53EF\u9760\u3002"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "\u7075\u6D3B\u6027"
        }), ": \u652F\u6301\u591A\u79CD\u534F\u8BAE\u7684\u8F6C\u53D1\uFF0C\u4F7F\u5F97\u5E94\u7528\u8303\u56F4\u66F4\u52A0\u5E7F\u6CDB\u3002"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "\u4FBF\u6377\u6027"
        }), ": \u914D\u7F6E\u7B80\u5355\uFF0C\u6613\u4E8E\u90E8\u7F72\u548C\u7BA1\u7406\u3002"]
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u4EE5\u4E0A\u5185\u5BB9\u53EF\u4EE5\u521D\u6B65\u4E86\u89E3SSH\u96A7\u9053\u7684\u57FA\u672C\u6982\u5FF5\u53CA\u539F\u7406\uFF0C\u63A5\u4E0B\u6765\u5C06\u6DF1\u5165\u5206\u6790SSH\u534F\u8BAE\u7684\u5177\u4F53\u5DE5\u4F5C\u673A\u5236\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "3-\u914D\u7F6Essh\u8FDE\u63A5mysql",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#3-\u914D\u7F6Essh\u8FDE\u63A5mysql",
        children: "#"
      }), "3. \u914D\u7F6ESSH\u8FDE\u63A5MySQL"]
    }), "\n", jsx(_components.p, {
      children: "SSH\uFF08Secure Shell\uFF09\u662F\u4E00\u79CD\u7528\u4E8E\u5728\u4E0D\u5B89\u5168\u7F51\u7EDC\u4E0A\u5B89\u5168\u4F20\u8F93\u6570\u636E\u7684\u52A0\u5BC6\u534F\u8BAE\uFF0C\u4E5F\u53EF\u4EE5\u7528\u6765\u5EFA\u7ACB\u5B89\u5168\u7684\u8FDE\u63A5\u3002\u5728\u8FD9\u4E00\u7AE0\u8282\u4E2D\uFF0C\u6211\u4EEC\u5C06\u8BE6\u7EC6\u4ECB\u7ECD\u5982\u4F55\u914D\u7F6ESSH\u8FDE\u63A5MySQL\uFF0C\u5305\u62EC\u51C6\u5907\u5DE5\u4F5C\u53CA\u524D\u63D0\u6761\u4EF6\u3001\u521B\u5EFASSH\u5BC6\u94A5\u5BF9\u4EE5\u53CA\u5728\u672C\u5730\u673A\u5668\u4E0A\u914D\u7F6ESSH\u8FDE\u63A5\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "31-\u51C6\u5907\u5DE5\u4F5C\u53CA\u524D\u63D0\u6761\u4EF6",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#31-\u51C6\u5907\u5DE5\u4F5C\u53CA\u524D\u63D0\u6761\u4EF6",
        children: "#"
      }), "3.1 \u51C6\u5907\u5DE5\u4F5C\u53CA\u524D\u63D0\u6761\u4EF6"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u5F00\u59CB\u914D\u7F6ESSH\u8FDE\u63A5MySQL\u4E4B\u524D\uFF0C\u9700\u8981\u8FDB\u884C\u4E00\u4E9B\u51C6\u5907\u5DE5\u4F5C\u548C\u786E\u4FDD\u6EE1\u8DB3\u4E00\u4E9B\u524D\u63D0\u6761\u4EF6\u3002"
    }), "\n", jsxs(_components.h5, {
      id: "311-\u5B89\u88C5openssh",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#311-\u5B89\u88C5openssh",
        children: "#"
      }), "3.1.1 \u5B89\u88C5OpenSSH"]
    }), "\n", jsx(_components.p, {
      children: "\u9996\u5148\uFF0C\u786E\u4FDD\u4F60\u7684\u7CFB\u7EDF\u4E0A\u5DF2\u7ECF\u5B89\u88C5\u4E86OpenSSH\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u68C0\u67E5OpenSSH\u662F\u5426\u5DF2\u5B89\u88C5\uFF1A"
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
              children: "sudo apt update"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "sudo apt install openssh-server"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u542F\u52A8SSH\u670D\u52A1\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F\u52A8\uFF1A"
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
              children: "sudo systemctl start ssh"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "sudo systemctl "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "enable"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ssh"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h5, {
      id: "312-\u914D\u7F6Emysql\u670D\u52A1\u5668",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#312-\u914D\u7F6Emysql\u670D\u52A1\u5668",
        children: "#"
      }), "3.1.2 \u914D\u7F6EMySQL\u670D\u52A1\u5668"]
    }), "\n", jsxs(_components.p, {
      children: ["\u53E6\u5916\uFF0C\u786E\u4FDDMySQL\u670D\u52A1\u5668\u5DF2\u6B63\u786E\u914D\u7F6E\u5E76\u5141\u8BB8\u8FDC\u7A0B\u8FDE\u63A5\u3002\u5728MySQL\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u9700\u8981\u5C06\u7ED1\u5B9A\u5730\u5740\u8BBE\u7F6E\u4E3A ", jsx(_components.code, {
        children: "0.0.0.0"
      }), "\uFF1A"]
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
              children: "sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u627E\u5230\u5E76\u4FEE\u6539\u5982\u4E0B\u884C\uFF1A"
    }), "\n", jsx(_components.pre, {
      children: jsx(_components.code, {
        children: "bind-address            = 0.0.0.0\n"
      })
    }), "\n", jsx(_components.p, {
      children: "\u4FDD\u5B58\u5E76\u9000\u51FA\u914D\u7F6E\u6587\u4EF6\uFF0C\u7136\u540E\u91CD\u542FMySQL\u670D\u52A1\uFF1A"
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
              children: "sudo systemctl restart mysql"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h4, {
      id: "32-\u521B\u5EFAssh\u5BC6\u94A5\u5BF9",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#32-\u521B\u5EFAssh\u5BC6\u94A5\u5BF9",
        children: "#"
      }), "3.2 \u521B\u5EFASSH\u5BC6\u94A5\u5BF9"]
    }), "\n", jsx(_components.p, {
      children: "\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u9700\u8981\u521B\u5EFASSH\u5BC6\u94A5\u5BF9\uFF0C\u7528\u4E8E\u5B89\u5168\u5730\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1\u3002\u5728\u672C\u5730\u673A\u5668\u4E0A\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u751F\u6210SSH\u5BC6\u94A5\u5BF9\uFF1A"
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
              children: "ssh-keygen -t rsa"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.p, {
      children: ["\u6309\u7167\u63D0\u793A\u5B8C\u6210\u5BC6\u94A5\u5BF9\u7684\u751F\u6210\u8FC7\u7A0B\uFF0C\u5BC6\u94A5\u5C06\u4FDD\u5B58\u5728 ", jsx(_components.code, {
        children: "~/.ssh/id_rsa"
      }), "\u3002"]
    }), "\n", jsxs(_components.h4, {
      id: "33-\u5728\u672C\u5730\u673A\u5668\u4E0A\u914D\u7F6Essh\u8FDE\u63A5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#33-\u5728\u672C\u5730\u673A\u5668\u4E0A\u914D\u7F6Essh\u8FDE\u63A5",
        children: "#"
      }), "3.3 \u5728\u672C\u5730\u673A\u5668\u4E0A\u914D\u7F6ESSH\u8FDE\u63A5"]
    }), "\n", jsx(_components.p, {
      children: "\u6700\u540E\u4E00\u6B65\u662F\u5728\u672C\u5730\u673A\u5668\u4E0A\u914D\u7F6ESSH\u8FDE\u63A5\uFF0C\u5C06SSH\u5BC6\u94A5\u6DFB\u52A0\u5230SSH\u4EE3\u7406\u4E2D\uFF1A"
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
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "ssh-add "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "~"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "/.ssh/id_rsa"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u7136\u540E\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u4F7F\u7528SSH\u8FDE\u63A5\u5230\u8FDC\u7A0BMySQL\u670D\u52A1\u5668\uFF1A"
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
              children: "ssh -fNL 3306:localhost:3306 user@remote_server"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u8FD9\u6837\u5C31\u5B8C\u6210\u4E86\u5728\u672C\u5730\u673A\u5668\u4E0A\u914D\u7F6ESSH\u8FDE\u63A5MySQL\u7684\u8FC7\u7A0B\u3002\u901A\u8FC7SSH\u96A7\u9053\u8FDE\u63A5MySQL\uFF0C\u6211\u4EEC\u5B9E\u73B0\u4E86\u5B89\u5168\u7684\u6570\u636E\u4F20\u8F93\u548C\u8BBF\u95EE\uFF0C\u4FDD\u62A4\u4E86\u4FE1\u606F\u7684\u5B89\u5168\u6027\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "\u603B\u7ED3",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u603B\u7ED3",
        children: "#"
      }), "\u603B\u7ED3"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u672C\u7AE0\u8282\u4E2D\uFF0C\u6211\u4EEC\u4ECB\u7ECD\u4E86\u5982\u4F55\u914D\u7F6ESSH\u8FDE\u63A5MySQL\uFF0C\u5305\u62EC\u51C6\u5907\u5DE5\u4F5C\u3001\u521B\u5EFASSH\u5BC6\u94A5\u5BF9\u4EE5\u53CA\u5728\u672C\u5730\u673A\u5668\u4E0A\u914D\u7F6ESSH\u8FDE\u63A5\u7684\u6B65\u9AA4\u3002\u901A\u8FC7\u8FD9\u4E9B\u64CD\u4F5C\uFF0C\u4F60\u53EF\u4EE5\u5B89\u5168\u5730\u5EFA\u7ACB\u4E0EMySQL\u670D\u52A1\u5668\u7684\u8FDE\u63A5\uFF0C\u4FDD\u62A4\u6570\u636E\u7684\u4F20\u8F93\u5B89\u5168\u3002\u5728\u4E0B\u4E00\u7AE0\u8282\u4E2D\uFF0C\u6211\u4EEC\u5C06\u8FDB\u4E00\u6B65\u63A2\u8BA8\u5728IDEA\u4E2D\u5982\u4F55\u8FDE\u63A5MySQL\u5E76\u8FDB\u884C\u5B9E\u8DF5\u64CD\u4F5C\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "4-\u5B9E\u8DF5\u6307\u5357idea\u8FDE\u63A5mysql",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#4-\u5B9E\u8DF5\u6307\u5357idea\u8FDE\u63A5mysql",
        children: "#"
      }), "4. \u5B9E\u8DF5\u6307\u5357\uFF1AIDEA\u8FDE\u63A5MySQL"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u7B2C\u4E09\u7AE0\u4E2D\u6211\u4EEC\u5DF2\u7ECF\u914D\u7F6E\u597D\u4E86SSH\u8FDE\u63A5MySQL\u7684\u57FA\u7840\u73AF\u5883\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u5C06\u6DF1\u5165\u5B9E\u8DF5\uFF0C\u5728IDEA\u5F00\u53D1\u73AF\u5883\u4E2D\u8FDE\u63A5MySQL\u6570\u636E\u5E93\u3002\u901A\u8FC7SSH\u96A7\u9053\uFF0C\u6211\u4EEC\u53EF\u4EE5\u66F4\u52A0\u5B89\u5168\u5730\u8FDB\u884C\u6570\u636E\u5E93\u64CD\u4F5C\uFF0C\u540C\u65F6\u53EF\u4EE5\u5728\u5F00\u53D1\u73AF\u5883\u4E2D\u4EAB\u53D7\u5230MySQL\u7684\u4FBF\u5229\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "41-\u914D\u7F6Eidea\u5F00\u53D1\u73AF\u5883",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#41-\u914D\u7F6Eidea\u5F00\u53D1\u73AF\u5883",
        children: "#"
      }), "4.1 \u914D\u7F6EIDEA\u5F00\u53D1\u73AF\u5883"]
    }), "\n", jsx(_components.p, {
      children: "\u9996\u5148\uFF0C\u786E\u4FDD\u4F60\u5DF2\u7ECF\u5B89\u88C5\u4E86IntelliJ IDEA\u96C6\u6210\u5F00\u53D1\u73AF\u5883\u3002IDEA\u662F\u4E00\u6B3E\u529F\u80FD\u5F3A\u5927\u7684Java\u5F00\u53D1\u5DE5\u5177\uFF0C\u652F\u6301\u591A\u79CD\u4E3B\u6D41\u8BED\u8A00\u7684\u5F00\u53D1\uFF0C\u5305\u62EC\u6570\u636E\u5E93\u8FDE\u63A5\u529F\u80FD\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "42-\u8BBE\u7F6Essh\u96A7\u9053",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#42-\u8BBE\u7F6Essh\u96A7\u9053",
        children: "#"
      }), "4.2 \u8BBE\u7F6ESSH\u96A7\u9053"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u8FD9\u4E00\u90E8\u5206\uFF0C\u6211\u4EEC\u5C06\u4ECB\u7ECD\u5982\u4F55\u5728IDEA\u4E2D\u8BBE\u7F6ESSH\u96A7\u9053\uFF0C\u4EE5\u4FBF\u8FDE\u63A5MySQL\u6570\u636E\u5E93\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "421-\u5728idea\u4E2D\u8BBE\u7F6E\u6570\u636E\u5E93\u8FDE\u63A5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#421-\u5728idea\u4E2D\u8BBE\u7F6E\u6570\u636E\u5E93\u8FDE\u63A5",
        children: "#"
      }), "4.2.1 \u5728IDEA\u4E2D\u8BBE\u7F6E\u6570\u636E\u5E93\u8FDE\u63A5"]
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsx(_components.li, {
        children: "\u6253\u5F00IntelliJ IDEA\uFF0C\u70B9\u51FB\u9876\u90E8\u83DC\u5355\u680F\u7684\u201CView\u201D\uFF0C\u7136\u540E\u9009\u62E9\u201CTool Windows\u201D\u4E2D\u7684\u201CDatabase\u201D\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u5728Database\u9762\u677F\u4E2D\uFF0C\u70B9\u51FB\u52A0\u53F7\u201C+\u201D\uFF0C\u9009\u62E9\u201CData Source\u201D -> \u201CMySQL\u201D\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u5728\u5F39\u51FA\u7684\u5BF9\u8BDD\u6846\u4E2D\u586B\u5199\u76F8\u5E94\u4FE1\u606F\uFF0C\u5305\u62EC\u4E3B\u673A\u540D\u3001\u7AEF\u53E3\u3001\u6570\u636E\u5E93\u540D\u7B49\uFF0C\u5E76\u5728\u201CSSH\u201D\u9009\u9879\u5361\u4E2D\u586B\u5199SSH\u8FDE\u63A5\u4FE1\u606F\u3002"
      }), "\n"]
    }), "\n", jsxs(_components.h4, {
      id: "422-\u8BBE\u7F6Essh\u96A7\u9053\u8FDE\u63A5\u65B9\u5F0F",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#422-\u8BBE\u7F6Essh\u96A7\u9053\u8FDE\u63A5\u65B9\u5F0F",
        children: "#"
      }), "4.2.2 \u8BBE\u7F6ESSH\u96A7\u9053\u8FDE\u63A5\u65B9\u5F0F"]
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsx(_components.li, {
        children: "\u5728Database\u8FDE\u63A5\u8BBE\u7F6E\u7684SSH\u9009\u9879\u5361\u4E2D\uFF0C\u52FE\u9009\u201CUse SSH tunnel\u201D\u9009\u9879\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u586B\u5199SSH\u914D\u7F6E\u4FE1\u606F\uFF0C\u5305\u62ECSSH\u4E3B\u673A\u3001\u7528\u6237\u540D\u3001\u79C1\u94A5\u7B49\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u70B9\u51FB\u201CTest Connection\u201D\u6D4B\u8BD5\u8FDE\u63A5\uFF0C\u786E\u4FDDSSH\u96A7\u9053\u8BBE\u7F6E\u6B63\u786E\u3002"
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "43-\u6D4B\u8BD5\u8FDE\u63A5\u548C\u8C03\u8BD5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#43-\u6D4B\u8BD5\u8FDE\u63A5\u548C\u8C03\u8BD5",
        children: "#"
      }), "4.3 \u6D4B\u8BD5\u8FDE\u63A5\u548C\u8C03\u8BD5"]
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsx(_components.li, {
        children: "\u5B8C\u6210SSH\u96A7\u9053\u8BBE\u7F6E\u540E\uFF0C\u70B9\u51FBIDEA\u4E2DDatabase\u9762\u677F\u4E2D\u7684\u8FDE\u63A5\u540D\uFF0C\u5C1D\u8BD5\u8FDE\u63A5MySQL\u6570\u636E\u5E93\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u5982\u679C\u4E00\u5207\u6B63\u5E38\uFF0C\u4F60\u5C06\u6210\u529F\u8FDE\u63A5\u5230MySQL\u6570\u636E\u5E93\uFF0C\u53EF\u4EE5\u5728IDEA\u4E2D\u8FDB\u884CSQL\u67E5\u8BE2\u3001\u6570\u636E\u7F16\u8F91\u7B49\u64CD\u4F5C\u3002"
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u4EE5\u4E0A\u6B65\u9AA4\uFF0C\u4F60\u5DF2\u7ECF\u6210\u529F\u5728IDEA\u4E2D\u914D\u7F6E\u4E86SSH\u96A7\u9053\u8FDE\u63A5MySQL\u6570\u636E\u5E93\uFF0C\u53EF\u4EE5\u5728\u96C6\u6210\u5F00\u53D1\u73AF\u5883\u4E2D\u65B9\u4FBF\u5730\u8FDB\u884C\u6570\u636E\u5E93\u64CD\u4F5C\u548C\u5F00\u53D1\u5DE5\u4F5C\u3002\u8FD9\u79CD\u65B9\u5F0F\u4E0D\u4EC5\u5B89\u5168\u53EF\u9760\uFF0C\u540C\u65F6\u4E5F\u63D0\u9AD8\u4E86\u5F00\u53D1\u6548\u7387\uFF0C\u662F\u8FDE\u63A5MySQL\u7684\u4E00\u79CD\u9AD8\u6548\u65B9\u5F0F\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "5-\u4F18\u5316\u4E0E\u6545\u969C\u6392\u9664",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#5-\u4F18\u5316\u4E0E\u6545\u969C\u6392\u9664",
        children: "#"
      }), "5. \u4F18\u5316\u4E0E\u6545\u969C\u6392\u9664"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u4F7F\u7528SSH\u96A7\u9053\u8FDE\u63A5MySQL\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u9664\u4E86\u7B80\u5355\u5730\u8FDB\u884C\u914D\u7F6E\u4E0E\u8FDE\u63A5\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u5173\u6CE8\u4F18\u5316\u6027\u80FD\u4EE5\u53CA\u89E3\u51B3\u53EF\u80FD\u51FA\u73B0\u7684\u6545\u969C\u3002\u672C\u7AE0\u5C06\u91CD\u70B9\u4ECB\u7ECDSSH\u8FDE\u63A5MySQL\u7684\u6027\u80FD\u4F18\u5316\u65B9\u6CD5\uFF0C\u4EE5\u53CA\u9488\u5BF9\u5E38\u89C1\u95EE\u9898\u7684\u89E3\u51B3\u65B9\u6848\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "51-ssh\u8FDE\u63A5mysql\u7684\u6027\u80FD\u4F18\u5316",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#51-ssh\u8FDE\u63A5mysql\u7684\u6027\u80FD\u4F18\u5316",
        children: "#"
      }), "5.1 SSH\u8FDE\u63A5MySQL\u7684\u6027\u80FD\u4F18\u5316"]
    }), "\n", jsx(_components.p, {
      children: "SSH\u96A7\u9053\u8FDE\u63A5MySQL\u53EF\u4EE5\u901A\u8FC7\u4E00\u4E9B\u4F18\u5316\u6765\u63D0\u9AD8\u6027\u80FD\uFF0C\u4ECE\u800C\u63D0\u5347\u6570\u636E\u4F20\u8F93\u7684\u6548\u7387\u3002\u4E0B\u9762\u6211\u4EEC\u5C06\u4ECB\u7ECD\u4E00\u4E9B\u5E38\u7528\u7684\u6027\u80FD\u4F18\u5316\u65B9\u6CD5\uFF1A"
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "\u4F7F\u7528\u538B\u7F29\u529F\u80FD\uFF1A"
          }), " \u5728SSH\u8FDE\u63A5\u4E2D\u5F00\u542F\u538B\u7F29\u529F\u80FD\uFF0C\u53EF\u4EE5\u6709\u6548\u51CF\u5C11\u6570\u636E\u5728\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u7684\u5927\u5C0F\uFF0C\u52A0\u5FEB\u4F20\u8F93\u901F\u5EA6\u3002\u5728\u8FDE\u63A5\u65F6\u6DFB\u52A0", jsx(_components.code, {
            children: "-C"
          }), "\u53C2\u6570\u5373\u53EF\u5F00\u542F\u538B\u7F29\uFF0C\u4F8B\u5982\uFF1A"]
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
                  children: "ssh -C user@host"
                })
              }), "\n", jsx(_components.span, {
                className: "line"
              })]
            })
          })]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "\u8C03\u6574Cipher\u52A0\u5BC6\u7B97\u6CD5\uFF1A"
          }), " \u9009\u62E9\u5408\u9002\u7684Cipher\u52A0\u5BC6\u7B97\u6CD5\u4E5F\u53EF\u4EE5\u63D0\u5347\u8FDE\u63A5\u7684\u6027\u80FD\u3002\u4E00\u822C\u6765\u8BF4\uFF0C", jsx(_components.code, {
            children: "arcfour"
          }), "\u548C", jsx(_components.code, {
            children: "aes128-cbc"
          }), "\u8FD9\u4E24\u79CD\u7B97\u6CD5\u901F\u5EA6\u8F83\u5FEB\u3002\u53EF\u4EE5\u5728SSH\u914D\u7F6E\u6587\u4EF6\u4E2D\u8FDB\u884C\u8BBE\u7F6E\uFF0C\u4F8B\u5982\uFF1A"]
        }), "\n", jsx(_components.pre, {
          children: jsx(_components.code, {
            children: "Ciphers aes128-cbc,arcfour\n"
          })
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "\u8C03\u6574SSH\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\uFF1A"
          }), " \u9002\u5F53\u8C03\u6574SSH\u8FDE\u63A5\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u907F\u514D\u8FDE\u63A5\u7A7A\u95F2\u65F6\u95F4\u8FC7\u957F\u5BFC\u81F4\u8FDE\u63A5\u65AD\u5F00\uFF0C\u53EF\u4EE5\u5728SSH\u914D\u7F6E\u6587\u4EF6\u4E2D\u8FDB\u884C\u4FEE\u6539\uFF0C\u4F8B\u5982\uFF1A"]
        }), "\n", jsx(_components.pre, {
          children: jsx(_components.code, {
            children: "ServerAliveInterval 60\nServerAliveCountMax 3\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "52-\u5E38\u89C1\u95EE\u9898\u53CA\u89E3\u51B3\u65B9\u6848",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#52-\u5E38\u89C1\u95EE\u9898\u53CA\u89E3\u51B3\u65B9\u6848",
        children: "#"
      }), "5.2 \u5E38\u89C1\u95EE\u9898\u53CA\u89E3\u51B3\u65B9\u6848"]
    }), "\n", jsx(_components.p, {
      children: "\u5728SSH\u8FDE\u63A5MySQL\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u53EF\u80FD\u4F1A\u51FA\u73B0\u4E00\u4E9B\u5E38\u89C1\u95EE\u9898\uFF0C\u4F8B\u5982\u8FDE\u63A5\u8D85\u65F6\u3001\u6570\u636E\u4F20\u8F93\u5F02\u5E38\u7B49\u3002\u4E0B\u9762\u6211\u4EEC\u9488\u5BF9\u8FD9\u4E9B\u95EE\u9898\u63D0\u4F9B\u76F8\u5E94\u7684\u89E3\u51B3\u65B9\u6848\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "521-\u8FDE\u63A5\u8D85\u65F6\u95EE\u9898\u89E3\u51B3",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#521-\u8FDE\u63A5\u8D85\u65F6\u95EE\u9898\u89E3\u51B3",
        children: "#"
      }), "5.2.1 \u8FDE\u63A5\u8D85\u65F6\u95EE\u9898\u89E3\u51B3"]
    }), "\n", jsx(_components.p, {
      children: "\u5982\u679C\u5728\u4F7F\u7528SSH\u8FDE\u63A5MySQL\u65F6\u51FA\u73B0\u8FDE\u63A5\u8D85\u65F6\u7684\u95EE\u9898\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u4EE5\u4E0B\u89E3\u51B3\u65B9\u6CD5\uFF1A"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5\uFF1A"
        }), " \u786E\u4FDD\u672C\u5730\u7F51\u7EDC\u548C\u8FDC\u7A0B\u670D\u52A1\u5668\u7F51\u7EDC\u7545\u901A\u3002"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "\u8C03\u6574SSH\u914D\u7F6E\uFF1A"
        }), " \u8C03\u6574SSH\u5BA2\u6237\u7AEF\u7684\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\uFF0C\u907F\u514D\u8FDE\u63A5\u957F\u65F6\u95F4\u7A7A\u95F2\u800C\u5BFC\u81F4\u8D85\u65F6\u65AD\u5F00\u3002"]
      }), "\n"]
    }), "\n", jsxs(_components.h4, {
      id: "522-\u6570\u636E\u4F20\u8F93\u5F02\u5E38\u5904\u7406",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#522-\u6570\u636E\u4F20\u8F93\u5F02\u5E38\u5904\u7406",
        children: "#"
      }), "5.2.2 \u6570\u636E\u4F20\u8F93\u5F02\u5E38\u5904\u7406"]
    }), "\n", jsx(_components.p, {
      children: "\u5904\u7406\u6570\u636E\u4F20\u8F93\u5F02\u5E38\u7684\u65B9\u6CD5\u5982\u4E0B\uFF1A"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "\u68C0\u67E5MySQL\u670D\u52A1\u72B6\u6001\uFF1A"
        }), " \u786E\u4FDD\u8FDC\u7A0BMySQL\u670D\u52A1\u6B63\u5E38\u8FD0\u884C\u3002"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "\u68C0\u67E5SSH\u96A7\u9053\u914D\u7F6E\uFF1A"
        }), " \u68C0\u67E5SSH\u96A7\u9053\u7684\u914D\u7F6E\u662F\u5426\u6B63\u786E\uFF0C\u5305\u62EC\u672C\u5730\u7AEF\u53E3\u548C\u8FDC\u7A0B\u7AEF\u53E3\u662F\u5426\u8BBE\u7F6E\u6B63\u786E\u3002"]
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u4EE5\u4E0A\u662F\u9488\u5BF9SSH\u8FDE\u63A5MySQL\u7684\u5E38\u89C1\u95EE\u9898\u7684\u89E3\u51B3\u65B9\u6CD5\uFF0C\u5E0C\u671B\u53EF\u4EE5\u5E2E\u52A9\u60A8\u987A\u5229\u89E3\u51B3\u5728\u5B9E\u8DF5\u8FC7\u7A0B\u4E2D\u53EF\u80FD\u9047\u5230\u7684\u56F0\u96BE\u3002"
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

import { jsx, jsxs, Fragment } from "react/jsx-runtime";
const frontmatter = void 0;
const toc = [{
  "id": "\u4EC0\u4E48\u662F\u7EA6\u5B9A\u5F0F\u8DEF\u7531",
  "text": "\u4EC0\u4E48\u662F\u7EA6\u5B9A\u5F0F\u8DEF\u7531",
  "depth": 2
}, {
  "id": "\u6620\u5C04\u89C4\u5219",
  "text": "\u6620\u5C04\u89C4\u5219",
  "depth": 2
}, {
  "id": "\u81EA\u5B9A\u4E49\u884C\u4E3A",
  "text": "\u81EA\u5B9A\u4E49\u884C\u4E3A",
  "depth": 2
}];
const title = "\u7EA6\u5B9A\u5F0F\u8DEF\u7531";
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    h2: "h2",
    p: "p",
    code: "code",
    div: "div",
    button: "button",
    span: "span",
    pre: "pre",
    blockquote: "blockquote",
    table: "table",
    thead: "thead",
    tr: "tr",
    th: "th",
    tbody: "tbody",
    td: "td"
  }, props.components);
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "\u7EA6\u5B9A\u5F0F\u8DEF\u7531",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u7EA6\u5B9A\u5F0F\u8DEF\u7531",
        children: "#"
      }), "\u7EA6\u5B9A\u5F0F\u8DEF\u7531"]
    }), "\n", jsxs(_components.h2, {
      id: "\u4EC0\u4E48\u662F\u7EA6\u5B9A\u5F0F\u8DEF\u7531",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u4EC0\u4E48\u662F\u7EA6\u5B9A\u5F0F\u8DEF\u7531",
        children: "#"
      }), "\u4EC0\u4E48\u662F\u7EA6\u5B9A\u5F0F\u8DEF\u7531"]
    }), "\n", jsx(_components.p, {
      children: "Island.js \u4F7F\u7528\u7684\u662F\u6587\u4EF6\u7CFB\u7EDF\u8DEF\u7531\uFF0C\u9875\u9762\u7684\u6587\u4EF6\u8DEF\u5F84\u4F1A\u7B80\u5355\u7684\u6620\u5C04\u4E3A\u8DEF\u7531\u8DEF\u5F84\uFF0C\u8FD9\u6837\u4F1A\u8BA9\u6574\u4E2A\u9879\u76EE\u7684\u8DEF\u7531\u975E\u5E38\u76F4\u89C2\u3002"
    }), "\n", jsxs(_components.p, {
      children: ["\u4F8B\u5982\uFF0C\u5982\u679C\u5728 ", jsx(_components.code, {
        children: "docs"
      }), " \u76EE\u5F55\u4E2D\u6709\u4E00\u4E2A\u540D\u4E3A ", jsx(_components.code, {
        children: "foo.md"
      }), " \u7684\u6587\u4EF6\uFF0C\u5219\u8BE5\u6587\u4EF6\u7684\u8DEF\u7531\u8DEF\u5F84\u5C06\u662F ", jsx(_components.code, {
        children: "/foo"
      }), "\u3002"]
    }), "\n", jsxs(_components.h2, {
      id: "\u6620\u5C04\u89C4\u5219",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u6620\u5C04\u89C4\u5219",
        children: "#"
      }), "\u6620\u5C04\u89C4\u5219"]
    }), "\n", jsx(_components.p, {
      children: "Island.js \u4F1A\u81EA\u52A8\u626B\u63CF\u6839\u76EE\u5F55\u548C\u6240\u6709\u5B50\u76EE\u5F55\uFF0C\u5E76\u5C06\u6587\u4EF6\u8DEF\u5F84\u6620\u5C04\u5230\u8DEF\u7531\u8DEF\u5F84\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u4F60\u6709\u4EE5\u4E0B\u7684\u6587\u4EF6\u7ED3\u6784\uFF1A"
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
              children: "docs"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "\u251C\u2500\u2500 foo"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "\u2502   \u2514\u2500\u2500 bar.md"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "\u2514\u2500\u2500 foo.md"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsxs(_components.p, {
        children: ["\u5728\u4E4B\u524D\u7684\u5165\u95E8\u9879\u76EE\u4E2D\uFF0C\u542F\u52A8\u811A\u672C\u662F ", jsx(_components.code, {
          children: "island dev docs"
        }), "\uFF0C\u6240\u4EE5\u6839\u76EE\u5F55\u662F ", jsx(_components.code, {
          children: "docs"
        }), "\u3002"]
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: ["\u90A3\u4E48 ", jsx(_components.code, {
        children: "bar.md"
      }), " \u7684\u8DEF\u7531\u8DEF\u5F84\u4F1A\u662F ", jsx(_components.code, {
        children: "/foo/bar"
      }), "\uFF0C", jsx(_components.code, {
        children: "foo.md"
      }), " \u7684\u8DEF\u7531\u8DEF\u5F84\u4F1A\u662F ", jsx(_components.code, {
        children: "/foo"
      }), "\u3002"]
    }), "\n", jsx(_components.p, {
      children: "\u5177\u4F53\u6620\u5C04\u89C4\u5219\u5982\u4E0B\uFF1A"
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "\u6587\u4EF6\u8DEF\u5F84"
          }), jsx(_components.th, {
            children: "\u8DEF\u7531\u8DEF\u5F84"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "index.md"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "/"
            })
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "/foo.md"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "/foo"
            })
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "/foo/bar.md"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "/foo/bar"
            })
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.code, {
              children: "/zoo/index.md"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "/zoo"
            })
          })]
        })]
      })]
    }), "\n", jsxs(_components.h2, {
      id: "\u81EA\u5B9A\u4E49\u884C\u4E3A",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u81EA\u5B9A\u4E49\u884C\u4E3A",
        children: "#"
      }), "\u81EA\u5B9A\u4E49\u884C\u4E3A"]
    }), "\n", jsxs(_components.p, {
      children: ["\u5982\u679C\u8981\u81EA\u5B9A\u4E49\u8DEF\u7531\u884C\u4E3A\uFF0C\u53EF\u4EE5\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684 ", jsx(_components.code, {
        children: "route"
      }), " \u5B57\u6BB5\u3002\u4F8B\u5982\uFF1A"]
    }), "\n", jsxs(_components.div, {
      className: "language-ts",
      children: [jsx(_components.button, {
        className: "copy"
      }), jsx(_components.span, {
        className: "lang",
        children: "ts"
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
              children: "import"
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
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "defineConfig"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "from"
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
              children: "islandjs"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
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
              children: "export"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "default"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "defineConfig"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
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
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "route"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
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
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// These files will be excluded from the routing (support glob pattern)"
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
              children: "exclude"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ["
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "custom.tsx"
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
              children: "component/**/*"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "]"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// These files will be included in the routing (support glob pattern)"
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
              children: "include"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": ["
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "other-dir/**/*"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "]"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
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
    }), "\n", jsxs(_components.p, {
      children: ["\u66F4\u591A\u7EC6\u8282\u53EF\u4EE5\u53C2\u8003 ", jsx(_components.a, {
        href: "/zh/api/config-extension",
        children: "\u914D\u7F6E\u6269\u5C55"
      }), "\u3002"]
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

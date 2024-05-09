import { jsx, jsxs, Fragment } from "react/jsx-runtime";
const frontmatter = {
  "title": "\u4F7F\u7528 MDX"
};
const toc = [{
  "id": "markdown",
  "text": "Markdown",
  "depth": 2
}, {
  "id": "\u4F7F\u7528\u7EC4\u4EF6",
  "text": "\u4F7F\u7528\u7EC4\u4EF6",
  "depth": 2
}, {
  "id": "front-matter",
  "text": "Front Matter",
  "depth": 2
}, {
  "id": "\u81EA\u5B9A\u4E49\u5BB9\u5668",
  "text": "\u81EA\u5B9A\u4E49\u5BB9\u5668",
  "depth": 2
}];
const title = "\u4F7F\u7528 MDX";
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    p: "p",
    h2: "h2",
    div: "div",
    button: "button",
    span: "span",
    pre: "pre",
    code: "code",
    blockquote: "blockquote",
    strong: "strong"
  }, props.components);
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "\u4F7F\u7528-mdx",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u4F7F\u7528-mdx",
        children: "#"
      }), "\u4F7F\u7528 MDX"]
    }), "\n", jsxs(_components.p, {
      children: ["Island.js \u652F\u6301 ", jsx(_components.a, {
        href: "https://mdxjs.com/",
        children: "Mdx"
      }), "\uFF0C\u8FD9\u662F\u4E00\u79CD\u529F\u80FD\u5F3A\u5927\u7684\u5185\u5BB9\u5F00\u53D1\u65B9\u5F0F\uFF0C\u4F60\u53EF\u4EE5\u5728 Markdown \u6587\u4EF6\u4E2D\u5BFC\u5165\u548C\u4F7F\u7528 React \u7EC4\u4EF6\u3002"]
    }), "\n", jsxs(_components.h2, {
      id: "markdown",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#markdown",
        children: "#"
      }), "Markdown"]
    }), "\n", jsx(_components.p, {
      children: "MDX \u662F Markdown \u7684\u8D85\u96C6\uFF0C\u8FD9\u610F\u5473\u7740\u53EF\u4EE5\u50CF\u5F80\u5E38\u4E00\u6837\u7F16\u5199 Markdown \u6587\u4EF6\u3002\u4F8B\u5982\uFF1A"
    }), "\n", jsxs(_components.div, {
      className: "language-md",
      children: [jsx(_components.button, {
        className: "copy"
      }), jsx(_components.span, {
        className: "lang",
        children: "md"
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
              children: "#"
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: " Hello World"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h2, {
      id: "\u4F7F\u7528\u7EC4\u4EF6",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u4F7F\u7528\u7EC4\u4EF6",
        children: "#"
      }), "\u4F7F\u7528\u7EC4\u4EF6"]
    }), "\n", jsxs(_components.p, {
      children: ["\u5F53\u4F60\u60F3\u5728 Markdown \u6587\u4EF6\u4E2D\u4F7F\u7528 React \u7EC4\u4EF6\u65F6\uFF0C\u4F60\u5E94\u8BE5\u4F7F\u7528 ", jsx(_components.code, {
        children: ".mdx"
      }), " \u6269\u5C55\u540D\u6765\u547D\u540D\u4F60\u7684\u6587\u4EF6"]
    }), "\n", jsxs(_components.h2, {
      id: "front-matter",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#front-matter",
        children: "#"
      }), "Front Matter"]
    }), "\n", jsx(_components.p, {
      children: "\u4F60\u53EF\u4EE5\u5728 Markdown \u6587\u4EF6\u7684\u5F00\u5934\u6DFB\u52A0 Front Matter\uFF0C\u5B83\u662F\u4E00\u4E2A YAML \u683C\u5F0F\u7684\u5BF9\u8C61\uFF0C\u7528\u4E8E\u5B9A\u4E49\u4E00\u4E9B\u5143\u6570\u636E\u3002\u4F8B\u5982\uFF1A"
    }), "\n", jsxs(_components.div, {
      className: "language-mdx",
      children: [jsx(_components.button, {
        className: "copy"
      }), jsx(_components.span, {
        className: "lang",
        children: "mdx"
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
              children: "---"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "title"
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
                color: "#A3BE8C"
              },
              children: "Hello World"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "---"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsx(_components.p, {
        children: "\u6CE8\u610F\uFF1A\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CIsland.js \u4F7F\u7528 h1 \u6807\u9898\u4F5C\u4E3A html \u7684\u6807\u9898\u3002"
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u4F60\u8FD8\u53EF\u4EE5\u5728\u6B63\u6587\u4E2D\u8BBF\u95EE Front Mattter \u4E2D\u5B9A\u4E49\u7684\u5C5E\u6027\uFF0C\u4F8B\u5982\uFF1A"
    }), "\n", jsxs(_components.div, {
      className: "language-mdx",
      children: [jsx(_components.button, {
        className: "copy"
      }), jsx(_components.span, {
        className: "lang",
        children: "mdx"
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
              children: "---"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "title"
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
                color: "#A3BE8C"
              },
              children: "Hello World"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "---"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "#"
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: " {frontmatter.title}"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.p, {
      children: ["\u524D\u9762\u5B9A\u4E49\u7684\u5C5E\u6027\u5C06\u4F5C\u4E3A ", jsx(_components.code, {
        children: "meta"
      }), " \u5C5E\u6027\u4F20\u9012\u7ED9\u7EC4\u4EF6\u3002\u6240\u4EE5\u6700\u7EC8\u8F93\u51FA\u5C06\u662F\uFF1A"]
    }), "\n", jsxs(_components.div, {
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
              children: "<h1>"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "Hello World"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</h1>"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.p, {
      children: ["\u66F4\u591A\u7684\u914D\u7F6E\u8BE6\u60C5\u8BF7\u53C2\u8003 ", jsx(_components.a, {
        href: "/zh/api/config-front-matter",
        children: "config-front-matter"
      }), "\u3002"]
    }), "\n", jsxs(_components.h2, {
      id: "\u81EA\u5B9A\u4E49\u5BB9\u5668",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u81EA\u5B9A\u4E49\u5BB9\u5668",
        children: "#"
      }), "\u81EA\u5B9A\u4E49\u5BB9\u5668"]
    }), "\n", jsx(_components.p, {
      children: jsx(_components.strong, {
        children: "\u8F93\u5165\uFF1A"
      })
    }), "\n", jsxs(_components.div, {
      className: "language-markdown",
      children: [jsx(_components.button, {
        className: "copy"
      }), jsx(_components.span, {
        className: "lang",
        children: "markdown"
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
              children: ":::tip"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "\u8FD9\u662F\u4E00\u4E2A"
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "`tip`"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "\u7C7B\u578B\u7684"
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "`block`"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ":::"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ":::info"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "\u8FD9\u662F\u4E00\u4E2A"
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "`info`"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "\u7C7B\u578B\u7684"
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "`block`"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ":::"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ":::warning"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "\u8FD9\u662F\u4E00\u4E2A"
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "`warning`"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "\u7C7B\u578B\u7684"
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "`block`"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ":::"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ":::danger"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "\u8FD9\u662F\u4E00\u4E2A"
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "`danger`"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "\u7C7B\u578B\u7684"
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "`block`"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ":::"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ":::other"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "`tip`"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "\u4F5C\u4E3A\u515C\u5E95\u7C7B\u578B\u7684"
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "`block`"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ":::"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ":::tip{title=\u81EA\u5B9A\u4E49\u6807\u9898}"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "\u81EA\u5B9A\u4E49\u6807\u9898\u7684 "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "`block`"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ":::"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
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

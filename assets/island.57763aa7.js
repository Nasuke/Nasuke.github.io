import { jsx, jsxs, Fragment } from "react/jsx-runtime";
const frontmatter = void 0;
const toc = [{
  "id": "\u6982\u5FF5",
  "text": "\u6982\u5FF5",
  "depth": 2
}, {
  "id": "islandjs-\u7684\u5B9E\u73B0",
  "text": "Island.js \u7684\u5B9E\u73B0",
  "depth": 2
}, {
  "id": "\u5B64\u5C9B\u7EC4\u4EF6\u7684\u4F7F\u7528",
  "text": "\u5B64\u5C9B\u7EC4\u4EF6\u7684\u4F7F\u7528",
  "depth": 3
}, {
  "id": "\u5185\u90E8\u5B9E\u73B0\u7EC6\u8282",
  "text": "\u5185\u90E8\u5B9E\u73B0\u7EC6\u8282",
  "depth": 3
}];
const title = "Islands architecture";
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    p: "p",
    code: "code",
    h2: "h2",
    img: "img",
    h3: "h3",
    div: "div",
    button: "button",
    span: "span",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    li: "li"
  }, props.components);
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "islands-architecture",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#islands-architecture",
        children: "#"
      }), "Islands architecture"]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "\u5B64\u5C9B\u67B6\u6784"
      }), "\u7684\u6982\u5FF5\u6700\u521D\u5728 2019 \u5E74\u88AB ", jsx(_components.a, {
        href: "https://twitter.com/ksylor",
        children: "Katie Sylor-Miller"
      }), " \u63D0\u51FA\uFF0C\u7136\u540E\u5728 2021 \u5E74\u88AB Preact \u4F5C\u8005 ", jsx(_components.code, {
        children: "Jason Miller"
      }), " \u5728 ", jsx(_components.a, {
        href: "https://jasonformat.com/islands-architecture/",
        children: "\u4E00\u7BC7\u6587\u7AE0"
      }), " \u4E2D\u5F97\u5230\u63A8\u5E7F\u3002"]
    }), "\n", jsx(_components.p, {
      children: "\u8FD9\u79CD\u67B6\u6784\u662F\u4E3A\u4E86\u89E3\u51B3 MPA \u5E94\u7528\u7684 hydration \u95EE\u9898\uFF0C\u5728\u4E0A\u7BC7\u6587\u7AE0\u4E2D\u5DF2\u7ECF\u5206\u6790\u8FC7\u4E86\u3002\u672C\u5C0F\u8282\u4E3B\u8981\u4FA7\u91CD\u4ECB\u7ECD\u5B64\u5C9B\u67B6\u6784\u7684\u6982\u5FF5\u4EE5\u53CA Island.js \u662F\u5982\u4F55\u5B9E\u73B0\u8FD9\u79CD\u67B6\u6784\u7684\u3002"
    }), "\n", jsxs(_components.h2, {
      id: "\u6982\u5FF5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u6982\u5FF5",
        children: "#"
      }), "\u6982\u5FF5"]
    }), "\n", jsx(_components.p, {
      children: "\u987E\u540D\u601D\u4E49\uFF0C\u6211\u4EEC\u53EF\u4EE5\u628A\u6574\u4E2A\u9875\u9762\u60F3\u8C61\u6210\u4E00\u7247\u9759\u6001\u7684\u6D77\u6D0B\uFF0C\u5C06\u4EA4\u4E92\u90E8\u5206\u60F3\u8C61\u6210\u5B64\u5C9B\u3002\u5982\u4E0B\u56FE\u6240\u793A\uFF1A"
    }), "\n", jsx(_components.p, {
      children: jsx(_components.img, {
        src: "https://res.cloudinary.com/wedding-website/image/upload/v1596766231/islands-architecture-1.png",
        alt: "./assets/islands-arch.png"
      })
    }), "\n", jsx(_components.p, {
      children: "\u7136\u540E\u5728 hydration \u7684\u8FC7\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u5BF9\u4E8E\u8FD9\u4E9B\u5C40\u90E8\u7684\u5B64\u5C9B\u7EC4\u4EF6\u6267\u884C hydration \u5373\u53EF\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u907F\u514D\u6574\u4E2A\u9875\u9762\u7684 hydration\uFF0C\u4ECE\u800C\u63D0\u5347\u9996\u5C4F\u6027\u80FD\u3002"
    }), "\n", jsxs(_components.h2, {
      id: "islandjs-\u7684\u5B9E\u73B0",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#islandjs-\u7684\u5B9E\u73B0",
        children: "#"
      }), "Island.js \u7684\u5B9E\u73B0"]
    }), "\n", jsxs(_components.p, {
      children: ["\u5B64\u5C9B\u67B6\u6784\u5728 Island.js \u4E2D\u7684\u5B9E\u73B0\u5305\u62EC\u4E09\u4E2A\u90E8\u5206\uFF1A", jsx(_components.code, {
        children: "server runtime"
      }), "\u3001", jsx(_components.code, {
        children: "build time"
      }), " \u548C ", jsx(_components.code, {
        children: "client runtime"
      }), "\u3002"]
    }), "\n", jsxs(_components.h3, {
      id: "\u5B64\u5C9B\u7EC4\u4EF6\u7684\u4F7F\u7528",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u5B64\u5C9B\u7EC4\u4EF6\u7684\u4F7F\u7528",
        children: "#"
      }), "\u5B64\u5C9B\u7EC4\u4EF6\u7684\u4F7F\u7528"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u4ECB\u7ECD\u67B6\u6784\u7684\u5B9E\u73B0\u4E4B\u524D\uFF0C\u6211\u8BA4\u4E3A\u6709\u5FC5\u8981\u5148\u4ECB\u7ECD\u4E00\u4E0B\u5B64\u5C9B\u7EC4\u4EF6\u7684\u4F7F\u7528\u3002\u5728 Island.js \u4E2D\uFF0C\u4F7F\u7528\u65B9\u5F0F\u975E\u5E38\u7B80\u5355\uFF0C\u5982\u4E0B\u9762\u7684\u4EE3\u7801\u6240\u793A\uFF1A"
    }), "\n", jsxs(_components.div, {
      className: "language-js",
      children: [jsx(_components.button, {
        className: "copy"
      }), jsx(_components.span, {
        className: "lang",
        children: "js"
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
                color: "#8FBCBB"
              },
              children: "Aside"
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
              children: "./Aside.tsx"
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
              children: "function"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "Layout"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "()"
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
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "return"
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
                color: "#8FBCBB"
              },
              children: "Aside"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "__island"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "/>;"
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
    }), "\n", jsxs(_components.p, {
      children: ["\u4F7F\u7528\u65F6\u53EA\u9700\u8981\u5728\u7EC4\u4EF6\u4E2D\u6DFB\u52A0\u4E00\u4E2A ", jsx(_components.code, {
        children: "__island"
      }), " prop\uFF0C\u7136\u540E\u7EC4\u4EF6\u5C31\u4F1A\u81EA\u52A8\u88AB\u8BC6\u522B\u4E3A\u5B64\u5C9B\u7EC4\u4EF6\u3002Island.js \u53EA\u4F1A\u5728\u5B64\u5C9B\u7EC4\u4EF6\u7684\u5BA2\u6237\u7AEF\u811A\u672C\u548C\u5B83\u4EEC\u7684 props \u6CE8\u5165\u5728\u5BA2\u6237\u7AEF\u4E2D\u3002"]
    }), "\n", jsxs(_components.h3, {
      id: "\u5185\u90E8\u5B9E\u73B0\u7EC6\u8282",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u5185\u90E8\u5B9E\u73B0\u7EC6\u8282",
        children: "#"
      }), "\u5185\u90E8\u5B9E\u73B0\u7EC6\u8282"]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.strong, {
        children: "1. Server runtime"
      }), "\u3002\u670D\u52A1\u5668\u8FD0\u884C\u65F6\u8D1F\u8D23\u670D\u52A1\u7AEF\u6E32\u67D3\uFF0C\u4E5F\u5C31\u662F\u7EC4\u4EF6\u5230 HTML \u7684\u8F6C\u6362\u8FC7\u7A0B(renderToString)\u3002\u8FD9\u4E2A\u9636\u6BB5\u7684\u4E3B\u8981\u4EFB\u52A1\u662F\u5728 ", jsx(_components.code, {
        children: "renderToString"
      }), " \u8FC7\u7A0B\u4E2D\u6536\u96C6\u5B64\u5C9B\u7EC4\u4EF6\u4FE1\u606F\u3002"]
    }), "\n", jsxs(_components.p, {
      children: ["\u5728 Island.js \u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528 ", jsx(_components.code, {
        children: "react/jsx-runtime"
      }), " \u6765\u5B9E\u73B0 jsx \u7684\u8F6C\u6362\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u5728 ", jsx(_components.code, {
        children: "react/jsx-runtime"
      }), " \u4E2D\u52AB\u6301 jsx \u51FD\u6570\uFF0C\u5F53\u53D1\u73B0\u7EC4\u4EF6\u4E2D\u6709 ", jsx(_components.code, {
        children: "__island"
      }), " prop \u65F6\uFF0C\u5C31\u4F1A\u6536\u96C6\u5B64\u5C9B\u7EC4\u4EF6\u7684\u4FE1\u606F\u3002"]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.strong, {
        children: "2. Build time"
      }), "\u3002\u6784\u5EFA\u65F6\u8D1F\u8D23\u751F\u6210\u5B64\u5C9B\u7EC4\u4EF6\u7684\u5BA2\u6237\u7AEF\u811A\u672C\u5E76\u6CE8\u5165\u5230 HTML \u4E2D\u3002\u5728\u6784\u5EFA\u65F6 Island.js \u4F1A\u751F\u6210\u4E09\u4E2A bundle\uFF1A"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "Server bundle"
        }), "\uFF0C\u7528\u4E8E\u670D\u52A1\u7AEF\u6E32\u67D3\u3002"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "Client hydration bundle"
        }), "\uFF0C\u7528\u4E8E\u5BA2\u6237\u7AEF hydration\u3002"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "Islands bundle"
        }), "\uFF0C\u7528\u4E8E\u6CE8\u518C\u5B64\u5C9B\u7EC4\u4EF6\u7684\u5BA2\u6237\u7AEF\u811A\u672C\uFF0C\u6240\u6709\u5B64\u5C9B\u7EC4\u4EF6\u5C06\u4F1A\u6302\u8F7D\u5728 ", jsx(_components.code, {
          children: "window"
        }), " \u5BF9\u8C61\u4E0A\u3002"]
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u5728 Island.js \u4E2D\uFF0C\u6536\u96C6\u5B8C\u6240\u6709\u7684\u5B64\u5C9B\u7EC4\u4EF6\u540E\uFF0C\u4F1A\u6784\u9020\u4E00\u4E2A\u865A\u62DF\u6A21\u5757\uFF0C\u4F5C\u7528\u662F\u5C06\u6240\u6709\u7684\u5B64\u5C9B\u7EC4\u4EF6\u6CE8\u518C\u5230 window \u5BF9\u8C61\u4E0A\uFF0C\u56E0\u6B64\u5728\u5BA2\u6237\u7AEF hydration bundle \u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4ECE window \u5BF9\u8C61\u4E0A\u83B7\u53D6\u5230\u6240\u6709\u7684\u5B64\u5C9B\u7EC4\u4EF6\uFF0C\u7136\u540E\u5BF9\u5176\u8FDB\u884C hydration\u3002"
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.strong, {
        children: "3. Client runtime"
      }), "\u3002\u5BA2\u6237\u7AEF\u8FD0\u884C\u65F6\u4E3B\u8981\u662F\u8D1F\u8D23\u5B64\u5C9B\u7EC4\u4EF6\u7684 hydration\uFF0C\u4E5F\u5C31\u662F\u5C06\u5B64\u5C9B\u7EC4\u4EF6\u53D8\u5F97\u53EF\u4EE5\u4EA4\u4E92\u3002"]
    }), "\n", jsx(_components.p, {
      children: "\u4E0B\u9762\u662F\u4E00\u4E9B\u76F8\u5173\u7684\u5B9E\u73B0\u4EE3\u7801:"
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.a, {
        href: "https://github.com/sanyuan0704/island.js/blob/master/packages/island/src/runtime/island-jsx-runtime.js",
        children: "island-jsx-runtime.js"
      }), ": \u62E6\u622A jsx \u8FD0\u884C\u65F6\uFF0C\u6536\u96C6\u5B64\u5C9B\u7EC4\u4EF6\u4FE1\u606F\u3002"]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.a, {
        href: "https://github.com/sanyuan0704/island.js/blob/master/packages/island/src/node/babel-plugin-island.ts",
        children: "babel-plugin-island"
      }), ": \u6CE8\u518C\u5B64\u5C9B\u7EC4\u4EF6\u6587\u4EF6\u8DEF\u5F84\u7684 babel \u63D2\u4EF6\u3002"]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.a, {
        href: "https://github.com/sanyuan0704/island.js/blob/master/packages/island/src/node/build.ts",
        children: "SSGBuilder"
      }), ": \u5B8C\u6574\u7684\u6784\u5EFA\u65F6\u5B9E\u73B0\u3002"]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.a, {
        href: "https://github.com/sanyuan0704/island.js/blob/master/packages/island/src/runtime/client-entry.tsx#L50",
        children: "client-entry"
      }), ": \u5BA2\u6237\u7AEF\u8FD0\u884C\u65F6\u4EE3\u7801\uFF0C\u4E3B\u8981\u662F\u8D1F\u8D23\u5B64\u5C9B\u7EC4\u4EF6\u7684 hydration\u3002"]
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

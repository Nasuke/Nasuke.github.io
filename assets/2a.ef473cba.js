import { jsx, jsxs, Fragment } from "react/jsx-runtime";
const frontmatter = void 0;
const toc = [{
  "id": "21-\u8BED\u8A00\u6A21\u578B\u7684\u4F5C\u7528",
  "text": "2.1 \u8BED\u8A00\u6A21\u578B\u7684\u4F5C\u7528",
  "depth": 3
}, {
  "id": "211-n-\u5143\u6A21\u578B\u7684\u539F\u7406",
  "text": "2.1.1 n \u5143\u6A21\u578B\u7684\u539F\u7406",
  "depth": 4
}, {
  "id": "212-\u57FA\u4E8E\u6982\u7387\u7684\u8BED\u8A00\u751F\u6210",
  "text": "2.1.2 \u57FA\u4E8E\u6982\u7387\u7684\u8BED\u8A00\u751F\u6210",
  "depth": 4
}, {
  "id": "22-\u795E\u7ECF\u7F51\u7EDC\u5728\u6587\u672C\u751F\u6210\u4E2D\u7684\u5E94\u7528",
  "text": "2.2 \u795E\u7ECF\u7F51\u7EDC\u5728\u6587\u672C\u751F\u6210\u4E2D\u7684\u5E94\u7528",
  "depth": 3
}, {
  "id": "221-\u5FAA\u73AF\u795E\u7ECF\u7F51\u7EDCrnn",
  "text": "2.2.1 \u5FAA\u73AF\u795E\u7ECF\u7F51\u7EDC\uFF08RNN\uFF09",
  "depth": 4
}, {
  "id": "222-\u957F\u77ED\u65F6\u8BB0\u5FC6\u7F51\u7EDClstm",
  "text": "2.2.2 \u957F\u77ED\u65F6\u8BB0\u5FC6\u7F51\u7EDC\uFF08LSTM\uFF09",
  "depth": 4
}, {
  "id": "31-\u751F\u6210\u5BF9\u6297\u7F51\u7EDCgan\u7684\u51FA\u73B0",
  "text": "3.1 \u751F\u6210\u5BF9\u6297\u7F51\u7EDC\uFF08GAN\uFF09\u7684\u51FA\u73B0",
  "depth": 4
}, {
  "id": "32-\u81EA\u52A8\u7F16\u7801\u5668\u7684\u6587\u672C\u751F\u6210\u5E94\u7528",
  "text": "3.2 \u81EA\u52A8\u7F16\u7801\u5668\u7684\u6587\u672C\u751F\u6210\u5E94\u7528",
  "depth": 4
}, {
  "id": "411-\u673A\u5668\u7FFB\u8BD1",
  "text": "4.1.1 \u673A\u5668\u7FFB\u8BD1",
  "depth": 3
}, {
  "id": "412-\u5BF9\u8BDD\u7CFB\u7EDF",
  "text": "4.1.2 \u5BF9\u8BDD\u7CFB\u7EDF",
  "depth": 3
}, {
  "id": "51-\u6587\u672C\u751F\u6210\u6280\u672F\u7684\u6311\u6218\u4E0E\u673A\u9047",
  "text": "5.1 \u6587\u672C\u751F\u6210\u6280\u672F\u7684\u6311\u6218\u4E0E\u673A\u9047",
  "depth": 2
}, {
  "id": "511-\u53EF\u89E3\u91CA\u6027\u4E0E\u4F26\u7406\u95EE\u9898",
  "text": "5.1.1 \u53EF\u89E3\u91CA\u6027\u4E0E\u4F26\u7406\u95EE\u9898",
  "depth": 3
}, {
  "id": "512-\u53EF\u6269\u5C55\u6027\u4E0E\u6CDB\u5316\u80FD\u529B",
  "text": "5.1.2 \u53EF\u6269\u5C55\u6027\u4E0E\u6CDB\u5316\u80FD\u529B",
  "depth": 3
}, {
  "id": "52-\u4E2A\u4EBA\u89C1\u89E3\u4E0E\u5C55\u671B",
  "text": "5.2 \u4E2A\u4EBA\u89C1\u89E3\u4E0E\u5C55\u671B",
  "depth": 2
}, {
  "id": "521-\u4EBA\u673A\u534F\u4F5C\u7684\u672A\u6765",
  "text": "5.2.1 \u4EBA\u673A\u534F\u4F5C\u7684\u672A\u6765",
  "depth": 3
}, {
  "id": "522-\u6587\u672C\u751F\u6210\u6280\u672F\u7684\u793E\u4F1A\u5F71\u54CD",
  "text": "5.2.2 \u6587\u672C\u751F\u6210\u6280\u672F\u7684\u793E\u4F1A\u5F71\u54CD",
  "depth": 3
}];
const title = "5. \u672A\u6765\u53D1\u5C55\u8D8B\u52BF\u4E0E\u601D\u8003";
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    img: "img",
    h1: "h1",
    a: "a",
    strong: "strong",
    h3: "h3",
    h4: "h4",
    div: "div",
    button: "button",
    span: "span",
    pre: "pre",
    code: "code",
    h5: "h5",
    h2: "h2",
    ul: "ul",
    li: "li"
  }, props.components);
  return jsxs(Fragment, {
    children: [jsx(_components.p, {
      children: jsx(_components.img, {
        src: "https://imgconvert.csdnimg.cn/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAxOS8xMS8xNC8xNmU2ODg3YTc2ZGMxY2Zm?x-oss-process=image/format,png",
        alt: "\u4EC0\u4E48\u662F\u6587\u672C\u751F\u6210\u6280\u672F\uFF1F\u5165\u95E8\u5FC5\u8BFB"
      })
    }), "\n", jsxs(_components.h1, {
      id: "1-\u5F15\u8A00",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#1-\u5F15\u8A00",
        children: "#"
      }), "1. \u5F15\u8A00"]
    }), "\n", jsx(_components.p, {
      children: "\u6587\u672C\u751F\u6210\u6280\u672F\u5728\u5F53\u4ECA\u4FE1\u606F\u65F6\u4EE3\u626E\u6F14\u7740\u4E3E\u8DB3\u8F7B\u91CD\u7684\u89D2\u8272\u3002\u968F\u7740\u4EBA\u5DE5\u667A\u80FD\u6280\u672F\u7684\u8FC5\u901F\u53D1\u5C55\uFF0C\u6587\u672C\u751F\u6210\u6280\u672F\u5F97\u5230\u4E86\u5E7F\u6CDB\u5173\u6CE8\u548C\u5E94\u7528\u3002\u4ECE\u667A\u80FD\u5BA2\u670D\u673A\u5668\u4EBA\u5230\u81EA\u7136\u8BED\u8A00\u751F\u6210\uFF0C\u6587\u672C\u751F\u6210\u6280\u672F\u7684\u5E94\u7528\u573A\u666F\u8D8A\u6765\u8D8A\u4E30\u5BCC\u591A\u6837\u3002\u901A\u8FC7\u8BAD\u7EC3\u6A21\u578B\u5B66\u4E60\u8BED\u8A00\u7ED3\u6784\u548C\u89C4\u5F8B\uFF0C\u8BA1\u7B97\u673A\u80FD\u591F\u751F\u6210\u5177\u6709\u903B\u8F91\u6027\u548C\u8FDE\u8D2F\u6027\u7684\u6587\u672C\uFF0C\u6781\u5927\u5730\u63D0\u9AD8\u4E86\u4EBA\u4EEC\u7684\u5DE5\u4F5C\u6548\u7387\u548C\u751F\u6D3B\u8D28\u91CF\u3002\u5728\u6570\u5B57\u5185\u5BB9\u521B\u4F5C\u3001\u667A\u80FD\u7FFB\u8BD1\u3001\u8206\u60C5\u76D1\u6D4B\u7B49\u9886\u57DF\uFF0C\u6587\u672C\u751F\u6210\u6280\u672F\u90FD\u5C55\u73B0\u51FA\u5F3A\u5927\u7684\u6F5C\u529B\u548C\u4F18\u52BF\u3002\u6DF1\u5165\u4E86\u89E3\u6587\u672C\u751F\u6210\u6280\u672F\u7684\u57FA\u7840\u6982\u5FF5\u548C\u53D1\u5C55\u8D8B\u52BF\uFF0C\u5BF9\u4E8E\u628A\u63E1\u672A\u6765\u79D1\u6280\u53D1\u5C55\u8109\u7EDC\u5177\u6709\u91CD\u8981\u610F\u4E49\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "2-\u6587\u672C\u751F\u6210\u6280\u672F\u7684\u57FA\u7840\u6982\u5FF5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#2-\u6587\u672C\u751F\u6210\u6280\u672F\u7684\u57FA\u7840\u6982\u5FF5",
        children: "#"
      }), "2. ", jsx(_components.strong, {
        children: "\u6587\u672C\u751F\u6210\u6280\u672F\u7684\u57FA\u7840\u6982\u5FF5"
      })]
    }), "\n", jsx(_components.p, {
      children: "\u6587\u672C\u751F\u6210\u6280\u672F\u4F5C\u4E3A\u4EBA\u5DE5\u667A\u80FD\u9886\u57DF\u7684\u91CD\u8981\u5206\u652F\uFF0C\u5728\u81EA\u7136\u8BED\u8A00\u5904\u7406\u3001\u5185\u5BB9\u521B\u4F5C\u7B49\u9886\u57DF\u6709\u7740\u5E7F\u6CDB\u7684\u5E94\u7528\u3002\u4E3A\u4E86\u6DF1\u5165\u4E86\u89E3\u8FD9\u4E00\u6280\u672F\uFF0C\u9996\u5148\u9700\u8981\u638C\u63E1\u8BED\u8A00\u6A21\u578B\u5728\u6587\u672C\u751F\u6210\u4E2D\u7684\u5173\u952E\u4F5C\u7528\u4EE5\u53CA\u795E\u7ECF\u7F51\u7EDC\u5728\u5176\u4E2D\u7684\u5E94\u7528\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "21-\u8BED\u8A00\u6A21\u578B\u7684\u4F5C\u7528",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#21-\u8BED\u8A00\u6A21\u578B\u7684\u4F5C\u7528",
        children: "#"
      }), "2.1 \u8BED\u8A00\u6A21\u578B\u7684\u4F5C\u7528"]
    }), "\n", jsxs(_components.h4, {
      id: "211-n-\u5143\u6A21\u578B\u7684\u539F\u7406",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#211-n-\u5143\u6A21\u578B\u7684\u539F\u7406",
        children: "#"
      }), "2.1.1 n \u5143\u6A21\u578B\u7684\u539F\u7406"]
    }), "\n", jsx(_components.p, {
      children: "n \u5143\u6A21\u578B\u662F\u4E00\u79CD\u57FA\u4E8E\u7EDF\u8BA1\u7684\u8BED\u8A00\u6A21\u578B\uFF0C\u7528\u4E8E\u63CF\u8FF0\u6587\u672C\u4E2D\u5355\u8BCD\u4E4B\u95F4\u7684\u5173\u8054\u5173\u7CFB\u3002\u7B80\u8A00\u4E4B\uFF0Cn \u5143\u6A21\u578B\u5047\u8BBE\u7B2C n \u4E2A\u8BCD\u7684\u51FA\u73B0\u6982\u7387\u4F9D\u8D56\u4E8E\u524D\u9762 n-1 \u4E2A\u8BCD\uFF0C\u901A\u8FC7\u7EDF\u8BA1\u5927\u91CF\u6587\u672C\u6570\u636E\uFF0C\u53EF\u4EE5\u5F97\u5230\u4E0D\u540C n \u503C\u4E0B\u7684\u6A21\u578B\u6765\u9884\u6D4B\u6587\u672C\u4E2D\u7684\u8BCD\u8BED\u3002"
    }), "\n", jsxs(_components.div, {
      className: "language-python",
      children: [jsx(_components.button, {
        className: "copy"
      }), jsx(_components.span, {
        className: "lang",
        children: "python"
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
              children: "# \u4EE5\u4E09\u5143\u6A21\u578B\u4E3A\u4F8B"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "n "
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
              children: "3"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "# \u4F7F\u7528\u8BED\u6599\u5E93\u8BAD\u7EC3 n \u5143\u6A21\u578B"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "model "
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
                color: "#88C0D0"
              },
              children: "train_ngram_model"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "corpus"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " n"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "# \u9884\u6D4B\u4E0B\u4E00\u4E2A\u5355\u8BCD"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "next_word "
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
                color: "#88C0D0"
              },
              children: "predict_next_word"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "context"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " model"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h4, {
      id: "212-\u57FA\u4E8E\u6982\u7387\u7684\u8BED\u8A00\u751F\u6210",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#212-\u57FA\u4E8E\u6982\u7387\u7684\u8BED\u8A00\u751F\u6210",
        children: "#"
      }), "2.1.2 \u57FA\u4E8E\u6982\u7387\u7684\u8BED\u8A00\u751F\u6210"]
    }), "\n", jsx(_components.p, {
      children: "\u57FA\u4E8E\u6982\u7387\u7684\u8BED\u8A00\u751F\u6210\u662F\u5229\u7528\u4E0A\u4E0B\u6587\u4E2D\u5355\u8BCD\u7684\u51FA\u73B0\u6982\u7387\u6765\u751F\u6210\u6587\u672C\u7684\u65B9\u6CD5\u3002\u8FD9\u79CD\u65B9\u6CD5\u9700\u8981\u8BA1\u7B97\u6BCF\u4E2A\u5355\u8BCD\u5728\u7ED9\u5B9A\u4E0A\u4E0B\u6587\u4E0B\u51FA\u73B0\u7684\u6761\u4EF6\u6982\u7387\uFF0C\u5E76\u9009\u62E9\u6982\u7387\u6700\u9AD8\u7684\u5355\u8BCD\u4F5C\u4E3A\u751F\u6210\u7ED3\u679C\u3002"
    }), "\n", jsxs(_components.div, {
      className: "language-python",
      children: [jsx(_components.button, {
        className: "copy"
      }), jsx(_components.span, {
        className: "lang",
        children: "python"
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
              children: "# \u6839\u636E\u6761\u4EF6\u6982\u7387\u751F\u6210\u6587\u672C"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "generated_text "
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
                color: "#88C0D0"
              },
              children: "generate_text"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "context"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " model"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h3, {
      id: "22-\u795E\u7ECF\u7F51\u7EDC\u5728\u6587\u672C\u751F\u6210\u4E2D\u7684\u5E94\u7528",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#22-\u795E\u7ECF\u7F51\u7EDC\u5728\u6587\u672C\u751F\u6210\u4E2D\u7684\u5E94\u7528",
        children: "#"
      }), "2.2 \u795E\u7ECF\u7F51\u7EDC\u5728\u6587\u672C\u751F\u6210\u4E2D\u7684\u5E94\u7528"]
    }), "\n", jsxs(_components.h4, {
      id: "221-\u5FAA\u73AF\u795E\u7ECF\u7F51\u7EDCrnn",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#221-\u5FAA\u73AF\u795E\u7ECF\u7F51\u7EDCrnn",
        children: "#"
      }), "2.2.1 \u5FAA\u73AF\u795E\u7ECF\u7F51\u7EDC\uFF08RNN\uFF09"]
    }), "\n", jsx(_components.p, {
      children: "\u5FAA\u73AF\u795E\u7ECF\u7F51\u7EDC\u662F\u4E00\u79CD\u80FD\u591F\u5904\u7406\u5E8F\u5217\u6570\u636E\u7684\u795E\u7ECF\u7F51\u7EDC\u7ED3\u6784\uFF0C\u5728\u6587\u672C\u751F\u6210\u4E2D\u5E38\u88AB\u7528\u6765\u6355\u6349\u5355\u8BCD\u4E4B\u95F4\u7684\u957F\u7A0B\u4F9D\u8D56\u5173\u7CFB\u3002RNN \u7684\u9690\u85CF\u5C42\u53EF\u4EE5\u4FDD\u5B58\u5148\u524D\u65F6\u95F4\u6B65\u7684\u4FE1\u606F\uFF0C\u5E76\u5728\u5F53\u524D\u65F6\u95F4\u6B65\u8FDB\u884C\u8BA1\u7B97\uFF0C\u4ECE\u800C\u66F4\u597D\u5730\u7406\u89E3\u4E0A\u4E0B\u6587\u4FE1\u606F\u3002"
    }), "\n", jsxs(_components.div, {
      className: "language-python",
      children: [jsx(_components.button, {
        className: "copy"
      }), jsx(_components.span, {
        className: "lang",
        children: "python"
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
              children: "# \u4F7F\u7528\u5FAA\u73AF\u795E\u7ECF\u7F51\u7EDC\u751F\u6210\u6587\u672C"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "generated_text "
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
                color: "#88C0D0"
              },
              children: "generate_text_with_rnn"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "context"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " rnn_model"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h4, {
      id: "222-\u957F\u77ED\u65F6\u8BB0\u5FC6\u7F51\u7EDClstm",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#222-\u957F\u77ED\u65F6\u8BB0\u5FC6\u7F51\u7EDClstm",
        children: "#"
      }), "2.2.2 \u957F\u77ED\u65F6\u8BB0\u5FC6\u7F51\u7EDC\uFF08LSTM\uFF09"]
    }), "\n", jsx(_components.p, {
      children: "\u957F\u77ED\u65F6\u8BB0\u5FC6\u7F51\u7EDC\u662F\u4E3A\u89E3\u51B3\u4F20\u7EDF RNN \u96BE\u4EE5\u5904\u7406\u957F\u5E8F\u5217\u95EE\u9898\u800C\u8BBE\u8BA1\u7684\u6539\u8FDB\u7248\u672C\uFF0C\u901A\u8FC7\u95E8\u63A7\u7ED3\u6784\u6765\u63A7\u5236\u4FE1\u606F\u7684\u8F93\u5165\u3001\u8F93\u51FA\u548C\u9057\u5FD8\uFF0C\u6709\u6548\u5730\u907F\u514D\u4E86\u68AF\u5EA6\u6D88\u5931\u548C\u68AF\u5EA6\u7206\u70B8\u95EE\u9898\uFF0C\u4F7F\u5176\u5728\u6587\u672C\u751F\u6210\u4EFB\u52A1\u4E2D\u8868\u73B0\u66F4\u52A0\u4F18\u5F02\u3002"
    }), "\n", jsxs(_components.div, {
      className: "language-python",
      children: [jsx(_components.button, {
        className: "copy"
      }), jsx(_components.span, {
        className: "lang",
        children: "python"
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
              children: "# \u4F7F\u7528\u957F\u77ED\u65F6\u8BB0\u5FC6\u7F51\u7EDC\u751F\u6210\u6587\u672C"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "generated_text "
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
                color: "#88C0D0"
              },
              children: "generate_text_with_lstm"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "context"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " lstm_model"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u4EE5\u4E0A\u4ECB\u7ECD\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u8BED\u8A00\u6A21\u578B\u548C\u795E\u7ECF\u7F51\u7EDC\u5728\u6587\u672C\u751F\u6210\u4E2D\u7684\u5173\u952E\u4F5C\u7528\u4EE5\u53CA\u57FA\u672C\u539F\u7406\u3002\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5C06\u8FDB\u4E00\u6B65\u63A2\u8BA8\u6587\u672C\u751F\u6210\u6280\u672F\u7684\u53D1\u5C55\u4E0E\u8FDB\u5316\uFF0C\u4EE5\u53CA\u5176\u5728\u4E0D\u540C\u9886\u57DF\u4E2D\u7684\u5E94\u7528\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "3-\u6587\u672C\u751F\u6210\u6280\u672F\u7684\u53D1\u5C55\u4E0E\u8FDB\u5316",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#3-\u6587\u672C\u751F\u6210\u6280\u672F\u7684\u53D1\u5C55\u4E0E\u8FDB\u5316",
        children: "#"
      }), "3. ", jsx(_components.strong, {
        children: "\u6587\u672C\u751F\u6210\u6280\u672F\u7684\u53D1\u5C55\u4E0E\u8FDB\u5316"
      })]
    }), "\n", jsxs(_components.h4, {
      id: "31-\u751F\u6210\u5BF9\u6297\u7F51\u7EDCgan\u7684\u51FA\u73B0",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#31-\u751F\u6210\u5BF9\u6297\u7F51\u7EDCgan\u7684\u51FA\u73B0",
        children: "#"
      }), "3.1 \u751F\u6210\u5BF9\u6297\u7F51\u7EDC\uFF08GAN\uFF09\u7684\u51FA\u73B0"]
    }), "\n", jsx(_components.p, {
      children: "\u751F\u6210\u5BF9\u6297\u7F51\u7EDC\uFF08GAN\uFF09\u662F\u4E00\u79CD\u6DF1\u5EA6\u5B66\u4E60\u6A21\u578B\uFF0C\u7531\u751F\u6210\u5668\u548C\u5224\u522B\u5668\u7EC4\u6210\uFF0C\u901A\u8FC7\u5BF9\u6297\u5B66\u4E60\u7684\u65B9\u5F0F\u6765\u751F\u6210\u903C\u771F\u7684\u6570\u636E\u3002GAN \u7684\u6838\u5FC3\u601D\u60F3\u5728\u4E8E\u5229\u7528\u4E24\u4E2A\u7F51\u7EDC\u76F8\u4E92\u535A\u5F08\u7684\u65B9\u5F0F\u8FDB\u884C\u8BAD\u7EC3\uFF0C\u5728\u751F\u6210\u6587\u672C\u65B9\u9762\u4E5F\u6709\u5E7F\u6CDB\u7684\u5E94\u7528\u3002"
    }), "\n", jsxs(_components.h5, {
      id: "311-gan-\u7684\u5DE5\u4F5C\u539F\u7406",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#311-gan-\u7684\u5DE5\u4F5C\u539F\u7406",
        children: "#"
      }), "3.1.1 GAN \u7684\u5DE5\u4F5C\u539F\u7406"]
    }), "\n", jsx(_components.p, {
      children: "\u751F\u6210\u5668\u63A5\u6536\u4E00\u4E2A\u968F\u673A\u7684\u566A\u58F0\u5411\u91CF\uFF0C\u901A\u8FC7\u53CD\u590D\u8FED\u4EE3\u751F\u6210\u5047\u6570\u636E\uFF1B\u5224\u522B\u5668\u5219\u63A5\u6536\u771F\u5B9E\u6570\u636E\u548C\u751F\u6210\u5668\u751F\u6210\u7684\u5047\u6570\u636E\uFF0C\u5206\u522B\u8FDB\u884C\u5224\u522B\u3002\u4E8C\u8005\u76F8\u4E92\u5BF9\u6297\uFF0C\u751F\u6210\u5668\u5E0C\u671B\u751F\u6210\u7684\u6570\u636E\u80FD\u591F\u6B3A\u9A97\u5224\u522B\u5668\uFF0C\u5224\u522B\u5668\u5219\u529B\u56FE\u6B63\u786E\u533A\u5206\u771F\u5047\u6570\u636E\uFF0C\u901A\u8FC7\u53CD\u590D\u8BAD\u7EC3\u4F7F\u751F\u6210\u5668\u751F\u6210\u903C\u771F\u7684\u6570\u636E\uFF0C\u8FD9\u79CD\u5BF9\u6297\u4F7F\u5F97\u751F\u6210\u7684\u6587\u672C\u66F4\u52A0\u771F\u5B9E\u3002"
    }), "\n", jsxs(_components.div, {
      className: "language-python",
      children: [jsx(_components.button, {
        className: "copy"
      }), jsx(_components.span, {
        className: "lang",
        children: "python"
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
              children: "# \u4F2A\u4EE3\u7801\u793A\u4F8B\uFF1A\u751F\u6210\u5BF9\u6297\u7F51\u7EDC\u7684\u8BAD\u7EC3\u8FC7\u7A0B"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "for"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " each epoch"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
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
              children: "for"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " each batch"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        noise = "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "generate_noise"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "()"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "# \u751F\u6210\u968F\u673A\u566A\u58F0\u5411\u91CF"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        fake_data = "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "generator"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "noise"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "# \u751F\u6210\u5047\u6570\u636E"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        loss_d = discriminator"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "train_on_batch"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "real_data"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " fake_data"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "# \u5224\u522B\u5668\u8BAD\u7EC3"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        noise = "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "generate_noise"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "()"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "# \u91CD\u65B0\u751F\u6210\u968F\u673A\u566A\u58F0\u5411\u91CF"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        loss_g = gan"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "train_on_batch"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "noise"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "# \u751F\u6210\u5668\u8BAD\u7EC3"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h4, {
      id: "32-\u81EA\u52A8\u7F16\u7801\u5668\u7684\u6587\u672C\u751F\u6210\u5E94\u7528",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#32-\u81EA\u52A8\u7F16\u7801\u5668\u7684\u6587\u672C\u751F\u6210\u5E94\u7528",
        children: "#"
      }), "3.2 \u81EA\u52A8\u7F16\u7801\u5668\u7684\u6587\u672C\u751F\u6210\u5E94\u7528"]
    }), "\n", jsx(_components.p, {
      children: "\u81EA\u52A8\u7F16\u7801\u5668\u662F\u4E00\u79CD\u80FD\u591F\u5C06\u8F93\u5165\u6570\u636E\u7F16\u7801\u4E3A\u9690\u85CF\u8868\u793A\u518D\u89E3\u7801\u91CD\u6784\u56DE\u539F\u59CB\u6570\u636E\u7684\u795E\u7ECF\u7F51\u7EDC\u6A21\u578B\uFF0C\u5728\u6587\u672C\u751F\u6210\u9886\u57DF\u6709\u7740\u72EC\u7279\u7684\u5E94\u7528\u65B9\u5F0F\u3002"
    }), "\n", jsxs(_components.h5, {
      id: "321-\u53D8\u5206\u81EA\u52A8\u7F16\u7801\u5668vae",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#321-\u53D8\u5206\u81EA\u52A8\u7F16\u7801\u5668vae",
        children: "#"
      }), "3.2.1 \u53D8\u5206\u81EA\u52A8\u7F16\u7801\u5668\uFF08VAE\uFF09"]
    }), "\n", jsx(_components.p, {
      children: "\u53D8\u5206\u81EA\u52A8\u7F16\u7801\u5668\u901A\u8FC7\u5B66\u4E60\u5E76\u4F18\u5316\u6F5C\u5728\u53D8\u91CF\u7684\u5206\u5E03\u6765\u751F\u6210\u6570\u636E\uFF0C\u4E0E\u4F20\u7EDF\u81EA\u52A8\u7F16\u7801\u5668\u76F8\u6BD4\uFF0CVAE \u80FD\u591F\u66F4\u597D\u5730\u6355\u6349\u6570\u636E\u6F5C\u5728\u7684\u8FDE\u7EED\u6027\u7ED3\u6784\uFF0C\u5BF9\u4E8E\u6587\u672C\u751F\u6210\u6709\u7740\u66F4\u597D\u7684\u4F18\u5316\u6548\u679C\u3002"
    }), "\n", jsxs(_components.h5, {
      id: "322-\u5E8F\u5217\u5230\u5E8F\u5217\u6A21\u578B\u7684\u4F18\u52BF",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#322-\u5E8F\u5217\u5230\u5E8F\u5217\u6A21\u578B\u7684\u4F18\u52BF",
        children: "#"
      }), "3.2.2 \u5E8F\u5217\u5230\u5E8F\u5217\u6A21\u578B\u7684\u4F18\u52BF"]
    }), "\n", jsx(_components.p, {
      children: "\u5E8F\u5217\u5230\u5E8F\u5217\uFF08Seq2Seq\uFF09\u6A21\u578B\u662F\u4E00\u79CD\u57FA\u4E8E\u7F16\u7801\u5668-\u89E3\u7801\u5668\u7ED3\u6784\u7684\u795E\u7ECF\u7F51\u7EDC\uFF0C\u80FD\u591F\u5728\u6587\u672C\u751F\u6210\u4E2D\u5B9E\u73B0\u8F93\u5165\u5E8F\u5217\u5230\u8F93\u51FA\u5E8F\u5217\u7684\u8F6C\u6362\uFF0C\u6BD4\u5982\u673A\u5668\u7FFB\u8BD1\u7B49\u4EFB\u52A1\u3002\u5176\u9002\u7528\u4E8E\u4E0D\u5B9A\u957F\u5E8F\u5217\u6570\u636E\u7684\u5904\u7406\uFF0C\u63D0\u9AD8\u4E86\u6587\u672C\u751F\u6210\u7684\u7075\u6D3B\u6027\u548C\u51C6\u786E\u6027\u3002"
    }), "\n", jsxs(_components.div, {
      className: "language-python",
      children: [jsx(_components.button, {
        className: "copy"
      }), jsx(_components.span, {
        className: "lang",
        children: "python"
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
              children: "# \u4F2A\u4EE3\u7801\u793A\u4F8B\uFF1ASeq2Seq \u6A21\u578B\u7684\u8BAD\u7EC3\u8FC7\u7A0B"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "for"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " each epoch"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
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
              children: "for"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " each input_seq"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " target_seq "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "in"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " dataset"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        encoder_output"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " encoder_states = "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "encoder"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "input_seq"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "# \u7F16\u7801\u5668\u5F97\u5230\u8F93\u51FA\u548C\u72B6\u6001"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        decoder_output = "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "decoder"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "encoder_output"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " encoder_states"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "# \u89E3\u7801\u5668\u6839\u636E\u7F16\u7801\u7ED3\u679C\u751F\u6210\u8F93\u51FA"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        loss = "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "calculate_loss"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "target_seq"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " decoder_output"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "# \u8BA1\u7B97\u635F\u5931"
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
                color: "#88C0D0"
              },
              children: "optimize"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "loss"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "# \u4F18\u5316\u5668\u66F4\u65B0\u53C2\u6570"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u751F\u6210\u5BF9\u6297\u7F51\u7EDC\u548C\u81EA\u52A8\u7F16\u7801\u5668\u7B49\u6280\u672F\u7684\u4E0D\u65AD\u6F14\u8FDB\uFF0C\u6587\u672C\u751F\u6210\u7684\u8D28\u91CF\u548C\u6548\u7387\u5F97\u5230\u4E86\u663E\u8457\u63D0\u5347\uFF0C\u4E3A\u81EA\u7136\u8BED\u8A00\u5904\u7406\u548C\u5185\u5BB9\u521B\u4F5C\u7B49\u9886\u57DF\u5E26\u6765\u4E86\u66F4\u591A\u53EF\u80FD\u6027\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "41-\u81EA\u7136\u8BED\u8A00\u5904\u7406\u4E2D\u7684\u6587\u672C\u751F\u6210",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#41-\u81EA\u7136\u8BED\u8A00\u5904\u7406\u4E2D\u7684\u6587\u672C\u751F\u6210",
        children: "#"
      }), "4.1 \u81EA\u7136\u8BED\u8A00\u5904\u7406\u4E2D\u7684\u6587\u672C\u751F\u6210"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u5F53\u4ECA\u7684\u4FE1\u606F\u65F6\u4EE3\uFF0C\u81EA\u7136\u8BED\u8A00\u5904\u7406\uFF08Natural Language Processing, NLP\uFF09\u6280\u672F\u7684\u53D1\u5C55\u65E5\u65B0\u6708\u5F02\u3002\u6587\u672C\u751F\u6210\u4F5C\u4E3A\u5176\u4E2D\u7684\u4E00\u4E2A\u91CD\u8981\u5206\u652F\uFF0C\u5728\u5404\u4E2A\u9886\u57DF\u5C55\u73B0\u51FA\u4E86\u5DE8\u5927\u7684\u5E94\u7528\u6F5C\u529B\u3002\u4ECE\u673A\u5668\u7FFB\u8BD1\u5230\u5BF9\u8BDD\u7CFB\u7EDF\uFF0C\u6587\u672C\u751F\u6210\u6280\u672F\u6B63\u5728\u4E0D\u65AD\u6539\u5584\u548C\u4E30\u5BCC\u6211\u4EEC\u4E0E\u8BA1\u7B97\u673A\u4E4B\u95F4\u7684\u4EA4\u6D41\u65B9\u5F0F\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "411-\u673A\u5668\u7FFB\u8BD1",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#411-\u673A\u5668\u7FFB\u8BD1",
        children: "#"
      }), "4.1.1 \u673A\u5668\u7FFB\u8BD1"]
    }), "\n", jsx(_components.p, {
      children: "\u673A\u5668\u7FFB\u8BD1\uFF08Machine Translation, MT\uFF09\u4F5C\u4E3A\u81EA\u7136\u8BED\u8A00\u5904\u7406\u7684\u4E00\u4E2A\u91CD\u8981\u5E94\u7528\u9886\u57DF\uFF0C\u81F4\u529B\u4E8E\u5B9E\u73B0\u4E0D\u540C\u8BED\u8A00\u4E4B\u95F4\u7684\u7FFB\u8BD1\u8FC7\u7A0B\u3002\u968F\u7740\u795E\u7ECF\u7F51\u7EDC\u548C\u6DF1\u5EA6\u5B66\u4E60\u7684\u53D1\u5C55\uFF0C\u57FA\u4E8E\u795E\u7ECF\u7F51\u7EDC\u7684\u673A\u5668\u7FFB\u8BD1\u6A21\u578B\u5728\u77ED\u77ED\u51E0\u5E74\u5185\u53D6\u5F97\u4E86\u5DE8\u5927\u7A81\u7834\u3002\u5176\u4E2D\uFF0CTransformer \u6A21\u578B\u7684\u63D0\u51FA\u5F7B\u5E95\u6539\u53D8\u4E86\u673A\u5668\u7FFB\u8BD1\u7684\u683C\u5C40\uFF0C\u4F7F\u5F97\u7FFB\u8BD1\u8D28\u91CF\u5927\u5E45\u63D0\u5347\uFF0C\u540C\u65F6\u663E\u8457\u7F29\u77ED\u4E86\u8BAD\u7EC3\u65F6\u95F4\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u5728\u673A\u5668\u7FFB\u8BD1\u4EFB\u52A1\u4E2D\uFF0C\u5229\u7528\u7F16\u7801\u5668-\u89E3\u7801\u5668\uFF08Encoder-Decoder\uFF09\u7ED3\u6784\uFF0C\u7F16\u7801\u5668\u8D1F\u8D23\u5C06\u8F93\u5165\u53E5\u5B50\u8F6C\u6362\u6210\u9690\u85CF\u8868\u793A\uFF0C\u89E3\u7801\u5668\u5219\u5C06\u8FD9\u4E2A\u9690\u85CF\u8868\u793A\u8F6C\u6362\u6210\u76EE\u6807\u8BED\u8A00\u3002\u8FD9\u79CD\u7AEF\u5230\u7AEF\u7684\u795E\u7ECF\u7F51\u7EDC\u6A21\u578B\u4E0D\u4EC5\u63D0\u9AD8\u4E86\u7FFB\u8BD1\u7684\u51C6\u786E\u6027\uFF0C\u8FD8\u80FD\u5904\u7406\u66F4\u957F\u7684\u53E5\u5B50\uFF0C\u66F4\u590D\u6742\u7684\u7ED3\u6784\u3002"
    }), "\n", jsxs(_components.div, {
      className: "language-python",
      children: [jsx(_components.button, {
        className: "copy"
      }), jsx(_components.span, {
        className: "lang",
        children: "python"
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
              children: "# \u4F2A\u4EE3\u7801\u793A\u4F8B\uFF1A\u4F7F\u7528 Transformer \u8FDB\u884C\u673A\u5668\u7FFB\u8BD1"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "transformer "
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
                color: "#88C0D0"
              },
              children: "Transformer"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "num_layers"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "4"
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
                color: "#D8DEE9"
              },
              children: "d_model"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "128"
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
                color: "#D8DEE9"
              },
              children: "num_heads"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "8"
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
                color: "#D8DEE9"
              },
              children: "dff"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "512"
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
                color: "#D8DEE9"
              },
              children: "input_vocab_size"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "8500"
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
                color: "#D8DEE9"
              },
              children: "target_vocab_size"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "8000"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "output "
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
                color: "#88C0D0"
              },
              children: "transformer"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "input_sentence"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " target_sentence"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h3, {
      id: "412-\u5BF9\u8BDD\u7CFB\u7EDF",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#412-\u5BF9\u8BDD\u7CFB\u7EDF",
        children: "#"
      }), "4.1.2 \u5BF9\u8BDD\u7CFB\u7EDF"]
    }), "\n", jsx(_components.p, {
      children: "\u5BF9\u8BDD\u7CFB\u7EDF\u662F\u53E6\u4E00\u4E2A\u91CD\u8981\u7684\u6587\u672C\u751F\u6210\u5E94\u7528\u573A\u666F\uFF0C\u65E8\u5728\u4F7F\u673A\u5668\u80FD\u591F\u50CF\u4EBA\u7C7B\u4E00\u6837\u8FDB\u884C\u81EA\u7136\u3001\u6D41\u7545\u7684\u5BF9\u8BDD\u3002\u8FD1\u5E74\u6765\uFF0C\u57FA\u4E8E\u751F\u6210\u5F0F\u6A21\u578B\u7684\u5BF9\u8BDD\u7CFB\u7EDF\u5438\u5F15\u4E86\u5E7F\u6CDB\u7684\u5173\u6CE8\u3002\u901A\u8FC7\u6A21\u4EFF\u4EBA\u7C7B\u5BF9\u8BDD\u65B9\u5F0F\uFF0C\u8FD9\u7C7B\u7CFB\u7EDF\u53EF\u4EE5\u6839\u636E\u4E0A\u4E0B\u6587\u751F\u6210\u8FDE\u8D2F\u7684\u56DE\u590D\uFF0C\u4F7F\u5F97\u5BF9\u8BDD\u66F4\u52A0\u5BCC\u6709\u667A\u80FD\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u5FAA\u73AF\u795E\u7ECF\u7F51\u7EDC\uFF08RNN\uFF09\u548C\u957F\u77ED\u65F6\u8BB0\u5FC6\u7F51\u7EDC\uFF08LSTM\uFF09\u662F\u5E38\u7528\u7684\u6A21\u578B\u67B6\u6784\uFF0C\u7528\u4E8E\u6784\u5EFA\u5BF9\u8BDD\u7CFB\u7EDF\u7684\u751F\u6210\u6A21\u5757\u3002\u8FD9\u4E9B\u6A21\u578B\u80FD\u591F\u6355\u6349\u53E5\u5B50\u95F4\u7684\u4E0A\u4E0B\u6587\u4FE1\u606F\uFF0C\u4FDD\u8BC1\u4E86\u751F\u6210\u7684\u56DE\u590D\u4E0E\u5BF9\u8BDD\u60C5\u5883\u7684\u8FDE\u8D2F\u6027\u3002"
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
              children: "// \u4F2A\u4EE3\u7801\u793A\u4F8B\uFF1A\u4F7F\u7528 LSTM \u6A21\u578B\u6784\u5EFA\u5BF9\u8BDD\u7CFB\u7EDF"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "LSTMModel"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "lstm"
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
              children: "LSTMModel"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "hiddenSize"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "256"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " numLayers"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "4"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " dropout"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "0.2"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "String reply "
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
              children: "lstm"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "generateReply"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "inputMessage"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u5BF9\u8BDD\u7CFB\u7EDF\u7684\u53D1\u5C55\u8FC7\u7A0B\u4E2D\uFF0C\u7814\u7A76\u8005\u4EEC\u8FD8\u6CE8\u91CD\u4E8E\u6A21\u578B\u7684\u53EF\u89E3\u91CA\u6027\u548C\u591A\u6A21\u6001\u4EA4\u4E92\uFF0C\u4EE5\u63D0\u5347\u5BF9\u8BDD\u7684\u81EA\u7136\u6027\u548C\u4EBA\u673A\u4EA4\u6D41\u7684\u6548\u679C\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u4E0D\u65AD\u4F18\u5316\u548C\u6539\u8FDB\u673A\u5668\u7FFB\u8BD1\u548C\u5BF9\u8BDD\u7CFB\u7EDF\uFF0C\u6587\u672C\u751F\u6210\u6280\u672F\u5728\u81EA\u7136\u8BED\u8A00\u5904\u7406\u9886\u57DF\u7684\u5E94\u7528\u6B63\u5728\u4E0D\u65AD\u62D3\u5C55\u548C\u6DF1\u5316\uFF0C\u4E3A\u8DE8\u8BED\u8A00\u6C9F\u901A\u548C\u4EBA\u673A\u4EA4\u4E92\u5E26\u6765\u4E86\u66F4\u591A\u53EF\u80FD\u6027\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "5-\u672A\u6765\u53D1\u5C55\u8D8B\u52BF\u4E0E\u601D\u8003",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#5-\u672A\u6765\u53D1\u5C55\u8D8B\u52BF\u4E0E\u601D\u8003",
        children: "#"
      }), "5. \u672A\u6765\u53D1\u5C55\u8D8B\u52BF\u4E0E\u601D\u8003"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u6587\u672C\u751F\u6210\u6280\u672F\u9886\u57DF\uFF0C\u968F\u7740\u4EBA\u5DE5\u667A\u80FD\u7684\u6301\u7EED\u53D1\u5C55\uFF0C\u672A\u6765\u5C55\u671B\u4E2D\u65E2\u6709\u6311\u6218\uFF0C\u4E5F\u6709\u65E0\u9650\u7684\u673A\u9047\u3002\u4E86\u89E3\u5E76\u601D\u8003\u6587\u672C\u751F\u6210\u6280\u672F\u7684\u672A\u6765\u53D1\u5C55\u8D8B\u52BF\uFF0C\u4E0D\u4EC5\u80FD\u591F\u5E2E\u52A9\u6211\u4EEC\u66F4\u597D\u5730\u628A\u63E1\u884C\u4E1A\u52A8\u5411\uFF0C\u4E5F\u80FD\u4E3A\u6211\u4EEC\u7684\u6280\u672F\u5E94\u7528\u548C\u7814\u7A76\u63D0\u4F9B\u4E00\u5B9A\u7684\u6307\u5BFC\u3002"
    }), "\n", jsxs(_components.h2, {
      id: "51-\u6587\u672C\u751F\u6210\u6280\u672F\u7684\u6311\u6218\u4E0E\u673A\u9047",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#51-\u6587\u672C\u751F\u6210\u6280\u672F\u7684\u6311\u6218\u4E0E\u673A\u9047",
        children: "#"
      }), "5.1 \u6587\u672C\u751F\u6210\u6280\u672F\u7684\u6311\u6218\u4E0E\u673A\u9047"]
    }), "\n", jsxs(_components.h3, {
      id: "511-\u53EF\u89E3\u91CA\u6027\u4E0E\u4F26\u7406\u95EE\u9898",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#511-\u53EF\u89E3\u91CA\u6027\u4E0E\u4F26\u7406\u95EE\u9898",
        children: "#"
      }), "5.1.1 \u53EF\u89E3\u91CA\u6027\u4E0E\u4F26\u7406\u95EE\u9898"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "\u6311\u6218\uFF1A"
        }), " \u5F53\u524D\u6587\u672C\u751F\u6210\u6280\u672F\u5927\u591A\u57FA\u4E8E\u6DF1\u5EA6\u5B66\u4E60\u6A21\u578B\uFF0C\u8FD9\u4E9B\u6A21\u578B\u5F80\u5F80\u5177\u6709\u9ED1\u7BB1\u7279\u6027\uFF0C\u96BE\u4EE5\u89E3\u91CA\u5176\u751F\u6210\u7ED3\u679C\u7684\u5177\u4F53\u539F\u56E0\uFF0C\u7ED9\u7528\u6237\u548C\u5F00\u53D1\u8005\u5E26\u6765\u4E86\u56F0\u6270\u3002"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "\u673A\u9047\uFF1A"
        }), " \u7740\u773C\u4E8E\u63D0\u9AD8\u6A21\u578B\u7684\u53EF\u89E3\u91CA\u6027\uFF0C\u5C06\u4E3A\u7528\u6237\u63D0\u4F9B\u66F4\u76F4\u89C2\u548C\u53EF\u4FE1\u8D56\u7684\u751F\u6210\u7ED3\u679C\uFF0C\u8FDB\u800C\u4FC3\u8FDB\u6587\u672C\u751F\u6210\u6280\u672F\u5728\u5404\u9886\u57DF\u7684\u66F4\u5E7F\u6CDB\u5E94\u7528\u3002"]
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "512-\u53EF\u6269\u5C55\u6027\u4E0E\u6CDB\u5316\u80FD\u529B",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#512-\u53EF\u6269\u5C55\u6027\u4E0E\u6CDB\u5316\u80FD\u529B",
        children: "#"
      }), "5.1.2 \u53EF\u6269\u5C55\u6027\u4E0E\u6CDB\u5316\u80FD\u529B"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "\u6311\u6218\uFF1A"
        }), " \u968F\u7740\u6570\u636E\u91CF\u7684\u4E0D\u65AD\u589E\u5927\uFF0C\u6587\u672C\u751F\u6210\u6A21\u578B\u9700\u8981\u5177\u5907\u66F4\u597D\u7684\u53EF\u6269\u5C55\u6027\uFF0C\u80FD\u591F\u5904\u7406\u5927\u89C4\u6A21\u6570\u636E\uFF0C\u5E76\u5728\u4FDD\u6301\u6548\u7387\u7684\u540C\u65F6\u4FDD\u6301\u7A33\u5B9A\u7684\u751F\u6210\u7ED3\u679C\u3002"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "\u673A\u9047\uFF1A"
        }), " \u901A\u8FC7\u4F18\u5316\u6A21\u578B\u67B6\u6784\u3001\u7B97\u6CD5\u548C\u8BAD\u7EC3\u65B9\u6CD5\uFF0C\u63D0\u5347\u6587\u672C\u751F\u6210\u6A21\u578B\u7684\u6CDB\u5316\u80FD\u529B\uFF0C\u4F7F\u5176\u5728\u4E0D\u540C\u9886\u57DF\u548C\u4EFB\u52A1\u4E2D\u8868\u73B0\u66F4\u4E3A\u51FA\u8272\u3002"]
      }), "\n"]
    }), "\n", jsxs(_components.h2, {
      id: "52-\u4E2A\u4EBA\u89C1\u89E3\u4E0E\u5C55\u671B",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#52-\u4E2A\u4EBA\u89C1\u89E3\u4E0E\u5C55\u671B",
        children: "#"
      }), "5.2 \u4E2A\u4EBA\u89C1\u89E3\u4E0E\u5C55\u671B"]
    }), "\n", jsxs(_components.h3, {
      id: "521-\u4EBA\u673A\u534F\u4F5C\u7684\u672A\u6765",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#521-\u4EBA\u673A\u534F\u4F5C\u7684\u672A\u6765",
        children: "#"
      }), "5.2.1 \u4EBA\u673A\u534F\u4F5C\u7684\u672A\u6765"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "\u968F\u7740\u6587\u672C\u751F\u6210\u6280\u672F\u7684\u4E0D\u65AD\u8FDB\u5316\uFF0C\u672A\u6765\u4EBA\u673A\u534F\u4F5C\u5C06\u53D8\u5F97\u66F4\u52A0\u7D27\u5BC6\u3002\u4EBA\u7C7B\u53EF\u4EE5\u501F\u52A9\u6587\u672C\u751F\u6210\u6280\u672F\u6765\u5FEB\u901F\u751F\u6210\u5927\u91CF\u6587\u672C\u5185\u5BB9\uFF0C\u4ECE\u800C\u8282\u7701\u65F6\u95F4\u548C\u7CBE\u529B\uFF0C\u5C06\u66F4\u591A\u7CBE\u529B\u6295\u5165\u5230\u521B\u9020\u6027\u548C\u7B56\u7565\u6027\u7684\u5DE5\u4F5C\u4E2D\u3002"
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "522-\u6587\u672C\u751F\u6210\u6280\u672F\u7684\u793E\u4F1A\u5F71\u54CD",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#522-\u6587\u672C\u751F\u6210\u6280\u672F\u7684\u793E\u4F1A\u5F71\u54CD",
        children: "#"
      }), "5.2.2 \u6587\u672C\u751F\u6210\u6280\u672F\u7684\u793E\u4F1A\u5F71\u54CD"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "\u6587\u672C\u751F\u6210\u6280\u672F\u7684\u53D1\u5C55\u5C06\u6DF1\u523B\u5F71\u54CD\u793E\u4F1A\u7684\u4FE1\u606F\u4F20\u64AD\u65B9\u5F0F\u548C\u4EBA\u4EEC\u7684\u5DE5\u4F5C\u751F\u6D3B\u3002\u5728\u672A\u6765\uFF0C\u4EBA\u4EEC\u53EF\u80FD\u4F1A\u66F4\u591A\u5730\u4F9D\u8D56\u6587\u672C\u751F\u6210\u6280\u672F\u6765\u8FDB\u884C\u6587\u5B57\u521B\u4F5C\u548C\u6C9F\u901A\uFF0C\u8FD9\u4E5F\u5C06\u5BF9\u4F20\u7EDF\u5199\u4F5C\u548C\u4FE1\u606F\u4F20\u64AD\u65B9\u5F0F\u4EA7\u751F\u6DF1\u8FDC\u5F71\u54CD\u3002"
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u7EFC\u4E0A\u6240\u8FF0\uFF0C\u6587\u672C\u751F\u6210\u6280\u672F\u5728\u4E0D\u65AD\u53D1\u5C55\u7684\u9053\u8DEF\u4E0A\uFF0C\u9762\u4E34\u7740\u4E00\u7CFB\u5217\u7684\u6311\u6218\u548C\u673A\u9047\u3002\u901A\u8FC7\u6301\u7EED\u7684\u6280\u672F\u521B\u65B0\u548C\u4E0D\u65AD\u7684\u601D\u8003\u63A2\u7D22\uFF0C\u6211\u4EEC\u76F8\u4FE1\u6587\u672C\u751F\u6210\u6280\u672F\u5C06\u5728\u672A\u6765\u62E5\u6709\u66F4\u52A0\u5E7F\u9614\u7684\u53D1\u5C55\u7A7A\u95F4\uFF0C\u5E76\u5BF9\u793E\u4F1A\u751F\u6D3B\u5E26\u6765\u79EF\u6781\u7684\u5F71\u54CD\u3002"
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

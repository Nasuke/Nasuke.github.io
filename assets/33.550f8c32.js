import { jsx, jsxs, Fragment } from "react/jsx-runtime";
const frontmatter = void 0;
const toc = [{
  "id": "21-\u6574\u578B\u6570\u636E\u7C7B\u578B",
  "text": "2.1 \u6574\u578B\u6570\u636E\u7C7B\u578B",
  "depth": 3
}, {
  "id": "211-tinyint",
  "text": "2.1.1 TINYINT",
  "depth": 4
}, {
  "id": "212-smallint",
  "text": "2.1.2 SMALLINT",
  "depth": 4
}, {
  "id": "213-mediumint",
  "text": "2.1.3 MEDIUMINT",
  "depth": 4
}, {
  "id": "214-intinteger",
  "text": "2.1.4 INT/INTEGER",
  "depth": 4
}, {
  "id": "215-bigint",
  "text": "2.1.5 BIGINT",
  "depth": 4
}, {
  "id": "22-\u6D6E\u70B9\u578B\u6570\u636E\u7C7B\u578B",
  "text": "2.2 \u6D6E\u70B9\u578B\u6570\u636E\u7C7B\u578B",
  "depth": 3
}, {
  "id": "221-float",
  "text": "2.2.1 FLOAT",
  "depth": 4
}, {
  "id": "222-double",
  "text": "2.2.2 DOUBLE",
  "depth": 4
}, {
  "id": "223-decimal",
  "text": "2.2.3 DECIMAL",
  "depth": 4
}, {
  "id": "31-date",
  "text": "3.1 DATE",
  "depth": 4
}, {
  "id": "32-time",
  "text": "3.2 TIME",
  "depth": 4
}, {
  "id": "33-datetime",
  "text": "3.3 DATETIME",
  "depth": 4
}, {
  "id": "34-timestamp",
  "text": "3.4 TIMESTAMP",
  "depth": 4
}, {
  "id": "35-year",
  "text": "3.5 YEAR",
  "depth": 4
}, {
  "id": "41-char",
  "text": "4.1 CHAR",
  "depth": 3
}, {
  "id": "42-varchar",
  "text": "4.2 VARCHAR",
  "depth": 3
}, {
  "id": "43-binary",
  "text": "4.3 BINARY",
  "depth": 3
}, {
  "id": "44-varbinary",
  "text": "4.4 VARBINARY",
  "depth": 3
}, {
  "id": "45-text",
  "text": "4.5 TEXT",
  "depth": 3
}, {
  "id": "46-blob",
  "text": "4.6 BLOB",
  "depth": 3
}, {
  "id": "51-enum",
  "text": "5.1 ENUM",
  "depth": 3
}, {
  "id": "\u793A\u4F8B",
  "text": "\u793A\u4F8B\uFF1A",
  "depth": 4
}, {
  "id": "\u4EE3\u7801\u8BF4\u660E",
  "text": "\u4EE3\u7801\u8BF4\u660E",
  "depth": 4
}, {
  "id": "52-set",
  "text": "5.2 SET",
  "depth": 3
}, {
  "id": "\u793A\u4F8B-1",
  "text": "\u793A\u4F8B\uFF1A",
  "depth": 4
}, {
  "id": "\u4EE3\u7801\u8BF4\u660E-1",
  "text": "\u4EE3\u7801\u8BF4\u660E",
  "depth": 4
}, {
  "id": "53-json",
  "text": "5.3 JSON",
  "depth": 3
}, {
  "id": "\u793A\u4F8B-2",
  "text": "\u793A\u4F8B\uFF1A",
  "depth": 4
}, {
  "id": "\u4EE3\u7801\u8BF4\u660E-2",
  "text": "\u4EE3\u7801\u8BF4\u660E",
  "depth": 4
}, {
  "id": "\u603B\u7ED3",
  "text": "\u603B\u7ED3",
  "depth": 3
}, {
  "id": "61-\u9009\u62E9\u9002\u5F53\u7684\u6574\u578B\u6570\u636E\u7C7B\u578B",
  "text": "6.1 \u9009\u62E9\u9002\u5F53\u7684\u6574\u578B\u6570\u636E\u7C7B\u578B",
  "depth": 3
}, {
  "id": "611-tinyint",
  "text": "6.1.1 TINYINT",
  "depth": 4
}, {
  "id": "612-smallint",
  "text": "6.1.2 SMALLINT",
  "depth": 4
}, {
  "id": "613-mediumint",
  "text": "6.1.3 MEDIUMINT",
  "depth": 4
}, {
  "id": "614-intinteger",
  "text": "6.1.4 INT/INTEGER",
  "depth": 4
}, {
  "id": "615-bigint",
  "text": "6.1.5 BIGINT",
  "depth": 4
}, {
  "id": "62-\u9009\u62E9\u5408\u9002\u7684\u6D6E\u70B9\u578B\u6570\u636E\u7C7B\u578B",
  "text": "6.2 \u9009\u62E9\u5408\u9002\u7684\u6D6E\u70B9\u578B\u6570\u636E\u7C7B\u578B",
  "depth": 3
}, {
  "id": "621-float",
  "text": "6.2.1 FLOAT",
  "depth": 4
}, {
  "id": "622-double",
  "text": "6.2.2 DOUBLE",
  "depth": 4
}, {
  "id": "623-decimal",
  "text": "6.2.3 DECIMAL",
  "depth": 4
}, {
  "id": "63-\u9009\u62E9\u9002\u5F53\u7684\u65E5\u671F\u4E0E\u65F6\u95F4\u578B\u6570\u636E\u7C7B\u578B",
  "text": "6.3 \u9009\u62E9\u9002\u5F53\u7684\u65E5\u671F\u4E0E\u65F6\u95F4\u578B\u6570\u636E\u7C7B\u578B",
  "depth": 3
}, {
  "id": "631-date",
  "text": "6.3.1 DATE",
  "depth": 4
}, {
  "id": "632-time",
  "text": "6.3.2 TIME",
  "depth": 4
}, {
  "id": "633-datetime",
  "text": "6.3.3 DATETIME",
  "depth": 4
}, {
  "id": "634-timestamp",
  "text": "6.3.4 TIMESTAMP",
  "depth": 4
}, {
  "id": "635-year",
  "text": "6.3.5 YEAR",
  "depth": 4
}];
const title = "6. MySQL\u6570\u636E\u7C7B\u578B\u9009\u62E9\u6280\u5DE7\u4E0E\u6700\u4F73\u5B9E\u8DF5";
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
    li: "li"
  }, props.components);
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "1-mysql\u5B57\u6BB5\u6570\u636E\u7C7B\u578B\u6982\u8FF0",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#1-mysql\u5B57\u6BB5\u6570\u636E\u7C7B\u578B\u6982\u8FF0",
        children: "#"
      }), "1. MySQL\u5B57\u6BB5\u6570\u636E\u7C7B\u578B\u6982\u8FF0"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u6570\u636E\u5E93\u8BBE\u8BA1\u4E2D\uFF0C\u9009\u62E9\u5408\u9002\u7684\u6570\u636E\u7C7B\u578B\u662F\u81F3\u5173\u91CD\u8981\u7684\u3002MySQL\u63D0\u4F9B\u4E86\u591A\u79CD\u6570\u636E\u7C7B\u578B\uFF0C\u5305\u62EC\u6570\u503C\u578B\u3001\u65E5\u671F\u4E0E\u65F6\u95F4\u578B\u3001\u5B57\u7B26\u4E32\u578B\u548C\u5176\u4ED6\u7C7B\u578B\u3002\u6BCF\u79CD\u6570\u636E\u7C7B\u578B\u90FD\u6709\u5176\u7279\u70B9\u548C\u9002\u7528\u573A\u666F\u3002\u5728\u672C\u7AE0\u8282\u4E2D\uFF0C\u6211\u4EEC\u5C06\u5168\u9762\u6982\u8FF0MySQL\u5B57\u6BB5\u6570\u636E\u7C7B\u578B\uFF0C\u5E2E\u52A9\u60A8\u66F4\u597D\u5730\u7406\u89E3\u5404\u79CD\u6570\u636E\u7C7B\u578B\u7684\u4F5C\u7528\u548C\u533A\u522B\uFF0C\u4E3A\u540E\u7EED\u7AE0\u8282\u7684\u6DF1\u5165\u5B66\u4E60\u6253\u4E0B\u57FA\u7840\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u63A5\u4E0B\u6765\u6211\u4EEC\u5C06\u6DF1\u5165\u63A2\u8BA8MySQL\u5404\u7C7B\u6570\u636E\u7C7B\u578B\uFF0C\u4ECE\u6570\u503C\u578B\u6570\u636E\u7C7B\u578B\u5F00\u59CB\uFF0C\u9010\u6B65\u5411\u65E5\u671F\u4E0E\u65F6\u95F4\u578B\u3001\u5B57\u7B26\u4E32\u578B\u548C\u5176\u4ED6\u7C7B\u578B\u62D3\u5C55\uFF0C\u5E2E\u52A9\u60A8\u5168\u9762\u4E86\u89E3MySQL\u6570\u636E\u5E93\u7684\u6570\u636E\u5B58\u50A8\u65B9\u5F0F\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "2-mysql\u6570\u503C\u578B\u6570\u636E\u7C7B\u578B",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#2-mysql\u6570\u503C\u578B\u6570\u636E\u7C7B\u578B",
        children: "#"
      }), "2. MySQL\u6570\u503C\u578B\u6570\u636E\u7C7B\u578B"]
    }), "\n", jsxs(_components.h3, {
      id: "21-\u6574\u578B\u6570\u636E\u7C7B\u578B",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#21-\u6574\u578B\u6570\u636E\u7C7B\u578B",
        children: "#"
      }), "2.1 \u6574\u578B\u6570\u636E\u7C7B\u578B"]
    }), "\n", jsx(_components.p, {
      children: "\u6574\u578B\u6570\u636E\u7C7B\u578B\u5728MySQL\u4E2D\u662F\u975E\u5E38\u5E38\u7528\u7684\uFF0C\u53EF\u4EE5\u5B58\u50A8\u6574\u6570\u503C\uFF0C\u6839\u636E\u6570\u503C\u7684\u8303\u56F4\u548C\u7CBE\u5EA6\u7684\u4E0D\u540C\uFF0C\u53EF\u4EE5\u9009\u62E9\u4E0D\u540C\u7684\u6574\u578B\u6570\u636E\u7C7B\u578B\u6765\u5B58\u50A8\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "211-tinyint",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#211-tinyint",
        children: "#"
      }), "2.1.1 TINYINT"]
    }), "\n", jsx(_components.p, {
      children: "TINYINT \u7C7B\u578B\u7528\u4E8E\u5B58\u50A8\u8303\u56F4\u8F83\u5C0F\u7684\u6574\u6570\u503C\uFF0C\u901A\u5E38\u5360\u7528 1 \u4E2A\u5B57\u8282\u7684\u5B58\u50A8\u7A7A\u95F4\uFF0C\u53EF\u4EE5\u5B58\u50A8\u7684\u8303\u56F4\u662F\u4ECE -128 \u5230 127 \uFF08\u65E0\u7B26\u53F7\u65F6\u662F 0 \u5230 255\uFF09\u3002"
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
              children: " student ("
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
              children: "TINYINT"
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
    }), "\n", jsxs(_components.h4, {
      id: "212-smallint",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#212-smallint",
        children: "#"
      }), "2.1.2 SMALLINT"]
    }), "\n", jsx(_components.p, {
      children: "SMALLINT \u7C7B\u578B\u7528\u4E8E\u5B58\u50A8\u8303\u56F4\u9002\u4E2D\u7684\u6574\u6570\u503C\uFF0C\u901A\u5E38\u5360\u7528 2 \u4E2A\u5B57\u8282\u7684\u5B58\u50A8\u7A7A\u95F4\uFF0C\u53EF\u4EE5\u5B58\u50A8\u7684\u8303\u56F4\u662F\u4ECE -32768 \u5230 32767 \uFF08\u65E0\u7B26\u53F7\u65F6\u662F 0 \u5230 65535\uFF09\u3002"
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
              children: " employee ("
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
              children: "SMALLINT"
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
    }), "\n", jsxs(_components.h4, {
      id: "213-mediumint",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#213-mediumint",
        children: "#"
      }), "2.1.3 MEDIUMINT"]
    }), "\n", jsx(_components.p, {
      children: "MEDIUMINT \u7C7B\u578B\u9002\u7528\u4E8E\u5B58\u50A8\u4E2D\u7B49\u8303\u56F4\u7684\u6574\u6570\u503C\uFF0C\u901A\u5E38\u5360\u7528 3 \u4E2A\u5B57\u8282\u7684\u5B58\u50A8\u7A7A\u95F4\uFF0C\u53EF\u4EE5\u5B58\u50A8\u7684\u8303\u56F4\u662F\u4ECE -8388608 \u5230 8388607 \uFF08\u65E0\u7B26\u53F7\u65F6\u662F 0 \u5230 16777215\uFF09\u3002"
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
              children: " account ("
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    id MEDIUMINT"
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
          })]
        })
      })]
    }), "\n", jsxs(_components.h4, {
      id: "214-intinteger",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#214-intinteger",
        children: "#"
      }), "2.1.4 INT/INTEGER"]
    }), "\n", jsx(_components.p, {
      children: "INT \u6216 INTEGER \u7C7B\u578B\u901A\u5E38\u88AB\u7528\u6765\u5B58\u50A8\u4E00\u822C\u8303\u56F4\u7684\u6574\u6570\u503C\uFF0C\u5360\u7528 4 \u4E2A\u5B57\u8282\u7684\u5B58\u50A8\u7A7A\u95F4\uFF0C\u53EF\u4EE5\u5B58\u50A8\u7684\u8303\u56F4\u662F\u4ECE -2147483648 \u5230 2147483647 \uFF08\u65E0\u7B26\u53F7\u65F6\u662F 0 \u5230 4294967295\uFF09\u3002"
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
              children: " product ("
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
    }), "\n", jsxs(_components.h4, {
      id: "215-bigint",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#215-bigint",
        children: "#"
      }), "2.1.5 BIGINT"]
    }), "\n", jsx(_components.p, {
      children: "BIGINT \u7C7B\u578B\u9002\u7528\u4E8E\u5B58\u50A8\u6781\u5927\u8303\u56F4\u7684\u6574\u6570\u503C\uFF0C\u901A\u5E38\u5360\u7528 8 \u4E2A\u5B57\u8282\u7684\u5B58\u50A8\u7A7A\u95F4\uFF0C\u53EF\u4EE5\u5B58\u50A8\u7684\u8303\u56F4\u662F\u4ECE -9223372036854775808 \u5230 9223372036854775807 \uFF08\u65E0\u7B26\u53F7\u65F6\u662F 0 \u5230 18446744073709551615\uFF09\u3002"
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
              children: " sensor ("
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
              children: "BIGINT"
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
    }), "\n", jsxs(_components.h3, {
      id: "22-\u6D6E\u70B9\u578B\u6570\u636E\u7C7B\u578B",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#22-\u6D6E\u70B9\u578B\u6570\u636E\u7C7B\u578B",
        children: "#"
      }), "2.2 \u6D6E\u70B9\u578B\u6570\u636E\u7C7B\u578B"]
    }), "\n", jsx(_components.p, {
      children: "\u6D6E\u70B9\u578B\u6570\u636E\u7C7B\u578B\u7528\u4E8E\u5B58\u50A8\u5E26\u6709\u5C0F\u6570\u90E8\u5206\u7684\u6570\u503C\uFF0C\u5176\u7CBE\u5EA6\u548C\u8303\u56F4\u66F4\u5927\uFF0C\u4F46\u662F\u76F8\u5BF9\u4E8E\u6574\u578B\u6570\u636E\u7C7B\u578B\u9700\u8981\u66F4\u591A\u7684\u5B58\u50A8\u7A7A\u95F4\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "221-float",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#221-float",
        children: "#"
      }), "2.2.1 FLOAT"]
    }), "\n", jsx(_components.p, {
      children: "FLOAT \u7C7B\u578B\u7528\u4E8E\u5B58\u50A8\u5355\u7CBE\u5EA6\u6D6E\u70B9\u6570\uFF0C\u8FD9\u610F\u5473\u7740\u5B83\u53EF\u4EE5\u5B58\u50A8\u5C0F\u6570\u70B9\u540E 7 \u4F4D\u7684\u6570\u5B57\uFF0C\u5E76\u4E14\u5360\u7528 4 \u4E2A\u5B57\u8282\u7684\u5B58\u50A8\u7A7A\u95F4\u3002"
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
              children: " temperature ("
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
              children: "value"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "FLOAT"
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
    }), "\n", jsxs(_components.h4, {
      id: "222-double",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#222-double",
        children: "#"
      }), "2.2.2 DOUBLE"]
    }), "\n", jsx(_components.p, {
      children: "DOUBLE \u7C7B\u578B\u7528\u4E8E\u5B58\u50A8\u53CC\u7CBE\u5EA6\u6D6E\u70B9\u6570\uFF0C\u76F8\u6BD4\u4E8E FLOAT \u7C7B\u578B\uFF0C\u5B83\u7684\u7CBE\u5EA6\u66F4\u9AD8\uFF0C\u53EF\u4EE5\u5B58\u50A8\u5C0F\u6570\u70B9\u540E 15 \u4F4D\u7684\u6570\u5B57\uFF0C\u5E76\u4E14\u5360\u7528 8 \u4E2A\u5B57\u8282\u7684\u5B58\u50A8\u7A7A\u95F4\u3002"
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
              children: " price ("
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    amount DOUBLE"
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
          })]
        })
      })]
    }), "\n", jsxs(_components.h4, {
      id: "223-decimal",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#223-decimal",
        children: "#"
      }), "2.2.3 DECIMAL"]
    }), "\n", jsx(_components.p, {
      children: "DECIMAL \u7C7B\u578B\u7528\u4E8E\u5B58\u50A8\u7CBE\u786E\u7684\u5C0F\u6570\u503C\uFF0C\u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u9700\u6C42\u8BBE\u7F6E\u5C0F\u6570\u70B9\u524D\u540E\u7684\u4F4D\u6570\uFF0C\u9002\u7528\u4E8E\u5BF9\u7CBE\u5EA6\u8981\u6C42\u8F83\u9AD8\u7684\u573A\u666F\u3002"
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
              children: " salary ("
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    amount "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "DECIMAL"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "10"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "2"
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
    }), "\n", jsx(_components.p, {
      children: "\u5728\u8FD9\u4E00\u7AE0\u8282\u4E2D\uFF0C\u6211\u4EEC\u8BE6\u7EC6\u4ECB\u7ECD\u4E86MySQL\u4E2D\u6570\u503C\u578B\u6570\u636E\u7C7B\u578B\u7684\u5404\u79CD\u9009\u9879\uFF0C\u5305\u62EC\u6574\u578B\u548C\u6D6E\u70B9\u578B\u3002\u4E0D\u540C\u7684\u6570\u636E\u7C7B\u578B\u9002\u7528\u4E8E\u4E0D\u540C\u8303\u56F4\u548C\u7CBE\u5EA6\u7684\u6570\u636E\u5B58\u50A8\u9700\u6C42\uFF0C\u5408\u7406\u9009\u62E9\u5408\u9002\u7684\u6570\u636E\u7C7B\u578B\u53EF\u4EE5\u63D0\u9AD8\u6570\u636E\u5B58\u50A8\u6548\u7387\u548C\u51C6\u786E\u6027\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "3-mysql\u65E5\u671F\u4E0E\u65F6\u95F4\u578B\u6570\u636E\u7C7B\u578B",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#3-mysql\u65E5\u671F\u4E0E\u65F6\u95F4\u578B\u6570\u636E\u7C7B\u578B",
        children: "#"
      }), "3. MySQL\u65E5\u671F\u4E0E\u65F6\u95F4\u578B\u6570\u636E\u7C7B\u578B"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u6570\u636E\u5E93\u8BBE\u8BA1\u4E2D\uFF0C\u65E5\u671F\u4E0E\u65F6\u95F4\u578B\u6570\u636E\u7C7B\u578B\u5728\u5B9E\u9645\u5E94\u7528\u4E2D\u5360\u636E\u7740\u91CD\u8981\u4F4D\u7F6E\u3002MySQL \u63D0\u4F9B\u4E86\u591A\u79CD\u65E5\u671F\u4E0E\u65F6\u95F4\u578B\u6570\u636E\u7C7B\u578B\uFF0C\u672C\u7AE0\u5C06\u6DF1\u5165\u63A2\u8BA8\u8FD9\u4E9B\u6570\u636E\u7C7B\u578B\u7684\u7279\u6027\u3001\u7528\u9014\u548C\u6700\u4F73\u5B9E\u8DF5\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "31-date",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#31-date",
        children: "#"
      }), "3.1 DATE"]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "DATE"
      }), " \u7C7B\u578B\u7528\u4E8E\u5B58\u50A8\u65E5\u671F\u503C\uFF0C\u683C\u5F0F\u4E3A 'YYYY-MM-DD'\u3002\u4F8B\u5982\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B SQL \u521B\u5EFA\u4E00\u4E2A ", jsx(_components.code, {
        children: "users"
      }), " \u8868\uFF0C\u5176\u4E2D\u5305\u542B\u4E00\u4E2A ", jsx(_components.code, {
        children: "birthday"
      }), " \u5B57\u6BB5\uFF1A"]
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
              children: "    birthday "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "DATE"
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
    }), "\n", jsxs(_components.h4, {
      id: "32-time",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#32-time",
        children: "#"
      }), "3.2 TIME"]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "TIME"
      }), " \u7C7B\u578B\u7528\u4E8E\u5B58\u50A8\u65F6\u95F4\u503C\uFF0C\u683C\u5F0F\u4E3A 'HH:MM:SS'\u3002\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B SQL \u793A\u4F8B\u5C06 ", jsx(_components.code, {
        children: "TIME"
      }), " \u7C7B\u578B\u5E94\u7528\u5230\u8868\u4E2D\uFF1A"]
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
              children: " appointments ("
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
              children: "    appointment_date "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "DATE"
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
              children: "    appointment_time "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "TIME"
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
    }), "\n", jsxs(_components.h4, {
      id: "33-datetime",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#33-datetime",
        children: "#"
      }), "3.3 DATETIME"]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "DATETIME"
      }), " \u7C7B\u578B\u7528\u4E8E\u5B58\u50A8\u65E5\u671F\u548C\u65F6\u95F4\u503C\uFF0C\u683C\u5F0F\u4E3A 'YYYY-MM-DD HH:MM:SS'\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u793A\u4F8B\uFF0C\u5C55\u793A\u4E86\u5982\u4F55\u5728\u8868\u4E2D\u4F7F\u7528 ", jsx(_components.code, {
        children: "DATETIME"
      }), " \u7C7B\u578B\uFF1A"]
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
              children: " events ("
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
              children: "    event_name "
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
              children: "),"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    event_datetime "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "DATETIME"
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
    }), "\n", jsxs(_components.h4, {
      id: "34-timestamp",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#34-timestamp",
        children: "#"
      }), "3.4 TIMESTAMP"]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "TIMESTAMP"
      }), " \u7C7B\u578B\u88AB\u7528\u6765\u5B58\u50A8\u65F6\u95F4\u6233\uFF0C\u4ECE MySQL 5.6.5 \u7248\u672C\u5F00\u59CB\uFF0C\u5B83\u7684\u5B58\u50A8\u8303\u56F4\u6269\u5C55\u5230 '1970-01-01 00:00:01' UTC \u5230 '2038-01-19 03:14:07' UTC\u3002\u4EE5\u4E0B\u662F\u4E00\u4E2A ", jsx(_components.code, {
        children: "TIMESTAMP"
      }), " \u7C7B\u578B\u7684\u793A\u4F8B\uFF1A"]
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
              children: " activity_log ("
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
              children: "action"
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
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "timestamp"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "TIMESTAMP"
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
    }), "\n", jsxs(_components.h4, {
      id: "35-year",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#35-year",
        children: "#"
      }), "3.5 YEAR"]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "YEAR"
      }), " \u7C7B\u578B\u7528\u4E8E\u5B58\u50A8\u5E74\u4EFD\u503C\uFF0C\u8868\u793A\u4E3A\u56DB\u4F4D\u6574\u6570\u3002\u53EF\u4EE5\u5728\u8868\u4E2D\u4F7F\u7528 ", jsx(_components.code, {
        children: "YEAR"
      }), " \u7C7B\u578B\u6765\u5B58\u50A8\u7279\u5B9A\u5E74\u4EFD\u4FE1\u606F\uFF1A"]
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
              children: " financial_reports ("
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
              children: "    report_name "
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
              children: "),"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    report_year "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "YEAR"
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
    }), "\n", jsx(_components.p, {
      children: "\u5728\u672C\u7AE0\u4E2D\uFF0C\u6211\u4EEC\u5BF9 MySQL \u7684\u65E5\u671F\u4E0E\u65F6\u95F4\u578B\u6570\u636E\u7C7B\u578B\u8FDB\u884C\u4E86\u5168\u9762\u4ECB\u7ECD\uFF0C\u5E76\u63D0\u4F9B\u4E86\u5404\u79CD\u5B9E\u9645\u5E94\u7528\u573A\u666F\u4E0B\u7684\u793A\u4F8B\u3002\u719F\u7EC3\u638C\u63E1\u8FD9\u4E9B\u6570\u636E\u7C7B\u578B\uFF0C\u5E76\u6839\u636E\u5B9E\u9645\u9700\u6C42\u9009\u62E9\u5408\u9002\u7684\u7C7B\u578B\uFF0C\u5C06\u6709\u52A9\u4E8E\u8BBE\u8BA1\u9AD8\u6548\u4E14\u51C6\u786E\u7684\u6570\u636E\u5E93\u7ED3\u6784\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "4-mysql\u5B57\u7B26\u4E32\u578B\u6570\u636E\u7C7B\u578B",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#4-mysql\u5B57\u7B26\u4E32\u578B\u6570\u636E\u7C7B\u578B",
        children: "#"
      }), "4. MySQL\u5B57\u7B26\u4E32\u578B\u6570\u636E\u7C7B\u578B"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u6570\u636E\u5E93\u8BBE\u8BA1\u4E2D\uFF0C\u5B57\u7B26\u4E32\u578B\u6570\u636E\u7C7B\u578B\u662F\u975E\u5E38\u5E38\u89C1\u4E14\u91CD\u8981\u7684\u4E00\u90E8\u5206\u3002MySQL\u63D0\u4F9B\u4E86\u591A\u79CD\u5B57\u7B26\u4E32\u578B\u6570\u636E\u7C7B\u578B\uFF0C\u672C\u7AE0\u5C06\u6DF1\u5165\u63A2\u8BA8\u8FD9\u4E9B\u7C7B\u578B\u53CA\u5176\u4F7F\u7528\u573A\u666F\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "41-char",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#41-char",
        children: "#"
      }), "4.1 CHAR"]
    }), "\n", jsx(_components.p, {
      children: "CHAR\u662F\u4E00\u79CD\u56FA\u5B9A\u957F\u5EA6\u7684\u5B57\u7B26\u4E32\u6570\u636E\u7C7B\u578B\uFF0C\u5F53\u5B58\u50A8\u4E00\u4E2ACHAR\u7C7B\u578B\u7684\u503C\u65F6\uFF0CMySQL\u4F1A\u5220\u9664\u6240\u6709\u7684\u5C3E\u90E8\u7A7A\u683C\uFF0C\u7136\u540E\u7528\u7A7A\u683C\u586B\u5145\u5230\u6307\u5B9A\u7684\u957F\u5EA6\u3002"
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
              children: " example ("
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
              children: "CHAR"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "10"
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
    }), "\n", jsx(_components.p, {
      children: "\u5728\u4E0A\u9762\u7684\u793A\u4F8B\u4E2D\uFF0C\u5B9A\u4E49\u4E86\u4E00\u4E2A\u957F\u5EA6\u4E3A10\u7684CHAR\u7C7B\u578B\u7684name\u5B57\u6BB5\u3002\u5982\u679C\u63D2\u5165\u7684\u503C\u957F\u5EA6\u4E0D\u8DB310\uFF0CMySQL\u4F1A\u81EA\u52A8\u5728\u672B\u5C3E\u8865\u7A7A\u683C\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "42-varchar",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#42-varchar",
        children: "#"
      }), "4.2 VARCHAR"]
    }), "\n", jsx(_components.p, {
      children: "VARCHAR\u662F\u4E00\u79CD\u53EF\u53D8\u957F\u5EA6\u7684\u5B57\u7B26\u4E32\u6570\u636E\u7C7B\u578B\uFF0C\u4E0ECHAR\u4E0D\u540C\uFF0C\u5B83\u5B58\u50A8\u7684\u6570\u636E\u957F\u5EA6\u53EF\u53D8\uFF0C\u4F46\u6700\u5927\u957F\u5EA6\u662F\u56FA\u5B9A\u7684\u3002"
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
              children: " example ("
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
              children: ","
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
              children: "255"
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
    }), "\n", jsx(_components.p, {
      children: "\u5728\u4E0A\u8FF0\u4EE3\u7801\u4E2D\uFF0C\u5B9A\u4E49\u4E86\u4E00\u4E2A\u6700\u5927\u957F\u5EA6\u4E3A255\u7684VARCHAR\u7C7B\u578B\u7684email\u5B57\u6BB5\u3002VARCHAR\u9002\u5408\u7528\u4E8E\u5B58\u50A8\u957F\u5EA6\u53EF\u53D8\u7684\u5B57\u7B26\u4E32\uFF0C\u8282\u7701\u7A7A\u95F4\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "43-binary",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#43-binary",
        children: "#"
      }), "4.3 BINARY"]
    }), "\n", jsx(_components.p, {
      children: "BINARY\u662F\u4E00\u79CD\u56FA\u5B9A\u957F\u5EA6\u7684\u4E8C\u8FDB\u5236\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u4E0ECHAR\u7C7B\u4F3C\uFF0C\u4F46\u5B58\u50A8\u4E8C\u8FDB\u5236\u6570\u636E\u800C\u4E0D\u662F\u5B57\u7B26\u6570\u636E\u3002"
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
              children: " example ("
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
              children: "hash"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "BINARY"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "16"
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
    }), "\n", jsx(_components.p, {
      children: "\u5728\u4E0A\u9762\u7684\u793A\u4F8B\u4E2D\uFF0C\u521B\u5EFA\u4E86\u4E00\u4E2A\u957F\u5EA6\u4E3A16\u7684BINARY\u7C7B\u578B\u7684hash\u5B57\u6BB5\uFF0C\u7528\u4E8E\u5B58\u50A8\u4E8C\u8FDB\u5236\u6570\u636E\uFF0C\u5982\u54C8\u5E0C\u503C\u6216\u52A0\u5BC6\u5BC6\u94A5\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "44-varbinary",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#44-varbinary",
        children: "#"
      }), "4.4 VARBINARY"]
    }), "\n", jsx(_components.p, {
      children: "VARBINARY\u662F\u4E00\u79CD\u53EF\u53D8\u957F\u5EA6\u7684\u4E8C\u8FDB\u5236\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u4E5F\u7C7B\u4F3C\u4E8EVARCHAR\uFF0C\u4F46\u5B58\u50A8\u7684\u662F\u4E8C\u8FDB\u5236\u6570\u636E\u3002"
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
              children: " example ("
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
              children: "file"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "VARBINARY"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "1024"
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
    }), "\n", jsx(_components.p, {
      children: "\u5728\u4EE5\u4E0A\u4EE3\u7801\u4E2D\uFF0C\u5B9A\u4E49\u4E86\u4E00\u4E2A\u6700\u5927\u957F\u5EA6\u4E3A1024\u7684VARBINARY\u7C7B\u578B\u7684file\u5B57\u6BB5\uFF0C\u9002\u5408\u5B58\u50A8\u53EF\u53D8\u957F\u5EA6\u7684\u4E8C\u8FDB\u5236\u6570\u636E\uFF0C\u5982\u56FE\u7247\u6216\u6587\u4EF6\u5185\u5BB9\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "45-text",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#45-text",
        children: "#"
      }), "4.5 TEXT"]
    }), "\n", jsx(_components.p, {
      children: "TEXT\u662F\u4E00\u79CD\u7528\u4E8E\u5B58\u50A8\u5927\u6BB5\u6587\u672C\u6570\u636E\u7684\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u6700\u5927\u957F\u5EA6\u4E3A65,535\u4E2A\u5B57\u7B26\u3002"
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
              children: " example ("
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
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    content "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "TEXT"
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
    }), "\n", jsx(_components.p, {
      children: "\u5728\u4E0A\u8FF0\u793A\u4F8B\u4E2D\uFF0C\u521B\u5EFA\u4E86\u4E00\u4E2ATEXT\u7C7B\u578B\u7684content\u5B57\u6BB5\uFF0C\u7528\u4E8E\u5B58\u50A8\u8F83\u957F\u7684\u6587\u672C\u6570\u636E\uFF0C\u5982\u6587\u7AE0\u5185\u5BB9\u6216\u65E5\u5FD7\u8BB0\u5F55\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "46-blob",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#46-blob",
        children: "#"
      }), "4.6 BLOB"]
    }), "\n", jsx(_components.p, {
      children: "BLOB\u662F\u4E00\u79CD\u7528\u4E8E\u5B58\u50A8\u5927\u5757\u4E8C\u8FDB\u5236\u6570\u636E\u7684\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u6700\u5927\u957F\u5EA6\u4E5F\u4E3A65,535\u4E2A\u5B57\u8282\u3002"
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
              children: " example ("
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
              children: "image"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " BLOB"
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
    }), "\n", jsx(_components.p, {
      children: "\u5728\u4EE5\u4E0A\u4EE3\u7801\u7247\u6BB5\u4E2D\uFF0C\u5B9A\u4E49\u4E86\u4E00\u4E2ABLOB\u7C7B\u578B\u7684image\u5B57\u6BB5\uFF0C\u9002\u5408\u5B58\u50A8\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0C\u5982\u56FE\u7247\u6216\u89C6\u9891\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u4EE5\u4E0A\u4ECB\u7ECD\uFF0C\u6211\u4EEC\u6DF1\u5165\u4E86\u89E3\u4E86MySQL\u4E2D\u5B57\u7B26\u4E32\u578B\u6570\u636E\u7C7B\u578B\u7684\u591A\u6837\u6027\u53CA\u5404\u81EA\u7684\u7279\u70B9\u548C\u7528\u9014\u3002\u5728\u5B9E\u9645\u5E94\u7528\u4E2D\uFF0C\u6839\u636E\u4E0D\u540C\u7684\u9700\u6C42\u9009\u62E9\u5408\u9002\u7684\u5B57\u7B26\u4E32\u578B\u6570\u636E\u7C7B\u578B\u81F3\u5173\u91CD\u8981\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "5-mysql\u5176\u5B83\u6570\u636E\u7C7B\u578B",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#5-mysql\u5176\u5B83\u6570\u636E\u7C7B\u578B",
        children: "#"
      }), "5. MySQL\u5176\u5B83\u6570\u636E\u7C7B\u578B"]
    }), "\n", jsxs(_components.h3, {
      id: "51-enum",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#51-enum",
        children: "#"
      }), "5.1 ENUM"]
    }), "\n", jsx(_components.p, {
      children: "ENUM \u662F\u4E00\u79CD\u679A\u4E3E\u7C7B\u578B\uFF0C\u5B83\u5141\u8BB8\u4F60\u5728\u5B9A\u4E49\u5217\u7684\u65F6\u5019\u5C06\u5217\u7684\u503C\u9650\u5B9A\u5728\u4E00\u4E2A\u9884\u5B9A\u4E49\u7684\u5217\u8868\u4E4B\u5185\u3002\u5728 MySQL \u4E2D\uFF0CENUM \u5185\u7684\u6BCF\u4E2A\u503C\u90FD\u5BF9\u5E94\u4E00\u4E2A\u4ECE 1 \u5F00\u59CB\u7684\u7F16\u53F7\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "\u793A\u4F8B",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u793A\u4F8B",
        children: "#"
      }), "\u793A\u4F8B\uFF1A"]
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
              children: " shirts ("
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
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    size ENUM("
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "S"
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
              children: "M"
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
              children: "L"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
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
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
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
              children: "INTO"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " shirts (id, size) "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "VALUES"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "1"
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
              children: "S"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ");"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
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
              children: "INTO"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " shirts (id, size) "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "VALUES"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "2"
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
              children: "M"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
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
      id: "\u4EE3\u7801\u8BF4\u660E",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u4EE3\u7801\u8BF4\u660E",
        children: "#"
      }), "\u4EE3\u7801\u8BF4\u660E"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "\u4E0A\u8FF0\u4EE3\u7801\u521B\u5EFA\u4E86\u4E00\u4E2A shirts \u8868\uFF0C\u5176\u4E2D size \u5217\u53EA\u80FD\u5B58\u50A8 'S', 'M', 'L' \u8FD9\u4E09\u4E2A\u503C\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u63D2\u5165\u4E86\u4E24\u884C\u6570\u636E\uFF0C\u5206\u522B\u4E3A 'S' \u548C 'M'\u3002"
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "52-set",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#52-set",
        children: "#"
      }), "5.2 SET"]
    }), "\n", jsx(_components.p, {
      children: "SET \u7C7B\u578B\u4E0E ENUM \u7C7B\u4F3C\uFF0C\u4F46\u5B83\u53EF\u4EE5\u5B58\u50A8\u591A\u4E2A\u503C\u3002SET \u7C7B\u578B\u4F1A\u628A\u8FD9\u4E9B\u503C\u7EC4\u5408\u6210\u4E00\u4E2A\u96C6\u5408\uFF0C\u6BCF\u4E2A\u503C\u90FD\u5BF9\u5E94\u4E00\u4E2A\u4ECE 1 \u5F00\u59CB\u7684\u7F16\u53F7\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "\u793A\u4F8B-1",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u793A\u4F8B-1",
        children: "#"
      }), "\u793A\u4F8B\uFF1A"]
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
              children: " fruits ("
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
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    categories "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "SET"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "apple"
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
              children: "orange"
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
              children: "banana"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
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
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
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
              children: "INTO"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " fruits (id, categories) "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "VALUES"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "1"
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
              children: "apple,orange"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ");"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
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
              children: "INTO"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " fruits (id, categories) "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "VALUES"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "2"
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
              children: "banana"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
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
      id: "\u4EE3\u7801\u8BF4\u660E-1",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u4EE3\u7801\u8BF4\u660E-1",
        children: "#"
      }), "\u4EE3\u7801\u8BF4\u660E"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "\u521B\u5EFA\u4E86\u4E00\u4E2A fruits \u8868\uFF0C\u5176\u4E2D categories \u5217\u53EF\u4EE5\u540C\u65F6\u5B58\u50A8 'apple', 'orange', 'banana' \u4E09\u79CD\u6C34\u679C\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u7B2C\u4E00\u884C\u63D2\u5165\u6570\u636E 'apple,orange'\uFF0C\u7B2C\u4E8C\u884C\u63D2\u5165\u6570\u636E 'banana'\u3002"
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "53-json",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#53-json",
        children: "#"
      }), "5.3 JSON"]
    }), "\n", jsx(_components.p, {
      children: "JSON \u7C7B\u578B\u88AB\u5F15\u5165\u5230 MySQL \u4E2D\uFF0C\u4EE5\u6EE1\u8DB3\u5B58\u50A8\u975E\u7ED3\u6784\u5316\u6570\u636E\u7684\u9700\u6C42\u3002JSON \u7C7B\u578B\u53EF\u4EE5\u5B58\u50A8 JSON \u6570\u636E\uFF0C\u5E76\u63D0\u4F9B\u4E86 JSON \u51FD\u6570\u7528\u4E8E\u68C0\u7D22\u548C\u64CD\u4F5C JSON \u6570\u636E\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "\u793A\u4F8B-2",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u793A\u4F8B-2",
        children: "#"
      }), "\u793A\u4F8B\uFF1A"]
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
              children: " user ("
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
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    info "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "JSON"
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
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
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
              children: "INTO"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " user (id, info) "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "VALUES"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "1"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ", "
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
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: '{"name": "Alice", "age": 30, "email": "alice@example.com"}'
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
                color: "#D8DEE9FF"
              },
              children: ");"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h4, {
      id: "\u4EE3\u7801\u8BF4\u660E-2",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u4EE3\u7801\u8BF4\u660E-2",
        children: "#"
      }), "\u4EE3\u7801\u8BF4\u660E"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "\u521B\u5EFA\u4E86\u4E00\u4E2A user \u8868\uFF0C\u5176\u4E2D info \u5217\u5B58\u50A8 JSON \u683C\u5F0F\u7684\u7528\u6237\u4FE1\u606F\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u63D2\u5165\u4E86\u4E00\u884C\u6570\u636E\uFF0C\u5305\u542B\u7528\u6237\u7684\u59D3\u540D\u3001\u5E74\u9F84\u548C\u90AE\u7BB1\u4FE1\u606F\u3002"
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "\u603B\u7ED3",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u603B\u7ED3",
        children: "#"
      }), "\u603B\u7ED3"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "ENUM \u9002\u7528\u4E8E\u90A3\u4E9B\u5177\u6709\u56FA\u5B9A\u9009\u9879\u7684\u5217\uFF0C\u800C SET \u5219\u9002\u7528\u4E8E\u53EF\u4EE5\u9009\u62E9\u591A\u4E2A\u9009\u9879\u7684\u5217\u3002"
      }), "\n", jsx(_components.li, {
        children: "JSON \u7C7B\u578B\u9002\u7528\u4E8E\u5B58\u50A8\u975E\u7ED3\u6784\u5316\u6570\u636E\uFF0C\u65B9\u4FBF\u5B58\u50A8\u548C\u68C0\u7D22 JSON \u683C\u5F0F\u7684\u4FE1\u606F\u3002"
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u5B9E\u9645\u4F7F\u7528\u4E2D\uFF0C\u6839\u636E\u9700\u6C42\u9009\u62E9\u5408\u9002\u7684 MySQL \u5176\u5B83\u6570\u636E\u7C7B\u578B\u53EF\u4EE5\u66F4\u597D\u5730\u8BBE\u8BA1\u6570\u636E\u5E93\u7ED3\u6784\uFF0C\u63D0\u9AD8\u6570\u636E\u5B58\u50A8\u7684\u7075\u6D3B\u6027\u548C\u6548\u7387\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "6-mysql\u6570\u636E\u7C7B\u578B\u9009\u62E9\u6280\u5DE7\u4E0E\u6700\u4F73\u5B9E\u8DF5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#6-mysql\u6570\u636E\u7C7B\u578B\u9009\u62E9\u6280\u5DE7\u4E0E\u6700\u4F73\u5B9E\u8DF5",
        children: "#"
      }), "6. MySQL\u6570\u636E\u7C7B\u578B\u9009\u62E9\u6280\u5DE7\u4E0E\u6700\u4F73\u5B9E\u8DF5"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u8BBE\u8BA1\u6570\u636E\u5E93\u8868\u7ED3\u6784\u65F6\uFF0C\u9009\u62E9\u5408\u9002\u7684\u6570\u636E\u7C7B\u578B\u662F\u81F3\u5173\u91CD\u8981\u7684\uFF0C\u5B83\u76F4\u63A5\u5F71\u54CD\u5230\u6570\u636E\u5B58\u50A8\u7684\u6548\u7387\u548C\u51C6\u786E\u6027\u3002\u672C\u7AE0\u5C06\u4ECB\u7ECDMySQL\u6570\u636E\u7C7B\u578B\u9009\u62E9\u7684\u6280\u5DE7\u548C\u6700\u4F73\u5B9E\u8DF5\uFF0C\u5E2E\u52A9\u4F60\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\u66F4\u597D\u5730\u9009\u62E9\u5408\u9002\u7684\u6570\u636E\u7C7B\u578B\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "61-\u9009\u62E9\u9002\u5F53\u7684\u6574\u578B\u6570\u636E\u7C7B\u578B",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#61-\u9009\u62E9\u9002\u5F53\u7684\u6574\u578B\u6570\u636E\u7C7B\u578B",
        children: "#"
      }), "6.1 \u9009\u62E9\u9002\u5F53\u7684\u6574\u578B\u6570\u636E\u7C7B\u578B"]
    }), "\n", jsx(_components.p, {
      children: "\u6574\u578B\u6570\u636E\u7C7B\u578B\u5728MySQL\u4E2D\u88AB\u5E7F\u6CDB\u4F7F\u7528\uFF0C\u4F46\u5728\u9009\u62E9\u65F6\u9700\u8981\u6CE8\u610F\u5B58\u50A8\u9700\u6C42\u548C\u6570\u636E\u8303\u56F4\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "611-tinyint",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#611-tinyint",
        children: "#"
      }), "6.1.1 TINYINT"]
    }), "\n", jsx(_components.p, {
      children: "TINYINT \u7528\u4E8E\u5B58\u50A8\u5C0F\u8303\u56F4\u7684\u6574\u6570\u6570\u636E\uFF0C\u8303\u56F4\u4E3A-128\u5230127\u3002\u9002\u5408\u5B58\u50A8\u5E03\u5C14\u7C7B\u578B\u6570\u636E\u3002\u4F8B\u5982\uFF0C\u5728\u7528\u6237\u8868\u4E2D\u53EF\u4EE5\u4F7F\u7528 TINYINT \u7C7B\u578B\u5B58\u50A8\u6027\u522B\u4FE1\u606F\uFF0C0\u4EE3\u8868\u7537\u6027\uFF0C1\u4EE3\u8868\u5973\u6027\u3002"
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
              children: "    gender "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "TINYINT"
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
    }), "\n", jsxs(_components.h4, {
      id: "612-smallint",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#612-smallint",
        children: "#"
      }), "6.1.2 SMALLINT"]
    }), "\n", jsx(_components.p, {
      children: "SMALLINT \u9002\u5408\u5B58\u50A8\u8F83\u5C0F\u8303\u56F4\u7684\u6574\u6570\u6570\u636E\uFF0C\u8303\u56F4\u4E3A-32768\u523032767\u3002\u6BD4\u5982\u5728\u8BA2\u5355\u8868\u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528 SMALLINT \u7C7B\u578B\u5B58\u50A8\u8BA2\u5355\u6570\u91CF\u3002"
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
              children: " orders ("
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    order_id "
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
              children: "    quantity "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "SMALLINT"
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
    }), "\n", jsxs(_components.h4, {
      id: "613-mediumint",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#613-mediumint",
        children: "#"
      }), "6.1.3 MEDIUMINT"]
    }), "\n", jsx(_components.p, {
      children: "MEDIUMINT \u9002\u5408\u5B58\u50A8\u4E2D\u7B49\u8303\u56F4\u7684\u6574\u6570\u6570\u636E\uFF0C\u8303\u56F4\u4E3A-8388608\u52308388607\u3002\u5728\u9700\u8981\u5B58\u50A8\u6574\u6570\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u8003\u8651\u4F7F\u7528 MEDIUMINT\u3002"
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
              children: " product ("
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    product_id "
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
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    stock MEDIUMINT"
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
          })]
        })
      })]
    }), "\n", jsxs(_components.h4, {
      id: "614-intinteger",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#614-intinteger",
        children: "#"
      }), "6.1.4 INT/INTEGER"]
    }), "\n", jsx(_components.p, {
      children: "INT/INTEGER \u662F\u6700\u5E38\u7528\u7684\u6574\u578B\u6570\u636E\u7C7B\u578B\uFF0C\u9002\u5408\u5B58\u50A8\u4E00\u822C\u5927\u5C0F\u7684\u6574\u6570\uFF0C\u8303\u56F4\u4E3A-2147483648\u52302147483647\u3002\u5728\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\uFF0C\u4F7F\u7528 INT/INTEGER \u7C7B\u578B\u5373\u53EF\u6EE1\u8DB3\u9700\u6C42\u3002"
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
              children: " orders ("
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    order_id "
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
              children: "    total_amount "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "INT"
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
    }), "\n", jsxs(_components.h4, {
      id: "615-bigint",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#615-bigint",
        children: "#"
      }), "6.1.5 BIGINT"]
    }), "\n", jsx(_components.p, {
      children: "BIGINT \u9002\u5408\u5B58\u50A8\u5927\u8303\u56F4\u7684\u6574\u6570\u6570\u636E\uFF0C\u8303\u56F4\u4E3A-9223372036854775808\u52309223372036854775807\u3002\u5728\u9700\u8981\u5B58\u50A8\u975E\u5E38\u5927\u7684\u6574\u6570\u65F6\uFF0C\u53EF\u4EE5\u9009\u62E9 BIGINT \u7C7B\u578B\u3002"
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
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "transaction"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    transaction_id "
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
              children: "    amount "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "BIGINT"
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
    }), "\n", jsxs(_components.h3, {
      id: "62-\u9009\u62E9\u5408\u9002\u7684\u6D6E\u70B9\u578B\u6570\u636E\u7C7B\u578B",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#62-\u9009\u62E9\u5408\u9002\u7684\u6D6E\u70B9\u578B\u6570\u636E\u7C7B\u578B",
        children: "#"
      }), "6.2 \u9009\u62E9\u5408\u9002\u7684\u6D6E\u70B9\u578B\u6570\u636E\u7C7B\u578B"]
    }), "\n", jsx(_components.p, {
      children: "\u6D6E\u70B9\u578B\u6570\u636E\u7C7B\u578B\u7528\u4E8E\u5B58\u50A8\u5C0F\u6570\uFF0C\u5305\u62EC FLOAT\u3001DOUBLE \u548C DECIMAL\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "621-float",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#621-float",
        children: "#"
      }), "6.2.1 FLOAT"]
    }), "\n", jsx(_components.p, {
      children: "FLOAT \u7528\u4E8E\u5B58\u50A8\u5355\u7CBE\u5EA6\u6D6E\u70B9\u6570\uFF0C\u9002\u5408\u5B58\u50A8\u8F83\u5C0F\u8303\u56F4\u7684\u6D6E\u70B9\u6570\uFF0C\u4F46\u5B58\u5728\u7CBE\u5EA6\u95EE\u9898\u3002\u5728\u9700\u8981\u5B58\u50A8\u79D1\u5B66\u8BA1\u6570\u6CD5\u6216\u8FD1\u4F3C\u503C\u65F6\u4F7F\u7528 FLOAT\u3002"
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
              children: " product ("
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    product_id "
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
              children: "weight"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "FLOAT"
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
    }), "\n", jsxs(_components.h4, {
      id: "622-double",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#622-double",
        children: "#"
      }), "6.2.2 DOUBLE"]
    }), "\n", jsx(_components.p, {
      children: "DOUBLE \u7528\u4E8E\u5B58\u50A8\u53CC\u7CBE\u5EA6\u6D6E\u70B9\u6570\uFF0C\u8303\u56F4\u8F83\u5927\u4E14\u7CBE\u5EA6\u8F83\u9AD8\u3002\u5728\u9700\u8981\u66F4\u9AD8\u7CBE\u5EA6\u7684\u6D6E\u70B9\u6570\u65F6\u4F7F\u7528 DOUBLE\u3002"
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
              children: " product ("
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    product_id "
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
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    price DOUBLE"
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
          })]
        })
      })]
    }), "\n", jsxs(_components.h4, {
      id: "623-decimal",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#623-decimal",
        children: "#"
      }), "6.2.3 DECIMAL"]
    }), "\n", jsx(_components.p, {
      children: "DECIMAL \u7528\u4E8E\u5B58\u50A8\u56FA\u5B9A\u7CBE\u5EA6\u7684\u5C0F\u6570\uFF0C\u9002\u5408\u7528\u4E8E\u8D27\u5E01\u7B49\u7CBE\u786E\u8BA1\u7B97\u7684\u573A\u666F\u3002\u5728\u9700\u8981\u7CBE\u786E\u8BA1\u7B97\u65F6\uFF0C\u5E94\u8BE5\u4F18\u5148\u9009\u62E9 DECIMAL \u6570\u636E\u7C7B\u578B\u3002"
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
              children: " invoice ("
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    invoice_id "
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
              children: "    total_amount "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "DECIMAL"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "10"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "2"
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
    }), "\n", jsxs(_components.h3, {
      id: "63-\u9009\u62E9\u9002\u5F53\u7684\u65E5\u671F\u4E0E\u65F6\u95F4\u578B\u6570\u636E\u7C7B\u578B",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#63-\u9009\u62E9\u9002\u5F53\u7684\u65E5\u671F\u4E0E\u65F6\u95F4\u578B\u6570\u636E\u7C7B\u578B",
        children: "#"
      }), "6.3 \u9009\u62E9\u9002\u5F53\u7684\u65E5\u671F\u4E0E\u65F6\u95F4\u578B\u6570\u636E\u7C7B\u578B"]
    }), "\n", jsx(_components.p, {
      children: "\u65E5\u671F\u4E0E\u65F6\u95F4\u578B\u6570\u636E\u7C7B\u578B\u7528\u4E8E\u5B58\u50A8\u65E5\u671F\u548C\u65F6\u95F4\u4FE1\u606F\uFF0C\u5305\u62EC DATE\u3001TIME\u3001DATETIME\u3001TIMESTAMP \u548C YEAR\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "631-date",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#631-date",
        children: "#"
      }), "6.3.1 DATE"]
    }), "\n", jsx(_components.p, {
      children: "DATE \u7528\u4E8E\u5B58\u50A8\u65E5\u671F\u4FE1\u606F\uFF0C\u4E0D\u5305\u542B\u65F6\u95F4\u3002\u5728\u9700\u8981\u5B58\u50A8\u5E74\u6708\u65E5\u7684\u60C5\u51B5\u4E0B\u4F7F\u7528 DATE \u7C7B\u578B\u3002"
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
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "user_id"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
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
              children: "    registration_date "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "DATE"
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
    }), "\n", jsxs(_components.h4, {
      id: "632-time",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#632-time",
        children: "#"
      }), "6.3.2 TIME"]
    }), "\n", jsx(_components.p, {
      children: "TIME \u7528\u4E8E\u5B58\u50A8\u65F6\u95F4\u4FE1\u606F\uFF0C\u4E0D\u5305\u542B\u65E5\u671F\u3002\u5728\u9700\u8981\u5B58\u50A8\u65F6\u5206\u79D2\u7684\u60C5\u51B5\u4E0B\u4F7F\u7528 TIME \u7C7B\u578B\u3002"
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
              children: " events ("
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    event_id "
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
              children: "    start_time "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "TIME"
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
    }), "\n", jsxs(_components.h4, {
      id: "633-datetime",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#633-datetime",
        children: "#"
      }), "6.3.3 DATETIME"]
    }), "\n", jsx(_components.p, {
      children: "DATETIME \u7528\u4E8E\u5B58\u50A8\u65E5\u671F\u548C\u65F6\u95F4\u4FE1\u606F\uFF0C\u7CBE\u786E\u5230\u79D2\u3002\u5728\u9700\u8981\u5B58\u50A8\u5B8C\u6574\u65E5\u671F\u65F6\u95F4\u7684\u60C5\u51B5\u4E0B\u4F7F\u7528 DATETIME \u7C7B\u578B\u3002"
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
              children: " logs ("
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    log_id "
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
              children: "    log_time "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "DATETIME"
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
    }), "\n", jsxs(_components.h4, {
      id: "634-timestamp",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#634-timestamp",
        children: "#"
      }), "6.3.4 TIMESTAMP"]
    }), "\n", jsx(_components.p, {
      children: "TIMESTAMP \u7528\u4E8E\u5B58\u50A8\u65F6\u95F4\u6233\uFF0C\u901A\u5E38\u7528\u4E8E\u8BB0\u5F55\u6570\u636E\u7684\u521B\u5EFA\u6216\u4FEE\u6539\u65F6\u95F4\u3002\u5728\u9700\u8981\u8BB0\u5F55\u6570\u636E\u53D8\u66F4\u65F6\u95F4\u7684\u60C5\u51B5\u4E0B\u4F7F\u7528 TIMESTAMP \u7C7B\u578B\u3002"
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
              children: " posts ("
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    post_id "
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
              children: "    created_at "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "TIMESTAMP"
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
              children: "    updated_at "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "TIMESTAMP"
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
    }), "\n", jsxs(_components.h4, {
      id: "635-year",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#635-year",
        children: "#"
      }), "6.3.5 YEAR"]
    }), "\n", jsx(_components.p, {
      children: "YEAR \u7528\u4E8E\u5B58\u50A8\u5E74\u4EFD\u4FE1\u606F\u3002\u5728\u9700\u8981\u5B58\u50A8\u5E74\u4EFD\u7684\u60C5\u51B5\u4E0B\u4F7F\u7528 YEAR \u7C7B\u578B\u3002"
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
              children: " events ("
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    event_id "
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
              children: "    event_year "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "YEAR"
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
    }), "\n", jsx(_components.p, {
      children: "\u672C\u7AE0\u4ECB\u7ECD\u4E86\u9009\u62E9\u9002\u5F53\u7684\u6574\u578B\u3001\u6D6E\u70B9\u578B\u548C\u65E5\u671F\u65F6\u95F4\u578B\u6570\u636E\u7C7B\u578B\u7684\u6280\u5DE7\u548C\u6700\u4F73\u5B9E\u8DF5\uFF0C\u5E0C\u671B\u53EF\u4EE5\u5E2E\u52A9\u4F60\u5728\u5B9E\u9675\u7684\u6570\u636E\u5E93\u8BBE\u8BA1\u4E2D\u505A\u51FA\u660E\u667A\u7684\u9009\u62E9\u3002"
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

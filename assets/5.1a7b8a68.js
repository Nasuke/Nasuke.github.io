import { jsx, jsxs, Fragment } from "react/jsx-runtime";
const frontmatter = void 0;
const toc = [{
  "id": "21-\u5B89\u88C5\u4E0E\u914D\u7F6Eidea\u6570\u636E\u5E93\u63D2\u4EF6",
  "text": "2.1 \u5B89\u88C5\u4E0E\u914D\u7F6EIdea\u6570\u636E\u5E93\u63D2\u4EF6",
  "depth": 3
}, {
  "id": "211-\u4E0B\u8F7D\u4E0E\u5B89\u88C5\u63D2\u4EF6",
  "text": "2.1.1 \u4E0B\u8F7D\u4E0E\u5B89\u88C5\u63D2\u4EF6",
  "depth": 4
}, {
  "id": "212-\u914D\u7F6E\u6570\u636E\u6E90\u8FDE\u63A5",
  "text": "2.1.2 \u914D\u7F6E\u6570\u636E\u6E90\u8FDE\u63A5",
  "depth": 4
}, {
  "id": "22-\u57FA\u672C\u529F\u80FD\u4ECB\u7ECD",
  "text": "2.2 \u57FA\u672C\u529F\u80FD\u4ECB\u7ECD",
  "depth": 3
}, {
  "id": "221-\u6570\u636E\u5E93\u6D4F\u89C8\u4E0E\u67E5\u8BE2",
  "text": "2.2.1 \u6570\u636E\u5E93\u6D4F\u89C8\u4E0E\u67E5\u8BE2",
  "depth": 4
}, {
  "id": "222-sql\u7F16\u8F91\u4E0E\u6267\u884C",
  "text": "2.2.2 SQL\u7F16\u8F91\u4E0E\u6267\u884C",
  "depth": 4
}, {
  "id": "\u603B\u7ED3",
  "text": "\u603B\u7ED3",
  "depth": 3
}, {
  "id": "31-\u4F18\u5316idea\u6570\u636E\u5E93\u63D2\u4EF6\u6027\u80FD",
  "text": "3.1 \u4F18\u5316Idea\u6570\u636E\u5E93\u63D2\u4EF6\u6027\u80FD",
  "depth": 3
}, {
  "id": "311-\u7F13\u5B58\u914D\u7F6E",
  "text": "3.1.1 \u7F13\u5B58\u914D\u7F6E",
  "depth": 4
}, {
  "id": "312-\u67E5\u8BE2\u4F18\u5316",
  "text": "3.1.2 \u67E5\u8BE2\u4F18\u5316",
  "depth": 4
}, {
  "id": "32-\u6570\u636E\u5E93\u8FDE\u63A5\u6C60\u8C03\u6574",
  "text": "3.2 \u6570\u636E\u5E93\u8FDE\u63A5\u6C60\u8C03\u6574",
  "depth": 3
}, {
  "id": "321-\u8FDE\u63A5\u6C60\u53C2\u6570\u8BBE\u7F6E",
  "text": "3.2.1 \u8FDE\u63A5\u6C60\u53C2\u6570\u8BBE\u7F6E",
  "depth": 4
}, {
  "id": "322-\u8FDE\u63A5\u6C60\u5927\u5C0F\u8C03\u6574",
  "text": "3.2.2 \u8FDE\u63A5\u6C60\u5927\u5C0F\u8C03\u6574",
  "depth": 4
}, {
  "id": "33-\u4F18\u5316\u67E5\u8BE2\u901F\u5EA6\u6280\u5DE7",
  "text": "3.3 \u4F18\u5316\u67E5\u8BE2\u901F\u5EA6\u6280\u5DE7",
  "depth": 3
}, {
  "id": "331-\u7D22\u5F15\u7684\u5408\u7406\u5229\u7528",
  "text": "3.3.1 \u7D22\u5F15\u7684\u5408\u7406\u5229\u7528",
  "depth": 4
}, {
  "id": "332-sql\u8BED\u53E5\u4F18\u5316\u5EFA\u8BAE",
  "text": "3.3.2 SQL\u8BED\u53E5\u4F18\u5316\u5EFA\u8BAE",
  "depth": 4
}, {
  "id": "41-\u6570\u636E\u5E93\u8FDE\u63A5\u5B89\u5168\u8BBE\u7F6E",
  "text": "4.1 \u6570\u636E\u5E93\u8FDE\u63A5\u5B89\u5168\u8BBE\u7F6E",
  "depth": 3
}, {
  "id": "411-\u52A0\u5BC6\u4F20\u8F93\u914D\u7F6E",
  "text": "4.1.1 \u52A0\u5BC6\u4F20\u8F93\u914D\u7F6E",
  "depth": 4
}, {
  "id": "412-\u7528\u6237\u6743\u9650\u7BA1\u7406",
  "text": "4.1.2 \u7528\u6237\u6743\u9650\u7BA1\u7406",
  "depth": 4
}, {
  "id": "42-\u9632\u6B62sql\u6CE8\u5165\u653B\u51FB",
  "text": "4.2 \u9632\u6B62SQL\u6CE8\u5165\u653B\u51FB",
  "depth": 3
}, {
  "id": "421-\u9884\u7F16\u8BD1\u8BED\u53E5\u7684\u4F7F\u7528",
  "text": "4.2.1 \u9884\u7F16\u8BD1\u8BED\u53E5\u7684\u4F7F\u7528",
  "depth": 4
}, {
  "id": "422-\u8F93\u5165\u53C2\u6570\u6821\u9A8C",
  "text": "4.2.2 \u8F93\u5165\u53C2\u6570\u6821\u9A8C",
  "depth": 4
}, {
  "id": "51-\u5E38\u89C1\u8FDE\u63A5\u95EE\u9898\u6392\u67E5",
  "text": "5.1 \u5E38\u89C1\u8FDE\u63A5\u95EE\u9898\u6392\u67E5",
  "depth": 3
}, {
  "id": "511-\u8FDE\u63A5\u8D85\u65F6\u5904\u7406",
  "text": "5.1.1 \u8FDE\u63A5\u8D85\u65F6\u5904\u7406",
  "depth": 4
}, {
  "id": "512-\u8FDE\u63A5\u4E22\u5931\u5E94\u5BF9",
  "text": "5.1.2 \u8FDE\u63A5\u4E22\u5931\u5E94\u5BF9",
  "depth": 4
}, {
  "id": "52-\u6027\u80FD\u76D1\u63A7\u5DE5\u5177\u63A8\u8350",
  "text": "5.2 \u6027\u80FD\u76D1\u63A7\u5DE5\u5177\u63A8\u8350",
  "depth": 3
}, {
  "id": "521-\u6162\u67E5\u8BE2\u65E5\u5FD7\u7684\u5206\u6790",
  "text": "5.2.1 \u6162\u67E5\u8BE2\u65E5\u5FD7\u7684\u5206\u6790",
  "depth": 4
}, {
  "id": "522-\u6027\u80FD\u6307\u6807\u76D1\u63A7\u5DE5\u5177\u7684\u9009\u7528",
  "text": "5.2.2 \u6027\u80FD\u6307\u6807\u76D1\u63A7\u5DE5\u5177\u7684\u9009\u7528",
  "depth": 4
}, {
  "id": "\u603B\u7ED3-1",
  "text": "\u603B\u7ED3",
  "depth": 3
}];
const title = "5. \u6545\u969C\u6392\u9664\u4E0E\u6027\u80FD\u76D1\u63A7";
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    p: "p",
    h3: "h3",
    h4: "h4",
    ol: "ol",
    li: "li",
    div: "div",
    button: "button",
    span: "span",
    pre: "pre",
    code: "code"
  }, props.components);
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "1-\u5982\u4F55\u4F18\u5316mysql\u8FDE\u63A5\u901F\u5EA6",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#1-\u5982\u4F55\u4F18\u5316mysql\u8FDE\u63A5\u901F\u5EA6",
        children: "#"
      }), "1. \u5982\u4F55\u4F18\u5316MySQL\u8FDE\u63A5\u901F\u5EA6"]
    }), "\n", jsx(_components.p, {
      children: "\u5728MySQL\u6570\u636E\u5E93\u7684\u5DE5\u4F5C\u4E2D\uFF0C\u4F18\u5316\u8FDE\u63A5\u901F\u5EA6\u662F\u81F3\u5173\u91CD\u8981\u7684\u3002\u901A\u8FC7\u4E00\u4E9B\u6280\u5DE7\u548C\u7B56\u7565\uFF0C\u6211\u4EEC\u53EF\u4EE5\u663E\u8457\u63D0\u9AD8MySQL\u6570\u636E\u5E93\u7684\u8FDE\u63A5\u901F\u5EA6\uFF0C\u4ECE\u800C\u63D0\u5347\u6574\u4F53\u6027\u80FD\u548C\u6548\u7387\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u9996\u5148\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u8C03\u6574\u8FDE\u63A5\u6C60\u7684\u5927\u5C0F\u548C\u53C2\u6570\u8BBE\u7F6E\u6765\u4F18\u5316\u8FDE\u63A5\u7684\u7BA1\u7406\u548C\u5229\u7528\u3002\u5176\u6B21\uFF0C\u5408\u7406\u5229\u7528\u6570\u636E\u5E93\u7D22\u5F15\u548C\u4F18\u5316SQL\u8BED\u53E5\uFF0C\u53EF\u4EE5\u51CF\u5C11\u67E5\u8BE2\u65F6\u95F4\uFF0C\u63D0\u9AD8\u8FDE\u63A5\u6548\u7387\u3002\u53E6\u5916\uFF0C\u52A0\u5BC6\u4F20\u8F93\u914D\u7F6E\u548C\u7528\u6237\u6743\u9650\u7BA1\u7406\u4E5F\u662F\u4FDD\u969C\u8FDE\u63A5\u5B89\u5168\u7684\u91CD\u8981\u6B65\u9AA4\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u5728\u672C\u7AE0\u4E2D\uFF0C\u6211\u4EEC\u5C06\u6DF1\u5165\u63A2\u8BA8\u5982\u4F55\u901A\u8FC7\u4F18\u5316MySQL\u8FDE\u63A5\u901F\u5EA6\uFF0C\u6765\u63D0\u5347\u6570\u636E\u5E93\u5DE5\u4F5C\u6548\u7387\u548C\u6027\u80FD\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "2-\u6DF1\u5165\u7406\u89E3idea\u6570\u636E\u5E93\u63D2\u4EF6",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#2-\u6DF1\u5165\u7406\u89E3idea\u6570\u636E\u5E93\u63D2\u4EF6",
        children: "#"
      }), "2. \u6DF1\u5165\u7406\u89E3Idea\u6570\u636E\u5E93\u63D2\u4EF6"]
    }), "\n", jsx(_components.p, {
      children: "Idea\u6570\u636E\u5E93\u63D2\u4EF6\u662F\u4E00\u6B3E\u6781\u5177\u4FBF\u5229\u6027\u548C\u529F\u80FD\u4E30\u5BCC\u7684\u5DE5\u5177\uFF0C\u80FD\u591F\u6781\u5927\u5730\u63D0\u5347\u5F00\u53D1\u8005\u5728\u6570\u636E\u5E93\u64CD\u4F5C\u4E0A\u7684\u6548\u7387\u3002\u901A\u8FC7\u672C\u7AE0\u8282\u7684\u8BE6\u7EC6\u4ECB\u7ECD\u548C\u64CD\u4F5C\u6307\u5357\uFF0C\u4F60\u5C06\u6DF1\u5165\u7406\u89E3Idea\u6570\u636E\u5E93\u63D2\u4EF6\u7684\u5404\u79CD\u529F\u80FD\u548C\u4F18\u52BF\uFF0C\u4ECE\u800C\u66F4\u597D\u5730\u5229\u7528\u8FD9\u4E00\u5DE5\u5177\u63D0\u9AD8\u5DE5\u4F5C\u6548\u7387\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "21-\u5B89\u88C5\u4E0E\u914D\u7F6Eidea\u6570\u636E\u5E93\u63D2\u4EF6",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#21-\u5B89\u88C5\u4E0E\u914D\u7F6Eidea\u6570\u636E\u5E93\u63D2\u4EF6",
        children: "#"
      }), "2.1 \u5B89\u88C5\u4E0E\u914D\u7F6EIdea\u6570\u636E\u5E93\u63D2\u4EF6"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u4F7F\u7528Idea\u6570\u636E\u5E93\u63D2\u4EF6\u4E4B\u524D\uFF0C\u9996\u5148\u9700\u8981\u8FDB\u884C\u5B89\u88C5\u548C\u914D\u7F6E\uFF0C\u63A5\u4E0B\u6765\u5C06\u5206\u4E3A\u4E24\u4E2A\u5C0F\u8282\u4ECB\u7ECD\u5177\u4F53\u7684\u64CD\u4F5C\u6B65\u9AA4\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "211-\u4E0B\u8F7D\u4E0E\u5B89\u88C5\u63D2\u4EF6",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#211-\u4E0B\u8F7D\u4E0E\u5B89\u88C5\u63D2\u4EF6",
        children: "#"
      }), "2.1.1 \u4E0B\u8F7D\u4E0E\u5B89\u88C5\u63D2\u4EF6"]
    }), "\n", jsx(_components.p, {
      children: "\u8981\u5B89\u88C5Idea\u6570\u636E\u5E93\u63D2\u4EF6\uFF0C\u9996\u5148\u9700\u8981\u6253\u5F00\u4F60\u7684IntelliJ IDEA\u96C6\u6210\u5F00\u53D1\u73AF\u5883\u3002\u7136\u540E\u6309\u7167\u4EE5\u4E0B\u6B65\u9AA4\u6267\u884C\uFF1A"
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsx(_components.li, {
        children: "\u5728IDEA\u4E2D\uFF0C\u70B9\u51FB\u83DC\u5355\u680F\u7684\u201CFile\u201D -> \u201CSettings\u201D\u6253\u5F00\u8BBE\u7F6E\u754C\u9762\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u5728\u8BBE\u7F6E\u754C\u9762\u4E2D\uFF0C\u9009\u62E9\u201CPlugins\u201D\u9009\u9879\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u5728\u641C\u7D22\u6846\u4E2D\u641C\u7D22\u201C\u6570\u636E\u5E93\u63D2\u4EF6\u201D\uFF0C\u627E\u5230\u9002\u7528\u4E8E\u4F60\u7684\u6570\u636E\u5E93\u7C7B\u578B\u7684\u63D2\u4EF6\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u70B9\u51FB\u201CInstall\u201D\u8FDB\u884C\u5B89\u88C5\uFF0C\u5B89\u88C5\u5B8C\u6210\u540E\u91CD\u542FIDEA\u3002"
      }), "\n"]
    }), "\n", jsxs(_components.h4, {
      id: "212-\u914D\u7F6E\u6570\u636E\u6E90\u8FDE\u63A5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#212-\u914D\u7F6E\u6570\u636E\u6E90\u8FDE\u63A5",
        children: "#"
      }), "2.1.2 \u914D\u7F6E\u6570\u636E\u6E90\u8FDE\u63A5"]
    }), "\n", jsx(_components.p, {
      children: "\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u63A5\u4E0B\u6765\u9700\u8981\u914D\u7F6E\u6570\u636E\u5E93\u8FDE\u63A5\uFF0C\u64CD\u4F5C\u6B65\u9AA4\u5982\u4E0B\uFF1A"
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsx(_components.li, {
        children: "\u5728IDEA\u7684\u9876\u90E8\u83DC\u5355\u4E2D\u9009\u62E9\u201CView\u201D -> \u201CTool Windows\u201D -> \u201CDatabase\u201D\uFF0C\u6253\u5F00\u6570\u636E\u5E93\u5DE5\u5177\u7A97\u53E3\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u5728\u6570\u636E\u5E93\u5DE5\u5177\u7A97\u53E3\u4E2D\uFF0C\u70B9\u51FB\u5C0F\u52A0\u53F7\u201C+\u201D -> \u201CData Source\u201D -> \u9009\u62E9\u4F60\u7684\u6570\u636E\u5E93\u7C7B\u578B\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u586B\u5199\u6570\u636E\u5E93\u8FDE\u63A5\u4FE1\u606F\uFF0C\u5305\u62EC\u4E3B\u673A\u5730\u5740\u3001\u7AEF\u53E3\u53F7\u3001\u7528\u6237\u540D\u3001\u5BC6\u7801\u7B49\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u70B9\u51FB\u201CTest Connection\u201D\u6D4B\u8BD5\u8FDE\u63A5\u662F\u5426\u6210\u529F\uFF0C\u6210\u529F\u540E\u70B9\u51FB\u201COK\u201D\u4FDD\u5B58\u914D\u7F6E\u3002"
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "22-\u57FA\u672C\u529F\u80FD\u4ECB\u7ECD",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#22-\u57FA\u672C\u529F\u80FD\u4ECB\u7ECD",
        children: "#"
      }), "2.2 \u57FA\u672C\u529F\u80FD\u4ECB\u7ECD"]
    }), "\n", jsx(_components.p, {
      children: "\u914D\u7F6E\u5B8C\u6210\u4E4B\u540E\uFF0C\u8BA9\u6211\u4EEC\u6765\u4E86\u89E3Idea\u6570\u636E\u5E93\u63D2\u4EF6\u7684\u57FA\u672C\u529F\u80FD\uFF0C\u5305\u62EC\u6570\u636E\u5E93\u6D4F\u89C8\u4E0E\u67E5\u8BE2\u4EE5\u53CASQL\u7F16\u8F91\u4E0E\u6267\u884C\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "221-\u6570\u636E\u5E93\u6D4F\u89C8\u4E0E\u67E5\u8BE2",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#221-\u6570\u636E\u5E93\u6D4F\u89C8\u4E0E\u67E5\u8BE2",
        children: "#"
      }), "2.2.1 \u6570\u636E\u5E93\u6D4F\u89C8\u4E0E\u67E5\u8BE2"]
    }), "\n", jsx(_components.p, {
      children: "Idea\u6570\u636E\u5E93\u63D2\u4EF6\u53EF\u4EE5\u8BA9\u4F60\u65B9\u4FBF\u5FEB\u901F\u5730\u6D4F\u89C8\u6570\u636E\u5E93\u4E2D\u7684\u8868\u7ED3\u6784\u3001\u7D22\u5F15\u3001\u89E6\u53D1\u5668\u7B49\u4FE1\u606F\u3002\u5728\u6570\u636E\u5E93\u5DE5\u5177\u7A97\u53E3\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u5C55\u5F00\u6570\u636E\u5E93\uFF0C\u67E5\u770B\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u5E76\u6267\u884CSQL\u67E5\u8BE2\u8BED\u53E5\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "222-sql\u7F16\u8F91\u4E0E\u6267\u884C",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#222-sql\u7F16\u8F91\u4E0E\u6267\u884C",
        children: "#"
      }), "2.2.2 SQL\u7F16\u8F91\u4E0E\u6267\u884C"]
    }), "\n", jsx(_components.p, {
      children: "\u9664\u4E86\u67E5\u8BE2\uFF0CIdea\u6570\u636E\u5E93\u63D2\u4EF6\u8FD8\u652F\u6301SQL\u8BED\u53E5\u7684\u7F16\u8F91\u548C\u6267\u884C\u3002\u4F60\u53EF\u4EE5\u5728IDEA\u4E2D\u7F16\u5199SQL\u8BED\u53E5\uFF0C\u5E76\u901A\u8FC7\u63D2\u4EF6\u76F4\u63A5\u6267\u884C\uFF0C\u67E5\u770B\u6267\u884C\u7ED3\u679C\uFF0C\u4ECE\u800C\u65B9\u4FBF\u5730\u8FDB\u884C\u6570\u636E\u5E93\u64CD\u4F5C\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "\u603B\u7ED3",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u603B\u7ED3",
        children: "#"
      }), "\u603B\u7ED3"]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u672C\u7AE0\u8282\u7684\u8BE6\u7EC6\u4ECB\u7ECD\u548C\u64CD\u4F5C\u6307\u5357\uFF0C\u4F60\u5BF9Idea\u6570\u636E\u5E93\u63D2\u4EF6\u7684\u5B89\u88C5\u3001\u914D\u7F6E\u3001\u57FA\u672C\u529F\u80FD\u6709\u4E86\u66F4\u6DF1\u5165\u7684\u7406\u89E3\u3002\u638C\u63E1\u8FD9\u4E9B\u57FA\u7840\u77E5\u8BC6\u5C06\u6709\u52A9\u4E8E\u4F60\u66F4\u9AD8\u6548\u5730\u8FDB\u884C\u6570\u636E\u5E93\u64CD\u4F5C\u548C\u5F00\u53D1\u5DE5\u4F5C\u3002\u63A5\u4E0B\u6765\uFF0C\u8BA9\u6211\u4EEC\u7EE7\u7EED\u6DF1\u5165\u5230Idea\u6570\u636E\u5E93\u63D2\u4EF6\u7684\u9AD8\u7EA7\u529F\u80FD\u63A2\u7A76\u4E2D\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "3-\u6027\u80FD\u8C03\u4F18\u4E0E\u8BBE\u7F6E",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#3-\u6027\u80FD\u8C03\u4F18\u4E0E\u8BBE\u7F6E",
        children: "#"
      }), "3. \u6027\u80FD\u8C03\u4F18\u4E0E\u8BBE\u7F6E"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u8FD9\u4E00\u7AE0\u8282\u4E2D\uFF0C\u6211\u4EEC\u5C06\u6DF1\u5165\u63A2\u8BA8\u5982\u4F55\u8FDB\u884C\u6027\u80FD\u8C03\u4F18\u4E0E\u8BBE\u7F6E\uFF0C\u4EE5\u4F18\u5316\u6570\u636E\u5E93\u63D2\u4EF6\u7684\u6027\u80FD\uFF0C\u63D0\u5347\u64CD\u4F5C\u6548\u7387\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "31-\u4F18\u5316idea\u6570\u636E\u5E93\u63D2\u4EF6\u6027\u80FD",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#31-\u4F18\u5316idea\u6570\u636E\u5E93\u63D2\u4EF6\u6027\u80FD",
        children: "#"
      }), "3.1 \u4F18\u5316Idea\u6570\u636E\u5E93\u63D2\u4EF6\u6027\u80FD"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u8FD9\u4E00\u90E8\u5206\uFF0C\u6211\u4EEC\u5C06\u91CD\u70B9\u5173\u6CE8\u5982\u4F55\u4F18\u5316Idea\u6570\u636E\u5E93\u63D2\u4EF6\u7684\u6027\u80FD\uFF0C\u8BA9\u5176\u5728\u5B9E\u9645\u5E94\u7528\u4E2D\u80FD\u591F\u66F4\u52A0\u9AD8\u6548\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "311-\u7F13\u5B58\u914D\u7F6E",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#311-\u7F13\u5B58\u914D\u7F6E",
        children: "#"
      }), "3.1.1 \u7F13\u5B58\u914D\u7F6E"]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u5408\u7406\u914D\u7F6E\u7F13\u5B58\uFF0C\u53EF\u4EE5\u663E\u8457\u63D0\u5347\u6570\u636E\u5E93\u63D2\u4EF6\u7684\u6027\u80FD\u3002\u7F13\u5B58\u53EF\u4EE5\u51CF\u5C11\u5BF9\u6570\u636E\u5E93\u7684\u9891\u7E41\u8BBF\u95EE\uFF0C\u63D0\u9AD8\u6570\u636E\u7684\u8BFB\u53D6\u901F\u5EA6\u3002"
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
              children: "// \u793A\u4F8B\u4EE3\u7801\uFF1A\u914D\u7F6E\u7F13\u5B58"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "CacheConfiguration"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "cacheConfig"
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
              children: "CacheConfiguration"
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
                color: "#D8DEE9"
              },
              children: "cacheConfig"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "setMemoryStoreEvictionPolicy"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "MemoryStoreEvictionPolicy"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "LRU"
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
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "cacheConfig"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "setMaxEntriesLocalHeap"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "1000"
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
      children: "\u8BBE\u7F6E\u7F13\u5B58\u7684\u8FC7\u671F\u65F6\u95F4\u3001\u5927\u5C0F\u4EE5\u53CA\u6DD8\u6C70\u7B56\u7565\u90FD\u662F\u4F18\u5316\u6027\u80FD\u7684\u5173\u952E\u56E0\u7D20\u3002\u5408\u7406\u914D\u7F6E\u7F13\u5B58\u53EF\u4EE5\u6709\u6548\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u6570\u636E\u5E93\u67E5\u8BE2\uFF0C\u63D0\u5347\u7CFB\u7EDF\u54CD\u5E94\u901F\u5EA6\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "312-\u67E5\u8BE2\u4F18\u5316",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#312-\u67E5\u8BE2\u4F18\u5316",
        children: "#"
      }), "3.1.2 \u67E5\u8BE2\u4F18\u5316"]
    }), "\n", jsx(_components.p, {
      children: "\u4F18\u5316\u6570\u636E\u5E93\u67E5\u8BE2\u53EF\u4EE5\u663E\u8457\u63D0\u5347\u7CFB\u7EDF\u6027\u80FD\u3002\u901A\u8FC7\u5EFA\u7ACB\u5408\u9002\u7684\u7D22\u5F15\u3001\u4F18\u5316SQL\u8BED\u53E5\u7B49\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u51CF\u5C11\u6570\u636E\u5E93\u7684\u67E5\u8BE2\u65F6\u95F4\uFF0C\u4ECE\u800C\u63D0\u9AD8\u7CFB\u7EDF\u7684\u54CD\u5E94\u901F\u5EA6\u3002"
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
              children: "// \u793A\u4F8B\u4EE3\u7801\uFF1A\u4F18\u5316SQL\u67E5\u8BE2"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "SELECT "
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
                color: "#8FBCBB"
              },
              children: "FROM"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " table_name "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "WHERE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "column_name"
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
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "value"
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
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// \u786E\u4FDD\u9488\u5BF9\u67E5\u8BE2\u6761\u4EF6\u7684\u5B57\u6BB5\u5EFA\u7ACB\u4E86\u7D22\u5F15\uFF0C\u907F\u514D\u5168\u8868\u626B\u63CF\uFF0C\u63D0\u5347\u67E5\u8BE2\u6548\u7387"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u5408\u7406\u4F18\u5316\u67E5\u8BE2\u8BED\u53E5\uFF0C\u907F\u514D\u4F7F\u7528\u5168\u8868\u626B\u63CF\u3001\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u5B50\u67E5\u8BE2\uFF0C\u90FD\u662F\u63D0\u5347\u6570\u636E\u5E93\u6027\u80FD\u7684\u6709\u6548\u624B\u6BB5\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "32-\u6570\u636E\u5E93\u8FDE\u63A5\u6C60\u8C03\u6574",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#32-\u6570\u636E\u5E93\u8FDE\u63A5\u6C60\u8C03\u6574",
        children: "#"
      }), "3.2 \u6570\u636E\u5E93\u8FDE\u63A5\u6C60\u8C03\u6574"]
    }), "\n", jsx(_components.p, {
      children: "\u6570\u636E\u5E93\u8FDE\u63A5\u6C60\u7684\u5927\u5C0F\u548C\u53C2\u6570\u8BBE\u7F6E\u5BF9\u7CFB\u7EDF\u6027\u80FD\u5F71\u54CD\u5DE8\u5927\uFF0C\u5408\u7406\u8C03\u6574\u8FDE\u63A5\u6C60\u5927\u5C0F\u548C\u53C2\u6570\u53EF\u4EE5\u6709\u6548\u63D0\u9AD8\u7CFB\u7EDF\u7684\u5E76\u53D1\u5904\u7406\u80FD\u529B\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "321-\u8FDE\u63A5\u6C60\u53C2\u6570\u8BBE\u7F6E",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#321-\u8FDE\u63A5\u6C60\u53C2\u6570\u8BBE\u7F6E",
        children: "#"
      }), "3.2.1 \u8FDE\u63A5\u6C60\u53C2\u6570\u8BBE\u7F6E"]
    }), "\n", jsx(_components.p, {
      children: "\u8C03\u6574\u8FDE\u63A5\u6C60\u53C2\u6570\uFF0C\u5305\u62EC\u6700\u5927\u8FDE\u63A5\u6570\u3001\u6700\u5C0F\u7A7A\u95F2\u8FDE\u63A5\u6570\u3001\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\u7B49\uFF0C\u53EF\u4EE5\u6839\u636E\u7CFB\u7EDF\u7684\u5B9E\u9645\u60C5\u51B5\u8FDB\u884C\u5408\u7406\u914D\u7F6E\uFF0C\u4EE5\u8FBE\u5230\u6700\u4F73\u6027\u80FD\u8868\u73B0\u3002"
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
              children: "// \u793A\u4F8B\u4EE3\u7801\uFF1A\u8BBE\u7F6E\u8FDE\u63A5\u6C60\u53C2\u6570"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "dataSource"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "setMaxTotal"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "100"
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
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "dataSource"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "setMaxIdle"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "30"
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
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "dataSource"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "setMaxWaitMillis"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "10000"
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
      children: "\u5408\u7406\u8BBE\u7F6E\u8FDE\u63A5\u6C60\u53C2\u6570\u53EF\u4EE5\u786E\u4FDD\u7CFB\u7EDF\u80FD\u591F\u5728\u9AD8\u5E76\u53D1\u60C5\u51B5\u4E0B\u4FDD\u6301\u7A33\u5B9A\u7684\u6027\u80FD\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "322-\u8FDE\u63A5\u6C60\u5927\u5C0F\u8C03\u6574",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#322-\u8FDE\u63A5\u6C60\u5927\u5C0F\u8C03\u6574",
        children: "#"
      }), "3.2.2 \u8FDE\u63A5\u6C60\u5927\u5C0F\u8C03\u6574"]
    }), "\n", jsx(_components.p, {
      children: "\u6839\u636E\u7CFB\u7EDF\u7684\u5E76\u53D1\u8BBF\u95EE\u91CF\u548C\u8FDE\u63A5\u9700\u6C42\uFF0C\u52A8\u6001\u8C03\u6574\u8FDE\u63A5\u6C60\u7684\u5927\u5C0F\u662F\u4F18\u5316\u6027\u80FD\u7684\u91CD\u8981\u624B\u6BB5\u3002\u907F\u514D\u8FDE\u63A5\u6C60\u8FC7\u5927\u5BFC\u81F4\u8D44\u6E90\u6D6A\u8D39\uFF0C\u4E5F\u907F\u514D\u8FDE\u63A5\u6C60\u8FC7\u5C0F\u5BFC\u81F4\u7CFB\u7EDF\u65E0\u6CD5\u627F\u53D7\u9AD8\u5E76\u53D1\u8BBF\u95EE\u3002"
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
              children: "// \u793A\u4F8B\u4EE3\u7801\uFF1A\u52A8\u6001\u8C03\u6574\u8FDE\u63A5\u6C60\u5927\u5C0F"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "if"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "currentConnections "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " maxConnections"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
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
              children: "// \u6DFB\u52A0\u65B0\u8FDE\u63A5\u5230\u8FDE\u63A5\u6C60"
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
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "else"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "if"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "currentConnections "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " minConnections"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
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
              children: "// \u5173\u95ED\u591A\u4F59\u7684\u7A7A\u95F2\u8FDE\u63A5"
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
      children: "\u52A8\u6001\u8C03\u6574\u8FDE\u63A5\u6C60\u5927\u5C0F\u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u5408\u7406\u5206\u914D\u7CFB\u7EDF\u8D44\u6E90\uFF0C\u63D0\u5347\u7CFB\u7EDF\u7684\u6027\u80FD\u548C\u7A33\u5B9A\u6027\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "33-\u4F18\u5316\u67E5\u8BE2\u901F\u5EA6\u6280\u5DE7",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#33-\u4F18\u5316\u67E5\u8BE2\u901F\u5EA6\u6280\u5DE7",
        children: "#"
      }), "3.3 \u4F18\u5316\u67E5\u8BE2\u901F\u5EA6\u6280\u5DE7"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u8FD9\u4E00\u8282\u4E2D\uFF0C\u6211\u4EEC\u5C06\u63A2\u8BA8\u4E00\u4E9B\u4F18\u5316\u67E5\u8BE2\u901F\u5EA6\u7684\u6280\u5DE7\uFF0C\u5E2E\u52A9\u60A8\u66F4\u597D\u5730\u5229\u7528\u6570\u636E\u5E93\u63D2\u4EF6\u7684\u529F\u80FD\uFF0C\u63D0\u9AD8\u67E5\u8BE2\u6548\u7387\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "331-\u7D22\u5F15\u7684\u5408\u7406\u5229\u7528",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#331-\u7D22\u5F15\u7684\u5408\u7406\u5229\u7528",
        children: "#"
      }), "3.3.1 \u7D22\u5F15\u7684\u5408\u7406\u5229\u7528"]
    }), "\n", jsx(_components.p, {
      children: "\u5EFA\u7ACB\u7D22\u5F15\u53EF\u4EE5\u663E\u8457\u63D0\u9AD8\u67E5\u8BE2\u901F\u5EA6\uFF0C\u52A0\u5FEB\u6570\u636E\u68C0\u7D22\u7684\u6548\u7387\u3002\u5728\u6570\u636E\u5E93\u8868\u7684\u5173\u952E\u5B57\u6BB5\u4E0A\u5EFA\u7ACB\u7D22\u5F15\uFF0C\u53EF\u4EE5\u51CF\u5C11\u5168\u8868\u626B\u63CF\u7684\u65F6\u95F4\uFF0C\u5FEB\u901F\u5B9A\u4F4D\u5230\u7B26\u5408\u6761\u4EF6\u7684\u6570\u636E\u3002"
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
              children: "-- \u793A\u4F8B\uFF1A\u521B\u5EFA\u7D22\u5F15"
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
      children: "\u5408\u7406\u5730\u4E3A\u91CD\u8981\u7684\u67E5\u8BE2\u5B57\u6BB5\u5EFA\u7ACB\u7D22\u5F15\uFF0C\u53EF\u4EE5\u6781\u5927\u5730\u63D0\u5347\u67E5\u8BE2\u6548\u7387\uFF0C\u51CF\u5C11\u67E5\u8BE2\u65F6\u95F4\uFF0C\u4F18\u5316\u7CFB\u7EDF\u7684\u6027\u80FD\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "332-sql\u8BED\u53E5\u4F18\u5316\u5EFA\u8BAE",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#332-sql\u8BED\u53E5\u4F18\u5316\u5EFA\u8BAE",
        children: "#"
      }), "3.3.2 SQL\u8BED\u53E5\u4F18\u5316\u5EFA\u8BAE"]
    }), "\n", jsx(_components.p, {
      children: "\u4F18\u5316SQL\u8BED\u53E5\u662F\u63D0\u5347\u6570\u636E\u5E93\u6027\u80FD\u7684\u5173\u952E\u4E00\u73AF\u3002\u901A\u8FC7\u907F\u514D\u4F7F\u7528\u901A\u914D\u7B26\u67E5\u8BE2\u3001\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u5B57\u6BB5\u67E5\u8BE2\u3001\u5408\u7406\u4F7F\u7528\u67E5\u8BE2\u6761\u4EF6\u7B49\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u63D0\u5347\u7CFB\u7EDF\u7684\u67E5\u8BE2\u901F\u5EA6\u3002"
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
              children: "-- \u793A\u4F8B\uFF1A\u4F18\u5316SQL\u67E5\u8BE2"
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
              children: " column_name "
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
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "value"
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
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "-- \u4EC5\u67E5\u8BE2\u5FC5\u8981\u5B57\u6BB5\uFF0C\u907F\u514D\u4F7F\u7528 SELECT *\uFF0C\u51CF\u5C11\u6570\u636E\u4F20\u8F93\u5F00\u9500"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u4F18\u5316SQL\u8BED\u53E5\u7684\u540C\u65F6\uFF0C\u8FD8\u53EF\u4EE5\u8003\u8651\u4F7F\u7528\u5B58\u50A8\u8FC7\u7A0B\u3001\u89E6\u53D1\u5668\u7B49\u6570\u636E\u5E93\u7279\u6027\uFF0C\u63D0\u5347\u7CFB\u7EDF\u7684\u6574\u4F53\u6027\u80FD\u548C\u54CD\u5E94\u901F\u5EA6\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u672C\u7AE0\u8282\u7684\u5185\u5BB9\uFF0C\u5E0C\u671B\u60A8\u80FD\u66F4\u597D\u5730\u7406\u89E3\u6570\u636E\u5E93\u63D2\u4EF6\u7684\u6027\u80FD\u8C03\u4F18\u4E0E\u8BBE\u7F6E\uFF0C\u8FDB\u800C\u4F18\u5316\u7CFB\u7EDF\u7684\u8FD0\u884C\u6548\u7387\uFF0C\u63D0\u5347\u7528\u6237\u4F53\u9A8C\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "4-\u5B89\u5168\u6027\u8BBE\u7F6E\u4E0E\u9632\u62A4",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#4-\u5B89\u5168\u6027\u8BBE\u7F6E\u4E0E\u9632\u62A4",
        children: "#"
      }), "4. \u5B89\u5168\u6027\u8BBE\u7F6E\u4E0E\u9632\u62A4"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u6570\u636E\u5E93\u7BA1\u7406\u4E2D\uFF0C\u786E\u4FDD\u6570\u636E\u5B89\u5168\u662F\u81F3\u5173\u91CD\u8981\u7684\u3002\u901A\u8FC7\u5408\u7406\u7684\u5B89\u5168\u6027\u8BBE\u7F6E\u548C\u9632\u62A4\u63AA\u65BD\uFF0C\u53EF\u4EE5\u6709\u6548\u5730\u4FDD\u62A4\u6570\u636E\u5E93\u514D\u53D7\u6F5C\u5728\u7684\u98CE\u9669\u548C\u653B\u51FB\u3002\u672C\u7AE0\u5C06\u91CD\u70B9\u4ECB\u7ECD\u6570\u636E\u5E93\u8FDE\u63A5\u7684\u5B89\u5168\u8BBE\u7F6E\u4EE5\u53CA\u5982\u4F55\u9884\u9632SQL\u6CE8\u5165\u653B\u51FB\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "41-\u6570\u636E\u5E93\u8FDE\u63A5\u5B89\u5168\u8BBE\u7F6E",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#41-\u6570\u636E\u5E93\u8FDE\u63A5\u5B89\u5168\u8BBE\u7F6E",
        children: "#"
      }), "4.1 \u6570\u636E\u5E93\u8FDE\u63A5\u5B89\u5168\u8BBE\u7F6E"]
    }), "\n", jsx(_components.p, {
      children: "\u6570\u636E\u5E93\u8FDE\u63A5\u5728\u6570\u636E\u4F20\u8F93\u7684\u8FC7\u7A0B\u4E2D\u5B58\u5728\u4E00\u5B9A\u7684\u5B89\u5168\u98CE\u9669\uFF0C\u7279\u522B\u662F\u5728\u8DE8\u7F51\u7EDC\u4F20\u8F93\u65F6\u3002\u4E3A\u4E86\u4FDD\u8BC1\u6570\u636E\u7684\u673A\u5BC6\u6027\u548C\u5B8C\u6574\u6027\uFF0C\u9700\u8981\u8FDB\u884C\u76F8\u5E94\u7684\u5B89\u5168\u8BBE\u7F6E\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "411-\u52A0\u5BC6\u4F20\u8F93\u914D\u7F6E",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#411-\u52A0\u5BC6\u4F20\u8F93\u914D\u7F6E",
        children: "#"
      }), "4.1.1 \u52A0\u5BC6\u4F20\u8F93\u914D\u7F6E"]
    }), "\n", jsx(_components.p, {
      children: "\u52A0\u5BC6\u4F20\u8F93\u53EF\u4EE5\u6709\u6548\u5730\u4FDD\u62A4\u6570\u636E\u5728\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u4E0D\u88AB\u7A83\u53D6\u6216\u7BE1\u6539\u3002\u5728MySQL\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6ESSL/TLS\u6765\u5B9E\u73B0\u5BF9\u6570\u636E\u5E93\u8FDE\u63A5\u7684\u52A0\u5BC6\u4F20\u8F93\u3002"
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
              children: "-- \u914D\u7F6EMySQL\u670D\u52A1\u7AEF\u5F00\u542FSSL"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "ssl-"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "ca"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "=ssl-"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "ca.pem"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "ssl-cert=ssl-cert"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ".pem"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "ssl-key=ssl-key"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ".pem"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u4EE5\u4E0A\u914D\u7F6E\uFF0CMySQL\u670D\u52A1\u7AEF\u5C06\u4F7F\u7528SSL\u8BC1\u4E66\u5BF9\u8FDE\u63A5\u8FDB\u884C\u52A0\u5BC6\uFF0C\u5BA2\u6237\u7AEF\u8FDE\u63A5\u5230\u6570\u636E\u5E93\u65F6\u4E5F\u9700\u8981\u76F8\u5E94\u5730\u914D\u7F6ESSL\u9009\u9879\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "412-\u7528\u6237\u6743\u9650\u7BA1\u7406",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#412-\u7528\u6237\u6743\u9650\u7BA1\u7406",
        children: "#"
      }), "4.1.2 \u7528\u6237\u6743\u9650\u7BA1\u7406"]
    }), "\n", jsx(_components.p, {
      children: "\u7528\u6237\u6743\u9650\u7BA1\u7406\u662F\u6570\u636E\u5E93\u5B89\u5168\u7684\u57FA\u7840\uFF0C\u5408\u7406\u7684\u6743\u9650\u8BBE\u7F6E\u53EF\u4EE5\u9632\u6B62\u672A\u6388\u6743\u7684\u8BBF\u95EE\u548C\u64CD\u4F5C\u3002\u5728MySQL\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7GRANT\u548CREVOKE\u8BED\u53E5\u6765\u7BA1\u7406\u7528\u6237\u6743\u9650\u3002"
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
              children: "-- \u6388\u4E88\u7528\u6237SELECT\u6743\u9650"
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
              children: "user"
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
              children: "host"
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
      children: "\u901A\u8FC7\u4EE5\u4E0A\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u4E3A\u7279\u5B9A\u7528\u6237\u8D4B\u4E88\u7279\u5B9A\u7684\u6743\u9650\uFF0C\u4ECE\u800C\u9650\u5236\u5176\u5BF9\u6570\u636E\u5E93\u7684\u64CD\u4F5C\u8303\u56F4\uFF0C\u4FDD\u8BC1\u6570\u636E\u7684\u5B89\u5168\u6027\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "42-\u9632\u6B62sql\u6CE8\u5165\u653B\u51FB",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#42-\u9632\u6B62sql\u6CE8\u5165\u653B\u51FB",
        children: "#"
      }), "4.2 \u9632\u6B62SQL\u6CE8\u5165\u653B\u51FB"]
    }), "\n", jsx(_components.p, {
      children: "SQL\u6CE8\u5165\u653B\u51FB\u662F\u5E38\u89C1\u7684\u6570\u636E\u5E93\u653B\u51FB\u624B\u6BB5\uFF0C\u653B\u51FB\u8005\u5229\u7528\u7528\u6237\u8F93\u5165\u7684\u6570\u636E\u6784\u9020\u6076\u610FSQL\u8BED\u53E5\uFF0C\u4ECE\u800C\u5B9E\u73B0\u5BF9\u6570\u636E\u5E93\u7684\u975E\u6388\u6743\u8BBF\u95EE\u3002\u9884\u9632SQL\u6CE8\u5165\u653B\u51FB\u662F\u6570\u636E\u5E93\u5B89\u5168\u7684\u91CD\u8981\u4E00\u73AF\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "421-\u9884\u7F16\u8BD1\u8BED\u53E5\u7684\u4F7F\u7528",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#421-\u9884\u7F16\u8BD1\u8BED\u53E5\u7684\u4F7F\u7528",
        children: "#"
      }), "4.2.1 \u9884\u7F16\u8BD1\u8BED\u53E5\u7684\u4F7F\u7528"]
    }), "\n", jsx(_components.p, {
      children: "\u9884\u7F16\u8BD1\u8BED\u53E5\u662F\u9632\u6B62SQL\u6CE8\u5165\u653B\u51FB\u7684\u6709\u6548\u624B\u6BB5\u4E4B\u4E00\uFF0C\u901A\u8FC7\u4F7F\u7528\u53C2\u6570\u5316\u67E5\u8BE2\u53EF\u4EE5\u9632\u6B62\u6076\u610FSQL\u7684\u6CE8\u5165\u3002"
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
              children: "// \u4F7F\u7528PreparedStatement\u9884\u7F16\u8BD1SQL\u8BED\u53E5"
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
              children: "sql"
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
              children: "SELECT * FROM users WHERE username = ?"
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
              children: "PreparedStatement"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "statement"
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
              children: "prepareStatement"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "sql"
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
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "statement"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "setString"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "1"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " userInput"
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
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "ResultSet"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "result"
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
              children: "statement"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "executeQuery"
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
      children: "\u901A\u8FC7\u9884\u7F16\u8BD1\u7684\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u5C06\u7528\u6237\u8F93\u5165\u7684\u53C2\u6570\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165SQL\u8BED\u53E5\uFF0C\u800C\u975E\u76F4\u63A5\u62FC\u63A5SQL\u8BED\u53E5\uFF0C\u6709\u6548\u5730\u9632\u6B62SQL\u6CE8\u5165\u653B\u51FB\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "422-\u8F93\u5165\u53C2\u6570\u6821\u9A8C",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#422-\u8F93\u5165\u53C2\u6570\u6821\u9A8C",
        children: "#"
      }), "4.2.2 \u8F93\u5165\u53C2\u6570\u6821\u9A8C"]
    }), "\n", jsx(_components.p, {
      children: "\u9664\u4E86\u9884\u7F16\u8BD1\u8BED\u53E5\u5916\uFF0C\u5BF9\u7528\u6237\u8F93\u5165\u7684\u53C2\u6570\u8FDB\u884C\u6821\u9A8C\u4E5F\u662F\u9884\u9632SQL\u6CE8\u5165\u653B\u51FB\u7684\u91CD\u8981\u624B\u6BB5\u3002\u901A\u8FC7\u5BF9\u7528\u6237\u8F93\u5165\u7684\u6570\u636E\u8FDB\u884C\u8FC7\u6EE4\u548C\u9A8C\u8BC1\uFF0C\u53EF\u4EE5\u6709\u6548\u5730\u51CF\u5C11\u5B89\u5168\u98CE\u9669\u3002"
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
              children: "// \u5BF9\u7528\u6237\u8F93\u5165\u8FDB\u884C\u6821\u9A8C\uFF0C\u8FC7\u6EE4\u975E\u6CD5\u5B57\u7B26"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "if"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "input"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "contains"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: ";"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "||"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "input"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "contains"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "--"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "))"
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
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "throw"
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
              children: "InvalidInputException"
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
      children: "\u5728\u5E94\u7528\u7A0B\u5E8F\u4E2D\u5BF9\u7528\u6237\u8F93\u5165\u6570\u636E\u8FDB\u884C\u4E25\u683C\u6821\u9A8C\uFF0C\u8FC7\u6EE4\u6389\u6F5C\u5728\u7684\u6076\u610F\u5B57\u7B26\uFF0C\u4ECE\u800C\u964D\u4F4ESQL\u6CE8\u5165\u653B\u51FB\u7684\u98CE\u9669\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u672C\u7AE0\u4ECB\u7ECD\u7684\u6570\u636E\u5E93\u8FDE\u63A5\u5B89\u5168\u8BBE\u7F6E\u548C\u9632\u6B62SQL\u6CE8\u5165\u653B\u51FB\u7684\u63AA\u65BD\uFF0C\u53EF\u4EE5\u6709\u6548\u5730\u63D0\u5347\u6570\u636E\u5E93\u7684\u5B89\u5168\u6027\uFF0C\u4FDD\u62A4\u6570\u636E\u514D\u53D7\u4E0D\u6CD5\u4FB5\u5BB3\u3002\u5728\u6570\u636E\u5E93\u7BA1\u7406\u8FC7\u7A0B\u4E2D\uFF0C\u5B89\u5168\u59CB\u7EC8\u662F\u9996\u8981\u8003\u8651\u7684\u56E0\u7D20\u4E4B\u4E00\uFF0C\u53EA\u6709\u786E\u4FDD\u6570\u636E\u7684\u5B89\u5168\u6027\uFF0C\u624D\u80FD\u66F4\u597D\u5730\u53D1\u6325\u6570\u636E\u5E93\u7684\u4F5C\u7528\uFF0C\u4E3A\u4E1A\u52A1\u7684\u987A\u5229\u8FD0\u884C\u63D0\u4F9B\u7A33\u5B9A\u7684\u6570\u636E\u652F\u6301\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "5-\u6545\u969C\u6392\u9664\u4E0E\u6027\u80FD\u76D1\u63A7",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#5-\u6545\u969C\u6392\u9664\u4E0E\u6027\u80FD\u76D1\u63A7",
        children: "#"
      }), "5. \u6545\u969C\u6392\u9664\u4E0E\u6027\u80FD\u76D1\u63A7"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u5B9E\u9645\u4F7F\u7528\u6570\u636E\u5E93\u63D2\u4EF6\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u7ECF\u5E38\u4F1A\u9047\u5230\u5404\u79CD\u6545\u969C\u548C\u6027\u80FD\u95EE\u9898\uFF0C\u672C\u7AE0\u5C06\u4ECB\u7ECD\u5982\u4F55\u6392\u9664\u8FD9\u4E9B\u6545\u969C\uFF0C\u5E76\u63A8\u8350\u4E00\u4E9B\u6027\u80FD\u76D1\u63A7\u5DE5\u5177\uFF0C\u5E2E\u52A9\u4F60\u66F4\u597D\u5730\u7BA1\u7406\u6570\u636E\u5E93\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "51-\u5E38\u89C1\u8FDE\u63A5\u95EE\u9898\u6392\u67E5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#51-\u5E38\u89C1\u8FDE\u63A5\u95EE\u9898\u6392\u67E5",
        children: "#"
      }), "5.1 \u5E38\u89C1\u8FDE\u63A5\u95EE\u9898\u6392\u67E5"]
    }), "\n", jsx(_components.p, {
      children: "\u5F53\u4F7F\u7528\u6570\u636E\u5E93\u63D2\u4EF6\u65F6\uFF0C\u6709\u65F6\u4F1A\u9047\u5230\u8FDE\u63A5\u95EE\u9898\uFF0C\u4F8B\u5982\u8FDE\u63A5\u8D85\u65F6\u6216\u8FDE\u63A5\u4E22\u5931\u3002\u4E0B\u9762\u5C06\u4ECB\u7ECD\u5982\u4F55\u6392\u67E5\u548C\u89E3\u51B3\u8FD9\u4E9B\u5E38\u89C1\u8FDE\u63A5\u95EE\u9898\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "511-\u8FDE\u63A5\u8D85\u65F6\u5904\u7406",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#511-\u8FDE\u63A5\u8D85\u65F6\u5904\u7406",
        children: "#"
      }), "5.1.1 \u8FDE\u63A5\u8D85\u65F6\u5904\u7406"]
    }), "\n", jsx(_components.p, {
      children: "\u8FDE\u63A5\u8D85\u65F6\u662F\u6307\u8FDE\u63A5\u6570\u636E\u5E93\u65F6\u82B1\u8D39\u7684\u65F6\u95F4\u8D85\u8FC7\u4E86\u9884\u8BBE\u7684\u65F6\u95F4\u9608\u503C\uFF0C\u5BFC\u81F4\u8FDE\u63A5\u5931\u8D25\u3002\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u7684\u65B9\u6CD5\u901A\u5E38\u662F\u8C03\u6574\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u793A\u4F8B\u4EE3\u7801\uFF0C\u6F14\u793A\u5982\u4F55\u901A\u8FC7\u8BBE\u7F6E\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\u6765\u89E3\u51B3\u8FDE\u63A5\u8D85\u65F6\u95EE\u9898\uFF1A"
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
              children: "// \u8BBE\u7F6E\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\u4E3A10\u79D2"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "dataSource"
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
              children: "10000"
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
    }), "\n", jsxs(_components.h4, {
      id: "512-\u8FDE\u63A5\u4E22\u5931\u5E94\u5BF9",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#512-\u8FDE\u63A5\u4E22\u5931\u5E94\u5BF9",
        children: "#"
      }), "5.1.2 \u8FDE\u63A5\u4E22\u5931\u5E94\u5BF9"]
    }), "\n", jsx(_components.p, {
      children: "\u8FDE\u63A5\u4E22\u5931\u662F\u6307\u5DF2\u7ECF\u5EFA\u7ACB\u7684\u8FDE\u63A5\u7A81\u7136\u4E2D\u65AD\uFF0C\u5BFC\u81F4\u6570\u636E\u5E93\u64CD\u4F5C\u5931\u8D25\u3002\u901A\u5E38\u53EF\u4EE5\u901A\u8FC7\u91CD\u65B0\u5EFA\u7ACB\u8FDE\u63A5\u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u793A\u4F8B\u4EE3\u7801\uFF0C\u6F14\u793A\u5982\u4F55\u5728\u8FDE\u63A5\u4E22\u5931\u65F6\u91CD\u65B0\u5EFA\u7ACB\u8FDE\u63A5\uFF1A"
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
              children: "// \u68C0\u6D4B\u8FDE\u63A5\u72B6\u6001\uFF0C\u82E5\u8FDE\u63A5\u5DF2\u7ECF\u5173\u95ED\uFF0C\u5219\u91CD\u65B0\u5EFA\u7ACB\u8FDE\u63A5"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "if"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "!"
            }), jsx(_components.span, {
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
              children: "isValid"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "5"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")){"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    connection "
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
              children: "DriverManager"
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
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "url"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " username"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " password"
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
    }), "\n", jsxs(_components.h3, {
      id: "52-\u6027\u80FD\u76D1\u63A7\u5DE5\u5177\u63A8\u8350",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#52-\u6027\u80FD\u76D1\u63A7\u5DE5\u5177\u63A8\u8350",
        children: "#"
      }), "5.2 \u6027\u80FD\u76D1\u63A7\u5DE5\u5177\u63A8\u8350"]
    }), "\n", jsx(_components.p, {
      children: "\u9664\u4E86\u89E3\u51B3\u6545\u969C\uFF0C\u5BF9\u6570\u636E\u5E93\u7684\u6027\u80FD\u8FDB\u884C\u76D1\u63A7\u4E5F\u662F\u975E\u5E38\u91CD\u8981\u7684\u3002\u4E0B\u9762\u5C06\u63A8\u8350\u4E24\u79CD\u5E38\u7528\u7684\u6027\u80FD\u76D1\u63A7\u5DE5\u5177\uFF0C\u5E2E\u52A9\u4F60\u5B9E\u65F6\u76D1\u63A7\u6570\u636E\u5E93\u7684\u8FD0\u884C\u60C5\u51B5\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "521-\u6162\u67E5\u8BE2\u65E5\u5FD7\u7684\u5206\u6790",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#521-\u6162\u67E5\u8BE2\u65E5\u5FD7\u7684\u5206\u6790",
        children: "#"
      }), "5.2.1 \u6162\u67E5\u8BE2\u65E5\u5FD7\u7684\u5206\u6790"]
    }), "\n", jsx(_components.p, {
      children: "\u6162\u67E5\u8BE2\u65E5\u5FD7\u662F\u6570\u636E\u5E93\u8BB0\u5F55\u67E5\u8BE2\u8BED\u53E5\u6267\u884C\u65F6\u95F4\u8D85\u8FC7\u9608\u503C\u7684\u65E5\u5FD7\u3002\u901A\u8FC7\u5206\u6790\u6162\u67E5\u8BE2\u65E5\u5FD7\uFF0C\u53EF\u4EE5\u627E\u51FA\u67E5\u8BE2\u6548\u7387\u8F83\u4F4E\u7684\u8BED\u53E5\uFF0C\u5E76\u8FDB\u884C\u4F18\u5316\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u793A\u4F8B SQL\uFF0C\u7528\u4E8E\u67E5\u627E\u6267\u884C\u65F6\u95F4\u8D85\u8FC71\u79D2\u7684\u6162\u67E5\u8BE2\u8BED\u53E5\uFF1A"
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
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "FROM"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " slow_query_log "
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "WHERE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " execution_time "
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
                color: "#B48EAD"
              },
              children: "1"
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
      id: "522-\u6027\u80FD\u6307\u6807\u76D1\u63A7\u5DE5\u5177\u7684\u9009\u7528",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#522-\u6027\u80FD\u6307\u6807\u76D1\u63A7\u5DE5\u5177\u7684\u9009\u7528",
        children: "#"
      }), "5.2.2 \u6027\u80FD\u6307\u6807\u76D1\u63A7\u5DE5\u5177\u7684\u9009\u7528"]
    }), "\n", jsx(_components.p, {
      children: "\u9664\u4E86\u6162\u67E5\u8BE2\u65E5\u5FD7\u5916\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E9B\u6027\u80FD\u6307\u6807\u76D1\u63A7\u5DE5\u5177\u6765\u5B9E\u65F6\u76D1\u63A7\u6570\u636E\u5E93\u7684\u8FD0\u884C\u60C5\u51B5\uFF0C\u4F8B\u5982Prometheus\u3001Grafana\u7B49\u3002\u8FD9\u4E9B\u5DE5\u5177\u53EF\u4EE5\u5E2E\u52A9\u4F60\u76D1\u63A7\u6570\u636E\u5E93\u7684\u5404\u9879\u6307\u6807\uFF0C\u5E76\u53CA\u65F6\u53D1\u73B0\u6F5C\u5728\u7684\u6027\u80FD\u95EE\u9898\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "\u603B\u7ED3-1",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u603B\u7ED3-1",
        children: "#"
      }), "\u603B\u7ED3"]
    }), "\n", jsx(_components.p, {
      children: "\u672C\u7AE0\u4ECB\u7ECD\u4E86\u5982\u4F55\u6392\u9664\u5E38\u89C1\u7684\u8FDE\u63A5\u95EE\u9898\uFF0C\u4EE5\u53CA\u63A8\u8350\u4E86\u4E00\u4E9B\u5E38\u7528\u7684\u6027\u80FD\u76D1\u63A7\u5DE5\u5177\uFF0C\u5E0C\u671B\u80FD\u5E2E\u52A9\u4F60\u66F4\u597D\u5730\u7BA1\u7406\u6570\u636E\u5E93\u3002"
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

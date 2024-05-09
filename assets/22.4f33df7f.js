import { jsx, jsxs, Fragment } from "react/jsx-runtime";
const frontmatter = void 0;
const toc = [{
  "id": "\u8BEF\u533A\u4E00\u5FFD\u7565\u5B57\u7B26\u7F16\u7801\u8BBE\u7F6E",
  "text": "\u8BEF\u533A\u4E00\uFF1A\u5FFD\u7565\u5B57\u7B26\u7F16\u7801\u8BBE\u7F6E",
  "depth": 3
}, {
  "id": "\u8BEF\u533A\u4E8C\u6570\u636E\u5E93\u5F15\u64CE\u9009\u62E9\u4E0D\u5F53",
  "text": "\u8BEF\u533A\u4E8C\uFF1A\u6570\u636E\u5E93\u5F15\u64CE\u9009\u62E9\u4E0D\u5F53",
  "depth": 3
}, {
  "id": "\u8BEF\u533A\u4E09\u7F3A\u4E4F\u7D22\u5F15\u8BBE\u8BA1",
  "text": "\u8BEF\u533A\u4E09\uFF1A\u7F3A\u4E4F\u7D22\u5F15\u8BBE\u8BA1",
  "depth": 3
}, {
  "id": "21-mysql\u6570\u636E\u5E93\u7B80\u4ECB\u4E0E\u7279\u70B9",
  "text": "2.1 MySQL\u6570\u636E\u5E93\u7B80\u4ECB\u4E0E\u7279\u70B9",
  "depth": 3
}, {
  "id": "211-\u5173\u7CFB\u578B\u6570\u636E\u5E93\u6982\u8FF0",
  "text": "2.1.1 \u5173\u7CFB\u578B\u6570\u636E\u5E93\u6982\u8FF0",
  "depth": 4
}, {
  "id": "212-mysql\u4F5C\u4E3A\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7BA1\u7406\u7CFB\u7EDF\u7684\u4F18\u52BF",
  "text": "2.1.2 MySQL\u4F5C\u4E3A\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7BA1\u7406\u7CFB\u7EDF\u7684\u4F18\u52BF",
  "depth": 4
}, {
  "id": "22-mysql\u6570\u636E\u5E93\u7684\u5B89\u88C5\u4E0E\u914D\u7F6E",
  "text": "2.2 MySQL\u6570\u636E\u5E93\u7684\u5B89\u88C5\u4E0E\u914D\u7F6E",
  "depth": 3
}, {
  "id": "221-\u4E0B\u8F7Dmysql\u5B89\u88C5\u5305",
  "text": "2.2.1 \u4E0B\u8F7DMySQL\u5B89\u88C5\u5305",
  "depth": 4
}, {
  "id": "222-\u5B89\u88C5mysql\u6570\u636E\u5E93",
  "text": "2.2.2 \u5B89\u88C5MySQL\u6570\u636E\u5E93",
  "depth": 4
}, {
  "id": "223-\u914D\u7F6Emysql\u6570\u636E\u5E93",
  "text": "2.2.3 \u914D\u7F6EMySQL\u6570\u636E\u5E93",
  "depth": 4
}, {
  "id": "23-mysql\u6570\u636E\u5E93\u7684\u57FA\u672C\u64CD\u4F5C",
  "text": "2.3 MySQL\u6570\u636E\u5E93\u7684\u57FA\u672C\u64CD\u4F5C",
  "depth": 3
}, {
  "id": "231-\u767B\u5F55mysql\u6570\u636E\u5E93",
  "text": "2.3.1 \u767B\u5F55MySQL\u6570\u636E\u5E93",
  "depth": 4
}, {
  "id": "232-\u521B\u5EFA\u4E0E\u5220\u9664\u6570\u636E\u5E93",
  "text": "2.3.2 \u521B\u5EFA\u4E0E\u5220\u9664\u6570\u636E\u5E93",
  "depth": 4
}, {
  "id": "233-\u6570\u636E\u8868\u7684\u6982\u5FF5\u4E0E\u64CD\u4F5C",
  "text": "2.3.3 \u6570\u636E\u8868\u7684\u6982\u5FF5\u4E0E\u64CD\u4F5C",
  "depth": 4
}, {
  "id": "234-\u5E38\u7528\u6570\u636E\u7C7B\u578B\u4ECB\u7ECD",
  "text": "2.3.4 \u5E38\u7528\u6570\u636E\u7C7B\u578B\u4ECB\u7ECD",
  "depth": 4
}, {
  "id": "31-\u672A\u6B63\u786E\u9009\u62E9\u5B57\u7B26\u7F16\u7801",
  "text": "3.1 \u672A\u6B63\u786E\u9009\u62E9\u5B57\u7B26\u7F16\u7801",
  "depth": 3
}, {
  "id": "311-\u5B57\u7B26\u7F16\u7801\u7684\u91CD\u8981\u6027",
  "text": "3.1.1 \u5B57\u7B26\u7F16\u7801\u7684\u91CD\u8981\u6027",
  "depth": 4
}, {
  "id": "312-\u5E38\u89C1\u5B57\u7B26\u7F16\u7801\u9009\u62E9\u53CA\u5F71\u54CD",
  "text": "3.1.2 \u5E38\u89C1\u5B57\u7B26\u7F16\u7801\u9009\u62E9\u53CA\u5F71\u54CD",
  "depth": 4
}, {
  "id": "32-\u5FFD\u7565\u5F15\u64CE\u9009\u62E9",
  "text": "3.2 \u5FFD\u7565\u5F15\u64CE\u9009\u62E9",
  "depth": 3
}, {
  "id": "321-\u5F15\u64CE\u7684\u4F5C\u7528\u53CA\u5404\u5F15\u64CE\u7279\u70B9",
  "text": "3.2.1 \u5F15\u64CE\u7684\u4F5C\u7528\u53CA\u5404\u5F15\u64CE\u7279\u70B9",
  "depth": 4
}, {
  "id": "322-\u5982\u4F55\u9009\u62E9\u9002\u5408\u7684\u5B58\u50A8\u5F15\u64CE",
  "text": "3.2.2 \u5982\u4F55\u9009\u62E9\u9002\u5408\u7684\u5B58\u50A8\u5F15\u64CE",
  "depth": 4
}, {
  "id": "33-\u7F3A\u4E4F\u6B63\u786E\u7684\u7D22\u5F15\u8BBE\u8BA1",
  "text": "3.3 \u7F3A\u4E4F\u6B63\u786E\u7684\u7D22\u5F15\u8BBE\u8BA1",
  "depth": 3
}, {
  "id": "331-\u7D22\u5F15\u7684\u7C7B\u578B\u4E0E\u4F5C\u7528",
  "text": "3.3.1 \u7D22\u5F15\u7684\u7C7B\u578B\u4E0E\u4F5C\u7528",
  "depth": 4
}, {
  "id": "332-\u7D22\u5F15\u8BBE\u8BA1\u539F\u5219\u4E0E\u6CE8\u610F\u4E8B\u9879",
  "text": "3.3.2 \u7D22\u5F15\u8BBE\u8BA1\u539F\u5219\u4E0E\u6CE8\u610F\u4E8B\u9879",
  "depth": 4
}, {
  "id": "41-\u8BBE\u5B9A\u5408\u9002\u7684\u5B57\u7B26\u7F16\u7801",
  "text": "4.1 \u8BBE\u5B9A\u5408\u9002\u7684\u5B57\u7B26\u7F16\u7801",
  "depth": 3
}, {
  "id": "411-\u67E5\u770B\u548C\u4FEE\u6539\u5B57\u7B26\u96C6\u8BBE\u7F6E",
  "text": "4.1.1 \u67E5\u770B\u548C\u4FEE\u6539\u5B57\u7B26\u96C6\u8BBE\u7F6E",
  "depth": 4
}, {
  "id": "412-\u5B57\u7B26\u7F16\u7801\u8F6C\u6362\u65B9\u6CD5",
  "text": "4.1.2 \u5B57\u7B26\u7F16\u7801\u8F6C\u6362\u65B9\u6CD5",
  "depth": 4
}, {
  "id": "42-\u9009\u62E9\u5408\u9002\u7684\u5B58\u50A8\u5F15\u64CE",
  "text": "4.2 \u9009\u62E9\u5408\u9002\u7684\u5B58\u50A8\u5F15\u64CE",
  "depth": 3
}, {
  "id": "421-innodb\u4E0Emyisam\u5F15\u64CE\u5BF9\u6BD4",
  "text": "4.2.1 InnoDB\u4E0EMyISAM\u5F15\u64CE\u5BF9\u6BD4",
  "depth": 4
}, {
  "id": "422-\u4F7F\u7528\u573A\u666F\u4E0E\u6700\u4F73\u5B9E\u8DF5",
  "text": "4.2.2 \u4F7F\u7528\u573A\u666F\u4E0E\u6700\u4F73\u5B9E\u8DF5",
  "depth": 4
}, {
  "id": "43-\u4F18\u5316\u7D22\u5F15\u8BBE\u8BA1",
  "text": "4.3 \u4F18\u5316\u7D22\u5F15\u8BBE\u8BA1",
  "depth": 3
}, {
  "id": "431-\u5206\u6790\u67E5\u8BE2\u9700\u6C42\u786E\u5B9A\u7D22\u5F15",
  "text": "4.3.1 \u5206\u6790\u67E5\u8BE2\u9700\u6C42\u786E\u5B9A\u7D22\u5F15",
  "depth": 4
}, {
  "id": "432-\u521B\u5EFA\u548C\u4F18\u5316\u7D22\u5F15\u7684\u6280\u5DE7\u4E0E\u5DE5\u5177\u63A8\u8350",
  "text": "4.3.2 \u521B\u5EFA\u548C\u4F18\u5316\u7D22\u5F15\u7684\u6280\u5DE7\u4E0E\u5DE5\u5177\u63A8\u8350",
  "depth": 4
}, {
  "id": "51-\u6570\u636E\u5E93\u5907\u4EFD\u4E0E\u6062\u590D\u7B56\u7565",
  "text": "5.1 \u6570\u636E\u5E93\u5907\u4EFD\u4E0E\u6062\u590D\u7B56\u7565",
  "depth": 3
}, {
  "id": "511-\u5B9A\u671F\u5907\u4EFD\u6570\u636E",
  "text": "5.1.1 \u5B9A\u671F\u5907\u4EFD\u6570\u636E",
  "depth": 4
}, {
  "id": "512-\u6062\u590D\u6570\u636E\u5E93\u7684\u65B9\u6CD5\u4E0E\u6CE8\u610F\u4E8B\u9879",
  "text": "5.1.2 \u6062\u590D\u6570\u636E\u5E93\u7684\u65B9\u6CD5\u4E0E\u6CE8\u610F\u4E8B\u9879",
  "depth": 4
}, {
  "id": "52-\u6027\u80FD\u4F18\u5316\u6280\u5DE7",
  "text": "5.2 \u6027\u80FD\u4F18\u5316\u6280\u5DE7",
  "depth": 3
}, {
  "id": "521-\u67E5\u8BE2\u4F18\u5316",
  "text": "5.2.1 \u67E5\u8BE2\u4F18\u5316",
  "depth": 4
}, {
  "id": "522-\u7D22\u5F15\u4F18\u5316",
  "text": "5.2.2 \u7D22\u5F15\u4F18\u5316",
  "depth": 4
}, {
  "id": "523-\u914D\u7F6E\u4F18\u5316",
  "text": "5.2.3 \u914D\u7F6E\u4F18\u5316",
  "depth": 4
}, {
  "id": "\u603B\u7ED3",
  "text": "\u603B\u7ED3",
  "depth": 3
}, {
  "id": "61-\u9762\u5BF9\u6570\u636E\u91CF\u589E\u957F\u7684\u5E94\u5BF9\u7B56\u7565",
  "text": "6.1 \u9762\u5BF9\u6570\u636E\u91CF\u589E\u957F\u7684\u5E94\u5BF9\u7B56\u7565",
  "depth": 3
}, {
  "id": "611-\u5206\u5E93\u5206\u8868\u89E3\u51B3\u65B9\u6848",
  "text": "6.1.1 \u5206\u5E93\u5206\u8868\u89E3\u51B3\u65B9\u6848",
  "depth": 4
}, {
  "id": "612-\u6570\u636E\u5E93\u96C6\u7FA4\u642D\u5EFA",
  "text": "6.1.2 \u6570\u636E\u5E93\u96C6\u7FA4\u642D\u5EFA",
  "depth": 4
}, {
  "id": "62-\u6570\u636E\u5B89\u5168\u4FDD\u969C",
  "text": "6.2 \u6570\u636E\u5B89\u5168\u4FDD\u969C",
  "depth": 3
}, {
  "id": "621-\u6570\u636E\u5907\u4EFD\u4E0E\u707E\u96BE\u6062\u590D\u9884\u6848",
  "text": "6.2.1 \u6570\u636E\u5907\u4EFD\u4E0E\u707E\u96BE\u6062\u590D\u9884\u6848",
  "depth": 4
}, {
  "id": "622-\u5B89\u5168\u6F0F\u6D1E\u7684\u5E94\u5BF9\u63AA\u65BD",
  "text": "6.2.2 \u5B89\u5168\u6F0F\u6D1E\u7684\u5E94\u5BF9\u63AA\u65BD",
  "depth": 4
}];
const title = "6. \u5E94\u5BF9\u672A\u6765MySQL\u6570\u636E\u5E93\u521B\u5EFA\u6311\u6218";
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    p: "p",
    h3: "h3",
    h4: "h4",
    ul: "ul",
    li: "li",
    strong: "strong",
    ol: "ol",
    div: "div",
    button: "button",
    span: "span",
    pre: "pre",
    code: "code"
  }, props.components);
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "1-mysql\u6570\u636E\u5E93\u521B\u5EFA\u5E38\u89C1\u8BEF\u533A\u89E3\u6790",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#1-mysql\u6570\u636E\u5E93\u521B\u5EFA\u5E38\u89C1\u8BEF\u533A\u89E3\u6790",
        children: "#"
      }), "1. MySQL\u6570\u636E\u5E93\u521B\u5EFA\u5E38\u89C1\u8BEF\u533A\u89E3\u6790"]
    }), "\n", jsx(_components.p, {
      children: "\u5728MySQL\u6570\u636E\u5E93\u521B\u5EFA\u8FC7\u7A0B\u4E2D\uFF0C\u7ECF\u5E38\u4F1A\u51FA\u73B0\u4E00\u4E9B\u5E38\u89C1\u8BEF\u533A\uFF0C\u5982\u679C\u4E0D\u6B63\u786E\u5904\u7406\u53EF\u80FD\u4F1A\u7ED9\u6570\u636E\u5E93\u7684\u4F7F\u7528\u5E26\u6765\u4E00\u5B9A\u7684\u56F0\u6270\u3002\u672C\u7AE0\u5C06\u9488\u5BF9\u4E00\u4E9B\u5E38\u89C1\u8BEF\u533A\u8FDB\u884C\u6DF1\u5165\u89E3\u6790\uFF0C\u5E2E\u52A9\u8BFB\u8005\u907F\u514D\u5728MySQL\u6570\u636E\u5E93\u521B\u5EFA\u8FC7\u7A0B\u4E2D\u72AF\u4E0B\u7C7B\u4F3C\u9519\u8BEF\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "\u8BEF\u533A\u4E00\u5FFD\u7565\u5B57\u7B26\u7F16\u7801\u8BBE\u7F6E",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u8BEF\u533A\u4E00\u5FFD\u7565\u5B57\u7B26\u7F16\u7801\u8BBE\u7F6E",
        children: "#"
      }), "\u8BEF\u533A\u4E00\uFF1A\u5FFD\u7565\u5B57\u7B26\u7F16\u7801\u8BBE\u7F6E"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u521B\u5EFAMySQL\u6570\u636E\u5E93\u65F6\uFF0C\u5F88\u591A\u4EBA\u5BB9\u6613\u5FFD\u7565\u5B57\u7B26\u7F16\u7801\u7684\u8BBE\u7F6E\u3002\u5B57\u7B26\u7F16\u7801\u662F\u975E\u5E38\u91CD\u8981\u7684\uFF0C\u5B83\u51B3\u5B9A\u4E86\u6570\u636E\u5E93\u80FD\u591F\u5B58\u50A8\u7684\u5B57\u7B26\u96C6\u8303\u56F4\uFF0C\u5982\u679C\u9009\u62E9\u4E0D\u5F53\uFF0C\u53EF\u80FD\u5BFC\u81F4\u6570\u636E\u5B58\u50A8\u9519\u8BEF\u751A\u81F3\u4E71\u7801\u7684\u95EE\u9898\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "\u8BEF\u533A\u4E8C\u6570\u636E\u5E93\u5F15\u64CE\u9009\u62E9\u4E0D\u5F53",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u8BEF\u533A\u4E8C\u6570\u636E\u5E93\u5F15\u64CE\u9009\u62E9\u4E0D\u5F53",
        children: "#"
      }), "\u8BEF\u533A\u4E8C\uFF1A\u6570\u636E\u5E93\u5F15\u64CE\u9009\u62E9\u4E0D\u5F53"]
    }), "\n", jsx(_components.p, {
      children: "\u53E6\u4E00\u4E2A\u5E38\u89C1\u8BEF\u533A\u662F\u6570\u636E\u5E93\u5F15\u64CE\u7684\u9009\u62E9\u4E0D\u5F53\u3002MySQL\u652F\u6301\u591A\u79CD\u5F15\u64CE\uFF0C\u5982InnoDB\u3001MyISAM\u7B49\uFF0C\u4E0D\u540C\u7684\u5F15\u64CE\u6709\u4E0D\u540C\u7684\u7279\u70B9\u548C\u9002\u7528\u573A\u666F\uFF0C\u9009\u62E9\u4E0D\u5408\u9002\u7684\u5F15\u64CE\u53EF\u80FD\u4F1A\u5F71\u54CD\u6570\u636E\u5E93\u6027\u80FD\u548C\u7A33\u5B9A\u6027\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "\u8BEF\u533A\u4E09\u7F3A\u4E4F\u7D22\u5F15\u8BBE\u8BA1",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u8BEF\u533A\u4E09\u7F3A\u4E4F\u7D22\u5F15\u8BBE\u8BA1",
        children: "#"
      }), "\u8BEF\u533A\u4E09\uFF1A\u7F3A\u4E4F\u7D22\u5F15\u8BBE\u8BA1"]
    }), "\n", jsx(_components.p, {
      children: "\u7D22\u5F15\u5728\u6570\u636E\u5E93\u4E2D\u8D77\u7740\u975E\u5E38\u91CD\u8981\u7684\u4F5C\u7528\uFF0C\u7F3A\u4E4F\u6B63\u786E\u7684\u7D22\u5F15\u8BBE\u8BA1\u53EF\u80FD\u4F1A\u5BFC\u81F4\u67E5\u8BE2\u6548\u7387\u4F4E\u4E0B\u751A\u81F3\u5168\u8868\u626B\u63CF\u7684\u60C5\u51B5\u53D1\u751F\u3002\u5408\u7406\u8BBE\u8BA1\u7D22\u5F15\u53EF\u4EE5\u5927\u5927\u63D0\u5347\u6570\u636E\u5E93\u67E5\u8BE2\u6548\u7387\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u6DF1\u5165\u89E3\u6790\u8FD9\u4E9B\u5E38\u89C1\u8BEF\u533A\uFF0C\u8BFB\u8005\u80FD\u591F\u66F4\u597D\u5730\u7406\u89E3MySQL\u6570\u636E\u5E93\u521B\u5EFA\u8FC7\u7A0B\u4E2D\u7684\u5173\u952E\u95EE\u9898\uFF0C\u4ECE\u800C\u907F\u514D\u5728\u5B9E\u8DF5\u4E2D\u72AF\u4E0B\u7C7B\u4F3C\u9519\u8BEF\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "2-mysql\u6570\u636E\u5E93\u57FA\u7840\u77E5\u8BC6",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#2-mysql\u6570\u636E\u5E93\u57FA\u7840\u77E5\u8BC6",
        children: "#"
      }), "2. MySQL\u6570\u636E\u5E93\u57FA\u7840\u77E5\u8BC6"]
    }), "\n", jsxs(_components.h3, {
      id: "21-mysql\u6570\u636E\u5E93\u7B80\u4ECB\u4E0E\u7279\u70B9",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#21-mysql\u6570\u636E\u5E93\u7B80\u4ECB\u4E0E\u7279\u70B9",
        children: "#"
      }), "2.1 MySQL\u6570\u636E\u5E93\u7B80\u4ECB\u4E0E\u7279\u70B9"]
    }), "\n", jsx(_components.p, {
      children: "MySQL \u662F\u4E00\u79CD\u5F00\u6E90\u7684\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7BA1\u7406\u7CFB\u7EDF\uFF08RDBMS\uFF09\uFF0C\u7531\u745E\u5178 MySQL AB \u516C\u53F8\u5F00\u53D1\u3002\u5B83\u5177\u6709\u4EE5\u4E0B\u7279\u70B9\uFF1A"
    }), "\n", jsxs(_components.h4, {
      id: "211-\u5173\u7CFB\u578B\u6570\u636E\u5E93\u6982\u8FF0",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#211-\u5173\u7CFB\u578B\u6570\u636E\u5E93\u6982\u8FF0",
        children: "#"
      }), "2.1.1 \u5173\u7CFB\u578B\u6570\u636E\u5E93\u6982\u8FF0"]
    }), "\n", jsx(_components.p, {
      children: "\u5173\u7CFB\u578B\u6570\u636E\u5E93\u662F\u57FA\u4E8E\u5173\u7CFB\u6A21\u578B\u7684\u6570\u636E\u5E93\uFF0C\u91C7\u7528\u7ED3\u6784\u5316\u7684\u6570\u636E\u8868\u5C06\u6570\u636E\u5B58\u50A8\u5728\u5176\u4E2D\uFF0C\u652F\u6301 SQL \u5BF9\u6570\u636E\u8FDB\u884C\u64CD\u4F5C\u548C\u67E5\u8BE2\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "212-mysql\u4F5C\u4E3A\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7BA1\u7406\u7CFB\u7EDF\u7684\u4F18\u52BF",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#212-mysql\u4F5C\u4E3A\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7BA1\u7406\u7CFB\u7EDF\u7684\u4F18\u52BF",
        children: "#"
      }), "2.1.2 MySQL\u4F5C\u4E3A\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7BA1\u7406\u7CFB\u7EDF\u7684\u4F18\u52BF"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "\u5F00\u6E90\u514D\u8D39"
        }), "\uFF1AMySQL\u662F\u5F00\u6E90\u8F6F\u4EF6\uFF0C\u53EF\u4EE5\u514D\u8D39\u4F7F\u7528\u548C\u4FEE\u6539\u3002"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "\u8DE8\u5E73\u53F0"
        }), "\uFF1A\u652F\u6301\u591A\u79CD\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u5982Windows\u3001Linux\u3001MacOS\u7B49\u3002"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "\u9AD8\u6027\u80FD"
        }), "\uFF1AMySQL\u62E5\u6709\u9AD8\u6027\u80FD\u7684\u67E5\u8BE2\u548C\u8BFB\u53D6\u80FD\u529B\uFF0C\u9002\u7528\u4E8E\u5927\u578B\u7F51\u7AD9\u548C\u5E94\u7528\u7A0B\u5E8F\u3002"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "\u7A33\u5B9A\u53EF\u9760"
        }), "\uFF1A\u7ECF\u8FC7\u5E7F\u6CDB\u6D4B\u8BD5\u548C\u5E94\u7528\uFF0C\u7A33\u5B9A\u6027\u9AD8\u3002"]
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "22-mysql\u6570\u636E\u5E93\u7684\u5B89\u88C5\u4E0E\u914D\u7F6E",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#22-mysql\u6570\u636E\u5E93\u7684\u5B89\u88C5\u4E0E\u914D\u7F6E",
        children: "#"
      }), "2.2 MySQL\u6570\u636E\u5E93\u7684\u5B89\u88C5\u4E0E\u914D\u7F6E"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u5B66\u4E60MySQL\u6570\u636E\u5E93\u4E4B\u524D\uFF0C\u9996\u5148\u9700\u8981\u5B8C\u6210MySQL\u7684\u5B89\u88C5\u548C\u914D\u7F6E\u3002\u4EE5\u4E0B\u662F\u8BE6\u7EC6\u6B65\u9AA4\uFF1A"
    }), "\n", jsxs(_components.h4, {
      id: "221-\u4E0B\u8F7Dmysql\u5B89\u88C5\u5305",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#221-\u4E0B\u8F7Dmysql\u5B89\u88C5\u5305",
        children: "#"
      }), "2.2.1 \u4E0B\u8F7DMySQL\u5B89\u88C5\u5305"]
    }), "\n", jsxs(_components.p, {
      children: ["\u8BBF\u95EEMySQL\u5B98\u65B9\u7F51\u7AD9\uFF08", jsx(_components.a, {
        href: "https://dev.mysql.com/downloads/mysql/%EF%BC%89%E4%B8%8B%E8%BD%BD%E9%80%82%E5%90%88%E6%82%A8%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E7%9A%84MySQL%E5%AE%89%E8%A3%85%E5%8C%85%E3%80%82%E6%A0%B9%E6%8D%AE%E6%82%A8%E7%9A%84%E7%B3%BB%E7%BB%9F%E9%80%89%E6%8B%A9%E5%AF%B9%E5%BA%94%E7%9A%84%E7%89%88%E6%9C%AC%E8%BF%9B%E8%A1%8C%E4%B8%8B%E8%BD%BD%E3%80%82",
        children: "https://dev.mysql.com/downloads/mysql/\uFF09\u4E0B\u8F7D\u9002\u5408\u60A8\u64CD\u4F5C\u7CFB\u7EDF\u7684MySQL\u5B89\u88C5\u5305\u3002\u6839\u636E\u60A8\u7684\u7CFB\u7EDF\u9009\u62E9\u5BF9\u5E94\u7684\u7248\u672C\u8FDB\u884C\u4E0B\u8F7D\u3002"
      })]
    }), "\n", jsxs(_components.h4, {
      id: "222-\u5B89\u88C5mysql\u6570\u636E\u5E93",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#222-\u5B89\u88C5mysql\u6570\u636E\u5E93",
        children: "#"
      }), "2.2.2 \u5B89\u88C5MySQL\u6570\u636E\u5E93"]
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsx(_components.li, {
        children: "\u53CC\u51FB\u5B89\u88C5\u5305\uFF0C\u6309\u7167\u5B89\u88C5\u5411\u5BFC\u7684\u6307\u5F15\u8FDB\u884C\u5B89\u88C5\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u5728\u5B89\u88C5\u8FC7\u7A0B\u4E2D\uFF0C\u8BBE\u7F6Eroot\u7528\u6237\u7684\u5BC6\u7801\uFF0C\u5E76\u8BB0\u5F97\u8BE5\u5BC6\u7801\u7528\u4E8E\u4EE5\u540E\u767B\u5F55MySQL\u6570\u636E\u5E93\u3002"
      }), "\n"]
    }), "\n", jsxs(_components.h4, {
      id: "223-\u914D\u7F6Emysql\u6570\u636E\u5E93",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#223-\u914D\u7F6Emysql\u6570\u636E\u5E93",
        children: "#"
      }), "2.2.3 \u914D\u7F6EMySQL\u6570\u636E\u5E93"]
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsx(_components.li, {
        children: "\u6253\u5F00MySQL\u7684\u914D\u7F6E\u6587\u4EF6 my.cnf\uFF08Windows\u4E0B\u5728\u5B89\u88C5\u76EE\u5F55\u4E2D\u7684my.ini\uFF09\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u914D\u7F6EMySQL\u7684\u57FA\u672C\u53C2\u6570\uFF0C\u5982\u7AEF\u53E3\u53F7\u3001\u5B57\u7B26\u96C6\u7B49\u3002\u4FDD\u5B58\u5E76\u9000\u51FA\u914D\u7F6E\u6587\u4EF6\u3002"
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "23-mysql\u6570\u636E\u5E93\u7684\u57FA\u672C\u64CD\u4F5C",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#23-mysql\u6570\u636E\u5E93\u7684\u57FA\u672C\u64CD\u4F5C",
        children: "#"
      }), "2.3 MySQL\u6570\u636E\u5E93\u7684\u57FA\u672C\u64CD\u4F5C"]
    }), "\n", jsx(_components.p, {
      children: "\u5B66\u4E60\u4E86MySQL\u7684\u5B89\u88C5\u4E0E\u914D\u7F6E\uFF0C\u63A5\u4E0B\u6765\u662F\u5B66\u4E60MySQL\u6570\u636E\u5E93\u7684\u57FA\u672C\u64CD\u4F5C\uFF0C\u5305\u62EC\u767B\u5F55\u3001\u6570\u636E\u5E93\u548C\u6570\u636E\u8868\u7684\u64CD\u4F5C\uFF0C\u4EE5\u53CA\u5E38\u7528\u6570\u636E\u7C7B\u578B\u7684\u4ECB\u7ECD\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "231-\u767B\u5F55mysql\u6570\u636E\u5E93",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#231-\u767B\u5F55mysql\u6570\u636E\u5E93",
        children: "#"
      }), "2.3.1 \u767B\u5F55MySQL\u6570\u636E\u5E93"]
    }), "\n", jsx(_components.p, {
      children: "\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u767B\u5F55\u5230MySQL\u6570\u636E\u5E93\uFF1A"
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
              children: "p"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u8F93\u5165\u5BC6\u7801\u540E\u5373\u53EF\u767B\u5F55\u5230MySQL\u63A7\u5236\u53F0\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "232-\u521B\u5EFA\u4E0E\u5220\u9664\u6570\u636E\u5E93",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#232-\u521B\u5EFA\u4E0E\u5220\u9664\u6570\u636E\u5E93",
        children: "#"
      }), "2.3.2 \u521B\u5EFA\u4E0E\u5220\u9664\u6570\u636E\u5E93"]
    }), "\n", jsx(_components.p, {
      children: "\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u5728MySQL\u4E2D\u521B\u5EFA\u6570\u636E\u5E93\uFF1A"
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
    }), "\n", jsx(_components.p, {
      children: "\u8981\u5220\u9664\u6570\u636E\u5E93\uFF0C\u53EF\u4EE5\u4F7F\u7528\uFF1A"
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
    }), "\n", jsxs(_components.h4, {
      id: "233-\u6570\u636E\u8868\u7684\u6982\u5FF5\u4E0E\u64CD\u4F5C",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#233-\u6570\u636E\u8868\u7684\u6982\u5FF5\u4E0E\u64CD\u4F5C",
        children: "#"
      }), "2.3.3 \u6570\u636E\u8868\u7684\u6982\u5FF5\u4E0E\u64CD\u4F5C"]
    }), "\n", jsx(_components.p, {
      children: "\u6570\u636E\u8868\u662FMySQL\u4E2D\u5B58\u50A8\u6570\u636E\u7684\u57FA\u672C\u5355\u4F4D\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u521B\u5EFA\u6570\u636E\u8868\uFF1A"
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
              children: " mytable ("
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
              children: " AUTO_INCREMENT "
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
    }), "\n", jsxs(_components.h4, {
      id: "234-\u5E38\u7528\u6570\u636E\u7C7B\u578B\u4ECB\u7ECD",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#234-\u5E38\u7528\u6570\u636E\u7C7B\u578B\u4ECB\u7ECD",
        children: "#"
      }), "2.3.4 \u5E38\u7528\u6570\u636E\u7C7B\u578B\u4ECB\u7ECD"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "INT"
        }), "\uFF1A\u6574\u6570\u7C7B\u578B\uFF0C\u7528\u4E8E\u5B58\u50A8\u6574\u6570\u3002"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "VARCHAR"
        }), "\uFF1A\u53EF\u53D8\u957F\u5EA6\u5B57\u7B26\u4E32\uFF0C\u7528\u4E8E\u5B58\u50A8\u6587\u672C\u6570\u636E\u3002"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "DATE"
        }), "\uFF1A\u7528\u4E8E\u5B58\u50A8\u65E5\u671F\u3002"]
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u4EE5\u4E0A\u57FA\u672C\u64CD\u4F5C\uFF0C\u60A8\u5DF2\u7ECF\u638C\u63E1\u4E86MySQL\u6570\u636E\u5E93\u7684\u5B89\u88C5\u3001\u914D\u7F6E\u548C\u57FA\u672C\u64CD\u4F5C\u77E5\u8BC6\uFF0C\u4E3A\u6DF1\u5165\u5B66\u4E60MySQL\u6570\u636E\u5E93\u6253\u4E0B\u4E86\u57FA\u7840\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "3-mysql\u6570\u636E\u5E93\u521B\u5EFA\u5E38\u89C1\u8BEF\u533A\u5206\u6790",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#3-mysql\u6570\u636E\u5E93\u521B\u5EFA\u5E38\u89C1\u8BEF\u533A\u5206\u6790",
        children: "#"
      }), "3. MySQL\u6570\u636E\u5E93\u521B\u5EFA\u5E38\u89C1\u8BEF\u533A\u5206\u6790"]
    }), "\n", jsxs(_components.h3, {
      id: "31-\u672A\u6B63\u786E\u9009\u62E9\u5B57\u7B26\u7F16\u7801",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#31-\u672A\u6B63\u786E\u9009\u62E9\u5B57\u7B26\u7F16\u7801",
        children: "#"
      }), "3.1 \u672A\u6B63\u786E\u9009\u62E9\u5B57\u7B26\u7F16\u7801"]
    }), "\n", jsx(_components.p, {
      children: "\u5728MySQL\u6570\u636E\u5E93\u521B\u5EFA\u8FC7\u7A0B\u4E2D\uFF0C\u4E00\u4E2A\u5E38\u89C1\u7684\u8BEF\u533A\u662F\u672A\u6B63\u786E\u9009\u62E9\u5B57\u7B26\u7F16\u7801\u3002\u5B57\u7B26\u7F16\u7801\u5728\u6570\u636E\u5E93\u4E2D\u8D77\u7740\u81F3\u5173\u91CD\u8981\u7684\u4F5C\u7528\uFF0C\u5F71\u54CD\u7740\u6570\u636E\u7684\u5B58\u50A8\u3001\u4F20\u8F93\u548C\u663E\u793A\u3002\u8BA9\u6211\u4EEC\u6DF1\u5165\u5206\u6790\u8FD9\u4E00\u95EE\u9898\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "311-\u5B57\u7B26\u7F16\u7801\u7684\u91CD\u8981\u6027",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#311-\u5B57\u7B26\u7F16\u7801\u7684\u91CD\u8981\u6027",
        children: "#"
      }), "3.1.1 \u5B57\u7B26\u7F16\u7801\u7684\u91CD\u8981\u6027"]
    }), "\n", jsx(_components.p, {
      children: "\u5B57\u7B26\u7F16\u7801\u5B9A\u4E49\u4E86\u6570\u636E\u5E93\u4E2D\u53EF\u4EE5\u652F\u6301\u7684\u5B57\u7B26\u96C6\u5408\uFF0C\u51B3\u5B9A\u4E86\u6570\u636E\u7684\u5B58\u50A8\u548C\u68C0\u7D22\u3002\u5982\u679C\u9009\u62E9\u7684\u5B57\u7B26\u7F16\u7801\u4E0D\u5408\u9002\uFF0C\u5C31\u4F1A\u5BFC\u81F4\u6570\u636E\u663E\u793A\u4E71\u7801\u3001\u6570\u636E\u4E22\u5931\u751A\u81F3\u5B89\u5168\u6027\u95EE\u9898\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "312-\u5E38\u89C1\u5B57\u7B26\u7F16\u7801\u9009\u62E9\u53CA\u5F71\u54CD",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#312-\u5E38\u89C1\u5B57\u7B26\u7F16\u7801\u9009\u62E9\u53CA\u5F71\u54CD",
        children: "#"
      }), "3.1.2 \u5E38\u89C1\u5B57\u7B26\u7F16\u7801\u9009\u62E9\u53CA\u5F71\u54CD"]
    }), "\n", jsx(_components.p, {
      children: "\u5E38\u89C1\u7684\u5B57\u7B26\u7F16\u7801\u5305\u62ECUTF-8\u3001GBK\u3001Latin1\u7B49\uFF0C\u4E0D\u540C\u7684\u5B57\u7B26\u7F16\u7801\u5BF9\u4E2D\u82F1\u6587\u5B57\u7B26\u3001\u7279\u6B8A\u7B26\u53F7\u7684\u5B58\u50A8\u65B9\u5F0F\u4E0D\u540C\uFF0C\u9009\u62E9\u4E0D\u5F53\u4F1A\u5BFC\u81F4\u6570\u636E\u5F02\u5E38\u3002\u6BD4\u5982\u5728\u5B58\u50A8\u591A\u8BED\u8A00\u7684\u60C5\u51B5\u4E0B\uFF0C\u5E94\u8BE5\u9009\u62E9UTF-8\u7F16\u7801\u4EE5\u652F\u6301\u66F4\u5E7F\u6CDB\u7684\u5B57\u7B26\u96C6\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "32-\u5FFD\u7565\u5F15\u64CE\u9009\u62E9",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#32-\u5FFD\u7565\u5F15\u64CE\u9009\u62E9",
        children: "#"
      }), "3.2 \u5FFD\u7565\u5F15\u64CE\u9009\u62E9"]
    }), "\n", jsx(_components.p, {
      children: "\u53E6\u4E00\u4E2A\u5E38\u89C1\u8BEF\u533A\u662F\u5FFD\u7565\u9009\u62E9\u5408\u9002\u7684\u5B58\u50A8\u5F15\u64CE\u3002MySQL\u652F\u6301\u591A\u79CD\u5B58\u50A8\u5F15\u64CE\uFF0C\u6BCF\u79CD\u5F15\u64CE\u5177\u6709\u4E0D\u540C\u7684\u7279\u70B9\u548C\u9002\u7528\u573A\u666F\uFF0C\u6B63\u786E\u9009\u62E9\u5F15\u64CE\u5BF9\u6570\u636E\u5E93\u6027\u80FD\u548C\u529F\u80FD\u5B9E\u73B0\u81F3\u5173\u91CD\u8981\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "321-\u5F15\u64CE\u7684\u4F5C\u7528\u53CA\u5404\u5F15\u64CE\u7279\u70B9",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#321-\u5F15\u64CE\u7684\u4F5C\u7528\u53CA\u5404\u5F15\u64CE\u7279\u70B9",
        children: "#"
      }), "3.2.1 \u5F15\u64CE\u7684\u4F5C\u7528\u53CA\u5404\u5F15\u64CE\u7279\u70B9"]
    }), "\n", jsx(_components.p, {
      children: "\u5E38\u89C1\u7684\u5B58\u50A8\u5F15\u64CE\u5305\u62ECInnoDB\u3001MyISAM\u7B49\uFF0C\u5B83\u4EEC\u5728\u4E8B\u52A1\u5904\u7406\u3001\u6027\u80FD\u3001\u5E76\u53D1\u6027\u7B49\u65B9\u9762\u6709\u6240\u5DEE\u5F02\u3002\u6BD4\u5982InnoDB\u9002\u5408\u9AD8\u5E76\u53D1\u4E8B\u52A1\u5904\u7406\uFF0C\u800CMyISAM\u9002\u5408\u8BFB\u64CD\u4F5C\u9891\u7E41\u7684\u573A\u666F\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "322-\u5982\u4F55\u9009\u62E9\u9002\u5408\u7684\u5B58\u50A8\u5F15\u64CE",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#322-\u5982\u4F55\u9009\u62E9\u9002\u5408\u7684\u5B58\u50A8\u5F15\u64CE",
        children: "#"
      }), "3.2.2 \u5982\u4F55\u9009\u62E9\u9002\u5408\u7684\u5B58\u50A8\u5F15\u64CE"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u9009\u62E9\u5B58\u50A8\u5F15\u64CE\u65F6\uFF0C\u9700\u8981\u8003\u8651\u6570\u636E\u5E93\u7684\u4F7F\u7528\u9700\u6C42\uFF0C\u5305\u62EC\u6570\u636E\u8BFB\u5199\u6BD4\u4F8B\u3001\u4E8B\u52A1\u5904\u7406\u9700\u6C42\u7B49\u3002\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u9009\u62E9\u5408\u9002\u7684\u5B58\u50A8\u5F15\u64CE\uFF0C\u624D\u80FD\u6700\u5927\u9650\u5EA6\u5730\u53D1\u6325\u6570\u636E\u5E93\u7684\u6027\u80FD\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "33-\u7F3A\u4E4F\u6B63\u786E\u7684\u7D22\u5F15\u8BBE\u8BA1",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#33-\u7F3A\u4E4F\u6B63\u786E\u7684\u7D22\u5F15\u8BBE\u8BA1",
        children: "#"
      }), "3.3 \u7F3A\u4E4F\u6B63\u786E\u7684\u7D22\u5F15\u8BBE\u8BA1"]
    }), "\n", jsx(_components.p, {
      children: "\u7D22\u5F15\u5728\u6570\u636E\u5E93\u67E5\u8BE2\u4E2D\u8D77\u7740\u81F3\u5173\u91CD\u8981\u7684\u4F5C\u7528\uFF0C\u4F46\u5F88\u591A\u4EBA\u5728\u6570\u636E\u5E93\u521B\u5EFA\u65F6\u5FFD\u89C6\u4E86\u6B63\u786E\u7684\u7D22\u5F15\u8BBE\u8BA1\uFF0C\u5BFC\u81F4\u67E5\u8BE2\u6027\u80FD\u4E0B\u964D\u3001\u8D44\u6E90\u6D6A\u8D39\u7B49\u95EE\u9898\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "331-\u7D22\u5F15\u7684\u7C7B\u578B\u4E0E\u4F5C\u7528",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#331-\u7D22\u5F15\u7684\u7C7B\u578B\u4E0E\u4F5C\u7528",
        children: "#"
      }), "3.3.1 \u7D22\u5F15\u7684\u7C7B\u578B\u4E0E\u4F5C\u7528"]
    }), "\n", jsx(_components.p, {
      children: "\u7D22\u5F15\u53EF\u4EE5\u52A0\u5FEB\u6570\u636E\u5E93\u7684\u68C0\u7D22\u901F\u5EA6\uFF0C\u5E38\u89C1\u7684\u7D22\u5F15\u7C7B\u578B\u5305\u62EC\u666E\u901A\u7D22\u5F15\u3001\u552F\u4E00\u7D22\u5F15\u3001\u4E3B\u952E\u7D22\u5F15\u7B49\u3002\u5408\u7406\u8BBE\u8BA1\u7D22\u5F15\u53EF\u4EE5\u63D0\u9AD8\u67E5\u8BE2\u6548\u7387\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "332-\u7D22\u5F15\u8BBE\u8BA1\u539F\u5219\u4E0E\u6CE8\u610F\u4E8B\u9879",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#332-\u7D22\u5F15\u8BBE\u8BA1\u539F\u5219\u4E0E\u6CE8\u610F\u4E8B\u9879",
        children: "#"
      }), "3.3.2 \u7D22\u5F15\u8BBE\u8BA1\u539F\u5219\u4E0E\u6CE8\u610F\u4E8B\u9879"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u8BBE\u8BA1\u7D22\u5F15\u65F6\uFF0C\u9700\u8981\u8003\u8651\u5230\u67E5\u8BE2\u9891\u7387\u9AD8\u7684\u5B57\u6BB5\u3001\u552F\u4E00\u6027\u7EA6\u675F\u3001\u7EC4\u5408\u7D22\u5F15\u7B49\u56E0\u7D20\u3002\u540C\u65F6\uFF0C\u8981\u907F\u514D\u8FC7\u591A\u7D22\u5F15\u5BFC\u81F4\u6027\u80FD\u4E0B\u964D\uFF0C\u9700\u8981\u6839\u636E\u5B9E\u9645\u9700\u6C42\u8FDB\u884C\u5408\u7406\u7684\u7D22\u5F15\u8BBE\u8BA1\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u5728\u6570\u636E\u5E93\u521B\u5EFA\u8FC7\u7A0B\u4E2D\uFF0C\u6B63\u786E\u9009\u62E9\u5B57\u7B26\u7F16\u7801\u3001\u5B58\u50A8\u5F15\u64CE\u548C\u7D22\u5F15\u8BBE\u8BA1\u90FD\u662F\u81F3\u5173\u91CD\u8981\u7684\u6B65\u9AA4\uFF0C\u53EA\u6709\u5728\u8FD9\u4E9B\u65B9\u9762\u505A\u5230\u5408\u7406\u89C4\u5212\u548C\u8BBE\u8BA1\uFF0C\u624D\u80FD\u907F\u514D\u5E38\u89C1\u7684\u8BEF\u533A\uFF0C\u786E\u4FDD\u6570\u636E\u5E93\u7684\u9AD8\u6548\u8FD0\u884C\u548C\u7A33\u5B9A\u6027\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "4-mysql\u6570\u636E\u5E93\u521B\u5EFA\u5B9E\u7528\u89E3\u51B3\u65B9\u6848",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#4-mysql\u6570\u636E\u5E93\u521B\u5EFA\u5B9E\u7528\u89E3\u51B3\u65B9\u6848",
        children: "#"
      }), "4. MySQL\u6570\u636E\u5E93\u521B\u5EFA\u5B9E\u7528\u89E3\u51B3\u65B9\u6848"]
    }), "\n", jsxs(_components.h3, {
      id: "41-\u8BBE\u5B9A\u5408\u9002\u7684\u5B57\u7B26\u7F16\u7801",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#41-\u8BBE\u5B9A\u5408\u9002\u7684\u5B57\u7B26\u7F16\u7801",
        children: "#"
      }), "4.1 \u8BBE\u5B9A\u5408\u9002\u7684\u5B57\u7B26\u7F16\u7801"]
    }), "\n", jsx(_components.p, {
      children: "\u5728MySQL\u6570\u636E\u5E93\u7684\u521B\u5EFA\u8FC7\u7A0B\u4E2D\uFF0C\u6B63\u786E\u8BBE\u7F6E\u5B57\u7B26\u7F16\u7801\u662F\u975E\u5E38\u91CD\u8981\u7684\uFF0C\u80FD\u591F\u6709\u6548\u907F\u514D\u56E0\u5B57\u7B26\u7F16\u7801\u95EE\u9898\u5E26\u6765\u7684\u6570\u636E\u5F02\u5E38\u548C\u4E71\u5417\uFF0C\u4E0B\u9762\u5C31\u4ECB\u7ECD\u5982\u4F55\u8BBE\u5B9A\u5408\u9002\u7684\u5B57\u7B26\u7F16\u7801\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "411-\u67E5\u770B\u548C\u4FEE\u6539\u5B57\u7B26\u96C6\u8BBE\u7F6E",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#411-\u67E5\u770B\u548C\u4FEE\u6539\u5B57\u7B26\u96C6\u8BBE\u7F6E",
        children: "#"
      }), "4.1.1 \u67E5\u770B\u548C\u4FEE\u6539\u5B57\u7B26\u96C6\u8BBE\u7F6E"]
    }), "\n", jsx(_components.p, {
      children: "\u9996\u5148\uFF0C\u6211\u4EEC\u9700\u8981\u4E86\u89E3\u5F53\u524D\u6570\u636E\u5E93\u7684\u5B57\u7B26\u96C6\u8BBE\u7F6E\u60C5\u51B5\u3002\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0BSQL\u8BED\u53E5\u67E5\u770B\uFF1A"
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
              children: "character_set_%"
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
      children: "\u901A\u8FC7\u4E0A\u8FF0SQL\u8BED\u53E5\uFF0C\u53EF\u4EE5\u67E5\u770B\u5230\u5F53\u524D\u6570\u636E\u5E93\u7684\u5B57\u7B26\u96C6\u8BBE\u7F6E\u4FE1\u606F\uFF0C\u5305\u62EC\u9ED8\u8BA4\u5B57\u7B26\u96C6\u3001\u8FDE\u63A5\u3001\u6392\u5E8F\u89C4\u5219\u7B49\u3002\u5982\u679C\u9700\u8981\u4FEE\u6539\u5B57\u7B26\u96C6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u8BED\u53E5\uFF1A"
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
              children: "SET"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " NAMES "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "charset_name"
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
    }), "\n", jsxs(_components.p, {
      children: ["\u5176\u4E2D\uFF0C", jsx(_components.code, {
        children: "charset_name"
      }), "\u662F\u4F60\u6240\u9700\u8BBE\u7F6E\u7684\u5B57\u7B26\u96C6\u540D\u79F0\uFF0C\u6BD4\u5982", jsx(_components.code, {
        children: "utf8"
      }), "\u3002"]
    }), "\n", jsxs(_components.h4, {
      id: "412-\u5B57\u7B26\u7F16\u7801\u8F6C\u6362\u65B9\u6CD5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#412-\u5B57\u7B26\u7F16\u7801\u8F6C\u6362\u65B9\u6CD5",
        children: "#"
      }), "4.1.2 \u5B57\u7B26\u7F16\u7801\u8F6C\u6362\u65B9\u6CD5"]
    }), "\n", jsxs(_components.p, {
      children: ["\u5982\u679C\u6570\u636E\u5E93\u521B\u5EFA\u8FC7\u7A0B\u4E2D\u9009\u9519\u4E86\u5B57\u7B26\u7F16\u7801\uFF0C\u9700\u8981\u8FDB\u884C\u5B57\u7B26\u7F16\u7801\u8F6C\u6362\u3002MySQL\u63D0\u4F9B\u4E86", jsx(_components.code, {
        children: "CONVERT"
      }), "\u548C", jsx(_components.code, {
        children: "CAST"
      }), "\u51FD\u6570\u6765\u5B8C\u6210\u5B57\u7B26\u96C6\u8F6C\u6362\u3002"]
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
                color: "#88C0D0"
              },
              children: "CONVERT"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "(column_name "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "USING"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " gbk) "
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
    }), "\n", jsxs(_components.p, {
      children: ["\u4E0A\u8FF0\u8BED\u53E5\u5C06", jsx(_components.code, {
        children: "column_name"
      }), "\u5217\u4E2D\u7684\u6570\u636E\u4ECE", jsx(_components.code, {
        children: "utf8"
      }), "\u8F6C\u6362\u4E3A", jsx(_components.code, {
        children: "gbk"
      }), "\u7F16\u7801\u3002"]
    }), "\n", jsxs(_components.h3, {
      id: "42-\u9009\u62E9\u5408\u9002\u7684\u5B58\u50A8\u5F15\u64CE",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#42-\u9009\u62E9\u5408\u9002\u7684\u5B58\u50A8\u5F15\u64CE",
        children: "#"
      }), "4.2 \u9009\u62E9\u5408\u9002\u7684\u5B58\u50A8\u5F15\u64CE"]
    }), "\n", jsx(_components.p, {
      children: "\u9009\u62E9\u5408\u9002\u7684\u5B58\u50A8\u5F15\u64CE\u5BF9\u4E8E\u6570\u636E\u5E93\u7684\u6027\u80FD\u548C\u7A33\u5B9A\u6027\u6709\u7740\u91CD\u8981\u5F71\u54CD\u3002\u5728MySQL\u4E2D\uFF0C\u5E38\u7528\u7684\u5B58\u50A8\u5F15\u64CE\u5305\u62ECInnoDB\u548CMyISAM\uFF0C\u4E0B\u9762\u5C06\u5BF9\u5B83\u4EEC\u8FDB\u884C\u5BF9\u6BD4\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "421-innodb\u4E0Emyisam\u5F15\u64CE\u5BF9\u6BD4",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#421-innodb\u4E0Emyisam\u5F15\u64CE\u5BF9\u6BD4",
        children: "#"
      }), "4.2.1 InnoDB\u4E0EMyISAM\u5F15\u64CE\u5BF9\u6BD4"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["InnoDB\uFF1A", "\n", jsxs(_components.ul, {
          children: ["\n", jsx(_components.li, {
            children: "\u652F\u6301\u4E8B\u52A1\u5904\u7406\uFF0C\u5177\u6709\u8F83\u597D\u7684\u4E8B\u52A1\u5904\u7406\u80FD\u529B\u3002"
          }), "\n", jsx(_components.li, {
            children: "\u652F\u6301\u884C\u9501\uFF0C\u6709\u5229\u4E8E\u5E76\u53D1\u64CD\u4F5C\uFF0C\u51CF\u5C11\u9501\u5B9A\u7684\u5F00\u9500\u3002"
          }), "\n", jsx(_components.li, {
            children: "\u652F\u6301\u5916\u952E\u7EA6\u675F\uFF0C\u4FDD\u8BC1\u6570\u636E\u5B8C\u6574\u6027\u3002"
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["MyISAM\uFF1A", "\n", jsxs(_components.ul, {
          children: ["\n", jsx(_components.li, {
            children: "\u4E0D\u652F\u6301\u4E8B\u52A1\u5904\u7406\uFF0C\u4E0D\u80FD\u6EE1\u8DB3\u4E8B\u52A1\u5904\u7406\u7684\u9700\u6C42\u3002"
          }), "\n", jsx(_components.li, {
            children: "\u652F\u6301\u8868\u9501\uFF0C\u5BB9\u6613\u51FA\u73B0\u9501\u51B2\u7A81\uFF0C\u5F71\u54CD\u5E76\u53D1\u80FD\u529B\u3002"
          }), "\n", jsx(_components.li, {
            children: "\u4E0D\u652F\u6301\u5916\u952E\u7EA6\u675F\uFF0C\u9700\u8981\u5728\u5E94\u7528\u5C42\u8FDB\u884C\u5904\u7406\u3002"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsxs(_components.h4, {
      id: "422-\u4F7F\u7528\u573A\u666F\u4E0E\u6700\u4F73\u5B9E\u8DF5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#422-\u4F7F\u7528\u573A\u666F\u4E0E\u6700\u4F73\u5B9E\u8DF5",
        children: "#"
      }), "4.2.2 \u4F7F\u7528\u573A\u666F\u4E0E\u6700\u4F73\u5B9E\u8DF5"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\u9009\u62E9InnoDB\uFF1A", "\n", jsxs(_components.ul, {
          children: ["\n", jsx(_components.li, {
            children: "\u9700\u8981\u652F\u6301\u4E8B\u52A1"
          }), "\n", jsx(_components.li, {
            children: "\u9700\u8981\u8F83\u9AD8\u7684\u5E76\u53D1\u6027\u80FD"
          }), "\n", jsx(_components.li, {
            children: "\u9700\u8981\u6570\u636E\u5B8C\u6574\u6027\u548C\u5B89\u5168\u6027"
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\u9009\u62E9MyISAM\uFF1A", "\n", jsxs(_components.ul, {
          children: ["\n", jsx(_components.li, {
            children: "\u4EC5\u8FDB\u884C\u7B80\u5355\u7684\u67E5\u8BE2\u64CD\u4F5C"
          }), "\n", jsx(_components.li, {
            children: "\u5BF9\u4E8B\u52A1\u4E00\u81F4\u6027\u8981\u6C42\u4E0D\u9AD8"
          }), "\n", jsx(_components.li, {
            children: "\u8868\u4E2D\u7684\u8BFB\u64CD\u4F5C\u8FDC\u8FDC\u591A\u4E8E\u5199\u64CD\u4F5C"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u7EFC\u5408\u5206\u6790\u4E1A\u52A1\u9700\u6C42\u548C\u5B58\u50A8\u5F15\u64CE\u7684\u7279\u6027\uFF0C\u9009\u62E9\u5408\u9002\u7684\u5B58\u50A8\u5F15\u64CE\u53EF\u4EE5\u63D0\u5347\u6570\u636E\u5E93\u7684\u6027\u80FD\u548C\u7A33\u5B9A\u6027\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "43-\u4F18\u5316\u7D22\u5F15\u8BBE\u8BA1",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#43-\u4F18\u5316\u7D22\u5F15\u8BBE\u8BA1",
        children: "#"
      }), "4.3 \u4F18\u5316\u7D22\u5F15\u8BBE\u8BA1"]
    }), "\n", jsx(_components.p, {
      children: "\u826F\u597D\u7684\u7D22\u5F15\u8BBE\u8BA1\u53EF\u4EE5\u663E\u8457\u63D0\u5347\u6570\u636E\u5E93\u7684\u67E5\u8BE2\u6027\u80FD\u3002\u5728\u521B\u5EFA\u7D22\u5F15\u65F6\uFF0C\u9700\u8981\u8003\u8651\u67E5\u8BE2\u9700\u6C42\u3001\u6570\u636E\u91CF\u3001\u6570\u636E\u7C7B\u578B\u7B49\u56E0\u7D20\uFF0C\u4E0B\u9762\u4ECB\u7ECD\u5982\u4F55\u8FDB\u884C\u7D22\u5F15\u4F18\u5316\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "431-\u5206\u6790\u67E5\u8BE2\u9700\u6C42\u786E\u5B9A\u7D22\u5F15",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#431-\u5206\u6790\u67E5\u8BE2\u9700\u6C42\u786E\u5B9A\u7D22\u5F15",
        children: "#"
      }), "4.3.1 \u5206\u6790\u67E5\u8BE2\u9700\u6C42\u786E\u5B9A\u7D22\u5F15"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u8BBE\u8BA1\u7D22\u5F15\u4E4B\u524D\uFF0C\u9700\u8981\u5206\u6790\u6570\u636E\u5E93\u7684\u67E5\u8BE2\u9700\u6C42\uFF0C\u4E86\u89E3\u5E38\u7528\u7684\u67E5\u8BE2\u8BED\u53E5\u7C7B\u578B\u53CA\u9891\u7387\u3002\u6839\u636E\u7ECF\u5E38\u4F7F\u7528\u7684\u5B57\u6BB5\u8FDB\u884C\u7D22\u5F15\u8BBE\u8BA1\uFF0C\u63D0\u9AD8\u67E5\u8BE2\u6548\u7387\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "432-\u521B\u5EFA\u548C\u4F18\u5316\u7D22\u5F15\u7684\u6280\u5DE7\u4E0E\u5DE5\u5177\u63A8\u8350",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#432-\u521B\u5EFA\u548C\u4F18\u5316\u7D22\u5F15\u7684\u6280\u5DE7\u4E0E\u5DE5\u5177\u63A8\u8350",
        children: "#"
      }), "4.3.2 \u521B\u5EFA\u548C\u4F18\u5316\u7D22\u5F15\u7684\u6280\u5DE7\u4E0E\u5DE5\u5177\u63A8\u8350"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\u4F7F\u7528", jsx(_components.code, {
          children: "EXPLAIN"
        }), "\u8BED\u53E5\u5206\u6790SQL\u8BED\u53E5\u7684\u6267\u884C\u8BA1\u5212\uFF0C\u67E5\u770B\u662F\u5426\u4F7F\u7528\u4E86\u7D22\u5F15\uFF1B"]
      }), "\n", jsx(_components.li, {
        children: "\u5728\u9891\u7E41\u67E5\u8BE2\u7684\u5217\u4E0A\u521B\u5EFA\u7D22\u5F15\uFF0C\u4F46\u4E0D\u8981\u8FC7\u5EA6\u7D22\u5F15\u5BFC\u81F4\u6027\u80FD\u4E0B\u964D\uFF1B"
      }), "\n", jsx(_components.li, {
        children: "\u5B9A\u671F\u4F18\u5316\u7D22\u5F15\uFF0C\u6E05\u7406\u8FC7\u671F\u6216\u5197\u4F59\u7684\u7D22\u5F15\uFF0C\u4FDD\u6301\u6570\u636E\u5E93\u6027\u80FD\u7A33\u5B9A\u3002"
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u7ED3\u5408\u4EE5\u4E0A\u4F18\u5316\u7B56\u7565\uFF0C\u53EF\u4EE5\u6709\u6548\u63D0\u5347\u6570\u636E\u5E93\u7684\u67E5\u8BE2\u6027\u80FD\u548C\u54CD\u5E94\u901F\u5EA6\uFF0C\u4ECE\u800C\u6539\u5584\u7528\u6237\u4F53\u9A8C\u548C\u7CFB\u7EDF\u7A33\u5B9A\u6027\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "5-mysql\u6570\u636E\u5E93\u521B\u5EFA\u6700\u4F73\u5B9E\u8DF5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#5-mysql\u6570\u636E\u5E93\u521B\u5EFA\u6700\u4F73\u5B9E\u8DF5",
        children: "#"
      }), "5. MySQL\u6570\u636E\u5E93\u521B\u5EFA\u6700\u4F73\u5B9E\u8DF5"]
    }), "\n", jsxs(_components.h3, {
      id: "51-\u6570\u636E\u5E93\u5907\u4EFD\u4E0E\u6062\u590D\u7B56\u7565",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#51-\u6570\u636E\u5E93\u5907\u4EFD\u4E0E\u6062\u590D\u7B56\u7565",
        children: "#"
      }), "5.1 \u6570\u636E\u5E93\u5907\u4EFD\u4E0E\u6062\u590D\u7B56\u7565"]
    }), "\n", jsx(_components.p, {
      children: "\u6570\u636E\u662F\u4EFB\u4F55\u7EC4\u7EC7\u7684\u6838\u5FC3\u8D44\u4EA7\uFF0C\u5728\u6570\u636E\u5E93\u7BA1\u7406\u4E2D\uFF0C\u5907\u4EFD\u548C\u6062\u590D\u7B56\u7565\u81F3\u5173\u91CD\u8981\u3002\u6B63\u786E\u7684\u5907\u4EFD\u53EF\u4EE5\u6709\u6548\u907F\u514D\u6570\u636E\u4E22\u5931\uFF0C\u5E76\u4E14\u5728\u610F\u5916\u60C5\u51B5\u4E0B\u63D0\u4F9B\u6570\u636E\u6062\u590D\u7684\u53EF\u80FD\u6027\u3002\u4E0B\u9762\u5C06\u4ECB\u7ECD\u6570\u636E\u5E93\u5907\u4EFD\u4E0E\u6062\u590D\u7684\u6700\u4F73\u5B9E\u8DF5\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "511-\u5B9A\u671F\u5907\u4EFD\u6570\u636E",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#511-\u5B9A\u671F\u5907\u4EFD\u6570\u636E",
        children: "#"
      }), "5.1.1 \u5B9A\u671F\u5907\u4EFD\u6570\u636E"]
    }), "\n", jsxs(_components.p, {
      children: ["\u6570\u636E\u5E93\u5907\u4EFD\u662F\u4FDD\u8BC1\u6570\u636E\u5B89\u5168\u7684\u91CD\u8981\u624B\u6BB5\uFF0C\u5B9A\u671F\u5907\u4EFD\u53EF\u4EE5\u9632\u6B62\u610F\u5916\u6570\u636E\u4E22\u5931\u3002\u5728MySQL\u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528", jsx(_components.code, {
        children: "mysqldump"
      }), "\u547D\u4EE4\u8FDB\u884C\u5907\u4EFD\u3002\u4EE5\u4E0B\u4E3A\u5907\u4EFD\u793A\u4F8B\uFF1A"]
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
              children: "u username "
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
          })]
        })
      })]
    }), "\n", jsxs(_components.p, {
      children: ["\u4E0A\u8FF0\u547D\u4EE4\u5C06\u6570\u636E\u5E93", jsx(_components.code, {
        children: "dbname"
      }), "\u5907\u4EFD\u5230\u540D\u4E3A", jsx(_components.code, {
        children: "backup.sql"
      }), "\u7684\u6587\u4EF6\u4E2D\u3002\u5B9A\u671F\u6267\u884C\u8BE5\u547D\u4EE4\uFF0C\u53EF\u4EE5\u786E\u4FDD\u6570\u636E\u5B9A\u671F\u5907\u4EFD\u3002"]
    }), "\n", jsxs(_components.h4, {
      id: "512-\u6062\u590D\u6570\u636E\u5E93\u7684\u65B9\u6CD5\u4E0E\u6CE8\u610F\u4E8B\u9879",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#512-\u6062\u590D\u6570\u636E\u5E93\u7684\u65B9\u6CD5\u4E0E\u6CE8\u610F\u4E8B\u9879",
        children: "#"
      }), "5.1.2 \u6062\u590D\u6570\u636E\u5E93\u7684\u65B9\u6CD5\u4E0E\u6CE8\u610F\u4E8B\u9879"]
    }), "\n", jsx(_components.p, {
      children: "\u5F53\u6570\u636E\u5E93\u51FA\u73B0\u95EE\u9898\u65F6\uFF0C\u53CA\u65F6\u6062\u590D\u6570\u636E\u81F3\u5173\u91CD\u8981\u3002\u4F7F\u7528\u5907\u4EFD\u6587\u4EF6\u53EF\u4EE5\u5728\u6570\u636E\u5E93\u635F\u574F\u6216\u6570\u636E\u4E22\u5931\u65F6\u8FDB\u884C\u6570\u636E\u6062\u590D\u3002\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u53EF\u4EE5\u6062\u590D\u6570\u636E\uFF1A"
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
              children: "u username "
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
    }), "\n", jsx(_components.p, {
      children: "\u5728\u6062\u590D\u8FC7\u7A0B\u4E2D\uFF0C\u9700\u8981\u6CE8\u610F\u4EE5\u4E0B\u4E8B\u9879\uFF1A"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "\u786E\u4FDD\u5907\u4EFD\u6587\u4EF6\u5B8C\u6574\u4E14\u65E0\u635F\u574F\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u5728\u6062\u590D\u6570\u636E\u4E4B\u524D\uFF0C\u6700\u597D\u5148\u5907\u4EFD\u5F53\u524D\u7684\u6570\u636E\u5E93\uFF0C\u4EE5\u514D\u64CD\u4F5C\u5931\u8BEF\u5BFC\u81F4\u6570\u636E\u8FDB\u4E00\u6B65\u4E22\u5931\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u6062\u590D\u6570\u636E\u5E93\u65F6\uFF0C\u786E\u4FDD\u6570\u636E\u7ED3\u6784\u548C\u5907\u4EFD\u6587\u4EF6\u5339\u914D\uFF0C\u907F\u514D\u51FA\u73B0\u6570\u636E\u683C\u5F0F\u4E0D\u517C\u5BB9\u7B49\u95EE\u9898\u3002"
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "52-\u6027\u80FD\u4F18\u5316\u6280\u5DE7",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#52-\u6027\u80FD\u4F18\u5316\u6280\u5DE7",
        children: "#"
      }), "5.2 \u6027\u80FD\u4F18\u5316\u6280\u5DE7"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u5B9E\u9645\u4F7F\u7528MySQL\u6570\u636E\u5E93\u65F6\uFF0C\u4E3A\u4E86\u63D0\u9AD8\u67E5\u8BE2\u548C\u64CD\u4F5C\u6548\u7387\uFF0C\u9700\u8981\u8FDB\u884C\u6027\u80FD\u4F18\u5316\u3002\u4E0B\u9762\u5C06\u4ECB\u7ECD\u4E00\u4E9B\u5E38\u7528\u7684\u6027\u80FD\u4F18\u5316\u6280\u5DE7\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "521-\u67E5\u8BE2\u4F18\u5316",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#521-\u67E5\u8BE2\u4F18\u5316",
        children: "#"
      }), "5.2.1 \u67E5\u8BE2\u4F18\u5316"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "\u5408\u7406\u4F7F\u7528\u7D22\u5F15\uFF1A\u4E3A\u7ECF\u5E38\u9700\u8981\u67E5\u8BE2\u7684\u5217\u6DFB\u52A0\u7D22\u5F15\uFF0C\u52A0\u5FEB\u67E5\u8BE2\u901F\u5EA6\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u907F\u514D\u5168\u8868\u626B\u63CF\uFF1A\u5C3D\u91CF\u907F\u514D\u5728\u5927\u8868\u4E0A\u8FDB\u884C\u5168\u8868\u626B\u63CF\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4F18\u5316\u67E5\u8BE2\u8BED\u53E5\u6216\u6DFB\u52A0\u7D22\u5F15\u6765\u907F\u514D\u5168\u8868\u626B\u63CF\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u4F18\u5316\u590D\u6742\u67E5\u8BE2\uFF1A\u5C3D\u91CF\u7B80\u5316\u590D\u6742\u67E5\u8BE2\u8BED\u53E5\uFF0C\u51CF\u5C11\u67E5\u8BE2\u65F6\u95F4\u3002"
      }), "\n"]
    }), "\n", jsxs(_components.h4, {
      id: "522-\u7D22\u5F15\u4F18\u5316",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#522-\u7D22\u5F15\u4F18\u5316",
        children: "#"
      }), "5.2.2 \u7D22\u5F15\u4F18\u5316"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "\u8003\u8651\u4F7F\u7528\u8054\u5408\u7D22\u5F15\uFF1A\u6839\u636E\u67E5\u8BE2\u9700\u6C42\uFF0C\u5408\u7406\u8BBE\u7F6E\u8054\u5408\u7D22\u5F15\uFF0C\u63D0\u9AD8\u591A\u5217\u6761\u4EF6\u67E5\u8BE2\u6548\u7387\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u5B9A\u671F\u68C0\u67E5\u7D22\u5F15\uFF1A\u5B9A\u671F\u68C0\u67E5\u7D22\u5F15\u7684\u4F7F\u7528\u60C5\u51B5\uFF0C\u5220\u9664\u65E0\u7528\u7684\u7D22\u5F15\uFF0C\u4F18\u5316\u67E5\u8BE2\u6027\u80FD\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u8003\u8651\u4F7F\u7528\u8986\u76D6\u7D22\u5F15\uFF1A\u8986\u76D6\u7D22\u5F15\u53EF\u4EE5\u907F\u514D\u8BBF\u95EE\u8868\uFF0C\u63D0\u9AD8\u67E5\u8BE2\u6548\u7387\u3002"
      }), "\n"]
    }), "\n", jsxs(_components.h4, {
      id: "523-\u914D\u7F6E\u4F18\u5316",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#523-\u914D\u7F6E\u4F18\u5316",
        children: "#"
      }), "5.2.3 \u914D\u7F6E\u4F18\u5316"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "\u8C03\u6574\u7F13\u51B2\u533A\u5927\u5C0F\uFF1A\u6839\u636E\u6570\u636E\u5E93\u8D1F\u8F7D\u60C5\u51B5\uFF0C\u8C03\u6574\u7F13\u51B2\u533A\u5927\u5C0F\uFF0C\u63D0\u9AD8\u6570\u636E\u5E93\u6027\u80FD\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u5408\u7406\u914D\u7F6E\u5E76\u53D1\u8FDE\u63A5\u6570\uFF1A\u5408\u7406\u914D\u7F6E\u5141\u8BB8\u7684\u5E76\u53D1\u8FDE\u63A5\u6570\uFF0C\u907F\u514D\u6570\u636E\u5E93\u8FDE\u63A5\u8FC7\u591A\u5BFC\u81F4\u6027\u80FD\u4E0B\u964D\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u8C03\u6574\u65E5\u5FD7\u8BB0\u5F55\u7EA7\u522B\uFF1A\u6839\u636E\u9700\u6C42\u8C03\u6574\u65E5\u5FD7\u8BB0\u5F55\u7EA7\u522B\uFF0C\u907F\u514D\u8FC7\u591A\u65E5\u5FD7\u8BB0\u5F55\u5F71\u54CD\u6027\u80FD\u3002"
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u4EE5\u4E0A\u6027\u80FD\u4F18\u5316\u6280\u5DE7\uFF0C\u53EF\u4EE5\u6709\u6548\u63D0\u5347MySQL\u6570\u636E\u5E93\u7684\u6027\u80FD\uFF0C\u5E76\u786E\u4FDD\u6570\u636E\u5E93\u7684\u9AD8\u6548\u8FD0\u884C\u3002"
    }), "\n", jsxs(_components.h3, {
      id: "\u603B\u7ED3",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u603B\u7ED3",
        children: "#"
      }), "\u603B\u7ED3"]
    }), "\n", jsx(_components.p, {
      children: "\u672C\u7AE0\u4ECB\u7ECD\u4E86MySQL\u6570\u636E\u5E93\u521B\u5EFA\u6700\u4F73\u5B9E\u8DF5\u4E2D\u7684\u6570\u636E\u5E93\u5907\u4EFD\u4E0E\u6062\u590D\u7B56\u7565\u4EE5\u53CA\u6027\u80FD\u4F18\u5316\u6280\u5DE7\u3002\u901A\u8FC7\u5B9A\u671F\u5907\u4EFD\u6570\u636E\u548C\u6B63\u786E\u6062\u590D\u6570\u636E\u5E93\uFF0C\u53EF\u4EE5\u4FDD\u969C\u6570\u636E\u5B89\u5168\uFF1B\u901A\u8FC7\u67E5\u8BE2\u4F18\u5316\u3001\u7D22\u5F15\u4F18\u5316\u548C\u914D\u7F6E\u4F18\u5316\uFF0C\u53EF\u4EE5\u63D0\u9AD8\u6570\u636E\u5E93\u6027\u80FD\u3002\u5408\u7406\u5E94\u7528\u8FD9\u4E9B\u6700\u4F73\u5B9E\u8DF5\uFF0C\u80FD\u591F\u4F7FMySQL\u6570\u636E\u5E93\u8FD0\u884C\u66F4\u52A0\u7A33\u5B9A\u9AD8\u6548\u3002"
    }), "\n", jsxs(_components.h1, {
      id: "6-\u5E94\u5BF9\u672A\u6765mysql\u6570\u636E\u5E93\u521B\u5EFA\u6311\u6218",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#6-\u5E94\u5BF9\u672A\u6765mysql\u6570\u636E\u5E93\u521B\u5EFA\u6311\u6218",
        children: "#"
      }), "6. \u5E94\u5BF9\u672A\u6765MySQL\u6570\u636E\u5E93\u521B\u5EFA\u6311\u6218"]
    }), "\n", jsxs(_components.h3, {
      id: "61-\u9762\u5BF9\u6570\u636E\u91CF\u589E\u957F\u7684\u5E94\u5BF9\u7B56\u7565",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#61-\u9762\u5BF9\u6570\u636E\u91CF\u589E\u957F\u7684\u5E94\u5BF9\u7B56\u7565",
        children: "#"
      }), "6.1 \u9762\u5BF9\u6570\u636E\u91CF\u589E\u957F\u7684\u5E94\u5BF9\u7B56\u7565"]
    }), "\n", jsx(_components.p, {
      children: "\u968F\u7740\u4E1A\u52A1\u7684\u53D1\u5C55\uFF0C\u6570\u636E\u5E93\u4E2D\u7684\u6570\u636E\u91CF\u4F1A\u9010\u6E10\u589E\u957F\uFF0C\u5982\u679C\u4E0D\u53CA\u65F6\u505A\u597D\u5E94\u5BF9\u7B56\u7565\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u6570\u636E\u5E93\u6027\u80FD\u4E0B\u964D\uFF0C\u751A\u81F3\u5D29\u6E83\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u9700\u8981\u8003\u8651\u91C7\u53D6\u4E00\u4E9B\u89E3\u51B3\u65B9\u6848\u6765\u6709\u6548\u5904\u7406\u6570\u636E\u91CF\u7684\u589E\u957F\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "611-\u5206\u5E93\u5206\u8868\u89E3\u51B3\u65B9\u6848",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#611-\u5206\u5E93\u5206\u8868\u89E3\u51B3\u65B9\u6848",
        children: "#"
      }), "6.1.1 \u5206\u5E93\u5206\u8868\u89E3\u51B3\u65B9\u6848"]
    }), "\n", jsx(_components.p, {
      children: "\u5206\u5E93\u5206\u8868\u662F\u4E00\u79CD\u5E38\u89C1\u7684\u6570\u636E\u5E93\u6C34\u5E73\u62C6\u5206\u65B9\u6CD5\uFF0C\u901A\u8FC7\u62C6\u5206\u6570\u636E\u5E93\u4E2D\u7684\u6570\u636E\u8868\uFF0C\u5C06\u6570\u636E\u5206\u6563\u5B58\u50A8\u5728\u4E0D\u540C\u7684\u6570\u636E\u5E93\u6216\u6570\u636E\u8868\u4E2D\uFF0C\u4EE5\u51CF\u8F7B\u5355\u4E00\u6570\u636E\u5E93\u8D1F\u62C5\uFF0C\u63D0\u9AD8\u6570\u636E\u5E93\u6027\u80FD\u3002\u5728MySQL\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5206\u5E93\u5206\u8868\u6765\u5E94\u5BF9\u6570\u636E\u91CF\u589E\u957F\u7684\u6311\u6218\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u4E0B\u9762\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u793A\u4F8B\uFF0C\u6F14\u793A\u5982\u4F55\u4F7F\u7528\u5206\u5E93\u5206\u8868\u7B56\u7565\u5E94\u5BF9\u6570\u636E\u91CF\u589E\u957F\uFF1A"
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
              children: "-- \u521B\u5EFA\u5206\u8868"
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
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "`"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "order_2022"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "`"
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
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "`"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "id"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "`"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "int"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "11"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "NOT"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "NULL"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " AUTO_INCREMENT,"
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
              children: "`"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "order_name"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "`"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "varchar"
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
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "DEFAULT"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "NULL"
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
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "`"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "create_time"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "`"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "datetime"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "DEFAULT"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "NULL"
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
              children: "  "
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
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "`"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "id"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "`"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") ENGINE"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "InnoDB "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "DEFAULT"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " CHARSET"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "utf8mb4;"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "-- \u5C06\u8BA2\u5355\u6570\u636E\u6309\u5E74\u4EFD\u62C6\u5206\u5B58\u50A8"
            })
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
              children: " order_2022 (order_name, create_time) "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "SELECT"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " order_name, create_time "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "FROM"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " orders "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "WHERE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "YEAR"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "(create_time) "
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
              children: "2022"
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
      id: "612-\u6570\u636E\u5E93\u96C6\u7FA4\u642D\u5EFA",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#612-\u6570\u636E\u5E93\u96C6\u7FA4\u642D\u5EFA",
        children: "#"
      }), "6.1.2 \u6570\u636E\u5E93\u96C6\u7FA4\u642D\u5EFA"]
    }), "\n", jsx(_components.p, {
      children: "\u6570\u636E\u5E93\u96C6\u7FA4\u662F\u901A\u8FC7\u5C06\u591A\u4E2A\u6570\u636E\u5E93\u670D\u52A1\u5668\u7EC4\u6210\u4E00\u4E2A\u96C6\u7FA4\uFF0C\u5B9E\u73B0\u6570\u636E\u7684\u5206\u5E03\u5F0F\u5B58\u50A8\u548C\u5904\u7406\uFF0C\u63D0\u9AD8\u6570\u636E\u5E93\u7684\u53EF\u7528\u6027\u548C\u6269\u5C55\u6027\u3002MySQL\u6570\u636E\u5E93\u4E5F\u652F\u6301\u96C6\u7FA4\u90E8\u7F72\uFF0C\u53EF\u4EE5\u901A\u8FC7\u642D\u5EFA\u6570\u636E\u5E93\u96C6\u7FA4\u6765\u5206\u62C5\u6570\u636E\u5B58\u50A8\u548C\u67E5\u8BE2\u538B\u529B\uFF0C\u5E94\u5BF9\u6570\u636E\u91CF\u589E\u957F\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u4E0B\u9762\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u793A\u4F8B\uFF0C\u6F14\u793A\u5982\u4F55\u4F7F\u7528\u6570\u636E\u5E93\u96C6\u7FA4\u5E94\u5BF9\u6570\u636E\u91CF\u589E\u957F\uFF1A"
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
              children: "-- \u521B\u5EFA\u96C6\u7FA4"
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
              children: " CLUSTER my_cluster"
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
              children: "ON"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " db1, db2, db3;"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "-- \u67E5\u8BE2\u6570\u636E"
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
              children: " my_cluster.orders "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "WHERE"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " order_date "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "BETWEEN"
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
              children: "2022-01-01"
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
              children: "AND"
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
              children: "2022-12-31"
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
    }), "\n", jsxs(_components.h3, {
      id: "62-\u6570\u636E\u5B89\u5168\u4FDD\u969C",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#62-\u6570\u636E\u5B89\u5168\u4FDD\u969C",
        children: "#"
      }), "6.2 \u6570\u636E\u5B89\u5168\u4FDD\u969C"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u9762\u5BF9MySQL\u6570\u636E\u5E93\u521B\u5EFA\u7684\u6311\u6218\u65F6\uFF0C\u6570\u636E\u5B89\u5168\u662F\u81F3\u5173\u91CD\u8981\u7684\u4E00\u73AF\u3002\u4E0D\u8BBA\u662F\u6570\u636E\u5907\u4EFD\uFF0C\u8FD8\u662F\u5E94\u5BF9\u6F5C\u5728\u7684\u5B89\u5168\u6F0F\u6D1E\uFF0C\u90FD\u9700\u8981\u6709\u76F8\u5E94\u7684\u63AA\u65BD\u6765\u4FDD\u969C\u6570\u636E\u7684\u5B89\u5168\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "621-\u6570\u636E\u5907\u4EFD\u4E0E\u707E\u96BE\u6062\u590D\u9884\u6848",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#621-\u6570\u636E\u5907\u4EFD\u4E0E\u707E\u96BE\u6062\u590D\u9884\u6848",
        children: "#"
      }), "6.2.1 \u6570\u636E\u5907\u4EFD\u4E0E\u707E\u96BE\u6062\u590D\u9884\u6848"]
    }), "\n", jsx(_components.p, {
      children: "\u5B9A\u671F\u5907\u4EFD\u6570\u636E\u662F\u4FDD\u969C\u6570\u636E\u5B89\u5168\u7684\u6709\u6548\u9014\u5F84\uFF0C\u53EF\u4EE5\u5728\u6570\u636E\u610F\u5916\u4E22\u5931\u6216\u635F\u574F\u65F6\uFF0C\u5FEB\u901F\u6062\u590D\u6570\u636E\u3002\u540C\u65F6\uFF0C\u5236\u5B9A\u707E\u96BE\u6062\u590D\u9884\u6848\u4E5F\u662F\u81F3\u5173\u91CD\u8981\u7684\uFF0C\u6709\u9488\u5BF9\u6027\u5730\u5E94\u5BF9\u5404\u79CD\u6570\u636E\u5E93\u707E\u96BE\u4E8B\u4EF6\uFF0C\u4FDD\u969C\u6570\u636E\u7684\u5B8C\u6574\u6027\u548C\u53EF\u7528\u6027\u3002"
    }), "\n", jsxs(_components.h4, {
      id: "622-\u5B89\u5168\u6F0F\u6D1E\u7684\u5E94\u5BF9\u63AA\u65BD",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#622-\u5B89\u5168\u6F0F\u6D1E\u7684\u5E94\u5BF9\u63AA\u65BD",
        children: "#"
      }), "6.2.2 \u5B89\u5168\u6F0F\u6D1E\u7684\u5E94\u5BF9\u63AA\u65BD"]
    }), "\n", jsx(_components.p, {
      children: "\u968F\u7740\u4E92\u8054\u7F51\u6280\u672F\u7684\u4E0D\u65AD\u53D1\u5C55\uFF0C\u6570\u636E\u5E93\u5B89\u5168\u9762\u4E34\u66F4\u591A\u7684\u6311\u6218\uFF0C\u5305\u62EC\u9ED1\u5BA2\u653B\u51FB\u3001\u6570\u636E\u6CC4\u9732\u7B49\u3002\u53CA\u65F6\u4FEE\u8865\u6570\u636E\u5E93\u4E2D\u7684\u5B89\u5168\u6F0F\u6D1E\uFF0C\u52A0\u5F3A\u6570\u636E\u5E93\u6743\u9650\u7BA1\u7406\uFF0C\u5BF9\u654F\u611F\u6570\u636E\u8FDB\u884C\u52A0\u5BC6\u5904\u7406\uFF0C\u90FD\u662F\u63D0\u9AD8\u6570\u636E\u5B89\u5168\u7684\u6709\u6548\u624B\u6BB5\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u5728\u8FD9\u4E00\u7AE0\u8282\uFF0C\u6211\u4EEC\u5C06\u91CD\u70B9\u5173\u6CE8\u5982\u4F55\u9762\u5BF9MySQL\u6570\u636E\u5E93\u7684\u672A\u6765\u6311\u6218\uFF0C\u4ECE\u6570\u636E\u91CF\u589E\u957F\u7684\u5904\u7406\u7B56\u7565\u5230\u6570\u636E\u5B89\u5168\u4FDD\u969C\u63AA\u65BD\uFF0C\u4E3A\u60A8\u63D0\u4F9B\u5168\u9762\u7684\u89E3\u51B3\u65B9\u6848\u548C\u5B9E\u7528\u5EFA\u8BAE\u3002"
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

import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import Counter from "./Counter.9240fc96.js";
import "react";
const frontmatter = void 0;
const toc = [];
const title = "\u6D4B\u8BD5mdx\u4E2D\u5BFC\u5165\u7EC4\u4EF6\u6253\u5305";
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a"
  }, props.components);
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "\u6D4B\u8BD5mdx\u4E2D\u5BFC\u5165\u7EC4\u4EF6\u6253\u5305",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u6D4B\u8BD5mdx\u4E2D\u5BFC\u5165\u7EC4\u4EF6\u6253\u5305",
        children: "#"
      }), "\u6D4B\u8BD5mdx\u4E2D\u5BFC\u5165\u7EC4\u4EF6\u6253\u5305"]
    }), "\n", "\n", jsx(Counter, {
      __island: true
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

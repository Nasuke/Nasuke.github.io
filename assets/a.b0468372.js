import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import Game from "./play.938f1e11.js";
import "react";
const frontmatter = void 0;
const toc = [{
  "id": "no",
  "text": "no",
  "depth": 2
}, {
  "id": "\u7ED9\u5927\u5BB6\u4ECB\u7ECD\u4E00\u4E2A\u4E95\u5B57\u68CB\u6E38\u620F",
  "text": "\u7ED9\u5927\u5BB6\u4ECB\u7ECD\u4E00\u4E2A\u4E95\u5B57\u68CB\u6E38\u620F",
  "depth": 2
}];
function _createMdxContent(props) {
  const _components = Object.assign({
    h2: "h2",
    a: "a"
  }, props.components);
  return jsxs(Fragment, {
    children: [jsxs(_components.h2, {
      id: "no",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#no",
        children: "#"
      }), "no"]
    }), "\n", jsxs(_components.h2, {
      id: "\u7ED9\u5927\u5BB6\u4ECB\u7ECD\u4E00\u4E2A\u4E95\u5B57\u68CB\u6E38\u620F",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u7ED9\u5927\u5BB6\u4ECB\u7ECD\u4E00\u4E2A\u4E95\u5B57\u68CB\u6E38\u620F",
        children: "#"
      }), "\u7ED9\u5927\u5BB6\u4ECB\u7ECD\u4E00\u4E2A\u4E95\u5B57\u68CB\u6E38\u620F"]
    }), "\n", "\n", jsx(Game, {
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
  toc
};

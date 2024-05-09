import { jsx, jsxs, Fragment } from "react/jsx-runtime";
const frontmatter = void 0;
const toc = [{
  "id": "haha",
  "text": "haha",
  "depth": 2
}];
const title = "h";
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    h2: "h2"
  }, props.components);
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "h",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#h",
        children: "#"
      }), "h"]
    }), "\n", jsxs(_components.h2, {
      id: "haha",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#haha",
        children: "#"
      }), "haha"]
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

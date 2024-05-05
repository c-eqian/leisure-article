/**
 * 处理md-editor-v3 a标签没有target属性问题
 * @param md
 * @constructor
 */
export const useTargetBlankExtension = (md:any) => {
  const defaultRender =
        md.renderer.rules.link_open ||
        function (tokens:any, idx:any, options:any, _env:any, self:any) {
          return self.renderToken(tokens, idx, options)
        }

  md.renderer.rules.link_open = function (tokens:any, idx:any, options:any, env:any, self:any) {
    const aIndex = tokens[idx].attrIndex('target')

    if (aIndex < 0) {
      tokens[idx].attrPush(['target', '_blank'])
    } else {
      tokens[idx].attrs[aIndex][1] = '_blank'
    }
    return defaultRender(tokens, idx, options, env, self)
  }
}

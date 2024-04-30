/**
 * 获取随机颜色
 * @param colors
 */
export const useRandomColor = (colors: string[] = []) => {
  const _colors = colors.length > 0 ? colors : ['#909399', '#F56C6C', '#E6A23C', '#67C23A']
  const randomIndex = Math.floor(Math.random() * _colors.length)
  return _colors[randomIndex]
}

import { useToFixedFix } from '@eqian/utils-vue'
const defaultColors = [
  '#909399',
  '#F56C6C',
  '#E6A23C',
  '#67C23A',
  '#f1b46f',
  '#869a87',
  '#e97370',
  '#f39f64',
  '#4c96d9',
  '#ec8364',
  '#f39f64',
  '#73ca87'
]
/**
 * 获取随机颜色
 * @param colors
 */
export const useRandomColor = (colors: string[] = []) => {
  const _colors = colors.length > 0 ? colors : defaultColors
  const randomIndex = Math.floor(Math.random() * _colors.length)
  return _colors[randomIndex]
}
const regexp = /(?:\.0*|(\.\d+?)0+)$/
/**
 * 统计字数和预计阅读时间
 * @param content
 */
export const useCalculateReadability = (content: string) => {
  // 统计字数
  const words = content.split(/\s+/).filter(word => word.length > 0)
  const wordCount = words.length
  // 使用 k 单位转换字数
  let formattedWordCount = ''
  if (wordCount >= 1000) {
    const kCount = Math.ceil((wordCount / 1000)).toFixed(3)
    formattedWordCount = `${kCount.replace(regexp, '$1')}k`
  } else {
    formattedWordCount = wordCount.toString()
  }
  // 预计阅读时间
  const averageReadingSpeed = 200 // 每分钟阅读200个字
  const readingTimeMinutes = Math.ceil(wordCount / averageReadingSpeed)
  // 将分钟转换为可读的格式（例如：x 分钟）
  const readingTime = readingTimeMinutes > 1 ? `${readingTimeMinutes} 分钟` : '1 分钟'
  return { wordCount: formattedWordCount, readingTime }
}
/**
 * 检验对象是否为空
 * @param obj
 */
export const useIsEmptyObject = (obj: Object | undefined) => {
  if (!obj) {
    return true
  }
  return Object.keys(obj).length === 0
}
/**
 *
 * @param count
 */
export const useCountTransform = (count: number) => {
  const _count = +count
  if (_count >= 1000 && _count < 10000) {
    const kCount = Math.ceil((_count / 1000)).toFixed(2)
    return `${kCount.replace(regexp, '$1')} k`
  }
  if (_count >= 10000) {
    const tCount = useToFixedFix(_count / 10000, 2) + ''
    return `${tCount.replace(regexp, '$1')} w`
  }
  return _count
}
// 检测是否为移动端
export const isMobile = useMediaQuery(
  '(max-width: 767px) and (orientation: portrait), ' +
    '(max-width: 1023px) and (orientation: landscape)'
)

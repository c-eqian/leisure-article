import { isEmpty } from '@eqian/utils-vue'
import type { INoteItem } from '~/api/notes/type'

export const useTags = (data: INoteItem) => {
  if (isEmpty(data)) {
    return '-'
  }
  return data.category_tags?.map(item => item.tag_name)?.join('、')
}

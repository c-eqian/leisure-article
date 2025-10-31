import { useAsyncFetch } from "~~/api/server";
import { ref } from "vue";
import type { ICategoryTags } from "~~/api/category/type";

export const useCategoryTags = () => {
  const tagList = ref<ICategoryTags["tags"]>([]);
  const request = () => {
    useAsyncFetch("admin/category/tags").then((res) => {
      tagList.value = [
        {
          id: 0,
          tag_name: "全部",
        },
      ].concat(
        (res.data as ICategoryTags[])
          .map((item) => {
            return item.tags;
          })
          .flat(1)
          .sort(() => Math.random() - 0.5),
      );
    });
  };
  request();
  return {
    request,
    tagList,
  };
};

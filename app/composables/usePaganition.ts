import { ref } from "vue";

export const usePagination = <T extends Function, D = any>(api: T) => {
  const isLoading = ref<boolean>(false);
  const isFirstLoaded = ref<boolean>(true);
  const data = ref<D>({} as D);
  const isHasMore = ref<boolean>(false);
  const request = async (_params: any) => {
    try {
      isLoading.value = true;
      isFirstLoaded.value = _params.page_num === 1;
      const _res = await api(_params);
      const res = _res.data || _res;
      if (!data.value.list) {
        data.value.list = [];
      }
      if (_params.page_num === 1) {
        data.value = res;
      } else {
        data.value = {
          ...res,
          list: data.value.list.concat(res?.list),
        };
      }
      isHasMore.value = res?.is_more === 1;
    } catch (error) {
      data.value = {} as unknown as D;
    } finally {
      isLoading.value = false;
      isFirstLoaded.value = false;
    }
  };
  return {
    request: request as unknown as T,
    isLoading,
    isFirstLoaded,
    data,
    isHasMore,
  };
};

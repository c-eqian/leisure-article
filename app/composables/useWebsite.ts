import { ref } from "vue";
import { useWebsiteStore } from "~/composables/useStore";
import type { IWebsite } from "~~/api/system/type";

export const useWebsite = () => {
  const store = useWebsiteStore();
  const isLoading = ref(false);
  const websiteDataRef = ref<IWebsite.Data>({} as IWebsite.Data);
  const getWebsite = async (): Promise<IWebsite.Data> => {
    try {
      isLoading.value = true;
      websiteDataRef.value = await store.getWebsiteInfo();
      return websiteDataRef.value;
    } catch (error) {
      console.log(error);
      websiteDataRef.value = {} as unknown as IWebsite.Data;
      return websiteDataRef.value;
    } finally {
      isLoading.value = false;
    }
  };
  return {
    isLoading,
    getWebsite,
    websiteDataRef,
  };
};

import { computed, ref } from "vue";
import { useWebsiteStore } from "~/composables/useStore";
import type { IWebsite } from "~~/api/system/type";
import type { WallpaperConfig } from "~~/api/type";

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
  const wallpaperDataRef = computed(() => store.wallpaper);
  const setWallpaper = (wallpaper: WallpaperConfig) => {
    return store.setWallpaper(wallpaper);
  };
  return {
    isLoading,
    getWebsite,
    websiteDataRef,
    wallpaperDataRef,
    setWallpaper,
  };
};

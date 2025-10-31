import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { defineNuxtPlugin } from "#app";
import { usePinia } from "#imports";

export default defineNuxtPlugin(() => {
  const pinia = usePinia();
  if (pinia && typeof pinia.use === "function") {
    pinia.use(piniaPluginPersistedstate);
  }
});

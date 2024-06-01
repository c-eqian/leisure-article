import { Dialog } from 'quasar'
import CzAuthDialog from '~/components/CzAuthDialog.vue'
export const useLogin = (callbackFn?:()=> void) => {
  Dialog.create({
    component: CzAuthDialog
  }).onOk(() => {
    if (callbackFn) {
      callbackFn()
    }
    console.log('OK')
  }).onCancel(() => {
    console.log('Cancel')
  }).onDismiss(() => {
    console.log('Called on OK or Cancel')
  })
}

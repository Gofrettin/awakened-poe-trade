import { App } from 'vue'
import AppTitlebar from './AppTitlebar.vue'
import UiRadio from './UiRadio.vue'
import UiToggle from './UiToggle.vue'
import UiErrorBox from './UiErrorBox.vue'
import FullscreenImage from './FullscreenImage.vue'
import Popover from './Popover.vue'

export default function (app: App) {
  app.component(AppTitlebar.name, AppTitlebar)
  app.component(UiRadio.name, UiRadio)
  app.component(UiToggle.name, UiToggle)
  app.component(UiErrorBox.name, UiErrorBox)
  app.component(FullscreenImage.name, FullscreenImage)
  app.component(Popover.name, Popover)
}

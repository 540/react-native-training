import { characterModule } from 'core/character/_di/characterModule'
import { comicModule } from 'core/comic/_di/comicModule'
import { sharedModule } from 'core/shared/_di/sharedModule'
import { uiModule } from 'ui/_di/uiModule'

export const modules = {
  ...comicModule,
  ...characterModule,
  ...sharedModule,
  ...uiModule
}

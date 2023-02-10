import { characterModule } from 'core/character/_di/characterModule'
import { comicModule } from 'core/comic/_di/comicModule'
import { sharedModule } from 'core/shared/_di/sharedModule'

export const modules = {
  ...comicModule,
  ...characterModule,
  ...sharedModule
}

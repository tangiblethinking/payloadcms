import { NotFoundPage } from '@payloadcms/next/views'
import { importMap } from '../importMap'

const NotFound = () =>
  NotFoundPage({
    config: Promise.resolve(import('@/payload.config')),
    importMap,
  })

export default NotFound

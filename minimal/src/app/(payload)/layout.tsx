import { RootLayout } from '@payloadcms/next/layouts'
import { importMap } from './admin/importMap'
import config from '@payload-config'

type Args = {
  children: React.ReactNode
}

const Layout = ({ children }: Args) => (
  <RootLayout config={config} importMap={importMap}>
    {children}
  </RootLayout>
)

export default Layout

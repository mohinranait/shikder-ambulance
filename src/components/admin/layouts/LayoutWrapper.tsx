import { SidebarProvider } from '@/components/ui/sidebar'
import React, { Suspense } from 'react'
import MainLayout from './MainLayout'
import withAuth from '@/hooks/withAuth'

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={<div>Admin Layout suspent</div>}>
      <SidebarProvider>
        <MainLayout>{children}</MainLayout>
      </SidebarProvider>
    </Suspense>
  )
}

export default withAuth(LayoutWrapper)
import DashboardClient from '@/components/dashboard-client'
import { getSession } from '@/lib/getSession'

export default async function DashboardPage() {
  const session = await getSession()

  return (
    <>
      <DashboardClient ownerId={session?.user?.id || "default"} />
    </>
  )
}

import EmbedClient from "@/components/embed-client"
import { getSession } from "@/lib/getSession"

export default async function EmbedPage() {
  const session = await getSession()
  return (
    <>
      <EmbedClient ownerId={session?.user?.id} />
    </>
  )
}

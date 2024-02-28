import { DataTable } from "../components"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute('/table')({
  component: Index,
})

function Index() {
  return (
    <div className="p-5">
        <DataTable/>
    </div>
  )
}
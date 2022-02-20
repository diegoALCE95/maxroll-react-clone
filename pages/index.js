import SelectClass from "../components/SelectClass"
import Sidebar from "../components/Sidebar"

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-[2fr_1fr] bg-gray mx-auto mt-6">
          <SelectClass />
          <Sidebar />
      </div>
    </>
  )
}

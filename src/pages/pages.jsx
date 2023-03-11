import { Route, Routes } from "react-router-dom"

import { HomePage, Error404Page } from "@pages"

export const Routing = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="*" element={<Error404Page />} />
    </Routes>
  )
}

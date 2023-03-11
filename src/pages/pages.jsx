import { Route, Routes } from "react-router-dom"

import { HomePage, Error404Page } from "@pages"

export const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="home" element={<HomePage />} />
      <Route path="*" element={<Error404Page />} />
    </Routes>
  )
}

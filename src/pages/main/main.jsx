import { useHistory, useLocation } from "react-router-dom"
import React from "react"

export const MainPage = () => {
  let history = useHistory()
  const { search } = useLocation()
  let hashParams = React.useMemo(() => new URLSearchParams(search), [search]);
  const set = (name, value) => {
    hashParams.set(name, value)
    history.push(`?${hashParams.toString()}`)
  }
  const del = (name) => {
    hashParams.delete(name)
    history.push(`?${hashParams.toString()}`)
  }
  console.log(hashParams.toString())
  return (
    <div>
      <div>Main Page!</div>
      <div
        onClick={function () {
          set("search", "hello")
        }}
      >
        Set Search
      </div>
      <div
        onClick={function () {
          set("param", 12345)
        }}
      >
        Set Param
      </div>
      <div
        onClick={function () {
          del("param")
        }}
      >
        Del Param
      </div>
    </div>
  )
}

/*eslint no-console: ["error", { allow: ["warn", "error"] }] */
export const saveToLocalStorage = (store) => {
  store.subscribe(
    (mutation, state) => {
      console.warn(state)
      localStorage.setItem(
        'table',
        JSON.stringify(state.table)
      )
    }
  )
}
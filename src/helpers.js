export const saveToLocalStorage = (store) => {
  store.subscribe(
    (mutation, state) => {
      localStorage.setItem(
        'table',
        JSON.stringify(state.table)
      )
    }
  )
}
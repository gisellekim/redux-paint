type RootState = {}

type Action = {
  type: string
}

export const rootReducer = (state: RootState = {}, action: Action) => {
  console.log(action)
  return state
}

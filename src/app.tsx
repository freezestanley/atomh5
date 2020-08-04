export const dva = {
  config: {
    onError(err: any) {
      err.preventDefault()
      console.warn(err)
    },
  },
}

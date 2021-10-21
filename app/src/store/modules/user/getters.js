export const getters = {
  isSignedIn: state => state.isSignedIn,
  isEmailVerified: state => state.isEmailVerified,
  uid: state => state.uid,
  name: state => state.name,
  isThreadOwner: (state, getters, rootState, rootGetters) => {
    const uid = state.uid
    const threadUid = rootGetters['thread/uid']
    const isThreadOwner = uid === threadUid
    return isThreadOwner
  }
}
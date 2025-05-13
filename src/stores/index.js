import { useUserStore } from './modules/userData'

export const useStore = () => {
  return {
    user: useUserStore(),
  }
}
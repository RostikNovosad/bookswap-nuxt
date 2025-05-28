export const useShowModalStore = defineStore('showModal', () => {
    const showModal = ref(false)

    return {
        showModal
    }
});
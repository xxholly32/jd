import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export function useReveal(
  el: Ref<HTMLElement | null>,
  options?: { threshold?: number; delay?: number }
) {
  const isVisible = ref(false)
  const { threshold = 0.15, delay = 0 } = options ?? {}

  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!el.value) return
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            isVisible.value = true
          }, delay)
          observer?.unobserve(entry.target)
        }
      },
      { threshold }
    )
    observer.observe(el.value)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return isVisible
}

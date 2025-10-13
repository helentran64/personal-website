// composables/useFadeUp.js
import { ref, onMounted } from "vue";

export function useFadeUp() {
  const element = ref(null);

  onMounted(() => {
    if (!element.value) return;

    element.value.classList.add("tw-opacity-0"); // start invisible

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.value.classList.add("tw-animate-fadeUp"); // trigger animation
          observer.unobserve(element.value);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element.value);
  });

  return element;
}

export default defineNuxtPlugin(() => {
  const observeElement = (el) => {
    if (!el || el.classList.contains('in')) return

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in')
          obs.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0.1
    })

    observer.observe(el)
  }

  const scanAndObserve = () => {
    const elements = document.querySelectorAll('.animation__el:not(.in)')
    elements.forEach(observeElement)
  }

  // 初始掃描一次
  if (process.client) {
    window.addEventListener('DOMContentLoaded', scanAndObserve)
    window.addEventListener('load', scanAndObserve)

    // 動態新增的元素也能掃描（例如 async component、v-if 等）
    const mo = new MutationObserver(() => {
      scanAndObserve()
    })

    mo.observe(document.body, {
      childList: true,
      subtree: true,
    })
  }
})

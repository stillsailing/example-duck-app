
export default function loadDarkMode() {
  window.addEventListener('load', () => {
    import('darkmode-js').then(({ default: DarkMode }) => {
      new DarkMode({
        time: '0.5s',
        label: '🌓',
      }).showWidget()
    })
  })
}
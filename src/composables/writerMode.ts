import { nextTick, ref, watch } from 'vue'

// Easter egg: clicar na foto do topo troca o site para o lado escritor
// (C.H. Blacksmith), com as cores preto e vermelho do chblacksmith.com.br
export const writerMode = ref(false)

if (typeof document !== 'undefined') {
  watch(writerMode, active => {
    document.documentElement.classList.toggle('writer', active)
  })
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// O novo tema surge num círculo que cresce a partir do ponto clicado. Sem
// suporte à View Transitions API (ou com movimento reduzido), troca direto.
export function toggleWriterMode(event?: MouseEvent) {
  const flip = () => {
    writerMode.value = !writerMode.value
    return nextTick()
  }

  if (!document.startViewTransition || prefersReducedMotion()) {
    flip()
    return
  }

  const target = event?.currentTarget as HTMLElement | undefined
  const rect = target?.getBoundingClientRect()
  const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2
  const y = rect ? rect.top + rect.height / 2 : window.innerHeight / 2
  const radius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  )

  const transition = document.startViewTransition(flip)

  transition.ready.then(() => {
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${radius}px at ${x}px ${y}px)`
        ]
      },
      {
        duration: 900,
        easing: 'cubic-bezier(0.7, 0, 0.3, 1)',
        pseudoElement: '::view-transition-new(root)'
      }
    )
  })
}

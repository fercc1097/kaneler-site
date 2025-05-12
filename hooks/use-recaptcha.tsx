"use client"

import { useEffect, useState, useCallback } from "react"

// Simulación de claves de reCAPTCHA (en producción, estas vendrían de variables de entorno)
const RECAPTCHA_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Clave de prueba de Google

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }
}

export function useRecaptcha() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [token, setToken] = useState<string | null>(null)

  // Cargar el script de reCAPTCHA
  useEffect(() => {
    // Si ya existe el script, no lo cargamos de nuevo
    if (document.querySelector(`script[src*="recaptcha"]`)) {
      setIsLoaded(true)
      return
    }

    const script = document.createElement("script")
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`
    script.async = true
    script.defer = true

    script.onload = () => {
      setIsLoaded(true)
    }

    document.body.appendChild(script)

    return () => {
      // Limpieza si el componente se desmonta
      document.body.removeChild(script)
    }
  }, [])

  // Función para ejecutar reCAPTCHA y obtener un token
  const executeRecaptcha = useCallback(
    async (action = "submit") => {
      if (!isLoaded) return null

      try {
        await window.grecaptcha.ready(async () => {
          const recaptchaToken = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action })
          setToken(recaptchaToken)
        })

        return token
      } catch (error) {
        console.error("Error al ejecutar reCAPTCHA:", error)
        return null
      }
    },
    [isLoaded, token],
  )

  return { isLoaded, executeRecaptcha, token }
}

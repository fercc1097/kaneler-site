"use server"

import { z } from "zod"

// Simulación de clave secreta de reCAPTCHA (en producción, vendría de variables de entorno)
const RECAPTCHA_SECRET_KEY = "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe" // Clave de prueba de Google

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  subject: z.string().min(1),
  message: z.string().min(10),
  recaptchaToken: z.string(),
})

type ContactFormData = z.infer<typeof contactFormSchema>

async function verifyRecaptcha(token: string) {
  try {
    // En un entorno real, esta sería una llamada a la API de verificación de Google
    // https://www.google.com/recaptcha/api/siteverify

    // Simulamos la verificación para este ejemplo
    // En producción, usaríamos algo como:
    /*
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: RECAPTCHA_SECRET_KEY,
        response: token,
      }),
    });
    
    const data = await response.json();
    return {
      success: data.success,
      score: data.score, // reCAPTCHA v3 devuelve una puntuación de 0.0 a 1.0
      action: data.action,
    };
    */

    // Simulación de respuesta
    return {
      success: true,
      score: 0.8, // Simulamos una puntuación alta (baja probabilidad de ser spam)
      action: "contact_form",
    }
  } catch (error) {
    console.error("Error al verificar reCAPTCHA:", error)
    return { success: false, score: 0, action: "" }
  }
}

export async function sendContactForm(data: ContactFormData) {
  try {
    // Validar los datos
    const validatedData = contactFormSchema.parse(data)

    // Verificar el token de reCAPTCHA
    const recaptchaResult = await verifyRecaptcha(validatedData.recaptchaToken)

    if (!recaptchaResult.success) {
      return {
        success: false,
        message: "La verificación de seguridad falló. Por favor, intenta nuevamente.",
      }
    }

    // Si la puntuación es demasiado baja, rechazar el envío
    if (recaptchaResult.score < 0.5) {
      return {
        success: false,
        message: "Tu envío ha sido identificado como posible spam. Por favor, intenta nuevamente más tarde.",
      }
    }

    // Simular un retraso para demostrar el estado de carga
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // En un entorno real, aquí enviarías los datos a un servicio de correo electrónico
    console.log("Datos del formulario enviados:", validatedData)
    console.log("Puntuación reCAPTCHA:", recaptchaResult.score)

    return { success: true }
  } catch (error) {
    console.error("Error al procesar el formulario:", error)
    return {
      success: false,
      message: "Hubo un error al procesar tu solicitud. Por favor, intenta nuevamente.",
    }
  }
}

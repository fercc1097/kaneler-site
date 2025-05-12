"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Send, Loader2, ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { useRecaptcha } from "@/hooks/use-recaptcha"
import { sendContactForm } from "@/app/actions"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor ingrese un correo electrónico válido.",
  }),
  phone: z.string().min(10, {
    message: "El teléfono debe tener al menos 10 dígitos.",
  }),
  subject: z.string().min(1, {
    message: "Por favor seleccione un asunto.",
  }),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
})

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const { executeRecaptcha, isLoaded } = useRecaptcha()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    try {
      // Ejecutar reCAPTCHA para obtener un token
      const recaptchaToken = await executeRecaptcha("contact_form")

      if (!recaptchaToken && isLoaded) {
        toast({
          variant: "destructive",
          title: "Error de verificación",
          description: "No se pudo completar la verificación de seguridad. Por favor, intenta nuevamente.",
        })
        setIsSubmitting(false)
        return
      }

      // Enviar el formulario con el token de reCAPTCHA
      const result = await sendContactForm({
        ...values,
        recaptchaToken: recaptchaToken || "",
      })

      if (result.success) {
        toast({
          title: "Mensaje enviado",
          description: "Gracias por contactarnos. Nos pondremos en contacto contigo pronto.",
        })
        form.reset()
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: result.message || "Hubo un problema al enviar el formulario. Por favor intenta nuevamente.",
        })
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Hubo un problema al enviar el formulario. Por favor intenta nuevamente.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Tu nombre" {...field} className="bg-[#444444] border-[#555555] text-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Correo electrónico</FormLabel>
                <FormControl>
                  <Input placeholder="tu@email.com" {...field} className="bg-[#444444] border-[#555555] text-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Teléfono</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Tu número de teléfono"
                    {...field}
                    className="bg-[#444444] border-[#555555] text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Asunto</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-[#444444] border-[#555555] text-white">
                      <SelectValue placeholder="Selecciona un asunto" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="oil-gas">OIL & GAS</SelectItem>
                    <SelectItem value="obra-civil">Obra Civil</SelectItem>
                    <SelectItem value="electrica">Eléctrica</SelectItem>
                    <SelectItem value="supervision">Supervisión</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Mensaje</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Escribe tu mensaje aquí..."
                  className="min-h-[120px] bg-[#444444] border-[#555555] text-white"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-300">
            <ShieldCheck className="w-4 h-4 mr-1 text-[#FF7F27]" />
            Protegido por reCAPTCHA
          </div>
          <Button type="submit" disabled={isSubmitting} className="bg-[#FF7F27] hover:bg-[#e67321] text-white">
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Enviar mensaje
              </>
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}

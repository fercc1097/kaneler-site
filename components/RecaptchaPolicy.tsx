export function RecaptchaPolicy() {
  return (
    <div className="text-xs text-gray-400 mt-4">
      <p>
        Este sitio está protegido por reCAPTCHA y aplican la{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FF7F27] hover:underline"
        >
          Política de Privacidad
        </a>{" "}
        y los{" "}
        <a
          href="https://policies.google.com/terms"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FF7F27] hover:underline"
        >
          Términos de Servicio
        </a>{" "}
        de Google.
      </p>
    </div>
  )
}

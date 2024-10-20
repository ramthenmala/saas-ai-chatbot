import ButtonHandler from "@/components/Forms/SignUp/ButtonHandler"
import SignUpFormProvider from "@/components/Forms/SignUp/SignUpFormProvider"
import HighlightBar from "@/components/Forms/SignUp/HighlightBar"
import RegistrationFormStep from "@/components/Forms/SignUp/RegistrationFormStep"

const SignUp = () => {
  return (
    <div className="flex-1 py-36 md:px-16 w-full">
      <div className="flex flex-col h-full gap-3">
        <SignUpFormProvider>
          <div className="flex flex-col gap-3">
            <RegistrationFormStep />
            <ButtonHandler />
          </div>
          <HighlightBar />
        </SignUpFormProvider>
      </div>
    </div>
  )
}

export default SignUp
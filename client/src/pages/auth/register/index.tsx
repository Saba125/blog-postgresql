import { Card, CardHeader, CardTitle } from "@/components/ui/card"

const RegisterPage = () => {
  return (
    <Card className="w-full h-full md:w-[487px] ">
      <CardHeader>
        <CardTitle className="text-center flex flex-col gap-y-3">
          <h3 className="text-md">Sign Up and Get Started</h3>
          <p className="text-sm text-neutral-500 mt-2">
            Create your account to explore all the amazing features we offer.
            It's quick and easy!
          </p>
        </CardTitle>
      </CardHeader>
    </Card>
  )
}

export default RegisterPage

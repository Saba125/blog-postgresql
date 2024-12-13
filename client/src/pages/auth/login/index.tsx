import { Card, CardHeader, CardTitle } from "@/components/ui/card"

const LoginPage = () => {
  return (
    <Card className="w-full h-full md:w-[487px] ">
      <CardHeader>
        <CardTitle className="text-center flex flex-col gap-y-3">
          <h3 className="text-md">Welcome Back!</h3>
          <p className="text-sm text-neutral-500 mt-2">
            Log in to access your account and pick up right where you left off.
          </p>
        </CardTitle>
      </CardHeader>
    </Card>
  )
}

export default LoginPage

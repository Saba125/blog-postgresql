import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { z } from "zod"
import { loginSchema } from "@/features/auth/login/schema"
import { useLogin } from "@/features/auth/api/use-login"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/store/store"
import { loginAction } from "@/store/slices/authSlice"
const LoginPage = () => {
  const { mutate } = useLogin()
  const dispatch = useDispatch()
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
  const user = useSelector((state: RootState) => state.user)
  console.log(user)
  function onSubmit(values: z.infer<typeof loginSchema>) {
    mutate(values)
    const data = {
      email: values.email,
      id: values.id,
    }
    dispatch(loginAction({ email: values.email, id: data.id ?? 0 }))
  }
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
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="h-full w-full">
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default LoginPage

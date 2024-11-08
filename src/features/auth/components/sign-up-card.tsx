import { z } from "zod";
// import { DottedSeparator } from "@/components/dotted-separator";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import Link from "next/link";
import { PhoneInputCustom } from "@/components/phone-input";


const signUpFormSchema = z.object({
    fullName: z.string().min(1, "Required"),
    phoneNumber: z.string(),
    email: z.string().email(),
    password: z.string().min(1, "Required"),
    confirmPassword: z.string().min(1, "Required"),
})

const onSubmit = (values: z.infer<typeof signUpFormSchema>) => {
    console.log(values);
}

export const SignUpCard = () => {
    const form = useForm<z.infer<typeof signUpFormSchema>>({
        resolver: zodResolver(signUpFormSchema),
        defaultValues: {
            fullName: "",
            phoneNumber: "",
            email: "",
            password: "",
            confirmPassword: "",
        }
    })

    return (
        <Card className="w-full h-ful md:w-[487px] border-none shadow-none">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl">Create your account</CardTitle>
                <CardDescription>
                    By signing up, you agree to our{" "}
                    <Link href={"/privacy"}>
                        <span className="text-blue-700">Privacy Policy</span>
                    </Link>
                    {" "} and {" "}
                    <Link href={"/terms"}>
                        <span className="text-blue-700">Terms of Service</span>
                    </Link>
                </CardDescription>
            </CardHeader>
            <div className="px-7">
                {/* <DottedSeparator /> */}
            </div>
            <CardContent className="p-7">
                <Form {...form}>
                    <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            name="fullName"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}                                        
                                            type="text"
                                            placeholder="Enter your Full Name"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="phoneNumber"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <PhoneInputCustom
                                            {...field}
                                            country={'vn'}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="email"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="email"
                                            placeholder="Enter your Email address"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="password"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="password"
                                            placeholder="Enter your Password"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="confirmPassword"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="password"
                                            placeholder="Confirm your Password"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            type="submit"
                            disabled={false}
                            size="lg"
                            className="w-full"
                        >
                            Sign Up
                        </Button>
                    </form>                    
                </Form>
                <div className="px-7">
                    {/* <DottedSeparator /> */}
                </div>
                <CardContent className="p-7 flex flex-col gap-y-4">
                    <Button
                        variant="secondary"
                        disabled={false}
                        size="lg"
                        className="w-full"
                    >
                        Login with Google
                        <FcGoogle className="mr-2 size-5" />
                    </Button>
                    <Button
                        variant="secondary"
                        disabled={false}
                        size="lg"
                        className="w-full"
                    >
                        Login with Github
                        <FaGithub className="mr-2 size-5" />
                    </Button>
                </CardContent>
            </CardContent>
        </Card>
    )
};

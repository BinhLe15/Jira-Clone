import { z } from "zod";
// import { DottedSeparator } from "@/components/dotted-separator";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

const signInFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, "Required"),
});

const onSubmit = (values: z.infer<typeof signInFormSchema>) => {
    console.log(values);
}

export const SignInCard = () => {
    const form = useForm<z.infer<typeof signInFormSchema>>({
        resolver: zodResolver(signInFormSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    return (
        <Card className="w-full h-ful md:w-[487px] border-none shadow-none">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl">Welcome back!</CardTitle>
            </CardHeader>
            <div className="px-7">
                {/* <DottedSeparator /> */}
            </div>
            <CardContent className="p-7">
                <Form {...form}>
                    <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
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
                        <Button
                            type="submit"
                            disabled={false}
                            size="lg"
                            className="w-full"
                        >
                            Login
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
        </Card >
    )
};

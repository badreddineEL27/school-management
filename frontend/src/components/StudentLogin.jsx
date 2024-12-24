import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "../components/hooks/use-toast"; // or relative path
import { Button } from "../components/ui/button";
import {
Form,
FormControl,
FormDescription,
FormField,
FormItem,
FormLabel,
FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Define the Zod schema for validation
const FormSchema = z.object({
    email: z.string().email().min(2).max(100),
    password: z.string().min(8).max(100),
});

export default function StudentLogin() {
  // Initialize the form with react-hook-form and Zod validation
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

  // Handle form submission
function onSubmit(data) {
    toast({
        title: "You submitted the following values:",
        description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                <code className="text-white">{JSON.stringify(data, null, 2)}</code>
            </pre>
        ),
    });
}

return (
    <>
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
          {/* Email Field */}
        <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
            <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                    <Input placeholder="Email" {...field} />
                </FormControl>
                <FormDescription>
                    This is your login email address.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
          {/* Password Field */}
            <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormDescription>
                    Your secure password.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />

            <Button type="submit">Submit</Button>
        </form>
        </Form>
    </>
    );
}

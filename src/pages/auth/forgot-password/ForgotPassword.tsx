import AuthImage from "@/assets/images/auth/forgot-pass-img.png";
import ThemeLogo from "@/components/shared/ThemeLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useIsSubmitting } from "@/context/isSubmittingContext";
import { sendPasswordReset } from "@/firebase";
import { Loader2, Mail } from 'lucide-react';
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

const ForgotPassword = () => {
    const { isSubmitting, setIsSubmitting } = useIsSubmitting();
    const [email, setEmail] = useState("");
 

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const result = await sendPasswordReset(email);

        if (result.success) {
            toast.success("Password reset email sent!");
        } else {
            toast.error(result.message);
        }

        setIsSubmitting(false);
    };

    return (
        <section className="bg-white dark:bg-slate-900 lg:flex flex-wrap min-h-[100vh]">
            <div className="lg:w-1/2 lg:block hidden">
                <div className="flex items-center flex-col h-full justify-center">
                    <img src={AuthImage} alt="Image" />
                </div>
            </div>
            <div className="lg:w-1/2 py-8 px-6 flex flex-col justify-center">
                <div className="lg:max-w-[464px] mx-auto w-full">
                    <div>
                        <Link to="/" className="mb-2.5 max-w-[290px] inline-block">
                            <ThemeLogo />
                        </Link>
                        <h4 className="mb-3"> Forgot Password </h4>
                        <p className="mb-8 text-secondary-light text-lg">Enter the email address associated with your account and we will send you a link to reset your password.</p>
                    </div>
                    <form action="#" onSubmit={handleResetPassword}>
                        <div className="icon-field mb-4 relative">
                            <Mail className="absolute start-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-700 dark:text-neutral-200" />
                            <Input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={isSubmitting}
                                placeholder="Email"
                                name="email"
                                className="ps-13 pe-12 h-14 rounded-xl bg-neutral-100 dark:bg-slate-800 border border-neutral-300 dark:border-slate-700 focus:border-primary dark:focus:border-primary focus-visible:border-primary !shadow-none !ring-0"
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full rounded-lg h-[52px] text-sm mt-4"
                            disabled={isSubmitting}
                        >
                            {isSubmitting && <Loader2 className="animate-spin h-4.5 w-4.5 mr-2" />}
                            {isSubmitting ? "Sending Recovery Email..." : "Send Recovery Email"}
                        </Button>

                        <div className="mt-8 text-center text-sm">
                            <p className="mb-0">   Remembered your password?{" "} <Link to="/auth/login" className="text-primary font-semibold hover:underline">Back to Sign In</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ForgotPassword;
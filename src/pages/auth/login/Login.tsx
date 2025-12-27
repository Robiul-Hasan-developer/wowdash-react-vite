import AuthImage from "@/assets/images/auth/auth-img.png";
import ThemeLogo from "@/components/shared/ThemeLogo";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { useState } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../components/SocialLogin";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <section className="bg-white dark:bg-slate-900 flex flex-wrap min-h-[100vh]">
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
                        <h4 className="mb-3">Sign In to your Account</h4>
                        <p className="mb-8 text-secondary-light text-lg">Welcome back! please enter your detail</p>
                    </div>
                    <form action="#">
                        <div className="icon-field mb-4 relative">
                            <Mail className="absolute start-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-700 dark:text-neutral-200" />
                            <Input
                                type="email"
                                placeholder="Email"
                                name="email"
                                className="ps-13 pe-12 h-14 rounded-xl bg-neutral-100 dark:bg-slate-800 border border-neutral-300 dark:border-slate-700 focus:border-primary dark:focus:border-primary focus-visible:border-primary !shadow-none !ring-0"
                            />
                        </div>
                        <div className="relative mb-5">
                            <div className="icon-field">
                                <Lock className="absolute start-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-700 dark:text-neutral-200" />
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Password"
                                    name="password"
                                    className="ps-13 pe-12 h-14 rounded-xl bg-neutral-100 dark:bg-slate-800 border border-neutral-300 dark:border-slate-700 focus:border-primary dark:focus:border-primary focus-visible:border-primary !shadow-none !ring-0"
                                />
                                <Button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 !p-0 bg-transparent hover:bg-transparent text-muted-foreground h-[unset]"
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-5 h-5" />
                                    ) : (
                                        <Eye className="w-5 h-5" />
                                    )}
                                </Button>
                            </div>
                            <span className="toggle-password ri-eye-line cursor-pointer absolute end-0 top-1/2 -translate-y-1/2 me-4 text-secondary-light" data-toggle="#your-password"></span>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="mt-2 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <Checkbox
                                    id="remember"
                                    className="border border-neutral-400 w-4.5 h-4.5"
                                />
                                <label htmlFor="remember" className="text-sm">
                                    Remember me
                                </label>
                            </div>
                            <Link
                                to="/auth/forgot-password"
                                className="text-primary font-medium hover:underline text-sm"
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        <Button
                            type="submit"
                            className="w-full rounded-lg h-[52px] text-sm mt-8"
                        >
                            <>
                                {/* <Loader2 className="animate-spin h-4.5 w-4.5 mr-2" />
                                Signing in... */}
                                Sign In
                            </>
                        </Button>

                        <div className="mt-8 center-border-horizontal text-center relative before:absolute before:w-full before:h-[1px] before:top-1/2 before:-translate-y-1/2 before:bg-neutral-300 before:start-0">
                            <span className="bg-white dark:bg-slate-900 z-[2] relative px-4">Or sign in with</span>
                        </div>
                        <SocialLogin />
                        <div className="mt-8 text-center text-sm">
                            <p className="mb-0">Don't have an account? <Link to="/auth/register" className="text-primary font-semibold hover:underline">Sign Up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;
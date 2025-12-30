import AuthImage from "@/assets/images/auth/auth-img.png";
import ThemeLogo from "@/components/shared/ThemeLogo";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useIsSubmitting } from "@/context/isSubmittingContext";
import { registerWithEmailAndPassword } from "@/firebase";
import { Eye, EyeOff, Loader2, Lock, Mail, UserRound } from 'lucide-react';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import SocialLogin from "../components/SocialLogin";


const Register = () => {
    const navigate = useNavigate();
    const { isSubmitting, setIsSubmitting } = useIsSubmitting();

    const [showPassword, setShowPassword] = useState(false);
    const [user, setUser] = useState("User");
    const [email, setEmail] = useState("email@gmail.com");
    const [password, setPassword] = useState("123456");


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);

        try {
            await registerWithEmailAndPassword(email, password);
            toast.success(`User registered successfully.`);
            navigate("/auth/login");
        } catch (error) {
            toast.error(`${error}`);
        } finally {
            setIsSubmitting(false);
            setUser("");
            setEmail("");
            setPassword("");
        }
    }

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
                        <h4 className="mb-3">Sign up to your Account</h4>
                        <p className="mb-8 text-neutral-600 dark:text-neutral-200 text-lg">Welcome back! Please enter your details</p>
                    </div>
                    <form action="#" onSubmit={handleSubmit}>
                        <div className="icon-field mb-4 relative">
                            <UserRound className="absolute start-5 top-1/2 transform -translate-y-1/2 text-xl text-neutral-700 dark:text-neutral-200 w-5 h-5" />
                            <Input
                                type="text"
                                value={user}
                                onChange={(e) => setUser(e.target.value)}
                                disabled={isSubmitting}
                                placeholder="Username"
                                name="username"
                                className="ps-13 pe-12 h-14 rounded-xl bg-neutral-100 dark:bg-slate-800 border border-neutral-300 dark:border-slate-700 focus:border-primary dark:focus:border-primary focus-visible:border-primary !shadow-none !ring-0"
                            />
                        </div>
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
                        <div className="relative mb-5">
                            <div className="icon-field">
                                <Lock className="absolute start-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-700 dark:text-neutral-200" />
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    disabled={isSubmitting}
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
                        <div className="flex items-start gap-2 flex justify-between items-center">
                            <Checkbox
                                id="createAccount"
                                className="border border-neutral-500 w-4.5 h-4.5 mt-1"
                            />
                            <label htmlFor="createAccount" className="text-sm">
                                By creating an account means you agree to the{" "}
                                <Link
                                    to="#"
                                    className="text-primary font-semibold hover:underline"
                                >
                                    Terms & Conditions
                                </Link>{" "}
                                and our{" "}
                                <Link
                                    to="#"
                                    className="text-primary font-semibold hover:underline"
                                >
                                    Privacy Policy
                                </Link>
                            </label>
                        </div>


                        <Button
                            type="submit"
                            className="w-full rounded-lg h-[52px] text-sm mt-8"
                            disabled={isSubmitting}
                        >
                            {/* {
                                isSubmitting ? (
                                    <>
                                        <Loader2 className="animate-spin h-4.5 w-4.5 mr-2" />
                                        Signing in...
                                    </>
                                ) : (
                                    <>
                                        Sign Up
                                    </>
                                )
                            } */}

                            {isSubmitting && <Loader2 className="animate-spin h-4.5 w-4.5 mr-2" />}
                            {isSubmitting ? "Signing in..." : "Sign Up"}
                        </Button>

                        <div className="mt-8 center-border-horizontal text-center relative before:absolute before:w-full before:h-[1px] before:top-1/2 before:-translate-y-1/2 before:bg-neutral-300 before:start-0">
                            <span className="bg-white dark:bg-slate-900 z-[2] relative px-4">Or sign in with</span>
                        </div>
                        <SocialLogin />
                        <div className="mt-8 text-center text-sm">
                            <p className="mb-0">Already have an account? <Link to="/auth/login" className="text-primary font-semibold hover:underline">Sign In</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </section >
    );
};

export default Register;




// import AuthImage from "@/assets/images/auth/auth-img.png";
// import ThemeLogo from "@/components/shared/ThemeLogo";
// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Input } from "@/components/ui/input";
// import { Eye, EyeOff, Lock, Mail, UserRound } from 'lucide-react';
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import SocialLogin from "../components/SocialLogin";

// const Register = () => {

//     const [showPassword, setShowPassword] = useState(false)

//     return (
//         <section className="bg-white dark:bg-slate-900 flex flex-wrap min-h-[100vh]">
//             <div className="lg:w-1/2 lg:block hidden">
//                 <div className="flex items-center flex-col h-full justify-center">
//                     <img src={AuthImage} alt="Image" />
//                 </div>
//             </div>
//             <div className="lg:w-1/2 py-8 px-6 flex flex-col justify-center">
//                 <div className="lg:max-w-[464px] mx-auto w-full">
//                     <div>
//                         <Link to="/" className="mb-2.5 max-w-[290px] inline-block">
//                             <ThemeLogo />
//                         </Link>
//                         <h4 className="mb-3">Sign up to your Account</h4>
//                         <p className="mb-8 text-neutral-600 dark:text-neutral-200 text-lg">Welcome back! Please enter your details</p>
//                     </div>
//                     <form action="#">
//                         <div className="icon-field mb-4 relative">
//                             <UserRound className="absolute start-5 top-1/2 transform -translate-y-1/2 text-xl text-neutral-700 dark:text-neutral-200 w-5 h-5" />
//                             <Input
//                                 type="text"
//                                 placeholder="Username"
//                                 name="username"
//                                 className="ps-13 pe-12 h-14 rounded-xl bg-neutral-100 dark:bg-slate-800 border border-neutral-300 dark:border-slate-700 focus:border-primary dark:focus:border-primary focus-visible:border-primary !shadow-none !ring-0"
//                             />
//                         </div>
//                         <div className="icon-field mb-4 relative">
//                             <Mail className="absolute start-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-700 dark:text-neutral-200" />
//                             <Input
//                                 type="email"
//                                 placeholder="Email"
//                                 name="email"
//                                 className="ps-13 pe-12 h-14 rounded-xl bg-neutral-100 dark:bg-slate-800 border border-neutral-300 dark:border-slate-700 focus:border-primary dark:focus:border-primary focus-visible:border-primary !shadow-none !ring-0"
//                             />
//                         </div>
//                         <div className="relative mb-5">
//                             <div className="icon-field">
//                                 <Lock className="absolute start-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-700 dark:text-neutral-200" />
//                                 <Input
//                                     type={showPassword ? 'text' : 'password'}
//                                     placeholder="Password"
//                                     name="password"
//                                     className="ps-13 pe-12 h-14 rounded-xl bg-neutral-100 dark:bg-slate-800 border border-neutral-300 dark:border-slate-700 focus:border-primary dark:focus:border-primary focus-visible:border-primary !shadow-none !ring-0"
//                                 />
//                                 <Button
//                                     type="button"
//                                     onClick={() => setShowPassword(!showPassword)}
//                                     className="absolute right-4 top-1/2 transform -translate-y-1/2 !p-0 bg-transparent hover:bg-transparent text-muted-foreground h-[unset]"
//                                 >
//                                     {showPassword ? (
//                                         <EyeOff className="w-5 h-5" />
//                                     ) : (
//                                         <Eye className="w-5 h-5" />
//                                     )}
//                                 </Button>
//                             </div>
//                             <span className="toggle-password ri-eye-line cursor-pointer absolute end-0 top-1/2 -translate-y-1/2 me-4 text-secondary-light" data-toggle="#your-password"></span>
//                         </div>

//                         {/* Remember Me & Forgot Password */}
//                         <div className="flex items-start gap-2 flex justify-between items-center">
//                             <Checkbox
//                                 id="createAccount"
//                                 className="border border-neutral-500 w-4.5 h-4.5 mt-1"
//                             />
//                             <label htmlFor="createAccount" className="text-sm">
//                                 By creating an account means you agree to the{" "}
//                                 <Link
//                                     to="#"
//                                     className="text-primary font-semibold hover:underline"
//                                 >
//                                     Terms & Conditions
//                                 </Link>{" "}
//                                 and our{" "}
//                                 <Link
//                                     to="#"
//                                     className="text-primary font-semibold hover:underline"
//                                 >
//                                     Privacy Policy
//                                 </Link>
//                             </label>
//                         </div>

//                         <Button
//                             type="submit"
//                             className="w-full rounded-lg h-[52px] text-sm mt-8"
//                         >
//                             <>
//                                 {/* <Loader2 className="animate-spin h-4.5 w-4.5 mr-2" />
//                                 Signing in... */}
//                                 Sign Up
//                             </>
//                         </Button>

//                         <div className="mt-8 center-border-horizontal text-center relative before:absolute before:w-full before:h-[1px] before:top-1/2 before:-translate-y-1/2 before:bg-neutral-300 before:start-0">
//                             <span className="bg-white dark:bg-slate-900 z-[2] relative px-4">Or sign in with</span>
//                         </div>
//                         <SocialLogin />
//                         <div className="mt-8 text-center text-sm">
//                             <p className="mb-0">Already have an account? <Link to="/auth/login" className="text-primary font-semibold hover:underline">Sign In</Link></p>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Register;
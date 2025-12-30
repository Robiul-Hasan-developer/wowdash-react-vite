// ============================================= Server side way start =======================================
import GithubIcon from "@/assets/images/icons/github-icon.png";
import GoogleIcon from "@/assets/images/icons/google-icon.png";
import { Button } from "@/components/ui/button";
import { useIsSubmitting } from "@/context/isSubmittingContext";

const SocialLogin = () => {

    const { isSubmitting } = useIsSubmitting();

    return (
        <div
            className="mt-8 flex items-center gap-3"
        >
            {/* Google Button */}
            <Button
                className="font-semibold text-neutral-600 hover:text-neutral-600 dark:text-neutral-200 py-6 px-2 w-1/2 border border-neutral-600/50 rounded-xl text-sm flex items-center justify-center gap-3 line-height-1 hover:border-blue-400 hover:bg-primary/10 disabled:opacity-80"
                variant="outline"
                type="submit"
                name="action"
                value="google"
                disabled={isSubmitting}
            >
                <>
                    <img src={GoogleIcon} alt="google" width={18} height={18} />
                    Google
                </>
            </Button>

            {/* GitHub Button */}
            <Button
                className="font-semibold text-neutral-600 hover:text-neutral-600 dark:text-neutral-200 py-6 px-2 w-1/2 border border-neutral-600/50 rounded-xl text-sm flex items-center justify-center gap-3 line-height-1 hover:border-slate-400 hover:bg-slate-600/10 disabled:opacity-80"
                variant="outline"
                type="submit"
                name="action"
                value="github"
                disabled={isSubmitting}
            >
                <>
                    <img src={GithubIcon} alt="github" width={18} height={18} />
                    Github
                </>
            </Button>
        </div>
    );
};

export default SocialLogin;
// ============================================= Server side way end =======================================

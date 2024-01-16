import { Button } from "@ui/components/button";
import { ModeToggle } from "@ui/components/ui/theme-toggle";
import SignInButton from "./auth/sign-in-button";

export default function Page() {
  return (
    <div className="container space-y-6 py-6">
      <ModeToggle></ModeToggle>
      <div>
        <SignInButton></SignInButton>
      </div>
      <Button>Click me</Button>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

export function Footer () {
return (
    <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">
        <Logo/>
        <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2
        text-muted-foreground">
          <Button variant='ghost' size='sm'>
            @Crafted by Naveen
          </Button>
          <a href="https://github.com/Naveenmon/Flowin-Productivity-Tool">
            <Button variant='ghost' size='sm'>
              Github
            </Button>
          </a>
          
        </div>
    </div>
)
}
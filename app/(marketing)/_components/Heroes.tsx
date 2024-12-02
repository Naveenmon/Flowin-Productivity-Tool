import Image from "next/image";

export function Heroes () {

return (
    <div className="flex flex-col justify-center items-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
          <Image className="object-contain dark:hidden" src='/mind-white.gif' alt="Documents" fill />
          <Image className="object-contain hidden dark:block" src='/mind-dark.gif' alt="Documents" fill />
        </div>
        <div className="relative w-[600px] h-[600px] hidden md:block">
          <Image className="object-contain dark:hidden" src='/planing-white.gif' alt="Reading" fill />
          <Image className="object-contain hidden dark:block" src='/planing-dark.gif' alt="Reading" fill />
        </div>
      </div>
    </div>
)
}
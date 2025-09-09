import Image from "next/image";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function Logo({
  className = "h-[400px]",
  width = 400,
  height = 200,
  priority = false
}: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Silverados Dog Park"
      width={width}
      height={height}
      className={`${className} transition-all duration-300`}
      priority={priority}
      sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 384px"
    />
  );
}

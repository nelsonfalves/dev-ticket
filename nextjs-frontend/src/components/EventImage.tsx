import Image from "next/image";

export type EventImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function EventImage(props: EventImageProps) {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      width={470}
      height={470}
      priority
      className="rounded-2xl"
    />
  );
}

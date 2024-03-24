import Image from 'next/image';
import Link from 'next/link';

const Logo = ({ to }: { to: string }) => {
  return (
    <Link href={to}>
      <Image src="/Logo_ML.png" width={53} height={36} alt="Logo" />
    </Link>
  );
};

export default Logo;

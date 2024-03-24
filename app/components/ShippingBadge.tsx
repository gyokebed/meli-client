import Image from 'next/image';

const ShippingBadge = () => {
  return (
    <Image
      src="/ic_shipping@2x.png.png"
      width={18}
      height={18}
      alt="Free Shipping"
    />
  );
};

export default ShippingBadge;

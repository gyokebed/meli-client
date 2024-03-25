import { Skeleton } from '@/app/components';

const ProductDetailSkeleton = () => {
  return (
    <div className="grid">
      <div className="col-12 col-md-7 col-offset-1">
        <Skeleton width="38rem" height="32rem" className="m-b" />
        <div className="m-b-2x m-l-2x">
          <Skeleton width="34rem" height="2rem" className="m-t-2x m-b-2x" />
          <Skeleton width="34rem" height="16rem" className="m-b-2x" />
        </div>
      </div>
      <div className="col-12 col-md-3">
        <Skeleton width="12rem" className="m-b" />
        <Skeleton width="16rem" height="8rem" className="m-b-2x" />
        <div className="text-xl m-b-2x">
          <Skeleton width="12rem" height="3rem" />
        </div>
        <div className="m-r-2x">
          <Skeleton width="14rem" height="3rem" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;

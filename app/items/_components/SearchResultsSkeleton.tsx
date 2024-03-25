import { Skeleton } from '@/app/components';

const SearchResultsSkeleton = () => {
  return (
    <>
      <div className="grid p-y">
        <div className="col-12 col-md-8 col-offset-1 flex">
          <div className="m-l">
            <Skeleton width="12rem" height="8rem" />
          </div>
          <div>
            <div className="m-b-2x m-l">
              <div className="text-xs-2x m-r inline">
                <Skeleton width="8rem" />
              </div>
            </div>
            <div className="m-l">
              <Skeleton width="34rem" height="3rem" />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-1">
          <Skeleton />
        </div>
      </div>
      <div className="grid p-y">
        <div className="col-12 col-md-8 col-offset-1 flex">
          <div className="m-l">
            <Skeleton width="12rem" height="8rem" />
          </div>
          <div>
            <div className="m-b-2x m-l">
              <div className="text-xs-2x m-r inline">
                <Skeleton width="8rem" />
              </div>
            </div>
            <div className="m-l">
              <Skeleton width="34rem" height="3rem" />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-1">
          <Skeleton />
        </div>
      </div>
      <div className="grid p-y">
        <div className="col-12 col-md-8 col-offset-1 flex">
          <div className="m-l">
            <Skeleton width="12rem" height="8rem" />
          </div>
          <div>
            <div className="m-b-2x m-l">
              <div className="text-xs-2x m-r inline">
                <Skeleton width="8rem" />
              </div>
            </div>
            <div className="m-l">
              <Skeleton width="34rem" height="3rem" />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-1">
          <Skeleton />
        </div>
      </div>
      <div className="grid p-y">
        <div className="col-12 col-md-8 col-offset-1 flex">
          <div className="m-l">
            <Skeleton width="12rem" height="8rem" />
          </div>
          <div>
            <div className="m-b-2x m-l">
              <div className="text-xs-2x m-r inline">
                <Skeleton width="8rem" />
              </div>
            </div>
            <div className="m-l">
              <Skeleton width="34rem" height="3rem" />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-1">
          <Skeleton />
        </div>
      </div>
    </>
  );
};

export default SearchResultsSkeleton;

import PageBanner from "../../Component/PageBanner";

import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";

const getImages = async ({ pageParam = 0 }) => {
  const res = await fetch(
    `http://localhost:5000/gallery?limit=12&offset=${pageParam}`
  );
  const data = await res.json();
  console.log(data);

  return { ...data, prevOffset: pageParam };
};

const Gallery = () => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["images"],
    queryFn: getImages,
    getNextPageParam: (lastPage) => {
      if (lastPage.prevOffset + 10 > lastPage.imagesCount) {
        return false;
      }
      return lastPage.prevOffset + 10;
    },
  });
  console.log(data);

  const images = data?.pages.reduce((acc, pages) => {
    return [...acc, pages];
  }, []);

  console.log(images);

  return (
    <div>
      <PageBanner title="Gallery Grid" />
      <div>
        <InfiniteScroll
          dataLength={images ? images.length : 0}
          next={() => fetchNextPage()}
          hasMore={hasNextPage}
          loading={<div>Loading...☝️</div>}
        >
          <div className="w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10">
            {images &&
              images.map((image) => {
                return (
                  <div
                    className="border-2 p-2 bg-slate-600 rounded"
                    key={image._id}
                  >
                    <img src={image.imageUrl} alt="" />
                  </div>
                );
              })}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Gallery;

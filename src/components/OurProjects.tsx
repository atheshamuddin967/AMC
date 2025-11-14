import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Images } from "@/assets/images";

const galleryImages = [
   Images.pic1, Images.pic2, Images.pic3,
  Images.pic7, Images.pic8, Images.pic9, Images.pic10,
  Images.pic11, Images.pic12, Images.pic13, Images.pic14,
  Images.pic15, Images.pic16, Images.pic17, Images.pic18,
  Images.pic19, Images.pic20, Images.pic21, Images.pic22,
 
];

const ITEMS_PER_PAGE = 6;

export default function GallerySection() {
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const totalPages = Math.ceil(galleryImages.length / ITEMS_PER_PAGE);
  const visibleImages = galleryImages.slice(0, page * ITEMS_PER_PAGE);

  const nextImg = () => {
    setCurrent((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImg = () => {
    setCurrent((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleKey = (e: any) => {
    if (e.key === "ArrowRight") nextImg();
    if (e.key === "ArrowLeft") prevImg();
  };

  return (
    <section className="py-16 px-4 bg-gray-50 ">
      <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold">Our Gallery</h2>
        <p className="text-lg text-gray-600 mt-3">Explore some of our recent work</p>
        <div className="w-20 h-1 bg-background2 mx-auto mt-5 rounded-full"></div>
      </div>

      {/* GRID (Paginated Images) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visibleImages.map((img, idx) => {
          const realIndex = idx; // for modal slider

          return (
            <Dialog key={idx} open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <img
                  src={img}
                  onClick={() => {
                    setCurrent(realIndex);
                    setOpen(true);
                  }}
                  className="rounded-xl w-full h-56 object-cover cursor-pointer hover:scale-105 transition"
                />
              </DialogTrigger>

              {/* MODAL */}
              <DialogContent
                className="max-w-5xl p-0 overflow-hidden bg-black"
                onKeyDown={handleKey}
              >
                <div className="relative w-full h-[70vh] flex items-center justify-center">
                  <img
                    src={galleryImages[current]}
                    className="object-contain w-full h-full"
                  />

                  {/* Left Arrow */}
                  <button
                    onClick={prevImg}
                    className="absolute left-4 bg-white/20 hover:bg-white/40 text-white px-4 py-2 rounded-full text-2xl"
                  >
                    ❮
                  </button>

                  {/* Right Arrow */}
                  <button
                    onClick={nextImg}
                    className="absolute right-4 bg-white/20 hover:bg-white/40 text-white px-4 py-2 rounded-full text-2xl"
                  >
                    ❯
                  </button>
                </div>
              </DialogContent>
            </Dialog>
          );
        })}
      </div>

      {/* SEE MORE BUTTON */}
      {page < totalPages && (
        <div className="text-center mt-10">
          <button
            onClick={() => setPage(page + 1)}
            className="px-6 py-2 bg-background2 text-white rounded-lg hover:bg-background2/80 transition"
          >
            See More
          </button>
        </div>
      )}</div>
    </section>
  );
}

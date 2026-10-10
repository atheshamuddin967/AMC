import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const imgs = Array.from(document.images);
    const onImg = () => ScrollTrigger.refresh();
    imgs.forEach((img) => {
      if (!img.complete) {
        img.addEventListener("load", onImg);
        img.addEventListener("error", onImg);
      }
    });
    const ro = new ResizeObserver(() => ScrollTrigger.refresh());
    ro.observe(document.body);
    setTimeout(refresh, 0);
    return () => {
      window.removeEventListener("load", refresh);
      ro.disconnect();
      imgs.forEach((img) => {
        img.removeEventListener("load", onImg);
        img.removeEventListener("error", onImg);
      });
    };
  }, []);
  return (
    <div className="min-h-screen ">
     

    </div>
  );
}

import  { useState } from "react";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Images } from "@/assets/images";

interface Project {
  id: number;
  description: string;
  images: any;
}

const sampleProjects: Project[] = [
  {
    id: 1,
    description: "Solar On-Grid System 850kwp Sabic jubail",
    images: [Images.pic0, Images.pic1, Images.pic2,Images.pic3],
  },
  {
    id: 2,
    description: "Solar On-Grid System 2.5MWP FIFA SOLAR PROJECT",
    images: [Images.pic7, Images.pic8, Images.pic9,Images.pic10],
  },
  {
    id: 3,
    description: "Solar On-Grid System100KWp SIGNS SOLAR CAR PARKING",
    images: [Images.pic11, Images.pic12, Images.pic13,Images.pic14],
  },
  {
    id: 4,
    description: "Solar On-Grid System MEDINAH SCHOOLS",
    images: [Images.pic15, Images.pic16, Images.pic17,Images.pic18],
  },

  {
    id: 6,
    description: "Solar On-Grid System System NADEC HARAD",
    images: [Images.pic19, Images.pic20, Images.pic21,Images.pic22],
  },
  {
    id: 7,
    description: "Solar On-Grid System RIYADH VILLA",
    images: [Images.pic27, Images.pic24, Images.pic25,Images.pic26],
  },
  {
    id: 8,
    description: "SOLAR ON GRID MEDINAH SCHOOLS",
    images: [ Images.pic28, Images.pic29,Images.pic30],
  },
  {
    id: 9,
    description: "SOLAR ON GRID MAKKAH SCHOOLS",
    images: [Images.pic33, Images.pic34, Images.pic35],
  },
  {
    id: 10,
    description: "SOLAR ON GRID KING SAUD NATIONAL GUARD RIYADH",
    images: [Images.pic39,Images.pic36, Images.pic37, Images.pic38],
  },

  {
    id: 12,
    description: "SOLAR ON GRID 525KWP SHELL ALJOMAIH",
    images: [Images.pic52,Images.pic53, Images.pic50, Images.pic51],
  },
    {
    id: 13,
    description: "Al Oud Factory Riyadh 274KWp",
    images: [Images.pic57, Images.pic55, Images.pic56,Images.pic59,Images.pic60],
  },
     {
    id: 14,
    description: "SOLAR ON GRID 1MWP KING QIDDIYA SIX FLAGS",
    images: [Images.pic61, Images.pic62, Images.pic63],
  },
 {
    id: 15,
    description: "SOLAR ON GRID 1MWP KING QIDDIYA SIX FLAGS",
    images: [Images.pic67, Images.pic65, Images.pic66],
  },

 {
    id: 16,
    description: "Solar On-Grid System 850KWP SABIC JUBAIL",
    images: [Images.pic71, Images.pic69, Images.pic70],
  },
   {
    id: 17,
    description: "Solar OnGrid System",
    images: [Images.pic74, Images.pic72, Images.pic73,Images.pic75,Images.pic77, Images.pic78, Images.pic79],
  },
  {
    id: 18,
    description: "Solar On-Grid System STC, Riyadh",
    images: [Images.pic94, Images.pic95, Images.pic96],
  },
    {
    id: 19,
    description: "Solar On-Grid System",
    images: [Images.pic111, Images.pic112, Images.pic113],
  },
    {
    id: 20,
    description: "Solar On-Grid System SIGNS Factory Riyadh",
    images: [Images.pic115, Images.pic116, Images.pic117],
  },
   {
    id: 22,
    description: "Solar Off-Grid Projects",
    images: [Images.pic118, Images.pic119, Images.pic120],
  },
];

const ITEMS_PER_PAGE = 6;

export default function ProjectsSection() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(sampleProjects.length / ITEMS_PER_PAGE);
  const visibleProjects = sampleProjects.slice(0, page * ITEMS_PER_PAGE);

  return (
    <section className="py-16 px-4 bg-gray-50">
  

   <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
Our Project          </h2>
          <p className="text-lg text-gray-600 mt-3">
Explore some of our recent work          </p>
          <div className="w-20 h-1 bg-background2 mx-auto mt-5 rounded-full"></div>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {page < totalPages && (
        <div className="text-center mt-8">
          <Button onClick={() => setPage(page + 1)}>Load More</Button>
        </div>
      )}
    </section>
  );
}

const ProjectCard = ({ project }: { project: Project }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col"
    >
      <h3 className="text-xl font-semibold mb-1">Solar On-Grid System </h3>
      <p className="text-gray-500 text-sm mb-3">{project.description}</p>

      {inView && (
        <img
          src={project.images[0]}
          alt={"Solar On-Grid System"}
          className="rounded-xl w-full h-48 object-cover mb-3"
        />
      )}

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="mt-auto">
            View Gallery
          </Button>
        </DialogTrigger>

        <DialogContent className="max-w-5xl p-6">
          <h4 className="text-lg font-semibold mb-4">Solar On-Grid System</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {project.images.map((img:any, idx:any) => (
              <img
                key={idx}
                src={img}
                alt={`project-${idx}`}
                className="rounded-lg w-full h-48 object-cover"
              />
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

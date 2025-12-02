import { locations } from "#constants";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import { Draggable } from "gsap/Draggable";
import useWindowStore from "#store/window";
import useLocationStore from "#store/location";

const Projects = locations.work?.children || [];

const Home = () => {
  const { openWindow } = useWindowStore();
  const { setActiveLocation } = useLocationStore();
  const handleOPenFinder = (project) => {
    setActiveLocation(project);
    openWindow("finder");
  };
  useGSAP(() => {
    Draggable.create(".folder");
  }, []);
  return (
    <div id="home">
      <ul>
        {Projects.map((project) => (
          <li
            key={`${project.id}-${project.name}`}
            className={clsx("group folder", project.windowPosition)}
            onClick={() => handleOPenFinder(project)}
          >
            <img
              src="/images/folder.png"
              alt={`${project.id}-${project.name}`}
            />
            {project.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

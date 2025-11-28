import { WindowControls } from "#components";
import WindowWrapper from "#hoc/wrapper";
import { Search } from "lucide-react";
import { locations } from "#constants";
import useLocationStore from "#store/location";
import clsx from "clsx";
import useWindowStore from "#store/window";

const Finder = () => {
  const { setActiveLocation, activeLocation } = useLocationStore();
  const { openWindow } = useWindowStore();
  const openItem = (item) => {
    if (item.fileType === "pdf") return openWindow("resume");
    if (item.kind === "folder") return setActiveLocation(item);
    if (["fig", "url"].includes(item.fileType) && item.href)
      return window.open(item.href, "_blank");
    openWindow(`${item.fileType}${item.kind}`, item);
  };
  const renderList = (name, list) => (
    <div>
      <h3>{name}</h3>
      <ul>
        {list.map((item) => (
          <li
            className={clsx(
              item.id === activeLocation.id ? "active" : "not-active"
            )}
            key={item.id}
            onClick={() => setActiveLocation(item)}
          >
            <img src={item.icon} alt={item.name} className="w-4" />
            <p className="font-medium text-sm truncate">{item.name}</p>
          </li>
        ))}
        ;
      </ul>
    </div>
  );
  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>
      <div className="flex h-full bg-white">
        <div className="sidebar">
          {renderList("Favourites", Object.values(locations))}
          {renderList("Works", locations.work.children)}
        </div>
        <ul className="content">
          {activeLocation?.children.map((item) => (
            <li
              className={item.position}
              key={item.id}
              onClick={() => openItem(item)}
            >
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
const FinderWrapper = WindowWrapper(Finder, "finder");

export default FinderWrapper;

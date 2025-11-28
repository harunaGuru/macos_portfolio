import { WindowControls } from "#components";
import WindowWrapper from "#hoc/wrapper";
import useWindowStore from "#store/window";

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;
  if (!data) return null;
  const { name, imageUrl } = data;
  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>
      <div className="p-5 bg-white">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-auto max-h-[70vh] object-contain rounded"
          />
        ) : null}
      </div>
    </>
  );
};
const ImageWrapper = WindowWrapper(Image, "imgfile");
export default ImageWrapper;

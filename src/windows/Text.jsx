import { WindowControls } from "#components";
import WindowWrapper from "#hoc/wrapper";
import useWindowStore from "#store/window";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data;
  if (!data) return null;
  const { name, description, image, subtitle } = data;
  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>
      <div className="space-y-6 p-5 bg-white">
        {image ? (
          <di className="w-full">
            <img src={image} alt={name} className="w-full h-auto rounded" />
          </di>
        ) : null}
        {subtitle ? <p className="font-semibold text-lg">{subtitle}</p> : null}
        {Array.isArray(description) && description.length > 0 ? (
          <div className="space-y-3 leading-relaxed text-base text-gray-800">
            {description.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};
const TextWrapper = WindowWrapper(Text, "txtfile");
export default TextWrapper;

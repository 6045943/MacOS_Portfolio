import { WindowControls } from "#components"
import WindowWrapper from "#hoc/WindowWrapper"
import useWindowStore from "#store/window"

const TextFile = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data;

  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-5 space-y-6 bg-white">
        {image && (
          <div className="w-full h-auto overflow-hidden rounded-xl shadow-sm">
            <img
              src={image}
              alt={name}
              className="w-full h-auto"
            />
          </div>
        )}

        <div className="space-y-2">
          {subtitle && (
            <h3 className="text-lg font-semibold">
              {subtitle}
            </h3>
          )}

          {description && Array.isArray(description) && description.map((paragraph, index) => (
            <p key={index} className="space-y-3 leading-relaxed text-base text-gray-800">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

const TextFileWindow = WindowWrapper(TextFile, "txtfile");

export default TextFileWindow;

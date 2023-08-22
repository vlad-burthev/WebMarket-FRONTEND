import type { FC } from "react";

interface DeviceInfoProps {
  setInfo: any;
  info: any;
}

const DeviceInfo: FC<DeviceInfoProps> = ({ setInfo, info }) => {
  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const removeInfo = (number: number) => {
    setInfo(info.filter((i: any) => i.number !== number));
  };

  const changeInfo = (key: string, value: string, number: number) => {
    setInfo(
      info.map((i: any) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };

  return (
    <>
      <div>
        <button
          className="bg-green-900 mt-3 py-2 px-3 rounded text-white mb-2"
          onClick={addInfo}
        >
          Добавить свойство
        </button>
      </div>
      {info.length > 0 && (
        <div className="w-full bg-green-200 p-4 ">
          {info.map((i: any) => (
            <div key={i.number} className="mb-6">
              <input
                value={i.title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  changeInfo("title", e.target.value, i.number)
                }
                className="px-2"
                type="text"
                placeholder="Введите название свойства"
              />

              <textarea
                value={i.description}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  changeInfo("description", e.target.value, i.number)
                }
                placeholder="Введите описание свойства"
                className="h-30 items-start w-full  bg-green-900 block rounded-md border-0 my-2 py-1.5 pl-2 pr-2  text-white placeholder:text-gray-400 focus:ring-2 focus:outline-0  sm:text-sm sm:leading-6"
              />

              <button
                onClick={() => removeInfo(i.number)}
                className="bg-red-700 py-2 px-3 rounded"
              >
                Удалить свойство
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default DeviceInfo;

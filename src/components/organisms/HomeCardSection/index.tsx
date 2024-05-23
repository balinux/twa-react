import { FC } from "react";

interface HomeCardSectionProps {}

const items = [
  {
    id: 1,
    name: "Item 1",
    url_image: "https://picsum.photos/seed/picsum/300/400",
  },
  {
    id: 2,
    name: "Item 2",
    url_image: "https://picsum.photos/seed/picsum/300/400",
  },
  {
    id: 3,
    name: "Item 3",
    url_image: "https://picsum.photos/seed/picsum/300/400",
  },
  {
    id: 4,
    name: "Item 4",
    url_image: "https://picsum.photos/seed/picsum/300/400",
  },
  {
    id: 5,
    name: "Item 5",
    url_image: "https://picsum.photos/seed/picsum/300/400",
  },
  {
    id: 6,
    name: "Item 6",
    url_image: "https://picsum.photos/seed/picsum/300/400",
  },
  {
    id: 7,
    name: "Item 7",
    url_image: "https://picsum.photos/seed/picsum/300/400",
  },
  {
    id: 8,
    name: "Item 8",
    url_image: "https://picsum.photos/seed/picsum/300/400",
  },
  {
    id: 9,
    name: "Item 9",
    url_image: "https://picsum.photos/seed/picsum/300/400",
  },
  {
    id: 10,
    name: "Item 10",
    url_image: "https://picsum.photos/seed/picsum/300/400",
  },
];

const HomeCardSection: FC<HomeCardSectionProps> = ({}) => {
  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <div className="flex space-x-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-gray-400 h-72 w-72 text-black p-4 rounded border border-gray-300"
            >
              <div className="w-52 h-full">
                <img
                  src={item.url_image}
                  className="w-full h-full object-cover rounded"
                  alt={item.name}
                />
              </div>
              {/* <div className="mt-2 text-center">{item.name}</div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCardSection;

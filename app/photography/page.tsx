import Image from "next/image"

const galleryIndex = [
  {
    date: '5/27/24',
    text: '(5/27/2024) Me and me wife during our engagement photos',
    image: '/gallery/engagement.jpg'
  },
]

export default function Photography() {
  return (
    <div>
      <ul className="m-auto">
        {galleryIndex.map((item, index) => {
          return (
            <li className="flex" key={index}>
              <div className="flex w-full m-auto">
                <p className="flex m-auto text-center">{item.text}</p>
              </div>
              <div className="flex m-auto w-full p-5">
                <Image src={item.image} width={400} height={400} sizes={'(max-width: 600px) 100vw, 400px'} alt='test' className="w-full h-auto rounded-3xl" />
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

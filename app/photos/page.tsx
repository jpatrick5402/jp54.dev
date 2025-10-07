import Image from "next/image";

const galleryIndex = [
  {
    date: '9/28/25',
    text: 'Nylah arrived to our home',
    image: '/gallery/nylah.jpg'
  },
  {
    date: '5/3/25',
    text: 'Shenandoah National Park',
    image: '/gallery/mountain.jpg'
  },
  {
    date: '5/27/23',
    text: 'My wife and I during our engagement photos',
    image: '/gallery/engagement.jpg'
  },
  {
    date: '7/3/22',
    text: 'Sunset over the water',
    image: '/gallery/sunset.jpg'
  },
]

export default function Photos() {
  return (
    <div>
      <ul className="flex flex-wrap gap-4 m-auto p-2 justify-center">
        {galleryIndex.map((item, index) => {
          return (
            <li className="flex flex-col gap-2 justify-center items-center" key={index}>
              <div className="relative w-full h-[50vh] min-w-[40vw] min-h-[300px] max-h-[50vh]">
                <Image src={item.image} alt={'photo of ' + item.text} fill objectFit="cover" className="rounded-xl" />
              </div>
              <p className="flex bg-(--background) p-2 text-center rounded">{item.date + ' ' + item.text}</p>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

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
    <div className="m-auto">
      <div className="flex flex-wrap gap-6 p-2 justify-center">
        {galleryIndex.map((item, index) => {
          return (
            <div className="flex flex-col gap-2 justify-center items-center" key={index}>
              {/*
              <Image src={item.image} alt={'photo of ' + item.text} fill={true} className="object-contain rounded-xl" />
              */}
              <div className="relative max-w-[30vw] min-w-[300px]">
                <Image src={item.image} alt={'photo of ' + item.text} width={0} height={0} style={{ width: '100%', height: 'auto', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', border: '2px solid var(--background)' }} sizes="100vw" />
                <div className="flex bg-(--background) p-2 text-center rounded-b-xl">
                  <p className="m-auto">{item.date + ' ' + item.text}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

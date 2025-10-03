const galleryIndex = [
  {
    date: '5/27/24',
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
      <ul className="flex flex-col gap-4 m-auto p-2">
        {galleryIndex.map((item, index) => {
          return (
            <li className="flex gap-2" key={index}>
              <div className="flex m-auto w-full">
                <p className="flex bg-(--background) p-2 m-auto flex text-center rounded">{item.date + ' ' + item.text}</p>
              </div>
              <div className="flex w-full relative">
                <img src={item.image} alt={'photo of ' + item.text} className="m-auto rounded-3xl max-h-[50vh]" />
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

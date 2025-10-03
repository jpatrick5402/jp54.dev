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
  {
    date: '5/3/22',
    text: 'Shenandoah National Park',
    image: '/gallery/mountain.jpg'
  },
]

export default function Photos() {
  return (
    <div>
      <ul className="flex flex-wrap gap-4 m-auto p-2 justify-center">
        {galleryIndex.map((item, index) => {
          return (
            <li className="flex flex-col gap-2 justify-center items-center" key={index}>
              <img src={item.image} alt={'photo of ' + item.text} className="flex rounded-3xl max-h-[50vh]" />
              <p className="flex bg-(--background) p-2 text-center rounded">{item.date + ' ' + item.text}</p>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

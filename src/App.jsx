import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'

const App = () => {

  const data = [
  {
    img: "https://randomuser.me/api/portraits/men/11.jpg",
    song: "Kesariya",
    singer: "Arijit Singh",
    friend: false
  },
  {
    img: "https://randomuser.me/api/portraits/women/22.jpg",
    song: "Raatan Lambiyan",
    singer: "Jubin Nautiyal",
    friend: false
  },
  {
    img: "https://randomuser.me/api/portraits/men/33.jpg",
    song: "Apna Bana Le",
    singer: "Arijit Singh",
    friend: false
  },
  {
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    song: "Tera Ban Jaunga",
    singer: "Tulsi Kumar",
    friend: false
  },
  {
    img: "https://randomuser.me/api/portraits/men/55.jpg",
    song: "Tum Hi Ho",
    singer: "Arijit Singh",
    friend: false
  },
  {
    img: "https://randomuser.me/api/portraits/women/66.jpg",
    song: "Dil Diyan Gallan",
    singer: "Atif Aslam",
    friend: false
  },
  {
    img: "https://randomuser.me/api/portraits/men/77.jpg",
    song: "Hawayein",
    singer: "Arijit Singh",
    friend: false
  },
  {
    img: "https://randomuser.me/api/portraits/women/88.jpg",
    song: "Tujh Mein Rab ",
    singer: "Roop Rathod",
    friend: false
  },
  {
    img: "https://randomuser.me/api/portraits/men/99.jpg",
    song: "Channa Mereya",
    singer: "Arijit Singh",
    friend: false
  },
  {
    img: "https://randomuser.me/api/portraits/women/15.jpg",
    song: "Sun Saathiya",
    singer: "Priya Saraiya",
    friend: false
  },
  {
    img: "https://randomuser.me/api/portraits/men/25.jpg",
    song: "Shayad",
    singer: "Arijit Singh",
    friend: false
  },
  {
    img: "https://randomuser.me/api/portraits/women/35.jpg",
    song: "Galliyan",
    singer: "Ankit Tiwari",
    friend: false
  },
  {
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    song: "Jeene Laga Hoon",
    singer: "Atif Aslam",
    friend: false
  },
  {
    img: "https://randomuser.me/api/portraits/women/55.jpg",
    song: "Kabira",
    singer: "Arijit Singh",
    friend: false
  },
  {
    img: "https://randomuser.me/api/portraits/men/65.jpg",
    song: "Tera Yaar Hoon",
    singer: "Arijit Singh",
    friend: false
  },
  {
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    song: "Jeene Laga Hoon",
    singer: "Atif Aslam",
    friend: false
  }
];

 
  const [val, setVal] = useState(data)

  const btnClickHandler = (cardIndex)=>{
    setVal((previous)=>{
      return previous.map((item,index)=>{
        if(index === cardIndex){
          return {...item,friend:!item.friend}
        }
        console.log(item);
        return item;
      })
    })
  }

  return (
    <>
    <div className='w-full bg-amber-700 overflow-x-hidden'>
      <Navbar data={val}/>
      <div className='w-full flex flex-wrap justify-between bg-zinc-200 px-12 py-10'>
        {
        val.map((item,index)=>(
          <Card key={index} index={index} btn={btnClickHandler} friend={item.friend} img={item.img} name={item.song} singer={item.singer}/>
        ))
      }
      </div>
    </div>
    </>
  )
}

export default App

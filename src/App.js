import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import "./App.css";

const testimonials = [
  {
    body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
    author: {
      name: "Leslie Alexander",
      handle: "lesliealexander",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },

  {
    body: "Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.",
    author: {
      name: "Lindsay Walton",
      handle: "lindsaywalton",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },

  {
    body: "Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.",
    author: {
      name: "Tom Cook",
      handle: "tomcook",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },

  {
    body: "Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.",
    author: {
      name: "Leonard Krasner",
      handle: "leonardkrasner",
      imageUrl:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
    author: {
      name: "Leslie Alexander",
      handle: "lesliealexander",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },

  {
    body: "Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.",
    author: {
      name: "Lindsay Walton",
      handle: "lindsaywalton",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },

  {
    body: "Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.",
    author: {
      name: "Tom Cook",
      handle: "tomcook",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },

  {
    body: "Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.",
    author: {
      name: "Leonard Krasner",
      handle: "leonardkrasner",
      imageUrl:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
    author: {
      name: "Leslie Alexander",
      handle: "lesliealexander",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },

  {
    body: "Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.",
    author: {
      name: "Lindsay Walton",
      handle: "lindsaywalton",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },




];

function App() {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 100); // 1-second delay before starting the animation

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);

  const [isOddCycle, setIsOddCycle] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOddCycle(prev => !prev);
    }, 10000); // Change every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className="title">
        <h1>What users says</h1>
      </div>
      <div className="secondary">Testinomals that speak louder than words!customaers stories that light up our day</div>

      <div className="marquee-wrapper">
        <Marquee direction="left" speed={20} delay={0} gradient={true} gradientWidth={500}   gradientColor={[20, 18, 18]}  >
          <div className={`marquee-content ${startAnimation ? "animate" : ""}`}>
            {testimonials.map((item, index) => (
              <div
                key={index}
                className={`image_wrapper ${isOddCycle
                  ? index % 2 === 0
                    ? 'bounce-up'
                    : 'bounce-down'
                  : index % 2 === 0
                  ? 'bounce-down'
                  : 'bounce-up'}`}
                  
                // className={`image_wrapper ${index % 2 === 0 ? "bounce-up" : "bounce-down"}`}

                // className="image_wrapper"
                // style={{
                //   animation:
                //    ( index+1%2)  !== 0
                //       ? "bounce-up 10s ease-in-out infinite"
                //       : "bounce-down 10s ease-in-out infinite",
                //   animationDelay: `${(index % 4) * 5}s`, 
                // }}
              >
                {/* <figcaption className="testimonial-caption"> */}
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "30px",
                  }}
                >
                  <img
                    alt="test"
                    src={item.author.imageUrl}
                    className="author-image"
                  />
                </div>
                <div className="author-details">
                      <div className="author-name">{item.author.name}</div>
                      <div className="author-handle">{item.body}</div>
                    </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default App;

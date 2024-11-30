import { useScroll, motion, useSpring, useTransform } from "motion/react";
import React from "react";

const ScrollAnimation = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgb(86,1,245)", "rgb(1,245,13)"]
  );

  return (
    <div>
      <motion.div
        style={{
          position: "sticky",
          //   scaleX: scrollYProgress,
          scaleX,
          transformOrigin: "left",
          //   background: "blue",
          background,
          top: 0,
          width: "100%",
          height: "20px",
        }}
      />
      <div
        style={{
          maxWidth: "700px",
          margin: "auto",
          padding: "1.2rem",
        }}
      >
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          facere labore ut, alias ipsam, ex, accusamus natus voluptatibus
          pariatur sapiente error? Nesciunt culpa atque aliquid iste corporis
          rerum ducimus totam voluptates officiis voluptas eveniet dignissimos
          cum, cupiditate molestias voluptatum? Voluptatum culpa, officiis sint
          earum omnis soluta totam veniam reprehenderit repellat!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          facere labore ut, alias ipsam, ex, accusamus natus voluptatibus
          pariatur sapiente error? Nesciunt culpa atque aliquid iste corporis
          rerum ducimus totam voluptates officiis voluptas eveniet dignissimos
          cum, cupiditate molestias voluptatum? Voluptatum culpa, officiis sint
          earum omnis soluta totam veniam reprehenderit repellat!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          facere labore ut, alias ipsam, ex, accusamus natus voluptatibus
          pariatur sapiente error? Nesciunt culpa atque aliquid iste corporis
          rerum ducimus totam voluptates officiis voluptas eveniet dignissimos
          cum, cupiditate molestias voluptatum? Voluptatum culpa, officiis sint
          earum omnis soluta totam veniam reprehenderit repellat!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          facere labore ut, alias ipsam, ex, accusamus natus voluptatibus
          pariatur sapiente error? Nesciunt culpa atque aliquid iste corporis
          rerum ducimus totam voluptates officiis voluptas eveniet dignissimos
          cum, cupiditate molestias voluptatum? Voluptatum culpa, officiis sint
          earum omnis soluta totam veniam reprehenderit repellat!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          facere labore ut, alias ipsam, ex, accusamus natus voluptatibus
          pariatur sapiente error? Nesciunt culpa atque aliquid iste corporis
          rerum ducimus totam voluptates officiis voluptas eveniet dignissimos
          cum, cupiditate molestias voluptatum? Voluptatum culpa, officiis sint
          earum omnis soluta totam veniam reprehenderit repellat!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          facere labore ut, alias ipsam, ex, accusamus natus voluptatibus
          pariatur sapiente error? Nesciunt culpa atque aliquid iste corporis
          rerum ducimus totam voluptates officiis voluptas eveniet dignissimos
          cum, cupiditate molestias voluptatum? Voluptatum culpa, officiis sint
          earum omnis soluta totam veniam reprehenderit repellat!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          facere labore ut, alias ipsam, ex, accusamus natus voluptatibus
          pariatur sapiente error? Nesciunt culpa atque aliquid iste corporis
          rerum ducimus totam voluptates officiis voluptas eveniet dignissimos
          cum, cupiditate molestias voluptatum? Voluptatum culpa, officiis sint
          earum omnis soluta totam veniam reprehenderit repellat!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          facere labore ut, alias ipsam, ex, accusamus natus voluptatibus
          pariatur sapiente error? Nesciunt culpa atque aliquid iste corporis
          rerum ducimus totam voluptates officiis voluptas eveniet dignissimos
          cum, cupiditate molestias voluptatum? Voluptatum culpa, officiis sint
          earum omnis soluta totam veniam reprehenderit repellat!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          facere labore ut, alias ipsam, ex, accusamus natus voluptatibus
          pariatur sapiente error? Nesciunt culpa atque aliquid iste corporis
          rerum ducimus totam voluptates officiis voluptas eveniet dignissimos
          cum, cupiditate molestias voluptatum? Voluptatum culpa, officiis sint
          earum omnis soluta totam veniam reprehenderit repellat!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          facere labore ut, alias ipsam, ex, accusamus natus voluptatibus
          pariatur sapiente error? Nesciunt culpa atque aliquid iste corporis
          rerum ducimus totam voluptates officiis voluptas eveniet dignissimos
          cum, cupiditate molestias voluptatum? Voluptatum culpa, officiis sint
          earum omnis soluta totam veniam reprehenderit repellat!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          facere labore ut, alias ipsam, ex, accusamus natus voluptatibus
          pariatur sapiente error? Nesciunt culpa atque aliquid iste corporis
          rerum ducimus totam voluptates officiis voluptas eveniet dignissimos
          cum, cupiditate molestias voluptatum? Voluptatum culpa, officiis sint
          earum omnis soluta totam veniam reprehenderit repellat!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          facere labore ut, alias ipsam, ex, accusamus natus voluptatibus
          pariatur sapiente error? Nesciunt culpa atque aliquid iste corporis
          rerum ducimus totam voluptates officiis voluptas eveniet dignissimos
          cum, cupiditate molestias voluptatum? Voluptatum culpa, officiis sint
          earum omnis soluta totam veniam reprehenderit repellat!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          facere labore ut, alias ipsam, ex, accusamus natus voluptatibus
          pariatur sapiente error? Nesciunt culpa atque aliquid iste corporis
          rerum ducimus totam voluptates officiis voluptas eveniet dignissimos
          cum, cupiditate molestias voluptatum? Voluptatum culpa, officiis sint
          earum omnis soluta totam veniam reprehenderit repellat!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          facere labore ut, alias ipsam, ex, accusamus natus voluptatibus
          pariatur sapiente error? Nesciunt culpa atque aliquid iste corporis
          rerum ducimus totam voluptates officiis voluptas eveniet dignissimos
          cum, cupiditate molestias voluptatum? Voluptatum culpa, officiis sint
          earum omnis soluta totam veniam reprehenderit repellat!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          facere labore ut, alias ipsam, ex, accusamus natus voluptatibus
          pariatur sapiente error? Nesciunt culpa atque aliquid iste corporis
          rerum ducimus totam voluptates officiis voluptas eveniet dignissimos
          cum, cupiditate molestias voluptatum? Voluptatum culpa, officiis sint
          earum omnis soluta totam veniam reprehenderit repellat!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          facere labore ut, alias ipsam, ex, accusamus natus voluptatibus
          pariatur sapiente error? Nesciunt culpa atque aliquid iste corporis
          rerum ducimus totam voluptates officiis voluptas eveniet dignissimos
          cum, cupiditate molestias voluptatum? Voluptatum culpa, officiis sint
          earum omnis soluta totam veniam reprehenderit repellat!
        </p>
      </div>
    </div>
  );
};

export default ScrollAnimation;

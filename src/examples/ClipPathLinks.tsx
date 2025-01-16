import { useAnimate } from "motion/react";
// import { clipPath } from "motion/react-client";
import React from "react";
import { IconType } from "react-icons";
import {
  SiAdobe,
  SiApple,
  SiFacebook,
  SiGoogle,
  SiLinkedin,
  SiSoundcloud,
  SiSpotify,
  SiTiktok,
  SiYoutube,
} from "react-icons/si";

const ClipPathLinks = () => {
  return (
    <div className="bg-neutral-50 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="divide-y divide-neutral-900 border border-neutral-900">
          <div className="grid grid-cols-2 divide-x divide-neutral-900">
            <LinkBox Icon={SiGoogle} href="#" />
            <LinkBox Icon={SiSpotify} href="#" />
          </div>
          <div className="grid grid-cols-4 divide-x divide-neutral-900">
            <LinkBox Icon={SiApple} href="#" />
            <LinkBox Icon={SiSoundcloud} href="#" />
            <LinkBox Icon={SiAdobe} href="#" />
            <LinkBox Icon={SiFacebook} href="#" />
          </div>
          <div className="grid grid-cols-3 divide-x divide-neutral-900">
            <LinkBox Icon={SiYoutube} href="#" />
            <LinkBox Icon={SiLinkedin} href="#" />
            <LinkBox Icon={SiTiktok} href="#" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClipPathLinks;

type Side = "top" | "left" | "bottom" | "right";
type KeyFrameMap = {
  [key in Side]: string[];
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";

const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";

const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";

const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";

const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES: KeyFrameMap = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],

  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],

  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],

  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES: KeyFrameMap = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],

  bottom: [NO_CLIP, TOP_RIGHT_CLIP],

  top: [NO_CLIP, TOP_RIGHT_CLIP],

  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon, href }: { Icon: IconType; href: string }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e: MouseEvent) => {
    const box = (e.target as HTMLElement).getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left" as Side,
    };
    const proximityToRight = {
      proximity: Math.abs(box.top - e.clientX),
      side: "top" as Side,
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top" as Side,
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom" as Side,
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e) => {
    const side = getNearestSide(e);
    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };
  const handleMouseLeave = (e) => {
    const side = getNearestSide(e);
    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <a
      href={href}
      onMouseLeave={(e) => {
        handleMouseLeave(e);
      }}
      onMouseEnter={(e) => {
        handleMouseEnter(e);
      }}
      className="relative grid h-20 w-full place-content-center sm:h-28 md:h:36"
    >
      <Icon className="text-xl sm:text-3xl lg:text-4xl" />
      <div
        ref={scope}
        style={{ clipPath: BOTTOM_RIGHT_CLIP }}
        className="absolute inset-0 grid place-content-center bg-neutral-900 text-white"
      >
        <Icon className="text-xl sm:text-3xl md:text-4xl" />
      </div>
    </a>
  );
};

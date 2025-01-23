# Framer Motion

## Transitions

A transition defines the type of animation used when animating between two values.

Transition can be set on any animation prop, and that transition will be used when the animation fires.

- Value-specific transitions: When animating multiple values, each value can be animated with a different transition, with default handling all other values:
- Default transitions: It's possible to set default transitions via the transition prop. Either for specific motion components.Or for a group of motion components via MotionConfig.

**Transition Setting**

- _Tween_ - Animations are set with a duration and an easing curve.
- _Spring_ - Animations are either physics-based or duration-based.

  - Physics-based spring animations are set via stiffness, damping and mass, and these incorporate the velocity of any existing gestures or animations for natural feedback.
  - Duration-based spring animations are set via a duration and bounce.

- _Interia_ - Animations decelerate a value based on its initial velocity, usually used to implement inertial scrolling.

**Tween**

- duration
- ease

  - linear
  - easeIn
  - easeOut
  - easeInOut
  - circIn
  - circOut
  - circInOut
  - backIn
  - backOut
  - backInOut
  - anticipate

- time

  When animating multiple keyframes, times can be used to adjust the position of each keyframe throughout the animation.
  Each value in times is a value between 0 and 1, representing the start and end of the animation.
  There must be the same number of times as there are keyframes. Defaults to an array of evenly-spread durations.

_Usually use the "easeOut" curve for enter and exit transitions. The acceleration at the beginning gives the user a feeling of responsiveness. I use a duration no longer than 0.3/0.4 seconds to keep the animation fast_

**Spring**

- bounce

  Default: 0.25 Range: 0 - 1

- visualDuration

It override duration, The visual duration is a time, set in seconds, that the animation will take to visually appear to reach its target.

- damping

  Default: 10

- mass
- stiffness
- velocity
- restSpeed
- restDelta

## Motion Component Animation List

**Animate**

- initial
- animate
- exit
- transition
- variants
- style
- onUpdate
- onAnimationStart
- onAnimationComplete

**Hover**

- whileHover
- onHoverStart
- onHoverEnd

**Tap**

- whileTap
- onTapStart
- onTap
- onTapCancel

**Focus**

- whileFocus

**Pan**

- onPan
- onPanStart
- onPanEnd

**Drag**

- drag
- whileDrag
- dragConstraints
- dragToSnapOrigin
- dragElastic
- dragMomentum
- dragTransition
- dragDirectionLock
- dragPropagation
- dragControls
- dragListner
- onDrag
- onDragStart
- onDragEnd
- onDirectionLock

**Viewport**

- whileInView
- viewport
- onViewportEnter
- onViewportLeave

  **Layout**

- layout
- layoutId
- layoutDependency
- layoutScroll
- layoutRoot
- onLayoutAnimationStart
- onLayoutAnimationComplete

**Advanced**

- inherit
- custom
- transformTemplate

**Transition**

## Animation Presenece

Use for Exit Animation

**Exit Animation**

AnimatePresence works by detecting when its direct children are removed from the react tree

- This can be due to mounting and remounting of compenent
- It key Changing
- Or When Children in a list are added/removed

**Props**

- initial: disable any initial animation on children the present, when the component first render
- custom:
- mode: Decides how animate Presence handle entering and exiting children
  - sync: Children animate in/out as soon as they're added/removed
  - wait: The entering child will wait until the exiting child has animated out.
  - popLayout: Exiting children will popout of layout. This allow surrounding elements to move to their new layout
- onExitComplete - Fires when all exiting nodes have completed animating out.

# Gesturs

- 1. Hover Gesture Porps

  - whileHover: Defines the animation to play while the element is hovered over.
  - onHoverStart: Callback function fired when hover starts
  - onHoverEnd: Callback function fired when hover ends

- 2. Tap Gesture Props

  - whileTap: Defines the animation to play while the element is being tapped
  - onTap: Callback function fired when a gesture is completed.
  - onTapStart: Callback function is fired when the tap starts
  - onTapCancel: Callback function fired if the tap is canceled

- 3. Drag Gesture Props

  - drag: Enables dragging. Can be set to "x" , "y" or true for free drag.
  - dragConstraints: Restricts the drag area. Can be a DOM element or pixed boundaries
  - dragElastic: Add elasticity to the dragging motion. A value between 0 and 1
  - dragSnaptToOrigin: Snaps the element back to its original position when released
  - onDragStart: Callback when dragging start
  - onDrag: Callback when dragging
  - onDragEnd: Callback wehe draggind ends

-
- 4. Focus Gesture Props

  - whileFocus: Defines the animation to play while the element is focus

- 5. Custom Getures Props
     Addition logic combined with it's animation props

# Scroll

- Scroll-triggered: A noraml animation is triggered when an element enter the viewport.
- Scroll-linked: Values are linked directly to scroll progress.

### Scroll-triggered animations

- whileInView: to set an animation target or variant when the element enters the view.
- viewport:
  - once: whether to trigger animation only once
  - amount: Fraction of the element that must be visible to trigger the animation
- useInView hook:hook for programmatic control.

### Scroll-linked Animation

- useScroll

  - scrollX/scrollY: absolute scroll position in pixel
  - scrollProgressX/scrollProgressY: relative Scroll progress between 0 and 1

- useTransform

# layout

- layout Prop: The layout prop enables layout-based animations. It automatically animates when the component's layout(size, position) changes

# useCycle Hook

The useCycle hook is a utlity hook that helps cycle through a list of states of value. Use for animations that switch between multiple states, toggling visiblity, changing colors, or cycling through different animation.

```ts
const [state, cycle] = useCycle(...states);
```

- state: The current state from the list for provided states
- cycle: A function that cycles through the states. You can call cycle to move to the next state or pass as index to jump to a specific state

# components

## motion

The motion component drives most animations in motion in React

**Core Aniamation**

- animate
- initial
- exit
- transition
- layout
- whileHover
- whileTap
- drag
- dragConstraints
- dragElastic
- dragMomentum

**Gesture and Interaction Props**

- onHoverStart
- onHoverEnd
- onTapStart
- onTap
- onTapCancel
- onDragStart
- onDrag
- onDragEnd

**Scroll Animation Props**

- viewport
- custom
- keyframers

**Motion Value Props**

- animate
- style

**Svg-specific Props**

- pathLength:
- pathOffset

**Other Utility Props**

- style
- custom
- onAnimationStart
- onAnimatinComplete

**Custom components**

`motion.create()` is a utility that allows you to create custom animation components by extending the functionality of existing HTML and SVG elements. It simplifies the process of intergrating motion components with custom HTML and third party components that don't inheretly support motion animation

```js
const Components = motion.create(Componet);

//React 18
const Component = React.forwardRed((prop, ref) => {
  return <div ref={ref} />;
});

//React 19
const Components = (props) => {
  return <div ref={props.ref} />;
};
```

## useMotionTemplete

useMotionTemplete create a new motion value from a string templete containing other motion values

```ts
const x = useMotionValue(100);
const transform = useMotionTemplete`transform(${x}px)`;
```

motionValueTemplete is a function used in Framer motion to define how a motionValue should be interpolated and represented as a string. It's particularly usefull for complex CSS properties that requires specific formatting like transform properties (translate, rotate, scale) or box-shadow

## Motion Config

The MotionConfig component can be used to set configuration options for all child motion components.

**Props**

- Transition: Define a fallback transition to use for all child motion components.
- reduceMotion:

# Transition Animation

A Transition defines how a animation moves between its start and end value. It controls the timing, easeing and interpolation of the animation, giving you fine-grained control over the behavior.

Common Properties

```ts

 transition:{
  duration?:number; // how long animation last
  delay?:number; // Add a delay before the animation starts
  ease?:string | [number, number, number, number]; // Specifies the easing function for the animation
  repeat:number; // Repeat the animation a specified the number of times.
  repeatType?: "loop" | "reverse" | "mirror";
  // loop: Loop the animation from start to end.
  // reverse: Alternates the animation between forward and reverse directions.
  // mirror: Similar to reverse, but repeat both forward and backward
  repeatDelay?:number; // Add a delay between repeats.
 }

```

**Transition Settings**

`type`

default:Dynamic
<br/>
Type of animation, `tween`, `spring` or `inertia` or `keyframse`
<br/>

Tween animation are set with a duration and easing curve.
Spring animation are either physics-based or duration-based.

physics-based spring animation are set via stiffness, damping and mass.

`Tween Animation`

```ts
- ease: "linear" | "easeIn" | "easeOut" | "easeInOut" | [number, number, number, number]

- from: number | string
```

`staggerChildren`: Delay Between children animations.
`times`: When animating multiple keyframes, time can be used to adjust the position of each keyframe throughout the animaton.

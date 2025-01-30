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
type Tween = {
  ease:
    | "linear"
    | "easeIn"
    | "easeOut"
    | "easeInOut"
    | "circIn"
    | "circOut"
    | "circOut"
    | "circInOut"
    | "backIn"
    | "backOut"
    | "backInOut"
    | "anticipate"
    | [number, number, number, number];
  from: number | string;
};
```

`staggerChildren`: Delay Between children animations.
`times`: When animating multiple keyframes, time can be used to adjust the position of each keyframe throughout the animaton.

`Spring Animation`

Spring animation are either physics-based or duration based.
physics - stiffness, damping and mass. Incorporate the velocity of existing gesture or animation.
duration - duration and bounce.

```ts
interface Spring {
  stiffness: number; //Controls the rigidity of the spring (higher  values = stiffer motion). Default 1
  damping: number; // Reduces oscillation or bounce (lower value = more bounce). Default 10
  mass: number; // Controls the "weight" of the spring object (higer values = slower motion) Default 1
  bounce: number; // A simpler way to control bounce (value between 0 and 1). Default 0.25
  resetSpeed: number; // Animation stops when speed fall below this threshold Default 0.1
  resetDelta: number; // Animation Stops when displacement fall below this threshold. Default:0.1
  visualDuration: number; // override duration, animation will take to visually appear to reach its target.
}
```

`Inertia Animation`

This type of animation continues movement after a user interaction
and gradually slow down due to friction-like behavior.

- Post-Drag animation: When you want a element to continue moving naturally after being dragged and then slow down.
- Fling Effect: When something should be decelerate after being "thrown" or swiped.

```ts
type Inertia = {
  power: number; // Default: 0.8 A
  timeConstant: number;
  modifyTarget: number;
  min: number;
  max: number;
  bounceStiffness: number;
  bounceDamping: number;
  velocity: number;
  resetDelta: number;
};
```

`Orchestration Animation`

Refer to the animation of synchronizing and coordinating multiple animations so they work together harmoniously. It is controlled by the order, timing and dependencies between animation

```ts
type Orchestration = {
  delay: number;
  repeat: number;
  repeatType: number;
  when: "beforeChildren" | "afterChildren" | false;
  delayChildren: number;
  staggerChildren: number; // Default:0
  staggerDirection: number; // Default:1 Direction in which to stagger Children . 1 will stagger from the first to last child while -1 stagger form last to first.
  at: "<" | "=" | number; // Allow precise control over when animations start in sequence.
};
```

- at: It gives you way to orchestrate the animation between to diferent element.

# Gesture Animation

```ts
interface gesture {
  whileHover; // Animates the element while it's hovered
  whileTap; //Animates the element while it' pressed or tapped
  whileDrag; // Animates the element while it's being dragged.
  onHoverStart; // Callback function triggered when hover starts.
  onHoverEnd; // Callback function triggered when hover ends
  onTapStart; // Callback function when tap starts
  onTapEnd; // Callback function when tap ends.
  drag; // Enable drag functionality for the element.
  dragConstraints; // Defines the boundries within which the block element can be dragged.
  dragElastic; // Controls the elasticity or "bounce-back"  effect during dragging.
  dragTransition; // Specifices how the drag animation behaves.
}
```

_onTapEnd:_ When the tap is successfully completed within bounds.Detects successful taps
_onTapCancel:_ When the tap is canceled. Detect canceled on incomplete taps.

**Use Cases of Gesture Animations**

1. **Interactive Button:** Add hover and tap animations to button for feedback.
2. **Draggable Cards:** Create draggable element in Kanban board or carousel components.
3. **Image Galleries:** Enable Swipe gestures for naviagation.
4. **Interacitve Charts:** Use drag gestures for resizing or selecting area.
5. **Custom Slider:** Combine drag and elasticity for sliders or progress bars.

**Pan Gesturs**

Pan Gestures are triggered when the user moves their pointer or figure over an elemet while pressing or touching it.
Pan gestures provide fine-grained control over user input and pointer movement, allowing for high interactive and dynamice interfaces.

- onPanStart: Triggered when the user start panning
- onPan: Triggered continuously as the user pans the element
- onPanEnd: Triggered when the user stops panning or lift their pointer.

_useCase_

1. Interative Slider: Allow users to slide through a range of value
2. Imager Viewer: Implement drag-to-move functionality in galleries
3. Swipeable Cards: Use pan gestures to swipe cards left or right
4. Drag and Drop: Enable drag-and-drop UI for task like rearrnging items.

# Scroll Animation

Scroll animation are used to create dynamice engaging user experiences by animating element based on the user's scorll position.

**Type of scroll Animation**

1. Reveal Animation: Element fade in, scale or slide as the enter the viewport
2. Parallex Animation: Elmemts move at a slower or faster rate than scroll.
3. Progress Animation: A progress bar or scroll-linked animations shows how far the user has scrolled
4. Trigger Animation: Specific animations are triggered when the srolls to a particular section.

```ts
interface Scroll {
  initial; // Defines the initial animation state of the element
  whileInView; // Triggeres animation when the element enters the viewport.
  transition; // Specifies how the animation progresses
  useScroll; // Tracks global or specific element scroll position
  useTransform; // Maps scroll progress to specific animation value.
}
```

**Use cases for scorll animations**

1. Content Reveal: Animate section as user scroll
2. Sticky Header: Animate a header based on the scorll position
3. Scroll Progress Bars: Show scorll progress dynamically
4. Parallax Effect: Add dept and interactictivity to a page
5. Hero Animation: Animate the landing screen dynamically as user scroll.

**Scroll Trigger Animation**

Scroll triggered Animations are just normal animations that fires when an element enters of leaves the viewport.

_whileInView_ Prop: to set an animation target or variant when the element enters the view.
_viewport_ Prop: options to set once:true so once an element has entered the viewport, it won't animate backout.
_Changing scroll Container_: By default element will be considered withing the viewport when it enters/ leave the window. This can be changed by providing the ref of another scrollable element.
_setting state_ to set state when an element (not just motion component) enters and leaves the viewport with the useInView hook.

**Scroll-linked animations**

Scroll-linked animations are created using motion values and useScroll hook.
It return four motion values, two that store offset in pixel(scrollX/Y) and two store scroll Progress as a value between 0 and 1.

_Value smoothing_: This value can be smoothed by passing it through useSpring.
_Transform other values_: With the useTransform hook, it's easy to use the progress motion values to mix between any value, like colors.

# Layout Animation

```ts
interface Layout {
  layout; // Enables automatic layout animations
  layoutId; // Animates shared element between components during a transition
  layOutDependency; // A dependency that triggers layout recalculations for animation
  onLayouyAnimationComplete; // A callback triggered when the layout animation is complete.
  transition; // Customizes the animation's durarion, easing, and type for layout changes.
}
```

**Use Cases for layout Animations**

1. Expanding Cards:
2. Dynamic List:
3. Shared Element:
4. Responsive Layouts:

**When to use Layout Animations**

1. You want to enhance UI responsiveness
2. Your layout changes dynamically
3. You need smooth transitions between different states of a UI component.

_CSS changes should happend immediately view style to animate as layout will take care of the animation._

**Animating within scrollable element**

To correctly animate layout within scrollable element you need to provide them the layout prop.

**To Correctly animate layout within fixed elements, you need to provide them the layoutRoot Prop.**

**Group layout animations**

Layout animations are triggered when a component re-renders and it layout has changed.

We can synchronise layout changes across multiple components by wrapping them in LayoutGroup component.

**Scale Correction**

All layout animations are performed using the transform style, resulting in smooth framerater.

# Components

## motion component

### Custom Componenets

```js
const MotionComponent = motion.create(Component);
```

_for React18_

```js
const Component = React.forwarRef((props, ref) => {
  return <div ref={ref}>
});
```

_for React19_

```js
const Component = (props) => {
  return <div ref={props.ref} />;
};
```

**Props**

```ts
interface Animate {
  initial; // The initial visual state of the motion component. False to disable the enter animation.
  variants; // The variants for this component
  animate; // A target to animate to on enter and on update
  exit; // A target to animate to when a component is removed fromt the tree. Component Removed must be a direct child of AnimatePresence to enable this animation
  transitions; // The default transitions for this component to use when an animation props has no transition defined
  style; // The normal React DOM style Props.
  onUpdate; // Callback triggered every frame any value on the motion component updates.
  onAnimationStart; // callback triggered when any animation starts.
  onAnimationComplete; // callback triggered when any animation completes
}

interface Hover {
  whileHover; // Target or variants to label to while the hover gesture is active
  onHoverStart; // Callback function that fires when a pointer starts hovering over the component.
  onHoverEnd; // Callback function that fires when a pointer stop hovering over the component.
}

interface Tap {
  whileTap; // Target or variants to label to while the tap gesture is active.
  onTapStart; // Callback function that fires when a pointer start pressing the component.
  onTap; // Callback function that fires when a pointer stops pressing the component and the pointer was released inside the component.
  onTapCancel;
}

interface Focus {
  whileFocus; // Target or variants to label to while the focus gesture in active.
}

interface Pan {
  onPan; // Callback function that fires when the pan gesture is recognised on this element.
  onPanStart; // Callback function that fires when a pan gesture starts. Providing the triggering PointerEvent and info.
  onPanEnd; // Callback function that fires when a pan gesture ends.
}

interface Drag {
  drag; // Enable dragging for this element.
  whileDrag; // Target or variants to label to while to drag gesture is active
  dragConstraints; // Applies constraints on the draggable area.
  dragSnapToOrigin; //  If true, the draggable element will animate back to its center/origin when released.
  dragElastic; //The degree of movement allowed outside constraints. 0 = no movement, 1 = full movement.
  dragMomentum; //Apply momentum from the pan gesture to the component when dragging finishes. Set to true by default.
  dragTransition; //Allows you to change dragging momentum transition.
  dragDirectionLock; //Locks drag direction into the soonest detected direction.
  dragProppagation; //Allows drag gesture propagation to child components.
  dragControls; //Usually, dragging is initiated by pressing down on a component and moving it.
  dragListener; // Determines whether to trigger the drag gesture from event listeners.
  onDrag; //Callback function that fires when the drag gesture is recognised on this element.
  onDragStart; //Callback function that fires when a drag gesture starts. Provided the triggering PointerEvent and info.
  onDragEnd; //Callback function that fires when a drag gesture ends. Provided the triggering PointerEvent and info.
  onDirectionLock; //Callback function that fires a drag direction is determined.
}

interface Viewport {
  whileInView; // Target or variants to label to while the element is in view.
  viewport; // Options to define how the element is tracked within the viewport
  onViewportEnter; // Callback function that fires when an element enter the viewport Provided the IntersectionObserverEntry.
}

interface Layout {
  layout; // If true the component will animate changes to its layout.
  layoutId; // If set, this component will animate changes to its layout.
  layoutDependency; // ayout changes are detected every render. To reduce measurements and thus improve performance, you can pass a layoutDependency prop. Measurements will only occur when this value changes.
  layoutScroll; // For layout animations to work correctly within scrollable elements, their scroll offset needs measuring
  layoutRoot; //For layout animations to work correctly within position: fixed elements, we need to account for page scroll. Add layoutRoot to mark an element as position: fixed.
  onLayoutAnimationStart; //A callback to run when a layout animation starts.
  onLayoutAnimationComplete; //A callback to run when a layout animation completes.
}

interface Advanced {
  inherit; //Set to false to prevent a component inheriting or propagating changes in a parent variant.
  custom; //Custom data to pass through to dynamic variants.
  transformTemplete; //transforms are applied in order of translate, scale, rotate and skew.
}

interface AnimationProps {
  animate; //	Specifies the animation target values (final state).
  initial; //Defines the initial animation values (starting state).exit	Specifies the animation values when the component unmounts (with AnimatePresence).
  variants; //Allows defining multiple animation states in a reusable way.
  whileHover; //Defines the animation state when the element is hovered.
  whileTap; //Defines the animation state when the element is tapped.
  whileDrag; //Defines the animation state while dragging.
  whileFocus; //Defines the animation state while the element is focused.
  whileInView; //Animates the element when it comes into the viewport.
  layout; //Enables smooth layout transitions.
}

interface TransitionProps {
  type; //	Specifies the type of animation (spring, tween, inertia, etc.).
  duration; //	Duration of the animation (in seconds).
  delay; //	Adds a delay before the animation starts.
  stiffness; //	Controls the "tightness" of a spring animation (only for spring animations).
  damping; //	Controls how quickly a spring animation slows down (for spring).
  mass; //	Adjusts the weight of the spring animation.
  bounce; //	Adds a bounce effect (0 = no bounce, 1 = full bounce).
  ease; //	Sets the easing function (e.g., easeIn, easeOut, easeInOut, etc.).
  repeat; //	Number of times to repeat the animation.
  repeatType; //	Type of repeat: loop, reverse, or mirror.
}

interface GestureProps {
  onHoverStart; //	Callback triggered when the user starts hovering.
  onHoverEnd; //	Callback triggered when the user stops hovering.
  onTapStart; //	Callback triggered when the user starts tapping.
  onTap; //	Callback triggered when the user taps the element.
  onTapCancel; //	Callback triggered when a tap is canceled (e.g., finger slides off).
  onDragStart; //	Callback triggered when the user starts dragging.
  onDrag; //	Callback triggered during dragging.
  onDragEnd; //	Callback triggered when dragging ends.
}

interface DragProps {
  drag; //	Enables drag behavior (true, false, or a specific axis like "x" or "y").
  dragConstraints; //	Restricts drag movement within a specific area (e.g., {top, left, bottom, right}).
  dragElastic; //	Adds elasticity to the drag gesture (default: 0.5).
  dragSnapToOrigin; //	Snaps the element back to its original position when dragging ends.
}

interface InViewProps {
  whileInView; //	Defines the animation state when the element is in the viewport.
  viewport; //	Options for controlling viewport settings like margin, once, and amount.
  onViewportEnter; //	Callback triggered when the element enters the viewport.
  onViewportLeave; //	Callback triggered when the element leaves the viewport.
}

interface LayoutAnimationProps {
  layout; //	Enables smooth layout transitions when the element's position changes.
  layoutId; //	Used with AnimatePresence for shared element transitions.
}

interface EventListners {
  onAnimationStart; //	Callback when the animation starts.
  onAnimationComplete; //	Callback when the animation finishes.
  onViewportEnter; //	Triggered when the element enters the viewport.
  onViewportLeave; //	Triggered when the element leaves the viewport.
}

interface OtherProps {
  style; //	Add inline styles to the motion component.
  className; //	Add custom CSS classes to the motion component.
  ref; //Attach a React ref to the motion component for DOM manipulation.
}
```

## AnimatePresence

AnimatePresence makes exit animation easy. By wrapping one or more motion components with animatePresence, we gain access to the exit animation prop

AnimatePresence works by detecting when its direct children are removed from the react tree.
_Direct Children must have a unique key prop so AnimationPresence can track their presence in the tree._

**Changing Key**: Changing a key prop make React create an entirely new component. So by changing the key of a single child for AnimatePresence.

**Animate Presence State**
Any child of AnimatePresence can access presence state with the useIsPresent Hook.

**Manual usage**
It's also possible to manually tell animatePresence when a component is safe to remove with the usePresence hook.

```js
import { usePresence } from "motion/react";

function Component() {
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 1000);
  }, [isPresent]);
  return <div />;
}
```

This return both isPresent state and a callback, safeToRemove, that should be called when you're ready to remove the component from the DOM

**Propagate exit Animation**

By default AnimatePresence controls the exit animation on all of its children, until another AnimatePresence component is rendererd.

```ts
interface AnimatePresence {
  initial;
  custom;
  mode: "sync" | "wait" | "poplayout"; // controls the timing of enter and exit animaiton.
  onExitComplete; // Fires when exit animations are finished
  propagate; // It set to true, exit animations on children will also trigger when this AnimatePresence exit from a parent AnimatePresence.
  presenceAffectLayout; //Prevents layout changes
}

interface mode {
  mode: "sync" | "wait" | "poplayout";
  // sync Both entering and exiting components animate at the same time.
  // wait Waits for all exit animations to finish before new components enter.
  // poplayout Exiting components animate first, the entering components appera immediately
}
```

## LazyMotion

The LazyMotion component in Framer motion is used to dynamically load the motion engine improving performance by loading necessary animation features.

- LazyMotion help optimize performance by loading only required features.
- Useful in large applications where you want to keep the bundle size small
- Helps in code-splitting and reducing initial loading time.

```ts
import { domAnimation, domMax } from "motion/react";

interface LazyMotion {
  features: domAnimation | domMax | ("syncLoading" | "asyncLoading"); // Define a feature bundle to load sync or async
  // synchronous loading is useful for defining a subset of functionality for smaller bundlesize.
  // asynchronous loading can ensure your site is hydrated before loading in some or all function functionality.

  strict: true | false; // if true will throw an error if a motion component renders within a lazyMotion component.
}
```

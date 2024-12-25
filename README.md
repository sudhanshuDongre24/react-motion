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

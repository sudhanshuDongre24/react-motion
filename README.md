# Framer Motion

## Transitions

**Transition Setting**

- _Tween_ - Animations are set with a duration and an easing curve.
- _Spring_ - Animations are either physics-based or duration-based.

  - Physics-based spring animations are set via stiffness, damping and mass, and these incorporate the velocity of any existing gestures or animations for natural feedback.
  - Duration-based spring animations are set via a duration and bounce.

- _Interia_ - Animations decelerate a value based on its initial velocity, usually used to implement inertial scrolling.

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

# Let's start with the base

Imagine a physical platform - just as actors perform on a traditional stage, your **stage** is where you bring all your objects, lights, animation... and any other content together.

This stage is composed of a hierarchy of elements, each element of that hierarchy is called **primitive**, or **prim** for close friends!

They can be anything really - sometimes a piece of geometry, maybe a transform, other times a light...

::: tip
They are the individual bricks in our LEGO [introduction](../introduction/what.md) analogy.
:::

Example of a simple USD Graph within Houdini:
![simple graph](/images/coreConcepts/simpleGraph.png)

::: info
As you can see every single prims are assigned a **type**, that describes what they are.
:::

Some more dry examples:

#### Geometry

-   meshes
-   transforms
-   curves
-   points
-   nurbs

#### Shading

-   shading nodes (file, noise ...)
-   material node (principled shader)

#### Render Data

-   render settings,
-   render elements (called **Rendervars** in USD)

---

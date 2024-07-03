# Stage, Prims and Primvars

A USD file is structured as a hierarchy of primitives (let's call them *Prims* from now on). If you're coming from the little introduction, you've already seen a glimps of what a prim is (remember the lego bricks?)


This hierarchy is referred to as **Stage**

A USD file is composed of a hierarchy of elements, each element of that hierarchy is called a **Primitive**, or **Prim** for close friends! They can be anything really—sometimes a piece of geometry, maybe a transform, other times a light...

::: tip TIP :sparkles:
They are the individual bricks in our LEGO analogy.
:::

Some more dry examples:

#### Geometry

Meshes, transforms, curves, points, nurbs.

#### Shading

Shading nodes (file, noise ...), material node (principled shader)

#### Render Data

Render settings, render elements (called **Rendervars** in USD)

---

Example of a simple USD Graph within Houdini:

![simple graph](/images/introduction/simpleGraph.png)

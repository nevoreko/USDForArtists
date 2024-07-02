# What is USD?

## Overview

In simple terms USD is a common ground for artists to save and share 3D models, animation and scenes. It helps keep everything organised, and seamlessly integrate with softwares that supports USD.

::: tip TIP :sparkles:
Imagine you're building with LEGOs, each brick has its own shape, color, and position. In a 3D scene, those "LEGO bricks" are objects like characters, environments, and lights.

Saving a USD file is like sharing the instruction manual that tells the software exactly how everything fits together.
:::

## Structure

### A Hierarchy

A USD file is composed of a hierarchy of elements, each element of that hierarchy is called a **Primitive**, or **Prim** for close friends! They can be anything really—sometimes a piece of geometry, maybe a transform, other times a light...

::: tip TIP :sparkles:
They are the individual bricks in our LEGO analogy.
:::

Some more examples:

#### Geometry

Meshes, transforms, curves, points, nurbs.

#### Shading

Shading nodes (file, noise ...), material node (principled shader)

#### Render Data

Render settings, render elements (called **Rendervars** in USD)

---

Example of a simple USD Graph within Houdini:

![simple graph](../../images/introduction/simpleGraph.png)

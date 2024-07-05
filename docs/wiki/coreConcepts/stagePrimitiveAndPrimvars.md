# Stage and Primitives

Imagine a physical platform - just as actors perform on a traditional stage, your **stage** is where you bring all your objects, lights, animation... and any other content together.

This stage is composed of a hierarchy of elements, each element of that hierarchy is called **primitive**, or **prim** for close friends!

They can be anything really - sometimes it's a piece of geometry, maybe a camera, other times a light...

::: tip
They are the individual bricks in our LEGO [introduction](../introduction/what.md) analogy.
:::

An important aspect of a prim definition is that it's not their name that identifies them, but their **path**. In fact, you can name multiple prims exactly the same; as long as their paths are different, they will be considered **unique**.

Example of two unique `tree` prims:
```
/world/environment/garden/tree
/world/environment/street/tree
```
::: info
This notion is important as it will be at the center of multiple concepts, like **overrides**.
:::

Example of a simple USD Graph within Houdini:
![simple graph](/images/coreConcepts/simpleGraph.png)

As you can see every single prims are assigned a **type**, that describes *what* they are.

::: tip
If you're curious you can see Houdini's supported types in the `Primitive` node > `Primitive Type` parameter dropdown

![prim type ](/images/coreConcepts/primitiveTypes.png)
:::


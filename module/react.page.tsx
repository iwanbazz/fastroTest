import { Container } from "../container.ts";
import { React, Request } from "../deps.ts";

export const options = {
  // Define custom html template
  template: "react.template.html",
  // Define html title
  title: "React Demo",
};

// Define react props: https://reactjs.org/docs/components-and-props.html
export const props = async (request: Request) => {
  // You can access container and its type defined in deps.ts with this way
  const c: Container = request.container;
  return {
    params: request.getParams(),
    header: "Hello, Deno land!",
    repository: await c.repository,
  };
};

// Define component: https://reactjs.org/docs/components-and-props.html
const App = (props: { params: string[]; header: string }) => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h2>{props.header}</h2>
      <p>
        This page was created using Deno, Fastro and React's server-side
        rendering (SSR). Click to try the react hook.
      </p>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
      <p>You clicked me {count} times</p>
    </div>
  );
};

export default App;


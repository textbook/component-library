# @codeyourfuture/component-library

Example component library with an agile approach

Check out component examples at https://blog.jonrshar.pe/component-library.

## Usage

### Installation

This library is designed to be used in a [React] app (created using e.g. [CRA]).

It requires [styled-components] 💅 as a peer, so if you're not already using that you'll have to add it as well:

```shell
$ npm install @codeyourfuture/component-library styled-components
```

### Use

You can import the components you need and use them in your own as follows:

```jsx
import { Button } from "@codeyourfuture/component-library";

export default function MyComponent() {
	return <Button label="Click me!" onClick={() => alert("Hi there!")} />;
}
```

The CYF theme needs to be provided at the top level of your application:

```jsx
import { theme } from "@codeyourfuture/component-library";
import { ThemeProvider } from "styled-components";

export default function App() {
	return <ThemeProvider theme={theme}>{/* ... */}</ThemeProvider>;
}
```

## Development

### Requirements

- Supported Node versions are listed in the `"engines"` field in `package.json`.
- Supported React versions are listed in the `"peerDependencies"` field in `package.json`.
- The script to create an application for the E2E tests requires [bash] and [jq].

### Setup

[Clone] the repository (or a [fork] of it) locally and run `npm ci` to install all of the dependencies.

### Scripts

- `e2e`: Run [Cypress] tests to check that the package can be used in a fresh React app
- `lint`: Run the [ESLint] code style checking
  - `lint:fix`: Fix any linting violations with fixers
- `ship`: Run `lint`, then `test`, then `e2e`
- `storybook`: Run the local [Storybook] dev server
  - `storybook:build`: Build the static Storybook site
- `test`: Run the [Jest] unit tests

  - `test:cover`: Run the tests with coverage reporting

  [bash]: https://www.gnu.org/software/bash/
  [clone]: https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository
  [cra]: https://create-react-app.dev/
  [cypress]: https://www.cypress.io/
  [eslint]: https://eslint.org/
  [fork]: https://docs.github.com/en/get-started/quickstart/fork-a-repo
  [jest]: https://jestjs.io/
  [jq]: https://stedolan.github.io/jq/
  [react]: https://reactjs.org/
  [storybook]: https://storybook.js.org/
  [styled-components]: https://styled-components.com/

# @codeyourfuture/component-library

Example component library with an agile approach

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
  return (
    <Button label="Click me!" onClick={() => alert("Hi there!")} /> 
  );
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
  [Clone]: https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository
  [CRA]: https://create-react-app.dev/
  [Cypress]: https://www.cypress.io/
  [ESLint]: https://eslint.org/
  [fork]: https://docs.github.com/en/get-started/quickstart/fork-a-repo
  [Jest]: https://jestjs.io/
  [jq]: https://stedolan.github.io/jq/
  [React]: https://reactjs.org/
  [Storybook]: https://storybook.js.org/
  [styled-components]: https://styled-components.com/

#!/usr/bin/env bash

set -euo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$HERE/.."
TEST_DIR="$ROOT/test_app"

rm -rf "$TEST_DIR"

pushd "$ROOT"
	npm run build
	npm pack
	npx create-react-app@latest test_app
popd

pushd "$TEST_DIR"
	rm ./src/App.test.js
	npm i styled-components
	npm i "$ROOT/codeyourfuture-component-library-$(jq -r '.version' "$ROOT/package.json").tgz"
	cat <<-EOF > ./src/App.js
	import { Button } from "@codeyourfuture/component-library";
	import { useState } from "react";

	export default function App() {
	  const [message, setMessage] = useState();
	  return (
	    <>
	      <h1>Example application</h1>
	      <Button label="Click me!" onClick={() => setMessage("Hello, world!")} />
	      {message && <p>{message}</p>}
	    </>
	  )
	}
	EOF
	npm run build
popd

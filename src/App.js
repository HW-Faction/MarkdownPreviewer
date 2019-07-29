import React from "react";
import "./App.css";

import InputMarkup from "./components/InputMarkup";
import OutputMarkup from "./components/OutputMarkup";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    text:
      "# Welcome to my React Markdown Previewer!\n## My name is Aman Kaushik\n\n**Here's** some code, `<div></div>`, between 2 backticks.\n\nThere's also [links](https://www.freecodecamp.com)\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n > to denote the quoted text\n\n`<div>Hello</div>` , World in javascript\n\n<pre><code>console.log('Hello, World')</pre></code>\n\nHello, World in python\n\n<pre><code>print('Hello, World')</pre></code>\n\nHello, World in C\n\n```\nint main() {\n\tprintf(\"Hello, World\");\n\treturn 0;\n}\n```\t\n\n![React Logo w/ Text](https://goo.gl/Umyytc)"
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="column" id="left-column">
            <InputMarkup
              onChange={this.handleChange}
              textValue={this.state.text}
            />{" "}
            {/* render InputMarkup component, the text input box */}
          </div>
          <div className="column" id="right-column">
            <OutputMarkup markup={this.state.text} />{" "}
            {/* render OutputMarkup component, the marked up text onto the page */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

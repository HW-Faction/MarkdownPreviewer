import React from "react";
import marked from "marked";

export default class OutputMarkup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const output = marked(this.props.markup); // convert the input using the 'marked' module. Marked uses Github Flavored Markdown (GFM) by default. (Marked comes from the script tag in index.html. I could have installed via npm as an alternative)

    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: output }} id="preview">
          {/* this is how to render raw html in React. The output from marked dangerouslySetInnerHTML is a React thing to let you know it could allow XSS attacks*/}
        </div>
      </div>
    );
  }
}

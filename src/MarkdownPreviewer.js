import React from 'react';
import returnInitialMarkdown from './initialMarkdown';

class MarkdownPreviewer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            editor: returnInitialMarkdown(),
            preview: returnInitialMarkdown()
        }
        this.editorOnChange = this.editorOnChange.bind(this);
        this.renderPreview = this.renderPreview.bind(this);
    }

    editorOnChange(event){
        this.setState({
            editor: event.target.value,
            preview: event.target.value
        })
    }

    renderPreview(){
        document.getElementById("preview").dangerouslySetInnerHTML = {__html: window.marked.parse(this.state.preview)};
    }

    render(){
        return (
            <div class="row d-flex justify-content-center">
                <h3 class="text-center">Editor</h3>
                <textarea class="mb-5 col-sm-7" id="editor" onChange={this.editorOnChange} value={this.state.editor}></textarea>
                <h3 class="text-center">Previewer</h3>
                <div id="preview" dangerouslySetInnerHTML={{__html: window.marked.parse(this.state.preview)}} />
            </div>
        );
    }
}

export default MarkdownPreviewer;

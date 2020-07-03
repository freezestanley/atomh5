
import React from 'react';
import E from 'wangeditor';

class Editor extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: this.props.value,
    };
  }

  componentDidMount() {
    const elem = this.refs.editorElem;
    const editor = new E(elem);
    // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
    editor.customConfig.onchange = html => {
      this.setState({
        value: html,
      });
      this.props.onChange && this.props.onChange(html);
    };
    editor.create();
    editor.txt.html(this.state.value)
    if(this.props.disabled){
      console.log('this.props.disabled',this.props.disabled)
      editor.$textElem.attr('contenteditable', false);
    }
  }

  render() {
    return (
      <div className="App">

        {/* 将生成编辑器 */}
        <div ref="editorElem" style={{textAlign: 'left', width: 700, margin: '10px auto'}} />

      </div>
    );
  }
}
export default Editor;

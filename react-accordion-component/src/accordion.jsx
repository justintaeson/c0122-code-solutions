import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: null,
      detailsRevealed: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const clickedLanguage = event.target.innerText;
    if (this.state.detailsRevealed === false) {
      this.setState({
        language: clickedLanguage,
        detailsRevealed: true
      });
    } else {
      this.setState({
        language: clickedLanguage,
        detailsRevealed: false
      });
    }

  }

  render() {
    const language = this.props.data.map(language => {
      if (this.state.language === language.name && this.state.detailsRevealed === true) {
        return (
          <>
            <div className='topic-header' onClick={this.handleClick}>{language.name}</div>
            <div className='details'>{language.description}</div>
          </>
        );
      } else {
        return (
            <>
              <div className='topic-header' onClick={this.handleClick}>{language.name}</div>
            </>
        );
      }
    });
    return language;
  }
}

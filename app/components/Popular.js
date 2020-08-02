import React from 'react'

function LanguageNav({ selected, onChangeLanguage }) {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
    return (
        <ul className='flex-center'>
            {languages.map( (language) => ( 
                <li key={language}>
                    <button 
                        className="btn-clear nav-link"
                        style={language === selected ? {color: "#63ab7b"}: null}
                        onClick= {() => onChangeLanguage(language)}>
                        {language}
                    </button>
                </li>
            ))} 
        </ul>
    )
}

export default class Popular extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selectedLanguage: 'All'
        }
        this.changeLanguage = this.changeLanguage.bind(this)
    }

    changeLanguage(selectedLanguage) {
        this.setState({
            selectedLanguage
        })
    }
    render() {
        const { selectedLanguage } = this.state
    
        return (
          <React.Fragment>
            <LanguageNav
              selected={selectedLanguage}
              onChangeLanguage={this.changeLanguage}
            />
          </React.Fragment>
        )
      }
}
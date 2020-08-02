import React from 'react'

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
        const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
        return (
            <ul className='flex-center'>
                {languages.map( (language) => ( 
                    <li key={language}>
                        <button 
                            className="btn-clear nav-link"
                            style={language === this.state.selectedLanguage ? {color: "#63ab7b"}
                                                                            : null}
                            onClick= {() => this.changeLanguage(language)}>
                            {language}
                        </button>
                    </li>
                ))} 
            </ul>
        )
    }
}
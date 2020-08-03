import React from 'react'
import PropTypes from 'prop-types'
import { fetchPopularRepos } from '../utils/api'

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

LanguageNav.propTypes = {
    selected: PropTypes.string.isRequired,
    onChangeLanguage: PropTypes.func.isRequired
}

export default class Popular extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selectedLanguage: 'All',
            repos: null,
            error: null,
        }
        this.changeLanguage = this.changeLanguage.bind(this)
        this.isLoading = this.isLoading.bind(this)
    }

    componentDidMount() {
        this.changeLanguage(this.state.selectedLanguage)
    }

    changeLanguage(selectedLanguage) {
        this.setState({
            selectedLanguage,
            error: null,
            repos: null,
        })

        fetchPopularRepos(selectedLanguage)
            .then((repos) => this.setState({
                repos,
                error: null
            }))
            .catch(() => {
                console.warn('There was an erorr fetching repos: ', error)

                this.setState({ error: `There was an error fetching the repositories.`})
            })
    }

    isLoading() {
        return this.state.repos === null && this.state.error === null
    }
    render() {
        const { selectedLanguage, repos, error } = this.state
    
        return (
          <React.Fragment>
            <LanguageNav
              selected={selectedLanguage}
              onChangeLanguage={this.changeLanguage}
            />

            {this.isLoading() && <p>LOADING</p>}
            {error && <p>{error}</p>}
            {repos && <pre>{JSON.stringify(repos, null, 2)}</pre>}
          </React.Fragment>
        )
      }
}
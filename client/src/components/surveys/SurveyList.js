import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSurveys, deleteSurvey } from '../../actions'

class SurveyList extends Component {
    componentDidMount() {
        this.props.fetchSurveys()
    }

    renderSurveys() {
        return this.props.surveys.reverse().map((survey) => {
            return (
                <div className="card grey lighten-3" key={survey._id}>
                    <div className="card-content">
                        <span className="card-title">{survey.title}</span>
                        <p>{survey.body}</p>
                        <p className="right">
                            Sent On:{' '}
                            {new Date(survey.dateSent).toLocaleDateString()}
                        </p>
                    </div>
                    <div className="card-action">
                        <a>Yes: {survey.yes}</a>
                        <a>No: {survey.no}</a>
                        <button
                            onClick={() => this.props.deleteSurvey(survey._id)}
                            className="red darken-3 btn-small right"
                        >
                            Delete
                            <i className="material-icons left">delete</i>
                        </button>
                    </div>
                </div>
            )
        })
    }

    render() {
        return <div>{this.renderSurveys()}</div>
    }
}

function mapStateToProps({ surveys }) {
    console.log(surveys)
    return { surveys }
}

export default connect(mapStateToProps, { fetchSurveys, deleteSurvey })(
    SurveyList
)

// Write your code here

import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    isActiveIndex: 0,
  }

  leftClick = () => {
    const {isActiveIndex} = this.state

    if (isActiveIndex > 0) {
      this.setState(prevState => ({isActiveIndex: prevState.isActiveIndex - 1}))
    }
  }

  renderActiveReview = activeReview => {
    const {imgUrl, username, companyName, description} = activeReview

    return (
      <div className="review-container">
        <img src={imgUrl} alt={`${username}-avatar`} />
        <p className="desc">{username}</p>
        <p className="desc">{companyName}</p>
        <p className="desc">{description}</p>
      </div>
    )
  }

  rightClick = () => {
    const {isActiveIndex} = this.state
    const {reviewsData} = this.props

    if (isActiveIndex < reviewsData.length - 1) {
      this.setState(prevState => ({isActiveIndex: prevState.isActiveIndex + 1}))
    }
  }

  render() {
    const {reviewsData} = this.props
    const {isActiveIndex} = this.state
    const activeReview = reviewsData[isActiveIndex]
    console.log(activeReview)
    // const {imgUrl, username, companyName, description} = reviewsData

    return (
      <div className="bg-container">
        <h1 className="heading"> Reviews </h1>
        <div className="details">
          <button
            className="button"
            type="button"
            testid="leftArrow"
            onClick={this.leftClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left-arrow"
              className="leftArrow"
            />
          </button>

          {this.renderActiveReview(activeReview)}

          <button
            className="button"
            type="button"
            testid="rightArrow"
            onClick={this.rightClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right-arrow"
              className="rightArrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel

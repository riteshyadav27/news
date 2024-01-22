import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {


  static defaultProps = {
    country: "in",
    pageSize: 9,
    apiKey: "588344c11c6341a694bd8e565b92f90c",
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    apiKey: PropTypes.string,
    category: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
    document.title = `Taaza Khabar - ${this.capitalizeFirstLetter(this.props.category)}`
  }

  capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
  }

  handleprevclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    })
  }

  handlenextclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false
    })

  }

  render() {
    return (
      <div>
        <div className='container my-4'>
          <h3>Taaza Khabar : Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h3>
          {this.state.loading && <Spinner />}
          <div className='row my-3'>
            {!this.state.loading && this.state.articles.map((element) => {
              return <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title} description={element.description} imgsrc={element.urlToImage} newsurl={element.url} author={element.author} time={element.publishedAt} />
              </div>
            })}

          </div>

          <div className="d-flex justify-content-between">
            <button type="button" disabled={this.state.page === 1} onClick={this.handleprevclick} className="btn btn-dark">&laquo; Previous</button>
            <button type="button" disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handlenextclick} className="btn btn-dark">Next &raquo;</button>
          </div>
        </div>
      </div>
    )
  }
}

export default News

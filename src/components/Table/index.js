import React, { PureComponent, Component } from 'react'
import PropTypes from 'prop-types'
import Row from '../Row'
import Column from '../Column'
import Select from '../Select'
import SmartSearch from './SmartSearch'

export const getPagination = (totalRecord, viewPerPage = 20) => {
  const pageTotal = Math.ceil(totalRecord / viewPerPage)
  const value = []
  let _from = 1
  let _to = viewPerPage

  for (let i = 1; i <= pageTotal; i++) {
    if (i > 1) {
      _from += viewPerPage
      _to += viewPerPage
    }
    value.push({
      pageNumber: i,
      from: _from,
      to: _to
    })
  }
  return value
}

export const getDataByPage = (listData, pagination, currentPage) => {
  const currentView = pagination.filter(
    (item) => Number(currentPage) === item.pageNumber
  )[0]
  const result = []
  if (listData.length > 0) {
    for (let i = 1; i <= listData.length; i++) {
      if (i >= currentView.from && i <= currentView.to) {
        result.push(listData[i - 1])
      }
    }
  }

  return result
}

const getTotalRecord = (totalDataLength, totalRecord) => {
  return totalRecord || totalDataLength
}

export default class Table extends PureComponent {
  static propTypes = {
    dataList: PropTypes.array,
    elementHead: PropTypes.func,
    elementBody: PropTypes.func,
    elementTD: PropTypes.func,
    onChangePage: PropTypes.func,
    placeholderSearch: PropTypes.string,
    fieldsForSearch: PropTypes.object,
    pagination: PropTypes.string,
    viewPerPage: PropTypes.number,
    totalRecord: PropTypes.number
  }

  static defaultProps = {
    totalRecord: 0,
    viewPerPage: 20,
    dataList: [],
    elementHead: () => null,
    elementTD: () => null
  }

  state = {
    paginations: getPagination(
      getTotalRecord(this.props.dataList.length, this.props.totalRecord),
      this.props.viewPerPage
    ),
    currentPage: 1,
    dataFromSearch: undefined
  }

  componentWillReceiveProps (nextProps) {
    this.setState((prevState) => ({
      paginations: getPagination(
        getTotalRecord(nextProps.dataList.length, nextProps.totalRecord),
        nextProps.viewPerPage
      ),
      currentPage: this.handleCurrentPage(nextProps) ? 1 : prevState.currentPage
    }))
  }

  handleCurrentPage = (nextProps) => {
    if (nextProps.onChangePage) return false
    if (nextProps.dataList.length !== this.props.dataList.length) return true
    return false
  }

  search = (dataFromSearch) => {
    this.setState((prevState, props) => {
      let total = props.totalRecord || props.dataList.length
      if (dataFromSearch) total = dataFromSearch.length

      return {
        paginations: getPagination(total, props.viewPerPage),
        dataFromSearch,
        currentPage: 1
      }
    })
  }

  onChangePage = (page) => {
    this.setState(() => ({
      currentPage: page
    }))

    if (this.props.onChangePage) {
      const currentView = this.state.paginations.filter(
        (item) => Number(page) === item.pageNumber
      )[0]
      this.props.onChangePage(currentView)
    }
  }

  render () {
    const { paginations, currentPage, dataFromSearch } = this.state
    const {
      dataList,
      elementHead,
      elementBody,
      elementTD,
      pagination,
      totalRecord,
      onChangePage,
      fieldsForSearch,
      placeholderSearch
    } = this.props

    const datas = dataFromSearch || dataList
    const tableRows =
      pagination && !onChangePage
        ? getDataByPage(datas, paginations, currentPage)
        : datas

    const ttr = dataFromSearch ? dataFromSearch.length : totalRecord

    return (
      <div>
        {fieldsForSearch && (
          <Row>
            <Column D={6}>
              <SmartSearch
                dataList={dataList}
                fieldsForSearch={fieldsForSearch}
                placeholder={placeholderSearch}
                onKeySearch={this.search}
              />
              <br />
            </Column>
          </Row>
        )}
        {pagination &&
        pagination === 'top' && (
          <div>
            <PaginationGroup
              pagination={paginations}
              totalRecord={totalRecord}
              currentPage={currentPage}
              onChangePage={this.onChangePage}
            />
            <br />
          </div>
        )}
        <div className='table-responsive'>
          <table className='table is-bordered is-striped is-hoverable is-fullwidth'>
            <thead>{elementHead()}</thead>
            {elementBody ? (
              elementBody(tableRows)
            ) : (
              <tbody>{tableRows.map((data, i) => elementTD(data, i))}</tbody>
            )}
          </table>
        </div>
        {pagination &&
        pagination === 'bottom' && (
          <PaginationGroup
            pagination={paginations}
            totalRecord={ttr}
            currentPage={currentPage}
            onChangePage={this.onChangePage}
          />
        )}
      </div>
    )
  }
}

class PaginationGroup extends Component {
  static propTypes = {
    pagination: PropTypes.array,
    totalRecord: PropTypes.number,
    currentPage: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
    onChangePage: PropTypes.func
  }

  render () {
    const {
      totalRecord,
      currentPage,
      pagination = [],
      onChangePage
    } = this.props

    return (
      <Row justified>
        <Column D={6} middle>
          <b>จำนวนทั้งหมด:</b> {totalRecord} รายการ
        </Column>
        <Column D={3} middle>
          <div className='field has-addons is-pulled-right'>
            <Select
              inline
              onlyContain
              value={currentPage}
              onChange={(e) => onChangePage(e.target.value)}
              options={pagination.map((item) => ({
                label: item.pageNumber,
                value: item.pageNumber
              }))}
            />
            <p className='control'>
              <a className='button is-static'>of {pagination.length} Pages</a>
            </p>
          </div>
        </Column>
      </Row>
    )
  }
}

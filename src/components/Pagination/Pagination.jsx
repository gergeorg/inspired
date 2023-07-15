import { useSelector } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

import cn from 'classnames'

import { ReactComponent as ArrowLeftSVG } from '../../assets/arrowLeft.svg'
import { ReactComponent as ArrowRightSVG } from '../../assets/arrowRight.svg'

import style from './Pagination.module.scss'

export const Pagination = () => {
	const [pagePagination, setPagePagination] = useState('')
	const pathname = useLocation().pathname
	const { page, pages } = useSelector((state) => state.goods)

	useEffect(() => {
		setPagePagination(page)
	}, [page, setPagePagination])

	const handlePageChange = (newPage) => {
		setPagePagination(newPage)
	}

	const handlePrevPage = () => {
		if (pagePagination > 1) {
			handlePageChange(pagePagination - 1)
		}
	}

	const handleNextPage = () => {
		if (pagePagination < pages) {
			handlePageChange(pagePagination + 1)
		}
	}

	const renderPaginationItems = () => {
		const paginstionItems = []

		let startPage = pagePagination === pages && pages >= 3 ? pagePagination - 2 : Math.max(1, pagePagination - 1)

		let endPage = Math.min(startPage + 2, pages)

		for (let i = startPage; i <= endPage; i++) {
			paginstionItems.push(
				<li key={i} className={style.item}>
					<NavLink
						className={cn(style.link, i === pagePagination ?? style.linkActive)}
						to={`${pathname}?page=${i}`}
						onClick={() => handlePageChange(i)}
					>
						{i}
					</NavLink>
				</li>,
			)
		}

		return paginstionItems
	}

	return (
		pages > 1 && (
			<div className={style.pagination}>
				<button className={style.arrow} disabled={pagePagination <= 2} type='button' onClick={handlePrevPage}>
					<ArrowLeftSVG />
				</button>

				<ul className={style.list}>{renderPaginationItems()}</ul>

				<button
					className={style.arrow}
					disabled={pagePagination >= pages - 1 || pages <= 3}
					type='button'
					onClick={handleNextPage}
				>
					<ArrowRightSVG />
				</button>
			</div>
		)
	)
}

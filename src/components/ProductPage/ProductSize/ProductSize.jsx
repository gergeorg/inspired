import style from './ProductSize.module.scss'

export const ProductSize = ({ size, selectedSize, handleSizeChange }) => (
	<div className={style.size}>
		<p className={style.title}>Размер</p>
		<div className={style.list}>
			{size?.map((item) => (
				<label key={item} className={style.item}>
					<input
						checked={selectedSize === item}
						className={style.input}
						name='size'
						type='radio'
						value={item}
						onChange={handleSizeChange}
					/>
					<span className={style.check}>{item}</span>
				</label>
			))}
		</div>
	</div>
)

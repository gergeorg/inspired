import React from 'react'
import ContentLoader from 'react-content-loader'

export const Skeleton = (props) => (
	<ContentLoader
		speed={2}
		width={280}
		height={433}
		viewBox='0 0 250 433'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
		{...props}
	>
		<rect x='0' y='320' rx='2' ry='2' width='200' height='20' />
		<rect x='0' y='350' rx='2' ry='2' width='100' height='20' />
		<rect x='0' y='0' rx='2' ry='2' width='280' height='300' />
		<circle cx='370' cy='418' r='19' />
		<circle cx='20' cy='395' r='15' />
		<circle cx='60' cy='395' r='15' />
		<circle cx='100' cy='395' r='15' />
		<circle cx='230' cy='390' r='20' />
	</ContentLoader>
)
